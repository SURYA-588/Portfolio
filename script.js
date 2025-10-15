// Theme switching logic
document.getElementById('themeBtn').onclick = function() {
  document.body.classList.toggle('dark-theme');
  const themeBtn = document.getElementById('themeBtn');
  themeBtn.innerHTML = document.body.classList.contains('dark-theme')
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
};

// Navigation toggle logic
document.getElementById('menuBtn').onclick = function() {
  document.getElementById('nav').classList.toggle('active');
};

// Scroll to About Me section
document.getElementById('aboutMeBtn').onclick = function() {
  document.getElementById('aboutme').scrollIntoView({ behavior: 'smooth' });
};

// Scroll to Contact section (Hire Me button in intro)
document.getElementById('SendMeMessage').onclick = function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

// About Me section Hire Me button scrolls to contact
document.querySelectorAll('.about-text .actions button').forEach(function(btn) {
  if (btn.textContent.trim() === 'Hire Me') {
    btn.onclick = function() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };
  }
});

// Resume download function (dummy link)
function downloadResume() {
  window.location.href = "SURYA RESUME.pdf";
}

// Typed.js for typewriter effect
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('.typewriter', {
    strings: [
      "<span style='font-weight:bold; color:#0074D9;'>I'm a Front-End Developer</span>",
      "<span style='font-weight:bold; color:#0074D9;'>I'm a UI/UX Designer</span>",
      "<span style='font-weight:bold; color:#0074D9;'>I'm a Graphic Designer</span>",
      "<span style='font-weight:bold; color:#0074D9;'>I'm a Freelancer</span>"
    ],
    showCursor: true,
    cursorChar: '|',
    attr: null,
    autoInsertCss: true,
    typeSpeed: 25,
    backSpeed: 25,
    loop: true
  });
});

// GSAP Draggable for Skills Demo with mobile support
document.addEventListener('DOMContentLoaded', function() {
  function makeDraggableSkills() {
    if (!window.Draggable) return;
    var boxes = document.querySelectorAll('.demo .box');
    var demo = document.querySelector('.demo');
    boxes.forEach(function(box, i) {
      box.style.left = (10 + Math.random() * (demo.offsetWidth - 120)) + 'px';
      box.style.top = (10 + Math.random() * (demo.offsetHeight - 60)) + 'px';
    });
    Draggable.create('.box', {
      bounds: '.demo',
      inertia: true,
      allowNativeTouchScrolling: false,
      minimumMovement: 2,
      onPress: function() {
        this.startX = this.x;
        this.startY = this.y;
      },
      onDrag: function() {
        if (!this.hitTest('.demo', '100%')) {
          this.endDrag();
        }
      }
    });
  }

  // Ensure GSAP and Draggable are loaded before calling makeDraggableSkills
  // The HTML already links them, so this part can be simplified if they are guaranteed to load.
  // For robustness, you might keep a check.
  if (window.gsap && window.Draggable) {
    makeDraggableSkills();
  } else {
    // Fallback/ensure loading if not already present
    // This assumes the script for GSAP and Draggable are already in the HTML head
    // and would execute before this DOMContentLoaded listener.
    // If not, you'd re-add the loadScript logic here as in your original snippet.
    console.log("GSAP or Draggable not yet loaded. Ensure script tags are in HTML head.");
  }
});