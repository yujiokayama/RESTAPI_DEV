const createBtn = document.querySelector("#CREATE");
const readBtn = document.querySelector("#READ");
const updateBtn = document.querySelector("#UPDATE");
const deleteBtn = document.querySelector("#DELETE");
const myPokemon = document.querySelector("#MY_POKEMON table tbody");
const url = "http://localhost:3000";

// getRequest();

/**
 * GET
 */
async function getRequest() {
  const data = await fetch(url + "/pokemon", {
    method: "GET"
  });
  const obj = await data.json();
  let elements = "";
  for (var i = 0; i < obj.length; i++) {
    elements += `<tr><td>${obj[i].name}</td><td>${obj[i].level}</td><td>${obj[i].type}</td></tr>`;
  }
  myPokemon.innerHTML = elements;
}

/**
 * POST
 */
async function postRequest() {
  await fetch(url + "/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: null,
      name: "ピカチュウ",
      level: 3,
      type: ["かみなり"]
    })
  });
}

/**
 * POST(xmlhttprequest)
 */

function xhrPostRequest() {
  var data = {
    id: null,
    name: "ピカチュウ",
    level: 3,
    type: ["かみなり"]
  };
  var json = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url + "/pokemon", true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function() {
    var pokemon = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
      console.table(pokemon);
    } else {
      console.error(pokemon);
    }
  };
  xhr.send(json);
}
/**
 * PUT
 */
async function putRequest() {
  await fetch(url + "/pokemon/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: null,
      name: "コイキング",
      level: 10,
      type: ["みず"]
    })
  });
}

/**
 * DELETE
 */
async function deleteRequest() {
  await fetch(url + "/pokemon/1", {
    method: "DELETE"
  });
}

readBtn.addEventListener("click", getRequest);
createBtn.addEventListener("click", xhrPostRequest);
updateBtn.addEventListener("click", putRequest);
deleteBtn.addEventListener("click", deleteRequest);
