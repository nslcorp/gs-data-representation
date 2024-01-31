import { TableRecord } from "@/types";

export const tableMock: TableRecord[] = [
  {
    sel: 1,
    order: 470000016,
    tran: 'BUY',
    qty: '.0000',
    symbol: 'PRTMX',
    price: 86.57,
    orderStatus: 'Unexpected, Open',

    branchAccount: '111-1234-1-1',
    ir: '310002',
    issue: 'TRP SUMMIT MUNICIPAL INTERM I',
    activeTime: '01/27 03:00',

    customerName: 'John Doe',
    exchange: 'TRW',
    prod: 'MFD',
  },
  {
    sel: 2,
    order: 470000096,
    tran: 'BUY',
    qty: '.0000',
    symbol: 'VEU',
    price: 2902.88,
    orderStatus: 'Filled',

    branchAccount: '111-1234-1-1',
    ir: '310002',
    issue: 'TRP SUMMIT MUNICIPAL INTERM I',
    activeTime: '01/27 03:00',

    customerName: 'Elbert Himmelbaum',
    exchange: 'TRW',
    prod: 'MFD',
  },
  {
    sel: 3,
    order: 470000012,
    tran: 'BUY',
    qty: '.0000',
    symbol: 'PRTMX',
    price: 402.67,
    orderStatus: 'Open',

    branchAccount: '111-1234-1-1',
    ir: '490007',
    issue: 'TRP SUMMIT MUNICIPAL INTERM I',
    activeTime: '01/27 02:58',

    customerName: 'Domenico Goldberg',
    exchange: 'TRW',
    prod: 'MFD',
  },
];