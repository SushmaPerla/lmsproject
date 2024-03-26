import React from "react";
import PNavbar from "../PComponents/PNavbar";

const PProfile = () => {
  return (
    <div>
      <PNavbar/>
      <div>
        <Link to="/dashboard">
          <IoMdArrowRoundBack />
          Back
        </Link>
      </div>
      <div className="bg-purple-400 flex flex-col mx-20 gap-6 my-20 p-20 text-xl rounded-3xl ">
        <h1 className="font-bold text-3xl text-center">STUDENT DATA</h1>
        <div className="flex flex-row justify-between">
          <div>
            {" "}
            <p>
              <p>
                <span className="font-bold ">Student Status:</span> Active
              </p>
              <span className="font-bold">Name:</span> G.Rakesh
            </p>
            <p>
              <span className="font-bold">Regd.no:</span> 540
            </p>
            <p>
              <span className="font-bold">Mail id:</span>{" "}
              gudla.rakesh.14@gmail.com
            </p>
            <p>
              <span className="font-bold">Year:</span> 4th Year
            </p>
            <p>
              <span className="font-bold">Semester:</span> 2nd semester
            </p>
            <p>
              <span className="font-bold">Branch:</span> CSE(Computer Science &
              Engineering)
            </p>
            <p>
              <span className="font-bold">Overall Percentage: </span> 65%
            </p>
            <p>
              <span className="font-bold">Parents Details: </span>
              <br />
              Father Name: G.V.Satyanarayana <br />
              Mother Name: G.Rajyalakshmi
            </p>
            <p>
              <span className="font-bold">Address:</span> Sheelanagar
            </p>
            <p>
              <span className="font-bold">Pincode:</span> 530012
            </p>
            <p>
              <span className="font-bold">City:</span> Visakhapatnam
            </p>
            <p>
              <span className="font-bold">State:</span> Andhra Pradesh
            </p>
          </div>
          <div>
            <CgProfile size={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PProfile;
