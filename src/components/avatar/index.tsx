import * as S from './styles';

interface Props {
  userName: string;
}

export const Avatar = ({ userName }: Props) => (
  <S.Container>
    <S.Avatar />

    <S.UserName>{userName}</S.UserName>
  </S.Container>
);