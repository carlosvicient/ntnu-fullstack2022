const LastChoice = (props) => {
    return (
        <p>Your last choice was: <strong>{props.lastChoice || 'none'}</strong></p>
    );
}

export default LastChoice;