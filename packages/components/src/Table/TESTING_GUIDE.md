# Table Width Fixes - Testing Guide

## 🎯 Quick Testing Methods

### **Method 1: Storybook (Recommended)** ⭐

1. **Start Storybook:**
   ```bash
   cd packages/components
   npm run storybook
   ```

2. **Navigate to:**
   - `Components → Table → Width Constraints Test`

3. **Available Test Stories:**
   - **With Width Constraints** - Main test with long text
   - **With Narrow Columns** - Tests tight width constraints
   - **With Wide Columns** - Tests large width ranges
   - **With Mixed Widths** - Tests various column sizes together

4. **What to Test:**
   - ✅ Columns start at configured width (150px for Job Name)
   - ✅ Long text shows ellipsis: `ingest-etl-rawz_lz_ma...`
   - ✅ Hover over column border shows resize cursor
   - ✅ Drag left - stops at minWidth (120px)
   - ✅ Drag right - stops at maxWidth (200px)
   - ✅ Expanding column reveals full text

---

### **Method 2: Direct Component Usage**

1. **Import the test component:**
   ```typescript
   import TableWidthTestExample from '@/components/Table/TABLE_WIDTH_TEST_EXAMPLE';
   ```

2. **Use in your app:**
   ```tsx
   <TableWidthTestExample />
   ```

3. **Or copy the code from:**
   - `packages/components/src/Table/TABLE_WIDTH_TEST_EXAMPLE.tsx`

---

### **Method 3: Manual Integration**

Copy this code into your application:

```typescript
import { Table } from '@ajaysoni7832/lean-ids-components';

const testData = [
  {
    id: 1,
    jobName: 'ingest-etl-rawz_lz_macess_chrt_span_dtl',
    tableName: 'lz_macess_chrt_span_dtl',
    database: 'AWSPROD',
  },
  // ... more rows
];

const columns = [
  {
    id: 'jobName',
    label: 'Job Name',
    accessor: (row) => row.jobName,
    sortable: true,
    resizable: true,
    width: 150,      // ✅ Initial width
    minWidth: 120,   // ✅ Cannot resize below this
    maxWidth: 200,   // ✅ Cannot resize above this
  },
  {
    id: 'tableName',
    label: 'Table Name',
    accessor: (row) => row.tableName,
    sortable: true,
    resizable: true,
    width: 150,
    minWidth: 120,
    maxWidth: 200,
  },
];

<Table
  data={testData}
  columns={columns}
  showToolbar
  title="Width Test"
  rowKey="id"
/>
```

---

## ✅ Testing Checklist

### **1. Initial Width** ✓
- [ ] Job Name column starts at **150px** width
- [ ] Table Name column starts at **150px** width
- [ ] Database column starts at **100px** width
- [ ] Columns are NOT expanding to fit content

### **2. Text Truncation** ✓
- [ ] Long job name shows ellipsis: `ingest-etl-rawz_lz_ma...`
- [ ] Long table name shows ellipsis: `lz_macess_chrt_span...`
- [ ] Ellipsis appears at the end of truncated text
- [ ] No text overflow outside cell boundaries

### **3. Resize Down (minWidth)** ✓
- [ ] Hover over Job Name column border shows resize cursor
- [ ] Drag resize handle to the left
- [ ] Column width decreases smoothly
- [ ] Resizing **stops at 120px** (cannot go smaller)
- [ ] More text gets truncated as column narrows
- [ ] Ellipsis updates dynamically

### **4. Resize Up (maxWidth)** ✓
- [ ] Drag resize handle to the right
- [ ] Column width increases smoothly
- [ ] Resizing **stops at 200px** (cannot go larger)
- [ ] Full text becomes visible as column expands
- [ ] Ellipsis disappears when text fits

### **5. Content Reveal** ✓
- [ ] Expand Job Name column to ~180px
- [ ] Full text visible: `ingest-etl-rawz_lz_macess_chrt_span_dtl`
- [ ] No ellipsis when content fits
- [ ] Shrink column back down
- [ ] Ellipsis reappears: `ingest-etl-rawz_lz_ma...`

### **6. Multiple Columns** ✓
- [ ] Each column has independent width
- [ ] Each column respects its own minWidth
- [ ] Each column respects its own maxWidth
- [ ] Resizing one column doesn't affect others
- [ ] All columns show ellipsis for overflow text

### **7. Edge Cases** ✓
- [ ] Very narrow columns (60px) work correctly
- [ ] Very wide columns (300px+) work correctly
- [ ] Mixed width columns work together
- [ ] Sorting doesn't break width constraints
- [ ] Pagination doesn't break width constraints

---

