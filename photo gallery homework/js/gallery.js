function upDate(previewPic){
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById("image").style.background = "url("+previewPic.src+")";
}
   
function unDo(){
    document.getElementById('image').innerHTML = 'Hover over an image below';
    document.getElementById("image").style.background = "#8e68ff"; 
}