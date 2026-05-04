# Lab 5 - Starter

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

**Members**: Andre Lew

## Useful Links

- **Expose**: https://aelew.github.io/Lab5_Starter/expose.html
- **Explore**: https://aelew.github.io/Lab5_Starter/explore.html

## Check Your Understanding

1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not? For this question, assume the "message" feature allows a user to write and send a message to another user.

No, because the "message" feature is a complex feature that involves multiple components and interactions (composing, network logic, rendering, etc.) working together. It's not a single function that can be tested in isolation.

2. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not? For this question, assume the "max message length" feature prevents the user from typing more than 80 characters.

Yes, because the "max message length" feature is a simple feature that can be tested in isolation. It's a single function that can be tested without involving other components and interactions. For example, we can specifically test the function that checks if the length of a message is 80 characters or less.
