import './Header.css';
// import {useRef, useEffect} from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import {Container, Row} from 'reactstrap';
import logo from '../../assets/images/sotebcomputer.png';
import  {useRef} from 'react';
import { useSelector } from 'react-redux';
const nav_links = [
         {
            path: 'home',
            display: 'HOME'
         },
         {
            path: 'shop',
            display: 'BOUTIQUE'
         },
         {
            path: 'services',
            display: 'SERVICES'
         }
]

const Header = () => {

   const menuRef = useRef(null)
   const totalQuantity = useSelector(state => state.cart.totalQuantity)
   const navigate = useNavigate();
   
   const navigateToCart = () => {
      navigate('/cart')
   }


   //const menuToggle =  () => menuRef.current.classList.toggle('mobile-menu')
  return <header className='header'>
    <Container>
        <Row>
              <div className='nav-wrapper'>
                <div className='logo'>
                          <img src={logo} alt='' />
                </div>

                <div className='navigation' ref={menuRef}>
                     <ul className='menu'>
                         {
                            nav_links.map((item, index )=>(
                                <li className='nav-item' key={index}>
                                    <NavLink to={item.path} className={(navClass)=> navClass.isActive ? '.nav-active' : ''}>{item.display}</NavLink>
                                </li>
                            ))
                         }
                     </ul>
                </div>

                <div className='nav-icons'>
                      <span className='cart-icon' onClick={navigateToCart}>
                          <i className="ri-shopping-cart-2-line"></i>
                          <span className='badge'>{totalQuantity}</span>
                      </span>
                      <span className='user-icon'>
                          <i className="ri-user-line"></i>
                      </span>
                      <div className='mobile-menu'>
                         <span>
                            <i className="ri-menu-3-fill"></i>
                         </span>
                     </div>
                     
                </div>

              </div>
       </Row>
    </Container>
  </header>
}
export default Header
