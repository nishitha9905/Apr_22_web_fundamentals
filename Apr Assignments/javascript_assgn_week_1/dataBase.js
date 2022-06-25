var user = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
      name: "Chris",
      gender: "male",
      city: "Delhi",
      phone: 99999999,
      
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Adam",
      gender: "male",
      city: "Mumbai",
      phone: 888888888,
     
    },
    {
      image:
        "https://i.pinimg.com/originals/7f/68/fc/7f68fc74675dc2234ba931f826263cd3.jpg",
      name: "Swapna",
      gender: "female",
      city: "Banglore",
      phone: 98989765431,
    },
    {
      image: "https://wallpapercave.com/wp/wp7141936.jpg",
      name: "zoya",
      gender: "female",
      city: "Hyderabad",
      phone: 98989876543,
    },
  ];
  
  var tBody = document.getElementById("tbody");
  var filterArray = user;
  function showTable(){
  var btn1 = document.getElementById("btn1");
  btn1.disabled=true;
  var btn2 = document.getElementById("btn2");
  btn2.disabled=false;
  var table = document.getElementById("table");
  table.style.display="";
  var showRadio = document.getElementById("radio");
  showRadio.style.display="block";
  
        
  filterArray.map(function(element,index){
    var image =document.createElement("img");
var tBodyRow =document.createElement("tr");
tBodyRow.id = "tr"+ (index+1);
var tData1 = document.createElement("td");
var tData2 = document.createElement("td");
var tData3 = document.createElement("td");
var tData4 =document.createElement("td");
var tData5 = document.createElement("td");
tBody.appendChild(tBodyRow);
image.src=element.image;
image.width=50;
image.height=50;
tData2.innerText=element.name;
tData3.innerText=element.gender;
tData4.innerText=element.city;
tData5.innerText=element.phone;
tBodyRow.appendChild(tData1);
tBodyRow.appendChild(tData2);
tBodyRow.appendChild(tData3);
tBodyRow.appendChild(tData4);
tBodyRow.appendChild(tData5);
tData1.appendChild(image);

})
  }
  function filterFn(value){
    if(value==="female"){
   filterArray = user.filter(function(element){
    return element.gender==="female";
  })
}
else if(value==="male"){
   filterArray = user.filter(function(element){
    return element.gender==="male";
  })
}
else{
   filterArray = user;
}
removeRow();
showTable();
    
    }

  function hideTable(){
    var btn1 = document.getElementById("btn1");
  btn1.disabled=false;
  var btn2 = document.getElementById("btn2");
  btn2.disabled=true;
  var table = document.getElementById("table");
  table.style.display="none";
  var showRadio = document.getElementById("radio");
  showRadio.style.display="none";
  removeRow();
  
  }
function removeRow(){
  user.map(function (element,index){
    var tr= document.getElementById("tr"+(index+1));
    tr.remove()
  })
}