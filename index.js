const convertBtn = document.querySelector("#convertBtn")
const displayHexNum = document.querySelector(".display-hex-num")
const displayHexColor = document.querySelector(".display-hex-color")

convertBtn.addEventListener('click', function (event) {
  const inputvalue1 = Number(document.querySelector("#r-input").value)
  const inputvalue2 = Number(document.querySelector("#g-input").value)
  const inputvalue3 = Number(document.querySelector("#b-input").value)
  if ((inputvalue1 >= 0 & inputvalue1 <= 255 & !inputvalue1 == '') & (inputvalue2 >= 0 & inputvalue2 <= 255 & !inputvalue2 == '') & (inputvalue3 >= 0 & inputvalue3 <= 255 & !inputvalue3 == '')) {
    hexNum = switchToHex(inputvalue1, inputvalue2, inputvalue3).toUpperCase()
    console.log(inputvalue1, inputvalue2, inputvalue3)
    displayHexNum.innerText = hexNum
    displayHexColor.style.backgroundColor = '#' + hexNum
  }
  else {
    displayHexNum.innerText = ''
    displayHexColor.style.backgroundColor = ''
  }
})

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

