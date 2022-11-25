<template>
    <div class="smalltest-bg position-relative d-flex flex-column align-items-center">
        <div class="dialog-dir">
            <p>哈囉~小菜。</p>
            <p>我是開發 A 組的 PO，小敏。</p>
            <p>PO也就是<span class="accent-color">產品負責人(Product Owner)。</span></p>
            <p>產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(Product Backlog)唷！</p>
            <p>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，<span class="accent-color">來試試看調整產品優先度，排出產品待辦清單吧！</span></p>
            <div class="d-flex justify-content-end">
                <button @click.prevent="test" type="button" class="btn btn-primary">開始試煉</button>
            </div>
        </div>
        <div class="dialog-topic mb-5">
            <p class="mb-0">請把需求放到產品待辦清單，並調整待辦的優先度順序。公司也推薦使用  來做任務的管理喔！</p>
        </div>
        <div class="dialog-exam position-relative">
            <p>產品待辦清單 ProductBacklog</p>
            <p>優先度高</p>
            <div style="height: 300px;top:50%;left: -30%;" class="candidate position-absolute  translate-middle">
                <div class="product text-nowrap d-flex align-items-center justify-content-center">會員系統（登入、註冊、管理)）</div>
                <div class="product text-nowrap d-flex align-items-center justify-content-center">後台職缺管理功能（資訊上架、下架、顯示應徵者資料）</div>
                <div class="product text-nowrap d-flex align-items-center justify-content-center">前台職缺列表（缺詳細內容、點選可發送應徵意願）</div>
                <div class="product text-nowrap d-flex align-items-center justify-content-center">應徵者的線上履歷編輯器</div>
            </div>
            <div style="height: 300px;" class="productBacklog d-flex flex-column justify-content-center align-items-center">
                <div :class="{'d-none':one>=5}" class="product2"></div>
                <div :class="{'d-none':one>=6}" class="product2"></div>
                <div :class="{'d-none':one>=7}" class="product2"></div>
                <div :class="{'d-none':one>=8}" class="product2"></div>
            </div>
            <p>優先度低</p>
            <div class="d-flex justify-content-center">
                <button @click="this.$router.push('/GradView')" type="button" class="btn btn-primary">我完成了</button>
            </div>
        </div>
        <img class="emp2-1 position-absolute" src="../assets/img/職員2-1.png" alt="">
        <div class="emp2-name position-absolute">
            <p class="mb-0">小敏</p>
        </div>
        <div class="bg-test position-absolute"></div>
    </div>
    <modal ref='testmodal'></modal>
</template>

<script>
/* eslint-disable */
import modal from '@/components/TestModal.vue'
import { gsap } from 'gsap'
import Sortable from 'sortablejs'
export default {
  data () {
    return {
      one:4
    }
  },
  components: {
    modal
  },
  methods: {
    test () {
      gsap.to('.dialog-dir', { yPercent: '-200', duration: 2 })
      gsap.to('.dialog-dir', { display: 'none', delay: 3 })
      gsap.to('.dialog-topic', { display: 'block', delay: 3.2 })
      gsap.to('.dialog-exam', { display: 'block', delay: 3.2 })
      // gsap.to('.bg-test', { display: 'block', duration: 2 })
      // gsap.to('.emp2-1', { 'z-index': '50', duration: 2 })
      /*
      const Component = this.$refs.testmodal
      Component.show()
      */
    }
  },
  mounted () {
    const candidateDOM = document.querySelector(".candidate");
    const productBacklogDOM = document.querySelector(".productBacklog")
    var candidate = Sortable.create(candidateDOM, {
        group: "shart"
    })
    var productBacklog = Sortable.create(productBacklogDOM, {
        group: "shart",
        onChange: () => {
          let order = productBacklog.toArray()
          console.log(order.length)
          this.one = order.length
        }
    })
  }
}
</script>

<style>
.bg-test{
    display: none;
    height: 100vh;
    width: 100%;
    top:0px;
    left: 0px;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);;
}
.accent-color{
    color: #FFAC89;
}
.smalltest-bg{
    background-image: url('../assets/img/工作區域.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:cover;
    overflow: hidden;
    height: 100vh;
    padding-top: 100px;
}
.dialog-dir{
    width: 1000px;
    height: 721px;
    background-color: white;
    border-radius: 30px;
    opacity: 0.95;
    padding: 80px 50px;
    text-align: start;
    font-size: 32px;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
}
.dialog-topic{
    display: none;
    width: 1300px;
    height: 140px;
    font-size: 24px;
    padding: 40px 137px 40px 140px;
    background-color: white;
    opacity: 0.95;
    border-radius: 30px;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
}
.dialog-exam{
    display: none;
    width: 688px;
    height: 874px;
    font-size: 24px;
    background-color: white;
    opacity: 0.95;
    border-radius: 30px;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
}
.product{
    border:1px solid #8E7E74;
    background-color: #D7FFAE;
    width: 600px;
    height: 76px;
    margin-bottom: 15px;
    font-size: 20px;
}
.product2{
    border:2px dashed #CFC8C4;
    background-color: white;
    width: 600px;
    height: 76px;
    margin-bottom: 15px;
    font-size: 20px;
}
.productBacklog{
    border: 1px solid black;
    width: 100%;
}
.emp2-name{
    bottom:35%;
    right:13%;
    z-index: 20px;
    background-color: white;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
    border-radius: 30px;
    padding: 10px 53px;
    font-size: 24px;

}
.emp2-1{
    bottom:0%;
    right:15%;
    z-index: 10;
}
</style>
