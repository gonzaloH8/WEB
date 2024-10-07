<h1>ENLACES DE INTERES</h1>
<ul>
	<li><a href="https://developer.mozilla.org/es/">DOCUMENTACION</a></li>
	<li><a href="https://lenguajehtml.com/" target="_blank">TEORIA HTML5</a></li>
	<li><a href="https://www.mclibre.org/consultar/htmlcss/" target="_blank">TEORIA HTML5</a></li>
	<li><a href="https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1" target="_blank">EJERCICIOS</a></li>
</ul>

<h1>METADATOS HEAD</h1>
<p>
	
	<meta charset="utf-8">
	<meta name="author" content="Gonzalo">
	<meta name="description" content="Portafolio">
	<meta name="keywords" content="HTML, CSS, JAVASCRIPT, REACT">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- ICONO -->
	<link rel="icon" type="image/x-icon" href="direccion del icono">
	<!-- CSS -->
	<link href="direccion del archivo" rel="stylesheet">
	<!-- BOOTSTRAP CSS -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	<!-- BOOTSTRAP JS(al final o poner defer para colocar en el head) -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
	<!--ENLACE CON ARCHIVO EXTERNO DE JAVASCRIPT-->
	<script src ="direccion del archivo"></script>
	<title>TITULO DEL PROYECTO</title>
</p>

<h1>SHORT CODE</h1>
<p>
	
	li*5: genera tantas etiquetas como numero pongas. Ej li*5
	ul>li.item$$$*5: genera etiquetas con su clase y numero secuencial el numero de veces indicado.
	ul>li.item$@3*5: genera etiquetas con una clase y numero secuencial a partir del numero indicado en el @ el numero de veces indicado.
	ul>li.item$@-*5: genera etiquetas con una clase y numero secuencial a partir del numero indicado hacia atras en el @ el numero de veces indicado.
	table>.fila>.col: genera una tabla con el tr con su clase fila y su td con su clase columna.
	<div>. : genera un div con clase dentro de un div
	.wrapper: genera un div con clase.
	em>.enfasis: genera una etiqueta span con clase dentro de la etiqueta especificada de tipo texto
	lorem + numero +  enter: genera un texto ficticio en el que puedes especificar las palabras generadas
</p>

<h1>ETIQUETAS CUERPO</h1>
<p>
	
	Comentarios: <!-- --> 
    	<p>Párrafo</p>
    	Titulos: <h1></h1><h2></h2><h3></h3><h4></h4><h5></h5><h6></h6>
    	<span>Agrupa palabras</span>

    	<a>Enlaces</a>
		ATRIBUTOS
        		<a href="Web">colocamos el enlace deseado</a>
		    	<a href="#contacto">crea un enlace interno a la clase/id de un elemento</a>
            	    	<a href="web" target="_blank">Por defecto se abre en la misma. _blank(abre un enlace en otra pestaña)</a>

    	Imagen:  <img src="foto"/>
    	<div>Cajas</div>
</p>
    
<h1>ESTRUCTURA DE UNA PAGINA EN EL BODY</h1>
<p>
	
	<BODY>
        <header>Cabecera</header>
        <nav>Menu</nav>
        <article>Articulo</article>
        <section>Seccion</section>
        <main>Cuerpo</main>
        <aside>Lateral</aside>
        <footer>Pie de pagina</footer>
    </BODY>
</p>
    
<h1>ATRIBUTOS GLOBALES</h1>
<p>
	
	<etiqueta + class=””>Variable</etiqueta>
    	<etiqueta + id=””>Identificador</etiqueta>
</p>
    
<h1>ESTILOS INTEGRADOS EN HTML</h1>
<p>
	
	Estilo(integra css en html por etiqueta o grupo): <style></style>
	<b>Negrita</b>
	<strong>Negrita(valor semántico)</strong>
	<u>Subrayado</u>
	<i>Cursiva</i>    
	Declaración de variable: .variable{}
</p>
    
<h1>LISTAS</h1>
<p>
	
	Etiquetas
	    <ul>Lista desordenada</ul> 	
	    <ol>Lista ordenada</ol>
	         <dl>Lista de descripción</dl>
	            <dt>
	            <dd>
		 <li>Lista</li>
	    Atributos
	        <li type=“1,a,i”></li>
	        reserved
	        compact
</p>
    

<h1>TABLAS</h1>
<p>
	
	Etiquetas
	    Titulo:   <caption>
	    <colgroup>Agrupacion</colgroup>
	    Cabecera: <thead>	
	    Cuerpo:   <tbody>
	    Pie:      <tfoot>
	    
	    <tr>Filas</tr>
	        <th>Cabecera</th>
	        <td>Celdas</td>
	    Atributos
	        rowspan=2 Amplía la fila(vertical)
	        colspan=2 Amplía la columna(horizontal)
</p>
    
    
<h1>FORMULARIOS</h1>
<p>
	
		<form>etiqueta padre del formulario</form> 
		ATRIBUTOS
		    action=""
		    method="" GET: obtiene los datos del servidor POST: envia los datos al servidor
	<label> titulo de los formularios</label>
		ATRIBUTOS
		for=”” // valor con el que hará referencia al name del input
	<input> etiqueta de formularios</input>
		ATRIBUTOS
		    TIPOS DE INPUTS: type:""
			button			password
			checkbox		range
			color			reset
			datetime-local	search
			email			submit
			file			tel
			hidden		text
			image			time
			month			url
			number		week
	ATRIBUTOS de INPUTS
	name= "" enlace con el for del label
	required
	disabled
	readonly
	placeholder="" agrega un texto sobre el input informativo
	selected permite seleccionar un input de forma predefinida
	value="" da un valor predefinido al input    
		    
		    INPUTS ESPECIALES
	<datalist>agrupa inputs de tipo radio</datalist>
	<select><optgroup><option>hace un input de selección en grupo</option></optgroup></select>
	<textarea>input especial</textarea>
	<fieldset>crea un cuadro sobre los inputs</fieldset>
	<legend>título del fieldset</legend>
	<datalist>permite hacer búsquedas en el select</datalist>
	Tabindex
	múltiple
	name=”” // el valor puesto tiene que ir en consonancia con el for del label
</p>
