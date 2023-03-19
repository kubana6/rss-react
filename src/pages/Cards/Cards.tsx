import { posts, storageKeys } from "../../constants";
import { getStorageByKey, setStorageByKey } from "../../helpers/storage";
import React, { Component } from "react";
import { Input } from "../../components/Input/Input";
import { Card } from "../../components/Card/Card";
import "./Cards.scss";

export class Cards extends Component {
  state = {
    value: "",
  };

  componentDidMount = () => {
    const storageValue = getStorageByKey(storageKeys.searchValue);

    this.setState({ value: storageValue });
  };

  componentWillUnmount = () => {
    const { value } = this.state;
    setStorageByKey(value, storageKeys.searchValue);
  };

  onChange = (value: string) => {
    this.setState({ value });
  };

  render(): React.ReactNode {
    const { value } = this.state;
    return (
      <section className="cards">
        <Input className="cards-input" value={value} onChange={this.onChange} />

        <div className="cards-content">
          {posts.map(({ id, ...rest }) => (
            <Card key={id} {...rest} className="cards-content-item" onClick={() => {}} />
          ))}
        </div>
      </section>
    );
  }
}
