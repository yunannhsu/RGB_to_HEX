const convertBtn = document.querySelector("#convertBtn")
const displayHexNum = document.querySelector(".display-hex-num")
const displayHexColor = document.querySelector(".display-hex-color")

convertBtn.addEventListener('click',function(event){
  const inputvalue1= document.querySelector("#r-input").value
  const inputvalue2= document.querySelector("#g-input").value
  const inputvalue3= document.querySelector("#b-input").value
  const iv1 = Number(inputvalue1)
  const iv2 = Number(inputvalue2)
  const iv3 = Number(inputvalue3)
  
  if((inputvalue1.length == 0 )|(inputvalue2.value == 0  )|(inputvalue3.value == 0 )){
  console.log(inputvalue1,inputvalue2,inputvalue3)
  displayHexNum.innerText = ''
  displayHexColor.style.backgroundColor = ''
  console.log("noprintblank")}
  
  else if ((iv1 >= 0 & iv1 <= 255)&(iv2 >= 0 & iv2 <= 255 )&(iv3 >= 0 & iv3 <= 255 )){
  hexNum= switchToHex(inputvalue1,inputvalue2,inputvalue3).toUpperCase()
  console.log(inputvalue1,inputvalue2,inputvalue3)
  displayHexNum.innerText = hexNum
  displayHexColor.style.backgroundColor = '#'+ hexNum
  console.log("print")    }
  
  else{
  console.log(inputvalue1,inputvalue2,inputvalue3)
  displayHexNum.innerText = ''
  displayHexColor.style.backgroundColor = ''
  console.log("noprint")
      }    })      

function bgcolor() {
  return displayHexColor.innerHTML
}

function switchToHex(rdec, gdec, bdec) {
  const rHex = rdec.toString(16)
  const gHex = gdec.toString(16)
  const bHex = bdec.toString(16)
  return (pad(rHex) + pad(gHex) + pad(bHex))
}
function pad(str) {
  str = '' + str
  if (str.length < 2) {
    str = "0" + str
    //console.log (str)
    return str
  } else {
    //console.log (str)
    return str;
  }
}

