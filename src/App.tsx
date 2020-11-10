import React from 'react';
import NavbarScroller from './components/topnav';
import './App.css';

import routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

const navigation = {
    brand: { name: 'Igors.net', to: '/tools/' },
    links: [
        { name: 'MD5', to: '/tools/' },
        { name: 'Item 2', to: '/tools/item2' },
        { name: 'Wheel', to: '/tools/wheel' },
        { name: 'NameGen', to: '/tools/namegen' },
        { name: 'Item 5', to: '/tools/' },
        { name: 'Item 6', to: '/tools/' },
        { name: 'Item 7', to: '/tools/' },
        { name: 'Item 8', to: '/tools/' },
    ],
};

function App(): JSX.Element {
    const { brand, links } = navigation;
    return (
        <div className="App">
            <NavbarScroller brand={brand} links={links} />
            <BrowserRouter>{routes}</BrowserRouter>
        </div>
    );
}

export default App;
