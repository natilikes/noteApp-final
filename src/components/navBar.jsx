
import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { label: "Home", link: "/" },
    { label: "My Notes", link: "/notes" },
    { label: "Trash", link: "/trash" },
    { label: "Drawing Studio", link: "/drawings" }
  ];

  return (
    <nav>
      <h2>NoteApp</h2>

      <ul>
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
