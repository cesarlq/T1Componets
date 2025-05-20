import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{T as t}from"./T1Icon-CUUDGXX1.js";import{S as n}from"./Stack-CnFBXkEk.js";import"./jsx-runtime-Bw5QeaCk.js";import"./image-DwLHI-Re.js";import"./index-BXymfbzT.js";import"./image-context-9EevjYAT.js";import"./index-DGKHe-6Q.js";import"./chevron-down-icon-C-zcFgRc.js";import"./settings-icon-CWecReMl.js";import"./styled-aNEffR3I.js";import"./defaultTheme-UNuJapAP.js";import"./extendSxProp-5AyqGU7c.js";import"./getThemeProps-CUHTK0IK.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./composeClasses-CAXbtk_0.js";const ae={title:"Components/Icons/T1Icon",component:t,parameters:{layout:"centered",docs:{description:{component:`
          A flexible component for displaying SVG icons.
          
          ## When to use
          - For UI elements such as buttons, form fields, and other controls
          - In page sections to visually identify their purpose
          - To improve usability by providing visual indicators
          - As part of the brand and design experience
        `}}},argTypes:{icon:{control:{type:"select",options:["bannerSection","imageSection","textSection","headerIcon","footerIcon","searchIcon","eyeIcon","trashIcon","checkIcon","aiIcon","downloadIcon","mailIcon","settingsIcon","filterIcon"]},description:"The name of the icon to display"},width:{control:"number",description:"Width of the icon in pixels"},height:{control:"number",description:"Height of the icon in pixels"},className:{control:"text",description:"Additional CSS class for the icon"},sx:{control:"object",description:"Additional inline styles (React style object)"}},tags:["autodocs"]},o={args:{icon:"bannerSection",width:24,height:24},parameters:{docs:{description:{story:"Basic example of the icon with adjustable controls."}}}},s={render:()=>e.jsxs(n,{direction:"row",spacing:4,alignItems:"center",children:[e.jsxs(n,{direction:"column",alignItems:"center",children:[e.jsx(t,{icon:"bannerSection",width:16,height:16}),e.jsx("span",{style:{fontSize:"12px",marginTop:"4px"},children:"16px"})]}),e.jsxs(n,{direction:"column",alignItems:"center",children:[e.jsx(t,{icon:"bannerSection",width:24,height:24}),e.jsx("span",{style:{fontSize:"12px",marginTop:"4px"},children:"24px"})]}),e.jsxs(n,{direction:"column",alignItems:"center",children:[e.jsx(t,{icon:"bannerSection",width:32,height:32}),e.jsx("span",{style:{fontSize:"12px",marginTop:"4px"},children:"32px"})]}),e.jsxs(n,{direction:"column",alignItems:"center",children:[e.jsx(t,{icon:"bannerSection",width:48,height:48}),e.jsx("span",{style:{fontSize:"12px",marginTop:"4px"},children:"48px"})]})]}),parameters:{docs:{description:{story:"Shows different icon sizes: 16px, 24px, 32px, and 48px."}}}},c={render:()=>e.jsx(n,{direction:"row",flexWrap:"wrap",spacing:2,sx:{maxWidth:"600px",gap:"16px"},children:["bannerSection","imageSection","imageTextSection","multicolumnSection","textSection","featuredProductSection","productListSection","collectionListSection"].map(i=>e.jsxs(n,{direction:"column",alignItems:"center",sx:{padding:"16px",border:"1px solid #e7e7e7",borderRadius:"8px",width:"120px",height:"100px",justifyContent:"center"},children:[e.jsx(t,{icon:i,width:32,height:32}),e.jsx("span",{style:{fontSize:"12px",marginTop:"8px",textAlign:"center"},children:i})]},i))}),parameters:{docs:{description:{story:"Shows the available icons for representing different page sections."}}}},r={render:()=>e.jsx(n,{direction:"row",flexWrap:"wrap",spacing:2,sx:{maxWidth:"600px",gap:"16px"},children:["searchIcon","eyeIcon","eyeOffIcon","trashIcon","checkIcon","copyIcon","calendarIcon","downloadIcon","mailIcon","clipboardIcon","checkCircleFillIcon","helpIcon","settingsIcon","aiIcon","columnIcon","filterIcon"].map(i=>e.jsxs(n,{direction:"column",alignItems:"center",sx:{padding:"16px",border:"1px solid #e7e7e7",borderRadius:"8px",width:"120px",height:"100px",justifyContent:"center"},children:[e.jsx(t,{icon:i,width:24,height:24}),e.jsx("span",{style:{fontSize:"12px",marginTop:"8px",textAlign:"center"},children:i})]},i))}),parameters:{docs:{description:{story:"Shows the available icons for user interface elements."}}}},a={render:()=>e.jsxs(n,{direction:"row",spacing:4,alignItems:"center",children:[e.jsxs(n,{direction:"column",alignItems:"center",children:[e.jsx(t,{icon:"aiIcon",width:32,height:32,sx:{filter:"drop-shadow(0px 2px 4px rgba(0,0,0,0.2))"}}),e.jsx("span",{style:{fontSize:"12px",marginTop:"4px"},children:"Shadow"})]}),e.jsxs(n,{direction:"column",alignItems:"center",children:[e.jsx(t,{icon:"aiIcon",width:32,height:32,sx:{filter:"grayscale(100%)"}}),e.jsx("span",{style:{fontSize:"12px",marginTop:"4px"},children:"Grayscale"})]}),e.jsxs(n,{direction:"column",alignItems:"center",children:[e.jsx(t,{icon:"aiIcon",width:32,height:32,sx:{opacity:.5}}),e.jsx("span",{style:{fontSize:"12px",marginTop:"4px"},children:"Opacity"})]}),e.jsxs(n,{direction:"column",alignItems:"center",children:[e.jsx(t,{icon:"aiIcon",width:32,height:32,sx:{transform:"rotate(45deg)"}}),e.jsx("span",{style:{fontSize:"12px",marginTop:"4px"},children:"Rotation"})]})]}),parameters:{docs:{description:{story:"Examples of visual customization using the sx property."}}}},p={render:()=>e.jsxs("div",{children:[e.jsx("style",{children:`
          .custom-icon {
            transition: transform 0.3s ease;
          }
          .custom-icon:hover {
            transform: scale(1.2);
          }
        `}),e.jsxs(n,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(t,{icon:"arrowRight",width:24,height:24,className:"custom-icon"}),e.jsx("span",{style:{fontSize:"14px"},children:"Hover over the icon to see the effect"})]})]}),parameters:{docs:{description:{story:"Demonstrates how to apply custom CSS classes for interactive effects."}}}},d={render:()=>e.jsxs(n,{direction:"column",spacing:3,sx:{maxWidth:"500px"},children:[e.jsx("h3",{style:{fontSize:"16px",margin:"0 0 8px 0"},children:"Common Usage Examples"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 12px",border:"1px solid #e7e7e7",borderRadius:"4px",gap:"8px"},children:[e.jsx(t,{icon:"searchIcon",width:20,height:20}),e.jsx("input",{type:"text",placeholder:"Search...",style:{border:"none",outline:"none",width:"100%"}})]}),e.jsxs("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"8px 16px",background:"#4A90E2",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",width:"fit-content"},children:[e.jsx(t,{icon:"downloadIcon",width:16,height:16}),"Download"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"12px",background:"#FFF8E1",borderRadius:"4px",border:"1px solid #FFECB3"},children:[e.jsx(t,{icon:"warningIconCircle",width:24,height:24}),e.jsx("span",{children:"This is a warning message"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"12px",background:"#E8F5E9",borderRadius:"4px",border:"1px solid #C8E6C9"},children:[e.jsx(t,{icon:"checkCircleFillIcon",width:24,height:24}),e.jsx("span",{children:"Operation completed successfully"})]})]}),parameters:{docs:{description:{story:"Practical examples of how to integrate icons into common interface elements."}}}};var l,m,x,h,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: 'bannerSection',
    width: 24,
    height: 24
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic example of the icon with adjustable controls.'
      }
    }
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source},description:{story:"Basic example of the T1Icon component with different adjustable parameters.",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var u,f,I,S,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" alignItems="center">
        <T1Icon icon="bannerSection" width={16} height={16} />
        <span style={{
        fontSize: '12px',
        marginTop: '4px'
      }}>16px</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="bannerSection" width={24} height={24} />
        <span style={{
        fontSize: '12px',
        marginTop: '4px'
      }}>24px</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="bannerSection" width={32} height={32} />
        <span style={{
        fontSize: '12px',
        marginTop: '4px'
      }}>32px</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="bannerSection" width={48} height={48} />
        <span style={{
        fontSize: '12px',
        marginTop: '4px'
      }}>48px</span>
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Shows different icon sizes: 16px, 24px, 32px, and 48px.'
      }
    }
  }
}`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source},description:{story:`Different sizes available for icons.

