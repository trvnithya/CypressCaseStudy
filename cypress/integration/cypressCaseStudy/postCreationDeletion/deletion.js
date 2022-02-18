const URL = 'https://react-redux.realworld.io/#/login'
const GLOBALFEED_TAB = 'ul.outline-active li:nth-child(2)'
class DeletionPage{
    static visitURL(){
        cy.visit(URL)
    }
    static postDeletion(){
        //cy.contains('trvnithya')
        cy.get(GLOBALFEED_TAB).click()
        cy.get('#main > div > div > div > div > div.col-md-9 > div:nth-child(2) > div:nth-child(1) > a > h1').click()
    }
    static postDeletionEntry(){
            cy.get('.ion-trash-a').click()
    }
    static postDeletionVerification(){
        cy.contains('Your Feed')
}
}
export default DeletionPage