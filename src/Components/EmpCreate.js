import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  // the false in the valchange() will make it not to show "Enter the name" in the first appearance of the website, it clears it off, and Vice Versa  */

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, phone, active };

    fetch("http://localhost:8000/Employee", {
      method: "POST",
      // POST: submits data to be processed by the resourced Identified by the url, i.e it will submit what you inputed in json(url) format
      // Post allow what you submit to move to the next page
      headers: { "content-type": "application/json" },
      // the headers make what you input to appear in the next page same as the body
      // the desire response format
      body: JSON.stringify(empdata),
      // it is used to send the data to the server, the format of the data in the body has been specified in the headers
      // the body work together with the header and convert the body(object) to a Json String "check for the Json"
    })
      .then((res) => {
        alert("saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        {/* offset is used to create a left margin on columns, the col expand the width with the number seize*/}
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="name"
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        /* onMuouseDown when you click on the save button an hover will pop up saying Please fill out this field  */
                        /* the true in the () will make it show "Enter the name" when you want to type and vice versa  */
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                        // form-contol make the input tag to be under the label(with border type)
                      ></input>
                      {name.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="phone no"
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EmpCreate;
