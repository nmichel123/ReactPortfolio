import React from "react";
import './style.css'

export default function Section({ title, content, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}