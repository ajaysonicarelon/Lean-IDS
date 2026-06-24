import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{A as r}from"./Avatar-BtdRwqdw.js";import{c as q}from"./styled-components.browser.esm-BIi91Tbq.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";const i=q.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 24px;
  align-items: center;
`,p=q.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,X={title:"Components/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:`
## Usage

\`\`\`tsx
import { Avatar } from '@lean-ids/components';

function UserProfile() {
  return (
    <div>
      {/* With image */}
      <Avatar 
        size="large" 
        src="https://example.com/avatar.jpg" 
        alt="John Doe" 
      />
      
      {/* With initials */}
      <Avatar 
        size="medium" 
        color="purple" 
        initials="JD" 
      />
      
      {/* Disabled state */}
      <Avatar 
        size="small" 
        initials="AB" 
        disabled 
      />
    </div>
  );
}
\`\`\`

Avatar component displays user profile pictures or initials in a circular container with various sizes and color options.
        `}}},tags:["autodocs"],argTypes:{size:{control:"radio",options:["large","medium","small"],description:"Size of the avatar (72px, 48px, or 32px)"},color:{control:"select",options:["default","purple","amber","cyan","lime","yellow","grey"],description:"Background color variant"},src:{control:"text",description:"Image URL for the avatar"},initials:{control:"text",description:"Initials to display (max 2 characters)"},disabled:{control:"boolean",description:"Disabled/greyed out state"}}},s={args:{size:"medium",color:"default",initials:"AA"}},e={render:()=>a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"default",initials:"AA"}),a.jsx(r,{size:"medium",color:"default",initials:"AA"}),a.jsx(r,{size:"small",color:"default",initials:"AA"})]})},l={render:()=>a.jsxs(p,{children:[a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"default",initials:"AA"}),a.jsx(r,{size:"medium",color:"default",initials:"AA"}),a.jsx(r,{size:"small",color:"default",initials:"AA"})]}),a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"purple",initials:"AA"}),a.jsx(r,{size:"medium",color:"purple",initials:"AA"}),a.jsx(r,{size:"small",color:"purple",initials:"AA"})]}),a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"amber",initials:"AA"}),a.jsx(r,{size:"medium",color:"amber",initials:"AA"}),a.jsx(r,{size:"small",color:"amber",initials:"AA"})]}),a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"cyan",initials:"AA"}),a.jsx(r,{size:"medium",color:"cyan",initials:"AA"}),a.jsx(r,{size:"small",color:"cyan",initials:"AA"})]}),a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"lime",initials:"AA"}),a.jsx(r,{size:"medium",color:"lime",initials:"AA"}),a.jsx(r,{size:"small",color:"lime",initials:"AA"})]}),a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"yellow",initials:"AA"}),a.jsx(r,{size:"medium",color:"yellow",initials:"AA"}),a.jsx(r,{size:"small",color:"yellow",initials:"AA"})]}),a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"grey",initials:"AA"}),a.jsx(r,{size:"medium",color:"grey",initials:"AA"}),a.jsx(r,{size:"small",color:"grey",initials:"AA"})]})]})},t={render:()=>a.jsxs(p,{children:[a.jsxs(i,{children:[a.jsx(r,{size:"large",src:"https://i.pravatar.cc/72?img=1",alt:"User 1"}),a.jsx(r,{size:"medium",src:"https://i.pravatar.cc/48?img=1",alt:"User 1"}),a.jsx(r,{size:"small",src:"https://i.pravatar.cc/32?img=1",alt:"User 1"})]}),a.jsxs(i,{children:[a.jsx(r,{size:"large",src:"https://i.pravatar.cc/72?img=5",alt:"User 2"}),a.jsx(r,{size:"medium",src:"https://i.pravatar.cc/48?img=5",alt:"User 2"}),a.jsx(r,{size:"small",src:"https://i.pravatar.cc/32?img=5",alt:"User 2"})]})]})},o={render:()=>a.jsxs(p,{children:[a.jsxs(i,{children:[a.jsx(r,{size:"large",initials:"AA",disabled:!0}),a.jsx(r,{size:"medium",initials:"AA",disabled:!0}),a.jsx(r,{size:"small",initials:"AA",disabled:!0})]}),a.jsxs(i,{children:[a.jsx(r,{size:"large",src:"https://i.pravatar.cc/72?img=3",alt:"User",disabled:!0}),a.jsx(r,{size:"medium",src:"https://i.pravatar.cc/48?img=3",alt:"User",disabled:!0}),a.jsx(r,{size:"small",src:"https://i.pravatar.cc/32?img=3",alt:"User",disabled:!0})]})]})},n={render:()=>a.jsxs(i,{children:[a.jsx(r,{size:"large",color:"purple",initials:"JD"}),a.jsx(r,{size:"medium",color:"cyan",initials:"SM"}),a.jsx(r,{size:"small",color:"amber",initials:"AB"})]})},c={args:{size:"large",color:"default",initials:"AA"}},m={args:{size:"medium",color:"purple",initials:"JD"}},A={args:{size:"small",color:"cyan",initials:"SM"}},d={args:{size:"medium",color:"purple",initials:"AS",onClick:()=>alert("Avatar clicked!")},parameters:{docs:{description:{story:"Avatar with onClick handler. Notice the pointer cursor on hover."}}}};var u,v,z;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'default',
    initials: 'AA'
  }
}`,...(z=(v=s.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var g,x,j;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <AvatarGrid>
      <Avatar size="large" color="default" initials="AA" />
      <Avatar size="medium" color="default" initials="AA" />
      <Avatar size="small" color="default" initials="AA" />
    </AvatarGrid>
}`,...(j=(x=e.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var h,y,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" color="default" initials="AA" />
        <Avatar size="medium" color="default" initials="AA" />
        <Avatar size="small" color="default" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="purple" initials="AA" />
        <Avatar size="medium" color="purple" initials="AA" />
        <Avatar size="small" color="purple" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="amber" initials="AA" />
        <Avatar size="medium" color="amber" initials="AA" />
        <Avatar size="small" color="amber" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="cyan" initials="AA" />
        <Avatar size="medium" color="cyan" initials="AA" />
        <Avatar size="small" color="cyan" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="lime" initials="AA" />
        <Avatar size="medium" color="lime" initials="AA" />
        <Avatar size="small" color="lime" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="yellow" initials="AA" />
        <Avatar size="medium" color="yellow" initials="AA" />
        <Avatar size="small" color="yellow" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="grey" initials="AA" />
        <Avatar size="medium" color="grey" initials="AA" />
        <Avatar size="small" color="grey" initials="AA" />
      </AvatarGrid>
    </AvatarColumn>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,G,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=1" alt="User 1" />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=1" alt="User 1" />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=1" alt="User 1" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=5" alt="User 2" />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=5" alt="User 2" />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=5" alt="User 2" />
      </AvatarGrid>
    </AvatarColumn>
}`,...(S=(G=t.parameters)==null?void 0:G.docs)==null?void 0:S.source}}};var U,C,D;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" initials="AA" disabled />
        <Avatar size="medium" initials="AA" disabled />
        <Avatar size="small" initials="AA" disabled />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=3" alt="User" disabled />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=3" alt="User" disabled />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=3" alt="User" disabled />
      </AvatarGrid>
    </AvatarColumn>
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var w,k,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <AvatarGrid>
      <Avatar size="large" color="purple" initials="JD" />
      <Avatar size="medium" color="cyan" initials="SM" />
      <Avatar size="small" color="amber" initials="AB" />
    </AvatarGrid>
}`,...(I=(k=n.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var J,M,B;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'default',
    initials: 'AA'
  }
}`,...(B=(M=c.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var W,L,E;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'purple',
    initials: 'JD'
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var N,R,_;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'small',
    color: 'cyan',
    initials: 'SM'
  }
}`,...(_=(R=A.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var O,P,T;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'purple',
    initials: 'AS',
    onClick: () => alert('Avatar clicked!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar with onClick handler. Notice the pointer cursor on hover.'
      }
    }
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const Y=["Default","AllSizes","AllColors","WithImages","Disabled","CustomInitials","LargeSize","MediumSize","SmallSize","Clickable"];export{l as AllColors,e as AllSizes,d as Clickable,n as CustomInitials,s as Default,o as Disabled,c as LargeSize,m as MediumSize,A as SmallSize,t as WithImages,Y as __namedExportsOrder,X as default};
