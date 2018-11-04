export const selectPlases = (state, id) => {
    console.log(state);
    if (!state.plases.plases) return [];
    return state.plases.plases.filter(item => item.id === id);
};
