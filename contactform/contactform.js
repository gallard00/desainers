
jQuery(document).ready(function($) {
"use strict";

    //Contact
   /* $('form.contactForm').submit(function(){
        var f = $(this).find('.form-group'), 
        ferror = false, 
        emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

        f.children('input').each(function(){ // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if( rule !== undefined ){
            var ierror=false; // error flag for current input
            var pos = rule.indexOf( ':', 0 );
            if( pos >= 0 ){
                var exp = rule.substr( pos+1, rule.length );
                rule = rule.substr(0, pos);
            }else{
                rule = rule.substr( pos+1, rule.length );
            }
            
            switch( rule ){
                case 'required':
                if( i.val()==='' ){ ferror=ierror=true; }
                break;
                
                case 'minlen':
                if( i.val().length<parseInt(exp) ){ ferror=ierror=true; }
                break;

                case 'email':
                if( !emailExp.test(i.val()) ){ ferror=ierror=true; }
                break;

                case 'checked':
                if( !i.attr('checked') ){ ferror=ierror=true; }
                break;
                
                case 'regexp':
                exp = new RegExp(exp);
                if( !exp.test(i.val()) ){ ferror=ierror=true; }
                break;
            }
                i.next('.validation').html( ( ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
            }
        });
        f.children('textarea').each(function(){ // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if( rule !== undefined ){
            var ierror=false; // error flag for current input
            var pos = rule.indexOf( ':', 0 );
            if( pos >= 0 ){
                var exp = rule.substr( pos+1, rule.length );
                rule = rule.substr(0, pos);
            }else{
                rule = rule.substr( pos+1, rule.length );
            }
            
            switch( rule ){
                case 'required':
                if( i.val()==='' ){ ferror=ierror=true; }
                break;
                
                case 'minlen':
                if( i.val().length<parseInt(exp) ){ ferror=ierror=true; }
                break;
            }
                i.next('.validation').html( ( ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
            }
        });
        if( ferror ) return false; 
        else var str = $(this).serialize();		
            $.ajax({
                type: "POST",
                url: "contactform/contactform.php",
                data: str,
                success: function(msg){
                   // alert(msg);
                    if(msg == 'OK') {
                        $("#sendmessage").addClass("show");			
                        $("#errormessage").removeClass("show");	
                        $('.contactForm').find("input, textarea").val("");
                    }
                    else {
                        $("#sendmessage").removeClass("show");
                        $("#errormessage").addClass("show");
                        $('#errormessage').html(msg);
                    }
                    
                }
            });
        return false;
    });*/

    //Contacto por whatsapp

    document.querySelector('#submit').addEventListener('click', function(){
  
        //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
        let telefono = "2291415468";
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let subject = document.querySelector('#subject').value;
        let mensaje = document.querySelector('#mensaje').value;
      
        let url = `https://api.whatsapp.com/send?phone=${telefono}&text=¡Hola, ¿Como estas?!. Mi nombre es: ${name}. Email: ${email}. Asunto: ${subject}. Mensaje: ${mensaje}`;

        window.open(url);
      });

});