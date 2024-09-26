let btn = document.querySelector('.btn-enviar');


btn.addEventListener('click', () => {
    compartirLista();
});


function generarListaParaCompartir(){
    const bondiola = document.getElementById('bondiola').value;
    const bond = document.getElementById('bond').value;
    const pollo = document.getElementById('pollo').value;
    const pol = document.getElementById('pol').value;

    const harina = document.getElementById('harina').value;
    const levadura = document.getElementById('levadura').value;
    const sal = document.getElementById('sal').value;

    const oliva = document.getElementById('oliva').value;
    const tomate = document.getElementById('s.tomate').value;

    const paleta = document.getElementById('paleta').value;
    const crudo = document.getElementById('j.crudo').value;
    const panceta = document.getElementById('panceta').value;
    const calabreza = document.getElementById('calabreza').value;

    const parmesano = document.getElementById('parmesano').value;
    const muzza = document.getElementById('muzza').value;
    const muz = document.getElementById('muz').value;
    const roque = document.getElementById('roque').value;

    const veg = document.getElementById('m.veg').value;
    const vinagre = document.getElementById('vinagre').value;
    const lentejas = document.getElementById('lentejas').value;
    const oregano = document.getElementById('oregano').value;
    const leche = document.getElementById('leche').value;


    

    const lista = `Buenas noches, dejo Stock: 
    Bondiola: ${bondiola} 
    Bondiola porc: ${bond} 
    Pollo: ${pollo}  
    Pollo porc: ${pol}  
    Harina: ${harina} 
    Levadura: ${levadura} 
    Sal: ${sal} 
    Oliva: ${oliva} 
    Salsa de Tomate: ${tomate} 
    Paleta: ${paleta} 
    J.Crudo: ${crudo} 
    Panceta: ${panceta} 
    Calabreza: ${calabreza} 
    Parmesano: ${parmesano} 
    Muzza: ${muzza} 
    Muzza porc: ${muz} 
    Roquefort: ${roque} 
    Muzza Vegana: ${veg} 
    Vinagre: ${vinagre} 
    Lentejas: ${lentejas} 
    Oregano: ${oregano} 
    Leche: ${leche} 
    `;


    return lista;
}

function compartirLista(){
    let lista = generarListaParaCompartir();

    navigator.clipboard.writeText(lista)
    .then(() => {
        alert('Stock copiado al portapapeles!!');
    })
    .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
    });
}