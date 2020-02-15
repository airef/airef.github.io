var releaseNotes = [ {
		number: "20190228-000000",
		version: 1.5,
		notes: "UserPatch v1.5 RC has been released (20190228-000000)! This update fixes a critical bug in the tech system, where changes to ATTR_STORAGE_MODE (21) could break the population headroom counter. It's most noticeable with the Slav military building bonus in scenarios and maps like Fortress, but it can happen in other cases, as well. The fix makes a limited adjustment for SET_ATTRIBUTE with ATTR_STORAGE_MODE (21), storage mode 4, so updates are reflected as expected. In addition, 3 new restricted features have been added: Disable rec/spec score stats, Hidden civilization selection, Allow spectators by default. The first is for people using a separate overlay, while the other 2 are just to make it easier to change those without registry work. Thanks to John_the_Late for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6268) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	},	{
		number: "20190101-000000",
		version: 1.5,
		notes: "UserPatch v1.5 RC has been released (20190101-000000)! This update adds a new restricted feature to show rec/spec market events. This will display player buy/sell messages in the chat event log. Please note that there may be a performance cost to this and event message flooding may occur. Thanks to CheeseOnToast for the idea! The multiplayer sync id has been updated, so all players in a game must have this build (6260) to play in multiplayer. Happy New Year!",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20181231-000000",
		version: 1.5,
		notes: "UserPatch v1.5 RC has been released (20181231-000000)! This update fixes an issue where livestock (class 58) would not be visible in the fog in scenario games due to the differing Fog Visibility states for gaia civ and non-gaia civ owned livestock. The issue was caused by the fix that ensured that gaia's scenario civ styling would not be reverted during gameplay. Thanks to Jineapple for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6258) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20181201-000000",
		version: 1.5,
		notes: "UserPatch v1.5 RC has been released (20181201-000000)! This update adjusts the new restricted feature to show rec/spec research stats. It will now display global research status information at the top-right corner of the screen instead of mixing that information in the chat event log. I think we're almost done lol. Will update on voobly later in the month. Thanks to LightTree, wattle, and Aleph for research feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6256) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20181031-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20181031-000000)! This update fixes a few issues with up-get-object-data and up-get-object-target-data when used as Facts in a defrule. In some cases, they were handling parameters improperly or returning false as a Fact. In addition, a restricted feature has been added to show simple rec/spec research events in the chat event log. This feature will probably be reworked and enhanced in the future. Thanks to CheeseOnToast for the AI report and LightTree for research feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6228) to play in multiplayer.",
		itemsAffected: [cUpGetObjectData, cUpGetObjectTargetData],
		scriptingType: "ai"
	},	{
		number: "20181030-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20181030-000000)! This update adds a new option for the spectator host to control the join delay for spectators in multiplayer games, which can help to avoid possible lag spikes during the critical first few seconds of a game. The delay can be controlled by the spec client app and defaults to 5 game seconds. Thanks to LightTree for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6224) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20181028-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20181028-000000)! This update fixes an issue where non-host recs may improperly inherit ZR terrain graphics due to incomplete state handling by the multiplayer game setup screen. In addition, a fix was made to ensure that the AI #load symbols UP-[NAME]-CIV-ALLY and UP-[NAME]-CIV-ENEMY are properly provided if a game expansion contains more than 31 civs. Finally, 4 new symbols have been added: UP-HUMAN-ALLY, UP-HUMAN-ENEMY, UP-COMPUTER-ALLY, and UP-COMPUTER-ENEMY. These can be used to optimize the loading of specific strategy scripts. Thanks to CheeseOnToast for the ZR terrain report and Esty for #load symbol feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6216) to play in multiplayer.",
		itemsAffected: [symUpNameCivAlly, symUpNameCivEnemy, symUpHumanAlly, symUpHumanEnemy, symUpComputerAlly, symUpComputerEnemy],
		scriptingType: "ai"
	},	{
		number: "20180808-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180808-000000)! This update adjusts the action-unload direct unit command, so that it will work for transport ships. For buildings, action-unload will ungarrison the units inside to the gather point or just eject them if unset. For class 13 siege units like rams, it will eject the units in-place. Finally, for transports, it will travel to the shore nearest to the target-point (like it would for a human) and unload units there. Please ensure the target-point is reachable or the ship may flood \"can't unload\" messages. If your transport ship is on beach terrain along a shoreline, you can probably safely use the ship's own point to unload. Thanks to CheeseOnToast for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6208) to play in multiplayer. Thanks Promi!",
		itemsAffected: [cUpTargetObjects, cUpTargetPoint],
		scriptingType: "ai"
	},	{
		number: "20180805-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180805-000000)! This update adjusts the previous starting resource fix, so that a negative resource start is allowed if defined for players in scenarios and campaigns. In addition, the issue with unexpected stack object duplication for gates and other similar objects has been fixed when testing scenarios. Map copy can still get special stack objects, but they should no longer multiply randomly. Finally, the UserPatchConst.per file has been updated to change cmdid-unknown to cmdid-fishing-ship (id 9) and reference.html has been updated to better describe the status filter requirements for up-find-resource. Thanks to rewaider and Julius999 for the stack object report, Promi for asking about the cmdid-unknown value, and CheeseOnToast for up-find-resource feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6206) to play in multiplayer.",
		itemsAffected: [cUpFilterInclude, cUpFilterExclude],
		scriptingType: "ai"
	},	{
		number: "20180804-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180804-000000)! This update adjusts the rms parser to ensure that the DEFAULT_RESOURCES, LOW_RESOURCES, MEDIUM_RESOURCES, and HIGH_RESOURCES consts for rms are defined for regicide and DM games, as ES had previously disabled them. In addition, the game will now set food, wood, stone, and gold to 0 if a starting resource amount (91 to 94) would result in a resource value that is less than zero. This should avoid unexpected issues when an rms adjusts starting resources to compensate for various game modes, while a player has a civ that starts with less than standard resources like the Chinese, Aztecs, and Huns. Thanks to Henk for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6202) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	},	{
		number: "20180730-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180730-000000)! This update fixes a core bug carried from v1.0c with AI memory overflows caused by extended scenario tributes. Previously, if a tribute was sent by a scenario trigger to an AI with a resource id other than food, wood, gold, and stone, general memory corruption would occur. For compatibility until this release spreads (may take a few weeks), please use up-effect to add or set extended resources instead of tributing to AI players. Thanks to BFTanks for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6198) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "ai"
	},	{
		number: "20180726-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180726-000000)! This update fixes a crash bug in the scenario editor that can occur when shift+selecting objects to add them to scenario trigger effects. Thanks to rewaider on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6196) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180724-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180724-000000)! This update adds a new flag for use with ATTR_BLAST_LEVEL, so the following flags are now available: 4: logistica-style 5HP damage, 8: elephant-style half damage. In other words, if a unit uses Blast Attack Level 2, but you want it to work like logistica, it should be set to 6 (2+4). If you want elephant-style half damage, it should be set to 10 (2+8). In addition to this, a new sync restricted feature has been added, \"Handle small farm selections\", that should ensure proper selection and targeting for 2x2 farms, such as those available to civs like Milan in Age of Chivalry (for Kor: you can add another 1 to the SetupAoC.exe -f: installer flags parameter to enable it by default). Thanks to TriRem for the blast level report and Wergorne and Pepp for the farm report! The multiplayer sync id has been updated, so all players in a game must have this build (6194) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180720-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180720-000000)! This update adjusts the \"up-get-object-data\" and \"up-get-object-target-data\" AI script rule actions, so they can be used as facts in a defrule, as well. In addition, the \"up-get-point-contains\" command should no longer crash when used with all-units-class. Please note, however, that when used with all-units-class (-1), the \"up-point-contains\" fact and \"up-get-point-contains\" action may capture unexpected objects like birds flying over a tile, terrain plants, etc. Thanks to CheeseOnToast for the report and feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6190) to play in multiplayer.",
		itemsAffected: [upGetObjectData, upGetObjectTargetData, upGetPointContains, upPointContains],
		scriptingType: "ai"
	},	{
		number: "20180701-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180701-000000)! This update includes some reliability improvements for handling the new Ctrl+ market transaction keys. The multiplayer sync id has been updated, so all players in a game must have this build (6188) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180629-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180629-000000)! This update fixes an issue with rms terrain desyncs from certain object creation orders. Previously, if an object without collision size was placed onto terrain that a building was also placed on, its placement could differ between players due to the building selectively changing its underlying terrain to \"foundation\" based on each player's line of sight, which would cause a desync. In addition, you can now hold \"Ctrl\" when buying or selling at the market for 1000 resources per click or hold \"Ctrl+Shift\" for 10000 resources per click. Although these aren't useful for most games, it might help to avoid awkward gameplay on certain \"nothing\" style maps. Thanks to Chrazini for the rms desync report and smzimran and teutonic_tanks for market transaction feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6186) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	},	{
		number: "20180626-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180626-000000)! This update adds a new sync restricted feature to the installer: Disable civilian attack switch. This will disable unit attack type switching for class 4 units outside task group ids 1 and 2. If the unit has 1 or more entries in the A.G.E. attacks list, it will try to attack. Otherwise, attack requests will be ignored. This is intended for use only by mod developers and should not be installed unless necessary. You can find it by pressing F5 on the installer window to show the restricted features list.</p><p>In addition, the SetupAoC.exe installer has a new -n switch to perform a silent install of UP to a new age2_x1.5.exe, which can be used instead of the -i switch that performs a silent update of age2_x1.exe. Finally, the -f: installer feature flags switch has a new inherit (2) flag that keeps the current user's setting instead of forcing a feature checkbox to on (1) or off (0). The inherit (2) flag will likely be useful to not override user-specific settings like their preferred minimap colors. Thanks to Kor for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6180) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180616-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180616-000000)! This update adjusts the keydown object hotkey fix to improve reliability and includes 2 fixes for rms. The first rms fix is for an issue that could occur when a comment is inside an \"if\" branch, where it would allow the text inside the comment to remain as partially active script. If the word \"if\" was present inside one of these bugged comments, the branch system would enter an unreliable state from that point forward. The second rms fix is intended to correct an issue caused by the recent terrain changes in WK, where trees would be placed on swapped terrain (16) by the cliff placement system. Now, rms cliffs will no longer place terrain objects on replaced map tiles. Thanks to Henk and TWest for the \"if\" comment report and Chrazini for the cliff object report! The multiplayer sync id has been updated, so all players in a game must have this build (6168) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	},	{
		number: "20180611-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180611-000000)! This update extends the hotkey system to handle separate entries for the Palisade Gate, Feitoria, Genitour, and Siege Tower. The game will check the language file's default keys to determine whether or not to append these new hotkey entries to the system. For the Villager Build category, the Palisade Gate is checked by 16186 and named by 19212, while the Feitoria is checked by 16159 and named by 19075. For the Archery Range category, the Genitour is checked by 16417 and named by 19032. Finally, for the Siege Workshop category, the Siege Tower is checked by 16445 and named by 19048. Objects must have their hotkey properties set in A.G.E. to match the default key check ids. Thanks to TheViper for the report and TriRem and Jineapple for testing and feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6160) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180606-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180606-000000)! This update fixes several issues regarding the handling of treason minimap event flares. Now, if you execute the Treason command, you will see a colored minimap flare for each player target. These new treason flares are displayed for 10 game seconds with a slightly smaller appearance than player flares and they flash in a different style. They're also stored separately from normal \"zooming box\" minimap events now, so they'll no longer be lost due to the standard minimap limit or events such as train, build, and research completion. Thanks to II2N for the report and wattle for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6146) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180531-020000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180531-020000)! This update fixes several compatibility issues for WK and AI terrain handling for dock construction and gathering across terrain zones. In addition, a previous fix for longboat idling has been adjusted in order to ensure that scenario trigger tasking works as expected. Thanks to TriRem for the terrain report and Mash and Cataphract887 on AoKH for the longboat report! The multiplayer sync id has been updated, so all players in a game must have this build (6136) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180525-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180525-000000)! This update includes several sync breaking fixes, so the rec id has been changed from VER 9.E to VER 9.F. If you work with rec analyzers, please update your code if necessary to include this new rec id for v1.5. New builds of v1.5 are backward compatible with recent v1.5 recs on VER 9.E (v1.5 Beta R6, etc.) and v1.4, v1.3, v1.0c, and v1.0b recs.</p>" +
		"<p>The first fix is for an issue where holding \"Alt\" when right-clicking to garrison may target nearby resources or other objects instead. It should now prioritize garrison in these cases, even if the mouse cursor does not always reflect this. Next, there's a fix for an issue with excessive pathing lag for min range unit retreating. This could cause noticeable slowdown during gameplay in some cases if units like skirmishers are backed against a treeline. There's also a core bug fix for an issue with garrison arrow count updates for building foundations, where if a tech (yasama) completes research while a building exists as an untouched foundation, the completed building would not benefit from the additional arrow bonus. Finally, there is a fix for an issue where AI villagers may idle after construction in some cases. This was most common near AI lumber camps, where villagers would stand idle as builders indefinitely.</p>" +
		"<p>As for new features, you can now hold \"Shift\" when clicking the Flare button to enable wall scanning during rec/spec. This will allow players to search for holes in walls, etc. while streaming or viewing recs. The scan, which uses a fortified wall block for best visibility and placement flexibility, is limited by the selected player's viewpoint, so enabling the fog of war can help to show which tiles you can scan, which is anywhere except the black area or the dark fog when All Visible mode is active.</p>" +
		"<p>Thanks to TWest for the garrison report, Aleph for the Illuminati min range demonstration, TriRem for the building arrow report, Promi for the AI construction report, and Deathcounter and wattle for rec/spec wall scanner feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6122) to play in multiplayer.</p>" +
		"<p>Still waiting on Voobly to make several client fixes requested in March, so v1.5 Beta R7 can be uploaded there.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180429-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180429-000000)! This update fixes an issue with scenario loading, where the game might crash if a mod reduces the civ count below the aok total. In addition, the ATTR_TRAITS flag to disable the object delete button will only apply to completed objects, so foundations can now be cancelled. Finally, for non-scenario games at 250 population or lower, a new pathing fix has been made to reduce movement freezing, which is often seen in late imperial black forest games, etc. Thanks to moddingnoob on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6104) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180401-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180401-000000)! This update fixes an issue with the scenario editor where gaia objects weren't listed for placement due to the other recent gaia fix. Thanks to Mash on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6096) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180331-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180331-000000)! This update adds the DATA_MODE_FLAGS (1) attribute for use with the GAIA_SET_PLAYER_DATA effect. You can set it to a combination of the following flags: 01: enable treason (flares guard unit type if no king exists) and 02: disable spies (button only, disable tech 408 to block research). This can be used from rms or scx to control spies/treason command availability. In addition, the multiplayer setup screen now preserves the last hosted game type except scenarios, which should hopefully help for people who usually play on DM instead of RM. Thanks to TriRem for spies/treason feedback and JRed for game setup feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6094) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180328-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180328-000000)! This update adds a new feature for rec/spec player switching. If you hold \"Shift\" and select another player's unit or building (except gaia), the focus will seamlessly switch to that player without changing the map view. This can be useful to easily observe a battle from multiple sides without being distracted by using the player name dropdown or having the view move across the map with each player change, etc. It's a full focus switch, so the UI, resource numbers, and fog of war will change with each shift+select. In addition, the gaia scenario civ issue has been fixed, in order to ensure that gaia units and buildings do not swap to default after conversion to a player. Thanks to AsteriskRAY for switch feedback and danielpr for the gaia scenario civ report! The multiplayer sync id has been updated, so all players in a game must have this build (6088) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180309-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180309-000000)! This update adds a restricted feature for Background audio playback (press F5 on the installer to see the restricted features list). This feature will allow the game's music and sound to continue playing in the background while multitasking, which might be helpful when streaming or recording. Thanks to Memb for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6068) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180302-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180302-000000)! This update fixes an issue with AI builder assignment, where the wonder default builder count was 255, which is equivalent to -1 as a byte and that would disable builders in v1.5. The default has now been changed to 250 to ensure wonders are built as expected. The max number of taskable AI villagers is 250, so this change makes sense in general. Thanks to danielpr for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6060) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "ai"
	},	{
		number: "20180301-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180301-000000)! This update fixes an issue where diagonal walls would not be placed as expected at the map edge. The walls should now be placed as they appear in the placement preview. Thanks to Wergorne for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6058) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180229-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180229-000000)! This update adjusts the \"Custom normal mouse\" feature, so that it will work with alternate mouse cursor slps. It's been tested with the default ES cursors and the Precision Cursor, Bigger Cursor, and TIC Clan Cursor mods on Voobly. The multiplayer sync id has been updated, so all players in a game must have this build (6054) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180228-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180228-000000)! This update enables the mouse wheel to activate manual gate rotation mode without affecting hotkeys, allowing you to spin the gate into the necessary position. If you don't enable manual rotation mode for a particular instance of gate placement, the default rotation mode is available as always, where you can move a gate relative to nearby walls to rotate it. This fix ensures that the positions of nearby objects cannot obstruct gate placement. Thanks to metric on voobly for the report and aoezone for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6052) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180224-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180224-000000)! This update includes adjustments for the installer (SetupAoC.exe) and removes debug code. The multiplayer sync id has been updated, so all players in a game must have this build (6050) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180223-010000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180223-010000)! This update includes additional refinements for mouse behavior in single player mode. The multiplayer sync id has been updated, so all players in a game must have this build (6038) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180223-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180223-000000)! This update fixes a bug in the AI script handling code. Thanks to II2N for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6034) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180221-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180221-000000)! This update refines some of the mouse adjustments from recent builds. The multiplayer sync id has been updated, so all players in a game must have this build (6028) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180220-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180220-000000)! This update fixes some issues with the SetupAoC installer, so that the wide/center/left interface styles install properly and their current install state appears properly when reopening the installer. The multiplayer sync id has been updated, so all players in a game must have this build (6026) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180219-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180219-000000)! This update enables the \"Ctrl+X\" (cut), \"Ctrl+C\" (copy), \"Ctrl+V\" (paste), and \"Ctrl+A\" (select all) hotkeys to work for all text input. Previously, only the classic hotkeys were available, including \"Shift+Delete\" for cut, \"Ctrl+Insert\" for copy, and \"Shift+Insert\" for paste. Thanks to Cataphract887 on AoKH for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6024) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180218-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180218-000000)! This update fixes an issue that can cause dramatic performance loss on typically walled maps like Arena, Black Forest, etc. Rec replay performance for these maps should hopefully improve, as well. In addition, a new Advanced installer option has been added: Custom normal mouse. With this feature, the game will use a custom mouse cursor instead of directly drawing the cursor itself, essentially delinking it from the game's framerate, which can make mouse movement more smooth on some systems. It's similar to the original \"normal mouse\" option, but uses the actual slp game cursors instead of the system pointer.</p>" +
		"<p>Thanks to LightTree for finding the performance issue with walled maps and FillemUp on aoczone for the mouse report! The multiplayer sync id has been updated, so all players in a game must have this build (6020) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180210-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180210-000000)! This update includes many core, animation, and pathing performance fixes for various cpu levels. In addition, it fixes an issue where the game may crash due to an internal AI attack response, an issue with multiple selection where the stat framerate would collapse, and an issue with Alt+ goto building hotkeys. It also fixes a critical bug where certain kinds of excessive AI attack behavior could cause a command overflow desync. Finally, the About button is now hidden from the F10 gameplay system menu when it would cause the buttons to overflow the popup border.</p>" +
		"<p>Thanks to LightTree, offwo, and CoT for performance and sync testing, Krock for the internal AI crash report, Toutttt for the hotkey report, withmorten for the stat framerate report, and everyone from aoczone for providing cpu details! The multiplayer sync id has been updated, so all players in a game must have this build (5962) to play in multiplayer.</p>" +
		"<p>If you'd like to try a before/after with the previous public beta, try opening the knight lag save in both builds and compare performance.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20171218-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171218-000000)! This update adjusts the processing of 1-unit AI group attacks, so a command flood will be less likely to cause an overflow. In addition, you can now shift+click any checkbox or multi-value number box like the player number or team number boxes to randomize the result (there is no intelligence here, so it's just the first random result). For single player mode, AI player colors will now be remembered and changing game settings will not reset them. Finally, you can now reset a hotkey (???) in the editor with a right-click while changing it. Thanks to LightTree, offwo, and CoT for the AI report, TWest for the player color feedback, and iPhone for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5758) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20171216-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171216-000000)! This update fixes a crash in the AI managed building system that can occur when using " + cUpBuild.getLink() + " place-control after " + cUpSetPlacementData.getLink() + " was used to target placement at a player that has absolutely no objects remaining on the map, including dead objects. Thanks to LightTree and offwo for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5748) to play in multiplayer. TWest, will look into those, thanks! Please visit the chat if you'd like to preview it.",
		itemsAffected: [cUpBuild, cUpSetPlacementData],
		scriptingType: "ai"
	}, {
		number: "20171215-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171215-000000)! This update adds a lot of new fixes and features:</p><p><strong>General Updates</strong></p><ul><li>New extended statistics score display for rec/spec and AI-only single player games.</li><li>Hotkeys under \"More\" (Build, Dock) now have priority over go-to-building hotkeys.</li><li>Hold \"Shift\" when clicking the Idle Villager button to find idle military units.</li><li>\"Friend Foe Ids\" to override colors: REG_DWORD, Set enemy, self, neutral, ally as 0xEESSNNAA (default: 0x01000603).</li><li>Set language id 9870 to override the statistics headers with 4 tab-delimited lines:</li></ul><pre><code>For the following 4 views:\r\nScore Pop/ Cap Mil Civ Idl Trd Kill/Loss A\r\nTeam Pop/ Cap Nav Fsh Idl Cog Raze/Loss A\r\nV:W V:F V:G V:S  Exp Rlc Wnd Cst Dck TCs A\r\nWood   Food   Gold  Stone   Sent   Recv A\r\n\r\nSet language id 9870:\r\nScore Pop/ Cap Mil Civ Idl Trd Kill/Loss A\tTeam Pop/ Cap Nav Fsh Idl Cog Raze/Loss A\tV:W V:F V:G V:S  Exp Rlc Wnd Cst Dck TCs A\tWood   Food   Gold  Stone   Sent   Recv A</code></pre><p><strong>Spectator and Rec Updates</strong></p><ul><li>Adjust speed: \"Ctrl+Left\" for slower, \"Ctrl+Right\" for faster, \"Ctrl+Shift+Down\" for normal.</li><li>Change stats: \"Ctrl+Down\" or \"F4\" or click the minimap Statistics button.</li><li>Reverse stats: \"Ctrl+Up\" or hold \"Shift\" when clicking the minimap Statistics button.</li><li>Locate King/Guard: \"Ctrl+Shift+Up\" or hold \"Ctrl\" when clicking the Idle Villager button.</li><li>Hold \"Shift\" when using the player name dropdown list to switch without changing view.</li></ul><p><strong>Core Updates and Fixes</strong></p><ul><li>Fixed issue with the accuracy of the client spectator counter display.</li><li>Fixed issue with the minimum position of the music volume option slider</li><li>Fixed crash when using the full map print feature after a multiplayer game.</li><li>Fixed issue where Enhanced v1.0c mode could not start on HD compat.</li></ul><p><strong>AI Scripting Updates</strong></p><ul><li>Fixed crash that could occur when using " + snNumberTaskedUnits.getLink() + " with DUC.</li><li>The " + cUpCreateGroup.getLink() + " action will now function as " + cUpResetGroup + " if there are no available units.</li></ul><p>Thanks to LightTree, offwo, CheeseOnToast, fenris, Wergorne, and TheViper for statistics feedback, wattle and TWest for view switch feedback, UnfairestEel and CoT for the AI reports, jeowaypoint for the Enhanced v1.0c report, CoT for the map print crash report, S3Kingcat on aoczone for Friend/Foe colors feedback, TheSerpent on aoczone for the music volume slider report, and TheViper, Memb, and Jineapple for hotkey paging feedback. The multiplayer sync id has been updated, so all players in a game must have this build (5746) to play in multiplayer.",
		itemsAffected: [snNumberTaskedUnits, cUpCreateGroup, cUpResetGroup],
		scriptingType: "ai"
	}, {
		number: "20171103-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171103-000000)! This update adds a restricted feature for \"Multiplayer single player speed\". With this option, you can run single player games at the slightly faster multiplayer game speed. This can be useful if you'd like to practice for multiplayer games while still using the single player game setup screen. Thanks to Felipe_EL_Guapo for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5656) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171102-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171102-000000)! This update fixes an issue with Friend/Foe Colors, where they would be updated to the current player perspective in response to cartography, spies, and diplomacy changes. This could cause unexpected color swaps when watching a rec or spectating. This fix will skip the color update for carto and spies, while updating the colors for diplomacy changes from the perspective of the original FFC player (blue). Thanks to t90 and Dave for the report on stream! The multiplayer sync id has been updated, so all players in a game must have this build (5652) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171101-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171101-000000)! This update fixes a crash issue with the touch screen control feature. I didn't notice until I checked a tablet lol. The multiplayer sync id has been updated, so all players in a game must have this build (5650) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171031-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171031-000000)! This update fixes the issue with framerate/speed inconsistencies after unpausing in a multiplayer game. This issue would often lead to units skipping as they move for a few moments. There may still be increased command delay as it resyncs everyone, but it should now be a smooth transition. In addition, the installer (SetupAoC) has been adjusted, so that if it detects a voobly-modified age2_x1.exe, it will present its checkbox options like a first install. This should hopefully avoid issues where certain options like the 20fps restricted option were preselected. Thanks to II2N for the unpause report and KiiNgZoNe for the installer report! The multiplayer sync id has been updated, so all players in a game must have this build (5648) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171025-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171025-000000)! This update fixes the reveal enemy bonus system, so that it will reveal all starting town centers for multi-tc start maps like Metropolis. In addition, allied villagers are no longer visible on any nomad start maps, which should avoid the unfair advantage of the reveal for only allied players with villager-m units on Custom nomad start rms maps (Standard nomad already blocked allied villager reveal). For multiplayer games, notifications are now sent for task switching events (Alt+Tab), so players can see when people are absent and when they're back. Finally, to avoid certain object positioning exploits, you can now hold \"Ctrl\" when right-clicking to target objects hidden behind others (affects unit right-click actions like attack, repair, etc.) and hold \"Ctrl+Alt\" when right-clicking to move without targeting (for example, to send units onto an enemy farm position without attacking the farm itself).</p><p>Thanks to Jineapple and AocZone for reveal feedback, BugA and CoT for mp notification feedback, and randomdude, wattle, and TWest for mouse control feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5640) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171006-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171006-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170926-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a critical bug in pathing carried from v1.0c, where units pass through buildings and foundations under certain conditions. In addition, some adjustments have been made to improve the situation where units fail to automatically attack nearby targets in range. This applies to both warships like the demolition ship and melee units. If they can't path to the target to get in range, though, this fix will not help. Finally, the AMOUNT_REVEAL_ENEMY (209) resource has been adjusted, so that it works using flags: 1: reveal starting town-center, 2: reveal first town-center on nomad. For WololoKingdoms to match HD behavior, AMOUNT_REVEAL_ENEMY can be set to 3 to combine both effects.</p><p>Thanks to Marauder for the pathing report (video!), TheViper for the attack report on stream, and Jineapple for reveal enemy feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5634) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170926-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170926-000000)! This update adjusts the Ctrl+Arrow hotkeys, so that they will not interfere while actually playing. They will only be activated for rec/spec. Thanks to CSA_R_Griffith for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5626) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170925-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170925-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170920-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue with building resource trickle handling, which affects the Feitoria for WK. There should be no rec compat issue for aoc. In addition, you can now change rec/spec speed with \"Ctrl+Left\" for slower, \"Ctrl+Right\" for faster, and \"Ctrl+Up/Down\" for normal. Adding Shift will allow for smaller speed adjustments, like clicking the buttons. Thanks to Melkor on aoczone for the Feitoria report and aerovistae on reddit for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5624) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170920-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170920-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170915-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue with the internal AI handling of certain building objects that have a secondary projectile unit defined, but no range to attack, such as the Dock in WololoKingdoms. There should be no rec compat issue for aoc. Thanks to TriRem and CoT for the report and testing! The multiplayer sync id has been updated, so all players in a game must have this build (5620) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170915-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170915-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170913-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update attempts to fix the situation where units that are patrolled onto themselves may freeze and/or fail to respond for an extended period of time. This fix can also benefit other cases where patrol fails to resolve a path. Thanks to asdfasdfasdf1 on aoczone for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5618) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170913-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170913-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170908-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, where boars may abandon their attack despite being targeted. This can cause the 2 hit luring requirement to be reset, which can lead to unexpected luring failures. In addition, various, subtle performance improvements have been made to the core to reduce cpu load. More performance improvements are coming soon. The multiplayer sync id has been updated, so all players in a game must have this build (5614) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170908-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170908-000000)! This update changes the tech effect system to not truncate hitpoints to max 32767 when adjusting ATTR_HITPOINTS. This should help up-effect work more like Change Object HP. Please note, however, that an object's max HP (ATTR_HITPOINTS) should not exceed 32767 or, like Change Object HP:0, the object will be destroyed. In addition, a new (sync) restricted feature, Rms and Scx debug logging, has been added. This enables logging to \"Age of Empires II\debug.X.txt\" for map parsing and scenario triggers. Prefix ids: RD (rms #define/#const), RC (rms create_object), ST (scx trigger), SE (scx effect). Please do not use this feature unless absolutely required for testing. Thanks to BF_Tanks for the HP feedback and Rico_jolla for logging feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5576) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170903-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170903-000000)! This update changes the hotkey editor, so that it will allow, but still alert, for conflicting hotkeys. This should avoid issues where people had to edit their hotkeys in external editors. There are also some minor performance optimizations. Thanks to Memb and Jineapple for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5572) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170831-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170831-000000)! This update adjusts the previous fix that enabled the ability to SET_ATTRIBUTE an object's ATTR_STORAGE_VALUE to -32 to commit the (FWGS) amount. This can now also be used to safely commit the Corpse Decay Time #12 amount, so scenarios can adjust the time that existing objects (placed by the editor) remain on the map. In addition, for up-effect, along with setting Number to 9, the Display Instructions effect Timer value only has to be >= 99999 now, instead of 99999999. This should hopefully be easier to type in. Thanks to Mr Wednesday on AoKH for attribute feedback and randomdude for Timer feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5566) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170830-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170830-000000)! This update adds a new Number property for the Play Sound trigger effect. If you select the same sound from the dropdown and set Number from 1-8, you can adjust the volume of a currently playing sound effect, where 1 is max volume and 8 is min. If you set Number to 9, the sound effect will be stopped. In addition, animated water in multiplayer mode will now be paused for a player if cpu load gets excessive to avoid lagging the game for everyone else. Water animation will resume once cpu load drops back to an acceptable level. Thanks to Andanu Trisatya and Little Berry on AoKH for stop sound and volume/fade feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5565) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170829-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170829-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170828-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue with gates, where they would lose HP for each open/close event after change ownership occurs in a scenario. The fix aligns the gate's HP with the new owner's gate hitpoints, preserving the ratio of damage, and restores the gate to standard ownership without the converted object property data. Although the gate's style will still change if there's a style mismatch, this fix should at least avoid the issue of self-destructing gates. If a rec doesn't involve this particular issue, then rec compatibility should remain fine. Thanks to Rico_jolla on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5558) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170828-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170828-000000)! This update adjusts the previous fix to ensure that unavailable team units are darkened appropriately. Thanks to Jineapple for testing! The multiplayer sync id has been updated, so all players in a game must have this build (5553) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170827-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170827-000000)! This update fixes the tech tree display for team bonus enabled units. Change the tech tree unit \"Status\" value in A.G.E. from 2 to (10 + civId) to assign that unit as a team unit for that civ. The unit will be displayed with a red X if the player's civ can't access the unit directly or isn't allied with a player who can. Thanks to Memb for the report and Jineapple for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5552) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170824-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170824-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170823-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, which caused improper variability in monk conversion timing and contributed to the sense that v1.5 monks were converting faster due to the 60fps multiplayer. In addition, the string table id label is now fixed for triggers, so it displays as expected. Finally, a new \"Windowed fullscreen mode\" restricted feature has been added. If you prefer classic fullscreen mode, where the screen resolution resizes for gameplay, but your GPU has performance or text rendering issues with 256-color mode, this feature works with \"Windowed mode support\" to provide a 32-bit color fullscreen mode. Press F5 on the installer window to show the Restricted features list.</p><p>Thanks to Daut for the monk report on stream, randomdude for the string table report, and Lord Basse at AoKH for fullscreen feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5548) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170823-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170823-000000)! This update enables the string table id textbox for the scenario editor. It will appear by default for the Send Chat and Display Instructions effects. Incidentally, there are a few side effects to locking the value to 1 in 0x005EB270, so the reference code was changed to simply nop specific checks instead. In addition, any trigger effects that have a non-zero Number value will now be displayed with that value in the effects list, so it's easier to find a specific effect. For example, \"E#10: Change Object HP: 2\" might be shown for a heal effect. Thanks to randomdude and danielpr for the string table code! The multiplayer sync id has been updated, so all players in a game must have this build (5525) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170821-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170821-000000)! This update enables you to SET_ATTRIBUTE an object's ATTR_STORAGE_VALUE to -32 to commit the (FWGS) amount. This can be used in the scenario editor with up-effect after changing something like a mine's resource amount to commit the change to existing mines. For example, you can do up-effect 0,0,102,21,800,1 to set stone mines to have 800 stone and then up-effect 0,0,102,21,-32,1 to commit that new value to existing stone mines. This is necessary because ATTR_STORAGE_VALUE is normally only applied when an object is first created, so existing resource objects would not be affected by a trigger change to it. Thanks to BFTanks for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5521) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170819-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170819-000000)! This update adjusts the Accumulate Attribute and Tribute dropdowns in the scenario editor to provide the same list for both. The lists have also been resorted and the unusual spaces in front of the first few values have been eliminated by using different language ids. In addition, the installer (SetupAoC.exe) now presents all 3 command bar styles as a set, so you can select Widescreen, Centered, or Left-aligned without the confusing mix of checkboxes. Thanks to BFTanks for scenario editor feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5518) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170813-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170813-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170810-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, which can cause boars to fail to respond after being attacked by an untargetable object type, such as the town center. This can lead boars to wander away or idle in response to hunter attacks. If boars were only attacked by hunters, scouts, etc. then rec compatibility should be fine with earlier v1.5 betas. Thanks to TWest for the boar report and rec! The multiplayer sync id has been updated, so all players in a game must have this build (5479) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170810-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170810-000000)! This update enables the ability to change object cost types with rms effect_amount, scx up-effect, techs, etc. MUL_ATTRIBUTE an object cost (FWGS) by -1 to create a cost type or -2 to remove a cost type. Thanks to ZeroEmpires for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5477) to play in multiplayer. <a href=\"http://forums.aiscripters.com/viewtopic.php?p=66985#p66985\">MUL_ATTRIBUTE Examples</a>",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170808-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170808-000000)! This update applies a performance optimization for scenario loading and enables formatting (bold, etc.) for tech tree civilization description text. Thanks to randomdude for the scenario optimization and Memb for tech tree feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5475) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170807-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170807-000000)! This update adds a new flag for ATTR_TRAITS (Unit Attribute). Set ATTR_TRAITS flag 64 (0x40) to disable the delete button command for an object. This will not hide the delete button for non-building units, since it would be an unnecessary calculation each time a selection occurs to check for that among all selected objects. The primary purpose of this flag is to help scenario designers to control deletion in their scenarios with either the up-effect or up-attribute commands, but rms and mods can use this, as well. In addition, this fixes issues with friend-or-foe color swapping after a rec/spec game ends and friend-or-foe color swapping for the victory timer text in King of the Hill, etc. Thanks to randomdude for scenario delete feedback and T90Official for the monument report! The multiplayer sync id has been updated, so all players in a game must have this build (5472) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170806-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170806-000000)! This update fixes an issue with restoring games, where commands may be blocked if the exact command from before the save is attempted before a different command. This issue could even occur in single player v1.0c saved games. Thanks to TriRem for the report and Roechelrochen from t90's stream for the rec and details! The multiplayer sync id has been updated, so all players in a game must have this build (5467) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		
		//finished page 443