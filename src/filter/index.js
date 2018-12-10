export const selectPlaces = (state, id) => {
    //console.log(state);
    if (!state.places.places) return [];
    return state.places.places.filter(item => item.id === id);
};
