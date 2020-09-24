   // Gloabal Variables for Table

   var sets, se1, se2, se3, se4, se5;
   var reps, rep1, rep2, rep3, rep4, rep5;
   var rest, res1, res2, res3, res4, res5;
   var or1, or2, or3, or4, or5;
   var weights, wei1, wei2, wei3, wei4, wei5;
   var ex1, ex2, ex3, ex4, ex5, ex6, ex7;

   se1 = document.querySelector(".se1");
   se2 = document.querySelector(".se2");
   se3 = document.querySelector(".se3");
   se4 = document.querySelector(".se4");
   se5 = document.querySelector(".se5");
   sets = [se1, se2, se3, se4, se5];


   rep1 = document.querySelector(".rep1");
   rep2 = document.querySelector(".rep2");
   rep3 = document.querySelector(".rep3");
   rep4 = document.querySelector(".rep4");
   rep5 = document.querySelector(".rep5");
   reps = [rep1, rep2, rep3, rep4, rep5];

   res1 = document.querySelector(".res1");
   res2 = document.querySelector(".res2");
   res3 = document.querySelector(".res3");
   res4 = document.querySelector(".res4");
   res5 = document.querySelector(".res5");
   rest = [res1, res2, res3, res4, res5];

   or1 = document.querySelector(".or1");
   or2 = document.querySelector(".or2");
   or3 = document.querySelector(".or3");
   or4 = document.querySelector(".or4");
   or5 = document.querySelector(".or5");
   ord = [or1, or2, or3, or4, or5];

   wei1 = document.querySelector(".wei1");
   wei2 = document.querySelector(".wei2");
   wei3 = document.querySelector(".wei3");
   wei4 = document.querySelector(".wei4");
   wei5 = document.querySelector(".wei5");
   weights = [wei1, wei2, wei3, wei4, wei5]


   ex1 = document.querySelector(".ex1");
   ex2 = document.querySelector(".ex2");
   ex3 = document.querySelector(".ex3");
   ex4 = document.querySelector(".ex4");
   ex5 = document.querySelector(".ex5");
   ex6 = document.querySelector(".ex6");
   ex7 = document.querySelector(".ex7");


   //  Shoulders
   var shoulderArray = ["<h3>Military Press</h3>", "<h3>Shoulder press with dumbbells</h3>", "<h3>Behind neck barbell press</h3>"];
   var btn1 = document.querySelector(".btn1");
   btn1.addEventListener("click", shoulderEx);
   ex1.innerHTML = shoulderArray[0];


   function shoulderEx() {
      var searchTerm = ex1.innerHTML;
      var index = shoulderArray.indexOf(searchTerm) + 1;
      if (index == shoulderArray.length) index = 0;
      var result = shoulderArray[index];
      ex1.innerHTML = result;
      return;
   }
   // Legs 
   var legsArray = ["<h3>Back Squat</h3>", "<h3>Goblet Squat</h3>", "<h3>Leg press machine</h3>"];

   var btn2 = document.querySelector(".btn2");
   btn2.addEventListener("click", legsEx);
   ex2.innerHTML = legsArray[0];


   function legsEx() {
      var searchTerm = ex2.innerHTML;
      var index = legsArray.indexOf(searchTerm) + 1;
      if (index == legsArray.length) index = 0;
      var result = legsArray[index];
      ex2.innerHTML = result;
      return;
   }
   //Chest
   var chestArray = ["<h3>Barbell bench press</h3>", "<h3>Push ups</h3>", "<h3>Dumbbells incline chest press</h3>"];

   var btn3 = document.querySelector(".btn3");
   btn3.addEventListener("click", chestEx);
   ex3.innerHTML = chestArray[0];


   function chestEx() {
      var searchTerm = ex3.innerHTML;
      var index = chestArray.indexOf(searchTerm) + 1;
      if (index == chestArray.length) index = 0;
      var result = chestArray[index];
      ex3.innerHTML = result;
      return;
   }
   //Back 
   var backArray = ["<h3>Pull ups</h3>", "<h3>Reversed rows</h3>", "<h3>Dumbbell rows</h3>"];

   var btn4 = document.querySelector(".btn4");
   btn4.addEventListener("click", backEx);
   ex4.innerHTML = backArray[0];


   function backEx() {
      var searchTerm = ex4.innerHTML;
      var index = backArray.indexOf(searchTerm) + 1;
      if (index == backArray.length) index = 0;
      var result = backArray[index];
      ex4.innerHTML = result;
      return;
   }
   //Abs
   var absArray = ["<h3>Hanging legs raises</h3>", "<h3>Sit ups</h3>", "<h3>Crunches</h3>"];

   var btn5 = document.querySelector(".btn5");
   btn5.addEventListener("click", absEx);
   ex5.innerHTML = absArray[0];


   function absEx() {
      var searchTerm = ex5.innerHTML;
      var index = absArray.indexOf(searchTerm) + 1;
      if (index == absArray.length) index = 0;
      var result = absArray[index];
      ex5.innerHTML = result;
      return;
   }
   // Pump1
   var pumpOneArray = ["<h3>Ez bar supinated biceps curls</h3>", "<h3>Dumbbells neutral grip biceps curls</h3>", "<h3>Dumbbells Incline Curls</h3>"];

   var btn6 = document.querySelector(".btn6");
   btn6.addEventListener("click", pumpOneEx);
   ex6.innerHTML = pumpOneArray[0];


   function pumpOneEx() {
      var searchTerm = ex6.innerHTML;
      var index = pumpOneArray.indexOf(searchTerm) + 1;
      if (index == pumpOneArray.length) index = 0;
      var result = pumpOneArray[index];
      ex6.innerHTML = result;
      return;
   }
   //Pump2
   var pumpTwoArray = ["<h3>Ez bar scullcrushers</h3>", "<h3>Triceps pushdown high pulley</h3>", "<h3>Dumbbell triceps extension above head</h3>"];

   var btn7 = document.querySelector(".btn7");
   btn7.addEventListener("click", pumpTwoEx);
   ex7.innerHTML = pumpTwoArray[0];


   function pumpTwoEx() {
      var searchTerm = ex7.innerHTML;
      var index = pumpTwoArray.indexOf(searchTerm) + 1;
      if (index == pumpTwoArray.length) index = 0;
      var result = pumpTwoArray[index];
      ex7.innerHTML = result;
      return;
   }

   //Strength
   var strengthRadio = document.getElementById("strength");
   strengthRadio.addEventListener("click", strength);

   function strength() {

      for (i = 0; i < sets.length; i++) {
         sets[i].innerHTML = "<h3>5</h3>";
         reps[i].innerHTML = "<h3>5-8</h3>";
         rest[i].innerHTML = "<h3>120s</h3>";
         weights[i].innerHTML = "<h3>70-80%RM</h3>";
      };
      if (document.getElementById("supersets").checked) {
         res1.innerHTML = "<h3>30s</h3>";
         res2.innerHTML = "<h3>180s</h3>";
         res3.innerHTML = "<h3>30s</h3>";
         res4.innerHTML = "<h3>180s</h3>";
         res5.innerHTML = "<h3>120s</h3>";
      };


   };
   // Endurance
   var enduranceRadio = document.getElementById("endurance");
   enduranceRadio.addEventListener("click", endurance);

   function endurance() {
      for (i = 0; i < sets.length; i++) {
         sets[i].innerHTML = "<h3>4</h3>";
         reps[i].innerHTML = "<h3>15-20</h3>";
         rest[i].innerHTML = "<h3>90s</h3>";
         weights[i].innerHTML = "<h3>50-60%RM</h3>";
      };
      if (document.getElementById("supersets").checked) {
         res1.innerHTML = "<h3>10s</h3>";
         res2.innerHTML = "<h3>90s</h3>";
         res3.innerHTML = "<h3>10s</h3>";
         res4.innerHTML = "<h3>90s</h3>";
         res5.innerHTML = "<h3>90s</h3>";
      };
   };

   //Intensity Regular
   var regularRadio = document.getElementById("regular");
   regularRadio.addEventListener("click", regular);

   function regular() {
      or1.innerHTML = "<h3>A</h3>";
      or2.innerHTML = "<h3>B</h3>";
      or3.innerHTML = "<h3>C</h3>";
      or4.innerHTML = "<h3>D</h3>";
      or5.innerHTML = "<h3>E</h3>";

      if (document.getElementById("strength").checked) {
         res1.innerHTML = "<h3>120s</h3>";
         res2.innerHTML = "<h3>120s</h3>";
         res3.innerHTML = "<h3>120s</h3>";
         res4.innerHTML = "<h3>120s</h3>";
         res5.innerHTML = "<h3>120s</h3>";
      } else if (document.getElementById("endurance").checked) {
         res1.innerHTML = "<h3>90s</h3>";
         res2.innerHTML = "<h3>90s</h3>";
         res3.innerHTML = "<h3>90s</h3>";
         res4.innerHTML = "<h3>90s</h3>";
         res5.innerHTML = "<h3>90s</h3>";
      };


   };

   //Intensity Supersets
   var supersetsRadio = document.getElementById("supersets");
   supersetsRadio.addEventListener("click", supersets);

   function supersets() {
      or1.innerHTML = "<h3>A1</h3>";
      or2.innerHTML = "<h3>A2</h3>";
      or3.innerHTML = "<h3>B1</h3>";
      or4.innerHTML = "<h3>B2</h3>";
      or5.innerHTML = "<h3>C</h3>";

      if (document.getElementById("strength").checked) {
         res1.innerHTML = "<h3>30s</h3>";
         res2.innerHTML = "<h3>180s</h3>";
         res3.innerHTML = "<h3>30s</h3>";
         res4.innerHTML = "<h3>180s</h3>";
         res5.innerHTML = "<h3>120s</h3>";
      } else if (document.getElementById("endurance").checked) {
         res1.innerHTML = "<h3>10s</h3>";
         res2.innerHTML = "<h3>90s</h3>";
         res3.innerHTML = "<h3>10s</h3>";
         res4.innerHTML = "<h3>90s</h3>";
         res5.innerHTML = "<h3>90s</h3>";
      };
   };

   //SUPER PUMP

   var superButton = document.querySelector(".super-pump");
   superButton.addEventListener("click", superPump);

   function superPump() {
      var superPump1 = document.getElementById("pump1");
      var superPump2 = document.getElementById("pump2");
      if (superPump1.style.display === "none") {
         superPump1.style.display = "grid";
         superPump2.style.display = "grid";
      } else {
         superPump1.style.display = "none";
         superPump2.style.display = "none";
      };
   };

   //All Hyperlinks
   ex1.addEventListener("click", exerciseDetailsOne);
   // ex2.addEventListener("click",exerciseDetailsTwo);
   // ex3.addEventListener("click",exerciseDetailsThree);
   // ex4.addEventListener("click",exerciseDetailsFour);
   // ex5.addEventListener("click",exerciseDetailsFive);
   // ex6.addEventListener("click",exerciseDetailsSix);
   // ex7.addEventListener("click",exerciseDetailsSeven);

   // Image Hyperlinks Exercise One

   function exerciseDetailsOne() {
      var exerciseTitle = ex1.textContent;
      var exerciseImage = document.querySelector(".exercise-image");
      var exerciseTitleExternal = document.querySelector(".exercise-title");
      var exerciseDetailsContent = document.querySelector(".exercise-text");

      if (exerciseTitle === "Military Press") {
         exerciseTitleExternal = exerciseTitle;
         exerciseDetailsContent.innerHTML = "<p>Opis ćwiczenia Military press</p>";
         exerciseImage.src = "./images/military.jpg";

      } else if (exerciseTitle === "Shoulder press with dumbbells") {
         exerciseTitleExternal.innerHTML = exerciseTitle;
         exerciseDetailsContent.innerHTML = "<p>Opis ćwiczenia Shoulder Press Dummbeells</p>";
         exerciseImage.src = "./images/shoulderPress.jpg";
      } else {
         exerciseTitleExternal.innerHTML = exerciseTitle;
         exerciseDetailsContent.innerHTML = "<p>Opis ćwiczenia BehindNeckPress</p>";
         exerciseImage.src = "./images/musculo.png";
      };
   };

   //Second Function

   // function exerciseDetailsTwo(){
   //    var exerciseTitle = ex2.textContent;
   //    var exerciseImage = document.querySelector(".exercise-image");
   //    var exerciseTitleExternal = document.querySelector(".exercise-title").textContent;
   //    var exerciseDetailsContent = document.querySelector(".exercise-text").innerHTML;

   // if(exerciseTitle === "Back Squat"){
   //    exerciseTitleExternal = exerciseTitle;
   //    exerciseDetailsContent = "<p>Opis ćwiczenia 1 z rzędu drugiego</p>";
   //    exerciseImage.src= "./images/dupa.jpg";

   // }else if(exerciseTitle === "Goblet Squat"){
   //    exerciseTitleExternal = exerciseTitle;
   //    exerciseDetailsContent = "<p>Opis ćwiczenia 2 z rzędu drugiego</p>";
   //    exerciseImage.src= "./images/shoulderPress.jpg";
   // }else{
   //    exerciseTitleExternal = exerciseTitle;
   //    exerciseDetailsContent = "<p>Opis ćwiczenia 3 z rzędu drugiego</p>";
   //    exerciseImage.src= "./images/musculo.png";
   // };
   // };



   // var exerciseN = document.querySelector("ex"+ exnumber);

   // var exnumber = 0;
   //   switch (exnumber) {
   //      case 1:
   // exercise = document.querySelector("ex1");

   //         break;
   //         case 2:
   //          exercise = document.querySelector("ex2");

   //                  break;
   //                  case 3:
   // exercise = document.querySelector("ex3");

   //         break;
   //         case 4:
   // exercise = document.querySelector("ex4");

   //         break;
   //         case 1:
   // exercise = document.querySelector("ex1");

   //         break;
   //         case 5:
   // exercise = document.querySelector("ex5");

   //         break;
   //         case 6:
   // exercise = document.querySelector("ex6");

   //         break;      
   //         case 7:
   // exercise = document.querySelector("ex7");

   //         break;

   //         default:
   //          exercise = document.querySelector("ex7");
   //         break;
   //   }