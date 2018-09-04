export const saveFeedbacks = (feedbacks, lastDoc) => {
  return {
    type: 'saveFeedbacks',
    feedbacks,
    lastDoc,
  }
}
