console.log("Hello!!");



// Jquery => IT's a js library which provides effective method for doing something in frontend and gives essential features like DOM Maniculation, AJAX interqactoins etc.

// $("Button").click(function(){
//     // $("p").hide();
//     $("p").toggle();
// });

// $("Button").click(function(){
//     $("#heading").toggle();
//     $(this).hide();         // hide the button 
// });

// AJAX => Asynchronous Javascript and XML Files
// It allows us to move servere calls and  display dat a without reloading the page.
// It allows us to communication with the remote web servers in an asynchronus  way with API calls, we can request data from servers dynamically.
// In AJAX calls we do not use ./# for accessing the class and idss respectively
//  we simply need to acces by writing the name of the ids and class name.

$("button").click(function(){
    $.ajax({
        // url: https:"www.jagranjosh.com/general-knowledge/optical-illusion-reveals-a-lot-about-how-you-love-1650261415-1"
        url:"https://jsonplaceholder.typicode.com/posts/2",
        type : "GET",
        success : function(data){
            console.log(data);
            document.getElementsByTagName("p")[0].innerText = data.title;
            // document.getElementsByTagName("p")[1].innerText = data.body;

        }
    })
})

