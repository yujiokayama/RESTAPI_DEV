window.addEventListener("load", function() {
  const createBtn = document.querySelector("#CREATE");
  const readBtn = document.querySelector("#READ");
  const updateBtn = document.querySelector("#UPDATE");
  const deleteBtn = document.querySelector("#DELETE");
  const dataReportList = document.querySelector(
    "#dataReportList > table > tbody"
  );
  const url = "http://localhost:3000";

  /**
   * GET
   */
  readBtn.addEventListener("click", () => {
    async function getRequest() {
      // ファイルを読み込む
      const data = await fetch(url + "/articles/", {
        method: "GET"
      });
      // JSONとして解析
      const obj = await data.json();
      for (var i = 0; i < obj.length; i++) {
        dataReportList.insertAdjacentHTML(
          "beforeend",
          `<tr><td>${obj[i].id}</td><td>${obj[i].title}</td><td>${obj[i].author}</td></tr>`
        );
      }
    }
    getRequest();
  });

  /**
   * POST
   */
  createBtn.addEventListener("click", () => {
    async function postRequest() {
      await fetch(url + "/articles/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: "react",
          author: "facebook"
        })
      });
    }
    postRequest();
  });
});
