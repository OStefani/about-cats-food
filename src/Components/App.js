import React, { Component } from 'react';
import '../App.css';
import Box from "./Box";
import {GOODS} from '../shared/goods';
import {selectBox} from '../redux/actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  console.log('mapStateToProps state: ', state);
  return {selected: state}
}
function mapDispatchToProps(dispatch) {
  return {selectBox: function(id) {
    console.log('mapDispatchToProps id: ', id);
    dispatch(selectBox(id))
  }}
}
class App extends Component {
 
  render() {
    let isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE) console.log('ie is used')
    // Edge 20+
    let isEdge = !isIE && !!window.StyleMedia;
    if (isEdge) console.log('edge is used');
    return (     
      <div className="app">        
        <h1 className='header'>Ты сегодня покормил кота?</h1>
        <div className='wrapper'>
            {       
              Object.keys(GOODS).map(index => {              
                return <Box key={GOODS[index].id} goods={GOODS[index]} selected=            {this.props.selected[index]} selectHandler={this.props.selectBox} ></Box>
            })
            }
        </div>      
      </div>     
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
