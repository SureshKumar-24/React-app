function Student(props) {
    console.log(props.other);
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h3>Name = {props.name}</h3>
            <h3>Email = {props.email}</h3>
            <h4>Address = {props.other.address}   pincode ={props.other.pincode}</h4>
        </div>
    )
}
export default Student;