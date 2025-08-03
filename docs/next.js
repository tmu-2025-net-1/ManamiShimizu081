

//画面切り替えーーーーーーーーーーーーーーーーーーーーーー
 // ページ読み込み時に最下部へ自動スクロール
    window.addEventListener('load', function () {
      window.scrollTo(0, document.body.scrollHeight);
    });



window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;

  if (scrollTop <= 0) {
    window.location.href = "index.html";
  }
});

// ページ読み込み後、一番下を初期表示にする
window.addEventListener('load', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'auto' // 瞬時にスクロールする
  });
});

//鏡面反射
   const original = document.getElementById("original");
   const clone = original.cloneNode(true);
   clone.classList.add("mirror");

   document.getElementById("mirror-container").appendChild(clone);

   