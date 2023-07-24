import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();
  // useParams is use to extract data from the url, and pass to the component as a parameter

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/Employee/" + empid)
      // the empid to retrieve data, if you want the data to appear in the next page
      .then((res) => {
        return res.json();
        // the retrieve data is in form of Json object
      })
      .then((resp) => {
        empdatachange(resp);
        // Then, the returned data is passed to the empdatachange function to update the component state with the fetched data.
        // useState hook is used to create a state variable empdata and a state update function empdatachange to store the employee data fetched from the server.
      })
      .catch((err) => {
        console.log(err.message); //incase of error, it will log the error to the console
      });
  }, []);
  // the array [] means that it should run once
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee create</h2>
        </div>
        <div className="card-body"></div>

        {empdata && (
          <div>
            <h2>
              The Employee name is : {empdata.name} ({empdata.id})
            </h2>
            <h3>Contact Details</h3>
            <h5>Email is : {empdata.email}</h5>
            <h5>Email is : {empdata.phone}</h5>
            <Link className="btn btn-danger" to="/">
              Back to Listing
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default EmpDetail;
