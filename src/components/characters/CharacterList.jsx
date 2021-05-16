import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'


function CharacterList({ characters }) {
    return (
        <ul aria-label='characters'>
            {characters.map((character) => (
                <li key = {character.id}>
                    <Character
                    name={character.name}
                    image={character.image}
                    id={character.id}
                    />
                </li>
            ))}
        </ul>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    )

}

export default CharacterList


