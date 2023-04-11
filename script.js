// Declaring variables //
    var username = "pyariKanxu@gmail.com";
    var password = "I love you kanxu";
    var in_user_name = document.getElementById("exampleInputEmail1");
    var in_password = document.getElementById("exampleInputPassword1");
    var stored_item = localStorage.getItem("login");
    var login_div = document.getElementById("login_id");


    // checking wether user have login or no if not displaying login pop_up
    if(stored_item == "False"){
        login_pop_up();
    }else if(stored_item == "True"){
        // alert("Thank's for login our wesite");
    }else{
        login_pop_up();
    }

    // This function display login popup form
    function login_pop_up(){
        login_div.classList.remove("invisible");
        login_div.classList.add("visible");
    }

    // This function checks wether username and password is correct or not
    function login(){
        if(in_user_name.value == username && in_password.value == password){
            login_div.classList.add("invisible");
            login_div.classList.remove("visible");
            localStorage.setItem("login","True");
        }else{
            if(in_user_name.value != username){
                alert("Please Enter Valid User Name");
            }else if(in_password.value != password){
                alert("Please Enter Correct Password");
            };
        };
    }

    // This clears the local storage if user wants to log out //
    function logout(){
        var conformation = confirm("Are you sure, you want to log out ?");
        if(conformation == true){
            login_div.classList.remove("invisible");
            login_div.classList.add("visible");
            localStorage.clear();
        };
    }
