effect @a[hasitem={item=strat:travelers_vest_3,location=slot.armor.chest}] haste 1 0 true
effect @a[hasitem={item=strat:plate_chestplate_3,location=slot.armor.chest}] haste 1 0 true
effect @a[hasitem={item=strat:plate_chestplate_copper_3,location=slot.armor.chest}] haste 1 0 true
effect @a[hasitem={item=strat:plate_chestplate_iron_3,location=slot.armor.chest}] haste 1 0 true
effect @a[hasitem={item=strat:plate_chestplate_manyullyn_3,location=slot.armor.chest}] haste 1 0 true

effect @a[hasitem={item=strat:travelers_pants_3,location=slot.armor.legs}] speed 1 0 true
effect @a[hasitem={item=strat:plate_leggings_3,location=slot.armor.legs}] speed 1 0 true
effect @a[hasitem={item=strat:plate_leggings_copper_3,location=slot.armor.legs}] speed 1 0 true
effect @a[hasitem={item=strat:plate_leggings_iron_3,location=slot.armor.legs}] speed 1 0 true
effect @a[hasitem={item=strat:plate_leggings_manyullyn_3,location=slot.armor.legs}] speed 1 0 true

effect @a[hasitem={item=strat:travelers_boots_3,location=slot.armor.feet}] jump_boost 1 0 true
effect @a[hasitem={item=strat:plate_boots_3,location=slot.armor.feet}] jump_boost 1 0 true
effect @a[hasitem={item=strat:plate_boots_copper_3,location=slot.armor.feet}] jump_boost 1 0 true
effect @a[hasitem={item=strat:plate_boots_iron_3,location=slot.armor.feet}] jump_boost 1 0 true
effect @a[hasitem={item=strat:plate_boots_manyullyn_3,location=slot.armor.feet}] jump_boost 1 0 true


# Slime Boots

scoreboard objectives add brace dummy brace
scoreboard players add @a[hasitem={item=hax:slime_boots, location=slot.armor.feet}] brace 0

scoreboard players remove @a[scores={brace=-4..}] brace 1
execute @a[tag=slimy] ~~~ detect ~~-4~ air -1 effect @s slow_falling 0 1 true
execute @a[tag=slimy] ~~~ detect ~~-3~ air -1 scoreboard players add @s[scores={brace=..-1}] brace 2
execute @a[tag=slimy] ~~~ detect ~~-4~ air -1 scoreboard players add @s[scores={brace=0..2}] brace 1
effect @a[tag=slimy, scores={brace=-4..0}] slow_falling 1 0 true
effect @a[tag=slimy, scores={brace=..-8}] slow_falling 0 1 true

execute @a[hasitem={item=hax:slime_boots, location=slot.armor.feet}] ~~~ tag @s add slimy
execute @a[hasitem={item=hax:slime_boots, location=slot.armor.feet, quantity=0}] ~~~ tag @s remove slimy