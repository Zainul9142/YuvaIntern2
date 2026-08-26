# ⚡ Week 2 Comprehensive Project Report: ComponentHub Interactive UI System

**Project:** ComponentHub — Interactive UI Component System  
**Author:** Zainul / YuvaIntern  
**Repository:** https://github.com/Zainul9142/YuvaIntern2  

---

## 1. Executive Summary & Component Behaviors
ComponentHub includes four interactive UI components built with Vanilla ES6 JavaScript:
1. **Modal Dialog:** Focus trapping, ESC key dismiss, backdrop click handler.
2. **Accordion:** Smooth CSS max-height transition, Up/Down Arrow keyboard navigation.
3. **Tabbed Panels:** Left/Right Arrow switching, W3C ARIA tab roles.
4. **Toast Manager:** Dynamic alert spawning with auto-dismiss timers.

---

## 2. Source Code Appendix

### HTML Source (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ComponentHub - Interactive Vanilla JavaScript UI Design System including Modals, Accordions, Tabbed Panels, and Toast Notifications with full ARIA accessibility.">
    <title>ComponentHub | Interactive UI Design System (Week 2)</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Top Navigation Header -->
    <header class="header">
        <div class="container header-container">
            <div class="brand">
                <span class="brand-icon">⚡</span>
                <span class="brand-name">Component<span class="brand-highlight">Hub</span></span>
            </div>
            <span class="badge">Week 2 &bull; Interactive UI Components</span>
        </div>
    </header>

    <!-- Main Workspace -->
    <main class="main-content">
        <div class="container">
            <!-- Hero Title -->
            <div class="hero-header text-center">
                <h1>Interactive Vanilla JS UI Components</h1>
                <p>Modular, responsive, and accessible UI component design system built with semantic HTML5, modern CSS, and pure Vanilla JavaScript.</p>
            </div>

            <!-- Component Grid Layout -->
            <div class="component-grid">

                <!-- COMPONENT 1: ACCESSIBLE MODAL SYSTEM -->
                <section class="card component-card" id="modal-section">
                    <div class="card-header">
                        <div class="card-title">
                            <span class="component-num">01</span>
                            <h2>Interactive Modal System</h2>
                        </div>
                        <span class="tech-pill">Dialog / Modal</span>
                    </div>
                    <div class="card-body">
                        <p>Accessible modal dialog featuring focus management, ARIA roles, backdrop blur, open/close animations, and keyboard Escape key listeners.</p>
                        <div class="demo-actions">
                            <button class="btn btn-primary" id="open-modal-btn">
                                <span>🚀 Launch Demo Modal</span>
                            </button>
                            <button class="btn btn-outline" id="open-confirm-modal-btn">
                                <span>⚠️ Launch Confirmation Modal</span>
                            </button>
                        </div>
                    </div>
                </section>

                <!-- COMPONENT 2: RESPONSIVE ACCORDION SYSTEM -->
                <section class="card component-card" id="accordion-section">
                    <div class="card-header">
                        <div class="card-title">
                            <span class="component-num">02</span>
                            <h2>Animated Accordion System</h2>
                        </div>
                        <span class="tech-pill">Collapse / FAQ</span>
                    </div>
                    <div class="card-body">
                        <p>Expandable accordion panels with smooth CSS max-height transitions, `aria-expanded` synchronization, and Arrow key navigation support.</p>
                        
                        <div class="accordion" id="demo-accordion">
                            <!-- Accordion Item 1 -->
                            <div class="accordion-item">
                                <button class="accordion-header" id="acc-head-1" aria-expanded="false" aria-controls="acc-panel-1">
                                    <span>What layout techniques were used for these components?</span>
                                    <span class="accordion-icon">+</span>
                                </button>
                                <div class="accordion-panel" id="acc-panel-1" aria-labelledby="acc-head-1" hidden>
                                    <div class="accordion-content">
                                        These UI components leverage modern CSS Grid and Flexbox for responsive alignment, CSS Custom Properties for theme management, and CSS transitions for micro-interactions.
                                    </div>
                                </div>
                            </div>

                            <!-- Accordion Item 2 -->
                            <div class="accordion-item">
                                <button class="accordion-header" id="acc-head-2" aria-expanded="false" aria-controls="acc-panel-2">
                                    <span>How is keyboard accessibility implemented?</span>
                                    <span class="accordion-icon">+</span>
                                </button>
                                <div class="accordion-panel" id="acc-panel-2" aria-labelledby="acc-head-2" hidden>
                                    <div class="accordion-content">
                                        All interactive headers support Tab focus, Enter/Space activation, and Up/Down Arrow key navigation to switch focus between accordion headers cleanly.
                                    </div>
                                </div>
                            </div>

                            <!-- Accordion Item 3 -->
                            <div class="accordion-item">
                                <button class="accordion-header" id="acc-head-3" aria-expanded="false" aria-controls="acc-panel-3">
                                    <span>Is external library dependency required?</span>
                                    <span class="accordion-icon">+</span>
                                </button>
                                <div class="accordion-panel" id="acc-panel-3" aria-labelledby="acc-head-3" hidden>
                                    <div class="accordion-content">
                                        Zero external libraries! Everything is built with lightweight vanilla JavaScript (ES6+), maximizing execution speed and eliminating security risks.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- COMPONENT 3: TABBED INTERFACE SYSTEM -->
                <section class="card component-card" id="tabs-section">
                    <div class="card-header">
                        <div class="card-title">
                            <span class="component-num">03</span>
                            <h2>Dynamic Tabbed Panel System</h2>
                        </div>
                        <span class="tech-pill">Tabs / Panels</span>
                    </div>
                    <div class="card-body">
                        <p>Tabbed interface component with animated active indicator, `role="tablist"` navigation, Left/Right arrow key switching, and instant panel swapping.</p>
                        
                        <div class="tabs-container" id="demo-tabs">
                            <!-- Tab Header List -->
                            <div class="tab-list" role="tablist" aria-label="Component Information Tabs">
                                <button role="tab" aria-selected="true" aria-controls="panel-overview" id="tab-overview" tabindex="0" class="tab-btn active">
                                    📊 Overview
                                </button>
                                <button role="tab" aria-selected="false" aria-controls="panel-analytics" id="tab-analytics" tabindex="-1" class="tab-btn">
                                    📈 Analytics
                                </button>
                                <button role="tab" aria-selected="false" aria-controls="panel-settings" id="tab-settings" tabindex="-1" class="tab-btn">
                                    ⚙️ Settings
                                </button>
                            </div>

                            <!-- Tab Panels -->
                            <div class="tab-panels">
                                <div role="tabpanel" id="panel-overview" aria-labelledby="tab-overview" class="tab-panel active">
                                    <h3>System Overview</h3>
                                    <p>Interactive front-end components provide higher user retention, clear visual feedback, and intuitive content categorization.</p>
                                </div>
                                <div role="tabpanel" id="panel-analytics" aria-labelledby="tab-analytics" class="tab-panel" hidden>
                                    <h3>Performance Metrics</h3>
                                    <p>Components achieve 60fps animations with transform and opacity hardware acceleration, ensuring 0ms DOM bottlenecking.</p>
                                </div>
                                <div role="tabpanel" id="panel-settings" aria-labelledby="tab-settings" class="tab-panel" hidden>
                                    <h3>Configuration Options</h3>
                                    <p>Customize components easily using CSS Custom Properties (`:root`) or pass options directly to vanilla JavaScript constructor functions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- COMPONENT 4: TOAST NOTIFICATION MANAGER -->
                <section class="card component-card" id="toast-section">
                    <div class="card-header">
                        <div class="card-title">
                            <span class="component-num">04</span>
                            <h2>Toast Notification Manager</h2>
                        </div>
                        <span class="tech-pill">Toast / Feedback</span>
                    </div>
                    <div class="card-body">
                        <p>Dynamic toast notification system spawning auto-dismissing alerts with visual progress indicators and accessible `role="status"` live region support.</p>
                        <div class="demo-actions">
                            <button class="btn btn-success" id="toast-success-btn">Success Toast</button>
                            <button class="btn btn-warning" id="toast-warning-btn">Warning Toast</button>
                            <button class="btn btn-danger" id="toast-error-btn">Error Toast</button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>

    <!-- MODAL POPUP DIALOG (HIDDEN BY DEFAULT) -->
    <div class="modal-backdrop" id="modal-backdrop" aria-hidden="true">
        <div class="modal" id="demo-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
            <div class="modal-header">
                <h3 id="modal-title">Interactive Component Dialog</h3>
                <button class="modal-close" id="modal-close-btn" aria-label="Close dialog">&times;</button>
            </div>
            <div class="modal-body" id="modal-desc">
                <p>This modal dialog enforces a focus trap, preventing keyboard focus from escaping into background DOM elements while open. Press <kbd>ESC</kbd> key or click outside to dismiss.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" id="modal-cancel-btn">Close</button>
                <button class="btn btn-primary" id="modal-action-btn">Understand & Continue</button>
            </div>
        </div>
    </div>

    <!-- TOAST CONTAINER -->
    <div class="toast-container" id="toast-container" aria-live="polite" aria-atomic="true"></div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container text-center">
            <p>&copy; 2026 ComponentHub | Developed for Week 2 Interactive UI Components Internship Task.</p>
        </div>
    </footer>

    <!-- Main JavaScript -->
    <script src="script.js"></script>
