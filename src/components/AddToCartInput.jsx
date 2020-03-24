import React from "react";
import { useForm } from "react-hook-form";

const AddToCartInput = props => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: { quantity: props.inCart }
  });

  const onSubmit = input => {
    console.log(+input.quantity + +props.inCart);
    debugger;
    props.addToCart(props.book, input.quantity);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="quantity"
          type="number"
          min="1"
          ref={register({
            // max: { value: 3, message: "not enough books in warehouse" }
            validate: value => +props.inCart + +value <= 3 || "not enough books in warehouse"
          })}
        />
        <button type="submit">Add to cart</button>
        {errors.quantity && <div>{errors.quantity.message}</div>}
      </form>
    </div>
  );
};

export default AddToCartInput;
