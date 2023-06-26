const button = document.getElementById("rules")
let data=[]
fetch("becode.json")
.then (response=> response.json())
.then(json=>{

	data=json

}
)
.catch(error => {
	console.log('There was an error!', error)
})



moise=()=>{


	for (let i=0; i<data.length;i++){
		const ul = document.createElement("ul")
		const li= document.createElement("li")
		document.body.appendChild(ul)
		li.textContent=data[i]
		ul.appendChild(li)
	}
}

button.addEventListener("click",moise)


//EXO 2
let datacountry=[]
const moise2=()=>{

	const country = document.getElementById("country")

	for (let i=0; i<datacountry.length;i++){
		const option=document.createElement("option")
		country.appendChild(option)
		option.value=datacountry[i].Code
		option.textContent=datacountry[i].Name
	}
}



fetch("https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json")
.then (response=> response.json())
.then(json=>{
	console.log(json)
	datacountry=json
	console.log(datacountry)
	moise2()

}
)
.catch(error => {
	console.log('There was an error!', error)
})




if (localStorage.length>0){
	
	for (let i=0;i<localStorage.length;i++){

		const div=document.createElement("div")
		const p=document.createElement("p")
		document.body.appendChild(div)
		div.appendChild(p)
		p.textContent=localStorage.getItem(i)
	}
}
let myData=[]
const button2=document.getElementById("submit")
/*const fetchName= (X,Y) => fetch("https://api.agify.io?name="+X+"&country_id="+Y)*/
const fetchName= (X,Y) => {fetch("https://api.agify.io?name="+X+"&country_id="+Y)}

const myName=document.getElementById("name")

const waitFetch= async (X,Y)=>{
const response= await fetch("https://api.agify.io?name="+X+"&country_id="+Y)
	const json= await response.json()
	return json
}

console.log(waitFetch("John","BE"))


const submit= async ()=>{
	let name=myName.value
	let age
	let thiscountry=country.value
	
	/*const response= await fetchName(name,thiscountry)*/
	const json=  await waitFetch(name,thiscountry)
	
	
	/*fetchName(name,thiscountry)

		.then (response=>response.json())
		.then((json) => {*/


			age=json.age
			console.log(json)
			const div=document.createElement("div")
			const p=document.createElement("p")
			document.body.appendChild(div)
			div.appendChild(p)
			let myText=name +" age : "+ age + " en " + country.value + " you are : " + json.count
			p.textContent=name +" age : "+ age + " en " + country.value + " you are : " + json.count
			myName.value=""
			// localStorage.setItem("myData" +a,Array.from(["a", 5, false]))
			// localStorage.setItem("myNumber",a)
			localStorage.setItem(localStorage.length, myText)

			console.log(localStorage)

			// Object.keys(localStorage).forEach((key) => {

			// })
			// a++
		}
/*		)

		.catch(error => {
			console.log('There was an error!', error)
		})

}*/


button2.addEventListener("click",submit)
