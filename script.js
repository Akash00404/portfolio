function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains("dark");
  
    if (isDark) {
      body.classList.remove("dark");
      body.classList.add("light");
      document.getElementById("theme-text").textContent = "Switch to Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      document.getElementById("theme-text").textContent = "Switch to Light Mode";
      localStorage.setItem("theme", "dark");
    }
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
  
    const themeText = document.getElementById("theme-text");
    if (themeText) {
      themeText.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    }
  
    document.querySelectorAll(".fill").forEach(fill => {
      const level = fill.getAttribute("data-width");
      setTimeout(() => fill.style.width = level, 300);
    });
  
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
    faders.forEach(el => observer.observe(el));
  });
  
  function showDetails(project) {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modalText");
  
    
  
    text.innerHTML = data[project] || "<p>No details found.</p>";
    modal.style.display = "flex";
  }
  
  function hideModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const msg = form.querySelector("textarea").value.trim();
  
      if (!name || !email || !msg) {
        alert("Please fill out all fields.");
        return;
      }
  
      document.getElementById("responseMsg").textContent =
        `Thanks, ${name}. I'll get back to you soon!`;
      form.reset();
    });
  }
  