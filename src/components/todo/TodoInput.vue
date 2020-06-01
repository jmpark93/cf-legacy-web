<template>
    <div>
        <b-input-group prepend="TODO" class="mt-3">
            <b-form-input v-model="newTodoItem" placeholder="할일을 입력하세요 !!!" v-on:keyup.enter="addTodo">></b-form-input>
            <b-input-group-append>
                <b-button variant="success" @click="addTodo"> <b-icon icon=plus> </b-icon> </b-button>
            </b-input-group-append>
        </b-input-group>

        <b-modal id="warning-modal" title="Warning..." centered ok-only>
            <p class="my-4"> 할일을 먼저 입력하세요 !!! </p>
        </b-modal>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo() {
            if( this.newTodoItem !== "") {
                var value = this.newTodoItem && this.newTodoItem.trim();
                // this.$store.commit( 'ADD_TODO', value );
                this.$store.dispatch( 'addTodo', value );
                this.clearInput();
            } else {
                this.$bvModal.show('warning-modal');
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

