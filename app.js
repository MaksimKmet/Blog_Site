const htmlFile = document.getElementById('js_file')
const htmlContent = document.getElementById('text_html')


console.log(htmlFile)



function callFunction() {
    const randomNumber = Math.ceil(Math.random()*50)
    htmlContent.innerHTML = randomNumber

}