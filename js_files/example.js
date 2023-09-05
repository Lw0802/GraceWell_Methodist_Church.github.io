document.addEventListener("DOMContentLoaded", function () { 
    new Vue({
        el: '#app',
        data: {
            isMenuOpen: false
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    });    
});