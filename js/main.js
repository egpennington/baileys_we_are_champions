const writeEl = document.getElementById("write-el")
const inputBtn = document.getElementById("input-btn")
const inputArea = document.getElementById("input-area")

writeEl.addEventListener("click", function() {
      clickOnIt()
    })
    
function quoteInput() {
      
      inputArea.innerHTML += `
        <li>${writeEl.value}</li>
        `
      writeElAreaReset()
      
     
 }
    
function writeElAreaReset() {
    writeEl.value = ""
}

function clickOnIt() {
      y = writeEl
      y.textContent = ""
}

/* function resetOnClick() {
     x = writeEl.reset()
     x.textContent = "write your quote here..."
} */

