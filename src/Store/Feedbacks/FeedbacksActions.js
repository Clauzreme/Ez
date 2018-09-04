export const saveFeedbacks = (feedbacks, lastDoc) => {
  console.log(lastDoc)
  return {
    type: 'saveFeedbacks',
    feedbacks,
    lastDoc,
  }
}
