name1= localStorage.getItem("Player1Name");
name2= localStorage.getItem("Player2Name");
console.log(name1);

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= name1+":";
document.getElementById("player2_name").innerHTML= name2+":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML="Question Turn-"+name1;
document.getElementById("player_answer").innerHTML="Answer Turn-"+name2;

function send() 
{
    Number1=document.getElementById("no_1").value;
    Number2=document.getElementById("no_2").value;
    Ans= parseInt(Number1) * parseInt(Number2);
    Question_number="<h4>"+Number1+"X"+Number2+"</h4>"
    Input_box="<br> Answer: <input type='text' id='input_check_box'>"
    Check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = Question_number + Input_box + Check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no_1").value="";
    document.getElementById("no_2").value="";
}