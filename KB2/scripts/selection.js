// CODE BY O CHETTY O
import { WaypointAddMenu, ShowText } from './functions';
import { world, Location } from "@minecraft/server";

/* ==================== Seleccion De Colores Del Texto ==================== */
export async function textColor(source) {
  WaypointAddMenu.show(source).then(res => { // Nuevo Menú De Agregar
    if (res.formValues[0] !== "" && res.formValues[0] !== " ") { // TEXT FIELD
      switch (res.formValues[1]) { // DROPDOWN 2 - TEXTO DE COLORES
        case 0: // Texto Negro
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§0")
          break;
        case 1: // Texto Azul Oscuro
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§1")
          break;
        case 2: // Texto Verde Oscuro
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§2")
          break;
        case 3: // Texto Aqua Oscuro
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§3")
          break;
        case 4: // Texto Rojo Oscuro
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§4")
          break;
        case 5: // Texto Púrpura Oscuro
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§5")
          break;
        case 6: // Texto Dorado
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§6")
          break;
        case 7: // Texto Gris
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§7")
          break;
        case 8: // Texto Gris Oscuro
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§8")
          break;
        case 9: // Texto Azul
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§9")
          break;
        case 10: // Texto Verde
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§a")
          break;
        case 11: // Texto Aqua
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§b")
          break;
        case 12: // Texto Rojo
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§c")
          break;
        case 13: // Texto Púrpura Claro
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§d")
          break;
        case 14: // Texto Amarillo
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§e")
          break;
        case 15: // Texto Blanco
          waypointColor(source, res.formValues[2], res.formValues[3], res.formValues[0], "§f")
          break;
      }
    } else if (res.formValues[0] === "" || res.formValues[0] === " ") {
      ShowText(source, 'mob.chicken.plop', "%disconnectionScreen.invalidName");
    }
  });
}

/* ==================== Seleccion De Colores Del Waypoint ==================== */
async function waypointColor(a, b, c, d, e) {

  const jsonDBP = { 'player': { 'Name': d, 'Owner': a.nameTag } }
  const jsonDBW = { 'waypoint': { 'Name': d, 'Owner': a.nameTag } }

  switch (b) { // DROPDOWN 3 - WAYPOINT DE COLORES
    case 0: // Color Negro
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_black");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_black");
          break;
        default: null
          break;
      }
      break;
    case 1: // Color Azul
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_blue");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_blue");
          break;
      }
      break;
    case 2: // Color Marrón
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_brown");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_brown");
          break;
      }
      break;
    case 3: // Color Cian
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_cyan");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_cyan");
          break;
      }
      break;
    case 4: // Color Gris
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_gray");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_gray");
          break;
      }
      break;
    case 5: // Color Verde
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_green");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_green");
          break;
      }
      break;
    case 6: // Color Celeste
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_light_blue");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_light_blue");
          break;
      }
      break;
    case 7: // Color Verde Lima
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_lime");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_lime");
          break;
      }
      break;
    case 8: // Color Magenta
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_magenta");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_magenta");
          break;
      }
      break;
    case 9: // Color Naranja
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_orange");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_orange");
          break;
      }
      break;
    case 10: // Color Rosa
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_pink");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_pink");
          break;
      }
      break;
    case 11: // Color Morado
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_purple");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_purple");
          break;
      }
      break;
    case 12: // Color Rojo
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_red");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_red");
          break;
      }
      break;
    case 13: // Color Gris Claro
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_light_gray");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_light_gray");
          break;
      }
      break;
    case 14: // Color Blanco
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_white");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_white");
          break;
      }
      break;
    case 15: // Color Amarillo
      switch (c) { // DROPDOWN 4 - Mostrar El Waypoint En Otros Mapas
        case 0: // Mostrar
          spawnWaypoint(a, d, jsonDBP, jsonDBW, e, "add_yellow");
          break;
        case 1: // Ocultar
          spawnWaypoint(a, d, jsonDBP, null, e, "add_yellow");
          break;
      }
      break;
  }
}

/* ==================== Generación Del Waypoint Según La Dimension ==================== */
async function spawnWaypoint(a, b, c, d, e, f) {

  const dimensions = [world.getDimension("overworld"), world.getDimension("nether"), world.getDimension("the end")];

  if (a.dimension === dimensions[0]) { // Overworld
    const overworld = dimensions[0].spawnEntity("chetty:waypoint_beam", new Location(a.location.x, a.location.y, a.location.z));
    overworld.nameTag = e + b;
    overworld.addTag(JSON.stringify(d));
    overworld.addTag(b);
    a.addTag(JSON.stringify(c))
    overworld.triggerEvent(f);
    ShowText(a, 'beacon.activate', "%chetty.message3 " + e + b + "§r %chetty.message4");//CORRER SONIDO Y TE

  } else if (a.dimension === dimensions[1]) { // Nether
    const nether = dimensions[1].spawnEntity("chetty:waypoint_beam", new Location(a.location.x, a.location.y, a.location.z));
    nether.nameTag = e + b;
    nether.addTag(JSON.stringify(d));
    nether.addTag(b);
    a.addTag(JSON.stringify(c))
    nether.triggerEvent(f);
    ShowText(a, 'beacon.activate', "%chetty.message3 " + e + b + "§r %chetty.message4");//CORRER SONIDO Y TEXTO

  } else if (a.dimension === dimensions[2]) { // The End
    const theEnd = dimensions[2].spawnEntity("chetty:waypoint_beam", new Location(a.location.x, a.location.y, a.location.z));
    theEnd.nameTag = e + b;
    theEnd.addTag(JSON.stringify(d));
    theEnd.addTag(b);
    a.addTag(JSON.stringify(c))
    theEnd.triggerEvent(f);
    ShowText(a, 'beacon.activate', "%chetty.message3 " + e + b + "§r %chetty.message4");//CORRER SONIDO Y TEXTO
  }
}