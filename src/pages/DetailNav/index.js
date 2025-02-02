import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function DetailNav() {
  return (
    <div className='nav-buttons'>
      <a href='#' style={{ margin: '0 10px', textDecoration: 'none' }}>
        지도
      </a>
      <a href='#' style={{ margin: '0 10px', textDecoration: 'none' }}>
        분양
      </a>
      <a href='#' style={{ margin: '0 10px', textDecoration: 'none' }}>
        관심목록
      </a>
      <a href='#' style={{ margin: '0 10px', textDecoration: 'none' }}>
        방내놓기
      </a>
      <div className='auth-buttons'>
        <a href='/login' className='auth-button'>
          로그인
        </a>
        <a href='/signup' className='auth-button'>
          회원가입
        </a>
      </div>
    </div>
  );
}
export default DetailNav;
