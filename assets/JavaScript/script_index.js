const propiedades_venta = [
  {
    img: `"./assets/images/casa_01.jpg"`,
    id: 1,
    nombre: "Gran casa cercana a comercio",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Holanda 5456, Providencia, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 2 habitaciones | <i class="fa-solid fa-bath"></i> 1 baño`,
    costo: "$7.000",
    smoke: false,
    pets: true,
  },

  {
    img: `"./assets/images/casa_02.jpg"`,
    id: 2,
    nombre: "Lindo departamento en barrio tranquilo",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Manuel Montt 863, Providencia, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 2 baños`,
    costo: "$8.000",
    smoke: true,
    pets: true,
  },

  {
   img: `"./assets/images/casa_03.jpg"`,
    id: 3,
    nombre: "Departamento full equipado a pasos de metro ",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> El Vergel 4846, Providencia, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 4 habitaciones | <i class="fa-solid fa-bath"></i> 5 baños`,
    costo: "$9.000",
    smoke: false,
    pets: false,
  },

  {
    img: `"./assets/images/casa_07.jpg"`,
    id: 4,
    nombre: "Gran casa cercana a comercio",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Holanda 5456, Providencia, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 2 habitaciones | <i class="fa-solid fa-bath"></i> 1 baño`,
    costo: "$7.000",
    smoke: false,
    pets: true,
  },

  {
    img: `"./assets/images/casa_08.jpg"`,
    id: 5,
    nombre: "Lindo departamento en barrio tranquilo",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Manuel Montt 863, Providencia, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 2 baños`,
    costo: "$8.000",
    smoke: true,
    pets: true,
  },

  {
   img: `"./assets/images/casa_09.jpg"`,
    id: 6,
    nombre: "Departamento full equipado a pasos de metro ",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> El Vergel 4846, Providencia, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 4 habitaciones | <i class="fa-solid fa-bath"></i> 5 baños`,
    costo: "$9.000",
    smoke: false,
    pets: false,
  },


  
];

let htmlVenta = ""

for (const propiedad_venta of propiedades_venta.slice(0, 3)) {
    
    let smokeText;
    if (propiedad_venta.smoke) {
        smokeText = '<span style="color: green;"><i class="fa-solid fa-smoking"></i> Permitido fumar</span>';
    } else {
        smokeText = '<span style="color: red;"><i class="fa-solid fa-ban-smoking"></i> No se permite fumar.</span>';
    }

    let petsText;
    if (propiedad_venta.pets) {
        petsText = '<span style="color: green;"> <i class="fa-solid fa-paw"></i> Mascotas permitidas</span>';
    } else {
        petsText = '<span style="color: red;"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';
    }

    htmlVenta += `


<div class="propiedad_venta">

      <div class="imagenPropiedad">

              <img src=${propiedad_venta.img}/>

      </div>

            <div class="atributos">
              <h4>${propiedad_venta.nombre}</h4>
              <p>${propiedad_venta.descripcion}</p>
              <p>${propiedad_venta.ubicacion}</p>
              <p>${propiedad_venta.habitaciones}</p>
              <p>${propiedad_venta.costo}</p>
              <p>${smokeText}</p>
              <p>${petsText}</p>
            </div>
</div>
`;

}
const divPropiedadesVenta = document.getElementById("propiedades_venta");
divPropiedadesVenta.innerHTML = htmlVenta;



//Propiedades Alquiler

 
const propiedades_alquiler = [
  {
    img: `"./assets/images/casa_04.jpg"`,
    id: 7,
    nombre: "Departamento muy cómodo y luminoso",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Irarrázabal 8765, Ñuñoa, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 3 baño`,
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
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 1 baños`,
    costo: "$4.000",
    smoke: true,
    pets: true,
  },
  {
    img: `"./assets/images/casa_04.jpg"`,
    id: 10,
    nombre: "Departamento muy cómodo y luminoso",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Irarrázabal 8765, Ñuñoa, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 3 baño`,
    costo: "$5.000",
    smoke: true,
    pets: false,
  },

  {
    img: `"./assets/images/casa_05.jpg"`,
    id: 11,
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
    id: 12,
    nombre: "Departamento full equiado a pasos de metro ",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Nocedal 7841, La Reina, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 1 baños`,
    costo: "$4.000",
    smoke: true,
    pets: true,
  },

];



let htmlAlquiler = ""

for (const propiedad_alquiler of propiedades_alquiler.slice(0, 3)) {
   
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
 