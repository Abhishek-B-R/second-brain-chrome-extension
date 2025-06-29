document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("websiteForm")
  const currentUrlDiv = document.getElementById("currentUrl")
  const titleInput = document.getElementById("title")
  const descriptionInput = document.getElementById("description")
  const scheduleForInput = document.getElementById("scheduleFor")
  const saveBtn = document.getElementById("saveBtn")
  const cancelBtn = document.getElementById("cancelBtn")
  const loading = document.getElementById("loading")
  const messageDiv = document.getElementById("message")

  let currentTab = null

  // Get current tab information
  try {
    const [tab] = await window.chrome.tabs.query({ active: true, currentWindow: true })
    currentTab = tab
    currentUrlDiv.textContent = tab.url

    // Auto-fill title with page title
    if (tab.title) {
      titleInput.value = tab.title
    }
  } catch (error) {
    console.error("Error getting current tab:", error)
    currentUrlDiv.textContent = "Error loading URL"
  }

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0]
  scheduleForInput.min = today

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    if (!currentTab) {
      showMessage("Error: Could not get current page information", "error")
      return
    }

    const formData = {
      url: currentTab.url,
      title: titleInput.value.trim(),
      description: descriptionInput.value.trim(),
      scheduledFor: scheduleForInput.value || null,
    }

    // Show loading state
    saveBtn.disabled = true
    saveBtn.textContent = "Saving..."
    loading.style.display = "flex"
    messageDiv.innerHTML = ""

    try {
      const response = await fetch("http://localhost:3000/api/websites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        // Success
        showMessage("Successfully saved to your knowledge hub! 🎉", "success")

        // Send message to content script to show success notification
        try {
          await window.chrome.tabs.sendMessage(currentTab.id, {
            type: "SHOW_NOTIFICATION",
            message: "Website saved to MindWell!",
            success: true,
          })
        } catch (error) {
          console.log("Could not send message to content script:", error)
        }

        // Close popup after a short delay
        setTimeout(() => {
          window.close()
        }, 2000)
      } else {
        // Handle specific error cases
        let errorMessage = "Failed to save website"

        if (result.error === "URL_EXISTS") {
          errorMessage = "This website is already in your knowledge hub"
        } else if (result.error === "Unauthorized") {
          errorMessage = "Please log in to save websites"
        } else if (result.message) {
          errorMessage = result.message
        }

        showMessage(errorMessage, "error")

        // Send error message to content script
        try {
          await window.chrome.tabs.sendMessage(currentTab.id, {
            type: "SHOW_NOTIFICATION",
            message: errorMessage,
            success: false,
          })
        } catch (error) {
          console.log("Could not send message to content script:", error)
        }
      }
    } catch (error) {
      console.error("Network error:", error)
      const errorMessage = "Network error: Could not connect to server or you haven't logged in"
      showMessage(errorMessage, "error")

      // Send error message to content script
      try {
        await window.chrome.tabs.sendMessage(currentTab.id, {
          type: "SHOW_NOTIFICATION",
          message: errorMessage,
          success: false,
        })
      } catch (error) {
        console.log("Could not send message to content script:", error)
      }
    } finally {
      // Hide loading state
      saveBtn.disabled = false
      saveBtn.textContent = "Save to Hub"
      loading.style.display = "none"
    }
  })

  // Handle cancel button
  cancelBtn.addEventListener("click", () => {
    window.close()
  })

  function showMessage(text, type) {
    messageDiv.innerHTML = `<div class="${type}">${text}</div>`
  }
})
