import  './event-card.style.css';

export function EventCard({ event }) {
    return (
        <div>
            <img src={event.image} alt={event.title} />
            <div className="body">
                <p className="tag">{ event.theme.name }</p>
                <p>
                    { event.date.toLocaleDateString('pt-BR') }
                </p>
                <h4 className='title'>
                    { event.title }
                </h4>
            </div>
        </div>
    )
}