function myfun0(){
    document.getElementById('cell0').innerHTML="X"
}

function myfun1(){
    document.getElementById('cell1').innerHTML="X"
}
function myfun2(){
    document.getElementById('cell2').innerHTML="X"
}

function myfun3(){
    document.getElementById('cell3').innerHTML="X"
}

function myfun4(){
    document.getElementById('cell4').innerHTML="X"
}

function myfun5(){
    document.getElementById('cell5').innerHTML="X"
}

function myfun6(){
    document.getElementById('cell6').innerHTML="X"
}

function myfun7(){
    document.getElementById('cell7').innerHTML="X"
}

function myfun8(){
    document.getElementById('cell8').innerHTML="X"
}


function ResetAll(){
    let c = document.getElementsByClassName('cell')
    for(let i = 0 ; i<=8; i++){
        c[i].innerHTML=""
    }
}
