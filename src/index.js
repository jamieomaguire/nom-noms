import React from 'react';
import { render } from 'react-dom';
import './scss/style.scss';
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

// Define react in the window
window.React = React;

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="list-entries" component={App} />
        <Route path="add-entry" component={App} />
        <Route path="view-chart" component={App} />
        <Route path="view-list" component={App} />
        <Route path="*" component={Whoops404} />
    </Router>,
    document.getElementById('react-container')
)
