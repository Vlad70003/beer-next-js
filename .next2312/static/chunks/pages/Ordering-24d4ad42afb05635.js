(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[712],{485:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Ordering",function(){return t(9888)}])},2606:function(e,n,t){"use strict";t.d(n,{Q:function(){return a}});var r=t(5893),i=(t(7294),t(8231)),o=t.n(i),a=function(e){var n=e.text,t={padding:e.padding||"0px",fontSize:e.fontSize||"24px"};return(0,r.jsx)("h4",{className:o().subtitle,style:t,children:n})}},6069:function(e,n,t){"use strict";t.d(n,{G:function(){return c}});var r=t(5893),i=t(5315),o=t.n(i),a=t(1664),s=t(7481),l=t(5714),c=function(e){var n=e.children,t=e.title,i=e.bonus,c=e.price;return(0,r.jsxs)("section",{className:o().additionalPage,children:[(0,r.jsxs)("header",{className:o().additionalPage__contscts__header,children:[(0,r.jsx)("h2",{className:o().additionalPage__contscts__header__title,children:t}),(0,r.jsxs)("div",{className:o().additionalPage__contscts__header__wrapper,children:[i&&(0,r.jsx)(s.r,{}),c&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.default,{href:"/Ordering",children:(0,r.jsx)("a",{children:(0,r.jsx)(l.l,{})})})})]})]}),n]})}},9888:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return te}});var r=t(5893),i=t(7294),o=t(8939),a=t.n(o),s=t(6069),l=t(2606),c=t(7462),u=t(4942),d=t(91);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=t(5671),_=t(3144),m=t(2531);function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var v=t(1002);function x(e,n){if(n&&("object"===(0,v.Z)(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=g(e);if(n){var i=g(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return x(this,t)}}var k=t(4184),w=t.n(k),y=function(e){(0,m.Z)(t,e);var n=b(t);function t(e){var r;(0,f.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,i=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),i&&i({target:h(h({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var i="checked"in e?e.checked:e.defaultChecked;return r.state={checked:i},r}return(0,_.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,r=n.className,o=n.style,a=n.name,s=n.id,l=n.type,p=n.disabled,h=n.readOnly,f=n.tabIndex,_=n.onClick,m=n.onFocus,g=n.onBlur,v=n.onKeyDown,x=n.onKeyPress,b=n.onKeyUp,k=n.autoFocus,y=n.value,j=n.required,O=(0,d.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),C=Object.keys(O).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=O[n]),e}),{}),S=this.state.checked,P=w()(t,r,(e={},(0,u.Z)(e,"".concat(t,"-checked"),S),(0,u.Z)(e,"".concat(t,"-disabled"),p),e));return i.createElement("span",{className:P,style:o},i.createElement("input",(0,c.Z)({name:a,id:s,type:l,required:j,readOnly:h,disabled:p,tabIndex:f,className:"".concat(t,"-input"),checked:!!S,onClick:_,onFocus:m,onBlur:g,onKeyUp:b,onKeyDown:v,onKeyPress:x,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:y},C)),i.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?h(h({},n),{},{checked:e.checked}):null}}]),t}(i.Component);y.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var j=y,O=(t(3670),function(e){var n={padding:e.padding||"0px"};return(0,r.jsx)("div",{className:"re-checkbox-wrapper",style:n,children:(0,r.jsx)(j,{defaultChecked:!0,className:"re-checkbox"})})}),C=t(6480),S=t(3060),P=t(3713),N=t(5675),I=t(3542),M=t.n(I),B=t(7634),W=t.n(B),D=["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"];function E(e){var n=e.setIsOpen,t=e.setTimeOrder;return(0,r.jsxs)("div",{className:W().timeChangeMenu,children:[(0,r.jsx)("div",{className:W().timeChangeMenu__title,children:"\u0412\u0440\u0435\u043c\u044f"}),(0,r.jsx)("ul",{className:W().timeChangeMenu__list,children:D.map((function(e){return(0,r.jsx)("li",{className:W().timeChangeMenu__item,onClick:function(){n(),t(e)},children:e},e)}))})]})}var F={src:"/_next/static/media/clock.f9c3e107.svg",height:20,width:20};function T(e){var n=e.padding,t=e.setTimeOrder,o=(0,i.useState)(!1),a=o[0],s=o[1],l={padding:n||"0px"};return(0,r.jsxs)("div",{className:M().timeChange,style:l,children:[(0,r.jsx)(N.default,{src:F,alt:"clock",className:"timeChange__img",onClick:function(){s(!a)}}),(0,r.jsx)("div",{className:"timeChange__menu",style:a?{display:"block"}:{display:"none"},children:(0,r.jsx)(E,{setIsOpen:s,setTimeOrder:t})})]})}var V=t(205),R=t(9508),L=t.n(R),Z=t(7050),A=t.n(Z);function K(e){var n=e.item,t=n&&n.name,i=n&&n.count,o=n&&n.price;return(0,r.jsxs)("li",{className:A().orderWindow__item,children:[(0,r.jsxs)("div",{className:A().orderWindow__item__wrapper,children:[(0,r.jsx)("div",{className:A().orderWindow__item__name,children:t}),(0,r.jsx)("div",{className:A().orderWindow__item__count,children:i})]}),(0,r.jsx)("div",{className:A().orderWindow__item__price,children:o})]})}function z(e){var n=e.content;return(0,r.jsx)("ul",{className:"orderWindow__list",children:n&&n.map((function(e,n){return(0,r.jsx)(K,{item:e},n)}))})}var U=t(154),q=t.n(U);function G(){return(0,r.jsxs)("div",{className:q().orderPaymentByBonuses,children:[(0,r.jsx)("div",{className:q().orderPaymentByBonuses__text,children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0431\u043e\u043d\u0443\u0441\u0430\u043c\u0438"}),(0,r.jsx)("div",{className:q().orderPaymentByBonuses__count,children:"- 500 \u20bd "})]})}var X=t(7479),J=t.n(X);function Y(){return(0,r.jsxs)("div",{className:J().orderTotal,children:[(0,r.jsx)("div",{className:J().orderTotal__text,children:"\u0418\u0442\u043e\u0433\u043e:"}),(0,r.jsx)("div",{className:J().orderTotal__count,children:"1000 \u20bd "})]})}var H=[{name:"\u041f\u0438\u0432\u043e Jaws \xab\u0410\u0442\u043e\u043c\u043d\u0430\u044f \u041f\u0440\u0430\u0447\u0435\u0447\u043d\u0430\u044f\xbb",count:"1\xa0\u0448\u0442",price:"105\xa0\u20bd"},{name:"\u041f\u0438\u0432\u043e Jaws \xab\u0410\u0442\u043e\u043c\u043d\u0430\u044f \u041f\u0440\u0430\u0447\u0435\u0447\u043d\u0430\u044f\xbb",count:"1\xa0\u0448\u0442",price:"105\xa0\u20bd"},{name:"\u041f\u0438\u0432\u043e Jaws \xab\u0410\u0442\u043e\u043c\u043d\u0430\u044f \u041f\u0440\u0430\u0447\u0435\u0447\u043d\u0430\u044f\xbb",count:"1\xa0\u0448\u0442",price:"105\xa0\u20bd"}];function Q(){return(0,r.jsxs)("div",{className:L().orderWindow,children:[(0,r.jsx)("header",{className:L().orderWindow__header,children:(0,r.jsx)(l.Q,{fontSize:"18px",text:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"})}),(0,r.jsxs)("main",{className:L().orderWindow__main,children:[(0,r.jsx)(z,{content:H}),(0,r.jsx)(G,{}),(0,r.jsx)("span",{className:L().orderWindow__border})]}),(0,r.jsx)("footer",{className:L().orderWindow__footer,children:(0,r.jsx)(Y,{})})]})}var $=t(9808),ee=t(2191),ne=t(8935);var te=function(){var e=(0,i.useState)(""),n=e[0],t=e[1],o={width:"100%",minHeight:"100vh",background:ne.w};return(0,r.jsx)(ee.P,{styles:o,header:!0,footer:!0,children:(0,r.jsx)($.B,{flex:"auto",children:(0,r.jsx)(s.G,{title:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430",bonus:!0,children:(0,r.jsxs)("main",{className:a().ordering,children:[(0,r.jsxs)("section",{className:a().ordering__leftSide,children:[(0,r.jsx)(l.Q,{text:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430",fontSize:"20px",padding:"0 0 8px 0"}),(0,r.jsx)("h5",{className:a().ordering__detailsPosttitle,children:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437 \u0438\u0437 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443: \u0433. \u0421\u0435\u0432\u0435\u0440\u043e\u0434\u0432\u0438\u043d\u0441\u043a, \u0443\u043b. \u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u0430\u044f, 50/1"}),(0,r.jsx)("div",{className:a().ordering__checkboxWrapper,children:(0,r.jsxs)("label",{className:a().ordering__label,children:[(0,r.jsx)(O,{padding:"0 8px 0 0"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0440\u0438 \u0441\u0434\u0435\u043b\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043a\u0430\u0437\u0430\u0445"]})}),(0,r.jsxs)("div",{className:"".concat(a().ordering__flexWrapper," ").concat(a().ordering__padding8," ").concat(a().ordering__spaceBetween),children:[(0,r.jsxs)("label",{htmlFor:"",className:a().ordering__label,children:[(0,r.jsx)("pre",{children:"\u0418\u043c\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f: "}),(0,r.jsx)(C.k,{border:"1px solid #BFBFBF",borderRadius:"92px",background:"white",padding:"9px 24px",maxWidth:"150px",position:"relative",children:(0,r.jsx)(S.I,{width:"100%",placeholder:"\u0412\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})})]}),(0,r.jsxs)("label",{htmlFor:"",className:a().ordering__label,children:[(0,r.jsx)("pre",{children:"\u0412\u0440\u0435\u043c\u044f: "}),(0,r.jsxs)(C.k,{border:"1px solid #BFBFBF",borderRadius:"92px",background:"white",padding:"9px 24px",position:"relative",display:"flex",children:[(0,r.jsx)(T,{padding:"0 10px 0 0",setTimeOrder:t}),(0,r.jsx)(P.H,{mask:"99:99",width:"100%",placeholder:"09:00",handleTimeOrder:function(e){t(e.target.value)},timeOrder:n})]})]})]}),(0,r.jsxs)("div",{className:"".concat(a().ordering__flexWrapper," ").concat(a().ordering__padding8),children:[(0,r.jsxs)("label",{className:a().ordering__label,children:[(0,r.jsx)(O,{padding:"0 8px 0 0"}),(0,r.jsx)("pre",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043d\u0443\u0441\u044b: "})]}),(0,r.jsx)(C.k,{border:"1px solid #BFBFBF",borderRadius:"92px",background:"white",padding:"9px 24px",position:"relative",minWidth:"70px",children:(0,r.jsx)(S.I,{width:"100%",placeholder:"\u0411\u043e\u043d\u0443\u0441\u044b",type:"number"})})]}),(0,r.jsxs)("div",{className:"".concat(a().ordering__flexWrapper," ").concat(a().ordering__padding24),children:[(0,r.jsx)("label",{className:a().ordering__label,children:(0,r.jsx)("pre",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443: "})}),(0,r.jsx)(C.k,{border:"1px solid #BFBFBF",borderRadius:"92px",background:"white",padding:"9px 24px",position:"relative",width:"inherit",children:(0,r.jsx)(S.I,{width:"inherit",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})})]}),(0,r.jsx)(l.Q,{text:"\u041e\u043f\u043b\u0430\u0442\u0430",fontSize:"18px",padding:"0 0 8px 0"}),(0,r.jsx)("h5",{className:a().ordering__payPosttitle,children:"\u0412\u0432\u043e\u0434\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b, \u0432\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435, \u0447\u0442\u043e \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0441 \u0432\u0430\u0448\u0435\u0439 \u043a\u0430\u0440\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0432 \u0442\u043e\u0447\u043a\u0435 \u0432\u044b\u0434\u0430\u0447\u0438 \u0442\u043e\u0432\u0430\u0440\u0430. \u041e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 \u0438 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0441 \u0432\u0430\u0448\u0435\u0439 \u043a\u0430\u0440\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u0440\u0438 \u043b\u0438\u0447\u043d\u043e\u043c \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0438 \u0432\u0430\u043c\u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430. \u0412\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0432\u0437\u0438\u043c\u0430\u0442\u044c \u043f\u043b\u0430\u0442\u0443 \u0437\u0430 \u043e\u0442\u043a\u0430\u0437 \u043e\u0442 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0441\u0443\u043c\u043c\u0435 \u043f\u043e\u043d\u0435\u0441\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432, \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u043e\u0442\u043a\u0430\u0437 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u043b \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430, \u0438 \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043f\u043e\u043d\u0435\u0441\u043b\u0430 \u0440\u0430\u0441\u0445\u043e\u0434\u044b. \u0420\u0430\u0437\u043c\u0435\u0440 \u0442\u0430\u043a\u043e\u0439 \u043f\u043b\u0430\u0442\u044b \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430."}),(0,r.jsx)("div",{className:"".concat(a().ordering__flexWrapper," ").concat(a().ordering__padding24),children:(0,r.jsxs)("label",{className:a().ordering__label,children:[(0,r.jsx)(O,{padding:"0 8px 0 0"}),"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u044e"]})}),(0,r.jsx)("div",{className:"".concat(a().ordering__flexWrapper," ").concat(a().ordering__padding8),children:(0,r.jsxs)("label",{className:a().ordering__label,children:[(0,r.jsx)(S.I,{type:"radio",margin:"0 8px 0 0",disabled:!0,checked:!0}),"\u041a\u0430\u0440\u0442\u043e\u0439 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"]})}),(0,r.jsxs)("div",{className:a().ordering__cardInfWrapper,children:[(0,r.jsx)("div",{className:"".concat(a().ordering__flexWrapper," ").concat(a().ordering__padding8),children:(0,r.jsx)(C.k,{border:"1px solid #BFBFBF",borderRadius:"92px",background:"white",padding:"9px 24px",position:"relative",width:"100%",children:(0,r.jsx)(S.I,{type:"number",width:"inherit",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"})})}),(0,r.jsxs)("div",{className:"".concat(a().ordering__flexWrapper," ").concat(a().ordering__padding8),children:[(0,r.jsx)(C.k,{border:"1px solid #BFBFBF",borderRadius:"92px",background:"white",padding:"9px 24px",position:"relative",width:"60%",margin:"0 24px 0 0",children:(0,r.jsx)(S.I,{width:"100%",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0440\u043e\u043a"})}),(0,r.jsx)(C.k,{border:"1px solid #BFBFBF",borderRadius:"92px",background:"white",padding:"9px 24px",position:"relative",width:"30%",children:(0,r.jsx)(S.I,{width:"100%",placeholder:"CVV",maxLength:"3"})})]})]}),(0,r.jsx)("div",{className:a().ordering__flexWrapper,children:(0,r.jsxs)("label",{className:a().ordering__label,children:[(0,r.jsx)(O,{padding:"0 8px 0 0"}),"\u041f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"]})}),(0,r.jsx)(V.z,{title:"\u041d\u0430\u0437\u0430\u0434",color:"#3D69B7",border:"1px solid #3D69B7",padding:"12px 70px",borderRadius:"60px",margin:"32px 0 100px 0"})]}),(0,r.jsxs)("section",{className:a().ordering__rightSide,children:[(0,r.jsx)(Q,{}),(0,r.jsxs)("pre",{className:a().ordering__rightSide__bonusAccrual,children:["\u041d\u0430\u0447\u0438\u0441\u043b\u0438\u043c ",(0,r.jsx)("b",{children:"100"})," \u0431\u043e\u043d\u0443\u0441\u043e\u0432"]}),(0,r.jsx)(V.z,{title:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",color:"white",borderRadius:"60px",background:"#20598E",padding:"12px",width:"100%"})]})]})})})})}},3713:function(e,n,t){"use strict";t.d(n,{H:function(){return l}});var r=t(5893),i=(t(7294),t(5729)),o=t.n(i),a=t(6627),s=t.n(a),l=function(e){var n=e.mask,t=e.width,i=e.placeholder,a=e.handleTimeOrder,l=e.timeOrder;return(0,r.jsx)(s(),{mask:n,width:t,placeholder:i,className:o().inputMask,onChange:function(e){return a(e)},value:l})}},154:function(e){e.exports={orderPaymentByBonuses:"OrderPaymentByBonuses_orderPaymentByBonuses__zujZI"}},7479:function(e){e.exports={orderTotal:"OrderTotal_orderTotal__7Sbsg"}},9508:function(e){e.exports={orderWindow:"OrderWindow_orderWindow__E_t6C",orderWindow__header:"OrderWindow_orderWindow__header__YN_zn",orderWindow__border:"OrderWindow_orderWindow__border__WGGob"}},7050:function(e){e.exports={orderWindow__item:"OrderWindowItem_orderWindow__item__Ueyyf",orderWindow__item__item__wrapper:"OrderWindowItem_orderWindow__item__item__wrapper__DTG_o",orderWindow__item__count:"OrderWindowItem_orderWindow__item__count__t9SB2",orderWindow__item__price:"OrderWindowItem_orderWindow__item__price__E6Ad1"}},8231:function(e){e.exports={subtitle:"Subtitle_subtitle__EIha5"}},5315:function(e){e.exports={additionalPage__contscts__header:"AdditionPageWrapper_additionalPage__contscts__header__8Du0I",additionalPage__contscts__header__title:"AdditionPageWrapper_additionalPage__contscts__header__title___p_1J",additionalPage__contscts__header__wrapper:"AdditionPageWrapper_additionalPage__contscts__header__wrapper__OU5Sc"}},8939:function(e){e.exports={ordering:"Ordering_ordering__9_uOG",ordering__rightSide:"Ordering_ordering__rightSide__lJGS4",ordering__rightSide__bonusAccrual:"Ordering_ordering__rightSide__bonusAccrual__hDF1Y",ordering__flexWrapper:"Ordering_ordering__flexWrapper__VCXx0",ordering__spaceBetween:"Ordering_ordering__spaceBetween__5_13J",ordering__detailsPosttitle:"Ordering_ordering__detailsPosttitle__86eiT",ordering__payPosttitle:"Ordering_ordering__payPosttitle__KNTVh",ordering__checkboxWrapper:"Ordering_ordering__checkboxWrapper__Zce_k",ordering__label:"Ordering_ordering__label__nEHLT",ordering__cardInfWrapper:"Ordering_ordering__cardInfWrapper__La1Pf",ordering__padding8:"Ordering_ordering__padding8__o4Slk",ordering__padding24:"Ordering_ordering__padding24__jq7sO"}},5729:function(e){e.exports={inputMask:"InputMaskLib_inputMask__K3TSs"}},7634:function(e){e.exports={timeChangeMenu:"TimeChangeMenu_timeChangeMenu__MgA7d",timeChangeMenu__title:"TimeChangeMenu_timeChangeMenu__title___LG81",timeChangeMenu__list:"TimeChangeMenu_timeChangeMenu__list__PgHjT",timeChangeMenu__item:"TimeChangeMenu_timeChangeMenu__item__GuMjQ"}},3542:function(e){e.exports={timeChange:"TimeChange_timeChange__83SqZ"}},3670:function(){},6627:function(e,n,t){e.exports=t(6012)},6012:function(e,n,t){"use strict";var r,i=(r=t(7294))&&"object"==typeof r&&"default"in r?r.default:r,o=t(3935);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e,n){e.prototype=Object.create(n.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),r=0;r<t.length;r++){var i=t[r],o=Object.getOwnPropertyDescriptor(n,i);o&&o.configurable&&void 0===e[i]&&Object.defineProperty(e,i,o)}}(e.prototype.constructor=e,n)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e,n,t,r,i,o,a,s){if(!e){var l;if(void 0===n)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,r,i,o,a,s],u=0;(l=new Error(n.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};function u(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",n),r.moveEnd("character",t-n),r.select()}}var d={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function p(e,n,t){var r="",i="",o=null,a=[];if(void 0===n&&(n="_"),null==t&&(t=d),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach((function(e){s=!s&&"\\"===e||(s||!t[e]?(a.push(r.length),r.length===a.length-1&&(i+=e)):o=r.length+1,r+=e,!1)})),{maskChar:n,formatChars:t,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function h(e,n){return-1!==e.permanents.indexOf(n)}function f(e,n,t){var r=e.mask,i=e.formatChars;if(!t)return!1;if(h(e,n))return r[n]===t;var o=i[r[n]];return new RegExp(o).test(t)}function _(e,n){return n.split("").every((function(n,t){return h(e,t)||!f(e,t,n)}))}function m(e,n){var t=e.maskChar,r=e.prefix;if(!t){for(;n.length>r.length&&h(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var i=r.length,o=n.length;o>=r.length;o--){var a=n[o];if(!h(e,o)&&f(e,o,a)){i=o+1;break}}return i}function g(e,n){return m(e,n)===e.mask.length}function v(e,n){var t=e.maskChar,r=e.mask,i=e.prefix;if(!t){for((n=x(e,"",n,0)).length<i.length&&(n=i);n.length<r.length&&h(e,n.length);)n+=r[n.length];return n}if(n)return x(e,v(e,""),n,0);for(var o=0;o<r.length;o++)h(e,o)?n+=r[o]:n+=t;return n}function x(e,n,t,r){var i=e.mask,o=e.maskChar,a=e.prefix,s=t.split(""),l=g(e,n);return!o&&r>n.length&&(n+=i.slice(n.length,r)),s.every((function(t){for(;u=t,h(e,c=r)&&u!==i[c];){if(r>=n.length&&(n+=i[r]),s=t,o&&h(e,r)&&s===o)return!0;if(++r>=i.length)return!1}var s,c,u;return!f(e,r,t)&&t!==o||(r<n.length?n=o||l||r<a.length?n.slice(0,r)+t+n.slice(r+1):(n=n.slice(0,r)+t+n.slice(r),v(e,n)):o||(n+=t),++r<i.length)})),n}function b(e,n){for(var t=e.mask,r=n;r<t.length;++r)if(!h(e,r))return r;return null}function k(e){return e||0===e?e+"":""}function w(e,n,t,r,i){var o=e.mask,a=e.prefix,s=e.lastEditablePosition,l=n,c="",u=0,d=0,p=Math.min(i.start,t.start);return t.end>i.start?d=(u=function(e,n,t,r){var i=e.mask,o=e.maskChar,a=t.split(""),s=r;return a.every((function(n){for(;a=n,h(e,t=r)&&a!==i[t];)if(++r>=i.length)return!1;var t,a;return(f(e,r,n)||n===o)&&r++,r<i.length})),r-s}(e,0,c=l.slice(i.start,t.end),p))?i.length:0:l.length<r.length&&(d=r.length-l.length),l=r,d&&(1!==d||i.length||(p=i.start===t.start?b(e,t.start):function(e,n){for(var t=n;0<=t;--t)if(!h(e,t))return t;return null}(e,t.start)),l=function(e,n,t,r){var i=t+r,o=e.maskChar,a=e.mask,s=e.prefix,l=n.split("");if(o)return l.map((function(n,r){return r<t||i<=r?n:h(e,r)?a[r]:o})).join("");for(var c=i;c<l.length;c++)h(e,c)&&(l[c]="");return t=Math.max(s.length,t),l.splice(t,i-t),n=l.join(""),v(e,n)}(e,l,p,d)),l=x(e,l,c,p),(p+=u)>=o.length?p=o.length:p<a.length&&!u?p=a.length:p>=a.length&&p<s&&u&&(p=b(e,p)),c||(c=null),{value:l=v(e,l),enteredString:c,selection:{start:p,end:p}}}function y(e){return"function"==typeof e}function j(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function O(e){return(j()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function C(e){(j()||clearTimeout)(e)}var S=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=O(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(C(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=o.findDOMNode(l(l(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=m(t.maskOptions,t.value),n=b(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,r){void 0===r&&(r={});var i=t.getInputDOMNode(),o=t.isFocused();i&&o&&(r.deferred||u(i,e,n),null!==t.selectionDeferId&&C(t.selectionDeferId),t.selectionDeferId=O((function(){t.selectionDeferId=null,u(i,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(n=-r.moveStart("character",-e.value.length),t=-r.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,r=e.maskChar,i=e.permanents,o=e.formatChars;return{mask:n,maskChar:r,permanents:i,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:o}},t.isInputAutofilled=function(e,n,r,i){var o=t.getInputDOMNode();try{if(o.matches(":-webkit-autofill"))return!0}catch(c){}return!t.focused||i.end<r.length&&n.end===e.length},t.onChange=function(e){var n=l(l(t)).beforePasteState,r=l(l(t)).previousSelection,i=t.props.beforeMaskedValueChange,o=t.getInputValue(),a=t.value,s=t.getSelection();t.isInputAutofilled(o,s,a,r)&&(a=v(t.maskOptions,""),r={start:0,end:0,length:0}),n&&(r=n.selection,a=n.value,s={start:r.start+o.length,end:r.start+o.length,length:0},o=a.slice(0,r.start)+o+a.slice(r.end),t.beforePasteState=null);var c=w(t.maskOptions,o,s,a,r),u=c.enteredString,d=c.selection,p=c.value;if(y(i)){var h=i({value:p,selection:d},{value:a,selection:r},u,t.getBeforeMaskedValueChangeConfig());p=h.value,d=h.selection}t.setInputValue(p),y(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(d.start,d.end,{deferred:!0}):t.setSelection(d.start,d.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,r=t.maskOptions,i=r.mask,o=r.prefix;if(t.focused=!0,t.mounted=!0,i){if(t.value)m(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var a=v(t.maskOptions,o),s=v(t.maskOptions,a),l=m(t.maskOptions,s),c=b(t.maskOptions,l),u={start:c,end:c};if(y(n)){var d=n({value:s,selection:u},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());s=d.value,u=d.selection}var p=s!==t.getInputValue();p&&t.setInputValue(s),p&&y(t.props.onChange)&&t.props.onChange(e),t.setSelection(u.start,u.end)}t.runSaveSelectionLoop()}y(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,r=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,r&&!t.props.alwaysShowMask&&_(t.maskOptions,t.value)){var i="";y(n)&&(i=n({value:i,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var o=i!==t.getInputValue();o&&t.setInputValue(i),o&&y(t.props.onChange)&&t.props.onChange(e)}y(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var r=Math.abs(n.clientX-t.mouseDownX),i=Math.abs(n.clientY-t.mouseDownY),o=Math.max(r,i),a=(new Date).getTime()-t.mouseDownTime;(o<=10&&a<=200||o<=5&&a<=300)&&t.setCursorToEnd()}}))}y(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){y(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&y(t.props.inputRef)&&t.props.inputRef(e)};var r=n.mask,i=n.maskChar,a=n.formatChars,s=n.alwaysShowMask,c=n.beforeMaskedValueChange,d=n.defaultValue,h=n.value;t.maskOptions=p(r,i,a),null==d&&(d=""),null==h&&(h=d);var f=k(h);if(t.maskOptions.mask&&(s||f)&&(f=v(t.maskOptions,f),y(c))){var g=n.value;null==n.value&&(g=d),f=c({value:f,selection:null},{value:g=k(g),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=f,t}s(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent;return e.test(t)&&n.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,r=n.alwaysShowMask,i=n.mask,o=n.maskChar,a=n.formatChars,s=this.maskOptions,l=r||this.isFocused(),c=null!=this.props.value,u=c?k(this.props.value):this.value,d=e?e.start:null;if(this.maskOptions=p(i,o,a),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||c||(u=this.getInputValue()),(h||this.maskOptions.mask&&(u||l))&&(u=v(this.maskOptions,u)),h){var f=m(this.maskOptions,u);(null===d||f<d)&&(d=g(this.maskOptions,u)?f:b(this.maskOptions,f))}!this.maskOptions.mask||!_(this.maskOptions,u)||l||c&&this.props.value||(u="");var x={start:d,end:d};if(y(t)){var w=t({value:u,selection:x},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());u=w.value,x=w.selection}this.value=u;var j=this.getInputValue()!==this.value;j?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var O=!1;null!=x.start&&null!=x.end&&(O=!e||e.start!==x.start||e.end!==x.end),(O||j)&&this.setSelection(x.start,x.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&C(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),r=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],0<=n.indexOf(t)||(i[t]=e[t]);return i}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){y(t)||c(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=a({},r);o.forEach((function(e){return delete s[e]})),e=t(s),o.filter((function(n){return null!=e.props[n]&&e.props[n]!==r[n]})).length&&c(!1)}else e=i.createElement("input",a({ref:this.handleRef},r));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(r.disabled||r.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),null!=r.value&&(l.value=this.value)),e=i.cloneElement(e,l)},n}(i.Component);e.exports=S},5671:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},3144:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}t.d(n,{Z:function(){return i}})},4942:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},7462:function(e,n,t){"use strict";function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:function(){return r}})},2531:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&r(e,n)}t.d(n,{Z:function(){return i}})},91:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:function(){return r}})},1002:function(e,n,t){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[693,801,774,888,179],(function(){return n=485,e(e.s=n);var n}));var n=e.O();_N_E=n}]);