import React from "react";
import PropTypes from "prop-types";

const Display = ({
  empData,
  firstName,
  age,
  strOrNum,
  status,
  arr,
  random,
  person,
}) => {
  return (
    <div>
      {strOrNum}
      {firstName}
      {empData.map((e) => (
        <p key={e.id}>{e.country}</p>
      ))}

      {arr.map((e) => (
        <p>{e}</p>
      ))}

      {person.name}
    </div>
  );
};

//define the datatype you are expecting
Display.propTypes = {
  firstName: PropTypes.string,
  age: PropTypes.number,
  strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  arr: PropTypes.arrayOf(PropTypes.number),
  person: PropTypes.shape({
    name: PropTypes.string,
    designation: PropTypes.string,
  }),
  status: PropTypes.bool,
  empData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      designation: PropTypes.string,
      country: PropTypes.string,
    })
  ),
  random: PropTypes.func,
};

// inbuilt: coming from component itself
Display.defaultProps = {
  person: {
    name: "alex",
    designation: "manager",
  },
  empData: [],
  firstNam: " harry",
  age: 89,
  strOrNum: 9,
  status: true,
  arr: [80, 9, 79],
  random: () => {},
};

export default Display;
