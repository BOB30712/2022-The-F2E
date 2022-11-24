<template>
    <div class="smalltest-bg position-relative d-flex justify-content-center align-items-center">
        <div class="dialog">
            <p>哈囉~小菜。</p>
            <p>我是開發 A 組的 PO，小敏。</p>
            <p>PO也就是<span class="accent-color">產品負責人(Product Owner)。</span></p>
            <p>產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(Product Backlog)唷！</p>
            <p>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，<span class="accent-color">來試試看調整產品優先度，排出產品待辦清單吧！</span></p>
            <div class="d-flex justify-content-end">
                <button @click.prevent="test" type="button" class="btn btn-primary">開始試煉</button>
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
import modal from '@/components/TestModal.vue'
import { gsap } from 'gsap'
export default {
  components: {
    modal
  },
  methods: {
    test () {
      gsap.to('.bg-test', { display: 'block', duration: 2 })
      gsap.to('.emp2-1', { 'z-index': '50', duration: 2 })
      /*
      const Component = this.$refs.testmodal
      Component.show()
      */
    }
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
}
.dialog{
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
