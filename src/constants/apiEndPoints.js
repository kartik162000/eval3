export const BACKEND_URL = "http://localhost:8000/";

export const GET_ALL_EVENT_DATA = {
  url: "api/events",
  method: "get",
};

export const GET_EVENT_DATA = (id) => ({
  url: `api/events/${id}`,
  method: "get",
});

export const UPDATE_EVENT_DATA = (id) => ({
  url: `api/events/${id}`,
  method: "patch",
});

export const GET_ALL_THEMES = {
  url: "api/themes",
  method: "get",
};
