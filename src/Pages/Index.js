import React from "react";

export default function Index(props) {
  const { formDataFields } = props;

  return (
    <div>
      <ul>
        <li
          className={
            (703 * Number(formDataFields.weight)) /
              Number(formDataFields.height) ** 2 <
              18.5 ||
            (703 * Number(formDataFields.weight)) /
              Number(formDataFields.height) ** 2 >
              30
              ? "redColor"
              : "greenColor"
          }
        >
          BMI:{" "}
          {(703 * Number(formDataFields.weight)) /
            Number(formDataFields.height) ** 2}
        </li>
        <li
          className={formDataFields.sleepAmount < 7 ? "redColor" : "greenColor"}
        >
          Sleep Amount: {formDataFields.sleepAmount}
        </li>
        <li
          className={
            formDataFields.waterIntake > 0.5 ? "greenColor" : "redColor"
          }
        >
          Water Intake: {formDataFields.waterIntake}
        </li>
        <li
          className={formDataFields.steps > 10000 ? "greenColor" : "redColor"}
        >
          Steps: {formDataFields.steps}
        </li>
        <li
          className={formDataFields.screenTime > 8 ? "redColor" : "greenColor"}
        >
          Screen Time: {formDataFields.screenTime}
        </li>
        <li
          className={
            formDataFields.heartRate > 100 || formDataFields.heartRate < 60
              ? "redColor"
              : "greenColor"
          }
        >
          Heart Rate {formDataFields.heartRate}
        </li>
        <li
          className={
            formDataFields.bloodOxygen < 95 ? "redColor" : "greenColor"
          }
        >
          Blood Oxygen: {formDataFields.bloodOxygen}
        </li>
      </ul>
    </div>
  );
}
