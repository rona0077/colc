function s() {
    let x = document.getElementById('a').value;
      let z = document.getElementById('b').value;
      let res = document.getElementById('r');
      let l1 = parseFloat(x);
      let l2 = parseFloat(z);

      if (isNaN(l1) && isNaN(l2)) {
        res.innerHTML = "обе строчки неверны";
      } else if (isNaN(l1)) {
        res.innerHTML = "ошибка в первой строчке";
      } else if (isNaN(l2)) {
        res.innerHTML = "ошибка во второй строчке";
      } else {
        res.innerHTML = "Результат: " + (l1 + l2);
      }
    }
