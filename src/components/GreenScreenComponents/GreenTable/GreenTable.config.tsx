import { TableRecord } from '@/types';
import { CheckOutlined, ControlOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, TableProps, Tooltip } from 'antd';
import Link from 'next/link';
import React from 'react';

export const columns: TableProps<TableRecord>['columns'] = [
  {
    title: 'SEL',
    dataIndex: 'sel',
    sorter: (a, b) => a.sel - b.sel,
  },
  {
    title: 'Order',
    dataIndex: 'order',
  },
  {
    title: 'TRAN',
    dataIndex: 'tran',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Order Status',
    dataIndex: 'orderStatus',
  },

  {
    title: 'Branch Account',
    dataIndex: 'branchAccount',
  },
  {
    title: 'IR',
    dataIndex: 'ir',
    sorter: (a, b) => a.ir - b.ir,
  },
  {
    title: 'Issue',
    dataIndex: 'issue',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    render: (text, data) => <Link href={`/customer-order-sel/${data.sel}`}> {text} </Link>,
    sorter: (a, b) => ('' + a.customerName).localeCompare(b.customerName),
  },
  {
    title: 'Exchange',
    dataIndex: 'exchange',
  },
  {
    title: 'PROD',
    dataIndex: 'prod',
  },
  {
    title: 'Fill Price',
    dataIndex: 'fillPrice',
  },
  {
    title: 'Fill Time',
    dataIndex: 'fillTime',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div className="flex flex-col items-center gap-2">
        <div>
          <Button
            size="small"
            icon={<PrinterOutlined />}
            onClick={() => alert(`Sending the following record to print \r\n ${JSON.stringify(record)}`)}
          >
            Print
          </Button>
        </div>
        <div>
          <Tooltip title="VTCK">
            <Button
              type="dashed"
              shape="circle"
              icon={<ControlOutlined />}
              onClick={() => alert(`Fire action on VTCK`)}
            />
          </Tooltip>
          <Tooltip title="Get Confirm">
            <Button
              type="dashed"
              shape="circle"
              icon={<CheckOutlined />}
              onClick={() => alert(`Fire action on Checked`)}
            />
          </Tooltip>
        </div>
      </div>
    ),
  },
];

//
//<QuestionCircleOutlined />
//<CheckOutlined />
//<EditOutlined />
