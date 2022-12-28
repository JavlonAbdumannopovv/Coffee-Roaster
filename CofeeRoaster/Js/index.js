for(let i = 0; i<5;i++){
  // Plan primary body show or hide
    document.querySelectorAll(".plan_primary_head")[i].addEventListener("click",function(){
      document.querySelectorAll(".plan_primary_body")[i].classList.toggle("none");
      document.querySelectorAll(".plan_primary_head img")[i].classList.toggle("rotate");
      document.querySelectorAll(".plan_sidebar_title")[i].classList.toggle("non-active");
    });

    

// Sidebar active or non active
    document.querySelectorAll(".plan_sidebar_title")[i].addEventListener("click",function(){
      document.querySelectorAll(".plan_sidebar_title")[i].classList.toggle("non-active");
      document.querySelectorAll(".plan_primary_body")[i].classList.toggle("none");
    });
      
}


