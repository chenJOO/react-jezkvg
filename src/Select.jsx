import React, { useState, useEffect } from 'react';

export default function Select(props) {
  const { defaultSelect, options, onChange } = props;
  const [dropDown, setDropDown] = useState(false);

  // toggle下拉框的按钮处理方法.
  const handleTrigger = (e) => {
    e.stopPropagation();
    setDropDown(!dropDown);
  };

  // 选中下拉框的某一项的处理方法.
  const handleSelectItem = (e) => {
    e.stopPropagation();
    const value = e.target.innerText;
    setDropDown(false);
    onChange(value);
  };

  // 监听点击的非下拉框区域并让下拉面板不显示.
  useEffect(() => {
    const handleListen = () => setDropDown(false);
    document.addEventListener('mousedown', handleListen, false);

    return () => {
      document.removeEventListener('mousedown', handleListen);
    };
  }, []);

  return (
    <div>
      <div
        className={
          dropDown ? 'select-trigger select-triggering' : 'select-trigger'
        }
        onMouseDown={(e) => handleTrigger(e)}
      >
        {defaultSelect}
        <span
          className={dropDown ? 'dropdownIcon dropupIcon' : 'dropdownIcon'}
        />
      </div>
      <div
        onMouseDown={(e) => handleSelectItem(e)}
        className={
          dropDown ? 'select-base select-show' : 'select-base select-hidden'
        }
      >
        {options.map((item, index) => {
          return (
            <div
              key={`${item}-${index}`}
              className={
                item === defaultSelect
                  ? 'base-item selected-item'
                  : 'base-item unselect-item'
              }
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
