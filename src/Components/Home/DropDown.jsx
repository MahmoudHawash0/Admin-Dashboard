import React from 'react'
import { dropdownData } from '../../assets/dummy';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{
        border: 'none',
        color: (currentMode === 'Dark') && 'white'
      }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px" />
  </div>
);

export default DropDown