import { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const COMPONENTS_COUNT = 10000;

function StyledComponent() {
  const divs = [...Array(COMPONENTS_COUNT)].map((_, i) => <StyledDiv key={i}>{i + 1}</StyledDiv>);
  return <>{divs}</>;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
function PureJsxComponent() {
  const divs = [...Array(COMPONENTS_COUNT)].map((_, i) => <div key={i}>{i + 1}</div>);
  return <>{divs}</>;
}
/* eslint-enable */

function App() {
  const [render, setRender] = useState(false);
  const onClick = () => {
    setRender(true);
  };

  return (
    <>
      <button onClick={onClick}>render start</button>
      {render && <StyledComponent />}
    </>
  );
}

export default App;
