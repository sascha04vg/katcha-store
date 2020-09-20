import React from "react";

export default function NavItem({ value }) {
  const { cartItemCount } = value;
  return (
    <p
      style={{
        position: "absolute",
        right: "75px",
        top: "8px",
        fontSize: ".7rem",
        backgroundColor: "orange",
        padding: "1px",
        borderRadius: "50%",
        height: "18px",
        width: "18px",
      }}
    >
      {cartItemCount}
    </p>
  );
}
