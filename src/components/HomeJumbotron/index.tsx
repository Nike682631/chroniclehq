import Navbar from '../Navbar'
import ProductCard from '../ProductCard'
import './index.css'

function HomeJumbotron() {
    return (
        <section className='jumbotronSection'>
            <Navbar />
            <ProductCard />
        </section>
    )
}

export default HomeJumbotron