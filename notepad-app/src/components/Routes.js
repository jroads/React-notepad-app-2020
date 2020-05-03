import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddNote from './AddNote';

function Routes(){
    return(
        <Switch>
            <Route path="/addNote"><AddNote /></Route>
        </Switch>
    );
}

export default Routes;