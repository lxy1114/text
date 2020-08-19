<template>
  <div>

  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'prac',
  data () {
    return {

    }
  },
  methods: {
    getNum(a,b,...c){
      console.log(a,'a')
      console.log(b,'b')
      console.log(c,'c')
    }
  },
  created() {
    // let arr = [['一','二'],['三','四']]
    // for(let [a,b] of arr){
    //   console.log(a)
    //   // console.log(b)
    // }
    // let obj = {
    //   aa: 1,
    //   bb:2,
    //   cc: 3
    // }
    // let {aa: a,bb: b,cc: c} = obj
    // // console.log(aa,'aa')
    // // console.log(bb,'bb')
    // // console.log(cc,'cc')
    // console.log(a,'a')
    // console.log(b,'b')
    // console.log(c,'c')
    // a = 5
    // console.log(a,'a')
    // let arr = [{a: 1,b: 2,c: 3},{a: 4,b: 5,c: 6}]
    // for(let {a: aa,b: bb,c : cc} of arr){
    //   console.log(aa,'a')
    //   console.log(bb,'b')
    //   console.log(cc,'c')
    // }
    // let arr = [{a: 1,b: 2},{c: 3,d: 4}]
    // console.log(...arr)
    // let fun = (a,b,...c) => {
    //   console.log(a,'a')
    //   console.log(b,'b')
    //   console.log(c,'c')
    // }
    // fun(1,2,3,4,5)
    // this.getNum(1,2,3,4,5)
    // let fun = () => 1
    // console.log(fun())
    // const fun = {
    //   num:10,
    //   numFun:function(){
    //     console.log(this.num,1)
    //     let fun1 = function(){
    //       console.log(2)
    //       let fun2 = function() {
    //         console.log(this.num,3)
    //       }
    //       fun2()
    //     }
    //     fun1()
    //   }
    // }
    // fun.numFun()
    // var num;
    // const fun = {
    //   num: 10,
    //   numFun: function(){
    //     console.log(num,1)
    //     let fun1 = () => {
    //       console.log(this.num,2)
    //       let fun2 = () => {
    //         console.log(this.num,3)
    //       }
    //       fun2()
    //     }
    //     fun1()
    //   }
    // }
    // fun.numFun()
    // let set = new Set()
    // let arr = [3,4,5,6,7]
    // arr.forEach(x=>set.add(x))
    // // console.log(set)
    // // console.log(typeof set)
    // // for(var a of set){
    // //   console.log(a,'a')
    // //   console.log(set[a],'set[a]')
    // //   // for(var b of set[a]){
    // //   //   console.log(b,'b')
    // //   //   console.log(set[a][b],'set[a][b]')
    // //   // }
    // // }
    // console.log(set)
    // set.forEach((item) =>{
    //   console.log(item)
    // })
    // let map = new Map([
    //   ['a', 1],
    //   ['b', 2]
    // ])
    // // map.add(['c',3],['d',4])
    // // console.log(map)
    // console.log(map.clear())
    // // map.set('c',5)
    // // console.log(map)
    // // map.forEach((item,index) => {
    // //   console.log(index,item)
    // // })
    // let map = new Map([
    //   ['a',[['a',1],['a',2]]],
    //   ['c',3]
    // ])
    // // console.log(map)
    // let [[a,c]] = map
    // console.log(a,'a')
    // console.log(c,'c')
    // console.log(...a,'...a')
    // console.log(...c,'...c')
    // // console.log(...map)
    // // map.forEach((item,index) =>{
    // //   console.log(index,item)
    // // })
    // // for(let a of map){
    // //   console.log(a,map[a])
    // // }
    let map = new Map([
      ['a',[
        ['b',5],
        ['c',2],
        ['d',3]
      ]]
    ])
    // console.log(map)
    // console.log(map.get('a')[0][1])
    // var arr = map.get('a')[0]
    // arr.forEach((item,index) => {
    //   console.log(index,item)
    // })
    map.get('a').sort((item,index) => {
      console.log(index,item)
    })
  },
}
</script>

<style scoped>

</style>
