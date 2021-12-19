import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../style/repositories.scss';

interface Repository {
  id: number,
  name: string,
  description: string,
  html_url: string
};

export function RepositoryList() {

  const [reposiories, setReposiories] = useState<Repository[]>([]);

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