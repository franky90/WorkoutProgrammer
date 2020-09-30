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

   //  Shoulders
   var shoulderArray = ["<h3>Military Press</h3>", "<h3>Shoulder press with dumbbells</h3>", "<h3>Behind neck barbell press</h3>"];
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
   var legsArray = ["<h3>Back Squat</h3>", "<h3>Goblet Squat</h3>", "<h3>Leg press machine</h3>"];

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
   var chestArray = ["<h3>Barbell bench press</h3>", "<h3>Push ups</h3>", "<h3>Dumbbells incline chest press</h3>"];

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
   var absArray = ["<h3>Hanging legs raises</h3>", "<h3>Sit ups</h3>", "<h3>Crunches</h3>"];

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
   var pumpOneArray = ["<h3>Ez bar supinated biceps curls</h3>", "<h3>Dumbbells neutral grip biceps curls</h3>", "<h3>Dumbbells Incline Curls</h3>"];

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
   var pumpTwoArray = ["<h3>Ez bar scullcrushers</h3>", "<h3>Triceps pushdown high pulley</h3>", "<h3>Dumbbell triceps extension above head</h3>"];

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
   var enduranceOneArray = ["<h3>Sprints </h3>", "<h3>Farmer Walks</h3>", "<h3>Slum Ball</h3>"];

   btn8 = document.querySelector(".btn8");
   btn8.addEventListener("click", enduranceOneEx);
   ex8.innerHTML = "<h3>-</h3>";


   function enduranceOneEx() {
      var searchTerm = ex8.innerHTML;
      var index = enduranceOneArray.indexOf(searchTerm) + 1;
      if (index == enduranceOneArray.length) index = 0;
      var result = enduranceOneArray[index];
      ex8.innerHTML = result;
      return;
   };

   //Endurance2
   var enduranceTwoArray = ["<h3>Treadmill </h3>", "<h3>Cross Trainer</h3>", "<h3>Rowing Machine</h3>"];

   btn9 = document.querySelector(".btn9");
   btn9.addEventListener("click", enduranceTwoEx);
   ex9.innerHTML = "<h3>-</h3>";


   function enduranceTwoEx() {
      var searchTerm = ex9.innerHTML;
      var index = enduranceTwoArray.indexOf(searchTerm) + 1;
      if (index == enduranceTwoArray.length) index = 0;
      var result = enduranceTwoArray[index];
      ex9.innerHTML = result;
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



   //Functions for Exercises from 1 - 7 which display name of exercise in exercise-title 
   function exerciseDetailsOne() {
      exerciseTitleExternal.innerHTML = ex1.innerHTML;
      checkExerciseTitle();
   };

   function exerciseDetailsTwo() {
      exerciseTitleExternal.innerHTML = ex2.innerHTML;
      checkExerciseTitle();
   };

   function exerciseDetailsThree() {
      exerciseTitleExternal.innerHTML = ex3.innerHTML;
      checkExerciseTitle();
   };

   function exerciseDetailsFour() {
      exerciseTitleExternal.innerHTML = ex4.innerHTML;
      checkExerciseTitle();
   };

   function exerciseDetailsFive() {
      exerciseTitleExternal.innerHTML = ex5.innerHTML;
      checkExerciseTitle();
   };

   function exerciseDetailsSix() {
      exerciseTitleExternal.innerHTML = ex6.innerHTML;
      checkExerciseTitle();
   };

   function exerciseDetailsSeven() {
      exerciseTitleExternal.innerHTML = ex7.innerHTML;
      checkExerciseTitle();
   };

   function exerciseDetailsEight() {
      exerciseTitleExternal.innerHTML = ex8.innerHTML;
      checkExerciseTitle();
   };

   function exerciseDetailsNine() {
      exerciseTitleExternal.innerHTML = ex9.innerHTML;
      checkExerciseTitle();
   };

   //Change exercise-img and exercise-description - dependend from exercise-title

   function checkExerciseTitle() {
      switch (exerciseTitleExternal.textContent) {
         case "Military Press":
            exerciseDetailsContent.textContent = "opis prostego cwiczenia Military press";
            exerciseImage.src = "./images/military.jpg";
            break;
         case "Shoulder press with dumbbells":
            exerciseDetailsContent.textContent = "opis prostego cwiczenia Shoulder press";
            exerciseImage.src = "./images/shoulderPress.jpg";
            break;
         case "Behind neck barbell press":
            exerciseDetailsContent.textContent = "opis prostego cwiczenia Behind neck barbell press";
            exerciseImage.src = "./images/behindNeckPress.jpg";
            break;
         case "Back Squat":
            exerciseDetailsContent.textContent = "opis prostego cwiczenia Back Squat";
            exerciseImage.src = "./images/backSquat.jpg";
            break;
         case "Goblet Squat":
            exerciseDetailsContent.textContent = "opis prostego cwiczenia Goblet Squat";
            exerciseImage.src = "./images/gobletSquat.jpg";
            break;
         case "Dips":
            exerciseDetailsContent.textContent = "opis prostego cwiczenia Dips";
            exerciseImage.src = "./images/dips.png";
            break;

         default:
            exerciseDetailsContent.textContent = "This exercise doesn't have details yet";
            exerciseImage.src = "./images/soon.jpg";
            break;
      };


   };





   // var exerciseTitle

   // var exerciseTitleOne, exerciseTitleTwo, exerciseTitleThree;
   // var exerciseTextOne, exerciseTextTwo, exerciseTextThree;
   // var exerciseImgOne, exerciseImgTwo;



   // function bottomContainerUpdate() {
   //    if (exerciseTitle === exerciseTitleOne) {
   //       exerciseTitleExternal.innerHTML = exerciseTitle;
   //       exerciseDetailsContent.innerHTML = exerciseTextOne;
   //       exerciseImage.src = exerciseImgOne;

   //    } else if (exerciseTitle === exerciseTitleTwo) {
   //       exerciseTitleExternal.innerHTML = exerciseTitle;
   //       exerciseDetailsContent.innerHTML = exerciseTextTwo;
   //       exerciseImage.src = exerciseImgTwo;
   //    } else {
   //       exerciseTitleExternal.innerHTML = exerciseTitle;
   //       exerciseDetailsContent.innerHTML = exerciseTextThree;
   //       exerciseImage.src = exerciseImgThree;
   //    };
   // };
   // // Image Hyperlinks Exercise One
   // function exerciseDetailsOne() {
   //    exerciseTitle = ex1.textContent;
   //    exerciseTitleOne = "Military Press";
   //    exerciseTitleTwo = "Shoulder press with dumbbells";


   //    exerciseTextOne = "<p>Opis ćwiczenia Military Press</p>";
   //    exerciseTextTwo = "<p>Opis ćwiczenia Shoulder Press Dummbeells</p>";
   //    exerciseTextThree = "<p>Opis ćwiczenia Behind NeckPress</p>";

   //    exerciseImgOne = "./images/military.jpg";
   //    exerciseImgTwo = "./images/shoulderPress.jpg";
   //    exerciseImgThree = "./images/behingNeckPress.jpg";

   //    bottomContainerUpdate();
   // };

   // //Function Two

   // function exerciseDetailsTwo() {
   //    exerciseTitle = ex2.textContent;
   //    exerciseTitleOne = "Back Squat";
   //    exerciseTitleTwo = "Goblet Squat";


   //    exerciseTextOne = "<p>Opis ćwiczenia Back Squat</p>";
   //    exerciseTextTwo = "<p>Opis ćwiczenia Goblet Squat</p>";
   //    exerciseTextThree = "<p>Opis ćwiczenia Leg Press Machine</p>";

   //    exerciseImgOne = "./images/backSquat.jpg";
   //    exerciseImgTwo = "./images/gobletSquat.jpg";
   //    exerciseImgThree = "./images/legPressMachine.jpg";

   //    bottomContainerUpdate();
   // };

   // //Function Three

   // function exerciseDetailsThree() {
   //    exerciseTitle = ex3.textContent;
   //    exerciseTitleOne = "Barbell bench press";
   //    exerciseTitleTwo = "Push ups";


   //    exerciseTextOne = "<p>Opis ćwiczenia Barbell bench press </p>";
   //    exerciseTextTwo = "<p>Opis ćwiczenia Push ups </p>";
   //    exerciseTextThree = "<p>Opis ćwiczenia Dumbbells incline chest press</p>";

   //    exerciseImgOne = "./images/";
   //    exerciseImgTwo = "./images/";
   //    exerciseImgThree = "./images/";

   //    bottomContainerUpdate();
   // };

   // //Function Four

   // function exerciseDetailsFour() {
   //    exerciseTitle = ex4.textContent;
   //    exerciseTitleOne = "Pull ups";
   //    exerciseTitleTwo = "Reversed rows";


   //    exerciseTextOne = "<p>Opis ćwiczenia Pull ups </p>";
   //    exerciseTextTwo = "<p>Opis ćwiczenia Reversed rows </p>";
   //    exerciseTextThree = "<p>Opis ćwiczenia Dumbbell rows</p>";

   //    exerciseImgOne = "./images/";
   //    exerciseImgTwo = "./images/";
   //    exerciseImgThree = "./images/";

   //    bottomContainerUpdate();
   // };

   // //Function Five

   // function exerciseDetailsFive() {
   //    exerciseTitle = ex5.textContent;
   //    exerciseTitleOne = "Hanging legs raises";
   //    exerciseTitleTwo = "Sit ups";


   //    exerciseTextOne = "<p>Opis ćwiczenia Hanging legs raises</p>";
   //    exerciseTextTwo = "<p>Opis ćwiczenia Sit ups </p>";
   //    exerciseTextThree = "<p>Opis ćwiczenia Crunches </p>";

   //    exerciseImgOne = "./images/";
   //    exerciseImgTwo = "./images/";
   //    exerciseImgThree = "./images/";

   //    bottomContainerUpdate();
   // };

   // //Function Six

   // function exerciseDetailsSix() {
   //    exerciseTitle = ex6.textContent;
   //    exerciseTitleOne = "Ez bar supinated biceps curls";
   //    exerciseTitleTwo = "Dumbbells neutral grip biceps curls";


   //    exerciseTextOne = "<p>Opis ćwiczenia Ez bar supinated biceps curls </p>";
   //    exerciseTextTwo = "<p>Opis ćwiczenia Dumbbells neutral grip biceps curls </p>";
   //    // exerciseTextThree = "<p>Opis ćwiczenia </p>";

   //    exerciseImgOne = "./images/";
   //    exerciseImgTwo = "./images/";
   //    exerciseImgThree = "./images/";

   //    bottomContainerUpdate();
   // };

   // //Function Seven

   // function exerciseDetailsSeven() {
   //    exerciseTitle = ex7.textContent;
   //    exerciseTitleOne = "Ez bar scullcrushers";
   //    exerciseTitleTwo = "Triceps pushdown high pulley";


   //    exerciseTextOne = "<p>Opis ćwiczenia Ez bar scullcrushers </p>";
   //    exerciseTextTwo = "<p>Opis ćwiczenia Triceps pushdown high pulley </p>";
   //    // exerciseTextThree = "<p>Opis ćwiczenia </p>";

   //    exerciseImgOne = "./images/";
   //    exerciseImgTwo = "./images/";
   //    exerciseImgThree = "./images/";

   //    bottomContainerUpdate();
   // };

   //Hide buttons Function

   function hideButtons() {
      document.getElementById("super-pump-header").textContent = "Random Workout";
      document.querySelector(".training-style1").style.display = "none";
      document.querySelector(".training-style2").style.display = "none";
      document.querySelector(".training-options").style.display = "none";
      document.querySelector(".routine-details").style.display = "block";
      document.querySelector(".super-endurance").style.display = "none";
      superButton.classList.add("super-pump-center");

      exerciseImage.src = "./images/hulk.jpg";



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

   function pumpDefault(){
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

      exerciseImage.src = "./images/hulk.jpg";

      containerSix.style.display = "none";
      containerSeven.style.display = "none";
      containerEight.style.display = "none";
      containerNine.style.display = "none";

      for (i = 1; i < 9; i++) {
         buttons[i] = document.querySelector(".btn" + i).style.display = "inline-block";
      };

      document.querySelector(".training-style1").style.display = "block";
      document.querySelector(".training-style2").style.display = "block";
      document.getElementById("super-pump-header").textContent = "Super Pump";

      //All Stats Default
      defStats();
      pumpDefault()
   };

   //FBW Button

   document.querySelector(".fbw").addEventListener("click", showButtons);

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
      ex2.innerHTML = "<h3>Barbell Bench Press</h3>";
      ex3.innerHTML = "<h3>Incline Dumbbells Press</h3>";
      ex4.innerHTML = "<h3>Decline Barbell Press</h3>";
      ex5.innerHTML = "<h3>Dumbbells Flyes</h3>";

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

      ex1.innerHTML = "<h3>Barbell incline bench press</h3>";
      ex2.innerHTML = "<h3>Incline Dumbbell Fly</h3>";
      ex3.innerHTML = "<h3>Push ups</h3>";
      ex4.innerHTML = "<h3>Cable Crossover</h3>";
      ex5.innerHTML = "<h3>Dumbbells bench press</h3>";
      ex6.innerHTML = "<h3>Pec deck</h3>";
      ex7.innerHTML = "<h3>Triceps pushdowns machine</h3>";


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


   //Split Button
   var splitButton = document.querySelector(".split-chest");
   splitButton.addEventListener("click", handleSplitButton);

   function handleSplitButton() {
      hideButtons();
      splitChestOne();
      superButton.removeEventListener("click", superPump);
      superButton.addEventListener("click", splitChestTwo);

   };