# Login Form

## Introduction
In this Exercice, you will create a simple login web page and handle the submit and reset events.

## Steps

Follow these steps one by one to get the final result needed

### Create your elements

* After `forking` and `cloning` the repo, move to the current directory called `zero`.
* In this directory, create a new file called `index.html` where we will create the elements of our webpage
* Change the title of the webpage to `Login`
* Change the favicon of the page to the image named `logo.jpg` that can be found under `/images` directory *(Think of img `src` attribute)*
* Create an image element inside your `body` that will output the image named `header.png` found under `/images` directory
* Create a header `h2`: **Welcome to SMU**
* Create a `form` with 2 `inputs` (and 2 labels) and a `submit` button:
    * Email: text input for emails
    * Password: hidden text input for passwords
    * Submit: submit input with the value of `submit`

### Style your elements

* Create a css file called `styles.css` under a new directory called `css`
* import the css file in your html `head`
* Change the `font-family` of all the elements
* Change the `background-color`, the `font-weight`, and `border` of the button
* Make an animation on the button on `hover` to change the color and background color
* Add a line break between the 2 inputs

### Add Event Listeners with JavaScript

* Create a new file called `index.js` under a new directory called `js`
* Add an `onSubmit` event listener to the form that will:
    * `alert` **Welcome** if email = "smu@smu.tn" and password = "123456"
    * `alert` **Wrong Email** if email != "smu@smu.tn"
    * `alert` **Wrong Password** id password != "123456"
* Add an `click` listener to the **Login** header that will toggle (hide/show) the form. *(Think of `display` css attribute)*
