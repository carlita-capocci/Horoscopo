const signo= location.hash.slice(1);


const imgParrafo= document.getElementById('imagenParrafo');

const imgConstelacion= document.getElementById('constelacion');
const divTipo= document.getElementById('tipo');
const divCaracteristica= document.getElementById('caracteristica');
const divCompatibilidad= document.getElementById('compatibilidad');




let volver= document.getElementById('volver');

if(volver){
    addEventListener('click', () => {
        location.href = 'index.html'})
    };
   

let signos= Array.from(document.getElementsByClassName('cajaSigno'));

if(signos){
    signos.forEach(element => {
        element.addEventListener('click',()=>{
            location.href ='index2.html#'+element.id
        })
        
    });
}


console.log(signos);

switch (signo) {
    case 'Acuario':
       
        tipo= "Signo de Aire";
        caracteristica= "Les gusta razonar, debatir, planificar. Son comunicadores, analíticos y tienen cierta dificultad para demostrar lo que sienten. Valoran la compatibilidad intelectual y aman la libertad.";
        compatibilidad= "Al ser un signo muy generoso, se puede llevar muy bien con Aries, Libra, Géminis y Sagitario.";
    break;

    case 'Piscis':
        
        tipo= "Signo de Agua";
        caracteristica= "Son sensibles, emocionales, intuitivos y soñadores. Les gusta proteger y ser protegidos, pero no se sienten cómodos al lado de personas dominantes. Tienden a retraerse y ocultar sus sentimientos por timidez o temor.";
        compatibilidad= "Es compatible con las personas de los signos Tauro y Capricornio y no congenia con Sagitario, Géminis y Leo.";  
    break;

    case 'Aries':
       
        tipo= "Signo de Fuego";
        caracteristica= "Son líderes por naturaleza, llenos de vida, dinámicos, apasionados, impulsivos, confían en sí mismos, se hacen notar, sinceros, optimistas y dominantes.";
        compatibilidad= "Concuerdan perfectamente con Géminis, Acuario, Sagitario y Leo pero muy mala relación con Capricornio y Cáncer.";  
    break;

    case 'Tauro':
        
        tipo= "Signo de Tierra";
        caracteristica= "Son constantes, prácticos, realistas y conservadores, cuidan sus acciones, trabajadores, responsables, tienden a proteger y conservar lo que consiguen.";
        compatibilidad= "La pareja ideal para Tauro será Piscis o Cáncer y la mejor amistad es Capricornio y Virgo. Es totalmente incompatible con Acuario y Leo.";  
    break;

    case 'Geminis':
        
        tipo= "Signo de Aire";
        caracteristica= "Les gusta razonar, debatir, planificar. Son comunicadores, analíticos y tienen cierta dificultad para demostrar lo que sienten. Valoran la compatibilidad intelectual y aman la libertad.";
        compatibilidad= "En Leo y Aries encontrará la pasión, y una fuerte amistad con Libra y Acuario. No se relaciona bien con Virgo y Piscis.";  
    break;

    case 'Cancer':
        
        tipo= "Signo de Agua";
        caracteristica= "Son sensibles, emocionales, intuitivos y soñadores. Les gusta proteger y ser protegidos, pero no se sienten cómodos al lado de personas dominantes. Tienden a retraerse y ocultar sus sentimientos por timidez o temor.";
        compatibilidad= "Son compatibles con los signos Tauro y Virgo, mientras que no se relaciona bien con Aries y Libra.";  
    break;

    case 'Leo':
       
        tipo= "Signo de Tierra";
        caracteristica= "Son líderes por naturaleza, llenos de vida, dinámicos, apasionados, impulsivos, confían en sí mismos, se hacen notar, sinceros, optimistas y dominantes.";
        compatibilidad= "Entabla excelentes relaciones con Libra, Géminis, Sagitarios y Aries, mientras que no se llevan bien con Tauro.";  
    break;


    case 'Virgo':
        
        tipo= "Signo de Tierra";
        caracteristica= "Son constantes, prácticos, realistas y conservadores, cuidan sus acciones, trabajadores, responsables, tienden a proteger y conservar lo que consiguen.";
        compatibilidad= "Entabla mejor amistad con Cáncer y Escorpio, y no es compatible con Sagitario, Géminis y Piscis.";  
    break;

    case 'Libra':
       
        tipo= "Signo de Aire";
        caracteristica= "Les gusta razonar, debatir, planificar. Son comunicadores, analíticos y tienen cierta dificultad para demostrar lo que sienten. Valoran la compatibilidad intelectual y aman la libertad.";
        compatibilidad= "Se relaciona mejor con Sagitario, Leo, Géminis y Acuario. No tiene afinidad con Capricornio y Cáncer.";  
    break;

    case 'Escorpio':
        
        tipo= "Signo de Agua";
        caracteristica= "Son sensibles, emocionales, intuitivos y soñadores. Les gusta proteger y ser protegidos, pero no se sienten cómodos al lado de personas dominantes. Tienden a retraerse y ocultar sus sentimientos por timidez o temor.";
        compatibilidad= "Encuentran su pareja ideal en Virgo y Capricornio, siendo menos compatible con Acuario y Leo.";  
    break;

    case 'Sagitario':
        
        tipo= "Signo de Fuego";
        caracteristica= "Son líderes por naturaleza, llenos de vida, dinámicos, apasionados, impulsivos, confían en sí mismos, se hacen notar, sinceros, optimistas y dominantes.";
        compatibilidad= "Son amigos de Libra, Acuario, Leo y Aries, pero no congenian con Virgo.";  
    break;

    case 'Capricornio':
        tipo= "Signo de Tierra";
        caracteristica= "Son constantes, prácticos, realistas y conservadores, cuidan sus acciones, trabajadores, responsables, tienden a proteger y conservar lo que consiguen.";
        compatibilidad= "Ideal compañero para Piscis y Escorpio, pero no congenia con Libra y Aries.";  
    break;

    default:
      console.log('El signo no esta en la opcion');
  };
if(signo){
    console.log('pagina2')

    imgParrafo.src= `imagenes/${signo}.png`;
  
    imgConstelacion.src= `imagenes/cons${signo}.jpg`;
    divTipo.innerHTML= tipo;
    divCaracteristica.innerHTML= caracteristica;
    divCompatibilidad.innerHTML= compatibilidad;


    let data= JSON.parse(localStorage.getItem('horoscopo'));

    let pFecha= document.getElementById('fecha');
    pFecha.innerHTML= data.titulo;
    let pAmor= document.getElementById('amor');
    pAmor.innerHTML = 'Amor:  ' + data.horoscopo[signo.toLowerCase()].amor;
    let pSalud= document.getElementById('salud');
    pSalud.innerHTML = 'Salud:  ' + data.horoscopo[signo.toLowerCase()].salud;
    let pDinero= document.getElementById('dinero');
    pDinero.innerHTML = 'Dinero:  ' + data.horoscopo[signo.toLowerCase()].dinero;
    let pNumero= document.getElementById('numero');
    pNumero.innerHTML = 'Numero:  ' + data.horoscopo[signo.toLowerCase()].numero;
    

} else {
    console.log('pagina1')



const url= 'https://api.adderou.cl/tyaas/';

fetch(url)
  .then(response => response.json() )
  .then( data =>{

      console.log(data)
      localStorage.setItem('horoscopo',JSON.stringify(data));

  })
  .catch( err =>{
      console.log(err)
  })


}

  

 


 









  