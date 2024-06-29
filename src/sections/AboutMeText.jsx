import AboutMeData from "./AboutMeData"

export const AboutMeText = ({ text = "text" }) => {
    return (
        <>
            <h2 className="about-me-title">¿Quien soy?</h2>
            <img src={`assets/background.jpg`} alt='' className='about-me-description-image-inner' />
            <p dangerouslySetInnerHTML={{ __html: text }} className="about-me-text">
            </p>
        </>

    )
}