import{j as g}from"./jsx-runtime-DoEZbXM1.js";import{r as d}from"./index-BXymfbzT.js";import{C as $}from"./CustomPagination-BYrUrjcP.js";import{B as te}from"./Box--vvUYi_n.js";import"./jsx-runtime-Bw5QeaCk.js";import"./createSvgIcon-b5IFCipV.js";import"./styled-C6O4spo1.js";import"./defaultTheme-B7jBPaaC.js";import"./memoTheme-D1v331c6.js";import"./DefaultPropsProvider-B6e4UF29.js";import"./useSlot-BmXk5o7q.js";import"./createSimplePaletteValueFilter-DKwZs-al.js";import"./useEnhancedEffect-Dyb8TRSh.js";import"./extendSxProp-BhyoeeqO.js";import"./index-DC0bgLKc.js";import"./getThemeProps-CUHTK0IK.js";import"./Typography-DS7NmyJ3.js";import"./index-CzG76ALe.js";import"./IconButton-ClQenCbo.js";import"./useId-iqt95REQ.js";import"./ButtonBase-CXK0KjYY.js";import"./CircularProgress-Dr3nbNzo.js";import"./Select-C9DO0_Co.js";import"./useFormControl-hi_-Bm5a.js";import"./Menu-DWe73gnW.js";import"./MenuList-C_ub-TVM.js";import"./Grow-C70ld54Z.js";import"./index-D4B05_Au.js";import"./index-DGKHe-6Q.js";import"./useControlled-5dYq2F3P.js";import"./MenuItem-C8rEpSH1.js";import"./listItemTextClasses-ExQqjRvV.js";import"./dividerClasses-DrQmggxL.js";import"./TextField-BUiJvSAF.js";const Fe={title:"Components/CustomPagination",component:$,parameters:{layout:"centered",docs:{description:{component:`
          A responsive pagination component for tables and data grids that offers
          intuitive navigation, page size selection, and direct page access.
          
          ## When to use
          - For tables or data grids with multiple pages of content
          - When users need to configure how many items they see per page
          - When direct navigation to a specific page is beneficial
          - In responsive designs that need to work on various screen sizes
        `}}},argTypes:{count:{control:{type:"number",min:0},description:"Total number of items across all pages"},rowsPerPage:{control:{type:"number",min:1},description:"Number of items per page"},page:{control:{type:"number",min:0},description:"Current page (zero-based index)"},onPageChange:{action:"page changed",description:"Callback fired when the page is changed"},onRowsPerPageChange:{action:"rows per page changed",description:"Callback fired when the number of rows per page is changed"},rowsPerPageOptions:{control:"object",description:"Options for the rows per page select"}},tags:["autodocs"],decorators:[p=>g.jsx(te,{sx:{maxWidth:"1000px",m:2,p:2,border:"1px solid #eee",borderRadius:"8px"},children:g.jsx(p,{})})]},e={render:()=>{const[p,c]=d.useState(0),[ee,oe]=d.useState(10);return g.jsx($,{count:243,page:p,rowsPerPage:ee,onPageChange:(m,re)=>c(re),onRowsPerPageChange:m=>{oe(parseInt(m.target.value,10)),c(0)},rowsPerPageOptions:[5,10,25,50,100]})},parameters:{docs:{description:{story:"A fully interactive example where you can change pages, adjust rows per page, and enter specific page numbers."}}}},o={args:{count:100,page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25,50]},parameters:{docs:{description:{story:"Default pagination configuration with 100 items, 10 items per page, starting on the first page."}}}},r={args:{count:20,page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,20]},parameters:{docs:{description:{story:"Pagination with only a few items, demonstrating how it appears with a small number of pages."}}}},t={args:{count:1e3,page:5,rowsPerPage:10,rowsPerPageOptions:[10,25,50,100]},parameters:{docs:{description:{story:"Pagination with many items, showing how ellipsis are used to indicate large page ranges."}}}},s={args:{count:500,page:25,rowsPerPage:10,rowsPerPageOptions:[10,25,50,100]},parameters:{docs:{description:{story:"Pagination focused on a middle page, showing ellipsis on both sides of the current page range."}}}},a={args:{count:100,page:9,rowsPerPage:10,rowsPerPageOptions:[10,25,50,100]},parameters:{docs:{description:{story:"Pagination showing the last page of a set, demonstrating the UI state at the end of a list."}}}},n={args:{count:200,page:0,rowsPerPage:15,rowsPerPageOptions:[15,30,50,100]},parameters:{docs:{description:{story:"Pagination with custom rows per page options (15, 30, 50, 100 instead of the default)."}}}},i={args:{count:100,page:2,rowsPerPage:10,rowsPerPageOptions:[5,10,25]},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Demonstrates the responsive behavior of the pagination component on mobile screens."}}}};var P,u,w,l,h;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    // Using React state for a fully interactive demo
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const count = 243; // Total number of items

    return <CustomPagination count={count} page={page} rowsPerPage={rowsPerPage} onPageChange={(_, newPage) => setPage(newPage)} onRowsPerPageChange={event => {
      setRowsPerPage(parseInt(event.target.value as string, 10));
      setPage(0); // Reset to first page when changing rows per page
    }} rowsPerPageOptions={[5, 10, 25, 50, 100]} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'A fully interactive example where you can change pages, adjust rows per page, and enter specific page numbers.'
      }
    }
  }
}`,...(w=(u=e.parameters)==null?void 0:u.docs)==null?void 0:w.source},description:{story:`Interactive pagination component with full functionality.
This example demonstrates a controlled pagination component with state management.`,...(h=(l=e.parameters)==null?void 0:l.docs)==null?void 0:h.description}}};var f,y,b,v,O;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    count: 100,
    page: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 25, 50]
  },
  parameters: {
    docs: {
      description: {
        story: 'Default pagination configuration with 100 items, 10 items per page, starting on the first page.'
      }
    }
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Default pagination with standard configuration.",...(O=(v=o.parameters)==null?void 0:v.docs)==null?void 0:O.description}}};var x,C,I,R,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    count: 20,
    page: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with only a few items, demonstrating how it appears with a small number of pages.'
      }
    }
  }
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source},description:{story:"Pagination with a small number of items, showing fewer page buttons.",...(S=(R=r.parameters)==null?void 0:R.docs)==null?void 0:S.description}}};var j,D,M,T,k;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    count: 1000,
    page: 5,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many items, showing how ellipsis are used to indicate large page ranges.'
      }
    }
  }
}`,...(M=(D=t.parameters)==null?void 0:D.docs)==null?void 0:M.source},description:{story:"Pagination with a large number of items, showing ellipsis for page ranges.",...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var V,W,_,z,A;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    count: 500,
    page: 25,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination focused on a middle page, showing ellipsis on both sides of the current page range.'
      }
    }
  }
}`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:"Pagination showing the middle of a large set, with ellipsis on both sides.",...(A=(z=s.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};var E,F,U,B,L;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    count: 100,
    page: 9,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing the last page of a set, demonstrating the UI state at the end of a list.'
      }
    }
  }
}`,...(U=(F=a.parameters)==null?void 0:F.docs)==null?void 0:U.source},description:{story:"Pagination showing the last page of a set.",...(L=(B=a.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var N,q,G,H,J;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    count: 200,
    page: 0,
    rowsPerPage: 15,
    rowsPerPageOptions: [15, 30, 50, 100]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with custom rows per page options (15, 30, 50, 100 instead of the default).'
      }
    }
  }
}`,...(G=(q=n.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Custom rows per page options.",...(J=(H=n.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,Q,X,Y,Z;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    count: 100,
    page: 2,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 25]
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Demonstrates the responsive behavior of the pagination component on mobile screens.'
      }
    }
  }
}`,...(X=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`Mobile view simulation.
This story demonstrates how the pagination looks on small screens.`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const Ue=["Interactive","Default","FewItems","ManyItems","MiddlePage","LastPage","CustomRowsPerPageOptions","MobileView"];export{n as CustomRowsPerPageOptions,o as Default,r as FewItems,e as Interactive,a as LastPage,t as ManyItems,s as MiddlePage,i as MobileView,Ue as __namedExportsOrder,Fe as default};
