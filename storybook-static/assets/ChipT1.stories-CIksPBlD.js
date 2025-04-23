import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{R as H}from"./index-BXymfbzT.js";import{C as r}from"./ChipT1-DQr7UN14.js";import{S as i}from"./Stack-BvywK3G5.js";import"./jsx-runtime-Bw5QeaCk.js";import"./styled-DNQA3T_q.js";import"./defaultTheme-BOkF7xEx.js";import"./createSvgIcon-B6X0fLc_.js";import"./memoTheme-DVyz49Y0.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./createSimplePaletteValueFilter-BsRTDaOg.js";import"./useEnhancedEffect-DSc7A9Vk.js";import"./ButtonBase-D8-EA4Ep.js";import"./extendSxProp-LV0UK_Tm.js";import"./getThemeProps-CUHTK0IK.js";const oe={title:"Components/ChipT1",component:r,parameters:{layout:"centered",docs:{description:{component:`
          A customizable chip component based on Material UI's Chip, 
          designed to display compact elements like tags, filters, or status indicators.
          
          ## When to use
          - As a tag or label for categorizing or organizing content
          - To display status or state information (like "Active", "Pending", etc.)
          - For filter selections in search interfaces
          - To show compact, actionable information
        `}}},argTypes:{color:{control:{type:"select",options:["primary","error","default","success","warning"]},description:"The color of the chip"},variant:{control:{type:"select",options:["filled","outlined"]},description:"The visual style of the chip"},size:{control:{type:"select",options:["small","medium"]},description:"The size of the chip"},label:{control:"text",description:"The content of the chip"},hoverEffect:{control:"boolean",description:"Whether to show a hover effect when the user hovers over the chip"},customColorDefinition:{control:"object",description:"Custom color configuration for the chip"},onClick:{action:"clicked",description:"Callback fired when the chip is clicked"},onDelete:{action:"deleted",description:"Callback fired when the delete icon is clicked"}},tags:["autodocs"]},o={render:()=>e.jsxs(i,{direction:"column",spacing:2,alignItems:"center",children:[e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Primary Filled",color:"primary",variant:"filled"}),e.jsx(r,{label:"Primary Outlined",color:"primary",variant:"outlined"})]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Error Filled",color:"error",variant:"filled"}),e.jsx(r,{label:"Error Outlined",color:"error",variant:"outlined"})]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Success Filled",color:"success",variant:"filled"}),e.jsx(r,{label:"Success Outlined",color:"success",variant:"outlined"})]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Warning Filled",color:"warning",variant:"filled"}),e.jsx(r,{label:"Warning Outlined",color:"warning",variant:"outlined"})]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Default Filled",color:"default",variant:"filled"}),e.jsx(r,{label:"Default Outlined",color:"default",variant:"outlined"})]})]}),parameters:{docs:{description:{story:"Shows all color variations in both filled and outlined variants."}}}},t={render:()=>e.jsxs(i,{direction:"column",spacing:2,alignItems:"center",children:[e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Small Primary",color:"primary",size:"small"}),e.jsx(r,{label:"Medium Primary",color:"primary",size:"medium"})]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Small Error",color:"error",size:"small"}),e.jsx(r,{label:"Medium Error",color:"error",size:"medium"})]})]}),parameters:{docs:{description:{story:"Demonstrates the small and medium size variants of the chip component."}}}},a={render:()=>e.jsxs(i,{direction:"column",spacing:2,alignItems:"center",children:[e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Rounded Chip",color:"primary"}),e.jsx(r,{label:"Hover Effect",color:"success",hoverEffect:!0})]}),e.jsx(i,{direction:"row",spacing:2,children:e.jsx(r,{label:"Custom Color",customColorDefinition:{backgroundColor:{filled:"#purple",outlined:"transparent"},color:{filled:"white",outlined:"purple"},borderColor:{filled:"#purple",outlined:"purple"}}})})]}),parameters:{docs:{description:{story:"Examples of customizing the chip appearance with hover effects and custom colors."}}}},s={render:()=>e.jsxs(i,{direction:"column",spacing:2,alignItems:"center",children:[e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Short Text",color:"primary"}),e.jsx(r,{label:"Medium Length Text",color:"error"}),e.jsx(r,{label:"Very Long Descriptive Text",color:"success"})]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{label:"Chip with Delete",onDelete:()=>{},color:"warning"}),e.jsx(r,{label:"Clickable Chip",onClick:()=>{},color:"default"})]})]}),parameters:{docs:{description:{story:"Demonstrates chips with different content lengths and interactive behaviors (deletable, clickable)."}}}},c={render:()=>{const[l,L]=H.useState(!1);return e.jsx(i,{direction:"column",spacing:2,alignItems:"center",children:e.jsx(r,{label:l?"Selected":"Select Me",color:l?"primary":"default",onClick:()=>L(!l),hoverEffect:!0})})},parameters:{docs:{description:{story:"An interactive example showing how chips can change based on state (selected/unselected)."}}}},n={args:{label:"Accessible Chip",color:"primary",variant:"outlined","aria-label":"Example of an accessible chip"},parameters:{docs:{description:{story:"Shows how to create accessible chips using ARIA attributes."}}}};var d,p,m,h,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={2} alignItems="center">
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Primary Filled" color="primary" variant="filled" />
        <ChipT1 label="Primary Outlined" color="primary" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Error Filled" color="error" variant="filled" />
        <ChipT1 label="Error Outlined" color="error" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Success Filled" color="success" variant="filled" />
        <ChipT1 label="Success Outlined" color="success" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Warning Filled" color="warning" variant="filled" />
        <ChipT1 label="Warning Outlined" color="warning" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Default Filled" color="default" variant="filled" />
        <ChipT1 label="Default Outlined" color="default" variant="outlined" />
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Shows all color variations in both filled and outlined variants.'
      }
    }
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:`Different color variations of the ChipT1 component in both filled and outlined variants.

This example demonstrates all the available color options:
- primary: Used for main actions or primary tags
- error: Used for error states or destructive tags
- success: Used for success states or confirmations
- warning: Used for warnings or attention-required states
- default: Used for neutral or less emphasized tags`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var f,g,b,C,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={2} alignItems="center">
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Small Primary" color="primary" size="small" />
        <ChipT1 label="Medium Primary" color="primary" size="medium" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Small Error" color="error" size="small" />
        <ChipT1 label="Medium Error" color="error" size="medium" />
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the small and medium size variants of the chip component.'
      }
    }
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:`The ChipT1 component comes in two sizes: small and medium.

- small: Compact size, useful when space is limited or for dense UIs
- medium: Standard size, provides better visibility and touch target`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var y,v,x,w,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={2} alignItems="center">
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Rounded Chip" color="primary" />
        <ChipT1 label="Hover Effect" color="success" hoverEffect={true} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Custom Color" customColorDefinition={{
        backgroundColor: {
          filled: '#purple',
          outlined: 'transparent'
        },
        color: {
          filled: 'white',
          outlined: 'purple'
        },
        borderColor: {
          filled: '#purple',
          outlined: 'purple'
        }
      }} />
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of customizing the chip appearance with hover effects and custom colors.'
      }
    }
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:`The ChipT1 component supports custom styling options:

- Hover effects can make chips more interactive
- Custom colors allow for brand-specific styling`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var T,j,z,D,E;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={2} alignItems="center">
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Short Text" color="primary" />
        <ChipT1 label="Medium Length Text" color="error" />
        <ChipT1 label="Very Long Descriptive Text" color="success" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ChipT1 label="Chip with Delete" onDelete={() => {}} color="warning" />
        <ChipT1 label="Clickable Chip" onClick={() => {}} color="default" />
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates chips with different content lengths and interactive behaviors (deletable, clickable).'
      }
    }
  }
}`,...(z=(j=s.parameters)==null?void 0:j.docs)==null?void 0:z.source},description:{story:`ChipT1 can display different types of content and interactions:

