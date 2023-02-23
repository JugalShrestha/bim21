const asciiInput = document.querySelector('.ascii-finder .input-part .key-input input')
const asciiOutput = document.querySelector('.ascii-finder .output-part')

asciiInput.addEventListener('keydown',function(key){
    let ascii = key.keyCode
    asciiInput.value = ""
    asciiOutput.innerText = ascii
})