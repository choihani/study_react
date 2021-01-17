import React,{useState} from 'react';

function InputSample() {
  // const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  // useState 를 사용합니다. 이번에는 input 의 onChange 라는 이벤트를 사용하는데요,
  // 이벤트에 등록하는 함수에서는 이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있는데
  // 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게됩니다. 이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있습니다.
  const onChange = (e) => {
    // setText(e.target.value);

    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    // setText('');

    setInputs({
      name: '',
      nickname: '',
    })
  };
  /*
  ********************
  리액트 객체를 수정해야할 때에는
  inputs[name] = value;
  이런식으로 수정하면 안됨 => 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용해주어야 합니다.
  setInputs({
    ...inputs,
    [name]:value
  });
  ***** ...문법 -> spread문법 : 객체의 내용을 모두 "펼쳐서" 기존 객체를 복사해줌
  이러한 작업을, "불변성을 지킨다" 라고 부릅니다.
  불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 이에 따라 필요한 리렌더링이 진행됩니다.
  만약에 inputs[name] = value 이런식으로 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않습니다.

  */


  return (
    // <div>
    //   <input onChange={onChange} value={text}  />
    //   <button onClick={onReset}>초기화</button>
    //   <div>
    //     <b>값: {text}</b>
    //   </div>
    // </div>
    /*
    <div>
      <input placeholder="이름" />
      <input placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        이름 (닉네임)
      </div>
    </div>
    */
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;