// Shooting star
function shootingStar(){
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(star);
  setTimeout(()=>star.remove(),1000);
}
setInterval(shootingStar,2800);

// Mouse glow
const glow = document.getElementById("glow");
document.addEventListener("mousemove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

// Parallax tilt
const sections=document.querySelector('.sections');
document.addEventListener('mousemove',e=>{
  const x=(window.innerWidth/2-e.clientX)/40;
  const y=(window.innerHeight/2-e.clientY)/40;
  sections.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
});
