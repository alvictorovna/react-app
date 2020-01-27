import React, {Component} from 'react';

import { apiCall } from '../../api/mockedApi';
import Card from './Card';
import {CardForm} from './CardForm'
import { withLoginHOC } from '../Login/withLoginHOC';
 

class cardsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: []
        };
    }


    componentDidMount(){
        apiCall()
        .then(cards => {
            this.setState({
                cards
            })
        })
    }

    deleteCardHandler = (id) => () => {
        this.setState(({cards}) => (
            {cards : cards.filter(card => card.id !== id)}
        ))
    }

    createCardHandler = (values) => (
        this.setState(({cards}) => {
            const nextUniqueId = cards.length > 0 
                ? cards[cards.length - 1].id + 1
                : 1;
            const newCard = {
                id: nextUniqueId,
                ...values
            }
            return {cards: [...cards, newCard]}
        })
    )

    render() {
        const { cards } = this.state
        return(
            <div className = 'cardsContainer'>
                <div className = 'cards'>
                    { cards.length > 0 ?
                        cards.map(card => (
                            <Card 
                                key = {card.id}
                                card = {card}
                                hundlerCardDelete = {this.deleteCardHandler(card.id)}
                            />
                        ))
                      :(<div>No cards yet</div>)
                    }
                </div>
                <div className = 'createCardForm'>
                    <CardForm onSubmit={this.createCardHandler}/>
                </div>
            </div>
        ) 
    }
}

export const CardsContainer = withLoginHOC(cardsContainer);