$(document).ready(function(){
	
	//my facbook access token
 var myFbToken="EAACEdEose0cBAG0qZBsHWAQdSZBs2LUC70UVC4Rbp5Hgp3ttZA8wFmRpwAj9jjyKs5roFKH1SHXjDaugZBCkDx3pK5NAdJZCOXIMIzfSmToXTYnue33ZBkZAA2S7fnM5R5dMbz10G29IVDQ5yePOrTCCNorpNfqXJpfyF2uIuZBDHRc7wuShFGFKQmVz2NuRZCLAZD";
 getResponse();
 //my ajax call to retrieve data from facebook api
  function getResponse() {
        $.ajax({
           type:"GET",
           url:"https://graph.facebook.com/me?fields=name,first_name,last_name,email,age_range,birthday,gender,about,cover,television.limit(4),movies.limit(4),music.limit(4),picture.type(large),languages,work,education,hometown,location,relationship_status,quotes,books&access_token="+myFbToken,
           
           success:function(data){
                 //My First Name
                if(_.has(data, 'first_name') && !(_.isNil(data.first_name)) ){
                    $('.information .fname').text(data.first_name.charAt(0).toUpperCase()+data.first_name.slice(1));
                }
                 else{
                      $('.information .fname').append('<p>Not Shared</p>');
                 }
                  //My Last Name
                if(_.has(data, 'last_name') && !(_.isNil(data.last_name)) ){
                    $('.information .lname').text(data.last_name.charAt(0).toUpperCase()+data.last_name.slice(1));
                }
                 else{
                      $('.information .lname').append('<p>Not Shared</p>');
                 }
                  //My Email
                if(_.has(data, 'email') && !(_.isNil(data.email)) ){
                    $('.information .email').text(data.email);
                }
                 else{
                      $('.information .email').append('<p>Not Shared</p>');
                 }
                  //My Age
                if(_.has(data, 'age_range') && !(_.isNil(data.age_range.min)) ){
                    $('.information .age').text(data.age_range.min);
                }
                else{
                      $('.information .age').append('<p>Not Shared</p>');
                 }
                  //My Birthday
                if(_.has(data, 'birthday') && !(_.isNil(data.birthday)) ){
                    $('.information .birth').text(data.birthday);
                }
                else{
                      $('.information .birth').append('<p>Not Shared</p>');
                 }
                  //Gender
                if(_.has(data, 'gender') && !(_.isNil(data.gender)) ){
                    $('.information .gender').text(data.gender.charAt(0).toUpperCase()+data.gender.slice(1));
                }
                 else{
                      $('.information .gender').append('<p>Not Shared</p>');
                 }
                  //Languages
                if(_.has(data, 'languages')){
                  
                   var arr=[];
                    $.each( data.languages, function( key, value ) {
                        arr.push(value.name.charAt(0).toUpperCase()+value.name.slice(1));
                     
                    
                 });
                    var lang=arr.join(',');
                    
                     $('.information .lang').text(lang);

                }
                else{
                      $('.information .lang').append('<p>Not Shared</p>');
                 }

                 
                  //My Cover Photo
               
                if(_.has(data, 'cover') && !(_.isNil(data.cover)) ){
                    $('.myjumbotron').css('background-image', 'url(' + data.cover.source + ')');
                }

                if(_.has(data, 'picture') && !(_.isNil(data.picture)) ){                  //My Profile Photo
                    $('.profile').attr('src', data.picture.data.url);
                }
                if(_.has(data, 'name') && !(_.isNil(data.name)) ){
                    $('.name strong').text(data.name.charAt(0).toUpperCase()+data.name.slice(1));    //My Name
                }
                 if(_.has(data, 'work')){
                     $.each( data.work[0], function( key, value ) {                  //My Work
                        if(_.has(value, 'name') && !(_.isNil(value.name)) ){
                            $('.work-education .work').append('<p>'+value.name.charAt(0).toUpperCase()+value.name.slice(1)+'</p>');

                        }
                       
                     });

                 }
                 else{
                  $('.work-education .work').append('<p>Not Shared</p>');
                }

                 if(_.has(data, 'education')){             //My Education
                   
                     $.each( data.education[0], function( key, value ) {
                        if(_.has(value, 'name') && !(_.isNil(value.name)) ){
                           
                            $('.work-education .education').append('<p>'+value.name.charAt(0).toUpperCase()+value.name.slice(1)+'</p>');

                        }
                       
                        if(key=='type' && !(_.isNil(key)) ){
                            $('.work-education .education').append('<p>'+value.charAt(0).toUpperCase()+value.slice(1)+'</p>');

                        }
                       
                     });

                 }
                  else{
                  $('.work-education .education').append('<p>Not Shared</p>');
                }
                if(_.has(data, 'location')){            //My Location
                    $('.place .city').text(data.location.name.charAt(0).toUpperCase()+data.location.name.slice(1));
                }
                else{
                  $('.place .city').append('<p>Not Shared</p>');
                }

                if(_.has(data, 'hometown')){              //My Hometown
                    $('.place .home').text(data.hometown.name.charAt(0).toUpperCase()+data.hometown.name.slice(1));
                        

                    }
                else{
                  $('.place .home').append('<p>Not Shared</p>');
                }

                if(_.has(data, 'relationship_status') && !(_.isNil(data.relationship_status)) ){           //My Relationsship status
                    $('.relation .status').append('<p>'+data.relationship_status.charAt(0).toUpperCase()+data.relationship_status.slice(1)+'</p>');
                }
                 else{
                  $('.relation .status').append('<p>Not Shared</p>');
                }
                 if(_.has(data, 'about') && !(_.isNil(data.about)) ){          //About me
                   console.log(data.about);
                    $('.detail .about-me').append('<p>'+data.about.charAt(0).toUpperCase()+data.about.slice(1)+'</p>');
                }
                else{
                   $('.detail .about-me').append('<p>Not Shared</p>');
                }
                 if(_.has(data, 'quotes') && !(_.isNil(data.quotes)) ){
                    $('.detail .quote').append('<p>'+data.quotes.charAt(0).toUpperCase()+data.quotes.slice(1)+'</p>');
                }
                
                else{
                  $('.detail .quote').append('<p>Not Shared</p>');
                }

                if(_.has(data, 'movies')){                 //My Movies
                  
                    $.each( data.movies.data, function( key, value ) {
                       $('.add-columns').append('<div class="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-1  col-lg-2 text-center thumbnail list-column" id="heading2"><strong>'+value.name+'</strong></div>');
                  
                 });
               
                }
                else{
                  $('.add-columns').append('<p class="text-center">Not shared</p>')
                }

                if(_.has(data, 'music')){                    //My MUSIC
                    
                    $.each( data.music.data, function( key, value ) {
                       $('.add-columns-music').append('<div class="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-2 text-center thumbnail list-column" id="heading2"><strong>'+value.name+'</strong></div>');
                     
                    
                 });
               
                }
                else{
                  $('.add-columns-music').append('<p class="text-center">Not shared</p>')
                }

                if(_.has(data, 'television')){                     //My TELEVISION
                  
                    $.each( data.television.data, function( key, value ) {
                       $('.add-columns-tele').append('<div class="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-2 text-center thumbnail list-column" id="heading2"><strong>'+value.name+'</strong></div>');
                     
                    
                 });
               
                }
                else{
                  $('.add-columns-tele').append('<p class="text-center">Not shared</p>')
                }
                
                
           },

          error : function(request,errorMessage){
               var responseText = jQuery.parseJSON(request.responseText);
               swal({
                  title:"status " +request.status ,
                  text: responseText.error.message,
                  type: 'error',
                   confirmButtonText: 'Ok'
                  });
                            
              },

          timeout:3000, // in ms
          beforeSend : function(){
                $('.fa-pulse').show();
              

              },

          complete : function(){
               $('.fa-pulse').hide();
             

              }

        });

}

$('.dropdown').hover(function() {
    
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

});