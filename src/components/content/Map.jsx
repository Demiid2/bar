import React, { Component } from "react";
import styles from './Map.module.css';

class Map extends Component{
    render(){
        return(
            <main className={styles.map}>
                <iframe 
                title="Mapa Ubicacion"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13129.154683135866!2d-58.7937806!3d-34.647412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f2af98444291c42!2sIsidro%20resto%20bar!5e0!3m2!1ses-419!2sar!4v1643759332004!5m2!1ses-419!2sar" 
                allowfullscreen="" 
                loading="lazy" 
                className={styles.mapchild}>
                </iframe>
            </main>
        )
    }
}

export default Map;