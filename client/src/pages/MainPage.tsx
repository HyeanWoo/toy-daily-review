import React from 'react';
import { Link } from 'react-router-dom';
import SignInPage from './SignInPage';

const MainPage = () => {

  return (
    <div>
      <h3>이곳은 아무것도 없는 메인 페이지,,</h3>
      <h5>아래 버튼을 눌러 다른 페이지로 이동하세욤,,</h5>
      <Link to={'/signin'}>
        <button>회원가입</button>
      </Link>
      <Link to={'/signup'}>
        <button>로그인</button>
      </Link>
    </div>
  )
};

export default MainPage;
