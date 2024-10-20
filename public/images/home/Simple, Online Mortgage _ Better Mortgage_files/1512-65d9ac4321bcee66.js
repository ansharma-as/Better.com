(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1512,4439],{9996:function(e){"use strict";var isMergeableObject=function(e){return isNonNullObject(e)&&!isSpecial(e)};function isNonNullObject(e){return!!e&&"object"==typeof e}function isSpecial(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||isReactElement(e)}var t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function isReactElement(e){return e.$$typeof===t}function emptyTarget(e){return Array.isArray(e)?[]:{}}function cloneUnlessOtherwiseSpecified(e,t){return!1!==t.clone&&t.isMergeableObject(e)?deepmerge(emptyTarget(e),e,t):e}function defaultArrayMerge(e,t,o){return e.concat(t).map(function(e){return cloneUnlessOtherwiseSpecified(e,o)})}function getMergeFunction(e,t){if(!t.customMerge)return deepmerge;var o=t.customMerge(e);return"function"==typeof o?o:deepmerge}function getEnumerableOwnPropertySymbols(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function getKeys(e){return Object.keys(e).concat(getEnumerableOwnPropertySymbols(e))}function propertyIsOnObject(e,t){try{return t in e}catch(e){return!1}}function propertyIsUnsafe(e,t){return propertyIsOnObject(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function mergeObject(e,t,o){var n={};return o.isMergeableObject(e)&&getKeys(e).forEach(function(t){n[t]=cloneUnlessOtherwiseSpecified(e[t],o)}),getKeys(t).forEach(function(r){propertyIsUnsafe(e,r)||(propertyIsOnObject(e,r)&&o.isMergeableObject(t[r])?n[r]=getMergeFunction(r,o)(e[r],t[r],o):n[r]=cloneUnlessOtherwiseSpecified(t[r],o))}),n}function deepmerge(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||defaultArrayMerge,o.isMergeableObject=o.isMergeableObject||isMergeableObject,o.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var n=Array.isArray(t);return n!==Array.isArray(e)?cloneUnlessOtherwiseSpecified(t,o):n?o.arrayMerge(e,t,o):mergeObject(e,t,o)}deepmerge.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,o){return deepmerge(e,o,t)},{})};var o=deepmerge;e.exports=o},58875:function(e,t,o){var n,r,a;a={canUseDOM:r=!!("undefined"!=typeof window&&window.document&&window.document.createElement),canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!!(window.addEventListener||window.attachEvent),canUseViewport:r&&!!window.screen},void 0!==(n=(function(){return a}).call(t,o,t,e))&&(e.exports=n)},76439:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(45711);/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n.Z)("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]])},46871:function(e,t,o){"use strict";function componentWillMount(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function componentWillReceiveProps(e){function updater(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}this.setState(updater.bind(this))}function componentWillUpdate(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}function polyfill(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,n=null,r=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?n="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(n="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==o||null!==n||null!==r)throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=componentWillMount,t.componentWillReceiveProps=componentWillReceiveProps),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=componentWillUpdate;var a=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;a.call(this,e,t,n)}}return e}o.r(t),o.d(t,{polyfill:function(){return polyfill}}),componentWillMount.__suppressDeprecationWarning=!0,componentWillReceiveProps.__suppressDeprecationWarning=!0,componentWillUpdate.__suppressDeprecationWarning=!0},29983:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),a=o(67294),l=_interopRequireDefault(a),s=_interopRequireDefault(o(73935)),i=_interopRequireDefault(o(45697)),u=_interopRequireDefault(o(28747)),c=_interopRequireWildcard(o(57149)),d=o(51112),f=_interopRequireDefault(d),p=o(46871);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",m=d.canUseDOM&&void 0!==s.default.createPortal,createHTMLElement=function(e){return document.createElement(e)},getCreatePortal=function(){return m?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer},b=function(e){function Modal(){_classCallCheck(this,Modal);for(var e,t,o,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=o=_possibleConstructorReturn(this,(e=Modal.__proto__||Object.getPrototypeOf(Modal)).call.apply(e,[this].concat(a))),o.removePortal=function(){m||s.default.unmountComponentAtNode(o.node);var e=(0,o.props.parentSelector)();e&&e.contains(o.node)?e.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(e){o.portal=e},o.renderPortal=function(e){var t=getCreatePortal()(o,l.default.createElement(u.default,n({defaultStyles:Modal.defaultStyles},e)),o.node);o.portalRef(t)},_possibleConstructorReturn(o,t)}return _inherits(Modal,e),r(Modal,[{key:"componentDidMount",value:function(){d.canUseDOM&&(m||(this.node=createHTMLElement("div")),this.node.className=this.props.portalClassName,(0,this.props.parentSelector)().appendChild(this.node),m||this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:(0,e.parentSelector)(),nextParent:(0,this.props.parentSelector)()}}},{key:"componentDidUpdate",value:function(e,t,o){if(d.canUseDOM){var n=this.props,r=n.isOpen,a=n.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=o.prevParent,s=o.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&(m||this.renderPortal(this.props))}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),o=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);o?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&m?(!this.node&&m&&(this.node=createHTMLElement("div")),getCreatePortal()(l.default.createElement(u.default,n({ref:this.portalRef,defaultStyles:Modal.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),Modal}(a.Component);b.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(f.default),i.default.instanceOf(d.SafeHTMLCollection),i.default.instanceOf(d.SafeNodeList),i.default.arrayOf(i.default.instanceOf(f.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},b.defaultProps={isOpen:!1,portalClassName:h,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return l.default.createElement("div",e,t)},contentElement:function(e,t){return l.default.createElement("div",e,t)}},b.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(b),t.default=b},28747:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),l=o(67294),s=_interopRequireDefault(o(45697)),i=_interopRequireWildcard(o(99685)),u=_interopRequireDefault(o(88338)),c=_interopRequireWildcard(o(57149)),d=_interopRequireWildcard(o(32409)),f=o(51112),p=_interopRequireDefault(f),h=_interopRequireDefault(o(89623));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o(35063);var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},m=0,b=function(e){function ModalPortal(e){_classCallCheck(this,ModalPortal);var t=_possibleConstructorReturn(this,(ModalPortal.__proto__||Object.getPrototypeOf(ModalPortal)).call(this,e));return t.setOverlayRef=function(e){t.overlay=e,t.props.overlayRef&&t.props.overlayRef(e)},t.setContentRef=function(e){t.content=e,t.props.contentRef&&t.props.contentRef(e)},t.afterClose=function(){var e=t.props,o=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName,l=e.parentSelector,s=l&&l().ownerDocument||document;a&&d.remove(s.body,a),r&&d.remove(s.getElementsByTagName("html")[0],r),n&&m>0&&0==(m-=1)&&c.show(o),t.props.shouldFocusAfterRender&&(t.props.shouldReturnFocusAfterClose?(i.returnFocus(t.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),t.props.onAfterClose&&t.props.onAfterClose(),h.default.deregister(t)},t.open=function(){t.beforeOpen(),t.state.afterOpen&&t.state.beforeClose?(clearTimeout(t.closeTimer),t.setState({beforeClose:!1})):(t.props.shouldFocusAfterRender&&(i.setupScopedFocus(t.node),i.markForFocusLater()),t.setState({isOpen:!0},function(){t.openAnimationFrame=requestAnimationFrame(function(){t.setState({afterOpen:!0}),t.props.isOpen&&t.props.onAfterOpen&&t.props.onAfterOpen({overlayEl:t.overlay,contentEl:t.content})})}))},t.close=function(){t.props.closeTimeoutMS>0?t.closeWithTimeout():t.closeWithoutTimeout()},t.focusContent=function(){return t.content&&!t.contentHasFocus()&&t.content.focus({preventScroll:!0})},t.closeWithTimeout=function(){var e=Date.now()+t.props.closeTimeoutMS;t.setState({beforeClose:!0,closesAt:e},function(){t.closeTimer=setTimeout(t.closeWithoutTimeout,t.state.closesAt-Date.now())})},t.closeWithoutTimeout=function(){t.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},t.afterClose)},t.handleKeyDown=function(e){("Tab"===e.code||9===e.keyCode)&&(0,u.default)(t.content,e),t.props.shouldCloseOnEsc&&("Escape"===e.code||27===e.keyCode)&&(e.stopPropagation(),t.requestClose(e))},t.handleOverlayOnClick=function(e){null===t.shouldClose&&(t.shouldClose=!0),t.shouldClose&&t.props.shouldCloseOnOverlayClick&&(t.ownerHandlesClose()?t.requestClose(e):t.focusContent()),t.shouldClose=null},t.handleContentOnMouseUp=function(){t.shouldClose=!1},t.handleOverlayOnMouseDown=function(e){t.props.shouldCloseOnOverlayClick||e.target!=t.overlay||e.preventDefault()},t.handleContentOnClick=function(){t.shouldClose=!1},t.handleContentOnMouseDown=function(){t.shouldClose=!1},t.requestClose=function(e){return t.ownerHandlesClose()&&t.props.onRequestClose(e)},t.ownerHandlesClose=function(){return t.props.onRequestClose},t.shouldBeClosed=function(){return!t.state.isOpen&&!t.state.beforeClose},t.contentHasFocus=function(){return document.activeElement===t.content||t.content.contains(document.activeElement)},t.buildClassName=function(e,o){var n=(void 0===o?"undefined":r(o))==="object"?o:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},a=n.base;return t.state.afterOpen&&(a=a+" "+n.afterOpen),t.state.beforeClose&&(a=a+" "+n.beforeClose),"string"==typeof o&&o?a+" "+o:a},t.attributesFromObject=function(e,t){return Object.keys(t).reduce(function(o,n){return o[e+"-"+n]=t[n],o},{})},t.state={afterOpen:!1,beforeClose:!1},t.shouldClose=null,t.moveFromContentToOverlay=null,t}return _inherits(ModalPortal,e),a(ModalPortal,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,o=e.ariaHideApp,n=e.htmlOpenClassName,r=e.bodyOpenClassName,a=e.parentSelector,l=a&&a().ownerDocument||document;r&&d.add(l.body,r),n&&d.add(l.getElementsByTagName("html")[0],n),o&&(m+=1,c.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.className,r=e.overlayClassName,a=e.defaultStyles,l=e.children,s=o?{}:a.content,i=r?{}:a.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:n({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=n({id:t,ref:this.setContentRef,style:n({},s,this.props.style.content),className:this.buildClassName("content",o),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(c,l);return this.props.overlayElement(u,d)}}]),ModalPortal}(l.Component);b.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},b.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(f.SafeHTMLCollection),s.default.instanceOf(f.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=b,e.exports=t.default},57149:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log,t.assertNodeList=assertNodeList,t.setElement=setElement,t.validateElement=validateElement,t.hide=hide,t.show=show,t.documentNotReadyOrSSRTesting=documentNotReadyOrSSRTesting;var n=_interopRequireDefault(o(42473)),r=o(51112);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var a=null;function resetState(){a&&(a.removeAttribute?a.removeAttribute("aria-hidden"):null!=a.length?a.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(a).forEach(function(e){return e.removeAttribute("aria-hidden")})),a=null}function log(){}function assertNodeList(e,t){if(!e||!e.length)throw Error("react-modal: No elements were found for selector "+t+".")}function setElement(e){var t=e;if("string"==typeof t&&r.canUseDOM){var o=document.querySelectorAll(t);assertNodeList(o,t),t=o}return a=t||a}function validateElement(e){var t=e||a;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,n.default)(!1,"react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`."),[])}function hide(e){var t=!0,o=!1,n=void 0;try{for(var r,a=validateElement(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.setAttribute("aria-hidden","true")}catch(e){o=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(o)throw n}}}function show(e){var t=!0,o=!1,n=void 0;try{for(var r,a=validateElement(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.removeAttribute("aria-hidden")}catch(e){o=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(o)throw n}}}function documentNotReadyOrSSRTesting(){a=null}},35063:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log;var n=_interopRequireDefault(o(89623));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var r=void 0,a=void 0,l=[];function resetState(){for(var e=[r,a],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}r=a=null,l=[]}function log(){console.log("bodyTrap ----------"),console.log(l.length);for(var e=[r,a],t=0;t<e.length;t++){var o=e[t]||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function focusContent(){0!==l.length&&l[l.length-1].focusContent()}function bodyTrap(e,t){r||a||((r=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),r.style.position="absolute",r.style.opacity="0",r.setAttribute("tabindex","0"),r.addEventListener("focus",focusContent),(a=r.cloneNode()).addEventListener("focus",focusContent)),(l=t).length>0?(document.body.firstChild!==r&&document.body.insertBefore(r,document.body.firstChild),document.body.lastChild!==a&&document.body.appendChild(a)):(r.parentElement&&r.parentElement.removeChild(r),a.parentElement&&a.parentElement.removeChild(a))}n.default.subscribe(bodyTrap)},32409:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log;var o={},n={};function removeClass(e,t){e.classList.remove(t)}function resetState(){var e=document.getElementsByTagName("html")[0];for(var t in o)removeClass(e,o[t]);var r=document.body;for(var a in n)removeClass(r,n[a]);o={},n={}}function log(){}var trackClass=function(e,t,o){o.forEach(function(o){t[o]||(t[o]=0),t[o]+=1,e.add(o)})},untrackClass=function(e,t,o){o.forEach(function(o){t[o]&&(t[o]-=1),0===t[o]&&e.remove(o)})};t.add=function(e,t){return trackClass(e.classList,"html"==e.nodeName.toLowerCase()?o:n,t.split(" "))},t.remove=function(e,t){return untrackClass(e.classList,"html"==e.nodeName.toLowerCase()?o:n,t.split(" "))}},99685:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log,t.handleBlur=handleBlur,t.handleFocus=handleFocus,t.markForFocusLater=markForFocusLater,t.returnFocus=returnFocus,t.popWithoutFocus=popWithoutFocus,t.setupScopedFocus=setupScopedFocus,t.teardownScopedFocus=teardownScopedFocus;var n=_interopRequireDefault(o(37845));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var r=[],a=null,l=!1;function resetState(){r=[]}function log(){}function handleBlur(){l=!0}function handleFocus(){l&&(l=!1,a&&setTimeout(function(){a.contains(document.activeElement)||((0,n.default)(a)[0]||a).focus()},0))}function markForFocusLater(){r.push(document.activeElement)}function returnFocus(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{0!==r.length&&(t=r.pop()).focus({preventScroll:e});return}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function popWithoutFocus(){r.length>0&&r.pop()}function setupScopedFocus(e){a=e,window.addEventListener?(window.addEventListener("blur",handleBlur,!1),document.addEventListener("focus",handleFocus,!0)):(window.attachEvent("onBlur",handleBlur),document.attachEvent("onFocus",handleFocus))}function teardownScopedFocus(){a=null,window.addEventListener?(window.removeEventListener("blur",handleBlur),document.removeEventListener("focus",handleFocus)):(window.detachEvent("onBlur",handleBlur),document.detachEvent("onFocus",handleFocus))}},89623:function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.log=log,t.resetState=resetState;var PortalOpenInstances=function PortalOpenInstances(){var e=this;_classCallCheck(this,PortalOpenInstances),this.register=function(t){-1===e.openInstances.indexOf(t)&&(e.openInstances.push(t),e.emit("register"))},this.deregister=function(t){var o=e.openInstances.indexOf(t);-1!==o&&(e.openInstances.splice(o,1),e.emit("deregister"))},this.subscribe=function(t){e.subscribers.push(t)},this.emit=function(t){e.subscribers.forEach(function(o){return o(t,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},o=new PortalOpenInstances;function log(){console.log("portalOpenInstances ----------"),console.log(o.openInstances.length),o.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function resetState(){o=new PortalOpenInstances}t.default=o},51112:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var n,r=((n=o(58875))&&n.__esModule?n:{default:n}).default,a=r.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=r.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=r.canUseDOM?window.NodeList:{},t.canUseDOM=r.canUseDOM,t.default=a},88338:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=scopeTab;var n=_interopRequireDefault(o(37845));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getActiveElement(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?getActiveElement(e.activeElement.shadowRoot):e.activeElement}function scopeTab(e,t){var o=(0,n.default)(e);if(!o.length){t.preventDefault();return}var r=void 0,a=t.shiftKey,l=o[0],s=o[o.length-1],i=getActiveElement();if(e===i){if(!a)return;r=s}if(s!==i||a||(r=l),l===i&&a&&(r=s),r){t.preventDefault(),r.focus();return}var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=u&&"Chrome"!=u[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var c=o.indexOf(i);if(c>-1&&(c+=a?-1:1),void 0===(r=o[c])){t.preventDefault(),(r=a?s:l).focus();return}t.preventDefault(),r.focus()}}e.exports=t.default},37845:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=findTabbableDescendants;var o=/input|select|textarea|button|object|iframe/;function isNotOverflowing(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}function hidesContents(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var o=window.getComputedStyle(e),n=o.getPropertyValue("display");return t?"contents"!==n&&isNotOverflowing(e,o):"none"===n}catch(e){return console.warn("Failed to inspect element style"),!1}}function visible(e){for(var t=e,o=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(o&&t===o&&(t=o.host.parentNode),hidesContents(t))return!1;t=t.parentNode}return!0}function focusable(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&visible(e)}function tabbable(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var o=isNaN(t);return(o||t>=0)&&focusable(e,!o)}function findTabbableDescendants(e){return[].slice.call(e.querySelectorAll("*"),0).reduce(function(e,t){return e.concat(t.shadowRoot?findTabbableDescendants(t.shadowRoot):[t])},[]).filter(tabbable)}e.exports=t.default},83253:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_interopRequireDefault(o(29983));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=n.default,e.exports=t.default},60356:function(e,t,o){var n,r,a=Object.create,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,__defNormalProp=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,__copyProps=(e,t,o,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of i(t))c.call(e,r)||r===o||l(e,r,{get:()=>t[r],enumerable:!(n=s(t,r))||n.enumerable});return e},__publicField=(e,t,o)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,o),o),d={};((e,t)=>{for(var o in t)l(e,o,{get:t[o],enumerable:!0})})(d,{default:()=>YouTube}),e.exports=__copyProps(l({},"__esModule",{value:!0}),d);var f=(r=null!=(n=o(67294))?a(u(n)):{},__copyProps(n&&n.__esModule?r:l(r,"default",{value:n,enumerable:!0}),n)),p=o(38045),h=o(71776);let y=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,b=/youtube-nocookie\.com/;let YouTube=class YouTube extends f.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",p.callPlayer),__publicField(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(y.test(e)){let[,t]=e.match(y);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(m.test(e)){let[,t]=e.match(m);return{listType:"user_uploads",list:t}}return{}}),__publicField(this,"onStateChange",e=>{let{data:t}=e,{onPlay:o,onPause:n,onBuffer:r,onBufferEnd:a,onEnded:l,onReady:s,loop:i,config:{playerVars:u,onUnstarted:c}}=this.props,{UNSTARTED:d,PLAYING:f,PAUSED:p,BUFFERING:h,ENDED:y,CUED:m}=window.YT.PlayerState;if(t===d&&c(),t===f&&(o(),a()),t===p&&n(),t===h&&r(),t===y){let e=!!this.callPlayer("getPlaylist");i&&!e&&(u.start?this.seekTo(u.start):this.play()),l()}t===m&&s()}),__publicField(this,"mute",()=>{this.callPlayer("mute")}),__publicField(this,"unmute",()=>{this.callPlayer("unMute")}),__publicField(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||y.test(e)?null:e.match(h.MATCH_URL_YOUTUBE)[1]}load(e,t){let{playing:o,muted:n,playsinline:r,controls:a,loop:l,config:s,onError:i}=this.props,{playerVars:u,embedOptions:c}=s,d=this.getID(e);if(t){if(y.test(e)||m.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:d,startSeconds:(0,p.parseStartTime)(e)||u.start,endSeconds:(0,p.parseEndTime)(e)||u.end});return}(0,p.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",e=>e.loaded).then(t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:d,playerVars:{autoplay:o?1:0,mute:n?1:0,controls:a?1:0,start:(0,p.parseStartTime)(e),end:(0,p.parseEndTime)(e),origin:window.location.origin,playsinline:r?1:0,...this.parsePlaylist(e),...u},events:{onReady:()=>{l&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>i(e.data)},host:b.test(e)?"https://www.youtube-nocookie.com":void 0,...c}))},i),c.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){let{display:e}=this.props;return f.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},f.default.createElement("div",{ref:this.ref}))}};__publicField(YouTube,"displayName","YouTube"),__publicField(YouTube,"canPlay",h.canPlay.youtube)},15655:function(e,t,o){var n=o(70390).createReactPlayer,r=o(60356).default;e.exports=n([{key:"youtube",canPlay:r.canPlay,lazyPlayer:r}])},42473:function(e){"use strict";e.exports=function(){}}}]);