import React, { createElement } from 'react';
import { getRandomKey } from './utilities';

interface Props {
  head?: any[];
  body: any[][];
  foot?: any[];
}

const Cells = ({
  data,
  type = 'td',
}: {
  data: any[] | undefined;
  type?: string;
}) => {
  if (!data) return null;

  return (
    <>
      {data.map(item =>
        createElement(type, { key: `${type}-${getRandomKey()}` }, item)
      )}
    </>
  );
};

export const Table = ({ head, body, foot, ...rest }: Props) => {
  const bodyRows = body.map(row => (
    <tr key={`th-${getRandomKey()}`}>
      <Cells data={row} />
    </tr>
  ));

  return (
    <table {...rest}>
      {head?.length ? (
        <thead>
          <tr>
            <Cells data={head} type="th" />
          </tr>
        </thead>
      ) : null}
      {body?.length ? <tbody>{bodyRows}</tbody> : null}
      {foot?.length ? (
        <tfoot>
          <tr>
            <Cells data={foot} />
          </tr>
        </tfoot>
      ) : null}
    </table>
  );
};
