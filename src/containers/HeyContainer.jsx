import React, { Component } from 'react'
import CharacterList from '../components/characters/CharacterList';
import { allCharacters } from '../services/HeyApi';

export default class HeyContainer extends Component {
    state = {
        loading:true,
        characters: [],
    };
    async componentDidMount() {
        const characters = await allCharacters();
        this.setState({
            characters,
            loading:false,
        });
    }

    render() {
            const {loading, characters} =this.state;
            if (loading) return <h1>LOADING...</h1>;
            return <CharacterList characters = {characters}/>;
    }
}

