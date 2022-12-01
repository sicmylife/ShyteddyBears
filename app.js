gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
  scrollTrigger: {},
});

tl.to(".bear", {
  scrollTrigger: {
    trigger: ".h1",
    start: "-250px",
    end: "200px",
    scrub: 2,
    // markers: true,
  },
  y: 300,
  duration: 3,
  scale:.5,
});

gsap.to(".bear2", {
  scrollTrigger: {
    trigger: ".animation",
    scrub: 2,
    start: "-300px",
    end: "+=300",
  },
  x: 500,
  duration: 2,
  ease: "none",
});

gsap.to(".bear3", {
  scrollTrigger: {
    trigger: "footer",
    scrub: 2,
    start: "-200px",
    end: "+=300",
  },
  x: -500,
  duration: 2,
});

gsap.to('.scroll', {
  scrollTrigger: {
    trigger: "header",
    scrub: 3,
    start: "top",
    end: "+=500",
  },
  y: 100,
  duration: 2,
});

gsap.to(".arrow", {
    scrollTrigger: {
      trigger: "header",
      scrub: 2,
      start: "top",
      end: "+=500",
    },
    y: 100,
    duration: 2,
  });


  gsap.to(".parrafo", {
    scrollTrigger: {
      trigger: ".animation",
      scrub: 2,
      start: "top",
      end: "+=500",
    },
    y: 200,
    scale: 2,
    duration: 2,
  });

  tl.to(".h2", {
    scrollTrigger: {
      trigger: ".animation",
      scrub: 2,
      start: "top",
      end: "+=500",
    },
    y: 50,
    scale: 2,
    duration: 2,
    opacity:1,
  });
  


  gsap.to(".h1", {
    scrollTrigger: {
     
      trigger: ".animation",
      scrub: 2,
      start: "top 100%",
      end: "top 10%",
    //   toggleActions:'restart none none none',
      pin:'.h1',
      pinSpacing:true,
      markers:true,
    },   duration: 7,
  
  
 });