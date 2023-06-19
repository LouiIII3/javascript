const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Time out")
    } else {
      success('here is your data form ${url}')
    }
  }, delay)
  
  fakeRequestCallback('url,
      function (response) {
        console.log("IT wored!!!")
        console.log(response)
        fakeRequestCallback('url2,
            function (response) {
              console.log("IT wored!!!")
              console.log(response)
        })
  }, function (err) {
    console.log("ERROR!!",err)
  })
          
