(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),a=n(4),c=n(5),o=n(7),i=n(6),u=n(1),d=n.n(u),p=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pressedKey:null},e.handlerKeyPress=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handlerKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handlerKeyPress)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(d.a.Component);n(13);r.a.render(Object(p.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.aa53cd60.chunk.js.map