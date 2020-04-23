let correctPassword = '{[(90am02)]}'

function unlock() {
  let password = document.forms['unlockForm']['password'].value
  while(password != correctPassword) {
    return false
    password = document.forms['unlockForm']['password'].value
  }
  $('#unlockForm').hide()
  $('#content').show()
  $('#num1').attr('autofocus', true)
  return false
}

function calculate() {
  let encrypted = []
  let decrypted = []
  let encryptedText
  let output
  let num1 = Number(document.forms["calcForm"]["num1"].value);
  let num2 = Number(document.forms["calcForm"]["num2"].value);
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
      if (confirm('Czy chcesz więcej liczb?')) {
        liczby.push(Number(prompt('Podaj liczbę')))
      } else {
        for(i=0; i < liczby.length; i++) {
          output += liczby[i]
        }
        output = output / liczby.length
        break
      }
    }
  } else if(dzialanie == 'qwerty+1') {
    text = prompt('Podaj tekst do szyfrowania')
    for(i=0; i<text.length; i++) {
      encrypted.push(encryptitons[text[i]])
    }
    encryptedText = encrypted.join('')
  } else if(dzialanie == 'qwerty-1') {
    if(prompt('Podaj hasło') == correctPassword) {
      text = prompt('Podaj tekst do deszyfrowania')
      for(i=0; i<text.length; i++) {
        decrypted.push(decryptitons[text[i]])
      }
      decryptedText = decrypted.join('')
    }
  }
  if(isNaN(output) || output == undefined) { output = 0 }
  if(dzialanie == 'sm') {
    $('#output').text('Średnia matematyczna z: ' + liczby + ' = ' + output);
  } else if(dzialanie == 'qwerty+1') {
    $('#output').text(encryptedText)
  } else if(dzialanie == 'qwerty-1') {
    $('#output').text(decryptedText)
  } else {
    $('#output').text(num1 + ' ' + dzialanie + ' ' + num2 + ' = ' + output);
  }
  return false
}