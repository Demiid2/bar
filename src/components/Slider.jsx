import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import styles from './Slider.module.css';
import sabadoTropical from '../imagenes/flyers/Sabado_Tropical.jpg';
import viernesRock from '../imagenes/flyers/Viernes_Rock.jpeg';

const images = [
    { url: sabadoTropical },
    { url: viernesRock }
  ];

class Slider extends React.Component{
    render(){
        return(
            <main className={styles.container}>
              <div className={styles.phone}>
      <SimpleImageSlider
        width={390}
        height={390}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={7}
      />
      </div> 
      <div className={styles.tablet}>
      <SimpleImageSlider
        width={500}
        height={550}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={7}
      />
      </div>
      <div className={styles.desktop}>
      <SimpleImageSlider
        width={600}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={7}
      />
       </div>
            </main>
            
        )
        
    }
}

export default Slider;