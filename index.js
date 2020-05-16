const convertBtn = document.querySelector("#convertBtn")
const displayHexNum = document.querySelector(".display-hex-num")
const displayHexColor = document.querySelector(".display-hex-color")

convertBtn.addEventListener('click',function(event){
  let inputvalue1= Number(document.querySelector("#r-input").value)
  let inputvalue2= Number(document.querySelector("#g-input").value)
  let inputvalue3= Number(document.querySelector("#b-input").value)
  
  if((inputvalue1|inputvalue2|inputvalue3) > 255 |(inputvalue1|inputvalue2|inputvalue3) <0 ){
    document.querySelector("#r-input").value = null
    document.querySelector("#g-input").value = null
    document.querySelector("#b-input").value = null
    alert("輸入欄範圍必須在數字 0~225 之間")
  }
  else{
    hexNum = switchToHex(inputvalue1,inputvalue2,inputvalue3).toUpperCase()
  console.log(inputvalue1,inputvalue2,inputvalue3)
  displayHexNum.innerText = hexNum
  displayHexColor.style.backgroundColor = '#'+ hexNum
  console.log("print") 
  }})
                

function bgcolor(){
  return  displayHexColor.innerHTML
}

function switchToHex(rdec,gdec,bdec){
   const rHex = rdec.toString(16)
   const gHex = gdec.toString(16)
   const bHex = bdec.toString(16)
   return(pad(rHex)+pad(gHex)+pad(bHex))
    }
function pad(str){
  str = '' + str
  if (str.length<2){
    str = "0"+str
      //console.log (str)
      return str
    } else {
      //console.log (str)
      return str;
       }}






