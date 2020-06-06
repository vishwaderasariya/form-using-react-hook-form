import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "antd/dist/antd.css";
import "./Registration.css";

function Registration() {
  const { register, errors, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const watchAll = watch({ nest: true });

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "1rem 1rem" }}>
        <h2 style={{ textAlign: "center" }}>Student Registration Form</h2>
        <h4 style={{ textAlign: "center" }}>
          Fill out the form carefully for registration.
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label id="label">
            <b>Student name:</b>
          </label>
          <br></br>
          <input
            type="text"
            name="name.firstname"
            placeholder="First name"
            style={{ marginLeft: "1em", marginTop: "20px" }}
            ref={register({ required: true })}
          ></input>
          {errors?.name?.firstname && "This Field is required"}
          <br></br>
          <input
            type="text"
            name="name.middlename"
            placeholder="middle name"
            style={{ marginLeft: "1em", marginTop: "20px" }}
            ref={register({ required: true })}
          ></input>
          {errors?.name?.middlename && "This Field is required"}
          <br></br>
          <input
            type="text"
            name="name.lastname"
            placeholder="last name"
            style={{ marginLeft: "1em", marginTop: "20px" }}
            ref={register({ required: true })}
          ></input>
          {errors?.name?.lastname && "This Field is required"}
          <br></br>
          <label id="label">
            <b>Gender:</b>
          </label>
          <select
            id="spaceleft"
            style={{ marginTop: "20px" }}
            ref={register({ required: true })}
            name="gender"
          >
            <option value="male" name="gender.male">
              male
            </option>
            <option value="female" name="gender.female">
              female
            </option>
          </select>
          <br></br>
          <br></br>
          <label id="label">
            <b>Address:</b>
          </label>
          <br></br>
          <input
            name="address"
            placeholder="street address"
            style={{ width: "200px" }}
            ref={register({ required: true })}
          ></input>
          {errors.address && "this field is required"}
          <br></br>
          <input
            name="address2"
            placeholder="street address line 2"
            style={{ width: "200px" }}
            ref={register}
          ></input>
          <br></br>
          <input
            name="city"
            type="text"
            placeholder="city"
            style={{ width: "90px" }}
            ref={{ required: true }}
          ></input>
          {errors.city && "this field is required"}
          <input
            name="state"
            placeholder="state"
            style={{ marginLeft: "20px", width: "90px" }}
            ref={register({ required: true })}
          ></input>
          <br></br>
          <input
            name="zipcode"
            placeholder="zip code"
            type="number"
            ref={register}
          ></input>
          <br></br>
          <label id="label">
            <b>Student Email:</b>
          </label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="myname@example.com"
            style={{ marginBottom: "20px" }}
            ref={register}
          ></input>
          <br></br>
          <label id="label">
            <b>Mobile no:</b>
          </label>
          <br></br>
          <input
            name="areacode"
            placeholder="area-code"
            style={{ width: "60px", marginBottom: "20px" }}
            ref={register({ required: true })}
          ></input>{" "}
          <input
            name="pn_number"
            placeholder="phone number"
            ref={register({ required: true })}
          ></input>
          <br></br>
          <br></br>
          <label id="label">
            <b>phone no:</b>
          </label>
          <br></br>
          <input
            name="phone"
            placeholder="phone number"
            ref={register({ required: true })}
          ></input>
          {errors.phone && "thus field is required"}
          <br></br>
          <input type="submit" style={{ backgroundColor: "grey" }} />
        </form>
      </div>
      <pre>{JSON.stringify(watchAll, null, 2)}</pre>
    </div>
  );
}

export default Registration;
