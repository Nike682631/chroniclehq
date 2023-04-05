import { useState, useLayoutEffect } from 'react';
import DDsubtitle from '../../assets/ProductCardSubtitle.png'
import mattycursor from '../../assets/mattycursor.png'
import './index.css'

function DragAndDropSubtitle() {

    useLayoutEffect(() => {
        const dragItem = document.querySelector('.ProductCardSubtitleImage');
        dragItem?.classList.add('animate');

    }, []);

    return (
        <div className='DandDcomponent' >
            <img className='ProductCardSubtitleImage' src={DDsubtitle} />
            <img className="mattycursor" src={mattycursor} />
        </div>
    );
}


export default DragAndDropSubtitle