const Api = {
  _base: "http://localhost:5000/api/todos",

  _call: (method, params = {}) => {
    console.log("params", params);
    return new Promise(async (resolve, reject) => {
      fetch(Api._base, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: method == "GET" ? null : JSON.stringify({ ...params }),
        // mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => {
          if (response?.error) {
            reject(response.status.error_message);
          } else {
            resolve(response);
          }
        })
        .catch((error) => {
          reject(error.toString());
        });
    });
  },
};

export default Api;
