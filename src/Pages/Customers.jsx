import React from 'react'
import {
  GridComponent, ColumnsDirective, ColumnDirective, Sort,
  Filter, Page, Edit, Inject, Toolbar, Selection
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../assets/dummy';
import { Header } from '../Components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 
    bg-white rounded-3xl">

      <Header title='Customers' category='Page' />
      <GridComponent
        id='gridcomp'
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true
        }}
        selectionSettings={true}
        width='auto'
      >
        <ColumnsDirective>
          {
            customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))
          }
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers