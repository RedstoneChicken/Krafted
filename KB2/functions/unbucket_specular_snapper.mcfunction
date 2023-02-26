gamerule sendcommandfeedback false
setblock ~~~ flowing_water
summon adv:specular_snapper ~~~
execute @e[type=adv:specular_snapper,c=1,r=1] ~~~ detect ~ 127 ~ bedrock 0 setblock ~~~ air
execute @e[type=adv:specular_snapper,c=1,r=1] ~~~ detect ~ 127 ~ bedrock 0 particle minecraft:water_evaporation_bucket_emitter ~~~
give @p [m=s,r=10] bucket