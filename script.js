



      // Intro reveal
  window.addEventListener('load', () => { setTimeout(()=>document.body.classList.add('reveal'), 3200); });

  // Floating hearts
  const hearts = document.getElementById('hearts');
  setInterval(()=>{
    const heart = document.createElement('div');
    heart.className='heart';
    heart.style.left=Math.random()*100+'vw';
    heart.style.background=`hsl(${Math.random()*360},70%,80%)`;
    heart.style.animationDuration=(5+Math.random()*5)+'s';
    hearts.appendChild(heart);
    setTimeout(()=>heart.remove(),10000);
  },300);

  // Music toggle
  function toggleMusic(){
    const music=document.getElementById("bgMusic");
    const btn=document.getElementById("musicBtn");
    if(music.paused){music.play(); btn.textContent="⏸ Pause Music";}
    else{music.pause(); btn.textContent="▶ Play Music";}
  }

  // Show message and confetti
  function showMessage(){
    const box = document.getElementById("messageBox");
    box.style.display="block";
    setTimeout(()=>box.classList.add("show"),50);

    confetti({particleCount:300, spread:140, startVelocity:40});
    confetti({particleCount:120, spread:80, origin:{x:0.2,y:0.8}});
    confetti({particleCount:120, spread:80, origin:{x:0.8,y:0.8}});
  }

  // Gift click surprise
  function triggerSurprise(){
    confetti({particleCount:150, spread:80, origin:{y:0.6}});
    alert('Surprise! 🎁🎉');
  }