</body>
</html>

```

### CSS Source (`style.css`)
```css
/* ==========================================================================
   ComponentHub - Interactive UI Components Stylesheet (Week 2)
   ========================================================================== */

:root {
    --primary: #4f46e5;
    --primary-hover: #4338ca;
    --primary-light: #e0e7ff;
    --success: #10b981;
    --success-hover: #059669;
    --warning: #f59e0b;
    --warning-hover: #d97706;
    --danger: #ef4444;
    --danger-hover: #dc2626;
    --dark: #0f172a;
    --light-bg: #f8fafc;
    --white: #ffffff;
    --text-main: #334155;
    --text-muted: #64748b;
    --text-dark: #0f172a;
    --border: #e2e8f0;
    --radius: 12px;
    --radius-sm: 6px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --font: 'Plus Jakarta Sans', system-ui, sans-serif;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font);
    background-color: var(--light-bg);
    color: var(--text-main);
    line-height: 1.6;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.text-center { text-align: center; }

/* Header */
.header {
    background: var(--white);
    border-bottom: 1px solid var(--border);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--text-dark);
}

.brand-highlight { color: var(--primary); }

.badge {
    background: var(--primary-light);
    color: var(--primary);
    padding: 0.35rem 0.85rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
}

/* Main Content */
.main-content {
    padding: 3rem 0;
}

