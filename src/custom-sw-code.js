if (typeof window !== `undefined`) {
    window.self.addEventListener('push', () => {
        window.self.registration.showNotification('My Gatsby Notification', {})
    })
}