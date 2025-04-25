import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{r as s}from"./index-BXymfbzT.js";import{c as C}from"./CommonStyles.module-D_--k38T.js";import{T as F}from"./T1Icon-BhL2WAyO.js";import{I as ce}from"./InputAdornment-BoGHSgZW.js";import{I as pe}from"./IconButton-DirQ0k3w.js";import{B as i}from"./Box-DZedOxc9.js";import{T as f,P as Ja}from"./Typography-BX-3pE5G.js";import{T as Qa}from"./Tooltip-BU1sWs4i.js";import{T as Xa}from"./TextField-CUPchR4D.js";import{F as Za}from"./Select-DSLAnD-8.js";import{M as v}from"./MenuItem-DXaFae9B.js";import{S as Y}from"./Stack-Czdk5DBX.js";import"./jsx-runtime-Bw5QeaCk.js";import"./image-DwLHI-Re.js";import"./image-context-9EevjYAT.js";import"./index-DGKHe-6Q.js";import"./settings-icon-CWecReMl.js";import"./styled-SyO28NtG.js";import"./defaultTheme-JuPGuWN_.js";import"./useFormControl-hi_-Bm5a.js";import"./memoTheme-BXN-JR5D.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./createSimplePaletteValueFilter-KjEIrzYP.js";import"./useEnhancedEffect-mdVbf1Yy.js";import"./useId-iqt95REQ.js";import"./ButtonBase-Dif9QXL2.js";import"./CircularProgress-DrS-PuOE.js";import"./extendSxProp-B_gxhBfW.js";import"./index-Dq15nN1B.js";import"./useControlled-5dYq2F3P.js";import"./Grow-CB6s9QXY.js";import"./index-D4B05_Au.js";import"./Menu-C5VpKsmr.js";import"./MenuList-B9OW0zET.js";import"./createSvgIcon-DNN30dVJ.js";import"./listItemTextClasses-5YqA4Sa_.js";import"./dividerClasses-B96QDxXS.js";import"./getThemeProps-CUHTK0IK.js";const r=s.forwardRef(({label:o,required:d=!1,disabled:u=!1,readOnly:t=!1,textFieldProps:a={},value:c,defaultValue:L,placeholder:ma,error:G,helperText:ha,validation:b,maxLength:p,minLength:D,validateOnBlur:fa=!0,validateOnChange:ba=!1,onChange:y,onBlur:J,onFocus:Q,onEnterPress:X,autoFocus:ga=!1,clearable:O=!1,tooltip:Z,tooltipPlacement:va="top",startIcon:ee,endIcon:U,variant:ya="outlined",size:xa="medium",style:Ca,sx:Ta,labelSx:Sa,inputSx:wa,helperTextSx:Ra,borderRadius:er,borderColor:Wa,focusBorderColor:Ia,fullWidth:ae=!1,hideLabel:Ea=!1,compact:ar=!1,customStyles:l,showCharCount:qa=!1,children:Va,...ja},Pa)=>{var oe,se,ie,ue,de;const[m,K]=s.useState(c!==void 0?String(c):L!==void 0?String(L):""),[Ba,re]=s.useState(!1),[te,g]=s.useState({isValid:!0}),[x,Ma]=s.useState(!1);s.useEffect(()=>{c!==void 0&&K(String(c))},[c]);const ka=n=>{const h=n.target.value;if(!(p&&h.length>p)){if(K(h),ba&&b){const _=b(h);g(typeof _=="boolean"?{isValid:_}:_)}y&&y(n),"onChange"in a&&typeof a.onChange=="function"&&a.onChange(n)}},za=n=>{if(re(!1),fa&&b){const h=b(m);g(typeof h=="boolean"?{isValid:h}:h)}D&&m.length<D&&m.length>0&&g({isValid:!1,message:`Debe tener al menos ${D} caracteres`}),J&&J(n),"onBlur"in a&&typeof a.onBlur=="function"&&a.onBlur(n)},Na=n=>{re(!0),Q&&Q(n),"onFocus"in a&&typeof a.onFocus=="function"&&a.onFocus(n)},Aa=n=>{n.key==="Enter"&&X&&X(),"onKeyDown"in a&&typeof a.onKeyDown=="function"&&a.onKeyDown(n)},Ha=()=>{K("");const n={target:{value:""}};y&&y(n),"onChange"in a&&typeof a.onChange=="function"&&a.onChange(n)},Fa=()=>{Ma(!x)},La=a.type==="password"?x?"text":"password":a.type,Da=ee?e.jsx(ce,{position:"start",children:ee}):(oe=a.InputProps)==null?void 0:oe.startAdornment;let ne=e.jsxs(ce,{position:"end",children:[O&&m&&!u&&!t&&e.jsx(pe,{onClick:Ha,edge:"end",size:"small","aria-label":"clear input",children:e.jsx(F,{icon:"closeIcon"})}),a.type==="password"&&e.jsx(pe,{onClick:Fa,edge:"end",size:"small","aria-label":x?"hide password":"show password",children:e.jsx(F,{icon:x?"eyeOffIcon":"eyeIcon"})}),U,!O&&!a.type&&!U&&((se=a.InputProps)==null?void 0:se.endAdornment)]});!O&&a.type!=="password"&&!U&&!((ie=a.InputProps)!=null&&ie.endAdornment)&&(ne=e.jsx(e.Fragment,{}));const $=G!==void 0?G:b?!te.isValid:!1,le=te.message||ha,Oa=()=>$?{borderColor:"#d32f2f"}:Ba?{borderColor:Ia||"#1976d2"}:{borderColor:Wa||"#c4c4c4"},Ua=p?`${m.length}/${p}`:void 0,Ka={width:ae?"100%":"auto",...Ca,...l==null?void 0:l.container},$a={margin:"0",lineHeight:"1.43",letterSpacing:"0.01071em",fontSize:"13px",fontWeight:"500",...l==null?void 0:l.label},_a={borderRadius:"12px!important",...Oa(),...l==null?void 0:l.input},Ya={...l==null?void 0:l.helperText},Ga="className"in a?a.className:"";return e.jsxs(i,{ref:Pa,className:`${C.container} ${Ga}`,style:Ka,sx:{display:"flex",flexDirection:"column",...Ta},children:[!Ea&&o&&e.jsxs(i,{className:C["label-container"],sx:{display:"flex",alignItems:"center",mb:.5,...Sa},children:[e.jsxs(f,{variant:"body2",component:"label",className:C.label,style:$a,sx:{fontWeight:500},children:[o,d&&e.jsx(i,{component:"span",sx:{color:"error.main",ml:.5},children:"*"})]}),Z&&e.jsx(Qa,{title:Z,placement:va,children:e.jsx(i,{className:C.tooltip,sx:{ml:.5,display:"flex",alignItems:"center"},children:e.jsx(F,{icon:"helpIcon"})})})]}),e.jsx(Xa,{...ja,...a,value:"value"in a?a.value:m,defaultValue:"defaultValue"in a?a.defaultValue:L,onChange:ka,onBlur:za,onFocus:Na,onKeyDown:Aa,error:$,disabled:u||("disabled"in a?a.disabled:!1),placeholder:ma||("placeholder"in a?a.placeholder:""),variant:ya,size:xa,fullWidth:ae||("fullWidth"in a?a.fullWidth:!1),autoFocus:ga||("autoFocus"in a?a.autoFocus:!1),InputProps:{...a.InputProps,readOnly:t||(((ue=a.InputProps)==null?void 0:ue.readOnly)??!1),startAdornment:Da,endAdornment:ne,sx:{..._a,height:"35px",border:"1px solid #c4c4c4",...(de=a.InputProps)==null?void 0:de.sx,...wa}},inputProps:{..."inputProps"in a?a.inputProps:{},maxLength:p,type:La},children:"select"in a&&a.select&&Va}),e.jsxs(i,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mt:.5,minHeight:"1.25rem"},children:[le&&e.jsx(Za,{error:$,style:Ya,sx:{m:0,...Ra},children:le}),qa&&p&&e.jsx(f,{variant:"caption",sx:{color:m.length>=p?"error.main":"text.secondary",ml:"auto",fontSize:"0.75rem"},children:Ua})]})]})});r.displayName="CustomInput";r.__docgenInfo={description:`CustomInput es un componente de entrada mejorado con funciones extendidas como validación,
personalización visual avanzada, y características adicionales como conteo de caracteres,
iconos personalizados y más.`,methods:[],displayName:"CustomInput",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},textFieldProps:{required:!1,tsType:{name:"intersection",raw:`TextFieldPropsVariants & {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}`,elements:[{name:"union",raw:"StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps",elements:[{name:"StandardTextFieldProps"},{name:"FilledTextFieldProps"},{name:"OutlinedTextFieldProps"}]},{name:"signature",type:"object",raw:`{
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}`,signature:{properties:[{key:"inputProps",value:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}],required:!1}}]}}]},description:"",defaultValue:{value:"{}",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},validation:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => boolean | { isValid: boolean; message?: string }",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"union",raw:"boolean | { isValid: boolean; message?: string }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ isValid: boolean; message?: string }",signature:{properties:[{key:"isValid",value:{name:"boolean",required:!0}},{key:"message",value:{name:"string",required:!1}}]}}]}}},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},validateOnBlur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},validateOnChange:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onEnterPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},tooltipPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},labelSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},inputSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},helperTextSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},borderRadius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},focusBorderColor:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  container?: React.CSSProperties;
  label?: React.CSSProperties;
  input?: React.CSSProperties;
  helperText?: React.CSSProperties;
}`,signature:{properties:[{key:"container",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"label",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"input",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"helperText",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}}]}},description:""},showCharCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Lr={title:"Components/CustomInput",component:r,parameters:{layout:"centered",docs:{description:{component:`
          A highly customizable text input component with enhanced features like:
          
          - Tooltips and custom labels
          - Advanced validation
          - Character counting
          - Clear button functionality
          - Password visibility toggle
          - Customizable borders and styles
          - And more!
        `}}},tags:["autodocs"],decorators:[o=>e.jsx(i,{sx:{padding:4,maxWidth:"500px",width:"100%"},children:e.jsx(o,{})})],argTypes:{label:{control:"text",description:"Label text for the input field"},required:{control:"boolean",description:"Whether the field is required"},disabled:{control:"boolean",description:"Whether the field is disabled"},readOnly:{control:"boolean",description:"Whether the field is read-only"},tooltip:{control:"text",description:"Tooltip text to display when hovering over the help icon"},tooltipPlacement:{control:{type:"select",options:["top","right","bottom","left"]},description:"Placement of the tooltip"},error:{control:"boolean",description:"Whether to display the field in error state"},helperText:{control:"text",description:"Helper text displayed below the input"},maxLength:{control:"number",description:"Maximum character length"},fullWidth:{control:"boolean",description:"Whether the field should take up the full width"},variant:{control:{type:"select",options:["outlined","filled","standard"]},description:"Material UI TextField variant"},size:{control:{type:"select",options:["small","medium"]},description:"Size of the input field"},clearable:{control:"boolean",description:"Whether to show a clear button when the field has content"},showCharCount:{control:"boolean",description:"Whether to show a character counter"},hideLabel:{control:"boolean",description:"Whether to hide the label"},borderRadius:{control:"text",description:"Border radius of the input field"},borderColor:{control:"color",description:"Border color of the input field"},focusBorderColor:{control:"color",description:"Border color when the input is focused"}}},T={args:{label:"Full Name",placeholder:"Enter your name",fullWidth:!0,variant:"outlined"}},S={args:{label:"Email Address",required:!0,placeholder:"Enter your email",variant:"outlined",textFieldProps:{type:"email"},fullWidth:!0}},w={args:{label:"Password",required:!0,tooltip:"Password must be at least 8 characters long and contain at least one number and one special character.",placeholder:"Enter password",variant:"outlined",textFieldProps:{type:"password"},fullWidth:!0}},R={args:{label:"Username",placeholder:"Choose a username",variant:"outlined",fullWidth:!0,helperText:"Username can contain letters, numbers, and underscores."}},W={args:{label:"Phone Number",placeholder:"Enter phone number",variant:"outlined",fullWidth:!0,error:!0,helperText:"Please enter a valid phone number."}},I={args:{label:"Company",placeholder:"Company name",variant:"outlined",fullWidth:!0,disabled:!0}},E={args:{label:"Address",placeholder:"Enter your address",variant:"filled",fullWidth:!0}},q={args:{label:"Country",fullWidth:!0,variant:"outlined",textFieldProps:{select:!0,defaultValue:"usa"},children:[e.jsx(v,{value:"usa",children:"United States"},"usa"),e.jsx(v,{value:"canada",children:"Canada"},"canada"),e.jsx(v,{value:"mexico",children:"Mexico"},"mexico"),e.jsx(v,{value:"uk",children:"United Kingdom"},"uk"),e.jsx(v,{value:"australia",children:"Australia"},"australia")]}},V={args:{label:"Comments",placeholder:"Enter your comments",variant:"outlined",fullWidth:!0,textFieldProps:{multiline:!0,rows:4}}},j={args:{label:"Custom Styled Input",style:{backgroundColor:"#f9f9f9",padding:"16px",borderRadius:"8px"},placeholder:"Type something...",variant:"outlined",fullWidth:!0,borderRadius:"4px",borderColor:"#6a1b9a",focusBorderColor:"#4a148c"}},P={args:{label:"Password",required:!0,placeholder:"Enter your password",variant:"outlined",fullWidth:!0,borderRadius:"8px",textFieldProps:{type:"password"},helperText:"Click the eye icon to toggle password visibility"}},B={args:{label:"Search",placeholder:"Type to search...",variant:"outlined",fullWidth:!0,clearable:!0,startIcon:e.jsx(F,{icon:"searchIcon"}),defaultValue:"Initial searchable text"}},M={args:{label:"Bio",placeholder:"Describe yourself...",variant:"outlined",fullWidth:!0,maxLength:100,showCharCount:!0,textFieldProps:{multiline:!0,rows:3},helperText:"Maximum 100 characters"}},k={render:()=>{const[o,d]=s.useState(""),u=t=>{if(!t)return{isValid:!0};const a=/\S+@\S+\.\S+/.test(t);return{isValid:a,message:a?"":"Please enter a valid email address"}};return e.jsx(r,{label:"Email with Validation",placeholder:"Enter your email address",fullWidth:!0,variant:"outlined",value:o,onChange:t=>d(t.target.value),validation:u,validateOnChange:!0,size:"small",borderRadius:"6px"})}},z={render:()=>{const[o,d]=s.useState(""),[u,t]=s.useState(""),a=()=>{d(`You pressed Enter! Current value: "${u}"`)};return e.jsxs(i,{children:[e.jsx(r,{label:"Press Enter to Submit",placeholder:"Type something and press Enter...",fullWidth:!0,variant:"outlined",value:u,onChange:c=>t(c.target.value),onEnterPress:a,helperText:"Press Enter to trigger an action"}),o&&e.jsx(i,{sx:{mt:2,p:2,bgcolor:"#f0f7ff",borderRadius:"4px"},children:e.jsx(f,{variant:"body2",children:o})})]})}},N={render:()=>e.jsxs(Y,{spacing:2,children:[e.jsx(r,{label:"Default Border",placeholder:"Default border style",fullWidth:!0}),e.jsx(r,{label:"Custom Border Color",placeholder:"Custom border color",fullWidth:!0,borderColor:"#2e7d32"}),e.jsx(r,{label:"Custom Focus Color",placeholder:"Focus to see custom color",fullWidth:!0,focusBorderColor:"#f50057"}),e.jsx(r,{label:"Custom Border Radius",placeholder:"With rounded corners",fullWidth:!0,borderRadius:"16px"}),e.jsx(r,{label:"Square Corners",placeholder:"With square corners",fullWidth:!0,borderRadius:"0"})]})},A={render:()=>{const[o,d]=s.useState(""),u=t=>t.length<10&&t.length>0?{isValid:!1,message:"Bio should be at least 10 characters long"}:{isValid:!0};return e.jsxs(Ja,{elevation:3,sx:{p:3,borderRadius:"12px"},children:[e.jsx(f,{variant:"h6",gutterBottom:!0,children:"Profile Information"}),e.jsxs(Y,{spacing:2,children:[e.jsx(r,{label:"Full Name",required:!0,placeholder:"Enter your full name",fullWidth:!0,variant:"outlined",size:"small",borderRadius:"8px",clearable:!0}),e.jsx(r,{label:"Email Address",required:!0,placeholder:"Enter your email",fullWidth:!0,variant:"outlined",size:"small",borderRadius:"8px",validation:t=>t?{isValid:/\S+@\S+\.\S+/.test(t),message:"Please enter a valid email"}:{isValid:!0},validateOnBlur:!0,clearable:!0}),e.jsx(r,{label:"Password",required:!0,tooltip:"Password must be at least 8 characters",placeholder:"Enter your password",fullWidth:!0,variant:"outlined",size:"small",borderRadius:"8px",textFieldProps:{type:"password"}}),e.jsx(r,{label:"Bio",placeholder:"Tell us about yourself...",fullWidth:!0,variant:"outlined",size:"small",borderRadius:"8px",textFieldProps:{multiline:!0,rows:3},maxLength:200,showCharCount:!0,validation:u,value:o,onChange:t=>d(t.target.value),focusBorderColor:"#1976d2"})]})]})}},H={render:()=>e.jsxs(Y,{spacing:3,children:[e.jsx(f,{variant:"subtitle1",children:"Sizes"}),e.jsxs(i,{sx:{display:"flex",gap:2},children:[e.jsx(r,{label:"Small",placeholder:"Small input",size:"small",sx:{flex:1}}),e.jsx(r,{label:"Medium",placeholder:"Medium input",size:"medium",sx:{flex:1}})]}),e.jsx(f,{variant:"subtitle1",sx:{mt:2},children:"Variants"}),e.jsxs(i,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(r,{label:"Outlined",placeholder:"Outlined variant",variant:"outlined",fullWidth:!0}),e.jsx(r,{label:"Filled",placeholder:"Filled variant",variant:"filled",fullWidth:!0}),e.jsx(r,{label:"Standard",placeholder:"Standard variant",variant:"standard",fullWidth:!0})]})]})};var me,he,fe;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
    fullWidth: true,
    variant: 'outlined'
  }
}`,...(fe=(he=T.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,ge,ve;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    required: true,
    placeholder: 'Enter your email',
    variant: 'outlined',
    textFieldProps: {
      type: 'email'
    },
    fullWidth: true
  }
}`,...(ve=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var ye,xe,Ce;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    required: true,
    tooltip: 'Password must be at least 8 characters long and contain at least one number and one special character.',
    placeholder: 'Enter password',
    variant: 'outlined',
    textFieldProps: {
      type: 'password'
    },
    fullWidth: true
  }
}`,...(Ce=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Te,Se,we;R.parameters={...R.parameters,docs:{...(Te=R.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    variant: 'outlined',
    fullWidth: true,
    helperText: 'Username can contain letters, numbers, and underscores.'
  }
}`,...(we=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Re,We,Ie;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    variant: 'outlined',
    fullWidth: true,
    error: true,
    helperText: 'Please enter a valid phone number.'
  }
}`,...(Ie=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Ie.source}}};var Ee,qe,Ve;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    label: 'Company',
    placeholder: 'Company name',
    variant: 'outlined',
    fullWidth: true,
    disabled: true
  }
}`,...(Ve=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var je,Pe,Be;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    label: 'Address',
    placeholder: 'Enter your address',
    variant: 'filled',
    fullWidth: true
  }
}`,...(Be=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Me,ke,ze;q.parameters={...q.parameters,docs:{...(Me=q.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    fullWidth: true,
    variant: 'outlined',
    textFieldProps: {
      select: true,
      defaultValue: 'usa'
    },
    children: [<MenuItem key="usa" value="usa">United States</MenuItem>, <MenuItem key="canada" value="canada">Canada</MenuItem>, <MenuItem key="mexico" value="mexico">Mexico</MenuItem>, <MenuItem key="uk" value="uk">United Kingdom</MenuItem>, <MenuItem key="australia" value="australia">Australia</MenuItem>]
  }
}`,...(ze=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var Ne,Ae,He;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments',
    variant: 'outlined',
    fullWidth: true,
    textFieldProps: {
      multiline: true,
      rows: 4
    }
  }
}`,...(He=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var Fe,Le,De;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    label: 'Custom Styled Input',
    style: {
      backgroundColor: '#f9f9f9',
      padding: '16px',
      borderRadius: '8px'
    },
    placeholder: 'Type something...',
    variant: 'outlined',
    fullWidth: true,
    borderRadius: '4px',
    borderColor: '#6a1b9a',
    focusBorderColor: '#4a148c'
  }
}`,...(De=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Oe,Ue,Ke;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    required: true,
    placeholder: 'Enter your password',
    variant: 'outlined',
    fullWidth: true,
    borderRadius: '8px',
    textFieldProps: {
      type: 'password'
    },
    helperText: 'Click the eye icon to toggle password visibility'
  }
}`,...(Ke=(Ue=P.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var $e,_e,Ye;B.parameters={...B.parameters,docs:{...($e=B.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    variant: 'outlined',
    fullWidth: true,
    clearable: true,
    startIcon: <T1Icon icon="searchIcon" />,
    defaultValue: 'Initial searchable text'
  }
}`,...(Ye=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:Ye.source}}};var Ge,Je,Qe;M.parameters={...M.parameters,docs:{...(Ge=M.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Describe yourself...',
    variant: 'outlined',
    fullWidth: true,
    maxLength: 100,
    showCharCount: true,
    textFieldProps: {
      multiline: true,
      rows: 3
    },
    helperText: 'Maximum 100 characters'
  }
}`,...(Qe=(Je=M.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,ea;k.parameters={...k.parameters,docs:{...(Xe=k.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const validateEmail = (email: string) => {
      if (!email) return {
        isValid: true
      };
      const isValid = /\\S+@\\S+\\.\\S+/.test(email);
      return {
        isValid,
        message: isValid ? '' : 'Please enter a valid email address'
      };
    };
    return <CustomInput label="Email with Validation" placeholder="Enter your email address" fullWidth variant="outlined" value={value} onChange={(e: any) => setValue(e.target.value)} validation={validateEmail} validateOnChange size="small" borderRadius="6px" />;
  }
}`,...(ea=(Ze=k.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ra,ta;z.parameters={...z.parameters,docs:{...(aa=z.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: () => {
    const [message, setMessage] = useState('');
    const [value, setValue] = useState('');
    const handleEnterPress = () => {
      setMessage(\`You pressed Enter! Current value: "\${value}"\`);
    };
    return <Box>
        <CustomInput label="Press Enter to Submit" placeholder="Type something and press Enter..." fullWidth variant="outlined" value={value} onChange={(e: any) => setValue(e.target.value)} onEnterPress={handleEnterPress} helperText="Press Enter to trigger an action" />
        {message && <Box sx={{
        mt: 2,
        p: 2,
        bgcolor: '#f0f7ff',
        borderRadius: '4px'
      }}>
            <Typography variant="body2">{message}</Typography>
          </Box>}
      </Box>;
  }
}`,...(ta=(ra=z.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var na,la,oa;N.parameters={...N.parameters,docs:{...(na=N.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: () => {
    return <Stack spacing={2}>
        <CustomInput label="Default Border" placeholder="Default border style" fullWidth />
        
        <CustomInput label="Custom Border Color" placeholder="Custom border color" fullWidth borderColor="#2e7d32" />
        
        <CustomInput label="Custom Focus Color" placeholder="Focus to see custom color" fullWidth focusBorderColor="#f50057" />
        
        <CustomInput label="Custom Border Radius" placeholder="With rounded corners" fullWidth borderRadius="16px" />
        
        <CustomInput label="Square Corners" placeholder="With square corners" fullWidth borderRadius="0" />
      </Stack>;
  }
}`,...(oa=(la=N.parameters)==null?void 0:la.docs)==null?void 0:oa.source}}};var sa,ia,ua;A.parameters={...A.parameters,docs:{...(sa=A.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  render: () => {
    const [bio, setBio] = useState('');
    const validateBio = (text: string) => {
      if (text.length < 10 && text.length > 0) {
        return {
          isValid: false,
          message: 'Bio should be at least 10 characters long'
        };
      }
      return {
        isValid: true
      };
    };
    return <Paper elevation={3} sx={{
      p: 3,
      borderRadius: '12px'
    }}>
        <Typography variant="h6" gutterBottom>
          Profile Information
        </Typography>
        
        <Stack spacing={2}>
          <CustomInput label="Full Name" required placeholder="Enter your full name" fullWidth variant="outlined" size="small" borderRadius="8px" clearable />
          
          <CustomInput label="Email Address" required placeholder="Enter your email" fullWidth variant="outlined" size="small" borderRadius="8px" validation={(email: any) => {
          if (!email) return {
            isValid: true
          };
          return {
            isValid: /\\S+@\\S+\\.\\S+/.test(email),
            message: 'Please enter a valid email'
          };
        }} validateOnBlur clearable />
          
          <CustomInput label="Password" required tooltip="Password must be at least 8 characters" placeholder="Enter your password" fullWidth variant="outlined" size="small" borderRadius="8px" textFieldProps={{
          type: 'password'
        }} />
          
          <CustomInput label="Bio" placeholder="Tell us about yourself..." fullWidth variant="outlined" size="small" borderRadius="8px" textFieldProps={{
          multiline: true,
          rows: 3
        }} maxLength={200} showCharCount validation={validateBio} value={bio} onChange={(e: any) => setBio(e.target.value)} focusBorderColor="#1976d2" />
        </Stack>
      </Paper>;
  }
}`,...(ua=(ia=A.parameters)==null?void 0:ia.docs)==null?void 0:ua.source}}};var da,ca,pa;H.parameters={...H.parameters,docs:{...(da=H.parameters)==null?void 0:da.docs,source:{originalSource:`{
  render: () => {
    return <Stack spacing={3}>
        <Typography variant="subtitle1">Sizes</Typography>
        <Box sx={{
        display: 'flex',
        gap: 2
      }}>
          <CustomInput label="Small" placeholder="Small input" size="small" sx={{
          flex: 1
        }} />
          <CustomInput label="Medium" placeholder="Medium input" size="medium" sx={{
          flex: 1
        }} />
        </Box>
        
        <Typography variant="subtitle1" sx={{
        mt: 2
      }}>Variants</Typography>
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
          <CustomInput label="Outlined" placeholder="Outlined variant" variant="outlined" fullWidth />
          <CustomInput label="Filled" placeholder="Filled variant" variant="filled" fullWidth />
          <CustomInput label="Standard" placeholder="Standard variant" variant="standard" fullWidth />
        </Box>
      </Stack>;
  }
}`,...(pa=(ca=H.parameters)==null?void 0:ca.docs)==null?void 0:pa.source}}};const Dr=["Basic","Required","WithTooltip","WithHelperText","WithError","Disabled","FilledVariant","SelectField","Multiline","CustomStyle","PasswordWithToggle","ClearableInput","WithCharCounter","WithValidation","WithEnterAction","CustomBorders","AdvancedExample","SizesAndVariants"];export{A as AdvancedExample,T as Basic,B as ClearableInput,N as CustomBorders,j as CustomStyle,I as Disabled,E as FilledVariant,V as Multiline,P as PasswordWithToggle,S as Required,q as SelectField,H as SizesAndVariants,M as WithCharCounter,z as WithEnterAction,W as WithError,R as WithHelperText,w as WithTooltip,k as WithValidation,Dr as __namedExportsOrder,Lr as default};
