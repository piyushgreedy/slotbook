(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[27,154,155,320],{118:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),s=n(7),r=n.n(s),o=n(8),c=n.n(o),l=n(9),u=n.n(l),d=n(10),h=n.n(d),m=n(1),p=n(0),f=n.n(p),v=n(248),b=n.n(v),g=n(381),k=n(382),y=(n(762),function(e){function t(e){var n;return i()(this,t),(n=c()(this,u()(t).call(this,e))).items=Object(m.get)(e,"data.contentData",[]),n.state={desktopMode:window.innerWidth>=1025,currentSlideIdx:0},n}return h()(t,e),r()(t,[{key:"componentDidMount",value:function(){this.attachWindowResizeListener(),this.disableSlideContainerFocus(),this.disableTabbingDots()}},{key:"attachWindowResizeListener",value:function(){var e=this;window.addEventListener("resize",function(t){e.setState({desktopMode:window.innerWidth>=1025})})}},{key:"disableSlideContainerFocus",value:function(){Object(m.each)(document.querySelectorAll(".slick-slide"),function(e){e.tabIndex="-1"})}},{key:"disableTabbingDots",value:function(){var e=this;if(null!=this.carousel.querySelector(".slick-dots"))var t=setInterval(function(){var n=e.carousel.querySelector(".slick-dots");n&&(Object(m.each)(n.querySelectorAll("button"),function(e){e.dataset.noFocus=!0,e.tabIndex=-1}),clearInterval(t))},300)}},{key:"updateCurrentSlideIdx",value:function(e){this.setState({currentSlideIdx:e})}},{key:"render",value:function(){var e=this,t=this.items.length>1,n=Object(m.get)(this.props.layout,"settings.noInfo"),a=Object(m.get)(this.props.layout,"settings.loop",!1),i=1e3*Object(m.get)(this.props.layout,"settings.timeDelay",4);return f.a.createElement("div",{ref:function(t){return e.carousel=t},className:"event-carousel "+(Object(m.get)(this.props,"layout.settings.isHidden")?"hide":"")},this.items.length>0&&f.a.createElement(b.a,{ref:function(t){return e.slider=t},dots:t,infinite:a,arrows:t,accessibility:!1,afterChange:this.updateCurrentSlideIdx.bind(this),prevArrow:f.a.createElement(g.default,{hide:0===this.state.currentSlideIdx}),nextArrow:f.a.createElement(g.default,{hide:this.state.currentSlideIdx===this.items.length-1}),autoplay:t,speed:750,centerMode:this.state.desktopMode&&!0,cssEase:"ease-in-out",slidesToShow:1,centerPadding:this.state.desktopMode&&"300px",autoplaySpeed:i},this.items.map(function(e,t){return f.a.createElement("div",{key:t},f.a.createElement(k.default,{index:t,item:e,noInfo:n}))})))}}]),t}(f.a.Component));t.default=y},381:function(e,t,n){"use strict";n.r(t);var a=n(32),i=n.n(a),s=n(6),r=n.n(s),o=n(7),c=n.n(o),l=n(8),u=n.n(l),d=n(9),h=n.n(d),m=n(10),p=n.n(m),f=n(0),v=n.n(f),b=function(e){function t(){return r()(this,t),u()(this,h()(t).apply(this,arguments))}return p()(t,e),c()(t,[{key:"getLabel",value:function(){return"".concat(this.props.className.includes("prev")?"Previous":"Next"," event slide")}},{key:"render",value:function(){return v.a.createElement("button",i()({},this.props,{style:this.style,className:this.props.className+(this.props.hide?" hide":""),"aria-label":this.getLabel()}),v.a.createElement("div",{className:"focus-box"}))}}]),t}(v.a.PureComponent);t.default=b},382:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),s=n(7),r=n.n(s),o=n(8),c=n.n(o),l=n(9),u=n.n(l),d=n(3),h=n.n(d),m=n(10),p=n.n(m),f=n(0),v=n.n(f),b=n(1),g=function(e){function t(e){var n;return i()(this,t),(n=c()(this,u()(t).call(this,e))).onFocus=n.onFocus.bind(h()(n)),n}return p()(t,e),r()(t,[{key:"getCenteredBgImgStyle",value:function(e){return{background:"url(".concat(e,"?impolicy=resize&w=900&h=500)"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}},{key:"onFocus",value:function(e){e.currentTarget.focus(),this.props.onFocus(this.props.index)}},{key:"render",value:function(){var e=this.props.item.gist,t=Object(b.get)(e.imageGist,"_16x9",e.landscapeImageUrl);return v.a.createElement("div",{className:"event-carousel-item",onClick:function(){return window.location=e.permalink}},v.a.createElement("div",{className:"image-event",style:this.getCenteredBgImgStyle(t)}),v.a.createElement("div",{className:"background-black"}),!this.props.noInfo&&v.a.createElement("div",{className:"foot"},v.a.createElement("div",{className:"text"},v.a.createElement("div",{className:"title"},e.title),v.a.createElement("div",{className:"description"},e.description)),v.a.createElement("div",{className:"buttons"},v.a.createElement("a",{"aria-label":"Info for ".concat(e.title),onFocus:this.onFocus,className:"info",href:e.permalink},"Info"),"EVENT"===e.contentType&&e.ticketUrl&&v.a.createElement("a",{"aria-label":"Tickets for ".concat(e.title),onFocus:this.onFocus,className:"tickets cta",href:e.ticketUrl,target:"_blank"},"Tickets"))))}}]),t}(v.a.PureComponent);t.default=g},762:function(e,t,n){}}]);
//# sourceMappingURL=modules-Carousel-Event.30d46680.chunk.js.map