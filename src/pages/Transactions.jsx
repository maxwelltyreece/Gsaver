import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { transactions, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';


const Transactions = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const [text, setText] = useState("");

const onGridChange = (newText) => {
  setText('Payment to Uniqlo £40, Payment to H&M £30, Payment to Tesco £55, Payment to Odeon £28');
};

const speak = () => {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
};
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent onClick={onGridChange}
        id="gridcomp"
        dataSource={transactions}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
      <button onClick={speak} >Speak</button>
    </div>
  );
};
export default Transactions;