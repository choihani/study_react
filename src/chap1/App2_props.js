import React from 'react';
import Hello2 from './Hello2_props';
import Wrapper from '../Wrapper';

function App2() {
  return (
    <Wrapper>
      {/* <Hello2 name="react" color="red" isSpecial={true}/> */}
      <Hello2 name="react" color="red" isSpecial />
      {/* 컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 true 로 설정한 것으로 간주합니다. */}
      <Hello2 color="pink"/>
    </Wrapper>
  );
}

export default App2;