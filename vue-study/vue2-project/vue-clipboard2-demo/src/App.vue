<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button type="button" @click="copyUrl">复制</button>
    <button type="button" @click="doCopy">Copy!</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  methods: {
    copyUrl(){
      if(navigator.clipboard){
        navigator.clipboard.writeText("test")
        .then(() => {
          alert("链接已成功复制到剪贴板");
        })
        .catch((err) => {
          alert("复制链接失败:", err);
        });
      }else{
        alert("不支持");
      }        
    }, 
    doCopy: function () {
      this.$copyText("test2").then(function (e) {
        alert('Copied')
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
    }
  
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
</style>
