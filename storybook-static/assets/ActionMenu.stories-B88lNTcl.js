import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{f as n}from"./index-D_Ss_HUe.js";import{M as oe}from"./MoreVert-C1M_EAzU.js";import{n as te}from"./image-DwLHI-Re.js";import{r as m}from"./index-BXymfbzT.js";import{c}from"./CommonStyles.module-D_--k38T.js";import{I as ie}from"./IconButton-ClQenCbo.js";import{M as re}from"./Menu-DWe73gnW.js";import{M as t}from"./MenuItem-C8rEpSH1.js";import{E as Y,D as J}from"./Delete-r48tNyMX.js";import{c as K}from"./createSvgIcon-b5IFCipV.js";import{B as I}from"./Box--vvUYi_n.js";import{D as l}from"./Divider-C53wUNe9.js";import{T as r}from"./Typography-DS7NmyJ3.js";import"./jsx-runtime-Bw5QeaCk.js";import"./image-context-9EevjYAT.js";import"./index-DGKHe-6Q.js";import"./styled-C6O4spo1.js";import"./defaultTheme-B7jBPaaC.js";import"./memoTheme-D1v331c6.js";import"./createSimplePaletteValueFilter-DKwZs-al.js";import"./useEnhancedEffect-Dyb8TRSh.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./useId-iqt95REQ.js";import"./ButtonBase-CXK0KjYY.js";import"./CircularProgress-Dr3nbNzo.js";import"./index-CzG76ALe.js";import"./extendSxProp-BhyoeeqO.js";import"./useSlot-BmXk5o7q.js";import"./MenuList-C_ub-TVM.js";import"./Grow-C70ld54Z.js";import"./index-D4B05_Au.js";import"./listItemTextClasses-ExQqjRvV.js";import"./dividerClasses-DrQmggxL.js";const s=({children:a,onClose:j})=>{const[k,g]=m.useState(null),U=i=>{g(i.currentTarget)},X=i=>{g(null),j&&j(i)},ee=()=>m.Children.map(a,(i,M)=>{if(!m.isValidElement(i))return i;if(i.type===t){const p=i;return m.cloneElement(p,{key:i.key||`menu-item-${M}`,onClick:D=>{D.stopPropagation(),p.props.onClick&&p.props.onClick(D),g(null)},sx:{...p.props.sx,display:"flex",alignItems:"center",fontSize:"12px",paddingY:"6px"}})}const{label:ne,onClick:b,icon:v}=i.props;return e.jsxs(t,{className:`${c["more-options-item"]}`,onClick:()=>{b&&b()},children:[v&&e.jsx(te,{alt:`selectIcon-${M}`,src:v,height:25,width:25}),ne]},M)});return e.jsxs("div",{className:c.ActionMenu,children:[e.jsx("div",{className:c["dots-menu-step"],children:e.jsx(ie,{onClick:U,className:c.button,children:e.jsx(oe,{className:c.icon})})}),e.jsx(re,{sx:{mt:"40px"},anchorOrigin:{vertical:"top",horizontal:"right"},anchorEl:k,transformOrigin:{vertical:"top",horizontal:"right"},open:!!k,onClose:i=>X(i),children:a&&ee()})]})};s.__docgenInfo={description:"",methods:[],displayName:"ActionMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const Q=K(e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"})),se=K(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),o=a=>e.jsx(e.Fragment,{children:a.label}),qe={title:"Components/ActionMenu",component:s,parameters:{layout:"centered",docs:{description:{component:"A flexible dropdown menu for displaying actions and options, typically accessed via a three-dot icon button."}}},tags:["autodocs"],argTypes:{onClick:{action:"menuOpened"},onClose:{action:"menuClosed"}},decorators:[a=>e.jsx(I,{sx:{padding:4,display:"flex",justifyContent:"center"},children:e.jsx(a,{})})]},d={render:()=>e.jsxs(s,{children:[e.jsx(o,{label:"View",onClick:n()}),e.jsx(o,{label:"Edit",onClick:n()}),e.jsx(o,{label:"Delete",onClick:n()})]})},u={render:()=>e.jsxs(s,{children:[e.jsx(t,{onClick:n(),children:"View Details"}),e.jsx(t,{onClick:n(),children:"Edit Item"}),e.jsx(l,{}),e.jsx(t,{onClick:n(),sx:{color:"error.main"},children:"Delete Item"})]})},x={render:()=>e.jsxs(s,{children:[e.jsx(o,{label:"View",icon:"/icons/eye.svg",onClick:n()}),e.jsx(o,{label:"Edit",icon:"/icons/edit.svg",onClick:n()}),e.jsx(o,{label:"Delete",icon:"/icons/trash.svg",onClick:n()})]})},y={render:()=>e.jsxs(s,{children:[e.jsxs(t,{onClick:n(),sx:{display:"flex",gap:1},children:[e.jsx(Q,{fontSize:"small"}),e.jsx(r,{children:"View Details"})]}),e.jsxs(t,{onClick:n(),sx:{display:"flex",gap:1},children:[e.jsx(Y,{fontSize:"small"}),e.jsx(r,{children:"Edit Item"})]}),e.jsx(l,{}),e.jsxs(t,{onClick:n(),sx:{display:"flex",gap:1,color:"error.main"},children:[e.jsx(J,{fontSize:"small"}),e.jsx(r,{children:"Delete Item"})]})]})},h={render:()=>e.jsxs(s,{children:[e.jsx(o,{label:"View Details",onClick:n()}),e.jsx(l,{}),e.jsx(I,{sx:{px:2,py:1},children:e.jsx(r,{variant:"caption",color:"text.secondary",children:"ACTIONS"})}),e.jsx(o,{label:"Edit Item",onClick:n()}),e.jsx(o,{label:"Duplicate",onClick:n()}),e.jsx(o,{label:"Archive",onClick:n()}),e.jsx(l,{}),e.jsx(I,{sx:{px:2,py:1},children:e.jsx(r,{variant:"caption",color:"text.secondary",children:"DANGER ZONE"})}),e.jsx(t,{onClick:n(),sx:{color:"error.main"},children:"Delete Item"})]})},C={render:()=>e.jsxs(s,{children:[e.jsx(o,{label:"View Details",onClick:n()}),e.jsx(o,{label:"Edit Item",onClick:n()}),e.jsx(o,{label:"Share",onClick:n()}),e.jsx(o,{label:"Duplicate",onClick:n()}),e.jsx(l,{}),e.jsx(o,{label:"Delete Item",onClick:n()})]})},f={render:()=>e.jsxs(s,{children:[e.jsx(I,{sx:{px:2,py:1,backgroundColor:"primary.main",color:"white",borderTopLeftRadius:"4px",borderTopRightRadius:"4px"},children:e.jsx(r,{variant:"subtitle2",children:"Document Options"})}),e.jsxs(t,{onClick:n(),sx:{display:"flex",alignItems:"center",gap:1,py:1.5},children:[e.jsx(Q,{fontSize:"small"}),e.jsx(r,{children:"Preview"})]}),e.jsxs(t,{onClick:n(),sx:{display:"flex",alignItems:"center",gap:1,py:1.5},children:[e.jsx(Y,{fontSize:"small"}),e.jsx(r,{children:"Edit"})]}),e.jsxs(t,{onClick:n(),sx:{display:"flex",alignItems:"center",gap:1,py:1.5},children:[e.jsx(se,{fontSize:"small"}),e.jsx(r,{children:"Duplicate"})]}),e.jsx(l,{}),e.jsxs(t,{onClick:n(),sx:{display:"flex",alignItems:"center",gap:1,py:1.5,color:"error.main"},children:[e.jsx(J,{fontSize:"small"}),e.jsx(r,{children:"Delete"})]})]})};var E,S,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <CustomMenuItem label="View" onClick={fn()} />
      <CustomMenuItem label="Edit" onClick={fn()} />
      <CustomMenuItem label="Delete" onClick={fn()} />
    </ActionMenu>
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,w,z;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <MenuItem onClick={fn()}>View Details</MenuItem>
      <MenuItem onClick={fn()}>Edit Item</MenuItem>
      <Divider />
      <MenuItem onClick={fn()} sx={{
      color: 'error.main'
    }}>Delete Item</MenuItem>
    </ActionMenu>
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var V,R,O;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <CustomMenuItem label="View" icon="/icons/eye.svg" onClick={fn()} />
      <CustomMenuItem label="Edit" icon="/icons/edit.svg" onClick={fn()} />
      <CustomMenuItem label="Delete" icon="/icons/trash.svg" onClick={fn()} />
    </ActionMenu>
}`,...(O=(R=x.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var N,B,W;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <MenuItem onClick={fn()} sx={{
      display: 'flex',
      gap: 1
    }}>
        <VisibilityIcon fontSize="small" />
        <Typography>View Details</Typography>
      </MenuItem>
      <MenuItem onClick={fn()} sx={{
      display: 'flex',
      gap: 1
    }}>
        <EditIcon fontSize="small" />
        <Typography>Edit Item</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={fn()} sx={{
      display: 'flex',
      gap: 1,
      color: 'error.main'
    }}>
        <DeleteIcon fontSize="small" />
        <Typography>Delete Item</Typography>
      </MenuItem>
    </ActionMenu>
}`,...(W=(B=y.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var _,P,q;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <CustomMenuItem label="View Details" onClick={fn()} />
      <Divider />
      <Box sx={{
      px: 2,
      py: 1
    }}>
        <Typography variant="caption" color="text.secondary">ACTIONS</Typography>
      </Box>
      <CustomMenuItem label="Edit Item" onClick={fn()} />
      <CustomMenuItem label="Duplicate" onClick={fn()} />
      <CustomMenuItem label="Archive" onClick={fn()} />
      <Divider />
      <Box sx={{
      px: 2,
      py: 1
    }}>
        <Typography variant="caption" color="text.secondary">DANGER ZONE</Typography>
      </Box>
      <MenuItem onClick={fn()} sx={{
      color: 'error.main'
    }}>Delete Item</MenuItem>
    </ActionMenu>
}`,...(q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var H,$,G;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <CustomMenuItem label="View Details" onClick={fn()} />
      <CustomMenuItem label="Edit Item" onClick={fn()} />
      <CustomMenuItem label="Share" onClick={fn()} />
      <CustomMenuItem label="Duplicate" onClick={fn()} />
      <Divider />
      <CustomMenuItem label="Delete Item" onClick={fn()} />
    </ActionMenu>
}`,...(G=($=C.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var L,Z,F;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <Box sx={{
      px: 2,
      py: 1,
      backgroundColor: 'primary.main',
      color: 'white',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px'
    }}>
        <Typography variant="subtitle2">Document Options</Typography>
      </Box>
      <MenuItem onClick={fn()} sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      py: 1.5
    }}>
        <VisibilityIcon fontSize="small" />
        <Typography>Preview</Typography>
      </MenuItem>
      <MenuItem onClick={fn()} sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      py: 1.5
    }}>
        <EditIcon fontSize="small" />
        <Typography>Edit</Typography>
      </MenuItem>
      <MenuItem onClick={fn()} sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      py: 1.5
    }}>
        <ContentCopyIcon fontSize="small" />
        <Typography>Duplicate</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={fn()} sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      py: 1.5,
      color: 'error.main'
    }}>
        <DeleteIcon fontSize="small" />
        <Typography>Delete</Typography>
      </MenuItem>
    </ActionMenu>
}`,...(F=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};const He=["Basic","WithMaterialMenuItems","WithIcons","WithMaterialIcons","ComplexMenu","MobileOptimized","CustomStyled"];export{d as Basic,h as ComplexMenu,f as CustomStyled,C as MobileOptimized,x as WithIcons,y as WithMaterialIcons,u as WithMaterialMenuItems,He as __namedExportsOrder,qe as default};
