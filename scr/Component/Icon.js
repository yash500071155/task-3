import React from "react";

function Icon(props) {
  const alignMentType = props.align;

  return (
    <div
      className={
        alignMentType === "right"
          ? "d-flex flex-row-reverse text-danger"
          : "d-flex text-danger"
      }
      style={{ minWidth: "100%", height: "150px" }}
    >
      <i className='fas fa-sun' style={{ fontSize: "70px" }}></i>
    </div>
  );
}

export default Icon;
