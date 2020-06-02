<template>
    <div class="mb-2 d-flex">
        <div class="vertCenteredContent"> 
            <b-form-checkbox v-model="todo.isDone" @change="updateTodo"> </b-form-checkbox>
        </div>
        <span class="flex-grow-1"
              :class="todo.isDone ? 'text-muted' : ''"
              :style="todo.isDone ? 'text-decoration: line-through': ''"
        >   
            {{ todo.todoItem }} 
        </span>
        <span class="removeBtn" type="button" @click="removeTodo">
            <b-icon icon=trash> </b-icon>
        </span>    
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateTodo(checked) {
            // this.$store.commit('UPDATE_TODO', {
            this.$store.dispatch('updateTodo', {
                id: this.todo.id,
                todoItem: this.todo.todoItem,
                isDone: checked
            })
        },
        removeTodo(e) {
            // this.$store.commit('REMOVE_TODO', this.todo.id);
            this.$store.dispatch('removeTodo', this.todo.id);
        }
    }    
}
</script>

<style scoped>

.removeBtn {
    margin-left: auto;
    color: #DE4343;
}

.vertCenteredContent {
  position:relative;
  top: 50%;
  padding:10px
}

</style>