

const weatherConditions = [
    { condition: 'sunny', src: 'imagem/sol.png' },
    { condition: 'cloudy', src: 'imagem/nublado.png' },
    { condition: 'partly_cloudy', src: 'imagem/nuvens.png' },
    // Add more conditions here
  ];
  function getWeatherIconSrc(condition) {
    const weatherCondition = weatherConditions.find(
      (weather) => weather.condition.toLowerCase() === condition.toLowerCase()
    );
    return weatherCondition ? weatherCondition.src : 'imagem/default.png';
  }
  const locations = [
    { name: 'GRAMADO', temperature: '35° F', condition: 'sunny' },
    { name: 'SÃO PAULO', temperature: '39° F', condition: 'cloudy' },
    // Add more locations here
  ];
  document.querySelectorAll('.w3-row div h3').forEach((day, index) => {
    const location = locations[index];
    const img = day.parentNode.querySelector('img');
    img.src = getWeatherIconSrc(location.condition);
    img.alt = location.condition;
    day.textContent = day.textContent.toUpperCase();
  });