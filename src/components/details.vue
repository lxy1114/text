<template>
  <div class="container" :style="'background:'+form.bg+';font-size:'+form.font" @click="show = true" @touchStart="touchStart" @touchMove="touchMove">
    <div class="top">
      <img class="nav-back" src="../../static/images/back.png" @click="goBack"/>
    </div>
    <!-- <input type="button" value="导入" id="fileImport" v-on:click="clickLoad" style="background: green; height: 20px; width: 100px; font-size: 28px;">
    <input type="file" id="files" ref="refFile" style="display: none" v-on:change="fileLoad"> -->
    <div class="text" v-html="content" :style="form.bg == '#333333' ? 'color: #ffffff;' : '#333333'"></div>
    <div class="footer" v-if="show">
      <div class="footer-list" v-if="!submenu" @click="submenu = true">
        <img class="footer-list-icon" src="../../static/images/set.png"/>
        <span class="footer-list-text">设置</span>
      </div>
      <div class="footerCon" v-if="submenu">
        <div class="footerCon-list">
          <span class="footerCon-list-title">背景颜色</span>
          <span class="footerCon-list-bg" v-for="(item,index) in bgList" :key="index" :style="'background:'+item" @click="getSet(item,'bg')"></span>
        </div>
        <div class="footerCon-list">
          <span class="footerCon-list-title">字体大小</span>
          <span class="footerCon-list-text" v-for="(item,index) in fontsizeList" :key="index" @click="getSet(item,'font')" :style="item.font == form.font ? 'color: #333333;font-size: 16px;' : 'color: #666666;;font-size: 14px;'">{{item.text}}</span>
        </div>
      </div>
    </div>
    <!-- <swiper>
      <swiper-slide class="swiper-slide" v-for="(item,index) in swiperList" :key="index">{{item}}</swiper-slide>
    </swiper> -->
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      text: '',
      bgList: ['#FFF0F5','#F8F8FF','#F0F8FF','#F0FFFF','#F5FFFA','#F0FFF0','#FFFFE0','#FFF8DC','#FDF5E6','#FFEFD5','#FAF0E6','#FFF5EE','#FFE4E1','#F5F5F5','#DCDCDC','#333333'],
      fontsizeList: [{text: '12',font: '12px'},{text: '14',font: '14px'},{text: '16',font: '16px'},{text: '18',font: '18px'},{text: '20',font: '20px'},{text: '22',font: '22px'}],
      submenu: false,
      form: {
        bg: '',
        font: '16px',
      },
      content: '',
      show: false,
      swiperList: ['1','2','3']
    }
  },
  methods: {
    touchStart(e) {
      console.log(e,1)
    },
    touchMove(e) {
      console.log(e,2)
    },
    getSet(item,type) {
      this.form.bg = type == 'bg' ? item : this.form.bg
      this.form.font = type == 'font' ? item.font : this.form.font
      this.show = false
      console.log(this.show)
    },
    goBack() {
      this.$router.go(-1)
    },
  },
  created() {
    this.content = localStorage.getItem('content')
  },
}
</script>

<style scoped>
.container{
  width: 100%;
  min-height: 100vh;
  overflow: scroll;
}
.top{
  display: flex;
  align-items: center;
  padding: 0px 15px;
  width: 100%;
  height: 30px;
  background: #FFFFFF;
  position: fixed;
}
.nav-back{
  width: 16px;
  height: 16px;
}
.text{
  white-space: pre-wrap;
  text-align: justify;
  /* font-size: 16px; */
  text-indent: 32px;
  line-height: 20px;
  padding: 15px;
  margin-top: 30px;
}
.footer{
  width: 100%;
  padding: 10px 0px;
  background: #FFFFFF;
  position: fixed;
  bottom: 0px;
  left: 0px;
  color: #666666;
  font-size: 14px;
}
.footer-list{
  display: inline-block;
  text-align: center;
}
.footer-list-icon{
  width: 25px;
  height: 25px;
  margin-bottom: 2px;
}
.footer-list-text{
  display: block;
}
.footerCon-list{
  display: flex;
  align-items: center;
  text-align: left;
  max-width: 100%;
  overflow: scroll;
  margin-bottom: 10px;
  padding: 0px 15px;
}
.footerCon-list-text{
  flex: none;
}
.footerCon-list-title{
  flex: none;
}
.footerCon-list-bg{
  display: inline-block;
  width: 40px;
  height: 50px;
  margin-left: 10px;
  flex: none;
}
.footerCon-list-text{
  display: inline-block;
  width: 30px;
  text-align: center;
  margin-left: 5px;
}
</style>
