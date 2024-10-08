import "./Form.css";
import { useState } from "react";

export default function Education() {
  return (
    <>
      <form
        id="edu-form-section"
        className="form-section"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Education</h2>

        <label htmlFor="school-name"> Institution </label>
        <input type="text"/>
        <label htmlFor="study-type"> Title of Study </label>
        <input type="text" />

        <label htmlFor="study-date-start"> Start </label>
        <input type="date" />

        <label htmlFor="study-date-end"> End </label>
        <input type="date" />

        <button type="submit">Add Another Institution</button>
      </form>
    </>
  );
}
