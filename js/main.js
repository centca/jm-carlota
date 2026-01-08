/* =============================================
   BODA JUAN MANUEL & CARLOTA - JEREZ 2026
   JavaScript Principal
   ============================================= */

// =============================================
// COUNTDOWN TIMER
// =============================================
function updateCountdown() {
    const weddingDate = new Date('2026-05-23T12:30:00');
    const now = new Date();
    const diff = weddingDate - now;
    
    if (diff <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Initialize and start countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// =============================================
// TIMELINE DEL DÍA - DATA Y MODAL
// =============================================
const timelineData = {
    bienvenida: {
        icon: 'fa-wine-glass',
        time: '19:300',
        title: 'Bienvenida a Jerez',
        description: 'Queremos daros la bienvenida con un <strong>vino de honor</strong>, un ratito tranquilo para vernos, brindar y empezar a sentir la magia de Jerez juntos.<br><br>Un encuentro sencillo y relajado para reencontrarnos antes del gran día.<br><br><em>* Ubicación por confirmar</em>'
    },
    recogida: {
        icon: 'fa-bus',
        time: '11:45',
        title: 'Recogida de Invitados',
        description: 'El autobús os recogerá en la <strong>calle Puerto</strong>, en pleno centro de Jerez. ¡Sed puntuales para no perderos nada! Os recomendamos estar 10 minutos antes.'
    },
    ceremonia: {
        icon: 'fa-ring',
        time: '12:30',
        title: 'La Ceremonia',
        description: 'El momento más especial del día. Nos daremos el "Sí, quiero" en el entorno mágico de <strong>Bodegas Luis Pérez</strong>, rodeados de las personas que más queremos.'
    },
    coctel: {
        icon: 'fa-champagne-glasses',
        time: '14:00',
        title: 'Cóctel de Bienvenida',
        description: 'Después de la ceremonia, brindaremos juntos con un cóctel entre viñedos. Tapeito, vinos de Jerez y mucho ambiente.'
    },
    comida: {
        icon: 'fa-utensils',
        time: '16:30',
        title: 'El Banquete',
        description: 'Llega el momento de sentarse y disfrutar menú.'
    },
    sorpresa: {
        icon: 'fa-music',
        time: '18:00',
        title: 'Ahora sí',
        description: 'Prepárate para una tarde donde todo puede pasar.<br><br><strong>¡No os lo podéis perder!</strong>'
    },
    vuelta: {
        icon: 'fa-bus',
        time: '00:00 / 02:00',
        title: 'Buses de Vuelta',
        description: 'Habrá <strong>dos autobuses de regreso</strong> a la calle Puerto:<br><br>🚌 <strong>Primer bus:</strong> 00:00h aprox.<br>🚌 <strong>Segundo bus:</strong> 02:00h aprox.<br><br>¡Que nadie se quede tirado!'
    }
};

function openTimelineModal(eventId) {
    const data = timelineData[eventId];
    if (!data) return;
    
    document.getElementById('timelineModalIcon').innerHTML = `<i class="fas ${data.icon}"></i>`;
    document.getElementById('timelineModalTime').textContent = data.time;
    document.getElementById('timelineModalTitle').textContent = data.title;
    document.getElementById('timelineModalDescription').innerHTML = data.description;
    
    document.getElementById('timelineModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTimelineModal(event) {
    if (event.target.id === 'timelineModalOverlay') {
        document.getElementById('timelineModalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeTimelineModalBtn() {
    document.getElementById('timelineModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// =============================================
// PLACES DATA - TURISMO & GASTRONOMÍA
// =============================================
const placesData = {
    alcazar: {
        type: 'turismo',
        title: 'Alcázar de Jerez',
        image: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alcazar_jerez_frontera_cadiz_s_607821023.jpg',
        description: 'Fortaleza árabe construida en el siglo XII en la parte más alta de la ciudad. Es uno de los pocos ejemplos de arquitectura almohade que quedan en la Península Ibérica.',
        details: [
            { icon: 'fa-clock', text: 'Horario: 9:30h - 15h (verano hasta 18h)' },
            { icon: 'fa-euro-sign', text: 'Entrada: 5€ aprox.' },
            { icon: 'fa-map-pin', text: 'Alameda Vieja, Jerez' }
        ],
        mapUrl: 'https://maps.google.com/?q=Alcázar+de+Jerez+de+la+Frontera'
    },
    catedral: {
        type: 'turismo',
        title: 'Catedral de Jerez',
        image: 'https://arteviajero.com/wp-content/uploads/2022/10/Catedral-de-Jerez-de-la-Frontera-Cadiz.jpg',
        description: 'La Catedral de San Salvador es una joya del barroco andaluz construida sobre la antigua Mezquita Mayor.',
        details: [
            { icon: 'fa-clock', text: 'Horario: 10:00h - 18:30h' },
            { icon: 'fa-euro-sign', text: 'Entrada: 6€ aprox.' },
            { icon: 'fa-map-pin', text: 'Plaza de la Encarnación, Jerez' }
        ],
        mapUrl: 'https://maps.google.com/?q=Catedral+de+Jerez+de+la+Frontera'
    },
    sanmiguel: {
        type: 'turismo',
        title: 'Iglesia de San Miguel',
        image: 'https://www.turismojerez.com/fileadmin/Documentos/Turismo/user_upload/san_miguel.jpg',
        description: 'Uno de los edificios religiosos más bonitos de toda la provincia. En su pila bautismal fue bautizada Lola Flores.',
        details: [
            { icon: 'fa-clock', text: 'Horario: consultar en parroquia' },
            { icon: 'fa-church', text: 'Entrada gratuita' },
            { icon: 'fa-map-pin', text: 'Plaza de San Miguel, Jerez' }
        ],
        mapUrl: 'https://maps.google.com/?q=Iglesia+de+San+Miguel+Jerez'
    },
    ecuestre: {
        type: 'turismo',
        title: 'Real Escuela Andaluza del Arte Ecuestre',
        image: 'https://www.juntadeandalucia.es/sites/default/files/2020-06/20200622_recomendador_real_escuela_arte_ecuestre.jpg',
        description: 'Espectáculo único en el mundo donde los caballos de Pura Raza Española bailan al son de la música.',
        details: [
            { icon: 'fa-calendar', text: 'Shows: martes y jueves 12:00h' },
            { icon: 'fa-euro-sign', text: 'Entrada: desde 21€' },
            { icon: 'fa-map-pin', text: 'Av. Duque de Abrantes, Jerez' }
        ],
        mapUrl: 'https://maps.google.com/?q=Real+Escuela+Andaluza+Arte+Ecuestre+Jerez'
    },
    arenal: {
        type: 'turismo',
        title: 'Plaza del Arenal',
        image: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/2025/06/plaza-del-arenal-jerez.png',
        description: 'El corazón de Jerez, un amplio espacio rectangular perfecto para tomar algo en sus numerosas terrazas.',
        details: [
            { icon: 'fa-clock', text: 'Acceso libre 24h' },
            { icon: 'fa-coffee', text: 'Múltiples terrazas y bares' },
            { icon: 'fa-map-pin', text: 'Centro histórico, Jerez' }
        ],
        mapUrl: 'https://maps.google.com/?q=Plaza+del+Arenal+Jerez'
    },
    callelarga: {
        type: 'turismo',
        title: 'Calle Larga',
        image: 'https://images.mnstatic.com/24/1f/241f9a0260684ede68358f0507b33311.jpg',
        description: 'La calle más comercial de Jerez, cuyos orígenes se remontan al siglo XVI. Peatonal y llena de vida.',
        details: [
            { icon: 'fa-shopping-bag', text: 'Principal zona comercial' },
            { icon: 'fa-walking', text: 'Calle peatonal' },
            { icon: 'fa-map-pin', text: 'Centro histórico, Jerez' }
        ],
        mapUrl: 'https://maps.google.com/?q=Calle+Larga+Jerez+de+la+Frontera'
    },
    pasaje: {
        type: 'gastro',
        title: 'Tabanco El Pasaje',
        image: 'https://losviajesdeclaudia.com/wp-content/uploads/2018/04/tabanco-el-pasaje-ruta-por-los-tabancos-de-jerez.jpg',
        description: 'El tabanco más antiguo de Jerez, datando de 1925. Hace dos pases de flamenco en directo gratis al día.',
        details: [
            { icon: 'fa-music', text: 'Flamenco en directo GRATIS' },
            { icon: 'fa-star', text: 'Especialidad: Chicharrón' },
            { icon: 'fa-map-pin', text: 'Calle Santa María, 8' }
        ],
        mapUrl: 'https://maps.google.com/?q=Tabanco+El+Pasaje+Jerez'
    },
    banderillas: {
        type: 'gastro',
        title: 'Las Banderillas',
        image: 'https://losviajesdeclaudia.com/wp-content/uploads/2018/04/tabanco-las-banderillas-ruta-por-los-tabancos-de-jerez.jpg',
        description: 'Un clásico de los tabancos jerezanos con decoración taurina. Su primer propietario fue el padre de Lola Flores.',
        details: [
            { icon: 'fa-utensils', text: 'Especialidad: Rabo de toro' },
            { icon: 'fa-history', text: 'Historia ligada a Lola Flores' },
            { icon: 'fa-map-pin', text: 'Calle Caballeros, 12' }
        ],
        mapUrl: 'https://maps.google.com/?q=Las+Banderillas+Jerez'
    },
    sanpablo: {
        type: 'gastro',
        title: 'Tabanco San Pablo',
        image: 'https://losviajesdeclaudia.com/wp-content/uploads/2018/04/tabanco-san-pablo-ruta-por-los-tabancos-de-jerez.jpg',
        description: 'Bodega con muros de cal, buen ambiente y mucha solera desde 1934. Tiene mesas fuera bajo naranjos.',
        details: [
            { icon: 'fa-wine-bottle', text: 'Vino de Jerez a granel' },
            { icon: 'fa-star', text: 'Especialidad: Croquetas y lomo' },
            { icon: 'fa-map-pin', text: 'Calle San Pablo, 12' }
        ],
        mapUrl: 'https://maps.google.com/?q=Tabanco+San+Pablo+Jerez'
    },
    moderna: {
        type: 'gastro',
        title: 'Bar La Moderna',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b2/4c/95/exterior-del-local.jpg',
        description: 'Con más de 100 años de antigüedad, La Moderna es una institución en la Calle Larga de Jerez.',
        details: [
            { icon: 'fa-history', text: 'Más de 100 años de historia' },
            { icon: 'fa-wine-glass', text: 'Finos y manzanillas' },
            { icon: 'fa-map-pin', text: 'Calle Larga, Jerez' }
        ],
        mapUrl: 'https://maps.google.com/?q=Bar+La+Moderna+Jerez'
    },
    juanito: {
        type: 'gastro',
        title: 'Bar Juanito',
        image: 'https://assets.simpleviewinc.com/sv-andalucia/image/fetch/c_fill,f_jpg,h_343,q_65,w_640/https://spaindmsmedia.newmindmedia.com/wsimgs/4213E50FA3968C3BBE6D9FAB82EA425476F8F509.jpg',
        description: 'Uno de los bares de tapas más emblemáticos de Jerez. Sus alcachofas y su atún son legendarios.',
        details: [
            { icon: 'fa-utensils', text: 'Cocina tradicional jerezana' },
            { icon: 'fa-star', text: 'Especialidad: Alcachofas y atún' },
            { icon: 'fa-map-pin', text: 'Pescadería Vieja, 8-10' }
        ],
        mapUrl: 'https://maps.google.com/?q=Bar+Juanito+Jerez'
    },
    donpepe: {
        type: 'gastro',
        title: 'Don Pepe',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/50/3a/c2/entrada-al-restaurante.jpg',
        description: 'Tabanco con ambiente auténticamente jerezano donde disfrutar de los mejores vinos de la tierra.',
        details: [
            { icon: 'fa-wine-glass-alt', text: 'Gran variedad de vinos' },
            { icon: 'fa-users', text: 'Ambiente local' },
            { icon: 'fa-map-pin', text: 'Centro histórico, Jerez' }
        ],
        mapUrl: 'https://maps.google.com/?q=Tabanco+Don+Pepe+Jerez'
    }
};

// =============================================
// MODAL FUNCTIONS
// =============================================
function openModal(placeId) {
    const place = placesData[placeId];
    if (!place) return;

    document.getElementById('modalImage').src = place.image;
    document.getElementById('modalTitle').textContent = place.title;
    document.getElementById('modalDescription').textContent = place.description;
    document.getElementById('modalMapBtn').href = place.mapUrl;

    const tagEl = document.getElementById('modalTag');
    tagEl.textContent = place.type === 'turismo' ? 'VISITA TURÍSTICA' : 'GASTRONOMÍA';
    tagEl.className = 'modal-tag ' + place.type;

    const detailsEl = document.getElementById('modalDetails');
    detailsEl.innerHTML = place.details.map(d => `
        <div class="modal-detail-item">
            <i class="fas ${d.icon}"></i>
            <span>${d.text}</span>
        </div>
    `).join('');

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event.target.id === 'modalOverlay') {
        document.getElementById('modalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeModalBtn() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalBtn();
        closeTimelineModalBtn();
    }
});

// =============================================
// INTERSECTION OBSERVER - REVEAL ANIMATION
// =============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
        if(entry.isIntersecting) {
            entry.target.classList.add('active'); 
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// =============================================
// CLIPBOARD FUNCTIONS
// =============================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        Swal.fire({ 
            icon: 'success', 
            title: 'IBAN Copiado', 
            background: '#0a0a0a', 
            color: '#fff', 
            confirmButtonColor: '#E3B358', 
            toast: true, 
            position: 'top', 
            timer: 3000, 
            showConfirmButton: false 
        });
    });
}

function copyAndRedirect(code, url) {
    navigator.clipboard.writeText(code).then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Código copiado!',
            html: `<span style="font-family: monospace; font-size: 1.2rem; color: #E3B358;">${code}</span>`,
            background: '#0a0a0a',
            color: '#fff',
            confirmButtonColor: '#E3B358',
            confirmButtonText: 'Ir a la web del hotel',
            showCancelButton: true,
            cancelButtonText: 'Cerrar',
            cancelButtonColor: '#666'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(url, '_blank');
            }
        });
    }).catch(() => {
        // Fallback if clipboard fails
        Swal.fire({
            icon: 'info',
            title: 'Código de descuento',
            html: `<span style="font-family: monospace; font-size: 1.2rem; color: #E3B358;">${code}</span><br><small>Copia el código manualmente</small>`,
            background: '#0a0a0a',
            color: '#fff',
            confirmButtonColor: '#E3B358',
            confirmButtonText: 'Ir a la web del hotel'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(url, '_blank');
            }
        });
    });
}

