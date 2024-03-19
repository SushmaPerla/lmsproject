import React from "react";

const Table = () => {
  return (
    <div>
      <h1>Course Timetable</h1>

      <table>
        <caption>Weekly Timetable</caption>
        <thead>
          <tr>
            <th>Timing</th>
            <th colSpan="2">Monday</th>
            <th colSpan="2">Tuesday</th>
            <th colSpan="2">Wednesday</th>
            <th colSpan="2">Thursday</th>
            <th colSpan="2">Friday</th>
            <th colSpan="2">Saturday</th>
          </tr>
          <tr>
            <th>Start Time</th>
            <th>AM</th>
            <th>PM</th>
            <th>AM</th>
            <th>PM</th>
            <th>AM</th>
            <th>PM</th>
            <th>AM</th>
            <th>PM</th>
            <th>AM</th>
            <th>PM</th>
            <th>AM</th>
            <th>PM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>09:10 - 10:00</td>
            <td>API</td>
            <td>API</td>
            <td>ASN</td>
            <td></td>
            <td>API</td>
            <td>SCT</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>SCT</td>
            <td>API</td>
          </tr>
          <tr>
            <td>10:00 - 11:00</td>
            <td></td>
            <td></td>
            <td>ASN</td>
            <td>ASN</td>
            <td>SCT</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>API</td>
            <td>API</td>
          </tr>
          <tr>
            <td>11:00 - 11:50</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11:50 - 12:40</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>ETHICAL HACKING</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>01:30 - 02:20</td>
            <td>DLT</td>
            <td></td>
            <td>DLT</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>ETHICAL HACKING</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>02:20 - 03:10</td>
            <td></td>
            <td>ASN</td>
            <td></td>
            <td>SCT</td>
            <td></td>
            <td>ICT</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>03:10 - 04:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>P-DL LAB</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
