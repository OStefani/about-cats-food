import React from 'react';

function DisplaySlogan(props) {
    
    return (
        <div className="slogan">
        {
            props.goods.amount < 1 ? props.goods.slogan_disabled :
            props.selected ? props.goods.slogan_selected : 
            props.goods.slogan_default
        }
        <span className='slogan-span' onClick={()=> props.selectHandler(props.goods.id)}>
            { !props.selected && props.goods.amount > 0 ? 'купи' : null }
        </span>        
        </div>
    )
}

export default DisplaySlogan;