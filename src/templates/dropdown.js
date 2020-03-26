import * as React from "react";

class Dropdown extends React.Component {

    render() {
        const {options, style, id} = this.props;
        const optionValues = [];
        for (let i = 0; i < options.length; i++) {
            optionValues.push(
                <option key={i} value={options[i].value}>{options[i].label}</option>)
        }
        return (
            <div style={style}>
                <select onChange={this.handleChange} id={"dropdown-select" + id} style={{width: "100%"}}
                        className="dropdown-select">
                    {optionValues}
                </select>
            </div>
        )
    }

    handleChange = () => {
        const selectElement =
            document.querySelector('#dropdown-select' + this.props.id);
        const output = selectElement.options[selectElement.selectedIndex].value;
        this.props.onSelect(output);
    };
}

export default Dropdown