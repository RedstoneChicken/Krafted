scoreboard objectives add effecttick dummy effecttick
scoreboard players add @a effecttick 1

scoreboard objectives add longeffecttick dummy longeffecttick
scoreboard players add @a longeffecttick 1

scoreboard objectives add strengtheffect dummy strengtheffect
effect @a[scores={strengtheffect=1}] strength 1 0 true
effect @a[scores={strengtheffect=2}] strength 1 1 true
effect @a[scores={strengtheffect=3}] strength 1 2 true
effect @a[scores={strengtheffect=4}] strength 1 3 true
effect @a[scores={strengtheffect=5}] strength 1 4 true
effect @a[scores={strengtheffect=6}] strength 1 5 true
effect @a[scores={strengtheffect=7}] strength 1 6 true
effect @a[scores={strengtheffect=8}] strength 1 7 true
effect @a[scores={strengtheffect=9}] strength 1 8 true
effect @a[scores={strengtheffect=10}] strength 1 9 true
effect @a[scores={strengtheffect=11}] strength 1 10 true
effect @a[scores={strengtheffect=12}] strength 1 11 true
effect @a[scores={strengtheffect=13}] strength 1 12 true
effect @a[scores={strengtheffect=14}] strength 1 13 true
effect @a[scores={strengtheffect=15}] strength 1 14 true
effect @a[scores={strengtheffect=16}] strength 1 15 true
effect @a[scores={strengtheffect=17}] strength 1 16 true
effect @a[scores={strengtheffect=18}] strength 1 17 true
effect @a[scores={strengtheffect=19}] strength 1 18 true
effect @a[scores={strengtheffect=20..}] strength 1 19 true
effect @e[scores={strengtheffect=-1}] weakness 1 0 true
effect @e[scores={strengtheffect=-2}] weakness 1 1 true
effect @e[scores={strengtheffect=-3}] weakness 1 2 true
effect @e[scores={strengtheffect=-4}] weakness 1 3 true
effect @e[scores={strengtheffect=-5}] weakness 1 4 true
effect @e[scores={strengtheffect=-6}] weakness 1 5 true
effect @e[scores={strengtheffect=-7}] weakness 1 6 true
effect @e[scores={strengtheffect=-8}] weakness 1 7 true
effect @e[scores={strengtheffect=-9}] weakness 1 8 true
effect @e[scores={strengtheffect=..-10}] weakness 1 9 true
scoreboard players set @a strengtheffect 0

scoreboard objectives add resistanceeffect dummy resistanceeffect
effect @a[scores={resistanceeffect=1}] resistance 1 0 true
effect @a[scores={resistanceeffect=2}] resistance 1 1 true
effect @a[scores={resistanceeffect=3}] resistance 1 2 true
effect @a[scores={resistanceeffect=4..}] resistance 1 3 true
scoreboard players set @a resistanceeffect 0

scoreboard objectives add speedeffect dummy speedeffect
effect @a[scores={speedeffect=1}] speed 1 0 true
effect @a[scores={speedeffect=2}] speed 1 1 true
effect @a[scores={speedeffect=3}] speed 1 2 true
effect @a[scores={speedeffect=4}] speed 1 3 true
effect @a[scores={speedeffect=5}] speed 1 4 true
effect @a[scores={speedeffect=6}] speed 1 5 true
effect @a[scores={speedeffect=7}] speed 1 6 true
effect @a[scores={speedeffect=8}] speed 1 7 true
effect @a[scores={speedeffect=9}] speed 1 8 true
effect @a[scores={speedeffect=10..}] speed 1 9 true
effect @e[scores={speedeffect=-1}] slowness 1 0 true
effect @e[scores={speedeffect=-2}] slowness 1 1 true
effect @e[scores={speedeffect=-3}] slowness 1 2 true
effect @e[scores={speedeffect=-4}] slowness 1 3 true
effect @e[scores={speedeffect=-5}] slowness 1 4 true
effect @e[scores={speedeffect=-6}] slowness 1 5 true
effect @e[scores={speedeffect=-7}] slowness 1 6 true
effect @e[scores={speedeffect=-8}] slowness 1 7 true
effect @e[scores={speedeffect=-9}] slowness 1 8 true
effect @e[scores={speedeffect=..-10}] slowness 1 9 true
scoreboard players set @a speedeffect 0

