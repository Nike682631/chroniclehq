import { Link } from 'react-router-dom'
import './index.css'

function NavMenu() {
    return (
        <div className='navMenu'>
            <Link className='navLink' to='/'>Product</Link>
            <Link className='navLink' to='our-story'>Our story</Link>
            <Link className='navLink' to='careers'>Careers</Link>
        </div>
    )
}

export default NavMenu