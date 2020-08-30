import React from "react";
import PropTypes from "prop-types";
import { GoTrashcan } from "react-icons/go";

const AttendeesList = ({ attendees, adminUser, userID, meetingId }) => {
  const admin = adminUser === userID ? true : false;
  const myAttendees = attendees.map(item => {
    return (
      <div
        className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
        key={item.attendeeId}
      >
        <div className="card ">
          <div
            className={
              "card-body px-3 py-2 d-flex align-items-center " +
              (admin ? "" : "justify-content-center")
            }
          >
            {admin && (
              <div className="btn-group pr-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  title="Delete Attendee"
                  //   onClick={e => deleteAttendee(e, meetingId, item.attendeeId)}
                >
                  <GoTrashcan />
                </button>
              </div>
            )}
            <div>{item.attendeeName}</div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row justify-content-center">{myAttendees}</div>;
};

AttendeesList.propTypes = {
  attendees: PropTypes.array,
  adminUser: PropTypes.string,
  userID: PropTypes.string,
  meetingId: PropTypes.string,
};

export default AttendeesList;
