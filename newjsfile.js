//embeeding variables
const name = "Charishma";
//we can also take as firstName and lastName
const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Charishma", lastName: "Krishna" };
const className = "greeting";
//const element = <h1 className="greeting">Hello Dileep</h1>;
//Now embedding that variables
//   const element = <h1 className={className}> Hello {fullName(user)}</h1>;
//nested jsx elements
const element = (
  <div>
    <h1 className={className}> Hello {fullName(user)}</h1>
    <p>Good to see you here.</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
