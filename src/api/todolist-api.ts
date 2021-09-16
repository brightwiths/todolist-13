import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '999abac6-bf67-459a-8bbe-7b90949bd5d4'
    }
})

export const todolistApi = {
    getTodos() {
        return instance.get<Array<TodoType>>(`todo-lists`)
    },
    createTodo() {
        const title = 'AXIOS!!!'
        return instance.post<CommonResponseType<{item: TodoType}>>('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {
            title
        })
    }


}

type CommonResponseType<T = {}> = {
    resultCode: number,
    messages: Array<string>,
    fieldsError: Array<string>,
    data: T
}

type TodoType = {
    id: string
    title: string
    addedDate: string
    order: string
}