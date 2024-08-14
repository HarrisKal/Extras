/* index.html: 
    <img src="" alt="">
    <input type="text">
    <button id="generate">Generate</button>
    <button id="download">Download</button>
*/

const input = document.querySelector('input');
const image = document.querySelector('img');
const generate = document.querySelector('#generate');
const download = document.querySelector('#download');

generate.addEventListener('click', () => {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
    image.src = qrCode;
})
download.addEventListener('click', async() => {
    const response = await fetch(image.src);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qrcode.jpg";
    link.click();
})
