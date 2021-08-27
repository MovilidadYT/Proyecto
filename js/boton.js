function redireccionar(){
    location.replace("descargas.html");
    } 
    
    
    function enviarDatos(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyw_FADGE8fwN-AxrnqnaN97Mq6KhMrhCZUNMFTfT60GGXF8rBg2I2EBrR978LKbC-u/exec'
    const form = document.forms['f1']
    const btn = document.getElementById('btnEnviar');
    
    if (document.f1.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.f1.nombre.focus()
        return 0;
    }
    if(document.f1.apellido.value.length==0){
        alert("Tiene que escribir su apellido")
        document.f1.apellido.focus()
        return 0;
    }
    if(document.f1.dia.value.length==0 || document.f1.dia.value.length>2){
        alert("Tiene que escribir su día de nacimiento")
        document.f1.dia.focus()
        return 0;
    }
    if(document.f1.mes.value.length==0 || document.f1.mes.value.length>2){
        alert("Tiene que escribir su mes de nacimiento")
        document.f1.mes.focus()
        return 0;
    }
    if(document.f1.año.value.length!=4){
        alert("Tiene que escribir su año de nacimiento")
        document.f1.año.focus()
        return 0;
    }
    if(document.f1.email.value.length==0){
        alert("Tiene que escribir su correo")
        document.f1.email.focus()
        return 0;
    }
    if(document.f1.genero.value.length==0){
        alert("Tiene que escribir su genero")
        document.f1.genero.focus()
        return 0;
    }
    if(document.f1.principal_transporte.value.length==0){
        alert("Tiene que escribir su principal transporte")
        document.f1.principal_transporte.focus()
        return 0;
    }
    if(document.f1.dias.value.length==0){
        alert("Tiene que escribir su dias")
        document.f1.dias.focus()
        return 0;
    }
    if(document.f1.tipo_bicicleta.value.length==0){
        alert("Tiene que escribir su bici")
        document.f1.tipo_bicicleta.focus()
        return 0;
    }
    if(document.f1.tipo_ciclista.value.length==0){
        alert("Tiene que escribir su tipo de ciclista")
        document.f1.tipo_ciclista.focus()
        return 0;
    }
    if(document.f1.tiempo.value.length==0){
        alert("Tiene que escribir su tiempo de trayeco")
        document.f1.tiempo.focus()
        return 0;
    }
    if(document.f1.municipio_inicio.value==0){
        alert("Tiene que escribir su municipio inicio")
        document.f1.municipio_inicio.focus()
        return 0;
    }
    if(document.f1.municipio_destino.value==0){
        alert("Tiene que escribir municipio destino")
        document.f1.municipio_destino.focus()
        return 0;
    }
    if(document.f1.pertenece_colectivo.value==0){
        alert("Tiene que escribir grupo colectivo")
        document.f1.pertenece_colectivo.focus()
        return 0;
    }
    if(document.f1.pertenece_colectivo.value=="Sí" && document.f1.colectivo_ciclista.value.length==0){
        alert("Tiene que escribir el nombre del colectivo ciclista al que pertenece")
        document.f1.pertenece_colectivo.focus()
        return 0;
    }
    if(document.f1.terminos.value!="1"){
        alert("Tiene que aceptar terminos y condiciones")
        document.f1.terminos.focus()
        return 0;
    }
    else{
    btn.addEventListener('click', (e) => {
    //$(".submit").addEventListener('click', e => {
    btn.setAttribute("disabled","disabled");
    e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => redireccionar())
        .catch(error => console.error('Error!', error.message))  
      
    })
    }
}

    
    const script_url = 'https://script.google.com/macros/s/AKfycbyw_FADGE8fwN-AxrnqnaN97Mq6KhMrhCZUNMFTfT60GGXF8rBg2I2EBrR978LKbC-u/exec'
    function update_value(){
    

        
        //$("#re").css("visibility","hidden");
         //document.getElementById("loader").style.visibility = "visible";
        var flag=0;

        
        
        
        
        // var colonia_inicio= $("#colonia_inicio").val();
        // var municipio_destino= $("#municipio_destino").val();
        // var colonia_destino= $("#colonia_destino").val();
        
        // var colectivo_ciclista= $("#colectivo_ciclista").val();
        // var url = script_url+"?callback=ctrlq&genero="+genero+"&id="+id1+"&nombre="+nombre+"&principal_transporte="+principal_transporte+"&email="+email+"&dias="+dias+"&tipo_bicicleta="+tipo_bicicleta+"&tipo_ciclista="+tipo_ciclista+"&tiempo="+tiempo+"&municipio_inicio="+municipio_inicio+"&colonia_inicio="+colonia_inicio+"&municipio_destino="+municipio_destino+"&colonia_destino="+colonia_destino+"&pertenece_colectivo="+pertenece_colectivo+"&colectivo_ciclista="+colectivo_ciclista+"&action=update";
        
        if(document.f1.id.value.length==0){
            alert("Tiene que escribir su id")
            document.f1.id.focus()
            return 0;
        }
        if(document.f1.email.value.length==0){
            alert("Tiene que escribir su correo")
            document.f1.email.focus()
            return 0;
        }

        if(document.f1.genero.value.length==0){
            alert("Tiene que escribir su genero")
            document.f1.genero.focus()
            return 0;
        }
    
        if(document.f1.principal_transporte.value.length==0){
            alert("Tiene que escribir su principal transporte")
            document.f1.principal_transporte.focus()
            return 0;
        }
    
        if(document.f1.dias.value.length==0){
            alert("Tiene que escribir su dias")
            document.f1.dias.focus()
            return 0;
        }
    
        if(document.f1.tipo_bicicleta.value.length==0){
            alert("Tiene que escribir su bici")
            document.f1.tipo_bicicleta.focus()
            return 0;
        }
        
        if(document.f1.tipo_ciclista.value.length==0){
            alert("Tiene que escribir su tipo de ciclista")
            document.f1.tipo_ciclista.focus()
            return 0;
        }
    
        if(document.f1.tiempo.value.length==0){
            alert("Tiene que escribir su tiempo de trayeco")
            document.f1.tiempo.focus()
            return 0;
        }
        
        if(document.f1.municipio_inicio.value==0){
            alert("Tiene que escribir su municipio inicio")
            document.f1.municipio_inicio.focus()
            return 0;
        }
    
    
        if(document.f1.municipio_destino.value==0){
            alert("Tiene que escribir municipio destino")
            document.f1.municipio_destino.focus()
            return 0;
        }
    
    
        if(document.f1.pertenece_colectivo.value==0){
            alert("Tiene que escribir grupo colectivo")
            document.f1.pertenece_colectivo.focus()
            return 0;
        }
        if(document.f1.pertenece_colectivo.value=="Sí" && document.f1.colectivo_ciclista.value.length==0){
            alert("Tiene que escribir el nombre del colectivo ciclista al que pertenece")
            document.f1.pertenece_colectivo.focus()
            return 0;
        }

        else
        {
        var id1=  $("#id").val();
        var email= $("#email").val();
        var genero= $("#genero").val();
        var principal_transporte= $("#principal_transporte").val();
        var dias= $("#dias").val();
        var tipo_bicicleta= $("#tipo_bicicleta").val();
        var tipo_ciclista= $("#tipo_ciclista").val();
        var tiempo= $("#tiempo").val();
        var municipio_inicio= $("#estados").val();  
        var colonia_inicio= $("#minucipios").val();
        var municipio_destino= $("#estados2").val();
        var colonia_destino= $("#minucipios2").val();
        var pertenece_colectivo= $("#pertenece_colectivo").val();
        var colectivo_ciclista= $("#exampleFormControlTextarea1").val();

        var url = script_url+"?callback=ctrlq&id="+id1+"&email="+email+"&genero="+genero+
        "&principal_transporte="+principal_transporte+"&dias="+dias+"&tipo_bicicleta="+tipo_bicicleta+
        "&tipo_ciclista="+tipo_ciclista+"&tiempo="+tiempo+"&municipio_inicio="
        +municipio_inicio+"&colonia_inicio="+colonia_inicio+
        "&municipio_destino="+municipio_destino+"&colonia_destino="+colonia_destino+
        "&pertenece_colectivo="+pertenece_colectivo+"&colectivo_ciclista="+colectivo_ciclista+"&action=update";
        
        
        var request = jQuery.ajax({
          crossDomain: true,
          url: url ,
          method: "GET",
          dataType: "jsonp"
        });
        redireccionar();
        }
    }
      
    function NumText(string){         //solo letras y numeros
        var out = '';
        //Se añaden las letras validas
        var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ';//Caracteres validos
      
        for (var i=0; i<string.length; i++)
           if (filtro.indexOf(string.charAt(i)) != -1) 
           out += string.charAt(i);
        return out;
    }

    function Numeros(string){//Solo numeros
        var out = '';
        var filtro = '1234567890/';//Caracteres validos
        
        //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
        for (var i=0; i<string.length; i++)
           if (filtro.indexOf(string.charAt(i)) != -1) 
                 //Se añaden a la salida los caracteres validos
             out += string.charAt(i);
        
        //Retornar valor filtrado
        return out;
    } 
    
    
      function read_value() {
    
        //$("#re").css("visibility","hidden");
           
         //  document.getElementById("loader").style.visibility = "visible";
         var url = script_url+"?action=read";
        alert("Hello")
        $.getJSON(url, function (json) {
    
            alert(json);    
            // Set the variables from the results array
            //$("#name").val(''+json.records.NAME)
        
                // CREATE DYNAMIC TABLE.
                var table = document.createElement("table");
        
                var header = table.createTHead();
                var row = header.insertRow(0);     
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
            
                cell1.innerHTML = "<b>ID</b>";
                cell2.innerHTML = "<b>Name</b>";
                
                // ADD JSON DATA TO THE TABLE AS ROWS.
                for (var i = 0; i < json.records.length; i++) {
        
                    tr = table.insertRow(-1);
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].ID;
                        tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].NAME;
                    }
                
        
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
                alert(table)
                document.getElementById("loader").style.visibility = "hidden";
                $("#re").css("visibility","visible");
            });
            }
