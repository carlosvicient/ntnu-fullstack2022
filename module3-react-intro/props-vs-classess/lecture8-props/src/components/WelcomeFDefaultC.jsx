import './Welcome.css';

export default function WelcomeFDefaultC({ name = 'Jane Doe', ...props}) {

    //NOTICE props will be empty using this syntax because the object has been destructured in the argument
    console.log("WelcomeFDefaultC component");
    console.log(" - props:", props);
    console.log(" - props is empty:", Object.keys(props));
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