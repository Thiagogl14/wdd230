var form = document.getElementById('time') 
console.log(form)
window.addEventListener("load",function(){
    let new_date = new Date()
    form.innerHTML = new_date
}) 