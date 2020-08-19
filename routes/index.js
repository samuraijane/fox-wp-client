const axios = require('axios');
const express = require('express');
const router = express.Router();

// -----------------------------------------------------------------------------
//                                    DELETE
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
//                                    GET ALL
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
//                                  GET SINGLE
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
//                                     POST
// -----------------------------------------------------------------------------
router.post('/', (req, res) => {
  axios({
    method: "post",
    url: `${process.env.BASE_URL_WP}/?oauth=token`,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    data: {
      grant_type: process.env.GRANT_TYPE,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      password: process.env.PASSWORD_DEFAULT,
      username: process.env.USERNAME_DEFAULT,
    },
  })
    .then(data => res.json({token: data.data.access_token}))
    .catch(error => res.json({error: error.message}));
  });


// -----------------------------------------------------------------------------
//                                      PUT
// -----------------------------------------------------------------------------



module.exports = router;
