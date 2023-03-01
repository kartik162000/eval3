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
