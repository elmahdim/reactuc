import React, { createElement } from 'react';
import { getRandomKey } from './utilities';

type KeyValuePair = {
  [key: string]: any;
};

type Data = KeyValuePair | string;

interface Props {
  data: Data[];
  element: any;
}

export const Iterate = ({ data, element }: Props) => {
  return (
    <>
      {data.map((item: KeyValuePair | string) =>
        typeof item === 'string'
          ? createElement(element, { key: getRandomKey() }, item)
          : createElement(element, { key: getRandomKey(), ...item })
      )}
    </>
  );
};
