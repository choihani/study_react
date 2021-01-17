import React, {useState} from 'react';

function Counter() {
    //useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다.
    //이 함수를 호출해주면 배열이 반환되는데요, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수입니다.
    const [number, setNumber] = useState(0);
    

    const onIncrease = () =>{
        // console.log('+1')
        // setNumber(number + 1); //파라미터로 넣어주는 방식
        setNumber(prevNumber => prevNumber + 1);//값을 업데이트 하는 함수를 파라미터로 넣어주는 방식
        //setState란 함수에 파라미터로 함수를 넘겨주면 이전 값을 넣어주는 걸로 개발이 된거에요. 이건 콜백함수 개념 알고 계셔야 이해가 쉬워요.
    }
    const onDecrease = () =>{
        // console.log('-1')
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;