import React, { useState, useEffect } from 'react'
import { HeaderPresentation } from './sections/HeaderPresentation.jsx'
import { Aboutme } from './sections/Aboutme.jsx'
import { Tecnology } from './sections/Tecnology.jsx'
import { Works } from './sections/Works.jsx'
import { AboutMeText } from './sections/AboutMeText.jsx'
import { PopUpWindow } from './sections/PopUpWindow.jsx'
import worksData from './sections/WorksData.js'


export const App = () => {
  const [index, setIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false); //controla ventana emergente
  const [workData, setWorkData] = useState([]);

  const handleAppClick = () => {
    setIsVisible(!isVisible);
  }

  const handleButtonClick = (workIndex) => {
    setIndex(workIndex);
    setIsVisible(!isVisible);
  }
  const Console = (tolog) => {
    console.log(tolog);
  }

  const handleData = (dataId) => {
    return {
      title: getData(dataId, "title"),
      description: getData(dataId, "summary"),
      estado: getData(dataId, "state"),
      workImageSrc: getData(dataId, "imagePaths"),
      workTypeLogo: getData(dataId, "workTypeLogo"),
    };
  };
  useEffect(() => {
    const data = [];
    for (let i = 0; i <= 11; i++) { // Ajusta el número 8 según la cantidad de datos que tengas
      
        data.push(handleData(i));
      
    }
    setWorkData(data);
  }, []);

  return (
    <main>
      {<PopUpWindow
        appFunction={handleAppClick}
        isVisible={isVisible}
        title={getData(index, "title")}
        text={getData(index, "text")}
        popImageSrc={getData(index, "imagePaths")}
      />}

      <div className='in-main'>
        <div className='dinamic-screen'>
         { <HeaderPresentation avatar_src={"profile-img"} />}
        </div>
        <div className='dinamic-screen'>
          { <Aboutme
            image={"background"}
            text={<AboutMeText></AboutMeText>}
          /> }
        </div>
        <div className='dinamic-screen'>
          {<Tecnology
            title='Herramientas y tecnologias'
            title_1='Backend'
            title_2='Frontend'
            title_3='Videojuegos'
            title_4='Herramientas'
          />}
        </div>
        <div className='dinamic-screen'>
          {<section className='work-content'>
            {workData.map((data, index) => (
              <Works
                key={index}
                onButtonClick={handleButtonClick}
                articleIndex={index}
                title={data.title}
                description={data.description}
                estado={data.estado}
                workImageSrc={data.workImageSrc}
                workTypeLogo={data.workTypeLogo}
              />
            ))}

          </section>}
        </div>


      </div>
    </main>
  )
}

const getData = (id, type) => {
  if (!worksData[id]) {
    switch (type) {
      case "state":
        return false;
      default:
        return "missing Data";
    }
  }

  switch (type) {
    case "title":
      return worksData[id].title;
    case "text":
      return worksData[id].text;
    case "summary":
      return worksData[id].summary;
    case "state":
      return worksData[id].state;
    case "imagePaths":
      return worksData[id].imagePaths;
    case "workTypeLogo":
      return worksData[id].workTypeLogo;
    default:
      return "Invalid Type";
  }
};
