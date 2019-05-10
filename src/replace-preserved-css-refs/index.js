import { createMacro } from 'babel-plugin-macros';

const opts = {
  styles: {
    '.btn': `color: white; background-color: black;`,
  },
};

export default createMacro(function replacePreservedCssRefs({
  references,
  babel,
}) {
  const { getPreserved = [] } = references;

  getPreserved.forEach((referencePath) => {
    if (referencePath.parentPath.type === 'TaggedTemplateExpression') {
      const cssSelector = referencePath.parentPath.get('quasi.quasis.0').node
        .value.raw;
      referencePath.parentPath.replaceWith(
        babel.types.stringLiteral(
          `&${cssSelector}{${
            // TODO: implement semi-intelligent "lookup" utility, since
            // naive lookup like this won't generally work
            opts.styles[cssSelector] || ''
          }}`
        )
      );
    }
  });
});
