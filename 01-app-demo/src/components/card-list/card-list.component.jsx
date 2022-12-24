
import Card from './card-component';
import './card-list.styles.css';


const CardList = (props) => {

    return (
        <div className='card-list'>
            {
                props.monsters.map((monster) => {
                    return <Card monster={monster} key={monster.id} />
                })
            }
        </div>
    )

}

export default CardList;