import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var autoGrid = gsap.timeline({
    scrollTrigger:{
        trigger:'.message2',
        start:"bottom center ",
        ease: Power1.easeIn,
        toggleActions: 'play play resume reverse',
    }
})
autoGrid.from('.knowledge .class', {
    y:30,
    opacity:0,
    stagger:0.2,
})

