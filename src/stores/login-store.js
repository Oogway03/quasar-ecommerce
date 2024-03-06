import { defineStore } from "pinia";
import { ref, computed } from "vue"; // ref sono i valori che permettono di cambiare i valori
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Notify } from "quasar";

export const useLoginStore = defineStore(
  "login",
  () => {
    // ID dello store
    const auth = getAuth();

    function login(email, passwd) {
      signInWithEmailAndPassword(auth, email, passwd)
        .then((userCredential) => {
          // Signed up
          user.value = userCredential.user;

          Notify.create("Login succesful");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          Notify.create("Login failed");
        });
    }

    function logout() {
      signOut(auth)
        .then(() => {
          Notify.create("Login succesful");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

    const isLogged = computed(() => {
      return !!(email.value && passwd.value);
    });

    return { email, passwd, login, logout, isLogged };
  },
  {
    persist: true,
  }
);