## 🐛 What to Look For (Bugs)

### **❌ BEFORE (Broken Behavior):**
- Columns expand to fit content (ignoring width prop)
- No ellipsis for long text
- Text overflows outside cells
- Can resize infinitely small or large
- Width props have no effect

### **✅ AFTER (Fixed Behavior):**
- Columns maintain fixed widths
- Ellipsis shows for truncated text
- Text stays within cell boundaries
- Resize stops at minWidth and maxWidth
- Width props work correctly

---

## 📸 Visual Verification

### **Expected Visual States:**

1. **Initial State (150px width):**
   ```
   | Job Name              | Table Name            |
   |----------------------|----------------------|
   | ingest-etl-rawz_l... | lz_macess_chrt_sp... |
   ```

2. **Minimum Width (120px):**
   ```
   | Job Name          | Table Name        |
   |------------------|------------------|
   | ingest-etl-ra... | lz_macess_chr... |
   ```

3. **Maximum Width (200px):**
   ```
   | Job Name                           | Table Name                     |
   |-----------------------------------|-------------------------------|
   | ingest-etl-rawz_lz_macess_chrt... | lz_macess_chrt_span_dtl       |
   ```

4. **Fully Expanded (content fits):**
   ```
   | Job Name                                    | Table Name              |
   |--------------------------------------------|------------------------|
   | ingest-etl-rawz_lz_macess_chrt_span_dtl    | lz_macess_chrt_span_dtl |
   ```

---

## 🔧 Troubleshooting

### **Issue: Columns still expanding to fit content**
- Check: `table-layout: fixed` is set in StyledTable
- Check: `<colgroup>` with `<col>` elements exists
- Clear browser cache and rebuild

### **Issue: No ellipsis showing**
- Check: Text elements have `overflow: hidden` and `text-overflow: ellipsis`
- Check: Parent containers have `min-width: 0`
- Inspect element to verify styles are applied

### **Issue: Can resize beyond min/max**
- Check: TableHeader resize logic uses minWidth/maxWidth props
- Check: Props are being passed correctly from Table to TableHeader
- Verify clamping logic in handleMouseMove

### **Issue: Text still overflowing**
- Check: `CellContent` has `overflow: hidden`
- Check: Text elements have `white-space: nowrap`
- Verify flex container has `min-width: 0`

---

## 📊 Test Data

Use this data for comprehensive testing:

```typescript
const testData = [
  {
    id: 1,
    jobName: 'ingest-etl-rawz_lz_macess_chrt_span_dtl',
    tableName: 'lz_macess_chrt_span_dtl',
    database: 'AWSPROD',
    status: 'Running',
    duration: '2h 15m',
  },
  {
    id: 2,
    jobName: 'etl-tf-COA_HYP-LZ_COA_ERS_BSNS_RULE_INC_LD',
    tableName: 'tf_COA_HYP-LZ_COA_ERS_BSNS_RULE_INC_LD',
    database: 'AWSPROD',
    status: 'Completed',
    duration: '1h 45m',
  },
  {
    id: 3,
    jobName: 'etl-tf_BSNS_HYP_MBR_BTEQ_ERS_SRC2LZ_ARCH_PURGE_ATOMIC_LD',
    tableName: 'tf_BSNS_HYP_MBR_BTEQ_ERS_SRC2LZ_ARCH_PURGE_ATOMIC_LD',
    database: 'AWSPROD',
    status: 'Running',
    duration: '3h 20m',
  },
];
```

---

## ✅ Success Criteria

**The fix is working correctly when:**

1. ✅ All columns start at their configured `width` prop
2. ✅ Long text shows ellipsis (`...`) when truncated
3. ✅ Resizing stops at `minWidth` (cannot go smaller)
4. ✅ Resizing stops at `maxWidth` (cannot go larger)
5. ✅ Expanding column reveals full text without ellipsis
6. ✅ Each column respects its own width constraints independently
7. ✅ No text overflow outside cell boundaries
8. ✅ Smooth resize behavior with visual feedback

---

## 📝 Report Issues

If you find any issues during testing:

1. **Document the issue:**
   - What you expected
   - What actually happened
   - Steps to reproduce
   - Screenshot if possible

2. **Check the fix documentation:**
   - `TABLE_WIDTH_FIXES.md` - Detailed fix explanation
   - `TESTING_GUIDE.md` - This file

3. **Verify your column configuration:**
   - Ensure `width`, `minWidth`, `maxWidth` are numbers or valid strings
   - Ensure `resizable: true` is set
   - Check that data has long enough text to truncate

---

**Last Updated:** July 28, 2026  
**Status:** ✅ Ready for Testing
