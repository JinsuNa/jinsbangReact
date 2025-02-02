import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './bangLogo.png';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Article from '../Article';

function Header() {
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

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/'>Home</Nav.Link>

                {/* 아파트 시작 */}
                <NavDropdown title='아파트' id='basic-nav-dropdown'>
                  <NavDropdown.Item as={NavLink} to={'매매·전월세'}>
                    <p>매매·전월세</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={'찜한목록'}>
                    <p>찜한목록</p>
                  </NavDropdown.Item>
                </NavDropdown>
                {/* 아파트 끝 */}

                {/* 원룸/빌라 시작 */}
                <NavDropdown title='원룸/빌라' id='basic-nav-dropdown'>
                  <NavDropdown.Item as={NavLink} to={'원룸·전월세'}>
                    <p>원룸·전월세</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={'빌라·전월세'}>
                    <p>빌라·전월세</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={'찜한목록'}>
                    <p>찜한목록</p>
                  </NavDropdown.Item>
                </NavDropdown>
                {/* 원룸/빌라 끝 */}

                {/* 오피스텔 시작 */}

                <NavDropdown title='오피스텔' id='basic-nav-dropdown'>
                  <NavDropdown.Item as={NavLink} to={'오피스텔·전월세'}>
                    <p>오피스텔·전월세</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={'찜한목록'}>
                    <p>찜한목록</p>
                  </NavDropdown.Item>
                </NavDropdown>

                {/* 오피스텔 끝 */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <article>
        <Article />
      </article>
    </div>
  );
}

export default Header;
