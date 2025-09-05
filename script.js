 // Counter functionality
        // This section handles the interactive counter feature
        let counter = 0;
        const counterDisplay = document.getElementById('counter-value');
        const decrementBtn = document.getElementById('decrement-btn');
        const incrementBtn = document.getElementById('increment-btn');
        const resetBtn = document.getElementById('reset-counter-btn');
        
        // Update the counter display
        function updateCounter() {
            counterDisplay.textContent = counter;
        }
        
        // Event listeners for counter buttons
        decrementBtn.addEventListener('click', () => {
            counter--;
            updateCounter();
        });
        
        incrementBtn.addEventListener('click', () => {
            counter++;
            updateCounter();
        });
        
        resetBtn.addEventListener('click', () => {
            counter = 0;
            updateCounter();
        });
        
        // Initialize counter display
        updateCounter();
        
        // Color changer functionality
        // This section handles the background color changing feature
        const colorBox = document.getElementById('color-box');
        const colorRed = document.getElementById('color-red');
        const colorBlue = document.getElementById('color-blue');
        const colorGreen = document.getElementById('color-green');
        const colorRandom = document.getElementById('color-random');
        
        // Set initial color
        colorBox.style.backgroundColor = '#f0f0f0';
        
        // Event listeners for color buttons
        colorRed.addEventListener('click', () => {
            colorBox.style.backgroundColor = '#ff3860';
        });
        
        colorBlue.addEventListener('click', () => {
            colorBox.style.backgroundColor = '#6e8efb';
        });
        
        colorGreen.addEventListener('click', () => {
            colorBox.style.backgroundColor = '#23d160';
        });
        
        colorRandom.addEventListener('click', () => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            colorBox.style.backgroundColor = randomColor;
        });
        
        // Form validation functionality
        // This section handles the custom form validation
        const contactForm = document.getElementById('contact-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        const formSuccess = document.getElementById('form-success');
        
        // Validate name field
        function validateName() {
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                return false;
            } else if (nameInput.value.trim().length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                return false;
            } else {
                nameError.textContent = '';
                return true;
            }
        }
        
        // Validate email field
        function validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required';
                return false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                return false;
            } else {
                emailError.textContent = '';
                return true;
            }
        }
        
        // Validate message field
        function validateMessage() {
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required';
                return false;
            } else if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                return false;
            } else {
                messageError.textContent = '';
                return true;
            }
        }
        
        // Add input event listeners for real-time validation
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        messageInput.addEventListener('input', validateMessage);
        
        // Handle form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();
            
            if (isNameValid && isEmailValid && isMessageValid) {
                // Form is valid - in a real application, you would submit data here
                formSuccess.textContent = 'Form submitted successfully!';
                
                // Clear form fields
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    formSuccess.textContent = '';
                }, 3000);
            } else {
                formSuccess.textContent = '';
            }
        });