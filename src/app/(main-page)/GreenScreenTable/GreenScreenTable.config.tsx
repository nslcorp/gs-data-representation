import { Space, TableProps, Tag } from 'antd';
import Link from "next/link";
import React from 'react';

export interface TableRecord {
  sel: number;
  order: number;
  tran: string;
  qty?: string;
  symbol?: string;
  price?: number;
  orderStatus?: string;

  branchAccount: string;
  ir?: string;
  issue?: string;
  activeTime?: string;

  customerName: string;
  exchange?: string;
  prod?: string;
  fillPrice?: string;
  fillTime?: string;
}

export const columns: TableProps<TableRecord>['columns'] = [
  {
    title: 'SEL',
    dataIndex: 'sel',
  },
  {
    title: 'ORDER',
    dataIndex: 'order',
  },
  {
    title: 'TRAN',
    dataIndex: 'tran',
  },
  {
    title: 'QTY',
    dataIndex: 'qty',
  },
  {
    title: 'SYMBOL',
    dataIndex: 'symbol',
  },
  {
    title: 'PRICE',
    dataIndex: 'price',
  },
  {
    title: 'ORDER STATUS',
    dataIndex: 'orderStatus',
  },

  {
    title: 'BRANCH ACCOUNT',
    dataIndex: 'branchAccount',
  },
  {
    title: 'IR',
    dataIndex: 'ir',
  },
  {
    title: 'ISSUE',
    dataIndex: 'issue',
  },
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'customerName',
    render: (text, data) => <Link href={`/theorder/${data.sel}`}>{text}</Link>,
  },
  {
    title: 'EXCHANGE',
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
];
