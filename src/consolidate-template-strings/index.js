/**
 * Babel plugin which finds and merges unnecessary string-literal interpolations
 * within a tagged template string.
 *
 * @example
 *    // before
 *    const myString = `Hello ${"world"}`;
 *    // after
 *    const myString = `Hello world`;
 */
export default function consolidateTemplateStrings({ types: t }) {
  return {
    visitor: {
      TemplateLiteral(path) {
        const tpl = path.node;
        if (!tpl.expressions) return;
        for (let i = 0; i < tpl.expressions.length; i++) {
          const expr = tpl.expressions[i];
          if (t.isStringLiteral(expr)) {
            const prevQ = tpl.quasis[i];
            prevQ.value.raw += expr.extra.rawValue;
            prevQ.value.raw += tpl.quasis[i + 1].value.raw;
            tpl.quasis = [
              ...tpl.quasis.slice(0, i),
              prevQ,
              ...tpl.quasis.slice(i + 2),
            ];
            tpl.expressions = [
              ...tpl.expressions.slice(0, i),
              ...tpl.expressions.slice(i + 1),
            ];
            --i;
          }
        }
      },
    },
  };
}