This example shows how the same icon can be adapted to different sizes
to suit various design needs.`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.description}}};var w,b,j,T,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Stack direction="row" flexWrap="wrap" spacing={2} sx={{
    maxWidth: '600px',
    gap: '16px'
  }}>
      {['bannerSection', 'imageSection', 'imageTextSection', 'multicolumnSection', 'textSection', 'featuredProductSection', 'productListSection', 'collectionListSection'].map(iconName => <Stack key={iconName} direction="column" alignItems="center" sx={{
      padding: '16px',
      border: '1px solid #e7e7e7',
      borderRadius: '8px',
      width: '120px',
      height: '100px',
      justifyContent: 'center'
    }}>
          <T1Icon icon={iconName} width={32} height={32} />
          <span style={{
        fontSize: '12px',
        marginTop: '8px',
        textAlign: 'center'
      }}>{iconName}</span>
        </Stack>)}
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Shows the available icons for representing different page sections.'
      }
    }
  }
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:`Different section icons available in the component.

This example shows icons related to different page sections
such as banners, image galleries, text sections, etc.`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var v,z,C,E,R;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Stack direction="row" flexWrap="wrap" spacing={2} sx={{
    maxWidth: '600px',
    gap: '16px'
  }}>
      {['searchIcon', 'eyeIcon', 'eyeOffIcon', 'trashIcon', 'checkIcon', 'copyIcon', 'calendarIcon', 'downloadIcon', 'mailIcon', 'clipboardIcon', 'checkCircleFillIcon', 'helpIcon', 'settingsIcon', 'aiIcon', 'columnIcon', 'filterIcon'].map(iconName => <Stack key={iconName} direction="column" alignItems="center" sx={{
      padding: '16px',
      border: '1px solid #e7e7e7',
      borderRadius: '8px',
      width: '120px',
      height: '100px',
      justifyContent: 'center'
    }}>
          <T1Icon icon={iconName} width={24} height={24} />
          <span style={{
        fontSize: '12px',
        marginTop: '8px',
        textAlign: 'center'
      }}>{iconName}</span>
        </Stack>)}
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Shows the available icons for user interface elements.'
      }
    }
  }
}`,...(C=(z=r.parameters)==null?void 0:z.docs)==null?void 0:C.source},description:{story:`User interface icons available in the component.

This example shows icons commonly used in user interfaces
such as search, navigation, actions, etc.`,...(R=(E=r.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var F,W,A,N,D;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={4} alignItems="center">
      <Stack direction="column" alignItems="center">
        <T1Icon icon="aiIcon" width={32} height={32} sx={{
        filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))'
      }} />
        <span style={{
        fontSize: '12px',
        marginTop: '4px'
      }}>Shadow</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="aiIcon" width={32} height={32} sx={{
        filter: 'grayscale(100%)'
      }} />
        <span style={{
        fontSize: '12px',
        marginTop: '4px'
      }}>Grayscale</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="aiIcon" width={32} height={32} sx={{
        opacity: 0.5
      }} />
        <span style={{
        fontSize: '12px',
        marginTop: '4px'
      }}>Opacity</span>
      </Stack>
      <Stack direction="column" alignItems="center">
        <T1Icon icon="aiIcon" width={32} height={32} sx={{
        transform: 'rotate(45deg)'
      }} />
        <span style={{
        fontSize: '12px',
        marginTop: '4px'
      }}>Rotation</span>
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of visual customization using the sx property.'
      }
    }
  }
}`,...(A=(W=a.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:`Example of icons with custom styles applied.

