const codeBlock = document.getElementById('code');
const form = document.getElementById('form-home'); 
const input = document.getElementById('input-home');

const a = Math.floor(Math.random() * 50) + 1
const b = Math.floor(Math.random() * 90) + 1
const c = Math.floor(Math.random() * 50) + 1

const test = (a, b, c) => {
  let d = a + b - c;
  let e = a;
  a = b;
  b = a;
  a = e;
  if (d !== 0) 
    return (2*b + c - a + 2*e) / d
  return  2*b + c - a + 2*e
}

const code = `
a = ${a}; <br />
b = ${b}; <br />
c = ${c}; <br />
<br />
def calc(a, b, c): <br />
  · d = a + b - c <br />
  · e = a <br />
  · a = b <br />
  · b = a <br />
  · a = e <br />
  · if d != 0: <br />
    · · return (2*b + c - a + 2*e) / d <br />
  · return  2*b + c - a + 2*e <br />
  <br />
print(calc(c, c-a, b)) <br />
`
codeBlock.innerHTML = code

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value) {
    if (Math.floor(input.value) === Math.floor(test(c, c - a, b))) {
      window.location.replace("/join");
    }
    console.log(Math.floor(input.value));
    console.log(Math.floor(test(c, c - a, b)));
    input.value = '';
  }
});