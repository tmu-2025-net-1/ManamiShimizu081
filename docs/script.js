



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