<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import mqtt from "mqtt";

// var vuemqtt1 = "wss://bz.ixff.tech:443/mqtt";
var vuemqtt2 = "wss://rjuclass.ruijie.com.cn:443/mqtt";
//vuemqtt2 = "ws://sub.zhost.top:80/mqtt";//sub.zhost.top 106.12.75.178
vuemqtt2 = "mqtt://rjuclass.ruijie.com.cn:1883";
//vuemqtt2 = "ws://rjuclass.ruijie.com.cn:80/mqtt";
//vuemqtt2 = "wss://172.30.232.110:443/mqtt";
// var option1 = {
//   username: "token_uclass_teacherweb",
//   password:
//     "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiYXBwVHlwZVwiOlwiYXBwLXRlYWNoZXJ3ZWJcIn0iLCJleHAiOjE2NDMwMDY5NTV9.SKetsrXf6-eWvfcilLm-w68fxcKjnUNq35Rvivdsau0",
//   clientId: "teacherweb_userid:35490_0",
//   clean: false, // 设置为 false 以在离线时接收 QoS 1 和 2 消息
//   //reconnectPeriod: 3000, // mqtt断开后3000毫秒重新连接一次 设置为0则不重新连接 默认为1000毫秒
//   reconnectPeriod: 0,
//   keepalive: 160, // 默认60秒（60s内无消息将会自动断开），设置0为禁用F
// };
var option2 = {
  username: "admin",
  password: "ruijie123",
  clientId: "zzzz-test"+Date.parse(new Date()),
  clean: false, // 设置为 false 以在离线时接收 QoS 1 和 2 消息
  //reconnectPeriod: 3000, // mqtt断开后3000毫秒重新连接一次 设置为0则不重新连接 默认为1000毫秒
  reconnectPeriod: 3000,
  keepalive: 10, // 默认60秒（60s内无消息将会自动断开），设置0为禁用F
};
var client = mqtt.connect(vuemqtt2, option2);
client.on("connect", (e) => {
  var myDate=new Date();
  console.log(myDate," mqtt连接" + vuemqtt2 + "成功" + e);
  client.subscribe("testtopic", { qos : 2});
  console.log('subsribe success');
});
client.on("message", (topic, message) => {
  console.log("util/mqtt收到消息,topic:" + topic + "," + message);
});
client.on("disconnect", (e) => {
  console.log("mqtt disconnect，开始重连" + e);
});
client.on("close", function () {
  var myDate=new Date();
  console.log(myDate,"mqtt close，开始重连");
  // client.reconnect();
});
client.on("reconnect", (e) => {
  console.log("reconnect事件触发，mqtt开始自动重连..." + e);
});
client.on("error", function (error) {
  console.log("error:" + error);
});

export default {
  name: "App",
  components: {
    HelloWorld,
  },
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
