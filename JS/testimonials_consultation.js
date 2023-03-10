var gradient = new Gradient()
gradient.initGradient('#consultation-canvas');

let bg = document.querySelector('.tesimonials-consultation__slider-bg');
let images = ["Images/startup.png", "Images/startup_2.png", "Images/startup_3.png", "Images/startup_4.png"];
let title = document.querySelector('.testimonials-consultation__slider-title')
let columnTitle = document.querySelectorAll('.testimonials-consultation__column-title')
let columnText = document.querySelectorAll('.testimonials-consultation__column-text')
let bgColor = document.querySelector('.testimonials-consultation__slider')
let index = 0;
let btnGrowth = document.getElementById('Growth')
let btnStartup = document.getElementById('Startup')
let btnEnterprise = document.getElementById('Enterprise');
let btnResidency = document.getElementById('Residency');
let header = document.querySelector('.testimonials-consultation__slider-header')
let products = document.querySelector('.testimonial-consultation__products-list')
const slider = () => {
    switch (index) {
        case 0:
            title.style.transform = 'translateX(0%)'
            bg.src = images[0];
            index = 1;
            bgColor.style.background = '#635bff'
            title.innerHTML = 'Reduction in customer onboarding time ';
            columnTitle[0].innerHTML = '3,000×'
            columnText[0].innerHTML = 'Reduction in customer onboarding time '
            columnTitle[1].innerHTML = '100+'
            columnText[1].innerHTML = 'Countries where Substack can accept payments'
            header.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="35" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="47.15 7.12 200 35"><title>Slack logo</title><g fill="none"><path fill="#fff" d="M80.95 28.15l1.32-3.06a8.8 8.8 0 005.2 1.62c1.38 0 2.25-.53 2.25-1.34-.02-2.26-8.28-.49-8.34-6.15-.03-2.87 2.53-5.08 6.15-5.08 2.15 0 4.3.53 5.83 1.75L92.12 19a9.32 9.32 0 00-4.8-1.53c-1.13 0-1.88.53-1.88 1.21.02 2.21 8.34 1 8.43 6.4 0 2.94-2.49 5-6.07 5-2.61 0-5.02-.62-6.85-1.94M131.59 24a3.8 3.8 0 110-3.74l3.64-2.02a7.98 7.98 0 100 7.78L131.59 24zM95.7 7.53h4.55v22.26H95.7zm41.31 0V29.8h4.56v-6.68l5.4 6.68h5.84l-6.88-7.93 6.37-7.4h-5.58l-5.15 6.15V7.53zm-23.21 16.5a4.2 4.2 0 01-3.56 1.9 3.8 3.8 0 110-7.62c1.53 0 2.9.85 3.55 1.96v3.76zm0-9.57v1.8c-.75-1.25-2.6-2.12-4.54-2.12-4 0-7.15 3.53-7.15 7.95 0 4.43 3.15 8 7.15 8 1.94 0 3.79-.87 4.53-2.13v1.8h4.56v-15.3h-4.56z"></path><path fill="var(--userLogoColor, #E01E5A)" d="M52.79 24a2.8 2.8 0 11-2.81-2.8h2.81V24zm1.4 0a2.8 2.8 0 115.62 0v7.02a2.8 2.8 0 11-5.62 0v-7.01z"></path><path fill="var(--userLogoColor, #36C5F0)" d="M57 12.74a2.8 2.8 0 112.81-2.8v2.8h-2.8zm0 1.42a2.8 2.8 0 110 5.62h-7.04a2.8 2.8 0 110-5.62H57z"></path><path fill="var(--userLogoColor, #2EB67D)" d="M68.26 16.97a2.8 2.8 0 112.81 2.8h-2.8v-2.8zm-1.4 0a2.8 2.8 0 11-5.62 0V9.93a2.8 2.8 0 115.62 0v7.04z"></path><path fill="var(--userLogoColor, #ECB22E)" d="M64.05 28.22a2.8 2.8 0 11-2.81 2.8v-2.8h2.8zm0-1.4a2.8 2.8 0 110-5.62h7.04a2.8 2.8 0 110 5.61h-7.04z"></path></g></svg>
        <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>
  `
            products.innerHTML = `
          <li> <img src="Images/consultation.png" alt=""> <label class="testimonial-consultation__products-label">Consultation</label></li>
          <li> <img src="Images/accounting.png"><label class="testimonial-consultation__products-label">Accounting</label></li>
  
  `
            break;

        case 1:
            bg.src = images[1];
            header.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="50 5 200 40"><path fill="var(--userLogoColor, #F22F46)" d="M64.4 16.3c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1zm-3.1 4.3c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zM80 20c0 8.3-6.7 15-15 15s-15-6.7-15-15S56.7 5 65 5s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11 4.9 11 11 11 11-4.9 11-11zm-7.3.6c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm0-7.4c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm51.6-2.3c.1 0 .2.1.3.2v3.2c0 .2-.2.3-.3.3H115c-.2 0-.3-.2-.3-.3v-3.1c0-.2.2-.3.3-.3h5.3zm-.1 4.5H110c-.1 0-.3.1-.3.3l-1.3 5-.1.3-1.6-5.3c0-.1-.2-.3-.3-.3h-4c-.1 0-.3.1-.3.3l-1.5 5-.1.3-.1-.3-.6-2.5-.6-2.5c0-.1-.2-.3-.3-.3h-8v-4.3c0-.1-.2-.3-.4-.2l-5 1.6c-.2 0-.3.1-.3.3v2.7h-1.3c-.1 0-.3.1-.3.3v3.8c0 .1.1.3.3.3h1.3v4.7c0 3.3 1.8 4.8 5.1 4.8 1.4 0 2.7-.3 3.6-.8v-4c0-.2-.2-.3-.3-.2-.5.2-1 .3-1.4.3-.9 0-1.4-.4-1.4-1.4v-3.4h2.9c.1 0 .3-.1.3-.3v-3.2L97.8 29c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l1.8-5.6.9 2.9.8 2.7c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l3.8-12.6V29c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.2-.3zm6.7-4.5h-5.1c-.1 0-.3.1-.3.3v17.7c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V11.1c0-.1-.1-.2-.3-.2zm6.8 0h-5.3c-.1 0-.3.1-.3.3v3.1c0 .1.1.3.3.3h5.3c.1 0 .3-.1.3-.3v-3.2c0-.1-.1-.2-.3-.2zm-.1 4.5h-5.1c-.1 0-.3.1-.3.3v13.1c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.3-.3zm16.1 6.8c0 3.8-3.2 7.1-7.7 7.1-4.4 0-7.6-3.3-7.6-7.1s3.2-7.1 7.7-7.1c4.4 0 7.6 3.3 7.6 7.1zm-5.4.1c0-1.4-1-2.5-2.2-2.4-1.3 0-2.2 1.1-2.2 2.4 0 1.3 1 2.4 2.2 2.4 1.3 0 2.2-1.1 2.2-2.4z"></path><title>Twilio logo</title></svg>
    <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>  
  `
            products.innerHTML = `
          <li> <img src="Images/residency.png" alt=""> <label class="testimonial-consultation__products-label">Residency</label></li>
          <li> <img src="Images/ba.png"><label class="testimonial-consultation__products-label">Bank Account</label></li>
  
  `
            index = 2;
            bgColor.style.background = '#1bd9e5'
            title.innerHTML = 'Slack deploys Stripe globally for enterprise payments and billing';
            columnTitle[0].innerHTML = '1'
            columnText[0].innerHTML = 'Processor for all credit card payments '
            columnTitle[1].innerHTML = '2 weeks'
            columnText[1].innerHTML = 'Deployment to 15 countries'
            break;

        case 2:
            bg.src = images[2];
            header.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="55 1.001 200 40"><title>Classy logo</title><path fill="#fff" fill-rule="evenodd" d="M91.276 25.767c-1.43 0-1.55-1.925-1.4-3.576.307-3.394 2.245-7.34 4.341-7.34 1.239 0 2.098 1.468 2.5 2.294-.75 3.023-3.418 8.623-5.441 8.623zM78.047 17.33c.491-5.412 3.271-12.108 5.114-12.108.953 0 .87 1.325.762 2.518-.34 3.76-3.224 8.646-6.033 12.315-.028-.733.074-1.808.157-2.725zm66.369-4.77c-1.334 0-1.852.459-2.084.917-.747 2.286-1.374 4.317-2.327 6.427-1.074 2.385-2.91 5.975-4.339 5.975-1.143 0-1.393-1.577-1.269-2.953.08-1.926.797-4.77 1.274-6.88l.421-1.926c.213-1.285-.496-1.835-1.83-1.835-1.047 0-1.775.458-1.912.917-.559 2.065-.91 3.778-1.917 6.05-.553 1.248-1.336 2.854-3.025 4.408.315-1.931-.397-4.224-1.19-6.243-.419-1.192-.84-2.143-1.587-3.485-.529-.95-1.277-1.867-2.579-1.867-.857 0-1.825.328-2.22.825-.767 2.294-2.959 6.359-4.776 8.862.02-1.65-.914-4.13-1.827-5.834-.355-.666-1.124-1.974-1.554-2.598-.608-.884-1.266-1.348-2.218-1.348-1.048 0-1.654.276-2.106.826-.783 2.35-2.648 6.316-3.744 8.289-1.074 1.934-2.127 3.94-2.969 3.94-.762 0-.788-1.093-.706-2.01.159-1.742 1.785-6.976 2.195-8.352.318-1.284-.931-1.738-2.1-1.463l-1.363.367c-.878-.825-2.493-1.926-4.526-1.926-4.08 0-8.113 4.862-8.58 10.4-1.276 1.83-3.074 3.866-4.833 3.635-.849-.112-1.62-.743-1.902-1.838 3.829-4.403 7.93-11.188 8.38-16.142.326-3.597-1.04-5.78-3.809-5.78-5.144 0-8.894 7.248-9.56 14.587-.241 2.66-.212 4.891.272 6.909-2.222 2.324-5.266 4.19-8.315 4.19-3.138 0-6.257-3.016-5.878-8.99.392-6.151 4.523-14.22 8.349-14.22 1.3 0 1.851 1.32 1.686 2.487-.164 1.16-.564 1.876-1.134 2.629-.19.924.498 2.11 1.847 2.11 1.907 0 3.025-2.121 3.244-4.686.27-3.175-1.46-5.933-5.2-5.933-7.827 0-13.213 9.75-13.668 17.613-.403 6.987 2.432 12.842 9.807 12.842 3.62 0 7.239-2.179 10.462-4.992 1.097 1.56 2.33 2.79 4.8 2.79 2.114 0 4.3-1.687 5.807-3.501.714 2.164 2.315 3.502 4.275 3.502 2.396 0 4.39-1.626 5.97-4.224.476 1.834 1.35 3.574 3.43 3.574 2.382 0 3.689-1.8 5.28-4.171 1.261-1.88 2.207-4.152 3.79-7.292l.591.849c1.245 2.201 2.25 4.257 2.052 5.816-.209 1.651-1.396 2.237-2.497 2.237-1.102 0-1.555-.65-2.361-1.192-.847.117-1.355 1.1-1.461 1.926-.221 1.742 1.166 2.66 3.643 2.66 3.335 0 5.197-1.57 6.796-3.582 1.747-2.197 4.502-6.416 5.632-9.039 1.317 2.385 2.638 5.19 2.417 6.934-.175 1.376-1.06 2.476-2.489 2.476-1.048 0-1.935-.935-2.651-1.302-.477 0-1.236 1.028-1.365 2.036-.209 1.652 1.187 2.661 4.141 2.661 3.641 0 6.979-2.515 9.442-5.512.218 2.844 1.291 5.164 4.221 5.164 2 0 3.947-1.435 5.746-4.508 0 0-.855 3.697-1.107 4.76-.697 2.92-1.404 5.625-1.58 7.557-.152 1.65.896 2.293 2.038 2.293 1.049 0 1.968-.733 2.114-1.284.518-5.714 1.576-11.28 2.672-16.91.317-1.629 1.303-6.513 1.303-6.513.203-1.192-.205-2.109-1.539-2.109z"></path></svg>
   <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>
  `
            products.innerHTML = `
          <li> <img src="Images/residency.png" alt=""> <label class="testimonial-consultation__products-label">Residency</label></li>
          <li> <img src="Images/ba.png"><label class="testimonial-consultation__products-label">Bank Account</label></li>
  
  `
            bgColor.style.background = 'rgb(76, 87, 248)'
            title.innerHTML = 'Zapier sees 4% uplift in auth rates with Stripe, creating $3M+ in additional revenue';
            columnTitle[0].innerHTML = 'Weeks to minutes'
            columnText[0].innerHTML = '2-5x faster'
            columnTitle[1].innerHTML = 'Fast reconciliation with a single report'
            columnText[1].innerHTML = 'Deployment to 15 countries'
            index = 3;

            break;

        case 3:
            bg.src = images[3];
            header.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="55 1.001 200 40"><title>Classy logo</title><path fill="#fff" fill-rule="evenodd" d="M91.276 25.767c-1.43 0-1.55-1.925-1.4-3.576.307-3.394 2.245-7.34 4.341-7.34 1.239 0 2.098 1.468 2.5 2.294-.75 3.023-3.418 8.623-5.441 8.623zM78.047 17.33c.491-5.412 3.271-12.108 5.114-12.108.953 0 .87 1.325.762 2.518-.34 3.76-3.224 8.646-6.033 12.315-.028-.733.074-1.808.157-2.725zm66.369-4.77c-1.334 0-1.852.459-2.084.917-.747 2.286-1.374 4.317-2.327 6.427-1.074 2.385-2.91 5.975-4.339 5.975-1.143 0-1.393-1.577-1.269-2.953.08-1.926.797-4.77 1.274-6.88l.421-1.926c.213-1.285-.496-1.835-1.83-1.835-1.047 0-1.775.458-1.912.917-.559 2.065-.91 3.778-1.917 6.05-.553 1.248-1.336 2.854-3.025 4.408.315-1.931-.397-4.224-1.19-6.243-.419-1.192-.84-2.143-1.587-3.485-.529-.95-1.277-1.867-2.579-1.867-.857 0-1.825.328-2.22.825-.767 2.294-2.959 6.359-4.776 8.862.02-1.65-.914-4.13-1.827-5.834-.355-.666-1.124-1.974-1.554-2.598-.608-.884-1.266-1.348-2.218-1.348-1.048 0-1.654.276-2.106.826-.783 2.35-2.648 6.316-3.744 8.289-1.074 1.934-2.127 3.94-2.969 3.94-.762 0-.788-1.093-.706-2.01.159-1.742 1.785-6.976 2.195-8.352.318-1.284-.931-1.738-2.1-1.463l-1.363.367c-.878-.825-2.493-1.926-4.526-1.926-4.08 0-8.113 4.862-8.58 10.4-1.276 1.83-3.074 3.866-4.833 3.635-.849-.112-1.62-.743-1.902-1.838 3.829-4.403 7.93-11.188 8.38-16.142.326-3.597-1.04-5.78-3.809-5.78-5.144 0-8.894 7.248-9.56 14.587-.241 2.66-.212 4.891.272 6.909-2.222 2.324-5.266 4.19-8.315 4.19-3.138 0-6.257-3.016-5.878-8.99.392-6.151 4.523-14.22 8.349-14.22 1.3 0 1.851 1.32 1.686 2.487-.164 1.16-.564 1.876-1.134 2.629-.19.924.498 2.11 1.847 2.11 1.907 0 3.025-2.121 3.244-4.686.27-3.175-1.46-5.933-5.2-5.933-7.827 0-13.213 9.75-13.668 17.613-.403 6.987 2.432 12.842 9.807 12.842 3.62 0 7.239-2.179 10.462-4.992 1.097 1.56 2.33 2.79 4.8 2.79 2.114 0 4.3-1.687 5.807-3.501.714 2.164 2.315 3.502 4.275 3.502 2.396 0 4.39-1.626 5.97-4.224.476 1.834 1.35 3.574 3.43 3.574 2.382 0 3.689-1.8 5.28-4.171 1.261-1.88 2.207-4.152 3.79-7.292l.591.849c1.245 2.201 2.25 4.257 2.052 5.816-.209 1.651-1.396 2.237-2.497 2.237-1.102 0-1.555-.65-2.361-1.192-.847.117-1.355 1.1-1.461 1.926-.221 1.742 1.166 2.66 3.643 2.66 3.335 0 5.197-1.57 6.796-3.582 1.747-2.197 4.502-6.416 5.632-9.039 1.317 2.385 2.638 5.19 2.417 6.934-.175 1.376-1.06 2.476-2.489 2.476-1.048 0-1.935-.935-2.651-1.302-.477 0-1.236 1.028-1.365 2.036-.209 1.652 1.187 2.661 4.141 2.661 3.641 0 6.979-2.515 9.442-5.512.218 2.844 1.291 5.164 4.221 5.164 2 0 3.947-1.435 5.746-4.508 0 0-.855 3.697-1.107 4.76-.697 2.92-1.404 5.625-1.58 7.557-.152 1.65.896 2.293 2.038 2.293 1.049 0 1.968-.733 2.114-1.284.518-5.714 1.576-11.28 2.672-16.91.317-1.629 1.303-6.513 1.303-6.513.203-1.192-.205-2.109-1.539-2.109z"></path></svg>
   <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>
  `
            products.innerHTML = `
          <li> <img src="Images/residency.png" alt=""> <label class="testimonial-consultation__products-label">Residency</label></li>
          <li> <img src="Images/ba.png"><label class="testimonial-consultation__products-label">Bank Account</label></li>
  
  `
            bgColor.style.background = 'rgb(76, 87, 248)'
            title.innerHTML = 'Zapier sees 4% uplift in auth rates with Stripe, creating $3M+ in additional revenue';
            columnTitle[0].innerHTML = 'Weeks to minutes'
            columnText[0].innerHTML = '2-5x faster'
            columnTitle[1].innerHTML = 'Fast reconciliation with a single report'
            columnText[1].innerHTML = 'Deployment to 15 countries'
            index = 0;
            break;
    }

}
let intervalId = setInterval(slider, 3000);

