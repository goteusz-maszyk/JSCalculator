$('.text').hide()

document.querySelector("#dzialanie").addEventListener('change', () => {
  if(document.forms.calcForm.dzialanie.value == "encrypt") {
    $('#submitBtn').text("Zaszyfruj").attr("title", "")
    $('.numbers').hide()
    $('.text').show()
  } else if(document.forms.calcForm.dzialanie.value == "decrypt") {
    $('#submitBtn').text("Deszyfruj").attr("title", "Deszyfrowanie wymaga hasła")
    $('.numbers').hide()
    $('.text').show()
  } else {
    $('#submitBtn').text("Policz!").attr("title", "")
    $('.numbers').show()
    $('.text').hide()
  }
})

document.querySelector("#calcForm").addEventListener('submit', (e) => {
  e.preventDefault()
  let encrypted = []
  let decrypted = []
  let output
  const num1 = Number(document.forms["calcForm"]["num1"].value);
  const num2 = Number(document.forms["calcForm"]["num2"].value);
  let encryptionOffset = Number(document.forms["calcForm"]["encryption-offset"].value);
  if(encryptionOffset <= 0) encryptionOffset = 1
  let text = document.forms["calcForm"]["text"].value;
  let dzialanie = document.forms["calcForm"]["dzialanie"].value;
  if(dzialanie == '+') {
    output = num1 + num2
  } else if(dzialanie == '-') {
    output = num1 - num2
  } else if(dzialanie == '/') {
    output = num1 / num2
  } else if(dzialanie == '*') {
    output = num1 * num2
  } else if (dzialanie == 'mod') {
    output = num1 % num2
  } else if(dzialanie == 'sm') {
    output = 0
    alert('Wyliczasz średnią arytmetyczną')
    liczby = []
    while(true) {
      response = prompt('Podaj liczbę')
      if (response != 0 && !(isNaN(Number(response)))) {
        liczby.push(Number(response))
      } else {
        for(i=0; i < liczby.length; i++) {
          output += liczby[i]
        }
        output /= liczby.length
        break
      }
    }
  } else if(dzialanie == 'encrypt') {
    for(i=0; i<text.length; i++) {
      encrypted.push(String.fromCharCode(text.charCodeAt(i) + encryptionOffset))
    }
    output = encrypted.join('')
  } else if(dzialanie == 'decrypt') {
    for(i=0; i<text.length; i++) {
      decrypted.push(String.fromCharCode(text.charCodeAt(i) - encryptionOffset))
    }
    output = decrypted.join('')
  }

  if(output == undefined) { output = 0 }

  if(dzialanie == 'sm') {
    $('#output').text('Średnia matematyczna z: ' + liczby + ' = ' + output);
  } else if(dzialanie == 'encrypt') {
    $('#output').text(output)
  } else if(dzialanie == 'decrypt') {
    $('#output').text(output)
  } else {
    $('#output').text(num1 + ' ' + dzialanie + ' ' + num2 + ' = ' + output);
  }
  return false
})