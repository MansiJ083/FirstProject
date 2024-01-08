const createPost = (user, post) =>
  new Promise(resolve =>
    setTimeout(() =>
      resolve({ user, post }), 1000
    )
  );

const updateLastUserActivityTime = user =>
  new Promise(resolve =>
    setTimeout(() =>
      resolve(new Date()), 1000
    )
  );

const deletePost = post =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(`Post deleted: ${post.user} - ${post.post}`);
      resolve();
    }, 1000)
  );

const user = "JohnDoe";

Promise.all([
  createPost(user, "Hello, world!"),
  updateLastUserActivityTime(user)
])
  .then(([newPost, lastActivityTime]) =>
    console.log(`Post created: ${newPost.user} - ${newPost.post}\nLast Activity Time: ${lastActivityTime}`)
  )
  .then(() => deletePost({ user, post: "Hello, world!" }))
  .then(() => console.log("Remaining posts after deletion:"))
  .catch(error => console.error("Error:", error));
