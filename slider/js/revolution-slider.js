
				/******************************************
					-	PREPARE PLACEHOLDER FOR SLIDER	-
				******************************************/			
				
                var tpj = jQuery;

                var revapi8;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_1_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1_1");
                    } else {
                        revapi8 = tpj("#rev_slider_1_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation:"rs-plugin/js/",
                            sliderLayout: "fullwidth",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "on",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "horizontal",
                                    drag_block_vertical: false
                                },
                                arrows: {
                                    style: "uranus",
                                    enable: true,
                                    hide_onmobile: true,
                                    hide_onleave: true,
                                    tmp: '',
                                    left: {
                                        h_align: "left",
                                        v_align: "center",
                                        h_offset: 10,
                                        v_offset: 0
                                    },
                                    right: {
                                        h_align: "right",
                                        v_align: "center",
                                        h_offset: 10,
                                        v_offset: 0
                                    }
                                },
                                bullets: {
                                    enable: true,
                                    hide_onmobile: true,
                                    style: "uranus",
                                    hide_onleave: false,
                                    direction: "horizontal",
                                    h_align: "center",
                                    v_align: "bottom",
                                    h_offset: 20,
                                    v_offset: 30,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-inner"></span>'
                                }
                            },
							visibilityLevels:[1240,1024,778,480],
							gridwidth:1400,
							gridheight:800,
							disableProgressBar: "on",
							shadow:0,
							spinner:"spinner2",
							lazyType:"none",							
							stopLoop:"off",
							stopAfterLoops:-1,
							stopAtSlide:-1,
							shuffle:"off",
							autoHeight:"off",
							disableProgressBar:"on",
							hideThumbsOnMobile:"off",
							hideSliderAtLimit:0,
							hideCaptionAtLimit:0,
							hideAllCaptionAtLilmit:0,
							debugMode:false,
							parallax: {
								type:"mouse",
								origo:"enterpoint",
								speed:400,
								levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
								type:"mouse",
							},							
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                }); /*ready*/				