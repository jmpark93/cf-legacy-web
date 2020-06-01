<template>

  <div id="mainContainer">  
    <TodoHeader> </TodoHeader>

    <TodoInput> </TodoInput>

    <section>
        <transition-group name="list" tag="ul">
            <li v-for="todo in todos" :key="todo.id" class="shadow">
                <TodoItem :todo="todo"> </TodoItem>
            </li>
        </transition-group>
    </section>  

    <TodoFooter> </TodoFooter>
  </div>

</template>

<script>

import TodoHeader from "@/components/todo/TodoHeader.vue"
import TodoInput from "@/components/todo/TodoInput.vue"
import TodoItem from "@/components/todo/TodoItem.vue"
import TodoFooter from "@/components/todo/TodoFooter.vue"

import { mapState, mapActions } from "vuex";

export default {
    created() {
        this.getAll();
    },
    computed: {
        ...mapState([
            'todos'
        ])
    },
    methods: {
        // this.$store.dispatch( 'getAll' );
        ...mapActions([
            'getAll'
        ])
    },
    components: {
        'TodoHeader' : TodoHeader,
        'TodoInput' : TodoInput,
        'TodoItem' : TodoItem,
        'TodoFooter' : TodoFooter
    }
}
</script>

<style scoped>

#mainContainer {
    width: 90%;
    margin: 0 auto;
}

.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

</style>