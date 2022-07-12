describe('Testing page', () => {
  it('User login succsesfuly', () => {
    cy.viewport(1280,720)
    cy.visit('https://the-internet.herokuapp.com/login')
     
    cy.get('#username').should('exist')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.contains(' Login').click()
    cy.contains('You logged into a secure area!').should('exist')
    cy.contains(' Logout').click()
    cy.contains('You logged out of the secure area!').should('exist')
  })

  it('Wrong user and good password',()=>{
    cy.viewport(1280,720)
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith1')
    cy.get('#password').type('SuperSecretPassword!')
    cy.contains(' Login').click()
    cy.contains('Your username is invalid!').should('exist')

  })

  it('Doom challenging',()=>{
    cy.viewport(1280,720)
    cy.visit('https://the-internet.herokuapp.com/challenging_dom')
    cy.contains('Iuvaret5').should('have.text','Iuvaret5')
    cy.contains('Apeirian5').should('have.text','Apeirian5')
    cy.contains('Adipisci5').should('have.text','Adipisci5')
    cy.contains('Definiebas5').should('have.text','Definiebas5')
    cy.contains('Consequuntur5').should('have.text','Consequuntur5')
    cy.contains('Phaedrum5').should('have.text','Phaedrum5')
  })

  it('Check checkbox',()=>{
    cy.viewport(1280,720)
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
    cy.get('#checkboxes > input[type=checkbox]:nth-child(1)').check().should('be.checked')
    cy.get('#checkboxes > input[type=checkbox]:nth-child(3)').uncheck().should('not.be.checked')
  })

 it('Drag and Drop',()=>{
    const dataTransfer = new DataTransfer
    cy.viewport(1280,720)
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    cy.get('#column-a').trigger('dragstart',{
        dataTransfer
    });
    cy.get('#column-b').trigger('drop',{
        dataTransfer
    })
})

    it('Iframe',()=>{
    cy.viewport(1280,720)
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.get('.tox-mbtn__select-label').first().click()
    cy.contains('New document').click()
    cy.getIframe('#mce_0_ifr').should('not.have.text')
    cy.getIframe('#mce_0_ifr').clear().type('iFrame Test') 
    cy.get('.tox-mbtn__select-label').last().click()
    cy.contains('Blocks').click()
    cy.contains('Heading 3').click()
    cy.get('.tox-statusbar__path-item').should('have.text','h3')
    cy.getIframe('#mce_0_ifr').clear()
    cy.getIframe('#mce_0_ifr').type('{enter}')
    cy.getIframe('#mce_0_ifr').type('Paragraph text')
    cy.getIframe('#mce_0_ifr').type('{shift}'+'{leftArrow}')
    cy.get('.tox-mbtn__select-label').last().click()
    cy.contains('Bold').click()
    cy.get('.tox-statusbar__path-item').should('have.text','pstrong')
    cy.getIframe('#mce_0_ifr').clear()
    cy.getIframe('#mce_0_ifr').type('Paragraph text')
    cy.getIframe('#mce_0_ifr').type('{control}'+'{a}')
    cy.get('.tox-mbtn__select-label').last().click()
    cy.contains('Align').click()
    cy.contains('Center').click()
    cy.getIframe('#mce_0_ifr').find('p').invoke('attr', 'style').should('eq', 'text-align: center;')
    cy.getIframe('#mce_0_ifr').type('{control}'+'{a}')
    cy.get('.tox-mbtn__select-label').last().click()
    cy.contains('Text color').click()
    cy.get('[title="Red"]').click()
    cy.getIframe('#mce_0_ifr').find('span').invoke('attr', 'data-mce-style').should('eq', 'color: #e03e2d;')
    })

    })