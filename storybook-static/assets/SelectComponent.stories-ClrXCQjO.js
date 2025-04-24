import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as V}from"./createSvgIcon-b5IFCipV.js";import{r as l,R as _e}from"./index-BXymfbzT.js";import{n as ie}from"./image-DwLHI-Re.js";import{c as B}from"./CommonStyles.module-D_--k38T.js";import{T as Q}from"./Typography-DS7NmyJ3.js";import{c as K,s as D,r as Ue}from"./styled-C6O4spo1.js";import{g as X,b as ee,c as L,a as de}from"./defaultTheme-B7jBPaaC.js";import{u as Ye}from"./useControlled-5dYq2F3P.js";import{c as pe,u as Ze}from"./createSimplePaletteValueFilter-DKwZs-al.js";import{u as Je}from"./useId-iqt95REQ.js";import{u as ae,f as Ve}from"./useFormControl-hi_-Bm5a.js";import{u as re}from"./DefaultPropsProvider-B6e4UF29.js";import{c as te,m as oe}from"./memoTheme-D1v331c6.js";import{M as d}from"./MenuItem-C8rEpSH1.js";import{u as De,a as Ke}from"./useSlot-BmXk5o7q.js";import{S as Qe,C as Xe}from"./Checkbox-DEYHlmXE.js";import{c as et}from"./Grow-C70ld54Z.js";import{B as ue}from"./Button-bz5dUx8Z.js";import{D as ne}from"./Divider-C53wUNe9.js";import{M as tt}from"./Menu-DWe73gnW.js";import"./jsx-runtime-Bw5QeaCk.js";import"./image-context-9EevjYAT.js";import"./index-DGKHe-6Q.js";import"./index-CzG76ALe.js";import"./extendSxProp-BhyoeeqO.js";import"./useEnhancedEffect-Dyb8TRSh.js";import"./MenuList-C_ub-TVM.js";import"./ButtonBase-CXK0KjYY.js";import"./listItemTextClasses-ExQqjRvV.js";import"./dividerClasses-DrQmggxL.js";import"./index-D4B05_Au.js";import"./CircularProgress-Dr3nbNzo.js";function ot(t){return ee("MuiFormControlLabel",t)}const J=X("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),nt=t=>{const{classes:o,disabled:s,labelPlacement:a,error:r,required:m}=t,f={root:["root",s&&"disabled",`labelPlacement${L(a)}`,r&&"error",m&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",r&&"error"]};return te(f,ot,o)},st=D("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[{[`& .${J.label}`]:o.label},o.root,o[`labelPlacement${L(s.labelPlacement)}`]]}})(oe(({theme:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${J.disabled}`]:{cursor:"default"},[`& .${J.label}`]:{[`&.${J.disabled}`]:{color:(t.vars||t).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:o})=>o==="start"||o==="top"||o==="bottom",style:{marginLeft:16}}]}))),it=D("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(t,o)=>o.asterisk})(oe(({theme:t})=>({[`&.${J.error}`]:{color:(t.vars||t).palette.error.main}}))),at=l.forwardRef(function(o,s){const a=re({props:o,name:"MuiFormControlLabel"}),{checked:r,className:m,componentsProps:f={},control:x,disabled:p,disableTypography:b,inputRef:I,label:n,labelPlacement:T="end",name:v,onChange:z,required:M,slots:j={},slotProps:N={},value:S,...F}=a,O=ae(),A=p??x.props.disabled??(O==null?void 0:O.disabled),w=M??x.props.required,q={disabled:A,required:w};["checked","name","onChange","value","inputRef"].forEach(U=>{typeof x.props[U]>"u"&&typeof a[U]<"u"&&(q[U]=a[U])});const i=Ve({props:a,muiFormControl:O,states:["error"]}),c={...a,disabled:A,labelPlacement:T,required:w,error:i.error},h=nt(c),g={slots:j,slotProps:{...f,...N}},[u,y]=De("typography",{elementType:Q,externalForwardedProps:g,ownerState:c});let P=n;return P!=null&&P.type!==Q&&!b&&(P=e.jsx(u,{component:"span",...y,className:K(h.label,y==null?void 0:y.className),children:P})),e.jsxs(st,{className:K(h.root,m),ownerState:c,ref:s,...F,children:[l.cloneElement(x,q),w?e.jsxs("div",{children:[P,e.jsxs(it,{ownerState:c,"aria-hidden":!0,className:h.asterisk,children:[" ","*"]})]}):P]})});function rt(t){return ee("MuiFormGroup",t)}X("MuiFormGroup",["root","row","error"]);const lt=t=>{const{classes:o,row:s,error:a}=t;return te({root:["root",s&&"row",a&&"error"]},rt,o)},ct=D("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,s.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),dt=l.forwardRef(function(o,s){const a=re({props:o,name:"MuiFormGroup"}),{className:r,row:m=!1,...f}=a,x=ae(),p=Ve({props:a,muiFormControl:x,states:["error"]}),b={...a,row:m,error:p.error},I=lt(b);return e.jsx(ct,{className:K(I.root,r),ownerState:b,ref:s,...f})}),pt=V(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),ut=V(e.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),mt=D("span",{shouldForwardProp:Ue})({position:"relative",display:"flex"}),ht=D(pt)({transform:"scale(1)"}),ft=D(ut)(oe(({theme:t})=>({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})}}]})));function Le(t){const{checked:o=!1,classes:s={},fontSize:a}=t,r={...t,checked:o};return e.jsxs(mt,{className:s.root,ownerState:r,children:[e.jsx(ht,{fontSize:a,className:s.background,ownerState:r}),e.jsx(ft,{fontSize:a,className:s.dot,ownerState:r})]})}const Ge=l.createContext(void 0);function xt(){return l.useContext(Ge)}function bt(t){return ee("MuiRadio",t)}const me=X("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),yt=t=>{const{classes:o,color:s,size:a}=t,r={root:["root",`color${L(s)}`,a!=="medium"&&`size${L(a)}`]};return{...o,...te(r,bt,o)}},gt=D(Qe,{shouldForwardProp:t=>Ue(t)||t==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,s.size!=="medium"&&o[`size${L(s.size)}`],o[`color${L(s.color)}`]]}})(oe(({theme:t})=>({color:(t.vars||t).palette.text.secondary,[`&.${me.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:de(t.palette.action.active,t.palette.action.hoverOpacity)}}},...Object.entries(t.palette).filter(pe()).map(([o])=>({props:{color:o,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:de(t.palette[o].main,t.palette.action.hoverOpacity)}}})),...Object.entries(t.palette).filter(pe()).map(([o])=>({props:{color:o,disabled:!1},style:{[`&.${me.checked}`]:{color:(t.vars||t).palette[o].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function Ct(t,o){return typeof o=="object"&&o!==null?t===o:String(t)===String(o)}const vt=e.jsx(Le,{checked:!0}),St=e.jsx(Le,{}),kt=l.forwardRef(function(o,s){const a=re({props:o,name:"MuiRadio"}),{checked:r,checkedIcon:m=vt,color:f="primary",icon:x=St,name:p,onChange:b,size:I="medium",className:n,disabled:T,disableRipple:v=!1,slots:z={},slotProps:M={},inputProps:j,...N}=a,S=ae();let F=T;S&&typeof F>"u"&&(F=S.disabled),F??(F=!1);const O={...a,disabled:F,disableRipple:v,color:f,size:I},A=yt(O),w=xt();let q=r;const i=et(b,w&&w.onChange);let c=p;w&&(typeof q>"u"&&(q=Ct(w.value,a.value)),typeof c>"u"&&(c=w.name));const h=M.input??j,[g,u]=De("root",{ref:s,elementType:gt,className:K(A.root,n),shouldForwardComponentProp:!0,externalForwardedProps:{slots:z,slotProps:M,...N},getSlotProps:y=>({...y,onChange:(P,...U)=>{var ce;(ce=y.onChange)==null||ce.call(y,P,...U),i(P,...U)}}),ownerState:O,additionalProps:{type:"radio",icon:l.cloneElement(x,{fontSize:x.props.fontSize??I}),checkedIcon:l.cloneElement(m,{fontSize:m.props.fontSize??I}),disabled:F,name:c,checked:q,slots:z,slotProps:{input:typeof h=="function"?h(O):h}}});return e.jsx(g,{...u,classes:A})});function It(t){return ee("MuiRadioGroup",t)}X("MuiRadioGroup",["root","row","error"]);const wt=t=>{const{classes:o,row:s,error:a}=t;return te({root:["root",s&&"row",a&&"error"]},It,o)},jt=l.forwardRef(function(o,s){const{actions:a,children:r,className:m,defaultValue:f,name:x,onChange:p,value:b,...I}=o,n=l.useRef(null),T=wt(o),[v,z]=Ye({controlled:b,default:f,name:"RadioGroup"});l.useImperativeHandle(a,()=>({focus:()=>{let S=n.current.querySelector("input:not(:disabled):checked");S||(S=n.current.querySelector("input:not(:disabled)")),S&&S.focus()}}),[]);const M=Ze(s,n),j=Je(x),N=l.useMemo(()=>({name:j,onChange(S){z(S.target.value),p&&p(S,S.target.value)},value:v}),[j,p,z,v]);return e.jsx(Ge.Provider,{value:N,children:e.jsx(dt,{role:"radiogroup",ref:M,className:K(T.root,m),...I,children:r})})}),E=V(e.jsx("path",{d:"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1q-.09-.03-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"})),k=V(e.jsx("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"})),He=V(e.jsx("path",{d:"m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"})),le=V(e.jsx("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z"})),Ot=V(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})),R=({...t})=>e.jsx(Q,{...t,children:t.label});R.__docgenInfo={description:"",methods:[],displayName:"SelectItem",props:{value:{required:!1,tsType:{name:"union",raw:"boolean | string | number",elements:[{name:"boolean"},{name:"string"},{name:"number"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},cheked:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e:any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}}},description:""}},composes:["TypographyProps"]};const G=({children:t,name:o,onChange:s,initialValue:a})=>{const[r,m]=l.useState(o||a||"");l.useEffect(()=>{o!==void 0&&o!==r&&m(o)},[o]);const f=(p,b)=>{m(p),s&&s(p),b&&b()},x=()=>l.Children.map(t,(p,b)=>{const I=p;if(!l.isValidElement(p))return p;const{props:n}=I;if(p.type===R){const T=o!==void 0?o===(n==null?void 0:n.value):r===(n==null?void 0:n.value);return e.jsx(d,{onClick:v=>{v.stopPropagation(),f(n==null?void 0:n.value,n!=null&&n.onClick?()=>n.onClick(event):void 0)},children:e.jsx(at,{value:n==null?void 0:n.value,control:e.jsx(kt,{checked:T,onChange:v=>{v.stopPropagation(),f(n==null?void 0:n.value,n!=null&&n.onClick?()=>n.onClick(event):void 0)}}),label:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.icon&&(typeof n.icon=="string"?e.jsx(ie,{src:n.icon,alt:"icon",width:22,height:22,style:{marginRight:"8px"}}):n.icon),n==null?void 0:n.label,n==null?void 0:n.children]}),onClick:v=>{v.preventDefault(),v.stopPropagation(),f(n==null?void 0:n.value,n!=null&&n.onClick?()=>n.onClick(event):void 0)},sx:{"& .MuiFormControlLabel-label":{fontSize:"12px"}}})},`menu-item-${b}`)}return p});return e.jsx(jt,{value:o!==void 0?o:r,onChange:p=>{s&&s(p.target.value)},children:t&&x()})};G.__docgenInfo={description:"",methods:[],displayName:"FormControlSelect",props:{value:{required:!1,tsType:{name:"any"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $=({checkbox:t,icon:o,onCheckboxClick:s,children:a,...r})=>e.jsx(Q,{...r,children:a});$.__docgenInfo={description:"",methods:[],displayName:"CheckBoxSelect",props:{checkbox:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},onCheckboxClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};function se(t,o={}){return typeof t=="object"&&t!==null?{...o,...t}:o}function he(t,o={},s){if(!l.isValidElement(t))return t;const a=typeof t.props=="object"&&t.props!==null?t.props:{},r=`${a.className||""} ${s}`.trim(),m={...a,...o,...r?{className:r}:{}};return l.cloneElement(t,m)}const We=({menuProps:t,additionalItems:o=[],children:s,label:a,endIcon:r,startIcon:m,additionalIcon:f,buttonType:x="contained",disableElevation:p=!1,className:b="",ariaLabel:I,testId:n,sx:T,color:v="inherit",buttonProps:z={}})=>{var w,q;const[M,j]=l.useState(null),N=Ke(),S=l.useCallback(i=>{i.onClick&&i.onClick(),j(null)},[]),F=l.useCallback(()=>l.Children.map(s,(i,c)=>{if(!l.isValidElement(i))return i;if(i.type===R){const{label:h,onClick:g,icon:u}=se(i.props,{});return e.jsxs(d,{className:`${B["more-options-item"]}`,onClick:y=>{y.stopPropagation(),g==null||g(y)},children:[u&&(typeof u=="string"?e.jsx(ie,{alt:`selectIcon-${c}`,src:u,height:25,width:25}):u),h]},c)}if(i.type===$){const{checkbox:h,icon:g,onCheckboxClick:u}=se(i.props,{});return e.jsxs(d,{className:B.marketplace,onClick:y=>{y.stopPropagation(),u==null||u()},children:[e.jsx(Xe,{checked:!!h,onChange:y=>{y.stopPropagation(),u==null||u()}}),g&&(typeof g=="string"?e.jsx(ie,{src:g,className:B["marketplace-logo"],alt:"icon",width:22,height:22,style:{marginRight:"8px"}}):g),i]},`menu-item-${c}`)}if(i.type===d){const h=se(i.props,{});return l.cloneElement(i,{key:i.key||`menu-item-${c}`,...h.onClick&&{onClick:g=>{var u;g.stopPropagation(),(u=h.onClick)==null||u.call(h,g),j(null)}},...i.type===d&&{sx:{...h.sx,display:"flex",alignItems:"center",fontSize:"12px",paddingY:"6px"}}})}return i.type===G?he(i,{key:i.key||`form-control-${c}`},B.marketplace):he(i,{key:i.key||`unknown-${c}`},B.marketplace)}),[s]),O={fontSize:"12px",fontWeight:"400",lineHeight:"100%",color:"#000000",position:"relative",border:"1px solid #e7e7e7;",borderRadius:"7px",height:"30px",...x==="contained"&&!p&&{boxShadow:N.shadows[2],transition:"all 0.3s ease","&:hover":{boxShadow:N.shadows[4],transform:"translateY(-2px)"},"&:active":{boxShadow:N.shadows[1],transform:"translateY(0)"}},...T},A=l.useMemo(()=>[B["options-button"],"text-red",b].join(" "),[b]);return e.jsxs("div",{className:B["select-component"],"data-testid":n,children:[e.jsx(ue,{"aria-label":I||a,variant:x,className:A,endIcon:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[r||e.jsx(Ot,{}),f&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{orientation:"vertical",flexItem:!0}),f]})]}),startIcon:m,color:v,onClick:i=>j(i.currentTarget),...z,sx:O,children:a}),e.jsxs(tt,{sx:{...t==null?void 0:t.sx,mt:"35px",maxHeight:"60vh",cursor:"pointer"},anchorEl:M,anchorOrigin:{vertical:((w=t==null?void 0:t.anchorOrigin)==null?void 0:w.vertical)||"top",horizontal:((q=t==null?void 0:t.anchorOrigin)==null?void 0:q.horizontal)||"left"},transformOrigin:{vertical:"top",horizontal:"left"},open:!!M,onClose:i=>{var c;j(null),(c=t==null?void 0:t.onClose)==null||c.call(t,i)},onClick:i=>{var c;i.stopPropagation(),(c=t==null?void 0:t.onClick)==null||c.call(t,i)},role:"menu","aria-labelledby":"select-menu-button",children:[s&&F(),o.length>0&&e.jsx(ne,{}),o.map(i=>i.type==="divider"?e.jsx(ne,{className:"py-3"},i.id):e.jsx("div",{onClick:c=>{c.stopPropagation(),S(i)},className:`${B["clean-button"]} ${i.className} justify-self-end`,children:e.jsx(ue,{variant:"text",children:i.label})},i.id))]})]})},C=_e.memo(We);We.__docgenInfo={description:"",methods:[],displayName:"SelectComponent",props:{menuProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  sx?: SxProps<Theme>;
  anchorOrigin?: {
    vertical?: 'top' | 'bottom' | 'center';
    horizontal?: 'left' | 'right' | 'center';
  };
  onClose?: (event: React.SyntheticEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
}`,signature:{properties:[{key:"sx",value:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>",required:!1}},{key:"anchorOrigin",value:{name:"signature",type:"object",raw:`{
  vertical?: 'top' | 'bottom' | 'center';
  horizontal?: 'left' | 'right' | 'center';
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:"'top' | 'bottom' | 'center'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'center'"}],required:!1}},{key:"horizontal",value:{name:"union",raw:"'left' | 'right' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"}],required:!1}}]},required:!1}},{key:"onClose",value:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}},required:!1}}]}},description:""},disableElevation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},additionalItems:{required:!1,tsType:{name:"Array",elements:[{name:"AdditionalItemI"}],raw:"AdditionalItemI[]"},description:"",defaultValue:{value:"[]",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},additionalIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttonType:{required:!1,tsType:{name:"union",raw:"'text' | 'outlined' | 'contained'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'contained'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'",elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'inherit'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},buttonProps:{required:!1,tsType:{name:"ButtonProps"},description:"",defaultValue:{value:"{}",computed:!1}}}};const ro={title:"Components/SelectComponent",component:C,parameters:{layout:"centered",docs:{description:{component:`
          A flexible dropdown component that combines button styling with dropdown menu functionality.
          
          ## When to use
          - For dropdown menus that need to stand out as buttons
          - When dropdown options might include checkbox selections
          - For navigation menus with visual hierarchy
          - In complex forms where standard selects lack visual emphasis
          
          ## Composition
          The SelectComponent works with specialized sub-components:
          - \`SelectItem\` - Standard menu items with icon support
          - \`CheckBoxSelect\` - Items with checkbox functionality
          - \`FormControlSelect\` - Container for organizing select items
        `}}},argTypes:{buttonType:{control:{type:"select",options:["contained","outlined","text"]},description:"The visual style of the button that triggers the dropdown"},color:{control:"select",options:["primary","secondary","error","info","success","warning","inherit"],description:"The color of the button element"},label:{control:"text",description:"The text displayed on the button"},startIcon:{description:"Icon displayed at the start of the button"},endIcon:{description:"Icon displayed at the end of the button"},additionalIcon:{description:"Additional icon displayed after a separator"},additionalItems:{description:"Array of additional menu items to be displayed at the bottom of the menu"},ariaLabel:{control:"text",description:"Accessibility label for screen readers"},testId:{control:"text",description:"Test ID for automated testing"},children:{description:"The content of the dropdown menu"}},tags:["autodocs"]},H={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs(C,{label:"Checkbox Select (Unchecked)",endIcon:e.jsx(k,{}),children:[e.jsx($,{checkbox:!1,icon:e.jsx(k,{}),onCheckboxClick:()=>console.log("User checkbox clicked"),children:"User Management"}),e.jsx($,{checkbox:!1,icon:e.jsx(E,{}),onCheckboxClick:()=>console.log("Settings checkbox clicked"),children:"System Settings"})]}),e.jsxs(C,{label:"Checkbox Select (Mixed)",endIcon:e.jsx(E,{}),children:[e.jsx($,{checkbox:!0,icon:e.jsx(He,{}),onCheckboxClick:()=>console.log("Home checkbox clicked"),children:"Home Configuration"}),e.jsx($,{checkbox:!1,icon:e.jsx(le,{}),onCheckboxClick:()=>console.log("Email checkbox clicked"),children:"Email Preferences"})]})]}),parameters:{docs:{description:{story:"Demonstrates checkboxes within dropdown menus for multi-select functionality. The left example shows unchecked options, while the right example shows a mix of checked and unchecked options."}}}},W={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(C,{color:"primary",label:"Select with Icons",additionalIcon:e.jsx(E,{}),children:e.jsxs(G,{children:[e.jsx(R,{label:"Products",icon:e.jsx(E,{}),value:"products",onClick:()=>console.log("Products clicked")}),e.jsx(R,{label:"Orders",icon:e.jsx(k,{}),value:"orders",onClick:()=>console.log("Orders clicked")})]})}),e.jsx(C,{label:"Select with Text and Icons",buttonType:"contained",additionalIcon:e.jsx(He,{}),children:e.jsxs(G,{children:[e.jsx(R,{label:"Manage Users",icon:e.jsx(k,{}),value:"users",onClick:()=>console.log("Users clicked")}),e.jsx(R,{label:"System Settings",icon:e.jsx(E,{}),value:"settings",onClick:()=>console.log("Settings clicked")})]})})]}),parameters:{docs:{description:{story:"Shows how to use SelectItem components with icons within a FormControlSelect container. The left example uses the default style while the right example uses a contained button style."}}}},_={render:()=>e.jsx(C,{label:"Advanced Select",buttonType:"contained",endIcon:e.jsx(E,{}),additionalItems:[{id:"add",label:"Add New",onClick:()=>console.log("Add new item")},{id:"divider",type:"divider"},{id:"manage",label:"Manage Options",onClick:()=>console.log("Manage options")}],children:e.jsxs(G,{children:[e.jsx(R,{label:"User Management",icon:e.jsx(k,{}),value:"users"}),e.jsx($,{checkbox:!0,icon:e.jsx(le,{}),onCheckboxClick:()=>console.log("Email notifications"),children:"Email Notifications"}),e.jsx(R,{label:"System Settings",icon:e.jsx(E,{}),value:"settings"})]})}),parameters:{docs:{description:{story:"A complex example showing multiple features together: different item types (SelectItem and CheckBoxSelect) and additional menu items at the bottom of the dropdown."}}}},Y={args:{label:"Accessible Custom Select",ariaLabel:"Select system preferences",testId:"system-preferences-select",buttonType:"contained",children:e.jsxs(G,{children:[e.jsx(R,{label:"Dark Mode",icon:e.jsx(E,{}),value:"dark-mode"}),e.jsx($,{checkbox:!1,icon:e.jsx(le,{}),onCheckboxClick:()=>console.log("Notifications toggled"),children:"Enable Notifications"})]})},parameters:{docs:{description:{story:"Demonstrates how to create accessible select components with proper ARIA attributes and testing identifiers."}}}},Z={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"block",gap:"20px"},children:[e.jsx("div",{children:e.jsx("h1",{children:"buttonType"})}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs(C,{label:"contained with Icon",buttonType:"contained",additionalIcon:e.jsx(k,{}),children:[e.jsx(d,{children:"Outline Option 1"}),e.jsx(d,{children:"Outline Option 2"})]}),e.jsxs(C,{label:"outlined with Icon",buttonType:"outlined",additionalIcon:e.jsx(E,{}),children:[e.jsx(d,{children:"Solid Option 1"}),e.jsx(d,{children:"Solid Option 2"})]})]})]}),e.jsxs("div",{style:{display:"block",gap:"20px"},children:[e.jsx("div",{children:e.jsx("h1",{children:"Variants"})}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs(C,{label:"primary",buttonType:"contained",color:"primary",additionalIcon:e.jsx(k,{}),children:[e.jsx(d,{children:"Outline Option 1"}),e.jsx(d,{children:"Outline Option 2"})]}),e.jsxs(C,{label:"error",buttonType:"contained",color:"error",additionalIcon:e.jsx(k,{}),children:[e.jsx(d,{children:"Outline Option 1"}),e.jsx(d,{children:"Outline Option 2"})]}),e.jsxs(C,{label:"info",buttonType:"contained",color:"info",additionalIcon:e.jsx(k,{}),children:[e.jsx(d,{children:"Outline Option 1"}),e.jsx(d,{children:"Outline Option 2"})]}),e.jsxs(C,{label:"inherit",buttonType:"contained",color:"inherit",additionalIcon:e.jsx(k,{}),children:[e.jsx(d,{children:"Outline Option 1"}),e.jsx(d,{children:"Outline Option 2"})]}),e.jsxs(C,{label:"secondary",buttonType:"contained",color:"secondary",additionalIcon:e.jsx(k,{}),children:[e.jsx(d,{children:"Outline Option 1"}),e.jsx(d,{children:"Outline Option 2"})]}),e.jsxs(C,{label:"success",buttonType:"contained",color:"success",additionalIcon:e.jsx(k,{}),children:[e.jsx(d,{children:"Outline Option 1"}),e.jsx(d,{children:"Outline Option 2"})]}),e.jsxs(C,{label:"warning",buttonType:"contained",color:"warning",additionalIcon:e.jsx(k,{}),children:[e.jsx(d,{children:"Outline Option 1"}),e.jsx(d,{children:"Outline Option 2"})]})]})]})]}),parameters:{docs:{description:{story:"Showcases different button types (contained, outlined) and color variants (primary, secondary, error, info, success, warning, inherit) available for the SelectComponent."}}}};var fe,xe,be,ye,ge;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px'
  }}>
      <SelectComponent label="Checkbox Select (Unchecked)" endIcon={<PersonOutlineIcon />}>
        <CheckBoxSelect checkbox={false} icon={<PersonOutlineIcon />} onCheckboxClick={() => console.log('User checkbox clicked')}>
          User Management
        </CheckBoxSelect>
        <CheckBoxSelect checkbox={false} icon={<SettingsOutlinedIcon />} onCheckboxClick={() => console.log('Settings checkbox clicked')}>
          System Settings
        </CheckBoxSelect>
      </SelectComponent>

      <SelectComponent label="Checkbox Select (Mixed)" endIcon={<SettingsOutlinedIcon />}>
        <CheckBoxSelect checkbox={true} icon={<HomeOutlinedIcon />} onCheckboxClick={() => console.log('Home checkbox clicked')}>
          Home Configuration
        </CheckBoxSelect>
        <CheckBoxSelect checkbox={false} icon={<EmailOutlinedIcon />} onCheckboxClick={() => console.log('Email checkbox clicked')}>
          Email Preferences
        </CheckBoxSelect>
      </SelectComponent>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates checkboxes within dropdown menus for multi-select functionality. The left example shows unchecked options, while the right example shows a mix of checked and unchecked options.'
      }
    }
  }
}`,...(be=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:be.source},description:{story:`This example shows how to use the \`CheckBoxSelect\` component within the dropdown.

The CheckBoxSelect component allows for multi-select functionality where users
can toggle options on and off via checkboxes. This is useful for filter menus
or settings panels where multiple options can be selected simultaneously.`,...(ge=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:ge.description}}};var Ce,ve,Se,ke,Ie;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px'
  }}>
      <SelectComponent color='primary' label="Select with Icons" additionalIcon={<SettingsOutlinedIcon />}>
        <FormControlSelect>
          <SelectItem label="Products" icon={<SettingsOutlinedIcon />} value="products" onClick={() => console.log('Products clicked')} />
          <SelectItem label="Orders" icon={<PersonOutlineIcon />} value="orders" onClick={() => console.log('Orders clicked')} />
        </FormControlSelect>
      </SelectComponent>

      <SelectComponent label="Select with Text and Icons" buttonType="contained" additionalIcon={<HomeOutlinedIcon />}>
        <FormControlSelect>
          <SelectItem label="Manage Users" icon={<PersonOutlineIcon />} value="users" onClick={() => console.log('Users clicked')} />
          <SelectItem label="System Settings" icon={<SettingsOutlinedIcon />} value="settings" onClick={() => console.log('Settings clicked')} />
        </FormControlSelect>
      </SelectComponent>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Shows how to use SelectItem components with icons within a FormControlSelect container. The left example uses the default style while the right example uses a contained button style.'
      }
    }
  }
}`,...(Se=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:Se.source},description:{story:`This example shows how to use custom \`SelectItem\` components with icons.

SelectItem components provide a standardized way to display selectable options
with optional icons. They are wrapped in a FormControlSelect to maintain proper
structure and accessibility.`,...(Ie=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Ie.description}}};var we,je,Oe,Re,Te;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <SelectComponent label="Advanced Select" buttonType="contained" endIcon={<SettingsOutlinedIcon />} additionalItems={[{
    id: 'add',
    label: 'Add New',
    onClick: () => console.log('Add new item')
  }, {
    id: 'divider',
    type: 'divider'
  }, {
    id: 'manage',
    label: 'Manage Options',
    onClick: () => console.log('Manage options')
  }]}>
      <FormControlSelect>
        <SelectItem label="User Management" icon={<PersonOutlineIcon />} value="users" />
        <CheckBoxSelect checkbox={true} icon={<EmailOutlinedIcon />} onCheckboxClick={() => console.log('Email notifications')}>
          Email Notifications
        </CheckBoxSelect>
        <SelectItem label="System Settings" icon={<SettingsOutlinedIcon />} value="settings" />
      </FormControlSelect>
    </SelectComponent>,
  parameters: {
    docs: {
      description: {
        story: 'A complex example showing multiple features together: different item types (SelectItem and CheckBoxSelect) and additional menu items at the bottom of the dropdown.'
      }
    }
  }
}`,...(Oe=(je=_.parameters)==null?void 0:je.docs)==null?void 0:Oe.source},description:{story:`This example demonstrates a complex use case combining different item types
and additional items at the bottom of the menu.

