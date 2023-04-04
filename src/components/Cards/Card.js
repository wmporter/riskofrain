import './Card.css';
import items from '../Items';


function Card(items) {
    
    return (
        <div id={items.id} className='dt min-h-50 br2 pa3 ma3 grow ba bw2 card' style={{backgroundColor: items.color, maxWidth: '350px', wordWrap: 'break-word' }}>
        <img className= 'cardLogo' src={items.logo} alt='' />
        <h2>{items.name}</h2> 
            <div className='info'>
        <a>{items.description}</a><br />
        <a className='i b'>Synergises with: {items.synergy}</a>
            </div>
        </div>
    )
}

export default Card;