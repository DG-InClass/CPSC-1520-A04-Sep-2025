# Agenda (A04)

> These are my notes on what I plan to teach in each [**upcoming class**](#sep-08).
>
> ###### *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)


> ## Starter Kits
>
> To grab a starting point for any in-class demos or practices, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte). It will allow you to grab a copy of the starter kit folder to put into your student workbook.
> 
> You will need to have `pnpm` installed and working on your computer. Run the following code in the terminal from the **root** of your repository:
>
> ```bash
> pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `pnpm tlx tiged` command after it has finished downloading the demo folder.*


----

## Sep-Dec 2025 Schedule

### Sep 02

- Course Introduction
- GitHub Account Setup
- Software Setup
- Workbook Setup
- **Homework:**
  - Ensure you have completed the [**system setup**](https://dgilleland.github.io/CPSC-1520/tutorials/0010/) so that you have the software etc. that you need for this course.

### Sep 05

- Workbook Setup
  - Troubleshoot Access
    - 🚨 Contact me via MS Teams if you have any trouble accessing/using your workbook!
  - [000](./src/000/ReadMe.md)
- **Homework:**
  - Complete the [Practice Version Control](https://dgilleland.github.io/CPSC-1520/tutorials/0011/) tutorial; be sure to publish it as a **public** repository on your **personal** GitHub account.
  - Send me the the link to the repository via MS Teams.


### Sep 08

- **Today's Class**
  - [x] Course Intro [Notes](./src/000/ReadMe.md) and [LOGs](./src/000/LOGs.md)
  - [x] Discuss [key aspects](./src/001-StartHere/LOGs.md) of using git and Markdown
  - [ ] Add the first starter kit to your Student Workbook

    ```ps
    pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
    ```

  - [ ] [Explore JavaScript in the Browser](./src/003/ReadMe.md) (grab the starter kit first)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A04-Sep-2025/sk/003 ./src/003
    ```

