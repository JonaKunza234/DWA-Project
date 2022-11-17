$(document).ready(function(){
    var apikey= "563492ad6f9170000100000100ccc85e057341148920ba626b69a917"
    var image= ''
    $("#frmW").submit(function(event){
        event.preventDefault()
        var search = $("#searchW").val()
        imagesearch()
    })

    function imagesearch(){
        $.ajax({
            method: 'GET',
            beforeSend: function (xhr){
                xhr.setRequestHeader ("Authorization", apikey);
            },
            url: "https://api.pexels.com/v1/search?query="+search+"&per_page=5&page=1",
            success: function (data){
                console.log(data)
                data.photos.forEach(photo => {
                    image = `
                    <img src="${photo.src.small}"/>
                    `
                    $("#images").append(image)
                });
            },
            error: function (error){
                console.log(error)
            }
        })
    }
})