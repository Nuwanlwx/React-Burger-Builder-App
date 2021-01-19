import React from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import  classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from  '../Navigation/SideDrawer/SideDrawer';
const layout = (props) => (
    <Auxiliary>
        <Toolbar/>
        <SideDrawer/>
        <div>Toolbar,sideDrawer,Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>

);
export  default  layout;
