self.addEventListener('push', (ev) => {
    let title = 'Sommelier Cellar';
    let content = 'Sommelier Cellar Event';
    let image = '';
    let link = '';

    console.log('event data', ev);
    if (ev && 'data' in ev) {
        const data = ev.data.json();
        console.log('event content data', data);
        if (data) {
            title = data.title;
            content = data.description;
            image = data.image;
            link = data.url;
        }
    }

    self.registration.showNotification(title, {
        body: content,
        image: image,
        icon: 'https://sommelier-cellar-website-git-master-sommelierfinance.vercel.app/images/logo.png',
        data: link
    })
})

self.addEventListener("notificationclick", (ev) => {
    ev.notification.close();
    console.log(ev.notification.data);
    clients.openWindow(ev.notification.data);
})