gsap.registerPlugin(ScrollTrigger)
var tl = gsap.timeline();

tl.from(".content", {
    x: '-10%',
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
})

tl.from('.stagger1', {
    opacity: 0,
    y: -150,
    stagger: 0.4,
    ease: Power4.easeOut,
    duration: 2,
})

gsap.from('.hero-design', {
    opacity: 0,
    y: 50,
    ease: Power1.easeOut,
    duration: 1,

}, "-=2")

gsap.from('.square-anim', {
    stagger: .2,
    scale: 0.01,
    duration: 2,
    ease: Back.easeOut.config(2),
})

gsap.from('.transition2', {
    scrollTrigger: {
        trigger: ".transition2",
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3,
})
