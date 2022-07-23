let addbasket = JSON.parse(localStorage.getItem("cartData"))||[]
console.log(addbasket)

display(addbasket)





function display(data){
    let sum = data.length;
    let p = 0;
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(el,index){
        document.querySelector("#numitems").innerText=sum
        document.querySelector("#tprice").innerText=(p+=el.price)
        let row = document.createElement("tr")
       let imgrow = document.createElement("td")
       let img = document.createElement("img")
       img.setAttribute("src",el.img_url)
       imgrow.append(img)
       let name = document.createElement("td")
       name.innerText=el.name
       let price = document.createElement("td")
       price.innerText=el.price
       let de = document.createElement("td")
       de.innerText="Delete"
       de.addEventListener("click",function(){
        nikal(el,index)
       })
       de.setAttribute("id","de")
       row.append(imgrow,name,price,de)
        document.querySelector("tbody").append(row)
    })

}

function nikal(el,index){
    addbasket.splice(index,1)
    display(addbasket)
    localStorage.setItem("cartData",JSON.stringify(addbasket))
}