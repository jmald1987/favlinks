import { useState } from "react";
import Table from "./Table";
import Form from "./Form";
const LinkContainer = (props) => {
  const [project, getprojects] = useState([]);
  const [web, getWeb] = useState("");
  const [links, getLink] = useState("");
  const handleRemove = () => {
  
  };
  const handleSubmit = () => {
    if (web === "" && links === "") {
      alert("Fill the blank accordingly");
    }
    if (web !== "" && links !== "") {
      const obj = { web: web, links: links };
      getprojects([...project, obj]);
      getWeb("");
      getLink("");
    }
  };
  return (
    <div className="container" style={{ display: "block" , color:"#99c199"} }>
      <h1 style={{ marginLeft: "200px" }}>My Favorite Links</h1>
      <p style={{ marginLeft: "200px" }}>
        Add a new url with a name and link to the table.
      </p>
      <Table removeLink={handleRemove} props={project} />
      <br />
      <h3 style={{ marginLeft: "200px" }}>Add New Link Below</h3>
      <Form
        handleSubmit={handleSubmit}
        getWeb={getWeb}
        web={web}
        links={links}
        setLink={getLink}
      />
    </div>
  );
};
export default LinkContainer;