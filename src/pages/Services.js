import '../styles/services.css';
import {Container, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import Content from '../components/Content/Content';
import SectionProducts from '../components/UI/SectionProducts';


const Services = () => {
  return <Content title={'Service'}>
    <SectionProducts title="SERVICES"/>
    <div className="services" id='' >
       <Container>
         <Row>          
                <div className='content__container'>
                 <div className='box'>
                   <span><i class="fa-solid fa-pen-nib"></i></span>
                   <h3>Graphic Design</h3>
                   <div className='info'>
                     <Link className='details__link' to='/details'>Details</Link>
                   </div>
                 </div>

                 <div className='box'>
                   <span><i class="fa-solid fa-laptop-code"></i></span>
                   <h3>Creation Site Web</h3>
                   <div className='info'>
                     <Link className='details__link' to='/details'>Details</Link>
                   </div>
                 </div>

                 <div className='box'>
                   <span><i class="fas fa-network-wired"></i></span>
                   <h3>Réseaux Informatique</h3>
                   <div className='info'>
                     <Link className='details__link' to='/details'>Details</Link>
                   </div>
                 </div>

                 <div className='box'>
                   <span><i class="fa-solid fa-bullhorn"></i></span>
                   <h3>Marketing</h3>
                   <div className='info'>
                     <Link className='details__link' to='/details'>Details</Link>
                   </div>
                 </div>
            </div>
         </Row>
       </Container>
    </div>
  </Content>
}

export default Services