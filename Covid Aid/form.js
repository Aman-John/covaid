


function coveron(){
    var name,age,bg,s ;
    name = document.getElementById("username").value ;
    age = document.getElementById("age").value ;
    bg = document.getElementById("bg").value ;
var str ="HOME";
var home = str.link("second page.html");
    if(document.getElementById("cat1").checked){
        s="Wait for 5 to 6 days, it would be recommended for you to observe. If those symptoms persist for over a period of 14 days, please consult a doctor at the nearest hospital." ; 
    if(localStorage.getItem("cat1")===null)
    localStorage.setItem("cat1" , "<li>" +name + "</li>");
    else
    {var x = localStorage.getItem("cat1");
     localStorage.setItem("cat1" , x+"<li>"+name +"</li>");
    }   
    }

    else if(document.getElementById("cat2").checked){
        s="It would be best for you to consult a doctor and take prescribed medicine. Make sure to complete the dose of prescribed medicine and it would be best for you to take rest at home rather than trying to get medical aid over at hospital with these symptoms." ;
     if(localStorage.getItem("cat2")===null)
    localStorage.setItem("cat2" , "<li>"+name+"</li>");
    else
    {var x = localStorage.getItem("cat2");
     localStorage.setItem("cat2" , x+"<li>"+name+"</li>");
    }       }

    else if(document.getElementById("cat3").checked){
        s="Seek professional medical attention immediately, if you have these underlying symptoms. Make sure to call the doctor and inform him/her of your health condition in detail. " ;
     if(localStorage.getItem("cat3")===null)
    localStorage.setItem("cat3" , "<li>"+name+"</li>");
    else
    {var x = localStorage.getItem("cat3");
     localStorage.setItem("cat3" , x+"<li>"+name+"</li>");
    }       }

    else if(document.getElementById("cat4").checked){
    s="Thank you for giving us your precious time. Our organization would closely monitor your symptoms.Make sure to call the doctor and convey them your symptoms clearly.We also assure you to help you out in our best way possible!"	
    if(localStorage.getItem("cat4")===null)
    localStorage.setItem("cat4" ,"<li>"+name+"</li>");
    else
    {var x = localStorage.getItem("cat4");
     localStorage.setItem("cat4" , x+"<li>"+name+"</li>");
    }   
    }

    var str1 = new String("<center><h2>Thank You !</h2><br><h3>NAME : "+name+ "</h3><h3>AGE : "+age+ "</h3><h3>BLOOD GROUP : "+bg+ "</h3><br><br><br><br><h4>" + s +"</h4></center>" ) ;
    document.getElementById("column1").innerHTML=str1+"<br><br><div>"+home+"</div>";

    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