- **Homework**
  - [ ] Double check that you have [everything ready](./src/001-StartHere/ReadMe.md) to proceed with our in-class lessons.
  - [ ] Practice git and Markdown on your own using the provided [**instructions**](./src/002/ReadMe.md)
  - [ ] Read and try out the instructions in the [003](./src/003/ReadMe.md) starter kit.
  - [ ] *Quiz Reminder:* [Readings for Quiz 1](https://lms.nait.ca/d2l/le/content/97642/viewContent/3998572/View)
    - *This will be your only reminder that you have readings associated with each quiz. It is **your** responsibility to keep up with the readings and complete your quizzes before the cutoff date.*


### Sep 09

<!--

- **Homework**
  - Tutorial: [Querying the DOM](https://dgilleland.github.io/CPSC-1520/tutorials/0030/)
    - Put it in your student workbook under `~/src/query-dom/`
  - Tutorial: [Using Script Tags](https://dgilleland.github.io/CPSC-1520/tutorials/0040/)
    - Put it in your student workbook under `~/src/script-tags/`
  - Bookmark and read the docs on [Semantic HTML](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/)

## Jan 15

- **Today** *(Online)*
  - [ ] Characteristics of JavaScript
    - case-sensitive
    - **not** a type-safe language
    - looks a lot like C#, but has a number of differences
    - string literals can be wrapped in double or single quotes
    - string interpolation is performed with text inside a pair of back-ticks (`` ` ``)
      - placeholders in the form of `${expression}`
      - e.g.: `` `The count is ${count}` ``
  - [ ] ***Variables***
  - [ ] The browser's dev tools provides a **console** that is a REPL (Read-Eval-Print-Loop) environment for JavaScript
  - [ ] Node also provides/is a REPL for JavaScript
  - [ ] **Demo:** Combine the main points of [003](./src/003/ReadMe.md) and [004](./src/004/ReadMe.md)
    - Find and modify DOM elements with `document.querySelector()`
    - Link a JavaScript file
    - Create and use variables
- **Homework**
  - *Reminder to keep up with Quiz readings and completing the quizzes before their cutoff date.*
  - [ ] Review the [003 LOGs](./src/003/LOGs.md) and the [004 LOGs](./src/004/LOGs.md)
  - [ ] Read the following articles:
    - [Why JavaScript?](https://dgilleland.github.io/CPSC-1520/explanations/0010/)
    - [JavaScript as a Language](https://dgilleland.github.io/CPSC-1520/explanations/0020/)

## Jan 17

- **Today**
  - [ ] Lab 1 released/due **today**

----

## Jan 21 (W03)

- **Today**
  - Notice the `LOGs.md` files under each lesson - pay attention to these
  - Fast-Track [005](./src/005/ReadMe.md)
  - Math Review
    - In JavaScript, all numbers are floating point
  - Quick review on yesterday's code: What are *keywords* and what are *not* keywords.
  - What are *functions* in JavaScript?
  - [**006**](./src/006/ReadMe.md) intro
  - [**007**](./src/007/ReadMe.md) - Creating JavaScript Functions
- **Homework**
  - [ ] Do the [**Learn by Play** portion of the `005/ReadMe.md`](./src/005/ReadMe.md#learn-by-play)
  - [ ] Review the new [Finding DOM Elements](https://dgilleland.github.io/CPSC-1520/guides/0030/) guide.
  - [ ] Review [006 LOGs](./src/006/LOGs.md)
  - [ ] Complete [practice in `007`](./src/007/ReadMe.md#practice-agreement)
  - [ ] Review [007 LOGs](./src/007/LOGs.md)
  - [ ] **Optional** - Styling Challenge (CSS only - no JavaScript)

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/005.5 ./src/005.5
    ```


## Jan 22

- [ ] Housekeeping Tasks:
  - [ ] Getting the most out of ***LOGs** (Learning Outcome Guides)*
  - [ ] Version Control: Updating Your Workbook (commit & push)
  - [ ] [Downloading Starter Kits](#starter-kits)
  - [ ] Filling the Gaps: Self-study is the only way to fill in the gaps between what you do and don't know about HTML.

![HTML Iceberg](./docs/images/html-iceberg.jpg)

- **Today** *(Online)*
  - [**008**](./src/008/ReadMe.md) - Form Input and Handling Events

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-events ./src/008/demo-events
    ```

    - Review [its LOGs](./src/008/LOGs.md)
      - Demo creating an event handler
      - Demo adding an event listener
      - Demo **mouse** events such as `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
      - Demo adding and removing CSS classes programmatically (from `.classList`)
      - Demo an anonymous handler for an event listener
- **Homework**
  - Make notes on the LOGs for this lesson
  - Research mouse events on MDN (Mozilla Develop Network)


## Jan 24

- **Today**
  - [ ] **In-Class Lab 2**
  - [ ] A *soft review* of Events and Event Handling in web pages.

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/soft-intro ./src/008/soft-intro
      ```

- **Homework**
  - *TBD*

----

## Jan 28 (W04)

  <!-- - Revisit the "soft-intro" to explore `.stopPropagation()` -- >

- **Today**
  - [x] Recap about [mouse events](./src/008/demo-events/js/main.js) + browsing events
  - [x] Start the demo-text-manipulation
    - `.trim()` (plus left/right trim), `.toUpperCase()`/`.toLowerCase()`, `.padStart()`/`.padEnd()`, `.repeat()`, `.replace()` + `.replaceAll()`, `.substr()` vs. `.substring()`

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-text-manipulation ./src/008/demo-text-manipulation
    ```

  - [ ] **`~/src/008/event-listener/`** - Class time to complete the [Event Listener tutorial](https://dgilleland.github.io/CPSC-1520/tutorials/0070/)
    - Discuss `.stopPropagation()` and `.preventDefault()`
  - [ ] **`~/src/008/dom-styling/`** - Class time to complete the [DOM Interactions tutorial](https://dgilleland.github.io/CPSC-1520/tutorials/0080/)
- **Homework**
  - [ ] Complete the remaining TODO items from the demo-text-manipulation


## Jan 29

- **Today** *(Online)*
  - [ ] For an ad-hoc exploration of strings and numbers, see the [sample code I posted today](./src/007/ad-hoc/js/main.js).
  - [ ] [Form Processing](./src/008/) Starter Kit:

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/form-processing ./src/008/form-processing
    ```


- **Homework**


## Jan 31

- **Today**
  - [ ] **In-Class Lab 3** (Functions and Events)

> ### Lab 3 Spec Notes
> 
> - **Step 2** - The first point is somewhat vague - which element (there are two)? But, from reading the rest of the steps and seeing the sample screenshot, it would seem that the element is the `divElement`
> - **Step 3** - The instructions are somewhat vague, but get a bit clearer when you look closely at the HTML. One of the parts of this step refers to the "div list group", and that appears to be the same element as the first `divElement` selected in Step 1 (though we selected it by the class '.javascript-resources' and not '.list-group' as somewhat inferred by these instructions).
> - **Step 4** - The instructions mention "the list", and that is (once again), the `divElement`. However, since it's talking about it as "the list", I will look for it by the class `'.list-group'`.

----


-->

### Sep 12


### Sep 15


### Sep 16


### Sep 19


### Sep 22


### Sep 23


### Sep 26


### Sep 29


### Oct 03


### Oct 06


### Oct 07


### Oct 10


### Oct 14


### Oct 17


### Oct 20


### Oct 21


### Oct 24


### Oct 27


### Oct 28


### Oct 31


### Nov 03


### Nov 04


### Nov 14


### Nov 17


### Nov 18


### Nov 21


### Nov 24


### Nov 25


### Nov 28


### Dec 01


### Dec 02


### Dec 05


### Dec 08


### Dec 09


### Dec 12


### Dec 15


### Dec 16

