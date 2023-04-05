import searchbar from '../../assets/searchbar.png'
import saracursor from '../../assets/sara-cursor.png'
import imageCarouselBlocksTitle from '../../assets/image-carousel-blocks-title.png'
import herotabsbtn1 from '../../assets/hero-tabs-btn-1.png'
import herotabsbtn2 from '../../assets/hero-tabs-btn-2.png'
import herotabsbtn3 from '../../assets/hero-tabs-btn-3.png'
import herotabsbtn4 from '../../assets/hero-tabs-btn-4.png'
import herotabsbtn5 from '../../assets/hero-tabs-btn-5.png'
import herotabsbtn6 from '../../assets/hero-tabs-btn-6.png'
import herotabsbtn7 from '../../assets/hero-tabs-btn-7.png'
import './index.css'

function ImageCarouselSearchBar() {
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
                        <ul>
                            <li className='imageCarouselListItem'>

                            </li>
                            <li className='imageCarouselListItem'>Numbers</li>
                            <li className='imageCarouselListItem'>Trends</li>
                            <li className='imageCarouselListItem'>People</li>
                            <li className='imageCarouselListItem'>Embeds</li>
                            <li className='imageCarouselListItem'>Timeline</li>
                            <li className='imageCarouselListItem'>More</li>
                        </ul>
                    </div>
                </div>
                <div className=''></div>
            </div>
        </div>)
}

export default ImageCarouselSearchBar