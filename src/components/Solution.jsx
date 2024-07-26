import styled from "styled-components";
//import React from "react";

const parseSolution = (solArr) => {
  return solArr.reduce((acc, val, i) => {
    if (i > 0) {
      let [prevX, prevY] = sol[i - 1];
      let [curX, curY] = sol[i];
      if (curX - prevX !== 0 && curY - prevY !== 0) {
        //Poured

        //Poured to X from Y
        if (curX - prevX > 0)
          return [
            ...acc,
            `Poured ${curX - prevX} l from Y bucket to X bucket. ${
              i === sol.length - 1 ? "Solved!" : ""
            }`,
          ];
        //Pured to Y from X
        return [
          ...acc,
          `Poured ${curY - prevY} l from X bucket to Y bucket. ${
            i === sol.length - 1 ? "Solved!" : ""
          }`,
        ];
      }
      if (curX - prevX !== 0 && curY - prevY === 0) {
        //Fill or empty X
        if (curX - prevX > 0)
          return [
            ...acc,
            `Fill bucket X.  ${i === sol.length - 1 ? "Solved!" : ""}`,
          ];
        return [
          ...acc,
          `Empty bucket X. ${i === sol.length - 1 ? "Solved!" : ""}`,
        ];
      }
      if (curX - prevX === 0 && curY - prevY !== 0) {
        //Fill or empty Y
        if (curY - prevY > 0)
          return [
            ...acc,
            `Fill bucket Y.  ${i === sol.length - 1 ? "Solved!" : ""}`,
          ];
        return [
          ...acc,
          `Empty bucket Y. ${i === sol.length - 1 ? "Solved!" : ""}`,
        ];
      }
    } else {
      if (val[0] > 0) return [...acc, "Fill bucket X"];
      else return [...acc, "Fill bucket Y"];
    }
  }, []);
};

const Table = styled.table`
  border: 1px solid #ddd;
  border-radius: 4px;

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #597f81;
    color: white;
  }

  &td {
    color: white;
  }
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-top: 2rem;
`;

export default function Solution({ sol }) {
  let parsed = sol && parseSolution(sol);
  if (sol)
    return (
      <Table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {parsed.map((r, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{r}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  return (
    <div>
      <StyledH2>No solution! Try new values</StyledH2>
    </div>
  );
}
