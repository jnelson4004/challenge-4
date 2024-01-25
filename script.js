let q = [
  "Which engine powered the 2008 Ford Mustang GT?" + "<br>" + "A: 289 Windsor" + "<br>" + "B: 281 3V Modular" + "<br>" + "C: 281 2V Modular" + "<br>" + "D: 244 Cologne",
  "How many cams did the Corvette C4 LT5 V8 engine have?" + "<br>" + "A: 1" + "<br>" + "B: 2" + "<br>" + "C: 3" + "<br>" + "D: 4",
  "From where did Lamborghini source the fixed headlights for the Diablo?" + "<br>" + "A - Honda NSX" + "<br>" + "B- Ferrari 550" + "<br>" + "C - Nissan 300ZX" + "<br>" + "D - Porsche Boxter",
  "Which LS engine was used for front engined GM vehicles?" + "<br>" + "A - LS3" + "<br>" + "B - LS4" + "<br>" + "C - LS6" + "<br>" + "D - LSX",
  "The answer is c." + "<br>" + "A: a" + "<br>" + "B: b" + "<br>" + "C: c" + "<br>" + "D: d",
  "The answer is c." + "<br>" + "A: a" + "<br>" + "B: b" + "<br>" + "C: c" + "<br>" + "D: d",
  "The answer is c." + "<br>" + "A: a" + "<br>" + "B: b" + "<br>" + "C: c" + "<br>" + "D: d",
  "I ran out of time to write questions. The answer is c." + "<br>" + "A: a" + "<br>" + "B: b" + "<br>" + "C: c" + "<br>" + "D: d",
  "The answer is c." + "<br>" + "A: a" + "<br>" + "B: b" + "<br>" + "C: c" + "<br>" + "D: d",
  "The answer is c. " + "<br>" + "A: c" + "<br>" + "B: b" + "<br>" + "C: e" + "<br>" + "D: d",
  "-_-",
];

let score = 0;
let k = 0;
let len = q.length;

var startBtn = document.querySelector("#start-button");
var answerBtn = document.querySelector("#answer-button");

startBtn.addEventListener("click", function () {
    let var1 = document.getElementById("questions");
    var1.innerHTML = q[0];
    document.getElementById("ans").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("answer-button").style.display = "block";
    document.getElementById("score").style.display = "block";    
}, "once");

answerBtn.addEventListener("click", function () {
    let var2 = document.getElementById("questions");
    let var3 = document.getElementById("input");

    

    if (var2.innerHTML === "Which engine powered the 2008 Ford Mustang GT?" + "<br>" + "A: 289 Windsor" + "<br>" + "B: 281 3V Modular" + "<br>" + "C: 281 2V Modular" + "<br>" + "D: 244 Cologne" && var3.value ==="B" || var3.value === "b")
    {
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    } 

    else if (var2.innerHTML === "How many cams did the Corvette C4 LT5 V8 engine have?" + "<br>" + "A: 1" + "<br>" + "B: 2" + "<br>" + "C: 3" + "<br>" + "D: 4" && var3.value ==="D" || var3.value ==="d")
    {
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "From where did Lamborghini source the fixed headlights for the Diablo?" + "<br>" + "A - Honda NSX" + "<br>" + "B- Ferrari 550" + "<br>" + "C - Nissan 300ZX" + "<br>" + "D - Porsche Boxter" && var3.value ==="C" || var3.value ==="c")
    {
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "Which LS engine was used for front engined GM vehicles?" + "<br>" + "A - LS3" + "<br>" + "B - LS4" + "<br>" + "C - LS6" + "<br>" + "D - LSX" && var3.value ==="B" || var3.value ==="b")
    {
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        
    }

    else if (var2.innerHTML === "The answer is c." && var3.value ==="C" || var3.value ==="c")
    {
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "I ran out of time to write questions. The answer is c." && var3.value ==="C" || var3.value ==="c")
    {
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "The answer is c. " && var3.value ==="A" || var3.value ==="a")
    {
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else {
        document.getElementById("score").innerHTML = "Score: " + score;
        var3.value = null;
        if(k < len-1){
            k++;
            var2.innerHTML = q[k];
        }else {
            var2.innerHTML = "Finished."
            document.getElementById("ans").style.display = "none";
            document.getElementById("input").style.display = "none";
            document.getElementById("btn2").style.display = "none";
            document.getElementById("score").innerHTML = "Your Final Score is: " + score + " " + "Out of" + " " + len;
        }
    }
});
