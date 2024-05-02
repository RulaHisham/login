
const logInButton = document.querySelector('.login .sub');

// Select the main element
const mainElement = document.querySelector('main');

// Add event listener to the Log In button
logInButton.addEventListener('click', function() {
  // Toggle the 'log-in-mode' class on the main element
  mainElement.classList.toggle('log-in-mode');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const email=document.querySelector("#email");
  const password=document.querySelector("#password");

  function login(event){
    event.preventDefault();
    let emailval=email.value.trim().toLowerCase();
    let passval=password.value;
  
    const reg=/^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
     let regTest=reg.test(emailval);
     if(regTest==false){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email is invalid!",
            timer:5000,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
     }

     if(passval && passval.length > 6 && regTest==true){
      console.log("success");


     }else{
       alert("password is empty")
     }

    



  }
