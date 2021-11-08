const metodosParaFormulario = {
    noClick: function () {
        alert('Bloco de codigo')
    },
    noSubmit: function  (e) {
        e.preventDefault()
        alert('Enviado')
    }
}
