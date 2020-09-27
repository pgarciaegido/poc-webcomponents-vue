```js script
import { html } from '@open-wc/demoing-storybook';
import '../likvido-input.js';

export default {
  title: 'LikvidoInput',
  component: 'likvido-input',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# LikvidoInput

Likvido input

## How to use

### Installation

```bash
yarn add likvido-input
```

```js
import 'likvido-input/likvido-input.js';
```

```js preview-story
export const Simple = () => html` <likvido-input></likvido-input> `;
```

## Variations

###### Label

```js preview-story
export const Label = () =>
  html` <likvido-input><label slot="label">Hello!</label></likvido-input> `;
```

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <likvido-input title="Hello World"></likvido-input>
`;
```
