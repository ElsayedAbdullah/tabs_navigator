const SelectMenu = ({ label, options, onChange }) => {
  return (
    <div className='flex items-center justify-center gap-4 mt-4'>
      <label
        htmlFor='select'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <select
        id='select'
        className='w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
