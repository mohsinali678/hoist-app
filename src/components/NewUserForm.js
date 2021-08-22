import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function NewUserForm(props) {
  const { questionnaireData, addFormData } = props;
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    sleepAmount: "",
    waterIntake: "",
    steps: "",
    screenTime: "",
    heartRate: "",
    bloodOxygen: "",
    userDataFields: [],
  });

  let history = useHistory();

  useEffect(() => {
    setFormData({
      ...formData,
      userDataFields: questionnaireData,
    });
  }, [questionnaireData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormData(formData);
    history.push("/dashboard");
  };

  const textInputs = formData.userDataFields.map((elem, i) => {
    return (
      <React.Fragment key={i}>
        <label htmlFor={elem}>{elem}:</label>
        <input
          id={elem}
          name={elem}
          type="number"
          value={formData[elem]}
          onChange={handleChange}
          required
        />
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
        <label htmlFor="age">age:</label>
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
        {textInputs}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
