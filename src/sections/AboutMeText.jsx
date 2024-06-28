import "./AboutMeText.css"
const QuienSoy = 
 `
     <p>Mi nombre es <strong>Gaston Picco</strong>, soy de Uruguayo, tengo 23 años. Hace 4 años tube mi primer contacto con la programacion por decidir estudiar desarrollo de videojuegos, aprendi muchisimas de Unity y obvio C#. <br><br> 
     Mi curiosidad se expandio al mundo del desarrollo web al recibir una propuesta de hacer una pagina. Sin tener mucha idea con decidi medir mi capacidad aceptando el reto y aprendiendo HTML CSS y JS. La experiencia complicada pero pude cumplir, y termino por cerrar mi interes en el desarrollo web, hoy profundizando y utilizando React para crear mis ideas, para en un futuro estar junto a personas que quieran compartir y crear sus ideas.
    `

export const AboutMeText = ({text = QuienSoy}) => {
    return (
        <>
            <h2 className="about-me-title">¿Quien soy?</h2>
            <img src={`assets/background.jpg`} alt='' className='about-me-description-image-inner'/>
            <p dangerouslySetInnerHTML={{ __html: text }} className="about-me-text">
            </p>
        </>

    )
}