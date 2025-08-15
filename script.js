let selectedPackage = null;

        function selectPackage(packageName) {
            // Remove selected class from all cards
            document.querySelectorAll('.pricing-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Add selected class to clicked card
            const selectedCard = document.querySelector(`[data-package="${packageName}"]`);
            selectedCard.classList.add('selected');
            
            // Store selected package
            selectedPackage = packageName;
            
            // Optional: You can add additional logic here
            console.log(`Selected package: ${packageName}`);
            
            // Redirect to WhatsApp with selected package
            const whatsappMessages = {
            'standar': 'Halo%20Admin%20Arka%2C%20saya%20mau%20order%20Paket%20Standar.%20Mohon%20informasikan%20detail%20dan%20cara%20pembayarannya%20ya.%20Terima%20kasih.',
            'mewah': 'Halo%20Admin%20Arka%2C%20saya%20mau%20order%20Paket%20Mewah.%20Mohon%20informasikan%20detail%20lengkap%20dan%20langkah%20pembayarannya.%20Terima%20kasih%20banyak.',
            'express': 'Halo%20Admin%20Arka%2C%20saya%20mau%20order%20Paket%20Express.%20Mohon%20info%20detail%20layanan%20dan%20cara%20pembayarannya.%20Terima%20kasih.'
        };

            
            const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B6287845287592&text=${whatsappMessages[packageName]}&type=phone_number&app_absent=0`;
            window.open(whatsappUrl, '_blank');
        }

        // Add click event listeners to cards for better UX
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't trigger if button was clicked
                if (e.target.classList.contains('pricing-button')) {
                    return;
                }
                
                const packageName = this.dataset.package;
                
                // Remove selected class from all cards
                document.querySelectorAll('.pricing-card').forEach(c => {
                    c.classList.remove('selected');
                });
                
                // Add selected class to clicked card
                this.classList.add('selected');
                selectedPackage = packageName;
            });
        });
        
      // Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

hamburger.addEventListener('click', () => {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Handle link clicks
mobileLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default if it's an anchor link
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
        
        // Close mobile menu
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Remove active class from all links
        mobileLinks.forEach(l => l.classList.remove('active-link'));
        
        // Add active class to clicked link
        this.classList.add('active-link');
    });
});

// Optional: Set initial active link based on current URL
function setActiveLink() {
    const currentHash = window.location.hash;
    if (currentHash) {
        mobileLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active-link');
            }
        });
    }
}

// Call on page load and when hash changes
window.addEventListener('load', setActiveLink);
window.addEventListener('hashchange', setActiveLink);

        lucide.createIcons();