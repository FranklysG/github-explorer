export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Sem nome'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar repositorios
      </a>
    </li>
  );
}
