'use client';
import { columns } from '@/app/(main-page)/GreenScreenTable/GreenScreenTable.config';
import { data } from "@/app/(main-page)/GreenScreenTable/GreenScreenTable.mock";
import React from 'react';
import { DatePicker, Table } from 'antd';
import dayjs from 'dayjs';



const GreenScreenTable = () => {
  return (
    <div>
      <div>
        <div className="my-5">
          <span className="text-lg text-gray-900 colo mr-2">Orders from</span>
          <DatePicker showTime format="MM/DD/YYYY" defaultValue={dayjs('2024/01/29')} />
          <span className="text-lg text-gray-900 colo ml-2 mr-2">to</span>
          <DatePicker format="MM/DD/YYYY" defaultValue={dayjs('2024/01/29')} />
        </div>

      </div>
      <Table size="small" columns={columns} dataSource={data} />
    </div>
  );
};

export default GreenScreenTable;