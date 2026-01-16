# 🏥 Aarogya

A web-based multimodal health assistant designed to empower rural communities with digital health record management.

![Aarogya](https://img.shields.io/badge/Status-Active-success)
![Firebase](https://img.shields.io/badge/Firebase-Authentication%20%2B%20Firestore-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 Live Demo

**[Visit Live App](https://aarogya211.netlify.app)**

---

## 📋 Problem Statement

Rural areas in India face significant healthcare challenges:
- 65% of India's population lives in rural areas
- Only 25% of healthcare infrastructure serves these communities
- Poor medical record management leads to information loss
- Lack of continuity of care between different healthcare providers
- Growing need for organized patient data for teleconsultations

---

## 💡 Solution

Rural Health Assistant is a cloud-based platform that enables rural patients to:

✅ **Track Symptoms** - Log health issues with timestamps for pattern recognition  
✅ **Store Medical Images** - Upload prescriptions, wounds, and medical reports  
✅ **Maintain Health Records** - Keep all medical data in one secure, organized place  
✅ **Support Teleconsultation** - Share complete medical history with doctors remotely  
✅ **Access Anywhere** - Cloud-based solution accessible from any device  

---

## 🔧 Technologies Used

### Google Cloud Platform
- **Firebase Authentication** - Secure Google login and user management
- **Cloud Firestore** - Real-time NoSQL database for health records
- **Google Cloud Infrastructure** - Enterprise-grade security and reliability

### Frontend
- HTML5, CSS3, JavaScript
- Responsive design for mobile and desktop

### Deployment
- Netlify CDN for global hosting
- Progressive Web App capabilities

---

## 🚀 Features

### 1. User Authentication
- Secure login with Google account
- Privacy-focused data access control

### 2. Symptom Tracker
- Log daily symptoms with detailed notes
- Timestamped entries for tracking progression
- Easy retrieval and sharing

### 3. Medical Image Storage
- Upload photos of prescriptions
- Document skin conditions and wounds
- Store medical reports and test results

### 4. Health Record Management
- Chronological view of all medical data
- Search and filter capabilities
- Instant access for healthcare providers

---

## 📊 Impact

### For Rural Patients
- Never lose important medical records
- Better communication with healthcare providers
- Track health conditions over time
- Empowered healthcare decisions

### For Healthcare Providers
- Access complete patient history instantly
- Improved diagnosis accuracy
- Efficient teleconsultations
- Reduced redundant testing

### For Healthcare System
- Better continuity of care
- Cost reduction through efficiency
- Data-driven health insights
- Improved resource allocation

---

## 🎯 Use Case Example

**Scenario:** Ramesh, a farmer in rural Assam, experiences recurring headaches.

**Without Rural Health Assistant:**
- Forgets when symptoms started
- Can't remember previous medications
- Visits different clinics with no history
- Doctor starts diagnosis from scratch each time

**With Rural Health Assistant:**
- Logs symptoms for 2 weeks with detailed notes
- Uploads photos of medications that helped
- During teleconsultation, shares complete symptom history
- Doctor identifies migraine patterns immediately
- Gets accurate treatment without unnecessary tests

---

## 🔮 Future Enhancements

### Phase 2: AI Integration
- 🤖 Gemini API for AI-powered symptom analysis
- 📊 Health insights and personalized recommendations
- 🔍 Pattern recognition for early disease detection

### Phase 3: Enhanced Features
- 📅 Medication reminders (Google Calendar API)
- 📧 Email health reports (Gmail API)
- 🎤 Voice input for low-literacy users
- 📶 Offline mode for low-connectivity areas

### Phase 4: Ecosystem Development
- 🏥 Integration with local health centers
- 🇮🇳 Government health scheme connectivity
- 📊 Community health dashboard
- 🌐 Multi-language support (Assamese, Hindi, Bengali)

---

## 🛠️ Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari)
- Internet connection
- Google account

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/SwaGhost123/rural-health-assistant.git
cd rural-health-assistant
```

2. **Configure Firebase**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Authentication (Google provider)
   - Create Firestore Database (test mode)
   - Copy your Firebase config

3. **Update `app.js`**
   - Replace `firebaseConfig` with your credentials

4. **Open locally**
   - Double-click `index.html` or
   - Use a local server: `python -m http.server 8000`

5. **Deploy**
   - Deploy to Netlify, Vercel, or Firebase Hosting
   - Add your deployment domain to Firebase Authorized Domains

---

## 📁 Project Structure
```
rural-health-assistant/
├── index.html          # Main HTML structure
├── app.js             # JavaScript logic & Firebase integration
├── style.css          # Styling and responsive design
└── README.md          # Project documentation
```

---

## 🔒 Security & Privacy

- All data encrypted in transit (HTTPS)
- User authentication via Firebase
- Each user can only access their own records
- No data sharing without explicit user consent
- Compliant with healthcare data protection practices

---

## 🏆 Hackathon Information

**Event:** TechSprint Hackathon 2025  
**Institution:** Jorhat Institute of Science and Technology  
**Category:** Healthcare Innovation / Social Impact  
**Google Technologies:** Firebase Authentication, Cloud Firestore, Google Cloud Platform  

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Developer

Swagot Saikia 
Jorhat Institute of Science and Technology

📧 Email: swagot211@gmail.com 
🔗 LinkedIn: www.linkedin.com/in/swagot-saikia-41b145384 

---

## 🙏 Acknowledgments

- Firebase & Google Cloud Platform for backend infrastructure
- Netlify for hosting services
- Open source community for inspiration
- Rural communities whose challenges inspired this solution

---

## 📞 Contact & Support

For questions, suggestions, or collaboration opportunities:
- 📧 Email: swagot211@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/SwaGhost123/Aarogya211/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/SwaGhost123/Aarogya211/discussions)

---

**Made with ❤️ for rural healthcare accessibility**
