const vedioElement = document.getElementById('vedio');
const buttonElement = document.getElementById('button');

async function shareMediaScreen() {
    try {
        const mediaStream  = await navigator.mediaDevices.getDisplayMedia();
        vedioElement.srcObject = mediaStream;
        vedioElement.onloadedmetadata = () => {
        vedioElement.play();
        }
    } catch (e) {
        console.log(e);
    }
}

buttonElement.addEventListener('click',async () => {
    buttonElement.disabled = true;
    await vedioElement.requestPictureInPicture();
    buttonElement.disabled = false;
})

shareMediaScreen();