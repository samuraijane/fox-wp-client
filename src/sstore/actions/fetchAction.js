import axios from "axios";
import API from "../../api";
import * as types from "./actionTypes";
import groupBy from "./utils/groupBy";

const options = {
  headers: {
    "Custom-Origin": "http://localhost:3001",
    "Cache-Control": "max-age=86400",
  },
};

export const fetch = (type) => (dispatch) => {
  if (type === "classes") dispatch(fetchClasses());
  if (type === "navs") dispatch(fetchNavs());
  if (type === "posts") dispatch(fetchPosts());
  if (type === "register") dispatch(fetchRegister());
  //if (type === "token") dispatch(fetchAuthToken());
};
const wpUrl = "https://zorro.matthewday.net";
// eslint-disable-next-line no-unused-vars
const fetchAuthToken = () => (dispatch) => {
  axios({
    method: "post",
    url: "/auth",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // }).then(data => dispatch(fetchSuccess("token", data)));
  }).then(token => localStorage.setItem("udfToken", token))
  .catch(error => console.error('Error attempting to reach database', error.message))
  // .catch(error => dispatch(fetchFail("token", error)));
};

// eslint-disable-next-line no-unused-vars
const fetchClasses = (classes) => (dispatch) => {
  axios
    .get(`${wpUrl}${API.classes}`, options)
    .then((response) => {
      if (response && response.data && response.status === 200) {
        dispatch(fetchSuccess("classes", response.data.acf.classes));
      }
      // TODO deal with responses that are not 200
    })
    .catch((error) => {
      console.error(error);
    });
};

const fetchNavs = () => (dispatch) => {
  axios
    .get(`${wpUrl}${API.navs}`, options)
    .then((response) => {
      if (response && response.data && response.status === 200) {
        dispatch(fetchPages(response.data));
        dispatch(setNavsCount(response.data.length));
        dispatch(fetchSuccess("navs", response.data));
      }
      // TODO deal with responses that are not 200
    })
    .catch((error) => {
      console.error(error);
    });
};

const fetchPages = (pages) => (dispatch) => {
  pages.map((page) => {
    const url = `${wpUrl}/${API.page}/${page.object_id}`;
    // axios.get(URL, { params:{}, headers: { 'Authorization': AuthStr } })
    axios
      .get(url, options)
      .then((response) => {
        if (response && response.data && response.status === 200) {
          dispatch(fetchSuccess("page", response.data));
        }
        // TODO deal with responses that are not 200
      })
      .catch((error) => dispatch(fetchFail("pages", error)));
  });
};

const fetchPosts = () => (dispatch) => {
  const url = `${wpUrl}/wp-json/udf/v1/posts`;
  // axios.get(URL, { params:{}, headers: { 'Authorization': AuthStr } })
  axios
    .get(url, options)
    .then((response) => {
      if (response && response.data && response.status === 200) {
        dispatch(setPostsCount(response.data.length));
        dispatch(fetchSuccess("posts", response.data));
      }
      // TODO deal with responses that are not 200
    })
    .catch((error) => dispatch(fetchFail("posts", error)));
};

// eslint-disable-next-line no-unused-vars
const fetchRegister = (headers) => (dispatch) => {
  const theToken = localStorage.getItem("udfToken");
  axios
    .get(`${wpUrl}${API.register}`, {
      headers: {
        Authorization: `Bearer ${theToken}`,
      },
    })
    .then((response) => {
      const body = JSON.parse(response.data.body, null, 4);
      if (response && response.data && response.status === 200) {
        dispatch(fetchSuccess("register", body.fields));
      }
      // TODO deal with responses that are not 200
    })
    .catch((error) => dispatch(fetchFail("register", error)));
};

const fetchFail = (type, error) => {
  console.error(`The fetch for ${type} failed with error ${error}`);
};

const fetchSuccess = (type, data) => {
  if (type === "classes") {
    return {
      type: types.SET_CLASSES,
      data,
    };
  }
  if (type === "navs") {
    return {
      type: types.SET_NAVS,
      data,
    };
  }
  if (type === "page") {
    return {
      type: types.SET_PAGES,
      data,
    };
  }
  if (type === "posts") {
    return {
      type: types.SET_POSTS,
      data,
    };
  }
  if (type === "register") {
    const grouped = groupBy(data, 'cssClass');
    return {
      type: types.SET_REGISTER_FIELDS,
      data: grouped
    };
  }
  if (type === "token") {
    return {
      type: types.SET_TOKEN,
      data,
    };
  }
};

const setNavsCount = (navsCount) => {
  return {
    type: types.SET_STATS_NAVS_COUNT,
    navsCount,
  };
};

const setPostsCount = (postsCount) => {
  return {
    type: types.SET_STATS_POSTS_COUNT,
    postsCount,
  };
};
