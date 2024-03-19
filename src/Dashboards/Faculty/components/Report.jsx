import React from "react";

function Report() {
  return (
    <div>
      <div className="flex flex-col w-100">
        <h2 className="text-red-600 ">Day to day reports</h2>
        <form>
          <label htmlFor="daytodayreport">Day to day report Details:</label>
          <br />
          <textarea
            id="daytodayreport"
            name="daytodayreport"
            rows="10"
            cols="80"
          ></textarea>
          <br />
          <br />
          <button type="submit">Submit Assignment</button>
        </form>
      </div>
    </div>
  );
}

export default Report;
