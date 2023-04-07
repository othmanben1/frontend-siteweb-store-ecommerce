import Content from '../components/Content/Content';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import SectionProducts from "../components/UI/SectionProducts";
import { useSelector } from 'react-redux';
import '../styles/comander.css'

const Checkout = () => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)




  return <Content title={'Shopping Cart'}>
      <SectionProducts title="PANIER D'ACHAT"/>
      <section>
         <Container>
           <Row>
            <Col lg="8">
              <h6 className='mb-4 fw-bold fs-4'>Informations Personnelles</h6>
                 <Form className='persone__form'>
                   <FormGroup className='form__group'>
                      <input type="text" placeholder='Entrez votre nom' />
                   </FormGroup>
                   <FormGroup className='form__group'>
                      <input type="email" placeholder='Entrez votre mail' />
                   </FormGroup>
                   <FormGroup className='form__group'>
                      <input type="number" placeholder='Numéro de téléphone' />
                   </FormGroup>
                   <FormGroup className='form__group'>
                      <input type="text" placeholder='Adresse' />
                   </FormGroup>
                   <FormGroup className='form__group'>
                      <input type="text" placeholder='Ville' />
                   </FormGroup>
                   
                 </Form>
            </Col>
            <Col lg='4'> 
               <div className='comander__cart'>
                     <h6>
                        Total Quantity : <span>{totalQty} Articles</span>
                     </h6>
                     <h6>
                        Total Produits : <span>{totalAmount} DH</span>
                     </h6>
                     <h6>
                        <span>
                           Livraison : <br />
                        </span>
                        <span>0 DH</span>
                     </h6>
                     <h4>
                       Coût Total : <span>{totalAmount} DH</span>
                     </h4>
                     <button className='buy__btn auth__btn '>
                          Passer une commande
                     </button>
               </div>
            </Col>
           </Row>
         </Container>
      </section>

  </Content>
}

export default Checkout;