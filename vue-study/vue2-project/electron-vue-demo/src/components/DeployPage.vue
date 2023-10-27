<template>
  <div class="deploy-page">
<!-- <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->
    <div class="test-bar">
      <el-button @click="setStep(1)"  type="primary">测试</el-button>
     
      <button>test</button>
    </div>
    
    <div class="deploy-main">
      <div v-show="!configStepShow" class="container">
        <div class="left">
          <div>
            <div class="moc-title1">新功能</div>
            <div class="moc-title2">镜像部署  高效运维</div>
          </div>
          <div>
            <el-button type="primary" size="medium" class="moc-btn1">开始设置镜像功能</el-button>
            <el-button type="text" size="medium" class="moc-btn2">跳过，暂不使用</el-button>
          </div>
        </div>
        <div class="right">

        </div>
      </div>

      <div v-show="configStepShow" class="networkConfig">
        111
      </div>
    </div>
    <div height="108px" class="deploy-footer">
      <div></div>
      <div>
        <!-- <svg class="moc-button" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 16C0 7.16344 7.16344 0 16 0H44C52.8366 0 60 7.16344 60 16V44C60 52.8366 52.8366 60 44 60H16C7.16344 60 0 52.8366 0 44V16Z" fill="#464646"/>
          <path d="M30 45.75C21.3 45.75 14.25 38.775 14.25 30.15C14.25 26.325 15.675 22.725 18.225 19.875C18.9 19.05 19.725 18.375 20.625 17.7C21.15 17.325 21.675 16.95 22.2 16.65C22.95 16.275 23.85 16.5 24.225 17.175C24.6 17.925 24.375 18.825 23.7 19.2C23.25 19.425 22.8 19.725 22.425 20.025C21.675 20.625 21 21.225 20.4 21.9C18.375 24.15 17.25 27.15 17.25 30.15C17.25 37.125 22.95 42.75 30 42.75C37.05 42.75 42.75 37.125 42.75 30.15C42.75 27.075 41.625 24.15 39.6 21.825C39 21.15 38.4 20.625 37.725 20.1C37.35 19.8 36.9 19.5 36.45 19.275C35.7 18.9 35.475 17.925 35.925 17.25C36.3 16.5 37.275 16.275 37.95 16.725C38.475 17.025 39 17.4 39.525 17.775C40.35 18.375 41.175 19.125 41.85 19.95C44.4 22.8 45.825 26.475 45.825 30.225C45.75 38.775 38.7 45.75 30 45.75Z" fill="white"/>
          <path d="M30 45.75C21.3 45.75 14.25 38.775 14.25 30.15C14.25 26.325 15.675 22.725 18.225 19.875C18.9 19.05 19.725 18.375 20.625 17.7C21.15 17.325 21.675 16.95 22.2 16.65C22.95 16.275 23.85 16.5 24.225 17.175C24.6 17.925 24.375 18.825 23.7 19.2C23.25 19.425 22.8 19.725 22.425 20.025C21.675 20.625 21 21.225 20.4 21.9C18.375 24.15 17.25 27.15 17.25 30.15C17.25 37.125 22.95 42.75 30 42.75C37.05 42.75 42.75 37.125 42.75 30.15C42.75 27.075 41.625 24.15 39.6 21.825C39 21.15 38.4 20.625 37.725 20.1C37.35 19.8 36.9 19.5 36.45 19.275C35.7 18.9 35.475 17.925 35.925 17.25C36.3 16.5 37.275 16.275 37.95 16.725C38.475 17.025 39 17.4 39.525 17.775C40.35 18.375 41.175 19.125 41.85 19.95C44.4 22.8 45.825 26.475 45.825 30.225C45.75 38.775 38.7 45.75 30 45.75Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30 13.5C30.825 13.5 31.5 14.175 31.5 15V30C31.5 30.825 30.825 31.5 30 31.5C29.175 31.5 28.5 30.825 28.5 30V15C28.5 14.175 29.175 13.5 30 13.5Z" fill="white"/>
        </svg> -->
        <el-button type="info" icon="el-icon-switch-button" class="closeBtn"></el-button>
        <div class="moc-button">test</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'deployPage',
  components: {

  },
  data() {
    return {
      configStepShow: false,
      configStep: 0,
      dialogVisible: true
    }
  },
  mounted() {
    
  },
  methods: {
    setStep:function(configStep) {
      this.configStep = configStep;
      if(this.configStep>0){
        this.configStepShow = true;
      }else{
        this.configStepShow = false;
      }
    },
  }
}
</script>

<style scoped>

</style>
