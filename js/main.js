document.addEventListener('DOMContentLoaded', () => {
    const editables = document.querySelectorAll('.editable');
    const downloadBtn = document.getElementById('download-btn');

    // 1. Оптимизация: сохранение данных 
    editables.forEach(el => {
        // Загрузка
        const savedValue = localStorage.getItem(el.id);
        if (savedValue) el.innerHTML = savedValue;

        // Сохранение при каждом изменении
        el.addEventListener('input', () => {
            localStorage.setItem(el.id, el.innerHTML);
        });
    });

    // 2. Эффект Material Wave 
    document.addEventListener('mousedown', (e) => {
        const target = e.target.closest('.ripple-element');
        if (!target) return;

        const ripple = document.createElement('span');
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size/2}px`;
        ripple.style.top = `${e.clientY - rect.top - size/2}px`;
        ripple.classList.add('ripple');
        
        target.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });

    // 3. Реализация кнопки "Скачать" в PDF 
    downloadBtn.addEventListener('click', () => {
        // Используем встроенный механизм печати браузера для генерации PDF
        // Это соответствует требованию "базовых технологий без сторонних библиотек" 
        window.print();
    });
});