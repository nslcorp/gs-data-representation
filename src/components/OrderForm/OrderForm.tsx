'use client';
import { TableRecord } from '@/app/(main-page)/GreenScreenTable/GreenScreenTable.config';
import { Button, Form, Input, Tag } from 'antd';
import React, { useState } from 'react';

type RequiredMark = boolean | 'optional' | 'customize';

const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);

export interface OrderFormFields {
  name: string;
  label: string;
  placeholder?: string;
  tooltip?: string;
  type?: 'textArea' | 'boolean';
  required?: boolean;
  readonly?: boolean;
}
const formFields: OrderFormFields[] = [
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
  { label: 'Order Record Time', name: 'orderRecordTime', required: true },
];

const sharedForAllFormsInitData = {
  entered: '01/29/24 09:09',
  isPrint: 'N',
  customerPhone: '972-123-4567',
  rr: '460004',
  sockTransitionIssue: 'VNG FTSE ALL WLD',
  sellQty: '6',
  timeInForceDay: '',
  traderMessageOnly: '00000000-MDCS-4-000000000-1',
};

interface OrderFormProps {
  knownReusableData: TableRecord | {};
}

const OrderForm = (props: OrderFormProps) => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const formItemLayout = {
    labelCol: { span: 10 },
    // wrapperCol: { span: 20 },
  };

  const data = {
    ...props.knownReusableData,
    ...sharedForAllFormsInitData,
  };
  console.log('Here!!!');
  console.log(data);

  return (
    <Form
      {...formItemLayout}
      form={form}
      layout="horizontal"
      // labelCol={{span: 20, offset: 100}}
      initialValues={data}
    >
      {formFields.map((record) => {
        let formInputElement = <Input placeholder={record.placeholder} disabled={record.readonly} />;
        if (record.type === 'textArea') {
          formInputElement = <Input.TextArea showCount maxLength={100} readOnly={record.readonly} />;
        }
        return (
          <Form.Item
            key={record.name}
            label={record.label}
            name={record.name}
            tooltip={record.tooltip}
            {...(record.required && { ...{ required: true } })}
          >
            {formInputElement}
          </Form.Item>
        );
      })}

      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
