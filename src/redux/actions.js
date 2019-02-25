export const SELECT = 'SELECT';
//const AVAILABLE = 'AVAILABLE';

// action creators

export function selectBox(id) {
    console.log('values: ', id)
    return {type: SELECT, id: id}
}

//export function availableBox(bool) {
 //   return {type: AVAILABLE, availableState: bool}
//}