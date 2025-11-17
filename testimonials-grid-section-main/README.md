# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Experience a responsive grid layout built with modern CSS techniques

### Screenshot

#### Desktop
![](./images/Desktop%20view.png)

#### Mobile view
![](./images/Mobile%20view.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/testimonial-grid-oRXc0sr7-1)
- [Live Site URL](https://steady-biscuit-4810cf.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Clamp() for responsive text and card sizing

### What I learned

During this project, I learned:

How to use CSS Grid effectively to create a clean and balanced card layout
How to use the clamp() function to make text and elements responsive without media queries
How to optimize CSS by merging repeated selectors and removing unnecessary code

Here’s an example of how I used clamp() to make typography responsive:

```
h3 {
  font-size: clamp(1.4rem, 1vw + 0.9rem, 1.4rem);
}

```

### Continued development

In the future, I’d like to:

Add animations or transitions to make hover effects smoother
Experiment with CSS custom properties (variables) for theme management
Implement dark/light mode toggling for better UX

### Useful resources

- [MDN Web Docs – CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout) - helped me structure the layout properly.
- [Frontend Mentor – Testimonials-grid-section Challenge](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7) - original challenge source.
- [CSS Tricks – Flexbox & Grid Guides](https://css-tricks.com/snippets/css/complete-guide-grid/) - for better understanding layout behaviors.

## Author

- Linkedin - [Linkedin](www.linkedin.com/in/abiramisri)
- Frontend Mentor - [@Abiramisri](https://www.frontendmentor.io/profile/Abiramisri2k)
- Github - [@Abiramisri](https://github.com/Abiramisri2k)

## Acknowledgments

Special thanks to Frontend Mentor for the challenge and to the developer community for sharing helpful tips and ideas that improved this project.