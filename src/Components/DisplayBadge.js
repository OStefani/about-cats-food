import React from 'react';

function DisplayBadge(props) {
    return (
        <div className={props.amount< 1? 'badge badge-gray' : props.selected ? 'badge badge-red' : 'badge badge-blue'}>
            <div className='badge-inner'>
                <span className='badge-size'>{props.size}</span>
                кг
            </div>
            
        </div>
    )
}
export default DisplayBadge;