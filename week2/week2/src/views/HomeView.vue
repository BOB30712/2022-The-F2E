<template>
  <button @click="enter" type="button" class="btn btn-light px-4">
    簽<span>署新文</span>件
  </button>
</template>

<style lang="scss">
@import "../assets/all.scss";
.btn-light{
  border-radius: 0px;
}
.btn-light>span{
  letter-spacing: 1em;
  margin-left: 1em;
}
</style>

<script>
export default {
  methods: {
    enter () {
      this.$router.push('/PdfView')
    }
  }
}
</script>
