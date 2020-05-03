import React from 'react';
import { removeLocalItem } from '../services/Storage';

function Head (){
    function clearAll() {
        removeLocalItem();
    }

    return(
        <header>
            <h1>
                NOTEPAD
            </h1>
            <button
                onClick={clearAll}
            >
                Clear All
            </button>
            
        </header>
    );
}

export default Head;