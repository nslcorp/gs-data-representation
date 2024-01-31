import { OrderFormFields } from '@/types';

export const formFields: OrderFormFields[] = [
  { label: 'Order', name: 'order', required: true, readonly: true },
  { label: 'Entered', name: 'entered', required: true },
  { label: 'Print', name: 'isPrint', required: true },
  { label: 'Status', name: 'orderStatus', required: true },
  { label: 'Account', name: 'branchAccount', required: true, tooltip: 'Account format is xxx-xxxxx-x-x' },
  { label: 'Customer Name', name: 'customerName', required: true },
  { label: 'Customer Phone', name: 'customerPhone', tooltip: 'In international format', required: true },
  { label: 'RR', name: 'rr', required: true, tooltip: 'Meaningfully description of RR param' },
  { label: 'Sock Transition Issue', name: 'sockTransitionIssue', required: true },
  { label: 'Sell Qty', name: 'sellQty', required: true },
  { label: 'Symbol', name: 'symbol', required: true },
  { label: 'Price', name: 'price', required: true },
  { label: 'Time in Force Day', name: 'timeInForceDay' },
  { label: 'Trader Message Only', name: 'traderMessageOnly', required: true, type: 'textArea' },
  { label: 'Fill', name: 'fill', required: true },
  { label: 'Order Record Time', name: 'orderRecordTime', readonly: true },
];
