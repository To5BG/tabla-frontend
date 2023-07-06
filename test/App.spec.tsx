import App from './../src/App';
import { render } from '@solidjs/testing-library';

describe('App test', () => {
  let sut: HTMLElement;

  beforeEach(() => {
    const { baseElement } = render(() => <App />);
    sut = baseElement;
  });

  test('Should contain starter text', () => {
    const text = sut.querySelector('p')?.innerHTML;
    expect(text).toContain('Edit <code>src/App.tsx</code> and save to reload.');
  });
});
