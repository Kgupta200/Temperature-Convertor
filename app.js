function convertTemperature() {
    const input = document.getElementById('temperatureInput').value.trim();
    const unit = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    if (isNaN(input) || input === '') {
      resultDiv.textContent = 'Please enter a valid number.';
      return;
    }

    const temperature = parseFloat(input);
    let result = '';

    // Perform conversion based on the selected unit
    switch (unit) {
      case 'C': // Celsius input
        result = `
          ${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F, 
          ${(temperature + 273.15).toFixed(2)} K
        `;
        break;
      case 'F': // Fahrenheit input
        result = `
          ${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C, 
          ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K
        `;
        break;
      case 'K': // Kelvin input
        result = `
          ${temperature} K = ${(temperature - 273.15).toFixed(2)}°C, 
          ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F
        `;
        break;
      default:
        result = 'Invalid unit selected.';
    }

    resultDiv.textContent = result;
  }
