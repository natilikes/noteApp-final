
function Card({ title, description, type }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{type}</span>
        </div>
    );
}

export default Card;