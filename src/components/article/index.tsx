import { Badge } from '../badge';

import * as S from './styles';

interface Props {
  title: string;
  content: string;
  age: number | null;
}

export const Article = ({ title, content, age }: Props) => (
  <S.Article>
    <h2>{title}</h2>
    
    <p style={{ marginTop: 16, marginBottom: 8 }}>
      Author: Teste, Idade:

      {age && <Badge text={age} />}
    </p>

    <p>{content}</p>
  </S.Article>
);