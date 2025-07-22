const body = document.body;

// === 1. しずく（左右に傾きながら落ちる） ===
for (let i = 0; i < 10; i++) {
  const shizuku = document.createElement('div');
  shizuku.classList.add('drop');
  shizuku.style.backgroundImage = "url('img/shizuku.png')";

  // 表示位置（1200pxから）＆左右0〜100pxの範囲
  shizuku.style.top = '1200px';
  const x = Math.random() * 500;
  shizuku.style.left = `${x}px`;

  // サイズとアニメーション
  const size = 50 + Math.random() * 30;
  shizuku.style.width = `${size}px`;
  shizuku.style.height = `${size}/4px`;
  shizuku.style.animation = `fallShizuku ${8 + Math.random() * 4}s ease-in-out infinite`;
  shizuku.style.animationDelay = `${Math.random() * 3}s`;

  body.appendChild(shizuku);
}

// === 2. suiteki（水滴：止まる→落ちる） ===
for (let i = 0; i < 10; i++) {
  const suiteki = document.createElement('div');
  suiteki.classList.add('drop');
  suiteki.style.backgroundImage = "url('img/suiteki.png')";

  // 表示位置：2470pxから
  suiteki.style.top = '2200px';

  // 左右80px〜(画面幅 - 80px) の範囲
  const x = 80 + Math.random() * (window.innerWidth - 160);
  suiteki.style.left = `${x}px`;

  const size = 30 + Math.random() * 30;
  suiteki.style.width = `${size}px`;
  suiteki.style.height = `${size}px`;

  suiteki.style.animation = `floatSuiteki ${4 + Math.random() * 4}s ease-in-out infinite`;
  suiteki.style.animationDelay = `${Math.random() * 3}s`;

  body.appendChild(suiteki);
}

// === 3. ame：2470pxより下に降るが、madoの裏に置く ===
for (let i = 0; i < 20; i++) {
  const ame = document.createElement('div');
  ame.classList.add('drop');
  ame.style.backgroundImage = "url('img/ame.png')";

  // 表示位置：2470pxから
  ame.style.top = '2470px';

  const x = Math.random() * window.innerWidth;
  ame.style.left = `${x}px`;

  const size = 20 + Math.random() * 20;
  ame.style.width = `${size}px`;
  ame.style.height = `${size}px`;

  // 雨はまっすぐ落ちる簡易アニメーション
  ame.style.animation = `fallShizuku ${5 + Math.random() * 3}s linear infinite`;
  ame.style.animationDelay = `${Math.random() * 3}s`;

  ame.style.zIndex = "0"; // madoより下に表示されるように
  body.appendChild(ame);
}
