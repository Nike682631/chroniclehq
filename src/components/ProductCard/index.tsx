import { useEffect, useState } from 'react'
import './index.css'
import HeroBtn1 from '../../assets/hero-btn-1.svg'
import HeroBtn2 from '../../assets/hero-btn-2.svg'
import HeroBtn3 from '../../assets/hero-btn-3.svg'
import HeroBtn4 from '../../assets/hero-btn-4.svg'
import heroscreen_1 from '../../assets/hero-screen-1.png'
import heroscreen_2 from '../../assets/hero-screen-2.png'
import heroPlus from '../../assets/hero-plus.png'
import DragAndDropSubtitle from '../DragAndDropSubtitle'
import ImageCarouselSearchBar from '../ImageCarouselAndSearchBar'

function ProductCard() {
    const [rotation, setRotation] = useState(0)
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY);
            console.log(scrollValue)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

    useEffect(() => {
        setRotation(scrollValue / 4)
    }, [scrollValue])

    return (
        <div className='productCardParent'>
            <div className='productCard' style={{ transform: `rotateX(-${rotation}deg)` }}>
                <div className='container'>
                    <div className='productCardTitlebar'>
                        <div className='cardWindowOptions'>
                            <svg className='windowOptions windowOption1' height="10" width="10">
                                <circle cx="5" cy="5" r="6" stroke="black" stroke-width="3" />
                            </svg>
                            <svg className='windowOptions windowOption2' height="10" width="10">
                                <circle cx="5" cy="5" r="6" stroke="black" stroke-width="3" />
                            </svg>
                            <svg className='windowOptions windowOption3' height="10" width="10">
                                <circle cx="5" cy="5" r="6" stroke="black" stroke-width="3" />
                            </svg>
                        </div>
                        <div className='heroBtns'>
                            <button className='heroBtn'>
                                <HeroBtn1 />
                            </button>
                            <button className='heroBtn'>
                                <HeroBtn2 />
                            </button>
                            <button className='heroBtn'>
                                <HeroBtn3 />
                            </button>
                            <button className='heroBtn'>
                                <HeroBtn4 />
                            </button>
                        </div>
                        <div className='item5'>

                        </div>
                    </div>
                    <div className='productCardMainArea'>
                        <div className='mainAnimation'>
                            <div className='mainAnimationContentGrid'>
                                <div className='mainAnimationText'>
                                    <div className='mainAnimationTextAnnouncement'></div>
                                    <div className='mainAnimationTextTitle'>
                                        <div>Impactful</div>
                                        <div>stories. Made</div>
                                        <div>effortlessly.</div>
                                    </div>
                                    <div className='mainAnimationTextSubTitle'>
                                        <DragAndDropSubtitle />
                                    </div>
                                </div>
                                <div className='mainAnimationImageCarousel'>
                                    <ImageCarouselSearchBar />
                                </div>
                            </div>
                        </div>
                        <div className='sideScreenImages'>
                            <img className='heroScreenImages' src={heroscreen_1} />
                            <br />
                            <img className='heroScreenImages' src={heroscreen_2} />
                            <br />
                            <button className='heroScreenBtn' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard