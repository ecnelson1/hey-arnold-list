import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

function Character({id, name, image,}) {
    let history = useHistory();
    const handleClick = () =>{
        history.push(`/${id}`)
        history.go(`/${id}`)
    }
    return (
        <div>
            <img src = {image} alt={name} onClick={handleClick}/>
            <p>{name}</p>
        </div>
    )
}

Character.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,

}

export default Character


