import React, { Component } from "react";
import styles from './Footer.module.css';
import { RiMapPinLine,  } from "react-icons/ri";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
class Footer extends Component{
    render(){
        return(
            <footer className={styles.footer}>
                <a className={styles.link} href="https://goo.gl/maps/4DtRUXYQmHD98AsC8">
                    Ubicacion: Rivadavia 144<RiMapPinLine />
                </a>
                <a className={styles.link} href="https://www.facebook.com/isidrorest0/">
                    <GrFacebook />
                </a>
                <a 
                href="https://www.instagram.com/isidrorestobar/"
                className={styles.link}>
                    <BsInstagram />
                </a>
            </footer>
        )
    };
}

export default Footer;