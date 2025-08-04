

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

   

//スクロール連動
const ameMo = document.querySelector('.ame-mo');
let hasFixed = false; // 一度固定したら true にする

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasFixed) {
        // 画面に入った「最初の一回だけ」固定
        ameMo.style.position = 'fixed';
        ameMo.style.top = '50%';
        ameMo.style.left = '50%';
        ameMo.style.transform = 'translate(-50%, -50%)';
      

        hasFixed = true; // 再び切り替わらないようにする
      }
    });
  },
  {
    threshold: 0.5, // 半分以上入ったらトリガー
  }
);

observer.observe(ameMo);


const niziMo = document.querySelector('.nizi-mo');
let hasFixedd = false; // 一度固定したら true にする

const observerr = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasFixedd) {
        // 画面に入った「最初の一回だけ」固定
        niziMo.style.position = 'fixed';
        niziMo.style.top = '20%';
        niziMo.style.left = '50%';
        niziMo.style.transform = 'translate(-50%, -50%)';

        hasFixedd = true; // 再び切り替わらないようにする
      }
    });
  },
  {
    threshold: 0.5, // 半分以上入ったらトリガー
  }
);

observerr.observe(niziMo);
