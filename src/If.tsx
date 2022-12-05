import React, { ReactNode, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  condition: 1 | 0;
  otherwise?: ReactNode;
}

export const If = ({ condition, otherwise, children }: Props) => (
  <>{condition && condition === 1 ? children : otherwise}</>
);
