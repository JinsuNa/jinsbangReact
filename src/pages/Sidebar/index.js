import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';
import SideHeader from './SideHeader';
import oneRoom from './img/oneroom.png';
import apart from './img/apart.png';
import op from './img/op.png';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SideHeader />
      <nav>
        <Nav className='flex-column sideImg'>
          <Nav.Link href='매매·전월세' className='sidebar-item'>
            <img src={apart} alt='' />
          </Nav.Link>
          <Nav.Link href='원룸·전월세' className='sidebar-item'>
            <img src={oneRoom} alt='' />
          </Nav.Link>
          <Nav.Link href='오피스텔·전월세' className='sidebar-item'>
            <img src={op} alt='' />
          </Nav.Link>
        </Nav>
      </nav>
    </div>
  );
}

export default Sidebar;
