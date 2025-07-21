const dropCount = 40;
const body = document.body;

for (let i = 0; i < dropCount; i=i+1) {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  // 画像とアニメーションを分岐
  const isShizuku = Math.random() < 0.5;
  const image = isShizuku ? "img/shizuku.png" : "img/ame.png";
  drop.style.backgroundImage = `url('${image}')`;

  const x = Math.random() * window.innerWidth;
  const duration = isShizuku
    ? 10 + Math.random() * 10 // ゆっくり
    : 5 + Math.random() * 3;  // 速め
  const delay = Math.random() * 5;
  const size = isShizuku
    ? 40 + Math.random() * 10 // しずくはやや大きめ
    : 40 + Math.random() * 20;

  drop.style.left = `${x}px`;
  drop.style.width = `${size}px`;
  drop.style.height = `${size}px`;

  // アニメーションと出発位置を分ける
  drop.style.animation = `${isShizuku ? 'fallDrop' : 'fallRain'} ${duration}s linear infinite`;
  drop.style.animationDelay = `${delay}s`;
  drop.style.top = isShizuku ? '1300px' : '0';

  body.appendChild(drop);
}


 
