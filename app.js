
var userName=prompt("Enter your first name","First name");
var userName1=prompt("Enter your Last name"+"Last name");
var userFather=prompt("Enter your Father's name","Father's name");
var userschool=prompt("Enter your institute name","User's Institute ");
var userclass=prompt("Enter your batch no","user's batch");
var git=prompt("Enter your Git test score","user's score");
var html5=prompt("Enter your HTML5 score","user's score");
var CSS3t1=prompt("Enter your CSS3 test 1 score","user's score");
var CSS3t2=prompt("Enter your CSS3 test 2 score","user's score");
var obtMarks=parseInt(git)+parseInt(html5)+parseInt(CSS3t1)+parseInt(CSS3t2); 
var userPer=(obtMarks/400)*100;
var grade=0;

if(userPer<=100 && userPer>=90)
{
  var grade="A+1";
}

else if(userPer>=80 && userPer<90)
{
    var grade="A";
}
else if (userPer>=70 && userPer<80)
{
    var grade="B";
}
else if (userPer>=60 && userPer<70)
{
    var grade="C";
}
else if(userPer>=50 && userPer<60)
{
    var grade="D";
}
else if(userPer>=40 && userPer<50)
{
   var grade="E";
}
else if(userPer<=39 && userPer>=1)
{
    var grade="F";
}

/*alert("                                       Marks Sheet \n"+
  "Name: "+userName+" "+userName1 +"\n"+
  "Father Name: "+userFather +"\n"+
  "Institute: "+userschool +"\n"+
  "Batch : "+userclass +"\n"+
  "Git Score: "+git + "\n"+
  "HTML5 Score: "+html5 + "\n"+
  "CSS3 Test 1 Score: "+CSS3t1 + "\n"+
  "CSS3 Test 2 Score: "+CSS3t2+ "\n"+
  "Your percentage is "+userPer+"%"+" so your grade is "+ grade);
*/

document.getElementById("demo").innerHTML=
"<div>"+"<h1>" + "MarkSheet" + "</h1>" +"<br/>"+
"<h4>"+"<p>"+"Name: "+"<span>"+userName+" "+userName1 +"</span>"+"</p>"+"<br/>"+
"<p>"+"Father's Name: "+"<span>"+userFather +"</span>"+"</p>"+"<br/>"+
"<p>"+"Institute: "+"<span>"+userschool +"</span>"+"</p>"+"<br/>"+
"<p>"+"Batch : "+"<span>"+userclass +"</span>"+"</p>"+"<br/>"+
"<p>"+"Git Marks: "+"<span>"+git +"%"+"</span>"+"</p>"+"<br/>"+
"<p>"+"HTML5 Marks: "+"<span>"+html5 +"%"+"</span>"+"</p>"+"<br/>"+
"<p>"+"CSS3 Test 1 Marks: "+"<span>"+CSS3t1 +"%"+"</span>"+"</p>"+"<br/>"+
"<p>"+"CSS3 Test 2 Marks: "+"<span>"+CSS3t2+"%"+"</span>"+"</p>"+"<br/>"+
"<p>"+"Your percentage is "+"<span>"+userPer+"%"+"</span>"+" so your Grade is "+ grade+"</p>"+
"</h4>"+"</div>";