import React from "react";
import { useForm } from "react-hook-form";

const AddToCartInput = props => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { ...props }
  });

  const onSubmit = number => {
    props.addToCart(props.book, number);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="quantity"
          type="number"
          min="0"
          ref={register({
            max: { value: 3, message: "not enough books in warehouse" }
          })}
        />
        <button type="submit">Add to cart</button>
        {errors.quantity && <div>{errors.quantity.message}</div>}
      </form>
    </div>
  );
};

export default AddToCartInput;
