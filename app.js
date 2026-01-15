// --------------------
// Firebase Configuration
// --------------------
const firebaseConfig = {
  apiKey: "AIzaSyALt_WGlSYAFTopPHsdlUaLUZcoYQn88zo",
  authDomain: "rural-health-assistant-2cf23.firebaseapp.com",
  databaseURL: "https://rural-health-assistant-2cf23-default-rtdb.firebaseio.com",
  projectId: "rural-health-assistant-2cf23",
  storageBucket: "rural-health-assistant-2cf23.firebasestorage.app",
  messagingSenderId: "531448838510",
  appId: "1:531448838510:web:19051f8c17df4434c0a97f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

let currentUser = null;

// --------------------
// Auth State Handling
// --------------------
auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("appSection").style.display = "block";
    document.getElementById("userName").textContent = user.displayName;
    loadRecords();
  } else {
    currentUser = null;
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("appSection").style.display = "none";
  }
});

// --------------------
// Login / Logout
// --------------------
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .catch(err => alert("Login failed: " + err.message));
}

function logout() {
  auth.signOut();
}

// --------------------
// BASIC SYMPTOM ANALYSIS (Rule-based)
// --------------------
function analyzeSymptoms(text) {
  const t = text.toLowerCase();

  if (t.includes("chest pain") || t.includes("breathing")) {
    return "⚠️ Symptoms may be serious. Please seek medical help immediately.";
  }

  if (t.includes("fever") && t.includes("cold")) {
    return "This may be a common viral infection. Rest, fluids, and monitoring are advised.";
  }

  if (t.includes("headache") || t.includes("tired")) {
    return "This may be due to stress, dehydration, or lack of rest.";
  }

  return "Your symptoms have been recorded. Monitor your condition and consult a doctor if it worsens.";
}

// --------------------
// Save Symptoms
// --------------------
function saveSymptoms() {
  if (!currentUser) return;

  const symptoms = document.getElementById("symptoms").value.trim();
  if (!symptoms) {
    alert("Please describe your symptoms.");
    return;
  }

  const guidance = analyzeSymptoms(symptoms);

  db.collection("healthRecords").add({
    userId: currentUser.uid,
    userName: currentUser.displayName,
    symptoms,
    guidance,
    type: "symptom",
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert("Symptoms saved.\n\n" + guidance);
    document.getElementById("symptoms").value = "";
    loadRecords();
  })
  .catch(err => alert("Error: " + err.message));
}

// --------------------
// Upload Medical Image
// --------------------
function uploadImage() {
  if (!currentUser) return;

  const fileInput = document.getElementById("imageUpload");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an image.");
    return;
  }

  if (file.size > 1000000) {
    alert("Image too large. Please use an image under 1MB.");
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    db.collection("healthRecords").add({
      userId: currentUser.uid,
      userName: currentUser.displayName,
      imageData: e.target.result,
      type: "image",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      alert("Image uploaded successfully.");
      fileInput.value = "";
      loadRecords();
    })
    .catch(err => alert("Error: " + err.message));
  };

  reader.readAsDataURL(file);
}

// --------------------
// Load Health Records
// --------------------
function loadRecords() {
  if (!currentUser) return;

  const recordsList = document.getElementById("recordsList");
  recordsList.innerHTML = "<p>Loading records...</p>";

  db.collection("healthRecords")
    .where("userId", "==", currentUser.uid)
    .get()
    .then(snapshot => {
      recordsList.innerHTML = "";

      if (snapshot.empty) {
        recordsList.innerHTML = "<p>No records yet.</p>";
        return;
      }

      const records = [];
      snapshot.forEach(doc => records.push(doc.data()));

      records.sort((a, b) => {
        const ta = a.timestamp ? a.timestamp.toMillis() : 0;
        const tb = b.timestamp ? b.timestamp.toMillis() : 0;
        return tb - ta;
      });

      records.forEach(data => {
        const div = document.createElement("div");
        div.className = "record";

        const time = data.timestamp
          ? data.timestamp.toDate().toLocaleString()
          : "Just now";

        if (data.type === "symptom") {
          div.innerHTML = `
            <p><strong>Symptoms:</strong> ${data.symptoms}</p>
            <p><em>${data.guidance}</em></p>
            <small>${time}</small>
          `;
        }

        if (data.type === "image") {
          div.innerHTML = `
            <p><strong>Uploaded Image:</strong></p>
            <img src="${data.imageData}" alt="Medical image">
            <small>${time}</small>
          `;
        }

        recordsList.appendChild(div);
      });
    })
    .catch(err => {
      recordsList.innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
}
// --------------------
// Clear User Medical History
// --------------------
function clearHistory() {
  if (!currentUser) return;

  const confirmDelete = confirm(
    "Are you sure you want to permanently erase all your medical records?\n\nThis action cannot be undone."
  );

  if (!confirmDelete) return;

  db.collection("healthRecords")
    .where("userId", "==", currentUser.uid)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        alert("No records to delete.");
        return;
      }

      const batch = db.batch();

      snapshot.forEach(doc => {
        batch.delete(doc.ref);
      });

      return batch.commit();
    })
    .then(() => {
      alert("Your medical history has been erased.");
      loadRecords();
    })
    .catch(err => {
      alert("Error deleting records: " + err.message);
    });
}