// header
document.getElementById('site-header').innerHTML = `
    <header class="header">
        <div class="hidden closed" id="hidden">
            <div class="hidden-inner">
                <div class="hidden-about">
                    <h2 class="hidden-title">About</h2>
                    <p class="hidden-about-text">I graduated from <strong>Oxford University</strong> with First Class Honours in English in 2017. For the next few years, I worked as an editor on the <strong>Oxford University Press</strong> education website Oxford Owl.</p>
                    <p class="hidden-about-text">In 2020, I moved to New York to pursue a master's degree in Data Journalism at <strong>Columbia University</strong>. From 2021 to 2024, I was a data reporter at <strong>Mission Local</strong> in San Francisco.</p>
                    <p class="hidden-about-text">Last year, I moved back to London and joined <strong>Tortoise Media</strong> as a developer. I am now working for the <strong>Associated Press</strong> as an Interactive Artist.</p>
                </div>
                <div class="hidden-contact">
                    <h2 class="hidden-title">Contact</h2>
                    <ul class="hidden-contact-list">
                        <li class="hidden-contact-list-item"><a href="https://www.linkedin.com/in/willjarrett/">LinkedIn</a></li>
                        <li class="hidden-contact-list-item"><a target="_blank" rel="noreferrer" href="/assets/files/WillJarrett_CV.pdf">Download my CV</a></li>
                        <li class="hidden-contact-list-item"><a href="mailto:william.d.jarrett@gmail.com">william.d.jarrett@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="visible">
            <a href="/" class="visible-title-link"><h1 class="visible-title">WillJarrett<strong>Data</strong></h1></a>
            <button class="visible-button" id="menu-button" aria-controls="hidden">☰</button>
        </div>
    </header>
`;

// footer
document.getElementById('site-footer').innerHTML = `
    <footer class="footer">
        <p class="footer-text">
            <a href="mailto:william.d.jarrett@gmail.com">william.d.jarrett@gmail.com</a>
        </p>
    </footer>
`;

// menu toggle
document.getElementById('menu-button').addEventListener('click', () => {
    const hidden = document.getElementById('hidden');
    hidden.classList.toggle('open');
    hidden.classList.toggle('closed');
});