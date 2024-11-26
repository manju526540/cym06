class loginpage{
    orangrHrmlogo(){
        return 'img[alt="company-branding"]'
    }

    userNameInput(){
        return 'input[name="username"]'
        }

    passWordInput(){
        return 'input[name="password"]'
    }
    
    credsInput(fields){
        return 'input[name="'+fields+'"]'
    }

    logInBtn(){
        return 'button[type="submit"]'
    }

    loginErorMessage = "Invalid credentials"
}

 const  login = new loginpage()

 export default login

// loginwithcreds(username,password){
//     cy.get(this.userNameInput()).type(username)
//     cy.get(this.passWordInput()).type(password)
//     cy.get(this.logInBtn()).click()
 


