import axios from "axios";
import API from "../../api";
import { wpUrl } from "../../config.js";
import * as types from "./actionTypes";

const options = {
  headers: {
    "Custom-Origin": "http://localhost:3001",
    "Cache-Control": "max-age=86400"
  }
};

export const fetch = type => dispatch => {
  if (type === "navs") dispatch(fetchNavs());
  if (type === "posts") dispatch(fetchPosts());
  if (type === "register") dispatch(fetchRegister());
  if (type === "token") dispatch(fetchAuthToken());
};

// eslint-disable-next-line no-unused-vars
const fetchAuthToken = () => dispatch => {
  axios({
    method: "post",
    url: `${wpUrl}${API.token}`,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    auth: {
      username: "XdkMOvj1TGS5fRyucaR0FUOTTAzLP7FNkZz8vSap",
      password: "z2uOU2i7ca7R4WLYwkJmrp9MpIVUB5ja8OY3Qha3"
    },
    data: {
      grant_type: "password",
      username: "matt",
      password: "wc7WZ1#cR)4TaJ^uhc"
    }
    // }).then(data => dispatch(fetchSuccess("token", data)));
  }).then(data => localStorage.setItem("udfToken", data.data.access_token));
  // .catch(error => dispatch(fetchFail("token", error)));
};

const fetchNavs = () => dispatch => {
  axios
    .get(`${wpUrl}${API.navs}`, options)
    .then(response => {
      if (response && response.data && response.status === 200) {
        dispatch(fetchPages(response.data));
        dispatch(fetchSuccess("navs", response.data));
      }
      // TODO deal with responses that are not 200
    })
    .catch(error => {
      console.error(error);
    });
};

const fetchPages = pages => dispatch => {
  pages.map(page => {
    const url = `${wpUrl}/${API.page}/${page.object_id}`;
    // axios.get(URL, { params:{}, headers: { 'Authorization': AuthStr } })
    axios
      .get(url, options)
      .then(response => {
        if (response && response.data && response.status === 200) {
          dispatch(fetchSuccess("page", response.data));
        }
        // TODO deal with responses that are not 200
      })
      .catch(error => dispatch(fetchFail("pages", error)));
  });
};

const fetchPosts = () => dispatch => {
  const url = `${wpUrl}/wp-json/udf/v1/posts`;
  // axios.get(URL, { params:{}, headers: { 'Authorization': AuthStr } })
  axios
    .get(url, options)
    .then(response => {
      if (response && response.data && response.status === 200) {
        dispatch(fetchSuccess("posts", response.data));
      }
      // TODO deal with responses that are not 200
    })
    .catch(error => dispatch(fetchFail("posts", error)));
};

// eslint-disable-next-line no-unused-vars
const fetchRegister = headers => dispatch => {
  const theToken = localStorage.getItem("udfToken");
  axios
    .get(`${wpUrl}${API.register}`, {
      headers: { Authorization: `Bearer ${theToken}` }
    })
    .then(response => {
      if (response && response.data && response.status === 200) {
        dispatch(fetchSuccess("register", response.data));
      }
      // TODO deal with responses that are not 200
    })
    .catch(error => dispatch(fetchFail("register", error)));
};

const fetchFail = (type, error) => {
  console.log(`The fetch for ${type} failed with error ${error}`);
};

const fetchSuccess = (type, data) => {
  if (type === "navs") {
    return {
      type: types.SET_NAVS,
      data
    };
  }
  if (type === "page") {
    return {
      type: types.SET_PAGES,
      data
    };
  }
  if (type === "posts") {
    return {
      type: types.SET_POSTS,
      data
    };
  }
  if (type === "register") {
    return {
      type: types.SET_REGISTER_FIELDS,
      data
    };
  }
  if (type === "token") {
    return {
      type: types.SET_TOKEN,
      data
    };
  }
};
