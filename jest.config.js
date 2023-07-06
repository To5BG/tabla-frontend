export default {
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        babelConfig: {
          presets: ['babel-preset-solid', '@babel/preset-env']
        }
      }
    ],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/plainFileTransformer.js',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  testRegex: 'test/.*',
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/**.{ts,js,tsx,jsx}'],
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  moduleNameMapper: {
    'solid-js/web': '<rootDir>/node_modules/solid-js/web/dist/web.cjs',
    'solid-js': '<rootDir>/node_modules/solid-js/dist/solid.cjs'
  }
};
