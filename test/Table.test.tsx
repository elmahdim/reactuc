import React from 'react';
import { render, within } from '@testing-library/react';
import { Table } from '../src';

describe('Table', () => {
  describe('Given table data', () => {
    const data = {
      head: ['First', <button type="button">Action</button>],
      body: [
        ['One', 'Two'],
        ['Three', 'Four'],
      ],
    };

    describe('When Table is called with head and body', () => {
      it('Then should render table with thead and tbody', () => {
        const { container } = render(<Table {...data} />);
        expect(container.querySelectorAll('th')).toHaveLength(2);
        expect(
          within(container.querySelectorAll('th')[1]).getByText('Action')
            .tagName
        ).toEqual('BUTTON');
        expect(container.querySelectorAll('tbody tr')).toHaveLength(2);
        expect(container.querySelectorAll('tbody td')).toHaveLength(4);
      });
    });

    describe('And when Table is called with head and body and foot', () => {
      it('Then should render table with thead, tbody and tfoot', () => {
        const updatedData = {
          ...data,
          foot: ['Bttom first', 'Bttom last'],
        };
        const { container } = render(<Table {...updatedData} />);
        expect(container.querySelectorAll('th')).toHaveLength(2);
        expect(container.querySelectorAll('tbody tr')).toHaveLength(2);
        expect(container.querySelectorAll('tbody td')).toHaveLength(4);
        expect(container.querySelectorAll('tfoot td')).toHaveLength(2);
      });
    });
  });
});
