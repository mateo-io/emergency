const  updateDB = (data) => {
    const configuration = {
       "Accept":"application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":"*"
     }
     const data2 = data;
     data2['open'] = false;
    const payload = JSON.stringify(data2)
    console.log("payload is ", payload)

    fetch('http://localhost:3000/api/calls', {
      method: 'POST',
      headers: configuration,
      body: payload
    }).then(function(response) {
      console.log("Sent data to the server")

    }).catch(function(err) {
      console.log("ERROR UPDATING CALL IN DB", err)
    });
  }

const  updateCallDB = (data) => {
    const configuration = {
       "Accept":"application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":"*"
     }
     const data2 = data;
     data2['open'] = false;
    const payload = JSON.stringify(data2)
    console.log("payload is ", payload)
    const id = data.id;
    console.log("ID IN UPDATE IS ", id)

    fetch(`http://localhost:3000/api/calls/${id}`, {
      method: 'PUT',
      headers: configuration,
      body: payload
    }).then(function(response) {
      console.log("Sent update data to the server")

    }).catch(function(err) {
      console.log("ERROR UPDATING CALL IN DB", err)
    });
  }

  export { updateDB, updateCallDB };
