   // Gloabal Variables for Table
   var sets, se1, se2, se3, se4, se5, se8, se9;
   var reps, rep1, rep2, rep3, rep4, rep5, rep8, rep9;
   var rest, res1, res2, res3, res4, res5, res8, res9;
   var order, or1, or2, or3, or4, or5, or6, or7, or8, or9;
   var weights, wei1, wei2, wei3, wei4, wei5, wei6, wei7, wei8, wei9;
   var exercises, ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9;
   var buttons, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;

   buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

   se1 = document.querySelector(".se1");
   se2 = document.querySelector(".se2");
   se3 = document.querySelector(".se3");
   se4 = document.querySelector(".se4");
   se5 = document.querySelector(".se5");
   se6 = document.querySelector(".se6");
   se7 = document.querySelector(".se7");
   se8 = document.querySelector(".se8");
   se9 = document.querySelector(".se9");
   sets = [se1, se2, se3, se4, se5, se6, se7, se8, se9];


   rep1 = document.querySelector(".rep1");
   rep2 = document.querySelector(".rep2");
   rep3 = document.querySelector(".rep3");
   rep4 = document.querySelector(".rep4");
   rep5 = document.querySelector(".rep5");
   rep6 = document.querySelector(".rep6");
   rep7 = document.querySelector(".rep7");
   rep8 = document.querySelector(".rep8");
   rep9 = document.querySelector(".rep9");
   reps = [rep1, rep2, rep3, rep4, rep5, rep6, rep7, rep8, rep9];

   res1 = document.querySelector(".res1");
   res2 = document.querySelector(".res2");
   res3 = document.querySelector(".res3");
   res4 = document.querySelector(".res4");
   res5 = document.querySelector(".res5");
   res6 = document.querySelector(".res6");
   res7 = document.querySelector(".res7");
   res8 = document.querySelector(".res8");
   res9 = document.querySelector(".res9");
   rest = [res1, res2, res3, res4, res5, res6, res7, res8, res9];

   or1 = document.querySelector(".or1");
   or2 = document.querySelector(".or2");
   or3 = document.querySelector(".or3");
   or4 = document.querySelector(".or4");
   or5 = document.querySelector(".or5");
   or6 = document.querySelector(".or6");
   or7 = document.querySelector(".or7");
   or8 = document.querySelector(".or8");
   or9 = document.querySelector(".or9");
   order = [or1, or2, or3, or4, or5, or6, or7, or8, or9];

   wei1 = document.querySelector(".wei1");
   wei2 = document.querySelector(".wei2");
   wei3 = document.querySelector(".wei3");
   wei4 = document.querySelector(".wei4");
   wei5 = document.querySelector(".wei5");
   wei6 = document.querySelector(".wei6");
   wei7 = document.querySelector(".wei7");
   wei8 = document.querySelector(".wei8");
   wei9 = document.querySelector(".wei9");
   weights = [wei1, wei2, wei3, wei4, wei5, wei6, wei7, wei8, wei9];


   ex1 = document.querySelector(".ex1");
   ex2 = document.querySelector(".ex2");
   ex3 = document.querySelector(".ex3");
   ex4 = document.querySelector(".ex4");
   ex5 = document.querySelector(".ex5");
   ex6 = document.querySelector(".ex6");
   ex7 = document.querySelector(".ex7");
   ex8 = document.querySelector(".ex8");
   ex9 = document.querySelector(".ex9");
   exercises = [ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9];

   var containerOne, containerTwo, containerThree, containerFour, containerFive, containerSix, containerSeven, containerEight, containerNine;

   containerOne = document.querySelector(".container-one");
   containerTwo = document.querySelector(".container-two");
   containerThree = document.querySelector(".container-three");
   containerFour = document.querySelector(".container-four");
   containerFive = document.querySelector(".container-five");
   containerSix = document.querySelector(".container-six");
   containerSeven = document.querySelector(".container-seven");
   containerEight = document.querySelector(".container-eight");
   containerNine = document.querySelector(".container-nine");
   // Extend button
var transformButton = document.querySelector(".extend-container");
transformButton.addEventListener("click",tableContent);

