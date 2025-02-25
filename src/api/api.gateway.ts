interface TodoResponse {
  userId: number
  id: number
  title: string
  completed: boolean
}

// const API_URL = 'https://jsonplaceholder.typicode.com'
const API_URL = 'http://localhost:8090'

export const getData = (): Promise<TodoResponse> => {
  return fetch(`${API_URL}/todos/1`)
    .then((response) => response.json())
    .then((json) => json)
}
