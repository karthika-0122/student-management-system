function addStudent(){
let name=
document.getElementById("name").value;
let li=
document.createElement("li");
li.innerText=name;
document
.getElementById("list")
.appendChild(li);
}
