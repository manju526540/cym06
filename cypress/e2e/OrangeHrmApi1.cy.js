describe('Api requers test cases', () => {
    it('GET requers', () => {
      cy.request({
        method:"GET",
        url:"https://reqres.in/api/users?page=2",
      }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property("page", 2)
        expect(response.body).to.have.property("per_page", 6)
        expect(response.body).to .have.property("total",12)
        expect(response.body).to.have.property("total_pages", 2)
        expect(response.body.data[0].id).to.equal(7)
        expect(response.body.data[0].first_name).to.equal("Michael")
        expect(response.body.data[0].last_name).to.equal('Lawson')
      })  
    })
  it("POST^ request test cases",()=>{
    cy.request({
      method:"POST",
      url:"https://reqres.in/api/users",
      body:{
        "name": "manjunatha",
        "job": "generalist"
      },
    }).then((response)=>{
      expect(response.status).to.equal(201)
      expect(response.body.name).to.equal("manjunatha")
      expect(response.body.job).to.equal("generalist")
      var idvalue = JSON.stringify(response.body.id)
      var Y = JSON.stringify(response.body.createdAt)

      cy.log(idvalue)
      cy.log(Y)
      cy.writeFile("cypress/fixtures/requersvalue.json",{"id": idvalue})
     
      })
      
    })
  })  
  