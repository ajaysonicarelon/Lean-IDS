import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as g}from"./index-B0WjJBI_.js";import{a as n,b as i,T as Y,c as D,d as G,e as J}from"./TableToolbar-53JTznBb.js";import{g as R}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as t}from"./Typography-DlcmwxwF.js";import{B as C}from"./Badge-08EIA_9P.js";import{I as u}from"./Icon-D9wW9sG4.js";import{T as ae}from"./TableSidePanel-Cy9s63Eh.js";import{B as h}from"./Button-4FxjpG2D.js";import{C as X}from"./Checkbox-B5k7d77F.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createSvgIcon-B7ekv6yR.js";import"./Chip-CHEHkNu4.js";import"./WarningAmberOutlined-BaSDCFAD.js";import"./Close-Bujf63ZX.js";import"./Search-3OWEky2d.js";import"./ExpandMore-DhGl5KfG.js";import"./Settings-DTDGO7Gi.js";import"./Home-l5wlLBdJ.js";import"./InlineMessage-C8LBd6CI.js";import"./Select-Bnepq8z-.js";import"./InputField-DW27YIEC.js";import"./FieldImportance-Blr2F3eN.js";import"./HelpingText-DoRwUTLu.js";import"./RadioButton-FHwiOUoL.js";const te=R.tr`
  background: ${({$selected:l,theme:r})=>l?r.colors.palette.primary[50]:r.colors.semantic.background.primary};
  
  ${({$hoverable:l,$disabled:r,theme:a})=>l&&!r&&`
    &:hover {
      background: ${a.colors.palette.neutral[50]};
    }
  `}
  
  ${({$clickable:l,$disabled:r})=>l&&!r&&`
    cursor: pointer;
  `}
  
  ${({$disabled:l,theme:r})=>l&&`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  transition: background 150ms ease;
  
  /* Border between rows */
  & + & {
    border-top: ${({theme:l})=>l.borderWidth[1]} solid ${({theme:l})=>l.colors.palette.neutral[200]};
  }
`,v=g.forwardRef(({as:l,selected:r=!1,hoverable:a=!0,clickable:m=!1,onClick:c,className:T,style:s,children:d,disabled:p=!1,role:o="row","aria-selected":y,"aria-label":B,...K},Q)=>{const Z=l||te,ee=le=>{!p&&c&&c(le)};return e.jsx(Z,{ref:Q,$selected:r,$hoverable:a,$clickable:m||!!c,$disabled:p,onClick:ee,className:T,style:s,role:o,"aria-selected":y!==void 0?y:r,"aria-label":B,"aria-disabled":p,...K,children:d})});v.displayName="TableRow";v.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{as:{required:!1,tsType:{name:"ElementType"},description:"Polymorphic component type (default: 'tr')"},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Hover state",defaultValue:{value:"true",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"Clickable state",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom style"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},role:{required:!1,tsType:{name:"string"},description:"ARIA role",defaultValue:{value:"'row'",computed:!1}},"aria-selected":{required:!1,tsType:{name:"boolean"},description:"ARIA selected"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label"}}};const De={title:"Components/Table/Custom Composition",parameters:{layout:"padded",docs:{description:{component:`
# Custom Table Composition

Build custom tables using individual standalone components. This gives you complete flexibility to create tables exactly how you want without relying on pre-built templates.

## Available Components

- **TableToolbar** - Toolbar with title, search, and action buttons
- **TableToolbarSection** - Section wrapper for toolbar content
- **TableToolbarTitle** - Styled title component
- **TableToolbarActions** - Actions wrapper
- **TableHeader** - Table header with sorting, search, resize, checkbox
- **TableRow** - Table row with hover, selection, click handlers
- **TableCell** - Table cell with various content types

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Import Individual Components