btnGrowth.addEventListener('click', () => {
    // остановка интервала
    clearInterval(intervalId);

    // переключение на случай 1
    bg.src = images[1];
    index = 0;
    header.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="50 5 200 40"><path fill="var(--userLogoColor, #F22F46)" d="M64.4 16.3c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1zm-3.1 4.3c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zM80 20c0 8.3-6.7 15-15 15s-15-6.7-15-15S56.7 5 65 5s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11 4.9 11 11 11 11-4.9 11-11zm-7.3.6c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm0-7.4c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm51.6-2.3c.1 0 .2.1.3.2v3.2c0 .2-.2.3-.3.3H115c-.2 0-.3-.2-.3-.3v-3.1c0-.2.2-.3.3-.3h5.3zm-.1 4.5H110c-.1 0-.3.1-.3.3l-1.3 5-.1.3-1.6-5.3c0-.1-.2-.3-.3-.3h-4c-.1 0-.3.1-.3.3l-1.5 5-.1.3-.1-.3-.6-2.5-.6-2.5c0-.1-.2-.3-.3-.3h-8v-4.3c0-.1-.2-.3-.4-.2l-5 1.6c-.2 0-.3.1-.3.3v2.7h-1.3c-.1 0-.3.1-.3.3v3.8c0 .1.1.3.3.3h1.3v4.7c0 3.3 1.8 4.8 5.1 4.8 1.4 0 2.7-.3 3.6-.8v-4c0-.2-.2-.3-.3-.2-.5.2-1 .3-1.4.3-.9 0-1.4-.4-1.4-1.4v-3.4h2.9c.1 0 .3-.1.3-.3v-3.2L97.8 29c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l1.8-5.6.9 2.9.8 2.7c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l3.8-12.6V29c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.2-.3zm6.7-4.5h-5.1c-.1 0-.3.1-.3.3v17.7c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V11.1c0-.1-.1-.2-.3-.2zm6.8 0h-5.3c-.1 0-.3.1-.3.3v3.1c0 .1.1.3.3.3h5.3c.1 0 .3-.1.3-.3v-3.2c0-.1-.1-.2-.3-.2zm-.1 4.5h-5.1c-.1 0-.3.1-.3.3v13.1c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.3-.3zm16.1 6.8c0 3.8-3.2 7.1-7.7 7.1-4.4 0-7.6-3.3-7.6-7.1s3.2-7.1 7.7-7.1c4.4 0 7.6 3.3 7.6 7.1zm-5.4.1c0-1.4-1-2.5-2.2-2.4-1.3 0-2.2 1.1-2.2 2.4 0 1.3 1 2.4 2.2 2.4 1.3 0 2.2-1.1 2.2-2.4z"></path><title>Twilio logo</title></svg>
    <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>  
  `
    products.innerHTML = `
          <li> <img src="Images/residency.png" alt=""> <label class="testimonial-consultation__products-label">Residency</label></li>
          <li> <img src="Images/ba.png"><label class="testimonial-consultation__products-label">Bank Account</label></li>
  
  `
    bgColor.style.background = '#1bd9e5'
    title.innerHTML = 'Slack deploys Stripe globally for enterprise payments and billing';
    columnTitle[0].innerHTML = '3,000×'
    columnText[0].innerHTML = 'Processor for all credit card payments '
    columnTitle[1].innerHTML = '2 weeks'
    columnText[1].innerHTML = 'Deployment to 15 countries'
    btnStartup.classList.remove('button--consultation');
    btnGrowth.classList.add('button--consultation');
    btnEnterprise.classList.remove('button--consultation');
    btnResidency.classList.remove('button--consultation');

});

btnStartup.addEventListener('click', () => {
    // остановка интервала
    clearInterval(intervalId);

    // переключение на случай 1
    bg.src = images[0];
    index = 1;
    header.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="35" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="47.15 7.12 200 35"><title>Slack logo</title><g fill="none"><path fill="#fff" d="M80.95 28.15l1.32-3.06a8.8 8.8 0 005.2 1.62c1.38 0 2.25-.53 2.25-1.34-.02-2.26-8.28-.49-8.34-6.15-.03-2.87 2.53-5.08 6.15-5.08 2.15 0 4.3.53 5.83 1.75L92.12 19a9.32 9.32 0 00-4.8-1.53c-1.13 0-1.88.53-1.88 1.21.02 2.21 8.34 1 8.43 6.4 0 2.94-2.49 5-6.07 5-2.61 0-5.02-.62-6.85-1.94M131.59 24a3.8 3.8 0 110-3.74l3.64-2.02a7.98 7.98 0 100 7.78L131.59 24zM95.7 7.53h4.55v22.26H95.7zm41.31 0V29.8h4.56v-6.68l5.4 6.68h5.84l-6.88-7.93 6.37-7.4h-5.58l-5.15 6.15V7.53zm-23.21 16.5a4.2 4.2 0 01-3.56 1.9 3.8 3.8 0 110-7.62c1.53 0 2.9.85 3.55 1.96v3.76zm0-9.57v1.8c-.75-1.25-2.6-2.12-4.54-2.12-4 0-7.15 3.53-7.15 7.95 0 4.43 3.15 8 7.15 8 1.94 0 3.79-.87 4.53-2.13v1.8h4.56v-15.3h-4.56z"></path><path fill="var(--userLogoColor, #E01E5A)" d="M52.79 24a2.8 2.8 0 11-2.81-2.8h2.81V24zm1.4 0a2.8 2.8 0 115.62 0v7.02a2.8 2.8 0 11-5.62 0v-7.01z"></path><path fill="var(--userLogoColor, #36C5F0)" d="M57 12.74a2.8 2.8 0 112.81-2.8v2.8h-2.8zm0 1.42a2.8 2.8 0 110 5.62h-7.04a2.8 2.8 0 110-5.62H57z"></path><path fill="var(--userLogoColor, #2EB67D)" d="M68.26 16.97a2.8 2.8 0 112.81 2.8h-2.8v-2.8zm-1.4 0a2.8 2.8 0 11-5.62 0V9.93a2.8 2.8 0 115.62 0v7.04z"></path><path fill="var(--userLogoColor, #ECB22E)" d="M64.05 28.22a2.8 2.8 0 11-2.81 2.8v-2.8h2.8zm0-1.4a2.8 2.8 0 110-5.62h7.04a2.8 2.8 0 110 5.61h-7.04z"></path></g></svg>
        <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>
  `

    products.innerHTML = `
          <li> <img src="Images/consultation.png" alt=""> <label class="testimonial-consultation__products-label">Consultation</label></li>
          <li> <img src="Images/accounting.png"><label class="testimonial-consultation__products-label">Accounting</label></li>
          `

    bgColor.style.background = '#635bff'
    title.innerHTML = 'Reduction in customer onboarding time';
    columnTitle[0].innerHTML = '1'
    columnText[0].innerHTML = 'Reduction in customer onboarding time '
    columnTitle[1].innerHTML = '100+'
    columnText[1].innerHTML = 'Countries where Substack can accept payments'
    btnStartup.classList.add('button--consultation');
    btnGrowth.classList.remove('button--consultation');
    btnEnterprise.classList.remove('button--consultation');
    btnResidency.classList.remove('button--consultation');
});

