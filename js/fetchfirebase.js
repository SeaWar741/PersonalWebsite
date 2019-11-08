//Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyDG0eJVZSqgFcgelgEF1LrM6u5qLI1Cr4M",
      authDomain: "newagent-7ceb9.firebaseapp.com",
      databaseURL: "https://newagent-7ceb9.firebaseio.com",
      projectId: "newagent-7ceb9",
      storageBucket: "newagent-7ceb9.appspot.com",
      messagingSenderId: "1005032468804",
      appId: "1:1005032468804:web:4f09beb9a1580e9dc0a711"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Get a reference to the database service
    var database = firebase.database();
    // Data
    var referencia=database.ref("Proyectos");

    var Proyectos={};

    firebase.database().ref('Proyectos').once('value', function(datos)
    {
        Proyectos=datos.val();
        console.log("Intentando append a")
        console.log(Proyectos)
        // Recorremos los productos y los mostramos
        var name,image,languages,description,counter;
        counter =0;
        $.each(Proyectos, function(indice,valor){
            if(counter>0){
                console.log("Intentando append d")
                if(indice !=0){
                name = valor.Name;
                if (valor.Image=='Null' ||valor.Image=='NUll'||valor.Image=='NULL'){
                    image ="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1";
                }
                else{
                    image = valor.Image;
                }
                languages = valor.Language;
                description = valor.Description;
                }
                console.log(name)
                console.log(image)
                console.log(languages)
                console.log(description)
                var itemcarousel='<div class="item h-100">';
                    itemcarousel+='<div class="container project-card h-100">';
                        itemcarousel+='<div class="card  h-100" >';
                            itemcarousel+='<div class="view overlay">'
                                itemcarousel+='<img class="card-img-top" src="';
                            itemcarousel+=image;
                        itemcarousel+='" alt="Card image cap">';
                        itemcarousel+='<a href="#!">'
                            itemcarousel+='<div class="mask rgba-white-slight"></div>'
                            itemcarousel+='</a>'
                            itemcarousel+='</div>'
                            itemcarousel+='<div class="card-body text-center">    '
                                itemcarousel+='<div class="container project-title">'
                                    itemcarousel+='<h2 class="card-title font-weight-bold">'
                                        itemcarousel+=name;
                        itemcarousel+='</h2>'
                        itemcarousel+='<div class="container project-subtitle">'
                            itemcarousel+='<h5 class="font-weight-bold">Languages: '
                            itemcarousel+=languages;
                            itemcarousel+='</h5>'
                            itemcarousel+='</div>'
                            itemcarousel+='</div>'
                            itemcarousel+='<div class="container project-description">'
                                itemcarousel+='<p class="card-text"><h5>'
                            itemcarousel+=description;
                        itemcarousel+='</h5></p>'
                        itemcarousel+='</div>'
                        itemcarousel+='<a href="#" class="btn btn-primary"><i class="fa fa-github"></i> Github</a>'
                        itemcarousel+='</div>'
                        itemcarousel+='</div>'
                        itemcarousel+='</div>'
                        itemcarousel+='</div> ';
                    console.log(itemcarousel)
                    //$(itemcarousel).appendTo('#owl-carousel2');
                    $('#owl-carousel2').trigger('add.owl.carousel', itemcarousel)
            };
            counter+=1;    
        });
        $('#owl-carousel2').trigger('refresh.owl.carousel');
    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });