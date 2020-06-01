import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },

  mutations: {
    // GET_ALL(state, todos) {
    //   state.todos = todos;
    // },

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

    UPDATE_TODO(state, {id, checked}) {
      const index = state.todos.findIndex ( todo => {
        return todo.id === id;
      } );

      state.todos[index].checked = checked;
    }

  },
  actions: {

    getAll( { commit } ) {
      // axios.get( https://localhost:8080/api/ ).then( res => {
      //   commit( 'GET_ALL', res.data );
      // });
      this.state.todos = [];

      if(localStorage.length > 0) {
        for(var i = 0; i < localStorage.length; i++) {

          let key = localStorage.key(i);
          if( key.startsWith("todo:")) {

            let value = JSON.parse(localStorage.getItem( key ));
            this.state.todos.push( value );
          }
        }
      }
    },

    addTodo( { commit }, value ) {

      let todoItem = {
        id: Math.random(),
        text: value,
        checked: false
      };

      localStorage.setItem("todo:" + todoItem.id, JSON.stringify(todoItem));

      commit( 'ADD_TODO', todoItem );
    },

    removeTodo( { commit }, value ) {

      localStorage.removeItem( "todo:" + value );

      commit( 'REMOVE_TODO', value );
    },

    clearAll( { commit } ) {

      if(localStorage.length > 0) {
        for(var i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          if( key.startsWith("todo:") ) {
            localStorage.removeItem( key );
          }
        }
      }

      commit( 'CLEAR_ALL' );
    },

    updateTodo( { commit }, {id, checked} ) {

      let value = JSON.parse(localStorage.getItem( "todo:" + id));
      value.checked = checked;

      localStorage.setItem("todo:" + id, JSON.stringify(value));

      commit( 'UPDATE_TODO', {id, checked} );
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

