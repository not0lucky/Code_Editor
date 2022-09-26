
let btn = document.getElementById("btn-run")
let btn_dark = document.querySelector("btn-dark")
let light = document.querySelector("btn-light")
let textarea = document.getElementsByClassName("textarea")

let tabs = document.querySelectorAll(".tab")
let tabsArray = Array.from(tabs)
let divs = document.querySelectorAll(".code > div")
let divsArray = Array.from(divs)



tabsArray.forEach((ele)=>{
    ele.addEventListener("click",function(e){
        tabsArray.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        divsArray.forEach((div)=>{
            div.style.display ="none"
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display="block"
    })
})

//document.querySelector('.one textarea').addEventListener("keyup",Run)
//document.querySelector('.two textarea').addEventListener("keyup",Run)
//document.querySelector('.three textarea').addEventListener("keyup",Run)


function Run(){
    let html_code = document.querySelector('.one textarea').value;
    let css = "<style>"+document.querySelector('.two textarea').value+"</style>";
    let js = document.querySelector('.three textarea').value;
    let result = document.getElementById("result")
    result.contentDocument.body.innerHTML= html_code+css
    result.contentWindow.eval(js)

}


btn.addEventListener("click", function(event){
    console.log(html_code)
    
    result.contentDocument.body.innerHTML= html_code+css
    result.contentWindow.eval(js)
});

function DarkMode(){
    for (var i=0;i<textarea.length;i++){
        textarea[i].setAttribute("style","background-color:black; color:white")
    }
        
   
}

function LightMode(){
    for (var i=0;i<textarea.length;i++){
    textarea[i].setAttribute("style","background-color:white; color:black")
    }
}

function Download(){
    const innerFrame = document.getElementById("result").contentWindow.document.body.innerHTML
    exportFile('file.html',innerFrame.innerHTML)
}