function tableContent(){
   window.scrollTo(0, 940);
};


   //  Shoulders
   var shoulderArray = ["<h3>Military press</h3>", "<h3>Shoulder press with dumbbells</h3>", "<h3>Behind neck barbell press</h3>"];
   btn1 = document.querySelector(".btn1");
   btn1.addEventListener("click", shoulderEx);
   ex1.innerHTML = "<h3>-</h3>";


   function shoulderEx() {
      var searchTerm = ex1.innerHTML;
      var index = shoulderArray.indexOf(searchTerm) + 1;
      if (index == shoulderArray.length) index = 0;
      var result = shoulderArray[index];
      ex1.innerHTML = result;
      return;
   }
   // Legs 
   var legsArray = ["<h3>Back squat</h3>", "<h3>Goblet squat</h3>", "<h3>Leg press machine</h3>"];

   btn2 = document.querySelector(".btn2");
   btn2.addEventListener("click", legsEx);
   ex2.innerHTML = "<h3>-</h3>";


   function legsEx() {
      var searchTerm = ex2.innerHTML;
      var index = legsArray.indexOf(searchTerm) + 1;
      if (index == legsArray.length) index = 0;
      var result = legsArray[index];
      ex2.innerHTML = result;
      return;
   }
   //Chest
   var chestArray = ["<h3>Barbell bench press</h3>", "<h3>Push ups</h3>", "<h3>Incline dumbbells bench press</h3>"];

   btn3 = document.querySelector(".btn3");
   btn3.addEventListener("click", chestEx);
   ex3.innerHTML = "<h3>-</h3>";


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

   btn4 = document.querySelector(".btn4");
   btn4.addEventListener("click", backEx);
   ex4.innerHTML = "<h3>-</h3>";


   function backEx() {
      var searchTerm = ex4.innerHTML;
      var index = backArray.indexOf(searchTerm) + 1;
      if (index == backArray.length) index = 0;
      var result = backArray[index];
      ex4.innerHTML = result;
      return;
   }
   //Abs
   var absArray = ["<h3>Hanging legs raises</h3>", "<h3>Sit ups</h3>", "<h3>Lying legs raises</h3>"];

   btn5 = document.querySelector(".btn5");
   btn5.addEventListener("click", absEx);
   ex5.innerHTML = "<h3>-</h3>";


   function absEx() {
      var searchTerm = ex5.innerHTML;
      var index = absArray.indexOf(searchTerm) + 1;
      if (index == absArray.length) index = 0;
      var result = absArray[index];
      ex5.innerHTML = result;
      return;
   }
   // Pump1
   var pumpOneArray = ["<h3>Ez bar supinated biceps curls</h3>", "<h3>Dumbbells neutral grip biceps curls</h3>", "<h3>Incline dumbbells biceps curls</h3>"];

   btn6 = document.querySelector(".btn6");
   btn6.addEventListener("click", pumpOneEx);
   ex6.innerHTML = "<h3>-</h3>";


   function pumpOneEx() {
      var searchTerm = ex6.innerHTML;
      var index = pumpOneArray.indexOf(searchTerm) + 1;
      if (index == pumpOneArray.length) index = 0;
      var result = pumpOneArray[index];
      ex6.innerHTML = result;
      return;
   };
   //Pump2
   var pumpTwoArray = ["<h3>Ez bar scullcrushers</h3>", "<h3>Triceps pushdowns cable machine</h3>", "<h3>Dumbbell triceps extension above head</h3>"];

   btn7 = document.querySelector(".btn7");
   btn7.addEventListener("click", pumpTwoEx);
   ex7.innerHTML = "<h3>-</h3>";


   function pumpTwoEx() {
      var searchTerm = ex7.innerHTML;
      var index = pumpTwoArray.indexOf(searchTerm) + 1;
      if (index == pumpTwoArray.length) index = 0;
      var result = pumpTwoArray[index];
      ex7.innerHTML = result;
      return;
   };

   // Endurance1
   var enduranceOneArray = ["<h3>Treadmill push</h3>", "<h3>Farmer walk</h3>", "<h3>Slam ball</h3>", "<h3>-</h3>"];

   btn8 = document.querySelector(".btn8");
   btn8.addEventListener("click", enduranceOneEx);
   ex8.innerHTML = "<h3>-</h3>";


   function enduranceOneEx() {
      var searchTerm = ex8.innerHTML;
      var index = enduranceOneArray.indexOf(searchTerm) + 1;
      if (index == enduranceOneArray.length) index = 0;
      var result = enduranceOneArray[index];
      ex8.innerHTML = result;

      // Fill up table depend from exercise column
      if (ex8.innerText === "Slam ball") {
         or8.innerHTML = "<h3>F1</h3>";
         se8.innerHTML = "<h3> 3</h3>";
         rep8.innerHTML = "<h3> 12-15</h3>";
         res8.innerHTML = "<h3> 90-120s</h3>";
         wei8.innerHTML = "<h3> adjust</h3>";
      } else if (ex8.innerText === "Farmer walk") {
         or8.innerHTML = "<h3>F1</h3>";
         se8.innerHTML = "<h3> 3-5</h3>";
         rep8.innerHTML = "<h3> 45 meters</h3>";
         res8.innerHTML = "<h3> 120s</h3>";
         wei8.innerHTML = "<h3> adjust</h3>";
      } else if (ex8.innerText === "Treadmill push") {
         or8.innerHTML = "<h3>F1</h3>";
         se8.innerHTML = "<h3> 3-5</h3>";
         rep8.innerHTML = "<h3> 15s</h3>";
         res8.innerHTML = "<h3> 60s</h3>";
         wei8.innerHTML = "<h3> body weight</h3>";
      } else {
         or8.innerHTML = "<h3>-</h3>";
         se8.innerHTML = "<h3>-</h3>";
         rep8.innerHTML = "<h3>-</h3>";
         res8.innerHTML = "<h3>-</h3>";
         wei8.innerHTML = "<h3>-</h3>";
      };
      return;
   };

   //Endurance2
   var enduranceTwoArray = ["<h3>Treadmill run</h3>", "<h3>Air bike</h3>", "<h3>Rowing machine</h3>", "<h3>-</h3>"];

   btn9 = document.querySelector(".btn9");
   btn9.addEventListener("click", enduranceTwoEx);
   ex9.innerHTML = "<h3>-</h3>";


   function enduranceTwoEx() {
      var searchTerm = ex9.innerHTML;
      var index = enduranceTwoArray.indexOf(searchTerm) + 1;
      if (index == enduranceTwoArray.length) index = 0;
      var result = enduranceTwoArray[index];
      ex9.innerHTML = result;

      // Fill up table depend from exercise column
      if (ex9.innerText === "Treadmill run") {
         or9.innerHTML = "<h3>F2</h3>";
         se9.innerHTML = "<h3>1</h3>";
         rep9.innerHTML = "<h3>15 min</h3>";
         res9.innerHTML = "<h3>-</h3>";
         wei9.innerHTML = "<h3>65-70 %MHR</h3>";
      } else if (ex9.innerText === "Air bike") {
         or9.innerHTML = "<h3>F2</h3>";
         se9.innerHTML = "<h3>1</h3>";
         rep9.innerHTML = "<h3>15 min</h3>";
         res9.innerHTML = "<h3>-</h3>";
         wei9.innerHTML = "<h3>65-70 %MHR</h3>";
      } else if (ex9.innerText === "Rowing machine") {
         or9.innerHTML = "<h3>F2</h3>";
         se9.innerHTML = "<h3>1</h3>";
         rep9.innerHTML = "<h3>15 min</h3>";
         res9.innerHTML = "<h3>-</h3>";
         wei9.innerHTML = "<h3> 65-70 %MHR</h3>";
      } else {
         or9.innerHTML = "<h3>-</h3>";
         se9.innerHTML = "<h3>-</h3>";
         rep9.innerHTML = "<h3>-</h3>";
         res9.innerHTML = "<h3>-</h3>";
         wei9.innerHTML = "<h3>-</h3>";
      };

      return;
   };




   //Strength
   var strengthRadio = document.getElementById("strength");
   strengthRadio.addEventListener("click", strength);

   function strength() {

      for (i = 0; i < 5; i++) {
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
      for (i = 0; i < 5; i++) {
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

   // SUPER ENDURANCE
   var superEndurance = document.querySelector(".super-endurance");
   superEndurance.addEventListener("click", superEnduranceFunction);

   function superEnduranceFunction() {
      var superEndurance1 = document.getElementById("endurance1");
      var superEndurance2 = document.getElementById("endurance2");
      if (superEndurance1.style.display === "none") {
         superEndurance1.style.display = "grid";
         superEndurance2.style.display = "grid";
      } else {
         superEndurance1.style.display = "none";
         superEndurance2.style.display = "none";
      };
   };



   //EventListeners for exercises from 1 to 7
   ex1.addEventListener("click", exerciseDetailsOne);
   ex2.addEventListener("click", exerciseDetailsTwo);
   ex3.addEventListener("click", exerciseDetailsThree);
   ex4.addEventListener("click", exerciseDetailsFour);
   ex5.addEventListener("click", exerciseDetailsFive);
   ex6.addEventListener("click", exerciseDetailsSix);
   ex7.addEventListener("click", exerciseDetailsSeven);
   ex8.addEventListener("click", exerciseDetailsEight);
   ex9.addEventListener("click", exerciseDetailsNine);


   var exerciseImage = document.querySelector(".exercise-image");
   var exerciseTitleExternal = document.querySelector(".exercise-title");
   var exerciseDetailsContent = document.querySelector(".exercise-details");

   //Function that Scroll To Exercise Details 
   function scrollWin() {
      window.scrollTo(0, 1450);
   }



   //Functions for Exercises from 1 - 7 which display name of exercise in exercise-title 
   function exerciseDetailsOne() {
      exerciseTitleExternal.innerHTML = ex1.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   function exerciseDetailsTwo() {
      exerciseTitleExternal.innerHTML = ex2.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   function exerciseDetailsThree() {
      exerciseTitleExternal.innerHTML = ex3.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   function exerciseDetailsFour() {
      exerciseTitleExternal.innerHTML = ex4.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   function exerciseDetailsFive() {
      exerciseTitleExternal.innerHTML = ex5.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   function exerciseDetailsSix() {
      exerciseTitleExternal.innerHTML = ex6.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   function exerciseDetailsSeven() {
      exerciseTitleExternal.innerHTML = ex7.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   function exerciseDetailsEight() {
      exerciseTitleExternal.innerHTML = ex8.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   function exerciseDetailsNine() {
      exerciseTitleExternal.innerHTML = ex9.innerHTML;
      checkExerciseTitle();
      scrollWin();
   };

   //Change exercise-img and exercise-description - dependend from exercise-title

   function checkExerciseTitle() {
      switch (exerciseTitleExternal.textContent) {
         case "Military press":
            exerciseDetailsContent.textContent = "Tips for Military press";
            exerciseImage.src = "./images/military.jpg";
            break;
         case "Shoulder press with dumbbells":
            exerciseDetailsContent.textContent = "Tips for Shoulder press";
            exerciseImage.src = "./images/shoulderPress.jpg";
            break;
         case "Behind neck barbell press":
            exerciseDetailsContent.textContent = "Tips for Behind neck barbell press";
            exerciseImage.src = "./images/behindNeckPress.jpg";
            break;
         case "Back squat":
            exerciseDetailsContent.textContent = "Tips for Back Squat";
            exerciseImage.src = "./images/backSquat.jpg";
            break;
         case "Goblet squat":
            exerciseDetailsContent.textContent = "Tips for Goblet Squat";
            exerciseImage.src = "./images/gobletSquat.jpg";
            break;
         case "Dips":
            exerciseDetailsContent.textContent = "Tips for Dips";
            exerciseImage.src = "./images/dips.jpg";
            break;
         case "Leg press machine":
            exerciseDetailsContent.textContent = "Tips for Leg Press";
            exerciseImage.src = "./images/legPressMachine.jpg";
            break;
         case "Barbell bench press":
            exerciseDetailsContent.textContent = "Tips for Barbell bench press";
            exerciseImage.src = "./images/benchPress.jpg";
            break;
         case "Push ups":
            exerciseDetailsContent.textContent = "Tips for Barbell Push ups";
            exerciseImage.src = "./images/pushUps.jpg";
            break;
         case "Incline dumbbells bench press":
            exerciseDetailsContent.textContent = "Tips for Dumbbells incline bench press";
            exerciseImage.src = "./images/inclineDbPress.png";
            break;
         case "Pull ups":
            exerciseDetailsContent.textContent = "Tips for Pull ups";
            exerciseImage.src = "./images/pullUps.jpg";
            break;
         case "Reversed rows":
            exerciseDetailsContent.textContent = "Tips for Reversed rows";
            exerciseImage.src = "./images/reversedRows.jpg";
            break;
         case "Dumbbell rows":
            exerciseDetailsContent.textContent = "Tips for Dumbbell rows";
            exerciseImage.src = "./images/dbRows.jpg";
            break;
         case "Hanging legs raises":
            exerciseDetailsContent.textContent = "Tips for Hanging legs raises";
            exerciseImage.src = "./images/hangRaises.jpg";
            break;
         case "Sit ups":
            exerciseDetailsContent.textContent = "Tips for Sit ups";
            exerciseImage.src = "./images/sitUps.jpg";
            break;
         case "Lying legs raises":
            exerciseDetailsContent.textContent = "Tips for Lying leg raises";
            exerciseImage.src = "./images/lyingLegsRaises.jpg";
            break;
         case "Decline barbell bench press":
            exerciseDetailsContent.textContent = "Tips for Decline barbell bench press";
            exerciseImage.src = "./images/declineBenchPress.jpg";
            break;
         case "Dumbbells flyes":
            exerciseDetailsContent.textContent = "Tips for Dumbbells flyes";
            exerciseImage.src = "./images/dbFlyesFlat.jpg";
            break;
         case "Incline barbell bench press":
            exerciseDetailsContent.textContent = "Tips for Incline barbell bench press";
            exerciseImage.src = "./images/inclineBbPress.jpg";
            break;
         case "Incline barbell bench press":
            exerciseDetailsContent.textContent = "Tips for Incline barbell bench press";
            exerciseImage.src = "./images/inclineBbPress.jpg";
            break;
         case "Incline dumbbells flyes":
            exerciseDetailsContent.textContent = "Tips for Incline dumbbells flyes";
            exerciseImage.src = "./images/dbFlyesIncline.jpg";
            break;
         case "Cable crossover":
            exerciseDetailsContent.textContent = "Tips for Cable crossover";
            exerciseImage.src = "./images/cableCrossover.jpg";
            break;
         case "Dumbbells bench press":
            exerciseDetailsContent.textContent = "Tips for Dumbbells bench press";
            exerciseImage.src = "./images/dbBenchPress.jpg";
            break;
         case "Pec deck":
            exerciseDetailsContent.textContent = "Tips for Pec deck";
            exerciseImage.src = "./images/pecDec.jpg";
            break;
         case "Triceps pushdowns cable machine":
            exerciseDetailsContent.textContent = "Tips for Triceps pushdowns cable machine";
            exerciseImage.src = "./images/tricepsPushdown.jpg";
            break;
         case "Bar dips":
            exerciseDetailsContent.textContent = "Tips for Bar Dips";
            exerciseImage.src = "./images/barDips.jpg";
            break;
         case "Dumbbells flor press":
            exerciseDetailsContent.textContent = "Tips for Dumbbells flor press";
            exerciseImage.src = "./images/dbFloorPress.jpg";
            break;
         case "Ez bar supinated biceps curls":
            exerciseDetailsContent.textContent = "Tips for Ez bar supinated biceps curls";
            exerciseImage.src = "./images/ezBicepsCurls.jpg";
            break;
         case "Dumbbells neutral grip biceps curls":
            exerciseDetailsContent.textContent = "Tips for Dumbbells neutral grip biceps curls";
            exerciseImage.src = "./images/dbNeutralBicepsCurls.jpg";
            break;
         case "Incline dumbbells biceps curls":
            exerciseDetailsContent.textContent = "Tips for Incline dumbbells biceps curls";
            exerciseImage.src = "./images/inclineDbBicepsCurls.jpg";
            break;
         case "Ez bar scullcrushers":
            exerciseDetailsContent.textContent = "Tips for Ez bar scullcrushers";
            exerciseImage.src = "./images/ezScullcrushers.jpg";
            break;
         case "Dumbbell triceps extension above head":
            exerciseDetailsContent.textContent = "Tips for Dumbbell triceps extension above head";
            exerciseImage.src = "./images/dbTricepsExtension.jpg";
            break;
         case "Treadmill push":
            exerciseDetailsContent.textContent = "Tips for Treadmill push";
            exerciseImage.src = "./images/treadmillPush.jpg";
            break;
         case "Farmer walk":
            exerciseDetailsContent.textContent = "Tips for Farmer walk";
            exerciseImage.src = "./images/farmerWalk.jpg";
            break;
         case "Slam ball":
            exerciseDetailsContent.textContent = "Tips for Slam ball";
            exerciseImage.src = "./images/slamBall.jpg";
            break;
         case "Treadmill run":
            exerciseDetailsContent.textContent = "Tips for Treadmill run";
            exerciseImage.src = "./images/treadmillRun.jpeg";
            break;
         case "Air bike":
            exerciseDetailsContent.textContent = "Tips for Air bike";
            exerciseImage.src = "./images/airBike.jpg";
            break;
         case "Rowing machine":
            exerciseDetailsContent.textContent = "Tips for Rowing machine";
            exerciseImage.src = "./images/rowingMachine.jpg";
            break;
         case "-":
            exerciseTitleExternal.textContent = "Please select exercise";
            exerciseDetailsContent.textContent = "...";
            exerciseImage.src = "./images/noExercise.jpg";
            break;



         default:
            exerciseDetailsContent.textContent = "This exercise doesn't have details yet";
            exerciseImage.src = "./images/soon.jpg";
            break;
      };


   };

   function hideButtons() {
      document.getElementById("super-pump-header").textContent = "Random Workout";
      document.querySelector(".training-style1").style.display = "none";
      document.querySelector(".training-style2").style.display = "none";
      document.querySelector(".training-options").style.display = "none";
      document.querySelector(".routine-details").style.display = "block";
      document.querySelector(".super-endurance").style.display = "none";
      superButton.classList.add("super-pump-center");

      exerciseImage.src = "./images/bottomimage.jpg";



      for (i = 1; i < buttons.length; i++) {
         buttons[i] = document.querySelector(".btn" + i).style.display = "none";
      };
   };
   //Changa data table to 
   function defStats() {

      or1.innerHTML = "<h3>-</h3>";
      ex1.innerHTML = "<h3>-</h3>";
      se1.innerHTML = "<h3>-</h3>";
      rep1.innerHTML = "<h3>-</h3>";
      res1.innerHTML = "<h3>-</h3>";
      wei1.innerHTML = "<h3>-</h3>";

      or2.innerHTML = "<h3>-</h3>";
      ex2.innerHTML = "<h3>-</h3>";
      se2.innerHTML = "<h3>-</h3>";
      rep2.innerHTML = "<h3>-</h3>";
      res2.innerHTML = "<h3>-</h3>";
      wei2.innerHTML = "<h3>-</h3>";

      or3.innerHTML = "<h3>-</h3>";
      ex3.innerHTML = "<h3>-</h3>";
      se3.innerHTML = "<h3>-</h3>";
      rep3.innerHTML = "<h3>-</h3>";
      res3.innerHTML = "<h3>-</h3>";
      wei3.innerHTML = "<h3>-</h3>";

      or4.innerHTML = "<h3>-</h3>";
      ex4.innerHTML = "<h3>-</h3>";
      se4.innerHTML = "<h3>-</h3>";
      rep4.innerHTML = "<h3>-</h3>";
      res4.innerHTML = "<h3>-</h3>";
      wei4.innerHTML = "<h3>-</h3>";

      or5.innerHTML = "<h3>-</h3>";
      ex5.innerHTML = "<h3>-</h3>";
      se5.innerHTML = "<h3>-</h3>";
      rep5.innerHTML = "<h3>-</h3>";
      res5.innerHTML = "<h3>-</h3>";
      wei5.innerHTML = "<h3>-</h3>";

      // Doesen't work
      // for (var i = 0; 1 < 6 ; i++) {
      //    order[i].innerHTML = "<h3>-</h3>";
      //    exercises[i].innerHTML = "<h3>-</h3>";
      //    sets[i].innerHTML = "<h3>-</h3>";
      //    reps[i].innerHTML = "<h3>-</h3>";
      //    rest[i].innerHTML = "<h3>-</h3>";
      //    weights[i].innerHTML = "<h3>-</h3>";  
      // };
   };

   function pumpDefault() {
      or6.innerHTML = "<h3>E1</h3>";
      ex6.innerHTML = "<h3>-</h3>";
      se6.innerHTML = "<h3>3</h3>";
      rep6.innerHTML = "<h3>12-15</h3>";
      res6.innerHTML = "<h3>10s</h3>";
      wei6.innerHTML = "<h3>adjust</h3>";

      or7.innerHTML = "<h3>E2</h3>";
      ex7.innerHTML = "<h3>-</h3>";
      se7.innerHTML = "<h3>3</h3>";
      rep7.innerHTML = "<h3>12-15</h3>";
      res7.innerHTML = "<h3>90s</h3>";
      wei7.innerHTML = "<h3>adjust</h3>";
   };

   // Hide containers six to nine Function

   function containersSixToNineDisplayNone() {
      containerSix.style.display = "none";
      containerSeven.style.display = "none";
      containerEight.style.display = "none";
      containerNine.style.display = "none";
   };

   //Show buttons Function

   function showButtons() {

      superButton.removeEventListener("click", splitChestOne);
      superButton.removeEventListener("click", splitChestTwo);
      superButton.removeEventListener("click", splitChestThree);
      document.querySelector(".training-options").style.display = "grid";
      document.querySelector(".routine-details").style.display = "none";
      document.querySelector(".super-endurance").style.display = "block";
      superButton.addEventListener("click", superPump);
      superButton.classList.remove("super-pump-center");
      superButton.classList.add("super-pump");

      supersetsRadio.checked = false;
      regularRadio.checked = false;
      enduranceRadio.checked = false;
      strengthRadio.checked = false;

      exerciseImage.src = "./images/bottomimage.jpg";

      containersSixToNineDisplayNone()

      for (i = 1; i < 9; i++) {
         buttons[i] = document.querySelector(".btn" + i).style.display = "inline-block";
      };

      document.querySelector(".training-style1").style.display = "block";
      document.querySelector(".training-style2").style.display = "block";
      document.getElementById("super-pump-header").textContent = "Extra Pump";

      //All Stats Default
      defStats();
      pumpDefault();
   };

   //FBW Button

   document.querySelector(".fbw").addEventListener("click", showButtons);

   // Split Chest
   function splitChestOne() {
      containerSix.style.display = "none";
      containerSeven.style.display = "none";
      containerEight.style.display = "none";
      containerNine.style.display = "none";
      containerFive.style.display = "grid";
      //Podmiana Order
      or1.innerHTML = "<h3>A</h3>";
      or2.innerHTML = "<h3>B</h3>";
      or3.innerHTML = "<h3>C</h3>";
      or4.innerHTML = "<h3>D</h3>";
      or5.innerHTML = "<h3>E</h3>";

      //Podmiana Exercises

      ex1.innerHTML = "<h3>Dips</h3>";
      ex2.innerHTML = "<h3>Barbell bench press</h3>";
      ex3.innerHTML = "<h3>Incline dumbbells bench press</h3>";
      ex4.innerHTML = "<h3>Decline barbell bench press</h3>";
      ex5.innerHTML = "<h3>Dumbbells flyes</h3>";

      //Podmiana Sets
      se1.innerHTML = "<h3>5</h3>";
      se2.innerHTML = "<h3>3</h3>";
      se3.innerHTML = "<h3>3</h3>";
      se4.innerHTML = "<h3>3</h3>";
      se5.innerHTML = "<h3>3</h3>";

      //Podmiana Reps

      rep1.innerHTML = "<h3>5</h3>";
      rep2.innerHTML = "<h3>10</h3>";
      rep3.innerHTML = "<h3>10</h3>";
      rep4.innerHTML = "<h3>12</h3>";
      rep5.innerHTML = "<h3>15</h3>";

      //Podmiana Rest

      res1.innerHTML = "<h3>120</h3>";
      res2.innerHTML = "<h3>90</h3>";
      res3.innerHTML = "<h3>90</h3>";
      res4.innerHTML = "<h3>60</h3>";
      res5.innerHTML = "<h3>60</h3>";

      wei1.innerHTML = "<h3>80%RM</h3>";
      wei2.innerHTML = "<h3>70%>RM</h3>";
      wei3.innerHTML = "<h3>60%>RM</h3>";
      wei4.innerHTML = "<h3>60%>RM</h3>";
      wei5.innerHTML = "<h3>60%>RM</h3>";

      superButton.removeEventListener("click", splitChestOne);
      superButton.addEventListener("click", splitChestTwo);
   };

   function splitChestTwo() {
      containerSix.style.display = "grid";
      containerSeven.style.display = "grid";

      //Podmiana Order
      or1.innerHTML = "<h3>A1</h3>";
      or2.innerHTML = "<h3>A2</h3>";
      or3.innerHTML = "<h3>B1</h3>";
      or4.innerHTML = "<h3>B2</h3>";
      or5.innerHTML = "<h3>C1</h3>";
      or6.innerHTML = "<h3>C2</h3>";
      or7.innerHTML = "<h3>D</h3>";


      //Podmiana Exercises

      ex1.innerHTML = "<h3>Incline barbell bench press</h3>";
      ex2.innerHTML = "<h3>Incline dumbbells flyes</h3>";
      ex3.innerHTML = "<h3>Push ups</h3>";
      ex4.innerHTML = "<h3>Cable crossover</h3>";
      ex5.innerHTML = "<h3>Dumbbells bench press</h3>";
      ex6.innerHTML = "<h3>Pec deck</h3>";
      ex7.innerHTML = "<h3>Triceps pushdowns cable machine</h3>";


      //Podmiana Sets
      se1.innerHTML = "<h3>3</h3>";
      se2.innerHTML = "<h3>3</h3>";
      se3.innerHTML = "<h3>3</h3>";
      se4.innerHTML = "<h3>3</h3>";
      se5.innerHTML = "<h3>3</h3>";
      se6.innerHTML = "<h3>3</h3>";
      se7.innerHTML = "<h3>3</h3>";

      //Podmiana Reps

      rep1.innerHTML = "<h3>10 8 6</h3>";
      rep2.innerHTML = "<h3>10 8 6</h3>";
      rep3.innerHTML = "<h3>10</h3>";
      rep4.innerHTML = "<h3>10</h3>";
      rep5.innerHTML = "<h3>12 12 failure</h3>";
      rep6.innerHTML = "<h3>12 12 failure</h3>";
      rep7.innerHTML = "<h3>15 15 failure</h3>";

      //Podmiana Rest

      res1.innerHTML = "<h3>10</h3>";
      res2.innerHTML = "<h3>90</h3>";
      res3.innerHTML = "<h3>10</h3>";
      res4.innerHTML = "<h3>90</h3>";
      res5.innerHTML = "<h3>10</h3>";
      res6.innerHTML = "<h3>90</h3>";
      res7.innerHTML = "<h3>90</h3>";

      wei1.innerHTML = "<h3>70%>RM</h3>";
      wei2.innerHTML = "<h3>adjust</h3>";
      wei3.innerHTML = "<h3>adjust</h3>";
      wei4.innerHTML = "<h3>adjust</h3>";
      wei5.innerHTML = "<h3>adjust</h3>";
      wei6.innerHTML = "<h3>adjust</h3>";
      wei7.innerHTML = "<h3>adjust</h3>";

      superButton.removeEventListener("click", splitChestTwo);
      superButton.addEventListener("click", splitChestThree);
   };

   function splitChestThree() {
      containerFive.style.display = "none";
      containerSix.style.display = "none";
      containerSeven.style.display = "none";

      //Podmiana Order
      or1.innerHTML = "<h3>A1</h3>";
      or2.innerHTML = "<h3>A2</h3>";
      or3.innerHTML = "<h3>A3</h3>";
      or4.innerHTML = "<h3>A4</h3>";



      //Podmiana Exercises

      ex1.innerHTML = "<h3>Dips</h3>";
      ex2.innerHTML = "<h3>Bar dips</h3>";
      ex3.innerHTML = "<h3>Push ups</h3>";
      ex4.innerHTML = "<h3>Dumbbells flor press</h3>";



      //Podmiana Sets
      se1.innerHTML = "<h3>5</h3>";
      se2.innerHTML = "<h3>5</h3>";
      se3.innerHTML = "<h3>5</h3>";
      se4.innerHTML = "<h3>5</h3>";


      //Podmiana Reps

      rep1.innerHTML = "<h3>10</h3>";
      rep2.innerHTML = "<h3>10</h3>";
      rep3.innerHTML = "<h3>10</h3>";
      rep4.innerHTML = "<h3>10</h3>";


      //Podmiana Rest

      res1.innerHTML = "<h3>10</h3>";
      res2.innerHTML = "<h3>10</h3>";
      res3.innerHTML = "<h3>10</h3>";
      res4.innerHTML = "<h3>180</h3>";


      wei1.innerHTML = "<h3>adjust</h3>";
      wei2.innerHTML = "<h3>adjust</h3>";
      wei3.innerHTML = "<h3>adjust</h3>";
      wei4.innerHTML = "<h3>adjust</h3>";


      superButton.removeEventListener("click", splitChestThree);
      superButton.addEventListener("click", splitChestOne);
   };


   //Split Chest Button
   var splitChest = document.querySelector(".split-chest");
   splitChest.addEventListener("click", handleSplitChest);

   function handleSplitChest() {
      hideButtons();
      splitChestOne();
      superButton.removeEventListener("click", superPump);
      superButton.addEventListener("click", splitChestTwo);

   };

     function notAvailable(){
     alert("This content is not available yet");
   };





   // Split Shoulder Button
   var splitShoulders = document.querySelector(".split-shoulders");
   splitShoulders.addEventListener("click", notAvailable);

   // Split Legs Button
   var splitLegs = document.querySelector(".split-legs");
   splitLegs.addEventListener("click", notAvailable);

   //Lower Back Pain
   var backPain = document.querySelector(".lower-back-pain");
   backPain.addEventListener("click", notAvailable);
  
   //Back pain
   var upperBackPain = document.querySelector(".back-pain");
   upperBackPain.addEventListener("click", notAvailable);
   //Acl Treatment
   var aclTreatment = document.querySelector(".acl-treatment");
   aclTreatment.addEventListener("click", notAvailable);

   //Shoulder Mobility
   var shoulderMobility = document.querySelector(".shoulder-mobility");
   shoulderMobility.addEventListener("click", notAvailable);
   //Copy Grid Content 

   var copyButton = document.querySelector(".copy-button");
   copyButton.addEventListener("click", copy);


   function copy() {

      var stringOne, stringTwo, stringThree, stringFour, stringFive, stringSix, stringSeven, stringEight, stringNine;



      stringOne = or1.textContent + " ) " + ex1.textContent + " " + se1.textContent + " sets " + rep1.textContent + " reps " + res1.textContent + " rest " + wei1.textContent + "\n";
      stringTwo = or2.textContent + " ) " + ex2.textContent + " " + se2.textContent + " sets " + rep2.textContent + " reps " + res2.textContent + " rest " + wei2.textContent + "\n";
      stringThree = or3.textContent + " ) " + ex3.textContent + " " + se3.textContent + " sets " + rep3.textContent + " reps " + res3.textContent + " rest " + wei3.textContent + "\n";
      stringFour = or4.textContent + " ) " + ex4.textContent + " " + se4.textContent + " sets " + rep4.textContent + " reps " + res4.textContent + " rest " + wei4.textContent + "\n";
      stringFive = or5.textContent + " ) " + ex5.textContent + " " + se5.textContent + " sets " + rep5.textContent + " reps " + res5.textContent + " rest " + wei5.textContent + "\n";
      stringSix = or6.textContent + " ) " + ex6.textContent + " " + se6.textContent + " sets " + rep6.textContent + " reps " + res6.textContent + " rest " + wei6.textContent + "\n";
      stringSeven = or7.textContent + " ) " + ex7.textContent + " " + se7.textContent + " sets " + rep7.textContent + " reps " + res7.textContent + " rest " + wei7.textContent + "\n";
      stringEight = or8.textContent + " ) " + ex8.textContent + " " + se8.textContent + " sets " + rep8.textContent + " reps " + res8.textContent + " rest " + wei8.textContent + "\n";
      stringNine = or9.textContent + " ) " + ex9.textContent + " " + se9.textContent + " sets " + rep9.textContent + " reps " + res9.textContent + " rest " + wei9.textContent + "\n";


      // stringOne= stringOneComplex.toString();
      // stringTwo= stringTwoComplex.toString();
      // stringThree= stringThreeComplex.toString();
      // stringFour= stringFourComplex.toString();
      // stringFive= stringFiveComplex.toString();
      // stringSix= stringSixComplex.toString();
      // stringSeven= stringSevenComplex.toString();
      // stringEight= stringEightComplex.toString();
      // stringNine= stringNineComplex.toString();
      fullString = ["Complete Workout Programmer \n"];

      function fullStrings() {
         // dodac tylko jesli display elementu jest grid

         if (containerOne.style.display !== "none") {
            fullString.push(stringOne);
         };

         if (containerTwo.style.display !== "none") {
            fullString.push(stringTwo);
         };

         if (containerThree.style.display !== "none") {
            fullString.push(stringThree);
         };

         if (containerFour.style.display !== "none") {
            fullString.push(stringFour);
         };
         if (containerFive.style.display !== "none") {
            fullString.push(stringFive);
         };
         if (containerSix.style.display !== "none") {
            fullString.push(stringSix);
         };
         if (containerSeven.style.display !== "none") {
            fullString.push(stringSeven);
         };
         if (containerEight.style.display !== "none") {
            fullString.push(stringEight);
         };
         if (containerNine.style.display !== "none") {
            fullString.push(stringNine);
         };

         return fullString;
      };
      fullStrings();

      var copyContent = fullString.toString();
      copyContentReady = copyContent.split(',').join('');
      console.log(copyContentReady);
      navigator.clipboard.writeText(copyContentReady);
      alert("Workout Copied");
   };

   // Reset Strony Do podstawowych ustawien
   showButtons();


   //Contact Form
   const FormState = {
      first: '',
      last: '',
      email: '',
      experience: '',
      gender: '',
      file: null,
      Message: '',
   }
   const firstName = document.getElementById('firstName')
   bindTextInput(firstName, 'first')
   const lastName = document.getElementById('lastName')
   
   bindTextInput(lastName, 'last')
   const email = document.getElementById('email')
   bindTextInput(email, 'email')
   const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   const textArea = document.getElementById('textArea')
   bindTextInput(textArea, 'Message')
   const experience = document.getElementById('experience')
   const form = document.getElementById('form')
   const errorElement = document.getElementById('error')
   const successElement = document.getElementById('success')
   const fileUploadElement = document.getElementById('fileUpload')

   function resetFileInput() {
      fileUploadElement.value = ''
      FormState.file = null
   }
   
   fileUploadElement.addEventListener('change', function (fileChangeEvent) {
      FormState.file = fileChangeEvent.target.files.length > 0 ? fileChangeEvent.target.files[0] : null
   })

   function bindTextInput(inputElement, stateKey) 
   {
      inputElement.addEventListener('input', function (event) {
         const value = event.target.value
         FormState[stateKey] = value
      })
   }


   function createErrorNode(text, papaNode) {
      const node = document.createElement('h4')
      node.innerText = text
      node.classList.add('errorCell')
      papaNode.appendChild(node)
   }

   const success = document.getElementById('success');
   // const genderMale = document.getElementById('male')
   //    const gender = "not Selected"

     

   form.addEventListener('submit', (e) => {
      const gender = document.querySelector('input[name="gender"]:checked').value
      let messages = []
      if (firstName.value === "" || firstName == null) {
         messages.push('First Name is required')
      }
      if (lastName.value === "" || lastName == null){
         messages.push('Last Name is required')
      }

      if (email.value.match(mailformat)){
      }else{
         messages.push('Incorrect email address') 
      }
      
      if (textArea.value.length < 10){
         messages.push('Message has to be longer then 10 characters')
      }

      if (experience.value == "empty"){
         messages.push('Please select Training Experience level')  
      }
      validateFileData(messages, FormState)
      
      errorElement.innerHTML = ''
      
      if(messages.length > 0){
         e.preventDefault()
         messages.forEach(msg => createErrorNode(msg, errorElement))
      } else {
         messages = "";
         e.preventDefault();
         success.textContent = "Form Sent Succesfully";
         alert(`First Name : ${firstName.value}\n
         Last Name: ${lastName.value}\n
         Email : ${email.value}\n
         Experience : ${experience.value}\n
         Gender : ${gender}\n
         Message : ${textArea.value}\n
         Form Submitted Successfully!`);
         // alert('Namenow submitting the form!')// write code that will submit this via HTTP
         
         submitFormData()
         form.reset();
      }
})

// doing this...
submitFormData()
