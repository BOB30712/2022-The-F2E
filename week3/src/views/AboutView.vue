<template>
  <div class="about">
    <loading :class="{'d-none': !isLoading}"></loading>
    <h1>This is an about page</h1>
    <p v-if="isLoading">t</p>
    <p v-if="isLoading">f</p>
    <p>{{time}}</p>
    <button type="button" class="btn btn-danger" @click.prevent="isLoading=false">Danger</button>
  </div>
</template>

<script>
import loading from '@/components/LoadIng.vue'

export default {
  data () {
    return {
      isLoading: true,
      timer: null,
      time: 3
    }
  },
  components: {
    loading
  },
  methods: {
    timeout () {
      this.isLoading = true
    },
    countdown () {
      this.time--
      if (this.time === 0) {
        clearInterval(this.timer)
        this.isLoading = true
      }
    }
  },
  mounted () {
    this.isLoading = false
    this.timer = setInterval(this.countdown, 1000)
    // const myTimeout = setTimeout(this.timeout(), 5000)
  }
}
</script>
