function setImagePreview() {  
    var preview, img_txt, localImag, file_head = document.getElementById("file_head"),  
    picture = file_head.value;  
    if (!picture.match(/.jpg|.jpeg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
    !1;  
    if (preview = document.getElementById("preview"), file_head.files && file_head.files[0]) preview.style.display = "block",  
        preview.style.width = "120px",  
        preview.style.height = "120px",  
        preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
    else {  
        file_head.select(),  
        file_head.blur(),  
        img_txt = document.selection.createRange().text,  
        localImag = document.getElementById("localImag"),  
        localImag.style.width = "63px",  
        localImag.style.height = "63px";  
        try {  
            localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
            localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
        } catch(f) {  
            return alert("您上传的图片格式不正确，请重新选择！"),  
            !1  
        }  
        preview.style.display = "none",  
        document.selection.empty()  
    }  
    return document.getElementById("DivUp").style.display = "block",  
    !0  
} 

function saveImage() {
    alert("图片上传成功");
    const ref = firebase.storage().ref();
    const file = $("#file_head").get(0).files[0];
    const name = file.name;
    const task = ref.child(name).put(file, metadata);
}