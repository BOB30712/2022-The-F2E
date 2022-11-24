<template>
    <div class="opening position-relative">
        <img class="emp1 position-absolute" src="../assets/img/職員1.png" alt="">
        <img class="emp2 position-absolute" src="../assets/img/職員2.png" alt="">
        <img class="emp3 position-absolute" src="../assets/img/職員3.png" alt="">
        <img class="emp4 position-absolute" src="../assets/img/職員4.png" alt="">
        <div class="title flex-column d-flex align-items-center">
            <div class="title2"></div>
            <img @click="moveoutEmp" src="../assets/img/任點擊開始.png" alt="">
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  methods: {
    moveoutEmp () {
      gsap.to('.emp1', { bottom: '-50%', duration: 2 })
      gsap.to('.emp2', { top: '-50%', duration: 2 })
      gsap.to('.emp3', { top: '-50%', duration: 2 })
      gsap.to('.emp4', { bottom: '-50%', duration: 2 })
      this.$router.push('/CastingView')
    }
  },
  mounted () {
    gsap.fromTo('.emp1', { left: '50%' }, { left: '5%', repeat: 2 })
  }
}
</script>

<style>
.opening{
    background-image: url('../assets/img/工作區域.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:cover;
    overflow: hidden;
    height: 100vh;
}
.title{
    text-align: center;
    margin-top:200px;
}
.title2{
    width: 1113px;
    height: 181px;
    background-image: url('../assets/img/標題.png');
    background-repeat: no-repeat;
}
.emp1{
    width: 35%;
    height: 65%;
    bottom:0%;
    left:5%;
}
.emp2{
    width: 15%;
    height: 35%;
    top:0%;
    left:0%;
}
.emp3{
    width: 15%;
    height: 35%;
    top:0%;
    right:0%;
}
.emp4{
    bottom:0%;
    right:5%;
}
</style>