btnEnterprise.addEventListener('click', () => {
    // остановка интервала
    clearInterval(intervalId);

    // переключение на случай 1
    bg.src = images[0];
    header.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="35" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="47.15 7.12 200 35"><title>Slack logo</title><g fill="none"><path fill="#fff" d="M80.95 28.15l1.32-3.06a8.8 8.8 0 005.2 1.62c1.38 0 2.25-.53 2.25-1.34-.02-2.26-8.28-.49-8.34-6.15-.03-2.87 2.53-5.08 6.15-5.08 2.15 0 4.3.53 5.83 1.75L92.12 19a9.32 9.32 0 00-4.8-1.53c-1.13 0-1.88.53-1.88 1.21.02 2.21 8.34 1 8.43 6.4 0 2.94-2.49 5-6.07 5-2.61 0-5.02-.62-6.85-1.94M131.59 24a3.8 3.8 0 110-3.74l3.64-2.02a7.98 7.98 0 100 7.78L131.59 24zM95.7 7.53h4.55v22.26H95.7zm41.31 0V29.8h4.56v-6.68l5.4 6.68h5.84l-6.88-7.93 6.37-7.4h-5.58l-5.15 6.15V7.53zm-23.21 16.5a4.2 4.2 0 01-3.56 1.9 3.8 3.8 0 110-7.62c1.53 0 2.9.85 3.55 1.96v3.76zm0-9.57v1.8c-.75-1.25-2.6-2.12-4.54-2.12-4 0-7.15 3.53-7.15 7.95 0 4.43 3.15 8 7.15 8 1.94 0 3.79-.87 4.53-2.13v1.8h4.56v-15.3h-4.56z"></path><path fill="var(--userLogoColor, #E01E5A)" d="M52.79 24a2.8 2.8 0 11-2.81-2.8h2.81V24zm1.4 0a2.8 2.8 0 115.62 0v7.02a2.8 2.8 0 11-5.62 0v-7.01z"></path><path fill="var(--userLogoColor, #36C5F0)" d="M57 12.74a2.8 2.8 0 112.81-2.8v2.8h-2.8zm0 1.42a2.8 2.8 0 110 5.62h-7.04a2.8 2.8 0 110-5.62H57z"></path><path fill="var(--userLogoColor, #2EB67D)" d="M68.26 16.97a2.8 2.8 0 112.81 2.8h-2.8v-2.8zm-1.4 0a2.8 2.8 0 11-5.62 0V9.93a2.8 2.8 0 115.62 0v7.04z"></path><path fill="var(--userLogoColor, #ECB22E)" d="M64.05 28.22a2.8 2.8 0 11-2.81 2.8v-2.8h2.8zm0-1.4a2.8 2.8 0 110-5.62h7.04a2.8 2.8 0 110 5.61h-7.04z"></path></g></svg>
        <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>
  `

    products.innerHTML = `
          <li> <img src="Images/consultation.png" alt=""> <label class="testimonial-consultation__products-label">Consultation</label></li>
          <li> <img src="Images/accounting.png"><label class="testimonial-consultation__products-label">Accounting</label></li>
          `

    bg.src = images[2];
    header.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="55 1.001 200 40"><title>Classy logo</title><path fill="#fff" fill-rule="evenodd" d="M91.276 25.767c-1.43 0-1.55-1.925-1.4-3.576.307-3.394 2.245-7.34 4.341-7.34 1.239 0 2.098 1.468 2.5 2.294-.75 3.023-3.418 8.623-5.441 8.623zM78.047 17.33c.491-5.412 3.271-12.108 5.114-12.108.953 0 .87 1.325.762 2.518-.34 3.76-3.224 8.646-6.033 12.315-.028-.733.074-1.808.157-2.725zm66.369-4.77c-1.334 0-1.852.459-2.084.917-.747 2.286-1.374 4.317-2.327 6.427-1.074 2.385-2.91 5.975-4.339 5.975-1.143 0-1.393-1.577-1.269-2.953.08-1.926.797-4.77 1.274-6.88l.421-1.926c.213-1.285-.496-1.835-1.83-1.835-1.047 0-1.775.458-1.912.917-.559 2.065-.91 3.778-1.917 6.05-.553 1.248-1.336 2.854-3.025 4.408.315-1.931-.397-4.224-1.19-6.243-.419-1.192-.84-2.143-1.587-3.485-.529-.95-1.277-1.867-2.579-1.867-.857 0-1.825.328-2.22.825-.767 2.294-2.959 6.359-4.776 8.862.02-1.65-.914-4.13-1.827-5.834-.355-.666-1.124-1.974-1.554-2.598-.608-.884-1.266-1.348-2.218-1.348-1.048 0-1.654.276-2.106.826-.783 2.35-2.648 6.316-3.744 8.289-1.074 1.934-2.127 3.94-2.969 3.94-.762 0-.788-1.093-.706-2.01.159-1.742 1.785-6.976 2.195-8.352.318-1.284-.931-1.738-2.1-1.463l-1.363.367c-.878-.825-2.493-1.926-4.526-1.926-4.08 0-8.113 4.862-8.58 10.4-1.276 1.83-3.074 3.866-4.833 3.635-.849-.112-1.62-.743-1.902-1.838 3.829-4.403 7.93-11.188 8.38-16.142.326-3.597-1.04-5.78-3.809-5.78-5.144 0-8.894 7.248-9.56 14.587-.241 2.66-.212 4.891.272 6.909-2.222 2.324-5.266 4.19-8.315 4.19-3.138 0-6.257-3.016-5.878-8.99.392-6.151 4.523-14.22 8.349-14.22 1.3 0 1.851 1.32 1.686 2.487-.164 1.16-.564 1.876-1.134 2.629-.19.924.498 2.11 1.847 2.11 1.907 0 3.025-2.121 3.244-4.686.27-3.175-1.46-5.933-5.2-5.933-7.827 0-13.213 9.75-13.668 17.613-.403 6.987 2.432 12.842 9.807 12.842 3.62 0 7.239-2.179 10.462-4.992 1.097 1.56 2.33 2.79 4.8 2.79 2.114 0 4.3-1.687 5.807-3.501.714 2.164 2.315 3.502 4.275 3.502 2.396 0 4.39-1.626 5.97-4.224.476 1.834 1.35 3.574 3.43 3.574 2.382 0 3.689-1.8 5.28-4.171 1.261-1.88 2.207-4.152 3.79-7.292l.591.849c1.245 2.201 2.25 4.257 2.052 5.816-.209 1.651-1.396 2.237-2.497 2.237-1.102 0-1.555-.65-2.361-1.192-.847.117-1.355 1.1-1.461 1.926-.221 1.742 1.166 2.66 3.643 2.66 3.335 0 5.197-1.57 6.796-3.582 1.747-2.197 4.502-6.416 5.632-9.039 1.317 2.385 2.638 5.19 2.417 6.934-.175 1.376-1.06 2.476-2.489 2.476-1.048 0-1.935-.935-2.651-1.302-.477 0-1.236 1.028-1.365 2.036-.209 1.652 1.187 2.661 4.141 2.661 3.641 0 6.979-2.515 9.442-5.512.218 2.844 1.291 5.164 4.221 5.164 2 0 3.947-1.435 5.746-4.508 0 0-.855 3.697-1.107 4.76-.697 2.92-1.404 5.625-1.58 7.557-.152 1.65.896 2.293 2.038 2.293 1.049 0 1.968-.733 2.114-1.284.518-5.714 1.576-11.28 2.672-16.91.317-1.629 1.303-6.513 1.303-6.513.203-1.192-.205-2.109-1.539-2.109z"></path></svg>
   <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>
  `
    products.innerHTML = `
          <li> <img src="Images/residency.png" alt=""> <label class="testimonial-consultation__products-label">Residency</label></li>
          <li> <img src="Images/ba.png"><label class="testimonial-consultation__products-label">Bank Account</label></li>
  
  `
    bgColor.style.background = 'rgb(76, 87, 248)'
    title.innerHTML = 'Zapier sees 4% uplift in auth rates with Stripe, creating $3M+ in additional revenue';
    columnTitle[0].innerHTML = 'Weeks to minutes'
    columnText[0].innerHTML = '2-5x faster'
    columnTitle[1].innerHTML = 'Fast reconciliation with a single report'
    columnText[1].innerHTML = 'Deployment to 15 countries'
    btnStartup.classList.remove('button--consultation');
    btnGrowth.classList.remove('button--consultation');
    btnEnterprise.classList.add('button--consultation');
    btnResidency.classList.remove('button--consultation');
});

