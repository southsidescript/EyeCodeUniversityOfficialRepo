import './ClassicButton.css';
const ClassicButton = ({ children, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );

}

export default ClassicButton;