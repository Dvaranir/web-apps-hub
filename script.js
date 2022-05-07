function copyEmail() {
  /* Get the text field */
  const email = document.getElementById("email");

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(email.textContent);

  /* Alert the copied text */
  alert("Почта скопирована");
}
