
export const userLoginFetch = user => {
    
      return fetch("/token", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
           alert("success");
          } else {
            localStorage.setItem("token", data.jwt) 
          }
        })
    
  }