import { world } from "@minecraft/server";
import { WaypointEditMenu, ShowText } from "./functions"
import { MessageFormData } from "@minecraft/server-ui";

const waypointMessageMenu = new MessageFormData()
  .title("%menu.options")
  .button1("§0%menu.settings")
  .button2("§4%gui.delete");

world.events.entityHit.subscribe( async (darkxell) => {

  const { entity, hitEntity } = darkxell;

  waypointMessageMenu.body("%options.name: " + hitEntity.nameTag);
  
  if (entity.isSneaking === true && entity.typeId === "minecraft:player" && hitEntity.typeId === "chetty:waypoint_beam") {


    waypointMessageMenu.show(entity).then((res) => {

      if (res.selection === 1) {

        WaypointEditMenu.show(entity).then((res) => {
          switch (res.formValues[0]) {
            case 0:
              switch (res.formValues[1]) { // DROPDOWN 2 - Colores Del Waypoint
                case 0: // Por Defecto
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      break;
                    case 1:
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 1: // Haz Negro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_black");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_black");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_black");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 2: // Texto Azul Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_blue");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_blue");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_blue");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 3: // Texto Verde Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_brown");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_brown");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_brown");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 4: // Texto Aqua Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_cyan");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_cyan");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_cyan");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 5: // Texto Rojo Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_gray");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_gray");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_gray");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 6: // Texto Púrpura Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_green");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_green");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_green");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 7: // Texto Dorado
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_light_blue");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_light_blue");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_light_blue");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 8: // Texto Gris
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_lime");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_lime");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_lime");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 9: // Texto Gris Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_magenta");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_magenta");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_magenta");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 10: // Texto Azul
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_orange");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_orange");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_orange");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 11: // Texto Verde
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_pink");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_pink");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_pink");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 12: // Texto Aqua
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_purple");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_purple");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_purple");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 13: // Texto Rojo
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_red");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_red");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_red");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 14: // Texto Púrpura Claro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_light_gray");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_light_gray");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_light_gray");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 15: // Texto Amarillo
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_white");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_white");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_white");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
                case 16: // Texto Blanco
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_yellow");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_yellow");
                      hitEntity.triggerEvent("set_show_name");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_yellow");
                      hitEntity.triggerEvent("set_hide_name");
                      break;
                  }
                  break;
              }
              break;
            case 1:
              switch (res.formValues[1]) { // DROPDOWN 2 - Colores Del Waypoint
                case 0: // Por Defecto
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 1: // Haz Negro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_black");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_black");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_black");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 2: // Texto Azul Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_blue");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_blue");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_blue");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 3: // Texto Verde Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_brown");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_brown");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_brown");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 4: // Texto Aqua Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_cyan");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_cyan");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_cyan");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 5: // Texto Rojo Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_gray");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_gray");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_gray");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 6: // Texto Púrpura Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_green");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_green");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_green");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 7: // Texto Dorado
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_light_blue");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_light_blue");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_light_blue");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 8: // Texto Gris
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_lime");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_lime");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_lime");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 9: // Texto Gris Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_magenta");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_magenta");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_magenta");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 10: // Texto Azul
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_orange");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_orange");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_orange");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 11: // Texto Verde
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_pink");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_pink");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_pink");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 12: // Texto Aqua
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_purple");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_purple");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_purple");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 13: // Texto Rojo
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_red");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_red");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_red");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 14: // Texto Púrpura Claro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_light_gray");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_light_gray");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_light_gray");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 15: // Texto Amarillo
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_white");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_white");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_white");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
                case 16: // Texto Blanco
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_yellow");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_yellow");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_yellow");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                  }
                  break;
              }
              break;
            case 2:
              switch (res.formValues[1]) { // DROPDOWN 2 - Colores Del Waypoint
                case 0: // Por Defecto
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 1: // Haz Negro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_black");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_black");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_black");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 2: // Texto Azul Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_blue");
                      hitEntity.triggerEvent("set_show_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_blue");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_blue");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 3: // Texto Verde Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_brown");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_brown");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_brown");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 4: // Texto Aqua Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_cyan");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_cyan");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_cyan");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 5: // Texto Rojo Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_gray");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_gray");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_gray");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 6: // Texto Púrpura Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_green");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_green");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_green");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 7: // Texto Dorado
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_light_blue");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_light_blue");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_light_blue");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 8: // Texto Gris
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_lime");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_lime");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_lime");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 9: // Texto Gris Oscuro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_magenta");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_magenta");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_magenta");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 10: // Texto Azul
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_orange");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_orange");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_orange");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 11: // Texto Verde
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_pink");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_pink");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_pink");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 12: // Texto Aqua
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_purple");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_purple");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_purple");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 13: // Texto Rojo
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_red");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_red");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_red");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 14: // Texto Púrpura Claro
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_light_gray");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_light_gray");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_light_gray");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 15: // Texto Amarillo
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_white");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_white");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_white");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
                case 16: // Texto Blanco
                  switch (res.formValues[2]) {
                    case 0:
                      hitEntity.triggerEvent("");
                      hitEntity.triggerEvent("add_yellow");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 1:
                      hitEntity.triggerEvent("add_yellow");
                      hitEntity.triggerEvent("set_show_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                    case 2:
                      hitEntity.triggerEvent("add_yellow");
                      hitEntity.triggerEvent("set_hide_name");
                      hitEntity.triggerEvent("set_hide_beam");
                      break;
                  }
                  break;
              }
              break;
          }
        });

      } else if (res.selection === 0 && entity.hasTag("OP") === true) {

       hitEntity.triggerEvent("waypoint_remove");
        ShowText(entity, 'beacon.deactivate', "%chetty.message3 §c" + hitEntity.nameTag + "§r %chetty.message5");//CORRER SONIDO Y TEXTO    

      } else if (res.selection === 0 && entity.hasTag("OP") === false) {
        ShowText(entity, 'mob.chicken.plop', "§c%npcscreen.requiresop");//CORRER SONIDO Y TEXTO    
      }
    });
  }
});