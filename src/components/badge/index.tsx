import * as S from './styles';

interface Props {
  text: string | number;
}

export const Badge = ({ text }: Props) => (
  <S.Container>
    {text}
  </S.Container>
)