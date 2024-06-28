import React, { useState } from 'react';
import "./Tecnology.css"
import TecnologyData from './TecnologyData.js'

export const Tecnology = ({ title = "titulo", text = TecnologyData[0].text, title_1 = "titulo 1", title_2 = "titulo 2", title_3 = "titulo 3", title_4 = "titulo 4" }) => {

    return (
        <section id="tecnologys" className="tecnology-content">
            <section className="tecnology-content-description">
                <h3 className="tecnology-content-description-title">{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: text }} className="tecnology-content-description-text"></p>
            </section>
            <section className="tecnology-content-areas">
                <div className="tecnology-content-divs">
                    <h4 className="tecnology-subtitle">{title_1}</h4>
                    <section className="tecnology-content-areas-section four">
                        <div className='tecnology-grid-element'>
                            <img className='iconFromTec' src="icons/nodeJS.png" alt="" ></img>
                            <p className='textFromTec' >Estudiando</p>
                        </div>
                        <img className='iconFromTec' src="icons/mongoDB.png" alt="" />
                        <img className='iconFromTec' src="icons/JS.png" alt="" />
                        <div className='tecnology-grid-element'>
                            <img className='iconFromTec' src="icons/java.png" alt="" ></img>
                            <p className='textFromTec' >Estudiando</p>
                        </div>


                    </section>
                </div>
                <div className="tecnology-content-divs">
                    <h4 className="tecnology-subtitle">{title_2}</h4>
                    <section className="tecnology-content-areas-section four">
                        <img className='iconFromTec' src="icons/react.png" alt="" />
                        <img className='iconFromTec' src="icons/css.png" alt="" />
                        <img className='iconFromTec' src="icons/html.png" alt="" />
                        <img className='iconFromTec' src="icons/JS.png" alt="" />
                    </section>
                </div>
                <div className="tecnology-content-divs">
                    <h4 className="tecnology-subtitle">{title_3}</h4>
                    <section className="tecnology-content-areas-section four">
                        <img className='iconFromTec' src="icons/unity.png" alt="" />
                        <img className='iconFromTec' src="icons/csharp.png" alt="" />
                        <img className='iconFromTec' src="icons/blender.png" alt="" />
                    </section>
                </div>
                <div className="tecnology-content-divs">
                    <h4 className="tecnology-subtitle">{title_4}</h4>
                    <section className="tecnology-content-areas-section nine">
                        <img className='iconFromTec' src="icons/vscode.png" alt="" />
                        <img className='iconFromTec' src="icons/visualstudio.png" alt="" />
                        <img className='iconFromTec' src="icons/git.png" alt="" />
                        <img className='iconFromTec' src="icons/blender.png" alt="" />
                        <img className='iconFromTec' src="icons/cinema4d.png" alt="" />
                        <img className='iconFromTec' src="icons/capcut.png" alt="" />
                        <img className='iconFromTec' src="icons/camtasia.png" alt="" />
                    </section>
                </div>

            </section>
        </section>
    )
}