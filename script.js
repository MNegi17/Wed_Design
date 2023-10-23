var tl= gsap.timeline({
    repeat:-1
});

tl
.to(".imgcont",{
    ease:Expo.easeInOut,
    width:"100%",
    stagger:3
},'a')
.to(".text>h1",{
    ease:Expo.easeInOut,
    top:"0",
    stagger:3
   
},'a')
.to(".text>h1",{
    delay:3,
    ease:Expo.easeInOut,
    top:"-100",
   stagger:3
   
},'a')

