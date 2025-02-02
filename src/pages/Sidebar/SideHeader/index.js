import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './img/bangLogo.png';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function SideHeader() {
  return (
    <div>
      <header>
        <Navbar expand='lg' className='bg-body-tertiary'>
          <Container>
            {/* 로고 작업 시작 */}
            <Navbar.Brand href='/'>
              <img src={logo} alt='' className='logoImg' />
            </Navbar.Brand>
            {/* 로고 작업 끝 */}
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default SideHeader;
