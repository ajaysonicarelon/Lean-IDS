import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{r as i}from"./index-B0WjJBI_.js";import{Q as s,l as n}from"./styled-components.browser.esm-BIi91Tbq.js";import"./breakpoints-DqB60pr6.js";import{e as l,c}from"./theme-Bvm5Suh7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./borders-4i-t20as.js";const m=i.createContext(void 0),r=({theme:e,children:t})=>o.jsx(m.Provider,{value:{theme:e},children:o.jsx(s,{theme:e,children:t})});r.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{theme:{required:!0,tsType:{name:"Theme"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d=n`
  /* Import Elevance Sans and Roboto Mono fonts */
  @import url('@ajaysoni7832/lean-ids-tokens/dist/fonts.css');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({theme:e})=>e.fonts.primary};
    color: ${({theme:e})=>e.colors.semantic.text.primary}; /* gray-900 - default for custom text */
    background-color: ${({theme:e})=>e.colors.semantic.background.primary};
    line-height: 1.5;
  }

  /* Focus visible styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.border.focus};
    outline-offset: 2px;
  }

  /* Remove default button styles */
  button {
    font-family: inherit;
    cursor: pointer;
  }

  /* Remove default input styles */
  input,
  textarea,
  select {
    font-family: inherit;
  }
`,x={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"light",values:[{name:"light",value:"#FFFFFF"},{name:"dark",value:"#1F2937"}]},docs:{story:{inline:!0,iframeHeight:400}},options:{storySort:{order:["About",["Introduction","Team"],"Getting Started",["Angular","React"],"Components","Design Tokens","Templates"],method:"alphabetical"}}},globalTypes:{theme:{description:"Global theme for components",defaultValue:"carelon",toolbar:{title:"Theme",icon:"paintbrush",items:[{value:"carelon",title:"Carelon",icon:"circlehollow"},{value:"elevance",title:"Elevance",icon:"circle"}],dynamicTitle:!0}}},decorators:[(e,t)=>{const a=t.globals.theme==="elevance"?l:c;return o.jsxs(r,{theme:a,children:[o.jsx(d,{}),o.jsx(e,{})]})}]};export{x as default};
