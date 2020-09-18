import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center text-title mt-5 mb-5">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-dark">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
