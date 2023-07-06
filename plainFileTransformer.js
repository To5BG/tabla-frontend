import * as path from 'path';
// eslint-disable-next-line no-undef
export default {
  process(_sourceText, sourcePath) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`
    };
  }
};
