import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faGlobeAsia}></FontAwesomeIcon>
      <h3>My Travel Journel</h3>
    </header>
  );
}
