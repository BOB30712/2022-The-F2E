//標題
gsap.fromTo(".title",{y:800},{y:0,duration:2})
const body=document.body
body.addEventListener("keydown",function(e){
    //console.log(e.keyCode)
    if(e.keyCode==38){//login
        gsap.to('.longintank',{opacity:1})
        gsap.to('.signuptank',{opacity:0})
        gsap.to('.longin',{color:"#B82A06"})
        gsap.to('.signup',{color:"white"})
    }else if(e.keyCode==40){//singup
        gsap.to('.longintank',{opacity:0})
        gsap.to('.signuptank',{opacity:1})
        gsap.to('.longin',{color:"white"})
        gsap.to('.signup',{color:"#B82A06"})
    }
})

//疑惑
gsap.utils.toArray(".animation").forEach((element)=>{
    hide(element)
     ScrollTrigger.create({
         trigger:element,
         //markers:true,
         start: 'top 25%', // 決定動畫開始點的位置
         onEnter:function(){
             const srollTL = gsap.timeline();
             animated(element)
             if(element.classList.contains('typing-1')){
                 typing("羨慕別人的酷酷網頁動畫...",'typing1')
                 srollTL.fromTo('.animationtank',{xPercent:-200},{xPercent:200,duration:2})
                 srollTL.set(".animationtank", { attr: { src: "image/戰車(側) 3.png"}});
                 srollTL.fromTo('.animationtank',{xPercent:200},{xPercent:-200,duration:2})
                 srollTL.repeat(-1); 
                 gsap.fromTo(".tank-dialog",{width:'30%',height:'30%',opacity:0},{width:'100%',height:'100%',opacity:1,duration:1})
             }else if(element.classList.contains('typing-2')){
                 typing("滿足不了同事的許願...",'typing2')
                 srollTL.fromTo(".tree",{bottom:"-120%",right:"-100%"},{bottom:'0%',right:'5%',duration:1})//士兵
                 srollTL.fromTo(".dialog",{width:"30%",height:"30%",opacity: 0},{width:'100%',height:'100%',opacity:1,duration:1})//對話框
                 srollTL.fromTo(".typing5",{text:""},{
                     text:"!@#$%...",
                     duration:2,
                 })
             }else if(element.classList.contains('typing-3')){
                 typing("動畫技能樹太雜無從下手...",'typing3')
                 srollTL.fromTo(".tree2",{bottom:"-120%"},{bottom:'0%',duration:1.5})//樹木
                 srollTL.fromTo(".soldier",{bottom:"-100%"},{bottom:'0%',duration:2},"<")//士兵
             }
         },
         onEnterBack:function(){
             animated(element);
             if(element.classList.contains('typing-1')){
                typing("羨慕別人的酷酷網頁動畫...",'typing1')
                gsap.fromTo(".tank-dialog",{width:'30%',height:'30%',opacity:0},{width:'100%',height:'100%',opacity:1,duration:1})
            }else if(element.classList.contains('typing-2')){
                typing("滿足不了同事的許願...",'typing2')
                srollTL.fromTo(".tree",{bottom:"-120%",right:"-100%"},{bottom:'0%',right:'5%',duration:1})//士兵
                srollTL.fromTo(".dialog",{width:"30%",height:"30%",opacity: 0},{width:'100%',height:'100%',opacity:1,duration:1})//對話框
                srollTL.fromTo(".typing5",{text:""},{
                    text:"!@#$%...",
                    duration:2,
                })
            }else if(element.classList.contains('typing-3')){
                typing("動畫技能樹太雜無從下手...",'typing3')
                gsap.fromTo(".tree2",{bottom:"-120%"},{bottom:'0%',duration:1.5})//樹木
                srollTL.fromTo(".soldier",{bottom:"-100%"},{bottom:'0%',duration:2},"<")//士兵
            }
         },
         onLeave:function(){
             hide(element);
         }
     })
 })
 function typing(str,type){
     gsap.fromTo(`.${type}`,
    {text:""},
    {
        text:str,
        duration:2,
    })
 }
 function animated(element){
     let x=0
     if(element.classList.contains('from-left')){
         x=-100
     }else if(element.classList.contains('from-right')){
         x=100
     }
     gsap.fromTo(element,{xPercent:`${x}`,duration:5},{xPercent:0})
 }
 function hide(element){
     let x=0
     if(element.classList.contains('from-left')){
         x=-100
     }else if(element.classList.contains('from-right')){
         x=100
     }
     gsap.to(element,{xPercent:`${x}`})
 }

 //希望之光
