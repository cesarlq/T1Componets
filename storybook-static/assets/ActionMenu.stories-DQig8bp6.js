import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{f as n}from"./index-D_Ss_HUe.js";import{c as j}from"./createSvgIcon-D0mATHlG.js";import{n as te}from"./image-DwLHI-Re.js";import{r as m}from"./index-BXymfbzT.js";import{s as c}from"./CommonStyles.module-f-38JgHW.js";import{I as oe}from"./IconButton-DsAIGaX2.js";import{M as ie}from"./Menu-B5Kf5TMl.js";import{M as o}from"./MenuItem-DakQGu4P.js";import{E as J,D as K}from"./Delete-CSykCaA8.js";import{B as I}from"./Box-JOqr2wtB.js";import{D as l}from"./Divider-BFBVl-6O.js";import{T as r}from"./Typography-vd5-dgFJ.js";import"./jsx-runtime-Bw5QeaCk.js";import"./styled-DpR3dCKc.js";import"./defaultTheme-CkM2R3ON.js";import"./memoTheme-DKONLN91.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./image-context-9EevjYAT.js";import"./index-DGKHe-6Q.js";import"./createSimplePaletteValueFilter-J0RuAuc7.js";import"./useEnhancedEffect-CeoXdHlB.js";import"./useId-iqt95REQ.js";import"./ButtonBase-BTzlvCm9.js";import"./CircularProgress-DNCOZvBd.js";import"./index-DOKpkcnV.js";import"./useSlot-DTa0a6Bp.js";import"./useTheme-BQir2oYr.js";import"./MenuList-BKKKXqDt.js";import"./Grow-Djd8tJ7A.js";import"./index-D4B05_Au.js";import"./listItemTextClasses-BGND8NCS.js";import"./dividerClasses-DuzW5_lU.js";import"./extendSxProp-B03odEHs.js";import"./index-BVUt_Ixh.js";const re=j(e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"})),s=({children:a,onClose:k})=>{const[b,g]=m.useState(null),U=i=>{g(i.currentTarget)},X=i=>{g(null),k&&k(i)},ee=()=>m.Children.map(a,(i,M)=>{if(!m.isValidElement(i))return i;if(i.type===o){const p=i;return m.cloneElement(p,{key:i.key||`menu-item-${M}`,onClick:E=>{E.stopPropagation(),p.props.onClick&&p.props.onClick(E),g(null)},sx:{...p.props.sx,display:"flex",alignItems:"center",fontSize:"12px",paddingY:"6px"}})}const{label:ne,onClick:v,icon:D}=i.props;return e.jsxs(o,{className:`${c["more-options-item"]}`,onClick:()=>{v&&v()},children:[D&&e.jsx(te,{alt:`selectIcon-${M}`,src:D,height:25,width:25}),ne]},M)});return e.jsxs("div",{className:c.ActionMenu,children:[e.jsx("div",{className:c["dots-menu-step"],children:e.jsx(oe,{onClick:U,className:c.button,children:e.jsx(re,{className:c.icon})})}),e.jsx(ie,{sx:{mt:"40px"},anchorOrigin:{vertical:"top",horizontal:"right"},anchorEl:b,transformOrigin:{vertical:"top",horizontal:"right"},open:!!b,onClose:i=>X(i),children:a&&ee()})]})};s.__docgenInfo={description:"",methods:[],displayName:"ActionMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const Q=j(e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"})),se=j(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),t=a=>e.jsx(e.Fragment,{children:a.label}),He={title:"Components/ActionMenu",component:s,parameters:{layout:"centered",docs:{description:{component:"A flexible dropdown menu for displaying actions and options, typically accessed via a three-dot icon button."}}},tags:["autodocs"],argTypes:{onClick:{action:"menuOpened"},onClose:{action:"menuClosed"}},decorators:[a=>e.jsx(I,{sx:{padding:4,display:"flex",justifyContent:"center"},children:e.jsx(a,{})})]},d={render:()=>e.jsxs(s,{children:[e.jsx(t,{label:"View",onClick:n()}),e.jsx(t,{label:"Edit",onClick:n()}),e.jsx(t,{label:"Delete",onClick:n()})]})},u={render:()=>e.jsxs(s,{children:[e.jsx(o,{onClick:n(),children:"View Details"}),e.jsx(o,{onClick:n(),children:"Edit Item"}),e.jsx(l,{}),e.jsx(o,{onClick:n(),sx:{color:"error.main"},children:"Delete Item"})]})},x={render:()=>e.jsxs(s,{children:[e.jsx(t,{label:"View",icon:"/icons/eye.svg",onClick:n()}),e.jsx(t,{label:"Edit",icon:"/icons/edit.svg",onClick:n()}),e.jsx(t,{label:"Delete",icon:"/icons/trash.svg",onClick:n()})]})},y={render:()=>e.jsxs(s,{children:[e.jsxs(o,{onClick:n(),sx:{display:"flex",gap:1},children:[e.jsx(Q,{fontSize:"small"}),e.jsx(r,{children:"View Details"})]}),e.jsxs(o,{onClick:n(),sx:{display:"flex",gap:1},children:[e.jsx(J,{fontSize:"small"}),e.jsx(r,{children:"Edit Item"})]}),e.jsx(l,{}),e.jsxs(o,{onClick:n(),sx:{display:"flex",gap:1,color:"error.main"},children:[e.jsx(K,{fontSize:"small"}),e.jsx(r,{children:"Delete Item"})]})]})},h={render:()=>e.jsxs(s,{children:[e.jsx(t,{label:"View Details",onClick:n()}),e.jsx(l,{}),e.jsx(I,{sx:{px:2,py:1},children:e.jsx(r,{variant:"caption",color:"text.secondary",children:"ACTIONS"})}),e.jsx(t,{label:"Edit Item",onClick:n()}),e.jsx(t,{label:"Duplicate",onClick:n()}),e.jsx(t,{label:"Archive",onClick:n()}),e.jsx(l,{}),e.jsx(I,{sx:{px:2,py:1},children:e.jsx(r,{variant:"caption",color:"text.secondary",children:"DANGER ZONE"})}),e.jsx(o,{onClick:n(),sx:{color:"error.main"},children:"Delete Item"})]})},C={render:()=>e.jsxs(s,{children:[e.jsx(t,{label:"View Details",onClick:n()}),e.jsx(t,{label:"Edit Item",onClick:n()}),e.jsx(t,{label:"Share",onClick:n()}),e.jsx(t,{label:"Duplicate",onClick:n()}),e.jsx(l,{}),e.jsx(t,{label:"Delete Item",onClick:n()})]})},f={render:()=>e.jsxs(s,{children:[e.jsx(I,{sx:{px:2,py:1,backgroundColor:"primary.main",color:"white",borderTopLeftRadius:"4px",borderTopRightRadius:"4px"},children:e.jsx(r,{variant:"subtitle2",children:"Document Options"})}),e.jsxs(o,{onClick:n(),sx:{display:"flex",alignItems:"center",gap:1,py:1.5},children:[e.jsx(Q,{fontSize:"small"}),e.jsx(r,{children:"Preview"})]}),e.jsxs(o,{onClick:n(),sx:{display:"flex",alignItems:"center",gap:1,py:1.5},children:[e.jsx(J,{fontSize:"small"}),e.jsx(r,{children:"Edit"})]}),e.jsxs(o,{onClick:n(),sx:{display:"flex",alignItems:"center",gap:1,py:1.5},children:[e.jsx(se,{fontSize:"small"}),e.jsx(r,{children:"Duplicate"})]}),e.jsx(l,{}),e.jsxs(o,{onClick:n(),sx:{display:"flex",alignItems:"center",gap:1,py:1.5,color:"error.main"},children:[e.jsx(K,{fontSize:"small"}),e.jsx(r,{children:"Delete"})]})]})};var S,T,A;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <CustomMenuItem label="View" onClick={fn()} />
      <CustomMenuItem label="Edit" onClick={fn()} />
      <CustomMenuItem label="Delete" onClick={fn()} />
    </ActionMenu>
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var w,z,V;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <MenuItem onClick={fn()}>View Details</MenuItem>
      <MenuItem onClick={fn()}>Edit Item</MenuItem>
      <Divider />
      <MenuItem onClick={fn()} sx={{
      color: 'error.main'
    }}>Delete Item</MenuItem>
    </ActionMenu>
}`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var R,O,N;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <CustomMenuItem label="View" icon="/icons/eye.svg" onClick={fn()} />
      <CustomMenuItem label="Edit" icon="/icons/edit.svg" onClick={fn()} />
      <CustomMenuItem label="Delete" icon="/icons/trash.svg" onClick={fn()} />
    </ActionMenu>
}`,...(N=(O=x.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var B,W,_;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(W=y.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var P,q,H;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(q=h.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var $,G,L;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <ActionMenu>
      <CustomMenuItem label="View Details" onClick={fn()} />
      <CustomMenuItem label="Edit Item" onClick={fn()} />
      <CustomMenuItem label="Share" onClick={fn()} />
      <CustomMenuItem label="Duplicate" onClick={fn()} />
      <Divider />
      <CustomMenuItem label="Delete Item" onClick={fn()} />
    </ActionMenu>
}`,...(L=(G=C.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var Z,F,Y;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Y=(F=f.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};const $e=["Basic","WithMaterialMenuItems","WithIcons","WithMaterialIcons","ComplexMenu","MobileOptimized","CustomStyled"];export{d as Basic,h as ComplexMenu,f as CustomStyled,C as MobileOptimized,x as WithIcons,y as WithMaterialIcons,u as WithMaterialMenuItems,$e as __namedExportsOrder,He as default};
