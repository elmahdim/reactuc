import React from 'react';
import { render } from '@testing-library/react';
import { If } from '../src';

describe('If', () => {
  const TestFallbackComponent = () => (
    <h4 className="failure-condition rendered-element">
      Element is not enabled!
    </h4>
  );

  describe('Given truthy condition', () => {
    const isElementEnabled = 1;

    describe('When If is called', () => {
      it('Then should render children', () => {
        const { container } = render(
          <If
            condition={isElementEnabled}
            otherwise={<TestFallbackComponent />}
          >
            <h2 className="passed-condition rendered-element">
              Element is enabled!
            </h2>
          </If>
        );

        expect(container.querySelector('.failure-condition')).toBeNull();
        expect(container.querySelector('.passed-condition')).toBeDefined();
        expect(
          container.querySelector('.rendered-element')?.textContent
        ).toEqual('Element is enabled!');
      });
    });
  });

  describe('Given falsy condition', () => {
    const isElementEnabled = 0;

    describe('When If is called', () => {
      it('Then should render otherwise', () => {
        const { container } = render(
          <If
            condition={isElementEnabled}
            otherwise={<TestFallbackComponent />}
          >
            <h2 className="passed-condition rendered-element">
              Element is enabled!
            </h2>
          </If>
        );

        expect(container.querySelector('.failure-condition')).toBeDefined();
        expect(container.querySelector('.passed-condition')).toBeNull();
        expect(
          container.querySelector('.rendered-element')?.textContent
        ).toEqual('Element is not enabled!');
      });
    });
  });
});
