import React, { useState } from 'react';
import './style.css';
import Select from './Select.jsx';

export default function App() {
  const [defaultSelect, setDefaultSelect] = useState('西安');
  const options = ['杭州', '西安', '成都'];

  // 设置选框的值.
  const handleOnChange = (newValue) => setDefaultSelect(newValue);

  return (
    <div>
      <Select
        defaultSelect={defaultSelect}
        options={options}
        onChange={handleOnChange}
      />
    </div>
  );
}