This example demonstrates how icons can be customized using
the sx property to apply different visual effects.`,...(D=(N=a.parameters)==null?void 0:N.docs)==null?void 0:D.description}}};var U,O,B,L,P;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div>
      <style>
        {\`
          .custom-icon {
            transition: transform 0.3s ease;
          }
          .custom-icon:hover {
            transform: scale(1.2);
          }
        \`}
      </style>
      <Stack direction="row" spacing={2} alignItems="center">
        <T1Icon icon="arrowRight" width={24} height={24} className="custom-icon" />
        <span style={{
        fontSize: '14px'
      }}>Hover over the icon to see the effect</span>
      </Stack>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to apply custom CSS classes for interactive effects.'
      }
    }
  }
}`,...(B=(O=p.parameters)==null?void 0:O.docs)==null?void 0:B.source},description:{story:`Example with custom CSS classes.

This example demonstrates how custom CSS classes can be applied to
achieve interactive effects on icons.`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};var G,H,_,V,q;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={3} sx={{
    maxWidth: '500px'
  }}>
      <h3 style={{
      fontSize: '16px',
      margin: '0 0 8px 0'
    }}>Common Usage Examples</h3>
      
      <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '8px 12px',
      border: '1px solid #e7e7e7',
      borderRadius: '4px',
      gap: '8px'
    }}>
        <T1Icon icon="searchIcon" width={20} height={20} />
        <input type="text" placeholder="Search..." style={{
        border: 'none',
        outline: 'none',
        width: '100%'
      }} />
      </div>
      
      <button style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '8px 16px',
      background: '#4A90E2',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: 'fit-content'
    }}>
        <T1Icon icon="downloadIcon" width={16} height={16} />
        Download
      </button>
      
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px',
      background: '#FFF8E1',
      borderRadius: '4px',
      border: '1px solid #FFECB3'
    }}>
        <T1Icon icon="warningIconCircle" width={24} height={24} />
        <span>This is a warning message</span>
      </div>
      
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px',
      background: '#E8F5E9',
      borderRadius: '4px',
      border: '1px solid #C8E6C9'
    }}>
        <T1Icon icon="checkCircleFillIcon" width={24} height={24} />
        <span>Operation completed successfully</span>
      </div>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Practical examples of how to integrate icons into common interface elements.'
      }
    }
  }
}`,...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.source},description:{story:`Examples of practical use in user interfaces.

This example shows how icons can be integrated into different
common interface elements such as search fields, buttons, and alerts.`,...(q=(V=d.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};const pe=["Default","Sizes","SectionIcons","UIIcons","CustomStyles","WithClassName","UsageExamples"];export{a as CustomStyles,o as Default,c as SectionIcons,s as Sizes,r as UIIcons,d as UsageExamples,p as WithClassName,pe as __namedExportsOrder,ae as default};