btnResidency.addEventListener('click', () => {
    // остановка интервала
    clearInterval(intervalId);

    // переключение на случай 1

    header.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="35" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="47.15 7.12 200 35"><title>Slack logo</title><g fill="none"><path fill="#fff" d="M80.95 28.15l1.32-3.06a8.8 8.8 0 005.2 1.62c1.38 0 2.25-.53 2.25-1.34-.02-2.26-8.28-.49-8.34-6.15-.03-2.87 2.53-5.08 6.15-5.08 2.15 0 4.3.53 5.83 1.75L92.12 19a9.32 9.32 0 00-4.8-1.53c-1.13 0-1.88.53-1.88 1.21.02 2.21 8.34 1 8.43 6.4 0 2.94-2.49 5-6.07 5-2.61 0-5.02-.62-6.85-1.94M131.59 24a3.8 3.8 0 110-3.74l3.64-2.02a7.98 7.98 0 100 7.78L131.59 24zM95.7 7.53h4.55v22.26H95.7zm41.31 0V29.8h4.56v-6.68l5.4 6.68h5.84l-6.88-7.93 6.37-7.4h-5.58l-5.15 6.15V7.53zm-23.21 16.5a4.2 4.2 0 01-3.56 1.9 3.8 3.8 0 110-7.62c1.53 0 2.9.85 3.55 1.96v3.76zm0-9.57v1.8c-.75-1.25-2.6-2.12-4.54-2.12-4 0-7.15 3.53-7.15 7.95 0 4.43 3.15 8 7.15 8 1.94 0 3.79-.87 4.53-2.13v1.8h4.56v-15.3h-4.56z"></path><path fill="var(--userLogoColor, #E01E5A)" d="M52.79 24a2.8 2.8 0 11-2.81-2.8h2.81V24zm1.4 0a2.8 2.8 0 115.62 0v7.02a2.8 2.8 0 11-5.62 0v-7.01z"></path><path fill="var(--userLogoColor, #36C5F0)" d="M57 12.74a2.8 2.8 0 112.81-2.8v2.8h-2.8zm0 1.42a2.8 2.8 0 110 5.62h-7.04a2.8 2.8 0 110-5.62H57z"></path><path fill="var(--userLogoColor, #2EB67D)" d="M68.26 16.97a2.8 2.8 0 112.81 2.8h-2.8v-2.8zm-1.4 0a2.8 2.8 0 11-5.62 0V9.93a2.8 2.8 0 115.62 0v7.04z"></path><path fill="var(--userLogoColor, #ECB22E)" d="M64.05 28.22a2.8 2.8 0 11-2.81 2.8v-2.8h2.8zm0-1.4a2.8 2.8 0 110-5.62h7.04a2.8 2.8 0 110 5.61h-7.04z"></path></g></svg>
        <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>
  `

    products.innerHTML = `
          <li> <img src="Images/consultation.png" alt=""> <label class="testimonial-consultation__products-label">Consultation</label></li>
          <li> <img src="Images/accounting.png"><label class="testimonial-consultation__products-label">Accounting</label></li>
          `

    bg.src = images[3];
    header.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="55 1.001 200 40"><title>Classy logo</title><path fill="#fff" fill-rule="evenodd" d="M91.276 25.767c-1.43 0-1.55-1.925-1.4-3.576.307-3.394 2.245-7.34 4.341-7.34 1.239 0 2.098 1.468 2.5 2.294-.75 3.023-3.418 8.623-5.441 8.623zM78.047 17.33c.491-5.412 3.271-12.108 5.114-12.108.953 0 .87 1.325.762 2.518-.34 3.76-3.224 8.646-6.033 12.315-.028-.733.074-1.808.157-2.725zm66.369-4.77c-1.334 0-1.852.459-2.084.917-.747 2.286-1.374 4.317-2.327 6.427-1.074 2.385-2.91 5.975-4.339 5.975-1.143 0-1.393-1.577-1.269-2.953.08-1.926.797-4.77 1.274-6.88l.421-1.926c.213-1.285-.496-1.835-1.83-1.835-1.047 0-1.775.458-1.912.917-.559 2.065-.91 3.778-1.917 6.05-.553 1.248-1.336 2.854-3.025 4.408.315-1.931-.397-4.224-1.19-6.243-.419-1.192-.84-2.143-1.587-3.485-.529-.95-1.277-1.867-2.579-1.867-.857 0-1.825.328-2.22.825-.767 2.294-2.959 6.359-4.776 8.862.02-1.65-.914-4.13-1.827-5.834-.355-.666-1.124-1.974-1.554-2.598-.608-.884-1.266-1.348-2.218-1.348-1.048 0-1.654.276-2.106.826-.783 2.35-2.648 6.316-3.744 8.289-1.074 1.934-2.127 3.94-2.969 3.94-.762 0-.788-1.093-.706-2.01.159-1.742 1.785-6.976 2.195-8.352.318-1.284-.931-1.738-2.1-1.463l-1.363.367c-.878-.825-2.493-1.926-4.526-1.926-4.08 0-8.113 4.862-8.58 10.4-1.276 1.83-3.074 3.866-4.833 3.635-.849-.112-1.62-.743-1.902-1.838 3.829-4.403 7.93-11.188 8.38-16.142.326-3.597-1.04-5.78-3.809-5.78-5.144 0-8.894 7.248-9.56 14.587-.241 2.66-.212 4.891.272 6.909-2.222 2.324-5.266 4.19-8.315 4.19-3.138 0-6.257-3.016-5.878-8.99.392-6.151 4.523-14.22 8.349-14.22 1.3 0 1.851 1.32 1.686 2.487-.164 1.16-.564 1.876-1.134 2.629-.19.924.498 2.11 1.847 2.11 1.907 0 3.025-2.121 3.244-4.686.27-3.175-1.46-5.933-5.2-5.933-7.827 0-13.213 9.75-13.668 17.613-.403 6.987 2.432 12.842 9.807 12.842 3.62 0 7.239-2.179 10.462-4.992 1.097 1.56 2.33 2.79 4.8 2.79 2.114 0 4.3-1.687 5.807-3.501.714 2.164 2.315 3.502 4.275 3.502 2.396 0 4.39-1.626 5.97-4.224.476 1.834 1.35 3.574 3.43 3.574 2.382 0 3.689-1.8 5.28-4.171 1.261-1.88 2.207-4.152 3.79-7.292l.591.849c1.245 2.201 2.25 4.257 2.052 5.816-.209 1.651-1.396 2.237-2.497 2.237-1.102 0-1.555-.65-2.361-1.192-.847.117-1.355 1.1-1.461 1.926-.221 1.742 1.166 2.66 3.643 2.66 3.335 0 5.197-1.57 6.796-3.582 1.747-2.197 4.502-6.416 5.632-9.039 1.317 2.385 2.638 5.19 2.417 6.934-.175 1.376-1.06 2.476-2.489 2.476-1.048 0-1.935-.935-2.651-1.302-.477 0-1.236 1.028-1.365 2.036-.209 1.652 1.187 2.661 4.141 2.661 3.641 0 6.979-2.515 9.442-5.512.218 2.844 1.291 5.164 4.221 5.164 2 0 3.947-1.435 5.746-4.508 0 0-.855 3.697-1.107 4.76-.697 2.92-1.404 5.625-1.58 7.557-.152 1.65.896 2.293 2.038 2.293 1.049 0 1.968-.733 2.114-1.284.518-5.714 1.576-11.28 2.672-16.91.317-1.629 1.303-6.513 1.303-6.513.203-1.192-.205-2.109-1.539-2.109z"></path></svg>
   <svg class="CustomersCaseStudyCard__icon" role="presentation" width="20" viewBox="0 0 20 18" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path></svg>
  `
    products.innerHTML = `
          <li> <img src="Images/accounting.png" alt=""> <label class="testimonial-consultation__products-label">Accounting</label></li>
          <li> <img src="Images/re.png"><label class="testimonial-consultation__products-label">Residency</label></li>
  
  `
    bgColor.style.background = 'rgb(83, 125, 68)'
    title.innerHTML = 'Zapier sees 4% uplift in auth rates with Stripe, creating $3M+ in additional revenue';
    columnTitle[0].innerHTML = ' 10%'
    columnText[0].innerHTML = 'uplift in overall authorization rates '
    columnTitle[1].innerHTML = ''
    columnText[1].innerHTML = ''
    btnStartup.classList.remove('button--consultation');
    btnGrowth.classList.remove('button--consultation');
    btnEnterprise.classList.remove('button--consultation');
    btnResidency.classList.add('button--consultation');


});