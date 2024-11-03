import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDEHZffTvMoyjO7qfJV18LPOQG8cHAvFRE',
  authDomain: 'rn-advanced-course.firebaseapp.com',
  projectId: 'rn-advanced-course',
  storageBucket: 'rn-advanced-course.appspot.com',
  messagingSenderId: '776966353842',
  appId: '1:776966353842:web:766ff8b87ecaf247066aab',
  measurementId: 'G-JJL16D7N2G'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
//export const auth = getAuth(app)
