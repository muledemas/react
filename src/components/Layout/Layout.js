import React from "react";
import Auxilary from "../../hoc/Auxilary";
//import classes from './Layout.css'

const layout = (props) => (
  <Auxilary>
    <div>Toolbar,sidedrawer, backdrop</div>
    <main style={{marginTop:'16px'}}>{props.children}</main>
  </Auxilary>
);
export default layout
