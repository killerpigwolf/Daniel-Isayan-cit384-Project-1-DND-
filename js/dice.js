// The effects stay in the HTML table, so the table also works without JavaScript.
var rollButton = document.getElementById('roll-button');
var clearButton = document.getElementById('clear-button');
var rollNumber = document.getElementById('roll-number');
var rollEffect = document.getElementById('roll-effect');
var rollMeter = document.getElementById('roll-meter');

// Reveal the controls only after this script has loaded.
document.getElementById('dice-controls').hidden = false;

rollButton.addEventListener('click', function () {
  // Math.random gives a value below 1; this makes a whole number from 1 to 100.
  var number = Math.floor(Math.random() * 100) + 1;
  var tableRow = document.getElementById('roll-' + number);

  rollNumber.value = number;
  rollMeter.value = number;
  rollMeter.textContent = number + ' out of 100';
  if (tableRow) {
    rollEffect.textContent = tableRow.querySelector('td').textContent;
  } else {
    rollEffect.textContent = 'This result is not written yet. Ask the DM, or agree to reroll.';
  }
  clearButton.disabled = false;
});

clearButton.addEventListener('click', function () {
  rollNumber.value = '—';
  rollMeter.value = 0;
  rollMeter.textContent = 'No roll yet';
  rollEffect.textContent = 'Roll to look up an effect.';
  clearButton.disabled = true;
});
