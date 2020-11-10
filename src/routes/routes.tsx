import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Item2 from '../components/item2';
import Wheel from '../components/wheel';
import Namegen from '../components/namegen';

export default (
    <Switch>
        <Route exact path="/">
            <Redirect to="/tools" />{' '}
        </Route>
        <Route exact path="/tools/item2:names?" component={Item2} />
        <Route exact path="/tools/wheel:names?" component={Wheel} />
        <Route exact path="/tools/namegen" component={Namegen} />
        {/*<Route exact path="/tools/blah/" component={Blah} />*/}
        {/*<Route path="/alternativecv" component={AlternativeCVContainer} />*/}
    </Switch>
);
