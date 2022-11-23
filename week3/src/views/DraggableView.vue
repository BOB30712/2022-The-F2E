<template>
    <div class="dropContainer">
        <div class="candidate container">
            <p class="draggle" data-id="1">會員系統(登入、註冊、權限管理)</p>
            <p class="draggle" draggable="true" data-id="2">應徵者的線上履歷編輯器</p>
            <p class="draggle" draggable="true" data-id="3">前台職缺列表</p>
        </div>
        <div class="container">
            <p class="mb-0 pb-0">優先度高</p>
            <div class="productBacklog"></div>
            <p>優先度低</p>
        </div>
    </div>
    <h2 v-if="ans">成功</h2>
    <h2>當前總點數{{totalScore}}</h2>
</template>

<script>
/* eslint-disable */
import Sortable from 'sortablejs'
export default {
  data (){
    return {
      ansArray:['2','3'],
      dataArray:[],
      ans:false,
      totalScore:0
    }
  },
  methods: {
    isEqual(arr1,arr2){
        if(arr1.join('')==arr2.join('')){
            this.ans = true
        }else{
            this.ans = false
        }
    }
  },
  mounted () {
    /*
    const candidate = document.querySelector('.candidate')
    const productBacklog = document.querySelector('.productBacklog')
    let dragging = null
    candidate.addEventListener('dragstart', (event) => {
      dragging = event.target
      console.log(dragging)
      console.log('拖一開始')
    })
    candidate.addEventListener('dragend', () => {
      console.log('拖一結束')
    })
    productBacklog.addEventListener('dragover', () => {
      productBacklog.appendChild(dragging)
    })
    */
    const candidateDOM = document.querySelector(".candidate");
    const productBacklogDOM = document.querySelector(".productBacklog");
    var candidate = Sortable.create(candidateDOM, {
    group: "shart",
    animation: 500,
    onEnd: (event) => {
      let score =  productBacklog.toArray()
      this.totalScore = 0
      score.forEach((e)=>{
          this.totalScore = this.totalScore + parseInt(e)
      })
    }
    });
    var productBacklog = Sortable.create(productBacklogDOM, {
    group: "shart",
    dataIdAttr: 'data-id',
    onChange: (e) => {
        let order = productBacklog.toArray()
        this.dataArray = order
        this.isEqual(this.dataArray,this.ansArray)
        /*
        let score = productBacklog.toArray()
        score.forEach((e)=>{
            this.totalScore = this.totalScore + e
        })
        */
    },
    onEnd: (event) => {
      let score =  productBacklog.toArray()
      this.totalScore = 0
      score.forEach((e)=>{
          this.totalScore = this.totalScore + parseInt(e)
      })
    }
    })
  }
}
</script>

<style>
*{
    outline: 1px solid black;
}
p{
    font-size: 40px;
}
.dropContainer{
    display: flex;
    justify-content: space-between;
}
.container{
    padding: 40px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.draggle{
    background-color: aqua;
}
.productBacklog{
    height: 300px;
}
</style>
