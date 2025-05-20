import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{b as ue}from"./index-BXymfbzT.js";import{B as me}from"./Button-C_M5m9yp.js";import"./jsx-runtime-Bw5QeaCk.js";import"./styled-BmwyKE_S.js";import"./defaultTheme-BbZN4HXF.js";import"./memoTheme-BIAxD-kR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./useId-Bkih4Gzu.js";import"./ButtonBase-HGi7il7J.js";import"./TransitionGroupContext-B5gLlu5z.js";import"./useEnhancedEffect-DU8l2LAB.js";import"./emotion-react.browser.esm-BuNWDWuz.js";import"./CircularProgress-nUGTnlGq.js";var b={},_,V;function xe(){return V||(V=1,_=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var r=document.activeElement,x=[],v=0;v<t.rangeCount;v++)x.push(t.getRangeAt(v));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||x.forEach(function(y){t.addRange(y)}),r&&r.focus()}}),_}var B,q;function ve(){if(q)return B;q=1;var t=xe(),r={"text/plain":"Text","text/html":"Url",default:"Text"},x="Copy to clipboard: #{key}, Enter";function v(u){var h=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return u.replace(/#{\s*key\s*}/g,h)}function y(u,h){var p,A,P,S,g,l,D=!1;h||(h={}),p=h.debug||!1;try{P=t(),S=document.createRange(),g=document.getSelection(),l=document.createElement("span"),l.textContent=u,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(m){if(m.stopPropagation(),h.format)if(m.preventDefault(),typeof m.clipboardData>"u"){p&&console.warn("unable to use e.clipboardData"),p&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var T=r[h.format]||r.default;window.clipboardData.setData(T,u)}else m.clipboardData.clearData(),m.clipboardData.setData(h.format,u);h.onCopy&&(m.preventDefault(),h.onCopy(m.clipboardData))}),document.body.appendChild(l),S.selectNodeContents(l),g.addRange(S);var R=document.execCommand("copy");if(!R)throw new Error("copy command was unsuccessful");D=!0}catch(m){p&&console.error("unable to copy using execCommand: ",m),p&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(h.format||"text",u),h.onCopy&&h.onCopy(window.clipboardData),D=!0}catch(T){p&&console.error("unable to copy using clipboardData: ",T),p&&console.error("falling back to prompt"),A=v("message"in h?h.message:x),window.prompt(A,u)}}finally{g&&(typeof g.removeRange=="function"?g.removeRange(S):g.removeAllRanges()),l&&document.body.removeChild(l),P()}return D}return B=y,B}var z;function pe(){if(z)return b;z=1;function t(o){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},t(o)}Object.defineProperty(b,"__esModule",{value:!0}),b.CopyToClipboard=void 0;var r=y(ue()),x=y(ve()),v=["text","onCopy","options","children"];function y(o){return o&&o.__esModule?o:{default:o}}function u(o,c){var d=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);c&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),d.push.apply(d,s)}return d}function h(o){for(var c=1;c<arguments.length;c++){var d=arguments[c]!=null?arguments[c]:{};c%2?u(Object(d),!0).forEach(function(s){M(o,s,d[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(d)):u(Object(d)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(d,s))})}return o}function p(o,c){if(o==null)return{};var d=A(o,c),s,a;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(o);for(a=0;a<I.length;a++)s=I[a],!(c.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(o,s)&&(d[s]=o[s])}return d}function A(o,c){if(o==null)return{};var d={},s=Object.keys(o),a,I;for(I=0;I<s.length;I++)a=s[I],!(c.indexOf(a)>=0)&&(d[a]=o[a]);return d}function P(o,c){if(!(o instanceof c))throw new TypeError("Cannot call a class as a function")}function S(o,c){for(var d=0;d<c.length;d++){var s=c[d];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(o,s.key,s)}}function g(o,c,d){return c&&S(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),o}function l(o,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(c&&c.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),c&&D(o,c)}function D(o,c){return D=Object.setPrototypeOf||function(s,a){return s.__proto__=a,s},D(o,c)}function R(o){var c=re();return function(){var s=E(o),a;if(c){var I=E(this).constructor;a=Reflect.construct(s,arguments,I)}else a=s.apply(this,arguments);return m(this,a)}}function m(o,c){if(c&&(t(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(o)}function T(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function re(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function E(o){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)},E(o)}function M(o,c,d){return c in o?Object.defineProperty(o,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[c]=d,o}var G=function(o){l(d,o);var c=R(d);function d(){var s;P(this,d);for(var a=arguments.length,I=new Array(a),C=0;C<a;C++)I[C]=arguments[C];return s=c.call.apply(c,[this].concat(I)),M(T(s),"onClick",function(F){var O=s.props,U=O.text,W=O.onCopy,le=O.children,he=O.options,k=r.default.Children.only(le),Ie=(0,x.default)(U,he);W&&W(U,Ie),k&&k.props&&typeof k.props.onClick=="function"&&k.props.onClick(F)}),s}return g(d,[{key:"render",value:function(){var a=this.props;a.text,a.onCopy,a.options;var I=a.children,C=p(a,v),F=r.default.Children.only(I);return r.default.cloneElement(F,h(h({},C),{},{onClick:this.onClick}))}}]),d}(r.default.PureComponent);return b.CopyToClipboard=G,M(G,"defaultProps",{onCopy:void 0,options:void 0}),b}var H,$;function ye(){if($)return H;$=1;var t=pe(),r=t.CopyToClipboard;return r.CopyToClipboard=r,H=r,H}var ge=ye();const n=({name:t,children:r,icon:x})=>e.jsxs("div",{className:"flex flex-col justify-center items-center space-y-2",style:{width:180},children:[r,e.jsx(ge.CopyToClipboard,{text:`import { ${t} } from "@t1-org/t1components/src/assets/${x?"icons":"logos"}"`,children:e.jsx(me,{sx:{width:50,height:20,fontSize:10},size:"small",variant:"outlined",color:"secondary",children:"Copy"})})]});n.__docgenInfo={description:"",methods:[],displayName:"IconDisplay",props:{name:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"boolean"},description:""}}};const i=({icon:t,width:r,height:x,sx:v,className:y})=>{const u=typeof t=="string"?`/logos/${t}.svg`:t;return e.jsx("img",{src:u,alt:"Icon",width:r||20,height:x||20,style:v,className:y})};i.__docgenInfo={description:"",methods:[],displayName:"T1IconStory"};const Re={title:"Foundations/icons",parameters:{}},f=()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:"3rem",justifySelf:"center"},children:[e.jsx(n,{icon:!1,name:"T1PaginasLogos",children:e.jsx(i,{icon:"T1PaginasLogos",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"T1PagosLogos",children:e.jsx(i,{icon:"T1PagosLogos",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"NewT1PagosLogoWhite",children:e.jsx(i,{icon:"NewT1PagosLogoWhite",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"T1EnviosLogo",children:e.jsx(i,{icon:"T1EnviosLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"T1ComerciosLogo",children:e.jsx(i,{icon:"T1ComerciosLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"AmericanExpressLogo",children:e.jsx(i,{icon:"AmericanExpressLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"CarnetLogo",children:e.jsx(i,{icon:"CarnetLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"MastercardLogo",children:e.jsx(i,{icon:"MastercardLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"VisaLogo",children:e.jsx(i,{icon:"VisaLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"CreditoClaroShopLogo",children:e.jsx(i,{icon:"CreditoClaroShopLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"OxxoLogo",children:e.jsx(i,{icon:"OxxoLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"FedexExpressLogo",children:e.jsx(i,{icon:"FedexExpressLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"EstafetaLogo",children:e.jsx(i,{icon:"EstafetaLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"DhlLogo",children:e.jsx(i,{icon:"DhlLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"ExpressLogo",children:e.jsx(i,{icon:"ExpressLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"ClaroScoreLogo",children:e.jsx(i,{icon:"ClaroScoreLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"BanorteLogo",children:e.jsx(i,{icon:"BanorteLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"BBVALogo",children:e.jsx(i,{icon:"BBVALogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"CitibanamexLogo",children:e.jsx(i,{icon:"CitibanamexLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"HSBCLogo",children:e.jsx(i,{icon:"HSBCLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"InbursaLogo",children:e.jsx(i,{icon:"InbursaLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"InvexLogo",children:e.jsx(i,{icon:"InvexLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"PayPalLogo",children:e.jsx(i,{icon:"PayPalLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"SantanderLogo",children:e.jsx(i,{icon:"SantanderLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"ScotiabankLogo",children:e.jsx(i,{icon:"ScotiabankLogo",width:140,height:140,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"StripeLogo",children:e.jsx(i,{icon:"StripeLogo",width:140,height:140,sx:void 0,className:void 0})})]});f.storyName="External Logos";f.args={width:140,height:140,title:"Icon Title Here",classes:[""],ariaHidden:!1};f.argTypes={fill:{control:{type:"color"}}};const w=()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:"3rem",justifySelf:"center"},children:[e.jsx(n,{icon:!1,name:"T1Paginas",children:e.jsx(i,{icon:"T1Paginas",width:24,height:24,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"SearsLogo",children:e.jsx(i,{icon:"SearsLogo",width:24,height:24,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"SanbornsLogo",children:e.jsx(i,{icon:"SanbornsLogo",width:24,height:24,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"MercadoLibreIconLogo",children:e.jsx(i,{icon:"MercadoLibreIconLogo",width:24,height:24,sx:void 0,className:void 0})}),e.jsx(n,{icon:!1,name:"AmazonIconLogo",children:e.jsx(i,{icon:"AmazonIconLogo",width:24,height:24,sx:void 0,className:void 0})})]});w.storyName="Ecommerce Icons";w.args={width:140,height:140,title:"Icon Title Here",classes:[""]};w.argTypes={color:{control:{type:"color"}}};const N=()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:"3rem",justifySelf:"center"},children:[e.jsx("div",{children:e.jsx(n,{icon:!0,name:"AbacusIcon",children:e.jsx(i,{icon:"AbacusIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"AddressesAlternativeIcon",children:e.jsx(i,{icon:"AddressesAlternativeIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"AddressesIcon",children:e.jsx(i,{icon:"AddressesIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"AlertIcon",children:e.jsx(i,{icon:"AlertIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"AnalysisIcon",children:e.jsx(i,{icon:"AnalysisIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"AntifraudIcon",children:e.jsx(i,{icon:"AntifraudIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"AverageWeightIcon",children:e.jsx(i,{icon:"AverageWeightIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"BagMoneyIcon",children:e.jsx(i,{icon:"BagMoneyIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"BalanceIcon",children:e.jsx(i,{icon:"BalanceIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"BillsIcon",children:e.jsx(i,{icon:"BillsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"BusinessAndFinanceIcon",children:e.jsx(i,{icon:"BusinessAndFinanceIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"CalendarIcon",children:e.jsx(i,{icon:"CalendarIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"CatalogsIcon",children:e.jsx(i,{icon:"CatalogsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"CloseIcon",children:e.jsx(i,{icon:"CloseIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"CoinsIcon",children:e.jsx(i,{icon:"CoinsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"CompanyIcon",children:e.jsx(i,{icon:"CompanyIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"DashboardIcon",children:e.jsx(i,{icon:"DashboardIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"DealIcon",children:e.jsx(i,{icon:"DealIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"DeleteIcon",children:e.jsx(i,{icon:"DeleteIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"DevelopmentIcon",children:e.jsx(i,{icon:"DevelopmentIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"DownloadIcon",children:e.jsx(i,{icon:"DownloadIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"EditIcon",children:e.jsx(i,{icon:"EditIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"EmailIcon",children:e.jsx(i,{icon:"EmailIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"ExitIcon",children:e.jsx(i,{icon:"ExitIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"FilterIcon",children:e.jsx(i,{icon:"FilterIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"FlowIcon",children:e.jsx(i,{icon:"FlowIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"GenerateCollectionsIcon",children:e.jsx(i,{icon:"GenerateCollectionsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"GenerateGuidesIcon",children:e.jsx(i,{icon:"GenerateGuidesIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"GuideHistoryIcon",children:e.jsx(i,{icon:"GuideHistoryIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"GuideTrackingIcon",children:e.jsx(i,{icon:"GuideTrackingIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"HelpIcon",children:e.jsx(i,{icon:"HelpIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"HomeIcon",children:e.jsx(i,{icon:"HomeIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"InventoryIcon",children:e.jsx(i,{icon:"InventoryIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"ListIcon",children:e.jsx(i,{icon:"ListIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"LocationIcon",children:e.jsx(i,{icon:"LocationIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"MoneyIcon",children:e.jsx(i,{icon:"MoneyIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"MyOrdersIcon",children:e.jsx(i,{icon:"MyOrdersIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"MyProductsIcon",children:e.jsx(i,{icon:"MyProductsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NotificationIcon",children:e.jsx(i,{icon:"NotificationIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"PaymentLinkIcon",children:e.jsx(i,{icon:"PaymentLinkIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"RatesIcon",children:e.jsx(i,{icon:"RatesIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"ReportIcon",children:e.jsx(i,{icon:"ReportIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"ReportsIcon",children:e.jsx(i,{icon:"ReportsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"ReputationIcon",children:e.jsx(i,{icon:"ReputationIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"RulesIcon",children:e.jsx(i,{icon:"RulesIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"SalesChannelIcon",children:e.jsx(i,{icon:"SalesChannelIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"SalesChannelsIcon",children:e.jsx(i,{icon:"SalesChannelsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"SalesIcon",children:e.jsx(i,{icon:"SalesIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"SearchIcon",children:e.jsx(i,{icon:"SearchIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"TicketIcon",children:e.jsx(i,{icon:"TicketIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"TrackOrdersIcon",children:e.jsx(i,{icon:"TrackOrdersIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"TransactionsIcon",children:e.jsx(i,{icon:"TransactionsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"UserIcon",children:e.jsx(i,{icon:"UserIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"UsersIcon",children:e.jsx(i,{icon:"UsersIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"VideoIcon",children:e.jsx(i,{icon:"VideoIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"WhatsAppIcon",children:e.jsx(i,{icon:"WhatsAppIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NavigationArrowIcon",children:e.jsx(i,{icon:"NavigationArrowIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"ChargebackIcon",children:e.jsx(i,{icon:"ChargebackIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"DevelopersIcon",children:e.jsx(i,{icon:"DevelopersIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"LinkIcon",children:e.jsx(i,{icon:"LinkIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"GraphicReportsListIcon",children:e.jsx(i,{icon:"GraphicReportsListIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"FinancialCardIcon",children:e.jsx(i,{icon:"FinancialCardIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"CheckIcon",children:e.jsx(i,{icon:"CheckIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"AddIcon",children:e.jsx(i,{icon:"AddIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"PaginationNextIcon",children:e.jsx(i,{icon:"PaginationNextIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"PaginationNextIcon",children:e.jsx(i,{icon:"PaginationNextIcon",width:24,height:24,sx:{transform:"rotate(180deg)"},className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"PaginationSkipIcon",children:e.jsx(i,{icon:"PaginationSkipIcon",width:24,height:24,sx:{transform:"rotate(180deg)"},className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"PaginationSkipIcon",children:e.jsx(i,{icon:"PaginationSkipIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NextOutlinedIcon",children:e.jsx(i,{icon:"NextOutlinedIcon",width:24,height:24,sx:{transform:"rotate(180deg)"},className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NextOutlinedIcon",children:e.jsx(i,{icon:"NextOutlinedIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"SkipOutlinedIcon",children:e.jsx(i,{icon:"SkipOutlinedIcon",width:24,height:24,sx:{transform:"rotate(180deg)"},className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"SkipOutlinedIcon",children:e.jsx(i,{icon:"SkipOutlinedIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"MenuArrowIcon",children:e.jsx(i,{icon:"MenuArrowIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"MenuArrowIcon",children:e.jsx(i,{icon:"MenuArrowIcon",width:24,height:24,sx:{transform:"rotate(180deg)"},className:void 0})})})]});N.storyName="All Legacy Icons";N.args={width:140,height:140};N.argTypes={color:{control:{type:"color"}}};const j=()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:"3rem",justifySelf:"center"},children:[e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewChangeNameIcon",children:e.jsx(i,{icon:"NewChangeNameIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewChargebacksIcon",children:e.jsx(i,{icon:"NewChargebacksIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewCompanyRegistrationIcon",children:e.jsx(i,{icon:"NewCompanyRegistrationIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewDeactivateIcon",children:e.jsx(i,{icon:"NewDeactivateIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewDecisionManagerIcon",children:e.jsx(i,{icon:"NewDecisionManagerIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewDevelopersIcon",children:e.jsx(i,{icon:"NewDevelopersIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewDragAndMoveIcon",children:e.jsx(i,{icon:"NewDragAndMoveIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewFinanceIcon",children:e.jsx(i,{icon:"NewFinanceIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewFlowAdminIcon",children:e.jsx(i,{icon:"NewFlowAdminIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewHomeIcon",children:e.jsx(i,{icon:"NewHomeIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewMyStoreIcon",children:e.jsx(i,{icon:"NewMyStoreIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewPaymentLinkIcon",children:e.jsx(i,{icon:"NewPaymentLinkIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewProfilesIcon",children:e.jsx(i,{icon:"NewProfilesIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewReportsIcon",children:e.jsx(i,{icon:"NewReportsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewRolesAndUsersIcon",children:e.jsx(i,{icon:"NewRolesAndUsersIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewSupplierAdminIcon",children:e.jsx(i,{icon:"NewSupplierAdminIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewTransactionsIcon",children:e.jsx(i,{icon:"NewTransactionsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewHubFlowsIcon",children:e.jsx(i,{icon:"NewHubFlowsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewSettingsIcon",children:e.jsx(i,{icon:"NewSettingsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewExpandMenuIcon",children:e.jsx(i,{icon:"NewExpandMenuIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewExpandMenuIcon",children:e.jsx(i,{icon:"NewExpandMenuIcon",width:24,height:24,sx:{transform:"rotate(180deg)"},className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewRulesetIcon",children:e.jsx(i,{icon:"NewRulesetIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewCustomFieldsIcon",children:e.jsx(i,{icon:"NewCustomFieldsIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewAntiFraudIcon",children:e.jsx(i,{icon:"NewAntiFraudIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewBalancesIcon",children:e.jsx(i,{icon:"NewBalancesIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewAmexIcon",children:e.jsx(i,{icon:"NewAmexIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewApprovedIcon",children:e.jsx(i,{icon:"NewApprovedIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewCalendarIcon",children:e.jsx(i,{icon:"NewCalendarIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewCarnetIcon",children:e.jsx(i,{icon:"NewCarnetIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewEditIcon",children:e.jsx(i,{icon:"NewEditIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewExcelIcon",children:e.jsx(i,{icon:"NewExcelIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewFilterIcon",children:e.jsx(i,{icon:"NewFilterIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewInfoIcon",children:e.jsx(i,{icon:"NewInfoIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewMailIcon",children:e.jsx(i,{icon:"NewMailIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewMastercardIcon",children:e.jsx(i,{icon:"NewMastercardIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewSpeiIcon",children:e.jsx(i,{icon:"NewSpeiIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewVisaIcon",children:e.jsx(i,{icon:"NewVisaIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewCopyIcon",children:e.jsx(i,{icon:"NewCopyIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewEyeIcon",children:e.jsx(i,{icon:"NewEyeIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewIntegrationIcon",children:e.jsx(i,{icon:"NewIntegrationIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewFileTextIcon",children:e.jsx(i,{icon:"NewFileTextIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewLockIcon",children:e.jsx(i,{icon:"NewLockIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewMobileIcon",children:e.jsx(i,{icon:"NewMobileIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewPCIcon",children:e.jsx(i,{icon:"NewPCIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewCameraIcon",children:e.jsx(i,{icon:"NewCameraIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewCreditCardIcon",children:e.jsx(i,{icon:"NewCreditCardIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewBoxIcon",children:e.jsx(i,{icon:"NewBoxIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewCurrencyIcon",children:e.jsx(i,{icon:"NewCurrencyIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewFacebookIcon",children:e.jsx(i,{icon:"NewFacebookIcon",width:24,height:24,sx:void 0,className:void 0})})}),e.jsx("div",{children:e.jsx(n,{icon:!0,name:"NewWhatsappIcon",children:e.jsx(i,{icon:"NewWhatsappIcon",width:24,height:24,sx:void 0,className:void 0})})})]}),L=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Iconography"}),e.jsx("p",{children:"Our icon system includes several categories of icons for different purposes."}),e.jsxs("ul",{children:[e.jsx("li",{children:"External Logos - Brand logos for partners and services"}),e.jsx("li",{children:"Ecommerce Icons - Icons specific to ecommerce functionality"}),e.jsx("li",{children:"Legacy Icons - Our older icon set"}),e.jsx("li",{children:"New Icons - Our refreshed icon library"})]}),e.jsx("p",{children:"Select a category from the sidebar to view the specific icons."})]});L.storyName="Iconography";j.storyName="All New Icons";j.args={width:140,height:140};j.argTypes={color:{control:{type:"color"}}};f.__docgenInfo={description:"",methods:[],displayName:"ExternalLogos"};w.__docgenInfo={description:"",methods:[],displayName:"EcommerceIcons"};N.__docgenInfo={description:"",methods:[],displayName:"AllLegacyIcons"};j.__docgenInfo={description:"",methods:[],displayName:"AllNewIcons"};L.__docgenInfo={description:"",methods:[],displayName:"Iconography"};var K,X,J;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '3rem',
    justifySelf: 'center'
  }}>
      <IconDisplay icon={false} name="T1PaginasLogos">
        <T1IconStory icon="T1PaginasLogos" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="T1PagosLogos">
        <T1IconStory icon="T1PagosLogos" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="NewT1PagosLogoWhite">
        <T1IconStory icon="NewT1PagosLogoWhite" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="T1EnviosLogo">
        <T1IconStory icon="T1EnviosLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="T1ComerciosLogo">
        <T1IconStory icon="T1ComerciosLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="AmericanExpressLogo">
        <T1IconStory icon="AmericanExpressLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="CarnetLogo">
        <T1IconStory icon="CarnetLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="MastercardLogo">
        <T1IconStory icon="MastercardLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="VisaLogo">
        <T1IconStory icon="VisaLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="CreditoClaroShopLogo">
        <T1IconStory icon="CreditoClaroShopLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="OxxoLogo">
        <T1IconStory icon="OxxoLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="FedexExpressLogo">
        <T1IconStory icon="FedexExpressLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="EstafetaLogo">
        <T1IconStory icon="EstafetaLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="DhlLogo">
        <T1IconStory icon="DhlLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="ExpressLogo">
        <T1IconStory icon="ExpressLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="ClaroScoreLogo">
        <T1IconStory icon="ClaroScoreLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="BanorteLogo">
        <T1IconStory icon="BanorteLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="BBVALogo">
        <T1IconStory icon="BBVALogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="CitibanamexLogo">
        <T1IconStory icon="CitibanamexLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="HSBCLogo">
        <T1IconStory icon="HSBCLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="InbursaLogo">
        <T1IconStory icon="InbursaLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="InvexLogo">
        <T1IconStory icon="InvexLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="PayPalLogo">
        <T1IconStory icon="PayPalLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="SantanderLogo">
        <T1IconStory icon="SantanderLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="ScotiabankLogo">
        <T1IconStory icon="ScotiabankLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="StripeLogo">
        <T1IconStory icon="StripeLogo" width={140} height={140} sx={undefined} className={undefined} />
      </IconDisplay>
    </div>;
}`,...(J=(X=f.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Y,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '3rem',
    justifySelf: 'center'
  }}>
      <IconDisplay icon={false} name="T1Paginas">
        <T1IconStory icon="T1Paginas" width={24} height={24} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="SearsLogo">
        <T1IconStory icon="SearsLogo" width={24} height={24} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="SanbornsLogo">
        <T1IconStory icon="SanbornsLogo" width={24} height={24} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="MercadoLibreIconLogo">
        <T1IconStory icon="MercadoLibreIconLogo" width={24} height={24} sx={undefined} className={undefined} />
      </IconDisplay>
      <IconDisplay icon={false} name="AmazonIconLogo">
        <T1IconStory icon="AmazonIconLogo" width={24} height={24} sx={undefined} className={undefined} />
      </IconDisplay>
    </div>;
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ie;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '3rem',
    justifySelf: 'center'
  }}>
      <div>
        <IconDisplay icon={true} name="AbacusIcon">
          <T1IconStory icon="AbacusIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AddressesAlternativeIcon">
          <T1IconStory icon="AddressesAlternativeIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AddressesIcon">
          <T1IconStory icon="AddressesIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AlertIcon">
          <T1IconStory icon="AlertIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AnalysisIcon">
          <T1IconStory icon="AnalysisIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AntifraudIcon">
          <T1IconStory icon="AntifraudIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AverageWeightIcon">
          <T1IconStory icon="AverageWeightIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="BagMoneyIcon">
          <T1IconStory icon="BagMoneyIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="BalanceIcon">
          <T1IconStory icon="BalanceIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="BillsIcon">
          <T1IconStory icon="BillsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="BusinessAndFinanceIcon">
          <T1IconStory icon="BusinessAndFinanceIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CalendarIcon">
          <T1IconStory icon="CalendarIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CatalogsIcon">
          <T1IconStory icon="CatalogsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CloseIcon">
          <T1IconStory icon="CloseIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CoinsIcon">
          <T1IconStory icon="CoinsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CompanyIcon">
          <T1IconStory icon="CompanyIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DashboardIcon">
          <T1IconStory icon="DashboardIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DealIcon">
          <T1IconStory icon="DealIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DeleteIcon">
          <T1IconStory icon="DeleteIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DevelopmentIcon">
          <T1IconStory icon="DevelopmentIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DownloadIcon">
          <T1IconStory icon="DownloadIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="EditIcon">
          <T1IconStory icon="EditIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="EmailIcon">
          <T1IconStory icon="EmailIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ExitIcon">
          <T1IconStory icon="ExitIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="FilterIcon">
          <T1IconStory icon="FilterIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="FlowIcon">
          <T1IconStory icon="FlowIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GenerateCollectionsIcon">
          <T1IconStory icon="GenerateCollectionsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GenerateGuidesIcon">
          <T1IconStory icon="GenerateGuidesIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GuideHistoryIcon">
          <T1IconStory icon="GuideHistoryIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GuideTrackingIcon">
          <T1IconStory icon="GuideTrackingIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="HelpIcon">
          <T1IconStory icon="HelpIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="HomeIcon">
          <T1IconStory icon="HomeIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="InventoryIcon">
          <T1IconStory icon="InventoryIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ListIcon">
          <T1IconStory icon="ListIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="LocationIcon">
          <T1IconStory icon="LocationIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MoneyIcon">
          <T1IconStory icon="MoneyIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MyOrdersIcon">
          <T1IconStory icon="MyOrdersIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MyProductsIcon">
          <T1IconStory icon="MyProductsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NotificationIcon">
          <T1IconStory icon="NotificationIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaymentLinkIcon">
          <T1IconStory icon="PaymentLinkIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="RatesIcon">
          <T1IconStory icon="RatesIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ReportIcon">
          <T1IconStory icon="ReportIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ReportsIcon">
          <T1IconStory icon="ReportsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ReputationIcon">
          <T1IconStory icon="ReputationIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="RulesIcon">
          <T1IconStory icon="RulesIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SalesChannelIcon">
          <T1IconStory icon="SalesChannelIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SalesChannelsIcon">
          <T1IconStory icon="SalesChannelsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SalesIcon">
          <T1IconStory icon="SalesIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SearchIcon">
          <T1IconStory icon="SearchIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="TicketIcon">
          <T1IconStory icon="TicketIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="TrackOrdersIcon">
          <T1IconStory icon="TrackOrdersIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="TransactionsIcon">
          <T1IconStory icon="TransactionsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="UserIcon">
          <T1IconStory icon="UserIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="UsersIcon">
          <T1IconStory icon="UsersIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="VideoIcon">
          <T1IconStory icon="VideoIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="WhatsAppIcon">
          <T1IconStory icon="WhatsAppIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NavigationArrowIcon">
          <T1IconStory icon="NavigationArrowIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="ChargebackIcon">
          <T1IconStory icon="ChargebackIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="DevelopersIcon">
          <T1IconStory icon="DevelopersIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="LinkIcon">
          <T1IconStory icon="LinkIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="GraphicReportsListIcon">
          <T1IconStory icon="GraphicReportsListIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="FinancialCardIcon">
          <T1IconStory icon="FinancialCardIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="CheckIcon">
          <T1IconStory icon="CheckIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="AddIcon">
          <T1IconStory icon="AddIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaginationNextIcon">
          <T1IconStory icon="PaginationNextIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaginationNextIcon">
          <T1IconStory icon="PaginationNextIcon" width={24} height={24} sx={{
          transform: "rotate(180deg)"
        }} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaginationSkipIcon">
          <T1IconStory icon="PaginationSkipIcon" width={24} height={24} sx={{
          transform: "rotate(180deg)"
        }} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="PaginationSkipIcon">
          <T1IconStory icon="PaginationSkipIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NextOutlinedIcon">
          <T1IconStory icon="NextOutlinedIcon" width={24} height={24} sx={{
          transform: "rotate(180deg)"
        }} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NextOutlinedIcon">
          <T1IconStory icon="NextOutlinedIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SkipOutlinedIcon">
          <T1IconStory icon="SkipOutlinedIcon" width={24} height={24} sx={{
          transform: "rotate(180deg)"
        }} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="SkipOutlinedIcon">
          <T1IconStory icon="SkipOutlinedIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MenuArrowIcon">
          <T1IconStory icon="MenuArrowIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="MenuArrowIcon">
          <T1IconStory icon="MenuArrowIcon" width={24} height={24} sx={{
          transform: "rotate(180deg)"
        }} className={undefined} />
        </IconDisplay>
      </div>
    </div>;
}`,...(ie=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,ce,se;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '3rem',
    justifySelf: 'center'
  }}>
      <div>
        <IconDisplay icon={true} name="NewChangeNameIcon">
          <T1IconStory icon="NewChangeNameIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewChargebacksIcon">
          <T1IconStory icon="NewChargebacksIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCompanyRegistrationIcon">
          <T1IconStory icon="NewCompanyRegistrationIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewDeactivateIcon">
          <T1IconStory icon="NewDeactivateIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewDecisionManagerIcon">
          <T1IconStory icon="NewDecisionManagerIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewDevelopersIcon">
          <T1IconStory icon="NewDevelopersIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewDragAndMoveIcon">
          <T1IconStory icon="NewDragAndMoveIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFinanceIcon">
          <T1IconStory icon="NewFinanceIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFlowAdminIcon">
          <T1IconStory icon="NewFlowAdminIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewHomeIcon">
          <T1IconStory icon="NewHomeIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewMyStoreIcon">
          <T1IconStory icon="NewMyStoreIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewPaymentLinkIcon">
          <T1IconStory icon="NewPaymentLinkIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewProfilesIcon">
          <T1IconStory icon="NewProfilesIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewReportsIcon">
          <T1IconStory icon="NewReportsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewRolesAndUsersIcon">
          <T1IconStory icon="NewRolesAndUsersIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewSupplierAdminIcon">
          <T1IconStory icon="NewSupplierAdminIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewTransactionsIcon">
          <T1IconStory icon="NewTransactionsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewHubFlowsIcon">
          <T1IconStory icon="NewHubFlowsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewSettingsIcon">
          <T1IconStory icon="NewSettingsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewExpandMenuIcon">
          <T1IconStory icon="NewExpandMenuIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewExpandMenuIcon">
          <T1IconStory icon="NewExpandMenuIcon" width={24} height={24} sx={{
          transform: "rotate(180deg)"
        }} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewRulesetIcon">
          <T1IconStory icon="NewRulesetIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCustomFieldsIcon">
          <T1IconStory icon="NewCustomFieldsIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewAntiFraudIcon">
          <T1IconStory icon="NewAntiFraudIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewBalancesIcon">
          <T1IconStory icon="NewBalancesIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewAmexIcon">
          <T1IconStory icon="NewAmexIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewApprovedIcon">
          <T1IconStory icon="NewApprovedIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCalendarIcon">
          <T1IconStory icon="NewCalendarIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCarnetIcon">
          <T1IconStory icon="NewCarnetIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewEditIcon">
          <T1IconStory icon="NewEditIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewExcelIcon">
          <T1IconStory icon="NewExcelIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFilterIcon">
          <T1IconStory icon="NewFilterIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewInfoIcon">
          <T1IconStory icon="NewInfoIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewMailIcon">
          <T1IconStory icon="NewMailIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewMastercardIcon">
          <T1IconStory icon="NewMastercardIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewSpeiIcon">
          <T1IconStory icon="NewSpeiIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewVisaIcon">
          <T1IconStory icon="NewVisaIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCopyIcon">
          <T1IconStory icon="NewCopyIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewEyeIcon">
          <T1IconStory icon="NewEyeIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewIntegrationIcon">
          <T1IconStory icon="NewIntegrationIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFileTextIcon">
          <T1IconStory icon="NewFileTextIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewLockIcon">
          <T1IconStory icon="NewLockIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewMobileIcon">
          <T1IconStory icon="NewMobileIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewPCIcon">
          <T1IconStory icon="NewPCIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCameraIcon">
          <T1IconStory icon="NewCameraIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCreditCardIcon">
          <T1IconStory icon="NewCreditCardIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewBoxIcon">
          <T1IconStory icon="NewBoxIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewCurrencyIcon">
          <T1IconStory icon="NewCurrencyIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewFacebookIcon">
          <T1IconStory icon="NewFacebookIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay icon={true} name="NewWhatsappIcon">
          <T1IconStory icon="NewWhatsappIcon" width={24} height={24} sx={undefined} className={undefined} />
        </IconDisplay>
      </div>
    </div>;
}`,...(se=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var de,ae,te;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <div>
      <h1>Iconography</h1>
      <p>Our icon system includes several categories of icons for different purposes.</p>
      <ul>
        <li>External Logos - Brand logos for partners and services</li>
        <li>Ecommerce Icons - Icons specific to ecommerce functionality</li>
        <li>Legacy Icons - Our older icon set</li>
        <li>New Icons - Our refreshed icon library</li>
      </ul>
      <p>Select a category from the sidebar to view the specific icons.</p>
    </div>;
}`,...(te=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Me=["ExternalLogos","EcommerceIcons","AllLegacyIcons","AllNewIcons","Iconography"];export{N as AllLegacyIcons,j as AllNewIcons,w as EcommerceIcons,f as ExternalLogos,L as Iconography,Me as __namedExportsOrder,Re as default};
