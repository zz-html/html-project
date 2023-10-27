<template>
  <div id="app">
    <!-- <img class="imgLogo" alt="Vue logo" src="./assets/logo.png"> -->
    <div class="testNav">
      导航
      <br/>
      <router-link to="/DeployPage">DeployPage</router-link>
      <br/>
      <router-link to="/CommandTest">指令测试</router-link>
      <br/>
      <router-link to="/HelloWorld">elementui</router-link>
    </div>
    <router-view/>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
html {
  
}
body {
  cursor: auto;
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.imgLogo{
  height: 200px;
  width: 200px;
}
.testNav{
  background: burlywood;
  position: absolute;
}
</style>
