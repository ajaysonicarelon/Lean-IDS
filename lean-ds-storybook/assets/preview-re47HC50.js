import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as s,S as r}from"./styled-components.browser.esm-CuwBLqEg.js";import"./breakpoints-BV938s2O.js";import{e as l,c as i}from"./theme-DrWLRzWO.js";import{r as f}from"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";const c=f.createContext(void 0),n=({theme:o,children:t})=>e.jsx(c.Provider,{value:{theme:o},children:e.jsx(s,{theme:o,children:t})});n.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{theme:{required:!0,tsType:{name:"Theme"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const m=r`
  /* Elevance Sans Font Family */
  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* Roboto Mono for code */
  @font-face {
    font-family: 'Roboto Mono';
    src: url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap');
    font-weight: 400 700;
    font-style: normal;
    font-display: swap;
  }

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
    font-family: ${({theme:o})=>o.fonts.primary};
    color: ${({theme:o})=>o.colors.semantic.text.primary}; /* gray-900 - default for custom text */
    background-color: ${({theme:o})=>o.colors.semantic.background.primary};
    line-height: 1.5;
  }

  /* Focus visible styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${({theme:o})=>o.colors.semantic.border.focus};
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
`,v={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"light",values:[{name:"light",value:"#FFFFFF"},{name:"dark",value:"#1F2937"}]},docs:{story:{inline:!0,iframeHeight:400}},options:{storySort:{order:["About",["Introduction","Team"],"Getting Started",["Angular","React"],"Components","Design Tokens","Templates"],method:"alphabetical"}}},globalTypes:{theme:{description:"Global theme for components",defaultValue:"carelon",toolbar:{title:"Theme",icon:"paintbrush",items:[{value:"carelon",title:"Carelon",icon:"circlehollow"},{value:"elevance",title:"Elevance",icon:"circle"}],dynamicTitle:!0}}},decorators:[(o,t)=>{const a=t.globals.theme==="elevance"?l:i;return e.jsxs(n,{theme:a,children:[e.jsx(m,{}),e.jsx(o,{})]})}]};export{v as default};
