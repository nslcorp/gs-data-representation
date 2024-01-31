import { TableRecord } from "@/types";
import { TableProps } from "antd";
import Link from "next/link";
import React from "react";

export const columns: TableProps<TableRecord>['columns'] = [
  {
    title: 'SEL',
    dataIndex: 'sel',
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
  },
  {
    title: 'Issue',
    dataIndex: 'issue',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    render: (text, data) => <Link href={`/customer-order-sel/${data.sel}`}> {text} </Link>,
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
];