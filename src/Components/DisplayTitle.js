import React from 'react'
import DisplayName from './DisplayName';

function DisplayTitle(props) {
    return (
        <h2>
            <span className='title-top'>Сказочное заморское яство</span>
            <span className='title-middle'>Нямушка</span>
            <DisplayName name={props.name} />

        </h2>
    )
}
export default DisplayTitle;