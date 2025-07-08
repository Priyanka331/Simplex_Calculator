function display(n) {
      document.getElementById("expr").value += n;
    }

    function equals() {
      let x = document.getElementById("expr").value;
      let y = eval(x);
      document.getElementById("expr").value = y;
    }

    function clearall() {
      document.getElementById("expr").value = "";
    }