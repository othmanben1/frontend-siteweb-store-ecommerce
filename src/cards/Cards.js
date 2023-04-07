
import { Container, Row, Col } from "reactstrap";
import {motion} from 'framer-motion';
import "./Cards.css";

import serviceData from '../assets/data/serviceData';

const Cards = () => {
  return <section className="cards">
    <Container>
        <Row>
        {
            serviceData.map((item,index)=>(
                <Col lg='3' md='4' key={index}>
                    <motion.div whileHover={{scale : 1.1}}
                      className="card__item">
                        <span><i class={item.icon}></i></span>
                        <div>
                            <h3>{item.title}</h3>
                        </div>
                    </motion.div>       
                </Col>
            ))
        }
            
        </Row>
    </Container>
  </section>
}

export default Cards