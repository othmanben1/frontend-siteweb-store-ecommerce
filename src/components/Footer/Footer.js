import './Footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from '../../assets/images/sotebcomputer.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    
  <footer class="footer">
    <Container>
      <Row>
          <Col lg="4">
                <div className='logo'>
                   <img src={logo} alt='' />
                </div>
                <p className='footer__text mt-4'>Equipement Informatique & Bureautique</p>
          </Col>
          <Col lg="3">
              <div className='footer__quick-links'>
                 <h4 className='quick__links-title'>Principales Catégories</h4>
                 <ListGroup className='footer__content'>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <Link to="#">Ordinateur</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <Link to="#">Impression</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 v'>
                         <Link to="#">Réseaux</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <Link to="#">Logiciels</Link>
                      </ListGroupItem>     
                 </ListGroup>
              </div>
          </Col>
          <Col lg="2">
          <div className='footer__quick-links'>
                 <h4 className='quick__links-title'>Liens Utiles</h4>
                 <ListGroup className='footer__content'>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <Link to="#">Home</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <Link to="#">Services</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <Link to="#">Shop</Link>
                      </ListGroupItem>  
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <Link to="#">Login</Link>
                      </ListGroupItem> 
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <Link to="#">Privacy Policy</Link>
                      </ListGroupItem> 
                 </ListGroup>
              </div>
          </Col>
          <Col lg="3">
              <div className='footer__quick-links'>
                 <h4 className='quick__links-title'>Informations</h4>
                 <ListGroup className='footer__content'>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                         <span><i class="ri-map-pin-line"></i></span>
                         <p>60,Bd.MohamedV,Imm Mansour Billah 2éme étage Appt N° 9- EL JADIDA</p>
                      </ListGroupItem>

                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                          <span><i class="ri-phone-line"></i></span>
                          <p>+212 5 23 37 38 39</p>
                      </ListGroupItem>

                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                          <span><i class="ri-mail-line"></i></span>
                          <p>soteb@manara.ma / computer.soteb@gmail.com</p>    
                      </ListGroupItem>  
                 </ListGroup>
               </div>
          </Col>  
          <Col lg="12">
             <p className='footer__copyright'>Copyright {year} All rights reserved</p>
          </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
