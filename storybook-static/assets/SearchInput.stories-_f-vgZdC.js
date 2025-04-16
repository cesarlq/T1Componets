import{j as r}from"./jsx-runtime-DoEZbXM1.js";import{f as u}from"./index-D_Ss_HUe.js";import{R as T}from"./index-BXymfbzT.js";import{S as A}from"./SearchInput-BqjGK_IY.js";import{B as I}from"./Box-Bb-Xp33U.js";import"./jsx-runtime-Bw5QeaCk.js";import"./image-DwLHI-Re.js";import"./image-context-9EevjYAT.js";import"./index-DGKHe-6Q.js";import"./styled-DNQA3T_q.js";import"./defaultTheme-BOkF7xEx.js";import"./extendSxProp-LV0UK_Tm.js";const X={title:"Components/SearchInput",component:A,parameters:{layout:"centered",docs:{description:{component:"A customized search input field with an icon and clean, minimal styling."}}},tags:["autodocs"],argTypes:{onChange:{action:"changed"},onClickButton:{action:"buttonClicked"}},decorators:[e=>r.jsx(I,{sx:{padding:4,width:"400px",maxWidth:"100%"},children:r.jsx(e,{})})]},o={args:{}},t={args:{defaultValue:"Product ABC123"}},a={args:{textFieldProps:{placeholder:"Search products..."}}},s={args:{onChange:u(),onClickButton:u()}},n={render:()=>(T.useEffect(()=>{const e=document.querySelector("input");e&&e.focus()},[]),r.jsx(A,{}))},c={args:{defaultValue:"This is a very long search query that should show ellipsis when it exceeds the container width"}},i={args:{textFieldProps:{style:{borderRadius:"4px",borderColor:"#6a1b9a",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}}},d={decorators:[e=>r.jsx(I,{sx:{padding:2,width:"320px",maxWidth:"100%"},children:r.jsx(e,{})})],args:{textFieldProps:{placeholder:"Search..."}}};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Product ABC123'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,S,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    textFieldProps: {
      placeholder: 'Search products...'
    }
  }
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,b,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    onChange: fn(),
    onClickButton: fn()
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var P,V,W;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    // We need to use useEffect to focus the input after render
    React.useEffect(() => {
      const input = document.querySelector('input');
      if (input) {
        input.focus();
      }
    }, []);
    return <SearchInput />;
  }
}`,...(W=(V=n.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var B,F,j;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This is a very long search query that should show ellipsis when it exceeds the container width'
  }
}`,...(j=(F=c.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var E,D,R;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    textFieldProps: {
      style: {
        borderRadius: '4px',
        borderColor: '#6a1b9a',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }
    }
  }
}`,...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var k,q,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <Box sx={{
    padding: 2,
    width: '320px',
    maxWidth: '100%'
  }}>
        <Story />
      </Box>],
  args: {
    textFieldProps: {
      placeholder: 'Search...'
    }
  }
}`,...(v=(q=d.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const Y=["Default","WithDefaultValue","CustomPlaceholder","WithEvents","Focused","WithLongDefaultValue","CustomStyling","MobileVersion"];export{a as CustomPlaceholder,i as CustomStyling,o as Default,n as Focused,d as MobileVersion,t as WithDefaultValue,s as WithEvents,c as WithLongDefaultValue,Y as __namedExportsOrder,X as default};
