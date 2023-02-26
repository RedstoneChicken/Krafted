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


import { world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { GetWaypointData, GetWaypointTags, ShowText, Sounds } from './functions';
import { textColor } from "./selection"

world.events.beforeItemUse.subscribe(async (chetty) => {
  //FUNCION PRINCIPAL

  //VARIABLES
  const { item, source } = chetty;
  const dim = world.getDimension('overworld') || world.getDimension('nether') || world.getDimension('theEnd');
  const entities = Array.from(dim.getEntities({ type: "chetty:waypoint_beam" }));
  const waypointTags = { "waypointName": [], "waypointOwner": [] };

  /* ==================== MENU PRINCIPAL ==================== */
  if (item.typeId === "chetty:waypoint_map" && source.isSneaking === false) {

    const tags = source.getTags();
    const WaypointMainMenu = new ActionFormData() //FORMULARIO PRINCIPAL
      .title("%item.map.name")
      .body("%hostOption.teleport/%menu.options")
      .button("§2%networkWorld.add_label", 'textures/ui/book_edit_default.png')
      .button("§4%gui.delete", 'textures/ui/book_trash_default.png');

    for (const x in tags) { //CICLO PARA BUSCAR TAG
      if (tags[x].startsWith('{"player":{')) { //MOSTRAR BOTONES SI CUENTA CON TAG

        //VARIABLES
        const TagData = JSON.parse(tags[x]);
        const waypointName = TagData['player']['Name'];

        //BOTON CON LOS WAYPOINTS
        WaypointMainMenu.button("§0" + waypointName, 'textures/waypoint_icon');
      }
    }

    Sounds(source, "ui.loom.take_result");
    WaypointMainMenu.show(source).then( async (res) => { //MOSTRAR FORMULARIO
      if (res.selection === 0) { //BOTON PARA AGREGAR WAYPOINT

        Sounds(source, "ui.loom.take_result");
        textColor(source, entities); // Nuevo Codigo 

      } else if (res.selection === 1) { //BOTON PARA ELIMINAR WAYPOINT

        const WaypointRemoveMenu = new ModalFormData().title('%item.map.name');
        const getWaypoint = GetWaypointData(source);

        if (!getWaypoint['waypointName'].length) { //MOSTRAR MENSAJE SI NO HAY WAYPOINTS
          ShowText(source, 'mob.chicken.plop', '%chetty.message1');
          return;
        }

        //MENUS DESPLEGABLES PARA REMOVER WAYPOINTS
        Sounds(source, "ui.loom.select_pattern"); //CORRER SONIDO
        WaypointRemoveMenu.dropdown("%gui.delete", getWaypoint['waypointName']);

        WaypointRemoveMenu.show(source).then((res) => {

          //VARIABLES
          const getWaypoint = GetWaypointData(source);
          const findJsonDB = {
            'player': {
              'Name': getWaypoint['waypointName'][res.formValues[0]],
              'Owner': getWaypoint['waypointOwner'][res.formValues[0]]
            }
          };

          //EN SELLECION DE OPCION
          source.removeTag(JSON.stringify(findJsonDB));
          source.runCommandAsync(`event entity @e[tag="${getWaypoint['waypointName'][res.formValues[0]]}"] waypoint_remove`);
          Sounds(source, "ui.cartography_table.take_result"); //CORRER SONIDO
          ShowText(source, 'beacon.deactivate', "%chetty.message3 §c" + getWaypoint['waypointName'][res.formValues[0]] + "§r %chetty.message5");//CORRER SONIDO Y TEXTO
        });

      } else if (res.canceled === false) { //OPCION PARA HACER TP AL LOS WAYPOINTS

        const getWaypoint = GetWaypointData(source);
        source.runCommandAsync(`tp "${source.nameTag}" @e[tag="${getWaypoint['waypointName'][res.selection - 2]}"]`);
        source.runCommandAsync(`event entity @e[tag="${getWaypoint['waypointName'][res.selection - 2]}"] particle`);
      }
    });

    /* ==================== MENU PRINCIPAL DE TELETRANSPORTE ==================== */
  } else if (item.typeId === 'chetty:waypoint_map' && source.isSneaking === true) {

    //FORMULARIO PARA TP
    const WaypointTP = new ActionFormData()
      .title("%item.map.name")
      .body("%hostOption.teleport");

    for (const entity of entities) { //OBTENER TAGS DE LA ENTIDAD WAYPOINT Y MOSTRAR BOTONES 
      const tags = entity.getTags();
      for (const i in tags) {
        if (tags[i].startsWith('{"waypoint":{')) {

          const waypointData = JSON.parse(tags[i]);
          const waypointName = waypointData['waypoint']['Name'];

          waypointTags["waypointName"].push(waypointData['waypoint']['Name']);
          waypointTags["waypointOwner"].push(waypointData['waypoint']['Owner']);

          WaypointTP.button("§0" + waypointName, 'textures/waypoint_icon');
        }
      }
    }
    Sounds(source, "ui.loom.take_result"); //CORRER SONIDO
    if (!waypointTags['waypointName'].length) { //MOSTRAR MENSAJE SI NO HAY WAYPOINTS
      ShowText(source, 'mob.chicken.plop', '%chetty.message1');
      return;
    }

    //MOSTRAR FORMULARIO DE TP
    WaypointTP.show(source).then(res => {
      if (res.canceled === false) {

        GetWaypointTags(entities, waypointTags); //FUNCION PARA OBTER TAGS 

        //HACER TP AL WAYPOINT SELECCIONADO
        source.runCommandAsync(`tp "${source.nameTag}" @e[tag="${waypointTags['waypointName'][res.selection]}"]`);
        source.runCommandAsync(`event entity @e[tag="${waypointTags['waypointName'][res.selection]}"] particle`);
      }
    });
  }
});