const sroll = gsap.timeline({
scrollTrigger: {
    trigger: ".section-hope", 
    pin: true, //重要！ pin需設為true
    //markers: true,
    scrub: true,
},
});
sroll.to(".L2", { yPercent: "30" });
sroll.to(".L3", { yPercent: "30" });
sroll.to(".title", {top:"20%"},"<");
sroll.to(".title>p",{top:"#000000"})
sroll.to(".L1", { yPercent: "40" });
sroll.to(".background", {'background-color':"#FFB3A4"});
sroll.to(".title2>p",{color:"#FFFFFF"})
sroll.to(".title2",{border:"4px solid #FFFFFF"},"<")
sroll.to(".title3",{color:"#FFFFFF",opacity:1},"<")

//活動主題說明
const srolltank = gsap.timeline({
scrollTrigger: {
    trigger: ".section-title", 
    pin: true, //重要！ pin需設為true
    //markers: true,
    scrub: true,
},
});
srolltank.to(".week1", { xPercent: "-100" });
srolltank.to(".week2", { xPercent: "-100" });
//坦克車離開旗幟時，旗幟下降
const week1 = gsap.timeline({
scrollTrigger: {
    trigger: ".first", 
    //markers: true,
    scrub: true,
    start: 'top 5%', // 決定動畫開始點的位置
    end: 'top 5%', // 決定動畫結束點的位置
    onEnter:function(){
        lowertheflag("week1-F1")
    },
    onEnterBack:function(){
        Raisingflag("week1-F1")
    }
},
});
//滾動到week2旗幟升起，坦克離開時，旗幟降下
const week2 = gsap.timeline({
scrollTrigger: {
    trigger: ".second", 
    //markers: true,
    scrub: true,
    start: 'top 15%', // 決定動畫開始點的位置
    end: 'top -30%', // 決定動畫結束點的位置
    onEnter:function(){//進入start觸發
        Raisingflag("week2-F1")
    },
    onEnterBack:function(){//返回end後觸發
        Raisingflag("week2-F1")
    },
    onLeave:function(){//離開end觸發
        lowertheflag("week2-F1")
    },
    onLeaveBack:function(){//離開start後返為觸發
        gsap.set(".week2-F1", { attr: { src: "image/F1.png"},delay:0.2 });
    }
},
});
//滾動到week3旗幟升起
const week3 = gsap.timeline({
scrollTrigger: {
    trigger: ".third", 
    //markers: true,
    scrub: true,
    start: 'top 5%', // 決定動畫開始點的位置
    end: 'top 5%', // 決定動畫結束點的位置
    onEnter:function(){
        Raisingflag("week3-F1")
    },
    onEnterBack:function(){
        lowertheflag("week3-F1")
    }
},
});
function Raisingflag(str){
    gsap.set(`.${str}`, { attr: { src: "image/F2.png"},delay:0.2 });
    gsap.set(`.${str}`, { attr: { src: "image/F3.png"},delay:0.4 });
    gsap.set(`.${str}`, { attr: { src: "image/F4.png"},delay:0.6 });
}
function lowertheflag(str){
    gsap.set(`.${str}`, { attr: { src: "image/F4.png"},delay:0.2 });
    gsap.set(`.${str}`, { attr: { src: "image/F3.png"},delay:0.4 });
    gsap.set(`.${str}`, { attr: { src: "image/F2.png"},delay:0.6 });
    gsap.set(`.${str}`, { attr: { src: "image/F1.png"},delay:0.8 });
}

//常見問題
const AllBtn=document.querySelectorAll(".qa")
AllBtn.forEach(function(e){
    e.addEventListener("click",function(event){
        console.log(event.target.id)
        console.log(event.target.classList)
        removeActive()
        removeAllQA(event.target.id)
        event.target.classList.add("active");
    })
})
function removeActive(){
    const Act=document.querySelectorAll(".active")
    Act.forEach(function(event){
        event.classList.remove("active")
    })
}
function removeAllQA(str){
    const QA=document.querySelectorAll(".QA")
    QA.forEach(function(event){
        if(event.id!=str){
            event.classList.add("d-none")
        }else{
            event.classList.remove("d-none")
        }
    })
}

