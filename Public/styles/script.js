
        function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav');

            hamburger.classList.toggle('active');
            nav.classList.toggle('active');

            if (nav.classList.contains('active')) {
                document.addEventListener('click', closeMenuOutside);
            } else {
                document.removeEventListener('click', closeMenuOutside);
            }
        }

        function closeMenuOutside(event) {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav');

            if (!event.target.closest('.hamburger') && !event.target.closest('nav')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.removeEventListener('click', closeMenuOutside);
            }
        }

        function fadeInOnScroll() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight * 0.75) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', fadeInOnScroll);
        fadeInOnScroll();

        function openContactForm() {
            document.getElementById('contactFormOverlay').style.display = 'flex';
        }

        function closeContactForm() {
            document.getElementById('contactFormOverlay').style.display = 'none';
        }

        function sendMessage() {
            const message = document.getElementById('message').value;
            // Aquí puedes agregar la lógica para enviar el mensaje (por ejemplo, a través de un servicio de correo electrónico)
            console.log('Mensaje enviado:', message);
            closeContactForm();
            showMessageSent();
        }

        function showMessageSent() {
            document.getElementById('messageSentOverlay').style.display = 'flex';
            setTimeout(function() {
                document.getElementById('messageSentOverlay').style.display = 'none';
            }, 1000); // Ocultar después de x segundos
        }
    








       