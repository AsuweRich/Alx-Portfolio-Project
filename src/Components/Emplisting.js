import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Emplisting = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
    // if you check the db.json you will see that there is I.D
    // the I.D signifies all the items so since we are moving to the next page we carry all the item along with the I.D
    // same apply to others(like loadEdit, RemoveFunction e.t.c)
  };

  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/Employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/Employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp); //data fetched will save here
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="card-body">
            <Link to="employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata?.map((item) => (
                <tr key={item.id}>
                  {/* the i.d  here means the key items of all the map, that was used to identify the row. */}
                  {/* the key help react keep track of the elements and efficiently update the dom when the list change */}
                  {/* the map is used to iterate over an array with the same number of elements but with the elements modified in some way */}
                  <td>{item.id}</td>
                  {/* the id here signifies the number since key is not included it means the number */}
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <a
                      onClick={() => {
                        LoadEdit(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        RemoveFunction(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Remove
                    </a>
                    <a
                      onClick={() => {
                        LoadDetail(item.id);
                      }}
                      className="btn btn-primary"
                    >
                      Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Emplisting;
