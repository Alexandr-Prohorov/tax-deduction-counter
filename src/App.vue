<template>
  <div id="app">
    <div class="content">
      <prewiev />
      <div class="form">
        <div class="title" align="left"><h1>Налоговый вычет</h1></div>
        <div class="close">+</div>
        <div class="subtitle" align="left"><p>Используйте налоговый вычет чтобы погасить ипотеку досрочно. 
          Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p></div>
        <postForm />
        <hr>
        <h1>{{POSTS_COUNT}}</h1>
        <div class="post" v-for="post in VALID_POSTS" :key="post.id">
          <h2>{{post.title}}</h2>
          <p>{{post.body}}</p>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import postForm from './components/postForm.vue';
import prewiev from './components/prewiev.vue'
export default {
  name: 'App',
  computed: mapGetters(['VALID_POSTS', 'POSTS_COUNT']),
  methods: mapActions(['fetchPosts']),
  components: {
    postForm,
    prewiev
    },
  async mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
#app {
  @import url('http://fonts.cdnfonts.com/css/lab-grotesque');
  font-family: 'Lab Grotesque', sans-serif;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

}
.content{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
  display: flex;
}
.post{
  border-radius: 5px;
  margin-bottom: 1rem;
}
.form{
    background: #FFFFFF;
    border-radius: 30px;
    width: 100%;
    padding: 32px;
}
.title{
  font-family: Lab Grotesque;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
}
.subtitle{
  font-family: Lab Grotesque;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #808080;
}
.close{
  
  font-size: 34px;
  color: #EA0029;
  right: 0;
  top: 0;

}
</style>
