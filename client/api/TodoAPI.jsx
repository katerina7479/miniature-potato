import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const api = {
  getTodos(){
    return axios.get('/api/todos/');
  },

  getFilteredTodos(showCompleted, searchText){
    return axios.get(`/api/todos/?completed=${showCompleted}&q=${searchText}`);
  },

  getTodo(todoId){
    return axios.get(`/api/todos/${todoId}/`);
  },

  addTodo(data){
    console.log('Posting', data);
    return axios.post('/api/todos/', { text: data.text });
  },

  updateTodo(todoId, data){
    console.log(todoId, data);
    return axios.put(`/api/todos/${todoId}/`, { ...data });
  },

  deleteTodo(todoId){
    return axios.delete(`/api/todos/${todoId}/`);
  }
};

export default api;
