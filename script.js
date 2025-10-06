// Grab DOM elements
const form = document.getElementById("post-form");
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const titleError = document.getElementById("title-error");
const bodyError = document.getElementById("compose-error");
const postsList = document.getElementById("posts-list");
const composeTitle = document.getElementById("compose-title");
const saveBtn = document.getElementById("btn-save-post");

// Put posts in array, save to localStorage
const STORAGE_KEY = "millan_blog_posts_v1";
let posts = [];

// Creates unique id for post using date
function uID() {
  const d = new Date();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  const time = d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();

  return `${month}/${day}/${year} Time:${time}`;
}

// console.log(uID());
// console.log(uID());

// Uses li class in html as a template then removes it
const templateLi = document.querySelector(".post");
templateLi.remove();

// Renders posts using document fragment
function renderPosts() {
  postsList.innerHTML = "";

  const frag = document.createDocumentFragment();

  posts.forEach((p) => {
    const li = templateLi.cloneNode(true);
    li.dataset.id = p.id;
    li.querySelector(".post-title").textContent = p.title;
    li.querySelector(".post-content").textContent = p.body;
    frag.appendChild(li);
  });

  postsList.appendChild(frag);

  const renderedItems = postsList.querySelectorAll(".post");
  renderedItems.forEach((el, index) => {
    el.dataset.pos = String(index + 1);
  });
}
