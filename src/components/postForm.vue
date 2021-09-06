<template>

    <form @submit.prevent="submit">
        <input type="number" placeholder="Введите данные" v-model="title">
        <button type="submit">Create Post</button>
    </form>

</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
    data(){
        return {
            title: ''
        }
    },
    methods:{
        ...mapActions(['fetchPosts']),
        submit(){
            this.fetchPosts({
                title: (this.title * 12) * 0.13,
                id: Date.now(),
                
            });
            this.title = "";
        }
    }
}
</script>

<style>
input{
    display: block;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 10px;
    margin-bottom: 10px;
    margin: 0 auto;
    margin-top: 10px;
}
</style>