//贊助商
gsap.to('.loop>.big',{left:'160%',duration:10,repeat:-1,ease:'none'})
gsap.to('.loop>.big2',{left:'30%',duration:10,repeat:-1,ease:'none'})
gsap.to('.loop>.big3',{left:'190%',duration:10,repeat:-1,ease:'none'})
gsap.to('.loop>.big4',{left:'60%',duration:10,repeat:-1,ease:'none'})

gsap.to('.loop>.middle',{left:'120%',duration:15,repeat:-1,ease:'none'})

gsap.to('.loop>.small',{left:'120%',duration:20,repeat:-1,ease:'none'})
gsap.to('.loop>.small-2a',{left:'120%',duration:20,repeat:-1,ease:'none'})
gsap.to('.loop>.small-2b',{left:'20%',duration:20,repeat:-1,ease:'none'})
gsap.to('.loop>.small-3a',{left:'150%',duration:20,repeat:-1,ease:'none'})
gsap.to('.loop>.small-3b',{left:'50%',duration:20,repeat:-1,ease:'none'})
gsap.to('.loop>.small-4a',{left:'140%',duration:20,repeat:-1,ease:'none'})
gsap.to('.loop>.small-4b',{left:'70%',duration:20,repeat:-1,ease:'none'})

//報名流程
gsap.utils.toArray(".sign-up-banner").forEach((element)=>{
    gsap.to(".Proc",{xPercent:500})
    ScrollTrigger.create({
        trigger:element,
        //markers:true,
        start: 'top 25%',
        onEnter:function(){//進入start觸發
            signupRaisingflag(element.id)
            ProcMovein(element.id)
            //signuptyping("Sig Up!","Sig-Up")
            //signuptyping("START!","START-title")
        },
        onEnterBack:function(){//返回end後觸發
            signupRaisingflag(element.id)
            //signuptyping("START!","START-title")
        },
        onLeave:function(){//離開end觸發
            signuplowertheflag(element.id)
            //signuptyping(" ","START-title")
        },
        onLeaveBack:function(){//離開start後返為觸發
            signuplowertheflag(element.id)
            //signuptyping(" ","START-title")
        }
    })

})
function signupRaisingflag(str){
    gsap.set(`#${str}`, { attr: { src: "image/F1.png"},delay:0.1 });
    gsap.set(`#${str}`, { attr: { src: "image/F2.png"},delay:0.2 });
    gsap.set(`#${str}`, { attr: { src: "image/F3.png"},delay:0.3 });
    gsap.set(`#${str}`, { attr: { src: "image/F4.png"},delay:0.4 });
}
function signuplowertheflag(str){
    gsap.set(`#${str}`, { attr: { src: "image/F4.png"},delay:0.1 });
    gsap.set(`#${str}`, { attr: { src: "image/F3.png"},delay:0.2 });
    gsap.set(`#${str}`, { attr: { src: "image/F2.png"},delay:0.3 });
    gsap.set(`#${str}`, { attr: { src: "image/F1.png"},delay:0.5 });
}
function signuptyping(str,type){
    gsap.to(`#${type}`,{
        text:str,
        duration:1,
        scrollTrigger:{
            trigger:`.${type}`,
            toggleActions:'play none none none'
        }
    })
}
function ProcMovein(element){
    let movein=''
    let Proctitle=''
    switch (element) {
        case 'Sig-Up':
            movein='SingupProc'
            Proctitle='Sig Up!'
            break;
        case 'START':
            movein='StartProc'
            Proctitle='START!'
            break;
        case 'UPLOAD':
            movein='UploadProc'
            Proctitle='UPLOAD!'
            break;
        case 'STREAM':
            movein='StreamProc'
            Proctitle='STREAM!'
            break;
    }
    const Proc=gsap.timeline()
    Proc.fromTo(`#${movein}`,{xPercent:500},{xPercent:0})
    Proc.fromTo(`#${movein}>.ProcTitle`,{text:" "},{
        text:Proctitle,
        duration:1.5,
    })
}

