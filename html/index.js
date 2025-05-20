

  // 找到所有選單內的 a 標籤
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      // 把 checkbox 勾選取消，選單就會收起
      document.getElementById('menu-checkbox').checked = false;
    });
  });