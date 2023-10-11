function Student(props) {
    console.log(props);
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h3>Name = {props.name}</h3>
        </div>
    )
}
export default Student;