// Background service worker for MindWell Knowledge Hub extension
console.log('MindWell service worker initialized');

// Message handlers map
const messageHandlers = new Map();

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details.reason);
  
  // Initialize storage if needed
  chrome.storage.sync.get(['savedWebsites'], (result) => {
    if (chrome.runtime.lastError) {
      console.error('Storage error:', chrome.runtime.lastError);
      return;
    }
    if (!result.savedWebsites) {
      chrome.storage.sync.set({ savedWebsites: [] })
        .then(() => console.log('Initialized empty savedWebsites array'))
        .catch(err => console.error('Storage set error:', err));
    }
  });
});

// Handle messages from content scripts/popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Received message:', request.type, request);
  
  // Get current tab info
  if (request.type === 'GET_CURRENT_TAB') {
    chrome.tabs.query({ active: true, currentWindow: true })
      .then(tabs => {
        sendResponse({ 
          success: true,
          tab: tabs[0] || null 
        });
      })
      .catch(error => {
        console.error('Tab query error:', error);
        sendResponse({ 
          success: false,
          error: error.message 
        });
      });
    return true; // Keep message port open for async response
  }

  // Save website request
  if (request.type === 'SAVE_WEBSITE') {
    chrome.storage.sync.get(['savedWebsites'])
      .then(result => {
        const websites = result.savedWebsites || [];
        websites.push(request.data);
        return chrome.storage.sync.set({ savedWebsites: websites });
      })
      .then(() => {
        sendResponse({ success: true });
      })
      .catch(error => {
        console.error('Save error:', error);
        sendResponse({ 
          success: false,
          error: error.message 
        });
      });
    return true; // Async response
  }

  // Default response for unhandled messages
  sendResponse({ 
    success: false,
    error: 'Unhandled message type' 
  });
});

// Monitor tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    console.log('Tab updated:', tab.url);
    // Add any tab update logic here
  }
});

// Helper function to get base URL
async function getBaseUrl() {
  try {
    const info = await chrome.management.getSelf();
    return info.installType.includes("development") 
      ? "http://localhost:3000" 
      : "https://mindwell.abhi.wtf";
  } catch (error) {
    console.error('Failed to get extension info:', error);
    return "https://mindwell.abhi.wtf"; // Fallback to production
  }
}

// Export for testing if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getBaseUrl,
    messageHandlers
  };
}