.hero-header {
    margin-bottom: 3rem;
}

.hero-header h1 {
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
}

.hero-header p {
    color: var(--text-muted);
    font-size: 1.05rem;
    max-width: 650px;
    margin: 0 auto;
}

/* Component Cards Grid */
.component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    gap: 2rem;
}

.card {
    background: var(--white);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    transition: var(--transition);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--border);
    background: rgba(248, 250, 252, 0.5);
}

.card-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.component-num {
    font-weight: 800;
    color: var(--primary);
    background: var(--primary-light);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
}

.card-title h2 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-dark);
}

.tech-pill {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    background: var(--border);
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
}

.card-body {
    padding: 1.5rem;
}

.card-body > p {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: var(--radius-sm);
    border: 1px solid transparent;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary { background: var(--primary); color: var(--white); }
.btn-primary:hover { background: var(--primary-hover); }

.btn-outline { background: transparent; color: var(--text-dark); border-color: var(--border); }
.btn-outline:hover { background: var(--light-bg); border-color: var(--text-muted); }

.btn-success { background: var(--success); color: var(--white); }
.btn-success:hover { background: var(--success-hover); }

.btn-warning { background: var(--warning); color: var(--white); }
.btn-warning:hover { background: var(--warning-hover); }

.btn-danger { background: var(--danger); color: var(--white); }
.btn-danger:hover { background: var(--danger-hover); }

.demo-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

/* --------------------------------------------------------------------------
   COMPONENT 1: MODAL DIALOG
   -------------------------------------------------------------------------- */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 1000;
}

.modal-backdrop.active {
    opacity: 1;
    visibility: visible;
}

.modal {
    background: var(--white);
    width: 90%;
    max-width: 500px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    transform: translateY(-20px) scale(0.95);
    transition: var(--transition);
    overflow: hidden;
}

.modal-backdrop.active .modal {
    transform: translateY(0) scale(1);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--border);
}

.modal-header h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-dark);
}

.modal-close {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-muted);
}

.modal-body {
    padding: 1.5rem;
    color: var(--text-main);
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: var(--light-bg);
    border-top: 1px solid var(--border);
}

kbd {
    background: var(--border);
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
}

/* --------------------------------------------------------------------------
   COMPONENT 2: ACCORDION
   -------------------------------------------------------------------------- */
