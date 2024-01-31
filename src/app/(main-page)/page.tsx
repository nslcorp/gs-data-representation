'use client';
import GreenForm from '@/components/GreenScreenComponents/GreenForm/GreenForm';
import GreenTable from '@/components/GreenScreenComponents/GreenTable/GreenTable';
import { TableRecord } from '@/types';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({} as TableRecord);

  const showModal = (data: any) => {
    setFormData(data);
    setIsModalOpen(true);
  };

  return (
    <>
      <GreenTable onShowModalEdit={showModal} />

      <Modal
        title={`Detailed Order: ${formData?.order} | Customer: ${formData.customerName}`}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <GreenForm knownReusableData={formData} formStyles={{ height: 450 }} hideFormControls />
      </Modal>
    </>
  );
};

export default App;
