import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{R as A}from"./index-B0WjJBI_.js";import{c as E}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as W}from"./Breadcrumb-DEF5sgBW.js";import"./_commonjsHelpers-CqkleIqs.js";const _=E.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  flex-wrap: wrap;
`,q=E.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:r})=>r.colors.palette.neutral[400]};
  user-select: none;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,D=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),M=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 2L6 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),I=({variant:r="slash",className:c})=>e.jsx(q,{className:c,"aria-hidden":"true",children:r==="arrow"?e.jsx(D,{}):e.jsx(M,{})});I.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{variant:{required:!1,tsType:{name:"union",raw:"'arrow' | 'slash'",elements:[{name:"literal",value:"'arrow'"},{name:"literal",value:"'slash'"}]},description:"",defaultValue:{value:"'slash'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const N=({items:r,separator:c="slash",className:T})=>e.jsx(_,{"aria-label":"Breadcrumb",className:T,children:r.map((i,p)=>{const m=p===r.length-1;return e.jsxs(A.Fragment,{children:[e.jsx(W,{label:i.label,href:i.href,onClick:i.onClick,isActive:m}),!m&&e.jsx(I,{variant:c})]},p)})});N.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"union",raw:"'arrow' | 'slash'",elements:[{name:"literal",value:"'arrow'"},{name:"literal",value:"'slash'"}]},description:"",defaultValue:{value:"'slash'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/Breadcrumbs",component:N,parameters:{layout:"centered",docs:{description:{component:`
## Usage

\`\`\`tsx
import { Breadcrumbs } from '@lean-ids/components';

function MyComponent() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops' }
  ];

  return <Breadcrumbs items={items} separator="slash" />;
}
\`\`\`

Breadcrumbs provide navigation context and allow users to understand their location within a hierarchical structure.
        `}}},tags:["autodocs"],argTypes:{separator:{control:"radio",options:["slash","arrow"],description:"The separator style between breadcrumb items"},items:{description:"Array of breadcrumb items with label, href, and optional onClick"}}},a={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops"}],separator:"slash"}},s={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops"}],separator:"arrow"}},t={args:{items:[{label:"Home",href:"/"},{label:"Dashboard"}],separator:"slash"}},o={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Computers",href:"/products/electronics/computers"},{label:"Laptops",href:"/products/electronics/computers/laptops"},{label:"Gaming Laptops"}],separator:"slash"}},n={args:{items:[{label:"Home",onClick:()=>alert("Navigating to Home")},{label:"Products",onClick:()=>alert("Navigating to Products")},{label:"Current Page"}],separator:"arrow"}},l={args:{items:[{label:"Current Page"}],separator:"slash"}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Laptops'
    }],
    separator: 'slash'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Laptops'
    }],
    separator: 'arrow'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,x,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Dashboard'
    }],
    separator: 'slash'
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,P,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Computers',
      href: '/products/electronics/computers'
    }, {
      label: 'Laptops',
      href: '/products/electronics/computers/laptops'
    }, {
      label: 'Gaming Laptops'
    }],
    separator: 'slash'
  }
}`,...(y=(P=o.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var L,S,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      onClick: () => alert('Navigating to Home')
    }, {
      label: 'Products',
      onClick: () => alert('Navigating to Products')
    }, {
      label: 'Current Page'
    }],
    separator: 'arrow'
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,j,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Current Page'
    }],
    separator: 'slash'
  }
}`,...(H=(j=l.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const U=["Default","WithArrowSeparator","ShortPath","LongPath","WithClickHandlers","SingleItem"];export{a as Default,o as LongPath,t as ShortPath,l as SingleItem,s as WithArrowSeparator,n as WithClickHandlers,U as __namedExportsOrder,O as default};
