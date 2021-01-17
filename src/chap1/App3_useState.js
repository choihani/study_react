import React from 'react';
import Counter from './Counter';
import InputSample from './InputSample';

//Hooks중 하나인 useState
//컴포넌트에서 동적인 값을 상태(state)라고 부릅니다.

function App3() {
  return (
    <>
      <Counter />
      <hr/>
      <InputSample />
    </>
  );
}

export default App3;