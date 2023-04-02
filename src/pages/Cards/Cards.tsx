import { posts, storageKeys } from "../../constants";
import { getStorageByKey, setStorageByKey } from "../../helpers/storage";
import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import { Input } from "../../components/FormElements/Input/Input";
import { Card } from "../../components/Card/Card";
import "./Cards.scss";

export const Cards = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchValueRef = useRef(searchValue);

  useEffect(() => {
    const storageValue = getStorageByKey(storageKeys.searchValue);

    setSearchValue(storageValue);
  }, []);

  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      debugger;
      setStorageByKey(searchValueRef.current, storageKeys.searchValue);
    };
  }, []);

  const onChange = useCallback(
    (value: string) => {
      setSearchValue(value);
    },
    [setSearchValue]
  );

  return (
    <section className="cards">
      <Input className="cards-input" value={searchValue} onChange={onChange} />

      <div className="cards-content">
        {posts.map(({ id, ...rest }) => (
          <Card key={id} {...rest} className="cards-content-item" onClick={() => {}} />
        ))}
      </div>
    </section>
  );
};