\`\`\`tsx
import {
  TableToolbar,
  TableToolbarSection,
  TableToolbarTitle,
  TableToolbarActions,
  TableHeader,
  TableRow,
  TableCell,
  Button,
  Badge,
  Typography
} from '@ajaysoni7832/lean-ids-components';
\`\`\`

## Benefits

✅ Full control over table structure
✅ No template lock-in
✅ Consistent look and feel
✅ Composable and reusable
✅ Type-safe with TypeScript
✅ Accessible with ARIA attributes
        `}}},tags:["autodocs"]},x=R.div`
  border: ${({theme:l})=>l.borderWidth[1]} solid ${({theme:l})=>l.colors.palette.neutral[300]};
  border-radius: ${({theme:l})=>l.borderRadius.md};
  overflow: hidden;
  background: ${({theme:l})=>l.colors.semantic.background.primary};
`,f=R.table`
  width: 100%;
  border-collapse: collapse;
  
  thead {
    background: ${({theme:l})=>l.colors.palette.neutral[50]};
    border-bottom: ${({theme:l})=>l.borderWidth[1]} solid ${({theme:l})=>l.colors.palette.neutral[200]};
  }
`,S=R.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:l})=>l.spacing[4]};
`,b=[{id:"1",name:"Alice Johnson",email:"alice.johnson@company.com",role:"Senior Developer",department:"Engineering",status:"Active",avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",name:"Bob Smith",email:"bob.smith@company.com",role:"Product Manager",department:"Product",status:"Active",avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",name:"Carol Williams",email:"carol.williams@company.com",role:"UX Designer",department:"Design",status:"Active",avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",name:"David Brown",email:"david.brown@company.com",role:"DevOps Engineer",department:"Engineering",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=4"}],j={render:()=>e.jsxs(S,{children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Basic Custom Table"}),e.jsx(t,{variant:"body",color:"secondary",children:"Simple table built with individual components - no pre-built Table component used."}),e.jsx(x,{children:e.jsxs(f,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(n,{label:"Name"}),e.jsx(n,{label:"Email"}),e.jsx(n,{label:"Department"}),e.jsx(n,{label:"Status"})]})}),e.jsx("tbody",{children:b.map(l=>e.jsxs(v,{hoverable:!0,children:[e.jsx(i,{children:e.jsx(t,{variant:"body",weight:"semibold",children:l.name})}),e.jsx(i,{children:e.jsx(t,{variant:"body",children:l.email})}),e.jsx(i,{children:e.jsx(t,{variant:"body",children:l.department})}),e.jsx(i,{children:e.jsx(C,{label:l.status,type:l.status==="Active"?"success":"neutral"})})]},l.id))})]})})]}),parameters:{docs:{description:{story:"Basic custom table using individual TableHeader, TableRow, and TableCell components."},source:{code:`
import {
  TableHeader,
  TableRow,
  TableCell,
  Badge,
  Typography
} from '@ajaysoni7832/lean-ids-components';

