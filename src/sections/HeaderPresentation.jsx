import './HeaderPresentation.css'


export const HeaderPresentation = ({avatar_src}) => {

    const SectionScroll = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      };
    return (
        <div className="container">
            <header className="navegation-bar">
                    <button className='navegation-bar-button'>contacto</button>
                    <button className='navegation-bar-button' onClick={() => SectionScroll('aboutMe')}>sobre mi</button> 
                    <button className='navegation-bar-button' onClick={() => SectionScroll('tecnologys')}>tecnologias</button> 
                    <button className='navegation-bar-button' onClick={() => SectionScroll('proyects')}>proyectos</button> 
                    
            </header>
            <div id='contact' className="big-picture">            
                <div className='big-picture-section'>
                    <img className='big-picture-profile-image none' src={`assets/${avatar_src}.jpg`} alt="" />
                    <div className='big-picture-title'>
                        <h1>Gastón Picco</h1>
                        <h2>Desarrollador</h2><h2 className='deco'> Web</h2><h2> y de</h2><br/> <h2 className='deco'>Videojuegos</h2>
                    </div>
                </div>
                <button className='big-picture-contact-button'>contacto</button>
            </div>
        </div>  );
};