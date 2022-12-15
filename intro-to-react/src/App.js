// capitalise naming for every component
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {}, // where to set the attributes ie. style tag, class name, id
    [
      React.createElement("h1", {}, "Adopt me!"), // children of the parent element
      React.createElement(Pet, {
        animal: "Dog",
        name: "T-Rex",
        breed: "Aspin",
      }),
      React.createElement(Pet, {
        animal: "Dog",
        name: "Mona",
        breed: "Aspin",
      }),
      React.createElement(Pet, {
        animal: "Benjie",
        name: "T-Rex",
        breed: "Husky/Belgian",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
