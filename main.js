document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
    window.MBID = document.getElementById('menu_code').value;

    const script = document.createElement('script');
    script.src = 'http://embed.poly-menu.com/poly-menu.min.js';
    document.body.append(script)
})