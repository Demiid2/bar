import React, { Fragment } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ReservasCon from "../components/ReservasCon";

export default function Reservas() {
    return(
        <Fragment>
         <Navigation/>
         <ReservasCon />
         <Footer />
         </Fragment>
    )
};