import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{r as C}from"./index-BXymfbzT.js";import{K as ee}from"./KeyboardArrowDown-6oLkz4Uk.js";import{c as Fe}from"./createSvgIcon-k4tBonym.js";import{u as De}from"./index-CCkq5cMN.js";import{a as Ce,P as ke}from"./useSlot-C-NjzLEY.js";import{s as M,c as K}from"./styled-BmwyKE_S.js";import{b as Q,g as G,x as Ne}from"./defaultTheme-BbZN4HXF.js";import{u as J}from"./DefaultPropsProvider-B6e4UF29.js";import{c as X,m as We}from"./memoTheme-BIAxD-kR.js";import{B as c}from"./Box-C7fl29eL.js";import{S as qe}from"./Stack-BXJRiKB4.js";import{T as p}from"./Typography-Uc3qYsP1.js";import{I as te}from"./IconButton-CsAtSNlL.js";import{T as $e,g as oe}from"./Grow-CFitX0qb.js";import{a as Ve,u as Ue}from"./TransitionGroupContext-B5gLlu5z.js";import{B as Le}from"./Button-C_M5m9yp.js";import{S as Ae}from"./Select-BQ9Vyea6.js";import{M as O}from"./MenuItem-C2N-q_nJ.js";import{T as Pe}from"./TextField-DRE8sErR.js";import"./jsx-runtime-Bw5QeaCk.js";import"./extendSxProp-uFgn4Rby.js";import"./getThemeProps-CUHTK0IK.js";import"./useEnhancedEffect-DU8l2LAB.js";import"./index-BrWwYKGT.js";import"./emotion-react.browser.esm-BuNWDWuz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-Bkih4Gzu.js";import"./ButtonBase-HGi7il7J.js";import"./CircularProgress-nUGTnlGq.js";import"./index-B-RDXwRZ.js";import"./index-DGKHe-6Q.js";import"./useFormControl-hi_-Bm5a.js";import"./Menu-Cwg3BEEI.js";import"./index-DOKpkcnV.js";import"./MenuList-Asf_EgOl.js";import"./useControlled-5dYq2F3P.js";import"./listItemTextClasses-Cj6hSB0i.js";import"./dividerClasses-XJFLKnuR.js";function He(a){return Q("MuiCollapse",a)}G("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Oe=a=>{const{orientation:t,classes:r}=a,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return X(n,He,r)},_e=M("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,t[r.orientation],r.state==="entered"&&t.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&t.hidden]}})(We(({theme:a})=>({height:0,overflow:"hidden",transition:a.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:a.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:t})=>t.state==="exited"&&!t.in&&t.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),Ke=M("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(a,t)=>t.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),Qe=M("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(a,t)=>t.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),_=C.forwardRef(function(t,r){const n=J({props:t,name:"MuiCollapse"}),{addEndListener:u,children:f,className:h,collapsedSize:i="0px",component:y,easing:z,in:I,onEnter:v,onEntered:T,onEntering:L,onExit:m,onExited:A,onExiting:E,orientation:s="vertical",style:b,timeout:x=Ne.standard,TransitionComponent:we=$e,...ve}=n,F={...n,orientation:s,collapsedSize:i},j=Oe(F),Y=Ce(),Te=Ve(),g=C.useRef(null),P=C.useRef(),D=typeof i=="number"?`${i}px`:i,R=s==="horizontal",S=R?"width":"height",k=C.useRef(null),je=Ue(r,k),w=o=>l=>{if(o){const d=k.current;l===void 0?o(d):o(d,l)}},H=()=>g.current?g.current[R?"clientWidth":"clientHeight"]:0,Re=w((o,l)=>{g.current&&R&&(g.current.style.position="absolute"),o.style[S]=D,v&&v(o,l)}),Se=w((o,l)=>{const d=H();g.current&&R&&(g.current.style.position="");const{duration:B,easing:N}=oe({style:b,timeout:x,easing:z},{mode:"enter"});if(x==="auto"){const Z=Y.transitions.getAutoHeightDuration(d);o.style.transitionDuration=`${Z}ms`,P.current=Z}else o.style.transitionDuration=typeof B=="string"?B:`${B}ms`;o.style[S]=`${d}px`,o.style.transitionTimingFunction=N,L&&L(o,l)}),Be=w((o,l)=>{o.style[S]="auto",T&&T(o,l)}),Me=w(o=>{o.style[S]=`${H()}px`,m&&m(o)}),ze=w(A),Ie=w(o=>{const l=H(),{duration:d,easing:B}=oe({style:b,timeout:x,easing:z},{mode:"exit"});if(x==="auto"){const N=Y.transitions.getAutoHeightDuration(l);o.style.transitionDuration=`${N}ms`,P.current=N}else o.style.transitionDuration=typeof d=="string"?d:`${d}ms`;o.style[S]=D,o.style.transitionTimingFunction=B,E&&E(o)}),Ee=o=>{x==="auto"&&Te.start(P.current||0,o),u&&u(k.current,o)};return e.jsx(we,{in:I,onEnter:Re,onEntered:Be,onEntering:Se,onExit:Me,onExited:ze,onExiting:Ie,addEndListener:Ee,nodeRef:k,timeout:x==="auto"?null:x,...ve,children:(o,{ownerState:l,...d})=>e.jsx(_e,{as:y,className:K(j.root,h,{entered:j.entered,exited:!I&&D==="0px"&&j.hidden}[o]),style:{[R?"minWidth":"minHeight"]:D,...b},ref:je,ownerState:{...F,state:o},...d,children:e.jsx(Ke,{ownerState:{...F,state:o},className:j.wrapper,ref:g,children:e.jsx(Qe,{ownerState:{...F,state:o},className:j.wrapperInner,children:f})})})})});_&&(_.muiSupportAuto=!0);function Ge(a){return Q("MuiCard",a)}G("MuiCard",["root"]);const Je=a=>{const{classes:t}=a;return X({root:["root"]},Ge,t)},Xe=M(ke,{name:"MuiCard",slot:"Root",overridesResolver:(a,t)=>t.root})({overflow:"hidden"}),Ye=C.forwardRef(function(t,r){const n=J({props:t,name:"MuiCard"}),{className:u,raised:f=!1,...h}=n,i={...n,raised:f},y=Je(i);return e.jsx(Xe,{className:K(y.root,u),elevation:f?8:void 0,ref:r,ownerState:i,...h})});function Ze(a){return Q("MuiCardContent",a)}G("MuiCardContent",["root"]);const et=a=>{const{classes:t}=a;return X({root:["root"]},Ze,t)},tt=M("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(a,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}}),ot=C.forwardRef(function(t,r){const n=J({props:t,name:"MuiCardContent"}),{className:u,component:f="div",...h}=n,i={...n,component:f},y=et(i);return e.jsx(tt,{as:f,className:K(y.root,u),ownerState:i,ref:r,...h})}),ae=Fe(e.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),be=({title:a,headerContent:t,bodyContent:r,footerContent:n,collapseContent:u,defaultCollapsed:f=!1,cardSx:h={},headerSx:i={},bodySx:y={},footerSx:z={},collapseSx:I={},collapseButtonSx:v={},hideCollapseButton:T=!1,loading:L=!1})=>{const[m,A]=C.useState(f),E=Ce(),s=De(E.breakpoints.down("sm")),b=()=>{A(!m)};return e.jsx(Ye,{sx:{marginBottom:2,boxShadow:"0px 0px 5px 1px #0000001A",bgcolor:"#FFFFFF",p:2,...h},children:e.jsxs(ot,{sx:{p:0,"&:last-child":{paddingBottom:"15px"}},children:[e.jsxs(c,{sx:{p:s?0:2,display:"flex",justifyContent:"space-between",alignItems:s?"flex-start":"center",borderBottom:"1px solid #f0f0f0",flexDirection:s?"column":"row",...i},children:[e.jsxs(qe,{direction:"row",justifyContent:"space-between",width:"100%",children:[a&&e.jsx(p,{variant:"h6",fontWeight:600,sx:{ml:s?1:0},children:a}),s&&!T&&e.jsx(te,{onClick:b,size:"small","aria-label":m?"expand":"collapse",sx:{bgcolor:"#F8F8F8",borderRadius:"8px",...v},children:m?e.jsx(ee,{}):e.jsx(ae,{})})]}),t&&e.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:1},children:[t,!s&&!T&&e.jsx(te,{onClick:b,size:"small","aria-label":m?"expand":"collapse",sx:{bgcolor:"#F8F8F8",borderRadius:"8px",...v},children:m?e.jsx(ee,{}):e.jsx(ae,{})})]})]}),r&&e.jsx(c,{sx:{p:s?0:2,mt:s?2:0,...y},children:r}),u&&e.jsx(_,{in:!m,children:e.jsx(c,{sx:{p:s?0:2,mt:s?2:0,...I},children:u})}),n&&e.jsx(c,{sx:{p:s?0:2,mt:2,...z},children:n})]})})};be.__docgenInfo={description:"",methods:[],displayName:"CollapsibleCardT1",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},bodyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},collapseContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},cardSx:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{}",computed:!1}},headerSx:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{}",computed:!1}},bodySx:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{}",computed:!1}},footerSx:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{}",computed:!1}},collapseSx:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{}",computed:!1}},collapseButtonSx:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{}",computed:!1}},hideCollapseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const At={title:"Components/CollapsibleCardT1",component:be,parameters:{layout:"centered",docs:{description:{component:"A customizable card component with collapsible content section and responsive design."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Title displayed in the card header."},defaultCollapsed:{control:"boolean",description:"If true, the collapsible content will be hidden by default."},hideCollapseButton:{control:"boolean",description:"If true, the collapse button will be hidden."},loading:{control:"boolean",description:"If true, displays a loading state."}},args:{title:"Card Title",defaultCollapsed:!1,hideCollapseButton:!1,loading:!1}},W={args:{title:"Basic Card",bodyContent:e.jsx(p,{variant:"body1",children:"This is a basic card with just a title and some body content."})}},q={args:{title:"Sales Overview",headerContent:e.jsx(c,{sx:{display:"flex",gap:2},children:e.jsxs(Ae,{defaultValue:"weekly",size:"small",sx:{minWidth:120},children:[e.jsx(O,{value:"daily",children:"Daily"}),e.jsx(O,{value:"weekly",children:"Weekly"}),e.jsx(O,{value:"monthly",children:"Monthly"})]})}),bodyContent:e.jsx(c,{sx:{display:"flex",flexWrap:"wrap",gap:2},children:[1,2,3,4].map(a=>e.jsxs(c,{sx:{p:2,borderRadius:1,bgcolor:"#f5f5f5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:100,width:{xs:"100%",sm:"calc(50% - 8px)",md:"calc(25% - 12px)"}},children:[e.jsxs(p,{variant:"h5",fontWeight:"bold",children:["$",(Math.random()*1e3).toFixed(2)]}),e.jsxs(p,{variant:"body2",color:"text.secondary",children:["Metric ",a]})]},a))}),collapseContent:e.jsx(c,{sx:{height:300,bgcolor:"#f9f9f9",borderRadius:1,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(p,{variant:"h6",color:"text.secondary",children:"Chart or detailed content would go here"})}),footerContent:e.jsx(c,{sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Le,{variant:"outlined",size:"small",children:"View Full Report"})})}},$={args:{title:"Custom Styled Card",headerContent:e.jsx(Pe,{placeholder:"Search...",size:"small",variant:"outlined"}),bodyContent:e.jsx(p,{variant:"body1",children:"This card has custom styling applied to different sections."}),collapseContent:e.jsx(c,{sx:{p:2,bgcolor:"#f0f7ff",borderRadius:2},children:e.jsx(p,{variant:"body2",children:"This is the collapsible content with custom background."})}),cardSx:{borderRadius:4,boxShadow:"0 8px 16px rgba(0,0,0,0.1)",background:"linear-gradient(to right, #ffffff, #f7f9fc)"},headerSx:{borderBottom:"2px solid #e0e7ff",pb:2},collapseButtonSx:{bgcolor:"#4a6bff20",color:"#4a6bff","&:hover":{bgcolor:"#4a6bff30"}}}},V={args:{title:"Loading Card",loading:!0,bodyContent:e.jsx(p,{variant:"body1",children:"This content would be replaced with skeletons when loading."})}},U={args:{title:"Collapsed by Default",defaultCollapsed:!0,bodyContent:e.jsx(p,{variant:"body1",children:"Main content is always visible."}),collapseContent:e.jsx(p,{variant:"body1",children:"This content is hidden by default and can be shown by clicking the expand button."})}};var re,se,ne;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: 'Basic Card',
    bodyContent: <Typography variant="body1">
        This is a basic card with just a title and some body content.
      </Typography>
  }
}`,...(ne=(se=W.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,le,de;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    title: 'Sales Overview',
    headerContent: <Box sx={{
      display: 'flex',
      gap: 2
    }}>
        <Select defaultValue="weekly" size="small" sx={{
        minWidth: 120
      }}>
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
        </Select>
      </Box>,
    bodyContent: <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2
    }}>
        {[1, 2, 3, 4].map(item => <Box key={item} sx={{
        p: 2,
        borderRadius: 1,
        bgcolor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: {
          xs: '100%',
          sm: 'calc(50% - 8px)',
          md: 'calc(25% - 12px)'
        }
      }}>
            <Typography variant="h5" fontWeight="bold">
              \${(Math.random() * 1000).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Metric {item}
            </Typography>
          </Box>)}
      </Box>,
    collapseContent: <Box sx={{
      height: 300,
      bgcolor: '#f9f9f9',
      borderRadius: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <Typography variant="h6" color="text.secondary">
          Chart or detailed content would go here
        </Typography>
      </Box>,
    footerContent: <Box sx={{
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
        <Button variant="outlined" size="small">
          View Full Report
        </Button>
      </Box>
  }
}`,...(de=(le=q.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Card',
    headerContent: <TextField placeholder="Search..." size="small" variant="outlined" />,
    bodyContent: <Typography variant="body1">
        This card has custom styling applied to different sections.
      </Typography>,
    collapseContent: <Box sx={{
      p: 2,
      bgcolor: '#f0f7ff',
      borderRadius: 2
    }}>
        <Typography variant="body2">
          This is the collapsible content with custom background.
        </Typography>
      </Box>,
    cardSx: {
      borderRadius: 4,
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      background: 'linear-gradient(to right, #ffffff, #f7f9fc)'
    },
    headerSx: {
      borderBottom: '2px solid #e0e7ff',
      pb: 2
    },
    collapseButtonSx: {
      bgcolor: '#4a6bff20',
      color: '#4a6bff',
      '&:hover': {
        bgcolor: '#4a6bff30'
      }
    }
  }
}`,...(ue=(pe=$.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var fe,me,he;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    title: 'Loading Card',
    loading: true,
    bodyContent: <Typography variant="body1">
        This content would be replaced with skeletons when loading.
      </Typography>
  }
}`,...(he=(me=V.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ye,xe,ge;U.parameters={...U.parameters,docs:{...(ye=U.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    title: 'Collapsed by Default',
    defaultCollapsed: true,
    bodyContent: <Typography variant="body1">
        Main content is always visible.
      </Typography>,
    collapseContent: <Typography variant="body1">
        This content is hidden by default and can be shown by clicking the expand button.
      </Typography>
  }
}`,...(ge=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const Pt=["Basic","WithCollapsibleContent","CustomStyling","Loading","DefaultCollapsed"];export{W as Basic,$ as CustomStyling,U as DefaultCollapsed,V as Loading,q as WithCollapsibleContent,Pt as __namedExportsOrder,At as default};
