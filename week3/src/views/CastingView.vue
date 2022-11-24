<template>
    <div>
        <p>請選擇代表你的角色</p>
        <div class="d-flex justify-content-center align-items-end">
            <img style="width: 220px;height: 382px;"
                @mouseenter="char1 = require('../assets/img/主角1.png')"
                @click="chooseChar1"
                @mouseleave="leaveChar1"
                :src="char1" alt="">
            <img style=""
                @mouseenter="char2 = require('../assets/img/主角2.png')"
                @click="chooseChar2"
                @mouseleave="leaveChar2"
            :src="char2" alt="">
        </div>
        <form @submit.prevent="Next">
            <div class="mb-3 d-flex justify-content-center">
                <input type="text" class="form-control inputName" placeholder="Disabled input">
            </div>
            <button style="width:525px;height:90px;font-size: 40px;" type="submit" class="btn btn-primary">確定</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      char1: require('../assets/img/主角1-影.png'),
      char2: require('../assets/img/主角2-影.png'),
      choosechar1: false,
      choosechar2: false
    }
  },
  methods: {
    chooseChar1 () {
      this.char1 = require('../assets/img/主角1.png')
      this.char2 = require('../assets/img/主角2-影.png')
      this.choosechar1 = true
      this.choosechar2 = false
    },
    chooseChar2 () {
      this.char1 = require('../assets/img/主角1-影.png')
      this.char2 = require('../assets/img/主角2.png')
      this.choosechar1 = false
      this.choosechar2 = true
    },
    leaveChar1 () {
      if (!this.choosechar1) {
        this.char1 = require('../assets/img/主角1-影.png')
      }
    },
    leaveChar2 () {
      if (!this.choosechar2) {
        this.char2 = require('../assets/img/主角2-影.png')
      }
    },
    Next () {
      console.log('12')
      this.$router.push('/SmalltestView')
    }
  }
}
</script>

<style>
.inputName{
    font-size: 32px;
    border-radius: 30px;
    width: 525px;
    height: 90px;
}
</style>
