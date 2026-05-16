// render articles
const articlesContainer = document.getElementById('articles');
articlesContainer.innerHTML = articles.map(article => {
    const src = `./assets/media/${article.media.src}`;
    const isVideo = article.media.type === 'video';
    
    const media = isVideo
        ? `<video class="article-media" src="${src}" autoplay loop muted playsinline aria-label="${article.media.alt}"></video>`
        : `<img class="article-media" src="${src}" alt="${article.media.alt}">`;
    
    return `
        <section class="article">
            <a href="${article.link}" class="article-link">
                <div class="article-inner">
                    ${media}
                    <h2 class="article-title">${article.title}</h2>
                    <p class="article-text">${article.description}</p>
                    <small class="article-tags">${article.tags.join(', ')}</small>
                </div>
            </a>
        </section>
    `;
}).join('');
