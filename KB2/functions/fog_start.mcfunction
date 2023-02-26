gamerule commandblockoutput false

execute @e[type=korbon:phreyium_fog_starter] ~-30 ~ ~-30 tag @a[x=~, y=0, z=~, dx=60, dy=256, dz=60] add phreyium_fog
execute @e[type=korbon:velvium_fog_starter] ~-30 ~ ~-30 tag @a[x=~, y=0, z=~, dx=60, dy=256, dz=60] add velvium_fog
execute @e[type=korbon:chorus_fog_starter] ~-30 ~ ~-30 tag @a[x=~, y=0, z=~, dx=60, dy=256, dz=60] add chorus_fog

execute @e[type=korbon:phreyium_fog_starter] ~ ~ ~ fog @a[tag=phreyium_fog] push korbon:phreyium_fog phrey
execute @e[type=korbon:velvium_fog_starter] ~ ~ ~ fog @a[tag=velvium_fog] push korbon:velvium_fog velv
execute @e[type=korbon:chorus_fog_starter] ~ ~ ~ fog @a[tag=chorus_fog] push korbon:chorus_forest_fog chorus

fog @a[tag=!phreyium_fog] pop phrey
fog @a[tag=!velvium_fog] pop velv
fog @a[tag=!chorus_fog] pop chorus

tag @a remove phreyium_fog
tag @a remove velvium_fog
tag @a remove chorus_fog