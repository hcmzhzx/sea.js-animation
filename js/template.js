define(function (require,exports,module){
    exports.show = function (data){
        var scene = data['scene'] || null;
        var _html = data['mp3'] && data['mp3'] != '' ? '<a href="javascript:;" id="music" class="rotate"><audio src="' + data['mp3'] + '" autoplay="false" loop="" id="mp3"></audio></a><div id="box">' : '<div id="box">';
        for(var j in scene){
            _html += '<section class="' + scene[j].class + '" style="background:' + scene[j].background + ';background-size:cover;">';
            if(scene[j]['doms']){
                var doms = scene[j]['doms'];
                for(var k in doms){
                    var style = doms[k].style,cssText = '';
                    for(var i in style){
                        cssText += i + ':' + style[i] + ';';
                    }
                    if(doms[k].animate){
                        var animate = doms[k].animate;
                        cssText += 'animation: ' + animate.name + ' ' + animate.duration + 's ' + animate.method + ' ' + animate.delay + 's ' + animate.count + ' ' + animate.direction;
                    }
                    switch(doms[k].tag){
                        case 'div' :
                            _html += '<div class="' + doms[k].class + '" data-animate="' + cssText + '"></div>';
                            break;
                        case 'img' :
                            _html += '<img class="' + doms[k].class + '" data-animate="' + cssText + '" />';
                            break;
                        case 'a' :
                            _html += '<a class="' + doms[k].class + '" href="' + doms[k].url + '" data-animate="' + cssText + '"></a>';
                            break;
                    }
                }
            }
            _html += '</section>';
        }
        _html += '<div class="swiper-up"></div>';
        _html += '</div>';
        return _html;
    };
    exports.default = function ($,start){
        var _object = $('.boxes').eq(start);
        var ih = $('body').offset().height;
        $('#music').click(function (){
            var _mp3 = document.getElementById('mp3');
            if($(this).hasClass('rotate')){
                _mp3.pause();
            }else{
                _mp3.play();
            }
            $(this).toggleClass('rotate');
        });
        _object.css({'-webkit-transform':'translateY(0px)'}).siblings().css({'-webkit-transition':'none','-webkit-transform':'translateY(' + ih + 'px)'});
        _object.find('.animate').each(function (){
            $(this).attr('style',$(this).attr('data-animate'));
        });
    }
    exports.actions = function ($,len){
        var ih = $('#box').offset().height;
        var start = 0,startY = null,moveY = null,decoration = '';
        $('#box').bind('touchstart',function (ev){
            ev.preventDefault();
            var url = ev.target.getAttribute('href');
            if(url) window.location.href = url;
            decoration = '';
            startY = ev.touches[0].clientY;
        },false);
        $('#box').bind('touchmove',function (ev){
            moveY = ev.touches[0].clientY;

            decoration = Math.abs(startY - moveY) > 10 ? (startY - moveY > 10 ? 'up' : 'down') : '';

            if(decoration == 'up'){
                if(!$('.boxes').eq(start + 1).hasClass('current')){
                    $('.boxes').eq(start).addClass('prev').siblings().removeClass('prev');
                    $('.boxes').eq(start + 1).addClass('current').siblings().removeClass('current');
                }
                $('.boxes').eq(start + 1).css({'-webkit-transform':'translateY(' + (ih - startY + moveY) + 'px)'});
            }else{
                if(start != 0){
                    if(!$('.boxes').eq(start - 1).hasClass('current')){
                        $('.boxes').eq(start).addClass('prev').siblings().removeClass('prev');
                        $('.boxes').eq(start - 1).addClass('current').siblings().removeClass('current');
                    }
                    $('.boxes').eq(start - 1).css({'-webkit-transform':'translateY(' + (-ih + moveY - startY) + 'px)'});
                }
            }
        },false);
        $('#box').bind('touchend',function (ev){
            if(decoration == '') return;
            if(decoration == 'up'){
                $('.boxes').eq(start + 1).css({'-webkit-transition':'transform 0.3s linear','-webkit-transform':'translateY(0px)'}).siblings().css({'-webkit-transition':'none'});
                $('.boxes').eq(start).find('.animate').attr('style',null);
                $('.boxes').eq(start + 1).find('.animate').each(function (){
                    $(this).attr('style',$(this).attr('data-animate'));
                });
                start >= len-2 ? start = -1 : start++;
            }else{
                if(start != 0){
                    $('.boxes').eq(start - 1).css({'-webkit-transition':'transform 0.3s linear','-webkit-transform':'translateY(0px)'}).siblings().css({'-webkit-transition':'none'});
                    $('.boxes').eq(start).find('.animate').attr('style',null);
                    $('.boxes').eq(start - 1).find('.animate').each(function (){
                        $(this).attr('style',$(this).attr('data-animate'));
                    });
                    start--;
                }
            }
        },false);
    }
});