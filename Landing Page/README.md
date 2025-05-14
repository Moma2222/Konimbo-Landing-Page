
# Landing Page Contact Form – Airtable Integration

A clean, responsive landing page built with HTML, CSS, and JavaScript.  
This project includes a contact form that sends user-submitted data directly to an Airtable base via the Airtable API.

🔗 **GitHub Repository:**  
https://github.com/Moma2222

---

## ✨ Features

- ✅ Responsive and clean UI
- ✅ Form fields: Full Name, Email, Mobile Number, Message
- ✅ API integration with Airtable (using Personal Access Token)
- ✅ Real-time feedback: success and error messages

---

## 🧰 Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- Airtable REST API

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Moma2222/Konimbo-Landing-Page.git
```

2. Open the `index.html` file in your browser – no server or setup needed.

---

## 🔧 Configuration (to use your own Airtable)

1. Create a table in Airtable named `Messages` with the following fields:
   - `Name` – Single line text  
   - `Email` – Email  
   - `Mobile` - Phone Number
   - `Message` – Long text

2. Generate a [Personal Access Token](https://airtable.com/developers/web) with:
   - `data.records:write` access
   - Access to your specific base and table

3. Replace the following placeholders in `index.js`:
   - `YOUR_API_KEY`
   - `YOUR_BASE_ID`
   - Table name if different

---


## 📄 License

This project is for demonstration purposes only.
