const circleText = document.querySelector('.circle-text');
const text = circleText.textContent;
circleText.textContent = '';

text.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.innerText = char;
  span.style.position = 'absolute';
  span.style.transform = `rotate(${i * (360 / text.length)}deg) translate(90px) rotate(-${i * (360 / text.length)}deg)`;
  circleText.appendChild(span);
});
