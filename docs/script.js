const dropCount = 30;
const body = document.body;

for (let i = 0; i < dropCount; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  // ランダムな位置・速度・タイミングを設定
  const x = Math.random() * window.innerWidth;
  const duration = 5 + Math.random() * 5; // 5〜10秒
  const delay = Math.random() * 5;

  drop.style.left = `${x}px`;
  drop.style.animationDuration = `${duration}s`;
  drop.style.animationDelay = `${delay}s`;

  body.appendChild(drop);
}
