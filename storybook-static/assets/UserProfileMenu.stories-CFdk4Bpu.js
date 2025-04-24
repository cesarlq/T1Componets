import{j as a}from"./jsx-runtime-DoEZbXM1.js";import{a as b}from"./index-B-lxVbXh.js";import{c as y}from"./createSvgIcon-b5IFCipV.js";import{r as U}from"./index-BXymfbzT.js";import{S as N}from"./Stack-jHxdpKi_.js";import{I as ie}from"./IconButton-ClQenCbo.js";import{s as q,c as le}from"./styled-C6O4spo1.js";import{c as me,m as ce}from"./memoTheme-D1v331c6.js";import{b as ue,g as pe}from"./defaultTheme-B7jBPaaC.js";import{u as de}from"./useSlot-BmXk5o7q.js";import{u as fe}from"./DefaultPropsProvider-B6e4UF29.js";import{M as ge}from"./Menu-DWe73gnW.js";import{M as D}from"./MenuItem-C8rEpSH1.js";import{L as he,a as ve}from"./ListItemText-mkuKtmVK.js";import"./jsx-runtime-Bw5QeaCk.js";import"./v4-CtRu48qb.js";import"./extendSxProp-BhyoeeqO.js";import"./getThemeProps-CUHTK0IK.js";import"./createSimplePaletteValueFilter-DKwZs-al.js";import"./useEnhancedEffect-Dyb8TRSh.js";import"./useId-iqt95REQ.js";import"./ButtonBase-CXK0KjYY.js";import"./CircularProgress-Dr3nbNzo.js";import"./index-CzG76ALe.js";import"./MenuList-C_ub-TVM.js";import"./Grow-C70ld54Z.js";import"./index-D4B05_Au.js";import"./index-DGKHe-6Q.js";import"./listItemTextClasses-ExQqjRvV.js";import"./dividerClasses-DrQmggxL.js";import"./Typography-DS7NmyJ3.js";const xe=y(a.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function be(e){return ue("MuiAvatar",e)}pe("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const ye=e=>{const{classes:t,variant:n,colorDefault:i}=e;return me({root:["root",n,i&&"colorDefault"],img:["img"],fallback:["fallback"]},be,t)},Se=q("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})(ce(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),Ie=q("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),we=q(xe,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Me({crossOrigin:e,referrerPolicy:t,src:n,srcSet:i}){const[u,l]=U.useState(!1);return U.useEffect(()=>{if(!n&&!i)return;l(!1);let p=!0;const s=new Image;return s.onload=()=>{p&&l("loaded")},s.onerror=()=>{p&&l("error")},s.crossOrigin=e,s.referrerPolicy=t,s.src=n,i&&(s.srcset=i),()=>{p=!1}},[e,t,n,i]),u}const L=U.forwardRef(function(t,n){const i=fe({props:t,name:"MuiAvatar"}),{alt:u,children:l,className:p,component:s="div",slots:m={},slotProps:d={},imgProps:v,sizes:S,src:g,srcSet:x,variant:I="circular",...A}=i;let h=null;const c={...i,component:s,variant:I},T=Me({...v,...typeof d.img=="function"?d.img(c):d.img,src:g,srcSet:x}),w=g||x,r=w&&T!=="error";c.colorDefault=!r,delete c.ownerState;const o=ye(c),[ne,se]=de("img",{className:o.img,elementType:Ie,externalForwardedProps:{slots:m,slotProps:{img:{...v,...d.img}}},additionalProps:{alt:u,src:g,srcSet:x,sizes:S},ownerState:c});return r?h=a.jsx(ne,{...se}):l||l===0?h=l:w&&u?h=u[0]:h=a.jsx(we,{ownerState:c,className:o.fallback}),a.jsx(Se,{as:s,className:le(o.root,p),ref:n,...A,ownerState:c,children:h})}),ke=y(a.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"})),je=y(a.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),Ce=y(a.jsx("path",{d:"m21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89m-2.99-3.9 1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07m-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17M5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19z"})),ze=y(a.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"})),oe=({user:e,menuItems:t,showNameInHeader:n=!0,showUserInMenu:i=!0,customAvatar:u,avatarSize:l=40,menuAvatarSize:p=50,avatarBgColor:s="#db3b2b",className:m={},sx:d={}})=>{const[v,S]=U.useState(null),g=!!v,x=r=>{S(r.currentTarget)},I=()=>{S(null)},A=r=>{r&&r(),I()},c=(r=>{if(r.name){const o=r.name.split(" ");if(o.length>=2&&o[0][0]&&o[1][0])return`${o[0][0].toUpperCase()}${o[1][0].toUpperCase()}`;if(o[0]&&o[0][0])return o[0].length>1?`${o[0][0].toUpperCase()}${o[0][1].toUpperCase()}`:o[0][0].toUpperCase()}return r.email?r.email[0].toUpperCase():"U"})(e),T={bgcolor:s,width:l,height:l,fontSize:`${l*.4}px`,fontWeight:600,cursor:"pointer",...d.avatar},w={bgcolor:s,width:p,height:p,fontSize:`${p*.4}px`,fontWeight:600,...d.menuAvatar};return a.jsxs(N,{className:m.container,direction:"row",alignItems:"center",spacing:1,sx:d.container,children:[n&&a.jsx("span",{className:m.name,style:{fontSize:"14px",fontWeight:500,color:"#333"},children:e.email}),a.jsx(ie,{id:"profile-button","aria-controls":g?"profile-menu":void 0,"aria-haspopup":"true","aria-expanded":g?"true":void 0,onClick:x,className:m.avatarButton,size:"small",children:u||a.jsx(L,{src:e.avatar,sx:T,children:c})}),a.jsxs(ge,{id:"profile-menu",anchorEl:v,open:g,onClose:I,sx:{marginLeft:"-30px","& .MuiPaper-root":{borderRadius:"14px",minWidth:"200px"},...d.menu},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},className:m.menu,children:[i&&a.jsx(D,{sx:{padding:"16px 24px"},className:m.menuUserInfo,children:a.jsxs(N,{direction:"column",spacing:1,alignItems:"center",width:"100%",children:[u||a.jsx(L,{src:e.avatar,sx:w,children:c}),e.name&&a.jsx("h3",{className:m.menuUsername,style:{margin:0,fontSize:"16px",fontWeight:600},children:e.name}),a.jsx("p",{className:m.menuEmail,style:{margin:0,fontSize:"14px",color:"#666"},children:e.email})]})}),t.map(r=>a.jsxs(D,{id:r.id,onClick:()=>A(r.onClick),className:m.menuItem,divider:r.divider,sx:{paddingLeft:"24px"},children:[r.icon&&a.jsx(he,{children:r.icon}),a.jsx(ve,{primary:r.label})]},r.id))]})]})};oe.__docgenInfo={description:`ProfileAvatarMenu component

A reusable profile avatar with dropdown menu component`,methods:[],displayName:"UserProfileMenu",props:{user:{required:!0,tsType:{name:"ProfileUser"},description:"User data to display"},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"ProfileMenuItem"}],raw:"ProfileMenuItem[]"},description:"Menu items to display in the dropdown"},showNameInHeader:{required:!1,tsType:{name:"boolean"},description:`Whether to show the user name in header (next to avatar)
@default true`,defaultValue:{value:"true",computed:!1}},showUserInMenu:{required:!1,tsType:{name:"boolean"},description:`Whether to show user details at top of menu
@default true`,defaultValue:{value:"true",computed:!1}},customAvatar:{required:!1,tsType:{name:"ReactNode"},description:"Custom avatar component"},avatarSize:{required:!1,tsType:{name:"number"},description:`Size of avatar in header
@default 40`,defaultValue:{value:"40",computed:!1}},menuAvatarSize:{required:!1,tsType:{name:"number"},description:`Size of avatar in menu
@default 50`,defaultValue:{value:"50",computed:!1}},avatarBgColor:{required:!1,tsType:{name:"string"},description:`Primary color for avatar background
@default '#db3b2b'`,defaultValue:{value:"'#db3b2b'",computed:!1}},className:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  container?: string;
  name?: string;
  avatarButton?: string;
  menu?: string;
  menuUserInfo?: string;
  menuUsername?: string;
  menuEmail?: string;
  menuItem?: string;
}`,signature:{properties:[{key:"container",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"avatarButton",value:{name:"string",required:!1}},{key:"menu",value:{name:"string",required:!1}},{key:"menuUserInfo",value:{name:"string",required:!1}},{key:"menuUsername",value:{name:"string",required:!1}},{key:"menuEmail",value:{name:"string",required:!1}},{key:"menuItem",value:{name:"string",required:!1}}]}},description:"CSS class names for styling",defaultValue:{value:"{}",computed:!1}},sx:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  container?: SxProps<Theme>;
  avatar?: SxProps<Theme>;
  menuAvatar?: SxProps<Theme>;
  menu?: SxProps<Theme>;
}`,signature:{properties:[{key:"container",value:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>",required:!1}},{key:"avatar",value:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>",required:!1}},{key:"menuAvatar",value:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>",required:!1}},{key:"menu",value:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>",required:!1}}]}},description:"Additional styles using MUI sx prop",defaultValue:{value:"{}",computed:!1}}}};const ia={title:"Components/UserProfileMenu",component:oe,parameters:{layout:"centered",docs:{description:{component:"A profile avatar with dropdown menu component."}}},tags:["autodocs"],argTypes:{user:{description:"User data to display",control:"object"},menuItems:{description:"Menu items to display in the dropdown",control:"object"},showNameInHeader:{description:"Whether to show the user name in header",control:"boolean",defaultValue:!0},showUserInMenu:{description:"Whether to show user details at top of menu",control:"boolean",defaultValue:!0},avatarSize:{description:"Size of avatar in header",control:{type:"number",min:20,max:100,step:5},defaultValue:40},menuAvatarSize:{description:"Size of avatar in menu",control:{type:"number",min:30,max:120,step:5},defaultValue:50},avatarBgColor:{description:"Background color of avatar",control:"color",defaultValue:"#db3b2b"}}},Pe=[{id:"profile",label:"My profile",icon:a.jsx(je,{fontSize:"small"}),onClick:b("navigate-to-profile")},{id:"settings",label:"Store settings",icon:a.jsx(ze,{fontSize:"small"}),onClick:b("navigate-to-settings")},{id:"stores",label:"My stores",icon:a.jsx(Ce,{fontSize:"small"}),onClick:b("navigate-to-stores")},{id:"logout",label:"Log out",icon:a.jsx(ke,{fontSize:"small"}),onClick:b("logout"),divider:!0}],f={args:{user:{name:"John Doe",email:"john.doe@example.com"},menuItems:Pe,showNameInHeader:!0,showUserInMenu:!0,avatarSize:40,menuAvatarSize:50,avatarBgColor:"#db3b2b"}},M={args:{...f.args,showNameInHeader:!1}},k={args:{...f.args,user:{name:"Jane Smith",email:"jane.smith@example.com",avatar:"https://i.pravatar.cc/150?img=5"}}},j={args:{...f.args,showUserInMenu:!1}},C={args:{...f.args,user:{email:"user@example.com"}}},z={args:{...f.args,avatarBgColor:"#2196f3",avatarSize:50,menuAvatarSize:70,sx:{avatar:{border:"2px solid #fff",boxShadow:"0 2px 10px rgba(0,0,0,0.2)"},menu:{"& .MuiPaper-root":{boxShadow:"0 4px 20px rgba(0,0,0,0.15)",borderRadius:"16px"}}}}},P={args:{user:{email:"minimal@example.com"},menuItems:[{id:"logout",label:"Log out",onClick:b("logout")}],showNameInHeader:!1,showUserInMenu:!1}};var H,R,V;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com'
    },
    menuItems: defaultMenuItems,
    showNameInHeader: true,
    showUserInMenu: true,
    avatarSize: 40,
    menuAvatarSize: 50,
    avatarBgColor: '#db3b2b'
  }
}`,...(V=(R=f.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var W,B,E;M.parameters={...M.parameters,docs:{...(W=M.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showNameInHeader: false
  }
}`,...(E=(B=M.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,$,O;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  }
}`,...(O=($=k.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var J,_,G;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showUserInMenu: false
  }
}`,...(G=(_=j.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,Q,X;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: {
      email: 'user@example.com'
    }
  }
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarBgColor: '#2196f3',
    avatarSize: 50,
    menuAvatarSize: 70,
    sx: {
      avatar: {
        border: '2px solid #fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      },
      menu: {
        '& .MuiPaper-root': {
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          borderRadius: '16px'
        }
      }
    }
  }
}`,...(ee=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    user: {
      email: 'minimal@example.com'
    },
    menuItems: [{
      id: 'logout',
      label: 'Log out',
      onClick: action('logout')
    }],
    showNameInHeader: false,
    showUserInMenu: false
  }
}`,...(te=(re=P.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const la=["Default","WithoutNameInHeader","WithAvatarImage","WithoutUserInMenu","OnlyEmail","CustomStyling","Minimal"];export{z as CustomStyling,f as Default,P as Minimal,C as OnlyEmail,k as WithAvatarImage,M as WithoutNameInHeader,j as WithoutUserInMenu,la as __namedExportsOrder,ia as default};
