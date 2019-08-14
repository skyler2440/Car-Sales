export const removeFeature = item => {
    console.log('remove feature invoked')
    return {type:'REMOVE_FEATURE'}
}

export const addFeature = item => {
    console.log('add feature invoked')
    return {type: ADD_FEATURE}
}
