import React, { Fragment } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Map from "../components/content/Map";

export default function Ubicacion(){
        return(
            <Fragment>
                <Navigation/>
                <Map/>
                <Footer/>
            </Fragment>
        )
}