The \`additionalItems\` prop allows adding extra items such as actions, dividers,
or any custom menu items at the bottom of the dropdown menu.`,...(Te=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Te.description}}};var Me,Ne,Fe,qe,Pe;Y.parameters={...Y.parameters,docs:{...(Me=Y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    label: 'Accessible Custom Select',
    ariaLabel: 'Select system preferences',
    testId: 'system-preferences-select',
    buttonType: 'contained',
    children: <FormControlSelect>
        <SelectItem label="Dark Mode" icon={<SettingsOutlinedIcon />} value="dark-mode" />
        <CheckBoxSelect checkbox={false} icon={<EmailOutlinedIcon />} onCheckboxClick={() => console.log('Notifications toggled')}>
          Enable Notifications
        </CheckBoxSelect>
      </FormControlSelect>
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to create accessible select components with proper ARIA attributes and testing identifiers.'
      }
    }
  }
}`,...(Fe=(Ne=Y.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source},description:{story:`This example shows how to create accessible select components with built-in
accessibility attributes and testing identifiers.

Setting appropriate aria labels and test IDs ensures the component is both
accessible to screen readers and easily testable in automated tests.`,...(Pe=(qe=Y.parameters)==null?void 0:qe.docs)==null?void 0:Pe.description}}};var Ee,ze,Be,$e,Ae;Z.parameters={...Z.parameters,docs:{...(Ee=Z.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <>
    <div style={{
      display: 'block',
      gap: '20px'
    }}>
      <div>
        <h1>buttonType</h1>
      </div>
      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        <SelectComponent label="contained with Icon" buttonType="contained" additionalIcon={<PersonOutlineIcon />}>
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>
        <SelectComponent label="outlined with Icon" buttonType="outlined" additionalIcon={<SettingsOutlinedIcon />}>
          <MenuItem>Solid Option 1</MenuItem>
          <MenuItem>Solid Option 2</MenuItem>
        </SelectComponent>
      </div>
     
    </div>

    <div style={{
      display: 'block',
      gap: '20px'
    }}>
      <div>
        <h1>Variants</h1>
      </div>

      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        <SelectComponent label="primary" buttonType="contained" color='primary' additionalIcon={<PersonOutlineIcon />}>
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent label="error" buttonType="contained" color='error' additionalIcon={<PersonOutlineIcon />}>
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent label="info" buttonType="contained" color='info' additionalIcon={<PersonOutlineIcon />}>
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent label="inherit" buttonType="contained" color='inherit' additionalIcon={<PersonOutlineIcon />}>
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent label="secondary" buttonType="contained" color='secondary' additionalIcon={<PersonOutlineIcon />}>
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>
        
        <SelectComponent label="success" buttonType="contained" color='success' additionalIcon={<PersonOutlineIcon />}>
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>

        <SelectComponent label="warning" buttonType="contained" color='warning' additionalIcon={<PersonOutlineIcon />}>
          <MenuItem>Outline Option 1</MenuItem>
          <MenuItem>Outline Option 2</MenuItem>
        </SelectComponent>
      </div>
    </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Showcases different button types (contained, outlined) and color variants (primary, secondary, error, info, success, warning, inherit) available for the SelectComponent.'
      }
    }
  }
}`,...(Be=(ze=Z.parameters)==null?void 0:ze.docs)==null?void 0:Be.source},description:{story:`This example showcases different button types and color variants available for
the SelectComponent.

The component supports all Material UI button types (contained, outlined, text)
and color variants (primary, secondary, error, info, success, warning, inherit).`,...(Ae=($e=Z.parameters)==null?void 0:$e.docs)==null?void 0:Ae.description}}};const lo=["WithCheckboxSelect","WithSelectItemsAndIcons","ComplexSelectWithMixedComponents","AccessibleCustomSelect","ButtonVariantsWithIcons"];export{Y as AccessibleCustomSelect,Z as ButtonVariantsWithIcons,_ as ComplexSelectWithMixedComponents,H as WithCheckboxSelect,W as WithSelectItemsAndIcons,lo as __namedExportsOrder,ro as default};
