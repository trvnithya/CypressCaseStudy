/// <reference types='cypress' />
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CreationPage from './creation'
Given('User is on Login Page', () => {
    CreationPage.visitURL();
})
And('User Enter Login Credentials', () => {
    cy.fixture('user').then( (user)=>{
        const strUser = user.username
        const strPwd = user.password
        cy.user(strUser,strPwd)
    })
})
And('User is on Home Page', () => {
    CreationPage.postCreation()
})
When('User enter {string}, {string} and {string}', (posttitle, postabout, postwrite) => {
    CreationPage.postCreationEntry(posttitle, postabout, postwrite)
})
Then('New Post Should be Created', () => {
    CreationPage.postCreationVerification()
})