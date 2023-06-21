$(document).ready(function() {
    var timer;
    var score = 0;
  
    function startGame() {
      score = 0;
      $("#score").text("Score: " + score);
      $("#answers").empty();
      generateCategory();
      startTimer();
      $("#startBtn").prop("disabled", true);
      $("#stopBtn").prop("disabled", false);
    }
  
    function stopGame() {
      clearInterval(timer);
      $("#category").text("");
      $("#timer").text("5");
      $("#startBtn").prop("disabled", false);
      $("#stopBtn").prop("disabled", true);
    }
  
    function generateCategory() {
      var categories = [
        "Name three colors.",
        "Name three dinosaurs.",
        "Name three fruits.",
        "Name three countries.",
        "Name three breeds of dogs.",
"Name three US states that begin with the letter C.",
"Name three types of fruit.",
"Name three famous painters.",
"Name three superheroes.",
"Name three musical instruments.",
"Name three sports that use a ball.",
"Name three countries in Africa.",
"Name three items you would find in a kitchen.",
"Name three elements on the periodic table.",
"Name three vegetables.",
"Name three types of pasta.",
"Name three Disney movies.",
"Name three famous actors.",
"Name three book genres.",
"Name three US presidents.",
"Name three flavors of ice cream.",
"Name three types of birds.",
"Name three car manufacturers.",
"Name three pizza toppings.",
"Name three European capital cities.",
"Name three fast-food chains.",
"Name three famous rock bands.",
"Name three colors of the rainbow.",
"Name three types of shoes.",
"Name three musical genres.",
"Name three types of trees.",
"Name three US national parks.",
"Name three famous inventors.",
"Name three types of weather.",
"Name three board games.",
"Name three popular social media platforms.",
"Name three planets in our solar system.",
"Name three Oscar-winning movies.",
"Name three famous landmarks.",
"Name three types of flowers.",
"Name three famous athletes.",
"Name three types of desserts.",
"Name three European languages.",
"Name three types of fish.",
"Name three US time zones.",
"Name three Harry Potter characters.",
"Name three famous scientists.",
"Name three types of cheese.",
"Name three US national holidays.",
"Name three types of mammals.",
"Name three popular video games.",
"Name three types of shoes.",
"Name three musical instruments.",
"Name three famous painters.",
"Name three types of fruit.",
"Name three breeds of dogs.",
"Name three superheroes.",
"Name three sports that use a ball.",
"Name three countries in Africa.",
"Name three items you would find in a kitchen.",
"Name three elements on the periodic table.",
"Name three vegetables.",
"Name three types of pasta.",
"Name three Disney movies.",
"Name three famous actors.",
"Name three book genres.",
"Name three US presidents.",
"Name three flavors of ice cream.",
"Name three types of birds.",
"Name three car manufacturers.",
"Name three pizza toppings.",
"Name three European capital cities.",
"Name three fast-food chains.",
"Name three famous rock bands.",
"Name three colors of the rainbow.",
"Name three types of trees.",
"Name three US national parks.",
"Name three famous inventors.",
"Name three types of weather.",
"Name three board games.",
"Name three popular social media platforms.",
"Name three planets in our solar system.",
"Name three Oscar-winning movies.",
"Name three famous landmarks.",
"Name three types of flowers.",
"Name three famous athletes.",
"Name three types of desserts.",
"Name three European languages.",
"Name three types of fish.",
"Name three US time zones.",
"Name three Harry Potter characters.",
"Name three famous scientists.",
"Name three types of cheese.",
"Name three US national holidays.",
"Name three types of mammals.",
"Name three popular video games.",
"Name three movie genres.",
"Name three types of beverages.",
"Name three famous actresses.",
"Name three clothing brands.",
"Name three musicals.",
"Name three US landmarks.",
"Name three types of transportation.",
"Name three traditional Filipino dishes.",
"Name three Philippine national heroes.",
"Name three Philippine festivals.",
"Name three popular Filipino desserts.",
"Name three Philippine indigenous tribes.",
"Name three Philippine provinces.",
"Name three Filipino celebrities.",
"Name three Philippine national symbols.",
"Name three Filipino musical instruments.",
"Name three Philippine tourist destinations.",
"Name three Philippine historical events.",
"Name three Filipino basketball players.",
"Name three Filipino mythical creatures.",
"Name three popular Filipino singers.",
"Name three Philippine languages.",
"Name three Filipino traditional dances.",
"Name three Philippine folk songs.",
"Name three Filipino painters.",
"Name three famous Philippine landmarks.",
"Name three Filipino martial arts.",
"Name three Philippine delicacies.",
"Name three Philippine national parks.",
"Name three Filipino writers.",
"Name three Philippine inventions.",
"Name three Philippine indigenous languages.",
"Name three Filipino celebrities who have made it big internationally.",
"Name three Philippine political leaders.",
"Name three popular Filipino street foods.",
"Name three Philippine historical figures.",
"Name three Philippine natural wonders.",
"Name three traditional Filipino games.",
"Name three Philippine traditional clothing.",
"Name three famous Filipino movies.",
"Name three Philippine islands.",
"Name three Philippine political parties.",
"Name three Filipino historical sites.",
"Name three Filipino social media influencers.",
"Name three Philippine endemic species.",
"Name three Philippine revolutionary heroes.",
"Name three Philippine indigenous crafts.",
"Name three Filipino religious festivals.",
"Name three Philippine UNESCO World Heritage Sites.",
"Name three Filipino Olympic medalists.",
"Name three Philippine historical buildings.",
"Name three Filipino theater actors/actresses.",
"Name three Philippine local delicacies.",
"Name three famous Filipino beauty queens.",
"Name three Philippine environmental organizations.",
"Name three Filipino traditional games for children.",
"Name three Filipino historical landmarks."
      ];
      var randomCategory = categories[Math.floor(Math.random() * categories.length)];
      $("#category").text(randomCategory);
       
    }
  
    function startTimer() {
      var time = 6;
      timer = setInterval(function() {
        time--;
        $("#timer").text(time);
        if (time === 0) {
          clearInterval(timer);
          $("#startBtn").prop("disabled", false);
          $("#stopBtn").prop("disabled", true);
          $("#category").css("color", "grey");
        //   recordAnswer();
        }
      }, 1000);
    }
  
    function recordAnswer() {
      var category = $("#category").text();
      var answer = prompt(category);
      if (answer && answer.trim() !== "") {
        var answers = $("#answers").text();
        $("#answers").text(answers + answer + ", ");
        score++;
        $("#score").text("Score: " + score);
      }
    }
  
    $("#startBtn").click(startGame);
    $("#stopBtn").click(stopGame);
  });
  