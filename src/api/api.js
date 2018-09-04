import firebase from 'firebase'

import { apiKey, authDomain, projectId } from '../configs/configs'

require('firebase/firestore')

firebase.initializeApp({
  apiKey,
  authDomain,
  projectId,
})

export const db = firebase.firestore()

const settings = { timestampsInSnapshots: true }
db.settings(settings)

class API {
  async fetchFeedbacks(lastDoc) {
    let dbRef

    if (lastDoc) {
      dbRef = db
        .collection('feedback')
        .where('hidden', '==', false)
        .orderBy('time', 'desc')
        .startAfter(lastDoc)
        .limit(25)
    } else {
      dbRef = db
        .collection('feedback')
        .where('hidden', '==', false)
        .orderBy('time', 'desc')
        .limit(25)
    }

    const newFeedbacks = []

    try {
      const querySnapshot = await dbRef.get()
      let newLastDoc
      querySnapshot.forEach(doc => {
        const data = doc.data()
        delete data.email
        delete data.hidden
        newLastDoc = doc
        newFeedbacks.push(data)
      })
      if (newFeedbacks.length) {
        return { newFeedbacks, newLastDoc }
      } else {
        throw { reason: 'empty' }
      }
    } catch (err) {
      throw err
    }
  }

  async submitFeedback(feedback) {
    try {
      await db
        .collection('feedback')
        .doc(JSON.stringify(feedback.time))
        .set(feedback)

      await db
        .collection('time')
        .doc('lastUpdated')
        .set(feedback)

      return {}
    } catch (err) {
      throw err
    }
  }
}

export default new API()
