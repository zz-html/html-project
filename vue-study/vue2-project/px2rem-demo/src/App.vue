<template>
  <div id="app">
    <img class="imgLogo" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    this.setRem();
    window.onresize = () => {
      return (() => {
        this.setRem();
      })()
    };
    this.$websocket.initWebSocket();
    
  },  
  methods: {
    setRem() {
      var baseWidth = 1920;//设计目标宽度
      //const dpr = window.devicePixelRatio;
      var currentWidth = document.documentElement.clientWidth || document.body.clientWidth;
      // if(currentWidth <= 1200){
      //   currentWidth = 1200;
      // }
      console.log("currentWidth",currentWidth);
      let scale = currentWidth / baseWidth;
      console.log("scale",scale);
      document.documentElement.style.fontSize = 16*scale + 'px';
      
      //document.documentElement.setAttribute('data-dpr', `${dpr}`);      
    },    
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.imgLogo{
  height: 200px;
  width: 200px;
}
</style>
