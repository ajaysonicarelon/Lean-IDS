import{B}from"./Brand-D2_m1Vnv.js";import"./jsx-runtime-DSvmvvsx.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";const R={title:"Components/Brand",component:B,parameters:{layout:"centered",docs:{description:{component:"Brand logo component supporting Carelon and Elevance brands with custom logo options."}}},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["logo","symbol"],description:"Logo variant - full logo or symbol only"},brand:{control:"radio",options:["carelon","elevance"],description:"Brand name"},mode:{control:"radio",options:["dark","light"],description:"Color mode"},customLogoUrl:{control:"text",description:"Custom logo image URL (overrides default brand logos)"},logoAlignment:{control:"radio",options:["left","center","right"],description:"Logo alignment"},logoPadding:{control:"text",description:'Logo padding (e.g., "10px", "20px 10px")'}}},o={args:{variant:"logo",brand:"carelon",mode:"light"}},r={args:{variant:"symbol",brand:"carelon",mode:"light"}},e={args:{variant:"logo",brand:"elevance",mode:"light"}},a={args:{variant:"symbol",brand:"elevance",mode:"light"}},n={args:{variant:"logo",customLogoUrl:"https://via.placeholder.com/120x40/6366f1/ffffff?text=Custom+Logo",logoAlignment:"center",logoPadding:"10px"},parameters:{docs:{description:{story:"Brand with custom logo URL, centered alignment, and padding."}}}},t={args:{variant:"logo",customLogoUrl:"https://via.placeholder.com/120x40/10b981/ffffff?text=My+Brand",logoAlignment:"left",logoPadding:"20px"}};var s,l,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'logo',
    brand: 'carelon',
    mode: 'light'
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,i,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'symbol',
    brand: 'carelon',
    mode: 'light'
  }
}`,...(g=(i=r.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'logo',
    brand: 'elevance',
    mode: 'light'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,v,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'symbol',
    brand: 'elevance',
    mode: 'light'
  }
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,L,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'logo',
    customLogoUrl: 'https://via.placeholder.com/120x40/6366f1/ffffff?text=Custom+Logo',
    logoAlignment: 'center',
    logoPadding: '10px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Brand with custom logo URL, centered alignment, and padding.'
      }
    }
  }
}`,...(x=(L=n.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var y,C,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'logo',
    customLogoUrl: 'https://via.placeholder.com/120x40/10b981/ffffff?text=My+Brand',
    logoAlignment: 'left',
    logoPadding: '20px'
  }
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const M=["CarelonLogo","CarelonSymbol","ElevanceLogo","ElevanceSymbol","CustomLogo","CustomLogoWithPadding"];export{o as CarelonLogo,r as CarelonSymbol,n as CustomLogo,t as CustomLogoWithPadding,e as ElevanceLogo,a as ElevanceSymbol,M as __namedExportsOrder,R as default};
