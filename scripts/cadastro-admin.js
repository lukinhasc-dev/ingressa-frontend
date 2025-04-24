
 // Máscara para CNPJ
 document.getElementById('cnpj').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '').slice(0, 14);
  value = value.replace(/^(\d{2})(\d)/, '$1.$2');
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
  value = value.replace(/(\d{4})(\d)/, '$1-$2');
  e.target.value = value;
});

// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '').slice(0, 11);
  value = value.replace(/^(\d{3})(\d)/, '$1.$2');
  value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  value = value.replace(/\.(\d{3})(\d)/, '.$1-$2');
  e.target.value = value;
});

// Máscara para Telefone (formato: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX)
document.getElementById('telefone').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '').slice(0, 11);
  if (value.length <= 10) {
      value = value.replace(/^(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{4})(\d)/, '$1-$2');
  } else {
      value = value.replace(/^(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
  }
  e.target.value = value;
});