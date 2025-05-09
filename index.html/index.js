

$(document).ready(function () {
    $(".filter").show(); // Show all items initially

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value === "all") {
            $(".filter").fadeIn(300);
        } else {
            $(".filter").hide(300);
            $(".filter." + value).fadeIn(300);
        }

        $(".filter-button").removeClass("active");
        $(this).addClass("active");
    });
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".homeimage", {
x: -5,
autoAlpha:1,
duration: 3,
});
gsap.to(".home1",{
x:5,
duration:3,
autoAlpha:1,
})

gsap.registerPlugin(ScrollTrigger);
gsap.to(".about1",{
scrollTrigger:{
trigger:".about1",
start:'top 10px',
end:'bottom 20px',
toggleActions:"restart none none none",
},
autoAlpha:1,

})

gsap.registerPlugin(ScrollTrigger);
gsap.to(".about2",{
scrollTrigger:{
trigger:'.about2',
start:"top 10px",
end:"bottom 20px",
toggleActions:'restart none none none none'
},
x:-1,

autoAlpha:1,
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".ser2",{
scrollTrigger:{
trigger:'.ser2',
start:"top 10px",
end:"bottom 20px",
toggleActions:'restart none none none none'
},
x:-1,

autoAlpha:1,
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".c2",{
scrollTrigger:{
trigger:'.c2',
start:"top 10px",
end:"bottom 20px",
toggleActions:'restart none none none none'
},
x:-1,
duration:1,
autoAlpha:1,
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hyy",{
scrollTrigger:{
trigger:'.hyy',
start:"top 10px",
end:"bottom 20px",
toggleActions:'restart none none none none'
},
x:-1,
duration:2,
autoAlpha:1,
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".c1",{
scrollTrigger:{
trigger:'.c1',
start:"top 10px",
end:"bottom 20px",
toggleActions:'restart none none none none'
},
x:-1,
duration:1,
autoAlpha:1,
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".rs",{
scrollTrigger:{
trigger:'.rs',
start:"top 10px",
end:"bottom 20px",
toggleActions:'restart none none none none'
},
x:-1,
duration:1,
autoAlpha:1,
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".err",{
scrollTrigger:{
trigger:'.err',
start:"top 10px",
end:"bottom 20px",
toggleActions:'restart none none none none'
},
y:2,
duration:2,
autoAlpha:1,
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".er2",{
scrollTrigger:{
trigger:'.er2',
start:"top 10px",
end:"bottom 20px",
toggleActions:'restart none none none none'
},
x:3,
duration:2,
autoAlpha:1,
})