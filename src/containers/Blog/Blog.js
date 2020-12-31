import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
import Home from './Home/Home';
import '../../fonts/fonts.css';

const AsyncHome = asyncComponent(() => {
    return import('./Home/Home');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
        <div>
            <div className="menu_bar">
        	    <a href="#" className="bt-menu"><span className="icon-menu"></span>Menú</a>
        	</div>
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink className="icon-home"
                                to="/home/"
                                exact
                                activeClassName="my-active">Inicio</NavLink></li>
                            <li><a href="#"><span className="icon-database"></span>Operación</a></li>
                            <li><a href="#"><span className="icon-credit"></span>Repositorio</a></li>
                            <li><a href="#"><span className="icon-documents"></span>Tablero de Control</a></li>
                            <li><a href="#"><span className="icon-message"></span>Módulos Especiales</a></li>
                            <li><NavLink className="icon-tools"
                                to="/setup/"
                                exact
                                activeClassName="my-active">Configuración</NavLink></li>
                        </ul>
                    </nav>
                    <div id="slider">
                        <img src="./logo.png" width="150px"/>
                        <h1>Bienvenido a EQUUS - Management Systems</h1>
                    </div>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/home" component={AsyncHome} /> : null}
                    <Route path="/setup" component={Posts} />
                    {<Route path="/" component={Home} />}
                </Switch>
            </div>
         </div>
        );
    }
}

export default Blog;