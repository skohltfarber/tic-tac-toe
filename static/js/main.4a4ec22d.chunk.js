(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,n){},125:function(e,t,n){e.exports=n(427)},129:function(e,t,n){},131:function(e,t,n){},427:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(16),u=n.n(s),i=(n(129),n(131),n(124)),c=n(47),l=n(48),o=n(50),m=n(49),h=n(51);n(133),n(121);function d(e){return a.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var f=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderSquare",value:function(e){var t=this;return a.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),a.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),a.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(a.a.Component),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();b(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],s=b(r.squares),u=n.map(function(e,n){var r=n?"Go to move #"+n:"Go to game start";return a.a.createElement("li",{key:n},a.a.createElement("button",{onClick:function(){return t.jumpTo(n)}},r))});return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(f,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),a.a.createElement("div",{className:"game-info"},a.a.createElement("div",null,e),a.a.createElement("ol",null,u)))}}]),t}(a.a.Component);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(i.a)(t[n],3),a=r[0],s=r[1],u=r[2];if(e[a]&&e[a]===e[s]&&e[a]===e[u])return e[a]}return null}var p=function(){return a.a.createElement(v,null)},N=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,428)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),s(e),u(e)})};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),N()}},[[125,3,2]]]);
//# sourceMappingURL=main.4a4ec22d.chunk.js.map