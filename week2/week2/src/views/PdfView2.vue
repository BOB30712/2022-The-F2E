<template>
    <div class="d-flex justify-content-center">
        <canvas id="canvas" style="border: 1px solid #000"> </canvas>
    </div>
</template>

<style  lang="scss">
@import "../assets/all.scss";
</style>

<script>
/* eslint-disable */
import { fabric } from 'fabric'
export default {
    methods: {
        async loadFile(canvas) {
            canvas.requestRenderAll();
            const pdfData = await this.printPDF(1);
            //this.testData = e.target.files[0]
            //this.filesize = (e.target.files[0].size/1048576).toFixed(2)
            //console.log(e.target.files[0])
            //this.page=1
            const pdfImage = await this.pdfToImage(pdfData);
            // 調整canvas大小
            canvas.setWidth(pdfImage.width / window.devicePixelRatio);
            canvas.setHeight(pdfImage.height / window.devicePixelRatio);
            canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
        },
        readBlob (blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.addEventListener("load", () => resolve(reader.result));
                reader.addEventListener("error", reject);
                reader.readAsDataURL(blob);
            });
        },
        async printPDF (page) {
            const data = localStorage.getItem("filedata");
            // Using DocumentInitParameters object to load binary data.
            const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
            const pdfPage = await pdfDoc.getPage(page);
            this.maxPage = pdfDoc._pdfInfo.numPages 
            const viewport = pdfPage.getViewport({ scale: 2 });
            // const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            // 控制顯示PDF的寬高
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
                canvasContext: context,
                viewport,
            };
            const renderTask = pdfPage.render(renderContext);

            // 回傳做好的canvas
            return renderTask.promise.then(() => canvas);
        },
        async  pdfToImage(pdfData) {
        const scale = 1 / window.devicePixelRatio;
        return new fabric.Image(pdfData, {
            scaleX: scale,
            scaleY: scale,
        });
        }
    },
    mounted () {
        let canvas = new fabric.Canvas("canvas");
        this.loadFile(canvas);
        localStorage
    }
}
</script>
