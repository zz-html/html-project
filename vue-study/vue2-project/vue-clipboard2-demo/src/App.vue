<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <button @click="copyUrl">复制</button>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";


export default {
  name: "App",
  components: {
    //HelloWorld,
  },
  methods: { 
    copyUrl(){
      if(navigator.clipboard){
        navigator.clipboard.writeText("11111")
        .then(() => {
          alert("链接已成功复制到剪贴板");
        })
        .catch((err) => {
          alert("复制链接失败:",err);
        });
      }else{
        alert("不支持复制");
      }
    },     
  }    
};
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
</style>
