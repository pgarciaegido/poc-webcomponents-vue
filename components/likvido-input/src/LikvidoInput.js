import { css } from 'lit-element';
import { LionInput } from '@lion/input';

export class LikvidoInput extends LionInput {
    static get styles() {
        return [
            css `
        :host {
        }
        ::slotted([slot='input']) {
          border: 1px solid red;
        }
        ::slotted([slot='label']) {
          font-family: var(--likvido-font-family);
          font-size: 14px;
        }
      `,
        ];
    }
}