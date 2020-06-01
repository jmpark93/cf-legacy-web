<template>
    <div>
        <b-button variant="outline-danger" @click="clearTodo"> Clear All </b-button>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo() {
            // this.$store.commit( 'CLEAR_ALL');
            this.$store.dispatch( 'clearAll');
        }
    }
}
</script>
