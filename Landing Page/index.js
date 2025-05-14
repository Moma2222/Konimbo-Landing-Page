let form = document.getElementById("contactForm");
let messageDiv = document.getElementById("formMessage");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let formData = new FormData(form);
      let data = {
        fields: {
          Name: formData.get("name"),
          Email: formData.get("email"),
          Mobile: formData.get("mobile"),
          Message: formData.get("message"),
        }
      };

      try {
        let res = await fetch("https://api.airtable.com/v0/app6IsL7P4wUzMq7X/Messages", {
          method: "POST",
          headers: {
            Authorization: "Bearer patyyQlxdRU5OmN9Y.d3393e7f6c6784313917633b34014dc6d502d24e0573d7dd5d26d638e8046154",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          
        });

        let result = await res.json();
        console.log(result);

        if (res.ok) {
          messageDiv.textContent = "Message sent successfully!";
          messageDiv.style.color = "green";
          form.reset();
        } else {
          messageDiv.textContent = "Something went wrong.";
          messageDiv.style.color = "orenge";
        }
      } catch (err) {
        messageDiv.textContent = "Error sending message.";
        messageDiv.style.color = "red";
      }
    });