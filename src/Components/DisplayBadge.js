import React from 'react';

function DisplayBadge(props) {
    return (
        <div className={props.selected ? 'badge badge-red' : 'badge badge-blue'}>
            <div className='badge-inner'>
                <span className='badge-size'>{props.size}</span>
                кг
            </div>
            
        </div>
    )
}
export default DisplayBadge;