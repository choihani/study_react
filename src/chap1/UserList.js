import React from 'react';

// function UserList() {
//     const users = [
//         {
//             id: 1,
//             username: 'velopert',
//             email: 'public.velopert@gmail.com'
//         },
//         {
//             id: 2,
//             username: 'tester',
//             email: 'tester@example.com'
//         },
//         {
//             id: 3,
//             username: 'liz',
//             email: 'liz@example.com'
//         }
//     ];

//     return (
//         <div>
//             <div>
//                 <b>{users[0].username}</b> <span>({users[0].email})</span>
//             </div>
//             <div>
//                 <b>{users[1].username}</b> <span>({users[1].email})</span>
//             </div>
//             <div>
//                 <b>{users[2].username}</b> <span>({users[1].email})</span>
//             </div>
//         </div>
//     );
// }

function User({ user }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
}
function UserList() {
    const users = [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ];
  
    return (
    //   <div>
    //     <User user={users[0]} />
    //     <User user={users[1]} />
    //     <User user={users[2]} />
    //   </div>
        /*
        <div>
            {users.map(user => (
            <User user={user} />
            ))}
        </div>
        */
       <div>
            {users.map(user => (
                <User user={user} key={user.id} />
                /* 리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야합니다. 
                key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야합니다.
                 지금의 경우엔 id 가 고유 값이지요. */
            ))}
        </div>
        /*  
        <div>
            {users.map((user, index) => (
                <User user={user} key={index} />
                
            ))}
        </div>
        */
       /* 
       만약에 배열을 렌더링 할 때 key 설정을 하지 않게된다면 기본적으로 배열의 index 값을 key 로 사용하게 되고, 아까 봤었던 경고메시지가 뜨게 됩니다.
        이렇게 경고 메시지가 뜨는 이유는, 각 고유 원소에 key 가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링 될 수 있기 때문입니다.
       */
    );
}

export default UserList;