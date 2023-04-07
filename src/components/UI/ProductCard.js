
import { Col } from 'reactstrap';
import '../../styles/Product-card.css';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

import { toast } from 'react-toastify';





const ProductCard = ({item}) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productNom:item.productNom,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success('Produit ajouté au panier avec succès');
  };

return (
    <Col lg="3" md="3" className='mb-6'>
        <div className="product__item">
             <div className="product__img">
                 <motion.img whileHover={{ scale : 1.1}} src={item.imgUrl} 
                 alt="" />
             </div>
             
             <div className='p-2 product-info'>
                <h3 className="product__name">
                  <Link to={`/shop/${item.id}`}>{item.productNom}</Link>
                </h3>
                <span className='text-center'>{item.category}</span>
             </div>

             <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
                <span className="price">{item.price} Dhs</span>
                <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
                   <i class="ri-add-fill"></i>
                </motion.span> 
             </div>
        </div>
    </Col>
  )
}

export default ProductCard
