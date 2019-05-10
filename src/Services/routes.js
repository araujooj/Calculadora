import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from '../Pages/Main/main'
import Prova from '../Pages/Contador/prova'

const Routes = () =>{

    return(
        <Router>
        <div>
        <Route exact path="/" component={Main} />
        <Route exact path = '/Prova' component = {Prova}/>
        </div>
        </Router>
    );
}


export default Routes;