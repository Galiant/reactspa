import React, { useState } from "react";
import PropTypes from "prop-types";
import MeetingList from "./MeetingList";

const Meetings = ({ addMeeting, meetings }) => {
  const [meetingName, setMeetingName] = useState("");

  const handleChange = (event, setItem) => {
    return setItem(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addMeeting(meetingName);
    setMeetingName("");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="font-weight-light">Add a Meeting</h1>
          <div className="card bg-light">
            <div className="card-body text-center">
              <form className="formgroup" onSubmit={handleSubmit}>
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    name="meetingName"
                    placeholder="Meeting name"
                    aria-describedby="buttonAdd"
                    value={meetingName}
                    onChange={e => handleChange(e, setMeetingName)}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-sm btn-info"
                      id="buttonAdd"
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-11 col-md-6 text-center">
          <div className="card border-top-0 rounded-0">
            {meetings && meetings.lenght ? (
              <div className="card-body py-2">
                <h4 className="card-title font-weight-light m-0">
                  Your Meetings
                </h4>
              </div>
            ) : null}

            {/* {meetings && (
              <div className="list-group list-group-flush">
                <MeetingList meetings={meetings} />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

Meetings.propTypes = {
  addMeeting: PropTypes.string,
  meetings: PropTypes.object,
};

export default Meetings;
