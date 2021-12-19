import { FaAlignLeft, FaSearch, FaGithub } from 'react-icons/fa';
import '../style/navbar.scss';

export function Navbar(){
    return (
        <nav>
            <FaAlignLeft />
            <FaGithub/>
            <FaSearch />
        </nav>
    );
}