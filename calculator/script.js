let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Validate expression
    if (!/^[\d+\-*/.() ]+$/.test(display.value)) {
      display.value = 'Error';
      return;
    }

    // Compute using Function (safer than eval)
    const result = Function('"use strict"; return (' + display.value + ')')();
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}