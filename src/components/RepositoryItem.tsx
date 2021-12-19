import { FaStar, FaCloudsmith } from 'react-icons/fa';

interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <a href={props.repository.html_url} target="_blank">
        <strong>{props.repository.name}</strong>
      </a>
      <p>{props.repository.description}</p>
      <span>
        <FaStar />
        <FaCloudsmith />
      </span>
    </li>
  );
}
