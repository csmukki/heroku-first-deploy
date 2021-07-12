import React from "react";
import Homepage from "./homepage";

import { connect } from "react-redux";
import { selectCurrentUserName } from "./redux/user/user.selectors";

function App({ username }) {
  return (
    <div>
      {username ? <h2>Welcome {username}</h2> : <h2>Need to login First...</h2>}
      <Homepage />
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: selectCurrentUserName(state),
});

export default connect(mapStateToProps)(App);
