export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

//call new route in API client file
export const getDiyPosts = async () => {
  const response = await fetch("/api/posts");
  return response.json();
};

export const getDiyPost = async (id) => {
  const response = await fetch(`/api/posts/${id}`);
  return response.json();
};

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
