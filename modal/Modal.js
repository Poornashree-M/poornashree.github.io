const openbtn = document.querySelector(".js-button")
const modalBg = document.getElementById("modal-background")
const modalBox = document.getElementById("modal-box")
openbtn.addEventListener('click',function(event){

        event.preventDefault()
          modalBg.classList.add("active")
          modalBox.classList.add("active")

})

const closebtn = document.querySelectorAll(".js-close")
closebtn.forEach(node =>{

    console.log("node is",node)
    node.addEventListener('click', function(e){

        e.preventDefault()
        modalBg.classList.remove("active")
          modalBox.classList.remove("active")


    })
})

