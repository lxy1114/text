<template>
  <div class="container">
    <div class="top">
      <!-- <img class="nav-back" src="../../static/images/back.png" @click="goBack"/> -->
      <div class="edit" @click="ifDelete = !ifDelete">{{ifDelete ? '完成' : '编辑'}}</div>
      <img class="nav-icon" src="../../static/images/nav.png" @click="navShow = true"/>
      <div class="top-button" v-if="navShow">
        <div class="but-list">
          <input type="button" value="导入" id="fileImport" v-on:click="clickLoad" class="upload">
          <input type="file" id="files" ref="refFile" v-on:change="fileLoad" multiple v-for="(item,index) in inputList" :key="index" v-if="index == inputList.length-1">
        </div>
      </div>
    </div>
    <div class="con" @mousedown="down" @mousemove="move">
      <div class="list1" v-for="(item,index) in list" :key="index" @click="goDetails(item)">
        <div class="cover" :style="item.cover ? 'background-image:url('+item.cover+')' : 'background-images:url(./static/images/cover.jpg)'">
          <!-- <img class="cover-img" :src="cover"/> -->
          <input type="file" class="cover-upload" id="cover" ref="refCover" @change="coverLoad(item)" @click.stop="stop" v-if="!item.cover">
        </div>
        <span class="list-name">{{item.name}}</span>
        <span class="delete" v-if="ifDelete" @click.stop="getDelete(index)">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'index',
  watch: {
    coverNum() {
      localStorage.setItem('list',JSON.stringify(this.list))
    },
  },
  data () {
    return {
      list: [],
      navShow: false,
      inputList: [''],
      cover: '',
      coverNum: 0,
      ifDelete: false
    }
  },
  methods: {
    getData() {
      this.$axios.post('https://www.apiopen.top/novelApi').then((res) => {
        console.log(res,'数据')
      })
    },
    clickLoad() {
      // 下面三种方法实现效果一样
      //方法一: 原生html
      // document.getElementById('files').click();
      // 方法二: jquery实现
      // $("#files").click();
      //方法三:Vue实现
      this.$refs.refFile.dispatchEvent(new MouseEvent('click'))
    },
    fileLoad() {
      var that = this
      //获取读取的文件File对象 下面两种方法实现效果一样
      //方法一:原生html获取
      // const selectedFile = document.getElementById('files').files[0];
      //方法二:Vue实现
      const selectedFile = this.$refs.refFile[0].files;
      for(var i in selectedFile){
        if(i == 'length') return
        var name = selectedFile[i].name; //选中文件的文件名
        var size = selectedFile[i].size; //选中文件的大小
        var reader = new FileReader();
        reader.readAsText(selectedFile[i],'gb2312');
        reader.onload = function() {
          that.text = this.result
          var obj = {}
          name = name.split('.')
          name.splice(-1,1)
          obj.name = name[0]
          obj.content = that.text
          that.list.push(obj)
          that.navShow = false
          localStorage.setItem('list',JSON.stringify(that.list))
        }
      }
    },
    stop() {

    },
    coverLoad(item) {
      var that = this
      var file = this.$refs.refCover[0].files
      var reader = new FileReader();
      reader.readAsDataURL(file[0]);
      //监听文件读取结束后事件
      reader.onloadend = function (e) {
        item.cover = e.target.result    //e.target.result就是最后的路径地址
        that.coverNum ++
        console.log(item,'item')
        console.log(item.cover,'cover')
      };
    },
    goDetails(item) {
      localStorage.setItem('content',item.content)
      this.$router.push('/details')
    },
    down(e) {
      console.log(e)
    },
    move(e) {
      console.log(e)
    },
    goBack() {

    },
    getDelete(index) {
      this.list.splice(index,1)
      this.coverNum --
    },
  },
  created() {
    this.list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [],
    console.log(this.list)
    // this.getData()
  },
}
</script>

<style scoped>
.container{
  width: 100%;
}
.top{
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  background: #FFFFFF;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
}
.nav-icon,.nav-back{
  width: 25px;
  height: 25px;
  position: absolute;
  right: 15px;
  top: 10px;
}
.nav-back{
  width: 16px;
  height: 16px;
  right: auto;
  left: 15px;
}
.top-button{
  margin-top: 50px;
  width: 100px;
  background: #FFFFFF;
  position: absolute;
  right: 0px;
  text-align: left;
  font-size: 14px;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0px 5px;
}
.upload{
  background: #FFFFFF;
  border-style: none;
  font-size: 15px;
}
.but-list{
  width: 100%;
  position: relative;
  height: 20px;
}
.upload,#files{
  position: absolute;
  top: 0px;
  left: 0px;
}
#files{
  opacity: 0;
}
.con{
  margin-top: 30px;
  padding: 15px 15px;
  text-align: left;
}
.list{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}
.list .cover{
  width: 50px;
  height: 50px;
  margin: 0px 10px 0px 0px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.list .cover-upload{
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
}
.list .delete{
  font-size: 14px;
  color: red;
  position: absolute;
  right: 15px;
}
.list1{
  display: inline-block;
  width: 47%;
  margin: 15px 10px 0px 0px;
  position: relative;
}
.list1 .delete{
  font-size: 14px;
  color: red;
  position: absolute;
  right: 5px;
  top: 5px;
}
.list1 .cover{
  display: block;
  width: 100%;
  height: 250px;
  margin: 0px 0px 10px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.list1 .cover-upload{
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
}
.list1 .list-name{
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
