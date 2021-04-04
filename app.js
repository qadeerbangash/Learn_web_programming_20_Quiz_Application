function check(){
    var s=0
    var q1=document.getElementById("q1-d")
    var q2=document.getElementById("q2-b")
    var q3=document.getElementById("q3-c")
    var q4=document.getElementById("q4-b")
    var q5=document.getElementById("q5-b")

    if(q1.checked==true){
        s++
        alert("Q1 is right")
    }
    else{
        alert("Q1 is wrong")

    }

    if(q2.checked==true){
        s++
        alert("Q2 is right")
    }
    else{
        alert("Q2 is wrong")

    }

    if(q3.checked==true){
        s++
        alert("Q3 is right")
    }
    else{
        alert("Q3 is wrong")

    }

    if(q4.checked==true){
        s++
        alert("Q4 is right")
    }
    else{
        alert("Q4 is wrong")

    }

    if(q5.checked==true){
        s++
        alert("Q5 is right")
    }
    else{
        alert("Q5 is wrong")

    }
}