import SectionProducts from "../components/UI/SectionProducts";
import Content from '../components/Content/Content';
import { Container, Row, Col } from 'reactstrap';
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import { useState } from 'react';




const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if(filterValue === "ordinateurmobile"){
      const filterProducts = products.filter(
        (item)=> item.linkProduct === "ordinateurmobile"
      );
      setProductsData(filterProducts)
    } 
    if(filterValue === "ordinateurfixe"){
      const filterProducts = products.filter(
        (item)=> item.category === "ordinateurfixe"
      );
      setProductsData(filterProducts)
    } 
    if(filterValue === "hdd"){
      const filterProducts = products.filter(
        (item)=> item.category === "hdd"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "ssd"){
      const filterProducts = products.filter(
        (item)=> item.category === "hdd"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "memoires"){
      const filterProducts = products.filter(
        (item)=> item.category === "memoires"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "ecran"){
      const filterProducts = products.filter(
        (item)=> item.category === "ecran"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "clavier"){
      const filterProducts = products.filter(
        (item)=> item.category === "clavier"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "souris"){
      const filterProducts = products.filter(
        (item)=> item.category === "souris"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "casque"){
      const filterProducts = products.filter(
        (item)=> item.category === "casque"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "cablevga"){
      const filterProducts = products.filter(
        (item)=> item.category === "cablevga"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "cablehdmi"){
      const filterProducts = products.filter(
        (item)=> item.category === "cablehdmi"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "cabledalimentation"){
      const filterProducts = products.filter(
        (item)=> item.category === "cabledalimentation"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "kaspersky"){
      const filterProducts = products.filter(
        (item)=> item.category === "kaspersky"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "microsoft"){
      const filterProducts = products.filter(
        (item)=> item.category === "microsoft"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "laser"){
      const filterProducts = products.filter(
        (item)=> item.category === "laser"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "jetencre"){
      const filterProducts = products.filter(
        (item)=> item.category === "jetencre"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "toner"){
      const filterProducts = products.filter(
        (item)=> item.category === "toner"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "cartouche"){
      const filterProducts = products.filter(
        (item)=> item.category === "cartouche"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "toner"){
      const filterProducts = products.filter(
        (item)=> item.category === "toner"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "routeur"){
      const filterProducts = products.filter(
        (item)=> item.category === "routeur"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "switch"){
      const filterProducts = products.filter(
        (item)=> item.category === "switch"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "camera"){
      const filterProducts = products.filter(
        (item)=> item.category === "camera"
      );
      setProductsData(filterProducts)
    }
    if(filterValue === "cablereseau"){
      const filterProducts = products.filter(
        (item)=> item.category === "cablereseau"
      );
      setProductsData(filterProducts)
    }
  }

  const handleSearch = (e) => {
    const searchFocus = e.target.value;

    const searchedProduct = products.filter(
      (item) => item.productNom.toLowerCase().includes(searchFocus.toLowerCase())
    )
    setProductsData(searchedProduct)
  }

  
  return <Content title={'Product'}>
      <SectionProducts title="PRODUITS"/>
      <section className="">
         <Container>
           <Row>
             <Col lg="3" md="3">
               <div className="filter__prod">
                  <section>
                        <select onChange={handleFilter}>
                            <option>Filtre Par Catégorie</option>
                            <optgroup label="ORDINATEUR">
                                <option value="ORDINATEUR MOBILE">ordinateur mobile</option>
                                <option value="ORDINATEUR FIXE">ordinateur fixe</option>
                            </optgroup>
                            <optgroup label="COMPOSANTS">
                                <option value="hdd">hdd</option>
                                <option value="ssd">ssd</option>
                                <option value="memoires">memoires</option>
                            </optgroup>
                            <optgroup label="ACCESSOIRES PC">
                                <option value="ecran">ecran</option>
                                <option value="clavier">clavier</option>
                                <option value="souris">souris</option>
                                <option value="casque">casque</option>
                                <option value="cablevga">caple VGA</option>
                                <option value="cablehdmi">caple HDMI</option>
                                <option value="cabledalimentation">caple d'limentation</option>
                            </optgroup>
                            <optgroup label="LOGICIELS">
                                <option value="kaspersky">kaspersky</option>
                                <option value="microsoft">microsoft</option>
                            </optgroup>
                            <optgroup label="IMPRIMENTES">
                                <option value="laser">laser</option>
                                <option value="jetencre">jet encre</option>
                            </optgroup>
                            <optgroup label="CONSOMMABLES">
                                <option value="toner">toner</option>
                                <option value="cartouche">cartouche</option>
                            </optgroup>
                            <optgroup label="RESEAUX">
                                <option value="routeur">routeur</option>
                                <option value="switch">switch</option>
                                <option value="camera">camera surveillance</option>
                                <option value="cable rèseau">caple reseau</option>
                            </optgroup>
                        </select>
                  </section>
               </div>
             </Col>
             <Col lg="3" md="3">
             <div className="filter__prod">
                  <section>
                    <select>
                       <option value="ascendant">Trier par</option>
                       <option value="ascendant">ascendant</option>
                       <option value="descendant">descendant</option>
                     </select>
                  </section>
               </div>
             </Col>
             <Col lg="6" md="6">
              <div className="search__box">
                  <input onChange={handleSearch} type="text" placeholder="Search......" />
                  <span>
                      <i class="ri-search-line"></i>
                  </span>
              </div>
             </Col>
           </Row>
         </Container>
      </section>
      <section>
         <Container>
           <Row>
              { productsData.length === 0 ? (<h1 className="text-center fs-2">Aucun produit n'a été trouvé !</h1>)
              :(
                   <ProductsList data = {productsData}/>
              )    
              }
           </Row>
         </Container>
      </section>
      
  </Content>
}

export default Shop;