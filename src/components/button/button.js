import { LoadBtn } from "./button.styled";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Btn({ onClick }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    updatePage();
  }, []);

  const updatePage = () => {
    setPage(1);
  };

  const handleClick = (e) => {
    setPage((prev) => prev + 1);
    onClick(page);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return <LoadBtn onClick={handleClick}>Load more</LoadBtn>;
}

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
