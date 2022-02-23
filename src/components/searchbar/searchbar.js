import { Header, Form, Label, SearchBtn, Input } from "./searchbar.styled";
import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import PropTypes from "prop-types";
import { NotificationManager } from "react-notifications";

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      NotificationManager.warning("Type anything in the field", 5000);
      return;
    }
    onSubmit(value);
    reset();
  };

  const reset = () => {
    setValue("");
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <SearchBtn type="submit">
          {" "}
          <VscSearch />
          <Label>Search</Label>
        </SearchBtn>

        <Input
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
          value={value}
          onChange={handleInputChange}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
