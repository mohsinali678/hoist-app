import React, { useState, useEffect } from "react";

export default function NewUserForm(props) {
  const { questionnaireData, addFormData } = props;
  const [formData, setFormData] = useState({
    "name": "",
    "age": "",
    "weight": "",
    "height": "",
    "sleep amount": "",
    "water intake": "",
    "steps": "",
    "screen time": "",
    "heart rate": "",
    "blood oxygen": "",
    userDataFields: [],
  });

  useEffect(() => {
    setFormData({
      ...formData,
      userDataFields: questionnaireData,
    });
  }, [questionnaireData,formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormData(formData);
  };

  const textInputs = formData.userDataFields.map((elem, i) => {
    return (
      <React.Fragment key={i}>
        <label htmlFor={elem}>{elem}:</label>
        <input
          id={elem}
          name={elem}
          type="text"
          value={formData[elem]}
          onChange={handleChange}
          required
        />
        <br />
        <br />
      </React.Fragment>
    );
  });

  return (
    <div className="newPage">
      <h2>New User Form</h2>
      <form onSubmit={handleSubmit} className="newForm">
          <label htmlFor="name">name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label htmlFor="age">age:</label>
          <input
            id="age"
            name="age"
            type="text"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          {textInputs}
          <input type="submit" />
      </form>
    </div>
  );
}
