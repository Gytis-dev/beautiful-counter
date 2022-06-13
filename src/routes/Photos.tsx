import { observer } from "mobx-react";
import { Component, Context } from "react";
import { Link } from "react-router-dom";

import { toJS } from "mobx";

import { StoreContext } from "../state/ContextProvider";

class Photos extends Component {
  static contextType = StoreContext;

  componentDidUpdate = () => {
    console.log(this.context);
  };

  render() {
    const { photos } = toJS(this.context) as any;

    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {photos.map(({ id, url, title }: any) => {
          return (
            <Link to={`${id}`} key={id}>
              <img src={url} alt={title} width={75} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default observer(Photos);
