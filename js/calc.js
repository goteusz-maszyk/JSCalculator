function calculate() {
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
  }
  if(isNaN(output) || output == undefined) { output = 0 }
  if(dzialanie == 'sm') {
    $('#output').text('Średnia matematyczna z: ' + liczby + ' = ' + output);
  } else {
    $('#output').text(num1 + ' ' + dzialanie + ' ' + num2 + ' = ' + output);
  }
  return false
}