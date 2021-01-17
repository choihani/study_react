import React from 'react';

// function Hello(props) {
//   return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
//   //컴포넌트에게 전달되는 props 는 파라미터를 통하여 조회 할 수 있습니다. props 는 객체 형태로 전달되며, 만약 name 값을 조회하고 싶다면 props.name 을 조회하면 됩니다.
// }
function Hello2({ color, name, isSpecial }) {
    return( 
        <div style={{ color }}>
            {/* {isSpecial? <b>*</b>: null} */}
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
    //style=안에 중괄호가 두번들어가는것은 가장위 {}는 jsx문법, 그리고 그 안에 {}는 객체리터럴 입니다.
}

//defaultProps
Hello2.defaultProps = {
    name: '이름없음'
}

export default Hello2;