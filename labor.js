// Sets the component's background to the default background style.
function setDefaultBackgroundStyle(props) {
    return (
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
            {props.children}
        </div>
    );
}
