# VOCABULARIO
void: lo aplicamos cuando la function no va a devolver nada

# INICIALIZACIÓN DE UN PROYECTO CON TYPESCRIPT
  tsc nombre_script.ts -w -- permite enlazar el archivo ts con js y compartir la informacion
  tsc -init -- permite iniciar un proyecto en Typescript, generando un fichero de configuracion

# COMANDOS PRIMITIVOS
## STRING
const str1: string = "Hola";
const str2: string = 'Hola, Mundo';
const str3: string = `Hola, mi nombre es ${str1} y ${str2}`

## NUMBEROS
const num1: number = 10; // numero entero
const num2: number = 10,2 // numero decimal
const num3: number = 2.5e3; // 2.5 * 10^3 = 2500 Exponencial
const num4: number = 1.5e-2; // 1.5 * 10^-2= 0.015 Exponencial
const num5: number = 0xA; // Hexadecimal. Valor decimal: 10
const num6: number = 0o12 // Octal. Valor decimal: 10
const num7: number = 0b1010; Binario. Valor decimal: 10

## BOOLEANS
const bool1: boolean = true;
const bool2: boolean = false;

## UNDEFINED
let variableIddefinida: undefined; variableIddefinida = undefined;
let variableNull: null; variableNull = null;

## OBJETO
type Programador = { -- nos permite typar el objeto y definir su composicion de forma robusta
nombre: string;
tecno: string [],
tomar: boolean
}

let programador: Programador = { -- Objeto con tipado definido arriba
nombre: string;
tecno: string [],
tomar: boolean
}

const programador = { -- objeto normal
  nombre: "Irina",
  casado: false,
  cursos: 4,
  temario: ['HTML', 'CSS', 'JAVASCRIPT', 'ANGULAR'],
  variableIddefinida = undefined,
  variableNull = null
}

## ARRAYS
const numeros: number[] = [1,2,3,4,5,6];
const nombres: string[] = ['HTML', 'CSS', 'JAVASCRIPT', 'ANGULAR'];
const boo1: boolean[] = [true, false, true];

## ENUMERADOS
enum DiasSemana{ // por dias de la semana
Lunes,
Martes,
Miercoles,
Jueves,
Viernes,
Sabado,
Domingo,
}

enum Colores{ // con valores de cadena
Rojo = "rojo",
Verde = "verde",
Azul = "azul",
}

## FUNCIONES
function sumar(a: number, b number): number{return a + b;} -- funcion con tipado explicito
const dividir = (a: number, b number) => a / b; -- function flecha
function saludar(nombre: string, edad?: number): string{} -- funcion con parametro edad opcional
function saludar2(nombre: string, edad: number = 30): string {} -- function con parametro por defecto

## CLASES
class Persona {
  nombre: string; -- variables(atributos) que definien a la persona
  constructor(nombre: string){this.nombre = nombre} -- construccion del objeto
  saludar(){console.log(`Hola, mi nombre es ${this.nombre}.`);} -- metodos, acciones de la clase
}

## INTERFACES
interface Persona = {nombre: string; edad: number;} -- interface basica
interface Producto = {nombre: string; edad: number; descrip?: string;} -- interface con propiedades opcionales
interface Comparador = {(a: number, b: number): boolean} -- interface para funciones
interface Persona = {nombre: string; edad: number; saludar(): void} -- interface para clases



## TYPES
type Numero: number; -- type basico
type Persona = {nombre: string; edad: number;} -- type basico Objeto Literal
type Nombre = string | null; -- type con union types
type Producto1 = {nombre: string; edad: number; descrip?: string;} -- type con propiedades opcionales
type Comaprador1 = {(a: number, b: number): boolean}; -- type para funciones
type Persona2 = {nombre: string; edad: number; saludar(): void} -- type para clases

## COMPUESTOS ESTRUCTURADO




## DEFINIDOS POR USUARIO

## CODIGO A TENER GUARDADO REVISAR DONDE
let fcDallas : number = 11
ley interMiami: number = 11

function jugar(equipo1: number, equipo2: number): void{
if(equipo > equipo2) console.log('Gana Inter Miami')
if(equipo = equipo2) console.log('Empatan')
if(equipo < equipo2) console.log('Gana fcDallas')
}
jugar(interMiami, fcDallas)

# ANY
let disney; -- si no aplicas un tipado(string,number,boolean) pasa a tener el tipado any. !!EVITAR ESTO
