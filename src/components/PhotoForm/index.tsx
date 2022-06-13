import { Component, FormEvent } from "react";
import "./PhotoFormStyle.css";

import { fetchPosts } from "../../assets/functions";
import { store } from "../../state/photoStore";

export class PhotoForm extends Component {
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { getPhotos } = store;

    const { count, size } = e.target as typeof e.target & {
      count: { value: number };
      size: { value: number };
    };

    if (count.value) {
      fetchPosts(count.value)
        .then((res) => res.json())
        .then((res) => getPhotos(res));
    }
  };

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Indicate number of photos to fetch</label>
            <input type="number" required name="count" />
          </div>
          <div>
            <label htmlFor="">Photo size</label>
            <input type="number" name="size" />
          </div>
          <div>
            <input type="submit" value="Fetch" />
            <input type="button" value="Remove photos" />
          </div>
        </form>
      </div>
    );
  }
}
