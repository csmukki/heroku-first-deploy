import React from "react";
import Homepage from "./homepage";

import { connect } from "react-redux";

function App({ currentUser }) {
  return (
    <div>
      {Object.keys(currentUser).length ? (
        <h2>Welcome {currentUser.username}</h2>
      ) : (
        <h2>Need to login First...</h2>
      )}
      <Homepage />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
