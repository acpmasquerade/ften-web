(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7,8,9,11,12,15],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a);t.default=function(e){return o.a.createElement("div",{className:e.className},o.a.createElement("span",{className:"tooltiptext"},e.alt),o.a.createElement("img",{src:e.src,alt:e.alt,width:"50px",onClick:e.onClick}))}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(33),o=n.n(a),r=n(7),i=n.n(r),s=n(0),l=n.n(s),c=n(4),d=n.n(c),u=n(184),p=n.n(u),h=n(142),f=!1,m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onChoose=n.onChoose.bind(o()(n)),n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.isDropboxReady()||f||(f=!0,p()("https://www.dropbox.com/static/api/2/dropins.js",{attrs:{id:"dropboxjs","data-app-key":this.props.appKey}}))},n.isDropboxReady=function(){return!!window.Dropbox},n.onChoose=function(){if(!this.isDropboxReady()||this.props.disabled)return null;var e=this.props,t=e.success,n=e.cancel,a=e.linkType,o=e.multiSelect,r=e.folderselect,i=e.extensions;window.Dropbox.choose({success:t,cancel:n,linkType:a,multiSelect:o,folderselect:r,extensions:i})},n.render=function(){return l.a.createElement(h.default,{className:"menu-item",onClick:this.onChoose,src:"gfx/icons/dropbox-open-icon.svg",alt:"Dropbox"})},t}(l.a.Component);m.propTypes={children:d.a.node,appKey:d.a.string.isRequired,success:d.a.func.isRequired,cancel:d.a.func,linkType:d.a.oneOf(["preview","direct"]),multiselect:d.a.bool,folderselect:d.a.bool,extensions:d.a.arrayOf(d.a.string),disabled:d.a.bool},m.defaultProps={cancel:function(){},linkType:"direct",multiselect:!1,folderselect:!1,disabled:!1}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var a=n(7),o=n.n(a),r=(n(189),n(35),n(0)),i=n.n(r),s=n(181),l=n(196),c=n.n(l),d=1.5,u=1,p=1,h=1,f=s.d.create({page:{flexDirection:"col",paddingLeft:72*d,paddingRight:72*u,paddingTop:72*p,paddingBottom:72*h},scene_heading:{paddingTop:16},action:{textAlign:"left",paddingTop:16,paddingRight:"40%"},character:{paddingTop:16,paddingLeft:"60%"},parenthetical:{paddingLeft:"60%"},dialogue:{paddingLeft:"60%",fontSize:14},transition:{textAlign:"right",paddingTop:16},ignored:{color:"red"}}),m=s.d.create({page:{flexDirection:"col",paddingLeft:72*d,paddingRight:72*u,paddingTop:72*p,paddingBottom:72*h,fontFamily:"Courier"},scene_heading:{paddingTop:16,paddingBottom:16},action:{textAlign:"left"},character:{paddingTop:16,paddingLeft:72*(3.7-d)},parenthetical:{paddingLeft:72*(3.1-d)},dialogue:{paddingLeft:72*(2.5-d),fontSize:14},transition:{textAlign:"right",paddingTop:16},ignored:{color:"red"}}),g=function(e){return i.a.createElement(s.a,null,i.a.createElement(s.c,{size:"A4",style:e.styles.page},function(e){return c.a.parse(e.content.toString(),!0).tokens.map(function(t,n){var a;switch(t.type){case"title":case"credit":case"author":case"authors":case"source":case"notes":case"draft_date":case"date":case"contact":case"copyright":case"page_break":case"line_break":case"centered":case"section":case"synopsis":case"note":case"boneyard_begin":case"boneyard_end":a=i.a.createElement(y,{key:n,styles:e.styles,token:"ignored",text:t.text});break;case"dialogue_begin":case"dialogue_end":case"dual_dialogue_begin":case"dual_dialogue_end":break;case"scene_heading":case"transition":case"action":case"parenthetical":case"dialogue":case"character":a=i.a.createElement(y,{key:n,styles:e.styles,token:t.type,text:t.text});break;default:t.text||console.log(t)}return a})}(e)))},y=function(e){var t=e.styles,n=e.token,a=e.text;return i.a.createElement(s.e,{style:t[n]},a)};var b=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"pdf"},i.a.createElement(s.b,{style:{width:"100%",height:"90vh"}},i.a.createElement(g,{content:this.props.content,styles:this.props.indian?f:m})))},t}(i.a.Component)},147:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var a=n(7),o=n.n(a),r=n(0),i=n.n(r),s=n(143),l=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return console.log("view container render"),i.a.createElement("div",{className:"view_container"},i.a.createElement(s.default,{style:{width:"100%"},onChange:this.props.onChange,content:this.props.content,onPreview:this.props.onPreview,onDropboxSave:this.props.onDropboxSave,onFileNameChange:this.props.onFileNameChange,file:this.props.file,onError:this.props.onError,onInfo:this.props.onInfo}))},t}(i.a.Component)},148:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a);t.default=function(){return o.a.createElement("div",{className:"device-info"},o.a.createElement("h3",null," Sorry, this application needs a device with atleast 768 pixel resolution."),o.a.createElement("h4",null," But What is this? "),o.a.createElement("p",null,"This application is for screenwriters, mostly for Indian screenwriters. It helps in two ways. "),o.a.createElement("ul",null,o.a.createElement("li",null,"Some Indian screenplays are maintained in two forms. One, a transliteration form so that they can be read by people who cannot read the native script. Two, a native version. Writing a screenplay itself is an arduous task in itself and maintaining two versions is a headache one wants to avoid. With this application, one can 'convert' from one form to another easily."),o.a.createElement("li",null,"The screenplay format -- at least for production -- used in India is also different than the Hollywood format. In the Indian version, the page is split in half vertically. The screen action is on the left and dialogs are on the right. The task of maintaining two versions typically befalls on an unpaid assistant director! This application helps generate an Indian format as needed.")),o.a.createElement("p",null," You can just have one script and generate the format you want and whenever you want."))}},149:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a);t.default=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"dialog "+e.kind},o.a.createElement("p",null,e.message),o.a.createElement("button",{className:"dialog--btn",onClick:e.onOk},"Ok"),"warning"===e.kind?o.a.createElement("button",{className:"dialog--btn",onClick:e.onCancel},"Cancel"):null))}},150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(7),o=n.n(a),r=n(0),i=n.n(r),s=n(142),l=n(145),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).showOpenFileDlg=function(){n.inputOpenFileRef.current.click()},n.onChangeFile=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.files[0];t&&n.props.onOpen(t),e.target.value=""},n.inputOpenFileRef=i.a.createRef(),n}return o()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"menu-bar"},i.a.createElement("input",{type:"file",id:"file",accept:".fountain,.txt",onChange:this.onChangeFile.bind(this),ref:this.inputOpenFileRef,style:{display:"none"}}),i.a.createElement(s.default,{className:"menu-item",onClick:this.showOpenFileDlg,src:"gfx/icons/open.svg",alt:"Open File"}),i.a.createElement(l.default,{appKey:"dlgs25astqhe1gc",extensions:[".fountain",".txt"],success:this.props.onDropboxSuccess}),i.a.createElement(s.default,{className:"menu-item",onClick:this.props.onNew,src:"gfx/icons/new.svg",alt:"New"}),i.a.createElement(s.default,{className:"menu-item",onClick:this.props.onEdit,src:"gfx/icons/editor.svg",alt:"Edit"}),i.a.createElement(s.default,{className:"menu-item",onClick:this.props.onTransliterate,src:"gfx/icons/translation.svg",alt:"Trans"}),i.a.createElement(s.default,{className:"menu-item",onClick:this.props.onAbout,src:"gfx/icons/info.svg",alt:"About"}))},t}(i.a.Component)},151:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(33),o=n.n(a),r=n(7),i=n.n(r),s=n(0),l=n.n(s),c=n(188),d=n(147),u=n(152),p=n(146),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).onPreview=function(e,t){n.props.onPreview(t),n.setState({previewContent:e})},n.actionToComponent=function(e){switch(e.action){case c.h:return l.a.createElement(u.default,{actionData:n.props.actionData,onTransliteration:n.props.onTransliteration,onEditorFilenameChange:n.props.onEditorFilenameChange,onTransEditorFilenameChange:n.props.onTransEditorFilenameChange,onEditorChange:n.props.onEditorChange,onTransEditorChange:n.props.onTransEditorChange,onDbxTransEditorSave:n.props.onDbxTransEditorSave,onDbxEditorSave:n.props.onDbxEditorSave,onPreview:n.onPreview,onError:n.props.onError,onInfo:n.props.onInfo});default:return l.a.createElement(d.default,{content:e.editorContent,file:e.editorFile,onFileNameChange:n.props.onEditorFilenameChange,onChange:n.props.onEditorChange,onPreview:n.onPreview,onDropboxSave:n.props.onDbxEditorSave})}},n.state={previewContent:null},n.actionToComponent=n.actionToComponent.bind(o()(n)),n.onPreview=n.onPreview.bind(o()(n)),n}return i()(t,e),t.prototype.render=function(){var e;return console.log("detail render"),e=this.props.actionData.mode===c.g||this.props.actionData.mode===c.f?l.a.createElement(p.default,{indian:this.props.actionData.mode===c.g,content:this.state.previewContent,onError:this.props.onError,onInfo:this.props.onInfo}):this.actionToComponent(this.props.actionData),l.a.createElement("div",{className:"detail"},e)},t}(l.a.Component)},157:function(e,t,n){"use strict";n.r(t);n(265),n(264);var a=n(33),o=n.n(a),r=n(7),i=n.n(r),s=n(0),l=n.n(s),c=n(151),d=function(e){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-close-btn"},l.a.createElement("span",{onClick:e.onClick},"x")),l.a.createElement("h3",null," What is this? "),l.a.createElement("p",null,"This tool is for screenwriters, mostly for Indian screenwriters. It helps in two ways. "),l.a.createElement("ul",null,l.a.createElement("li",null,"Some Indian screenplays are maintained in two forms. One, a transliteration form so that they can be read by people who cannot read the native script. Two, a native version. Writing a screenplay itself is an arduous task in itself and maintaining two versions is a headache one wants to avoid. With this application, one can 'convert' from one form to another easily."),l.a.createElement("li",null,"The screenplay format -- at least for production -- used in India is also different than the Hollywood format. In the Indian version, the page is split in half vertically. The screen action is on the left and dialogs are on the right. The task of maintaining two versions typically befalls on an unpaid assistant director! This application helps generate an Indian format as needed.")),l.a.createElement("p",null," You can just have one script and generate the format you want and whenever you want."),l.a.createElement("p",null," This is a client-side only app means your screenplay is never sent to any server."),l.a.createElement("h3",null," Known issues and features "),l.a.createElement("ul",null,l.a.createElement("li",null,"Only converts the dialog portion of the script to native and vice-versa. Leaves action and character names as is. "),l.a.createElement("li",null,"Certain often used English words are not 'converted'. They are kept as is. An internal dictionary is used for that."),l.a.createElement("li",null,"Only supports ",l.a.createElement("a",{href:"http://fountain.io"},"Fountain")," format which is an open format. Most screenwriting software has an option for fountain."),l.a.createElement("li",null,"BUG: Indian PDF format in native script doesn't work yet. Waiting on dependent component to support the woff fonts. Workaround: Use command line tools from ",l.a.createElement("a",{href:"https://github.com/venkatgoud/fountain-utils"},"here")),l.a.createElement("li",null,"Issue: Saving native script directly into Dropbox fails. Workaround: You can always use the download option to download into your Dropbox folder to sync it."),l.a.createElement("li",null,"BUG: The PDF for Hollywood format doesn't have correct margins. Don't use it!")),l.a.createElement("h3",null," Credits "),l.a.createElement("a",{href:"https://github.com/mattdaly/Fountain.js"},"https://github.com/mattdaly/Fountain.js"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/afterwriting"},"https://github.com/afterwriting"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.npmjs.com/package/sanscript"},"https://www.npmjs.com/package/sanscript")," ",l.a.createElement("br",null),"Icon made by ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/vignesh-oviyan"},"Freepik,vignesh")," from www.flaticon.com")},u=n(148),p=n(150),h=n(149),f=n(188),m=n(267),g=n.n(m),y=n(268),b=n.n(y);n.d(t,"default",function(){return v});var E="newfile1.fountain",v=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateState=function(e){n.setState(e)},n.onWarningOk=function(){n.setState({warningMsg:"",mode:f.a,action:f.d,editorFile:null,editorContent:g.a.content,transEditorContent:" "})},n.clearErrorMsg=function(){n.setState({errorMsg:""})},n.clearInfoMsg=function(){n.setState({infoMsg:""})},n.clearWarningMsg=function(){n.setState({warningMsg:""})},n.setErrorMessage=function(e){n.setState({errorMsg:e})},n.onInfo=function(e){n.setState({infoMsg:e})},n.readFileContents=function(e){if(Object(f.i)(e.name)){var t=new FileReader;t.onload=function(){n.updateState({action:f.e,editorFile:e.name,editorContent:t.result})},t.readAsText(e)}else n.setState({editorFile:e.name,errorMsg:"Not a Fountain file!"})},n.onEditorFilenameChange=function(e){n.setState({editorFile:e})},n.onTransEditorFilenameChange=function(e){n.setState({transEditorFile:e})},n.onEditorChange=function(e){n.setState({editorContent:e})},n.onTransEditorChange=function(e){n.setState({transEditorContent:e})},n.handleNewMenu=function(){n.setState({warningMsg:"Existing content will be gone!"})},n.handleOpenMenu=function(e){n.readFileContents(e)},n.handleDropboxOpenMenu=function(e){var t=e[0];b()(t.link,{method:"GET"}).then(function(e){return e.text()}).then(function(e){n.updateState({action:f.e,editorFile:t.name,editorContent:e,infoMsg:"Loaded from "+t.link})})},n.handleEditMenu=function(){n.setState({action:f.c,mode:f.a})},n.handleTransliterateMenu=function(){n.setState({mode:f.b,action:f.h})},n.onTransliteration=function(e,t){n.setState({editorContent:e,transEditorContent:t})},n.onPreview=function(e){n.setState({mode:e?f.g:f.f})},n.onAbout=function(){n.setState({showHelp:!0})},n.onDbxTransEditorSave=function(e,t){n.onDropboxSave(e,t)},n.onDbxEditorSave=function(e,t){n.onDropboxSave(e,t)},n.onDropboxSave=function(e,t){var a="data:;text/plain,"+encodeURIComponent(t),o={success:function(){n.setState({infoMsg:e+" saved"})}};window.Dropbox.save(a,e,o)},n.state={action:f.d,mode:f.a,editorFile:E,editorContent:g.a.content,transEditorFile:E,transEditorContent:" ",errorMsg:null,infoMsg:null,warningMsg:null,showHelp:!0},n.readFileContents=n.readFileContents.bind(o()(n)),n.onWarningOk=n.onWarningOk.bind(o()(n)),n.clearInfoMsg=n.clearInfoMsg.bind(o()(n)),n.clearErrorMsg=n.clearErrorMsg.bind(o()(n)),n.clearWarningMsg=n.clearWarningMsg.bind(o()(n)),n.updateState=n.updateState.bind(o()(n)),n.onDropboxSave=n.onDropboxSave.bind(o()(n)),n.onDbxEditorSave=n.onDbxEditorSave.bind(o()(n)),n.onDbxTransEditorSave=n.onDbxTransEditorSave.bind(o()(n)),n.onEditorFilenameChange=n.onEditorFilenameChange.bind(o()(n)),n.onTransEditorFilenameChange=n.onTransEditorFilenameChange.bind(o()(n)),n.setErrorMessage=n.setErrorMessage.bind(o()(n)),n}return i()(t,e),t.prototype.render=function(){var e=this;console.log("master render");var t=this.state.errorMsg?l.a.createElement(h.default,{kind:"error",message:this.state.errorMsg,onOk:this.clearErrorMsg}):null,n=this.state.warningMsg?l.a.createElement(h.default,{kind:"warning",message:this.state.warningMsg,onOk:this.onWarningOk,onCancel:this.clearWarningMsg}):null,a=this.state.infoMsg?l.a.createElement(h.default,{kind:"info",message:this.state.infoMsg,onOk:this.clearInfoMsg}):null,o=this.state,r={mode:o.mode,action:o.action,editorContent:o.editorContent,transEditorContent:o.transEditorContent,editorFile:o.editorFile,transEditorFile:o.transEditorFile};return l.a.createElement("div",{className:"master"},l.a.createElement(u.default,null),l.a.createElement(p.default,{onOpen:this.handleOpenMenu,onDropboxSuccess:this.handleDropboxOpenMenu,onNew:this.handleNewMenu,onEdit:this.handleEditMenu,onTransliterate:this.handleTransliterateMenu,onAbout:this.onAbout}),t,n,a,this.state.showHelp?l.a.createElement(d,{onClick:function(){e.setState({showHelp:!1})}}):null,l.a.createElement(c.default,{actionData:r,onPreview:this.onPreview,onTransliteration:this.onTransliteration,onEditorChange:this.onEditorChange,onEditorFilenameChange:this.onEditorFilenameChange,onDbxEditorSave:this.onDbxEditorSave,onTransEditorChange:this.onTransEditorChange,onTransEditorFilenameChange:this.onTransEditorFilenameChange,onDbxTransEditorSave:this.onDbxTransEditorSave,onError:this.setErrorMessage,onInfo:this.onInfo}))},t}(l.a.Component)},184:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:a)(i,o),i.onload||n(i,o),r.appendChild(i)}},188:function(e,t,n){"use strict";n.d(t,"i",function(){return u}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"g",function(){return d}),n.d(t,"h",function(){return i});n(75),n(34),n(74);var a="file_open",o="file_edit",r="file_new",i="transliterate",s="editor",l="trans_editor",c="preview",d="preview_indian",u=function(e){return null!=e.match(/.+.[txt|fountain]$/)}},211:function(e,t){},212:function(e,t){},215:function(e,t){},216:function(e,t){},265:function(e,t,n){"use strict";n(266)("link",function(e){return function(t){return e(this,"a","href",t)}})},266:function(e,t,n){var a=n(11),o=n(19),r=n(20),i=/"/g,s=function(e,t,n,a){var o=String(r(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},267:function(e,t){e.exports={content:"EXT. SOME RANDOM PLACE - DAY\n\nCharacters ONE and TWO argue about a mysterious element. \n\nONE\npaTTi.mcukOku. vadiley.\n\nTWO\nalaa elA vadilestAM?\n\nONE\nvadileyyaka mari?\n\nTWO\nEmanuku.mTADu. nEnu daggarikelte ma.mchidEmO.\n\nONE\neMduku?\n\nTWO\nemO. Emi cheyakuMDa vuMDe badulu...\n\nONE\ncUDu. paTTiMcukoleka povaTaM neeku kaShTamaitE velli pOdAM pada.\n\nTWO\nmana daggarinuMchi ataniki Emanna kaavalsi vaste?\n\nONE\nkaavalsi vaste vacci aDugutADu.\n\nTWO\nnaaku vellalaMTE bhayaMgA vuMdi.\n\nONE\neMduku?\n\nTWO\nteleedu. tappu chestunnaamEmO nani.\n\nONE\nokay. ikkaDe vuMdAM.\n\nTWO\nthaaMks.\n\nONE\nnEnu daggarikeltAnu.\n\nOne starts.\n\nTWO\noddu.\n\nONE\neMdukoddu?. nuvvu veltaa annavu?\n\nTWO\nmanasu maarchu kunna. elaa react avutaaDO teleedu kada.\n\nONE\ncUDu. edo okaTi. iTanna, aTanna, okay?\n\nTWO\nokay. iddaraM veldAM pada?\n\nONE\n(pause)\nsare."}},268:function(e,t,n){n(269),e.exports=self.fetch.bind(self)},269:function(e,t,n){"use strict";n.r(t),n.d(t,"Headers",function(){return c}),n.d(t,"Request",function(){return g}),n.d(t,"Response",function(){return b}),n.d(t,"DOMException",function(){return v}),n.d(t,"fetch",function(){return w});var a={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(a.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function i(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function u(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function p(e){var t=new FileReader,n=u(t);return t.readAsArrayBuffer(e),n}function h(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:a.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:a.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():a.arrayBuffer&&a.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=h(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||r(e))?this._bodyArrayBuffer=h(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):a.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a.blob&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var e,t,n,a=d(this);if(a)return a;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=u(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),a=0;a<t.length;a++)n[a]=String.fromCharCode(t[a]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=i(e),t=s(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},c.prototype.delete=function(e){delete this.map[i(e)]},c.prototype.get=function(e){return e=i(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(i(e))},c.prototype.set=function(e,t){this.map[i(e)]=s(t)},c.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),l(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),l(e)},a.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(e,t){var n,a,o=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=(n=t.method||this.method||"GET",a=n.toUpperCase(),m.indexOf(a)>-1?a:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),a=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(a),decodeURIComponent(o))}}),t}function b(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},f.call(g.prototype),f.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];b.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})};var v=self.DOMException;try{new v}catch(T){(v=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),v.prototype.constructor=v}function w(e,t){return new Promise(function(n,o){var r=new g(e,t);if(r.signal&&r.signal.aborted)return o(new v("Aborted","AbortError"));var i=new XMLHttpRequest;function s(){i.abort()}i.onload=function(){var e,t,a={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new c,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var n=e.split(":"),a=n.shift().trim();if(a){var o=n.join(":").trim();t.append(a,o)}}),t)};a.url="responseURL"in i?i.responseURL:a.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;n(new b(o,a))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.onabort=function(){o(new v("Aborted","AbortError"))},i.open(r.method,r.url,!0),"include"===r.credentials?i.withCredentials=!0:"omit"===r.credentials&&(i.withCredentials=!1),"responseType"in i&&a.blob&&(i.responseType="blob"),r.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),r.signal&&(r.signal.addEventListener("abort",s),i.onreadystatechange=function(){4===i.readyState&&r.signal.removeEventListener("abort",s)}),i.send(void 0===r._bodyInit?null:r._bodyInit)})}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=c,self.Request=g,self.Response=b)}}]);
//# sourceMappingURL=component---src-pages-container-master-js-8c803564c841c86973ea.js.map