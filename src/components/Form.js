import React, { Component } from "react";
class Form extends Component {
  render() {
    const { handleSubmit, getWeb, web, links, setLink } = this.props;
    return (
      <form
        onSubmit={(click) => {
          click.preventDefault();
          handleSubmit();
        }}
      >
        <div style={{ marginLeft: "210px" }}>
          <div style={{ marginBottom: "12px" }}>
            <div
              style={{ fontSize: "12px", fontWeight:500, marginBottom: "6px" }}
            >
              {" "}
              Name of Page{" "}
            </div>
            <input
              value={web}
              onChange={(event) => getWeb(event.target.value)}
              type="web"
              name="web"
              color="#000eee"
              style={{ width: "80%", padding: "5px", borderRadius: "3px" }}
            />
          </div>
          <div>
            <div
              style={{ fontSize: "12px", fontWeight: 500, marginBottom: "6px" }}
            >
              {" "}
              Link To Page{" "}
            </div>
            <input
              value={links}
              onChange={(event) => setLink(event.target.value)}
              type="link"
              name="link"
              style={{ width: "80%", padding: "5px", borderRadius: "3px" }}
            />
          </div>
          <div style={{ width: "40px", height: "50px", marginTop: "6px" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#4d934d",
                color: "black",
                fontSize: "16px",
                fontWeight: 'bold',
                width: "90px",
                height: "45px",
                cursor: "pointer",
                borderRadius: "1px",
              }}
            >
              Add Link
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Form;