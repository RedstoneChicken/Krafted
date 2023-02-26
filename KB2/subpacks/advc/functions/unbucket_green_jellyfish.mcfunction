gamerule sendcommandfeedback false
setblock ~~~ flowing_water
summon adv:green_jellyfish ~~~
execute @e[type=adv:green_jellyfish,c=1,r=1] ~~~ detect ~ 127 ~ bedrock 0 setblock ~~~ air
execute @e[type=adv:green_jellyfish,c=1,r=1] ~~~ detect ~ 127 ~ bedrock 0 particle minecraft:water_evaporation_bucket_emitter ~~~
give @p [m=s,r=10] bucket