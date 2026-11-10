
function NavBar() {
    const navLinks = [
        {label: "Dashboard", link: "/"},
        {label: "My Notes", link: "/notes"},
        {label: "Drawing Studio", link: "/drawings"},
        {label: "Trash", link: "/trash"}
    ];

return (
    <nav>
        <h2>Note App</h2>

        <ul>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.link}>{item.label}</a>
                </li>
            ))}
        </ul>
    </nav>
);
}

export default NavBar;