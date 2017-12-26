seajs.config({
  	alias : {
    	'zepto' : './zepto',
    	'template' : './template'
  	}
});
define(function (require,exports,module){
	var $ = require('zepto');
	var template = require('template');
	var datas = {
		'title': '',
		'desc': '',
		'cover': '',
		'mp3' : '',
		'scene' : [{  //************ 页面1 ************
			'class' : 'boxes current_1',
			'background' : '#101018',
			'doms' : [{
				'tag':'div',
				'class':'animate',
				'style':{
					'width': '100%',
					'height': '30%',
					'background': 'url(./image/page1_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate':{
					'name': 'zoomIn',
					'duration': 1,
					'method': 'ease',
					'delay': 0,
					'count': 1,
					'direction': 'both'
				}
			},{
                'tag':'div',
                'class':'ani animate part_1',
                'style':{
                    'width': '20%',
                    'height': '18.1%',
                    'background': 'url(./image/page1_01.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate':{
                    'name': 'fadeInLeft',
                    'duration': 0.5,
                    'method': 'linear',
                    'delay': 0.5,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag':'div',
                'class':'ani animate part_right_1',
                'style':{
                    'width': '80%',
                    'height': '18.1%',
                    'background': 'url(./image/page1_text_01.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate':{
                    'name': 'fadeInRight',
                    'duration': 0.5,
                    'method': 'linear',
                    'delay': 0.5,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag':'div',
                'class':'ani animate part_2',
                'style':{
                    'width': '20%',
                    'height': '18.1%',
                    'background': 'url(./image/page1_02.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate':{
                    'name': 'fadeInLeft',
                    'duration': 0.5,
                    'method': 'linear',
                    'delay': 1,
                    'count': 1,
                    'direction': 'both'
                }
            }, {
                'tag':'div',
                'class':'ani animate part_right_2',
                'style':{
                    'width': '80%',
                    'height': '18.1%',
                    'background': 'url(./image/page1_text_02.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate':{
                    'name': 'fadeInRight',
                    'duration': 0.5,
                    'method': 'linear',
                    'delay': 1,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag':'div',
                'class':'ani animate part_3',
                'style':{
                    'width': '20%',
                    'height': '18.1%',
                    'background': 'url(./image/page1_03.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate':{
                    'name': 'fadeInLeft',
                    'duration': 0.5,
                    'method': 'linear',
                    'delay': 1.5,
                    'count': 1,
                    'direction': 'both'
                }
            }, {
                'tag':'div',
                'class':'ani animate part_right_3',
                'style':{
                    'width': '80%',
                    'height': '18.1%',
                    'background': 'url(./image/page1_text_03.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate':{
                    'name': 'fadeInRight',
                    'duration': 0.5,
                    'method': 'linear',
                    'delay': 1.5,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag':'div',
                'class':'ani animate part_4',
                'style':{
                    'width': '20%',
                    'height': '18.1%',
                    'background': 'url(./image/page1_04.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate':{
                    'name': 'fadeInLeft',
                    'duration': 0.5,
                    'method': 'linear',
                    'delay': 2,
                    'count': 1,
                    'direction': 'both'
                }
            }, {
                'tag':'div',
                'class':'ani animate part_right_4',
                'style':{
                    'width': '80%',
                    'height': '18.1%',
                    'background': 'url(./image/page1_text_04.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate':{
                    'name': 'fadeInRight',
                    'duration': 0.5,
                    'method': 'linear',
                    'delay': 2,
                    'count': 1,
                    'direction': 'both'
                }
            }]
		},{   //************ 页面2 ************
			'class' : 'boxes current_2',
			'background' : '#131836',
			'doms' : [{
                'tag' : 'div',
                'class' : 'ani animate bj',
                'style' : {
                    'width': '100%',
                    'height': '68%',
                    'background': 'url(./image/page2_bj.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': '',
                    'duration': 0,
                    'method': 'ease',
                    'delay': 0,
                    'count': 0,
                    'direction': 'both'
                }
            },{
				'tag' : 'div',
				'class' : 'animate',
				'style' : {
					'width': '100%',
					'height': '32%',
                    'background': 'url(./image/page2_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'rubberBand',
					'duration': 1,
					'method': 'ease',
					'delay': 0.5,
					'count': 1,
					'direction': 'both'
				}
			},{
                'tag' : 'div',
                'class' : 'ani animate part_1',
                'style' : {
                    'width': '32%',
                    'height': '8.8%',
                    'background': 'url(./image/page2_01.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'flipInX',
                    'duration': 2,
                    'method': 'ease',
                    'delay': 0.8,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag' : 'div',
                'class' : 'ani animate part_2',
                'style' : {
                    'width': '32%',
                    'height': '8.8%',
                    'background': 'url(./image/page2_02.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'flipInX',
                    'duration': 2,
                    'method': 'ease',
                    'delay': 1,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag' : 'div',
                'class' : 'ani animate part_3',
                'style' : {
                    'width': '32%',
                    'height': '8.8%',
                    'background': 'url(./image/page2_03.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'flipInX',
                    'duration': 2,
                    'method': 'ease',
                    'delay': 1.2,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag' : 'div',
                'class' : 'ani animate part_4',
                'style' : {
                    'width': '32%',
                    'height': '8.8%',
                    'background': 'url(./image/page2_04.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'flipInX',
                    'duration': 2,
                    'method': 'ease',
                    'delay': 1.4,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag' : 'div',
                'class' : 'ani animate part_5',
                'style' : {
                    'width': '32%',
                    'height': '8.8%',
                    'background': 'url(./image/page2_05.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'flipInX',
                    'duration': 2,
                    'method': 'ease',
                    'delay': 1.6,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag' : 'div',
                'class' : 'ani animate part_6',
                'style' : {
                    'width': '32%',
                    'height': '8.8%',
                    'background': 'url(./image/page2_06.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'flipInX',
                    'duration': 2,
                    'method': 'ease',
                    'delay': 1.8,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag' : 'div',
                'class' : 'ani animate part_7',
                'style' : {
                    'width': '32%',
                    'height': '8.8%',
                    'background': 'url(./image/page2_07.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'flipInX',
                    'duration': 2,
                    'method': 'ease',
                    'delay': 2,
                    'count': 1,
                    'direction': 'both'
                }
            }]
		},{   //************ 页面3 ************
			'class' : 'boxes current_3',
			'background' : '#1F2231',
			'doms' : [{
                'tag' : 'div',
                'class' : 'ani animate bj',
                'style' : {
                    'width': '100%',
                    'height': '74%',
                    'background': 'url(./image/page3_bj.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': '',
                    'duration': 0,
                    'method': 'ease',
                    'delay': 0,
                    'count': 0,
                    'direction': 'both'
                }
            },{
				'tag' : 'div',
				'class' : 'animate',
				'style' : {
					'width': '100%',
					'height': '32%',
                    'background': 'url(./image/page3_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'rollIn',
					'duration': 1,
					'method': 'ease',
					'delay': 0.2,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_1',
				'style' : {
					'width': '54%',
					'height': '16%',
                    'background': 'url(./image/page3_01.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'rotateInUpLeft',
					'duration': 1,
					'method': 'ease',
					'delay': 1,
					'count': 1,
					'direction': 'both'
				}
			},{
                'tag' : 'div',
                'class' : 'ani animate part_2',
                'style' : {
                    'width': '54%',
                    'height': '18%',
                    'background': 'url(./image/page3_02.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'rotateInDownRight',
                    'duration': 1,
                    'method': 'ease',
                    'delay': 1.5,
                    'count': 1,
                    'direction': 'both'
                }
            },{
                'tag' : 'div',
                'class' : 'ani animate part_3',
                'style' : {
                    'width': '54%',
                    'height': '20%',
                    'background': 'url(./image/page3_03.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': 'bounceInUp',
                    'duration': 1,
                    'method': 'ease',
                    'delay': 2,
                    'count': 1,
                    'direction': 'both'
                }
            }]
		},{  //************ 页面4 ************
			'class' : 'boxes current_4',
			'background' : '#101018',
			'doms' : [{
				'tag' : 'div',
				'class' : 'animate',
				'style' : {
					'width': '100%',
					'height': '38%',
                    'background': 'url(./image/page4_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'wobble',
					'duration': 1,
					'method': 'ease',
					'delay': 0.2,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_1',
				'style' : {
					'width': '90%',
					'height': '23%',
                    'background': 'url(./image/page4_01.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'lightSpeedIn',
					'duration': 1,
					'method': 'ease',
					'delay': 1,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_2',
				'style' : {
					'width': '90%',
					'height': '23%',
                    'background': 'url(./image/page4_02.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'lightSpeedIn',
					'duration': 1,
					'method': 'ease',
					'delay': 1.5,
					'count': 1,
					'direction': 'both'
				}
			}]
		},{  //************ 页面5 ***********
			'class' : 'boxes current_5',
			'background' : '#050716',
			'doms' : [{
                'tag' : 'div',
                'class' : 'ani animate bj',
                'style' : {
                    'width': '76%',
                    'height': '42%',
                    'background': 'url(./image/page5_bj.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': '',
                    'duration': 0,
                    'method': 'ease',
                    'delay': 0,
                    'count': 0,
                    'direction': 'both'
                }
            },{
				'tag' : 'div',
				'class' : 'animate',
				'style' : {
					'width': '100%',
					'height': '35%',
                    'background': 'url(./image/page5_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'zoomInDown',
					'duration': 1,
					'method': 'ease',
					'delay': 0.2,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani brs animate part_1',
				'style' : {
					'width': '5.8rem',
					'height': '5.8rem',
                    'background': 'url(./image/page5_store.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'zoomIn',
					'duration': 1,
					'method': 'ease',
					'delay': 1,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani brs animate part_2',
				'style' : {
					'width': '5.8rem',
					'height': '5.8rem',
                    'background': 'url(./image/page5_login.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'zoomIn',
					'duration': 1,
					'method': 'ease',
					'delay': 1.2,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani brs animate part_3',
				'style' : {
					'width': '5.8rem',
					'height': '5.8rem',
                    'background': 'url(./image/page5_merchant.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'zoomIn',
					'duration': 1,
					'method': 'ease',
					'delay': 1.6,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani brs animate part_4',
				'style' : {
					'width': '5.8rem',
					'height': '5.8rem',
                    'background': 'url(./image/page5_mall.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'zoomIn',
					'duration': 1,
					'method': 'ease',
					'delay': 2,
					'count': 1,
					'direction': 'both'
				}
			}]
		},{  //************ 页面6 ***********
			'class' : 'boxes current_6',
			'background' : '#181736',
			'doms' : [{
				'tag' : 'div',
				'class' : 'animate',
				'style' : {
					'width': '100%',
					'height': '50%',
                    'background': 'url(./image/page6_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'bounceInDown',
					'duration': 1,
					'method': 'ease',
					'delay': 0.2,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_1',
				'style' : {
					'width': '100%',
					'height': '74%',
                    'background': 'url(./image/page6_part.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'bounceInUp',
					'duration': 1,
					'method': 'ease',
					'delay': 1,
					'count': 1,
					'direction': 'both'
				}
			}]
		},{  //************ 页面7 ***********
			'class' : 'boxes current_7',
			'background' : '#171723',
			'doms' : [{
				'tag' : 'div',
				'class' : 'animate',
				'style' : {
					'width': '100%',
					'height': '27%',
                    'background': 'url(./image/page7_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'flash',
					'duration': 2,
					'method': 'ease',
					'delay': 0.2,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'animate part_1',
				'style' : {
					'width': '100%',
					'height': '74%',
                    'background': 'url(./image/page7_part.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'zoomIn',
					'duration': 1,
					'method': 'ease',
					'delay': 1,
					'count': 1,
					'direction': 'both'
				}
			}]
		},{   //************ 页面8 ***********
			'class' : 'boxes current_8',
			'background' : '#0E121D',
			'doms' : [{
                'tag' : 'div',
                'class' : 'ani animate bj',
                'style' : {
                    'width': '100%',
                    'height': '66%',
                    'background': 'url(./image/page8_bj.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': '',
                    'duration': 0,
                    'method': 'ease',
                    'delay': 0,
                    'count': 0,
                    'direction': 'both'
                }
            },{
				'tag' : 'div',
				'class' : 'animate',
				'style' : {
					'width': '100%',
					'height': '34%',
                    'background': 'url(./image/page8_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'bounceIn',
					'duration': 1.5,
					'method': 'ease',
					'delay': 0.2,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_1',
				'style' : {
					'width': '30%',
					'height': '10%',
                    'background': 'url(./image/page8_text.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'zoomIn',
					'duration': 1,
					'method': 'ease',
					'delay': 1,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_2',
				'style' : {
					'width': '42%',
					'height': '49%',
                    'background': 'url(./image/page8_phone.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'zoomInUp',
					'duration': 1,
					'method': 'ease',
					'delay': 1,
					'count': 1,
					'direction': 'both'
				}
			}]
		},{  //************ 页面9 ***********
			'class' : 'boxes current_9',
			'background' : '#141720',
			'doms' : [{
                'tag' : 'div',
                'class' : 'ani animate bj',
                'style' : {
                    'width': '100%',
                    'height': '70%',
                    'background': 'url(./image/page9_bj.png) no-repeat',
                    'background-size':'100% 100%',
                    'transfrom': 'none'
                },
                'animate': {
                    'name': '',
                    'duration': 0,
                    'method': 'ease',
                    'delay': 0,
                    'count': 0,
                    'direction': 'both'
                }
            },{
				'tag' : 'div',
				'class' : 'animate',
				'style' : {
					'width': '100%',
					'height': '26%',
                    'background': 'url(./image/page9_head.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'slideDown',
					'duration': 2,
					'method': 'ease',
					'delay': 0.2,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_1',
				'style' : {
					'width': '30%',
					'height': '35%',
                    'background': 'url(./image/page9_phone.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'twisterInUp',
					'duration': 2,
					'method': 'ease',
					'delay': 0.5,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_2',
				'style' : {
					'width': '28%',
					'height': '16%',
                    'background': 'url(./image/page9_qrcode.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'puffIn',
					'duration': 2,
					'method': 'ease',
					'delay': 1.5,
					'count': 1,
					'direction': 'both'
				}
			},{
				'tag' : 'div',
				'class' : 'ani animate part_3',
				'style' : {
					'width': '86%',
					'height': '16%',
                    'background': 'url(./image/page9_download.png) no-repeat',
                    'background-size':'100% 100%',
					'transfrom': 'none'
				},
				'animate': {
					'name': 'shrink',
					'duration': 1,
					'method': 'ease',
					'delay': 2,
					'count': 1,
					'direction': 'both'
				}
			}]
		}]
	};
	var html = template.show(datas);
	var len = datas['scene'].length;
	setTimeout(function (){
		$('#loadings').remove();
		$('body').prepend(html);
		template.default($,0);
		template.actions($,len);
	},1000);
});

/*,{
    'tag':'a',
        'class':'ani animate',
        'url': 'https://www.baidu.com',
        'style':{
        'width': '20%',
            'height': '10%',
            'background': '#f00',
            'transfrom': 'none'
    },
    'animate':{
        'name': 'fadeInLeft',
            'duration': 0.5,
            'method': 'linear',
            'delay': 0.5,
            'count': 1,
            'direction': 'both'
    }
}*/