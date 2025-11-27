# Frontend Mentor - Newsletter sign-up form with success message solution

![Design preview for the Newsletter sign-up form with success message coding challenge](./preview.jpg)

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/desktop.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/newsletter-sign-up-MTVOrGqwEk)
- [Live Site URL](https://frontend-mentor-challenges-odi4.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

**Email validation using JavaScript**

You learned how to validate an email with a regex pattern and show error UI feedback:

```
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(emailValue)) {
    emailInput.style.border = "2px solid red";
    errorText.style.opacity = 1;
}

```
Dynamic content update using localStorage

The subscribed email is saved and displayed on the success page:

```
localStorage.setItem("subscribedEmail", emailValue);
```

And retrieved later:

```
emailSpan.textContent = savedEmail;

```

## Author
- [Linkedin](www.linkedin.com/in/abiramisri)
- [Frontend Mentor - @Abiramisri](https://www.frontendmentor.io/profile/Abiramisri2k)
- [Github](https://github.com/Abiramisri2k)

## Acknowledgments

Thanks to Frontend Mentor for providing the challenge and community ideas that helped improve the layout and responsiveness.