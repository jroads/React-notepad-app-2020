import React from 'react';
import { getLocalItem, setLocalItem } from '../services/Storage';

function Home (){
    return(
        <div className="page">
            
            <button>
                Add Note
            </button>
        </div>
        
    );
}

export default Home;