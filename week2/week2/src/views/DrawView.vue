<template>
<div class="about">
    <h1>This is an about page</h1>
    <canvas class="d-block ms-auto me-auto" ref="sketchpad" id="canvans" width="500" height="300" style="border: 1px solid black;"
    @mousedown="startPosition"
    @mouseup="finishedPosition"
    @mouseleave="finishedPosition"
    @mousemove="draw"></canvas>
    <img id="show-img" width="500" height="300">
    <button type="button" class="btn btn-primary" @click="saveImage">儲存</button>
</div>
</template>

<style lang="scss">
@import "../assets/all.scss";
</style>

<script>
/* eslint-disable */
export default {
data () {
    return {
    isPainting: false,
    canvas: {},
    ctx: {},
    showImage: {}
    }
},
methods: {
    getPaintPosition (e) {
    const canvasSize = this.canvas.getBoundingClientRect()
    if (e.type === 'mousemove') {
        return {
        x: e.clientX - canvasSize.left,
        y: e.clientY - canvasSize.top
        }
    } else {
        return {
        x: e.touches[0].clientX - canvasSize.left,
        y: e.touches[0].clientY - canvasSize.top
        }
    }
    },
    startPosition (e) {
    e.preventDefault()
    this.isPainting = true
    },
    finishedPosition () {
    this.isPainting = false
    this.ctx.beginPath()
    },
    draw (e) {
    if (!this.isPainting) return
    const paintPosition = this.getPaintPosition(e)
    this.ctx.lineTo(paintPosition.x, paintPosition.y)
    this.ctx.stroke()
    },
    saveImage () {
    this.showImage = document.querySelector('#show-img')
    // 圖片儲存的類型選擇 png ，並將值放入 img 的 src
    const newImg = this.canvas.toDataURL('image/png')
    this.showImage.src = newImg
    localStorage.setItem('img', newImg)
    this.$router.push('/PdfView2')
    }
},
mounted () {
    this.canvas = document.querySelector('#canvans')
    this.ctx = this.canvas.getContext('2d') // 要使用 2D 的方式繪圖
    this.ctx.lineWidth = 4
    this.ctx.lineCap = 'round'
}
}
</script>
  