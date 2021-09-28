self.addEventListener('push', (ev) => {
    let title = 'Sommelier Cellar';
    let content = 'Sommelier Cellar Event';
    let image = '';
    let url = '';

    console.log('event data', ev);
    if (ev && 'data' in ev) {
        const data = ev.data.json();
        console.log('event content data', data);
        if (data) {
            title = data.title;
            content = data.content;
            image = data.image;
            url = data.url;
        }
    }

    self.registration.showNotification(title, {
        body: content,
        image: image,
        icon: 'https://sommelier-cellar-website-git-master-sommelierfinance.vercel.app/images/logo.png'
    })
})

self.addEventListener("notificationclick", (ev) => {
    ev.notification.close();

    console.log('click event data', ev);
    if (ev && 'data' in ev) {
        const data = ev.data.json();
        console.log('click event content data', data);
        if (data) {
            clients.openWindow(data.url)
        }
    }
})