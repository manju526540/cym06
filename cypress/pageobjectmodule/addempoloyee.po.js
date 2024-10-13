class addemoployeePage{
    addemployeeMenu(){
        return 'Add Employee'
    }

    FirstnameInput(){
        return "input[name='firstName']"
    }

    LastnameInput(){
        return "input[name='lastName']"
    }

    SubmitBtn(){
        return "button[type='submit']"
    }

    SavedMessage = "Successfully Saved"

    DeleteMessage = "Successfully Deleted"

    employeesFirstnameNdLastname(firstname,lastname){

        cy.get(this.FirstnameInput()).type(firstname)
        cy.get(this.LastnameInput()).type(lastname)
        cy.get(this.SubmitBtn()).click()
        cy.contains(this.SavedMessage).should("be.visible")
    }
}



const addemployee = new addemoployeePage()
export default addemployee