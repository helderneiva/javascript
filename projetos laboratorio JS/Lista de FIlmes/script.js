import { ENDPOINTS, FETCH_OPTIONS, IMAGE_URL } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menuToggle');
    const floatingNav = document.querySelector('.floating-nav');

    if (menuToggle && floatingNav) {
        menuToggle.addEventListener('click', () => {
            const isActive = floatingNav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
            
            const icon = menuToggle.querySelector('i');
            if (isActive) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    const themeBtn = document.querySelector('.nav-btn[data-tooltip="Alterar Tema"]');
    
    // Lê a memória do navegador para saber se o usuário já tinha escolhido o tema claro antes
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Liga/desliga a classe light-theme no body do HTML
            const isLight = document.body.classList.toggle('light-theme');
            
        
            if (isLight) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    async function fetchMovies(url) {
        try {
            const response = await fetch(url, FETCH_OPTIONS);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            
            const data = await response.json();
            return data.results || [];
        } catch (error) {
            console.error(`Falha ao buscar dados: ${url}`, error);
            return [];
        }
    }

    function renderSection(movies, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.removeAttribute('data-loading');

        if (movies.length === 0) {
            container.innerHTML = '<p style="color: var(--texto); opacity: 0.5; padding: 15px;">Não foi possível carregar os filmes.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();

        movies.slice(0, 6).forEach(movie => {
            const card = document.createElement('article');
            card.classList.add('movie-card');

            const posterPath = movie.poster_path 
            ? `${IMAGE_URL}${movie.poster_path}` 
            : 'https://placehold.co/500x750/1c1c1e/ffffff?text=Sem+Poster';

            card.innerHTML = `
                <img src="${posterPath}" alt="Pôster do filme ${movie.title}" loading="lazy">
                <h3>${movie.title}</h3>
            `;

            fragment.appendChild(card);
        });

        container.appendChild(fragment);
    }

    
    async function initApp() {
        const [boxOffice, topRated, popularBr, trending, upcoming] = await Promise.all([
            fetchMovies(ENDPOINTS.boxOffice),
            fetchMovies(ENDPOINTS.topRated),
            fetchMovies(ENDPOINTS.popularBr),
            fetchMovies(ENDPOINTS.trending),
            fetchMovies(ENDPOINTS.upcoming)
        ]);

        renderSection(boxOffice, 'box-office-list');
        renderSection(topRated, 'top-rated-list');
        renderSection(popularBr, 'popular-br-list');
        renderSection(trending, 'trending-list');
        renderSection(upcoming, 'upcoming-list');
    }

    initApp();
});