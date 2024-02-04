let pompt = document.getElementById(`pompt`);
let confirm = document.getElementById(`confirm`);

function showAlert() {
  alert(`Hi users, i am alert!⚠`);
}
function showConfirm() {
  //   window.confirm(`Do you agree this police!`)
  if (window.confirm(`Do you agree this police!`)) {
    confirm.innerHTML = `You pressed ok.`;
  } else {
    confirm.innerHTML = `You pressed cancel.`;
  }
}
function showPrompt() {
  let person = window.prompt(`Enter your name:`);
  let txt;
  if (person === null || person === ` `) {
    txt = `User cancelled this prompt!`;
  } else {
    txt = `Hello ${person} ! How are you?`;
  }
  pompt.innerHTML = txt;
}
