import { data } from '@/app/(main-page)/GreenScreenTable.mock';
import OrderForm from '@/components/OrderForm/OrderForm';
import React from 'react';

// export const dynamicParams = false

export async function generateStaticParams() {
  return data.map((record) => {
    return {
      sel: String(record.sel),
    };
  });
}

const TheOrderPage = ({ params }: { params: { sel: any } }) => {
  const tableRecord = data.find((record) => record.sel === Number(params.sel)) || {}

  return (
    <div>
      <OrderForm knownReusableData={tableRecord} />
    </div>
  );
};

export default TheOrderPage;
