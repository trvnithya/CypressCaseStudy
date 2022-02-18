const URL = 'https://react-redux.realworld.io/#/login'
const NEWPOST_BTN = '[href="#editor"]'
const TITLE_INPUT = '[placeholder="Article Title"]'
const ABOUT_INPUT = "#main > div > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input"
const WRITE_INPUT = '[placeholder="Write your article (in markdown)"]'
const PUBLISHARTICLE_BTN = '[type="button"]'
class CreationPage{
    static visitURL(){
        cy.visit(URL)
    }
    static postCreation(){
        cy.contains('trvnithya')
        cy.get(NEWPOST_BTN).click()
        cy.url().should('include','editor')
    }
    static postCreationEntry(title, about, write){
            cy.get(TITLE_INPUT).type(title)
            cy.get(ABOUT_INPUT).type(about)
            cy.get(WRITE_INPUT).type(write)
            cy.get(PUBLISHARTICLE_BTN).click()
    }
    static postCreationVerification(){
        cy.contains('Cypress')
}
}
export default CreationPage