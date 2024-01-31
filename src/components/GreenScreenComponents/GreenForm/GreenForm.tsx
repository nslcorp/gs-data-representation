'use client';
import React from 'react';
import { Button, Form, Input } from 'antd';
import { formFields } from '@/components/GreenScreenComponents/GreenForm/GreenForm.config';
import { sharedForAllFormsInitData } from '@/components/GreenScreenComponents/mocks/formMocks';
import { TableRecord } from '@/types';

interface OrderFormProps {
  knownReusableData: TableRecord | {};
}

const GreenForm = (props: OrderFormProps) => {
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: { span: 10 },
    // wrapperCol: { span: 20 },
  };

  const data = {
    ...props.knownReusableData,
    ...sharedForAllFormsInitData,
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      initialValues={data}
      requiredMark="optional"
      style={{ maxWidth: 800 }}
      labelCol={{ span: 10 }}
    >
      {formFields.map((record) => {
        let formInputElement = <Input placeholder={record.placeholder} disabled={record.readonly} />;
        if (record.type === 'textArea') {
          formInputElement = <Input.TextArea showCount maxLength={100} readOnly={record.readonly} />;
        }

        const isRequired = record.readonly || record.required
        return (
          <Form.Item
            key={record.name}
            label={record.label}
            name={record.name}
            tooltip={record.tooltip}
            {...(isRequired && { ...{ required: true } })}
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

export default GreenForm;
