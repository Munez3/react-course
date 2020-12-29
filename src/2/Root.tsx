import React from 'react';
import User from './User';


export default function Root(){
    return (
        <div>
            <User 
                firstName="Tomasz" 
                lastName="Musza"  
                age={20}
            >
                <div>test 2</div>
            </User>
        </div>
    )
}