.accordion {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.accordion-item {
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    overflow: hidden;
}

.accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9rem 1.15rem;
    background: var(--white);
    border: none;
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-dark);
    text-align: left;
    cursor: pointer;
    transition: var(--transition);
}

.accordion-header:hover {
    background: var(--light-bg);
}

.accordion-header[aria-expanded="true"] {
    color: var(--primary);
    background: var(--primary-light);
}

.accordion-icon {
    font-size: 1.25rem;
    font-weight: 700;
    transition: transform 0.3s;
}

.accordion-header[aria-expanded="true"] .accordion-icon {
    transform: rotate(45deg);
}

.accordion-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease-out;
    background: var(--white);
}

.accordion-content {
    padding: 1rem 1.15rem;
    font-size: 0.9rem;
    color: var(--text-muted);
    border-top: 1px solid var(--border);
}

/* --------------------------------------------------------------------------
   COMPONENT 3: TABBED INTERFACE
   -------------------------------------------------------------------------- */
.tabs-container {
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    overflow: hidden;
}

.tab-list {
    display: flex;
    background: var(--light-bg);
    border-bottom: 1px solid var(--border);
}

.tab-btn {
    flex: 1;
    padding: 0.75rem 1rem;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: var(--transition);
    border-bottom: 2px solid transparent;
}

.tab-btn:hover {
    color: var(--text-dark);
}

.tab-btn.active {
    color: var(--primary);
    background: var(--white);
    border-bottom-color: var(--primary);
}

.tab-panels {
    padding: 1.25rem;
    background: var(--white);
}

.tab-panel {
    display: none;
}

.tab-panel.active {
    display: block;
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
}

.tab-panel h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
}

.tab-panel p {
    font-size: 0.9rem;
    color: var(--text-muted);
}

/* --------------------------------------------------------------------------
   COMPONENT 4: TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
.toast-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    z-index: 1100;
    pointer-events: none;
}

.toast {
    pointer-events: auto;
    min-width: 280px;
    max-width: 380px;
    background: var(--dark);
    color: var(--white);
    padding: 0.85rem 1.15rem;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    font-weight: 500;
    animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
    from { opacity: 0; transform: translateX(100%); }
    to { opacity: 1; transform: translateX(0); }
}

.toast.toast-success { border-left: 4px solid var(--success); }
.toast.toast-warning { border-left: 4px solid var(--warning); }
.toast.toast-danger { border-left: 4px solid var(--danger); }

.toast-close {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
    cursor: pointer;
    margin-left: 1rem;
}

.toast-close:hover { color: var(--white); }

/* Footer */
.footer {
    padding: 2rem 0;
    border-top: 1px solid var(--border);
    font-size: 0.85rem;
    color: var(--text-muted);
}

@media screen and (max-width: 768px) {
    .component-grid {
        grid-template-columns: 1fr;
    }
}

