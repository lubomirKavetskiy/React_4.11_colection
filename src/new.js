import React, {Component} from 'react';

export default class NewComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderItem(obj, index){
        // 2) //console.log("obj:", obj);
        // 2) //console.log("index:", index);
        return(
            <li key={index}><b>{obj.text}</b> - {obj.id}</li>
        );
    }

    render() {
        // 1) //console.log("this:", this.props.arr);

        return (
            <ul>
                {this.props.arr.map(this.renderItem.bind(this))}
            </ul>

        )
    }
}