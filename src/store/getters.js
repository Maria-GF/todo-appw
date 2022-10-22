export default {
    // eslint-disable-next-line indent
    getListsByBoard: (state) => (boardId) => {
        return Object.values(state.lists)
            // eslint-disable-next-line indent
            .filter(list => list.board === boardId)
    },
    getTasksFromList: (state) => (listId) => {
        return Object.values(state.tasks)
            .filter(task => task.list === listId)
    }
}
