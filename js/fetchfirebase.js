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

    firebase.database().ref('Proyectos').once('value', function(datos){
        Proyectos=datos.val();
        //console.log("Intentando append a")
        //console.log(Proyectos)
        // Recorremos los productos y los mostramos
        var name,image,languages,description,link,counter;
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
                link = valor.Link;
                }
                //console.log(name)
                //console.log(image)
                //console.log(languages)
                //console.log(description)

                var itemcarousel='<li>';
                        itemcarousel+='<div class="uk-card uk-card-default">';
                            itemcarousel+='<div class="uk-card-media-top">';
                                itemcarousel+='<img src="'
                                itemcarousel+=image;
                                itemcarousel+='" alt="">';
                            itemcarousel+='</div>';
                            itemcarousel+='<div class="uk-card-body">';
                                itemcarousel+='<h3 class="uk-card-title">'
                                itemcarousel+=name;
                                itemcarousel+='</h3>';
                                itemcarousel+='<p uk-text-bold style="color:black;"> Languages & Technologies: <p>';
                                itemcarousel+=languages
                                itemcarousel+='</p>';
                                itemcarousel+='<p uk-text-bold style="color:black;"> Description: <p>';
                                itemcarousel+=description
                                itemcarousel+='</p>';
                                itemcarousel+='<button class="uk-button uk-button-primary" valign="bottom" onclick="window.open(';
                                itemcarousel+="'";
                                itemcarousel+=link;
                                itemcarousel+="'";
                                itemcarousel+=')"><i class="fa fa-angle-right" aria-hidden="true"></i> Information</button>';
                            itemcarousel+='</div>';
                        itemcarousel+='</div>';
                    itemcarousel+='</li>';
                $( "#projects-carousel" ).append(itemcarousel)
                $("#delete-me").remove();
            };
            counter+=1;    
        });
        var controls =' <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>';
        controls +='<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>';
        $( "#controls" ).append(controls)
    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

