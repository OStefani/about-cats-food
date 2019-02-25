import React from 'react';
import DisplayTitle from './DisplayTitle';
import DisplayFeatures from './DisplayFeatures';
import DisplayBadge from './DisplayBadge';
import DisplaySlogan from './DisplaySlogan';

function Box(props) {
    return (
        <div className={props.goods.amount<1 ? 'disabled': 'box-wrapper'}>
            <div onClick={()=> props.selectHandler(props.goods.id)} className={props.goods.amount < 1 ? 'box-inner-disabled box-inner' : props.selected ? 'box-inner-red box-inner' : 'box-inner'}>
                <div className="box-inner-white">
                <DisplayTitle name={props.goods.name}  />
                <DisplayFeatures features = {props.goods.features} />
                <DisplayBadge size={props.goods.size} selected ={props.selected}/>
                </div>                
            </div> 
            <DisplaySlogan goods={props.goods} selected ={props.selected} selectHandler={props.selectHandler} />
        </div>
    )
}
export default Box;