import Content from '../components/Content/Content';
import { Container, Row, Col } from 'reactstrap';
import SectionProducts from "../components/UI/SectionProducts";
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from 'react-router-dom';
import "../styles/cart.css";




const Cart = () => {
  const cartItems = useSelector(state=>state.cart.cartItems)
  const totalAmount = useSelector((state)=>state.cart.totalAmount)
  

  const Tr = ({ item }) => {
     const dispatch = useDispatch();
     const supprimerProducts = () => {
       dispatch(cartActions.supprimerItem(item.id))
     }
    return(
      <tr>
         <td>
            <img src={item.imgUrl} alt='' />
         </td>
         <td>
           {item.productNom}
        </td>
         <td>{item.price} dh</td>
         <td>{item.quantity}</td>
         <td>
           <i onClick={supprimerProducts} class="ri-delete-bin-6-fill"></i>
         </td>
    </tr>
    )
  }
  return <Content title={'Shopping Cart'}>
    <SectionProducts title="PANIER D'ACHAT"/>
    <section>
      <Container>
        <Row>
          <Col lg="9">
          {
            cartItems.length === 0 ? (<h2 className='text-center'>Aucun article à ajouter au panier</h2>) : (
            <table className='table'>
                <thead>
                <tr>
                  <th>Images</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantite</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
                 {
                  cartItems.map((item, index) =>(
                    <Tr item={item} key={index}/>
                  ))
                 }
              </tbody>
              
            </table>
          )
          }
          </Col>
          <Col lg="3">
            <div>
              <h6 className='d-flex align-items-center justify-content-between fw-bold fs-5'>
                Total
                <span className='fs-4 fw-bold'>{totalAmount} DH</span>
              </h6>
            </div>
            <p className='fs-6 mt-2'>Les taxes et l'expédition calculeront la caisse</p>
            <div>
              <button className='buy__btn w-100 mt-6'>
                <Link to='/comander'>Commander</Link>
              </button>
              <button className='buy__btn w-100'>
                <Link to='/shop'>Continuer Mes Achats</Link>
              </button>
        
            </div>
          </Col>
        </Row>
      </Container>
    </section> 
    
  </Content>
   
}
export default Cart