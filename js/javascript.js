
function handleFiles() {
    
    var file = this.files[0]
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.height = 180;
    img.width = 160;
    document.getElementById('fileContainer').children[1].replaceWith(img)
    //this.value = "";
    if(file.size > 52000){
        alert("File is too big!");
    }
    
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) {
            var arrayBuffer = evt.target.result
        }
        console.log(arrayBuffer)
        document.getElementById("img_pulmao").value = arrayBuffer
    }
}