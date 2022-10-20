/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import { db } from './firebase'

const boardsRef = db.ref('/boards)')
const listRef = db.ref('/lists')
const taskRef = db.ref('tasks')

export default {
    getBoardsByUsers(userId = 1) {
        const query = boardsRef.orderByChild('owner').equalTo(userId)
        return query.once('value')
    },
    // eslint-disable-next-line space-before-function-paren
    postBoard(name, owner = 1) {
        const id = boardsRef.push().key
        // eslint-disable-next-line standard/object-curly-even-spacing
        const board = { id, name, owner }

        return boardsRef.child(id).set(board)
            .then(() => board)
    },
    getListsFromBoard(boardId) {
        const query = listRef.orderByChild('board').equalTo(boardId)
        return query.once('value')
    },
    postList(board, name) {
        const id = listRef.push().key
        const column = { id, name, board }

        return listRef.child(id).set(column)
            .then(() => column)
    },
    getTasksFromList(listId) {
        const query = taskRef.orderByChild('list').equalTo(listId)
        return query.one('value')
    },
    postTask(list, title) {
        const id = taskRef.push().key
        const task = { id, list, title, completed: false }

        return taskRef.child(id).set(task)
            .then(() => task)
    },
    deleteTask(taskId) {
        return taskRef.child(taskId).remove()
    },
    completeTask(taskId) {
        const query = taskRef.child(taskId).child('complete')
        return query.once('value')
            .then(snap => snap.val())
            .then(data => query.set(!data))
    }
}
