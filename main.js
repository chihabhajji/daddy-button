import './style.css'
import countries from "countries-list";

console.log(navigator.language)



const daddy = new SpeechSynthesisUtterance();
if ('speechSynthesis' in window) {
  daddy.text = 'welcome daddy uwu'
  window.speechSynthesis.speak(daddy);
}
else {
  document.write("Browser not supported")
}

daddy.onstart = () => {
  element.setAttribute('disabled', 'disabled');
}
daddy.onend = () => {
  element.removeAttribute('disabled');
}

daddy.pitch = 2;
daddy.rate = 1.5;
daddy.lang = navigator.language;

Object.entries(countries.countries).map(country => {
  var opt = document.createElement('option');
  if (country[1].languages.indexOf(navigator.language) != -1) {
    opt.setAttribute('selected', 'selected');
    console.log('hello')
  }
  opt.value = country[1].languages[0];
  opt.innerHTML = `${country[1].emoji} : ${country[1].name}`;
  document.getElementById('langs').appendChild(opt);
});

document.getElementById('langs').addEventListener('change', (event) => {
  daddy.lang = event.target.value;
});

let counter = 0
const element = document.querySelector('#daddy');
const setCounter = (count) => {
  counter = count
  element.innerHTML = `CLICK ME DADDY`
  if (count > 0) {
    daddy.text = `count is ${counter} daddy uwu`
    element.innerHTML = `YOU SMASHED ME ${counter} TIME${counter > 1 ? 'S' : ''} DADDY`
    if (count >= 5) {
      daddy.text = `i'm tired, stop this ! ` + daddy.text
    }
    window.speechSynthesis.speak(daddy);
  }
}
element.addEventListener('click', () => setCounter(counter + 1))
setCounter(0)
