import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Image } from '../src';

describe('Iterate', () => {
  const fallbackSrc = 'fallback/image';

  describe('Given valid image URL', () => {
    describe('When Image is loaded', () => {
      it('Then should render src', () => {
        render(
          <Image fallback={fallbackSrc} src="path/to/image" alt="Demo test" />
        );
        const image = screen.getByRole('img');
        expect(image.getAttribute('src')).toBe('path/to/image');
      });
    });
  });

  describe('Given invalid image URL', () => {
    describe('When an error occurs', () => {
      it('Then should fallback image', () => {
        const fallbackSrc = 'fallback/image';
        render(
          <Image fallback={fallbackSrc} src="path/to/image" alt="Demo test" />
        );
        const image = screen.getByRole('img');
        fireEvent.error(image);
        expect(image.getAttribute('src')).toBe('fallback/image');
      });
    });
  });
});
