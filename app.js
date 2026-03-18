// Simple interactivity for the educational guide
document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal effect
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Toggle Answer logic
    const toggleBtn = document.getElementById('toggle-answer');
    const answerDiv = document.getElementById('answer');

    if (toggleBtn && answerDiv) {
        toggleBtn.addEventListener('click', () => {
            if (answerDiv.style.display === 'none') {
                answerDiv.style.display = 'block';
                toggleBtn.textContent = 'Ocultar Sugerencia';
                answerDiv.style.animation = 'fadeIn 0.5s ease';
            } else {
                answerDiv.style.display = 'none';
                toggleBtn.textContent = 'Ver Sugerencia Técnica';
            }
        });
    }

    // --- Simulator Logic ---
    const phases = [
        { id: 1, label: "Análisis", event: "Sprint Planning", detail: "En Agile, el análisis es continuo. Definimos el 'Definition of Ready' para el ticket." },
        { id: 2, label: "Diseño", event: "Task Breakdown", detail: "Diseñamos la arquitectura de forma modular y justa para el incremento (Sprinting)." },
        { id: 3, label: "Desarrollo", event: "Pair Programming", detail: "Codificación con pruebas unitarias (TDD). Refactorización constante." },
        { id: 4, label: "Pruebas", event: "Continuous Testing", detail: "Automatización de pruebas y criterios de aceptación cumplidos." },
        { id: 5, label: "Despliegue", event: "Sprint Review", detail: "Incremento desplegado en stage. ¡Listo para feedback del cliente!" }
    ];

    let currentPhaseIndex = -1;

    const nextBtn = document.getElementById('next-step');
    const resetBtn = document.getElementById('reset-sim');
    const downloadBtn = document.getElementById('download-progress');
    const storyCard = document.getElementById('user-story');
    const eventBadge = document.getElementById('current-event');
    const detailBox = document.getElementById('phase-detail');
    const phaseNodes = document.querySelectorAll('.phase');

    const updateUI = () => {
        phaseNodes.forEach((node, idx) => {
            node.classList.remove('active', 'completed');
            if (idx === currentPhaseIndex) node.classList.add('active');
            if (idx < currentPhaseIndex) node.classList.add('completed');
        });

        if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.length) {
            const p = phases[currentPhaseIndex];
            eventBadge.textContent = p.event;
            detailBox.innerHTML = `<h4>Fase: ${p.label}</h4><p>${p.detail}</p>`;
            storyCard.style.transform = `translateX(${(currentPhaseIndex - 2) * 20}px) scale(1.1)`;
            downloadBtn.style.display = 'none';
        } else if (currentPhaseIndex >= phases.length) {
            eventBadge.textContent = "¡Sprint Terminado!";
            detailBox.innerHTML = `<h4>🎉 Done!</h4><p>El requerimiento ha atravesado todo el SDLC Ágil exitosamente. Ahora puedes guardar tu progreso.</p>`;
            nextBtn.disabled = true;
            downloadBtn.style.display = 'inline-block';
        }
    };

    nextBtn.addEventListener('click', () => {
        currentPhaseIndex++;
        updateUI();
    });

    resetBtn.addEventListener('click', () => {
        currentPhaseIndex = -1;
        eventBadge.textContent = "Esperando Sprint Planning...";
        detailBox.innerHTML = `<p><em>Selecciona 'Avanzar' para comenzar el ciclo.</em></p>`;
        nextBtn.disabled = false;
        downloadBtn.style.display = 'none';
        storyCard.style.transform = `translateX(0) scale(1)`;
        phaseNodes.forEach(node => node.classList.remove('active', 'completed'));
    });

    downloadBtn.addEventListener('click', () => {
        const text = `
RESULTADO DE APRENDIZAJE: ÁGILE SDLC EXPLORER
-------------------------------------------
Ticket: #402 - Implementar Chat en Vivo
Estado: COMPLETADO exitosamente.

REFLEXIÓN TÉCNICA:
El ticket atravesó las 5 fases del SDLC Ágil:
1. Análisis (Sprint Planning)
2. Diseño (Task Breakdown)
3. Desarrollo (Pair Programming)
4. Pruebas (Continuous Testing)
5. Despliegue (Sprint Review)

Log de Actividad: Generado el ${new Date().toLocaleString()}
-------------------------------------------
Copia este archivo en tu Google Drive para tu Bitácora.
        `;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mi_progreso_sdlc.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
