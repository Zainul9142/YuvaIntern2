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
