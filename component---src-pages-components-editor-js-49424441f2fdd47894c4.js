(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7,21,23],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});n(73);var a=n(172);function r(e,t){var n=100;function r(t){var n=e.getTokenTypeAt(a.Pos(t,0)),r=/\bsection\b/.test(n);return n&&r}function i(e,t,a){var i=t&&t.match(/^#+/);return i&&r(e)?i[0].length:n}function o(e,t){return t&&/(^\.[\w]+.+)|(?:(?:^int|ext|est|int\.ext|int\/ext|i\/e)[. ].+)$/i.test(t)}var s=e.getLine(t.line),l=e.getLine(t.line+1);if(o(t.line,s)){for(var d=e.lastLine(),c=t.line,p=e.getLine(c+2);c<d&&!o(0,l)&&!r(c+1);)++c,l=p,p=e.getLine(c+2);return{from:a.Pos(t.line,s.length),to:a.Pos(c,e.getLine(c).length)}}var u=i(t.line,s);if(u!==n){for(var f=e.lastLine(),h=t.line,g=e.getLine(h+2);h<f&&!(i(h+1,l)<=u);)++h,l=g,g=e.getLine(h+2);return{from:a.Pos(t.line,s.length),to:a.Pos(h,e.getLine(h).length)}}}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var a=n(33),r=n.n(a),i=n(7),o=n.n(i),s=n(0),l=n.n(s),d=n(200),c=n(145),p=n(201),u=n(210),f=n(146);n(154),n(155),n(156),n(157);n(192),n(202),n(203),n(193),n(194);var h="newfile.fountain",g=function(e,t,n){return l.a.createElement("button",{className:"editor__toolbar__btn",onClick:e},l.a.createElement("img",{src:t,width:"24px",alt:n}))},v=(f.default,function(e){function t(t){var n;return(n=e.call(this,t)||this).download=function(){if(n.editorInstance){var e=n.editorInstance.getValue(),t=n.props.file||h,a=new Blob([e],{type:"text/plain;charset=utf-8"});Object(d.saveAs)(a,t)}else n.props.onError("editorInstance not loaded!")},n.saveToDropbox=function(){if(n.editorInstance){var e=n.editorInstance.getValue();n.props.onDropboxSave(n.props.file,e)}else n.props.onError("editorInstance not loaded!")},n.transliterate=function(){if(n.editorInstance){var e=n.editorInstance.getValue();n.props.transMenu.onTransliteration(e,n.props.transMenu.selectedScheme)}else n.props.onError("editorInstance not loaded!")},n.generatePdf=function(){if(n.editorInstance){var e=n.editorInstance.getValue();n.props.onPreview(e,!1)}else n.props.onError("editorInstance not loaded!")},n.generateIndianPdf=function(){if(n.editorInstance){var e=n.editorInstance.getValue();n.props.onPreview(e,!0)}else n.props.onError("editorInstance not loaded!")},n.handleTransSelection=function(e){n.props.transMenu.onSelection(e)},n.editorInstance=null,n.transliterate=n.transliterate.bind(r()(n)),n.download=n.download.bind(r()(n)),n.generatePdf=n.generatePdf.bind(r()(n)),n.handleTransSelection=n.handleTransSelection.bind(r()(n)),n.saveToDropbox=n.saveToDropbox.bind(r()(n)),n}return o()(t,e),t.prototype.render=function(){var e=this;console.log("editor render");var t=this.props.file||h,n=g(this.download,"gfx/icons/download.svg","downloand"),a=g(this.generatePdf,"gfx/icons/pdf.svg","pdf"),r=g(this.generateIndianPdf,"gfx/icons/indian.svg","pdf"),i=g(this.transliterate,"gfx/icons/arrow.svg","Transliterate"),o=g(this.saveToDropbox,"gfx/icons/dropbox.svg","Dropbox"),s=this.props.transMenu?l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement(u.a,{className:"transmenu",value:this.props.transMenu.selectedScheme,onChange:this.handleTransSelection,options:this.props.transMenu.options}),i):null;return l.a.createElement("div",{className:"editor",style:this.props.style},l.a.createElement("div",{className:"editor__toolbar"},l.a.createElement(c.default,{onEditEnd:function(t){e.props.onFileNameChange(t)},maxLength:"20",containerClass:"input-container",inputClass:"input-class",textClass:"text-class",value:t}),s,n,o,a,r),l.a.createElement(p.Controlled,{value:this.props.content}))},t}(l.a.Component))},145:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(33),r=n.n(a),i=n(7),o=n.n(i),s=n(0),l=n.n(s),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).enableEditMode=function(){n.setState({editEnabled:!0})},n.disableEditMode=function(){n.setState({editEnabled:!1})},n.onBlur=function(e){n.disableEditMode(),n.props.onEditEnd&&n.props.onEditEnd(n.input.current.value)},n.handleEnterKey=function(e){13!==e.keyCode&&13!==e.charCode||n.disableEditMode(),n.props.onEditEnd&&n.props.onEditEnd(n.input.current.value)},n.state={editEnabled:!1},n.input=l.a.createRef(),n.enableEditMode=n.enableEditMode.bind(r()(n)),n.disableEditMode=n.disableEditMode.bind(r()(n)),n}return o()(t,e),t.prototype.render=function(){var e=this.props.value&&this.props.value.length>this.props.maxLength?this.props.value.substring(0,this.props.maxLength)+"...":this.props.value,t=this.state.editEnabled?l.a.createElement("input",{ref:this.input,className:this.props.inputClass,type:"text",defaultValue:this.props.value,autoFocus:!0,onBlur:this.onBlur,onKeyPress:this.handleEnterKey}):l.a.createElement("span",{className:this.props.textClass},e);return l.a.createElement("div",{className:this.props.containerClass,onClick:this.enableEditMode},t)},t}(l.a.Component)},146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});n(73);var a=n(172),r=n(142),i=/(^\.[\w]+.+)|(?:(?:^int|ext|est|int\.ext|int\/ext|i\/e)[. ].+)$/i,o=/^[A-Z\s]+TO:$/,s=/^['A-Z\s\d]+(\s*\(.+\)\s*)*$/,l=/^\s*\(.+\)\s*$/,d=/^>(.+)<$/,c=/^#+/,p=/^\*(.+)\*$/,u=/^\*\*(.+)\*\*$/,f=/^\*\*\*(.+)\*\*\*$/,h=/^_(.+)_$/;function g(e,t){function n(e){var t=e.lookAhead(1);return!t||""===t}return a.registerHelper("fold","fountain",r.default),{startState:function(){return console.log("startState"),{blankLine:!1,character:!1,parenthetical:!1}},token:function(e,t){if(console.log("token"),e.match(p))return e.skipToEnd(),"em";if(e.match(u))return e.skipToEnd(),"strong";if(e.match(f))return e.skipToEnd(),"em strong";if(e.match(h))return e.skipToEnd(),"link";if(e.match(c))return e.skipToEnd(),"ften-section";if(e.match(d))return e.skipToEnd(),t.blankLine=!1,t.character=!1,t.dialog=!1,t.parenthetical=!1,"ften-centered-text";if((t.character||t.dialog)&&e.match(l))return e.skipToEnd(),t.blankLine=!1,t.character=!1,t.dialog=!0,t.parenthetical=!0,"variable-2 ften-parenthetical";if(t.character||t.parenthetical)return e.skipToEnd(),t.blankLine=!1,t.character=!1,t.parenthetical=!1,t.dialog=!0,"string ften-dialog";if(t.blankLine){if(e.match(s)&&!n(e))return e.skipToEnd(),t.blankLine=!1,t.character=!0,t.dialog=!1,t.parenthetical=!1,"keyword ften-character";if(e.match(o)&&n(e))return e.skipToEnd(),t.blankLine=!1,t.character=!1,t.dialog=!1,t.parenthetical=!1,"line-ften-transition"}return e.match(i)&&n(e)?(e.skipToEnd(),t.blankLine=!1,t.character=!1,t.dialog=!1,t.parenthetical=!1,"variable-2 line-ften-slugline"):(e.next(),"line-ften-action")},blankLine:function(e){e.blankLine=!0}}}}}]);
//# sourceMappingURL=component---src-pages-components-editor-js-49424441f2fdd47894c4.js.map