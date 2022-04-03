import { newSpecPage } from '@stencil/core/testing';
import { MyButton } from '../my-button';

describe('my-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyButton],
      html: `<my-button>Lorem Ipsum</my-button>`,
    });
    expect(page.root).toEqualHtml(`
      <my-button>
        <mock:shadow-root>
          <button class="MyButton medium primary smooth">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Lorem Ipsum
      </my-button>
    `);
  });
});
