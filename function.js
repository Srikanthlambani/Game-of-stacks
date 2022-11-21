var defaultOne=25
var defaultTwo=25

//var str1=document.getElementById('name1').value;
//var str2=document.getElementById('name2').value;

function playone()
{
//window.alert("Welcome to the Game of Stacks"+str1);
defaultOne=defaultOne+Math.floor(Math.random()*10);
defaultOne=defaultOne-Math.floor(Math.random()*5)
//document.write(defaultOne);

if(defaultOne<100)
{ //window.alert(`Welcome to the game ${str1}`);
    //document.getElementById('sample').innerHTML="Hey Player";
    if(defaultOne==50)
    {
        defaultOne=defaultOne-20;

    window.alert("Sorry.. u need to go to "+defaultOne);
    }
    if(defaultOne==35)
    {

        defaultOne=defaultOne+25;

        window.alert("Wow..Congratrulations you have received additional bonus of 25 Points.you current score now is"+defaultOne);
    }

    if(defaultOne==27)
    {
        defaultOne=defaultOne+20;
        window.alert("Hey...Bonus time You recieved 20 bonus points :) your current score is "+defaultOne);
    }
    if(defaultOne==34)
    {
        defaultOne=defaultOne+20;
        window.alert("Hey...Bonus time You recieved 20 bonus points :) your current score is "+defaultOne);
    }

    if(defaultOne==66)
    {
        defaultOne=defaultOne+20;
        window.alert("Hey...Bonus time You recieved 20 bonus points :) your current score is "+defaultOne);
    }

    if(defaultOne==23)
    {
        defaultOne=defaultOne+20;
        window.alert("Hey...Bonus time You recieved 20 bonus points :) your current score is "+defaultOne);
    }

    if(defaultOne==54)
    {
        defaultOne=defaultOne+20;
        window.alert("Hey...Bonus time You recieved 20 bonus points :) your current score is "+defaultOne);
    }

    if(defaultOne==58)
    {

        window.alert("Nothing...No Bonus");
    }


    if(defaultOne==40)
    {
        defaultOne=defaultOne-20;

    window.alert("Sorry.. u need to go to "+defaultOne);
    }
    if(defaultOne==30)
    {
        defaultOne=defaultOne-20;

    window.alert("Sorry.. u need to go to "+defaultOne);
    }
    if(defaultOne==69)
    {
        defaultOne=defaultOne-20;

    window.alert("Sorry.. u need to go to "+defaultOne);
    }
    if(defaultOne==48)
    {
        defaultOne=defaultOne-20;

    window.alert("Sorry.. u need to go to "+defaultOne);
    }
    if(defaultOne==97)
    {
        defaultOne=defaultOne-20;

    window.alert("Sorry.. u need to go to "+defaultOne);
    }




    window.alert(defaultOne);

}
else{
    window.alert("Player 1 is the winner :)");
}

}
function playtwo()
{

    defaultTwo=defaultTwo+Math.floor(Math.random()*10);
    defaultTwo=defaultTwo-Math.floor(Math.random()*5)
    //document.write(defaultTwo);

    if(defaultTwo<100)
    {
        window.alert(defaultTwo);

    }
    else{
        window.alert("Player two is the winner :)");

    }
}



function sbm()
{

    let n1=document.getElementById('input1').value;
    let n2=document.getElementById('input2').value;
    document.getElementById('sample').innerHTML= '<h3 class="statement">'+"Welcome to The Game "+n1+" and "+n2+'</h3>';
}
