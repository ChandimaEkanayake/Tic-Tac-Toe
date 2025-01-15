import PropTypes from 'prop-types';
import {useState} from 'react';

const ButtonGrid = ({val}) => {
    const[isPressed, setIsPressed] = useState(false);
    const[value, setValue] = useState('');
    function handleClick() {
        console.log("Pressed");
        setIsPressed(!isPressed);
        setValue(val);
    }
    return (
        <button className='gridButton' disabled={isPressed} onClick={handleClick}>{isPressed ? value : ""}</button>
    )
}

ButtonGrid.propTypes = {
  val: PropTypes.string.isRequired, 
};

export default ButtonGrid;