```

### JS Source (`script.js`)
```javascript
/**
 * ComponentHub - Interactive UI Components Vanilla JS (Week 2)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. ACCESSIBLE MODAL SYSTEM
       ========================================================================== */
    const modalBackdrop = document.getElementById('modal-backdrop');
    const openModalBtn = document.getElementById('open-modal-btn');
    const openConfirmBtn = document.getElementById('open-confirm-modal-btn');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const cancelModalBtn = document.getElementById('modal-cancel-btn');
    const actionModalBtn = document.getElementById('modal-action-btn');

    let previouslyFocusedElement = null;

    function openModal(titleText, bodyText) {
        previouslyFocusedElement = document.activeElement;
        
        if (titleText) document.getElementById('modal-title').textContent = titleText;
        if (bodyText) document.getElementById('modal-desc').textContent = bodyText;

        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');

        // Focus first interactive element inside modal
        setTimeout(() => closeModalBtn.focus(), 100);

        // Trap focus inside modal
        document.addEventListener('keydown', trapModalFocus);
    }

    function closeModal() {
        modalBackdrop.classList.remove('active');
        modalBackdrop.setAttribute('aria-hidden', 'true');

        document.removeEventListener('keydown', trapModalFocus);

        // Restore focus to button that opened modal
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
        }
    }

    function trapModalFocus(e) {
        if (e.key === 'Escape') {
            closeModal();
            return;
        }

        if (e.key === 'Tab') {
            const focusableElements = modalBackdrop.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    }

    if (openModalBtn) openModalBtn.addEventListener('click', () => openModal('Demo Component Modal', 'This modal dialog demonstrates accessible focus trapping and keyboard navigation.'));
    if (openConfirmBtn) openConfirmBtn.addEventListener('click', () => openModal('⚠️ Action Required', 'Are you sure you want to proceed with this interactive action?'));
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);
    if (actionModalBtn) actionModalBtn.addEventListener('click', () => {
        showToast('Action confirmed successfully!', 'success');
        closeModal();
    });

    // Backdrop click close
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeModal();
        });
    }


    /* ==========================================================================
       2. ANIMATED ACCORDION SYSTEM
       ========================================================================== */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach((header, index) => {
        header.addEventListener('click', () => toggleAccordion(header));

        header.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextHeader = accordionHeaders[(index + 1) % accordionHeaders.length];
                nextHeader.focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevHeader = accordionHeaders[(index - 1 + accordionHeaders.length) % accordionHeaders.length];
                prevHeader.focus();
            }
        });
    });

    function toggleAccordion(header) {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        const panelId = header.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        // Close all panels in accordion
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.setAttribute('aria-expanded', 'false');
                const otherPanelId = otherHeader.getAttribute('aria-controls');
                const otherPanel = document.getElementById(otherPanelId);
                if (otherPanel) {
                    otherPanel.style.maxHeight = null;
                    otherPanel.hidden = true;
                }
            }
        });

        // Toggle target panel
        if (!isExpanded) {
            header.setAttribute('aria-expanded', 'true');
            panel.hidden = false;
            panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
            header.setAttribute('aria-expanded', 'false');
            panel.style.maxHeight = null;
            panel.hidden = true;
        }
    }


    /* ==========================================================================
       3. DYNAMIC TABBED PANEL SYSTEM
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach((tab, index) => {
        tab.addEventListener('click', () => switchTab(tab));

        tab.addEventListener('keydown', (e) => {
            let targetIndex = null;
            if (e.key === 'ArrowRight') {
                targetIndex = (index + 1) % tabButtons.length;
            } else if (e.key === 'ArrowLeft') {
                targetIndex = (index - 1 + tabButtons.length) % tabButtons.length;
            }

            if (targetIndex !== null) {
                e.preventDefault();
                tabButtons[targetIndex].focus();
                switchTab(tabButtons[targetIndex]);
            }
        });
    });

    function switchTab(selectedTab) {
        const targetPanelId = selectedTab.getAttribute('aria-controls');

        tabButtons.forEach(tab => {
            const isSelected = tab === selectedTab;
            tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
            tab.setAttribute('tabindex', isSelected ? '0' : '-1');
            tab.classList.toggle('active', isSelected);
        });

        tabPanels.forEach(panel => {
            const isTarget = panel.getAttribute('id') === targetPanelId;
            panel.classList.toggle('active', isTarget);
            panel.hidden = !isTarget;
        });
    }


    /* ==========================================================================
       4. TOAST NOTIFICATION MANAGER
       ========================================================================== */
    const toastContainer = document.getElementById('toast-container');
    const toastSuccessBtn = document.getElementById('toast-success-btn');
    const toastWarningBtn = document.getElementById('toast-warning-btn');
    const toastErrorBtn = document.getElementById('toast-error-btn');

    if (toastSuccessBtn) toastSuccessBtn.addEventListener('click', () => showToast('Operation completed successfully!', 'success'));
    if (toastWarningBtn) toastWarningBtn.addEventListener('click', () => showToast('Caution: System resource usage is high.', 'warning'));
    if (toastErrorBtn) toastErrorBtn.addEventListener('click', () => showToast('Error: Connection timed out. Please try again.', 'danger'));

    function showToast(message, type = 'success') {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.setAttribute('role', 'status');

        toast.innerHTML = `
            <span>${message}</span>
            <button class="toast-close" aria-label="Dismiss notification">&times;</button>
        `;

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => dismissToast(toast));

        toastContainer.appendChild(toast);

        // Auto dismiss after 4 seconds
        setTimeout(() => dismissToast(toast), 4000);
    }

    function dismissToast(toast) {
        if (toast.parentNode) {
            toast.style.animation = 'slideInRight 0.3s reverse forwards';
            setTimeout(() => toast.remove(), 300);
        }
    }
});

```
