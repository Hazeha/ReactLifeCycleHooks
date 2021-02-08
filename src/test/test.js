import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "World!"};
    }
    shouldComponentUpdate() {
        return true;
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({name: "Nilma!"})
        }, 2000)
    }
    componentDidUpdate() {
        document.getElementById("didUpdate").innerText = "Updated Name to "+ this.state.name;
    }
    changeName = () => {
        this.setState({name: "Jens!"});
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <button type="button" onClick={this.changeName}>Hello!</button>
                <p id="didUpdate"> </p>
            </div>
        );
    }
}
export default Header;

