<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
    <title>INDEX </title>
      <link rel="shortcut icon" href="img/icono2018.png">
   <link rel="stylesheet" href="style.css"> 
   <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
   <body background-attachment: no-repeat bottom right background="original.gif">
       
     <script>
         function geocode(){
             var Direccion = document.getElementById("Direccion").value;
             axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
                 params:{
                     address: Direccion,
                     key:'AIzaSyBmFh4f3FttFlk-MY5zXvGq7n7hHW9QQX8'
                 }
             })
             .then(function(response){
                console.log(response); 
                
             console.log(response.data.results[0].geometry);
             
    var formattedAddress = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    
             document.getElementById('geometry');
             })
             .catch(function(error){
                 console.log(error);
             });
         }
     </script>
       <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
       <link rel="stylesheet" type="text/css" href="datepicker.css">
       <script type="text/javascript" src="jquery.min.js"></script>
       <script type="text/javascript" src="bootstrap-datepicker.js"></script>
     <link href="jquery.datetimepicker.css" rel="stylesheet">
    
    <script type="text/javascript" src="jquery.datetimepicker.full.js" ></script> 
<style type="text/css">
#datepicker{
    width: 180px; margin: 0 20px 40px 40px;
}
#datepicker > span:hover{
cursor: pointer; 
}

#datepicker2{
    width: 180px; margin: 0 20px 20px 20px;
}
#datepicker2 > span:hover{
cursor: pointer; 
}
</style>
<div id="top-wrapper2" class="other-menu"> <a href="/app.html"><img src="./img/placeholders/form_08.png" alt=""></a>
 <div class="about-photo">
        <div class="about-drop call-content wow fadeInDownSmall">
            <h1 class="brand"></h1></div>
    </div>
<!-- /about -->
<section id="about" class="section-container about-container contact-about">
  <div class="container-full-width">
    <div class="clear">
        <a href="/app.html">
            <img src="./img/placeholders/actualizar1.png"alt=""></a> 
<section id="about" class="section-container about-container contact-about">
  <div class="container-full-width">
    <div class="clear">
        <a href="/app.html">
            <img src="./img/placeholders/expoboton07.png"alt="">  </a>
        <a href="/app.html"> </a>
            <a href="/eventos.html">
                <img src="./img/placeholders/eventoboton07.png"alt=""> 
                </a><p></p>      </div>
      <div class="col-4-m about-text wow fadeInUpSmall contact-offices" data-wow-delay="0.5s"><h3> </h3><p></p> </div>
      <div class="col-4-m about-text wow fadeInUpSmall contact-message" data-wow-delay="0.7s"> <h3> </h3><p> </p> </div>    </div>
</section><!-- /about -->
        <div class="container">
            <h1 class="brand"></h1>
            <div class="wrapper animated bounceInLeft">
                <div class="contact"> <h3></h3>
                <form id="contactForm">
                    <p>
                        <label>Expos</label>
                        <label><b> GALERÍA</b></label>
                        <input type="text" name="Galeria" id="Galeria"></p><p>
                            <label> NOMBRE </label>
                            <input type="text" name="Nombre" id="Nombre"></p><p>
                            <label> DIRECCIÓN</label>
                            <input type="text" name="Dirección" id="Direccion" onblur="geocode()">   </p>  <p>
                                <label> CORREO</label>
                                <input type="text" name="Email" id="Email">
                                </p><p>
                                    <label>TELÉFONO</label>
                                    <input type="text" name="Teléfono" id="Telefono"> </p> <p>
        <label>INAUGURACIÓN</label>
        <input type="text" id="datetimepicker" class="form-control" />
    </p>
    <script src="jquery.datetimepicker.full.js"></script>
<script>
    $("#datetimepicker").datepicker();
</script>
<p>
    <label>CLAUSURA</label>
    <input type="text" id="datetimepicker2" class="form-control" />
</p>
<script src="jquery.datetimepicker.full.js"></script>
<script>
    $("#datetimepicker2").datepicker();
</script>
<p>
    <label>HORARIOS</label>
    <label>De:</label>
    <input type="text" id="datetimepicker3" class="form-control"/>
    <script src="jquery.datetimepicker.full.js"></script>
<script>
    $("#datetimepicker3").datetimepicker({
        datepicker: false,
        format:"H:i"
    });
</script>
<label>A:</label>
<input type="text" id="datetimepicker4" class="form-control"/>
<script src="jquery.datetimepicker.full.js"></script>
<script>
$("#datetimepicker4").datetimepicker({
    datepicker: false,
    format:"H:i"
});
</script>
</p>
<p>
         <label>PáginaWeb</label>
        <input type="text" name="Web" id="Web"></p> 
        <p>
          <label>Facebook </label>
           <input type="text" name="Facebook" id="Facebook"> </p> <p>
                  <label>Instagram </label>
                  <input type="text" name="Instagram" id="Instagram"> 
                  </p>
                  <p>
                  <label>Días de Atención </label>
                  <input type="text" name="Dias" id="Dias"> 
                  </p>
                                    <p class="full">
                                        <label>IMAGEN</label>
                                    <progress value="0" max="100" id="uploader"> 0% </progress>
                                    <input type="file" value="upload" id="fileButton" />
                                    </p>
                                    <p class="full">
                                        <label> DESCRIPCIÓN</label>
                                        <textarea name="Galeria" rows="5" id="Descripcion"></textarea>
                                    </p>

                                    <p class="full">
                                            <div class="alert">Enviado</div>
                                        <button type="submit">Enviar</button>
                                   
                </form>
            </div>
        </div>
        </div>
   
<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
<script src="main.js">
</script>
</body>
</html>