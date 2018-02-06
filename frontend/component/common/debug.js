export  const Debug = ({ state, name}) => {
    return (
    <div>
        <hr />
        <h2>Debug Area for {name}</h2>
        <pre>
            {JSON.stringify(state, null, 2)}
        </pre>
    </div>
)
};