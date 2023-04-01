import { createStore } from 'vuex'

import { getAuth } from "firebase/auth";
import app from "../../firebase";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export default createStore({
  state: {
    patients: []
  },
  getters: {
  },

  mutations: {
    async getPatients(state) {
      const parentDocRef = doc(db, "Users", auth.currentUser.email);

      const subCollectionRef = collection(parentDocRef, "Patients");

      state.patients = [];
      const querySnapshot = await getDocs(subCollectionRef);
      querySnapshot.forEach((doc) => {
        state.patients.push(doc.data());
      });
    }
  },

  actions: {
  }
})
