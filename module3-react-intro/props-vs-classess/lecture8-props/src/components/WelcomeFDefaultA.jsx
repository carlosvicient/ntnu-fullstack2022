import './Welcome.css';

export default function WelcomeFDefaultA(props) {
    console.log("WelcomeFDefaultA component");
    console.log(" - props:", props);
    console.log(" - props (typeof):", typeof props);
    console.log(" - props.name:", props.name);
    console.log(" - props.name (typeof):", typeof props.name);

    return (
        <div className="Welcome">
            <p>Hello, {props.name} </p>
            <ul className="meta">
                <li key="props"><strong>props:</strong> {props.toString()}</li>
                <li key="propsTypeOf"><strong>props (typeof):</strong> {typeof props}</li>
                <li key="name"><strong>props.name:</strong> {props.name}</li>
                <li key="nameTypeOf"><strong>props.name (typeof):</strong> {typeof props.name}</li>
            </ul>
        </div>

    );
}

//set default props by adding a static property named defaultProps to the component function
WelcomeFDefaultA.defaultProps = {
    name: 'Jane Doe'
};
