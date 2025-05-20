import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{B as o}from"./ButtonT1-Dk7QlGc1.js";import{c as $}from"./createSvgIcon-WBDWxNXq.js";import{M as ee}from"./MoreVert-6UMZ49uP.js";import{a as f}from"./index-B-lxVbXh.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-BXymfbzT.js";import"./index-B7GWv8on.js";import"./defaultTheme-UNuJapAP.js";import"./extendSxProp-5AyqGU7c.js";import"./getThemeProps-CUHTK0IK.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./useEnhancedEffect-CmoGJv52.js";import"./styled-aNEffR3I.js";import"./Typography-C5wZEALe.js";import"./createSimplePaletteValueFilter-Bi9b2Xgg.js";import"./memoTheme-D9pS0H-f.js";import"./generateUtilityClasses-DmTfqs8F.js";import"./composeClasses-CAXbtk_0.js";import"./index-PBTQE5ia.js";import"./Button-BL8qeAYS.js";import"./useId-iqt95REQ.js";import"./ButtonBase-BvbE4pna.js";import"./CircularProgress-Dq955uQ3.js";import"./Tooltip-aZxJtKT4.js";import"./useControlled-5dYq2F3P.js";import"./Grow-CGFbKkAs.js";import"./index-D4B05_Au.js";import"./index-DGKHe-6Q.js";import"./Divider-DlZGDl5O.js";import"./dividerClasses-DmnOZZkI.js";import"./v4-CtRu48qb.js";const n=$(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),v=$(e.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})),Me={title:"Components/ButtonT1",component:o,parameters:{layout:"centered",docs:{description:{component:"Un botón avanzado con soporte para múltiples estados, confirmación, tooltips, y elementos adicionales."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","outlined","contained"],description:"El estilo visual del botón",defaultValue:"contained"},color:{control:"select",options:["primary","secondary","success","error","info","warning"],description:"El color del botón",defaultValue:"primary"},size:{control:"select",options:["small","medium","large"],description:"El tamaño del botón",defaultValue:"medium"},disabled:{control:"boolean",description:"Si el botón está deshabilitado",defaultValue:!1},loading:{control:"boolean",description:"Si el botón está en estado de carga",defaultValue:!1},responsive:{control:"boolean",description:"Si el botón debe adaptarse a pantallas pequeñas",defaultValue:!1},fullWidth:{control:"boolean",description:"Si el botón debe ocupar todo el ancho disponible",defaultValue:!1},disableElevation:{control:"boolean",description:"Si se debe deshabilitar la elevación del botón",defaultValue:!1},preventDoubleClick:{control:"boolean",description:"Si se debe prevenir el doble clic",defaultValue:!1},onClick:{action:"clicked"},children:{control:"text",description:"El contenido del botón"},tooltipText:{control:"text",description:"Texto del tooltip"},confirmationMessage:{control:"text",description:"Mensaje de confirmación"}}},r={args:{children:"Botón",variant:"contained",color:"primary",onClick:f("button-clicked")}},t={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{variant:"contained",children:"Contained"}),e.jsx(o,{variant:"outlined",children:"Outlined"}),e.jsx(o,{variant:"text",children:"Text"})]})},a={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(o,{color:"primary",children:"Primary"}),e.jsx(o,{color:"secondary",children:"Secondary"}),e.jsx(o,{color:"success",children:"Success"}),e.jsx(o,{color:"error",children:"Error"}),e.jsx(o,{color:"info",children:"Info"}),e.jsx(o,{color:"warning",children:"Warning"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(o,{size:"small",children:"Small"}),e.jsx(o,{size:"medium",children:"Medium"}),e.jsx(o,{size:"large",children:"Large"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(o,{startIcon:e.jsx(n,{}),children:"Con icono inicial"}),e.jsx(o,{endIcon:e.jsx(v,{}),children:"Con icono final"}),e.jsx(o,{endIcon:e.jsx(v,{}),additionalIcon:e.jsx(ee,{}),children:"Con icono adicional"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(o,{loading:!0,children:"Cargando"}),e.jsx(o,{loading:!0,variant:"outlined",children:"Cargando"}),e.jsx(o,{loading:!0,color:"secondary",children:"Cargando"})]})},l={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{tooltipText:"Información adicional sobre este botón",children:"Hover para ver tooltip"}),e.jsx(o,{tooltipText:"Botón para añadir un nuevo elemento",tooltipPlacement:"bottom",startIcon:e.jsx(n,{}),children:"Tooltip abajo"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(o,{confirmationMessage:"¿Estás seguro de realizar esta acción?",color:"error",children:"Botón con confirmación"}),e.jsx(o,{confirmationMessage:"Esta acción no se puede deshacer",confirmationTitle:"Confirmar eliminación",confirmationConfirmText:"Eliminar",confirmationCancelText:"Cancelar",color:"error",variant:"outlined",children:"Eliminar"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(o,{responsive:!0,children:"Responsivo"}),e.jsx(o,{responsive:!0,startIcon:e.jsx(n,{}),children:"Adaptable a móvil"})]}),parameters:{docs:{description:{story:"Estos botones cambiarán de tamaño y ocuparán el ancho completo en pantallas pequeñas. Prueba a redimensionar la ventana para ver el efecto."}}}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(o,{fullWidth:!0,children:"Ancho completo"}),e.jsx(o,{fullWidth:!0,variant:"outlined",startIcon:e.jsx(n,{}),children:"Ancho completo con icono"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(o,{startIcon:e.jsx(n,{}),endIcon:e.jsx(v,{}),tooltipText:"Agregar y continuar al siguiente paso",fullWidth:!0,color:"success",children:"Agregar y continuar"}),e.jsx(o,{color:"error",variant:"outlined",confirmationMessage:"Esta acción eliminará permanentemente el elemento",startIcon:e.jsx(n,{}),additionalIcon:e.jsx(ee,{}),tooltipText:"Eliminar permanentemente",preventDoubleClick:!0,fullWidth:!0,children:"Eliminar permanentemente"})]})},x={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{preventDoubleClick:!0,onClick:f("clicked-with-prevention"),children:"Con prevención de doble clic"}),e.jsx(o,{onClick:f("clicked-without-prevention"),children:"Sin prevención"})]}),parameters:{docs:{description:{story:"El botón con prevención de doble clic se deshabilitará temporalmente después de hacer clic. Prueba a hacer clic rápidamente en ambos botones y observa el comportamiento en la pestaña Actions."}}}};var h,T,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Botón',
    variant: 'contained',
    color: 'primary',
    onClick: action('button-clicked')
  }
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var b,B,j;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <ButtonT1 variant="contained">Contained</ButtonT1>
      <ButtonT1 variant="outlined">Outlined</ButtonT1>
      <ButtonT1 variant="text">Text</ButtonT1>
    </div>
}`,...(j=(B=t.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var C,I,w;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ButtonT1 color="primary">Primary</ButtonT1>
      <ButtonT1 color="secondary">Secondary</ButtonT1>
      <ButtonT1 color="success">Success</ButtonT1>
      <ButtonT1 color="error">Error</ButtonT1>
      <ButtonT1 color="info">Info</ButtonT1>
      <ButtonT1 color="warning">Warning</ButtonT1>
    </div>
}`,...(w=(I=a.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var S,y,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <ButtonT1 size="small">Small</ButtonT1>
      <ButtonT1 size="medium">Medium</ButtonT1>
      <ButtonT1 size="large">Large</ButtonT1>
    </div>
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var A,N,k;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ButtonT1 startIcon={<AddIcon />}>Con icono inicial</ButtonT1>
      <ButtonT1 endIcon={<ArrowForwardIcon />}>Con icono final</ButtonT1>
      <ButtonT1 endIcon={<ArrowForwardIcon />} additionalIcon={<MoreVertIcon />}>
        Con icono adicional
      </ButtonT1>
    </div>
}`,...(k=(N=s.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var W,M,V;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ButtonT1 loading>Cargando</ButtonT1>
      <ButtonT1 loading variant="outlined">Cargando</ButtonT1>
      <ButtonT1 loading color="secondary">Cargando</ButtonT1>
    </div>
}`,...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var z,P,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <ButtonT1 tooltipText="Información adicional sobre este botón">
        Hover para ver tooltip
      </ButtonT1>
      <ButtonT1 tooltipText="Botón para añadir un nuevo elemento" tooltipPlacement="bottom" startIcon={<AddIcon />}>
        Tooltip abajo
      </ButtonT1>
    </div>
}`,...(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var F,L,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ButtonT1 confirmationMessage="¿Estás seguro de realizar esta acción?" color="error">
        Botón con confirmación
      </ButtonT1>
      <ButtonT1 confirmationMessage="Esta acción no se puede deshacer" confirmationTitle="Confirmar eliminación" confirmationConfirmText="Eliminar" confirmationCancelText="Cancelar" color="error" variant="outlined">
        Eliminar
      </ButtonT1>
    </div>
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var H,q,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ButtonT1 responsive>Responsivo</ButtonT1>
      <ButtonT1 responsive startIcon={<AddIcon />}>
        Adaptable a móvil
      </ButtonT1>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Estos botones cambiarán de tamaño y ocuparán el ancho completo en pantallas pequeñas. Prueba a redimensionar la ventana para ver el efecto.'
      }
    }
  }
}`,...(O=(q=p.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var _,U,G;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">
      <ButtonT1 fullWidth>Ancho completo</ButtonT1>
      <ButtonT1 fullWidth variant="outlined" startIcon={<AddIcon />}>
        Ancho completo con icono
      </ButtonT1>
    </div>
}`,...(G=(U=m.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">
      <ButtonT1 startIcon={<AddIcon />} endIcon={<ArrowForwardIcon />} tooltipText="Agregar y continuar al siguiente paso" fullWidth color="success">
        Agregar y continuar
      </ButtonT1>
      <ButtonT1 color="error" variant="outlined" confirmationMessage="Esta acción eliminará permanentemente el elemento" startIcon={<AddIcon />} additionalIcon={<MoreVertIcon />} tooltipText="Eliminar permanentemente" preventDoubleClick fullWidth>
        Eliminar permanentemente
      </ButtonT1>
    </div>
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <ButtonT1 preventDoubleClick onClick={action('clicked-with-prevention')}>
        Con prevención de doble clic
      </ButtonT1>
      <ButtonT1 onClick={action('clicked-without-prevention')}>
        Sin prevención
      </ButtonT1>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'El botón con prevención de doble clic se deshabilitará temporalmente después de hacer clic. Prueba a hacer clic rápidamente en ambos botones y observa el comportamiento en la pestaña Actions.'
      }
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ve=["Default","Variants","Colors","Sizes","WithIcons","LoadingState","WithTooltip","WithConfirmation","Responsive","FullWidth","CombinedProperties","PreventDoubleClick"];export{a as Colors,u as CombinedProperties,r as Default,m as FullWidth,c as LoadingState,x as PreventDoubleClick,p as Responsive,i as Sizes,t as Variants,d as WithConfirmation,s as WithIcons,l as WithTooltip,Ve as __namedExportsOrder,Me as default};
