import React, { useEffect, useState } from "react";
import { arrayOf, func, shape } from "prop-types";
import { connect } from "react-redux";
import { fetch } from "../../sstore/actions";
import Event from "./Event";

const Events = ({ fetch, pages, posts }) => {
  const [wp, setWp] = useState(null);
  useEffect(() => {
    const wpData = pages.find(x => x.post_name === "events");
    setWp(wpData.post_content);
    fetch("posts");
  }, []);
  if (wp) {
    const events = posts.map((event, index) => {
      return (
        <Event
          key={index}
          layouts={event.acf.layouts}
          title={event.post_title}
        />
      );
    });

    return (
      <div className="y-center">
        <h1>Events Page</h1>
        {events}
      </div>
    );
  }
  return <div>One moment while we grab that for you.</div>;
};

Events.propTypes = {
  fetch: func,
  pages: arrayOf(shape({})),
  posts: arrayOf(shape({}))
};

const mapDispatchToProps = {
  fetch
};

const mapStateToProps = state => ({
  pages: state.pages,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
