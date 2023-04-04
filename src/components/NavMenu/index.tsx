import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.css'

function NavMenu() {
    const Location = useLocation()
    const [product, setProduct] = useState(false)
    const [ourStory, setOurStory] = useState(false)
    const [careers, setCareers] = useState(false)

    useEffect(() => {
        if (Location.pathname === '/') {
            setProduct(true)
            setOurStory(false)
            setCareers(false)
            console.log(product)
        } else if (Location.pathname === '/our-story') {
            setProduct(false)
            setOurStory(true)
            setCareers(false)
        } else if (Location.pathname === '/careers') {
            setProduct(false)
            setOurStory(false)
            setCareers(true)
        }
    }, [Location.pathname])
    return (
        <div className='navMenu'>
            <Link className={`navLink ${product ? ' currentLink' : ''}`} to='/'>Product</Link>
            <Link className={`navLink ${ourStory ? ' currentLink' : ''}`} to='our-story'>Our story</Link>
            <Link className={`navLink ${careers ? ' currentLink' : ''}`} to='careers'>Careers</Link>
        </div>
    )
}

export default NavMenu