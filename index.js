var cursor = document.querySelector("#cursor");
var blur_cursor = document.querySelector("#blur-cursor")

document.addEventListener("mousemove",function(event){
    console.log("hey")
    cursor.style.left = event.x+"px"  
    cursor.style.top = event.y+"px"  
    // blur_cursor.style.left = event.x - 250 +"px"  
    // blur_cursor.style.top = event.y - 250 +"px"   
})

document.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blur_cursor.animate(
        {
          left: `${clientX-250}px`,
          top: `${clientY-250}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
      cursor.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
       { duration: 500, fill: "forwards" }
      );
    };

// Big round cursor here 

var round_cursor = document.querySelectorAll(".round-cursor");
round_cursor.forEach(function(elements){
    elements.addEventListener("mouseenter",function(){
        // elements.style.color = "black"
        // cursor.style.zIndex =1000,
        cursor.style.scale = 3
        cursor.style.transition = "all ease-in-out .2s"
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid white"
    })
    elements.addEventListener("mouseleave",function(){
        // elements.style.color = "white"
        cursor.style.scale = 1
        cursor.style.backgroundColor = "#95c11e"
        cursor.style.border = "1px solid #95c11e"
    })
})
 



gsap.to("nav",{
    backgroundColor: "#000",
    duration: 0.5,
    // color: "#95c11e",
    color: "white",
    height: "110px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -6%", 
        scrub: 1   // for repeat and action duration \\ value: true or number
    }
})

// const hover = gsap.to("h4",{
//     color: "#95c11e",
//     paused: true,
//     transition: "all .2s"
// })

// document.querySelector("nav>h4").addEventListener("mouseenter",()=>hover.play());
// document.querySelector("nav>h4").addEventListener("mouseleave",()=>hover.reverse());

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -65%",
        scrub: 2
    }
})

// Scroll trigger about us page

gsap.from("#about-us img,#about-us-in",{
    y: 50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})


gsap.from(".card",{
    scale: 0.95,
    opacity:0,
    duration:.5,
    // stagger:1,
    scrollTrigger:{
        trigger:"#card-container",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 75%",
        scrub: 1
    }
})


gsap.from("#colon1",{
    x: -70,
    y: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    x: 70,
    y: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from(".page4 h1",{
    y: 70,
    scrollTrigger:{
        trigger:".page4 h1",
        scoller:"body",
        start:"top 95%",
        end:"top 80%",
        scrub:2
    }
})