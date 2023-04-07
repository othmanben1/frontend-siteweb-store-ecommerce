import {Container} from 'reactstrap';
import '../../styles/SectionProducts.css'


const SectionProducts = ({title}) => {
  return (
    <section className="section__product">
       <Container className='text-center'>
         <h1>{title}</h1>
       </Container>
    </section>
  )
}

export default SectionProducts;