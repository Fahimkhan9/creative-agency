import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

function OrderForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedinuser, setLoggedinuser] = useContext(UserContext);
  const onSubmit = (data) => {
    data.email = loggedinuser.email;
    fetch("https://creative-agency-server-1c0w.onrender.com/addorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((succees) => console.log("successfully posted"));
  };

  return (
    <div className="container p-5" style={{ backgroundColor: "#f4f7fc" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            ref={register({ required: true })}
            placeholder="your Name/Company's Name"
          />
          {errors.name && (
            <span style={{ color: "red" }}>Name is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            className="form-control"
            ref={register({ required: true })}
            placeholder="your address"
          />
          {errors.address && (
            <span style={{ color: "red" }}>Address is required</span>
          )}
        </div>
        <div className="form-group">
        <input
            type="text"
            name="service"
            className="form-control"
            ref={register({ required: true })}
            placeholder="service"
          />

          {errors.service && <span>Service  is required</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="detail"
            className="form-control"
            ref={register({ required: true })}
            placeholder="Project Detail"
          />
          {errors.detail && (
            <span style={{ color: "red" }}>Detail is required</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="price"
            className="form-control"
            ref={register({ required: true })}
            placeholder="price"
          />
          {errors.price && (
            <span style={{ color: "red" }}>Price is required</span>
          )}
        </div>

        <button className="btn btn-dark px-4" type="submit">
          Make Order
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
