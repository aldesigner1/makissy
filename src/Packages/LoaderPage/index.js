
import React from 'react';

import './Loader.scss';

export default function Loader() {
    return (
        <div class="containerLoader">
            <div class="cssload-dots">
                <div class="cssload-dot"></div>
                <div class="cssload-dot"></div>
                <div class="cssload-dot"></div>
                <div class="cssload-dot"></div>
                <div class="cssload-dot"></div>
            </div>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" ></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	
                                                                       0 1 0 0 0	
                                                                       0 0 1 0 0	
                                                                       0 0 0 1 -7" result="goo" ></feColorMatrix>
                        {/* <!--<feBlend in2="goo" in="SourceGraphic" result="mix" ></feBlend>--> */}
                    </filter>
                </defs>
            </svg>

            <label for="">Chargement</label>
        </div>
    )
}
