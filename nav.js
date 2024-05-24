function desplegar1() {
    document.getElementById("menu1").classList.toggle("show");
}

function desplegar2() {
    document.getElementById("menu2").classList.toggle("show");
}

window.onclick = function(event) {
    // Cierra el submenu del botón 1 si se hace clic fuera
    if (!event.target.matches('.btn1')) {
        var dropdowns1 = document.getElementsByClassName("menu1");
        var i;
        for (i = 0; i < dropdowns1.length; i++) {
            var openDropdown1 = dropdowns1[i];
            if (openDropdown1.classList.contains('show')) {
                openDropdown1.classList.remove('show');
            }
        }
    }

    // Cierra el submenu del botón 2 si se hace clic fuera
    if (!event.target.matches('.btn2')) {
        var dropdowns2 = document.getElementsByClassName("menu2");
        var j;
        for (j = 0; j < dropdowns2.length; j++) {
            var openDropdown2 = dropdowns2[j];
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');
            }
        }
    }
}

