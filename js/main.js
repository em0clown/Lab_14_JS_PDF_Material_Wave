document.addEventListener('DOMContentLoaded', () => {
    const editables = document.querySelectorAll('.editable');
    const downloadBtn = document.getElementById('download-btn');

    editables.forEach(el => {
        if (!el.id) {
            console.warn('Элементу не задан ID, автосохранение не сработает:', el);
            return;
        }

        const savedValue = localStorage.getItem(`resume_field_${el.id}`);
        if (savedValue) el.innerHTML = savedValue;

        let timeout;
        el.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                localStorage.setItem(`resume_field_${el.id}`, el.innerHTML);
            }, 500); 
        });
    });

    document.addEventListener('mousedown', (e) => {
        const target = e.target.closest('.ripple-element');
        if (!target) return;

        const ripple = document.createElement('span');
        const rect = target.getBoundingClientRect();
        
        const size = Math.sqrt(rect.width ** 2 + rect.height ** 2);
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size/2}px`;
        ripple.style.top = `${e.clientY - rect.top - size/2}px`;
        ripple.classList.add('ripple');
        
        target.appendChild(ripple);
        
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });

    downloadBtn.addEventListener('click', () => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        
        window.print();
    });
});
