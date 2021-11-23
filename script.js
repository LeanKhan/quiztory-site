// /*
// This is your site JavaScript code - you can add interactivity and carry out processing
// - Initially the JS writes a message to the console, and moves a button you can add from the README
// */

// // Print a message in the browser's dev tools console each time the page loads
// // Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

// document.forms[0].attachEvent("onsubmit", function(evt) {
//   console.log(evt);
//   evt.preventDefault();
//   submit();
// });

// function submit() {
//   const title = document.getElementsByName("article")[0].value;

//   if (!title) {
//     return false;
//   }

//   const url = URL("https://5d8a-35-221-201-191.ngrok.io/questions");

//   url.searchParams.append("article", title);

//   axios.get(url).then(response => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);

//     let html = "<ul>";

//     response.data.questions.forEach(q => {
//       `<li>` + q.q;
//     });

//     document.getElementById("qs").innerHtml = JSON.stringify(response.data);
//   });
// }
