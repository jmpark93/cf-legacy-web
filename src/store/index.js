import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },

  mutations: {

    GET_ALL(state, todos) {
      state.todos = todos;
    },

    ADD_TODO(state, value) {
      state.todos.push( value );
    },

    REMOVE_TODO(state, todoId) {
      const index = state.todos.findIndex ( todo => {
        return todo.id === todoId;
      } );

      state.todos.splice(index, 1);
    },

    CLEAR_ALL(state) {
      state.todos = [];
    }, 

    UPDATE_TODO(state, value) {
      const index = state.todos.findIndex ( todo => {
        return todo.id === value.id;
      } );

      state.todos[index] = value;
    }

  },

  actions: {

    getAll( { commit } ) {
      // curl -X GET "http://legtodo.kpaasta.io/api/todos" -H "accept: application/json"

      axios.get('/todos').then( response => {
        commit( 'GET_ALL', response.data._embedded.todos );
      });

    },

    addTodo( { commit }, value ) {
      // curl -X POST "http://legtodo.kpaasta.io/api/todos" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"done\": true, \"todoItem\": \"ASDFASDf\"}"

      let todoItem = {
        todoItem: value,
        done: false
      };

      axios.post('/todos', todoItem).then( response => {
        commit( 'ADD_TODO', response.data);
      });

    },

    removeTodo( { commit }, todoId ) {
      // curl -X DELETE "http://legtodo.kpaasta.io/api/todos/0" -H "accept: */*"

      axios.delete('/todos/' + todoId).then( response => {
        commit( 'REMOVE_TODO', todoId );
      });

    },

    updateTodo( { commit }, value ) {
      // curl -X PATCH "http://legtodo.kpaasta.io/api/todos/1" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"done\": false, \"id\": 1, \"todoItem\": \"string}"

      axios.patch('/todos/' + value.id, value ).then( response => {
        commit( 'UPDATE_TODO', response.data );
      });

    },

    clearAll( { commit } ) {
      // curl -X DELETE "http://legtodo.kpaasta.io/api/todos/all" -H "accept: */*"

      axios.delete('/todos/all').then( response => {
        commit( 'CLEAR_ALL' );
      });

    }
  },

  getters: {
    numberOfComplete: state => {
      return state.todos.filter( todo => todo.checked ).length;
    }
  },

  modules: {
  }
})

