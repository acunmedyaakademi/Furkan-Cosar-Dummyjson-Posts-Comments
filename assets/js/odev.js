async function getData(postId) {
  let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
  let {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());
 
  postLists.innerHTML += `<div class="post">
                              <h2 id="title">${post.title}</h2>
                              <p id="body">${post.body}</p> 
                              <ul id="postInformation">${comments.map( x => `<li  class="userStat">    <img src="./assets/img/profile_photo.png" alt="">    <div class="userNames"><p class = "userNickName">${x.user.fullName}</p><p>${x.body}</p></div></li>`).join('')}</ul>
                          </div>`;
}

for (let i = 1; i < 31; i++) {  
    getData(i);
}