$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('.text-danger').css('display','none')    
});
    function checkUsername(){
        var username = $('#userName').val();
        var flag = false;
        if(username === ""){
            flag = true;
        }
        if(flag){
            $('#usernameError').css('display','block')
        }else{
            $('#usernameError').css('display','none')
        }
    }
    function checkUserEmail(mode){
        if(mode=="signup")
        {var usermail = $('#userEmail').val();
        var flag = false;
        if(usermail === ""){
            flag = true;
        }
        if(flag){
            $('#userEmailError').css('display','block')
        }else{
            $('#userEmailError').css('display','none')
        }
    }
        else{
            var usermail = $('#loginEmail').val();
            var flag = false;
            if(usermail === ""){
                flag = true;
            }
            if(flag){
                $('#loginEmailError').css('display','block')
            }else{
                $('#loginEmailError').css('display','none')
            }
           
        }
        
    }
    function checkUserPassword(mode){
        if(mode=="signup")
        {var userpassword = $('#userPassword').val();
        var flag = false;
        if(userpassword === ""){
            flag = true;
        }
        if(flag){
            $('#userPasswordError').css('display','block')
        }else{
            $('#userPasswordError').css('display','none')
        }
    }
        else{
            var loginpassword = $('#loginPassword').val();
            var flag = false;
            if(loginpassword === ""){
                flag = true;
            }
            if(flag){
                $('#loginPasswordError').css('display','block')
            }else{
                $('#loginPasswordError').css('display','none')
            }
           
        }
    }
    function signUp(){
        var userName = $('#userName').val();
        var userEmail = $('#userEmail').val();
        var userPassword = $('#userPassword').val();
        if(!userName){
            return checkUsername();}
        else if(!userEmail){
             return checkUserEmail("signup");
        }else if(!userPassword){
          return checkUserPassword("signup");
         }else{
            firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
                var user = firebase.auth().currentUser;
                var uid;
                if (user != null) {
                    uid = user.uid;
                }
                var firebaseRef = firebase.database().ref();
                var userData = {
                    userName: userName,
                    userEmail: userEmail,
                   
                }
                firebaseRef.child(uid).set(userData);
                swal('Registered successfully',
                ).then((value) => {
                    setTimeout(function(){
                        window.location.replace("../login.html");
                    }, 1000)
                });
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                swal({
                    type: 'error',
                    title: 'Error',
                    text: errorMessage,
                })
            });
        }
    }
    function signIn(){
        var loginEmail = $('#loginEmail').val();
        var loginPassword = $('#loginPassword').val();
     if(!loginEmail){
            return checkUserEmail("signIn");
         }else if(!loginPassword){
            return checkUserPassword("signIn");
         }else{
            firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).then((success) => {
                console.log("Logged In")
                swal({
                    type: 'success',
                    title: 'Succesfully signed in', 
                }).then((value) => {
                    setTimeout(function(){
                      
                    }, 1000)
                });
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                swal({
                    type: 'error',
                    title: 'Error',
                    text: errorMessage,
                })
            });
        }
  }