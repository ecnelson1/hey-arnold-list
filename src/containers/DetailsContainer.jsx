import React, { Component } from 'react'
import Character from '../components/characters/Character';
import { characterById } from '../services/HeyApi';

export default class DetailsContainer extends Component {
    state = {
        loading:true,
        character: {},
    };
    async componentDidMount() {
        const { id } = this.props.match.params
        const character = await characterById(id);
        this.setState({
            character,
            loading:false,
        });
    }

    render() {
            if (this.state.loading) return <h1>LOADING...</h1>;
            return <Character aria-label ='character' id = {this.state.character.id} name = {this.state.character.name} image = {this.state.character.image} />;
    }
}
