self.addEventListener('push', (ev) => {
    let title = 'Sommelier Cellar';
    let content = 'Sommelier Cellar Event';

    if (ev && 'data' in ev) {
        const data = ev.data.json();
        if (data) {
            title = data.title;
            content = data.content;
        }
    }

    self.registration.showNotification(title, {
        body: content,
        icon: 'https://sommelier-cellar-website-git-master-sommelierfinance.vercel.app/images/logo.png'
    })
})
