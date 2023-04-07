import "../styles/productDetails.css";
import { useState, useRef, useEffect} from "react";
import { motion } from 'framer-motion';
import { Container, Row, Col} from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Content from '../components/Content/Content';
import SectionProducts from "../components/UI/SectionProducts";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from 'react-toastify';


const ProductDetails = () => {

  useEffect(()=> {
    window.scrollTo(0,0)
  });
  const [flap, setFlap] = useState('desc')
  const commentUser = useRef('')
  const commentMsg = useRef('')
  const dispatch = useDispatch();


  const [rate, setRate] = useState(null)
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const  {imgUrl,productNom, price, avgRating, reviews, description, shortDesc, categoryP} = product

  
  const linkedProducts =  products.filter(item => item.categoryP===categoryP)
  
  const submitHandler = (e) => {
    e.preventDefault()

    const commentUserName = commentUser.current.value
    const commentUserMsg = commentMsg.current.value

    const commentObj = {
      userName: commentUserName,
      userMasg:commentUserMsg,
      rate
    }
    console.log(commentObj)
    toast.success('Comment Added');

  }

  ;

    const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productNom,
        imgUrl:imgUrl,  
        price,
      })
    );
    toast.success('Produit ajouté au panier avec succès');
  }
  

  return (
  <Content title={productNom}>
    <SectionProducts title={productNom}/>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <img src={imgUrl} alt=""/>
          </Col>
          <Col lg="6">
            <div className="product__details">
               <h2>{productNom}</h2>
               <div className="product__rating d-flex align-items-center gap-4 mb-4">
                <div>
                  <span >
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-half-s-fill"></i>
                  </span>
                </div>
                <p className="mb-1">
                  (<span>{avgRating}</span> ratings)</p>
               </div>

              <div className="d-flex align-items-center gap-4">
                 <span className="product__price">{price} dh</span>
                 <span>Catégorie : {categoryP.toUpperCase()}</span>
              </div>

               <p className="mt-3">{shortDesc}</p>

               <motion.button whileTap={{scale:1.3}} className="buy__btn" onClick={addToCart}>Ajouter au panier</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
       <Container>
        <Row>
          <Col lg="12">
            <div className="flap__strip d-flex align-items-center gap-5">
                <h6 className={`${flap==='desc' ? 'active__flap' : ''}`}
                 onClick={() => setFlap('desc')}
                >
                  Description 
                </h6>

                <h6 className={`${flap==='rev' ? 'active__flap' : ''}`} 
                 onClick={() => setFlap('rev')}
                >
                  Commentaires ({reviews.length})
                </h6>
            </div>           
            {
              flap === 'desc' ? (
               <div className="flap__content mt-5">
                <p>{description}</p>
              </div>
              ) : (
                <div className="comment__product mt-5">
                  <div className="comment__strip">
                    <ul>
                      {
                         reviews?.map((item, index)=>(
                          <li key={index}>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                         ))
                      }
                    </ul>
                    <div className="comment__form">
                      <h4>Laissez votre expérience</h4>
                      <form onSubmit={submitHandler}>
                        <div className="form__group">
                          <input type="text" placeholder="Entrez le nom" 
                          ref={commentUser}/>
                        </div>

                        <div className="form__group d-flex align-items-center gap-4">
                          <span onClick={() => setRate(1)}>1
                            <i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setRate(2)}>2
                            <i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setRate(3)}>3
                            <i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setRate(4)}>4
                            <i class="ri-star-s-fill"></i>
                          </span >
                          <span onClick={() => setRate(5)}>5
                            <i class="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <div className="form__group">
                          <textarea rows={3} type="text" placeholder="Comment Message..." ref={commentMsg}/>
                        </div>

                        <motion.button whileTap={{scale:1.2}} type="submit" className="buy__btn mb-2">Submit</motion.button>
              
                      </form>
                    </div>
                  </div>
                </div>  
              )
           }     
          </Col>

          <Col lg="12" className="mt-4">
             <h2 className="linked__title">Produit de même catégorie</h2>
          </Col>

          <ProductsList data={linkedProducts}/>
        </Row>
       </Container>
    </section>
  </Content>
)
}
export default ProductDetails;

