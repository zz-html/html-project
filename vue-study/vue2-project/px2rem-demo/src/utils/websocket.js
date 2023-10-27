// import { showInfoMsg, showErrorMsg } from '@/utils/popInfo'
import ElementUI from 'element-ui';
var wsUri = "ws://172.20.124.152:18720/shine/socket";
var socket;
var callbackFunction;
// 关闭websiocket
function webSocketOnOpen(e) {
    console.log('webSocketOnOpen 已连接...',e)
    ElementUI.Notification({
        title: 'webSocket',
        message: "WebSocket已连接",
        type: 'success',
        duration: 0,
    });
}
function webSocketOnError(e) {
    ElementUI.Notification({
        title: '',
        message: "WebSocket连接发生错误" + e,
        type: 'error',
        duration: 0,
    });
}
function webSocketOnMessage(e) {
    //console.log("webSocketOnMessage",e);
    //const data = JSON.parse(e.data);
    //console.log("data",e.data);
    ElementUI.Notification({
        title: 'webSocket',
        message: e.data,
        type: 'info',
        duration: 3000,
    });
    if(callbackFunction!=null){
        callbackFunction(e.data);
    }
}
function websocketOnclose(e) {
    //console.log('连接已关闭...')
    ElementUI.Notification({
        title: '',
        message: "WebSocket连接已关闭" + e,
        type: 'error',
        duration: 0,
    }); 
    //重连
    console.log('websocket重连...')
    setTimeout(() => {
        initWebSocket();
    }, 3000);   
}
function initWebSocket() {
    //const wsUri = WS_API + "/webSocket/" + e;
    //const wsUri = "ws://172.20.122.155:18720/shine/socket";
    socket = new WebSocket(wsUri)//这里面的this都指向vue
    socket.onopen = webSocketOnOpen;
    socket.onerror = webSocketOnError;
    socket.onmessage = webSocketOnMessage;
    socket.onclose = websocketOnclose;
    console.log("initedWebSocket");
}
function close() {
    socket.close() // 关闭 websocket
}
function webSocketSend(agentData) {
    //console.log("webSocketSend",agentData);
    socket.send(agentData);
}
function setCallbackFunction(callback) {
    callbackFunction = callback;
}
export default {
    initWebSocket, close, webSocketSend, setCallbackFunction
}