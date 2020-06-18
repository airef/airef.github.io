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
		number: "20170805-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170805-100000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170805-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a terrain issue that can occur in scenarios that include bridges, due to the adjusted terrain system. The bridge placement terrains 14 (desert) and 28 (water bridge) now have an exception to update terrain reachability data. Rec compatibility will probably be fine for games that do not include bridges. Thanks to John_the_Late for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5465) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170805-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170805-000000)! This update adds a new warning for coop player changes. If a player's civ or team id is changed by coop colors, they will be notified by a message in orange text (\"!!! Change Player.\") and their Ready state will be unchecked to block launch until they verify and Ready again. This should hopefully avoid any confusion and intentional/unintentional changes like this in the future. The multiplayer sync id has been updated, so all players in a game must have this build (5463) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170804-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170804-000000)! This update adjusts the multiplayer game setup lobby chat shade of white to be a bit less bright. In addition, performance improvements have been adjusted for multiplayer and a new optimization has been implemented for the general game core to reduce cpu cycles. The more units on the map, the more this optimization can improve performance. The multiplayer sync id has been updated, so all players in a game must have this build (5459) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170802-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170802-000000)! This update allows the full chat window (Alt+T) to appear after resign or defeat and can be used to see chat and adjust the horn buttons in order to allow or block messages from players, but it can't be used to send messages. In addition, the color of chat messages in the multiplayer game setup lobby will now alternate shades of white/grey in order to make it easier to see if someone has sent a multi-line message to impersonate another player. Thanks to randomdude for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5454) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170801-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170801-000000)! This update adjusts the default water animation highlights to be more subtle and less bright to avoid distracting from objects like shore fish. In addition, you can now press Ctrl+B in the scenario editor to toggle terrain blending to draw water without beach, etc. The terrain blending mode will reset to default each time the editor loads (from startup or when returning from testing) to ensure that the blend mode change doesn't affect actual gameplay. The blend mode will also affect rms maps generated in the scenario editor, which could have interesting effects on the appearance of some maps. Thanks to Julius999 on AoKH for editor feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5445) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170731-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170731-000000)! This update includes performance improvements for multiplayer games. The multiplayer sync id has been updated, so all players in a game must have this build (5440) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170728-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170728-000000)! This update adds a new flag to ATTR_HERO_STATUS: -128 (0x80): disable attack ground button interface. This flag can be used for mods and expansions to disable a unit's attack ground button, which restores the standard patrol buttons, etc. The wild animal attack alert will now be suppressed for class 10 units that meet the luring requirements: it carries resources and has <= 100HP. This will ensure that elephant attacks, etc. do not alert like wolves. Finally, multiplayer game speeds have been adjusted once again to bring them closer to expected v1.0c speeds. Thanks to Wergorne for the attack ground report and buddy for the wild animal report! Thanks to II2N and Jupe for testing multiplayer speeds!</p><p>The multiplayer sync id has been updated, so all players in a game must have this build (5429) to play in multiplayer.</p>",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170726-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170726-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170724-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue with the previous group floating, collapse, and pike patrol fix, in order to ensure that rapid-clicking will not cause unexpected formation stagger. Thanks to Clemensor for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170724-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170724-000000)! This update makes a few minor adjustments for the water. In addition, the multiplayer game speeds for slow, normal, and fast have been more closely aligned with v1.0c. Thanks to CheeseOnToast for feedback and testing! Due to the speed adjustment, the multiplayer sync id has been updated, so all players in a game must have this build (5422) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170720-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170720-000000)! This update adjusts the underwater terrain for medium water and deep water to provide more parallax. Still experimenting with this, so it's all still subject to change.</p><p>Rec/save/sync id remains unchanged for this update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170718-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170718-100000)! This update adjusts the underwater terrain to be a bit more subtle. For animated water terrains, the 4th byte of the configuration set is now enabled: Set byte 0x1F between 0x01 and 0x0F to enable terrain underwater or 0x00 to disable. 0x03 is used for shallow and medium water by default. This feature can be disabled from the installer with the new \"Disable terrain underwater\" checkbox. Still experimenting with this, so it's all still subject to change.</p><p>Rec/save/sync id remains unchanged for this update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170718-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170718-000000)! This update fixes a bug with scenarios, where AIs would send livestock that they own on startup to the town center, which differs from v1.0c behavior, where they would idle on startup. This caused issues in scenarios where the AI was expected to be immobile, so for all scenarios and campaigns, this livestock behavior has been disabled, so that it matches v1.0c behavior. Non-scenario/campaign games are unaffected by this change.</p><p>In addition, a wavy sand-like pattern is now drawn underwater (for shallow water and medium water only, by default) to make the parallax water effect more obvious, to improve the appearance of the default shallow water terrain, and to provide a point of reference that doesn't move when looking at the water. For animated water terrains, the 4th byte of the configuration set is now enabled: Set byte 0x1F to 0x01 to enable terrain underwater or 0x00 to disable. This feature can be disabled from the installer with the new \"Disable terrain underwater\" checkbox. Still experimenting with this, so it's all still subject to change.</p><p>Thanks to Mr. Wednesday on AoKH for the livestock report! Rec/save/sync id remains unchanged for this update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170715-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170715-000000)! This update fixes a crash bug with the \"Lower quality environment\" restricted feature. Thanks to LightTree for the report! Rec/save/sync id remains unchanged for this update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170710-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170710-000000)! This update updates the guide/readme, by moving earlier update details from the \"Notes\" section to a new \"Previous\" section. Thanks to Aleph for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170707-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170707-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170704-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a rare, but critical bug in the pathing system that can cause auto-retasking to fail under certain conditions, when events occur within a walled and/or sealed map region. In addition, a new \"Default to background mode\" restricted feature was added, so the game starts with Back: On instead of Back: Off for F8 mode. Thanks to Nilpferd and II2N for the pathing report and Tapsa for background feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170704-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170704-000000)! This update enables mods and expansions to override the height of the extended help hover textbox by setting language id 10815 to the new height. The default is 115, so 150-155 might provide enough space for 2 more lines. This can help with certain languages that have longer descriptions, etc. If the game resolution is less than 768 height, the default of 115 will be used instead. For performance reasons, it's strongly recommended to leave it at the default size unless absolutely necessary in order to reduce redraw. Thanks to Jineapple for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170702-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170702-000000)! This update changes the handling of left-click object action commands to operate despite mouse movement. I didn't see any problems in testing, so hopefully, there are no unintended side effects from this change lol. Thanks to TWest for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170701-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170701-000000)! This update changes the way ZR (zip-rms) maps are validated for multiplayer, etc. They will now compare the internal rms (and scx if present) instead of the entire file. This will allow for ZR rms files to contain different terrain slp graphics overrides (grid/non-grid, etc.) while still matching. In addition, mods and expansions can now override weather sound effects by setting language ids 10812 (rain) and 10813 (snow) to drs sound effect resource id numbers. Sound effects should be relatively low volume to avoid disruption. Each sound effect should be between 5 to 10 seconds and loop naturally. Thanks to Jineapple for the rms feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170628-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170628-100000)! This update adjusts the fix to limit issues if someone attempts to install UP with SetupAoC.exe inside the \"age2_x1\" folder instead of the root \"Age of Empires II\" folder.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170628-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170628-000000)! This update enables you to draw terrain up to Elevation 11 instead of 7 directly in the scenario editor. Please try to avoid using high elevations near the map edges to ensure proper map visibility, as scrolling is limited at the edges. This change does not affect rms elevation. In addition, some adjustments were made to remove debug code in the multiplayer system, prevent dpa corruption of compat version launch, and limit issues if someone attempts to install UP with SetupAoC.exe inside the \"age2_x1\" folder instead of the root \"Age of Empires II\" folder. Thanks to Tetsuo3 for elevation feedback, offwo for the dpa report, and StepS for the installer report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170616-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170616-000000)! This update adjusts the scroll smoothness fix a bit to avoid unnecessary cpu/resource usage for touch screens. I think it should be good now. No, really :lol: Hi LightTree!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170615-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170615-200000)! This update will hopefully improve scrolling smoothness for all single player modes, including the rec/spec viewer. On my system, it feels very nice now, so hopefully it's better for most other people, as well.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170615-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170615-100000)! This update adds 3 new AI direct unit control actions in order to ensure completeness: action-drop-relic (15), action-pack (16), action-unpack (17). The action-none id has moved from 15 to 18, as well, so please update your defconsts from UserPatchConst.per if needed. Please take care to only use action-pack and action-unpack with appropriate unit types or there may be unexpected results. Thanks to CheeseOnToast and II2N for feedback!",
		itemsAffected: [pTargetAction, cUpTargetPoint],
		scriptingType: "ai"
	}, {
		number: "20170615-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170615-000000)! This update provides some additional terrain blending control using the rms command: terrain_state inConstModeId inConstParam1 inConstParam2 inConstValue. You can enable shallow terrain construction by adding flag 1 to Value with ModeId 0. When enabled, resources like trees, gold, stone, and forage can exist on shallow terrain, as well. Internally, this changes the accessibility of terrain id 4 (shallows) from 0.0 to 1.0 for terrain restrictions 4, 8, 10, and 11. New with this version: Add flag 2 to Value for thinner shallow/beach blending, which changes the blend priority for shallows (4) to 111 over beach (2) at 110. Add flag 4 to Value for alternate ice blending, which changes the blend type for ice (26) to 4.",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170614-200000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170614-200000)! This update fixes another rare case for scroll distortion, so hopefully we're at 100% now lol. In addition, the dynamically generated terrain names in the scenario editor can now be defined directly in the language file. If a language id is missing, the name will be dynamically generated as before. Thanks to Tetsuo3 and Jineapple for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170614-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170614-100000)! This update adds some additional resilience for scrolling to avoid terrain shadow distortion. Hopefully, this mouse and scroll fix is proper for at least 99% of cases ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170614-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170614-000000)! This update fixes touch screen scrolling, by hopefully making it smoother and less likely to cause shadow distortion from things like trees. Changes were also made to ensure that coordinates are adjusted to predictable values when scrolling to ensure that things like the scenario Change View effect can't distort terrain shadows. As before, still refining the mouse and scroll stuff and testing for weirdness. Thanks to Mash on aokh for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170613-010000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170613-010000)! This update attempts to improve the mouse cursor accuracy, so that when you click, the focus will almost certainly be on the exact mouse point. When the view has scrolled against the edge of the map, it can still become slightly inaccurate, but not a full tile shift downward, at least.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170613-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170613-000000)! This update removes the auto-pause that can randomly occur during scrolling outside multiplayer games, such as single player or rec/spec. When this would happen, you wouldn't see a \"game paused\" message, but the game clock would stop and the framerate would drop until your continuous scroll movement ends and everything goes back to normal.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170612-200000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170612-200000)! This update adjusts the shallow terrain animation, in order to give the highlights a bit more of a flowing look.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170612-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170612-100000)! This update fixes a crash issue with AI scripts when attempting to train units with an invalid train location. In addition, the excessive bounce/jitter when scrolling has been fixed, so hopefully it should feel more smooth when moving across the map. Finally, the issue where the focus of a mouse click is improperly offset and appears shifted below the actual pointer position has been fixed. Thanks to offwo for the AI report and nhoobish on aokh for the mouse cursor report! There may need to be some refinement for the mouse fix, but we'll see ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170612-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170612-000000)! This update enables terrain id 4 (shallows) to animate, as well. To avoid ruining the plants, this animation is more subtle and only highlights the water. If a terrain uses an animated terrain id as its base terrain, then it will also animate. In addition, app launch has been accelerated significantly under certain conditions.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170611-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170611-000000)! This update adjusts the Relics victory condition, so that all players will have sight of relics and monk-with-relic units. In addition, when a relic is picked up, everyone will hear the relic sound effect, see the mini-map highlight, and get the \"relic picked up\" event message. Thanks to Jineapple for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170609-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170609-000000)! This update adjusts the terrain system, so that blending between water terrain types is consistent without unexpected beach. In addition, new forest terrain types will be handled properly, with proper detection for AI lumber-camp placement, and checks to block palisading of non-straggler trees. Terrain restriction data is used to determine water terrains and the terrain object creation class id is used for forest detection. Thanks to Jineapple for testing and feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170608-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170608-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170605-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update enables shallow terrain construction and accessibility using the new terrain_state rms command. When enabled, resources like trees, gold, stone, and forage can exist on shallow terrain, as well as buildings. Internally, this changes the accessibility of terrain id 4 (shallows) from 0.0 to 1.0 for terrain restrictions 4, 8, 10, and 11. To enable all of this, rec/save files now store the original terrain id with each map tile in order to ensure consistent pathing and farm terrain resets. Due to this additional data, rec management apps and things like recanalyst will need to be updated to handle this additional data for the v1.5 rec VER 9.E. When reading each map tile, instead of 2 bytes (terrain id, elevation id), it will be 4 bytes (0xFF, current terrain id, elevation id, original terrain id). I've included an example for the buildable shallows in the Reference/Scripting/Examples folder: DarkShallows.rms. AIs should be able to handle these maps without any changes.",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170605-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170605-000000)! This update fixes several issues with the new tech effects 7 (ENABLE_TECH), 8 (MODIFY_TECH), and 9 (SET_PLAYER_DATA). They should no longer crash and apply appropriately when used in multi-targeting effects for allies, enemies, etc. The ENABLE_TECH effect has been adjusted to apply to all techs when a negative tech id is provided that isn't -1 and -1 has been made invalid always. The tech research timer is also reset by ENABLE_TECH with ATTR_FORCE (2), so it will not instantly self-disable when re-enabled if the tech required research time. Thanks to randomdude for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170531-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170531-000000)! This update fixes a core bug that can crash the game if it's saved (or recorded) after an AI has owned objects with certain extended object ids. Thanks to Vardamir for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170529-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170529-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170526-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a critical bug in the tribute system carried from v1.0c, where the tax may be improperly applied under certain conditions. In practice, the impact is relatively low for small tribute amounts, but it grows to be quite significant for higher amounts. This fix should hopefully ensure that the tribute amount received is always consistent. Thanks to pedro and jay on aoczone for the report and research!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170526-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170526-000000)! This update fixes several issues and prepares the core for the next update. The scenario editor should no longer crash when generating a map if an object is currently selected under certain conditions. The Defend the Wonder game mode will no longer generate an unexpected extra wall line, due to the new rms capability for multiple wall lines, on maps like Arena that already have a wall line. The game should no longer crash if an object is ungarrisoned under certain conditions without a unit AI. If a terrain like Old Water is repurposed by a mod to function as a land terrain with appropriate terrain restrictions set, it should no longer break the entire pathing system, which would allow units to move anywhere. Please take care to avoid adding or removing the core water, beach, and shallow terrains, though: 1, 2, 4, 22, 23, 37. Thanks to danielpr and Jineapple for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170518-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170518-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170516-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue where extremely high levels of cpu usage can occur when attempting to move a grouped unit that can never move. In addition, there are various performance optimizations to reduce maybe 10000-100000 ops per game turn. It's probably not high enough to be noticeable except in certain conditions, but every little bit helps lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170516-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170516-100000)! This update adjusts the resource storage mode flag 16 to work for objects that aren't category 80. Hopefully it works with normal units now and not just buildings. Thanks to danielpr for testing! In addition, a new up-set-precise-target-point command has been added, along with 3 new object data sources: object-data-to-precise (gets precise distance to a precise target-point from up-set-precise-target-point), object-data-base-type (usually the same as object-data-type, except in certain scenario situations), and object-data-upgrade-type (the currently active upgrade type id). The up-set-precise-target-point is basically up-set-target-point with no bounds check, so please ensure the point is valid with up-bound-precise-point as needed. Thanks to Cake for feedback!",
		itemsAffected: [cUpSetPreciseTargetPoint, pObjectData],
		scriptingType: "ai"
	}, {
		number: "20170516-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170516-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170515-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue where new relics added to the map can break the relic countdown. Now, if additional relics are added to the map by triggers, the original total remains as the minimum required for a relic victory countdown. This is the only reliable way that doesn't involve performing an expensive search around the map for newly created monk-with-relic units from players and other complications lol. For the rec break, as before, it should only be a problem if you actually played a scenario where this bug could occur. Thanks to Vardamir for the report! In addition, resource storage mode flag 16 has been added, which only removes the resource value when the unit is lost. If you negate the value, it will add the resource when the unit is lost. Thanks to John for feedback! I hope we can freeze the feature list soon ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170515-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170515-100000)! This update ensures that the sighted object abstraction table does not overflow on very unit heavy mods/expansions. Thanks to danielpr and John_the_Late for testing!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20170515-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170515-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170514-000000 build. Recs for v1.4 and earlier are fine on latest.</p>This update fixes the issue where changing ownership of a monastery breaks the game's relic counters. About the rec break, as before, it should only be a problem if you actually played a scenario where this bug could occur. Thanks to Kor, Rico_jolla, and Julius999 for the report!</p><p>In addition, this update makes object ids 1000 to 1959 available for AIs to see, count, etc. This means that object ids 0-899 and 1000-1959 can be more useful as object ids, while 900-999 must remain reserved for unit classes only. There is a slight cost to reading from the extended object id list (3 ops maybe per instance), so it's still best to put important objects in the 0-899 range. Note, however, that the AI sighted unit abstraction table is limited to 240 useful slots. In the latest wololo, 188 slots are used. The sighted unit abstraction table is provided to the following types of units: category 70 or 80, size > 0, has a train/build location, and isn't hidden (except for category 70). Thanks to WAIFor for reminding!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20170514-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170514-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170513-200000 build. Recs for v1.4 and earlier are fine on latest. This update fixes the issue where changing ownership of a unit while it's garrisoned can break line of sight. About the rec break, it should only be a problem if you actually played a scenario where this bug could occur. Other than that, it's probably fine lol. Thanks to danielpr for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170513-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170513-200000)! This update fixes a crash from the previous release when opening the main chat window. Thanks to Cake for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170513-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170513-000000)! This update fixes a bug that would corrupt single player game setup after attempting to open an invalid rec file. In addition, it fixes about 30 memory leaks in the core (looks like very old code from the aoe1 era, but was still used often lol). Thanks to Promi for the report! Still researching a couple more fixes ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170511-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170511-000000)! This update adjusts sn-boar-lure-destination, so you can add 12 to the normal value (0 to 11) to shift the point down to the grid corner. This means the full range of values for the sn are 0 to 23. Invalid values will now behave like 0. Please see the beta reference for more detail. Thanks to Promi for feedback!",
		itemsAffected: [snBoarLureDestination],
		scriptingType: "ai"
	}, {
		number: "20170510-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170510-000000)! This update adds several new AI commands and capabilities. The (up-full-reset-search) command combines (up-reset-search 1 1 1 1) and (up-reset-filters) into a single command to save rule lines. For bounding points more safely, the (up-bound-precise-point ioGoalPoint1 inConstPrecise typeOp inOpBorder) command has been added, so you can bound both normal and precise points inside the map, along with a border width. Finally, sn-boar-lure-destination is now available for AIs to control where at the town center a lurer retreats to, using values from 0 to 11. Please see the beta reference for more detail. Thanks to Cake for the ideas! Thanks to CheeseOnToast and fenris for additional feedback!",
		itemsAffected: [cUpFullResetSearch, cUpBoundPrecisePoint, snBoarLureDestination],
		scriptingType: "ai"
	}, {
		number: "20170509-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170509-100000)! This update fixes the issue with the -e rec file extension installer option when using game expansion exe generation. Thanks, daniel!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170509-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170509-000000)! This update adjusts the internal behavior for class 9 (deer, etc.) and class 10 (boar, wolves, etc.) in order to generalize them and un-hard-code the specific unit ids. Now, class 9 units like deer will be huntable by AIs and humans as long as they have resource storage > 0. For matching units, scouts will not be able to directly attack/lame them just like deer. For class 10, if a unit has resource storage > 0 and no more than 100 HP, it will be considered for luring by AIs (dropsite-min-distance boar-hunting, live-boar, etc.) and follow the boar behavior pattern instead of the wolf behavior pattern. This allows units like the boar, javelina, and elephant (all 75HP) to be lured, while units like the Iron Boar are blocked, just as before, due to excessive HP. Thanks to Bala Arizalu for feedback!",
		itemsAffected: [cDropsiteMinDistance],
		scriptingType: "ai"
	}, {
		number: "20170508-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170508-000000)! This update adjusts the internal behavior of siege towers again by changing the drop point for straight vertical/horizontal walls. In addition, the code that adapts units for \"villager mode\" swaps has been adjusted for siege class 13 to ensure that garrison effects are retained for speed, etc. Thanks to TriRem and danielpr for testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170507-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170507-000000)! This update adjusts the internal behavior of siege towers by fixing an issue with random conversion and disabling their automatic attack response, so they always try to stand still unless tasked, making it easier for units to garrison inside. Thanks to TriRem for testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170506-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170506-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve from previous v1.5 betas, please backup the previous 20170504-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes another core simulation bug carried from v1.0c, which can cause military units to idle next to targets after ungarrisoning, despite being aggressive, etc. In addition, if the ability is enabled in A.G.E., livestock (class 58) will be able to garrison into adjacent targets. They aren't \"complex\" units, so they can't directly walk to and garrison into distant targets or summon transports toward them in a single command. If you attempt to garrison into a distant target, the sheep will just walk toward the target instead. To support livestock garrison, the previously reserved flag 16 for building category attribute ATTR_GARRISON_TYPE has been activated, so if a building has this flag set, sheep can garrison with alt+right-click when directly adjacent, etc.</p><p>Finally, if a class 13 siege unit has \"Interface Kind\" (cmdid) 12, it will be able to function as a siege tower using Unload ability #12, with the ability's class set to 27 for walls. In this way, you'll be able to simply right-click a non-corner wall and it will move to the wall and ungarrison units on the other side \"most\" of the time lol. This unit is more for lols than serious strategy, so don't expect much",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170504-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170504-100000)! This update changes the way ADD_ATTRIBUTE adjusts flags for ATTR_HERO_STATUS and ATTR_TRAITS. If ATTR_HERO_STATUS or ATTR_TRAITS are modified by the ADD_ATTRIBUTE effect, the new value flags will be appended. If flag 256 is set, the value flags will be removed instead. This change allows 0x80 to work as a flag instead of being taken for the previous negative number check. Basically, you can just add 256 to remove the flags in the first byte ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170504-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170504-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve from previous v1.5 betas, please backup the previous 20170502-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core simulation bug (sync breaker lol) carried from v1.0c in the garrison system, which would cause groups of units to be unable to garrison into a target building in a single action, requiring multiple re-garrison attempts. In addition to this fix, ATTR_SHOWN_ATTACK, ATTR_SHOWN_RANGE, ATTR_SHOWN_MELEE_ARMOR, ATTR_SHOWN_PIERCE_ARMOR, ATTR_TRAITS, ATTR_CIV_ID, ATTR_PIECE, and ATTR_DEAD_ID have been added to the tech system. ATTR_HERO_STATUS, ATTR_ATTACK_DELAY, ATTR_HERO_HEAL_TIME, ATTR_SHOWN_ATTACK, ATTR_SHOWN_RANGE, ATTR_SHOWN_MELEE_ARMOR, ATTR_SHOWN_PIERCE_ARMOR, and ATTR_TRAITS can now be modified by the ADD_ATTRIBUTE effect. If ATTR_HERO_STATUS or ATTR_TRAITS are modified by the ADD_ATTRIBUTE effect, positive values append flags, while negative values remove flags. Thanks to II2N for the garrison report! Thanks to John_the_Late and danielpr for tech feedback!</p><p>Unrelated, but here's an <a href=\"" + urlPrefix + "/images/scripter-target-point-adjustment.png\">image explaining where the sn-target-point-adjustment values are positioned on a tile. Thanks, Cake!",
		itemsAffected: [snTargetPointAdjustment],
		scriptingType: "ai"
	}, {
		number: "20170502-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170502-000000)! This update enables expansions to override taunt mp3s with a \"Games\[YourStuff]\Taunt\" folder. If a taunt can't be found in the expansion folder, the base game taunt will play instead if available. In addition, the hotkey files have been made per-expansion, as well, and will be stored in the \"Games\[YourStuff]\" folder. If the hki doesn't yet exist for an expansion, the base game hki settings will be inherited until the player adjusts them. Thanks to Jineapple for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170430-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170430-000000)! This update adds the \"assign_to\" LAND_GENERATION command to make player assignment easier, especially when using direct_placement in rms scripts. There's a fair amount of functionality in this command, so please see the reference for all of the detail. Thanks to Cake for the idea!</p><p>It seems that someone here or another person who was linked by someone here unfortunately leaked the direct link on reddit yesterday lol. Let's try to ensure that this stays somewhat more private until it's ready or those people will have unnecessary issues with their recs/saves later on. I remember how v1.1 was secret here almost forever until the GNAOKH Incident ",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170425-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170425-100000)! This update adjusts the weather effects slightly to reduce flicker and ensure the rain \"drops\" aren't as large and distracting on the screen. Thanks to Aleph for feedback! Thanks for testing, Kor! For normal games, phoenixv1s, the rms script can use the new weather_type command to adjust rain, etc. Kunyi, it might be best to visit the chat and ask there, as I haven't had much time to create real, practical example scripts with those new commands yet ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170425-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170425-000000)! This update adds additional multiplayer debug data for beta testing. In addition, it disables the !C warning prompt for maps that use effect_amount or effect_percent with Gaia effects only. This allows rms designers to use those commands more freely to adjust resources or animals like they can with resource_delta, leaving the !C warning prompt for cases where non-Gaia players are modified. Thanks to LightTree for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170423-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170423-100000)! This update reduces the water flow movement speed and adjusts the highlights on shallow water to be more subtle. Still refining water/weather. Sorry, ER ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "-000000",
		version: 1.5,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {

		
		//finished page 410
	}];