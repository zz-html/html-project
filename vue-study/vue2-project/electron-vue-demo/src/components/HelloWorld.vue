<template>
  <div class="hello">
    <h1 class="h1">48px</h1>
    <h1 class="class32">32px</h1>
    <h1 class="class16">16px</h1>
    <h1 class="class8">8px</h1>
    <h1 class="class4">4px</h1>
    <h1 class="class2">2px</h1>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>    
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
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    };
  },
  mounted() {
    this.$websocket.setCallbackFunction(this.socketCallback);
  },
  methods: {
    handleClose(done) {
      this.dialogVisible = false;  
    },
    sockettest(){
      var timestamp = Date.now();
      //var data = {module:"shine",action:"request_software_version",timestamp:timestamp,url:"request_software_version_"+timestamp};
      var data = {module:"shine",action:this.action,timestamp:timestamp,url:"reboot_"+timestamp};//reboot restart
      var str = JSON.stringify(data);
      this.$websocket.webSocketSend(str);
    },
    socketCallback(data){
      console.log("socketCallbackzzzz",data);
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
