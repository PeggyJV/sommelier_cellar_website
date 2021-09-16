self.addEventListener('push', () => {
    self.registration.showNotification('My Gatsby Notification', {})
})
