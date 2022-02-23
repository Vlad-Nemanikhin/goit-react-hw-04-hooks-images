const key = "22618153-8524b8eed44fdb0c9dc65d80e";

export const getImg = (title, page) => {
  const response = fetch(
    `https://pixabay.com/api/?q=${title}&page=${page}&key=${key}&image_type=photo&/orientation=horizontal&per_page=12`
  );
  return response;
};
