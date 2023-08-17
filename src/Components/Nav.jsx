import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  const [show, setShow] = useState("false");
  const [searchValue, setsearchValue] = useState("");
  const { pathname } = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow("true");
    } else {
      setShow("false");
    }
  };
  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigation(`/search?q=${e.target.value}`);
  };

  return (
    //자꾸오류가 스타일컴포넌트 노란 오류 발생 $ 사용으로 대처
    <NavWrapper $show={show}>
      <Logo>
        <img
          src="/images/logo.svg"
          alt="Disney Plus Logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Logo>
      {pathname === "/" ? (
        <Login>Login</Login>
      ) : (
        <Input
          className="nav__input"
          type="text"
          placeholder="검색해주세요"
          value={searchValue}
          onChange={handleChange}
        />
      )}
    </NavWrapper>
  );
};

export default Nav;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: 0ms.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  outline: none;
  border: none;
`;
const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) => (props.show ? "#090b13" : "transpaent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
