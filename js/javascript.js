var input = $('#input').html()
var botao = $('#button').click(function(){
    var link = ($('#input').val())
    if(link == ''){
        alert('falta o link')
        $('#input').css('background-color',' #FE6D6D').css('color','white').focus()
    }else(fetch(`https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`)
    .then(response => response.json()).then(json =>{ $('#reponse-url').val(`${json.result.short_link}`), console.log(json)})
   )
   localStorage.setItem('url', link )
})

if(localStorage){
    $('#input').val(localStorage.getItem('url'))
}

$("#button_copiar").click(()=>{$('#reponse-url').select(), document.execCommand('copy')} )




