<template>
    <div class="Grad-bg position-relative">
        <div class="Certificate position-absolute top-50 start-50 translate-middle">
            <div id="chart3" class="Certificate-content position-relative">
                <div class="position-absolute bg-white" style="top:5%;left:50%;z-index: 10; transform: translate(-50%, -50%);">
                    <img src="../assets/img/image-logo.png" alt="">
                </div>
                <img class="position-absolute" style="top:43px;left: 50px;" src="../assets/img/主角1-grad.png" alt="">
                <div class="Certificate-detail">
                    <p>結業證書</p>
                    <p>ooo君</p>
                    <p>於111年11月OO日參加六角學院<br>Scrum 新手培訓營，經測驗合格，<br>特發給結業證書以資證明。</p>
                </div>
                <div class="president d-flex justify-content-center align-items-center">
                    <p class="mb-0 me-3">校長</p>
                    <img src="../assets/img/廖洧杰.png" alt="">
                </div>
                <div class="company w-100 position-absolute bottom-0 start-0">
                    <p class="mb-0">六角學院波利馬資訊科技有限公司</p>
                    <p>中華民國111年11月11日</p>
                </div>
            </div>
        </div>
        <div class="w-100 position-absolute bottom-0 start-0 d-flex justify-content-around align-items-end">
            <div>
                <img class="me-4" src="../assets/img/職員1-grad.png" alt="">
                <img src="../assets/img/職員3-grad.png" alt="">
            </div>
            <div>
                <img class="me-4" src="../assets/img/職員2-grad.png" alt="">
                <img src="../assets/img/職員4-grad.png" alt="">
            </div>
        </div>
        <button @click="toImage" type="button" class="btn btn-primary position-absolute top-0 end-0">我完成了</button>
    </div>
</template>

<script>
/* eslint-disable */
import html2canvas from 'html2canvas'
export default {
  methods: {
    toImage () {
      html2canvas(document.getElementById('chart3')).then(function(canvas) {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = '畢業證書.jpg';
        a.click();
      })
    }
  }
}
</script>

<style>
.Grad-bg{
    background-image: url('../assets/img/工作區域.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:cover;
    overflow: hidden;
    height: 100vh;
    padding-top: 100px;
}
.Certificate{
    width: 705px;
    height: 95vh;
    padding: 28px 31px;
    background-color: #FFFFFF;
    border-radius: 30px;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
}
.Certificate-content{
    width: 100%;
    height: 100%;
    font-size: 32px;
    border: 11px solid #FFF8BA;
}
.president{
    font-size: 32px;
}
.Certificate-detail{
    margin-top: 96px;
    font-size: 32px;
}
</style>
