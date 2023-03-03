export const getEventIndexById = (allEventData, selecetedEventDataId) => {
  return allEventData.findIndex(
    (eachEventData) => eachEventData.id === selecetedEventDataId
  );
};

export const updateEventData = (
  updatedEventData,
  allEventData,
  setAllEventData
) => {
  const eventDataIndex = getEventIndexById(allEventData, updatedEventData.id);
  setAllEventData([
    ...allEventData.slice(0, eventDataIndex),
    updatedEventData,
    ...allEventData.slice(eventDataIndex + 1),
  ]);
};

export const returnThemeColor = (themeData) => {
  const color = themeData.themes.filter(
    (th) => th.id === themeData.preferredThemeId
  );
  return color[0].colorHexCode;
};

export const dateGetter = (timeStamp) => {
  const date = new Date(timeStamp);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return `${day} ${month}, ${year} ${time}`;
};
export default dateGetter;
