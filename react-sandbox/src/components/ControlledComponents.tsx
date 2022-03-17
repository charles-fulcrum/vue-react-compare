import { ChangeEvent, useState } from 'react';

function ControlledComponents() {
  const [text, setText] = useState('');
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" value={text} onChange={handleInput} />
      <h4>{text}</h4>
    </>
  );
}

export default ControlledComponents;
