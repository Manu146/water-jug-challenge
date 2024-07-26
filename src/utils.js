function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function validateInputs(x, y, z) {
  const onlyPositives = x > 0 && y > 0 && z > 0;
  const enoughtCap = x > z || y > z;
  let n = gcd(x, y);

  return onlyPositives && enoughtCap && z % n === 0;
}

function computeSolution(jug1Capacity, jug2Capacity, target) {
  const visited = new Set();
  const queue = [[0, 0, []]]; // [jug1, jug2, path]

  while (queue.length > 0) {
    const [jug1, jug2, path] = queue.shift();

    if (jug1 === target || jug2 === target) {
      return path;
    }

    const state = `${jug1},${jug2}`;
    if (!visited.has(state)) {
      visited.add(state);

      if (jug1 < jug1Capacity)
        queue.push([jug1Capacity, jug2, path.concat([[jug1Capacity, jug2]])]); // fill jug1
      if (jug2 < jug2Capacity)
        queue.push([jug1, jug2Capacity, path.concat([[jug1, jug2Capacity]])]); // fill jug2
      if (jug1 !== 0 && jug2 !== 0)
        queue.push([0, jug2, path.concat([[0, jug2]])]); // empty jug1
      if (jug2 !== 0 && jug1 !== 0)
        queue.push([jug1, 0, path.concat([[jug1, 0]])]); // empty jug2

      // pour from jug1 to jug2
      if (jug1 > 0) {
        const pour1to2 = Math.min(jug2Capacity - jug2, jug1);
        queue.push([
          jug1 - pour1to2,
          jug2 + pour1to2,
          path.concat([[jug1 - pour1to2, jug2 + pour1to2]]),
        ]);
      }

      // pour from jug2 to jug1
      if (jug2 > 0) {
        const pour2to1 = Math.min(jug1Capacity - jug1, jug2);
        queue.push([
          jug1 + pour2to1,
          jug2 - pour2to1,
          path.concat([[jug1 + pour2to1, jug2 - pour2to1]]),
        ]);
      }
    }
  }

  return false; // No solution found
}

// Example usage:
/*const jug1Capacity = 2;
  const jug2Capacity = 6;
  const target = 30;
  
  console.log(validateInputs(jug1Capacity, jug2Capacity, target));
  const solution = getSolution(jug1Capacity, jug2Capacity, target);
  if (solution) {
    console.log("Solution steps:");
    solution.forEach((step) => console.log(step));
  } else {
    console.log("No solution found");
  }*/

function getSolution(x, y, z) {
  if (validateInputs(x, y, z)) return computeSolution(x, y, z);
  return false;
}

export default getSolution;
