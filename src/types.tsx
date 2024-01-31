import { TableProps } from 'antd';
import Link from 'next/link';

export interface TableRecord {
  sel: number;
  order: number;
  tran: string;
  qty?: string;
  symbol?: string;
  price: number;
  orderStatus?: "Open" | 'Close' | 'In-Progress'| 'Filled';

  branchAccount: string;
  ir: number;
  issue?: string;
  activeTime?: string;

  customerName: string;
  exchange?: string;
  prod?: string;
  fillPrice?: string;
  fillTime?: string;
}

export interface OrderFormFields {
  name: string;
  label: string;
  placeholder?: string;
  tooltip?: string;
  type?: 'textArea' | 'boolean';
  required?: boolean;
  readonly?: boolean;
}
