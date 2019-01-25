/* Selectize */
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
                mostraadd();
              };

      }

  });

}

function iniciaConvenios(){

  $('.clinica-tags').selectize({
    plugins: ['remove_button'],
    persist: false,
    createOnBlur: true,
    create: true,
    openOnFocus: false,
    onChange: function(value) {
            console.log(value);
            if (value != ""){
              mostraadd();
            };

    }

  });

}

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
            '<button type="button" class="btn btn-danger removebutton">X</button>'+
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
              '<button type="button" class="btn btn-danger removebutton">X</button>'+
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
    });  

/* botão de remover linha */
$('.removebutton').click(function(){
      $(this).parents('.content-line').remove();
      mostraadd();
  
      });
      $('.convenio-tags').change(function(){
        mostraadd();
      });
      mostraadd();
    })






function mostraadd(){
  $('.convenio-tags').each(function(){
    var valores = document.getElementsByClassName("convenio-tags")[0].value;
    //if($(this)[0].value != '')
    if(valores != ""){
        $('.addbutton').show()
      }else{
        $('.addbutton').hide()
      }
  })
}

 function convenios(){
        $("h4").html("Convênio(s)");
  console.log('entrou convenio');
    var width = $(".convenios").parents('.col-lg-12').width()/2;
    
      $(".convenios").animate({
            left: "-"+width+"px",
          });

      $(".clinicas").animate({
            left: width+"px",
          } );

      console.log(width);
      $(".clinicas input").addClass("convenio-tags");
      $(".convenios input").removeClass("convenio-tags");
      $('.convenio-tags').selectize({
        plugins: ['remove_button'],
        persist: false,
        createOnBlur: true,
        create: true,
        openOnFocus: false,
        onChange: function(value) {
                 console.log(value);
                 if (value != ""){
                  mostraadd();
                 };
    
        }
    
        });
    }

    function clinicas(){
    $("h4").html("Clínica(s)");
    console.log('entrou clinicas');
      $(".clinicas").animate({
            left: "0",
          });

      $(".convenios").animate({
            left: "0",
          });
      $(".clinicas input").addClass("convenio-tags");
      $(".convenios input").removeClass("convenio-tags");
      $('.convenio-tags').selectize({
        plugins: ['remove_button'],
        persist: false,
        createOnBlur: true,
        create: true,
        openOnFocus: false,
        onChange: function(value) {
                 console.log(value);
                 if (value != ""){
                  mostraadd();
                 };
    
        }
    
        });
    }