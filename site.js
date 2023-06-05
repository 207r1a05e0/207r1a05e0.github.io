var data1={image : "kiran1.jpg.jpeg", name : "Gummula Kiran Kumar" ,designation : "Software Engineer"};
var data2={image : "kiran2.jpg.jpeg", name : "Kiran kumar" ,designation : "Software Developer"};

var isdata1=true;
var displaydata;
var change_my_pic=function(){
    if(isdata1)
    {
        displaydata=data2;
        isdata1=false;
    }
    else
    {
        displaydata=data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesignation").innerHTML=displaydata.designation;

}