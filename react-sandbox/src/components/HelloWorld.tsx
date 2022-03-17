import Arrays from './Arrays';
import ConditionalRendering from './ConditionalRendering';
import ControlledComponents from './ControlledComponents';
import States from './States';

function HelloWorld({ msg }: { msg: string }) {
  return (
    <header className="App-header">
      <h1>{msg}</h1>
      <States />
      <br />
      <ControlledComponents />
      <ConditionalRendering />
      <br />
      <br />
      <Arrays />
    </header>
  );
}

export default HelloWorld;
