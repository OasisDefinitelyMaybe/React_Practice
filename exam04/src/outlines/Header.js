import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>헤더 영역</h1>
      <button
        type="button"
        onClick={() => navigate('/login', { replace: true })}
      >
        로그인
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        BACK
      </button>
      <button type="button" onClick={() => navigate(1)}>
        FORWARD
      </button>
    </>
  );
};

export default React.memo(Header);
