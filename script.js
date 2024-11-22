document.addEventListener("DOMContentLoaded", () => {
    const bannerText = document.getElementById("banner-text");

    // Mensagens do banner
    const messages = [
        '10% Off Cupom "KORAS01" 🏃',
        'Frete Grátis nas compras acima de R$150 🚚',
        'Novidades exclusivas toda semana 🛒'
    ];

    let index = 0;

    // Função para atualizar o texto
    const updateBannerText = () => {
        bannerText.textContent = messages[index];
        index = (index + 1) % messages.length; // Loop infinito
    };

    // Atualiza o texto imediatamente e a cada 3 segundos
    updateBannerText();
    setInterval(updateBannerText, 3000);
});
