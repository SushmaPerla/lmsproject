import Student from "./student.png";
import Parent from "./parent.jpeg";
import Admin from "./admin.png";
import Faculty from "./faculty.png";
import { Link } from "react-router-dom";

function Selection() {
  return (
    <div>
      <div className="flex justify-center ">
        <h1 className="text-4xl font-bold p-20 text-blue-600 ">
          WELCOME TO THE LMS PLATFORM
        </h1>
      </div>
      <div className="flex flex-row justify-around items-center py-20 px-20 justify-center  text-center">
        <div className=" text-4xl p-10 m-10 rounded-md drop-shadow-2xl ">
          {" "}
          <button>
            {" "}
            <Link to="/flogin">
              {" "}
              <img src={Faculty} />
              Faculty
            </Link>
          </button>
        </div>
        <div className=" text-4xl p-10 m-10 rounded-md drop-shadow-2xl">
          <button>
            {" "}
            <Link to="/plogin">
              <img src={Parent} />
              Parent
            </Link>
          </button>
        </div>
        <div className=" text-4xl  p-10 m-10 rounded-md drop-shadow-2xl ">
          <button>
            {" "}
            <Link to="/slogin">
              <img src={Student} />
              Student
            </Link>
          </button>
        </div>
        <div className=" text-4xl p-10 m-10 rounded-md drop-shadow-2xl">
          {" "}
          <button>
            {" "}
            <Link to="/alogin">
              <img src={Admin} />
              Admin
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selection;
