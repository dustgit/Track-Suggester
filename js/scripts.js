$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();
    var answer4 = $("input:radio[name=question1]:checked").val();
    var answer5 = $("input:radio[name=question1]:checked").val();

    var php = 0;
    var ruby = 0;
    var csharp = 0;
    var java = 0;

    console.log(php, ruby, csharp, java);


    if (answer1 === "csharp") {
      csharp++;
    } else if (answer1 === "java") {
      java++;
    } else if (answer1 === "ruby") {
      ruby++;
    } else {
      php++;
    }
    console.log(php, ruby, csharp, java);

    if (answer2 === "csharp") {
      csharp++;
    } else if (answer2 === "java") {
      java++;
    } else if (answer2 === "ruby") {
      ruby++;
    } else {
      php++;
    }
console.log(php, ruby, csharp, java);

    if (answer3 === "csharp") {
      csharp++;
    } else if (answer3 === "java") {
      java++;
    } else if (answer3 === "ruby") {
      ruby++;
    } else {
      php++;
    }
console.log(php, ruby, csharp, java);

    if (answer4 === "csharp") {
      csharp++;
    } else if (answer4 === "java") {
      java++;
    } else if (answer4 === "ruby") {
      ruby++;
    } else {
      php++;
    }

console.log(php, ruby, csharp, java);

    if (answer5 === "csharp") {
      csharp++;
    } else if (answer5 === "java") {
      java++;
    } else if (answer5 === "ruby") {
      ruby++;
    } else {
      php++;
    }

console.log(php, ruby, csharp, java);

    if (csharp > java && csharp > ruby && csharp > php) {
      $("#csharp").show();
      $("#java").hide();
      $("#ruby").hide();
      $("#php").hide();
    }

     if (java > csharp && java > ruby && java > php) {
      $("#csharp").hide();
      $("#java").show();
      $("#ruby").hide();
      $("#php").hide();
    }

    if (ruby > csharp && ruby > java && ruby > php) {
      $("#csharp").hide();
      $("#java").hide();
      $("#ruby").show();
      $("#php").hide();
    }

    if (php > csharp && php > java & php > ruby) {
      $("#csharp").hide();
      $("#java").hide();
      $("#ruby").hide();
      $("#php").show();
    }
    })
    console.log(csharp, java, ruby, php);
  });
