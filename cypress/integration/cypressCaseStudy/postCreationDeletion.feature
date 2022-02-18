Feature: Post Creation And Deletion
Scenario: Create Post
Given User is on Login Page
And User Enter Login Credentials
And User is on Home Page
When User enter "Post Creation7", "Post Creation via Automation" and "Post Creation from Cypress Automation"
Then New Post Should be Created

Scenario: Delete Post
Given User is on Login Page
And User Enter Login Credentials
And User is on Home Page After Post Creation
When User Deletes "Post Creation7"
Then Created Post Should be Deleted