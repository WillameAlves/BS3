/* Selectize */

function mostraaddClinica(){
  $('.convenio-tags').each(function(){
    var valores = document.getElementsByClassName("convenio-tags")[0].value;
    //if($(this)[0].value != '')
    if(valores != ""){
        $('.addbutton-clinica').show()
      }else{
        $('.addbutton-clinica').hide()
      }
  })

} 

function mostraaddConvenio(){
  $('.clinica-tags').each(function(){
    var valores = document.getElementsByClassName("convenio-tags")[0].value;
    //if($(this)[0].value != '')
    if(valores != ""){
        $('.addbutton-convenio').show()
      }else{
        $('.addbutton-convenio').hide()
      }
  })
}



function iniciaConvenios(){

  $('.convenio-tags').selectize({
      plugins: ['remove_button'],
      persist: false,
      createOnBlur: true,
      create: true,
      openOnFocus: false,
      onChange: function(value) {
              console.log(value);
              if (value != ""){
                mostraaddClinica();
              };

      }

  });

}

function iniciaClinicas(){

  $('.clinica-tags').selectize({
    plugins: ['remove_button'],
    persist: false,
    createOnBlur: true,
    create: true,
    openOnFocus: false,
    onChange: function(value) {
            console.log(value);
            if (value != ""){
              mostraaddConvenio();
            };

    }

  });

}


iniciaConvenios();

/* botão adiciona clínicas */
$('.addbutton-clinica').click(function(){
    $('#novasclinicas').append(
      '<div class="content-line">'+
         '<div class="col-lg-5">'+
            '<div class="input-group col-lg-12">'+
              '<input type="text" class="form-control" aria-label="Busca" placeholder="Selecionar" aria-describedby="search-addon"> '+
              '<div class="input-group-btn" id="search-addon">'+
                '<button type="button" class="btn btn-default">'+
                '<span class="glyphicon glyphicon-search"></span>'+
                '</button>'+
              '</div>'+
            '</div>'+
          '</div>'+          
          '<div class="col-lg-5">'+
            '<div class="input-group col-lg-12">'+
                '<input type="text" class="convenio-tags form-control" aria-label="Busca" aria-describedby="search-addon">'+
                '<div class="input-group-btn" id="search-addon">'+
                  '<button type="button" class="btn btn-default">'+
                    '<span class="glyphicon glyphicon-search"></span>'+
                  '</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-lg-1">'+
            '<button type="button" class="btn btn-danger removebutton-clinicas">X</button>'+
          '</div>'+
       '</div>'
      );
    
    $('input.convenio-tags').each(function(){
      if ($(this).val() == ''){
      //if(valores == "") {
        $(this).selectize({
          plugins: ['remove_button'],
          persist: false,
          createOnBlur: true,
          create: true
        });
      }
    });

    
      /* botão de remover linha clinicas */
      $('.removebutton-clinicas').click(function(){
        $(this).parents('.content-line').remove();
        mostraaddClinica();
      });

  });  
  
  /* botão adiciona convenios */
  $('.addbutton-convenio').click(function(){
        $('#novosconvenios').append(
        '<div class="content-line">'+
           '<div class="col-lg-5">'+
              '<div class="input-group col-lg-12">'+
                '<input type="text" class="form-control" aria-label="Busca" placeholder="Selecionar" aria-describedby="search-addon"> '+
                '<div class="input-group-btn" id="search-addon">'+
                  '<button type="button" class="btn btn-default">'+
                  '<span class="glyphicon glyphicon-search"></span>'+
                  '</button>'+
                '</div>'+
              '</div>'+
            '</div>'+          
            '<div class="col-lg-5">'+
              '<div class="input-group col-lg-12">'+
                  '<input type="text" class="clinica-tags form-control" aria-label="Busca" aria-describedby="search-addon">'+
                  '<div class="input-group-btn" id="search-addon">'+
                    '<button type="button" class="btn btn-default">'+
                      '<span class="glyphicon glyphicon-search"></span>'+
                    '</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="col-lg-1">'+
              '<button type="button" class="btn btn-danger removebutton-convenios">X</button>'+
            '</div>'+
         '</div>'
        );
      $('input.clinica-tags').each(function(){
        if ($(this).val() == ''){
        //if(valores == "") {
          $(this).selectize({
            plugins: ['remove_button'],
            persist: false,
            createOnBlur: true,
            create: true
          });
        }
      });

      $('.removebutton-convenios').click(function(){
        $(this).parents('.content-line').remove();
        mostraaddConvenio();
      });

    });  

      
      
  
            
  $('.convenio-tags').change(function(){
    mostraaddClinica();
  });

  $('.clinica-tags').change(function(){
    mostraaddConvenio();
  });

mostraaddClinica();

function convenios(){
console.log("inicia clinicas");
    iniciaClinicas();

    $('.convenio-tags').eq(0).val('');
    
    mostraaddClinica();
  }

  function clinicas(){
    console.log("inicia convenios");
    iniciaConvenios();
    
    $('.clinica-tags').val('');

    mostraaddConvenio();
  }