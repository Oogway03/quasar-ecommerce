import { defineStore } from "pinia";
import { ref } from "vue";
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "boot/firebase";

export const useProdStore = defineStore(
  "products",
  () => {
    async function setProd(name, desc, qty, price, img) {
      const newProdRef = doc(collection(db, "products"));
      await setDoc(newProdRef, {
        name: name,
        description: desc,
        quantity: qty,
        price: price,
      });
    }

    async function getProd() {
      // const docRef = doc(db, "products");
      // const docSnap = await getDoc(docRef);
      const prods = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const documentoCompleto = { id: doc.id, ...doc.data() };
        prods.push(documentoCompleto);
      });
      return prods;
    }

    async function getProdId(id) {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    return { setProd, getProd, getProdId };
  },
  { persist: true }
);
