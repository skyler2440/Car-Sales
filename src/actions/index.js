export const ADD_FEATURE = 'ADD_FEATURE'

export const removeFeature = item => {
console.log("TCL: item remove", item)
    console.log('remove feature invoked')
    return {type:'REMOVE_FEATURE', payload: item}
}

export const addFeature = item => {
console.log("TCL: item add", item)
    return {type: "ADD_FEATURE", payload: item}
}
