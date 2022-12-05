document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('loader-wrapper');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    
    }, 1000);
}

function beforeAfter() {  
    document.getElementById('kobavenusab').style.width = document.getElementById('pedsumid').value + "%";
  }
