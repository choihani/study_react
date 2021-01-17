import React from 'react'; //리액트 컴포넌트를 만들기위해 리액트 불러오기

//리액트에서는 클래스나 함수형태로 컴포넌트를 만들수 있음
function Hello() {
    return <div>안녕하세요</div> //JSX. 리액트컴포넌트 파일에서 XML형태로 코드를 작성하면 babel이 JSX를 Javascript로 변환 해준다.
}
  
export default Hello;//Hello라는 컴포넌트를 내보내겠다는 의미. 다른 컴포넌트에서 불러와서 사용 가능