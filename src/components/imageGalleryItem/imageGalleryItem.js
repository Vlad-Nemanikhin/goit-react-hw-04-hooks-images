import { Image, Card } from "./imageGalleryItem.styled";
import PropTypes from "prop-types";

export const ImageItem = ({ source, name, sourceLarge, onSelectImg }) => {
  return (
    <Card
      onClick={() => {
        onSelectImg(sourceLarge);
      }}
    >
      <Image src={source} alt={name} />
    </Card>
  );
};

ImageItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onSelectImg: PropTypes.func,
};
