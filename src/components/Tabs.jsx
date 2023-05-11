import { useState } from 'react';
import TABS from '../lists/Tabs';

const Tabs = ({ activeTab, setActiveTab }) => {
  const [tempIdx, setTempIdx] = useState(0);

  const renderTabsList = TABS.map(({ id, name, title }, idx) => {
    return (
      <li
        key={id}
        onClick={() => {
          setTempIdx(idx);
          setActiveTab(name);
        }}
        className={`${
          activeTab === name ? 'bg-indigo-500 hover:bg-indigo-700 duration-300 text-white' : null
        } p-2 rounded-md cursor-pointer`}
      >
        {title}
      </li>
    );
  });
  return (
    <>
      <ul className='flex gap-3 justify-center'>{renderTabsList}</ul>
      {TABS[tempIdx].component}
    </>
  );
};

export default Tabs;
