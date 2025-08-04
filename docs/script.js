



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

//スクロール連動ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const kumoMo = document.querySelector('.kumo-mo');

    // スクロールに応じて動かす量
    const start = 1000;  // 動き始め
    const end = 1600;    // 止まる位置
    const speed = 1.2;   // 動く速さ（1.0〜2.0ぐらいで調整）

    if (scrollY < start) {
      kumoMo.style.transform = `translateY(0px)`;
    } else if (scrollY >= start && scrollY <= end) {
      const moveY = (scrollY - start) * speed;
      kumoMo.style.transform = `translateY(${moveY}px)`;
    } else {
      const maxMove = (end - start) * speed;
      kumoMo.style.transform = `translateY(${maxMove}px)`;
    }
  });

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const kumoMo = document.querySelector('.ame-mo');

    // スクロールに応じて動かす量
    const start = 1800;  // 動き始め
    const end = 2300;    // 止まる位置
    const speed = 1.2;   // 動く速さ（1.0〜2.0ぐらいで調整）

    if (scrollY < start) {
      kumoMo.style.transform = `translateY(0px)`;
    } else if (scrollY >= start && scrollY <= end) {
      const moveY = (scrollY - start) * speed;
      kumoMo.style.transform = `translateY(${moveY}px)`;
    } else {
      const maxMove = (end - start) * speed;
      kumoMo.style.transform = `translateY(${maxMove}px)`;
    }
  });

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const kumoMo = document.querySelector('.shizuku-mo');

    // スクロールに応じて動かす量
    const start = 2500;  // 動き始め
    const end = 2800;    // 止まる位置
    const speed = 1.2;   // 動く速さ（1.0〜2.0ぐらいで調整）

    if (scrollY < start) {
      kumoMo.style.transform = `translateY(0px)`;
    } else if (scrollY >= start && scrollY <= end) {
      const moveY = (scrollY - start) * speed;
      kumoMo.style.transform = `translateY(${moveY}px)`;
    } else {
      const maxMove = (end - start) * speed;
      kumoMo.style.transform = `translateY(${maxMove}px)`;
    }
  });