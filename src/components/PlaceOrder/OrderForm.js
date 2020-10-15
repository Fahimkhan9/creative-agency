import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

function OrderForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedinuser, setLoggedinuser] = useContext(UserContext);
  const onSubmit = (data) => {
    data.email = loggedinuser.email;
    fetch("http://localhost:5000/addorder", {
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
          <select
            class="form-control "
            name="service"
            ref={register({ required: true })}
          >
            <option
              value="Web Development"
              name="Web Development"
              ref={register({ required: true })}
            >
              Web Development
            </option>
            <option
              value="Web and Mobile Design"
              name="Web and Mobile Design"
              ref={register({ required: true })}
            >
              Web and Mobile Design
            </option>
            <option
              value="Graphics Design"
              name="Graphics Design"
              ref={register({ required: true })}
            >
              Graphics Design
            </option>
          </select>

          {errors.service && <span>This field is required</span>}
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
