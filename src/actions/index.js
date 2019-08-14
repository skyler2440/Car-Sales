export const ADD_FEATURE = 'ADD_FEATURE'

export const removeFeature = item => {
    console.log('remove feature invoked')
    return {type:'REMOVE_FEATURE'}
}

export const addFeature = item => {
    console.log('add feature invoked')
    console.log('item add', item)
    return {type: "ADD_FEATURE", payload: item}
}
