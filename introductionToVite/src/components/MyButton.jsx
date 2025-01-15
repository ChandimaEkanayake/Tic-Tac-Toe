import PropTyoes from 'prop-types';
import './MyButton.css';
const MyButton = ({label , onClick}) => {
    return (
        <button onClick={onClick} className='buttonOne'>{label}</button>
    );
};

MyButton.propTypes = {
    label: PropTyoes.string.isRequired,
    onClick: PropTyoes.func.isRequired
}
export default MyButton;