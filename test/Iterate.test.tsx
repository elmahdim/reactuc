import React from 'react';
import { render } from '@testing-library/react';
import { Iterate } from '../src';

describe('Iterate', () => {
  describe('Given list of strings', () => {
    describe('When Iterate is called with array of strings', () => {
      it('Then should render given values as nodes/html-element', () => {
        const { container } = render(
          <Iterate data={['First', 'Second', 'Third']} element="h3" />
        );
        expect(container.querySelectorAll('h3')).toHaveLength(3);
      });
    });
  });

  describe('Given list of object', () => {
    describe('When Iterate is called with array of objects', () => {
      const TestUserComponent = ({ userName, id }: any) => (
        <div className="user-card" id={`user-${id}`}>
          {userName}
        </div>
      );
      it('Then should render given values as react element', () => {
        const users = [
          { id: '75ebc192', userName: 'Erling.Towne' },
          { id: 'd660', userName: 'Rhoda.Renner' },
          { id: '4ad2', userName: 'Evie_Davis' },
          { id: '8b89', userName: 'Marcel_Hansen' },
          { id: 'fd2bf07138c6', userName: 'Nichole.Vandervort12' },
        ];
        const { container } = render(
          <Iterate data={users} element={TestUserComponent} />
        );
        expect(container.querySelectorAll('.user-card')).toHaveLength(5);
      });
    });
  });
});
