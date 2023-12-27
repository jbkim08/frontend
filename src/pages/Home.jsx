import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //시작시 유저들 가져오기
    getUsers();
  }, []);

  const getUsers = async () => {
    const result = await axios.get(`${process.env.USER_API}/users`);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    if (confirm('정말로 삭제하겠습니까?')) {
      await axios.delete(`${process.env.USER_API}/users/${id}`);
      getUsers(); //삭제후 새로 유저데이터를 받아옴
    }
  };

  return (
    <div className="container">
      <table className="table border shadow my-4 text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">유저네임</th>
            <th scope="col">이메일</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/viewuser/${user.id}`} className="btn btn-outline-secondary mx-2">
                  보기
                </Link>
                <Link to={`/edituser/${user.id}`} className="btn btn-outline-warning mx-2">
                  수정
                </Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-outline-danger mx-2">
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
