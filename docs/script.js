
//雨を降らせるーーーーーーーーーーーーーー

const dropCount = 30;
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


//鏡面反射
   const original = document.getElementById("original");
   const clone = original.cloneNode(true);
   clone.classList.add("mirror");

   document.getElementById("mirror-container").appendChild(clone);


//画面切り替え
   window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight >= docHeight) {
        // 最下部に到達したら next.html に遷移
        window.location.href = "next.html";
      }
    });