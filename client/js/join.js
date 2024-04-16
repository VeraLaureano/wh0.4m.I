const form = document.getElementById('form-join')
const input = document.getElementById('input-join')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value.length < 12)
    return window.alert('K3y r0om min l3ngth 12');
  
  if (input.value) {
    var encrypted = CryptoJS.AES.encrypt(input.value, 'laureanovera');
    sessionStorage.setItem('key_room', encrypted);
    input.value = '';
    window.location.replace("/chat");
  }
})