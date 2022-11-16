<template>
    <div>
      <div id="test" @dragover.prevent="test2" style="width: 300px;height: 300px;background-color: aqua;">
      </div>
      <input ref="inputfile" type="file" accept="application/pdf" placeholder="選擇PDF檔案" />
    </div>
    <div class="d-flex justify-content-center">
    <canvas id="canvas" style="border: 1px solid #000"> </canvas>
    </div>
    <p>選擇簽名</p>
    <img class="sign" style="border: 1px solid #000" width="250" height="150" />

    <button class="download">download PDF</button>
    <button id="forward" :disabled="page==1">上一頁</button>
    <button id="next" :disabled="page==maxPage">下一頁</button>
    <p>第{{page}}頁/共{{maxPage}}頁</p>
    <p>當前檔案大小: {{filesize}} MB</p>
</template>

<style lang="scss">
@import "../assets/all.scss";
*{
  outline: 1px solid black;
}
</style>

<script>
/* eslint-disable */
import { fabric } from 'fabric'
export default{
    data () {
        return {
            page:1,
            maxPage:0,
            filesize:0,
            testData:{},
        }
    },
    methods: {
        test2(){
            console.log("成功")
        },
        readBlob (blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.addEventListener("load", () => resolve(reader.result));
                reader.addEventListener("error", reject);
                reader.readAsDataURL(blob);
            });
        },
        async printPDF (pdfData,page) {
            const Base64Prefix = "data:application/pdf;base64,";
            pdfData = await this.readBlob(pdfData);
            const data = atob(pdfData.substring(Base64Prefix.length));
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
        /*
        1KB = 1,024 bytes
        1MB = 1,024 KB = 1,048,576 bytes
        1GB = 1,024 MB = 1,048,576 KB = 1,073,741,824 bytes
        */
        let canvas = new fabric.Canvas("canvas");
        document.querySelector("input").addEventListener("change", async (e) => {
            canvas.requestRenderAll();
            const pdfData = await this.printPDF(e.target.files[0],1);
            this.testData = e.target.files[0]
            this.filesize = (e.target.files[0].size/1048576).toFixed(2)
            console.log(e.target.files[0])
            this.page=1
            const pdfImage = await this.pdfToImage(pdfData);
            // 調整canvas大小
            canvas.setWidth(pdfImage.width / window.devicePixelRatio);
            canvas.setHeight(pdfImage.height / window.devicePixelRatio);
            canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
        });
        document.querySelector("#test").addEventListener("drop", async (e) => {
            e.preventDefault();
            canvas.requestRenderAll();
            const pdfData = await this.printPDF(e.dataTransfer.files[0],1);
            this.testData = e.dataTransfer.files[0]
            this.filesize = e.target.files[0].size/1048576
            this.page=1
            const pdfImage = await this.pdfToImage(pdfData);
            // 調整canvas大小
            canvas.setWidth(pdfImage.width / window.devicePixelRatio);
            canvas.setHeight(pdfImage.height / window.devicePixelRatio);
            canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
        });

        document.querySelector("#next").addEventListener("click", async (e) => {
            e.preventDefault();
            canvas.requestRenderAll();
            if(this.page!=this.maxPage){
                this.page=this.page+1;
            }
            const pdfData = await this.printPDF(this.testData,this.page);
            const pdfImage = await this.pdfToImage(pdfData);
            // 調整canvas大小
            canvas.setWidth(pdfImage.width / window.devicePixelRatio);
            canvas.setHeight(pdfImage.height / window.devicePixelRatio);
            canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
        });

        document.querySelector("#forward").addEventListener("click", async (e) => {
            e.preventDefault();
            canvas.requestRenderAll();
            if(this.page!=1){
                this.page=this.page-1;
            }
            const pdfData = await this.printPDF(this.testData,this.page);
            const pdfImage = await this.pdfToImage(pdfData);
            // 調整canvas大小
            canvas.setWidth(pdfImage.width / window.devicePixelRatio);
            canvas.setHeight(pdfImage.height / window.devicePixelRatio);
            canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
        });

        

        // 加入簽名
        const sign = document.querySelector(".sign");
        if (localStorage.getItem("img")) {
        sign.src = localStorage.getItem("img");
        this.testImg =  localStorage.getItem("img");
        }
        
        sign.addEventListener("click", () => {
        if (!sign.src) return;
        fabric.Image.fromURL(sign.src, function (image) {
            image.top = 400;
            image.scaleX = 0.5;
            image.scaleY = 0.5;
            canvas.add(image);
        });
        });
        

        // 下讚PDF
        const pdf = new jsPDF();
        const download = document.querySelector(".download");
        download.addEventListener("click", () => {
        const image = canvas.toDataURL("image/png");
        const width = pdf.internal.pageSize.width;
        const height = pdf.internal.pageSize.height;
        pdf.addImage(image, "png", 0, 0, width, height);
        pdf.save("download.pdf");
        });
    }
}
</script>
