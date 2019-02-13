var click=document.getElementsByTagName('ul')[0];
var userinput=document.getElementById('userinput')
var button=document.getElementById('button');
var len=document.getElementsByTagName('li');
var i=0;

for( i=0;i<len.length;i++){
	var removebutton=document.createElement('button');
	removebutton.appendChild(document.createTextNode("Remove"));
	document.getElementsByTagName('li')[i].appendChild(removebutton)
}

function clickcheck(event){
	var nodecheck=event.target.parentNode;		////event.target gives location of element over which event has happened
	if  (nodecheck.tagName=='LI'){				//nodecheck.tagName will give tag name of nodecheck
		nodecheck.parentNode.removeChild(nodecheck);    //will remove nodecheck element itself
		}
	else if (nodecheck.tagName=='UL'){
		event.target.classList.toggle('checked');	 //will toggle the class 'checked' over event.target
		}
} 



function buttonclick(){ 
	if (userinput.value.length>0){		//userinput.value.length will give no of characters enterd by user
		addinglist();
} 	} 





function keypadclick(event){ 
	if (userinput.value.length>0 && event.which==13){   //event.which tells which key is pressed in ASIC charcters.
		addinglist();

	} }

function addinglist() {
		var newitem=document.createElement('li');
		newitem.appendChild(document.createTextNode(userinput.value));
		document.getElementsByTagName('ul')[0].appendChild(newitem);
		userinput.value="";

		var removebutton=document.createElement('button');
		removebutton.appendChild(document.createTextNode("Remove"));
		newitem.appendChild(removebutton)

	}

click.addEventListener("click",clickcheck )

button.addEventListener("click",buttonclick)

userinput.addEventListener("keypress",keypadclick )











// var click=document.getElementsByTagName('ul')[0];
// var userinput=document.getElementById('userinput')
// var button=document.getElementById('button');
// var len=document.getElementsByTagName('li');
// var i=0;

// for( i=0;i<len.length;i++){
// 	var removebutton=document.createElement('button');
// removebutton.appendChild(document.createTextNode("Remove"));
// document.getElementsByTagName('li')[i].appendChild(removebutton)
// }

// button.addEventListener("click",function(){ 
// 	if (userinput.value.length>0){
// 		var newitem=document.createElement('li');
// 		newitem.appendChild(document.createTextNode(userinput.value));
// 		document.getElementsByTagName('ul')[0].appendChild(newitem);
// 		userinput.value="";

// 		var removebutton=document.createElement('button');
// 		removebutton.appendChild(document.createTextNode("Remove"));
// 		newitem.appendChild(removebutton)


// 	} } )

// click.addEventListener("click",function(event){
// 	console.log(event.target.parentNode.tagName); 
	
// 	if  (event.target.parentNode.tagName=='LI')
// 	{
// 		event.target.parentNode.parentNode.removeChild(event.target.parentNode);
// 	}
// 	else if (event.target.parentNode.tagName=='UL'){
// 		event.target.classList.toggle('checked');
// 	}
// }  )

// userinput.addEventListener("keypress",function(){ 
// 	if (userinput.value.length>0 && event.which==13){
// 		var newitem=document.createElement('li');
// 		newitem.appendChild(document.createTextNode(userinput.value));
// 		document.getElementsByTagName('ul')[0].appendChild(newitem);
// 		userinput.value="";

// 		var removebutton=document.createElement('button');
// 		removebutton.appendChild(document.createTextNode("Remove"));
// 		newitem.appendChild(removebutton)
// } } )