// =============================================
// RSVP FORM CON WEB3FORMS INTEGRATION
// =============================================
let guestCount = 1;

function incrementGuests() {
    if (guestCount < 10) {
        guestCount++;
        document.getElementById('guestCount').textContent = guestCount;
    }
}

function decrementGuests() {
    if (guestCount > 1) {
        guestCount--;
        document.getElementById('guestCount').textContent = guestCount;
    }
}

function openRSVP() {
    // Reset guest count
    guestCount = 1;
    
    Swal.fire({
        title: '¿Asistirás a la boda?',
        html: `
            <div class="rsvp-form">
                <div class="rsvp-radio-group">
                    <label class="rsvp-radio">
                        <input type="radio" name="asistencia" value="si" id="rsvpSi">
                        <span class="rsvp-radio-custom"></span>
                        <span class="rsvp-radio-label">Sí asistiré</span>
                    </label>
                    <label class="rsvp-radio">
                        <input type="radio" name="asistencia" value="no" id="rsvpNo">
                        <span class="rsvp-radio-custom"></span>
                        <span class="rsvp-radio-label">No asistiré</span>
                    </label>
                </div>
                
                <div class="rsvp-counter-section" id="counterSection">
                    <label class="rsvp-label">¿Cuántos asistiréis?</label>
                    <div class="rsvp-counter">
                        <button type="button" class="rsvp-counter-btn" onclick="decrementGuests()">−</button>
                        <span class="rsvp-counter-value" id="guestCount">1</span>
                        <button type="button" class="rsvp-counter-btn" onclick="incrementGuests()">+</button>
                    </div>
                </div>
                
                <div class="rsvp-counter-section" id="busSection">
                    <label class="rsvp-label">¿Cogerás el autobús?</label>
                    <div class="rsvp-radio-group" style="margin-top: 10px;">
                        <label class="rsvp-radio">
                            <input type="radio" name="bus" value="si" id="busSi">
                            <span class="rsvp-radio-custom"></span>
                            <span>Sí</span>
                        </label>
                        <label class="rsvp-radio">
                            <input type="radio" name="bus" value="no" id="busNo">
                            <span class="rsvp-radio-custom"></span>
                            <span>No</span>
                        </label>
                    </div>
                </div>
                
                <input type="text" class="rsvp-input" id="rsvpNombre" placeholder="Tu nombre completo">
                <input type="email" class="rsvp-input" id="rsvpEmail" placeholder="Tu email">
                <textarea class="rsvp-textarea" id="rsvpAlergias" placeholder="¿Intolerancias/alergias o datos de interés? (opcional)"></textarea>
                
                <label class="rsvp-checkbox">
                    <input type="checkbox" id="rsvpTerminos">
                    <span class="rsvp-checkbox-custom"></span>
                    <span class="rsvp-checkbox-label">Acepto los términos y condiciones</span>
                </label>
            </div>
        `,
        showCancelButton: false,
        confirmButtonText: 'Formulario incompleto',
        confirmButtonColor: '#ccc',
        background: '#F0F0E8',
        color: '#1a1a1a',
        width: '420px',
        customClass: {
            confirmButton: 'rsvp-submit-btn',
            popup: 'rsvp-popup'
        },
        didOpen: () => {
            const form = Swal.getPopup();
            const submitBtn = Swal.getConfirmButton();
            submitBtn.disabled = true;
            
            const validateForm = () => {
                const asistencia = form.querySelector('input[name="asistencia"]:checked');
                const nombre = form.querySelector('#rsvpNombre').value.trim();
                const email = form.querySelector('#rsvpEmail').value.trim();
                const terminos = form.querySelector('#rsvpTerminos').checked;
                const bus = form.querySelector('input[name="bus"]:checked');
                
                // Basic email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isValidEmail = emailRegex.test(email);
                
                // Si asiste, también debe seleccionar bus
                const busValid = asistencia?.value === 'no' || (asistencia?.value === 'si' && bus);
                
                const isValid = asistencia && nombre && email && isValidEmail && terminos && busValid;
                
                submitBtn.disabled = !isValid;
                submitBtn.textContent = isValid ? 'Confirmar asistencia' : 'Formulario incompleto';
                submitBtn.style.backgroundColor = isValid ? '#58181F' : '#ccc';
                submitBtn.style.color = isValid ? 'white' : '#888';
                submitBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
            };
            
            const counterSection = form.querySelector('#counterSection');
            const busSection = form.querySelector('#busSection');
            
            form.querySelectorAll('input[name="asistencia"]').forEach(radio => {
                radio.addEventListener('change', (e) => {
                    counterSection.style.display = e.target.value === 'si' ? 'block' : 'none';
                    busSection.style.display = e.target.value === 'si' ? 'block' : 'none';
                    validateForm();
                });
            });
            
            // Validar también cuando cambia la selección del bus
            form.querySelectorAll('input[name="bus"]').forEach(radio => {
                radio.addEventListener('change', validateForm);
            });
            
            form.querySelector('#rsvpNombre').addEventListener('input', validateForm);
            form.querySelector('#rsvpEmail').addEventListener('input', validateForm);
            form.querySelector('#rsvpTerminos').addEventListener('change', validateForm);
        },
        preConfirm: async () => {
            const asistencia = document.querySelector('input[name="asistencia"]:checked')?.value;
            const nombre = document.getElementById('rsvpNombre').value.trim();
            const email = document.getElementById('rsvpEmail').value.trim();
            const alergias = document.getElementById('rsvpAlergias').value.trim();
            const numAsistentes = document.getElementById('guestCount').textContent;
            const bus = document.querySelector('input[name="bus"]:checked')?.value;
            
            // Show loading state
            Swal.showLoading();
            
            // Build the message with all form data
            const asistenciaTexto = asistencia === 'si' ? 'SÍ ASISTIRÁ' : 'NO ASISTIRÁ';
            const busTexto = bus === 'si' ? 'Sí, cogerá el bus' : (bus === 'no' ? 'No, irá por su cuenta' : 'No indicado');
            
            const message = `
═══════════════════════════════════════
🎊 CONFIRMACIÓN BODA JUAN MANUEL & CARLOTA
═══════════════════════════════════════

📋 RESPUESTA: ${asistenciaTexto}

👤 DATOS DEL INVITADO:
   • Nombre: ${nombre}
   • Email: ${email}
   • Nº de asistentes: ${asistencia === 'si' ? numAsistentes : 'N/A'}
   • Autobús: ${asistencia === 'si' ? busTexto : 'N/A'}

🍽️ ALERGIAS/INTOLERANCIAS:
   ${alergias || 'Ninguna indicada'}

📅 Fecha de confirmación: ${new Date().toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}

═══════════════════════════════════════
            `.trim();
            
            // Prepare form data for Web3Forms
            const formData = new FormData();
            formData.append('access_key', '116b326d-f963-494d-9545-fcf616dad0ef');
            formData.append('name', nombre);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('subject', `🎊 RSVP Boda: ${nombre} - ${asistenciaTexto}`);
            
            // Additional fields for better organization
            formData.append('asistencia', asistenciaTexto);
            formData.append('num_asistentes', asistencia === 'si' ? numAsistentes : '0');
            formData.append('autobus', asistencia === 'si' ? busTexto : 'N/A');
            formData.append('alergias', alergias || 'Ninguna');
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (response.ok && data.success) {
                    return { 
                        success: true, 
                        asistencia, 
                        nombre, 
                        numAsistentes,
                        bus
                    };
                } else {
                    throw new Error(data.message || 'Error al enviar el formulario');
                }
            } catch (error) {
                Swal.showValidationMessage(`Error: ${error.message}`);
                return false;
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed && result.value && result.value.success) {
            const data = result.value;
            if (data.asistencia === 'si') {
                const busInfo = data.bus === 'si' ? '🚌 Cogerás el autobús' : '🚗 Irás por tu cuenta';
                Swal.fire({
                    icon: 'success',
                    title: '¡Confirmado!',
                    html: `
                        <p>Gracias <strong>${data.nombre}</strong>, te esperamos el <strong>23 de Mayo</strong>.</p>
                        <p style="margin-top: 15px; color: #58181F; font-weight: bold;">
                            <i class="fas fa-users"></i> ${data.numAsistentes} persona(s) confirmada(s)
                        </p>
                        <p style="margin-top: 10px; color: #58181F;">
                            ${busInfo}
                        </p>
                        <p style="margin-top: 10px; font-size: 0.9rem; color: #666;">
                            Hemos enviado un email de confirmación.
                        </p>
                    `,
                    background: '#F0F0E8',
                    color: '#1a1a1a',
                    confirmButtonColor: '#58181F'
                });
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Qué pena...',
                    html: `
                        <p>Gracias por avisarnos, <strong>${data.nombre}</strong>.</p>
                        <p style="margin-top: 10px;">¡Te echaremos de menos! 💔</p>
                    `,
                    background: '#F0F0E8',
                    color: '#1a1a1a',
                    confirmButtonColor: '#58181F'
                });
            }
        }
    });
}

// =============================================
// PARALLAX FOR iOS
// =============================================
(function() {
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        if (parallaxElements.length === 0) return;
        
        function updateParallax() {
            const scrolled = window.scrollY || window.pageYOffset;
            
            parallaxElements.forEach(function(el) {
                const parent = el.parentElement;
                const rect = parent.getBoundingClientRect();
                const parentTop = rect.top + scrolled;
                const parentHeight = parent.offsetHeight;
                const windowHeight = window.innerHeight;
                
                // Only apply if visible
                if (rect.bottom > 0 && rect.top < windowHeight) {
                    const speed = 0.4;
                    const yPos = (scrolled - parentTop + windowHeight) * speed - (windowHeight * speed);
                    el.style.transform = 'translate3d(0, ' + yPos + 'px, 0)';
                    el.style.webkitTransform = 'translate3d(0, ' + yPos + 'px, 0)';
                }
            });
        }
        
        // Execute on scroll
        window.addEventListener('scroll', updateParallax, { passive: true });
        
        // Execute on touchmove for iOS
        window.addEventListener('touchmove', updateParallax, { passive: true });
        
        // Execute on load
        updateParallax();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initParallax);
    } else {
        initParallax();
    }
})();
