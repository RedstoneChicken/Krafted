#bridge-file-version: #7
summon ff:plant_growth ~ ~ ~
particle ff:sleet ~ ~1 ~
 
#Layer 5
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~1 ~-1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~ ~-1 ff:sleeted_grass_block 0 fill ~1 ~1 ~-1 ~1 ~1 ~-1 ff:snowy_grass_large 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~1 ~ air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~ ~ ff:sleeted_grass_block 0 fill ~1 ~1 ~ ~1 ~1 ~ ff:snowy_grass 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~1 ~1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~ ~1 ff:sleeted_grass_block 0 fill ~1 ~1 ~1 ~1 ~1 ~1 ff:snowy_fern 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~1 ~-1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~ ~-1 ff:sleeted_grass_block 0 fill ~ ~1 ~-1 ~ ~1 ~-1 ff:snowy_grass_tall 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~1 ~ air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~ ~ ff:sleeted_grass_block 0 fill ~ ~1 ~ ~ ~1 ~ ff:snowy_grass_tall 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~1 ~1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~ ~1 ff:sleeted_grass_block 0 fill ~ ~1 ~1 ~ ~1 ~1 ff:snowy_grass 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~1 ~-1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~ ~-1 ff:sleeted_grass_block 0 fill ~-1 ~1 ~-1 ~-1 ~1 ~-1 ff:snowy_grass 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~1 ~1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~ ~-1 ff:sleeted_grass_block 0 fill ~-1 ~1 ~-1 ~-1 ~1 ~-1 ff:snowy_grass_large 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~1 ~ air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~ ~ ff:sleeted_grass_block 0 fill ~-1 ~1 ~ ~-1 ~1 ~ air 0 replace air
 
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~1 ~-2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~ ~-2 ff:sleeted_grass_block 0 fill ~2 ~1 ~-2 ~2 ~1 ~-2 ff:snowy_fern 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~1 ~-1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~ ~-1 ff:sleeted_grass_block 0 fill ~2 ~1 ~-1 ~2 ~1 ~-1 ff:snowy_fern 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~1 ~ air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~ ~ ff:sleeted_grass_block 0 fill ~2 ~1 ~ ~2 ~1 ~ ff:snowy_grass_large 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~1 ~1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~ ~1 ff:sleeted_grass_block 0 fill ~2 ~1 ~1 ~2 ~1 ~1 ff:snowy_fern 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~1 ~2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~2 ~ ~2 ff:sleeted_grass_block 0 fill ~2 ~1 ~2 ~2 ~1 ~2 ff:snowy_grass_tall 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~1 ~-2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~ ~-2 ff:sleeted_grass_block 0 fill ~1 ~1 ~-2 ~1 ~1 ~-2 ff:snowy_fern 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~1 ~2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~ ~2 ff:sleeted_grass_block 0 fill ~1 ~1 ~2 ~1 ~1 ~2 ff:snowy_grass 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~1 ~-2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~ ~-2 ff:sleeted_grass_block 0 fill ~ ~1 ~-2 ~ ~1 ~-2 ff:snowy_grass_tall 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~1 ~2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~ ~2 ff:sleeted_grass_block 0 fill ~ ~1 ~2 ~ ~1 ~2 ff:snowy_grass_large 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~1 ~-2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~ ~-2 ff:sleeted_grass_block 0 fill ~-1 ~1 ~-2 ~-1 ~1 ~-2 ff:snowy_grass_large 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~1 ~2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~ ~2 ff:sleeted_grass_block 0 fill ~-1 ~1 ~2 ~-1 ~1 ~2 ff:snowy_fern 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~1 ~-2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~ ~-2 ff:sleeted_grass_block 0 fill ~-2 ~1 ~-2 ~-2 ~1 ~-2 air 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~1 ~-1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~ ~-1 ff:sleeted_grass_block 0 fill ~-2 ~1 ~-1 ~-2 ~1 ~-1 ff:snowy_grass_large 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~1 ~ air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~ ~ ff:sleeted_grass_block 0 fill ~-2 ~1 ~ ~-2 ~1 ~ ff:snowy_grass_tall 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~1 ~1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~ ~1 ff:sleeted_grass_block 0 fill ~-2 ~1 ~1 ~-2 ~1 ~1 ff:snowy_grass 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~1 ~2 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-2 ~ ~2 ff:sleeted_grass_block 0 fill ~-2 ~1 ~2 ~-2 ~1 ~2 ff:snowy_fern 0 replace air
 
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~3 ~1 ~-1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~3 ~ ~-1 ff:sleeted_grass_block 0 fill ~3 ~1 ~-1 ~3 ~1 ~-1 air 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~3 ~1 ~ air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~3 ~ ~ ff:sleeted_grass_block 0 fill ~3 ~1 ~ ~3 ~1 ~ ff:snowy_grass 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~3 ~1 ~1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~3 ~ ~1 ff:sleeted_grass_block 0 fill ~3 ~1 ~1 ~3 ~1 ~1 ff:snowy_grass_large 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~1 ~-3 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~ ~-3 ff:sleeted_grass_block 0 fill ~1 ~1 ~-3 ~1 ~1 ~-3 ff:snowy_grass_tall 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~1 ~3 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~1 ~ ~3 ff:sleeted_grass_block 0 fill ~1 ~1 ~3 ~1 ~1 ~3 air 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~1 ~-3 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~ ~-3 ff:sleeted_grass_block 0 fill ~ ~1 ~-3 ~ ~1 ~-3 ff:snowy_grass 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~1 ~3 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~ ~ ~3 ff:sleeted_grass_block 0 fill ~ ~1 ~3 ~ ~1 ~3 air 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~1 ~-3 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~ ~-3 ff:sleeted_grass_block 0 fill ~-1 ~1 ~-3 ~-1 ~1 ~-3 ff:snowy_grass_large 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~1 ~3 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-1 ~ ~3 ff:sleeted_grass_block 0 fill ~-1 ~1 ~3 ~-1 ~1 ~3 ff:snowy_grass_tall 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-3 ~1 ~-1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-3 ~ ~-1 ff:sleeted_grass_block 0 fill ~-3 ~1 ~-1 ~-3 ~1 ~-1 ff:snowy_grass_tall 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-3 ~1 ~ air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-3 ~ ~ ff:sleeted_grass_block 0 fill ~-3 ~1 ~ ~-3 ~1 ~ ff:snowy_fern 0 replace air
execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-3 ~1 ~1 air 0 execute @e[type=ff:plant_growth,r=0,c=1] ~ ~ ~ detect ~-3 ~ ~1 ff:sleeted_grass_block 0 fill ~-3 ~1 ~1 ~-3 ~1 ~1 ff:snowy_grass_tall 0 replace air
 