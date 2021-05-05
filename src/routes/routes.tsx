import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Item2 from '../components/item2';
import Wheel from '../components/wheel';
import Namegen from '../components/namegen';
import Md5hahser from '../components/md5';
import UaFinder from '../components/uafinder';
import Week from '../components/week';

export default (
    <Switch>
        <Route exact path="/">
            <Redirect to="/tools" />{' '}
        </Route>
        <Route exact path="/tools/item2:names?" component={Item2} />
        <Route exact path="/tools/wheel:names?" component={Wheel} />
        <Route exact path="/tools/namegen" component={Namegen} />
        <Route exact path="/tools/md5hasher" component={Md5hahser} />
        <Route exact path="/tools/uafinder" component={UaFinder} />
        <Route exact path="/tools/week" component={Week} />
        {/*<Route exact path="/tools/blah/" component={Blah} />*/}
        {/*<Route path="/alternativecv" component={AlternativeCVContainer} />*/}
    </Switch>
);
