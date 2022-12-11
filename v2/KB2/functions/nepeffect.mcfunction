gamerule sendcommandfeedback false

execute @a[hasitem={location=slot.armor.head,item=azc:neptunium_helmet}] ~ ~ ~ detect ~ ~1 ~ water 0 effect @s night_vision 11 0 true
execute @a[hasitem={location=slot.armor.chest,item=azc:neptunium_chestplate}] ~ ~ ~ detect ~ ~1 ~ water 0 effect @s water_breathing 1 0 true
execute @a[hasitem={location=slot.armor.legs,item=azc:neptunium_leggings}] ~ ~ ~ detect ~ ~1 ~ water 0 effect @s slow_falling 1 0 true

execute @a[hasitem={location=slot.armor.feet,item=azc:neptunium_boots}] ~ ~ ~ detect ~ ~1 ~ water 0 scoreboard players add @s speedeffect 6
execute @a[hasitem={location=slot.weapon.mainhand,item=azc:neptunium_sword}] ~ ~ ~ detect ~ ~1 ~ water 0 scoreboard players add @s strengtheffect 2
execute @a[hasitem={location=slot.weapon.mainhand,item=azc:neptunium_axe}] ~ ~ ~ detect ~ ~1 ~ water 0 scoreboard players add @s strengtheffect 2
execute @a[hasitem={location=slot.weapon.mainhand,item=azc:neptunium_pickaxe}] ~ ~ ~ detect ~ ~1 ~ water 0 scoreboard players add @s hasteeffect 3
execute @a[hasitem={location=slot.weapon.mainhand,item=azc:neptunium_shovel}] ~ ~ ~ detect ~ ~1 ~ water 0 scoreboard players add @s hasteeffect 3