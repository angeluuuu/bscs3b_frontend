console.log(fetch('https://pbs.twimg.com/media/Fuxfm12WcAAvsme.jpg:large')

.then(response=>{
    console.log(response)
        return response.blob();
})

.then(blob => {
    console.log(blob)
    document.querySelector("#myTuna").src=URL.createObjectURL(blob)
})

.catch(error => {
    console.log(error)
})
)

//id selector 
const content = document.querySelector("#content");

//loading page
window.addEventListener('load', ()=>{
    getUsers();

})
function getUsers(){

    let html=""

    fetch("http://localhost:1001/api/employee", {mode:"cors"})
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        data.forEach((element)=>{
            html += `<li>${element.first_name} ${element.last_name}
            </li>`
        })
        
        console.log(data)
        data.forEach((element)=>{_
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })
        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })
}