
import Content from '../components/Content/Content';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../styles/login.css";


const Login = () => {
  
  

  return (
    <Content title={'CONNEXION'}>
       <section>
        <Container>
          <Row> 
             <Col lg='6' className='m-auto text-center'>
             <h3 className='fw-bold fs-4 mb-4'>Connexion</h3>
             <Form className='auth__form' >
                 <FormGroup className='form__group'>
                    <input type="email" placeholder='Entrez votre email'   />
                 </FormGroup>
                 <FormGroup className='form__group'>
                    <input type="password" placeholder='Entrez votre password'  />
                 </FormGroup>
                 <button type='submit' className='buy__btn auth__btn'>
                    Connexion
                 </button>
                 <p>Vous n'avez pas de compte ? créer un compte <Link to='/signup'>S'inscrire</Link></p>
             </Form>
             </Col>
          </Row>
        </Container>
       </section>
    </Content>
  )
}

export default Login




