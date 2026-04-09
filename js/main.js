:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --text: #1f2937;
    --text-light: #6b7280;
    --bg: #f3f4f6;
    --card: #ffffff;
}

body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: var(--bg);
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    min-height: 100vh;
}

.resume-card {
    background: var(--card);
    width: 100%;
    max-width: 800px;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    transition: box-shadow 0.3s ease; 
}

.editable {
    padding: 4px 8px;
    transition: all 0.2s ease;
    border: 1px solid transparent;
}

.editable:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: #e5e7eb;
    border-radius: 4px;
    cursor: text;
}

.editable:focus {
    outline: none;
    background: rgba(99, 102, 241, 0.05);
    border-radius: 4px;
    box-shadow: 0 0 0 2px var(--primary);
    transform: translateY(-1px); /* Легкий подъем вместо масштабирования всего контейнера */
}

.ripple-element {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    background: rgba(99, 102, 241, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-effect {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

/* Кнопка скачивания */
#download-btn {
    background: var(--primary);
    color: white;
    border: none;
    padding: 12px 28px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: 600;
    transition: background 0.2s, transform 0.1s;
}

#download-btn:hover {
    background: var(--primary-dark);
}

#download-btn:active {
    transform: scale(0.98);
}

@media print {
    .print-hide { 
        display: none !important; 
    }
    
    body { 
        background: white; 
        padding: 0; 
    }
    
    .resume-card { 
        box-shadow: none; 
        border: none; 
        width: 100%; 
        max-width: 100%; 
        padding: 0; /* Убираем лишние отступы для чистого листа */
    }
    
    .section {
        page-break-inside: avoid;
        margin-bottom: 1rem;
    }
}
