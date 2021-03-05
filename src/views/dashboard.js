import * as React from "react";
import '../style/main.css';
import Navb from "../components/navbar";
import {Link} from "react-router-dom"
import {FirebaseDatabaseProvider} from "@react-firebase/database"

import { render } from "react-dom";

function Dash() {
    return (
        <>
        <Navb/>
        <Link to="/">Home</Link>
        </>
        
    );
}
export default Dash;