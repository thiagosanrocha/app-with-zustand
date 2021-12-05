import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick(): void;
}

export const Button = ({ onClick, children, ...rest }: PropsWithChildren<Props>) => (
  <S.CustomButtom 
    onClick={onClick}
    {...rest}
  >
    {children}
  </S.CustomButtom>
);