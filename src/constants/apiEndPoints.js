export const BACKEND_URL = "http://localhost:8000/";

export const GET_ALL_EVENT_DATA = {
  url: "api/events",
  method: "get",
};

export const UPDATE_BLOG_DATA = (id) => ({
  url: `api/events/${id}`,
  method: "patch",
});