function BasicCustomTable() {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader label="Name" />
          <TableHeader label="Email" />
          <TableHeader label="Department" />
          <TableHeader label="Status" />
        </tr>
      </thead>
      
      <tbody>
        {employees.map((employee) => (
          <TableRow key={employee.id} hoverable>
            <TableCell>
              <Typography variant="body" weight="semibold">
                {employee.name}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body">{employee.email}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body">{employee.department}</Typography>
            </TableCell>
            <TableCell>
              <Badge 
                label={employee.status} 
                type={employee.status === 'Active' ? 'success' : 'neutral'} 
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}
        `}}}},w={render:()=>e.jsxs(S,{children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Custom Table with Toolbar"}),e.jsx(t,{variant:"body",color:"secondary",children:"Table with custom toolbar using TableToolbar composition components."}),e.jsxs(Y,{children:[e.jsx(D,{align:"left",children:e.jsx(G,{children:"Employee Directory"})}),e.jsx(D,{align:"right",children:e.jsxs(J,{children:[e.jsxs(h,{variant:"secondary",size:"small",children:[e.jsx(u,{name:"FilterAlt",size:"small"})," Filter"]}),e.jsxs(h,{variant:"secondary",size:"small",children:[e.jsx(u,{name:"Download",size:"small"})," Export"]}),e.jsxs(h,{variant:"primary",size:"small",children:[e.jsx(u,{name:"Add",size:"small"})," Add Employee"]})]})})]}),e.jsx(x,{children:e.jsxs(f,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(n,{label:"Name"}),e.jsx(n,{label:"Email"}),e.jsx(n,{label:"Status"})]})}),e.jsx("tbody",{children:b.map(l=>e.jsxs(v,{hoverable:!0,children:[e.jsx(i,{children:e.jsx(t,{variant:"body",weight:"semibold",children:l.name})}),e.jsx(i,{children:e.jsx(t,{variant:"body",children:l.email})}),e.jsx(i,{children:e.jsx(C,{label:l.status,type:l.status==="Active"?"success":"neutral"})})]},l.id))})]})})]}),parameters:{docs:{description:{story:"Custom table with toolbar built using TableToolbar composition components."},source:{code:`
import {
  TableToolbar,
  TableToolbarSection,
  TableToolbarTitle,
  TableToolbarActions,
  TableHeader,
  TableRow,
  TableCell,
  Button,
  Icon
} from '@ajaysoni7832/lean-ids-components';

function TableWithToolbar() {
  return (
    <>
      <TableToolbar>
        <TableToolbarSection align="left">
          <TableToolbarTitle>Employee Directory</TableToolbarTitle>
        </TableToolbarSection>
        
        <TableToolbarSection align="right">
          <TableToolbarActions>
            <Button variant="secondary" size="small">
              <Icon name="FilterAlt" /> Filter
            </Button>
            <Button variant="primary" size="small">
              <Icon name="Add" /> Add Employee
            </Button>
          </TableToolbarActions>
        </TableToolbarSection>
      </TableToolbar>
      
      <table>
        {/* Table content */}
      </table>
    </>
  );
}
        `}}}},k={render:()=>{const[l,r]=g.useState([]),[a,m]=g.useState(""),[c,T]=g.useState("none"),s=o=>{r(o?b.map(y=>y.id):[])},d=o=>{r(y=>y.includes(o)?y.filter(B=>B!==o):[...y,o])},p=o=>{a===o?T(y=>y==="none"?"asc":y==="asc"?"desc":"none"):(m(o),T("asc"))};return e.jsxs(S,{children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Interactive Custom Table"}),e.jsx(t,{variant:"body",color:"secondary",children:"Table with sorting, row selection, and click handlers - all built with individual components."}),e.jsx(x,{children:e.jsxs(f,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(n,{label:"",showCheckbox:!0,checked:l.length===b.length,indeterminate:l.length>0&&l.length<b.length,onCheckChange:s}),e.jsx(n,{label:"Name",sortable:!0,sortDirection:a==="name"?c:"none",onSort:()=>p("name")}),e.jsx(n,{label:"Email",sortable:!0,sortDirection:a==="email"?c:"none",onSort:()=>p("email")}),e.jsx(n,{label:"Department",sortable:!0,sortDirection:a==="department"?c:"none",onSort:()=>p("department")}),e.jsx(n,{label:"Status"})]})}),e.jsx("tbody",{children:b.map(o=>e.jsxs(v,{hoverable:!0,clickable:!0,selected:l.includes(o.id),onClick:()=>console.log("Row clicked:",o),children:[e.jsx(i,{children:e.jsx(X,{checked:l.includes(o.id),onChange:()=>d(o.id)})}),e.jsx(i,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("img",{src:o.avatar,alt:o.name,style:{width:32,height:32,borderRadius:"50%"}}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",weight:"semibold",children:o.name}),e.jsx(t,{variant:"caption",color:"secondary",children:o.role})]})]})}),e.jsx(i,{children:e.jsx(t,{variant:"body",children:o.email})}),e.jsx(i,{children:e.jsx(t,{variant:"body",children:o.department})}),e.jsx(i,{children:e.jsx(C,{label:o.status,type:o.status==="Active"?"success":"neutral"})})]},o.id))})]})}),e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:e.jsxs(t,{variant:"body",color:"secondary",children:[l.length," of ",b.length," rows selected"]})})]})},parameters:{docs:{description:{story:"Fully interactive table with sorting, row selection, and click handlers using individual components."},source:{code:`
import {
  TableHeader,
  TableRow,
  TableCell,
  Checkbox,
  Badge,
  Typography
} from '@ajaysoni7832/lean-ids-components';

function InteractiveTable() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('none');

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(employees.map(e => e.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(prev => 
        prev === 'none' ? 'asc' : prev === 'asc' ? 'desc' : 'none'
      );
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <TableHeader 
            showCheckbox
            checked={selectedIds.length === employees.length}
            onCheckChange={handleSelectAll}
          />
          <TableHeader 
            label="Name" 
            sortable
            sortDirection={sortColumn === 'name' ? sortDirection : 'none'}
            onSort={() => handleSort('name')}
          />
          <TableHeader label="Email" sortable />
          <TableHeader label="Status" />
        </tr>
      </thead>
      
      <tbody>
        {employees.map((employee) => (
          <TableRow 
            key={employee.id} 
            hoverable
            clickable
            selected={selectedIds.includes(employee.id)}
            onClick={() => console.log('Row clicked:', employee)}
          >
            <TableCell>
              <Checkbox 
                checked={selectedIds.includes(employee.id)}
                onChange={() => handleSelectRow(employee.id)}
              />
            </TableCell>
            <TableCell>
              <Typography variant="body" weight="semibold">
                {employee.name}
              </Typography>
            </TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>
              <Badge label={employee.status} type="success" />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}
        `}}}},I={render:()=>{const[l,r]=g.useState([]);return e.jsxs(S,{children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Fully Customized Table"}),e.jsx(t,{variant:"body",color:"secondary",children:"Complete example showing all features: toolbar, sorting, selection, custom cells, and actions."}),e.jsxs(Y,{children:[e.jsx(D,{align:"left",children:e.jsx(G,{children:"Team Members"})}),e.jsx(D,{align:"right",children:e.jsxs(J,{children:[e.jsx(h,{variant:"secondary",size:"small",children:e.jsx(u,{name:"Search",size:"small"})}),e.jsx(h,{variant:"secondary",size:"small",children:e.jsx(u,{name:"FilterAlt",size:"small"})}),e.jsx(h,{variant:"secondary",size:"small",children:e.jsx(u,{name:"Download",size:"small"})}),e.jsxs(h,{variant:"primary",size:"small",children:[e.jsx(u,{name:"Add",size:"small"})," Add Member"]})]})})]}),e.jsx(x,{children:e.jsxs(f,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(n,{label:"",showCheckbox:!0,checked:l.length===b.length,onCheckChange:a=>{r(a?b.map(m=>m.id):[])}}),e.jsx(n,{label:"Employee",sortable:!0}),e.jsx(n,{label:"Contact"}),e.jsx(n,{label:"Department"}),e.jsx(n,{label:"Status"}),e.jsx(n,{label:"Actions",align:"right"})]})}),e.jsx("tbody",{children:b.map(a=>e.jsxs(v,{hoverable:!0,selected:l.includes(a.id),children:[e.jsx(i,{children:e.jsx(X,{checked:l.includes(a.id),onChange:()=>{r(m=>m.includes(a.id)?m.filter(c=>c!==a.id):[...m,a.id])}})}),e.jsx(i,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("img",{src:a.avatar,alt:a.name,style:{width:40,height:40,borderRadius:"50%"}}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",weight:"semibold",children:a.name}),e.jsx(t,{variant:"caption",color:"secondary",children:a.role})]})]})}),e.jsx(i,{children:e.jsx(t,{variant:"body",children:a.email})}),e.jsx(i,{children:e.jsx(t,{variant:"body",children:a.department})}),e.jsx(i,{children:e.jsx(C,{label:a.status,type:a.status==="Active"?"success":"neutral"})}),e.jsx(i,{align:"right",children:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(h,{variant:"secondary",size:"small",showLabel:!1,leadingIcon:e.jsx(u,{name:"Edit",size:"small"}),onClick:()=>console.log("Edit:",a),"aria-label":"Edit",children:"Edit"}),e.jsx(h,{variant:"secondary",size:"small",showLabel:!1,leadingIcon:e.jsx(u,{name:"Delete",size:"small"}),onClick:()=>console.log("Delete:",a),"aria-label":"Delete",children:"Delete"})]})})]},a.id))})]})}),l.length>0&&e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"12px 16px",background:"#f0f9ff",borderRadius:"8px",border:"1px solid #bae6fd"},children:[e.jsxs(t,{variant:"body",weight:"semibold",children:[l.length," selected"]}),e.jsxs(h,{variant:"secondary",size:"small",children:[e.jsx(u,{name:"Delete",size:"small"})," Delete Selected"]}),e.jsxs(h,{variant:"secondary",size:"small",children:[e.jsx(u,{name:"Download",size:"small"})," Export Selected"]})]})]})},parameters:{docs:{description:{story:"Complete example with all features: custom toolbar, sorting, selection, custom cells with avatars, action buttons, and bulk actions."}}}},A={render:()=>{const[l,r]=g.useState([{id:"name",label:"Name",visible:!0,locked:!1,order:0},{id:"email",label:"Email",visible:!0,locked:!1,order:1},{id:"department",label:"Department",visible:!0,locked:!1,order:2},{id:"status",label:"Status",visible:!0,locked:!1,order:3}]),[a,m]=g.useState([]),c=b.filter(s=>a.every(d=>{const p=s[d.columnId];return String(p)===d.value})),T=l.filter(s=>s.visible);return e.jsxs(S,{children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Table with Side Panel"}),e.jsx(t,{variant:"body",color:"secondary",children:"TableSidePanel can be used anywhere - not just with tables! Control column visibility, ordering, locking, and filtering."}),e.jsxs("div",{style:{display:"flex",position:"relative"},children:[e.jsx("div",{style:{flex:1},children:e.jsx(x,{children:e.jsxs(f,{children:[e.jsx("thead",{children:e.jsx("tr",{children:T.map(s=>e.jsx(n,{label:s.label,locked:s.locked},s.id))})}),e.jsx("tbody",{children:c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:T.length,style:{padding:"40px",textAlign:"center"},children:e.jsx(t,{variant:"body",color:"secondary",children:"No data matches the current filters"})})}):c.map(s=>e.jsx(v,{hoverable:!0,children:T.map(d=>e.jsx(i,{children:d.id==="status"?e.jsx(C,{label:s.status,type:s.status==="Active"?"success":"neutral"}):e.jsx(t,{variant:"body",children:s[d.id]})},d.id))},s.id))})]})})}),e.jsx(ae,{columns:l,onColumnsChange:r,tableData:b,columnFilters:a,onFiltersChange:m})]}),a.length>0&&e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",padding:"12px 16px",background:"#f9fafb",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[e.jsx(t,{variant:"body",weight:"semibold",children:"Active Filters:"}),a.map(s=>{const d=l.find(p=>p.id===s.columnId);return e.jsx(C,{label:`${d==null?void 0:d.label}: ${s.value}`,type:"info"},s.columnId)})]})]})},parameters:{docs:{description:{story:`TableSidePanel is a standalone component that can be used anywhere - not just with tables! 
        
It provides:
- **Column Management**: Show/hide columns, reorder via drag & drop, lock/freeze columns
- **Filtering**: Dynamic filters based on your data with dropdown selectors
- **Custom Tabs**: Add your own custom panels (settings, exports, etc.)
- **Click Outside**: Automatically closes when clicking outside
- **Unsaved Changes Warning**: Prevents accidental loss of filter changes

Use it with any data grid, list, or custom layout where you need column/filter controls.`},source:{code:`
import { TableSidePanel } from '@ajaysoni7832/lean-ids-components';
import type { ColumnConfig, ColumnFilter } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  const [columns, setColumns] = useState<ColumnConfig[]>([
    { id: 'name', label: 'Name', visible: true, locked: false, order: 0 },
    { id: 'email', label: 'Email', visible: true, locked: false, order: 1 },
    { id: 'status', label: 'Status', visible: true, locked: false, order: 2 },
  ]);
  
  const [filters, setFilters] = useState<ColumnFilter[]>([]);
  
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      {/* Your content - table, grid, list, etc. */}
      <div style={{ flex: 1 }}>
        {/* Render based on columns and filters */}
      </div>
      
      {/* Side Panel - works anywhere! */}
      <TableSidePanel
        columns={columns}
        onColumnsChange={setColumns}
        tableData={myData}
        columnFilters={filters}
        onFiltersChange={setFilters}
      />
    </div>
  );
}
        `}}}};var E,z,H;j.parameters={...j.parameters,docs:{...(E=j.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return <TableWrapper>
        <Typography variant="headingM" weight="semibold">Basic Custom Table</Typography>
        <Typography variant="body" color="secondary">
          Simple table built with individual components - no pre-built Table component used.
        </Typography>
        
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <TableHeader label="Name" />
                <TableHeader label="Email" />
                <TableHeader label="Department" />
                <TableHeader label="Status" />
              </tr>
            </thead>
            
            <tbody>
              {sampleEmployees.map(employee => <TableRow key={employee.id} hoverable>
                  <TableCell>
                    <Typography variant="body" weight="semibold">{employee.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body">{employee.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body">{employee.department}</Typography>
                  </TableCell>
                  <TableCell>
                    <Badge label={employee.status} type={employee.status === 'Active' ? 'success' : 'neutral'} />
                  </TableCell>
                </TableRow>)}
            </tbody>
          </StyledTable>
        </TableContainer>
      </TableWrapper>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic custom table using individual TableHeader, TableRow, and TableCell components.'
      },
      source: {
        code: \`
import {
  TableHeader,
  TableRow,
  TableCell,
  Badge,
  Typography
} from '@ajaysoni7832/lean-ids-components';

function BasicCustomTable() {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader label="Name" />
          <TableHeader label="Email" />
          <TableHeader label="Department" />
          <TableHeader label="Status" />
        </tr>
      </thead>
      
      <tbody>
        {employees.map((employee) => (
          <TableRow key={employee.id} hoverable>
            <TableCell>
              <Typography variant="body" weight="semibold">
                {employee.name}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body">{employee.email}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body">{employee.department}</Typography>
            </TableCell>
            <TableCell>
              <Badge 
                label={employee.status} 
                type={employee.status === 'Active' ? 'success' : 'neutral'} 
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}
        \`
      }
    }
  }
}`,...(H=(z=j.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var F,M,W;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return <TableWrapper>
        <Typography variant="headingM" weight="semibold">Custom Table with Toolbar</Typography>
        <Typography variant="body" color="secondary">
          Table with custom toolbar using TableToolbar composition components.
        </Typography>
        
        <TableToolbar>
          <TableToolbarSection align="left">
            <TableToolbarTitle>Employee Directory</TableToolbarTitle>
          </TableToolbarSection>
          
          <TableToolbarSection align="right">
            <TableToolbarActions>
              <Button variant="secondary" size="small">
                <Icon name="FilterAlt" size="small" /> Filter
              </Button>
              <Button variant="secondary" size="small">
                <Icon name="Download" size="small" /> Export
              </Button>
              <Button variant="primary" size="small">
                <Icon name="Add" size="small" /> Add Employee
              </Button>
            </TableToolbarActions>
          </TableToolbarSection>
        </TableToolbar>
        
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <TableHeader label="Name" />
                <TableHeader label="Email" />
                <TableHeader label="Status" />
              </tr>
            </thead>
            
            <tbody>
              {sampleEmployees.map(employee => <TableRow key={employee.id} hoverable>
                  <TableCell>
                    <Typography variant="body" weight="semibold">{employee.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body">{employee.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Badge label={employee.status} type={employee.status === 'Active' ? 'success' : 'neutral'} />
                  </TableCell>
                </TableRow>)}
            </tbody>
          </StyledTable>
        </TableContainer>
      </TableWrapper>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom table with toolbar built using TableToolbar composition components.'
      },
      source: {
        code: \`
import {
  TableToolbar,
  TableToolbarSection,
  TableToolbarTitle,
  TableToolbarActions,
  TableHeader,
  TableRow,
  TableCell,
  Button,
  Icon
} from '@ajaysoni7832/lean-ids-components';

function TableWithToolbar() {
  return (
    <>
      <TableToolbar>
        <TableToolbarSection align="left">
          <TableToolbarTitle>Employee Directory</TableToolbarTitle>
        </TableToolbarSection>
        
        <TableToolbarSection align="right">
          <TableToolbarActions>
            <Button variant="secondary" size="small">
              <Icon name="FilterAlt" /> Filter
            </Button>
            <Button variant="primary" size="small">
              <Icon name="Add" /> Add Employee
            </Button>
          </TableToolbarActions>
        </TableToolbarSection>
      </TableToolbar>
      
      <table>
        {/* Table content */}
      </table>
    </>
  );
}
        \`
      }
    }
  }
}`,...(W=(M=w.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var P,N,$;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [sortColumn, setSortColumn] = useState<string>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('none');
    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedIds(sampleEmployees.map(e => e.id));
      } else {
        setSelectedIds([]);
      }
    };
    const handleSelectRow = (id: string) => {
      setSelectedIds(prev => prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id]);
    };
    const handleSort = (column: string) => {
      if (sortColumn === column) {
        setSortDirection(prev => prev === 'none' ? 'asc' : prev === 'asc' ? 'desc' : 'none');
      } else {
        setSortColumn(column);
        setSortDirection('asc');
      }
    };
    return <TableWrapper>
        <Typography variant="headingM" weight="semibold">Interactive Custom Table</Typography>
        <Typography variant="body" color="secondary">
          Table with sorting, row selection, and click handlers - all built with individual components.
        </Typography>
        
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <TableHeader label="" showCheckbox checked={selectedIds.length === sampleEmployees.length} indeterminate={selectedIds.length > 0 && selectedIds.length < sampleEmployees.length} onCheckChange={handleSelectAll} />
                <TableHeader label="Name" sortable sortDirection={sortColumn === 'name' ? sortDirection : 'none'} onSort={() => handleSort('name')} />
                <TableHeader label="Email" sortable sortDirection={sortColumn === 'email' ? sortDirection : 'none'} onSort={() => handleSort('email')} />
                <TableHeader label="Department" sortable sortDirection={sortColumn === 'department' ? sortDirection : 'none'} onSort={() => handleSort('department')} />
                <TableHeader label="Status" />
              </tr>
            </thead>
            
            <tbody>
              {sampleEmployees.map(employee => <TableRow key={employee.id} hoverable clickable selected={selectedIds.includes(employee.id)} onClick={() => console.log('Row clicked:', employee)}>
                  <TableCell>
                    <Checkbox checked={selectedIds.includes(employee.id)} onChange={() => handleSelectRow(employee.id)} />
                  </TableCell>
                  <TableCell>
                    <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                      <img src={employee.avatar} alt={employee.name} style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%'
                  }} />
                      <div>
                        <Typography variant="body" weight="semibold">{employee.name}</Typography>
                        <Typography variant="caption" color="secondary">{employee.role}</Typography>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body">{employee.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body">{employee.department}</Typography>
                  </TableCell>
                  <TableCell>
                    <Badge label={employee.status} type={employee.status === 'Active' ? 'success' : 'neutral'} />
                  </TableCell>
                </TableRow>)}
            </tbody>
          </StyledTable>
        </TableContainer>
        
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Typography variant="body" color="secondary">
            {selectedIds.length} of {sampleEmployees.length} rows selected
          </Typography>
        </div>
      </TableWrapper>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive table with sorting, row selection, and click handlers using individual components.'
      },
      source: {
        code: \`
import {
  TableHeader,
  TableRow,
  TableCell,
  Checkbox,
  Badge,
  Typography
} from '@ajaysoni7832/lean-ids-components';

function InteractiveTable() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('none');

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(employees.map(e => e.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(prev => 
        prev === 'none' ? 'asc' : prev === 'asc' ? 'desc' : 'none'
      );
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <TableHeader 
            showCheckbox
            checked={selectedIds.length === employees.length}
            onCheckChange={handleSelectAll}
          />
          <TableHeader 
            label="Name" 
            sortable
            sortDirection={sortColumn === 'name' ? sortDirection : 'none'}
            onSort={() => handleSort('name')}
          />
          <TableHeader label="Email" sortable />
          <TableHeader label="Status" />
        </tr>
      </thead>
      
      <tbody>
        {employees.map((employee) => (
          <TableRow 
            key={employee.id} 
            hoverable
            clickable
            selected={selectedIds.includes(employee.id)}
            onClick={() => console.log('Row clicked:', employee)}
          >
            <TableCell>
              <Checkbox 
                checked={selectedIds.includes(employee.id)}
                onChange={() => handleSelectRow(employee.id)}
              />
            </TableCell>
            <TableCell>
              <Typography variant="body" weight="semibold">
                {employee.name}
              </Typography>
            </TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>
              <Badge label={employee.status} type="success" />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}
        \`
      }
    }
  }
}`,...($=(N=k.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var q,L,U;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    return <TableWrapper>
        <Typography variant="headingM" weight="semibold">Fully Customized Table</Typography>
        <Typography variant="body" color="secondary">
          Complete example showing all features: toolbar, sorting, selection, custom cells, and actions.
        </Typography>
        
        <TableToolbar>
          <TableToolbarSection align="left">
            <TableToolbarTitle>Team Members</TableToolbarTitle>
          </TableToolbarSection>
          
          <TableToolbarSection align="right">
            <TableToolbarActions>
              <Button variant="secondary" size="small">
                <Icon name="Search" size="small" />
              </Button>
              <Button variant="secondary" size="small">
                <Icon name="FilterAlt" size="small" />
              </Button>
              <Button variant="secondary" size="small">
                <Icon name="Download" size="small" />
              </Button>
              <Button variant="primary" size="small">
                <Icon name="Add" size="small" /> Add Member
              </Button>
            </TableToolbarActions>
          </TableToolbarSection>
        </TableToolbar>
        
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <TableHeader label="" showCheckbox checked={selectedIds.length === sampleEmployees.length} onCheckChange={checked => {
                setSelectedIds(checked ? sampleEmployees.map(e => e.id) : []);
              }} />
                <TableHeader label="Employee" sortable />
                <TableHeader label="Contact" />
                <TableHeader label="Department" />
                <TableHeader label="Status" />
                <TableHeader label="Actions" align="right" />
              </tr>
            </thead>
            
            <tbody>
              {sampleEmployees.map(employee => <TableRow key={employee.id} hoverable selected={selectedIds.includes(employee.id)}>
                  <TableCell>
                    <Checkbox checked={selectedIds.includes(employee.id)} onChange={() => {
                  setSelectedIds(prev => prev.includes(employee.id) ? prev.filter(id => id !== employee.id) : [...prev, employee.id]);
                }} />
                  </TableCell>
                  
                  <TableCell>
                    <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                      <img src={employee.avatar} alt={employee.name} style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%'
                  }} />
                      <div>
                        <Typography variant="body" weight="semibold">{employee.name}</Typography>
                        <Typography variant="caption" color="secondary">{employee.role}</Typography>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body">{employee.email}</Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body">{employee.department}</Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Badge label={employee.status} type={employee.status === 'Active' ? 'success' : 'neutral'} />
                  </TableCell>
                  
                  <TableCell align="right">
                    <div style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end'
                }}>
                      <Button variant="secondary" size="small" showLabel={false} leadingIcon={<Icon name="Edit" size="small" />} onClick={() => console.log('Edit:', employee)} aria-label="Edit">
                        Edit
                      </Button>
                      <Button variant="secondary" size="small" showLabel={false} leadingIcon={<Icon name="Delete" size="small" />} onClick={() => console.log('Delete:', employee)} aria-label="Delete">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>)}
            </tbody>
          </StyledTable>
        </TableContainer>
        
        {selectedIds.length > 0 && <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        padding: '12px 16px',
        background: '#f0f9ff',
        borderRadius: '8px',
        border: '1px solid #bae6fd'
      }}>
            <Typography variant="body" weight="semibold">
              {selectedIds.length} selected
            </Typography>
            <Button variant="secondary" size="small">
              <Icon name="Delete" size="small" /> Delete Selected
            </Button>
            <Button variant="secondary" size="small">
              <Icon name="Download" size="small" /> Export Selected
            </Button>
          </div>}
      </TableWrapper>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete example with all features: custom toolbar, sorting, selection, custom cells with avatars, action buttons, and bulk actions.'
      }
    }
  }
}`,...(U=(L=I.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var V,O,_;A.parameters={...A.parameters,docs:{...(V=A.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<ColumnConfig[]>([{
      id: 'name',
      label: 'Name',
      visible: true,
      locked: false,
      order: 0
    }, {
      id: 'email',
      label: 'Email',
      visible: true,
      locked: false,
      order: 1
    }, {
      id: 'department',
      label: 'Department',
      visible: true,
      locked: false,
      order: 2
    }, {
      id: 'status',
      label: 'Status',
      visible: true,
      locked: false,
      order: 3
    }]);
    const [filters, setFilters] = useState<ColumnFilter[]>([]);

    // Filter data based on active filters
    const filteredData = sampleEmployees.filter(employee => {
      return filters.every(filter => {
        const value = employee[filter.columnId as keyof typeof employee];
        return String(value) === filter.value;
      });
    });

    // Get visible columns
    const visibleColumns = columns.filter(col => col.visible);
    return <TableWrapper>
        <Typography variant="headingM" weight="semibold">Table with Side Panel</Typography>
        <Typography variant="body" color="secondary">
          TableSidePanel can be used anywhere - not just with tables! Control column visibility, ordering, locking, and filtering.
        </Typography>
        
        <div style={{
        display: 'flex',
        position: 'relative'
      }}>
          {/* Table */}
          <div style={{
          flex: 1
        }}>
            <TableContainer>
              <StyledTable>
                <thead>
                  <tr>
                    {visibleColumns.map(col => <TableHeader key={col.id} label={col.label} locked={col.locked} />)}
                  </tr>
                </thead>
                
                <tbody>
                  {filteredData.length === 0 ? <tr>
                      <td colSpan={visibleColumns.length} style={{
                    padding: '40px',
                    textAlign: 'center'
                  }}>
                        <Typography variant="body" color="secondary">
                          No data matches the current filters
                        </Typography>
                      </td>
                    </tr> : filteredData.map(employee => <TableRow key={employee.id} hoverable>
                        {visibleColumns.map(col => <TableCell key={col.id}>
                            {col.id === 'status' ? <Badge label={employee.status} type={employee.status === 'Active' ? 'success' : 'neutral'} /> : <Typography variant="body">
                                {employee[col.id as keyof typeof employee]}
                              </Typography>}
                          </TableCell>)}
                      </TableRow>)}
                </tbody>
              </StyledTable>
            </TableContainer>
          </div>
          
          {/* Side Panel - Can be used anywhere! */}
          <TableSidePanel columns={columns} onColumnsChange={setColumns} tableData={sampleEmployees} columnFilters={filters} onFiltersChange={setFilters} />
        </div>
        
        {filters.length > 0 && <div style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        padding: '12px 16px',
        background: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
            <Typography variant="body" weight="semibold">
              Active Filters:
            </Typography>
            {filters.map(filter => {
          const col = columns.find(c => c.id === filter.columnId);
          return <Badge key={filter.columnId} label={\`\${col?.label}: \${filter.value}\`} type="info" />;
        })}
          </div>}
      </TableWrapper>;
  },
  parameters: {
    docs: {
      description: {
        story: \`TableSidePanel is a standalone component that can be used anywhere - not just with tables! 
        
It provides:
- **Column Management**: Show/hide columns, reorder via drag & drop, lock/freeze columns
- **Filtering**: Dynamic filters based on your data with dropdown selectors
- **Custom Tabs**: Add your own custom panels (settings, exports, etc.)
- **Click Outside**: Automatically closes when clicking outside
- **Unsaved Changes Warning**: Prevents accidental loss of filter changes

Use it with any data grid, list, or custom layout where you need column/filter controls.\`
      },
      source: {
        code: \`
import { TableSidePanel } from '@ajaysoni7832/lean-ids-components';
import type { ColumnConfig, ColumnFilter } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  const [columns, setColumns] = useState<ColumnConfig[]>([
    { id: 'name', label: 'Name', visible: true, locked: false, order: 0 },
    { id: 'email', label: 'Email', visible: true, locked: false, order: 1 },
    { id: 'status', label: 'Status', visible: true, locked: false, order: 2 },
  ]);
  
  const [filters, setFilters] = useState<ColumnFilter[]>([]);
  
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      {/* Your content - table, grid, list, etc. */}
      <div style={{ flex: 1 }}>
        {/* Render based on columns and filters */}
      </div>
      
      {/* Side Panel - works anywhere! */}
      <TableSidePanel
        columns={columns}
        onColumnsChange={setColumns}
        tableData={myData}
        columnFilters={filters}
        onFiltersChange={setFilters}
      />
    </div>
  );
}
        \`
      }
    }
  }
}`,...(_=(O=A.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const Re=["BasicCustomTable","WithToolbar","WithSortingAndSelection","FullyCustomized","WithSidePanel"];export{j as BasicCustomTable,I as FullyCustomized,A as WithSidePanel,k as WithSortingAndSelection,w as WithToolbar,Re as __namedExportsOrder,De as default};
