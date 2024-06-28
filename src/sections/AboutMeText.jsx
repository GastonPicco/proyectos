import "./AboutMeText.css"
const QuienSoy =
    `
    <p>Mi nombre es <strong>Gastón Picco</strong>, soy uruguayo y tengo 24 años. Hace 4 años tuve mi primer contacto con la programación al decidir 
    estudiar desarrollo de videojuegos. Aprendí mucho sobre Unity y, por supuesto, C#, profundizando en la programación orientada a objetos. <br><br>
    Mi curiosidad se expandió al mundo del desarrollo web al recibir una propuesta para hacer una página. Sin tener mucha idea al respecto, 
    decidí medir mi capacidad aceptando el reto y aprendiendo HTML, CSS y JS. La experiencia fue complicada, pero pude cumplir, y terminó por 
    consolidar mi interés en el desarrollo web. Es así, como hoy estoy profundizando y utilizando React para crear mis ideas y de esta manera, 
    formar un equipo con personas que quieran compartir y crear las suyas.
    </p>
    `

export const AboutMeText = ({ text = QuienSoy }) => {
    return (
        <>
            <h2 className="about-me-title">¿Quien soy?</h2>
            <img src={`assets/background.jpg`} alt='' className='about-me-description-image-inner' />
            <p dangerouslySetInnerHTML={{ __html: text }} className="about-me-text">
            </p>
        </>

    )
}