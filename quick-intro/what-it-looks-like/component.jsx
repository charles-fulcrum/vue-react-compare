import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .some-styling {
    font-size: large;
    font-weight: 400;
    color: #4caf50;
  }
`;

export const Component = () =>
{
  const [count, setCount] = useState(0);
  const add = () => setCount(count);
  return (
    <Wrapper>
      <div className="some-styling">Count: {count}</div>
      <button onClick={add}>Add</button>
    </Wrapper>
  );
};
