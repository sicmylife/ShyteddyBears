// gsap.registerPlugin(ScrollTrigger);

gsap.to(".bear", {
    scrollTrigger:{
        trigger:".h1",
        markers:true,
        start:'-400px',
        end: "500px", 
     scrub:3
       

} ,
//   x: 300,
//   rotate:760,
  y:400,
  duration: 3,
  ease:'none'
});

gsap.to(".bear2", {
    scrollTrigger:{
        trigger:".animation",
        scrub:3,
        markers:true,
        start:'-200px',
        end:'+=300',


} ,
  x: 500,
  duration: 2,
  ease:'none'

});


gsap.to(".bear3", {
    scrollTrigger:{
        trigger:"footer",
        scrub:3,
        markers:true,
        start:'-200px',
        end:'+=300',


} ,
  x: -500,
  duration: 2,
});
