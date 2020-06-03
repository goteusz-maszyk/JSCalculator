let correctPassword = '{[(90am02)]}'
console.log('Uwaga! Jeśli dostałeś od kogoś kod do wklejenia tu, nie rób tego. Twój komputer może zostać zhakowany!')
console.error("mały żarcik :)")
console.warn("Hiehie")
setInterval( function() {
  unlock()
}, 200);

function hideAlert() {
  $('.alert').slideUp(1500)
}

function unlock() {
  if(sessionStorage.getItem('unlocked') != "true") {
    let password = document.forms['unlockForm']['password'].value
    while(password != correctPassword) {
      return false
      password = document.forms['unlockForm']['password'].value
    }
    sessionStorage.setItem('unlocked', true)
  }
  $('#unlockForm').slideUp(2000)
  $('#content').delay(1500).fadeIn(2000)
  $('#num1').attr('autofocus', true)
  return false
}

function logout() {
  setCookie('unlocked', undefined, 0.1)
}

const changeSubmitBtnContent = function() {
  if(document.forms.calcForm.dzialanie.value == "encrypt") {
    $('#submitBtn').text("Zaszyfruj").attr("title", "")
  } else if(document.forms.calcForm.dzialanie.value == "decrypt") {
    $('#submitBtn').text("Deszyfruj").attr("title", "Deszyfrowanie wymaga hasła")
  } else {
    $('#submitBtn').text("Policz!").attr("title", "")
  }
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
  } else if(dzialanie == 'encrypt') {
    text = prompt('Podaj tekst do szyfrowania')
    for(i=0; i<text.length; i++) {
      encrypted.push(encryptitons[text[i]])
    }
    encryptedText = encrypted.join('')
  } else if(dzialanie == 'decrypt') {
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