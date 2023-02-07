const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);


});

gsap.to('.fix01', {
            
  scrollTrigger: {
    trigger: ".trigger01",
    start: "top top",
    end: 'bottom bottom',
    pin: true,
    pinSpacing: false,
    scrub: true,
  }
});

let mtTwo = $('.maintitle01').querySelectorAll('.two');

gsap.to(mtTwo[0], {
    
  width: 229,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[1], {
    
  width: 332,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[2], {
    
  width: 221,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[3], {
    
  width: 163,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[0], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[1], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[2], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[3], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to('.boat', {
    
    rotation: 0,
      scrollTrigger: {
      trigger: "#section01",
      start: "2000 top",
      end: '+=2000',
      scrub: true,
      }
});

gsap.to('.boat', {
    
  y: -600,
    scrollTrigger: {
    trigger: "#section01",
    start: "10000 top",
    end: '+=2000',
    scrub: true,
    }
});

gsap.to('.boatmobile', {
  
  y: 2000,    
    scrollTrigger: {
    trigger: "#section03",
    start: "top top",
    end: '+=3000',
    scrub: true,
    }
});

gsap.to('.boatmovement', {
  
  y: 3760,    
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=3000',
    scrub: true,
    }
});
  
  
  
