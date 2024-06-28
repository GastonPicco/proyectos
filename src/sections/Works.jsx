import "./Works.css"
import { PopUpWindow } from "./PopUpWindow.jsx"

export const Works = ({ onButtonClick, title = "titulo", description = "descripción...", estado = false, articleIndex = null, workImageSrc = "icon", workTypeLogo = "null"}) => {
    const text = estado ? 'visto' : 'nuevo'
    const stateClassName = estado ? 'work-content-card-data-buttons-state visited' : "work-content-card-data-buttons-state new"

    const artIndex = articleIndex
    const handleClick = (index) => {
        onButtonClick(index);   
        console.log(workImageSrc);
    }
    return (
        <div>
            <section id="proyects" className="work-content-card">
                <div className="work-content-card-div">
                <img className="work-content-card-image-holder-img" src={`assets/${workImageSrc[0]}`} alt=""/>
                </div>
                
                <img className="work-content-card-proyect-type" src={`assets/${workTypeLogo}`}/>
                <section className="work-content-card-data">
                    <h4 className="work-content-card-data-title">{title}</h4>
                    <p className="work-content-card-data-text">{description}</p>
                    <div className="work-content-card-data-buttons">
                        <span className={stateClassName}> {text} </span>
                        <button> git hub </button>
                        <button onClick={() => handleClick(artIndex)}>ver mas</button>
                    </div>
                </section>
            </section>
        </div>
    )

}