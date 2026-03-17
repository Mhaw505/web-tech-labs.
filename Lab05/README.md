# Lab 05 & 06 - CSS Layout Techniques & Responsive Design

**Course:** CS 224L Web Technologies
**Instructor:** Mr. Mohammad
**Department:** Computer Science, UET Peshawar

---

## Student Information

**Name:** Maha Naveed
**Roll No:** 24PWBCS1184
**Date:** 17/03/2026

---

## What I Built

This lab was about learning different ways to create layouts in CSS. I made a bunch of HTML pages showing how display properties, floats, positioning, flexbox, grid and media queries all work.

---

## File Structure

lab05-layouts/
├── index.html
├── README.md
├── styles/
│   ├── base.css
│   ├── display.css
│   ├── float.css
│   ├── position.css
│   ├── flexbox.css
│   ├── grid.css
│   ├── media-queries.css
│   ├── responsive.css
│   └── utilities.css
├── layouts/
│   ├── magazine-float.html
│   ├── holy-grail-comparison.html
│   ├── dashboard-grid.html
│   ├── portfolio-mixed.html
│   └── responsive-demo.html
└── exercises/
    ├── display-exercises.html
    ├── float-exercises.html
    ├── position-exercises.html
    ├── flexbox-exercises.html
    ├── grid-exercises.html
    └── media-query-exercises.html

---

## Tasks

**Task 1 - Display Properties**
Made a page showing the difference between block, inline and inline-block. Also tested display:none vs visibility:hidden which was interesting because none removes the space but hidden doesnt.

**Task 2 - Magazine Layout**
Built a magazine style page using floats. Had to use clearfix a lot to stop the layout from collapsing. Made it responsive so the columns stack on mobile.

**Task 3 - Positioning**
This one was tricky at first. Made a fixed header, a modal popup, sticky sidebar and tooltips. Z-index was confusing at first but made sense after testing it.

**Task 4 - Flexbox Navigation**
Made a navbar that turns into a hamburger menu on mobile. Also made a vertical sidebar nav and showed different justify-content values like center, space-between etc.

**Task 5 - Card Layout**
Used flexbox to make cards that are all the same height even when the content inside is different. The footer of each card stays at the bottom which looks clean.

**Task 6 - Photo Gallery**
CSS Grid was really useful here. Made a masonry style gallery with some big featured images and smaller ones. Added hover effects with an overlay showing the photo title.

**Task 7 - Holy Grail Layout**
Built the same layout 3 different ways using floats, flexbox and grid. Grid was definitely the easiest and cleanest way to do it.

**Task 8 - Ecommerce Grid**
Made a shop page with a filter sidebar and product cards. On mobile the sidebar hides and the grid goes from 4 columns down to 1.

**Task 9 - Admin Dashboard**
Combined grid and flexbox together. Used grid for the overall page structure and flexbox inside the components. The sidebar collapses on mobile with a toggle button.

**Task 10 - Media Queries**
Made a demo page that shows what breakpoint youre on in the corner. Tested layout changes, font scaling, show/hide at different sizes, dark mode and print styles.

---

## Breakpoints Used

| Name | Width | For |
|------|-------|-----|
| Mobile | 0px | Phones |
| Tablet | 768px | Tablets |
| Small Desktop | 1024px | Laptops |
| Desktop | 1200px | Desktops |
| Large | 1400px | Wide screens |

---

## What I Learned

Flexbox and Grid are much easier than floats for making layouts. Media queries are not that hard once you understand mobile first. The hardest parts were z-index and understanding when to use flexbox vs grid.