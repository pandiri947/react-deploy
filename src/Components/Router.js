import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './home';
import Filter from './Filter';
import Details from './Details';


import Header from './Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/home" component={Home} />
            <Route path="/Filter" component={Filter} />
            <Route path="/Details" component={Details} />
            
        </BrowserRouter>
    )
}

export default Router;