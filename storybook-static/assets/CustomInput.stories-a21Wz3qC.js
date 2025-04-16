import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as n}from"./CommonStyles.module-CCEon8At.js";import{T as Q}from"./T1Icon-BhL2WAyO.js";import{T as X}from"./Tooltip-BVj8l6L3.js";import{T as Y}from"./TextField-CCDPbfwU.js";import{B as Z}from"./Box-Bb-Xp33U.js";import{M as t}from"./MenuItem-D97AS6Va.js";import"./jsx-runtime-Bw5QeaCk.js";import"./image-DwLHI-Re.js";import"./index-BXymfbzT.js";import"./image-context-9EevjYAT.js";import"./index-DGKHe-6Q.js";import"./settings-icon-CWecReMl.js";import"./styled-DNQA3T_q.js";import"./defaultTheme-BOkF7xEx.js";import"./index-Dddp0QDY.js";import"./extendSxProp-LV0UK_Tm.js";import"./useEnhancedEffect-DSc7A9Vk.js";import"./useSlot-BQqFbHN7.js";import"./createSimplePaletteValueFilter-BsRTDaOg.js";import"./memoTheme-DVyz49Y0.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./useControlled-5dYq2F3P.js";import"./useId-iqt95REQ.js";import"./Grow-BYbp1MnB.js";import"./index-D4B05_Au.js";import"./Select-BjzJnfZR.js";import"./Menu-BBopw_oP.js";import"./MenuList-Bc-s7-5c.js";import"./useFormControl-hi_-Bm5a.js";import"./createSvgIcon-B6X0fLc_.js";import"./ButtonBase-D8-EA4Ep.js";import"./listItemTextClasses-DQQgQyLf.js";import"./dividerClasses-D5RFM36j.js";const z=({label:a,required:G,textFieldProps:r,children:J,style:b,tooltip:x})=>e.jsxs("div",{className:`${n.container} ${r&&r.className}`,style:r&&r.fullWidth?{width:"100%",...b}:b,children:[a&&e.jsxs("div",{className:n["label-container"],children:[e.jsxs("div",{className:n.label,children:[a,G&&"*"]}),x&&e.jsx(X,{title:x,children:e.jsx("div",{className:n.tooltip,children:e.jsx(Q,{icon:"helpIcon"})})})]}),e.jsx(Y,{...r,inputProps:{...r.inputProps},children:r&&r.select&&J})]});z.__docgenInfo={description:"",methods:[],displayName:"CustomInput",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},textFieldProps:{required:!0,tsType:{name:"TextFieldProps"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},button:{required:!1,tsType:{name:"boolean"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:""},buttonProps:{required:!1,tsType:{name:"ReactButtonHTMLAttributes",raw:"React.ButtonHTMLAttributes<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},startIconButton:{required:!1,tsType:{name:"ReactNode"},description:""},endIconButton:{required:!1,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};const je={title:"Components/CustomInput",component:z,parameters:{layout:"centered",docs:{description:{component:"A customized text input component with support for labels, tooltips, and various text field properties."}}},tags:["autodocs"],decorators:[a=>e.jsx(Z,{sx:{padding:4,maxWidth:"400px"},children:e.jsx(a,{})})]},o={args:{label:"Full Name",textFieldProps:{placeholder:"Enter your name",variant:"outlined",fullWidth:!0}}},s={args:{label:"Email Address",required:!0,textFieldProps:{placeholder:"Enter your email",variant:"outlined",type:"email",fullWidth:!0}}},l={args:{label:"Password",required:!0,tooltip:"Password must be at least 8 characters long and contain at least one number and one special character.",textFieldProps:{placeholder:"Enter password",variant:"outlined",type:"password",fullWidth:!0}}},i={args:{label:"Username",textFieldProps:{placeholder:"Choose a username",variant:"outlined",fullWidth:!0,helperText:"Username can contain letters, numbers, and underscores."}}},d={args:{label:"Phone Number",textFieldProps:{placeholder:"Enter phone number",variant:"outlined",fullWidth:!0,error:!0,helperText:"Please enter a valid phone number."}}},u={args:{label:"Company",textFieldProps:{placeholder:"Company name",variant:"outlined",fullWidth:!0,disabled:!0}}},p={args:{label:"Address",textFieldProps:{placeholder:"Enter your address",variant:"filled",fullWidth:!0}}},c={args:{label:"Country",textFieldProps:{select:!0,defaultValue:"usa",fullWidth:!0,variant:"outlined"},children:[e.jsx(t,{value:"usa",children:"United States"},"usa"),e.jsx(t,{value:"canada",children:"Canada"},"canada"),e.jsx(t,{value:"mexico",children:"Mexico"},"mexico"),e.jsx(t,{value:"uk",children:"United Kingdom"},"uk"),e.jsx(t,{value:"australia",children:"Australia"},"australia")]}},m={args:{label:"Comments",textFieldProps:{placeholder:"Enter your comments",variant:"outlined",fullWidth:!0,multiline:!0,rows:4}}},h={args:{label:"Custom Styled Input",style:{backgroundColor:"#f9f9f9",padding:"16px",borderRadius:"8px"},textFieldProps:{placeholder:"Type something...",variant:"outlined",fullWidth:!0,InputProps:{sx:{borderRadius:"4px","& .MuiOutlinedInput-notchedOutline":{borderColor:"#6a1b9a"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#9c27b0"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#4a148c"}}}}}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    textFieldProps: {
      placeholder: 'Enter your name',
      variant: 'outlined',
      fullWidth: true
    }
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,T,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    required: true,
    textFieldProps: {
      placeholder: 'Enter your email',
      variant: 'outlined',
      type: 'email',
      fullWidth: true
    }
  }
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var P,I,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    required: true,
    tooltip: 'Password must be at least 8 characters long and contain at least one number and one special character.',
    textFieldProps: {
      placeholder: 'Enter password',
      variant: 'outlined',
      type: 'password',
      fullWidth: true
    }
  }
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var W,R,S;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    textFieldProps: {
      placeholder: 'Choose a username',
      variant: 'outlined',
      fullWidth: true,
      helperText: 'Username can contain letters, numbers, and underscores.'
    }
  }
}`,...(S=(R=i.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var F,E,q;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    textFieldProps: {
      placeholder: 'Enter phone number',
      variant: 'outlined',
      fullWidth: true,
      error: true,
      helperText: 'Please enter a valid phone number.'
    }
  }
}`,...(q=(E=d.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var N,w,j;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Company',
    textFieldProps: {
      placeholder: 'Company name',
      variant: 'outlined',
      fullWidth: true,
      disabled: true
    }
  }
}`,...(j=(w=u.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var O,k,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Address',
    textFieldProps: {
      placeholder: 'Enter your address',
      variant: 'filled',
      fullWidth: true
    }
  }
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var A,U,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    textFieldProps: {
      select: true,
      defaultValue: 'usa',
      fullWidth: true,
      variant: 'outlined'
    },
    children: [<MenuItem key="usa" value="usa">United States</MenuItem>, <MenuItem key="canada" value="canada">Canada</MenuItem>, <MenuItem key="mexico" value="mexico">Mexico</MenuItem>, <MenuItem key="uk" value="uk">United Kingdom</MenuItem>, <MenuItem key="australia" value="australia">Australia</MenuItem>]
  }
}`,...(H=(U=c.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var L,V,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    textFieldProps: {
      placeholder: 'Enter your comments',
      variant: 'outlined',
      fullWidth: true,
      multiline: true,
      rows: 4
    }
  }
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var D,K,$;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Custom Styled Input',
    style: {
      backgroundColor: '#f9f9f9',
      padding: '16px',
      borderRadius: '8px'
    },
    textFieldProps: {
      placeholder: 'Type something...',
      variant: 'outlined',
      fullWidth: true,
      InputProps: {
        sx: {
          borderRadius: '4px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6a1b9a'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#9c27b0'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4a148c'
          }
        }
      }
    }
  }
}`,...($=(K=h.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};const Oe=["Basic","Required","WithTooltip","WithHelperText","WithError","Disabled","FilledVariant","SelectField","Multiline","CustomStyle"];export{o as Basic,h as CustomStyle,u as Disabled,p as FilledVariant,m as Multiline,s as Required,c as SelectField,d as WithError,i as WithHelperText,l as WithTooltip,Oe as __namedExportsOrder,je as default};
