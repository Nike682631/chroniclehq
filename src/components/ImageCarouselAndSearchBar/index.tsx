import React, { ReactElement, useEffect, useState } from 'react';
import arrow from '../../assets/arrow.png'
import imageCarouselBlocksTitle from '../../assets/image-carousel-blocks-title.png'
import Herotab1 from '../../assets/hero-tab-1.svg'
import Herotab2 from '../../assets/hero-tab-2.svg'
import Herotab3 from '../../assets/hero-tab-3.svg'
import Herotab4 from '../../assets/hero-tab-4.svg'
import Herotab5 from '../../assets/hero-tab-5.svg'
import Herotab6 from '../../assets/hero-tab-6.svg'
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.png'
import slide5 from '../../assets/slide5.png'
import slide6 from '../../assets/slide6.png'
import searchbar from '../../assets/searchbar.png'
import saracursor from '../../assets/sara-cursor.png'
import './index.css'

interface imageCarouselListItemType {
    index: number,
    name: String,
    SvgComponent: ReactElement<React.SVGProps<SVGSVGElement>>,
    color: string,
    image: string
}

const ItemList: imageCarouselListItemType[] = [
    {
        index: 0,
        name: 'Cards',
        SvgComponent: <Herotab1 />,
        color: "#409fd4",
        image: slide1
    },
    {
        index: 1,
        name: 'Numbers',
        SvgComponent: <Herotab2 />,
        color: "#5940d4",
        image: slide2
    },
    {
        index: 2,
        name: 'Trends',
        SvgComponent: <Herotab3 />,
        color: "#e2a11d",
        image: slide3
    },
    {
        index: 3,
        name: 'People',
        SvgComponent: <Herotab4 />,
        color: "#40b65b",
        image: slide4
    },
    {
        index: 4,
        name: 'Embeds',
        SvgComponent: <Herotab5 />,
        color: "#b640d4",
        image: slide5
    },
    {
        index: 5,
        name: 'Timeline',
        SvgComponent: <Herotab6 />,
        color: "#40c2d4",
        image: slide6
    },
    {
        index: 6,
        name: 'More',
        SvgComponent: <Herotab1 />,
        color: "#000000",
        image: slide1
    },
]

function ImageCarouselSearchBar() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 6);
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='imageCarouselarea' >
            <div className='searchbar'>
                <img className='searchbarImage' src={searchbar} />
                <div className='forwardSlash'>/</div>
                <div className='searchbarMessage'>Type "/" for shortcuts</div>
                <img className="saracursor" src={saracursor} />
            </div>
            <div className='imageCarousel'>
                <div className='imageCarouselListParent'>
                    <div className='imageCarouselListTitle'>
                        <img className='imageCarouselBlocksTitle' src={imageCarouselBlocksTitle} />
                    </div>
                    <div className='imageCarouselList'>
                        <ul className='imageCarouselListMid'>
                            {ItemList.map((item, index) => (
                                <li key={index}
                                    className={`imageCarouselListItem ${item.index === activeIndex ? 'background' : ''}`}
                                    onClick={() => setActiveIndex(item.index)}
                                >
                                    <div
                                        className='imageCarouselListItemCover'
                                        style={
                                            {
                                                backgroundColor: item.index === activeIndex ? item.color : '',
                                                borderColor: item.index === activeIndex ? item.color : ''
                                            }

                                        }
                                    >
                                        <div className='heroSvgDiv'>
                                            {item.SvgComponent}
                                        </div>
                                    </div>
                                    <div className="imageCarouselListItemText">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className='imageCarouselListItemArrow'>
                                        <img src={arrow} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='imageCarouselSlideParent'>
                    {ItemList.map((item, index) => (
                        <img
                            className={`imageCarouselSlide ${item.index === activeIndex ? 'slideActive' : ''}`}
                            src={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>)
}

export default ImageCarouselSearchBar