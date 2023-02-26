/**
 * =====================================================
 * ================== WAYPOINTS ADDON ==================
 * =====================================================
 * 
 * 
 * ===== "Spanish / Español" =====
 * + Código creado por CHETTY
 * + Discord: O ᏟhᎬᏆᏆᎽ O#5449
 * 
 * 
 * ===== "English / Ingles" =====
 * + Code created by CHETTY
 * + Discord: O ᏟhᎬᏆᏆᎽ O#5449
 * 
 * ===== "NOTE / NOTA" =====
 * + It is forbidden to modify the code without my permission.
 * + Está prohibido modificar el código sin mi permiso.
 */

import { ModalFormData } from "@minecraft/server-ui";

/* ==================== FORMULARIOS ==================== */
export const WaypointAddMenu = new ModalFormData() // Menu Agregar
  .title("%item.map.name")
  .textField("%options.name", "%book.titleHere")
  .dropdown("%chat.settings.fontColor", [
    "%color.black",
    "%color.dark_blue",
    "%color.dark_green",
    "%color.dark_aqua",
    "%color.dark_red",
    "%color.dark_purple",
    "%color.gold",
    "%color.gray",
    "%color.dark_gray",
    "%color.blue",
    "%color.green",
    "%color.aqua",
    "%color.red",
    "%color.light_purple",
    "%color.yellow",
    "%color.white"
  ])
  .dropdown("%dressingRoom.skin_color_picker_title", [
    "%item.fireworksCharge.black",
    "%item.fireworksCharge.blue",
    "%item.fireworksCharge.brown",
    "%item.fireworksCharge.cyan",
    "%item.fireworksCharge.gray",
    "%item.fireworksCharge.green",
    "%item.fireworksCharge.lightBlue",
    "%item.fireworksCharge.lime",
    "%item.fireworksCharge.magenta",
    "%item.fireworksCharge.orange",
    "%item.fireworksCharge.pink",
    "%item.fireworksCharge.purple",
    "%item.fireworksCharge.red",
    "%item.fireworksCharge.silver",
    "%item.fireworksCharge.white",
    "%item.fireworksCharge.yellow"
  ])
  .dropdown("%chetty.menu.map", ["%structure_block.show", "%gui.hide"]);

export const WaypointEditMenu = new ModalFormData() // Menu Editar
  .title("%menu.settings")
  .dropdown("%chetty.menu.beam", ["%gui.default", "%structure_block.show", "%gui.hide"])
  .dropdown("%chat.settings.color", [
    "%gui.default",
    "%item.fireworksCharge.black",
    "%item.fireworksCharge.blue",
    "%item.fireworksCharge.brown",
    "%item.fireworksCharge.cyan",
    "%item.fireworksCharge.gray",
    "%item.fireworksCharge.green",
    "%item.fireworksCharge.lightBlue",
    "%item.fireworksCharge.lime",
    "%item.fireworksCharge.magenta",
    "%item.fireworksCharge.orange",
    "%item.fireworksCharge.pink",
    "%item.fireworksCharge.purple",
    "%item.fireworksCharge.red",
    "%item.fireworksCharge.silver",
    "%item.fireworksCharge.white",
    "%item.fireworksCharge.yellow"
  ])
  .dropdown("%action.interact.name", ["%gui.default", "%structure_block.show", "%gui.hide"])

/* ==================== FUNCIONES ==================== */

//FUNCION PARA LA ENTIDAD WAYPOINT
export function GetWaypointTags(data1, data2) {
  for (const entity of data1) { //OBTENER TAGS DE LA ENTIDAD WAYPOINT
    const tags = entity.getTags();

    for (const i in tags) {
      if (tags[i].startsWith('{"waypoint":{')) {
        const waypointData = JSON.parse(tags[i]);
        data2["waypointName"].push(waypointData['waypoint']['Name']);
        data2["waypointOwner"].push(waypointData['waypoint']['Owner']);
      }
    }
  }
}

//FUNCION PARA OBTENER TAGS
export function GetWaypointData(player) {

  //VARIABLES
  const tags = player.getTags();
  const waypointTags = {
    "waypointName": [],
    "waypointOwner": []
  };

  for (const i in tags) { //CICLO PARA BUSCAR TAG
    if (tags[i].startsWith('{"player":{')) {
      const waypointData = JSON.parse(tags[i]);
      waypointTags["waypointName"].push(waypointData['player']['Name']);
      waypointTags["waypointOwner"].push(waypointData['player']['Owner']);
    }
  }
  return waypointTags;
}

//FUNCIONES DE TEXTO
export function ShowText(a, b, c) {
  a.playSound(b);
  a.tell({ "rawtext": [{ "translate": `${c}` }] });
}
export function Sounds(a, b) {
  a.playSound(b);
}