//
gsap.to('.envy',{
    text:'羨慕別人的酷酷網頁動畫...',
    duration:1.5,
    scrollTrigger:{
        trigger:'.envy',
        toggleActions:'play pause resume reset'
    }
})
gsap.to('.notSatisfied',{
    text:'滿足不了同事的許願...',
    duration:1.5,
    markers:true,
    scrollTrigger:{
        trigger:'.notSatisfied',
        toggleActions:'play pause resume reset'
    }
})
gsap.to('.stunned',{
    text:'動畫技能樹太雜無從下手...',
    duration:1.5,
    markers:true,
    scrollTrigger:{
        trigger:'.stunned',
        toggleActions:'play pause resume reset'
    }
})
gsap.fromTo('.solider',{xPercent:-100},{
    xPercent:0,
    duration:1,
    scrollTrigger:{
        trigger:'.stunned',
        toggleActions:'play pause resume reset'
    }
    }
)
gsap.fromTo('.envyTalk',{text:''},{text:'!@#$%..',duration:1.5,repeat:-1,})
gsap.fromTo('.hope-bg',{'background-color':'#000000'},{
    'background-color':'#FFB3A4',
    duration:10,
    scrollTrigger:{
        trigger:'.hope-bg',
        toggleActions:'play pause resume reset'
    }
    }
)
gsap.fromTo('.hope-L1',{bottom:'25%'},{
    bottom:'15%',
    duration:8,
    scrollTrigger:{
        trigger:'.hope-L1',
        toggleActions:'play pause resume reset'
    }
    }
)
gsap.fromTo('.hope-L2',{bottom:'25%'},{
    bottom:'15%',
    duration:4,
    scrollTrigger:{
        trigger:'.hope-L1',
        toggleActions:'play pause resume reset'
    }
    }
)
gsap.fromTo('.hope-L3',{bottom:'25%'},{
    bottom:'15%',
    duration:6,
    scrollTrigger:{
        trigger:'.hope-L1',
        toggleActions:'play pause resume reset'
    }
    }
)

//手機板每周主題說明
gsap.utils.toArray(".moblie-week").forEach((element)=>{
    gsap.fromTo(`.${element.id}-tank`,{left:'-80%'},{
        left:'40%',
        duration:2,
        scrollTrigger:{
            trigger:`.${element.id}-tank`,
            toggleActions:'play pause resume reset'
        }
        }
    )
    gsap.fromTo(`.${element.id}-F`,{opacity:0},{
        opacity:1,
        delay:2.2,
        scrollTrigger:{
            trigger:`.${element.id}-F`,
            toggleActions:'play pause resume reset'
        }
        }
    )
    gsap.fromTo(`#${element.id}-btn`,{opacity:0},{
        opacity:1,
        delay:2.2,
        scrollTrigger:{
            trigger:`.${element.id}-F`,
            toggleActions:'play pause resume reset'
        }
        }
    )

})

//手機板流程說明
gsap.utils.toArray(".Proc-moblie").forEach((element)=>{
    gsap.fromTo(`#${element.id}`,{xPercent:150},{
        xPercent:0,
        duration:2,
        scrollTrigger:{
            trigger:`#${element.id}`,
            toggleActions:'play pause resume reset'
        }
        }
    )
    let movein=''
    let Proctitle=''
    switch (element.id) {
        case 'SIGNUP-moblie':
            movein='SIGNUP-moblie-title'
            Proctitle='Sig Up!'
            break;
        case 'START-moblie':
            movein='START-moblie-title'
            Proctitle='START!'
            break;
        case 'UPLOAD-moblie':
            movein='UPLOAD-moblie-title'
            Proctitle='UPLOAD!'
            break;
        case 'STREAM-moblie':
            movein='STREAM-moblie-title'
            Proctitle='STREAM!'
            break;
    }
    gsap.fromTo(`#${movein}`,{text:' '},{
        text:Proctitle,
        delay:2.2,
        scrollTrigger:{
            trigger:`#${element.id}`,
            toggleActions:'play pause resume reset'
        }
        }
    )
})




