const propiedades_venta = [
  {
    img: `"./assets/images/casa_01.jpg"`,
    id: 1,
    nombre: "Hermosa casa cercana ideal para parejas",
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
    nombre: "Departamento full equipado a pasos del metro",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> El Vergel 4846, Providencia, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 4 habitaciones | <i class="fa-solid fa-bath"></i> 5 baños`,
    costo: "$9.000",
    smoke: false,
    pets: false,
  },

  {
    img: `"./assets/images/casa_012.jpg"`,
    id: 4,
    nombre: "Gran casa cercana a comercio",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> La Dehesa 54756, Lo Barnechea, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 9 habitaciones | <i class="fa-solid fa-bath"></i> 7 baños`,
    costo: "$2.000",
    smoke: false,
    pets: true,
  },

  {
    img: `"./assets/images/casa_011.jpg"`,
    id: 5,
    nombre: "Casa recién remodelada",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Población La Pincoya 7846, Huechuraba, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 3 habitaciones | <i class="fa-solid fa-bath"></i> 2 baños`,
    costo: "$8.000",
    smoke: true,
    pets: false,
  },

  {
   img: `"./assets/images/casa_010.jpg"`,
    id: 6,
    nombre: "Casa con piscina y áreas verdes",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, rem in. Quibusdam ipsum ad ipsam earum",
    ubicacion: `<i class="fa-solid fa-location-dot"></i> Av. Américo Vespucio 9625, Quilicura, Santiago`,
    habitaciones: `<i class="fa-solid fa-bed"></i> 4 habitaciones | <i class="fa-solid fa-bath"></i> 5 baños`,
    costo: "$1.000",
    smoke: false,
    pets: true,
  },


  
];

let htmlVenta = ""

for (const propiedad_venta of propiedades_venta) {
    
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



