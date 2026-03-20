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

    // --- Dynamic Interactive Quiz Logic ---
    const quizData = [
        {
            context: "Debes desarrollar una aplicación para la gestión de emergencias médicas en tiempo real. Los requisitos técnicos son estrictos, pero las necesidades operativas de los hospitales cambian semanalmente según el feedback de los médicos.",
            question: "¿Qué enfoque elegirías considerando el riesgo y la adaptabilidad?",
            options: [
                { text: "Opción A: Modelo en Cascada (Tradicional)", correct: false, feedback: "❌ <strong>Incorrecto.</strong> Un enfoque rígido impediría adaptar la app al feedback semanal." },
                { text: "Opción B: Scrum o Enfoque Ágil", correct: true, feedback: "✅ <strong>¡Correcto!</strong> Scrum permite iterar y adaptar rápidamente la aplicación basándose en el feedback de los médicos." },
                { text: "Opción C: Modelo en V", correct: false, feedback: "⚠️ <strong>Casi.</strong> Asegura buena validación, pero sigue siendo insensible a cambios constantes." }
            ]
        },
        {
            context: "El gobierno te contrata para crear el software de control de un satélite. Los requisitos están 100% definidos. Un fallo costaría millones y no hay posibilidad de 'actualizar' el software en el espacio fácilmente.",
            question: "¿Qué ciclo de vida minimiza el riesgo destructivo en producción?",
            options: [
                { text: "Opción A: Modelo en V", correct: true, feedback: "✅ <strong>¡Correcto!</strong> Vincula cada fase de diseño con una prueba rigurosa (Validación/Verificación), garantizando calidad extrema para sistemas críticos." },
                { text: "Opción B: Scrum", correct: false, feedback: "❌ <strong>Incorrecto.</strong> Agile asume iteraciones y arreglar errores sobre la marcha. ¡En el espacio no puedes hacer eso!" },
                { text: "Opción C: Desarrollo Rápido (RAD)", correct: false, feedback: "❌ <strong>Incorrecto.</strong> Priorizar la velocidad sobre la planificación rigurosa es fatal para hardware crítico." }
            ]
        },
        {
            context: "Tu startup está haciendo un videojuego súper innovador. Tienes la idea central, pero no sabrás si es divertido de jugar hasta que lo construyas y lo pruebes con usuarios reales.",
            question: "¿Qué modelo te permite lidiar con la incertidumbre y validar el diseño sin arruinarte?",
            options: [
                { text: "Opción A: Cascada Puro", correct: false, feedback: "❌ <strong>Incorrecto.</strong> Si diseñas todo hasta el final y resulta aburrido, habrás perdido el 100% de la inversión." },
                { text: "Opción B: Modelo Espiral o Ágil", correct: true, feedback: "✅ <strong>¡Correcto!</strong> Necesitas crear prototipos constantemente y evaluar riesgos (¿es divertido?) antes de avanzar al siguiente bucle." },
                { text: "Opción C: Modelo en V", correct: false, feedback: "❌ <strong>Incorrecto.</strong> Es muy rígido para cambiar características si las primeras pruebas de usuario fallan." }
            ]
        },
        {
            context: "Quieres lanzar una app sencilla de Delivery para probar si hay mercado (un MVP). Tienes poquísimo presupuesto y necesitas tener la app corriendo en 3 semanas para presentarla a inversores.",
            question: "¿Cómo gestionarías este desarrollo veloz?",
            options: [
                { text: "Opción A: Espiral", correct: false, feedback: "⚠️ <strong>Demasiado pesado.</strong> El análisis de riesgos riguroso requiere más tiempo y personal del que dispones." },
                { text: "Opción B: Metodologías Ágiles", correct: true, feedback: "✅ <strong>¡Correcto!</strong> Agile se centra en lanzar la base funcional con el mayor valor lo antes posible y con una burocracia mínima." },
                { text: "Opción C: Cascada", correct: false, feedback: "❌ <strong>Incorrecto.</strong> Te tomará 2 semanas solo firmar la documentación de diseño." }
            ]
        },
        {
            context: "Un banco te pide modernizar su motor de cálculo de intereses. La fórmula matemática es exacta, está dada por leyes fiscales vigentes y no cambiará bajo ninguna circunstancia.",
            question: "¿Qué tipo de ciclo es más barato y directo para este escenario?",
            options: [
                { text: "Opción A: Cascada (Waterfall)", correct: true, feedback: "✅ <strong>¡Correcto!</strong> Al no existir incertidumbre en los requisitos, el modelo secuencial tradicional es el enfoque más directo y predecible." },
                { text: "Opción B: Extreme Programming (XP)", correct: false, feedback: "❌ <strong>Incorrecto.</strong> No necesitas prácticas ágiles extremas para programar una fórmula estática." },
                { text: "Opción C: Modelo Espiral", correct: false, feedback: "❌ <strong>Incorrecto.</strong> Aquí no hay 'riesgo' tecnológico inexplorado que justifique los altos costos de los bucles en Espiral." }
            ]
        }
    ];

    let currentQuizIndex = 0;
    let correctAnswers = 0;

    const quizContainer = document.getElementById('dynamic-quiz-container');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const quizControls = document.getElementById('quiz-controls');

    const renderQuiz = () => {
        if (!quizContainer) return;

        if (currentQuizIndex >= quizData.length) {
            quizContainer.innerHTML = `
                <div style="text-align: center; padding: 2.5rem; background: rgba(0,255,100,0.05); border-radius: 1rem; border: 1px solid var(--secondary);">
                    <h3>🎯 Resultados Finales</h3>
                    <h1 style="font-size: 3rem; margin: 1rem 0; color: var(--secondary);">${correctAnswers} / ${quizData.length}</h1>
                    <p style="color: var(--light); font-size: 1.1rem; max-width: 500px; margin: 0 auto; line-height: 1.6;">Gran trabajo. Reconocer cuándo aplicar metodologías rígidas (críticas/predictivas) y metodologías ágiles (riesgo/adaptabilidad) es clave en la Ingeniería de Software.</p>
                    <button id="restart-quiz-btn" class="btn-primary" style="margin-top: 2rem;">Repetir la Evaluación 🔄</button>
                </div>
            `;
            quizControls.style.display = 'none';

            document.getElementById('restart-quiz-btn').addEventListener('click', () => {
                currentQuizIndex = 0;
                correctAnswers = 0;
                renderQuiz();
            });
            return;
        }

        const data = quizData[currentQuizIndex];
        
        let html = `
            <div style="margin-bottom: 2rem;">
                <span class="badge" style="background: var(--dark); border: 1px solid #475569; color: var(--light);">Caso ${currentQuizIndex + 1} de ${quizData.length}</span>
                <p style="margin-top: 1rem; font-size: 1.1rem; line-height: 1.6;"><strong>Contexto:</strong> ${data.context}</p>
                <p style="margin-top: 0.5rem; color: var(--primary);"><strong>${data.question}</strong></p>
            </div>
            <div class="quiz-container" id="options-container">
        `;

        data.options.forEach((opt, idx) => {
            html += `<button class="quiz-btn" style="width: 100%; text-align: left;" data-correct="${opt.correct}" data-index="${idx}">${opt.text}</button>`;
        });

        html += `</div><div id="quiz-feedback" class="feedback-box" style="display: none; margin-top: 1.5rem;"></div>`;

        quizContainer.innerHTML = html;
        quizControls.style.display = 'none';

        const optionBtns = quizContainer.querySelectorAll('.quiz-btn');
        const feedbackBox = quizContainer.querySelector('#quiz-feedback');
        let answered = false;

        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (answered) return;
                answered = true;

                const isCorrect = btn.dataset.correct === 'true';
                const optIndex = parseInt(btn.dataset.index);
                const feedbackText = data.options[optIndex].feedback;

                if (isCorrect) correctAnswers++;

                optionBtns.forEach(b => {
                    const correctly = b.dataset.correct === 'true';
                    b.style.transition = 'all 0.3s ease';
                    if (b === btn) {
                        b.classList.add(isCorrect ? 'selected-correct' : 'selected-incorrect');
                    } else if (correctly) {
                        b.classList.add('selected-correct');
                        b.style.opacity = '0.7';
                    } else {
                        b.style.opacity = '0.3';
                        b.style.cursor = 'not-allowed';
                    }
                });

                feedbackBox.className = 'feedback-box ' + (isCorrect ? 'correct' : 'incorrect');
                feedbackBox.innerHTML = `<p>${feedbackText}</p>`;
                feedbackBox.style.display = 'block';
                feedbackBox.style.animation = 'fadeIn 0.5s ease';

                quizControls.style.display = 'block';
            });
        });
    };

    if (quizContainer) {
        renderQuiz();
        
        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', () => {
                currentQuizIndex++;
                renderQuiz();
            });
        }
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

    // --- Modal Logic ---
    const setupModal = (btnId, modalId) => {
        const btn = document.getElementById(btnId);
        const modal = document.getElementById(modalId);
        
        if (btn && modal) {
            const closeBtn = modal.querySelector('.close-btn');

            btn.addEventListener('click', () => {
                modal.style.display = 'flex';
                // Trigger reflow for transition
                void modal.offsetWidth;
                modal.classList.add('show');
            });

            const closeModal = () => {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            };

            closeBtn.addEventListener('click', closeModal);

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('show')) {
                    closeModal();
                }
            });
        }
    };

    setupModal('waterfall-btn', 'waterfall-modal');
    setupModal('v-model-btn', 'v-model-modal');
    setupModal('spiral-btn', 'spiral-modal');
});
