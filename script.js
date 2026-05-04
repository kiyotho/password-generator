
let chars = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0','1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*','(',')','_','+',
  '[',']','{','}','|',';',':',',','.','<','>','?',
  '/','~','`','-','='
];

let btnGenerateEl = document.querySelector("#btn-generate")

let pass1El = document.querySelector("#pass-1")
let pass2El = document.querySelector("#pass-2")



function generatePassword() { 
    let password = ""

    let inputLengthEl = document.querySelector("#input-length")


    let data = inputLengthEl.value;
    
    if(data < 8){
        data = 8;
    }

    for(let i = 0; i < data; i ++){

        let index = Math.floor(Math.random() * chars.length)
        password += chars[index]

    }
    console.log(data )
    return password
    
}

pass1El.textContent = generatePassword()
pass2El.textContent = generatePassword()

btnGenerateEl.addEventListener("click", function(){
    pass1El.textContent = generatePassword()
    pass2El.textContent = generatePassword()
})




function copyFunction1() {

  var textToCopy = pass1El.textContent;

  navigator.clipboard.writeText(textToCopy).then(() => {}).catch(err => {
      console.error('Error in copying text: ', err);
  });
}

function copyFunction2() {


  var textToCopy = pass2El.textContent;

  navigator.clipboard.writeText(textToCopy).then(() => {}).catch(err => {
      console.error('Error in copying text: ', err);
  });
}