import { tableMock } from '@/components/GreenScreenComponents/mocks/tableMock';
import GreenForm from '@/components/GreenScreenComponents/GreenForm/GreenForm';
import React from 'react';

// export const dynamicParams = false

export async function generateStaticParams() {
  return tableMock.map((record) => {
    return {
      sel: String(record.sel),
    };
  });
}

const TheOrderPage = ({ params }: { params: { sel: any } }) => {
  const tableRecord = tableMock.find((record) => record.sel === Number(params.sel)) || {}

  return (
    <div className="w-full">
      <GreenForm knownReusableData={tableRecord} />
    </div>
  );
};

export default TheOrderPage;
