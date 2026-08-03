/**
 * TABLE WIDTH FIXES - TEST EXAMPLE
 * 
 * This file demonstrates how to test the column width, minWidth, maxWidth fixes.
 * Copy this code into your application to verify the fixes work correctly.
 */

import React from 'react';
import { Table } from './Table';

// Test data with long text content to verify ellipsis
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
    jobName: 'etl-tf_HYP_MBR_BTEQ_ERS_TRIGGER_PURGE',
    tableName: 'tf_HYP_MBR_BTEQ_ERS_TRIGGER_PURGE',
    database: 'AWSDEV',
    status: 'Failed',
    duration: '30m',
  },
  {
    id: 4,
    jobName: 'etl-tf_BSNS_HYP_MBR_BTEQ_ERS_SRC2LZ_ARCH_PURGE_ATOMIC_LD',
    tableName: 'tf_BSNS_HYP_MBR_BTEQ_ERS_SRC2LZ_ARCH_PURGE_ATOMIC_LD',
    database: 'AWSPROD',
    status: 'Running',
    duration: '3h 20m',
  },
  {
    id: 5,
    jobName: 'ingest-etl-COA_HYPERION_PS_WPGL_HYPOTLH_VW',
    tableName: 'COA_HYPERION_PS_WPGL_HYPOTLH_VW',
    database: 'AWSDEV',
    status: 'Completed',
    duration: '45m',
  },
];

// Column configuration with width constraints
const columns = [
  {
    id: 'jobName',
    label: 'Job Name',
    accessor: (row: any) => row.jobName,
    sortable: true,
    resizable: true,
    width: 150,      // Initial width
    minWidth: 120,   // Cannot resize below this
    maxWidth: 200,   // Cannot resize above this
  },
  {
    id: 'tableName',
    label: 'Table Name',
    accessor: (row: any) => row.tableName,
    sortable: true,
    resizable: true,
    width: 150,
    minWidth: 120,
    maxWidth: 200,
  },
  {
    id: 'database',
    label: 'Database',
    accessor: (row: any) => row.database,
    sortable: true,
    resizable: true,
    width: 100,
    minWidth: 80,
    maxWidth: 150,
  },
  {
    id: 'status',
    label: 'Status',
    accessor: (row: any) => row.status,
    sortable: true,
    resizable: true,
    width: 120,
    minWidth: 100,
    maxWidth: 180,
  },
  {
    id: 'duration',
    label: 'Duration',
    accessor: (row: any) => row.duration,
    sortable: true,
    resizable: true,
    width: 100,
    minWidth: 80,
    maxWidth: 120,
  },
];

export const TableWidthTestExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Table Width Fixes - Test Example</h1>
      
      <div style={{ marginBottom: '20px', padding: '16px', background: '#f0f9ff', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>✅ Testing Checklist</h2>
        <ol>
          <li><strong>Initial Width:</strong> Verify columns start at their <code>width</code> prop (150px for Job Name & Table Name)</li>
          <li><strong>Text Truncation:</strong> Long text should show ellipsis (...) when truncated</li>
          <li><strong>Resize Down:</strong> Try resizing Job Name column smaller - should stop at 120px (minWidth)</li>
          <li><strong>Resize Up:</strong> Try resizing Job Name column larger - should stop at 200px (maxWidth)</li>
          <li><strong>Reveal Content:</strong> Expand column to see full text without ellipsis</li>
          <li><strong>Multiple Columns:</strong> Each column respects its own width constraints</li>
        </ol>
      </div>

      <div style={{ marginBottom: '20px', padding: '16px', background: '#fef3c7', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>📋 Expected Behavior</h3>
        <ul>
          <li><strong>Job Name column:</strong> 150px initial, 120px min, 200px max</li>
          <li><strong>Table Name column:</strong> 150px initial, 120px min, 200px max</li>
          <li><strong>Database column:</strong> 100px initial, 80px min, 150px max</li>
          <li><strong>Status column:</strong> 120px initial, 100px min, 180px max</li>
          <li><strong>Duration column:</strong> 100px initial, 80px min, 120px max</li>
        </ul>
      </div>

      <Table
        data={testData}
        columns={columns}
        showToolbar
        title="Jobs Table - Width Test"
        rowKey="id"
        itemsPerPage={10}
      />

      <div style={{ marginTop: '20px', padding: '16px', background: '#f0fdf4', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>🔍 What to Look For</h3>
        <ul>
          <li>✅ Long job names show ellipsis: <code>ingest-etl-rawz_lz_ma...</code></li>
          <li>✅ Columns maintain fixed widths (not expanding to fit content)</li>
          <li>✅ Resize handle appears on hover over column border</li>
          <li>✅ Dragging resize handle changes column width smoothly</li>
          <li>✅ Cannot resize below minWidth (resistance at boundary)</li>
          <li>✅ Cannot resize above maxWidth (resistance at boundary)</li>
          <li>✅ Expanding column reveals full text without ellipsis</li>
        </ul>
      </div>
    </div>
  );
};

export default TableWidthTestExample;
