export const selectPlaces = (state, id) => {
    if (!state.location.places) return [];
    return state.location.places.filter(item => item.id === id);
};
