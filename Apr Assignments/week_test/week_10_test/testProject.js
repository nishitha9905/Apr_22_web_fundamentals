const display  = document.getElementById("display");
const Idval = document.getElementById("idValue")

const getData =async (id) => {
    let url ="https://jsonplaceholder.typicode.com/users"
   const response = await fetch(url);
   const data = await response.json();
   showData(data,id);
}
 function showData(data,id){
    let index =id-1;
    if(index<0 || index>9){
        alert("invalid id number")
        return
    }
    display.innerHTML = `
    <h2>${data[index].name}</h2>
    <h4>${data[index].email}</h4>
    <h4>${data[index].address.city}</h4>
    <h4>${data[index].website}</h4>`;
    
 }

 function fetchData(){
    getData(Idval.value);
    


}