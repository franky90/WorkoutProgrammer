   // Gloabal Variables for Table

   var sets, se1, se2, se3, se4, se5;
   var reps, rep1, rep2, rep3, rep4, rep5;
   var rest, res1, res2, res3, res4, res5;
   var or1, or2, or3, or4, or5;
   var weights, wei1, wei2, wei3, wei4, wei5;
   var ex1, ex2, ex3, ex4, ex5, ex6, ex7;
   var buttons, btn1, btn2, btn3, btn4, btn5, btn6, btn7;

   buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7];

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
   btn1 = document.querySelector(".btn1");
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

   btn2 = document.querySelector(".btn2");
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

   btn3 = document.querySelector(".btn3");
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

   btn4 = document.querySelector(".btn4");
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

   btn5 = document.querySelector(".btn5");
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

   btn6 = document.querySelector(".btn6");
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

   btn7 = document.querySelector(".btn7");
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

   //EventListeners for exercises from 1 to 7
   ex1.addEventListener("click", exerciseDetailsOne);
   ex2.addEventListener("click", exerciseDetailsTwo);
   ex3.addEventListener("click", exerciseDetailsThree);
   ex4.addEventListener("click", exerciseDetailsFour);
   ex5.addEventListener("click", exerciseDetailsFive);
   ex6.addEventListener("click", exerciseDetailsSix);
   ex7.addEventListener("click", exerciseDetailsSeven);


   var exerciseImage = document.querySelector(".exercise-image");
   var exerciseTitleExternal = document.querySelector(".exercise-title");
   var exerciseDetailsContent = document.querySelector(".exercise-text");
   var exerciseTitle

   var exerciseTitleOne, exerciseTitleTwo, exerciseTitleThree;
   var exerciseTextOne, exerciseTextTwo, exerciseTextThree;
   var exerciseImgOne, exerciseImgTwo;

   function bottomContainerUpdate() {
      if (exerciseTitle === exerciseTitleOne) {
         exerciseTitleExternal.innerHTML = exerciseTitle;
         exerciseDetailsContent.innerHTML = exerciseTextOne;
         exerciseImage.src = exerciseImgOne;

      } else if (exerciseTitle === exerciseTitleTwo) {
         exerciseTitleExternal.innerHTML = exerciseTitle;
         exerciseDetailsContent.innerHTML = exerciseTextTwo;
         exerciseImage.src = exerciseImgTwo;
      } else {
         exerciseTitleExternal.innerHTML = exerciseTitle;
         exerciseDetailsContent.innerHTML = exerciseTextThree;
         exerciseImage.src = exerciseImgThree;
      };
   };
   // Image Hyperlinks Exercise One
   function exerciseDetailsOne() {
      exerciseTitle = ex1.textContent;
      exerciseTitleOne = "Military Press";
      exerciseTitleTwo = "Shoulder press with dumbbells";


      exerciseTextOne = "<p>Opis ćwiczenia Military Press</p>";
      exerciseTextTwo = "<p>Opis ćwiczenia Shoulder Press Dummbeells</p>";
      exerciseTextThree = "<p>Opis ćwiczenia Behind NeckPress</p>";

      exerciseImgOne = "./images/military.jpg";
      exerciseImgTwo = "./images/shoulderPress.jpg";
      exerciseImgThree = "./images/behingNeckPress.jpg";

      bottomContainerUpdate();
   };

   //Function Two

   function exerciseDetailsTwo() {
      exerciseTitle = ex2.textContent;
      exerciseTitleOne = "Back Squat";
      exerciseTitleTwo = "Goblet Squat";


      exerciseTextOne = "<p>Opis ćwiczenia Back Squat</p>";
      exerciseTextTwo = "<p>Opis ćwiczenia Goblet Squat</p>";
      exerciseTextThree = "<p>Opis ćwiczenia Leg Press Machine</p>";

      exerciseImgOne = "./images/backSquat.jpg";
      exerciseImgTwo = "./images/gobletSquat.jpg";
      exerciseImgThree = "./images/legPressMachine.jpg";

      bottomContainerUpdate();
   };

   //Function Three

   function exerciseDetailsThree() {
      exerciseTitle = ex3.textContent;
      exerciseTitleOne = "Barbell bench press";
      exerciseTitleTwo = "Push ups";


      exerciseTextOne = "<p>Opis ćwiczenia Barbell bench press </p>";
      exerciseTextTwo = "<p>Opis ćwiczenia Push ups </p>";
      exerciseTextThree = "<p>Opis ćwiczenia Dumbbells incline chest press</p>";

      exerciseImgOne = "./images/";
      exerciseImgTwo = "./images/";
      exerciseImgThree = "./images/";

      bottomContainerUpdate();
   };

   //Function Four

   function exerciseDetailsFour() {
      exerciseTitle = ex4.textContent;
      exerciseTitleOne = "Pull ups";
      exerciseTitleTwo = "Reversed rows";


      exerciseTextOne = "<p>Opis ćwiczenia Pull ups </p>";
      exerciseTextTwo = "<p>Opis ćwiczenia Reversed rows </p>";
      exerciseTextThree = "<p>Opis ćwiczenia Dumbbell rows</p>";

      exerciseImgOne = "./images/";
      exerciseImgTwo = "./images/";
      exerciseImgThree = "./images/";

      bottomContainerUpdate();
   };

   //Function Five

   function exerciseDetailsFive() {
      exerciseTitle = ex5.textContent;
      exerciseTitleOne = "Hanging legs raises";
      exerciseTitleTwo = "Sit ups";


      exerciseTextOne = "<p>Opis ćwiczenia Hanging legs raises</p>";
      exerciseTextTwo = "<p>Opis ćwiczenia Sit ups </p>";
      exerciseTextThree = "<p>Opis ćwiczenia Crunches </p>";

      exerciseImgOne = "./images/";
      exerciseImgTwo = "./images/";
      exerciseImgThree = "./images/";

      bottomContainerUpdate();
   };

   //Function Six

   function exerciseDetailsSix() {
      exerciseTitle = ex6.textContent;
      exerciseTitleOne = "Ez bar supinated biceps curls";
      exerciseTitleTwo = "Dumbbells neutral grip biceps curls";


      exerciseTextOne = "<p>Opis ćwiczenia Ez bar supinated biceps curls </p>";
      exerciseTextTwo = "<p>Opis ćwiczenia Dumbbells neutral grip biceps curls </p>";
      // exerciseTextThree = "<p>Opis ćwiczenia </p>";

      exerciseImgOne = "./images/";
      exerciseImgTwo = "./images/";
      exerciseImgThree = "./images/";

      bottomContainerUpdate();
   };

   //Function Seven

   function exerciseDetailsSeven() {
      exerciseTitle = ex7.textContent;
      exerciseTitleOne = "Ez bar scullcrushers";
      exerciseTitleTwo = "Triceps pushdown high pulley";


      exerciseTextOne = "<p>Opis ćwiczenia Ez bar scullcrushers </p>";
      exerciseTextTwo = "<p>Opis ćwiczenia Triceps pushdown high pulley </p>";
      // exerciseTextThree = "<p>Opis ćwiczenia </p>";

      exerciseImgOne = "./images/";
      exerciseImgTwo = "./images/";
      exerciseImgThree = "./images/";

      bottomContainerUpdate();
   };

   //Hide buttons Function

   function hideButtons() {
      document.getElementById("super-pump-header").textContent = "Random Workout";
      document.querySelector(".training-style1").style.display = "none";
      document.querySelector(".training-style2").style.display = "none";


      for (i = 1; i < 8; i++) {
         buttons[i] = document.querySelector(".btn" + i).style.display = "none";
      };
   };

   //Show buttons Function

   function showButtons() {
      superButton.style.display = "block";

      for (i = 1; i < 8; i++) {
         buttons[i] = document.querySelector(".btn" + i).style.display = "inline-block";
      };

      document.querySelector(".training-style1").style.display = "block";
      document.querySelector(".training-style2").style.display = "block";

      document.getElementById("super-pump-header").textContent = "Super Pump";
   };

   //FBW Button

   document.querySelector(".fbw").addEventListener("click", showButtons);

   // Function for random Split Exercises
   // var chestOne = {

   //    //Podmiana Order
   //    or1: or1.innerHTML = "<h3>A</h3>",
   //    or2: or2.innerHTML = "<h3>B</h3>",
   //    or3: or3.innerHTML = "<h3>C</h3>",
   //    or4: or4.innerHTML = "<h3>D</h3>",
   //    or5: or5.innerHTML = "<h3>E</h3>",

   //    //Podmiana Exercises

   //    ex1: ex1.innerHTML = "<h3>Dips</h3>",
   //    ex2: ex2.innerHTML = "<h3>Barbell Bench Press</h3>",
   //    ex3: ex3.innerHTML = "<h3>Incline Dumbbells Press</h3>",
   //    ex4: ex4.innerHTML = "<h3>Decline Barbell Press</h3>",
   //    ex5: ex5.innerHTML = "<h3>Dumbbells Flyes</h3>",

   //    //Podmiana Sets
   //    se1: se1.innerHTML = "<h3>5</h3>",
   //    se2: se2.innerHTML = "<h3>3</h3>",
   //    se3: se3.innerHTML = "<h3>3</h3>",
   //    se4: se4.innerHTML = "<h3>3</h3>",
   //    se5: se5.innerHTML = "<h3>3</h3>",

   //    //Podmiana Reps

   //    rep1: rep1.innerHTML = "<h3>5</h3>",
   //    rep2: rep2.innerHTML = "<h3>10</h3>",
   //    rep3: rep3.innerHTML = "<h3>10</h3>",
   //    rep4: rep4.innerHTML = "<h3>12</h3>",
   //    rep5: rep5.innerHTML = "<h3>15</h3>",

   //    //Podmiana Rest

   //    res1: res1.innerHTML = "<h3>120</h3>",
   //    res2: res2.innerHTML = "<h3>90</h3>",
   //    res3: res3.innerHTML = "<h3>90</h3>",
   //    res4: res4.innerHTML = "<h3>60</h3>",
   //    res5: res5.innerHTML = "<h3>60</h3>",

   //    wei1: wei1.innerHTML = "<h3>80%RM</h3>",
   //    wei2: wei2.innerHTML = "<h3>70%>RM</h3>",
   //    wei3: wei3.innerHTML = "<h3>60%>RM</h3>",
   //    wei4: wei4.innerHTML = "<h3>60%>RM</h3>",
   //    wei5: wei5.innerHTML = "<h3>60%>RM</h3>"
   // };








   function splitChestOne() {

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

function splitChestTwo(){
    //Podmiana Order
    or1.innerHTML = "<h3>A</h3>";
    or2.innerHTML = "<h3>B</h3>";
    or3.innerHTML = "<h3>C</h3>";
    or4.innerHTML = "<h3>D</h3>";
    or5.innerHTML = "<h3>E</h3>";

    //Podmiana Exercises

    ex1.innerHTML = "<h3>Burpees</h3>";
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

    superButton.removeEventListener("click", splitChestTwo);
    superButton.addEventListener("click", splitChestThree);
};

function splitChestThree(){
    //Podmiana Order
    or1.innerHTML = "<h3>A</h3>";
    or2.innerHTML = "<h3>B</h3>";
    or3.innerHTML = "<h3>C</h3>";
    or4.innerHTML = "<h3>D</h3>";
    or5.innerHTML = "<h3>E</h3>";

    //Podmiana Exercises

    ex1.innerHTML = "<h3>Pajacyki</h3>";
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

    superButton.removeEventListener("click", splitChestThree);
    superButton.addEventListener("click", splitChestOne);
};


   //Split Button
   var splitButton = document.querySelector(".split");
   splitButton.addEventListener("click", handleSplitButton);

   function handleSplitButton() {
      hideButtons();
      superButton.removeEventListener("click", superPump);
      superButton.addEventListener("click", splitChestOne);

   };
   
   
   