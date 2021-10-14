// A small project inspired by codementor.io 
// Select input element id -> get its value
let getInputValue = function () {
        let inputVal = document.getElementById("long_url").value;


        //send to bitly API https://dev.bitly.com/
        fetch('https://api-ssl.bitly.com/v4/shorten', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer {c4ba62f9950dea0b6f4c9ccbe09ed4196687e0e1}',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "long_url": inputVal, "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
        });


        // Manipulate html with input value
        document.getElementById("shortUrl").innerText = inputVal;
      }


// fetch('https://api-ssl.bitly.com/v4/shorten', {
//     method: 'POST',
//     headers: {
//         'Authorization': 'Bearer {c4ba62f9950dea0b6f4c9ccbe09ed4196687e0e1}',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "long_url": "inputVal", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
// });



//POST - push value to API server, GET - retrieves info, use to manipulate html



//manipulate <p> to the shortened url
