const List = (props) => {
  return (
    <ul>
      {props.list.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default List;