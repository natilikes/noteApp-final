import Card from "../components/Card";


function Home() {
    const items = [
        {
            id: 1,
            title: "My First Note!",
            description: "Ideas and Thoughts!",
            type: "Note"
        },
        {
            id: 2,
            title: "My First Drawing",
            description: "Inspiration into a pen",
            type: "Drawing"
        },
        {
            id: 3,
            title: "Project Ideas",
            description: "Ideas for this week",
            type: "Note"
        }
    ];

    return (
        <main>
            <h1>Welcome to NoteApp!</h1>
            <p>Think and Create!</p>

            <section>
                <h2>Recent Work</h2>

                <div className="card-list">
                    {items.map((item) => (
                        <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        type={item.type}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;