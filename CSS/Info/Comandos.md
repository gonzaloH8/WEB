# TAMAÑO DE LA PAGINA PADRE   
    *{
    box-sizing: border-box;
    font-family: 'Smokum', cursive;
    }
      
# POSITION
      pos -> position: relative;
      pos:s -> position: static;
      pos:a -> position: absolute;
      pos:r -> position: relative;
      pos:f -> position fixed;
  
# DISPLAY
    d -> display block;
    d:n -> display none;
    d:b -> display block;
    d:f -> display flex; 
    d:if -> display inline-flex;
    d:i -> display inline;
    d:ib -> display inline-block;
   
# CURSOR  
    cur -> cursor: pointer;

# COLOR 
    c -> color:#000;
    c:r -> color:rgb(0,0,0);
    c:ra -> color: rgba(0,0,0, .5); 
    op -> opacity: ;
  
# MARGIN & PADDING
    m -> margin;
    m:a -> margin:auto;
    m:t -> margin-top: ;
    m:r -> margin-rigth: ;
    m:b -> margin-bottom: ;
    m:l -> margin-left: ;
    p -> padding;
    pt -> padding-top: ;
    pr -> padding-rigth;
    pb -> padding-bottom;
    pl -> padding-left;
 
# BORDER
    bd -> border: ;
    bd+ -> border: 1px solid #000;
    bd:n -> border:none;
  
# BOX SIZING
    bxz -> box-sizing: border-box;
  
# WIDTH
      w -> width
      h -> height

# VARIABLES
    Declaración de variables class: .variable{}
    Declaracion de variables id: #variable{}

# COLORES
    fondo = background-color: red;
    letras = color: red; 

# TAMAÑO
    alto = height: numero + px/em/vh/%;
    ancho = width: numero + px/em/vw/%;
        padding: center;
        margin: center;

# CENTRADO
    align-items: center;
    
# MOVIMIENTO DE CAJAS FLEX 
    display: flex;
    align-content: strech/center/end/flex-start/flex-end/space-between/space-around;
    flex-direction: row / column;
    justify-content: center/rigth/left/bottom/top/space-between/space-around;
    flex-wrap: wrap;

# MOVIMIENTO DE CAJAS GRID
    display: grid; 
    grid-template-rows: 1fr;
    grid-template-columns: 1fr; 
    gap: 10px;
    font-weight: bolder;
    MOVIMIENTO DE CAJAS SEGUN LA MEDIDA DEL DISPOTIVO
    grid-row: 1;// una fila
    grid-column: 1 /span 3; // una columna de 3 espacios

# MOVIMIENTO DE CAJAS VARIAS
    display: block;
    position: absolute;
    float: left;
    z-index: 1;
    
# ESTILOS VARIOS
    text-decoration: none;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border: solid red
    
# PSEUDOCODIGO
    Buscar

# TAMAÑOS SEGUN DISPOSITIVOS
    TABLET
    @media (min-width: 720px)
    DESKTOP
    @media (min-width: 1020px)
