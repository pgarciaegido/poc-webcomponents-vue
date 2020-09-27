# UI Components Library. Vue and jQuery POC.

In this POC I will try to explain the approach I beleive will be the most appropiate for the current scenario at Likvido regarding the frontend.

## Description

My approach would consist in using native web components (with [Lit Element](https://lit-element.polymer-project.org/) and [open-wc cli](https://github.com/open-wc/open-wc)) and [Lion](https://github.com/ing-bank/lion).

## Why Web Components

- They work great in both Vanilla/Jquery and Vue (and really anywhere) scenarios. That brings us:

  - No need to build them twice
  - Easier maintainability
  - Better DX

- They are NATIVE in the browser and already supported for all the major browsers. That brings us:
  - Long term solution. If at any time we would like to migrate from Vue to any other framework/library, our UI Library will stay relevant.

## Why Lit Element

- Personally I am not a big fan of working with classes in JS, but [Hybrids](https://github.com/hybridsjs/hybrids) (library to create web components in a more functional way) does not allow extending. For our purpose, Lit Element will work just fine.

- It is a library well maintained and widely used.

## Why Open WC CLI

- Gives you an scafolding with testing, linting and documentation (using Storybook) wich will be useful for both us developers and for the product designers.

## Why Lion

- Most of the tedious parts of building a UI library are already covered. Just extend the component, give them our styling and play.
- Great support from the ING Team. When I worked with Lion in the past, I joined their slack group and the guys were incredibily helpful and open minded.

## Other cool parts

A really intersting thing about this approach is how easy is to tokenize the solution. And example is already provided in this repo:

In `src/index.html` line 10 we can see how we attach a custom css variable with our font family.
In `components/likvido-input/src/LikvidoInput.js` we can see in line 14 that the style of the font family is taken from the document that requires it.

This means that our library will be SUPER flexible and eventually, our css variables (tokens) could be attached dynamically from the outside and maybe modified by the design team without the need of modifying a single line of code.

## Known Caveats

The only thing that is not ideal, is that Vue does not handle v-model as expected in custom elements, and the binding would have to be manual. [More info about this here](https://github.com/vuejs/vue/issues/7830).

The solution workaround is really not that painful. We can see how its done in `src/App.vue`.

## Setting up the project

Basically, just install the dependencies with `yarn install` and run the development server with `yarn serve`.

There you will see two inputs. The top one is rendered and handled with vanilla JS, and the second is render in Vue, proving that these components work gracefully in both scenarios.

---

Any feedback regarding this approach will be super appreciated! :)

Thanks!