scoreboard objectives add jump_boosteffect dummy jump_boosteffect
effect @a[scores={jump_boosteffect=1}] jump_boost 1 0 true
effect @a[scores={jump_boosteffect=2}] jump_boost 1 1 true
effect @a[scores={jump_boosteffect=3}] jump_boost 1 2 true
effect @a[scores={jump_boosteffect=4}] jump_boost 1 3 true
effect @a[scores={jump_boosteffect=5}] jump_boost 1 4 true
effect @a[scores={jump_boosteffect=6}] jump_boost 1 5 true
effect @a[scores={jump_boosteffect=7}] jump_boost 1 6 true
effect @a[scores={jump_boosteffect=8}] jump_boost 1 7 true
effect @a[scores={jump_boosteffect=9}] jump_boost 1 8 true
effect @a[scores={jump_boosteffect=10..}] jump_boost 1 9 true
scoreboard players set @a jump_boosteffect 0

scoreboard objectives add regeneffect dummy regeneffect
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=1}] regeneration 3 0 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=2}] regeneration 1 1 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=3}] regeneration 1 2 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=4}] regeneration 1 3 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=5}] regeneration 1 4 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=6}] regeneration 1 5 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=7}] regeneration 1 6 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=8}] regeneration 1 7 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=9}] regeneration 1 8 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @a[scores={regeneffect=10..}] regeneration 1 9 true
scoreboard players set @a regeneffect 0

scoreboard objectives add hasteeffect dummy hasteeffect
effect @a[scores={hasteeffect=1}] haste 1 0 true
effect @a[scores={hasteeffect=2}] haste 1 1 true
effect @a[scores={hasteeffect=3}] haste 1 2 true
effect @a[scores={hasteeffect=4}] haste 1 3 true
effect @a[scores={hasteeffect=5}] haste 1 4 true
effect @a[scores={hasteeffect=6}] haste 1 5 true
effect @a[scores={hasteeffect=7}] haste 1 6 true
effect @a[scores={hasteeffect=8}] haste 1 7 true
effect @a[scores={hasteeffect=9}] haste 1 8 true
effect @a[scores={hasteeffect=10..}] haste 1 9 true
scoreboard players set @a hasteeffect 0

scoreboard objectives add poisoneffect dummy poisoneffect
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=1..2}] poison 3 0 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=3..4}] poison 2 1 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=5..6}] poison 2 2 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=7..8}] poison 1 3 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=9..10}] poison 1 4 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=11..12}] poison 1 5 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=13..14}] poison 1 6 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=15..16}] poison 1 7 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=17..18}] poison 1 8 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={poisoneffect=19..}] poison 1 9 true
execute @r ~ ~ ~ execute @s[scores={longeffecttick=60}] ~ ~ ~ scoreboard players remove @a[scores={poisoneffect=1..}] poisoneffect 1

scoreboard objectives add withereffect dummy withereffect
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=1}] wither 3 0 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=2..4}] wither 2 1 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=5..6}] wither 2 2 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=7..8}] wither 1 3 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=9..10}] wither 1 4 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=11..12}] wither 1 5 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=13..14}] wither 1 6 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=15..16}] wither 1 7 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=17..18}] wither 1 8 true
execute @r ~ ~ ~ execute @s[scores={effecttick=20}] ~ ~ ~ effect @e[scores={withereffect=19..}] wither 1 9 true
execute @r ~ ~ ~ execute @s[scores={longeffecttick=60}] ~ ~ ~ scoreboard players remove @a[scores={withereffect=1..}] withereffect 1

execute @r ~ ~ ~ execute @s[scores={effecttick=20..}] ~ ~ ~ scoreboard players set @a effecttick 0
execute @r ~ ~ ~ execute @s[scores={longeffecttick=60..}] ~ ~ ~ scoreboard players set @a longeffecttick 0