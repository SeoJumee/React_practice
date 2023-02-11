import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  const nextId = useRef(4); //useRef()의 파라미터 = .current의 기본값 (조회, 수정시에 .current 사용)
  const onCreate = () => {
    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;
