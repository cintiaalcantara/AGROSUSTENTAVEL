// 1. Configuração do Gráfico Interativo de Alta Performance (Chart.js)
const ctx = document.getElementById('graficoAgro').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2000', '2005', '2010', '2015', '2020', '2026'],
        datasets: [
            {
                label: 'Produtividade (Sacas/Hectare)',
                data: [40, 52, 68, 79, 92, 115],
                borderColor: '#2E7D32',
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
                borderWidth: 4,
                tension: 0.3,
                fill: true
            },
            {
                label: 'Área de Terra Utilizada (%)',
                data: [100, 101, 99, 102, 100, 98],
                borderColor: '#8B5A2B',
                backgroundColor: 'transparent',
                borderWidth: 3,
                borderDash: [5, 5],
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { font: { weight: 'bold' } }
            }
        },
        scales: {
            y: {
                grid: { color: '#f1f5f9' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 2. Lógica Interativa do Simulador de Decisões
function tomarDecisao(opcao) {
    const box = document.getElementById('feedback-simulador');
    box.classList.remove('hidden', 'bg-emerald-50', 'bg-red-50', 'border-l-4');
    
    // Adiciona estilização básica de borda de feedback
    box.classList.add('border-l-4');

    if (opcao === 1) {
        box.innerHTML = "⚠️ <b>Risco Ecológico!</b> Alterar cursos d'água sem licenciamento causa erosão, prejudica os peixes e viola leis ambientais. A produção sofrerá a longo prazo.";
        box.classList.add('bg-red-50', 'border-red-500', 'text-red-900');
    } else if (opcao === 2) {
        box.innerHTML = "🏆 <b>Decisão Perfeita!</b> Você protegeu a biodiversidade local (matas ciliares) e aplicou engenharia avançada. O gotejamento nutre a planta sem desperdiçar uma gota. Nota 10 em sustentabilidade!";
        box.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-900');
    } else {
        box.innerHTML = "❌ <b>Inércia Prejudicial!</b> Deixar tudo nas mãos do acaso com o clima instável gera perdas financeiras e não protege os recursos. O agro moderno exige dados e ação previsível.";
        box.classList.add('bg-amber-50', 'border-amber-500', 'text-amber-900');
    }
    
    // Rola a tela suavemente até o feedback aparecer
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}