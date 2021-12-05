import { useUser } from '../../stores';

import * as S from './styles';

export const Footer = () => {
  const company = useUser(user => user.company);

  return (
    <S.Footer>
      <h3>{company}</h3>
    </S.Footer>
  )
};