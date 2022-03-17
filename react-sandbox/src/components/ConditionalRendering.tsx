import { useState } from 'react';

function ConditionalRendering() {

  const [shown, setShown] = useState(false);
  const show = () => setShown(!shown);

  return (
    <>
      {shown ? <div>Hello</div> : <h1>asdf</h1>}
      <br />
      <label htmlFor="show">
        <input id="show" type="checkbox" onChange={show} />
        Show me
      </label>
    </>
  );
}

export default ConditionalRendering;
