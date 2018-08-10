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
    var cSharp = 0;
    var java = 0;

    console.log(php, ruby, cSharp, java);


    if (answer1 === "csharp") {
      cSharp++;
    } else if (answer1 === "java") {
      java++;
    } else if (answer1 === "ruby") {
      ruby++;
    } else {
      php++;
    }
    console.log(php, ruby, cSharp, java);

    if (answer2 === "csharp") {
      cSharp++;
    } else if (answer2 === "java") {
      java++;
    } else if (answer2 === "ruby") {
      ruby++;
    } else {
      php++;
    }
console.log(php, ruby, cSharp, java);

    if (answer3 === "cSharp") {
      cSharp++;
    } else if (answer3 === "java") {
      java++;
    } else if (answer3 === "ruby") {
      ruby++;
    } else {
      php++;
    }
console.log(php, ruby, cSharp, java);

    if (answer4 === "cSharp") {
      cSharp++;
    } else if (answer4 === "java") {
      java++;
    } else if (answer4 === "ruby") {
      ruby++;
    } else {
      php++;
    }

console.log(php, ruby, cSharp, java);

    if (answer5 === "cSharp") {
      cSharp++;
    } else if (answer5 === "java") {
      java++;
    } else if (answer5 === "ruby") {
      ruby++;
    } else {
      php++;
    }

console.log(php, ruby, cSharp, java);

    if (cSharp > java && cSharp > ruby && cSharp > php) {
      $("#cSharp").show();
      $("#java").hide();
      $("#ruby").hide();
      $("#php").hide();
    }

     if (java > cSharp && java > ruby && java > php) {
      $("#cSharp").hide();
      $("#java").show();
      $("#ruby").hide();
      $("#php").hide();
    }

    if (ruby > cSharp && ruby > java && ruby > php) {
      $("#cSharp").hide();
      $("#java").hide();
      $("#ruby").show();
      $("#php").hide();
    }

    if (php > cSharp && php > java & php > ruby) {
      $("#cSharp").hide();
      $("#java").hide();
      $("#ruby").hide();
      $("#php").show();
    }
    })
    console.log(cSharp, java, ruby, php);
  });
