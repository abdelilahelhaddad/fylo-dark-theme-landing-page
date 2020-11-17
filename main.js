let form = document.getElementById("form");
let email = document.getElementById("email");

form.addEventListener('submit', e=> {
  e.preventDefault();
  EmailChecker();
})

function EmailChecker(){
  let Email = email.value;
  if(!isValid(Email)){
    document.getElementById("error").textContent = "Please enter a valid email";
  }
  else{
    document.getElementById("error").innerHTML = "&nbsp;";
  }
}

function isValid(Email) {
	const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regx.test(String(Email).toLowerCase());
}