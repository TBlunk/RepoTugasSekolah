let kesempatan = 3;

// Memunculkan nomor random
 let y = Math.floor(Math.random() * 10 + 1);
 
 let guess = 1;

 document.getElementById("submitguess").onclick = function () {

     // Tebakan nomor   
     let x = document.getElementById("guessField").value;

     if (x == y) {
         alert("ANJAY KAMU BENAR "
             + guess + " Tebakan ");
     }

     /* Bila nomor tidak sesuai*/
     else if (x > y) {
        kesempatan--
         guess++;
         alert("LEBIH RENDAH LAGI KAWAN");
         alert("Kesempatan Tersisa: " + kesempatan)
     }
     else {
        kesempatan--
         guess++;
         alert("LEBIH TINGGI LAGI KAWAN")
         alert("Kesempatan Tersisa: " + kesempatan)
     }
     if (kesempatan === 0) 
     alert("Kesempatan Telah Habis.\nJawaban Yang benar adalah " + y)
 }