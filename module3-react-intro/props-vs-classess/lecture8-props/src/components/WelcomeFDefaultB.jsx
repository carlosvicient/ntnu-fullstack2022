import './Welcome.css';

export default function WelcomeFDefaultB(props) {
    const { name = 'Jane Doe' } = props;

    console.log("WelcomeFDefaultB component");
    console.log(" - props:", props);
    console.log(" - props might not be empty:", Object.keys(props));
    console.log(" - props (typeof):", typeof props);
    console.log(" - props.name:", name);
    console.log(" - props.name (typeof):", typeof name);

    return (
        <div className="Welcome">
            <p>Hello, {name} </p>
            <ul className="meta">
                <li key="props"><strong>props:</strong> {props.toString()}</li>
                <li key="propsTypeOf"><strong>props (typeof):</strong> {typeof props}</li>
                <li key="name"><strong>props.name:</strong> {name}</li>
                <li key="nameTypeOf"><strong>props.name (typeof):</strong> {typeof name}</li>
            </ul>
        </div>

    );
}