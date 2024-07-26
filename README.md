# Water Jug Challenge

The challenge involves using two jugs with different capacities (X gallons and Y gallons) to measure exactly Z gallons of water.

## My approach to the challenge

I see this problem as a graph in which the nodes are the state of the two jugs (x jug filled capacity, y jug filled capacity) and 3 possible new states are derived from each node. These 3 new nodes are the outcome of the 3 actions we can carry out on the jugs (fill, empty or pour). In this specific case, the edges of the graph are unweighted, because each step or action "cost" the same.

To solve this kind of problems there is a classic algorithm called BFS. BFS searches a graph from the root one depth at a time. As it checks all the nodes in the same depth for the solution before going to the next level, if a solution exists, it will find the shortest path to it.

## How to run the program

To run the app in local, follow these steps:

1. Clone this repository using `git clone https://github.com/Manu146/water-jug-challenge.git` or the **Clone repo** button.

2. Navigate to the cloned repo using a terminal (bash, cmd, powershell).

3. Once in the root of the folder, run `npm run dev` to start the project in your computer. You can now open the project via the link provided in the terminal.

## Live demo

The project is hosted on Github Pages. You can access right here: https://github.com/Manu146/water-jug-challenge
