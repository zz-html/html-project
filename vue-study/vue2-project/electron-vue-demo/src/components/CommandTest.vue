<template>
  <div class="hello2">
    <div>
      <el-button @click="action='request_language'">request_language</el-button>
      <el-button @click="action='restart'">restart</el-button>
      <el-button @click="action='shutdown'">shutdown</el-button>
      <el-button @click="action='sleep_now'">sleep_now</el-button>
    </div>    
    <div>
      <input v-model="action" placeholder="请输入内容" />
      <el-button @click="sockettest">发送指令</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      dialogVisible: false,
      action:"request_language",
    };
  },
  mounted() {
    this.$websocket.setCallbackFunction(this.socketCallback);
  },
  methods: {
    sockettest(){
      var timestamp = Date.now();
      //var data = {module:"shine",action:"request_software_version",timestamp:timestamp,url:"request_software_version_"+timestamp};
      var data = {module:"shine",action:this.action,timestamp:timestamp,url:"reboot_"+timestamp};//reboot restart
      var str = JSON.stringify(data);
      this.$websocket.webSocketSend(str);
    },
    socketCallback(data){
      console.log("socketCallbackxxxx",data);
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1 {
  font-size:48px;
}
.class32 {
  font-size:32px;
}
.class16 {
  font-size:16px;
}
.class8 {
  font-size:8px;
}
.class4 {
  font-size:4px;
}
.class2 {
  font-size:2px;
}
</style>
