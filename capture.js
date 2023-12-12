



let recordedChunks = [];
let isRecording = false;
let isScreenshotMode = false;

var canvas;
setTimeout(()=>{
    if(!canvas){
        try {
            canvas = document.querySelector("canvas");
        } catch (error) {
            console.log(error)
        }
        
    }
},1000)
function handleKeyDown(event) {
  if (event.key === 'x' && !isRecording) {
    takeScreenshot();
  } else if (event.key === 'z') {
    /*if (isRecording) {
      stopRecording();
        isRecording = false;
    } else {
        isRecording = true;
      startRecording();
    }*/
  }
}

function takeScreenshot() {
  const dataURL = document.querySelector("canvas").toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'screenshot.png';
  link.click();
}

function startRecording() {
  
}
function downloadVideoFromDataUrl(dataUrl, filename) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;

  // Simulate a click on the link element
  link.dispatchEvent(new MouseEvent('click'));
}

function stopRecording() {
  if (isRecording) {
    isRecording = false;
    isScreenshotMode = true;
    //var compiled = encoder.compile(false, function(output){
      downloadVideoFromDataUrl((window.webkitURL || window.URL).createObjectURL(output))
    //});
  }
}


function captureFrame() {
  if (isRecording) {
    //encoder.add(document.querySelector("canvas"));
  }
  requestAnimationFrame(captureFrame);
}

document.addEventListener('keydown', handleKeyDown);
captureFrame();
