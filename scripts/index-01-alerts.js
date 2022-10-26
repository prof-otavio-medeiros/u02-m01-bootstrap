let alertWithoutClose = `
<div class="alert alert-success" role="alert">
  Sua tarefa foi realizada com <strong>SUCESSO!</strong>
</div>
`;

let alertWithClose = `
<div class="row">
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Parabéns!</strong> Seu primeiro componente 'Alert' está funcionando.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>
`;

function showAlertAux(alerts) {
  document.getElementsByClassName("container")[1].innerHTML = `${alerts}`;
}

function showAlert() {
  showAlertAux(`${alertWithClose}${alertWithoutClose}`);
  setTimeout(showAlertAux, 5000, alertWithClose);
}
