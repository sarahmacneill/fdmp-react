import React from 'react';
import logo from '../img/fdmp_logo_noback.png';
import About from './About';
import PerformanceGallery from './PerformanceGallery';

export default function Home() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="FDMP logo" />
            </header>
            <body>
                <About />
                <PerformanceGallery />
            </body>
        </div>
    );
}