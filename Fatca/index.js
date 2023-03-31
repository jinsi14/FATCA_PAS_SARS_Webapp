function validate() {
  let username = document.getElementById("user_name");
  uname=document.getElementById("user_name").value
  localStorage.setItem("name", uname);

  let password = document.getElementById("pass_word");

  if (username.value.trim().length < 3) {
    alert("username is invalid");
    return false;
  } 
  if (password.value.trim().length < 5) {
    alert("password should be strong!");
    return false;
  } 
  else {
    true;
  }
}
