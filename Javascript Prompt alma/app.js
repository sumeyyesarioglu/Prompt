let nameDOM = document.getElementById('name')
let username =prompt('Kullanıcı bilginizi yazınız.')
nameDOM.innerHTML = `${username}`

let days = ['pazartesi', 'salı', 'çarşamba','perşembe', 'cuma', 'cumartesi', 'pazar']

function showTime() {
    var tarih = new Date ()
    let day= days [tarih.getDay()]
    let hour = tarih.getHours()
    let minute = tarih.getMinutes()
    let second = tarih.getSeconds() 

    let send = document.querySelector('#myClock')
    send.innerHTML =  hour + ":" + minute +":" + second + " " + day; 
}
const time = setInterval(showTime,1000)
document.querySelector('#myClock').innerHTML = time


function valid() {
    try {
        if (document.querySelector('#dogumTarihi').value == '') {
            throw 'Dogum tarihi boş gecilemez'
        }; 
    } catch(err) {
            alert(err)
        }
    }




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json)=> console.log(json))
.catch((err)=> console.log(err))



fetch('https://jsonplaceholder.typicode.com/comments')
.then((response)=> response.json())
.then((json)=> json.forEach((item)=>console.log(item.email)))
.catch((err)=>console.log(err))