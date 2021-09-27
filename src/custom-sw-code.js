self.addEventListener('push', (ev) => {
    let title = 'Sommelier Cellar';
    let content = 'Sommelier Cellar Event';

    console.log('notification payload', ev);
    if (ev && 'data' in ev) {
        const data = ev.data.json();
        console.log('notification payload data', data);
        if (data) {
            title = data.title;
            content = data.content;
        }
    }

    self.registration.showNotification(title, {
        body: content,
        image: 'https://a.storyblok.com/f/104430/1200x674/bdcc5c7b57/som_layout_6.png',
        icon: 'https://sommelier-cellar-website-git-master-sommelierfinance.vercel.app/images/logo.png'
    })
})
