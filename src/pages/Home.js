
import '../styles/home.css';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products'

import { Container, Row, Col } from 'reactstrap';
import Content from '../components/Content/Content';

import bghome from '../assets/images/bghome.png';
import Cards from '../cards/Cards';

import ProductsList from '../components/UI/ProductsList';

import counter__img from '../assets/images/counter__img.png';

import Clock from '../components/UI/Clock';

import marqueImg from "../assets/data/marqueImg";




const Home = () => {
  const [trendingCategorie1, setTrendingCategorie1] = useState([])
  const [trendingCategorie2, setTrendingCategorie2] = useState([])
  const [arrivleCategorie, setArrivleCategorie] = useState([])
  


  
  useEffect(() => {
    const trendingProductsC1  = products.filter(
      (item) => item.categoryP === "Ordinateur Mobile"
      );
    const trendingProductsC2  = products.filter(
      (item) => item.categoryP === "Composants"
      );
    const arrivaleProductsC1 = products.filter(
      (item) => item.categoryP === "Accessoires Pc"
      );
    
    
    setTrendingCategorie1(trendingProductsC1)
    setTrendingCategorie2(trendingProductsC2)
    setArrivleCategorie(arrivaleProductsC1)

     
  }, []);


  return (
     <Content title={'Home'}>
          <section className="home__section">
         <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className='home__content'>
                       <p className='home__subtitle'>Soteb Computer 2023</p>
                       <h2>Le meilleur produit ici,</h2>
                       <p> Chez SOTEB COMPUTER, Nous nous engageons à fournir à nos clients des produits de haute qualité à des prix abordables. Que vous ayez besoin d'un ordinateur, d'une imprimante, d'une caméra de surveillance ou d'accessoires tels qu'un clavier, une souris, un câble ou un adaptateur, nous avons ce qu'il vous faut. Notre équipe d'experts est toujours prête à vous aider à trouver le produit parfait pour répondre à vos besoins.
                       </p>

                        <motion.button whileHover={{ scale: 1.1 }}
                        className='buy__btn'>
                          <Link className='home__link' to='/shop'>Achetez maintenant</Link>
                        </motion.button>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                  <div className='home__img'>
                    <img src={bghome} alt='' />
                  </div>
                </Col>
            </Row>                                                              
         </Container>
         
          </section>

          <Cards />

          <section className='trending--product'>
             <Container>
                <Row>
                   <Col lg='12' className='text-center'>
                      <h2 className='section__title'>Produits Tendance</h2>
                   </Col>
                   <ProductsList data={trendingCategorie1}/>
                   <ProductsList data={trendingCategorie2}/>

                </Row>
             </Container>
          </section>

          <section class="spikes"></section>

          <section className='timer__count'>
            <Container>
              <Row>
                 <Col lg="6" md="6">
                       <div className='clocl__top-content'>
                           <h4 className='text-white fs-6 mb-3'>Offres Limitée</h4>
                           <h3 className='text-white fs-4 mb-2'>Qualité Ordinateur Portable</h3>
                       </div>
                       <Clock />
                       <motion.button 
                           whileTap={{sclae: 1.2}}
                           className='buy__btn store__btn' 
                       >
                           <Link className='link__btn' to='/shop'>Visit Store</Link>
                       </motion.button>
                 </Col>
                 <Col lg="6" md="6" className='text-end'>
                       <img src={counter__img} alt=''/>
                 </Col>

              </Row>
            </Container> 
          </section>

          <section className='new__arrivals'>
            <Container>
              <Row>
                <Col lg="12" className='text-center'>
                   <h2 className='section__title'>Nouvelles Arrivées</h2>
                </Col>
                <ProductsList data={arrivleCategorie}/>               
              </Row>
            </Container>
          </section>
          <section class="container">
             <div class="wave"></div>
          </section>
          <section className='marque'>
            <Container>
              <Row>
                {
                  marqueImg.map((item, index)=>(
                    <Col lg='2' md='5' key={index}>
                      <div className='card__marque'>
                         <img src={item.imgMarque } alt=''/>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </section>
     </Content>
  )
}
export default Home;