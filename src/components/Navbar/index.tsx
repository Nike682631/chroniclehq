import AnimatedLogo from '../AnimatedLogo'
import BetaButton from '../BetaButton'
import NavMenu from '../NavMenu'
import './index.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <AnimatedLogo />
            <NavMenu />
            <BetaButton />
        </nav>
    )
}

export default Navbar