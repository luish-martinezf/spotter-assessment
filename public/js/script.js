(doc => {
    doc.addEventListener('DOMContentLoaded', function () {
        const typingElements = document.querySelectorAll('[data-typing-effect]');

        typingElements.forEach(element => {
            const text = element.dataset.typingEffect;
            let index = 0;
    
            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 200);
                }
            }
    
            type();
        });
    });
})(document);
