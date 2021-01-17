import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (

    //1.
    // <div>
    //   <Hello />
    // </div>

    //2.
    /* Fragment : Fragment는 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않습니다.*/
    <>{/* 주석 */}
      <Hello //주석 
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>

  );
}

export default App;
