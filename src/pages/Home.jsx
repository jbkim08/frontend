import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //시작시 유저들 가져오기
    getUsers();
  }, []);

  const getUsers = async () => {
    const result = await axios.get('http://localhost:8080/users');
    setUsers(result.data);
  };
  return (
    <div className="container">
      <table className="table border shadow my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">유저네임</th>
            <th scope="col">이메일</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
