import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../style/repositories.scss';

// https://api.github.com/users/franklysg
// https://api.github.com/users/FranklysG/repos

const repository = {
  'name': 'Assiger',
  'description': 'This is best',
  'link': 'https://github.com/unform/unform'
};

export function RepositoryList() {

  const [reposiories, setReposiories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/FranklysG/repos').then(response => response.json()).then(data => setReposiories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {reposiories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository}/>
        })}
      </ul>
    </section>
  );
}