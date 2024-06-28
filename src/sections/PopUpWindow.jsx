import React, { useState } from 'react';

import "./PopUpWindow.css"
export const PopUpWindow = ({ title = "title", text = "text", appFunction, isVisible, popImageSrc = array }) => {

const [imageId, setImageId] = useState(0);
const handleImageClick = (id) => {
    setImageId(id);
    console.log("actualiza")
    
}

    return (
        <div className={`transparent-background-popup ${isVisible ? '' : 'none'}`}>
            <div className='sideBox left' onClick={()=>{appFunction(); handleImageClick(0)}}></div>
            <div className='sideBox right' onClick={()=>{appFunction(); handleImageClick(0)}}></div>
            <div className='horizontalBox top' onClick={()=>{appFunction(); handleImageClick(0)}}></div>
            <div className='horizontalBox bottom' onClick={()=>{appFunction(); handleImageClick(0)}}></div>
            <section className="pop-up-window">
                <h3 className="popUpTitle">{title}</h3>
                <div className="popUpContent">
                    <div className="popUpMediaArea">
                        <img className="popUpMedia" src={`assets/${popImageSrc[imageId]}`} alt="" />
                        <div className="popUpMediaSelector">
                            {Array.isArray(popImageSrc) ? (
                                popImageSrc.map((imageSrc, index) => (
                                    <img
                                    key={index}
                                    className="imageToSelect"
                                    src={`assets/${imageSrc.endsWith('.gif') ? imageSrc.replace('.gif', '.jpg') : imageSrc}`}
                                    alt=""
                                    draggable="false"
                                    onClick={() => handleImageClick(index)}
                                />
                                ))
                            ) : (
                                <img className="imageToSelect" ssrc={`assets/${popImageSrc[0]}`} alt="" draggable="false" />
                            )}
                        </div>
                    </div>
                    <div className="popUpTextArea">
                        <p dangerouslySetInnerHTML={{ __html: text }}/>
                    </div>
                </div>
            </section>
        </div>
    )
}