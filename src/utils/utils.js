export const createData = (props) => {
  return {
    id: props.id,
    thumbnail: props.thumbnail,
    brand: props.brand,
    title: props.title,
    price: props.price,
    discountPercentage: props.discountPercentage,
    quantity: 1,
  };
};
