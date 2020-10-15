import React from 'react';
import Pantostein from '../img/pantostein.jpg';
import Concert2019 from '../img/concert2019.jpg';
import Pirates from '../img/pirates.png';

export default function PerformanceGallery() {
    return (
        <div id="productions" class="container pt-4">
            <h2>Productions</h2>
            <div class="row">
                <div class="col show-poster m-2">
                    <img class="img-fluid" src={Pantostein} alt='Pantostein poster' />
                    <div class="text">
                        <h3>Pantostein</h3>
                    </div>
                </div>
                <div class="col show-poster m-2">
                    <img class="img-fluid" src={Concert2019} alt='2019 Concert Poster' />
                    <div class="text">
                        <h3>Concert 2019</h3>
                    </div>
                </div>
                <div class="col show-poster m-2">
                    <img class="img-fluid" src={Pirates} alt='Pirates panto poster' />
                    <div class="text">
                        <h3>Pirates</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}