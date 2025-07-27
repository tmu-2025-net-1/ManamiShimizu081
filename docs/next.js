//雨を降らせるーーーーーーーーーーーーーー

const dropCount = 10;
const body = document.body;

// ページの高さを取得
const pageHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight
);

// @keyframes を動的に定義
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes fallDynamic {
    0% { top: -20px;  }
    100% { top: 2700px;  }
  }
`;
document.head.appendChild(styleSheet);

// 雨粒を生成
for (let i = 0; i < dropCount; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  const x = Math.random() * window.innerWidth;
  const duration = 5 + Math.random() * 20;
  const delay = Math.random() * 5;
  const size = 15;

  drop.style.left = `${x}px`;
  drop.style.width = `${size}%`;
  drop.style.height = `${size}%`;
  drop.style.animation = `fallDynamic ${duration}s linear infinite`;
  drop.style.animationDelay = `${delay}s`;

  body.appendChild(drop);
}


//鏡面反射-----------------------------------
   const original = document.getElementById("original");
   const clone = original.cloneNode(true);
   clone.classList.add("mirror");

   document.getElementById("mirror-container").appendChild(clone);


window.addEventListener('load', () => {
        // 一番下までスクロール
        window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'auto' // 瞬時にスクロール。'smooth' にすると目で見えてしまう
         });
        });

//虹を作る-----------------------------------

window.addEventListener("load", () => {
  const container = document.getElementById("container");
  const imageCount = 5;

  for (let i = 0; i < imageCount; i++) {
    const img = document.createElement("img");
    img.src = "nizi-red.png";
    img.className = "rainbow";

    // ランダムな left位置 (5%〜95%)
    const leftPos = Math.random() * 90 + 5;
    img.style.left = `${leftPos}%`;

    container.appendChild(img);

    // ランダムなアニメーション時間（2〜4秒）
    const duration = Math.random() * 2000 + 2000;

    // トリガーは画像ごとに非同期にスタートさせる（少し遅らせて自然に）
    setTimeout(() => {
      img.animate(
        [
          { transform: "translateY(0)", opacity: 0 },
          { transform: "translateY(30px)", opacity: 1 },
          { transform: "translateY(90vh)", opacity: 0 }
        ],
        {
          duration: duration,
          easing: "ease-in",
          fill: "forwards"
        }
      );
    }, i * 300); // 順番にずらす
  }
});
