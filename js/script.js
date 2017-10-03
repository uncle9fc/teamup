//click on the button #btntest
document.getElementById('button').onclick = function(){

    //get arrays and combine into one;
    var selchb1 = functionGetSelectedChbox(0,11);
    var selchb2 = functionGetSelectedChbox(12,44); 
    var selchb3 = selchb1.concat(selchb2);

    //define each team array;
    var teamred = [];
    var teamblue = [];
    var teamwhite = [];
    
    //populate the players into team array one by one
    for ( i=0;i < selchb3.length; i=i+3) { teamred = teamred.concat(selchb3[i]);}
    for ( i=1;i < selchb3.length; i=i+3) { teamblue = teamblue.concat(selchb3[i]);}
    for ( i=2;i < selchb3.length; i=i+3) { teamwhite = teamwhite.concat(selchb3[i]);}

    //print them to html page;
    document.getElementById("teamred").innerHTML = teamred;
    document.getElementById("teamblue").innerHTML = teamblue;
    document.getElementById("teamwhite").innerHTML = teamwhite;

}

//function to shuffle the positions in array;
function functionShuffle(a) {
        
    for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        
    }

//function to select the checkbox into array and shuffle it;
function functionGetSelectedChbox(firstp,lastp) {

    var selchbox = [];
    var inpfields = form.getElementsByTagName('input');

    for(var i=firstp; i<=lastp; i++) {

        if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) selchbox.push(inpfields[i].value);

    }

    functionShuffle(selchbox);

    return selchbox;

}