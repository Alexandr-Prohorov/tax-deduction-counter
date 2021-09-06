<template>
    <div class="background" v-bind:class="{ active: isActive}">
        <button class="btn" @click="closeBackground"><p>Рассчет</p></button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isActive: false,
        }
    },
    methods: {
        closeBackground(){
            this.isActive = true;
            
        }
    }
}
</script>

<style>
.background{
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56
}
.btn{
  position: relative;
  margin: 0 auto;
  
  z-index: 1000;
  width: 198px;
  height: 56px;
  cursor: pointer;
}
.active{
  display: none;
}
</style>