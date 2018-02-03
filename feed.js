$(document).ready(function(){
     //my facbook access token
 var myFbToken="EAACEdEose0cBAG0qZBsHWAQdSZBs2LUC70UVC4Rbp5Hgp3ttZA8wFmRpwAj9jjyKs5roFKH1SHXjDaugZBCkDx3pK5NAdJZCOXIMIzfSmToXTYnue33ZBkZAA2S7fnM5R5dMbz10G29IVDQ5yePOrTCCNorpNfqXJpfyF2uIuZBDHRc7wuShFGFKQmVz2NuRZCLAZD";
 getfeed();
 function getfeed(){
 	      
           $.ajax({
           type:"GET",
           url:"https://graph.facebook.com/me?fields=name,picture.type(large),posts{created_time,type,full_picture,story,message,source}&access_token="+myFbToken,

           success:function(data){
           	//Posts
           	  if(_.has(data, 'posts')){

           	  	  $.each( data.posts.data, function( key, value ) {
                      $('.posts').append('<div class="col-lg-11 col-lg-offset-1 col-md-10 col-sm-10 col-xs-10 thumbnail post-info">'+
                      	'<span class="feed-head"><img src="#" class="my-profile  img-circle">&nbsp&nbsp'+
                      	value.story+'</span><br/>'+
                      	'<br/><img src='+value.full_picture+' class="img-responsive pull-left" style="width:300px;height:300px">'+
                      	'</div>');
                      

           	  	  });
                 



           	  }
           	  //Profile picture
           	   if(_.has(data, 'picture') && !(_.isNil(data.picture)) ){
                    $('.feed-profile').attr('src', data.picture.data.url);
                    $('.my-profile').attr('src', data.picture.data.url);

                }
                 //Profile Name
                 if(_.has(data, 'name') && !(_.isNil(data.name)) ){
                    $('.name strong').text(data.name.charAt(0).toUpperCase()+data.name.slice(1));
                }
              console.log(data);
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














});