Tests the ability of this package to replace CSS variables with values from a `styled-components` theme.

For example:

```css
/* source CSS */
:root {
  --blue: #007bff;
  --bodyFont: 'sans-serif';
}
.btn {
  background-color: var(--blue);
  font-family: var(--bodyFont);
}
```

```js
import Thief from 'style-thief.macro';
import styled from 'styled-components';

const Styles = Thief.require('./styles.css')
  .withVariables(({theme}) => ({
    '--blue': theme.colors.blue,
    '--bodyFont': theme.fonts.body,
  }));

export default styled.button`
  ${Styles.get('.btn')}
`;
```

Translates to:

```js
import styled from 'styled-components';

export default styled.button`
  ${({theme}) => `
    background-color: ${theme.colors.blue};
    font-family: ${theme.fonts.body};
  `}
`;
```

Note that variable scopes will not work the same way in Styled Components as with CSS Variables, unless all CSS variables are defined in the `:root` block.
