// const original_width = document.getElementsByClassName( "titleGlolo" ).style.width
// const original_height = document.getElementsByClassName( "titleGlolo" ).style.height
function yolo1(mod){

	const mefunc = (element) => {element.style.width *= this.mod;element.style.height *= this.mod;}
	// let twidth = original_width
	// let theight = original_height
	if (mod > 2 || mod < 0.5)
	{
		mod = 1/mod
	}
	// document.querySelectorAll( ".titleGlolo" ).forEach(mefunc, {mod:mod})
	let randNum =  Math.random() * 100;
	let margalin = Math.round((100 - randNum)/2);
	let size = randNum + 'px';
	document.querySelectorAll( ".titleGlolo" ).forEach(element => {element.style.width = size})
	document.querySelectorAll( ".titleGlolo" ).forEach(element => {element.style.height = size})
	document.querySelectorAll( ".titleGlolo" ).forEach(element => {element.style.marginTop = margalin + 'px'})
	// document.querySelectorAll( ".titleGlolo" ).forEach(element => {element.style.marginRight = (100 - randNum) + 'px'})
	// document.querySelectorAll( ".titleGlolo" ).forEach(element => {element.style.marginLeft = (100 + margalin) + 'px'})
	// document.querySelectorAll( ".titleGlolo" ).forEach(element => {element.style.marginTop = (100 + margalin) + 'px'})
	// document.querySelectorAll( ".titleGlolo" ).forEach(element => {element.style.marginBottom = (100 - margalin) + 'px'})
	// setTimeout(function(){},100)
	// console.log("bite")

}
console.log("Fetching resizable Glolo")
let mod = 1.1
setInterval(yolo1,400,mod)



fetch('./media/yolo.json').then(async response => {
	console.log("Loading data ...")
	const json = await response.json();
	console.log("Done")
	console.log("logging the points ...")
	let points = {}
	let total = 0;

	json["houses"].forEach(element=>{points[element] = 0})
	// console.log(points)
	json["users"].forEach(element=>{
		// console.log(json["points"][element])
		points[json["belongs2"][element]] += parseInt(json["points"][element]);
		total += parseInt(json["points"][element]);
	})
	// console.log("Points are: ")
	// console.log(points)

	let totheight = 395;
	let totfact = 0.5 * total;

	document.querySelector( ".slythPimg" ).style.heigth = points["slytherin"]/totfact * totheight + 'px';
	document.querySelector( ".slythPimg" ).style.paddingTop = totheight - (points["slytherin"]/totfact * totheight )+ 'px';
	document.querySelector( ".huffPimg" ).style.paddingTop = totheight - points["hufflepuff"]/totfact * totheight + 'px';
	document.querySelector( ".huffPimg" ).style.heigth = points["hufflepuff"]/totfact * totheight + 'px';
	document.querySelector( ".griffPimg" ).style.paddingTop = totheight - points["griffindor"]/totfact * totheight + 'px';
	document.querySelector( ".griffPimg" ).style.heigth = points["griffindor"]/totfact * totheight + 'px';
	document.querySelector( ".ravPimg" ).style.paddingTop = totheight - points["ravenclaw"]/totfact * totheight + 'px';
	document.querySelector( ".ravPimg" ).style.heigth = points["ravenclaw"]/totfact * totheight + 'px';

	document.querySelector("#slythtxtp").innerHTML = points["slytherin"]
	document.querySelector("#ravtxtp").innerHTML = points["ravenclaw"]
	document.querySelector("#grifftxtp").innerHTML = points["griffindor"]
	document.querySelector("#hufftxtp").innerHTML = points["hufflepuff"]

	console.log("Done")

// ravPimg
// griffPimg
// huffPimg



})

