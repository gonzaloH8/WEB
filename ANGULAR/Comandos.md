
# GENERACION DE COMPONENTES
    ng generate component nombre_carpeta -- genera una carpeta con todos los archivos que componenen el componente
    ng add @angular/material
    ng add @angular/pwa
    ng add _____
    ng test
    ng build

# ESTRUCTURA
    Index.html-style.css-main.ts(Estructura PADRE)
    Componenete Padre: 
        app-routing.module.ts -- soporte al ts principal
        app.component.css -- css del componente(Apariencia)
        app.component.html -- html del componente(Escritura)
        app.component.ts -- ts del componente(logica)
        app.module.ts -- soporte al ts principal
    Componentes Hijos
        hijo.component.css -- css del componente(Apariencia)
        hijo.component.html -- html del componente(Escritura)
        hijo.component.ts -- ts del componente(logica)

# ESCRITURA
    {{ ValorPlano }} -- muestra texto plano
    (TipoEvento)="" -- llamamos al evento
    [propiedades] -- muestra las propiedades de la etiqueta
        
