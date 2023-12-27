import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });
  const { name, username, email } = user; //유저객의 속성을 구조할당분해
  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name == '' || username == '' || email == '') {
      alert('입력창에 내용을 입력해주세요');
      return;
    }
    await axios.post(`${process.env.USER_API}/users`, user);
    navigate('/'); //홈으로
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">가입 하기</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input
                onChange={onInputChange}
                value={name}
                type="text"
                id="name"
                className="form-control"
                placeholder="이름 입력"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                유저네임
              </label>
              <input
                onChange={onInputChange}
                value={username}
                type="text"
                id="username"
                className="form-control"
                placeholder="유저네임 입력"
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input
                onChange={onInputChange}
                value={email}
                type="email"
                id="email"
                className="form-control"
                placeholder="이메일 입력"
                name="email"
              />
            </div>
            {/* 가입 취소 버튼 */}
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-outline-primary px-3 mx-2">
                가입
              </button>
              <Link to="/" className="btn btn-outline-danger px-3 mx-2">
                취소
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
