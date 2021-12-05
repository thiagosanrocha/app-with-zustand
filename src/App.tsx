import { useCallback } from 'react';
import faker from 'faker';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Article } from './components/article';
import { Button } from './components/button';

import articles from './articles.json';

import { useUser } from './stores/user';

export const App = () => {
  const updateUser = useUser(user => user.updateUser);
  const updateCompany = useUser(user => user.updateCompany);
  const age = useUser(user => user.age);
  
  const handleClick = useCallback(() => {
    updateUser({
      age: 47,
      name: faker.name.findName(),
    })
  }, [updateUser]);

  return (
    <>
      <Header />

      <main style={{ maxWidth: 1120, margin: '0 auto' }}>
        <section 
          style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <Button onClick={handleClick}>
            Update User
          </Button>

          <Button onClick={handleClick} style={{ marginLeft: 16 }}>
            Change Name
          </Button>

          <Button 
            onClick={() => updateCompany(`Todos os direitos reservados ${faker.internet.domainName()}`)} 
            style={{ marginLeft: 16 }}
          >
            Change Footer
          </Button>
        </section>

        {articles.map(({ title, content }) => (
          <Article
            key={title}
            title={title} 
            content={content}
            age={age}
          />
        ))}
      </main>

      <Footer />
    </>
  );
};
