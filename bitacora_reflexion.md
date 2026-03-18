# Bitácora de Co-diseño: Ingeniería de Software con IA Generativa

## 1. División de Roles
En este proceso de producción colaborativa, la división de tareas se estructuró de la siguiente manera:

*   **Lcda. Gaubys López / Lcdo. José M. Díaz (Liderazgo Pedagógico y Curaduría):** Actuó como el experto en el área de desempeño (Ingeniería de Software). Su rol principal fue definir el nodo curricular, establecer los objetivos de aprendizaje y supervisar la precisión técnica y pedagógica del contenido. Validó que el recurso respondiera a una necesidad diagnóstica real: la dificultad de los estudiantes para elegir entre enfoques tradicionales y ágiles.
*   **Antigravity (Asistente Técnico y Creativo - IA):** Actuó como el motor de generación de contenidos, diseñador de interfaces y creador de material visual. Se encargó de estructurar la información teórica bajo principios de ingeniería de prompts, desarrollar el código de la plataforma interactiva y generar las piezas gráficas conceptuales.

## 2. Análisis de Prompts (Ingeniería de Instrucciones)
Para este proyecto se utilizaron técnicas de *Few-Shot Prompting* y *Role Prompting*. Algunos ejemplos clave analizados:

*   **Estructural:** Se le pidió a la IA actuar como "Experto en Pedagogía e Ingeniería de Software" para asegurar que la jerarquía de la información fuera lógica (de lo tradicional a lo ágil).
*   **Visual:** Se evitó el uso de texto dentro de las imágenes generadas por IA para prevenir errores de ortografía ("hallucinations" en tipografía) y se priorizó la estética minimalista y moderna que evoca tecnología.
*   **Interactivo:** El prompt para el simulador incluyó estados lógicos (Análisis -> Diseño -> Desarrollo -> Pruebas -> Despliegue) para que la IA generara explicaciones coherentes con el marco de trabajo Scrum.

## 3. Reflexión Técnica
La incorporación de IA Generativa en este proceso transformó el diseño pedagógico en cuatro dimensiones:

1.  **Velocidad de Prototipado:** El paso de la selección del tema a tener un recurso interactivo funcional se redujo drásticamente. Lo que antes tomaría días de diseño y diagramación, se resolvió en minutos de refinamiento de prompts.
2.  **Calidad Estética (Premium):** La capacidad de generar visuales de alta calidad y un sistema de diseño CSS coherente permitió que el recurso se sintiera "de vanguardia", lo cual es vital para captar la atención de estudiantes de tecnología.
3.  **Simulación de Procesos:** La inclusión de un "Agile SDLC Explorer" permite que el concepto abstracto de "ciclo de vida" se vuelva tangible. El estudiante puede ver cómo un ticket se transforma de análisis a despliegue en un entorno controlado, reforzando la retención del conocimiento.
4.  **Optimización del Diálogo Pedagógico:** Al delegar la escritura de definiciones estándar a la IA, la pareja de trabajo pudo concentrarse en el **diseño de la actividad diagnóstica** y la **lógica del simulador**.

## 4. Conclusión
La IA no reemplazó al docente, sino que actuó como un "Exoesqueleto Cognitivo". La curaduría humana fue indispensable para asegurar que el contenido ágil no fuera solo teórico, sino que estuviera aplicado a casos prácticos reales.

---
**Recurso Final:** [Guía Interactiva SDLC y Agile](index.html)
**Acceso Público:** Configurado para ser desplegado en [GitHub Pages](README.md).
**Persistencia:** Sistema de descarga de resultados compatible con **Google Drive**.
**Herramientas Utilizadas:** Antigravity (LLM), generate_image (Visual).
