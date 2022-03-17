import { useState } from 'react';

function Arrays() {
  const [array, setArray] = useState<{ name: string }[]>([]);
  const arrayAdd = () => setArray([...array, { name: 'new' }]);

  const arrayDelete = () => {
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
  };

  const arrayChangeFirst = () => {
    const newArray = [...array];
    newArray[0].name = 'newer';
    setArray(newArray);
  };

  return (
    <>
      <span>
        <button onClick={arrayAdd}>Add</button>
        <button onClick={arrayDelete}>Delete</button>
        <button onClick={arrayChangeFirst}>Change First</button>
      </span>
      <pre>{JSON.stringify(array, null, 2)}</pre>
    </>
  );
}

export default Arrays;
