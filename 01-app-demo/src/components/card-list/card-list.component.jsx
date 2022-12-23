import { Component } from 'react';
import Card from './card-component';
import './card-list.styles.css';


class CardList extends Component {
    render() {
        return (
            <div className='card-list'>
                {
                    this.props.monsters.map((monster) => {
                        return <Card monster={monster} key={monster.id} />
                    })
                }
            </div>
        )
    }
}

export default CardList;