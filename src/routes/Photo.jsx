import { Component } from "react";
import { useParams } from "react-router";
import {fetchPost} from "../assets/functions"
import { store } from "../state/photoStore";


const withNavigation = (Component) => {
  return (props) => <Component {...props} params={useParams()} />;
};

class Photo extends Component {
  state = {
    ph: ""
  }


componentDidMount = () => {
  const param = this.props.params.id
  fetchPost(param).then((res) => res.json()).then((res) => this.setState({ph: res[0]}))
}


  render() {
    return <div>
        <img src={this.state.ph.url} alt="" width = {200} />
        <h1>{this.props.params.id}</h1>
      </div>;
  }
}

export default withNavigation(Photo);
