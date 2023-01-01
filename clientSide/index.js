const movies = document.getElementById("movies");

var tr = document.getElementsByClassName("me");
document.addEventListener("DOMContentLoaded", function (event) {
   fetch("http://localhost:3000/movies", {
      method: "GET",
      headers: {
         Accept: "application/json",
      },
   })
      .then((response) => response.json())
      .then((data) => {
         data.forEach((obj) => {
            movies.innerHTML += `
               
                <tr class="me">
                <td>
                <img class="movie-img" src="${obj.poster}"/>
                <a href="/">${obj.title}</a>
                <button onclick={deleteItem()} type="submit" id="delete-btn">Delete</button>
                </td>
                </tr>
            `;
         });
      })
      .catch((error) => {
         console.error("Error:", error);
      });
});

// const del = (e) => {
//    tr.remove();
// };

// let del = (e) => {
//    if (e.target.id === "delete-btn") {
//       fetch(`http://localhost:3000/movies/${movies._id}`, {
//          method: "DELETE",
//          headers: {
//             "content-type": "application/json",
//             Accept: "application/json",
//          },
//       })
//          .then((res) => res.json())
//          .then(() => {
//             tr.innerHTML = "";
//          });
//    }
// };

// function renderHomes(home) {
//    let deleteHome = document.createElement("button");
//    deleteHome.setAttribute("id", "delete-btn");
//    deleteHome.innerText = "delete listing";
//    deleteHome.addEventListener("click", function (event) {
//       console.log("test222 home id ", homeDiv.id);

//       if (event.target._id === "delete-btn") {
//          fetch(`http://localhost:3000/homes/${home.id}`, {
//             method: "DELETE",
//             headers: {
//                "content-type": "application/json",
//                accept: "application/json",
//             },
//          })
//             .then((resp) => resp.json())
//             .then(() => {
//                homeDiv.innerHTML = "";
//                const home = homeDiv.querySelector(`[data-id='${homeDiv.id}']`);
//                home.remove();
//             });
//       }
//    });
// }

window.addEventListener("DOMContentLoaded", function (event) {
   document.querySelectorAll("#delete-btn").forEach((el) => {
      el.onclick = () => deleteItem(el);
   });
});

function deleteItem(e) {
   e.parentElement.remove();
}
