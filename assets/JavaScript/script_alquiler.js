 
const propiedades_alquiler = [
  {
    img: `"./assets/images/casa_04.jpg"`,
    id: 7,
    nombre: "Departamento muy cómodo y luminoso",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Irarrázabal 8765, Ñuñoa, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 3 baños`,
    costo: "$5.000",
    smoke: true,
    pets: false,
  },

  {
    img: `"./assets/images/casa_05.jpg"`,
    id: 8,
    nombre: "Departamento en pleno centro de Santiago",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Monjitas 666, Santiago, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 2 habitaciones | <i class="fa-solid fa-bath"></i> 2 baños`,
    costo: "$2.000",
    smoke: false,
    pets: false,
  },

  {
   img: `"./assets/images/casa_06.jpg"`,
    id: 9,
    nombre: "Departamento recién remodelado",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Nocedal 7841, La Reina, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 1 baño`,
    costo: "$4.000",
    smoke: true,
    pets: true,
  },
  {
    img: `"./assets/images/casa_09.jpg"`,
    id: 10,
    nombre: "Casa de veraneo ",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Centenario 8765, El Tabito, Valparaíso`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 4 habitaciones | <i class="fa-solid fa-bath"></i> 3 baños`,
    costo: "$5.000",
    smoke: true,
    pets: false,
  },

  {
    img: `"./assets/images/casa_08.jpg"`,
    id: 11,
    nombre: "Gran casa en barrio cómodo",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> El Parrón 215, La Cisterna, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 7 habitaciones | <i class="fa-solid fa-bath"></i> 2 baños`,
    costo: "$2.000",
    smoke: false,
    pets: false,
  },

  {
   img: `"./assets/images/casa_07.jpg"`,
    id: 12,
    nombre: "Pequeña casa en barrio tranquilo",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Monseñor Larraín 2125, El Bosque, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 1 habitaciones | <i class="fa-solid fa-bath"></i> 10 baños`,
    costo: "$4.000",
    smoke: true,
    pets: true,
  },

];



let htmlAlquiler = ""

for (const propiedad_alquiler of propiedades_alquiler) {
   
    let smokeText;
    if (propiedad_alquiler.smoke) {
        smokeText = '<span style="color: green;"><i class="fa-solid fa-smoking"></i> Permitido fumar</span>';
    } else {
        smokeText = '<span style="color: red;"><i class="fa-solid fa-ban-smoking"></i> No se permite fumar.</span>';
    }

    let petsText;
    if (propiedad_alquiler.pets) {
        petsText = '<span style="color: green;"> <i class="fa-solid fa-paw"></i> Mascotas permitidas</span>';
    } else {
        petsText = '<span style="color: red;"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';
    }
    htmlAlquiler += `


<div class="propiedad_alquiler">

      <div class="imagenPropiedad">

              <img src=${propiedad_alquiler.img}/>

      </div>

            <div class="atributos">
              <h4>${propiedad_alquiler.nombre}</h4>
              <p>${propiedad_alquiler.descripcion}</p>
              <p>${propiedad_alquiler.ubicacion}</p>
              <p>${propiedad_alquiler.habitaciones}</p>
              <p>${propiedad_alquiler.costo}</p>
              <p>${smokeText}</p>
              <p>${petsText}</p>
            </div>
</div>
`;

}
const divPropiedadesAlquiler = document.getElementById("propiedades_alquiler");
divPropiedadesAlquiler.innerHTML = htmlAlquiler;
 