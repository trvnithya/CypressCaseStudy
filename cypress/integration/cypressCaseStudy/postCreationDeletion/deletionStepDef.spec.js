/// <reference types='cypress' />
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import DeletionPage from './deletion'
Given('User is on Login Page', () => {
    DeletionPage.visitURL();
})
And('User Enter Login Credentials', () => {
    cy.fixture('user').then( (user)=>{
        const strUser = user.username
        const strPwd = user.password
        cy.user(strUser,strPwd)
    })
})
And('User is on Home Page After Post Creation', () => {
    DeletionPage.postDeletion();
})
When('User Deletes {string}', (posttitle1) => {
    DeletionPage.postDeletionEntry(posttitle1);
})
Then('Created Post Should be Deleted', () => {
    DeletionPage.postDeletionVerification();
})