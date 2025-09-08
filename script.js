// WORLD SIZE
const world_W = 5000;
const world_H = 5000;

const DPR = Math.min(window.devicePixelRatio || 1,2);

const animate = !matchMedia('(prefers-reduced-motion: reduce)').matches;

const cvs = document.getElementById ("stars");
const ctx = cvs.getContext ('2d',{alpha, false });

function sizeCanvas (){
    cvs.width = Math
}
