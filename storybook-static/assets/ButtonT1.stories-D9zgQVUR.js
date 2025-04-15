import{f as Q}from"./index-D_Ss_HUe.js";import{j as c}from"./jsx-runtime-DoEZbXM1.js";import{r as U}from"./index-BXymfbzT.js";import{u as Y}from"./index-zcXxPko7.js";import{c as f}from"./styled-DpR3dCKc.js";import{u as G}from"./useSlot-DTa0a6Bp.js";import{T as J}from"./Tooltip-DWiZVeKY.js";import{B as g}from"./Button-BNd0IVJp.js";import"./jsx-runtime-Bw5QeaCk.js";import"./defaultTheme-CkM2R3ON.js";import"./useTheme-BQir2oYr.js";import"./getThemeProps-CUHTK0IK.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./useEnhancedEffect-CeoXdHlB.js";import"./createSimplePaletteValueFilter-J0RuAuc7.js";import"./index-DOKpkcnV.js";import"./memoTheme-DKONLN91.js";import"./useControlled-5dYq2F3P.js";import"./useId-iqt95REQ.js";import"./Grow-Djd8tJ7A.js";import"./index-D4B05_Au.js";import"./index-DGKHe-6Q.js";import"./ButtonBase-BTzlvCm9.js";import"./CircularProgress-DNCOZvBd.js";const D=({children:K,startIcon:X,endIcon:Z,additionalIcon:$,variant:L="contained",className:d,onClick:ee,disabled:te,loading:oe=!1,confirmationMessage:re,tooltipText:m,responsive:_=!1,sx:H,color:ae="primary",size:ne="medium",...p})=>{const[se,ie]=U.useState(!1),l=G(),P=Y(l.breakpoints.down("sm")),u=_&&P?{size:"small",fullWidth:!0}:{};return{...L==="contained"&&{boxShadow:l.shadows[2],transition:"all 0.3s ease","&:hover":{boxShadow:l.shadows[4],transform:"translateY(-2px)"}},...H},m?c.jsx(J,{title:m,children:c.jsx(g,{...p,...u,className:f("button-t1",d)})}):c.jsx(g,{...p,...u,className:f("button-t1",d)})};D.__docgenInfo={description:"",methods:[],displayName:"ButtonT1",props:{additionalItems:{required:!1,tsType:{name:"Array",elements:[{name:"AdditionalItemI"}],raw:"AdditionalItemI[]"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},endIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | null",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"}]},description:""},startIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | null",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"}]},description:""},additionalIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'outlined' | 'contained'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'contained'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{defaultValue:{value:"false",computed:!1},required:!1},responsive:{defaultValue:{value:"false",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1}}};const Me={title:"Components/ButtonT1",component:D,parameters:{layout:"centered",docs:{description:{component:"A customized Material UI Button component with additional features like loading state, tooltips, and confirmation messages."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["contained","outlined","text"],description:"The variant to use."},color:{control:"select",options:["primary","secondary","success","error","info","warning"],description:"The color of the component."},size:{control:"select",options:["small","medium","large"],description:"The size of the component."},disabled:{control:"boolean",description:"If true, the button will be disabled."},loading:{control:"boolean",description:"If true, the button will show a loading spinner."},responsive:{control:"boolean",description:"If true, the button will adjust its size on small screens."},tooltipText:{control:"text",description:"Text to display in the tooltip."},confirmationMessage:{control:"text",description:"Confirmation message to display when clicked."}},args:{onClick:Q()}},e={args:{className:"pt-4 text-lg",children:"Button",variant:"contained",color:"primary",size:"medium"}},t={args:{children:"Loading...",loading:!0}},o={args:{children:"Hover Me",tooltipText:"This is a helpful tooltip!"}},r={args:{children:"Delete Item",confirmationMessage:"Are you sure?",color:"error"}},a={args:{children:"Outlined Button",variant:"outlined"}},n={args:{children:"Text Button",variant:"text"}},s={args:{children:"Responsive Button",responsive:!0}},i={args:{children:"Custom Style",sx:{borderRadius:"25px",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white",padding:"10px 20px"}}};var h,x,v;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: 'pt-4 text-lg',
    // Correcto
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium'
  }
}`,...(v=(x=e.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,y,R;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Loading...',
    loading: true
  }
}`,...(R=(y=t.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var w,b,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Hover Me',
    tooltipText: 'This is a helpful tooltip!'
  }
}`,...(I=(b=o.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var B,S,N;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Delete Item',
    confirmationMessage: 'Are you sure?',
    color: 'error'
  }
}`,...(N=(S=r.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var q,C,z;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Button',
    variant: 'outlined'
  }
}`,...(z=(C=a.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var k,M,E;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Text Button',
    variant: 'text'
  }
}`,...(E=(M=n.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var j,A,F;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Responsive Button',
    responsive: true
  }
}`,...(F=(A=s.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var O,V,W;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Custom Style',
    sx: {
      borderRadius: '25px',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      padding: '10px 20px'
    }
  }
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const Ee=["Default","Loading","WithTooltip","WithConfirmation","Outlined","Text","Responsive","CustomStyle"];export{i as CustomStyle,e as Default,t as Loading,a as Outlined,s as Responsive,n as Text,r as WithConfirmation,o as WithTooltip,Ee as __namedExportsOrder,Me as default};
