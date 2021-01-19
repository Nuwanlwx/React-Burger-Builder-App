import React ,{Component} from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import  classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from  '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    sideDrawerOpenHandler = () => {
        this.setState((prevState)=> {
            return {showSideDrawer:!prevState.showSideDrawer};
        });
    }
    render() {
        return (
            <Auxiliary>
                <Toolbar    drawerToggleClicked={this.sideDrawerOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer}
                            closed={this.sideDrawerClosedHandler}

                />
                <div>Toolbar,sideDrawer,Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}
export  default  Layout;
