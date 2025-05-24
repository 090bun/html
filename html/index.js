

  // 找到所有選單內的 a 標籤
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      // 把 checkbox 勾選取消，選單就會收起
      document.getElementById('menu-checkbox').checked = false;
          });
  });

//桌機板控制滑鼠進出

  const hold_about = document.getElementById("hold_about")
  hold_about.addEventListener("mouseenter",function(event){
  hold_about.classList.add("hold");
  })
  hold_about.addEventListener("mouseleave",function(event){
  hold_about.classList.remove("hold");
  })

  const hold_work = document.getElementById("hold_work")
  hold_work.addEventListener("mouseenter",function(event){
  hold_work.classList.add("hold");
  })
  hold_work.addEventListener("mouseleave",function(event){
  hold_work.classList.remove("hold");
  })

  const hold_skill = document.getElementById("hold_skill")
  hold_skill.addEventListener("mouseenter",function(event){
  hold_skill.classList.add("hold");
  })
  hold_skill.addEventListener("mouseleave",function(event){
  hold_skill.classList.remove("hold");
  })

//手機板
const mobileItems = ["hold_M_about", "hold_M_home", "hold_M_work", "hold_M_skill"];

mobileItems.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("touchstart", () => {
      el.style.fontSize = "1.4em";
    });
    el.addEventListener("touchend", () => {
      el.style.fontSize = "1.2em";
    });
  }
});