- Various text lengths
- Deletable chips (with delete icon)
- Clickable chips (for actions or toggling)`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.description}}};var I,A,F,O,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(false);
    return <Stack direction="column" spacing={2} alignItems="center">
        <ChipT1 label={selected ? "Selected" : "Select Me"} color={selected ? "primary" : "default"} onClick={() => setSelected(!selected)} hoverEffect={true} />
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'An interactive example showing how chips can change based on state (selected/unselected).'
      }
    }
  }
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:`Example of an interactive chip that changes appearance based on state.

This demonstrates how ChipT1 can be used for toggling or selection behaviors.`,...(M=(O=c.parameters)==null?void 0:O.docs)==null?void 0:M.description}}};var P,R,V,U,W;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Accessible Chip',
    color: 'primary',
    variant: 'outlined',
    'aria-label': 'Example of an accessible chip'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to create accessible chips using ARIA attributes.'
      }
    }
  }
}`,...(V=(R=n.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:`This example demonstrates accessibility features of the ChipT1 component.

The chip includes appropriate ARIA attributes for better screen reader support.`,...(W=(U=n.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};const te=["ColorVariations","SizeVariations","CustomStyledChips","ContentVariations","InteractiveChips","AccessibilityDemo"];export{n as AccessibilityDemo,o as ColorVariations,s as ContentVariations,a as CustomStyledChips,c as InteractiveChips,t as SizeVariations,te as __namedExportsOrder,oe as default};
