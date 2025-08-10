// Add these after the existing event listeners
document.getElementById('apiKeyBtn').addEventListener('click', function() {
    const apiKeyModal = new bootstrap.Modal(document.getElementById('apiKeyModal'));
    document.getElementById('apiKeyInput').value = localStorage.getItem('openai_api_key') || '';
    apiKeyModal.show();
});

document.getElementById('saveApiKeyBtn').addEventListener('click', function() {
    const apiKey = document.getElementById('apiKeyInput').value.trim();
    if (apiKey) {
        localStorage.setItem('openai_api_key', apiKey);
        
        // Update status badge
        const statusBadge = document.getElementById('statusBadge');
        statusBadge.className = 'status-badge status-connected';
        statusBadge.innerHTML = '<i class="bi bi-circle-fill"></i> Connected';
        
        // Show success message
        const toast = new bootstrap.Toast(document.getElementById('toastNotification'));
        document.getElementById('toastMessage').textContent = 'API key saved successfully!';
        document.getElementById('toastHeader').textContent = 'Success';
        document.getElementById('toastIcon').className = 'bi bi-check-circle-fill text-success me-2';
        toast.show();
        
        // Close modal
        bootstrap.Modal.getInstance(document.getElementById('apiKeyModal')).hide();
    }
});
