// const myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello, World!"
// myHeading.addEventListener('click', function () {
//   alert('You clicked the title!');
// });
function setUserName() {
  let name = prompt('Enter user name: ');
  if (!name) {
    setUserName();
  } else {
    localStorage.setItem('name', name);
    h1Title.textContent = 'Welcome, ' + name;
  }
}

let image = document.querySelector('img');
image.onclick = function() {
  let image_src = image.getAttribute('src');
  if (image_src === 'images/firefox.jpeg') {
    image.setAttribute('src', 'images/another-firefox.jpg');
  } else {
    image.setAttribute('src', 'images/firefox.jpeg');
  }
};

let userChangeButton = document.querySelector('button');
let h1Title = document.querySelector('h1');

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  h1Title.textContent = 'Welcome, ' + storedName;
}

userChangeButton.addEventListener('click', setUserName);
