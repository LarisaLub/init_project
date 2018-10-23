export const selectPlases = (state, id) =>
    state.plases.plases.filter(item => item.id === id);
