import { useUser } from '../../stores';

import { Avatar } from '../avatar';

import * as S from './styles';

export const Header = () => {
  const updateName = useUser(user => user.updateName);
  const userName = useUser(user => user.name);

  return (
    <S.Header>
      <h1>Zustand</h1>

      <S.ContentRight>
        <Avatar userName={userName || ''} />

        <S.Input 
          placeholder="User name" 
          onChange={({ target: { value } }) => updateName(value)} 
        />
      </S.ContentRight>
    </S.Header>
  )
};