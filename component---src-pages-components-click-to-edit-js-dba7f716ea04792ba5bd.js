(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var i=n(33),s=n.n(i),a=n(7),o=n.n(a),d=n(0),r=n.n(d),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).enableEditMode=function(){n.setState({editEnabled:!0})},n.disableEditMode=function(){n.setState({editEnabled:!1})},n.onBlur=function(e){n.disableEditMode(),n.props.onEditEnd&&n.props.onEditEnd(n.input.current.value)},n.handleEnterKey=function(e){13!==e.keyCode&&13!==e.charCode||n.disableEditMode(),n.props.onEditEnd&&n.props.onEditEnd(n.input.current.value)},n.state={editEnabled:!1},n.input=r.a.createRef(),n.enableEditMode=n.enableEditMode.bind(s()(n)),n.disableEditMode=n.disableEditMode.bind(s()(n)),n}return o()(t,e),t.prototype.render=function(){var e=this.props.value&&this.props.value.length>this.props.maxLength?this.props.value.substring(0,this.props.maxLength)+"...":this.props.value,t=this.state.editEnabled?r.a.createElement("input",{ref:this.input,className:this.props.inputClass,type:"text",defaultValue:this.props.value,autoFocus:!0,onBlur:this.onBlur,onKeyPress:this.handleEnterKey}):r.a.createElement("span",{className:this.props.textClass},e);return r.a.createElement("div",{className:this.props.containerClass,onClick:this.enableEditMode},t)},t}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-components-click-to-edit-js-dba7f716ea04792ba5bd.js.map