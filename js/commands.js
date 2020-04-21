function refresh() {
	location.reload();
	return;
}

class Command {
	constructor(a,b,c) {
		this.commandName = a;
		this.commandType = b;
		this.commandVersion = c;
		this.shortDescription = "";
		this.description = "";
		this.commandParameters = [];
		this.commandExample = "";
		this.commandLinks = [];
		this.relatedCommands = [];
		this.commandCategory = [];
	}

	getLink () {
		var link = '<a href="' + urlPrefix + '/commands/commands-details.html#' + this.commandName + '">' + this.commandName + '</a>';
		return link;
	}
}

class Parameter {
	constructor(a,b,c) {
		this.upParamName = a;
		this.paramVersion = b;
		this.esParamName = c;
		this.description = "";
		this.shortDescription = "";
		this.range = "";
		this.valueList = [];
		this.wildcardParam = [];
		this.relatedParams = [];
		this.prefixTypes = [];
		this.operatorTypes = [];
		this.ruleVariables = [];
	}

	getCommands () {
		var usedCommands = "";
		var j;
		for (var i = 0; i < commandsArray.length; i++) {
			j = 0;
			while (j < commandsArray[i].commandParameters.length) {
				if (commandsArray[i].commandParameters[j].name == this.upParamName) {
					usedCommands += commandsArray[i].getLink();
					usedCommands += ", &nbsp;";
				}
				j++;
			}
		}

		if (usedCommands.length > 0) {
			var pos = usedCommands.lastIndexOf(",");
			usedCommands = usedCommands.slice(0, pos);
		}

		if (usedCommands.length <= 0) {
			usedCommands = "Not used.";
		}

		return usedCommands;
	}

	getLink () {
		var link = '<a href="' + urlPrefix + '/parameters/parameters-details.html#' + this.upParamName + '">' + this.upParamName + '</a>';
		return link;
	}
}

class StrategicNumber {
	constructor(a) {
		this.snName = a;
		this.id = -1;
		this.category = "";
		this.min = -1;
		this.max = -1;
		this.rmin = -1;
		this.rmax = -1;
		this.network = 0;
		this.defined = 0;
		this.available = 0;
		this.version = "1.0c";
		this.linked = [];
		this.related = [];
		this.shortDescription = "";
		this.description = "";
	}

	getLink () {
		var link = '<a href="' + urlPrefix + '/strategic-numbers/sn-details.html#' + this.snName + '">' + this.snName + '</a>';
		return link;
	}
}

class DifficultyParameter {
	constructor(a) {
		this.dpName = a;
	}

	getLink () {
		var link = '<a href="' + urlPrefix + '/strategic-numbers/sn-details.html#' + this.dpName + '">' + this.dpName + '</a>';
		return link;
	}
}

class DefinedConstant {
	constructor(a) {
		this.dcName = a;
	}

	getLink () {
		//var link = '<a href="' + urlPrefix + '/constants/constants-details.html#' + this.dcName + '">' + this.dcName + '</a>';
		//return link;
		return; //remove later once above code is functional
	}
}

//Commands
var cTrue = new Command("true","Fact","1.0c");
var cFalse = new Command("false","Fact","1.0c");
var cAcknowledgeEvent = new Command("acknowledge-event","Action","1.0c");
var cAcknowledgeTaunt = new Command("acknowledge-taunt","Action","1.0c");
var cAttackNow = new Command("attack-now","Action","1.0c");
var cAttackSoldierCount = new Command("attack-soldier-count","Fact","1.0c");
var cAttackWarboatCount = new Command("attack-warboat-count","Fact","1.0c");
var cBuild = new Command("build","Action","1.0c");
var cBuildForward = new Command("build-forward","Action","1.0c");
var cBuildGate = new Command("build-gate","Action","1.0c");
var cBuildingAvailable = new Command("building-available","Fact","1.0c");
var cBuildingCount = new Command("building-count","Fact","1.0c");
var cBuildingCountTotal = new Command("building-count-total","Fact","1.0c");
var cBuildingTypeCount = new Command("building-type-count","Fact","1.0c");
var cBuildingTypeCountTotal = new Command("building-type-count-total","Fact","1.0c");
var cBuildWall = new Command("build-wall","Action","1.0c");
var cBuyCommodity = new Command("buy-commodity","Action","1.0c");
var cCanAffordBuilding = new Command("can-afford-building","Fact","1.0c");
var cCanAffordCompleteWall = new Command("can-afford-complete-wall","Fact","1.0c");
var cCanAffordResearch = new Command("can-afford-research","Fact","1.0c");
var cCanAffordUnit = new Command("can-afford-unit","Fact","1.0c");
var cCanBuild = new Command("can-build","Fact","1.0c");
var cCanBuildGate = new Command("can-build-gate","Fact","1.0c");
var cCanBuildGateWithEscrow = new Command("can-build-gate-with-escrow","Fact","1.0c");
var cCanBuildWall = new Command("can-build-wall","Fact","1.0c");
var cCanBuildWallWithEscrow = new Command("can-build-wall-with-escrow","Fact","1.0c");
var cCanBuildWithEscrow = new Command("can-build-with-escrow","Fact","1.0c");
var cCanBuyCommodity = new Command("can-buy-commodity","Fact","1.0c");
var cCanResearch = new Command("can-research","Fact","1.0c");
var cCanResearchWithEscrow = new Command("can-research-with-escrow","Fact","1.0c");
var cCanSellCommodity = new Command("can-sell-commodity","Fact","1.0c");
var cCanSpy = new Command("can-spy","Fact","1.0c");
var cCanSpyWithEscrow = new Command("can-spy-with-escrow","Fact","1.0c");
var cCanTrain = new Command("can-train","Fact","1.0c");
var cCanTrainWithEscrow = new Command("can-train-with-escrow","Fact","1.0c");
var cCcAddResource = new Command("cc-add-resource","Action","1.0c");
var cCcPlayersBuildingCount = new Command("cc-players-building-count","Fact","1.0c");
var cCcPlayersBuildingTypeCount = new Command("cc-players-building-type-count","Fact","1.0c");
var cCcPlayersUnitCount = new Command("cc-players-unit-count","Fact","1.0c");
var cCcPlayersUnitTypeCount = new Command("cc-players-unit-type-count","Fact","1.0c");
var cChatLocal = new Command("chat-local","Action","1.0c");
var cChatLocalToSelf = new Command("chat-local-to-self","Action","1.0c");
var cChatLocalUsingId = new Command("chat-local-using-id","Action","1.0c");
var cChatLocalUsingRange = new Command("chat-local-using-range","Action","1.0c");
var cChatToAll = new Command("chat-to-all","Action","1.0c");
var cChatToAllies = new Command("chat-to-allies","Action","1.0c");
var cChatToAlliesUsingId = new Command("chat-to-allies-using-id","Action","1.0c");
var cChatToAlliesUsingRange = new Command("chat-to-allies-using-range","Action","1.0c");
var cChatToAllUsingId = new Command("chat-to-all-using-id","Action","1.0c");
var cChatToAllUsingRange = new Command("chat-to-all-using-range","Action","1.0c");
var cChatToEnemies = new Command("chat-to-enemies","Action","1.0c");
var cChatToEnemiesUsingId = new Command("chat-to-enemies-using-id","Action","1.0c");
var cChatToEnemiesUsingRange = new Command("chat-to-enemies-using-range","Action","1.0c");
var cChatToPlayer = new Command("chat-to-player","Action","1.0c");
var cChatToPlayerUsingId = new Command("chat-to-player-using-id","Action","1.0c");
var cChatToPlayerUsingRange = new Command("chat-to-player-using-range","Action","1.0c");
var cChatTrace = new Command("chat-trace","Action","1.0c");
var cCheatsEnabled = new Command("cheats-enabled","Fact","1.0c");
var cCivilianPopulation = new Command("civilian-population","Fact","1.0c");
var cCivSelected = new Command("civ-selected","Fact","1.0c");
var cClearTributeMemory = new Command("clear-tribute-memory","Action","1.0c");
var cCommodityBuyingPrice = new Command("commodity-buying-price","Fact","1.0c");
var cCommoditySellingPrice = new Command("commodity-selling-price","Fact","1.0c");
var cCurrentAge = new Command("current-age","Fact","1.0c");
var cCurrentAgeTime = new Command("current-age-time","Fact","1.0c");
var cCurrentScore = new Command("current-score","Fact","1.0c");
var cDeathMatchGame = new Command("death-match-game","Fact","1.0c");
var cDefendSoldierCount = new Command("defend-soldier-count","Fact","1.0c");
var cDefendWarboatCount = new Command("defend-warboat-count","Fact","1.0c");
var cDeleteBuilding = new Command("delete-building","Action","1.0c");
var cDeleteUnit = new Command("delete-unit","Action","1.0c");
var cDifficulty = new Command("difficulty","Fact","1.0c");
var cDisableRule = new Command("disable-rule","Action","1.0c");
var cDisableSelf = new Command("disable-self","Action","1.0c");
var cDisableTimer = new Command("disable-timer","Action","1.0c");
var cDoctrine = new Command("doctrine","Fact","1.0c");
var cDoNothing = new Command("do-nothing","Action","1.0c");
var cDropsiteMinDistance = new Command("dropsite-min-distance","Fact","1.0c");
var cEnableRule = new Command("enable-rule","Action","1.0c");
var cEnableTimer = new Command("enable-timer","Action","1.0c");
var cEnableWallPlacement = new Command("enable-wall-placement","Action","1.0c");
var cEnemyBuildingsInTown = new Command("enemy-buildings-in-town","Fact","1.0c");
var cEnemyCapturedRelics = new Command("enemy-captured-relics","Fact","1.0c");
var cEscrowAmount = new Command("escrow-amount","Fact","1.0c");
var cEventDetected = new Command("event-detected","Fact","1.0c");
var cFoodAmount = new Command("food-amount","Fact","1.0c");
var cGameTime = new Command("game-time","Fact","1.0c");
var cGameType = new Command("game-type","Fact","1.0c");
var cGateCount = new Command("gate-count","Fact","1.0c");
var cGenerateRandomNumber = new Command("generate-random-number","Action","1.0c");
var cGoal = new Command("goal","Fact","1.0c");
var cGoldAmount = new Command("gold-amount","Fact","1.0c");
var cHoldKohRuin = new Command("hold-koh-ruin","Fact","1.0c");
var cHoldRelics = new Command("hold-relics","Fact","1.0c");
var cHousingHeadroom = new Command("housing-headroom","Fact","1.0c");
var cIdleFarmCount = new Command("idle-farm-count","Fact","1.0c");
var cLog = new Command("log","Action","1.0c");
var cLogTrace = new Command("log-trace","Action","1.0c");
var cMapSize = new Command("map-size","Fact","1.0c");
var cMapType = new Command("map-type","Fact","1.0c");
var cMilitaryPopulation = new Command("military-population","Fact","1.0c");
var cPlayerComputer = new Command("player-computer","Fact","1.0c");
var cPlayerHuman = new Command("player-human","Fact","1.0c");
var cPlayerInGame = new Command("player-in-game","Fact","1.0c");
var cPlayerNumber = new Command("player-number","Fact","1.0c");
var cPlayerResigned = new Command("player-resigned","Fact","1.0c");
var cPlayerValid = new Command("player-valid","Fact","1.0c");
var cPlayersBuildingCount = new Command("players-building-count","Fact","1.0c");
var cPlayersBuildingTypeCount = new Command("players-building-type-count","Fact","1.0c");
var cPlayersCiv = new Command("players-civ","Fact","1.0c");
var cPlayersCivilianPopulation = new Command("players-civilian-population","Fact","1.0c");
var cPlayersCurrentAge = new Command("players-current-age","Fact","1.0c");
var cPlayersCurrentAgeTime = new Command("players-current-age-time","Fact","1.0c");
var cPlayersMilitaryPopulation = new Command("players-military-population","Fact","1.0c");
var cPlayersPopulation = new Command("players-population","Fact","1.0c");
var cPlayersScore = new Command("players-score","Fact","1.0c");
var cPlayersStance = new Command("players-stance","Fact","1.0c");
var cPlayersTribute = new Command("players-tribute","Fact","1.0c");
var cPlayersTributeMemory = new Command ("players-tribute-memory","Fact","1.0c");
var cPlayersUnitCount = new Command("players-unit-count","Fact","1.0c");
var cPlayersUnitTypeCount = new Command("players-unit-type-count","Fact","1.0c");
var cPopulation = new Command("population","Fact","1.0c");
var cPopulationCap = new Command("population-cap","Fact","1.0c");
var cPopulationHeadroom = new Command("population-headroom","Fact","1.0c");
var cRandomNumber = new Command("random-number","Fact","1.0c");
var cRegicideGame = new Command("regicide-game","Fact","1.0c");
var cReleaseEscrow = new Command("release-escrow","Action","1.0c");
var cResearch = new Command("research","Action","1.0c");
var cResearchAvailable = new Command("research-available","Fact","1.0c");
var cResearchCompleted = new Command("research-completed","Fact","1.0c");
var cResign = new Command("resign","Action","1.0c");
var cResourceFound = new Command("resource-found","Fact","1.0c");
var cSellCommodity = new Command("sell-commodity","Action","1.0c");
var cSetAuthorEmail = new Command("set-author-email","Action","1.0c");
var cSetAuthorName = new Command("set-author-name","Action","1.0c");
var cSetAuthorVersion = new Command("set-author-version","Action","1.0c");
var cSetDifficultyParameter = new Command("set-difficulty-parameter","Action","1.0c");
var cSetDoctrine = new Command("set-doctrine","Action","1.0c");
var cSetEscrowPercentage = new Command("set-escrow-percentage","Action","1.0c");
var cSetGoal = new Command("set-goal","Action","1.0c");
var cSetSharedGoal = new Command("set-shared-goal","Action","1.0c");
var cSetSignal = new Command("set-signal","Action","1.0c");
var cSetStance = new Command("set-stance","Action","1.0c");
var cSetStrategicNumber = new Command("set-strategic-number","Action","1.0c");
var cSharedGoal = new Command("shared-goal","Fact","1.0c");
var cSheepAndForageTooFar = new Command("sheep-and-forage-too-far","Fact","1.0c");
var cSoldierCount = new Command("soldier-count","Fact","1.0c");
var cSpy = new Command("spy","Action","1.0c");
var cStanceToward = new Command("stance-toward","Fact","1.0c");
var cStartingAge = new Command("starting-age","Fact","1.0c");
var cStartingResources = new Command("starting-resources","Fact","1.0c");
var cStoneAmount = new Command("stone-amount","Fact","1.0c");
var cStrategicNumber = new Command("strategic-number","Fact","1.0c");
var cTaunt = new Command("taunt","Action","1.0c");
var cTauntDetected = new Command("taunt-detected","Fact","1.0c");
var cTauntUsingRange = new Command("taunt-using-range","Action","1.0c");
var cTimerTriggered = new Command("timer-triggered","Fact","1.0c");
var cTownUnderAttack = new Command("town-under-attack","Fact","1.0c");
var cTraceFact = new Command("trace-fact","Action","1.0c");
var cTrain = new Command("train","Action","1.0c");
var cTributeToPlayer = new Command("tribute-to-player","Action","1.0c");
var cUnitAvailable = new Command("unit-available","Fact","1.0c");
var cUnitCount = new Command("unit-count","Fact","1.0c");
var cUnitCountTotal = new Command("unit-count-total","Fact","1.0c");
var cUnitTypeCount = new Command("unit-type-count","Fact","1.0c");
var cUnitTypeCountTotal = new Command("unit-type-count-total","Fact","1.0c");
var cVictoryCondition = new Command("victory-condition","Fact","1.0c");
var cWallCompletedPercentage = new Command("wall-completed-percentage","Fact","1.0c");
var cWallInvisiblePercentage = new Command("wall-invisible-percentage","Fact","1.0c");
var cWarboatCount = new Command("warboat-count","Fact","1.0c");
var cWoodAmount = new Command("wood-amount","Fact","1.0c");
var cUpAddCostData = new Command("up-add-cost-data","Action","1.1");
var cUpAddObjectById = new Command("up-add-object-by-id","Both","1.1");
var cUpAddObjectCost = new Command("up-add-object-cost","Action","1.1");
var cUpAddPoint = new Command("up-add-point","Action","1.1");
var cUpAddResearchCost = new Command("up-add-research-cost","Action","1.1");
var cUpAlliedGoal = new Command("up-allied-goal","Fact","1.1");
var cUpAlliedResourceAmount = new Command("up-allied-resource-amount","Fact","1.1");
var cUpAlliedResourcePercent = new Command("up-allied-resource-percent","Fact","1.1");
var cUpAlliedSn = new Command("up-allied-sn","Fact","1.1");
var cUpAssignBuilders = new Command("up-assign-builders","Action","1.1");
var cUpAttackerClass = new Command("up-attacker-class","Fact","1.1");
var cUpBoundPoint = new Command("up-bound-point","Action","1.1");
var cUpBoundPrecisePoint = new Command("up-bound-precise-point","Action","1.1");
var cUpBuild = new Command("up-build","Action","1.1");
var cUpBuildLine = new Command("up-build-line","Action","1.1");
var cUpBuildingTypeInTown = new Command("up-building-type-in-town","Fact","1.1");
var cUpBuyCommodity = new Command("up-buy-commodity","Action","1.1");
var cUpCanBuild = new Command("up-can-build","Fact","1.1");
var cUpCanBuildLine = new Command("up-can-build-line","Fact","1.1");
var cUpCanResearch = new Command("up-can-research","Fact","1.1");
var cUpCanSearch = new Command("up-can-search","Fact","1.1");
var cUpCanTrain = new Command("up-can-train","Fact","1.1");
var cUpCcAddResource = new Command("up-cc-add-resource","Action","1.1");
var cUpCcSendCheat = new Command("up-cc-send-cheat","Action","1.1");
var cUpChangeName = new Command("up-change-name","Action","1.1");
var cUpChatDataToAll = new Command("up-chat-data-to-all","Action","1.1");
var cUpChatDataToPlayer = new Command("up-chat-data-to-player","Action","1.1");
var cUpChatDataToSelf = new Command("up-chat-data-to-self","Action","1.1");
var cUpCleanSearch = new Command("up-clean-search","Action","1.1");
var cUpCompareConst = new Command("up-compare-const","Fact","1.1");
var cUpCompareFlag = new Command("up-compare-flag","Fact","1.1");
var cUpCompareGoal = new Command("up-compare-goal","Fact","1.1");
var cUpCompareSn = new Command("up-compare-sn","Fact","1.1");
var cUpCompareText = new Command("up-compare-text","Fact","1.1");
var cUpCopyPoint = new Command("up-copy-point","Action","1.1");
var cUpCreateGroup = new Command("up-create-group","Action","1.1");
var cUpCrossTiles = new Command("up-cross-tiles","Action","1.1");
var cUpDefenderCount = new Command("up-defender-count","Fact","1.1");
var cUpDeleteDistantFarms = new Command("up-delete-distant-farms","Action","1.1");
var cUpDeleteIdleUnits = new Command("up-delete-idle-units","Action","1.1");
var cUpDeleteObjects = new Command("up-delete-objects","Action","1.1");
var cUpDisbandGroupType = new Command("up-disband-group-type","Action","1.1");
var cUpDropResources = new Command("up-drop-resources","Action","1.1");
var cUpEnemyBuildingsInTown = new Command("up-enemy-buildings-in-town","Fact","1.1");
var cUpEnemyUnitsInTown = new Command("up-enemy-units-in-town","Fact","1.1");
var cUpEnemyVillagersInTown = new Command("up-enemy-villagers-in-town","Fact","1.1");
var cUpFilterDistance = new Command("up-filter-distance","Action","1.1");
var cUpFilterExclude = new Command("up-filter-exclude","Action","1.1");
var cUpFilterGarrison = new Command("up-filter-garrison","Action","1.1");
var cUpFilterInclude = new Command("up-filter-include","Action","1.1");
var cUpFilterRange = new Command("up-filter-range","Action","1.1");
var cUpFilterStatus = new Command("up-filter-status","Action","1.1");
var cUpFindFlare = new Command("up-find-flare","Action","1.1");
var cUpFindLocal = new Command("up-find-local","Both","1.1");
var cUpFindNextPlayer = new Command("up-find-next-player","Action","1.1");
var cUpFindPlayer = new Command("up-find-player","Action","1.1");
var cUpFindPlayerFlare = new Command("up-find-player-flare","Action","1.1");
var cUpFindRemote = new Command("up-find-remote","Both","1.1");
var cUpFindResource = new Command("up-find-resource","Both","1.1");
var cUpFindStatusLocal = new Command("up-find-status-local","Both","1.1");
var cUpFindStatusRemote = new Command("up-find-status-remote","Both","1.1");
var cUpFullResetSearch = new Command("up-full-reset-search","Action","1.1");
var cUpGaiaTypeCount = new Command("up-gaia-type-count","Fact","1.1");
var cUpGaiaTypeCountTotal = new Command("up-gaia-type-count-total","Fact","1.1");
var cUpGarrison = new Command("up-garrison","Action","1.1");
var cUpGatherInside = new Command("up-gather-inside","Action","1.1");
var cUpGetAttackerClass = new Command("up-get-attacker-class","Action","1.1");
var cUpGetCostDelta = new Command("up-get-cost-delta","Action","1.1");
var cUpGetEvent = new Command("up-get-event","Action","1.1");
var cUpGetFact = new Command("up-get-fact","Both","1.1");
var cUpGetFactMax = new Command("up-get-fact-max","Both","1.1");
var cUpGetFactMin = new Command("up-get-fact-min","Both","1.1");
var cUpGetFactSum = new Command("up-get-fact-sum","Both","1.1");
var cUpGetFocusFact = new Command("up-get-focus-fact","Both","1.1");
var cUpGetGroupSize = new Command("up-get-group-size","Action","1.1");
var cUpGetGuardState = new Command("up-get-guard-state","Action","1.1");
var cUpGetIndirectGoal = new Command("up-get-indirect-goal","Action","1.1");
var cUpGetObjectData = new Command("up-get-object-data","Both","1.1");
var cUpGetObjectTargetData = new Command("up-get-object-target-data","Both","1.1");
var cUpGetObjectTypeData = new Command("up-get-object-type-data","Action","1.1");
var cUpGetPathDistance = new Command("up-get-path-distance","Action","1.1");
var cUpGetPlayerColor = new Command("up-get-player-color","Action","1.1");
var cUpGetPlayerFact = new Command("up-get-player-fact","Both","1.1");
var cUpGetPoint = new Command("up-get-point","Action","1.1");
var cUpGetPointContains = new Command("up-get-point-contains","Both","1.1");
var cUpGetPointDistance = new Command("up-get-point-distance","Action","1.1");
var cUpGetPointElevation = new Command("up-get-point-elevation","Action","1.1");
var cUpGetPointTerrain = new Command("up-get-point-terrain","Action","1.1");
var cUpGetPointZone = new Command("up-get-point-zone","Action","1.1");
var cUpGetPreciseTime = new Command("up-get-precise-time","Action","1.1");
var cUpGetProjectilePlayer = new Command("up-get-projectile-player","Action","1.1");
var cUpGetRuleId = new Command("up-get-rule-id","Action","1.1");
var cUpGetSearchState = new Command("up-get-search-state","Action","1.1");
var cUpGetSharedGoal = new Command("up-get-shared-goal","Action","1.1");
var cUpGetSignal = new Command("up-get-signal","Action","1.1");
var cUpGetTargetFact = new Command("up-get-target-fact","Both","1.1");
var cUpGetThreatData = new Command("up-get-threat-data","Action","1.1");
var cUpGetTimer = new Command("up-get-timer","Action","1.1");
var cUpGetUpgradeId = new Command("up-get-upgrade-id","Action","1.1");
var cUpGetVictoryData = new Command("up-get-victory-data","Action","1.1");
var cUpGetVictoryLimit = new Command("up-get-victory-limit","Action","1.1");
var cUpGroupSize = new Command("up-group-size","Fact","1.1");
var cUpGuardUnit = new Command("up-guard-unit","Action","1.1");
var cUpIdleUnitCount = new Command("up-idle-unit-count","Fact","1.1");
var cUpJumpDirect = new Command("up-jump-direct","Action","1.1");
var cUpJumpDynamic = new Command("up-jump-dynamic","Action","1.1");
var cUpJumpRule = new Command("up-jump-rule","Action","1.1");
var cUpLerpPercent = new Command("up-lerp-percent","Action","1.1");
var cUpLerpTiles = new Command("up-lerp-tiles","Action","1.1");
var cUpLogData = new Command("up-log-data","Action","1.1");
var cUpModifyEscrow = new Command("up-modify-escrow","Action","1.1");
var cUpModifyFlag = new Command("up-modify-flag","Action","1.1");
var cUpModifyGoal = new Command("up-modify-goal","Both","1.1");
var cUpModifyGroupFlag = new Command("up-modify-group-flag","Action","1.1");
var cUpModifySn = new Command("up-modify-sn","Action","1.1");
var cUpObjectData = new Command("up-object-data","Fact","1.1");
var cUpObjectTargetData = new Command("up-object-target-data","Fact","1.1");
var cUpObjectTypeCount = new Command("up-object-type-count","Fact","1.1");
var cUpObjectTypeCountTotal = new Command("up-object-type-count-total","Fact","1.1");
var cUpPathDistance = new Command("up-path-distance","Fact","1.1");
var cUpPendingObjects = new Command("up-pending-objects","Fact","1.1");
var cUpPendingPlacement = new Command("up-pending-placement","Fact","1.1");
var cUpPlayerDistance = new Command("up-player-distance","Fact","1.1");
var cUpPlayersInGame = new Command("up-players-in-game","Fact","1.1");
var cUpPointContains = new Command("up-point-contains","Fact","1.1");
var cUpPointDistance = new Command("up-point-distance","Fact","1.1");
var cUpPointElevation = new Command("up-point-elevation","Fact","1.1");
var cUpPointExplored = new Command("up-point-explored","Fact","1.1");
var cUpPointTerrain = new Command("up-point-terrain","Fact","1.1");
var cUpPointZone = new Command("up-point-zone","Fact","1.1");
var cUpProjectileDetected = new Command("up-projectile-detected","Fact","1.1");
var cUpProjectileTarget = new Command("up-projectile-target","Fact","1.1");
var cUpReleaseEscrow = new Command("up-release-escrow","Action","1.1");
var cUpRemainingBoarAmount = new Command("up-remaining-boar-amount","Fact","1.1");
var cUpRemoveObjects = new Command("up-remove-objects","Action","1.1");
var cUpRequestHunters = new Command("up-request-hunters","Action","1.1");
var cUpResearch = new Command("up-research","Action","1.1");
var cUpResearchStatus = new Command("up-research-status","Fact","1.1");
var cUpResetAttackNow = new Command("up-reset-attack-now","Action","1.1");
var cUpResetBuilding = new Command("up-reset-building","Action","1.1");
var cUpResetCostData = new Command("up-reset-cost-data","Action","1.1");
var cUpResetFilters = new Command("up-reset-filters","Action","1.1");
var cUpResetGroup = new Command("up-reset-group","Action","1.1");
var cUpResetPlacement = new Command("up-reset-placement","Action","1.1");
var cUpResetScouts = new Command("up-reset-scouts","Action","1.1");
var cUpResetSearch = new Command("up-reset-search","Action","1.1");
var cUpResetTargetPriorities = new Command("up-reset-target-priorities","Action","1.1");
var cUpResetUnit = new Command("up-reset-unit","Action","1.1");
var cUpResourceAmount = new Command("up-resource-amount","Fact","1.1");
var cUpResourcePercent = new Command("up-resource-percent","Fact","1.1");
var cUpRetaskGatherers = new Command("up-retask-gatherers","Action","1.1");
var cUpRetreatNow = new Command("up-retreat-now","Action","1.1");
var cUpRetreatTo = new Command("up-retreat-to","Action","1.1");
var cUpSellCommodity = new Command("up-sell-commodity","Action","1.1");
var cUpSendFlare = new Command("up-send-flare","Action","1.1");
var cUpSendScout = new Command("up-send-scout","Action","1.1");
var cUpSetAttackStance = new Command("up-set-attack-stance","Action","1.1");
var cUpSetDefensePriority = new Command("up-set-defense-priority","Action","1.1");
var cUpSetEvent = new Command("up-set-event","Action","1.1");
var cUpSetGroup = new Command("up-set-group","Action","1.1");
var cUpSetIndirectGoal = new Command("up-set-indirect-goal","Action","1.1");
var cUpSetOffensePriority = new Command("up-set-offense-priority","Action","1.1");
var cUpSetPlacementData = new Command("up-set-placement-data","Action","1.1");
var cUpSetPreciseTargetPoint = new Command("up-set-precise-target-point","Action","1.1");
var cUpSetSharedGoal = new Command("up-set-shared-goal","Action","1.1");
var cUpSetSignal = new Command("up-set-signal","Action","1.1");
var cUpSetTargetById = new Command("up-set-target-by-id","Both","1.1");
var cUpSetTargetObject = new Command("up-set-target-object","Both","1.1");
var cUpSetTargetPoint = new Command("up-set-target-point","Action","1.1");
var cUpSetTimer = new Command("up-set-timer","Action","1.1");
var cUpSetupCostData = new Command("up-setup-cost-data","Action","1.1");
var cUpStoreMapName = new Command("up-store-map-name","Action","1.1");
var cUpStoreObjectName = new Command("up-store-object-name","Action","1.1");
var cUpStorePlayerChat = new Command("up-store-player-chat","Action","1.1");
var cUpStorePlayerName = new Command("up-store-player-name","Action","1.1");
var cUpStoreTechName = new Command("up-store-tech-name","Action","1.1");
var cUpStoreText = new Command("up-store-text","Action","1.1");
var cUpStoreTypeName = new Command("up-store-type-name","Action","1.1");
var cUpTargetObjects = new Command("up-target-objects","Action","1.1");
var cUpTargetPoint = new Command("up-target-point","Action","1.1");
var cUpTimerStatus = new Command("up-timer-status","Fact","1.1");
var cUpTrain = new Command("up-train","Action","1.1");
var cUpTrainSiteReady = new Command("up-train-site-ready","Fact","1.1");
var cUpTributeToPlayer = new Command("up-tribute-to-player","Action","1.1");
var cUpUngarrison = new Command("up-ungarrison","Action","1.1");
var cUpUnitTypeInTown = new Command("up-unit-type-in-town","Fact","1.1");
var cUpUpdateTargets = new Command("up-update-targets","Action","1.1");
var cUpVillagerTypeInTown = new Command("up-villager-type-in-town","Fact","1.1");

var commandsArray = [cAcknowledgeEvent, cAcknowledgeTaunt, cAttackNow, cAttackSoldierCount, cAttackWarboatCount, cBuild, cBuildForward, cBuildGate, cBuildWall, cBuildingAvailable, cBuildingCount, cBuildingCountTotal, cBuildingTypeCount, cBuildingTypeCountTotal, cBuyCommodity, cCanAffordBuilding, cCanAffordCompleteWall, cCanAffordResearch, cCanAffordUnit, cCanBuild, cCanBuildWithEscrow, cCanBuildGate, cCanBuildGateWithEscrow, cCanBuildWall, cCanBuildWallWithEscrow, cCanBuyCommodity, cCanResearch, cCanResearchWithEscrow, cCanSellCommodity, cCanSpy, cCanSpyWithEscrow, cCanTrain, cCanTrainWithEscrow, cCcAddResource, cCcPlayersBuildingCount, cCcPlayersBuildingTypeCount, cCcPlayersUnitCount, cCcPlayersUnitTypeCount, cChatLocal, cChatLocalToSelf, cChatLocalUsingId, cChatLocalUsingRange, cChatToAll, cChatToAllUsingId, cChatToAllUsingRange, cChatToAllies, cChatToAlliesUsingId, cChatToAlliesUsingRange, cChatToEnemies, cChatToEnemiesUsingId, cChatToEnemiesUsingRange, cChatToPlayer, cChatToPlayerUsingId, cChatToPlayerUsingRange, cChatTrace, cCheatsEnabled, cCivilianPopulation, cCivSelected, cClearTributeMemory, cCommodityBuyingPrice, cCommoditySellingPrice, cCurrentAge, cCurrentAgeTime, cCurrentScore, cDeathMatchGame, cDefendSoldierCount, cDefendWarboatCount, cDeleteBuilding, cDeleteUnit, cDifficulty, cDisableRule, cDisableSelf, cDisableTimer, cDoctrine, cDoNothing, cDropsiteMinDistance, cEnableRule, cEnableTimer, cEnableWallPlacement, cEnemyBuildingsInTown, cEnemyCapturedRelics, cEscrowAmount, cEventDetected, cFalse, cFoodAmount, cGameTime, cGameType, cGateCount, cGenerateRandomNumber, cGoal, cGoldAmount, cHoldKohRuin, cHoldRelics, cHousingHeadroom, cIdleFarmCount, cLog, cLogTrace, cMapSize, cMapType, cMilitaryPopulation, cPlayerComputer, cPlayerHuman, cPlayerInGame, cPlayerNumber, cPlayerResigned, cPlayerValid, cPlayersBuildingCount, cPlayersBuildingTypeCount, cPlayersCiv, cPlayersCivilianPopulation, cPlayersCurrentAge, cPlayersCurrentAgeTime, cPlayersMilitaryPopulation, cPlayersPopulation, cPlayersScore, cPlayersStance, cPlayersUnitCount, cPlayersUnitTypeCount, cPopulation, cPopulationCap, cPopulationHeadroom, cRandomNumber, cRegicideGame, cReleaseEscrow, cResearch, cResearchAvailable, cResearchCompleted, cResign, cResourceFound, cSellCommodity, cSetAuthorEmail, cSetAuthorName, cSetAuthorVersion, cSetDifficultyParameter, cSetDoctrine, cSetEscrowPercentage, cSetGoal, cSetSharedGoal, cSetSignal, cSetStance, cSetStrategicNumber, cSharedGoal, cSheepAndForageTooFar, cSoldierCount, cSpy, cStanceToward, cStartingAge, cStartingResources, cStoneAmount, cStrategicNumber, cTaunt, cTauntDetected, cTauntUsingRange, cTimerTriggered, cTownUnderAttack, cTraceFact, cTrain, cTributeToPlayer, cTrue, cUnitAvailable, cUnitCount, cUnitCountTotal, cUnitTypeCount, cUnitTypeCountTotal, cVictoryCondition, cWallCompletedPercentage, cWallInvisiblePercentage, cWarboatCount, cWoodAmount, cUpAddCostData, cUpAddObjectById, cUpAddObjectCost, cUpAddPoint, cUpAddResearchCost, cUpAlliedGoal, cUpAlliedResourceAmount, cUpAlliedResourcePercent, cUpAlliedSn, cUpAssignBuilders, cUpAttackerClass, cUpBoundPoint, cUpBoundPrecisePoint, cUpBuild, cUpBuildLine, cUpBuildingTypeInTown, cUpBuyCommodity, cUpCanBuild, cUpCanBuildLine, cUpCanResearch, cUpCanSearch, cUpCanTrain, cUpCcAddResource, cUpCcSendCheat, cUpChangeName, cUpChatDataToAll, cUpChatDataToPlayer, cUpChatDataToSelf, cUpCleanSearch, cUpCompareConst, cUpCompareFlag, cUpCompareGoal, cUpCompareSn, cUpCompareText, cUpCopyPoint, cUpCreateGroup, cUpCrossTiles, cUpDefenderCount, cUpDeleteDistantFarms, cUpDeleteIdleUnits, cUpDeleteObjects, cUpDisbandGroupType, cUpDropResources, cUpEnemyBuildingsInTown, cUpEnemyUnitsInTown, cUpEnemyVillagersInTown, cUpFilterDistance, cUpFilterExclude, cUpFilterGarrison, cUpFilterInclude, cUpFilterRange, cUpFilterStatus, cUpFindFlare, cUpFindLocal, cUpFindNextPlayer, cUpFindPlayer, cUpFindPlayerFlare, cUpFindRemote, cUpFindResource, cUpFindStatusLocal, cUpFindStatusRemote, cUpFullResetSearch, cUpGaiaTypeCount, cUpGaiaTypeCountTotal, cUpGarrison, cUpGatherInside, cUpGetAttackerClass, cUpGetCostDelta, cUpGetEvent, cUpGetFact, cUpGetFactMax, cUpGetFactMin, cUpGetFactSum, cUpGetFocusFact, cUpGetGroupSize, cUpGetGuardState, cUpGetIndirectGoal, cUpGetObjectData, cUpGetObjectTargetData, cUpGetObjectTypeData, cUpGetPathDistance, cUpGetPlayerColor, cUpGetPlayerFact, cUpGetPoint, cUpGetPointContains, cUpGetPointDistance, cUpGetPointElevation, cUpGetPointTerrain, cUpGetPointZone, cUpGetPreciseTime, cUpGetProjectilePlayer, cUpGetRuleId, cUpGetSearchState, cUpGetSharedGoal, cUpGetSignal, cUpGetTargetFact, cUpGetThreatData, cUpGetTimer, cUpGetUpgradeId, cUpGetVictoryData, cUpGetVictoryLimit, cUpGroupSize, cUpGuardUnit, cUpIdleUnitCount, cUpJumpDirect, cUpJumpDynamic, cUpJumpRule, cUpLerpPercent, cUpLerpTiles, cUpLogData, cUpModifyEscrow, cUpModifyFlag, cUpModifyGoal, cUpModifyGroupFlag, cUpModifySn, cUpObjectData, cUpObjectTargetData, cUpObjectTypeCount, cUpObjectTypeCountTotal, cUpPathDistance, cUpPendingObjects, cUpPendingPlacement, cUpPlayerDistance, cUpPlayersInGame, cUpPointContains, cUpPointDistance, cUpPointElevation, cUpPointExplored, cUpPointTerrain, cUpPointZone, cUpProjectileDetected, cUpProjectileTarget, cUpReleaseEscrow, cUpRemainingBoarAmount, cUpRemoveObjects, cUpRequestHunters, cUpResearch, cUpResearchStatus, cUpResetAttackNow, cUpResetBuilding, cUpResetCostData, cUpResetFilters, cUpResetGroup, cUpResetPlacement, cUpResetScouts, cUpResetSearch, cUpResetTargetPriorities, cUpResetUnit, cUpResourceAmount, cUpResourcePercent, cUpRetaskGatherers, cUpRetreatNow, cUpRetreatTo, cUpSellCommodity, cUpSendFlare, cUpSendScout, cUpSetAttackStance, cUpSetDefensePriority, cUpSetEvent, cUpSetGroup, cUpSetIndirectGoal, cUpSetOffensePriority, cUpSetPlacementData, cUpSetPreciseTargetPoint, cUpSetSharedGoal, cUpSetSignal, cUpSetTargetById, cUpSetTargetObject, cUpSetTargetPoint, cUpSetTimer, cUpSetupCostData, cUpStoreMapName, cUpStoreObjectName, cUpStorePlayerChat, cUpStorePlayerName, cUpStoreTechName, cUpStoreText, cUpStoreTypeName, cUpTargetObjects, cUpTargetPoint, cUpTimerStatus, cUpTrain, cUpTrainSiteReady, cUpTributeToPlayer, cUpUngarrison, cUpUnitTypeInTown, cUpUpdateTargets, cUpVillagerTypeInTown];

//Parameters
var pCompareOp = new Parameter("compareOp","1.0c","&#60;rel-op&#62;");
var pMathOp = new Parameter("mathOp","1.1");
var pTypeOp = new Parameter("typeOp","1.1");
var pActionId = new Parameter("ActionId","1.1");
var pAge = new Parameter("Age","1.0c","&#60;age&#62;");
var pAllyPlayer = new Parameter("AllyPlayer","1.1");
var pAnyPlayer = new Parameter("AnyPlayer","1.0c","&#60;player-number&#62;");
var pAttackStance = new Parameter("AttackStance","1.1");
var pBorder = new Parameter("Border","1.1");
var pBuildingId = new Parameter("BuildingId","1.0c","&#60;building&#62;");
var pCiv = new Parameter("Civ","1.0c","&#60;civ&#62;");
var pClassId = new Parameter("ClassId","1.1");
var pCmdId = new Parameter("CmdId","1.1");
var pCode = new Parameter("Code","1.1");
var pColorId = new Parameter("ColorId","1.1");
var pCommodity = new Parameter("Commodity","1.0c","&#60;commodity&#62;");
var pComputerAllyPlayer = new Parameter("ComputerAllyPlayer","1.1");
var pCount = new Parameter("Count","1.1");
var pData = new Parameter("Data","1.1");
var pDifficulty = new Parameter("Difficulty","1.0c","&#60;difficulty&#62;");
var pDiffParameterId = new Parameter("DiffParameterId","1.0c","&#60;difficulty-parameter&#62;");
var pDistance = new Parameter("Distance","1.1");
var pElapsedTime = new Parameter("ElapsedTime","1.1");
var pEscrowState = new Parameter("EscrowState","1.1");
var pESPlayerStance = new Parameter("ESPlayerStance","1.0c","&#60;diplomacy-stance&#62;");
var pEventId = new Parameter("EventId","1.0c","&#60;event-id&#62;");
var pEventType = new Parameter("EventType","1.0c","&#60;event-type&#62;");
var pExploredState = new Parameter("ExploredState","1.1");
var pExtension = new Parameter("Extension","1.1");
var pFactId = new Parameter("FactId","1.1");
var pFindPlayerMethod = new Parameter("FindPlayerMethod","1.1");
var pFlag = new Parameter("Flag","1.1");
var pFormation = new Parameter("Formation","1.1");
var pFormattedString = new Parameter("FormattedString","1.1");
var pGameType = new Parameter("GameType","1.0c");
var pGoalId = new Parameter("GoalId","1.0c","&#60;goal-id&#62;");
var pGroupId = new Parameter("GroupId","1.1");
var pGroupType = new Parameter("GroupType","1.1");
var pGuardState = new Parameter("GuardState","1.1");
var pHitpoints = new Parameter("HitPoints","1.1");
var pId = new Parameter("Id","1.1");
var pIdleType = new Parameter("IdleType","1.1");
var pIndex = new Parameter("Index","1.1");
var pLanguageId = new Parameter("LanguageId","1.0c","&#60;string-id&#62;","&#60;string-id-start&#62;");
var pLimit = new Parameter("Limit","1.1");
var pLocalIndex = new Parameter("LocalIndex","1.1");
var pLocalList = new Parameter("LocalList","1.1");
var pMapSize = new Parameter("MapSize","1.0c","&#60;map-size&#62;");
var pMapType = new Parameter("MapType","1.0c","&#60;map-type&#62;");
var pMaxDistance = new Parameter("MaxDistance","1.1");
var pMaxGarrison = new Parameter("MaxGarrison","1.1");
var pMinDistance = new Parameter("MinDistance","1.1");
var pMinGarrison = new Parameter("MinGarrison","1.1");
var pMode = new Parameter("Mode","1.1");
var pNewName = new Parameter("NewName","1.1");
var pObjectData = new Parameter("ObjectData","1.1");
var pObjectId = new Parameter("ObjectId","1.1");
var pObjectList = new Parameter("ObjectList","1.1");
var pObjectStatus = new Parameter("ObjectStatus","1.1");
var pOn = new Parameter("On","1.1");
var pOnMainland = new Parameter("OnMainland","1.1");
var pOrderId = new Parameter("OrderId","1.1");
var pParam = new Parameter("Param","1.1");
var pPercent = new Parameter("Percent","1.1");
var pPerimeter = new Parameter("Perimeter","1.0c","&#60;perimeter&#62;");
var pPlacementType = new Parameter("PlacementType","1.1");
var pPlain = new Parameter("Plain","1.1");
var pPlayerId = new Parameter("PlayerId","1.1");
var pPlayerStance = new Parameter("PlayerStance","1.1");
var pPoint = new Parameter("Point","1.1");
var pPositionType = new Parameter("PositionType","1.1");
var pPrecise = new Parameter("Precise","1.1");
var pPreserveResearch = new Parameter("PreserveResearch","1.1");
var pProjectileType = new Parameter("ProjectileType","1.1");
var pPriorityType = new Parameter("PriorityType","1.1");
var pRemoteIndex = new Parameter("RemoteIndex","1.1");
var pRemoteList = new Parameter("RemoteList","1.1");
var pResearchState = new Parameter("ResearchState","1.1");
var pResetCost = new Parameter("ResetCost","1.1");
var pResource = new Parameter("Resource","1.0c","&#60;resource-type&#62;");
var pResourceAmount = new Parameter("ResourceAmount","1.1");
var pRuleDelta = new Parameter("RuleDelta","1.1");
var pRuleId = new Parameter("RuleId","1.1");
var pScoutMethod = new Parameter("ScoutMethod","1.1");
var pSearchOrder = new Parameter("SearchOrder","1.1");
var pSearchSource = new Parameter("SearchSource","1.1");
var pSharedGoalId = new Parameter("SharedGoalId","1.0c","&#60;shared-goal-id&#62;");
var pSignalId = new Parameter("SignalId","1.0c","&#60;signal-id&#62;");
var pSize = new Parameter("Size","1.1");
var pSnId = new Parameter("SnId","1.0c","&#60;strategic-number&#62;");
var pSourceClass = new Parameter("SourceClass","1.1");
var pStart = new Parameter("Start","1.1");
var pStartingResources = new Parameter("StartingResources","1.0c","&#60;starting-resources&#62;");
var pState = new Parameter("State","1.1");
var pStrict = new Parameter("Strict","1.1");
var pString = new Parameter("String","1.0c","&#60;string&#62;");
var pTarget = new Parameter("Target","1.1");
var pTargetAction = new Parameter("TargetAction","1.1");
var pTargetClass = new Parameter("TargetClass","1.1");
var pTauntId = new Parameter("TauntId","1.0c","&#60;taunt-id&#62;");
var pTechId = new Parameter("TechId","1.0c","&#60;research-item&#62;");
var pTerrain = new Parameter("Terrain","1.1");
var pText = new Parameter("Text","1.1");
var pTiles = new Parameter("Tiles","1.1");
var pTime = new Parameter("Time","1.1");
var pTimerId = new Parameter("TimerId","1.0c","&#60;timer-id&#62;");
var pTimerState = new Parameter("TimerState","1.1");
var pType = new Parameter("Type","1.1");
var pTypeId = new Parameter("TypeId","1.1");
var pUnitId = new Parameter("UnitId","1.0c","&#60;unit&#62;");
var pUpgradeId = new Parameter("UpgradeId","1.1");
var pValue = new Parameter("Value","1.0c","&#60;value&#62;");
var pVictory = new Parameter("Victory","1.0c","&#60;victory-condition&#62;");
var pWallId = new Parameter("WallId","1.0c","&#60;wall-id&#62;");

var parametersArray = [pCompareOp, pMathOp, pTypeOp, pActionId, pAge, pAllyPlayer, pAnyPlayer, pAttackStance, pBorder, pBuildingId, pCiv, pClassId, pCmdId, pCode, pColorId, pCommodity, pComputerAllyPlayer, pCount, pData, pDifficulty, pDiffParameterId, pDistance, pElapsedTime, pEscrowState, pESPlayerStance, pEventId, pEventType, pExploredState, pExtension, pFactId, pFindPlayerMethod, pFlag, pFormation, pFormattedString, pGameType, pGoalId, pGroupId, pGroupType, pGuardState, pHitpoints, pId, pIdleType, pIndex, pLanguageId, pLimit, pLocalIndex, pLocalList, pMapSize, pMapType, pMaxDistance, pMaxGarrison, pMinDistance, pMinGarrison, pMode, pNewName, pObjectData, pObjectId, pObjectList, pObjectStatus, pOn, pOnMainland, pOrderId, pParam, pPercent, pPerimeter, pPlacementType, pPlain, pPlayerId, pPlayerStance, pPoint, pPositionType, pPrecise, pPreserveResearch, pProjectileType, pPriorityType, pRemoteIndex, pRemoteList, pResearchState, pResetCost, pResource, pResourceAmount, pRuleDelta, pRuleId, pScoutMethod, pSearchOrder, pSearchSource, pSharedGoalId, pSignalId, pSize, pSnId, pSourceClass, pStart, pStartingResources, pState, pStrict, pString, pTarget, pTargetAction, pTargetClass, pTauntId, pTechId, pTerrain, pText, pTiles, pTime, pTimerId, pTimerState, pType, pTypeId, pUnitId, pUpgradeId, pValue, pVictory, pWallId];

//Strategic Numbers
var snEnableOffensivePriority = new StrategicNumber("sn-enable-offensive-priority")
var snFocusPlayerNumber = new StrategicNumber("sn-focus-player-number");
var snMaximumTownSize = new StrategicNumber("sn-maximum-town-size");
var snNumberAttackGroups = new StrategicNumber("sn-number-attack-groups");
var snNumberExploreGroups = new StrategicNumber("sn-number-explore-groups");
var snPercentAttackBoats = new StrategicNumber("sn-percent-attack-boats");
var snPercentAttackSoldiers = new StrategicNumber("sn-percent-attack-soldiers");
var snPlacementFailDelta = new StrategicNumber("sn-placement-fail-delta");
var snPlacementToCenter = new StrategicNumber("sn-placement-to-center");
var snPlacementZoneSize = new StrategicNumber("sn-placement-zone-size");
var snTargetPlayerNumber = new StrategicNumber("sn-target-player-number");
var snTargetPointAdjustment = new StrategicNumber("sn-target-point-adjustment");

//Difficulty Parameters
var dpAbilityToMaintainDistance = new DifficultyParameter("ability-to-maintain-distance");
var dpAbilityToDodgeMissiles = new DifficultyParameter("ability-to-dodge-missiles");

//Defined Constants
var dcProgressType = new DefinedConstant("ProgressType");





//Commands

//acknowledge-event
cAcknowledgeEvent.shortDescription = "Acknowledges a received event by resetting the associated flag.";
cAcknowledgeEvent.commandCategory = ["Data"];
cAcknowledgeEvent.commandParameters = [ {
	nameLink: pEventType.getLink(),
	name: "EventType",
	type: "Const",
	dir: "in",
	range: "trigger",
	note: "The type of the event. Triggers are the only valid event types."
}, {
	nameLink: pEventId.getLink(),
	name: "EventId",
	type: "Const",
	dir: "in",
	range: "0 to 255.",
	note: "The EventId to acknowledge."
} ];

//acknowledge-taunt
cAcknowledgeTaunt.shortDescription = "Acknowledges the taunt (resets the flag).";
cAcknowledgeTaunt.description = "Acknowledges the taunt (resets the flag). Like other event systems in the AI, taunt detection requests explicit acknowledgement. The action allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ". It also allows the use of rule variables for " + pAnyPlayer.getLink() + ".";
cAcknowledgeTaunt.commandCategory = ["Chat"];
cAcknowledgeTaunt.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId",
	note: "The player(s) to check."
}, {
	nameLink: pTauntId.getLink(),
	name: "TauntId",
	type: "Const",
	dir: "in",
	range: "1 to 255",
} ];

//attack-now
cAttackNow.shortDescription = "Forces attack with currently available attack units.";
cAttackNow.description ="Forces attack with currently available attack units. Units are designated as attack units by using " + snPercentAttackSoldiers.getLink() + " or " + snPercentAttackBoats.getLink() + ".";
cAttackNow.commandCategory = ["Attack & Defense"];

//attack-soldier-count
cAttackSoldierCount.shortDescription = "Checks the computer player's attack soldier count.";
cAttackSoldierCount.description = "Compares the computer player's attack soldier count to " + pValue.getLink() + " using " + pCompareOp.getLink() + " and returns true if the condition is met. Attack soldiers are those assigned to attack groups (using the attack-group SNs) or assigned from the " + cAttackNow.getLink() + " command. Setting " + snNumberAttackGroups.getLink() + " to 0 and using " + cUpResetAttackNow.getLink() + " means soldiers are no longer attack soldiers.";
cAttackSoldierCount.commandCategory = ["Attack & Defense", "Counting"];
cAttackSoldierCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//attack-warboat-count
cAttackWarboatCount.shortDescription = "Checks the computer player's attack warboat count.";
cAttackWarboatCount.description = "Compares the computer player's attack warboat count to " + pValue.getLink() + " using " + pCompareOp.getLink() + " and returns true if the condition is met. Attack warboats are those assigned to boat attack groups (using the boat-attack-group SNs) or assigned from the " + cAttackNow.getLink() + " command. If you stop calling " + cAttackNow.getLink() + " then they are immediately no longer attack warboats - even without using " + cUpResetAttackNow.getLink() + ".";
cAttackWarboatCount.commandCategory = ["Attack & Defense", "Counting", "Water"];
cAttackWarboatCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//build
cBuild.shortDescription = "Builds the given building.";
cBuild.description = "Builds the given building. The action allows the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cBuild.commandCategory = ["Build & Train"];
cBuild.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building that will be constructed."
} ];

//build-forward
cBuildForward.shortDescription = "Builds the given building close to an enemy.";
cBuildForward.description = "Builds the given building close to an enemy. The action allows the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cBuildForward.commandCategory = ["Build & Train"];
cBuildForward.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building that will be constructed."
} ];

//build-gate
cBuildGate.shortDescription = "Builds a gate as part of the given perimeter wall.";
cBuildGate.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to build to build the gate at. Perimeter 1 has a smaller raidus than 2."
} ];

//build-wall
cBuildWall.shortDescription = "Builds a wall line of the given wall type at the given perimeter.";
cBuildWall.description = "Builds a wall line of the given wall type at the given perimeter. The action allows the use of wall line wildcard parameters for " + pWallId.getLink() + ".";
cBuildWall.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to build to build the wall at. Perimeter 1 has a smaller raidus than 2."
}, {
	nameLink: pWallId.getLink(),
	name: "WallId",
	type: "Const",
	dir: "in",
	range: "A WallId.",
	note: "The type of wall to construct. Can use WallId wildcard parameters."
} ];

//building-available
cBuildingAvailable.shortDescription = "Checks that the building is available to the computer player's civ and that the tech tree prerequisites are met.";
cBuildingAvailable.description = "Checks that the building is available to the computer player's civ and that the tech tree prerequisites are met. It does not check that there are enough resources to build the building. It allows the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cBuildingAvailable.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building to check availability for."
} ];

//building-count
cBuildingCount.shortDescription = "Checks the computer player's building count. Only existing buildings are included.";
cBuildingCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//building-count-total
cBuildingCountTotal.shortDescription = "Checks the computer player's total building count, either existing buildings or buildings under construction.";
cBuildingCountTotal.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//building-type-count
cBuildingTypeCount.shortDescription = "Checks the computer player's building count. Only existing buildings of the given type are included.";
cBuildingTypeCount.description = "Checks the computer player's building count. Only existing buildings of the given type are included. It allows the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cBuildingTypeCount.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building that will be constructed."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//building-type-count-total
cBuildingTypeCountTotal.shortDescription = "Checks the computer player's total building count of the given type, either existing or being constructed.";
cBuildingTypeCountTotal.description = "Checks the computer player's total building count. The total includes buildings of the given type, both existing buildings and those under construction. It allows the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cBuildingTypeCountTotal.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building that will be constructed."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//buy-commodity
cBuyCommodity.shortDescription = "Buys one lot of the given commodity.";
cBuyCommodity.commandParameters = [ {
	nameLink: pCommodity.getLink(),
	name: "Commodity",
	type: "Const",
	dir: "in",
	range: "food, wood, or stone",
	note: "The commodity to buy."
} ];

//can-afford-building
cCanAffordBuilding.shortDescription = "Checks whether the computer player has enough resources to build the given building.";
cCanAffordBuilding.description = "Checks whether the computer player has enough resources to build the given building. It does not take into account resources in the escrow stockpiles. It does not check that the tech tree prerequisites are met or if the building is allowed for the civ. It allows the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cCanAffordBuilding.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building to check affordability for."
} ];

//can-afford-complete-wall
cCanAffordCompleteWall.shortDescription = "Checks whether the computer player has enough resources to finish the wall at the given perimeter.";
cCanAffordCompleteWall.description = "Checks whether the computer player has enough resources to finish the given wall type at the " + pPerimeter.getLink() + ". In particular it checks:</p><ul><li>The wall type is available to the computer player's civ.</li><li>The tech tree prerequisites are met.</li><li>Required resources are avaliable.</li></ul><p>It does not take into account escrowed resources. It does not check if wall area is explored or if " + cEnableWallPlacement.getLink() + " has been used. " + pPerimeter.getLink() + " is either: '1' for a 10-20 tile radius aroung home TC or '2' for an 18-30 tile radius.";
cCanAffordCompleteWall.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to build to build the wall at. Perimeter 1 has a smaller raidus than 2."
}, {
	nameLink: pWallId.getLink(),
	name: "WallId",
	type: "Const",
	dir: "in",
	range: "A WallId.",
	note: "The type of wall to construct. Can use WallId wildcard parameters."
} ];

//can-afford-research
cCanAffordResearch.shortDescription = "Checks whether the computer player has enough resources to perform the given research.";
cCanAffordResearch.description = "Checks whether the computer player has enough resources to perform the given research. Also checks that the research is avaliable for the civ, that its not already researched and that the computer player has reached the required age. Does not check if the required building is built. The fact does not take into account escrowed resources.";
cCanAffordResearch.commandParameters = [ {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Const",
	dir: "in",
	range: "A TechId.",
	note: "The technology to be researched."
} ];

//can-afford-unit
cCanAffordUnit.shortDescription = "Checks whether the computer player has enough resources to train the given unit.";
cCanAffordUnit.description = "Checks whether the computer player has enough resources to train the given unit. Does not check anything else. The fact does not take into account escrowed resources. The fact allows the use of unit line wildcard parameters for " + pUnitId.getLink() + ".";
cCanAffordUnit.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId.",
	note: "The unit to check affordability for."
} ];

//can-build
cCanBuild.shortDescription = "This fact checks whether the computer player can build the given building.";
cCanBuild.description = "This fact checks whether the computer player can build the given building. In particular it checks:</p><ul><li>It's available to the computer player's civ.</li><li>Tech tree prerequisites are met (also works for Khmer in Wololo Kingdoms).</li><li>Resources needed for the building are available, not counting escrow stockpiles.</li></ul><p>It does not check whether villagers exist to build it, or if there is adequate space for the building. The fact allows the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cCanBuild.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building that will be constructed."
} ];

//can-build-with-escrow
cCanBuildWithEscrow.shortDescription = "This fact checks whether the computer player can build the given building.";
cCanBuildWithEscrow.description = "This fact checks whether the computer player can build the given building. In particular it checks:</p><ul><li>It's available to the computer player's civ.</li><li>Tech tree prerequisites are met (also works for Khmer in Wololo Kingdoms).</li><li>Resources needed for the building are available including escrow stockpiles.</li></ul><p>It does not check whether villagers exist to build it, or if there is adequate space for the building. The fact allows the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cCanBuildWithEscrow.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building that will be constructed."
} ];

//can-build-gate
cCanBuildGate.shortDescription = "Checks whether construction of a stone gate as part of the given perimeter wall can start.";
cCanBuildGate.description = "Checks whether construction of a stone gate as part of the given perimeter wall can start. It checks:</p><ul><li>It is available to the computer player's civ.</li><li>Tech tree prerequisites are met.</li><li>Required resources are available (not counting escrow resources).</li><li>There is a location in an existing wall to build it.</li></ul><p>It will return false if it cannot fit a gate 3 tiles away from existing gates.";
cCanBuildGate.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to build to build the gate at. Perimeter 1 has a smaller raidus than 2."
} ];

//can-build-gate-with-escrow
cCanBuildGateWithEscrow.shortDescription = "Checks whether construction of a stone gate as part of the given perimeter wall can start, if escrow is used.";
cCanBuildGateWithEscrow.description = "Checks whether construction of a stone gate as part of the given perimeter wall can start. It checks:</p><ul><li>It is available to the computer player's civ.</li><li>Tech tree prerequisites are met.</li><li>Required resources are available including escrow stockpiles.</li><li>There is a location in an existing wall to build it.</li></ul><p>It will return false if it cannot fit a gate 3 tiles away from existing gates.";
cCanBuildGateWithEscrow.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to build to build the gate at. Perimeter 1 has a smaller raidus than 2."
} ];

//can-build-wall
cCanBuildWall.shortDescription = "Checks whether a given wall type can be built at the given perimeter.";
cCanBuildWall.description = "Checks whether a given wall type can be built at the given perimeter. In particular it checks:</p><ul><li>The wall type is available to the computer player's civ.</li><li>Tech tree prerequisites are met.</li><li>There is a location to build a wall.</li><li>Required resources are available, not counting escrow amounts.</li></ul><p>This fact checks that there is enough stone for at least 5 wall pieces, whereas can-afford-complete-wall checks if there is enough stone for the entire wall. The fact allows the use of wall line wildcard parameters for " + pWallId.getLink() + ". Note you are allowed to enable wall placement at both perimeters.";
cCanBuildWall.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to build to build the wall at. Perimeter 1 has a smaller raidus than 2."
}, {
	nameLink: pWallId.getLink(),
	name: "WallId",
	type: "Const",
	dir: "in",
	range: "A WallId.",
	note: "The type of wall to construct. Can use WallId wildcard parameters."
} ];

//can-build-wall-with-escrow
cCanBuildWallWithEscrow.shortDescription = "Checks whether a given wall type can be built at the given perimeter, if escrow is used.";
cCanBuildWallWithEscrow.description = "Checks whether a given wall type can be built at the given perimeter. In particular it checks:</p><ul><li>The wall type is available to the computer player's civ.</li><li>Tech tree prerequisites are met.</li><li>There is a location to build a wall.</li><li>Required resources are available including escrow stockpiles.</li></ul><p>This fact checks that there is enough stone for at least 5 wall pieces, whereas can-afford-complete-wall checks if there is enough stone for the entire wall. The fact allows the use of wall line wildcard parameters for " + pWallId.getLink() + ". Note you are allowed to enable wall placement at both perimeters.";
cCanBuildWallWithEscrow.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to build to build the wall at. Perimeter 1 has a smaller raidus than 2."
}, {
	nameLink: pWallId.getLink(),
	name: "WallId",
	type: "Const",
	dir: "in",
	range: "A WallId.",
	note: "The type of wall to construct. Can use WallId wildcard parameters."
} ];

//can-buy-commodity
cCanBuyCommodity.shortDescription = "Checks whether the computer player can buy one lot of the given commodity.";
cCanBuyCommodity.description = "Checks whether the computer player can buy one lot of the given commodity. The fact does not take into account escrowed resources.";
cCanBuyCommodity.commandParameters = [ {
	nameLink: pCommodity.getLink(),
	name: "Commodity",
	type: "Const",
	dir: "in",
	range: "food, wood, or stone",
	note: "The commodity to buy."
} ];

//can-research
cCanResearch.shortDescription = "Checks if the given research can start.";
cCanResearch.description = "Checks if the given research can start. In particular it checks:</p><ul><li>The research item is available to the computer player's civ.</li><li>Tech tree prerequisites are met</li><li>Required resources are available (not including escrow stockpiles.</li><li>The appropriate building has no items in the queue so that it may start the research.</li></ul><p>";
cCanResearch.commandParameters = [ {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Const",
	dir: "in",
	range: "A TechId.",
	note: "The technology to be researched."
} ];

//can-research-with-escrow
cCanResearchWithEscrow.shortDescription = "Checks if the given research can start, if escrow is used.";
cCanResearchWithEscrow.description = "Checks if the given research can start. In particular it checks:</p><ul><li>The research item is available to the computer player's civ.</li><li>Tech tree prerequisites are met.</li><li>Required resources are available, including escrow stockpiles.</li><li>The appropriate building has no items in the queue so that it may start the research.</li></ul><p>";
cCanResearchWithEscrow.commandParameters = [ {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Const",
	dir: "in",
	range: "A TechId.",
	note: "The technology to be researched."
} ];

//can-sell-commodity
cCanSellCommodity.shortDescription = "Checks whether the computer player can sell one lot of the given commodity.";
cCanSellCommodity.description = "Checks whether the computer player can sell one lot of the given commodity. The fact does not take into account escrowed resources.";
cCanSellCommodity.commandParameters = [ {
	nameLink: pCommodity.getLink(),
	name: "Commodity",
	type: "Const",
	dir: "in",
	range: "food, wood, or stone",
	note: "The commodity to sell."
} ];

//can-spy
cCanSpy.shortDescription = "Checks if the spy command can be executed.";
cCanSpy.description = "Checks if the spy command can be executed. It only works in regicide games. The computer player does see the revealed area around the enemy kings as expected. This does not take into account escrow stockpiles.";

//can-spy-with-escrow
cCanSpyWithEscrow.shortDescription = "Checks if the spy command can be executed.";
cCanSpyWithEscrow.description = "Checks if the spy command can be executed. It only works in regicide games. The computer player does see the revealed area around the enemy kings as expected. This fact does take into account escrow stockpiles.";

//can-train
cCanTrain.shortDescription = "Checks that the training of a given unit can start.";
cCanTrain.description = "Checks that the training of a given unit can start. In particular it checks:</p><ul><li>The unit is available to the computer player's civ.</li><li>Tech tree prerequisites are met.</li><li>Required resources are available (not counting escrow stockpiles).</li><li>There is enough housing headroom for the unit.</li><li>There is an appropriate building that is not busy and is ready to start training the unit.</li></ul><p>The fact allows the use of unit line wildcard parameters for " + pUnitId.getLink() + ".";
cCanTrain.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId. This fact allows the use of unit line wildcard parameters for UnitId.",
	note: "The unit to train."
} ];

//can-train-with-escrow
cCanTrainWithEscrow.shortDescription = "Checks that the training of a given unit can start, if escrow is used.";
cCanTrainWithEscrow.description = "Checks that the training of a given unit can start. In particular it checks:</p><ul><li>The unit is available to the computer player's civ.</li><li>Tech tree prerequisites are met.</li><li>Required resources are available including escrow stockpiles.</li><li>There is enough housing headroom for the unit.</li><li>There is an appropriate building that is not busy and is ready to start training the unit.</li></ul><p>The fact allows the use of unit line wildcard parameters for " + pUnitId.getLink() + ".";
cCanTrainWithEscrow.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId. This action allows the use of unit line wildcard parameters for UnitId.",
	note: "The unit to train."
} ];

//cc-add-resource
cCcAddResource.shortDescription = "A cheating action that adds the given resource amount to the computer player.";
cCcAddResource.description = "A cheating action that adds the given resource amount to the computer player. It is to be used in scenarios to avoid late game oddities such as computer player villagers going all over the map while looking for the last pile of gold.";
cCcAddResource.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "Food, wood, stone, or gold.",
	note: "The resource to add."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767.",
	note: "The amount of resources to add."
} ];

//cc-players-building-count
cCcPlayersBuildingCount.shortDescription = "A cheating version of players-building-count.";
cCcPlayersBuildingCount.description = "A cheating version of " + cPlayersBuildingCount.getLink() + ". For use in scenarios only. The fact checks the given player's building count. Both existing buildings and buildings under construction are included regardless of whether they have been seen – fog is ignored. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + " and the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cCcPlayersBuildingCount.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//cc-players-building-type-count
cCcPlayersBuildingTypeCount.shortDescription = "A cheating version of players-building-type-count.";
cCcPlayersBuildingTypeCount.description = "A cheating version of " + cPlayersBuildingTypeCount.getLink() + ". For use in scenarios only. This fact checks the given player's building count. Both existing buildings and buildings under construction of the given type are included regardless of whether they have been seen – fog is ignored. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + " and the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cCcPlayersBuildingTypeCount.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The BuildingId to count."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//cc-players-unit-count
cCcPlayersUnitCount.shortDescription = "A cheating version of players-unit-count.";
cCcPlayersUnitCount.description = "A cheating version of " + cPlayersUnitCount.getLink() + ". For use in scenarios only. This fact checks the given player's unit count. Only trained units are included and fog is ignored. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cCcPlayersUnitCount.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//cc-players-unit-type-count
cCcPlayersUnitTypeCount.shortDescription = "A cheating version of players-unit-type-count.";
cCcPlayersUnitTypeCount.description = "A cheating version of " + cPlayersUnitTypeCount.getLink() + ". For use in scenarios only. This fact checks the given player's unit count. Only trained units of the given type are included and fog is ignored. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ". Counting Gaia units (player number 0) is not considered cheating.";
cCcPlayersUnitTypeCount.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId.",
	note: "The UnitId to count."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//chat-local
cChatLocal.shortDescription = "Displays the given string as a local chat message to all players.";
cChatLocal.description = "Displays the given string as a local chat message to all players. Local chat messages don't display chat messages with the player color, making this command strictly inferior to " + cChatToAll.getLink() + ".";
cChatLocal.commandParameters = [ {
	nameLink: pString.getLink(),
	name: "String",
	type: "Text",
	dir: "in",
	range: "A string (quoted text).",
	note: "A quote of text that will be sent as a chat message."
} ];

//chat-local-to-self
cChatLocalToSelf.shortDescription = "Displays a given string as local chat message to self.";
cChatLocalToSelf.description = "Displays a given string as local chat message. The message is displayed only if the user is the same player as the computer player sending the message. For debugging purposes only. Local chat messages don't display chat messages with the player color, making this command strictly inferior to " + cChatToPlayer.getLink() + " with my-player-number as the player Id.";
cChatLocalToSelf.commandParameters = [ {
	nameLink: pString.getLink(),
	name: "String",
	type: "Text",
	dir: "in",
	range: "A string (quoted text).",
	note: "A quote of text that will be sent as a chat message."
} ];

//chat-local-using-id
cChatLocalUsingId.shortDescription = "Displays a string, defined by a string id, as a local chat message.";
cChatLocalUsingId.description = "Displays a string, defined by a string id, as a local chat message. For more info on String ids, see the description of the LanguageId parameter. Local chat messages don't display chat messages with the player color, making this command strictly inferior to " + cChatToAllUsingId.getLink() + ".";
cChatLocalUsingId.commandParameters = [ {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the text string stored in the language.dll files that will be sent as a chat message."
} ];

//chat-local-using-range
cChatLocalUsingRange.shortDescription = "Displays a random string as a local chat message. The random string is defined by a string id randomly picked out of a given string id range.";
cChatLocalUsingRange.description = "Displays a random string as a local chat message. The random string is defined by a string id randomly picked out of a given string id range. For more info on String ids, see the description of the LanguageId parameter. Local chat messages don't display chat messages with the player color, making this command strictly inferior to " + cChatToAllUsingRange.getLink() + ".";
cChatLocalUsingRange.commandParameters = [ {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the first text string stored in the language.dll files that could be sent as a chat message."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "1 to 32767.",
	note: "The range of possible LanguageIds to choose from, starting from the given LanguageId."
} ];

//chat-to-all
cChatToAll.shortDescription = "Sends a given string as a chat message to all players.";
cChatToAll.commandParameters = [ {
	nameLink: pString.getLink(),
	name: "String",
	type: "Text",
	dir: "in",
	range: "A string (quoted text).",
	note: "A quote of text that will be sent as a chat message."
} ];

//chat-to-all-using-id
cChatToAllUsingId.shortDescription = "Sends a string, defined by a string id, as a chat message to all players.";
cChatToAllUsingId.description = "Sends a string, defined by a string id, as a chat message to all players. For more info on String ids, see the description of the LanguageId parameter.";
cChatToAllUsingId.commandParameters = [ {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the text string stored in the language.dll files that will be sent as a chat message."
} ];

//chat-to-all-using-range
cChatToAllUsingRange.shortDescription = "Sends a random string as chat message to all players. The random string is defined by a string id randomly picked out of a given string id range.";
cChatToAllUsingRange.description = "Sends a random string as chat message to all players. The random string is defined by a string id randomly picked out of a given string id range.";
cChatToAllUsingRange.commandParameters = [ {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the first text string stored in the language.dll files that could be sent as a chat message."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "1 to 32767.",
	note: "The range of possible LanguageIds to choose from, starting from the given LanguageId."
} ];
cChatToAllUsingRange.example = [ {
	title: "Send a random message with a " + pLanguageId.getLink() + " between 5020 and 5024.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(chat-to-all-using-range 5020 5)\r\n)"
} ];

//chat-to-allies
cChatToAllies.shortDescription = "Sends a given string as a chat message to allies.";
cChatToAllies.commandParameters = [ {
	nameLink: pString.getLink(),
	name: "String",
	type: "Text",
	dir: "in",
	range: "A string (quoted text).",
	note: "A quote of text that will be sent as a chat message."
} ];

//chat-to-allies-using-id
cChatToAlliesUsingId.shortDescription = "sends a string, defined by a string id, as a chat message to allied players.";
cChatToAlliesUsingId.description = "sends a string, defined by a string id, as a chat message to allied players. For more info on String ids, see the description of the LanguageId parameter.";
cChatToAlliesUsingId.commandParameters = [ {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the text string stored in the language.dll files that will be sent as a chat message."
} ];

//chat-to-allies-using-range
cChatToAlliesUsingRange.shortDescription = "Sends a random string as chat message to allies. The random string is defined by a string id randomly picked out of a given string id range.";
cChatToAlliesUsingRange.description = "Sends a random string as chat message to allies. The random string is defined by a string id randomly picked out of a given string id range.";
cChatToAlliesUsingRange.commandParameters = [ {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the first text string stored in the language.dll files that could be sent as a chat message."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "1 to 32767.",
	note: "The range of possible LanguageIds to choose from, starting from the given LanguageId."
} ];

//chat-to-enemies
cChatToEnemies.shortDescription = "Sends a given string as a chat message to enemies.";
cChatToEnemies.commandParameters = [ {
	nameLink: pString.getLink(),
	name: "String",
	type: "Text",
	dir: "in",
	range: "A string (quoted text).",
	note: "A quote of text that will be sent as a chat message."
} ];

//chat-to-enemies-using-id
cChatToEnemiesUsingId.shortDescription = "sends a string, defined by a string id, as a chat message to enemy players.";
cChatToEnemiesUsingId.description = "sends a string, defined by a string id, as a chat message to enemy players. For more info on String ids, see the description of the LanguageId parameter.";
cChatToEnemiesUsingId.commandParameters = [ {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the text string stored in the language.dll files that will be sent as a chat message."
} ];

//chat-to-enemies-using-range
cChatToEnemiesUsingRange.shortDescription = "Sends a random string as chat message to enemies. The random string is defined by a string id randomly picked out of a given string id range.";
cChatToEnemiesUsingRange.description = "Sends a random string as chat message to enemies. The random string is defined by a string id randomly picked out of a given string id range.";
cChatToEnemiesUsingRange.commandParameters = [ {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the first text string stored in the language.dll files that could be sent as a chat message."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "1 to 32767.",
	note: "The range of possible LanguageIds to choose from, starting from the given LanguageId."
} ];

//chat-to-player
cChatToPlayer.shortDescription = "Sends a given string as a chat message to a given player.";
cChatToPlayer.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to send the chat message to. The action allows \"any\"/\"every\" wildcard parameters for AnyPlayer."
}, {
	nameLink: pString.getLink(),
	name: "String",
	type: "Text",
	dir: "in",
	range: "A string (quoted text).",
	note: "A quote of text that will be sent as a chat message."
} ];

//chat-to-player-using-id
cChatToPlayerUsingId.shortDescription = "sends a string, defined by a string id, as a chat message to a given player.";
cChatToPlayerUsingId.description = "sends a string, defined by a string id, as a chat message to a given player. For more info on String ids, see the description of the LanguageId parameter.";
cChatToPlayerUsingId.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to send the chat message to. The action allows \"any\"/\"every\" wildcard parameters for AnyPlayer."
}, {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the text string stored in the language.dll files that will be sent as a chat message."
} ];

//chat-to-player-using-range
cChatToPlayerUsingRange.shortDescription = "Sends a random string as chat message to a given player. The random string is defined by a string id randomly picked out of a given string id range.";
cChatToPlayerUsingRange.description = "Sends a random string as chat message to a given player. The random string is defined by a string id randomly picked out of a given string id range.";
cChatToPlayerUsingRange.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to send the chat message to. The action allows \"any\"/\"every\" wildcard parameters for AnyPlayer."
}, {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Const",
	dir: "in",
	range: "A valid LanguageId.",
	note: "The ID of the first text string stored in the language.dll files that could be sent as a chat message."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "1 to 32767.",
	note: "The range of possible LanguageIds to choose from, starting from the given LanguageId."
} ];

//chat-trace
cChatTrace.shortDescription = "Displays the given value as a chat message. Used purely for testing to check when a rule gets executed.";
cChatTrace.commandParameters = [ {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767.",
	note: "The value to send as a chat message."
} ];

//cheats-enabled
cCheatsEnabled.shortDescription = "Checks whether the cheats have been enabled.";

//civilian-population
cCivilianPopulation.shortDescription = "Checks the computer player's civilian population. The civilian population is villagers, trade units and fishing ships.";
cCivilianPopulation.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//civ-selected
cCivSelected.shortDescription = "Checks the computer player's civ.";
cCivSelected.commandParameters = [ {
	nameLink: pCiv.getLink(),
	name: "Civ",
	type: "Const",
	dir: "in",
	range: "A valid Civ name or ID.",
	note: "The player's civilization."
} ];

//clear-tribute-memory
cClearTributeMemory.shortDescription = "Clears the given player's tribute memory, the amount of a given resource received in tribute from the given player since the tribute memory was cleared.";
cClearTributeMemory.description = "Clears the given player's tribute memory, the amount of a given resource received in tribute from the given player since the tribute memory was cleared. Only tribute memory for the given resource type is cleared. The action allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ". It also allows the use of rule variables for " + pAnyPlayer.getLink() + ".";
cClearTributeMemory.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to send the chat message to. The action allows \"any\"/\"every\" wildcard parameters for AnyPlayer. It also allows for rule variables for AnyPlayer."
}, {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, or gold.",
	note: "The resource to clear the tribute memory for."
} ];

//commodity-buying-price
cCommodityBuyingPrice.shortDescription = "Checks the current buying price for the given commodity.";
cCommodityBuyingPrice.commandParameters = [ {
	nameLink: pCommodity.getLink(),
	name: "Commodity",
	type: "Const",
	dir: "in",
	range: "food, wood, or stone",
	note: "The commodity to check the buying price for."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "26 to 32767.",
	note: "A number for comparison."
} ];

//commodity-selling-price
cCommoditySellingPrice.shortDescription = "Checks the current selling price for the given commodity.";
cCommoditySellingPrice.commandParameters = [ {
	nameLink: pCommodity.getLink(),
	name: "Commodity",
	type: "Const",
	dir: "in",
	range: "food, wood, or stone",
	note: "The commodity to check the selling price for."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "14 to 32767.",
	note: "A number for comparison."
} ];

//current-age
cCurrentAge.shortDescription = "Checks computer player's current age.";
cCurrentAge.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pAge.getLink(),
	name: "Age",
	type: "Op",
	dir: "in",
	range: "dark-age, feudal-age, castle-age, or imperial-age.",
	note: "An age for comparison."
} ];


//current-age-time
cCurrentAgeTime.shortDescription = "Checks the computer player's current age time (time spent in the current age).";
cCurrentAgeTime.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//current-score
cCurrentScore.shortDescription = "Checks the computer player's current score.";
cCurrentScore.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//death-match-game
cDeathMatchGame.shortDescription = "Checks if the game is a Death Match game.";

//defend-soldier-count
cDefendSoldierCount.shortDescription = "Checks the computer player's defend soldier count.";
cDefendSoldierCount.description = "Checks the computer player's defend soldier count. A defend soldier is a land-based military unit not assigned to attack groups. This includes soldiers attacking with TSA. Soldiers don't have to be actively defending the town against attacks to be considered defend soldiers.";
cDefendSoldierCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//defend-warboat-count
cDefendWarboatCount.shortDescription = "Checks the computer player's defend warboat count.";
cDefendWarboatCount.description = "Checks the computer player's defend warboat count. A defend warboat is a boat capable of attacking that is not assigned to boat attack groups. Warboats don't have to be actively defending against enemy warship attacks to be considered defend warboats.";
cDefendWarboatCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//delete-building
cDeleteBuilding.shortDescription = "Deletes exactly one building of a given type.";
cDeleteBuilding.commandParameters = [ {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The building that will be deleted."
} ];

//delete-unit
cDeleteUnit.shortDescription = "Deletes exactly one unit of a given type.";
cDeleteUnit.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId.",
	note: "The unit to delete."
} ];

//difficulty
cDifficulty.shortDescription = "Checks the difficulty setting.";
cDifficulty.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pDifficulty.getLink(),
	name: "Difficulty",
	type: "Op",
	dir: "in",
	range: "A valid Difficulty",
	note: "The ordering of difficulty settings is the opposite of what one would expect! easiest > easy > moderate > hard > hardest."
} ];

//disable-rule
cDisableRule.shortDescription = "Undocumented action. Does nothing.";
cDisableRule.description = "Undocumented action. Does nothing. Use " + cDisableSelf.getLink() + " instead.";

//disable-self
cDisableSelf.shortDescription = "Disables the rule that it is part of so that the rule is never run again.";
cDisableSelf.description = "Disables the rule that it is part of so that the rule is never run again. Since disabling takes effect in the next execution pass, other actions in the same rule are still executed once.";

//disable-timer
cDisableTimer.shortDescription = "Disables the given timer.";
cDisableTimer.commandParameters = [ {
	nameLink: pTimerId.getLink(),
	name: "TimerId",
	type: "Const",
	dir: "in",
	range: "A valid TimerId.",
	note: "The timer to disable."
} ];

//doctrine
cDoctrine.shortDescription = "Checks what the current doctrine is, similar to checking the value of a goal.";
cDoctrine.commandParameters = [ {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A value for comparison with the doctrine."
} ];

//do-nothing
cDoNothing.shortDescription = "Does nothing. Used as a placeholder action if you don't want a rule to have any actions.";

//dropsite-min-distance
cDropsiteMinDistance.shortDescription = "Checks computer player's minimum dropsite walking distance for a given resource type.";
cDropsiteMinDistance.description = "Checks computer player's minimum dropsite walking distance for a given resource type. The distance is number of tiles between the tile the resource is on and the center tile of the nearest dropsite. Long walking distances indicate a need for a new dropsite. It is not recommended to use this fact for building of first dropsites necessary for age advancement. If, at the beginning, the resources happen to be close enough to the Town Center, building of the first dropsites will be delayed, resulting in slower age progression.";
cDropsiteMinDistance.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, gold, boar-hunting, or live-boar.",
	note: "The resource to check. Food includes all food sources except boar and fish for fishing ships."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//enable-rule
cEnableRule.shortDescription = "Undocumented action. Does nothing.";

//enable-timer
cEnableTimer.shortDescription = "Enables the given timer and sets it to the given time interval.";
cEnableTimer.commandParameters = [ {
	nameLink: pTimerId.getLink(),
	name: "TimerId",
	type: "Const",
	dir: "in",
	range: "A valid TimerId.",
	note: "The timer to enable."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "0 to 32767.",
	note: "The length of the timer in seconds."
} ];

//enable-wall-placement
cEnableWallPlacement.shortDescription = "Enables wall placement for the given perimeter.";
cEnableWallPlacement.description = "Enables wall placement for the given perimeter. Enabled wall placement causes the rest of the placement code to do some planning and place all structures at least one tile away from the future wall lines. If you are planning to build a wall, you have to explicitly define which perimeter wall you plan to use when the game starts. This is a one-time action and should be used during the initial setup.";
cEnableWallPlacement.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to keep clear for wall placement."
} ];

//enemy-buildings-in-town
cEnemyBuildingsInTown.shortDescription = "Returns true if there are sighted enemy buildings less than sn-maximum-town-size tiles of the computer player's home TC.";
cEnemyBuildingsInTown.description = "Returns true if there are sighted enemy buildings less than " + snMaximumTownSize.getLink() + " tiles of the computer player's home TC. For this fact, sn-maximum-town-size is a circle of sn-maximum-town-size tiles in a diagonal direction and sn-maximum-town-size * sqrt(2) tiles in any straight direction (it appears a perfect circle on the map rather than a square as for the building commands). Works with all buildings (including walls). Updates every few AOC seconds.";

//enemy-captured-relics
cEnemyCapturedRelics.shortDescription = "Checks if the enemy has captured all relics.";
cEnemyCapturedRelics.description = "checks if the enemy has captured all relics. When this happens, tactical AI automatically starts targeting monasteries and monks. Use this fact to intensify attacks and combine it with the " + cAttackNow.getLink() + " action to force attacks.";

//escrow-amount
cEscrowAmount.shortDescription = "Checks a computer player's escrow amount for a given resource type.";
cEscrowAmount.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, or gold.",
	note: "The escrow resource stockpile to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//event-detected
cEventDetected.shortDescription = "Checks if the given event has been detected.";
cEventDetected.description = "Checks if the given event has been detected. The fact stays true until the event is explicitly disabled by the " + cAcknowledgeEvent.getLink() + " action.";
cEventDetected.commandParameters = [ {
	nameLink: pEventType.getLink(),
	name: "EventType",
	type: "Const",
	dir: "in",
	range: "trigger",
	note: "The type of the event. Triggers are the only valid event types."
}, {
	nameLink: pEventId.getLink(),
	name: "EventId",
	type: "Const",
	dir: "in",
	range: "0 to 255.",
	note: "The EventId to detect."
} ];

//false
cFalse.shortDescription = "A Fact that is always false. A rule with this fact will never execute its actions.";

//food-amount
cFoodAmount.shortDescription = "Checks a computer player's food amount.";
cFoodAmount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//game-time
cGameTime.shortDescription = "Checks the game time.";
cGameTime.description = "Checks the game time. The game time is given in seconds. The fact can be used to make rules time-specific. For example, the computer can become more aggressive after 15 minutes of game time. Note: unlike other commands that have a " + pCompareOp.getLink() + " parameter, the game-time command has a slight bug where you cannot use goal comparison parameters like g:== or g:!=. Only constant or strategic number comparison parameters can be used for the compareOp parameter.";
cGameTime.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c: or s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required.<strong>Note:</strong> game-time is bugged with goal comparison operators, so you cannot use them. For example, you cannot use g:==, just == or s:==."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//game-type
cGameType.shortDescription = "Undocumented command that checks the game type.";
cGameType.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pGameType.getLink(),
	name: "GameType",
	type: "Op",
	dir: "in",
	range: "",
	note: "The type of game being played. Game types are not defined, so you must defconst them before using them."
} ];

//gate-count
cGateCount.shortDescription = "Undocumented command that allows the script to check for the number of gates that are either being built or are completed.";
cGateCount.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to check for gate construction at. Perimeter 1 has a smaller raidus than 2."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//generate-random-number
cGenerateRandomNumber.shortDescription = "Generates a player-specific integer random number within given range.";
cGenerateRandomNumber.description = "Generates a player-specific integer random number within given range (1 to " + pValue.getLink() + "). The number is stored and its value can be tested with " + cRandomNumber.getLink() + ". Subsequent executions of this action generate new random numbers that replace existing ones.";
cGenerateRandomNumber.commandParameters = [ {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "1 to 32767.",
	note: "The range of values to randomly generate a number from."
} ];

//goal
cGoal.shortDescription = "Checks the current value of the given goal.";
cGoal.commandParameters = [ {
	nameLink: pGoalId.getLink(),
	name: "GoalId",
	type: "Const",
	dir: "in",
	range: "A valid GoalId, from 1 to 512.",
	note: "The goal to compare the Value to."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-2,147,483,648 to 2,147,483,647.",
	note: "A number for comparison."
} ];

//gold-amount
cGoldAmount.shortDescription = "Checks a computer player's gold amount.";
cGoldAmount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//hold-koh-ruin
cHoldKohRuin.shortDescription = "Undocumented command that tells the script whether or not it (or its team) currently holds the monument in monument games.";

//hold-relics
cHoldRelics.shortDescription = "Undocumented command that tells the script whether or not it (or its team) has all of the relics.";

//housing-headroom
cHousingHeadroom.shortDescription = "Checks computer player's housing headroom. Housing headroom is the difference between current housing capacity and trained unit capacity.";
cHousingHeadroom.description = "Checks computer player's housing headroom. Housing headroom is the difference between current housing capacity and trained unit capacity. For example, a computer player has a Town Center (capacity 5), a House (capacity 5) and 6 villagers. In this case, housing headroom is 4.";
cHousingHeadroom.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//idle-farm-count
cIdleFarmCount.shortDescription = "Checks a computer player's idle farm count – the number of farms with no farmers.";
cIdleFarmCount.description = "Checks a computer player's idle farm count – the number of farms with no farmers. It should be used before a new farm is built to make sure it is needed.";
cIdleFarmCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//log
cLog.shortDescription = "Writes the given string to a log file. Doesn't work.";
cLog.description = "Writes the given string to a log file. Used purely for testing purposes. Works only if logging is enabled (which it isn't). Use " + cUpLogData.getLink() + " instead.";
cLog.commandParameters = [ {
	nameLink: pString.getLink(),
	name: "String",
	type: "Text",
	dir: "in",
	range: "A string (quoted text).",
	note: "A quote of text that would be logged if this command actually worked."
} ];

//log-trace
cLogTrace.shortDescription = "Writes the given value to a log file. Doesn't work.";
cLogTrace.description = "Writes the given value to a log file. Used purely for testing to check when a rule gets executed. Works only if logging is enabled (which it isn't). Use " + cUpLogData.getLink() + " instead.";
cLogTrace.commandParameters = [ {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767.",
	note: "The value that would be sent as a chat message if this command actually worked."
} ];

//map-size
cMapSize.shortDescription = "Checks the map size.";
cMapSize.commandParameters = [ {
	nameLink: pMapSize.getLink(),
	name: "MapSize",
	type: "Const",
	dir: "in",
	range: "tiny, small, medium, normal, large, or giant.",
	note: "The size of the map."
} ];

//map-type
cMapType.shortDescription = "Checks the map type.";
cMapType.commandParameters = [ {
	nameLink: pMapType.getLink(),
	name: "MapType",
	type: "Const",
	dir: "in",
	range: "A valid MapType",
	note: "The type of map, such as \"arabia\"."
} ];

//military-population
cMilitaryPopulation.shortDescription = "Check's the player's military population.";
cMilitaryPopulation.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//player-computer
cPlayerComputer.shortDescription = "Checks if the given player is a computer player.";
cPlayerComputer.description = "Checks if the given player is a computer player. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayerComputer.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
} ];

//player-human
cPlayerHuman.shortDescription = "Checks if the given player is a human player.";
cPlayerHuman.description = "Checks if the given player is a human player. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayerHuman.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
} ];

//player-in-game
cPlayerInGame.shortDescription = "Checks if the given player is a valid player and still playing.";
cPlayerInGame.description = "Checks if the given player is a valid player and still playing. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
+ pAnyPlayer.getLink() + ".";
cPlayerInGame.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
} ];

//player-number
cPlayerNumber.shortDescription = "Checks computer player's player number.";
cPlayerNumber.description = "Checks computer player's player number. The player number is the player's slot order, not the number associated with the player's color.";
cPlayerNumber.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The PlayerId to check for a match."
} ];

//player-resigned
cPlayerResigned.shortDescription = "Checks if the given player has lost by resigning.";
cPlayerResigned.description = "Checks if the given player has lost by resigning. Note that a player can lose without resigning, so this fact should not be used to check whether a player has lost a game. To check whether a player has lost a game use:</p><div class=\"example\"><pre><code>(not (player-in-game AnyPlayer))</code></pre></div>The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayerResigned.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
} ];

//player-valid
cPlayerValid.shortDescription = "Checks if the given player is a valid player.";
cPlayerValid.description = "Checks if the given player is a valid player. In games with more than 2 players, players that lost before the game is over are considered to be valid players. This is because although the player is not in the game, their units/buildings can still be in the game. To check whether the given player is still in the game use the player-in-game fact. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayerValid.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
} ];

//players-building-count
cPlayersBuildingCount.shortDescription = "Checks the given player's building count. Both existing buildings and buildings under construction are included.";
cPlayersBuildingCount.description = "Checks the given player's building count. Both existing buildings and buildings under construction are included. The computer player relies only on what it has seen – no cheating. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + " and the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cPlayersBuildingCount.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-building-type-count
cPlayersBuildingTypeCount.shortDescription = "Checks the given player's building count of the given type. Both existing buildings and buildings under construction of the given type are included.";
cPlayersBuildingTypeCount.description = "Checks the given player's building count of the given type. Both existing buildings and buildings under construction of the given type are included. The computer player relies only on what it has seen – no cheating. The computer player relies only on what it has seen – no cheating. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + " and the use of building line wildcard parameters for " + pBuildingId.getLink() + ".";
cPlayersBuildingTypeCount.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Const",
	dir: "in",
	range: "A BuildingId.",
	note: "The BuildingId to count."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-civ
cPlayersCiv.shortDescription = "Checks the given player's civ.";
cPlayersCiv.description = "Checks the given player's civ. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersCiv.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCiv.getLink(),
	name: "Civ",
	type: "Const",
	dir: "in",
	range: "A Civ.",
	note: "The civilization of the player."
} ];

//players-civilian-population
cPlayersCivilianPopulation.shortDescription = "Checks a given player's civilian population. This is equivalent to a human player checking the timeline.";
cPlayersCivilianPopulation.description = "Checks a given player's civilian population. This is equivalent to a human player checking the timeline, so this fact includes seen and unseen civilians for the given player. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersCivilianPopulation.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-current-age
cPlayersCurrentAge.shortDescription = "Checks the given player's current age. This is equivalent to a human player checking the timeline.";
cPlayersCurrentAge.description = "Checks the given player's current age. This is equivalent to a human player checking the timeline. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersCurrentAge.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pAge.getLink(),
	name: "Age",
	type: "Op",
	dir: "in",
	range: "dark-age, feudal-age, castle-age, or imperial-age.",
	note: "The current age of the player."
} ];

//players-current-age-time
cPlayersCurrentAgeTime.shortDescription = "Checks the given player's current age time -- time spent in the current age.";
cPlayersCurrentAgeTime.description = "Checks the given player's current age time -- time spent in the current age. This is equivalent to a human player checking the timeline. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersCurrentAgeTime.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-military-population
cPlayersMilitaryPopulation.shortDescription = "Checks the given player's military population. This is equivalent to a human player checking the timeline.";
cPlayersMilitaryPopulation.description = "Checks the given player's military population. This is equivalent to a human player checking the timeline, so this fact includes seen and unseen military units for the given player. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersMilitaryPopulation.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-population
cPlayersPopulation.shortDescription = "Checks the given player's population. This is equivalent to a human player checking the timeline.";
cPlayersPopulation.description = "Checks the given player's population. This is equivalent to a human player checking the timeline, so this fact includes seen and unseen units for the given player. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersPopulation.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-score
cPlayersScore.shortDescription = "Checks the given player's current score.";
cPlayersScore.description = "Checks the given player's current score. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersScore.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-stance
cPlayersStance.shortDescription = "Checks the given player's diplomatic stance.";
cPlayersStance.description = "Checks the given player's diplomatic stance. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersStance.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pESPlayerStance.getLink(),
	name: "ESPlayerStance",
	type: "Const",
	dir: "in",
	range: "ally, neutral, or enemy. The fact allows \"any\"/\"every\" wildcard parameters for pESPlayerStance.",
	note: "The diplomacy stance of the player."
} ];

//players-tribute
cPlayersTribute.shortDescription = "Checks the player's tribute given throughout the game.";
cPlayersTribute.description = "Checks the player's tribute given throughout the game. Only tribute for the given resource type is checked. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersTribute.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, or gold.",
	note: "The tributed resource type."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-tribute-memory
cPlayersTributeMemory.shortDescription = "Checks a player's tribute given since the player's tribute memory for the given resource was cleared.";
cPlayersTributeMemory.description = "Checks a player's tribute given since the player's tribute memory for the given resource was cleared. Only tribute memory for the given resource type is checked. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersTributeMemory.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, or gold.",
	note: "The tributed resource type."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-unit-count
cPlayersUnitCount.shortDescription = "Checks the given player's unit count. The computer player relies only on what it has seen – no cheating.";
cPlayersUnitCount.description = "Checks the given player's unit count. The computer player relies only on what it has seen – no cheating. For allies and self only trained units are included. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersUnitCount.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//players-unit-type-count
cPlayersUnitTypeCount.shortDescription = "Checks the given player's unit count of the give ntype. The computer player relies only on what it has seen – no cheating.";
cPlayersUnitTypeCount.description = "Checks the given player's unit count of the give ntype. The computer player relies only on what it has seen – no cheating. For allies and self only trained units of the given type are included. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cPlayersUnitTypeCount.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId.",
	note: "The UnitId to count."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//population
cPopulation.shortDescription = "Checks the computer player's population.";
cPopulation.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//population-cap
cPopulationCap.shortDescription = "Checks the population cap setting.";
cPopulationCap.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//population-headroom
cPopulationHeadroom.shortDescription = "Checks the computer player's population headroom.";
cPopulationHeadroom.description = "Checks the computer player's population headroom. Population headroom is the difference between the game's population cap and current housing capacity. For example, in a game with a population cap of 75, the computer player has a town center (capacity 5) and a house (capacity 5). In this case population headroom is 65.";
cPopulationHeadroom.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//random-number
cRandomNumber.shortDescription = "Checks random number value generated by generate-random-number.";
cRandomNumber.description = "Checks random number value generated by " + cGenerateRandomNumber.getLink() + ".";
cRandomNumber.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//regicide-game
cRegicideGame.shortDescription = "Checks if the game is a regicide game.";

//release-escrow
cReleaseEscrow.shortDescription = "Releases the computer player's escrow for a given resource type (sets the amount to 0).";
cReleaseEscrow.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, or gold.",
	note: "The escrow resource stockpile."
} ];

//research
cResearch.shortDescription = "Researches the given item.";
cResearch.description = "Researches the given item. To prevent cheating, this action uses the same criteria as the can-research fact to make sure the item can be researched.";
cResearch.commandParameters = [ {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Const",
	dir: "in",
	range: "A TechId.",
	note: "The technology to research."
} ];

//research-available
cResearchAvailable.shortDescription = "Checks that the given research is available to the computer player's civ, and that the research is available at this time.";
cResearchAvailable.description = "Checks that the given research is available to the computer player's civ, and that the research is available at this time (tech tree prerequisites are met). The fact does not check that there are enough resources to start researching.";
cResearchAvailable.commandParameters = [ {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Const",
	dir: "in",
	range: "A TechId.",
	note: "The technology to check availability for."
} ];

//research-completed
cResearchCompleted.shortDescription = "Checks that the given research is completed.";
cResearchCompleted.commandParameters = [ {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Const",
	dir: "in",
	range: "A TechId.",
	note: "The technology to check the completion status for."
} ];

//resource-found
cResourceFound.shortDescription = "Checks whether the computer player has found the given resource.";
cResourceFound.description = "Checks whether the computer player has found the given resource. The fact should be used at the beginning of the game. Once it becomes true for a certain resource it stays true for that resource. In this context, food refers to a forage site.";
cResourceFound.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, or gold.",
	note: "The resource that was found."
} ];

//resign
cResign.shortDescription = "Causes the computer player to resign.";

//sell-commodity
cSellCommodity.shortDescription = "Sells one lot of a given commodity.";
cSellCommodity.commandParameters = [ {
	nameLink: pCommodity.getLink(),
	name: "Commodity",
	type: "Const",
	dir: "in",
	range: "food, wood, or stone",
	note: "The commodity to sell."
} ];

//set-author-email
cSetAuthorEmail.shortDescription = "Undocumented. Only purpose appears to be documentation. The game does not use it for anything.";
cSetAuthorEmail.commandParameters = [ {
	nameLink: pText.getLink(),
	name: "Text",
	type: "Const",
	dir: "in",
	range: "A string (quoted text).",
	note: "Not used by the game."
} ];

//set-author-name
cSetAuthorName.shortDescription = "Undocumented. Only purpose appears to be documentation. The game does not use it for anything.";
cSetAuthorName.commandParameters = [ {
	nameLink: pText.getLink(),
	name: "Text",
	type: "Const",
	dir: "in",
	range: "A string (quoted text).",
	note: "Not used by the game."
} ];

//set-author-version
cSetAuthorVersion.shortDescription = "Undocumented. Only purpose appears to be documentation. The game does not use it for anything.";
cSetAuthorVersion.commandParameters = [ {
	nameLink: pText.getLink(),
	name: "Text",
	type: "Const",
	dir: "in",
	range: "A string (quoted text).",
	note: "Not used by the game."
} ];

//set-difficulty-parameter
cSetDifficultyParameter.shortDescription = "Sets a given difficulty parameter to a given value.";
cSetDifficultyParameter.commandParameters = [ {
	nameLink: pDiffParameterId.getLink(),
	name: "DiffParameterId",
	type: "Const",
	dir: "in",
	range: "ability-to-maintain-distance or ability-to-dodge-missiles.",
	note: "The difficulty parameter to set."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "0 to 100.",
	note: "The value to set the difficulty parameter to."
} ];

//set-doctrine
cSetDoctrine.shortDescription = "Sets the doctrine to the given value.";
cSetDoctrine.commandParameters = [ {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767.",
	note: "The value to set the doctrine to."
} ];

//set-escrow-percentage
cSetEscrowPercentage.shortDescription = "Sets the computer player's escrow percentage for a given resource type.";
cSetEscrowPercentage.description = "Sets the computer player's escrow percentage for a given resource type. Given values have to be in the range 0-100.";
cSetEscrowPercentage.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "Food, wood, stone, or gold.",
	note: "The resource to set the escrow percentage for."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "0 to 100.",
	note: "The escrow percentage to set."
} ];

//set-goal
cSetGoal.shortDescription = "Sets a given goal to a given value.";
cSetGoal.commandParameters = [ {
	nameLink: pGoalId.getLink(),
	name: "GoalId",
	type: "Const",
	dir: "in",
	range: "A valid GoalId, from 1 to 512.",
	note: "The goal to set."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-2,147,483,648 to 2,147,483,647.",
	note: "The value to set the goal to."
} ];

//set-shared-goal
cSetSharedGoal.shortDescription = "Sets a given shared goal (a goal that is shared among computer players) to a given value.";
cSetSharedGoal.description = "Sets a given shared goal (a goal that is shared among computer players) to a given value. To be used only when all computer players are on the same team.";
cSetSharedGoal.commandParameters = [ {
	nameLink: pSharedGoalId.getLink(),
	name: "SharedGoalId",
	type: "Const",
	dir: "in",
	range: "A valid SharedGoalId, from 1 to 256.",
	note: "The shared goal to set."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767.",
	note: "The value to set the shared goal to."
} ];

//set-signal
cSetSignal.shortDescription = "Sets a given signal that can be checked by the AI Signal trigger condition in the scenario editor.";
cSetSignal.commandParameters = [ {
	nameLink: pSignalId.getLink(),
	name: "SignalId",
	type: "Const",
	dir: "in",
	range: "A valid SignalId, from 0 to 255.",
	note: "The signal to set."
} ];

//set-stance
cSetStance.shortDescription = "Sets the stance toward a given player.";
cSetStance.description = "Sets the stance toward a given player. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ". It also allows the use of rule variables for AnyPlayer.";
cSetStance.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to change diplomacy stance toward."
}, {
	nameLink: pESPlayerStance.getLink(),
	name: "ESPlayerStance",
	type: "Const",
	dir: "in",
	range: "ally, neutral, or enemy.",
	note: "The diplomacy stance to set toward the player(s)."
} ];

//set-strategic-number
cSetStrategicNumber.shortDescription = "Sets a given strategic number to a given value.";
cSetStrategicNumber.description = "Sets a given strategic number to a given value. See the <a href=\"" + urlPrefix + "/strategic-numbers/sn-index.html\">Strategic Numbers</a> section for more info on each strategic number.";
cSetStrategicNumber.commandParameters = [ {
	nameLink: pSnId.getLink(),
	name: "SnId",
	type: "Const",
	dir: "in",
	range: "A valid SnId.",
	note: "The strategic number to set."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767. Some strategic numbers have a smaller usable range.",
	note: "The value to set the strategic number to."
} ];

//shared-goal
cSharedGoal.shortDescription = "Checks a given shared goal -- a goal that is shared among computer players. It is to be used only when all computer players are on the same team.";
cSharedGoal.commandParameters = [ {
	nameLink: pSharedGoalId.getLink(),
	name: "SharedGoalId",
	type: "Const",
	dir: "in",
	range: "A valid SharedGoalId, from 1 to 256.",
	note: "The shared goal to get."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//sheep-and-forage-too-far
cSheepAndForageTooFar.shortDescription = "Checks whether the computer player has any forage site(s) and/or sheep within 8 tiles of the drop-off location (Mill or Town Center).";

//soldier-count
cSoldierCount.shortDescription = "Checks the computer player's soldier count. A soldier is a land-based military unit.";
cSoldierCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//spy
cSpy.shortDescription = "Executes a spy command.";

//stance-toward
cStanceToward.shortDescription = "Checks the computer player's stance toward a given player.";
cStanceToward.description = "Checks the computer player's stance toward a given player. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cStanceToward.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to check."
}, {
	nameLink: pESPlayerStance.getLink(),
	name: "ESPlayerStance",
	type: "Const",
	dir: "in",
	range: "ally, neutral, or enemy. The fact allows \"any\"/\"every\" wildcard parameters for pESPlayerStance.",
	note: "The diplomacy stance toward the player."
} ];

//starting-age
cStartingAge.shortDescription = "Checks the game's starting age.";
cStartingAge.description = "Checks the game's starting age. In addition to the regular age parameters, post-imperial-age can be used.";
cStartingAge.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pAge.getLink(),
	name: "Age",
	type: "Op",
	dir: "in",
	range: "dark-age, feudal-age, castle-age, imperial-age, or post-imperial-age.",
	note: "An age for comparison."
} ];

//starting-resources
cStartingResources.shortDescription = "Checks the starting resources level (low, medium, or high).";
cStartingResources.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pStartingResources.getLink(),
	name: "StartingResources",
	type: "Op",
	dir: "in",
	range: "low, medium, or high.",
	note: "The starting resource levels. Standard is low."
} ];

//stone-amount
cStoneAmount.shortDescription = "Checks a computer player's stone amount.";
cStoneAmount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//strategic-number
cStrategicNumber.shortDescription = "Checks a strategic number's value.";
cStrategicNumber.commandParameters = [ {
	nameLink: pSnId.getLink(),
	name: "SnId",
	type: "Const",
	dir: "in",
	range: "A valid SnId.",
	note: "The strategic number to compare."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//taunt
cTaunt.shortDescription = "Triggers the taunt associated with the given value.";
cTaunt.commandParameters = [ {
	nameLink: pTauntId.getLink(),
	name: "TauntId",
	type: "Const",
	dir: "in",
	range: "1 to 255",
	note: "The taunt to send."
} ];

//taunt-detected
cTauntDetected.shortDescription = "Detects a given taunt. The check can be performed any number of times until the taunt is explicitly acknowledged.";
cTauntDetected.description = "Detects a given taunt. The check can be performed any number of times until the taunt is explicitly acknowledged. The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ".";
cTauntDetected.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId",
	note: "The player(s) to check."
}, {
	nameLink: pTauntId.getLink(),
	name: "TauntId",
	type: "Const",
	dir: "in",
	range: "1 to 255",
	note: "The taunt to detect"
} ];

//taunt-using-range
cTauntUsingRange.shortDescription = "Triggers a random taunt that is picked from a given taunt range.";
cTauntUsingRange.description = "Triggers a random taunt that is picked from a given taunt range. Example: (taunt-using-range 50 10) will use a random taunt between 50 and 59.";
cTauntUsingRange.commandParameters = [ {
	nameLink: pTauntId.getLink(),
	name: "TauntId",
	type: "Const",
	dir: "in",
	range: "1 to 255",
	note: "The ID of the first taunt that could be sent."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "1 to 32767.",
	note: "The range of possible taunts to choose from, starting from the given TauntId."
} ];

//timer-triggered
cTimerTriggered.shortDescription = "Checks whether a given timer has triggered (the time on the timer has run out).";
cTimerTriggered.description = "Checks whether a given timer has triggered (the time on the timer has run out). For disabled timers this fact is always false. The check can be performed any number of times until the timer is explicitly disabled.";
cTimerTriggered.commandParameters = [ {
	nameLink: pTimerId.getLink(),
	name: "TimerId",
	type: "Const",
	dir: "in",
	range: "A valid TimerId.",
	note: "The timer to check."
} ];

//town-under-attack
cTownUnderAttack.shortDescription = "Set to true when a computer player's town is under attack.";
cTownUnderAttack.description = "town-under-attack is triggered (i.e. returns true) if any unit/building belonging to the computer player that is inside " + snMaximumTownSize.getLink() + " gets attacked. It lasts 1 to 10 AOC seconds after the attack. It is not triggered by attacks to buildings or villagers that are outside sn-maximum-town-size. This command detects ally attackers.";

//trace-fact
cTraceFact.shortDescription = "Undocumented action that doesn't work. Probably only for debugging purposes originally.";

//train
cTrain.shortDescription = "Trains the given unit.";
cTrain.description = "Trains the given unit. To prevent cheating, this action uses the same criteria as the " + cCanTrain.getLink() + " fact to make sure the unit can be trained. The fact allows the use of unit line wildcard parameters for " + pUnitId.getLink() + ".";
cTrain.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId. This action allows the use of unit line wildcard parameters for UnitId.",
	note: "The unit to train."
} ];

//tribute-to-player
cTributeToPlayer.shortDescription = "Tributes the given amount of the given resource type to the player defined by the AnyPlayer parameter.";
cTributeToPlayer.description = "Tributes the given amount of the given resource type to the player defined by the AnyPlayer parameter. Implementation specifics: If the computer player does not have a Market, no tribute is given. In the case when the value parameter specifies an amount larger than available, only the available resources of the given type are tributed. If, for example, there is only 60 food and the tribute action specifies 100 food, only 60 food will be tributed. The tribute action is ignored when there are no resources of the given type. Tribute fees are paid and deducted from the tribute amount (if applicable). The fact allows \"any\"/\"every\" wildcard parameters for " + pAnyPlayer.getLink() + ". It also allows the use of rule variables for AnyPlayer.";
cTributeToPlayer.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "Any PlayerId.",
	note: "The player(s) to tribute. The action allows \"any\"/\"every\" wildcard parameters for AnyPlayer."
}, {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, or gold.",
	note: "The resource to tribute."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767.",
	note: "The amount of the resource to tribute."
} ];

//true
cTrue.shortDescription = "A Fact that is always true.";
cTrue.description = "A Fact that is always true, often used as a placeholder for rules that should execute its actions without conditions.";

//unit-available
cUnitAvailable.shortDescription = "Checks that the unit is available to the computer player's civ, and that the tech tree prerequisites for training the unit are met.";
cUnitAvailable.description = "Checks that the unit is available to the computer player's civ, and that the tech tree prerequisites for training the unit are met. The fact does not check whether the unit training can start. This depends on resource availability, housing headroom, and whether the building needed for training is currently used for research/training of another unit. The fact allows the use of unit line wildcard parameters for " + pUnitId.getLink() + ".";
cUnitAvailable.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId.",
	note: "The unit to check availability for."
} ];

//unit-count
cUnitCount.shortDescription = "Checks the computer player's unit count. Only trained units are included.";
cUnitCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//unit-count-total
cUnitCountTotal.shortDescription = "Checks the computer player's total unit count. The total includes trained and queued units.";
cUnitCountTotal.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//unit-type-count
cUnitTypeCount.shortDescription = "Checks the computer player's unit count of the given type.";
cUnitTypeCount.description = "Checks the computer player's unit count of the given type. Only trained units of the given type are included. The fact allows the use of unit line wildcard parameters for " + pUnitId.getLink() + ".";
cUnitTypeCount.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId.",
	note: "The unit type to count. This fact allows the use of unit line wildcard parameters for UnitId."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//unit-type-count-total
cUnitTypeCountTotal.shortDescription = "Checks the computer player's total unit count of the given type.";
cUnitTypeCountTotal.description = "Checks the computer player's total unit count of the given type. The total includes trained and queued units of the given type. The fact allows the use of unit line wildcard parameters for " + pUnitId.getLink() + ".";
cUnitTypeCountTotal.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "A UnitId.",
	note: "The unit type to count. This fact allows the use of unit line wildcard parameters for UnitId."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//victory-condition
cVictoryCondition.shortDescription = "Checks the game victory condition.";
cVictoryCondition.commandParameters = [ {
	nameLink: pVictory.getLink(),
	name: "Victory",
	type: "Const",
	dir: "in",
	range: "standard, conquest, time-limit, score, or custom.",
	note: "The victory condition."
} ];

//wall-completed-percentage
cWallCompletedPercentage.shortDescription = "Checks the completion percentage for a given perimeter wall.";
cWallCompletedPercentage.description = "Checks the completion percentage for a given perimeter wall. Trees and other destructible natural barriers are included and count as completed.";
cWallCompletedPercentage.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to calculate the completion percentage for. Perimeter 1 has a smaller raidus than 2."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//wall-invisible-percentage
cWallInvisiblePercentage.shortDescription = "Checks what percentage of the potential wall placement is covered with fog.";
cWallInvisiblePercentage.description = "Checks what percentage of the potential wall placement is covered with fog. If the invisible percentage is not equal to 0 we do not know if there is a hole or not. This is because the hidden tile(s) might have a tree(s).";
cWallInvisiblePercentage.commandParameters = [ {
	nameLink: pPerimeter.getLink(),
	name: "Perimeter",
	type: "Const",
	dir: "in",
	range: "1 or 2.",
	note: "The perimeter to calculate the invisible percentage for. Perimeter 1 has a smaller raidus than 2."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//warboat-count
cWarboatCount.shortDescription = "Checks the computer player's warboat count. A warboat is a boat capable of attacking.";
cWarboatCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];

//wood-amount
cWoodAmount.shortDescription = "Checks the computer player's wood amount.";
cWoodAmount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767.",
	note: "A number for comparison."
} ];







//up-add-cost-data
cUpAddCostData.shortDescription = "Add or subtract another set of cost data to the current cost data.";
cUpAddCostData.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 508",
	note: "The first of 4 consecutive goals that store cost data for food, wood, stone, and gold."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number of sets of the cost data to add or subtract."
} ];
cUpAddCostData.example = [ {
	title: "Add 2 instances of the military cost data to the current cost data represented by gl-cost-food, etc.",
	data: "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defconst gl-military-cost-food 111)\r\n(defconst gl-military-cost-wood 112)\r\n(defconst gl-military-cost-stone 113)\r\n(defconst gl-military-cost-gold 114)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 1 gl-military-cost-food)\r\n\t(up-add-object-cost c: knight-line c: 40)\r\n\t(up-setup-cost-data 1 gl-cost-food)\r\n\t(up-add-cost-data gl-military-cost-food c: 2)\r\n\t(disable-self)\r\n)"
} ];
cUpAddCostData.relatedCommands = [];

//up-add-object-by-id
cUpAddObjectById.shortDescription = "Add an object to the search results by id.";
cUpAddObjectById.description = "Add an object to the search results by id. This command can be used as either a Fact or an Action.";
cUpAddObjectById.commandParameters = [ {
	nameLink: pSearchSource.getLink(),
	name: "SearchSource",
	type: "Const",
	dir: "in",
	range: "search-local or search-remote",
	note: "The search source to modify."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Op",
	dir: "in",
	range: "a valid Id",
	note: "The zero-based id of the object to set."
} ];
cUpAddObjectById.example = [ {
	title: "Add an object to the local search results by a specific id.",
	data: "(defconst gl-stored-id 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-add-object-by-id search-local g: gl-stored-id)\r\n)"
} ];
cUpAddObjectById.relatedCommands = [];

//up-add-object-cost
cUpAddObjectCost.shortDescription = "Add or subtract objects of a specific type to the current cost data.";
cUpAddObjectCost.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Op",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object to operate upon."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number of objects to add or subtract."
} ];
cUpAddObjectCost.example = [ {
	title: "Add the cost of 4 spearmen to the current cost data represented by gl-cost-food, etc.",
	data: "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 0 gl-cost-food)\r\n\t(up-add-object-cost c: spearman c: 4)\r\n\t(disable-self)\r\n)"
}, {
	title: "Add the cost of a town center (special exception).",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-add-object-cost c: town-center-foundation c: 1) ; town-center-foundation = 621\r\n\t;(up-add-object-cost c: town-center c: 1) ; error: this will not include the stone cost\r\n\t(disable-self)\r\n)"
} ];
cUpAddObjectCost.relatedCommands = [];

//up-add-point
cUpAddPoint.shortDescription = "Add or subtract two point goal pairs together.";
cUpAddPoint.description = "Add or subtract two point goal pairs together. A negative value for Count will result in subtraction. Set Point2 to 0 to use the point that is stored by up-set-target-point.";
cUpAddPoint.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "io",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pCount.getLink(),
	name: "Count",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number of Point2 instances to add. Point2 will be multiplied by this before adding. A negative value will result in subtraction."
} ];
cUpAddPoint.example = [ {
	title: "Add the positions of the focus and target players together.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-other-x 200)\r\n(defconst gl-other-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-focus gl-point-x)\r\n\t(up-get-point position-target gl-other-x)\r\n\t(up-add-point gl-point-x gl-other-x c: 1)\r\n)"
} ];
cUpAddPoint.relatedCommands = [];

//up-add-research-cost
cUpAddResearchCost.shortDescription = "Add or subtract techs of a specific type to the current cost data.";
cUpAddResearchCost.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Op",
	dir: "in",
	range: "a TechId",
	note: "The technology to operate upon."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number of techs to add or subtract."
} ];
cUpAddResearchCost.example = [ {
	title: "Subtract the cost of loom from the current cost data represented by gl-cost-food, etc.",
	data: "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 0 gl-cost-food)\r\n\t(up-add-research-cost c: ri-loom c: -1)\r\n\t(disable-self)\r\n)"
} ];
cUpAddResearchCost.relatedCommands = [];

//up-allied-goal
cUpAlliedGoal.shortDescription = "Perform a comparison with an allied AI's goal variable.";
cUpAlliedGoal.commandParameters = [ {
	nameLink: pComputerAllyPlayer.getLink(),
	name: "ComputerAllyPlayer",
	type: "Player",
	dir: "in",
	range: "a PlayerId for: self, computer-ally",
	note: "The player(s) to check."
}, {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "in",
	range: "a GoalId",
	note: "The goal that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpAlliedGoal.example = [ {
	title: "Check if any ally has a goal with the same id as &quot;gl-sheep-total&quot; that stores a value &gt; 6.",
	data: "(defconst gl-sheep-total 101)\r\n(defrule\r\n\t(up-allied-goal any-ally gl-sheep-total &gt; 6)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpAlliedGoal.relatedCommands = [];

//up-allied-resource-amount
cUpAlliedResourceAmount.shortDescription = "Perform a comparison with an ally's internal resource value.";
cUpAlliedResourceAmount.commandParameters = [ {
	nameLink: pAllyPlayer.getLink(),
	name: "AllyPlayer",
	type: "Player",
	dir: "in",
	range: "a PlayerId for: self, ally",
	note: "The player(s) to check."
}, {
	nameLink: pResourceAmount.getLink(),
	name: "ResourceAmount",
	type: "Const",
	dir: "in",
	range: "a const from the ResourceAmount enumeration",
	note: "The resource that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpAlliedResourceAmount.example = [ {
	title: "Check if any ally's food &lt; 50.",
	data: "(defrule\r\n\t(up-allied-resource-amount any-ally food &lt; 50)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpAlliedResourceAmount.relatedCommands = [];

//up-allied-resource-percent
cUpAlliedResourcePercent.shortDescription = "Perform a comparison with an ally's internal resource value * 100.";
cUpAlliedResourcePercent.commandParameters = [ {
	nameLink: pAllyPlayer.getLink(),
	name: "AllyPlayer",
	type: "Player",
	dir: "in",
	range: "a PlayerId for: self, ally",
	note: "The player(s) to check."
}, {
	nameLink: pResourceAmount.getLink(),
	name: "ResourceAmount",
	type: "Const",
	dir: "in",
	range: "a const from the ResourceAmount enumeration",
	note: "The resource that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpAlliedResourcePercent.example = [ {
	title: "Check amount-tribute-inefficiency to see if coinage has been researched by an ally.",
	data: "(defrule\r\n\t(up-allied-resource-percent any-ally amount-tribute-inefficiency &lt; 30)\r\n=&gt;\r\n\t(chat-to-all &quot;Coinage has been researched by an ally.&quot;)\r\n\t(disable-self)\r\n)"
} ];
cUpAlliedResourcePercent.relatedCommands = [];

//up-allied-sn
cUpAlliedSn.shortDescription = "Perform a comparison with an allied AI's strategic number.";
cUpAlliedSn.commandParameters = [ {
	nameLink: pComputerAllyPlayer.getLink(),
	name: "ComputerAllyPlayer",
	type: "Player",
	dir: "in",
	range: "a PlayerId for: self, computer-ally",
	note: "The player(s) to check."
}, {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Sn",
	dir: "in",
	range: "an SnId",
	note: "The strategic number that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpAlliedSn.example = [ {
	title: "Check if any ally has &quot;sn-maximum-town-size&quot; &gt;= 30.",
	data: "(defrule\r\n\t(up-allied-sn any-ally sn-maximum-town-size &gt;= 30)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpAlliedSn.relatedCommands = [];

//up-assign-builders
cUpAssignBuilders.shortDescription = "Assign a specific number of builders to a building type or class.";
cUpAssignBuilders.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The building to modify."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-1 to 250",
	note: "The number of builders to assign or -1 to disable sending additional builders."
} ];
cUpAssignBuilders.example = [ {
	title: "Assign at least 2 builders for houses (not per house).",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-assign-builders c: house c: 2)\r\n\t(disable-self)\r\n)"
}, {
	title: "Assign at least 4 builders for town centers (special exception).",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-assign-builders c: town-center-foundation c: 4) ; town-center-foundation = 621\r\n\t;(up-assign-builders c: town-center c: 4) ; error: this will not work\r\n\t(disable-self)\r\n)"
} ];
cUpAssignBuilders.relatedCommands = [];

//up-attacker-class
cUpAttackerClass.shortDescription = "Check the class of the last enemy object to trigger town-under-attack.";
cUpAttackerClass.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pClassId.getLink(),
	name: "ClassId",
	type: "Op",
	dir: "in",
	range: "900 to 999",
	note: "The object class id to compare with."
} ];
cUpAttackerClass.example = [ {
	title: "Check if the town was last under attack by a ship.",
	data: "(defrule\r\n\t(up-attacker-class == warship-class) ; warship-class = 922\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpAttackerClass.relatedCommands = [];

//up-bound-precise-point
cUpBoundPrecisePoint.shortDescription = "Bound a point goal pair inside the map with additional control.";
cUpBoundPrecisePoint.description = "Bound a point goal pair inside the map with additional control. Please ensure that Border is a valid value and will not cause an overflow for the map size. If Precise is used, the map size will be multiplied by 100 before bounding, so the border should be adjusted accordingly.";
cUpBoundPrecisePoint.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "io",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to read and store the (x,y) pair."
}, {
	nameLink: pPrecise.getLink(),
	name: "Precise",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to bound as a precise point (x100)."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBorder.getLink(),
	name: "Border",
	type: "Op",
	dir: "in",
	range: "0 to 32767",
	note: "The border width for bounding the point."
} ];
cUpBoundPrecisePoint.example = [ {
	title: "Bound a point inside the map with a 10 tile border.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-object gl-point-x)\r\n\t(up-bound-precise-point gl-point-x 0 c: 10)\r\n)"
} ];
cUpBoundPrecisePoint.relatedCommands = [];

//up-bound-point
cUpBoundPoint.shortDescription = "Copy a point goal pair and shift it into the map bounds.";
cUpBoundPoint.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
} ];
cUpBoundPoint.example = [ {
	title: "Copy and shift a point into the map bounds.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-store-x 200)\r\n(defconst gl-store-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-object gl-point-x)\r\n\t(up-bound-point gl-store-x gl-point-x)\r\n)"
} ];
cUpBoundPoint.relatedCommands = [];

//up-build
cUpBuild.shortDescription = "Add a building to the construction queue with dynamic values.";
cUpBuild.commandParameters = [ {
	nameLink: pPlacementType.getLink(),
	name: "PlacementType",
	type: "Const",
	dir: "in",
	range: "place-normal, place-forward, place-control, place-point",
	note: "The type of placement. Execute up-set-placement-data before using place-control."
}, {
	nameLink: pEscrowState.getLink(),
	name: "EscrowState",
	type: "Goal",
	dir: "in",
	range: "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
	note: "Determines whether escrowed resources are considered.<br/>Note: A goal ID that stores the escrow state is expected. However, if you never want this command to use escrow, you can put 0 instead."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The building that will be constructed."
} ];
cUpBuild.example = [ {
	title: "Build an outpost without escrowed resources.",
	data: "(defrule\r\n\t(up-can-build 0 c: outpost)\r\n=&gt;\r\n\t(up-build place-normal 0 c: outpost)\r\n)"
} ];
cUpBuild.relatedCommands = [];

//up-building-type-in-town
cUpBuildingTypeInTown.shortDescription = "Check the number of a specific enemy building type in town.";
cUpBuildingTypeInTown.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The type of building that will be checked."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpBuildingTypeInTown.example = [ {
	title: "Check if there is a targetable enemy barracks inside sn-maximum-town-size.",
	data: "(defrule\r\n\t(up-building-type-in-town c: barracks &gt; 0)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpBuildingTypeInTown.relatedCommands = [];

//up-build-line
cUpBuildLine.shortDescription = "Place a line of buildings between two point goal pairs.";
cUpBuildLine.description = "Place a line of buildings between two point goal pairs. For town centers and gates, please use a FoundationId, such as town-center-foundation or gate-ascending. Do not use town-center or gate with this command.";
cUpBuildLine.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The building type that will be constructed."
} ];
cUpBuildLine.example = [ {
	title: "Build a palisade wall between 2 points.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-other-x 200)\r\n(defconst gl-other-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-build-line gl-point-x gl-other-x c: palisade-wall)\r\n)"
} ];
cUpBuildLine.relatedCommands = [];

//up-buy-commodity
cUpBuyCommodity.shortDescription = "Buy a variable amount of resources at the market.";
cUpBuyCommodity.description = "Buy a variable amount of resources at the market. The actual amount you receive depends on available gold.";
cUpBuyCommodity.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pResourceAmount.getLink(),
	name: "ResourceAmount",
	type: "Op",
	dir: "in",
	range: "a const from the ResourceAmount enumeration",
	note: "The resource that will be modified."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "1 to 32767",
	note: "The amount of resources."
} ];
cUpBuyCommodity.example = [{
	title: "Attempt to buy 300 food at the market.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-buy-commodity c: food c: 300)\r\n)"
} ];
cUpBuyCommodity.relatedCommands = [];

//up-can-build
cUpCanBuild.shortDescription = "Check if a building can be constructed with dynamic values.";
cUpCanBuild.commandParameters = [ {
	nameLink: pEscrowState.getLink(),
	name: "EscrowState",
	type: "Goal",
	dir: "in",
	range: "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
	note: "Determines whether escrowed resources are considered.<br/>Note: A goal ID that stores the escrow state is expected. However, if you never want this command to use escrow, you can put 0 instead."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The building that will be checked."
} ];
cUpCanBuild.example = [ {
	title: "Check if an outpost can be built without escrowed resources.",
	data: "(defrule\r\n\t(up-can-build 0 c: outpost)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCanBuild.relatedCommands = [];

//up-can-build-line
cUpCanBuildLine.shortDescription = "Check if a building can be constructed at a point goal pair.";
cUpCanBuildLine.description = "Check if a building can be constructed at a point goal pair. For town centers and gates, please use a FoundationId, such as town-center-foundation or gate-ascending. Do not use town-center or gate with this command.";
cUpCanBuildLine.commandParameters = [ {
	nameLink: pEscrowState.getLink(),
	name: "EscrowState",
	type: "Goal",
	dir: "in",
	range: "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
	note: "Determines whether escrowed resources are considered.<br/>Note: A goal ID that stores the escrow state is expected. However, if you never want this command to use escrow, you can put 0 instead."
}, {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The building type that will be constructed."
} ];
cUpCanBuildLine.example = [ {
	title: "Check if a palisade-wall can be constructed without escrow.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(up-can-build-line 0 gl-point-x c: palisade-wall)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCanBuildLine.relatedCommands = [];

//up-can-research
cUpCanResearch.shortDescription = "Check if a technology can be researched with dynamic values.";
cUpCanResearch.commandParameters = [ {
	nameLink: pEscrowState.getLink(),
	name: "EscrowState",
	type: "Goal",
	dir: "in",
	range: "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
	note: "Determines whether escrowed resources are considered.<br/>Note: A goal ID that stores the escrow state is expected. However, if you never want this command to use escrow, you can put 0 instead."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Op",
	dir: "in",
	range: "a TechId",
	note: "The technology that will be checked."
} ];
cUpCanResearch.example = [ {
	title: "Check if fletching can be researched without escrowed resources.",
	data: "(defrule\r\n\t(up-can-research 0 c: ri-fletching)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCanResearch.relatedCommands = [];

//up-can-search
cUpCanSearch.shortDescription = "Check the status for either the local or remote search.";
cUpCanSearch.description = "Check the status for either the local or remote search. If the result list is full or the index offset is at the end of the player object list, this will return false.";
cUpCanSearch.commandParameters = [ {
	nameLink: pSearchSource.getLink(),
	name: "SearchSource",
	type: "Const",
	dir: "in",
	range: "search-local or search-remote",
	note: "The search source to check."
} ];
cUpCanSearch.example = [ {
	title: "Check if up-reset-search must be executed before up-find-local.",
	data: "(defrule\r\n\t(not(up-can-search search-local))\r\n=&gt;\r\n\t(up-reset-search 1 1 0 0)\r\n)"
} ];
cUpCanSearch.relatedCommands = [];

//up-can-train
cUpCanTrain.shortDescription = "Check if a unit can be trained with dynamic values.";
cUpCanTrain.commandParameters = [ {
	nameLink: pEscrowState.getLink(),
	name: "EscrowState",
	type: "Goal",
	dir: "in",
	range: "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
	note: "Determines whether escrowed resources are considered.<br/>Note: A goal ID that stores the escrow state is expected. However, if you never want this command to use escrow, you can put 0 instead."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The unit that will be checked."
} ];
cUpCanTrain.example = [ {
	title: "Check if spearman-line can be trained with escrowed resources, using a goal.",
	data: "(defconst gl-escrow-state 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal gl-escrow-state with-escrow)\r\n\t(disable-self)\r\n)\r\n(defrule\r\n\t(up-can-train gl-escrow-state c: spearman-line)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCanTrain.relatedCommands = [];

//up-cc-add-resource
cUpCcAddResource.shortDescription = "Add resources dynamically to the player stockpile.";
cUpCcAddResource.description = "Add resources dynamically to the player stockpile. This is considered a cheat command, but cheats do not have to be enabled.";
cUpCcAddResource.commandParameters = [{
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pResourceAmount.getLink(),
	name: "ResourceAmount",
	type: "Op",
	dir: "in",
	range: "a const from the ResourceAmount enumeration",
	note: "The resource that will be modified."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The amount of resources."
} ];
cUpCcAddResource.example = [ {
	title: "Add 100 food to the stockpile.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-cc-add-resource c: food c: 100)\r\n)"
} ];
cUpCcAddResource.relatedCommands = [];

//up-cc-send-cheat
cUpCcSendCheat.shortDescription = "Send a message in order to execute a cheat code.";
cUpCcSendCheat.description = "Send a message in order to execute a cheat code. Cheats must be enabled for this to take effect.";
cUpCcSendCheat.commandParameters = [ {
	nameLink: pCode.getLink(),
	name: "Code",
	type: "Text",
	dir: "in",
	range: "quoted text",
	note: "This must be a valid cheat code."
} ];
cUpCcSendCheat.example = [ {
	title: "Create a saboteur unit using the &quot;to smithereens&quot; cheat code.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-cc-send-cheat &quot;to smithereens&quot;)\r\n\t(disable-self)\r\n)"
} ];
cUpCcSendCheat.relatedCommands = [];

//up-change-name
cUpChangeName.shortDescription = "Change the name of the AI during gameplay.";
cUpChangeName.commandParameters = [ {
	nameLink: pNewName.getLink(),
	name: "NewName",
	type: "Text",
	dir: "in",
	range: "quoted text, no longer than 24 characters",
	note: "A formatted quote of text that will be the new name."
} ];
cUpChangeName.example = [ {
	title: "Change the name of the AI to &quot;William Wallace&quot;.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-change-name &quot;William Wallace&quot;)\r\n\t(disable-self)\r\n)"
} ];
cUpChangeName.relatedCommands = [];

//up-chat-data-to-all
cUpChatDataToAll.shortDescription = "Send a chat message with a formatted value to everyone.";
cUpChatDataToAll.commandParameters = [ {
	nameLink: pFormattedString.getLink(),
	name: "FormattedString",
	type: "Text",
	dir: "in",
	range: "quoted text, where %d is replaced by the provided value",
	note: "A formatted quote of text that will be sent as a chat message."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The value that will replace %d in the format string of text."
} ];
cUpChatDataToAll.example = [ {
	title: "Tell everyone what your player number is.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-chat-data-to-all &quot;I am player %d.&quot; c: my-player-number)\r\n\t(disable-self)\r\n)"
} ];
cUpChatDataToAll.relatedCommands = [];

//up-chat-data-to-player
cUpChatDataToPlayer.shortDescription = "Send a chat message with a formatted value to a player.";
cUpChatDataToPlayer.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "a PlayerId for: self, any, every",
	note: "The player(s) that will receive the message."
}, {
	name: "FormattedString",
	type: "Text",
	dir: "in",
	range: "quoted text, where %d is replaced by the provided value",
	note: "A formatted quote of text that will be sent as a chat message."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The value that will replace %d in the format string of text."
} ];
cUpChatDataToPlayer.example = [ {
	title: "Tell every ally know who the current target player is.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-chat-data-to-player every-ally &quot;The target is player %d.&quot; s: sn-target-player-number)\r\n\t(disable-self)\r\n)"
} ];
cUpChatDataToPlayer.relatedCommands = [];

//up-chat-data-to-self
cUpChatDataToSelf.shortDescription = "Send a chat message with a formatted value locally.";
cUpChatDataToSelf.commandParameters = [ {
	nameLink: pFormattedString.getLink(),
	name: "FormattedString",
	type: "Text",
	dir: "in",
	range: "quoted text, where %d is replaced by the provided value",
	note: "A formatted quote of text that will be sent as a chat message."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The value that will replace %d in the format string of text."
} ];
cUpChatDataToSelf.example = [ {
	title: "Chat &quot;Food: 5.&quot; to self.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-chat-data-to-self &quot;Food: %d.&quot; c: 5)\r\n\t(disable-self)\r\n)"
} ];
cUpChatDataToSelf.relatedCommands = [];

//up-clean-search
cUpCleanSearch.shortDescription = "Removes duplicate ids or sorts the search results.";
cUpCleanSearch.description = "Removes duplicate ids or sorts the search results. If ObjectData is set to -1, this will attempt to remove duplicates, lowering the result total. When removing duplicates, using search-order-none to preserve the existing order may perform slower than with asc/desc. If you wish to sort by ObjectData, it's best to remove duplicates first. Depending on the number of objects in the list, this command may be expensive, so please take care.";
cUpCleanSearch.commandParameters = [ {
	nameLink: pSearchSource.getLink(),
	name: "SearchSource",
	type: "Const",
	dir: "in",
	range: "search-local or search-remote",
	note: "The search source to modify."
}, {
	nameLink: pObjectData.getLink(),
	name: "ObjectData",
	type: "Const",
	dir: "in",
	range: "a value from the ObjectData enumeration",
	note: "The type of data to retrieve or -1 to enable duplicate removal."
}, {
	nameLink: pSearchOrder.getLink(),
	name: "SearchOrder",
	type: "Const",
	dir: "in",
	range: "a const from the SearchOrder enumeration",
	note: "The sort order."
} ];
cUpCleanSearch.example = [ {
	title: "Clean the remote search results, ordered by oldest object to newest. After that, sort the list by hitpoints.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-clean-search search-remote -1 search-order-asc)\r\n\t(up-clean-search search-remote object-data-hitpoints search-order-asc)\r\n)"
} ];
cUpCleanSearch.relatedCommands = [];

//up-compare-const
cUpCompareConst.shortDescription = "Perform a comparison with a constant value.";
cUpCompareConst.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Const",
	dir: "in",
	range: "-32768 to 32767",
	note: "The constant that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpCompareConst.example = [ {
	title: "Check if the const named &quot;feudal-villagers&quot; &gt;= 20.",
	data: "(defconst feudal-villagers 30)\r\n(defrule\r\n\t(up-compare-const feudal-villagers &gt;= 20)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCompareConst.relatedCommands = [];

//up-compare-flag
cUpCompareFlag.shortDescription = "Perform a bitwise flag test with a goal variable.";
cUpCompareFlag.description = "Perform a bitwise flag test with a goal variable. Flags allow multiple states to be stored in a single value by using powers of 2 (1, 2, 4, 8, 16, etc.). You can use [cgs]:== to see if a flag is stored or [cgs]:!= to see if it isn't stored.";
cUpCompareFlag.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "in",
	range: "a GoalId",
	note: "The goal that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pFlag.getLink(),
	name: "Flag",
	type: "Op",
	dir: "in",
	range: "a valid flag",
	note: "A flag to check."
} ];
cUpCompareFlag.example = [ {
	title: "Check if the goal named &quot;gl-guard-flag&quot; contains the flag for guard-flag-resource.",
	data: "(defconst gl-guard-flag 103)\r\n(defrule\r\n\t(up-compare-flag gl-guard-flag == guard-flag-resource)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCompareFlag.relatedCommands = [];

//up-compare-goal
cUpCompareGoal.shortDescription = "Perform a comparison with a goal variable.";
cUpCompareGoal.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "in",
	range: "a GoalId",
	note: "The goal that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpCompareGoal.example = [ {
		title: "Check if the goal named &quot;gl-sheep-total&quot; stores a value &lt; 4.",
		data: "(defconst gl-sheep-total 101)\r\n(defrule\r\n\t(up-compare-goal gl-sheep-total &lt; 4)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCompareGoal.relatedCommands = [];

//up-compare-sn
cUpCompareSn.shortDescription = "Perform a comparison with a strategic number.";
cUpCompareSn.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Sn",
	dir: "in",
	range: "an SnId",
	note: "The strategic number that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpCompareSn.example = [ {
	title: "Check if the strategic number named &quot;sn-maximum-town-size&quot; &gt; 40.",
	data: "(defrule\r\n\t(up-compare-sn sn-maximum-town-size &gt; 40)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCompareSn.relatedCommands = [];

//up-compare-text
cUpCompareText.shortDescription = "Perform a string comparison with the stored text.";
cUpCompareText.description = "Perform a string comparison with the stored text. You must store text before using this command and the provided string parameter must be a text defconst. If the provided string cannot be found anywhere in the stored text, the value will be -1. Otherwise, the value will be the index of the match.";
cUpCompareText.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pText.getLink(),
	name: "Text",
	type: "Op",
	dir: "in",
	range: "a text defconst",
	note: "The text to match."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-1 to 32767",
	note: "The number that will be used in the operation."
} ];
cUpCompareText.example = [{
	title: "Check if player 1 has &quot;one&quot; in their name.",
	data: "(defconst text-name-one &quot;one&quot;)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-player-name 1)\r\n)\r\n(defrule\r\n\t(up-compare-text c: text-name-one >= 0)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpCompareText.relatedCommands = [];

//up-copy-point
cUpCopyPoint.shortDescription = "Copy one point goal pair into another pair of extended goals.";
cUpCopyPoint.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
} ];
cUpCopyPoint.example = [ {
	title: "Copy the position of the map center.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-other-x 200)\r\n(defconst gl-other-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n\t(up-copy-point gl-other-x gl-point-x)\r\n)"
} ];
cUpCopyPoint.relatedCommands = [];

//up-create-group
cUpCreateGroup.shortDescription = "Create a search group from the local search results.";
cUpCreateGroup.description = "Create a search group from the local search results. If there are no units available in the results list to create the specified group, the group will be cleared in the same way as up-reset-group.";
cUpCreateGroup.commandParameters = [ {
	nameLink: pIndex.getLink(),
	name: "Index",
	type: "Goal",
	dir: "in",
	range: "a valid GoalId, or 0 for index 0",
	note: "The zero-based index of the first local search result."
}, {
	nameLink: pCount.getLink(),
	name: "Count",
	type: "Goal",
	dir: "in",
	range: "a valid GoalId, or 0 for count 40",
	note: "The maximum number of objects."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pGroupId.getLink(),
	name: "GroupId",
	type: "Op",
	dir: "in",
	range: "0 to 9",
	note: "The group id."
} ];
cUpCreateGroup.example = [ {
	title: "Create a search group of up to 10 villagers.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-search 1 1 1 1)\r\n\t(up-reset-filters)\r\n\t(up-find-local c: villager-class c: 10)\r\n\t(up-create-group 0 0 c: 0)\r\n)"
} ];
cUpCreateGroup.relatedCommands = [];

//up-cross-tiles
cUpCrossTiles.shortDescription = "Get a point perpendicular to two point goal pairs.";
cUpCrossTiles.description = "Get a point perpendicular to two point goal pairs. A negative value for Tiles will result in subtraction. Set Point2 to 0 to use the point that is stored by up-set-target-point.";
cUpCrossTiles.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "io",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTiles.getLink(),
	name: "Tiles",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number of tiles to move along the vector."
} ];
cUpCrossTiles.example = [ {
	title: "Get the point 10 tiles right of the home town-center relative to the map center.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-point-x)\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-cross-tiles gl-point-x gl-center-x c: 10)\r\n)"
} ];
cUpCrossTiles.relatedCommands = [];

//up-delete-distant-farms
cUpDeleteDistantFarms.shortDescription = "Delete all farms that exist outside the specified drop distance.";
cUpDeleteDistantFarms.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "0 to 255",
	note: "The drop distance at which to begin deleting farms."
} ];
cUpDeleteDistantFarms.example = [ {
	title: "Delete farms where the &quot;dropsite-min-distance&quot; > 8.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-delete-distant-farms c: 8)\r\n\t(disable-self)\r\n)"
} ];
cUpDeleteDistantFarms.relatedCommands = [];

//up-delete-idle-units
cUpDeleteIdleUnits.shortDescription = "Delete all idle units of the specified type.";
cUpDeleteIdleUnits.commandParameters = [ {
	nameLink: pIdleType.getLink(),
	name: "IdleType",
	type: "Const",
	dir: "in",
	range: "a const from the IdleType enumeration",
	note: "The type of units that will be deleted."
} ];
cUpDeleteIdleUnits.example = [ {
	title: "Delete all idle villagers.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-delete-idle-units idle-type-villager)\r\n\t(disable-self)\r\n)"
} ];
cUpDeleteIdleUnits.relatedCommands = [];

//up-delete-objects
cUpDeleteObjects.shortDescription = "Delete all objects with less than the specified hitpoints.";
cUpDeleteObjects.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The unit type that will be deleted."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pHitpoints.getLink(),
	name: "Hitpoints",
	type: "Op",
	dir: "in",
	range: "0 to 32767",
	note: "Units with less than this number of HP will be deleted."
} ];
cUpDeleteObjects.example = [ {
	title: "Delete all walls owned by the player.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-delete-objects c: wall-class c: 32767) ; wall-class = 927\r\n\t(disable-self)\r\n)"
} ];
cUpDeleteObjects.relatedCommands = [];

//up-defender-count
cUpDefenderCount.shortDescription = "Check the number of units actively defending in town.";
cUpDefenderCount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpDefenderCount.example = [ {
	title: "Check if the AI is actively defending its town with at least 10 units.",
	data: "(defrule\r\n\t(up-defender-count &gt;= 10)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpDefenderCount.relatedCommands = [];

//up-disband-group-type
cUpDisbandGroupType.shortDescription = "Disband all internal groups of the specified type.";
cUpDisbandGroupType.commandParameters = [ {
	nameLink: pGroupType.getLink(),
	name: "GroupType",
	type: "Const",
	dir: "in",
	range: "a const from the GroupType enumeration",
	note: "The type of groups that will be disbanded."
} ];
cUpDisbandGroupType.example = [ {
	title: "Stop all land explore groups in a more direct manner.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-number-explore-groups 0)\r\n\t(set-strategic-number sn-total-number-explorers 0)\r\n\t(up-disband-group-type group-type-land-explore)\r\n\t(up-reset-unit c: all-units-class)\r\n\t(disable-self)\r\n)"
} ];
cUpDisbandGroupType.relatedCommands = [];

//up-drop-resources
cUpDropResources.shortDescription = "Request a drop by gatherers carrying a specific number of a resource.";
cUpDropResources.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, gold, or the class id of the resource",
	note: "The resource that will be dropped."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "0 to 32767",
	note: "The minimum carried resources for a gatherer to drop."
} ];
cUpDropResources.example = [ {
	title: "Get all food gatherers carrying at least 15F to drop their resources.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-drop-resources food c: 15)\r\n\t(disable-self)\r\n)"
}, {
	title: "Get all farmers carrying at least 5F to drop their resources.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-drop-resources farm-class c: 5) ; farm-class = 949\r\n\t(disable-self)\r\n)"
} ];
cUpDropResources.relatedCommands = [];

//up-enemy-buildings-in-town
cUpEnemyBuildingsInTown.shortDescription = "Check the number of targetable enemy buildings in town.";
cUpEnemyBuildingsInTown.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpEnemyBuildingsInTown.example = [ {
	title: "Check if there is an enemy building inside sn-maximum-town-size.",
	data: "(defrule\r\n\t(up-enemy-buildings-in-town &gt; 0)\r\n\t(enemy-buildings-in-town) ; this is equivalent\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpEnemyBuildingsInTown.relatedCommands = [];

//up-enemy-units-in-town
cUpEnemyUnitsInTown.shortDescription = "Check the number of targetable enemy units in town.";
cUpEnemyUnitsInTown.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpEnemyUnitsInTown.example = [ {
	title: "Check if there are more than 5 enemy units, except villagers, inside sn-maximum-town-size.",
	data: "(defrule\r\n\t(up-enemy-units-in-town &gt; 5)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpEnemyUnitsInTown.relatedCommands = [];

//up-enemy-villagers-in-town
cUpEnemyVillagersInTown.shortDescription = "Check the number of targetable enemy villagers in town.";
cUpEnemyVillagersInTown.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpEnemyVillagersInTown.example = [ {
	title: "Check if there are at least 2 enemy villagers inside sn-maximum-town-size.",
	data: "(defrule\r\n\t(up-enemy-villagers-in-town &gt;= 2)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpEnemyVillagersInTown.relatedCommands = [];

//up-filter-distance
cUpFilterDistance.shortDescription = "Set distance parameters for the direct targeting system.";
cUpFilterDistance.description = "Set distance parameters for the direct targeting system. If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.";
cUpFilterDistance.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pMinDistance.getLink(),
	name: "MinDistance",
	type: "Op",
	dir: "in",
	range: "-1 to 32767",
	note: "The minimum acceptable distance from the point specified by up-set-target-point."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pMaxDistance.getLink(),
	name: "MaxDistance",
	type: "Op",
	dir: "in",
	range: "-1 to 32767",
	note: "The maximum acceptable distance from the point specified by up-set-target-point."
} ];
cUpFilterDistance.example = [ {
	title: "Configure the search system to only select units within 10 tiles of the target point.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-distance c: -1 c: 10)\r\n)"
} ];
cUpFilterDistance.relatedCommands = [];

//up-filter-exclude
cUpFilterExclude.shortDescription = "Set exclude parameters for the direct targeting system.";
cUpFilterExclude.description = "Set exclude parameters for the direct targeting system. If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.";
cUpFilterExclude.commandParameters = [ {
	nameLink: pCmdId.getLink(),
	name: "CmdId",
	type: "Const",
	dir: "in",
	range: "-1 to 10",
	note: "The command id to reject."
}, {
	nameLink: pActionId.getLink(),
	name: "ActionId",
	type: "Const",
	dir: "in",
	range: "-1, 600 to 699",
	note: "The action id to reject."
}, {
	nameLink: pOrderId.getLink(),
	name: "OrderId",
	type: "Const",
	dir: "in",
	range: "-1, 700 to 799",
	note: "The order id to reject."
}, {
	nameLink: pClassId.getLink(),
	name: "ClassId",
	type: "Const",
	dir: "in",
	range: "a valid ClassId",
	note: "Reject units of the specified class."
} ];
cUpFilterExclude.example = [ {
	title: "Configure the search system to reject units with the trade command id.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-exclude 5 -1 -1 -1)\r\n)"
} ];
cUpFilterExclude.relatedCommands = [];

//up-filter-garrison
cUpFilterGarrison.shortDescription = "Set garrison parameters for the direct targeting system.";
cUpFilterGarrison.description = "Set garrison parameters for the direct targeting system. If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.";
cUpFilterGarrison.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pMinGarrison.getLink(),
	name: "MinGarrison",
	type: "Op",
	dir: "in",
	range: "-1 to 32767",
	note: "The minimum acceptable value for objects garrisoned."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pMaxGarrison.getLink(),
	name: "MaxGarrison",
	type: "Op",
	dir: "in",
	range: "-1 to 32767",
	note: "The maximum acceptable value for objects garrisoned."
} ];
cUpFilterGarrison.example = [ {
	title: "Configure the search system to only select units with at least 5 garrisoned units.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-garrison c: 5 c: -1)\r\n)"
} ];
cUpFilterGarrison.relatedCommands = [];

//up-filter-include
cUpFilterInclude.shortDescription = "Set include parameters for the direct targeting system.";
cUpFilterInclude.description = "Set include parameters for the direct targeting system. If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.";
cUpFilterInclude.commandParameters = [ {
	nameLink: pCmdId.getLink(),
	name: "CmdId",
	type: "Const",
	dir: "in",
	range: "-1 to 10",
	note: "The command id to select."
}, {
	nameLink: pActionId.getLink(),
	name: "ActionId",
	type: "Const",
	dir: "in",
	range: "-1, 600 to 699",
	note: "The action id to select."
}, {
	nameLink: pOrderId.getLink(),
	name: "OrderId",
	type: "Const",
	dir: "in",
	
	range: "-1, 700 to 799",
	note: "The order id to select."
}, {
	nameLink: pOnMainland.getLink(),
	name: "OnMainland",
	type: "Const",
	dir: "in",
	range: "-1, 0, or 1",
	note: "If set to 1, select only objects on the mainland. If set to 0, select those not on the mainland."
} ];
cUpFilterInclude.example = [ {
	title: "Configure the search system to only select units with the villager command id.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-include 3 -1 -1 -1)\r\n)"
} ];
cUpFilterInclude.relatedCommands = [];

//up-filter-range
cUpFilterRange.shortDescription = "Set range parameters for the direct targeting system.";
cUpFilterRange.description = "Set range parameters for the direct targeting system. If any of these parameters is set to -1, then the associated condition will be ignored during search filtering.";
cUpFilterRange.commandParameters = [ {
	nameLink: pMinGarrison.getLink(),
	name: "MinGarrison",
	type: "Const",
	dir: "in",
	range: "-1 to 32767",
	note: "The minimum acceptable value for objects garrisoned."
}, {
	nameLink: pMaxGarrison.getLink(),
	name: "MaxGarrison",
	type: "Const",
	dir: "in",
	range: "-1 to 32767",
	note: "The maximum acceptable value for objects garrisoned."
}, {
	nameLink: pMinDistance.getLink(),
	name: "MinDistance",
	type: "Const",
	dir: "in",
	range: "-1 to 32767",
	note: "The minimum acceptable distance from the point specified by up-set-target-point."
}, {
	nameLink: pMaxDistance.getLink(),
	name: "MaxDistance",
	type: "Const",
	dir: "in",
	range: "-1 to 32767",
	note: "The maximum acceptable distance from the point specified by up-set-target-point."
} ];
cUpFilterRange.example = [ {
	title: "Configure the search system to only select units within 10 tiles of the target point.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-range -1 -1 -1 10)\r\n)"
} ];
cUpFilterRange.relatedCommands = [];

//up-filter-status
cUpFilterStatus.shortDescription = "Set the object status value for use with up-find-status.";
cUpFilterStatus.description = "Set the object status value for use with up-find-status. The default (after up-reset-filters) is 2, which should match most active objects. Buildings that are incomplete have a status of 0, while certain resources have a status of 3. For remote search, up-find-remote can match enemy status values 0 to 3 if you search by object type id instead of class id.";
cUpFilterStatus.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectStatus.getLink(),
	name: "ObjectStatus",
	type: "Op",
	dir: "in",
	range: "a value from the ObjectStatus enumeration",
	note: "The status value for matching."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectList.getLink(),
	name: "ObjectList",
	type: "Op",
	dir: "in",
	range: "a value from the ObjectList enumeration",
	note: "The list to search for local or allied objects (remote objects are handled separately)."
} ];
cUpFilterStatus.example = [ {
	title: "Configure the system and search for only incomplete castles.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-status c: status-pending c: list-active)\r\n\t(up-find-status-local c: castle c: 5)\r\n)"
} ];
cUpFilterStatus.relatedCommands = [];

//up-find-flare
cUpFindFlare.shortDescription = "Read the (x,y) position of an allied flare into an extended goal pair.";
cUpFindFlare.description = "Read the (x,y) position of an allied flare into an extended goal pair. This command writes to 2 consecutive goals and requires an extended goal pair between 41 and 510. If it fails to get a valid position, it will return (-1,-1). This command is equivalent to up-find-player-flare with any-ally.";
cUpFindFlare.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
} ],
cUpFindFlare.example = [ {
	title: "Get the position of the latest ally flare.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(unit-type-count flare > 0) ; flare = 274\r\n=&gt;\r\n\t(up-find-flare gl-point-x)\r\n)"
} ];
cUpFindFlare.relatedCommands = [];

//up-find-local
cUpFindLocal.shortDescription = "Find objects owned by the local player for direct targeting.";
cUpFindLocal.description = "Find objects owned by the local player for direct targeting. If UnitId changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.";
cUpFindLocal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The unit type that will be selected."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pCount.getLink(),
	name: "Count",
	type: "Op",
	dir: "in",
	range: "0 to 240",
	note: "The number of results to find."
} ];
cUpFindLocal.example = [ {
	title: "Find up to 20 infantry units owned by the player.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-find-local c: infantry-class c: 20) ; infantry-class = 906\r\n)"
} ];
cUpFindLocal.relatedCommands = [];

//up-find-next-player
cUpFindNextPlayer.shortDescription = "Find the next active player based on the provided information.";
cUpFindNextPlayer.commandParameters = [ {
	nameLink: pPlayerStance.getLink(),
	name: "PlayerStance",
	type: "Const",
	dir: "in",
	range: "any, ally, neutral, enemy",
	note: "The stance of the player to find."
}, {
	nameLink: pFindPlayerMethod.getLink(),
	name: "FindPlayerMethod",
	type: "Const",
	dir: "in",
	range: "find-attacker, find-random, find-closest, find-ordered",
	note: "The search method."
}, {
	nameLink: pPlayerId.getLink(),
	name: "PlayerId",
	type: "Goal",
	dir: "io",
	range: "a GoalId",
	note: "Stores the PlayerId of the match, while providing the basis to begin the search."
} ];
cUpFindNextPlayer.example = [ {
	title: "Store the second closest enemy player into gl-player.",
	data: "(defconst gl-player 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-find-player enemy find-closest gl-player)\r\n\t(up-find-next-player enemy find-closest gl-player)\r\n)"
} ];
cUpFindNextPlayer.relatedCommands = [];

//up-find-player
cUpFindPlayer.shortDescription = "Find the first active player based on the provided information.";
cUpFindPlayer.commandParameters = [ {
	nameLink: pPlayerStance.getLink(),
	name: "PlayerStance",
	type: "Const",
	dir: "in",
	range: "any, ally, neutral, enemy",
	note: "The stance of the player to find."
}, {
	nameLink: pFindPlayerMethod.getLink(),
	name: "FindPlayerMethod",
	type: "Const",
	dir: "in",
	range: "find-attacker, find-random, find-closest, find-ordered",
	note: "The search method."
}, {
	nameLink: pPlayerId.getLink(),
	name: "PlayerId",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the PlayerId of the match."
} ];
cUpFindPlayer.example = [ {
	title: "Store the closest enemy player into gl-player.",
	data: "(defconst gl-player 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-find-player enemy find-closest gl-player)\r\n)"
} ];
cUpFindPlayer.relatedCommands = [];

//up-find-player-flare
cUpFindPlayerFlare.shortDescription = "Read the (x,y) position of any visible flare into an extended goal pair.";
cUpFindPlayerFlare.description = "Read the (x,y) position of any visible flare into an extended goal pair. This command writes to 2 consecutive goals and requires an extended goal pair between 41 and 510. If it fails to get a valid position, it will return (-1,-1).";
cUpFindPlayerFlare.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "a PlayerId for: any",
	note: "The player(s) to check."
}, {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
} ];
cUpFindPlayerFlare.example = [ {
	title: "Get the position of any enemy flare.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(unit-type-count flare > 0) ; flare = 274\r\n=&gt;\r\n\t(up-find-player-flare any-enemy gl-point-x)\r\n)"
} ];
cUpFindPlayerFlare.relatedCommands = [];

//up-find-remote
cUpFindRemote.shortDescription = "Find objects owned by the focus player for direct targeting.";
cUpFindRemote.description = "Find objects owned by the focus player for direct targeting. Set sn-focus-player-number before using this command. If the focus or UnitId changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.";
cUpFindRemote.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The unit type that will be selected."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pCount.getLink(),
	name: "Count",
	type: "Op",
	dir: "in",
	range: "0 to 40",
	note: "The number of results to find."
} ];
cUpFindRemote.example = [ {
	title: "Find up to 4 castles owned by the enemy, player 2.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-focus-player-number 2)\r\n\t(up-find-remote c: castle c: 4)\r\n)"
} ];
cUpFindRemote.relatedCommands = [];

//up-find-resource
cUpFindResource.shortDescription = "Find gatherable resource objects for direct targeting.";
cUpFindResource.description = "Find gatherable resource objects for direct targeting. This command stores data in the remote list and it will consider the status value set by up-filter-status. To find stone, gold, fallen trees, and other directly gatherable resources, status-resource is required. For standing trees and living objects, status-ready is required. Please ensure the proper status is set before searching. The remote index will reset automatically when switching between this command and other remote search commands like up-find-remote. If Resource changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.";
cUpFindResource.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Op",
	dir: "in",
	range: "food, wood, stone, gold, or the UnitId of a food resource",
	note: "The resource to find."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pCount.getLink(),
	name: "Count",
	type: "Op",
	dir: "in",
	range: "0 to 240",
	note: "The number of results to find."
} ];
cUpFindResource.example = [ {
	title: "Find 2 sighted gold mines and store them in remote results.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-full-reset-search)\r\n\t(up-filter-status c: status-resource c: list-active)\r\n\t(up-find-resource c: gold c: 2)\r\n)"
} ];
cUpFindResource.relatedCommands = [];

//up-find-status-local
cUpFindStatusLocal.shortDescription = "Find objects owned by the local player filtered by status.";
cUpFindStatusLocal.description = "Find objects owned by the local player filtered by status. This is identical to up-find-local, except it will consider the status value set by up-filter-status. If UnitId changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.";
cUpFindStatusLocal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The unit type that will be selected."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pCount.getLink(),
	name: "Count",
	type: "Op",
	dir: "in",
	range: "0 to 240",
	note: "The number of results to find."
} ];
cUpFindStatusLocal.example = [ {
	title: "Find up to 20 infantry units owned by the player.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-filter-status c: status-ready c: list-active)\r\n\t(up-find-status-local c: infantry-class c: 20) ; infantry-class = 906\r\n)"
} ];
cUpFindStatusLocal.relatedCommands = [];

//up-find-status-remote
cUpFindStatusRemote.shortDescription = "Find objects owned by the focus player for direct targeting.";
cUpFindStatusRemote.description = "Find objects owned by the focus player for direct targeting. Set sn-focus-player-number before using this command. This is identical to up-find-remote, except it will consider the status value set by up-filter-status. If the focus or UnitId changes, the search index offset will be reset. Otherwise, it will continue from where it left off. This command can be used as either a Fact or an Action.";
cUpFindStatusRemote.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The unit type that will be selected."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pCount.getLink(),
	name: "Count",
	type: "Op",
	dir: "in",
	range: "0 to 240",
	note: "The number of results to find."
} ];
cUpFindStatusRemote.example = [ {
	title: "Find up to 4 castles owned by the enemy, player 2.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-focus-player-number 2)\r\n\t(up-find-status-remote c: castle c: 4)\r\n)"
} ];
cUpFindStatusRemote.relatedCommands = [];

//up-full-reset-search
cUpFullResetSearch.shortDescription = "Reset all search and filter states for direct unit targeting.";
cUpFullResetSearch.description = "Reset all search and filter states for direct unit targeting. This command simply combines (up-reset-search 1 1 1 1) and (up-reset-filters) for rule size optimization.";
cUpFullResetSearch.commandParameters = [];
cUpFullResetSearch.example = [ {
	title: "Clear all search and filter states.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-full-reset-search)\r\n)"
}];
cUpFullResetSearch.relatedCommands = [];

//up-gaia-type-count
cUpGaiaTypeCount.shortDescription = "Check the current sighted resource count from gaia.";
cUpGaiaTypeCount.description = "Check the current sighted resource count from gaia. This command may be relatively slow, since it must check the status of all discovered resources within the requested subset (food, wood, stone, or gold).";
cUpGaiaTypeCount.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, gold, or the UnitId of the resource",
	note: "The resource to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpGaiaTypeCount.example = [ {
	title: "Check if at least 4 sighted gold mines still exist.",
	data: "(defrule\r\n\t(up-gaia-type-count c: gold &gt;= 4)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
}, {
	title: "Check if more than 6 sighted sheep or turkeys remain.",
	data: "(defrule\r\n\t(up-gaia-type-count c: livestock-class &gt; 6) ; livestock-class = 958\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpGaiaTypeCount.relatedCommands = [];

//up-gaia-type-count-total
cUpGaiaTypeCountTotal.shortDescription = "Check the total sighted resource count from gaia.";
cUpGaiaTypeCountTotal.description = "Check the total sighted resource count from gaia. When checking food, wood, stone, or gold, this command operates very quickly. However, the required data does not exist for specific food types, including deer and sheep. As a fallback, it will redirect to the slower up-gaia-type-count, and the result will only reflect resources that still exist.";
cUpGaiaTypeCountTotal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, gold, or the UnitId of the resource",
	note: "The resource to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpGaiaTypeCountTotal.example = [ {
	title: "Check if the AI has discovered over 100 trees, which may or may not still exist.",
	data: "(defrule\r\n\t(up-gaia-type-count-total c: wood &gt; 100)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
}, {
	title: "Check if less than 2 sighted deer remain (redirect to up-gaia-type-count).",
	data: "(defrule\r\n\t(up-gaia-type-count-total c: deer &lt; 2)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpGaiaTypeCountTotal.relatedCommands = [];

//up-garrison
cUpGarrison.shortDescription = "Garrison all units of the specified type into another object.";
cUpGarrison.description = "Garrison all units of the specified type into another object. The first parameter cannot be a class or a unit-line. It must be a valid root object type id that can accept a garrison (battering-ram instead of battering-ram-line).";
cUpGarrison.commandParameters = [ {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Const",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The type of object that will hold the units."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The type of unit that will be garrisoned."
} ];
cUpGarrison.example = [ {
	title: "Garrison all available infantry into battering rams.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-garrison battering-ram c: infantry-class) ; infantry-class = 906\r\n\t(disable-self)\r\n)"
}, {
	title: "Garrison all available archers into towers.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-garrison watch-tower c: archer-line)\r\n\t(disable-self)\r\n)"
} ];
cUpGarrison.relatedCommands = [];

//up-gather-inside
cUpGatherInside.shortDescription = "Set all existing buildings of a specific type to hold units inside.";
cUpGatherInside.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The type of building that will be modified."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pState.getLink(),
	name: "State",
	type: "Op",
	dir: "in",
	range: "0, 1, or -1",
	note: "If set to 1, both trained and garrisoned units will be held inside the building. If set to -1, only garrisoned units will be held inside. Otherwise, all units will be released as usual."
} ];
cUpGatherInside.example = [ {
	title: "Set existing docks to keep ships inside while training, then release them once the AI has 10 warships.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-gather-inside c: dock c: 1)\r\n\t(disable-self)\r\n)\r\n(defrule\r\n\t(unit-type-count warship-class &gt;= 10) ; warship-class = 922\r\n=&gt;\r\n\t(up-gather-inside c: dock c: 0)\r\n)"
}, {
	title: "Prevent existing town centers from releasing garrisoned units, but allow villagers to be trained.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-gather-inside c: town-center c: -1)\r\n\t(disable-self)\r\n)"
} ];
cUpGatherInside.relatedCommands = [];

//up-get-attacker-class
cUpGetAttackerClass.shortDescription = "Get the class of the last enemy object to trigger town-under-attack.";
cUpGetAttackerClass.commandParameters = [ {
	nameLink: pSourceClass.getLink(),
	name: "SourceClass",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the class of the attacking object."
} ];
cUpGetAttackerClass.example = [ {
	title: "Store the class of the attacking object in gl-class.",
	data: "(defconst gl-class 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-attacker-class gl-class)\r\n)"
} ];
cUpGetAttackerClass.relatedCommands = [];

//up-get-cost-delta
cUpGetCostDelta.shortDescription = "Get the difference between player resources and the current cost data.";
cUpGetCostDelta.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 508",
	note: "The first of 4 consecutive goals to store the cost delta for food, wood, stone, and gold."
} ];
cUpGetCostDelta.example = [ {
	title: "Store the resource difference into the 4 goals starting with gl-delta-food.",
	data: "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defconst gl-delta-food 121)\r\n(defconst gl-delta-wood 122)\r\n(defconst gl-delta-stone 123)\r\n(defconst gl-delta-gold 124)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 1 gl-cost-food)\r\n\t(up-add-object-cost c: archer-line c: 10)\r\n\t(up-get-cost-delta gl-delta-food)\r\n\t(disable-self)\r\n)"
} ];
cUpGetCostDelta.relatedCommands = [];

//up-get-event
cUpGetEvent.shortDescription = "Get the value of a scenario trigger event.";
cUpGetEvent.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pEventId.getLink(),
	name: "EventId",
	type: "Op",
	dir: "in",
	range: "0 to 255",
	note: "The event to get."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the event value."
} ];
cUpGetEvent.example = [ {
	title: "Get the value of event id 0.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-event c: 0 gl-value)\r\n)"
} ];
cUpGetEvent.relatedCommands = [];

//up-get-fact
cUpGetFact.shortDescription = "Read a fact for my-player-number into a goal.";
cUpGetFact.description = "Read a fact for my-player-number into a goal. This command can be used as either a fact or an action.";
cUpGetFact.commandParameters = [ {
	nameLink: pFactId.getLink(),
	name: "FactId",
	type: "Const",
	dir: "in",
	range: "a const from the FactId enumeration",
	note: "The fact to query."
}, {
	nameLink: pParam.getLink(),
	name: "Param",
	type: "Const",
	dir: "in",
	range: "an appropriate parameter for the fact, or 0 if not required",
	note: "A parameter for the fact."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the result of the fact."
} ];
cUpGetFact.example = [ {
	title: "Store the military-population value into gl-data.",
	data: "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-fact military-population 0 gl-data)\r\n)"
} ];
cUpGetFact.relatedCommands = [];

//up-get-fact-max
cUpGetFactMax.shortDescription = "Read the maximum value of the facts for specific players into a goal.";
cUpGetFactMax.description = "Read the maximum value of the facts for specific players into a goal. This command can be used as either a fact or an action. The matching player will be set to the this-any-* wildcard player id for use in the action section of the rule.",
cUpGetFactMax.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "only an any-* wildcard PlayerId",
	note: "The player to check."
}, {
	nameLink: pFactId.getLink(),
	name: "FactId",
	type: "Const",
	dir: "in",
	range: "a const from the FactId enumeration",
	note: "The fact to query."
}, {
	nameLink: pParam.getLink(),
	name: "Param",
	type: "Const",
	dir: "in",
	range: "an appropriate parameter for the fact, or 0 if not required",
	note: "A parameter for the fact."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the maximum value of the facts."
} ];
cUpGetFactMax.example = [ {
	title: "Store the maximum ally score into gl-data.",
	data: "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-fact-max any-ally current-score 0 gl-data)\r\n)"
} ];
cUpGetFactMax.relatedCommands = [];

//up-get-fact-min
cUpGetFactMin.shortDescription = "Read the minimum value of the facts for specific players into a goal.";
cUpGetFactMin.description = "Read the minimum value of the facts for specific players into a goal. This command can be used as either a fact or an action. The matching player will be set to the this-any-* wildcard player id for use in the action section of the rule.";
cUpGetFactMin.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "only an any-* wildcard PlayerId",
	note: "The player to check."
}, {
	nameLink: pFactId.getLink(),
	name: "FactId",
	type: "Const",
	dir: "in",
	range: "a const from the FactId enumeration",
	note: "The fact to query."
}, {
	nameLink: pParam.getLink(),
	name: "Param",
	type: "Const",
	dir: "in",
	range: "an appropriate parameter for the fact, or 0 if not required",
	note: "A parameter for the fact."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the minimum value of the facts."
} ];
cUpGetFactMin.example = [ {
	title: "Store the minimum enemy score into gl-data.",
	data: "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-fact-min any-enemy current-score 0 gl-data)\r\n)"
} ];
cUpGetFactMin.relatedCommands = [];

//up-get-fact-sum
cUpGetFactSum.shortDescription = "Read the sum of facts for specific players into a goal.";
cUpGetFactSum.description = "Read the sum of facts for specific players into a goal. This command can be used as either a fact or an action.";
cUpGetFactSum.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "only an any-* wildcard PlayerId",
	note: "The player to check."
}, {
	nameLink: pFactId.getLink(),
	name: "FactId",
	type: "Const",
	dir: "in",
	range: "a const from the FactId enumeration",
	note: "The fact to query."
}, {
	nameLink: pParam.getLink(),
	name: "Param",
	type: "Const",
	dir: "in",
	range: "an appropriate parameter for the fact, or 0 if not required",
	note: "A parameter for the fact."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the sum of the facts."
} ];
cUpGetFactSum.example = [ {
	title: "Store the sum of enemy military-population values into gl-data.",
	data: "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-fact-sum any-enemy military-population 0 gl-data)\r\n)"
} ];
cUpGetFactSum.relatedCommands = [];

//up-get-focus-fact
cUpGetFocusFact.shortDescription = "Read a fact for the focus-player into a goal.";
cUpGetFocusFact.description = "Read a fact for the focus-player into a goal. This command can be used as either a fact or an action.";
cUpGetFocusFact.commandParameters = [ {
	nameLink: pFactId.getLink(),
	name: "FactId",
	type: "Const",
	dir: "in",
	range: "a const from the FactId enumeration",
	note: "The fact to query."
}, {
	nameLink: pParam.getLink(),
	name: "Param",
	type: "Const",
	dir: "in",
	range: "an appropriate parameter for the fact, or 0 if not required",
	note: "A parameter for the fact."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the result of the fact."
} ];
cUpGetFocusFact.example = [ {
	title: "Store the focus population value into gl-data.",
	data: "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-focus-fact population 0 gl-data)\r\n)"
} ];
cUpGetFocusFact.relatedCommands = [];

//up-get-group-size
cUpGetGroupSize.shortDescription = "Get the current number of units in a search group.";
cUpGetGroupSize.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pGroupId.getLink(),
	name: "GroupId",
	type: "Op",
	dir: "in",
	range: "0 to 9",
	note: "The group id."
}, {
	nameLink: pSize.getLink(),
	name: "Size",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the group size."
} ];
cUpGetGroupSize.example = [ {
	title: "Get the first search group's size.",
	data: "(defconst gl-size 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-group-size c: 0 gl-size)\r\n)"
} ];
cUpGetGroupSize.relatedCommands = [];

//up-get-guard-state
cUpGetGuardState.shortDescription = "Get the guard state into 4 consecutive extended goals.";
cUpGetGuardState.description = "Get the guard state into 4 consecutive extended goals. The goals will be filled with data in the following order: TypeId, ResourceAmount, ResourceDelta, GuardFlags. Please use up-compare-flag to check the guard flags. If guard-flag-resource is set in GuardFlags, then ResourceDelta/100 will slowly be added to ResourceAmount as long as TypeId objects remain. If both guard-flag-resource and guard-flag-inverse are set, then the resources will be added only when there are no TypeId objects left. If the guard-flag-victory condition is set, the AI will be defeated if no TypeId objects remain.";
cUpGetGuardState.commandParameters = [ {
	nameLink: pState.getLink(),
	name: "State",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 508",
	note: "The first of 4 consecutive goals to read the state."
} ];
cUpGetGuardState.example = [ {
	title: "Check if the AI will be defeated if the guard type is lost.",
	data: "(defconst gl-guard-type 100)\r\n(defconst gl-guard-resource 101)\r\n(defconst gl-guard-delta 102)\r\n(defconst gl-guard-flags 103)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-guard-state gl-guard-type)\r\n)\r\n(defrule\r\n\t(up-compare-flag gl-guard-flags == guard-flag-victory)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
}, {
	title: "Check if the AI will gain resources while protecting the guard type.",
	data: "(defconst gl-guard-type 100)\r\n(defconst gl-guard-resource 101)\r\n(defconst gl-guard-delta 102)\r\n(defconst gl-guard-flags 103)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-guard-state gl-guard-type)\r\n)\r\n(defrule\r\n\t(up-compare-goal gl-guard-delta > 0)\r\n\t(up-compare-flag gl-guard-flags == guard-flag-resource)\r\n\t(up-compare-flag gl-guard-flags != guard-flag-inverse)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpGetGuardState.relatedCommands = [];

//up-get-indirect-goal
cUpGetIndirectGoal.shortDescription = "Get the value of a goal indirectly by reference.";
cUpGetIndirectGoal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pGoalId.getLink(),
	name: "GoalId",
	type: "Op",
	dir: "in",
	range: "1 to 512",
	note: "The goal to get."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the goal value."
} ];
cUpGetIndirectGoal.example = [ {
	title: "Get the value of goal id 1 indirectly using goal id 10.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal 10 1)\r\n\t(up-get-indirect-goal g: 10 gl-value)\r\n)"
} ];
cUpGetIndirectGoal.relatedCommands = [];

//up-get-object-data
cUpGetObjectData.shortDescription = "Get specific information about the selected target object.";
cUpGetObjectData.description = "Get specific information about the selected target object. This command can be used as either a Fact or an Action.";
cUpGetObjectData.commandParameters = [ {
	nameLink: pObjectData.getLink(),
	name: "ObjectData",
	type: "Const",
	dir: "in",
	range: "a value from the ObjectData enumeration",
	note: "The type of data to retrieve."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the result or -2 to indicate failure."
} ];
cUpGetObjectData.example = [ {
	title: "Get the class id of the target object.",
	data: "(defconst gl-data 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-object-data object-data-class gl-data)\r\n)"
} ];
cUpGetObjectData.relatedCommands = [];

//up-get-object-target-data
cUpGetObjectTargetData.shortDescription = "Get specific information about the target object's target.";
cUpGetObjectTargetData.description = "Get specific information about the target object's target. This command can be used as either a Fact or an Action.";
cUpGetObjectTargetData.commandParameters = [ {
	nameLink: pObjectData.getLink(),
	name: "ObjectData",
	type: "Const",
	dir: "in",
	range: "a value from the ObjectData enumeration",
	note: "The type of data to retrieve."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the result or -2 to indicate failure."
} ];
cUpGetObjectTargetData.example = [{
	title: "Get the class id of the target object's target.",
	data: "(defconst gl-data 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-object-target-data object-data-class gl-data)\r\n)"
} ];
cUpGetObjectTargetData.relatedCommands = [];

//up-get-object-type-data
cUpGetObjectTypeData.shortDescription = "Get generic information about an object type.";
cUpGetObjectTypeData.description = "Get generic information about an object type. This can be expensive, so please consider performance.";
cUpGetObjectTypeData.commandParameters = [{
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTypeId.getLink(),
	name: "TypeId",
	type: "Op",
	dir: "in",
	range: "a valid TypeId",
	note: "The type id."
}, {
	nameLink: pObjectData.getLink(),
	name: "ObjectData",
	type: "Const",
	dir: "in",
	range: "a value from the ObjectData enumeration",
	note: "The type of data to retrieve."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the result or -2 to indicate failure."
} ];
cUpGetObjectTypeData.example = [ {
	title: "Get the train site for skirmisher-line.",
	data: "(defconst gl-data 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-object-type-data c: skirmisher-line object-data-train-site gl-data)\r\n)"
} ];
cUpGetObjectTypeData.relatedCommands = [];

//up-get-path-distance
cUpGetPathDistance.shortDescription = "Get the distance from the target object to a specified point goal pair.";
cUpGetPathDistance.description = "Get the distance from the target object to a specified point goal pair. This will return 65535 if the point is unreachable.";
cUpGetPathDistance.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pStrict.getLink(),
	name: "Strict",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to require an open destination tile or 0 to allow for a few tiles of separation."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the result or -2 to indicate failure."
} ];
cUpGetPathDistance.example = [ {
	title: "Get the path distance to the map center.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-distance 200)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-path-distance gl-center-x 0 gl-distance)\r\n)"
} ];
cUpGetPathDistance.relatedCommands = [];

//up-get-player-color
cUpGetPlayerColor.shortDescription = "Get the color id and store the name in the internal buffer.";
cUpGetPlayerColor.description = "Get the color id and store the name in the internal butter. ColorId will range from 1 to 8. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.";
cUpGetPlayerColor.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "a single PlayerId for: self, this-any",
	note: "The player to get."
}, {
	nameLink: pColorId.getLink(),
	name: "ColorId",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the color id."
} ];
cUpGetPlayerColor.example = [ {
	title: "Get the color of the target-player.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-player-color target-player gl-value)\r\n\t(up-chat-data-to-all &quot;Target: %s&quot; c: 7031232)\r\n)"
} ];
cUpGetPlayerColor.relatedCommands = [];

//up-get-player-fact
cUpGetPlayerFact.shortDescription = "Read a fact for a specific player into a goal.";
cUpGetPlayerFact.description = "Read a fact for a specific player into a goal. This command can be used as either a fact or an action. For better performance, please use one of the more direct commands from the up-get-fact series whenever possible.";
cUpGetPlayerFact.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "a single PlayerId for: self, this-any",
	note: "The player to check."
}, {
	nameLink: pFactId.getLink(),
	name: "FactId",
	type: "Const",
	dir: "in",
	range: "a const from the FactId enumeration",
	note: "The fact to query."
}, {
	nameLink: pParam.getLink(),
	name: "Param",
	type: "Const",
	dir: "in",
	range: "an appropriate parameter for the fact, or 0 if not required",
	note: "A parameter for the fact."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the result of the fact."
} ];
cUpGetPlayerFact.example = [ {
	title: "Store the civilian-population value for player 2 into gl-data.",
	data: "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-player-fact 2 civilian-population 0 gl-data)\r\n)"
} ];
cUpGetPlayerFact.relatedCommands = [];

//up-get-precise-time
cUpGetPreciseTime.shortDescription = "Get a system timestamp or the elapsed time into a goal.";
cUpGetPreciseTime.commandParameters = [ {
	nameLink: pStart.getLink(),
	name: "Start",
	type: "Goal",
	dir: "in",
	range: "a valid GoalId to get elapsed time, or 0 to get a timestamp",
	note: "Determines whether a timestamp or elapsed time is retrieved."
}, {
	nameLink: pTime.getLink(),
	name: "Time",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the time data."
} ];
cUpGetPreciseTime.example = [ {
	title: "Get the current timestamp.",
	data: "(defconst gl-start-time 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-precise-time 0 gl-start-time)\r\n\t(disable-self)\r\n)"
}, {
	title: "Get the elapsed time since the starting timestamp.",
	data: "(defconst gl-start-time 100)\r\n(defconst gl-elapsed-time 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-precise-time gl-start-time gl-elapsed-time)\r\n\t(disable-self)\r\n)"
} ];
cUpGetPreciseTime.relatedCommands = [];

//up-get-point
cUpGetPoint.shortDescription = "Read a specific (x,y) position into an extended goal pair.";
cUpGetPoint.description = "Read a specific (x,y) position into an extended goal pair. This command writes to 2 consecutive goals and requires an extended goal pair between 41 and 510. If it fails to get a valid position, it will return (-1,-1).";
cUpGetPoint.commandParameters = [ {
	nameLink: pPositionType.getLink(),
	name: "PositionType",
	type: "Const",
	dir: "in",
	range: "a member of the PositionType enumeration",
	note: "The position to read."
}, {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
} ];
cUpGetPoint.example = [ {
	title: "Get the position of the map center.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n)"
}, {
	title: "Get the position of the target player.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-target gl-point-x)\r\n)"
} ];
cUpGetPoint.relatedCommands = [];

//up-get-point-contains
cUpGetPointContains.shortDescription = "Get the id if an object exists at a point goal pair position.";
cUpGetPointContains.description = "Get the id if an object exists at a point goal pair position. Set Point to 0 to use the point that is stored by up-set-target-point. Please note that when used with all-units-class (-1), this may capture unexpected objects like birds flying over a tile, terrain plants, etc. This command can be used as either a Fact or an Action.</p><p>Also, this action will work whether the point has been explored or not. Therefore, in AI tournaments " + cUpPointExplored.getLink() + " must be used as a condition in every rule where this command is used.";
cUpGetPointContains.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pGoalId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "The zero-based id of the object."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Op",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object to check."
} ];
cUpGetPointContains.example = [ {
	title: "Get the id of a tree if it exists at the map center.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-tree-id 102)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-explored gl-center-x c: explored-yes)\r\n\t(up-get-point-contains gl-center-x gl-tree-id c: tree-class) ; tree-class = 915\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpGetPointContains.relatedCommands = [];

//up-get-point-distance
cUpGetPointDistance.shortDescription = "Get the distance between two point goal pairs.";
cUpGetPointDistance.description = "Get the distance between two point goal pairs. Set Point2 to 0 to use the point that is stored by up-set-target-point.";
cUpGetPointDistance.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pDistance.getLink(),
	name: "Distance",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the distance between the two points."
} ];
cUpGetPointDistance.example = [ {
	title: "Get the distance from the home town-center to the map center.",
	data: "(defconst gl-self-x 100)\r\n(defconst gl-self-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defconst gl-distance 300)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-self-x)\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-point-distance gl-self-x gl-center-x gl-distance)\r\n)"
} ];
cUpGetPointDistance.relatedCommands = [];

//up-get-point-elevation
cUpGetPointElevation.shortDescription = "Get the elevation for a tile with a point goal pair.";
cUpGetPointElevation.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the result or -2 to indicate failure."
} ];
cUpGetPointElevation.example = [ {
	title: "Get the elevation at the map center.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-center-z 200)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-point-elevation gl-center-x gl-center-z)\r\n)"
} ];
cUpGetPointElevation.relatedCommands = [];

//up-get-point-terrain
cUpGetPointTerrain.shortDescription = "Get the terrain id at a specific point goal pair position.";
cUpGetPointTerrain.description = "Get the terrain id at a specific point goal pair position. Set Point to 0 to use the point that is stored by up-set-target-point.";
cUpGetPointTerrain.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTerrain.getLink(),
	name: "Terrain",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the terrain id at the position."
} ];
cUpGetPointTerrain.example = [ {
	title: "Get the terrain id at the map center.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-terrain 200)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-point-terrain gl-center-x gl-terrain)\r\n)"
} ];
cUpGetPointTerrain.relatedCommands = [];

//up-get-point-zone
cUpGetPointZone.shortDescription = "Get the zone for a tile with a point goal pair.";
cUpGetPointZone.description = "Get the zone for a tile with a point goal pair. Zone ids may differ if you have no villagers.";
cUpGetPointZone.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the result or -2 to indicate failure."
} ];
cUpGetPointZone.example = [ {
	title: "Get the zone at the map center.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defconst gl-center-z 200)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-get-point-zone gl-center-x gl-center-z)\r\n)"
} ];
cUpGetPointZone.relatedCommands = [];

//up-get-projectile-player
cUpGetProjectilePlayer.shortDescription = "Get the enemy player that last attacked with a specific type of projectile.";
cUpGetProjectilePlayer.commandParameters = [ {
	nameLink: pProjectileType.getLink(),
	name: "ProjectileType",
	type: "Const",
	dir: "in",
	range: "a const from the ProjectileType enumeration",
	note: "The source of the projectile."
}, {
	nameLink: pPlayerId.getLink(),
	name: "PlayerId",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the PlayerId of the attacker."
} ];
cUpGetProjectilePlayer.example = [ {
	title: "Store the last player to attack with castle arrows in gl-player.",
	data: "(defconst gl-player 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-projectile-player projectile-castle gl-player)\r\n)"
} ];
cUpGetProjectilePlayer.relatedCommands = [];

//up-get-rule-id
cUpGetRuleId.shortDescription = "Get the zero-based id for the current rule within the rule set.";
cUpGetRuleId.description = "Get the zero-based id for the current rule within the rule set. This id can be used with up-jump-direct to precisely control jump destinations.";
cUpGetRuleId.commandParameters = [ {
	nameLink: pRuleId.getLink(),
	name: "RuleId",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the current zero-based rule id."
} ];
cUpGetRuleId.example = [ {
	title: "Get the current rule id.",
	data: "(defconst gl-current-rule-id 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-rule-id gl-current-rule-id)\r\n)"
} ];
cUpGetRuleId.relatedCommands = [];

//up-get-search-state
cUpGetSearchState.shortDescription = "Get the search state into 4 consecutive extended goals.";
cUpGetSearchState.description = "Get the search state into 4 consecutive extended goals. The goals will be filled with data in the following order: current local search total, last local search count, current remote search total, last remote search count.";
cUpGetSearchState.commandParameters = [ {
	nameLink: pState.getLink(),
	name: "State",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 508",
	note: "The first of 4 consecutive goals to read the state."
} ];
cUpGetSearchState.example = [ {
	title: "Get the search state.",
	data: "(defconst gl-local-total 100)\r\n(defconst gl-local-last 101)\r\n(defconst gl-remote-total 102)\r\n(defconst gl-remote-last 103)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-search-state gl-local-total)\r\n)"
} ];
cUpGetSearchState.relatedCommands = [];

//up-get-shared-goal
cUpGetSharedGoal.shortDescription = "Get the value of a shared goal.";
cUpGetSharedGoal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pSharedGoalId.getLink(),
	name: "SharedGoalId",
	type: "Op",
	dir: "in",
	range: "1 to 256",
	note: "The shared goal to get."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the shared goal value."
} ];
cUpGetSharedGoal.example = [ {
	title: "Get the value of shared goal id 0.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-shared-goal c: 0 gl-value)\r\n)"
} ];
cUpGetSharedGoal.relatedCommands = [];

//up-get-signal
cUpGetSignal.shortDescription = "Get the value of a scenario trigger signal.";
cUpGetSignal.commandParameters = [{
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pSignalId.getLink(),
	name: "SignalId",
	type: "Op",
	dir: "in",
	range: "0 to 255",
	note: "The signal to get."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the signal value."
} ];
cUpGetSignal.example = [{
	title: "Get the value of signal id 0.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-signal c: 0 gl-value)\r\n)"
} ];
cUpGetSignal.relatedCommands = [];

//up-get-target-fact
cUpGetTargetFact.shortDescription = "Read a fact for the target-player into a goal.";
cUpGetTargetFact.description = "Read a fact for the target-player into a goal. This command can be used as either a fact or an action.";
cUpGetTargetFact.commandParameters = [ {
	nameLink: pFactId.getLink(),
	name: "FactId",
	type: "Const",
	dir: "in",
	range: "a const from the FactId enumeration",
	note: "The fact to query."
}, {
	nameLink: pParam.getLink(),
	name: "Param",
	type: "Const",
	dir: "in",
	range: "an appropriate parameter for the fact, or 0 if not required",
	note: "A parameter for the fact."
}, {
	nameLink: pData.getLink(),
	name: "Data",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the result of the fact."
} ];
cUpGetTargetFact.example = [ {
	title: "Store the target military-population value into gl-data.",
	data: "(defconst gl-data 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-target-fact military-population 0 gl-data)\r\n)"
} ];
cUpGetTargetFact.relatedCommands = [];

//up-get-threat-data
cUpGetThreatData.shortDescription = "Get the elapsed time, player, source, and target of the last threat.";
cUpGetThreatData.commandParameters = [ {
	nameLink: pElapsedTime.getLink(),
	name: "ElapsedTime",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the elapsed time."
}, {
	nameLink: pPlayerId.getLink(),
	name: "PlayerId",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the PlayerId of the attacker."
}, {
	nameLink: pSourceClass.getLink(),
	name: "SourceClass",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the class of the attacking object."
}, {
	nameLink: pTargetClass.getLink(),
	name: "TargetClass",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the class of the target of the attack."
} ];
cUpGetThreatData.example = [ {
	title: "Store the latest threat information from anywhere on the map.",
	data: "(defconst gl-threat-time 101)\r\n(defconst gl-threat-player 102)\r\n(defconst gl-threat-source 103)\r\n(defconst gl-threat-target 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-threat-data gl-threat-time gl-threat-player gl-threat-source gl-threat-target)\r\n)"
} ];
cUpGetThreatData.relatedCommands = [];

//up-get-timer
cUpGetTimer.shortDescription = "Get the trigger time for a timer in milliseconds.";
cUpGetTimer.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTimerId.getLink(),
	name: "TimerId",
	type: "Op",
	dir: "in",
	range: "1 to 50",
	note: "The timer to get."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the shared goal value."
} ];
cUpGetTimer.example = [ {
	title: "Get the trigger time for timer id 20.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-timer c: 20 gl-value)\r\n)"
} ];
cUpGetTimer.relatedCommands = [];

//up-get-upgrade-id
cUpGetUpgradeId.shortDescription = "Get the upgrade type id for an object into a goal.";
cUpGetUpgradeId.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "a single PlayerId for: self, this-any",
	note: "The player to get."
}, {
	nameLink: pCount.getLink(),
	name: "Count",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to get the current type id for counting."
}, {
	nameLink: pTypeId.getLink(),
	name: "TypeId",
	type: "Goal",
	dir: "in",
	range: "a valid GoalId",
	note: "Set to a valid type or line id."
}, {
	nameLink: pUpgradeId.getLink(),
	name: "UpgradeId",
	type: "Goal",
	dir: "out",
	range: "a valid GoalId",
	note: "Stores the upgrade type id."
} ];
cUpGetUpgradeId.example = [ {
	title: "Get the current upgrade type id for militia.",
	data: "(defconst gl-type 100)\r\n(defconst gl-upgrade 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal gl-type militiaman-line)\r\n\t(up-get-upgrade-id my-player-number 0 gl-type gl-upgrade)\r\n\t(up-store-type-name g: gl-upgrade)\r\n\t(up-chat-data-to-all &quot;Upgrade: %s&quot; c: 7031232)\r\n)"
} ];
cUpGetUpgradeId.relatedCommands = [];

//up-get-victory-data
cUpGetVictoryData.shortDescription = "Get standard victory status information into the provided goals.";
cUpGetVictoryData.commandParameters = [{
	nameLink: pPlayerId.getLink(),
	name: "PlayerId",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores the PlayerId of the player approaching victory, or 0 if invalid."
}, {
	nameLink: pType.getLink(),
	name: "Type",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores one of the following: relic, wonder, monument, or 0 if invalid."
}, {
	nameLink: pTime.getLink(),
	name: "Time",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores 10 * the game years remaining until victory, or -1 if invalid."
}];
cUpGetVictoryData.example = [{
	title: "Store current victory data into the provided goals.",
	data: "(defconst gl-victory-player 101)\r\n(defconst gl-victory-type 102)\r\n(defconst gl-victory-time 103)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-victory-data gl-victory-player gl-victory-type gl-victory-time)\r\n)"
}];
cUpGetVictoryData.relatedCommands = [];

//up-get-victory-limit
cUpGetVictoryLimit.shortDescription = "Get the time or score victory limit into the provided goal.";
cUpGetVictoryLimit.commandParameters = [{
	nameLink: pLimit.getLink(),
	name: "Limit",
	type: "Goal",
	dir: "out",
	range: "a GoalId",
	note: "Stores 10 * the remaining game years for time victory, the target amount for score victory, or -1 if invalid."
}];
cUpGetVictoryLimit.example = [{
	title: "Store the current victory limit.",
	data: "(defconst gl-victory-limit 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-victory-limit gl-victory-limit)\r\n)"
}];
cUpGetVictoryLimit.relatedCommands = [];

//up-group-size
cUpGroupSize.shortDescription = "Check the current number of units in a search group.";
cUpGroupSize.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pGroupId.getLink(),
	name: "GroupId",
	type: "Op",
	dir: "in",
	range: "0 to 9",
	note: "The group id."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpGroupSize.example = [ {
	title: "Check if the first search group has units.",
	data: "(defrule\r\n\t(up-group-size c: 0 > 0)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpGroupSize.relatedCommands = [];

//up-guard-unit
cUpGuardUnit.shortDescription = "Set a single unit of a specific type to protect a random instance of another.";
cUpGuardUnit.commandParameters = [ {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Const",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object that will be guarded."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The type of unit that will guard."
} ];
cUpGuardUnit.example = [ {
	title: "Set a single spearman to guard a random monk.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-guard-unit monk c: spearman-line)\r\n)"
} ];
cUpGuardUnit.relatedCommands = [];

//up-idle-unit-count
cUpIdleUnitCount.shortDescription = "Check the number of idle units for the specified type.";
cUpIdleUnitCount.commandParameters = [ {
	nameLink: pIdleType.getLink(),
	name: "IdleType",
	type: "Const",
	dir: "in",
	range: "a const from the IdleType enumeration",
	note: "The type of units that will be checked."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpIdleUnitCount.example = [ {
	title: "Check if there are more than 5 idle villagers.",
	data: "(defrule\r\n\t(up-idle-unit-count idle-type-villager > 5)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpIdleUnitCount.relatedCommands = [];

//up-jump-direct
cUpJumpDirect.shortDescription = "Jump directly within the current rule set.";
cUpJumpDirect.description = "Jump directly within the current rule set. Please ensure that the rule you are jumping to actually exists. You can use up-get-rule-id to get a valid rule id to jump to. With this action, you can either decrease rules per pass with intelligent skips, or greatly increase it with loops. Please consider game performance.";
cUpJumpDirect.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pRuleId.getLink(),
	name: "RuleId",
	type: "Op",
	dir: "in",
	range: "a valid zero-based rule id",
	note: "Please do not attempt to jump to a negative rule id."
} ];
cUpJumpDirect.example = [{
	title: "Skip to the second rule of the AI if a condition is true.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-jump-direct c: 2)\r\n)"
} ];
cUpJumpDirect.relatedCommands = [];

//up-jump-dynamic
cUpJumpDynamic.shortDescription = "Jump dynamically within the current rule set.";
cUpJumpDynamic.description = "Jump dynamically within the current rule set. Never use this command where #load blocks may make your jump target unreliable. Please ensure that the rule you are jumping to actually exists. With this action, you can either decrease rules per pass with intelligent skips, or greatly increase it with loops. Please consider game performance.";
cUpJumpDynamic.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pRuleDelta.getLink(),
	name: "RuleDelta",
	type: "Op",
	dir: "in",
	range: "the number of rules to jump",
	note: "Positive values will jump forward, while negative values will jump backward."
}];
cUpJumpDynamic.example = [{
	title: "Skip 1 rule if a condition is true.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-jump-dynamic c: 1)\r\n)\r\n(defrule ; this rule is skipped\r\n\t(true)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpJumpDynamic.relatedCommands = [];

//up-jump-rule
cUpJumpRule.shortDescription = "Jump forward or backward within the current rule set.";
cUpJumpRule.description = "Jump forward or backward within the current rule set. Never use this command where #load blocks may make your jump target unreliable. Please ensure that the rule you are jumping to actually exists. With this action, you can either decrease rules per pass with intelligent skips, or greatly increase it with loops. Please consider game performance.";
cUpJumpRule.commandParameters = [ {
	nameLink: pRuleDelta.getLink(),
	name: "RuleDelta",
	type: "Const",
	dir: "in",
	range: "the number of rules to jump",
	note: "Positive values will jump forward, while negative values will jump backward."
} ];
cUpJumpRule.example = [ {
	title: "Skip 1 rule if a condition is true.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-jump-rule 1)\r\n)\r\n(defrule ; this rule is skipped\r\n\t(true)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
}, {
	title: "Loop over a rule 3 times.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n\t=>\r\n\t(chat-local-to-self &quot;Start&quot;)\r\n\t(set-goal gl-value 0)\r\n)\r\n(defrule\r\n\t(up-compare-goal gl-value < 3)\r\n\t=>\r\n\t(up-modify-goal gl-value c:+ 1)\r\n\t(up-jump-rule -1)\r\n)"
} ];
cUpJumpRule.relatedCommands = [];

//up-lerp-percent
cUpLerpPercent.shortDescription = "Interpolate a point by percentage between two point goal pairs.";
cUpLerpPercent.description = "Interpolate a point by percentage between two point goal pairs. A negative value for Percent will result in subtraction. Set Point2 to 0 to use the point that is stored by up-set-target-point.";
cUpLerpPercent.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "io",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pPercent.getLink(),
	name: "Percent",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The percent between the two points to select."
} ];
cUpLerpPercent.example = [ {
	title: "Get the point at 25% from the home town-center to the map center.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-point-x)\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-lerp-percent gl-point-x gl-center-x c: 25)\r\n)"
} ];
cUpLerpPercent.relatedCommands = [];

//up-lerp-tiles
cUpLerpTiles.shortDescription = "Interpolate a point by tiles between two point goal pairs.";
cUpLerpTiles.description = "Interpolate a point by tiles between two point goal pairs. A negative value for Tiles will result in subtraction. Set Point2 to 0 to use the point that is stored by up-set-target-point.</p><p>Note: It is possible for the new point to be outside the bounds of the map which can cause several issues. Therefore, it is wise to use " + cUpBoundPoint.getLink() + " afterward to ensure that you always have a valid point location.";
cUpLerpTiles.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "io",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTiles.getLink(),
	name: "Tiles",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number of tiles to move along the vector."
} ];
cUpLerpTiles.example = [ {
	title: "Get the point 10 tiles toward the map center from the home town-center.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-point-x)\r\n\t(up-get-point position-center gl-center-x)\r\n\t(up-lerp-tiles gl-point-x gl-center-x c: 10)\r\n)"
} ];
cUpLerpTiles.relatedCommands = [];

//up-log-data
cUpLogData.shortDescription = "Write a formatted text line to aoelog.txt.";
cUpLogData.description = "Write a formatted text line to aoelog.txt. Set Plain to 1 in order to write plain text. You must close the game in order to open aoelog.txt, which is located in the game folder. Please consider game performance when writing data.</p><p>To log a message without referencing any data, simply leave the %d out of the chat message and use 'c: 0' as the last two parameters.";
cUpLogData.commandParameters = [ {
	nameLink: pPlain.getLink(),
	name: "Plain",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "A value to determine whether the data is formatted or plain text."
}, {
	nameLink: pFormattedString.getLink(),
	name: "FormattedString",
	type: "Text",
	dir: "in",
	range: "quoted text, where %d is replaced by the provided value",
	note: "A formatted quote of text that will be logged."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The value that will replace %d in the format string of text."
} ];
cUpLogData.example = [ {
	title: "Log the player number.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-log-data 0 &quot;Player number: %d&quot; c: my-player-number)\r\n\t(disable-self)\r\n)"
}, {
	title: "Log a message without data.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-log-data 0 &quot;A message has been logged without data.&quot; c: 0)\r\n\t(disable-self)\r\n)"
} ];
cUpLogData.relatedCommands = [];

//up-modify-escrow
cUpModifyEscrow.shortDescription = "Perform math operations to adjust escrowed resources.";
cUpModifyEscrow.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, gold",
	note: "The escrowed resource that will be modified."
}, {
	nameLink: pMathOp.getLink(),
	name: "mathOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for a math operation.<br/>Value: c:, g:, s: followed by: =, +, -, *, /, mod, min, max, neg, z/, %*, %/"
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number that will be used in the operation."
} ];
cUpModifyEscrow.example = [ {
	title: "Set the escrow-amount for food directly to 100.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-escrow food c:= 100)\r\n\t(disable-self)\r\n)"
} ];
cUpModifyEscrow.relatedCommands = [];

//up-modify-flag
cUpModifyFlag.shortDescription = "Modify a bitwise flag on the value stored in a goal variable.";
cUpModifyFlag.description = "Modify a bitwise flag on the value stored in a goal variable. Flags allow multiple states to be stored in a single value by using powers of 2 (1, 2, 4, 8, 16, etc.). The only ops allowed are [cgs]:+ to append a flag and [cgs]:- to remove a flag.";
cUpModifyFlag.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "io",
	range: "a GoalId",
	note: "The goal that will be modified."
}, {
	nameLink: pMathOp.getLink(),
	name: "mathOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for a math operation.<br/>Value: c:, g:, s: followed by: =, +, -, *, /, mod, min, max, neg, z/, %*, %/"
}, {
	nameLink: pFlag.getLink(),
	name: "Flag",
	type: "Op",
	dir: "in",
	range: "a valid flag",
	note: "The flag that will be used in the operation."
} ];
cUpModifyFlag.example = [ {
	title: "Append a flag to the value stored in &quot;gl-settings&quot;.",
	data: "(defconst gl-settings 101)\r\n(defconst first-state 1)\r\n(defconst second-state 2)\r\n(defconst third-state 4)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-flag gl-settings c:+ second-state)\r\n\t(disable-self)\r\n)"
} ];
cUpModifyFlag.relatedCommands = [];

//up-modify-goal
cUpModifyGoal.shortDescription = "Perform math operations on the value stored in a goal variable.";
cUpModifyGoal.description = "Perform math operations on the value stored in a goal variable. This command can be used as either a Fact or an Action.";
cUpModifyGoal.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "io",
	range: "a GoalId",
	note: "The goal that will be modified."
}, {
	nameLink: pMathOp.getLink(),
	name: "mathOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for a math operation.<br/>Value: c:, g:, s: followed by: =, +, -, *, /, mod, min, max, neg, z/, %*, %/"
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number that will be used in the operation."
} ];
cUpModifyGoal.example = [ {
	title: "Add 1 to the value stored in &quot;gl-sheep-total&quot;.",
	data: "(defconst gl-sheep-total 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-goal gl-sheep-total c:+ 1)\r\n\t(disable-self)\r\n)"
} ];
cUpModifyGoal.relatedCommands = [];

//up-modify-group-flag
cUpModifyGroupFlag.shortDescription = "Modify the ctrl group flag for units in a search group.";
cUpModifyGroupFlag.description = "Modify the ctrl group flag for units in a search group. You must manage the group flag carefully in order to avoid unexpected situations. Please remove the group flag before modifying a flagged search group. You can find units from a flagged search group using object-data-group-flag, which is set to the group id.";
cUpModifyGroupFlag.commandParameters = [ {
	nameLink: pOn.getLink(),
	name: "On",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to append or 0 to remove."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pGroupId.getLink(),
	name: "GroupId",
	type: "Op",
	dir: "in",
	range: "0 to 9",
	note: "The group id."
} ];
cUpModifyGroupFlag.example = [ {
	title: "Set the group id flag for units in search group id 2.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-group-flag 1 c: 2) ; object-data-group-flag will be 2\r\n)"
} ];
cUpModifyGroupFlag.relatedCommands = [];

//up-modify-sn
cUpModifySn.shortDescription = "Perform math operations on a strategic number.";
cUpModifySn.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Sn",
	dir: "io",
	range: "an SnId",
	note: "The strategic number that will be modified."
}, {
	nameLink: pMathOp.getLink(),
	name: "mathOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for a math operation.<br/>Value: c:, g:, s: followed by: =, +, -, *, /, mod, min, max, neg, z/, %*, %/"
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The number that will be used in the operation."
} ];
cUpModifySn.example = [ {
	title: "Subtract 2 from &quot;sn-maximum-town-size&quot;.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-modify-sn sn-maximum-town-size c:- 2)\r\n\t(disable-self)\r\n)"
} ];
cUpModifySn.relatedCommands = [];

//up-object-data
cUpObjectData.shortDescription = "Check specific information about the selected target object.";
cUpObjectData.commandParameters = [ {
	nameLink: pObjectData.getLink(),
	name: "ObjectData",
	type: "Const",
	dir: "in",
	range: "a value from the ObjectData enumeration",
	note: "The type of data to retrieve."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpObjectData.example = [ {
	title: "Check if the target-object holds more than 3 units.",
	data: "(defrule\r\n\t(up-object-data object-data-garrison-count &gt; 3)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpObjectData.relatedCommands = [];

//up-object-target-data
cUpObjectTargetData.shortDescription = "Check specific information about the target object's target.";
cUpObjectTargetData.commandParameters = [ {
	nameLink: pObjectData.getLink(),
	name: "ObjectData",
	type: "Const",
	dir: "in",
	range: "a value from the ObjectData enumeration",
	note: "The type of data to retrieve."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpObjectTargetData.example = [{
	title: "Check if the target object's target holds more than 3 units.",
	data: "(defrule\r\n\t(up-object-target-data object-data-garrison-count &gt; 3)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpObjectTargetData.relatedCommands = [];

//up-object-type-count
cUpObjectTypeCount.shortDescription = "Combine unit-type-count and building-type-count checks.";
cUpObjectTypeCount.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Op",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpObjectTypeCount.example = [ {
	title: "Check if there are at least 10 existing villagers.",
	data: "(defrule\r\n\t(up-object-type-count c: villager &gt;= 10)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpObjectTypeCount.relatedCommands = [];

//up-object-type-count-total
cUpObjectTypeCountTotal.shortDescription = "Combine unit-type-count-total and building-type-count-total checks.";
cUpObjectTypeCountTotal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Op",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpObjectTypeCountTotal.example = [ {
	title: "Check if there are more than 20 existing + pending villagers.",
	data: "(defrule\r\n\t(up-object-type-count-total c: villager &gt; 20)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpObjectTypeCountTotal.relatedCommands = [];

//up-path-distance
cUpPathDistance.shortDescription = "Check the distance from the target object to a specified point goal pair.";
cUpPathDistance.description = "Check the distance from the target object to a specified point goal pair. The distance will be 65535 if the point is unreachable.";
cUpPathDistance.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pStrict.getLink(),
	name: "Strict",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to require an open destination tile or 0 to allow for a few tiles of separation."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpPathDistance.example = [ {
	title: "Check if the stored object can reach the specified point.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-path-distance gl-center-x 0 != 65535)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPathDistance.relatedCommands = [];

//up-pending-objects
cUpPendingObjects.shortDescription = "Perform a comparison with the pending count of an object.";
cUpPendingObjects.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Op",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpPendingObjects.example = [ {
	title: "Check if there is at least 1 house pending completion.",
	data: "(defrule\r\n\t(up-pending-objects c: house &gt;= 1)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPendingObjects.relatedCommands = [];

//up-pending-placement
cUpPendingPlacement.shortDescription = "Check if a specific type of building is waiting for placement.";
cUpPendingPlacement.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The building to check."
} ];
cUpPendingPlacement.example = [ {
	title: "Check if a barracks is waiting for placement on the map.",
	data: "(defrule\r\n\t(up-pending-placement c: barracks)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPendingPlacement.relatedCommands = [];

//up-player-distance
cUpPlayerDistance.shortDescription = "Check the distance in tiles to the nearest building of another player.";
cUpPlayerDistance.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "Any",
	type: "Player",
	dir: "in",
	range: "a PlayerId for: any",
	note: "The player(s) to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpPlayerDistance.example = [ {
	title: "Check if player 3 is less than 50 tiles away.",
	data: "(defrule\r\n\t(up-player-distance 3 &lt; 50)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
}, {
	title: "Check if the dynamic &quot;focus-player&quot; is within &quot;gl-distance&quot; tiles.",
	data: "(defconst gl-distance 101)\r\n(defrule\r\n\t(up-player-distance focus-player g:&lt; gl-distance)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
}, {
	title: "Check if any enemy is within 40 tiles.",
	data: "(defrule\r\n\t(up-player-distance any-enemy &lt; 40)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPlayerDistance.relatedCommands = [];

//up-players-in-game
cUpPlayersInGame.shortDescription = "Check the number of active players in the game of the specified stance.";
cUpPlayersInGame.commandParameters = [ {
	nameLink: pPlayerStance.getLink(),
	name: "PlayerStance",
	type: "Const",
	dir: "in",
	range: "any, ally, neutral, enemy",
	note: "The stance of players to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpPlayersInGame.example = [ {
	title: "Check if there are at least 2 allies with the AI for a team of 3.",
	data: "(defrule\r\n\t(up-players-in-game ally &gt;= 3)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPlayersInGame.relatedCommands = [];

//up-point-contains
cUpPointContains.shortDescription = "Check if an object exists at a point goal pair position.";
cUpPointContains.description = "Check if an object exists at a point goal pair position. Set Point to 0 to use the point that is stored by up-set-target-point. Please note that when used with all-units-class (-1), this may capture unexpected objects like birds flying over a tile, terrain plants, etc.";
cUpPointContains.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Op",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object to check."
} ];
cUpPointContains.example = [ {
	title: "Check if a tree exists at the map center.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-contains gl-center-x c: tree-class) ; tree-class = 915\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPointContains.relatedCommands = [];

//up-point-distance
cUpPointDistance.shortDescription = "Perform a distance check between two point goal pairs.";
cUpPointDistance.description = "Perform a distance check between two point goal pairs. Set Point2 to 0 to use the point that is stored by up-set-target-point.";
cUpPointDistance.commandParameters = [ {
	nameLink: pPoint.getLink("Point1"),
	name: "Point1",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pPoint.getLink("Point2"),
	name: "Point2",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpPointDistance.example = [ {
	title: "Check if the distance from the home town-center to the map center is greater than 5.",
	data: "(defconst gl-self-x 100)\r\n(defconst gl-self-y 101)\r\n(defconst gl-center-x 200)\r\n(defconst gl-center-y 201)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-self gl-self-x)\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-distance gl-self-x gl-center-x > 5)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPointDistance.relatedCommands = [];

//up-point-elevation
cUpPointElevation.shortDescription = "Check the elevation for a tile with a point goal pair.";
cUpPointElevation.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpPointElevation.example = [ {
	title: "Check the elevation at the map center.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-elevation gl-center-x > 1)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPointElevation.relatedCommands = [];

//up-point-explored
cUpPointExplored.shortDescription = "Check if a point on the map has been explored.";
cUpPointExplored.description = "Check if a point on the map has been explored. Set Point to 0 to use the point that is stored by up-set-target-point.";
cUpPointExplored.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pExploredState.getLink(),
	name: "ExploredState",
	type: "Op",
	dir: "in",
	range: "explored-no, explored-yes, or explored-active",
	note: "The exploration state of the point."
} ];
cUpPointExplored.example = [ {
	title: "Check if the map center point has been explored.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-explored gl-center-x != explored-no)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPointExplored.relatedCommands = [];

//up-point-terrain
cUpPointTerrain.shortDescription = "Perform a terrain id check at a point goal pair position.";
cUpPointTerrain.description = "Perform a terrain id at a point goal pair position. Set Point to 0 to use the point that is stored by up-set-target-point.";
cUpPointTerrain.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pTerrain.getLink(),
	name: "Terrain",
	type: "Op",
	dir: "in",
	range: "0 to 41",
	note: "A terrain id for comparison."
} ];
cUpPointTerrain.example = [ {
	title: "Check if the terrain at the map center is grass.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-terrain gl-center-x == terrain-grass)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPointTerrain.relatedCommands = [];

//up-point-zone
cUpPointZone.shortDescription = "Check the zone for a tile with a point goal pair.";
cUpPointZone.description = "Check the zone for a tile with a point goal pair. Zone ids may differ if you have no villagers.";
cUpPointZone.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpPointZone.example = [ {
	title: "Check the zone at the map center.",
	data: "(defconst gl-center-x 100)\r\n(defconst gl-center-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-center-x)\r\n)\r\n(defrule\r\n\t(up-point-zone gl-center-x > 1)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpPointZone.relatedCommands = [];

//up-projectile-detected
cUpProjectileDetected.shortDescription = "Check the elapsed time since a type of projectile was fired at the AI.";
cUpProjectileDetected.commandParameters = [ {
	nameLink: pProjectileType.getLink(),
	name: "ProjectileType",
	type: "Const",
	dir: "in",
	range: "a const from the ProjectileType enumeration",
	note: "The source of the projectile to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pElapsedTime.getLink(),
	name: "ElapsedTime",
	type: "Op",
	dir: "in",
	range: "a valid integer",
	note: "The time in milliseconds."
} ];
cUpProjectileDetected.example = [ {
	title: "Check if an enemy town center has attacked within the last 2 seconds.",
	data: "(defrule\r\n\t(up-projectile-detected projectile-town-center &lt; 2000)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpProjectileDetected.relatedCommands = [];

//up-release-escrow
cUpReleaseEscrow.shortDescription = "Set all escrow amounts to 0 with a single command.";
cUpReleaseEscrow.commandParameters = [];
cUpReleaseEscrow.example = [ {
	title: "Release all escrowed resources.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-release-escrow)\r\n\t(disable-self)\r\n)"
} ];
cUpReleaseEscrow.relatedCommands = [];

//up-projectile-target
cUpProjectileTarget.shortDescription = "Check the class of the target of a projectile that was fired at the AI.";
cUpProjectileTarget.commandParameters = [ {
	nameLink: pProjectileType.getLink(),
	name: "ProjectileType",
	type: "Const",
	dir: "in",
	range: "a const from the ProjectileType enumeration",
	note: "The source of the projectile to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pClassId.getLink(),
	name: "ClassId",
	type: "Op",
	dir: "in",
	range: "a ClassId",
	note: "The class of the object that was targeted."
} ];
cUpProjectileTarget.example = [ {
	title: "Check if an enemy town center has attacked an archery-class unit within the last 2 seconds.",
	data: "(defrule\r\n\t(up-projectile-detected projectile-town-center &lt; 2000)\r\n\t(up-projectile-target projectile-town-center == archery-class) ; archery-class = 900\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpProjectileTarget.relatedCommands = [];

//up-remaining-boar-amount
cUpRemainingBoarAmount.shortDescription = "Check the amount of food remaining on the current boar.";
cUpRemainingBoarAmount.description = "Check the amount of food remaining on the current boar. This data is only valid if the boar is lured with strategic numbers (not Direct Unit Control), while another boar is targetable and available to hunt. If this is not the case, it remains invalid (65535) to signify that this is the final boar.";
cUpRemainingBoarAmount.commandParameters = [ {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpRemainingBoarAmount.example = [ {
	title: "Check if there is less than 210 food remaining on the boar, while another boar exists.",
	data: "(defrule\r\n\t(up-remaining-boar-amount &lt; 210) ; will be 65535 if invalid\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpRemainingBoarAmount.relatedCommands = [];

//up-remove-objects
cUpRemoveObjects.shortDescription = "Removes objects from the search results based on specific data.";
cUpRemoveObjects.description = "Removes objects from the search results based on specific data. If ObjectData is set to -1, the object index in the search results will be used for data comparison when performing removal.";
cUpRemoveObjects.commandParameters = [ {
	nameLink: pSearchSource.getLink(),
	name: "SearchSource",
	type: "Const",
	dir: "in",
	range: "search-local or search-remote",
	note: "The search source to modify."
}, {
	nameLink: pObjectData.getLink(),
	name: "ObjectData",
	type: "Const",
	dir: "in",
	range: "a value from the ObjectData enumeration",
	note: "The type of data to retrieve or -1 to use the object index."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The amount of resources."
} ];
cUpRemoveObjects.example = [ {
	title: "Remove objects from the local search results with less than 20 hitpoints.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-remove-objects search-local object-data-hitpoints < 20)\r\n)"
} ];
cUpRemoveObjects.relatedCommands = [];

//up-request-hunters
cUpRequestHunters.shortDescription = "Attempt to request support hunters for the active boar lure.";
cUpRequestHunters.description = "Attempt to request support hunters for the active boar lure. This only applies to boars that are lured with strategic numbers (not Direct Unit Control). It is not guaranteed to reach the total number of requested hunters.";
cUpRequestHunters.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "0 to 32767",
	note: "The total number of hunters for the AI."
} ];
cUpRequestHunters.example = [ {
	title: "Request a total of 4 hunters to support the current lure.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-request-hunters c: 4)\r\n\t(disable-self)\r\n)"
} ];
cUpRequestHunters.relatedCommands = [];

//up-research
cUpResearch.shortDescription = "Add a technology to the research queue with dynamic values.";
cUpResearch.commandParameters = [ {
	nameLink: pEscrowState.getLink(),
	name: "EscrowState",
	type: "Goal",
	dir: "in",
	range: "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
	note: "Determines whether escrowed resources are considered.<br/>Note: A goal ID that stores the escrow state is expected. However, if you never want this command to use escrow, you can put 0 instead."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Op",
	dir: "in",
	range: "a TechId",
	note: "The technology that will be researched."
} ];
cUpResearch.example = [ {
	title: "Research fletching without escrowed resources.",
	data: "(defrule\r\n\t(up-can-research 0 c: ri-fletching)\r\n=&gt;\r\n\t(up-research 0 c: ri-fletching)\r\n)"
} ];
cUpResearch.relatedCommands = [];

//up-research-status
cUpResearchStatus.shortDescription = "Check the research status of a specific technology.";
cUpResearchStatus.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Op",
	dir: "in",
	range: "a TechId",
	note: "The technology to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pResearchState.getLink(),
	name: "ResearchState",
	type: "Op",
	dir: "in",
	range: "research-unavailable, research-available, research-pending, research-complete",
	note: "The research status to compare with."
} ];
cUpResearchStatus.example = [ {
	title: "Check if loom is either being researched or already complete.",
	data: "(defrule\r\n\t(up-research-status c: ri-loom &gt;= research-pending)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpResearchStatus.relatedCommands = [];
cUpResetUnit.relatedCommands = [];

//up-reset-attack-now
cUpResetAttackNow.shortDescription = "Reset the infinite targeting loop flag set by attack-now.";
cUpResetAttackNow.commandParameters = [];
cUpResetAttackNow.example = [ {
	title: "Unset the attack-now flag for active groups.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-attack-now)\r\n\t(disable-self)\r\n)"
} ];
cUpResetAttackNow.relatedCommands = [];

//up-reset-building
cUpResetBuilding.shortDescription = "Halt the activity and research of all buildings of a specific type.";
cUpResetBuilding.commandParameters = [ {
	nameLink: pPreserveResearch.getLink(),
	name: "PreserveResearch",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "If set to 1, buildings performing research will not be affected."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The type of building that will be reset."
} ];
cUpResetBuilding.example = [ {
	title: "Reset all activity at town centers, except those performing research.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-building 1 c: town-center)\r\n)"
} ];
cUpResetBuilding.relatedCommands = [];

//up-reset-cost-data
cUpResetCostData.shortDescription = "Reset 4 consecutive goals storing cost data to 0.";
cUpResetCostData.commandParameters = [ {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "out",
	range: "an extended GoalId from 41 to 508",
	note: "The first of 4 consecutive goals that store cost data for food, wood, stone, and gold."
} ];
cUpResetCostData.example = [ {
	title: "Reset gl-cost-food, gl-cost-wood, gl-cost-stone, and gl-cost-gold to 0.",
	data: "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-cost-data gl-cost-food)\r\n\t(disable-self)\r\n)"
} ];
cUpResetCostData.relatedCommands = [];

//up-reset-filters
cUpResetFilters.shortDescription = "Reset search indices and filter states for direct unit targeting.";
cUpResetFilters.description = "Reset search indices and filter states for direct unit targeting. All filter states will be set to -1. Use up-reset-search to clear search results.";
cUpResetFilters.commandParameters = [];
cUpResetFilters.example = [ {
	title: "Clear search indices and filter states.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-filters)\r\n)"
} ];
cUpResetFilters.relatedCommands = [];

//up-reset-group
cUpResetGroup.shortDescription = "Clear all units in a search group.";
cUpResetGroup.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pGroupId.getLink(),
	name: "GroupId",
	type: "Op",
	dir: "in",
	range: "0 to 9",
	note: "The group id."
} ];
cUpResetGroup.example = [ {
	title: "Reset the first search group.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-group c: 0)\r\n)"
} ];
cUpResetGroup.relatedCommands = [];

//up-reset-placement
cUpResetPlacement.shortDescription = "Clear the placement list for the specified building type when blocked.";
cUpResetPlacement.description = "Clear the placement list for the specified building type when blocked. Please use with caution.";
cUpResetPlacement.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The building type that will be reset."
} ];
cUpResetPlacement.example = [ {
	title: "Clear all pending barracks without a foundation.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-placement c: barracks)\r\n\t(disable-self)\r\n)"
} ];
cUpResetPlacement.relatedCommands = [];

//up-reset-scouts
cUpResetScouts.shortDescription = "Halt and disband all soldier explore groups on land.";
cUpResetScouts.commandParameters = [];
cUpResetScouts.example = [ {
	title: "Stop all scouts on land, after configuring the necessary strategic numbers.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-number-explore-groups 0)\r\n\t(set-strategic-number sn-total-number-explorers 0)\r\n\t(up-reset-scouts)\r\n\t(disable-self)\r\n)"
} ];
cUpResetScouts.relatedCommands = [];

//up-reset-search
cUpResetSearch.shortDescription = "Reset the search state for the direct unit targeting system.";
cUpResetSearch.commandParameters = [ {
	nameLink: pLocalIndex.getLink(),
	name: "LocalIndex",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to clear the offset into the list of local objects to search."
}, {
	nameLink: pLocalList.getLink(),
	name: "LocalList",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to clear the local object list from previous searches."
}, {
	nameLink: pRemoteIndex.getLink(),
	name: "RemoteIndex",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to clear the offset into the list of remote objects to search."
}, {
	nameLink: pRemoteList.getLink(),
	name: "RemoteList",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to clear the remote object list from previous searches."
} ];
cUpResetSearch.example = [ {
	title: "Clear all search states.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-search 1 1 1 1)\r\n)"
} ];
cUpResetSearch.relatedCommands = [];

//up-reset-target-priorities
cUpResetTargetPriorities.shortDescription = "Reset or clear offensive or defensive targeting priorities.";
cUpResetTargetPriorities.description = "Reset or clear offensive or defensive targeting priorities. Restore default priorities with 0. For defensive priorities, setting Mode to 1 will reset all to -1. For offensive priorities, unit types will be reset to 0, while classes will be -1.";
cUpResetTargetPriorities.commandParameters = [ {
	nameLink: pPriorityType.getLink(),
	name: "PriorityType",
	type: "Const",
	dir: "in",
	range: "priority-offense, priority-defense",
	note: "The targeting priority type to modify."
}, {
	nameLink: pMode.getLink(),
	name: "Mode",
	type: "Const",
	dir: "in",
	range: "0 to 1",
	note: "Determines the reset method."
} ];
cUpResetTargetPriorities.example = [ {
	title: "Reset defensive priorities to default values.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-target-priorities priority-defense 0)\r\n\t(disable-self)\r\n)"
}, {
	title: "Clear all offensive priorities (nothing has priority).",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-target-priorities priority-offense 1)\r\n\t(disable-self)\r\n)"
} ];
cUpResetTargetPriorities.relatedCommands = [];

//up-reset-unit
cUpResetUnit.shortDescription = "Halt the activity of all units of a specific type.";
cUpResetUnit.description = "Halt the activity of all units of a specific type. This is equivalent to clicking the &quot;stop&quot; button.";
cUpResetUnit.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The type of unit that will be stopped."
} ];
cUpResetUnit.example = [ {
	title: "Stop all spearmen on the map.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-reset-unit c: spearman-line)\r\n)"
} ];

//up-resource-amount
cUpResourceAmount.shortDescription = "Perform a comparison with an internal resource value.";
cUpResourceAmount.commandParameters = [ {
	nameLink: pResourceAmount.getLink(),
	name: "ResourceAmount",
	type: "Const",
	dir: "in",
	range: "a const from the ResourceAmount enumeration",
	note: "The resource that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpResourceAmount.example = [ {
	title: "Check if the AI is holding at least 1 relic.",
	data: "(defrule\r\n\t(up-resource-amount amount-relics &gt;= 1)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpResourceAmount.relatedCommands = [];

//up-resource-percent
cUpResourcePercent.shortDescription = "Perform a comparison with an internal resource value * 100.";
cUpResourcePercent.commandParameters = [ {
	nameLink: pResourceAmount.getLink(),
	name: "ResourceAmount",
	type: "Const",
	dir: "in",
	range: "a const from the ResourceAmount enumeration",
	note: "The resource that will be compared."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpResourcePercent.example = [ {
	title: "Check amount-tribute-inefficiency to see if coinage has been researched.",
	data: "(defrule\r\n\t(up-resource-percent amount-tribute-inefficiency &lt; 30)\r\n=&gt;\r\n\t(chat-to-all &quot;Coinage has been researched.&quot;)\r\n\t(disable-self)\r\n)"
} ];
cUpResourcePercent.relatedCommands = [];

//up-retask-gatherers
cUpRetaskGatherers.shortDescription = "Retask a specific number of villagers gathering from a resource.";
cUpRetaskGatherers.commandParameters = [ {
	nameLink: pResource.getLink(),
	name: "Resource",
	type: "Const",
	dir: "in",
	range: "food, wood, stone, gold, or the class id of the resource",
	note: "The resource that will be dropped."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "0 to 32767",
	note: "The maximum number of gatherers to retask."
} ];
cUpRetaskGatherers.example = [ {
	title: "Request up to 3 lumberjacks to attempt to retask.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-retask-gatherers wood c: 3)\r\n\t(disable-self)\r\n)"
} ];
cUpRetaskGatherers.relatedCommands = [];

//up-retreat-now
cUpRetreatNow.shortDescription = "Retreat all military units to the home town center.";
cUpRetreatNow.commandParameters = [];
cUpRetreatNow.example = [ {
	title: "Retreat to the home town center.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-retreat-now)\r\n\t(disable-self)\r\n)"
} ];
cUpRetreatNow.relatedCommands = [];

//up-retreat-to
cUpRetreatTo.shortDescription = "Retreat all units of a specific type to a random instance of another.";
cUpRetreatTo.commandParameters = [ {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Const",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object that will be gather point of the retreat."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The type of units that will retreat."
} ];
cUpRetreatTo.example = [ {
	title: "Retreat all knights to a random castle, if possible.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-retreat-to castle c: knight-line)\r\n\t(disable-self)\r\n)"
} ];
cUpRetreatTo.relatedCommands = [];

//up-send-flare
cUpSendFlare.shortDescription = "Send a flare to allies from a point goal pair.";
cUpSendFlare.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to read the (x,y) pair."
} ];
cUpSendFlare.example = [ {
	title: "Send a flare to allies at your target position.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-target gl-point-x)\r\n\t(up-send-flare gl-point-x)\r\n)"
} ];
cUpSendFlare.relatedCommands = [];

//up-send-scout
cUpSendScout.shortDescription = "Send a land or water scout to a specific location.";
cUpSendScout.commandParameters = [ {
	nameLink: pGroupType.getLink(),
	name: "GroupType",
	type: "Const",
	dir: "in",
	range: "a const from the GroupType enumeration",
	note: "The type of explore group that will be tasked."
}, {
	nameLink: pScoutMethod.getLink(),
	name: "ScoutMethod",
	type: "Const",
	dir: "in",
	range: "a member of the ScoutMethod enumeration",
	note: "The scouting method."
} ];
cUpSendScout.example = [ {
	title: "Send a land scout to the opposite side of the map.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-send-scout group-type-land-explore scout-opposite)\r\n\t(disable-self)\r\n)"
} ];
cUpSendScout.relatedCommands = [];

//up-set-attack-stance
cUpSetAttackStance.shortDescription = "Set the attack stance for all units of a specific type.";
cUpSetAttackStance.commandParameters = [ {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Const",
	dir: "in",
	range: "a UnitId",
	note: "The unit that will be modified."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pAttackStance.getLink(),
	name: "AttackStance",
	type: "Op",
	dir: "in",
	range: "stance-aggressive, stance-defensive, stance-stand-ground, stance-no-attack",
	note: "The new attack stance for the specified units."
} ];
cUpSetAttackStance.example = [ {
	title: "Set all spearmen to the &quot;stand-ground&quot; stance.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-attack-stance spearman-line c: stance-stand-ground)\r\n\t(disable-self)\r\n)"
} ];
cUpSetAttackStance.relatedCommands = [];

//up-sell-commodity
cUpSellCommodity.shortDescription = "Sell a variable amount of resources at the market.";
cUpSellCommodity.description = "Sell a variable amount of resources at the market. The actual amount you sell depends on available resources.";
cUpSellCommodity.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pResourceAmount.getLink(),
	name: "ResourceAmount",
	type: "Op",
	dir: "in",
	range: "a const from the ResourceAmount enumeration",
	note: "The resource that will be modified."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "1 to 32767",
	note: "The amount of resources."
} ];
cUpSellCommodity.example = [ {
	title: "Attempt to sell 200 wood at the market.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-sell-commodity c: wood c: 200)\r\n)"
} ];
cUpSellCommodity.relatedCommands = [];

//up-set-defense-priority
cUpSetDefensePriority.shortDescription = "Set the defensive (TSA) targeting priority for a building.";
cUpSetDefensePriority.description = "Set the defensive (TSA) targeting priority for a building. This has no effect against units.</p>";
cUpSetDefensePriority.description += "<p>Default priorities by building:</p>";
cUpSetDefensePriority.description += "<table class=\"commented-example\"><tr><th>Priority</th><th>Building(s)</th></tr>";
cUpSetDefensePriority.description += "<tr><td>-1</td><td>default</td></tr>";
cUpSetDefensePriority.description += "<tr><td>5</td><td>outpost</td></tr>";
cUpSetDefensePriority.description += "<tr><td>10</td><td>farm, fish-trap</td></tr>";
cUpSetDefensePriority.description += "<tr><td>20</td><td>blacksmith, university</td></tr>";
cUpSetDefensePriority.description += "<tr><td>30</td><td>lumber-camp</td></tr>";
cUpSetDefensePriority.description += "<tr><td>40</td><td>mill</td></tr>";
cUpSetDefensePriority.description += "<tr><td>50</td><td>mining-camp</td></tr>";
cUpSetDefensePriority.description += "<tr><td>100</td><td>market</td></tr>";
cUpSetDefensePriority.description += "<tr><td>250</td><td>house</td></tr>";
cUpSetDefensePriority.description += "<tr><td>500</td><td>barracks, archery-range, stable, monastery, siege-workshop, dock</td></tr>";
cUpSetDefensePriority.description += "<tr><td>500</td><td>gate (not in v1.0c, but set since the gate fix)</td></tr>";
cUpSetDefensePriority.description += "<tr><td>1000</td><td>town-center (ID 109, standing), town-center-foundation (ID 621, foundation)</td></tr>";
cUpSetDefensePriority.description += "<tr><td>2000</td><td>watch-tower</td></tr>";
cUpSetDefensePriority.description += "<tr><td>3000</td><td>guard-tower</td></tr>";
cUpSetDefensePriority.description += "<tr><td>4000</td><td>keep</td></tr>";
cUpSetDefensePriority.description += "<tr><td>5000</td><td>bombard-tower</td></tr>";
cUpSetDefensePriority.description += "<tr><td>10000</td><td>castle</td></tr>";
cUpSetDefensePriority.description += "<tr><td>20000</td><td>wonder</td></tr></table>";
cUpSetDefensePriority.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pBuildingId.getLink(),
	name: "BuildingId",
	type: "Op",
	dir: "in",
	range: "a BuildingId",
	note: "The building that will be modified."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-1 to 32767, where -1 is the lowest priority",
	note: "The priority to use with the defensive targeting system."
} ];
cUpSetDefensePriority.example = [ {
	title: "Increase the defensive priority for lumber camps to 1000.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-defense-priority c: lumber-camp c: 1000)\r\n\t(disable-self)\r\n)"
} ];
cUpSetDefensePriority.relatedCommands = [];

//up-set-event
cUpSetEvent.shortDescription = "Set the value of a scenario trigger event.";
cUpSetEvent.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pEventId.getLink(),
	name: "EventId",
	type: "Op",
	dir: "in",
	range: "0 to 255",
	note: "The event to set."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The new value for the event."
} ];
cUpSetEvent.example = [ {
	title: "Set the value of event id 1 to 0.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-event c: 1 c: 0)\r\n)"
} ];
cUpSetEvent.relatedCommands = [];

//up-set-group
cUpSetGroup.shortDescription = "Set the local or remote search results to a search group.";
cUpSetGroup.commandParameters = [ {
	nameLink: pSearchSource.getLink(),
	name: "SearchSource",
	type: "Const",
	dir: "in",
	range: "search-local or search-remote",
	note: "The search source to modify."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pGroupId.getLink(),
	name: "GroupId",
	type: "Op",
	dir: "in",
	range: "0 to 9",
	note: "The group id."
} ];
cUpSetGroup.example = [ {
	title: "Set the local results to the first search group.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-group search-local c: 0)\r\n)"
} ];
cUpSetGroup.relatedCommands = [];

//up-set-indirect-goal
cUpSetIndirectGoal.shortDescription = "Set the value of a goal indirectly by reference.";
cUpSetIndirectGoal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pGoalId.getLink(),
	name: "GoalId",
	type: "Op",
	dir: "in",
	range: "1 to 512",
	note: "The goal to set."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The new value for the goal."
} ];
cUpSetIndirectGoal.example = [ {
	title: "Set the value of goal id 2 to 128 indirectly using goal id 10.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal 10 2)\r\n\t(up-set-indirect-goal g: 10 c: 128)\r\n)"
} ];
cUpSetIndirectGoal.relatedCommands = [];

//up-set-offense-priority
cUpSetOffensePriority.shortDescription = "Set the offensive targeting priority for an object.";
cUpSetOffensePriority.description = "Set the offensive targeting priority for an object. This is used when attacking with " + snNumberAttackGroups.getLink() + " or " + cAttackNow.getLink() + ". " + snEnableOffensivePriority.getLink() + " must be set to 1 for these priorities to take effect.</p><p>Note: offensive priorities have a very small range. You can turn the priorities up to 11, but no more.";
cUpSetOffensePriority.description += "<p>Default offensive priorities by class/type id: (classes that are not actually used in the game are marked with an asterisk)</p><p>";
cUpSetOffensePriority.description += "<table class=\"commented-example\"><tr><th>Priority</th><th>Class/Unit ID</th><th>Class/Unit Name</th></tr>";
cUpSetOffensePriority.description += "<tr><td>-1</td><td>default</td><td></td></tr>";
cUpSetOffensePriority.description += "<tr><td>0</td><td>903, 927, 939, 949, 951, 952, 954</td><td>building-class, wall-class, gate-class, farm-class, packed-trebuchet-class, tower-class, unpacked-trebuchet-class</td></tr>";
cUpSetOffensePriority.description += "<tr><td>1</td><td>906, 912, 924*, 935, 945*, 947, 950*, 956*, 957*</td><td>infantry-class, cavalry-class, petard-class, scout-cavalry-class</td></tr>";
cUpSetOffensePriority.description += "<tr><td>2</td><td>928*, 946*</td><td></td></tr>";
cUpSetOffensePriority.description += "<tr><td>3</td><td>900, 923, 926*, 936, 944</td><td>archery-class, cavalry-cannon-class, cavalry-archer-class, archery-cannon-class</td></tr>";
cUpSetOffensePriority.description += "<tr><td>4</td><td>6, 7</td><td>skirmisher, elite-skirmisher</td></tr>";
cUpSetOffensePriority.description += "<tr><td>5</td><td>35, 422, 548</td><td>battering-ram, capped-ram, siege-ram</td></tr>";
cUpSetOffensePriority.description += "<tr><td>6</td><td>913, 955</td><td>siege-weapon-class, scorpion-class</td></tr>";
cUpSetOffensePriority.description += "<tr><td>7</td><td>904, 919, 958, 959</td><td>villager-class, trade-cart-class, livestock-class, king-class</td></tr>";
cUpSetOffensePriority.description += "<tr><td>8</td><td>917*, 918, 943</td><td>monastery-class, monk-with-relic-class</td></tr>";
cUpSetOffensePriority.description += "<tr><td>9</td><td>922, 953*</td><td>warship-class</td></tr>";
cUpSetOffensePriority.description += "<tr><td>10</td><td>920</td><td>transport-ship-class</td></tr>";
cUpSetOffensePriority.description += "<tr><td>11</td><td>902, 921</td><td>trade-cog-class, fishing-ship-class</td></tr></table>";
cUpSetOffensePriority.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Op",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object that will be modified."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-1 to 11, where -1 is the lowest priority",
	note: "The priority to use with the offensive targeting system."
} ];
cUpSetOffensePriority.example = [ {
	title: "Increase the offensive priority for mining camps to 11.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-offense-priority c: mining-camp c: 11)\r\n\t(disable-self)\r\n)"
} ];
cUpSetOffensePriority.relatedCommands = [];

//up-set-placement-data
cUpSetPlacementData.shortDescription = "Specify placement information for managed construction.";
cUpSetPlacementData.description = "Specify placement information for managed construction. Please ensure Player has at least a town-center to use for reference, if they don't have ObjectId. If Player has no objects left, placement will not work as expected.";
cUpSetPlacementData.commandParameters = [ {
	nameLink: pAllyPlayer.getLink(),
	name: "AllyPlayer",
	type: "Player",
	dir: "in",
	range: "a single PlayerId for: self, this-any-ally",
	note: "The player to focus upon."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Const",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The object that will be the focus for placement."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-254 to 254",
	note: "The distance from the focus object to place using up-build + place-control. If a target enemy has been found, the distance shifts toward or away from the closest building of that target. Otherwise, the center of the map acts as the reference position."
} ];
cUpSetPlacementData.example = [ {
	title: "Place 25 tiles behind the home town center.",
	data: "(defrule\r\n\t(up-can-build 0 c: house)\r\n=&gt;\r\n\t(up-set-placement-data my-player-number -1 c: -25) ; home town center = -1\r\n\t(up-build place-control 0 c: house)\r\n)"
}, {
	title: "Place 2 tiles in front of the focus-player's latest lumber-camp.",
	data: "(defrule\r\n\t(up-can-build 0 c: house)\r\n=&gt;\r\n\t(up-set-placement-data focus-player lumber-camp c: 2)\r\n\t(up-build place-control 0 c: house)\r\n)"
} ];
cUpSetPlacementData.relatedCommands = [];

//up-set-precise-target-point
cUpSetPreciseTargetPoint.shortDescription = "Set the target point with an unchecked extended goal pair.";
cUpSetPreciseTargetPoint.description = "Set the target point with an unchecked extended goal pair. This command is identical to up-set-target-point, except it will not bound the point inside the map. Please ensure the point is valid with up-bound-precise-point. A precise point is expected to be a normal point x100 for 2 places of decimal precision.";
cUpSetPreciseTargetPoint.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
} ];
cUpSetPreciseTargetPoint.example = [ {
	title: "Set the target point to the precise map center.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n\t(up-modify-goal gl-point-x c:* 100)\r\n\t(up-modify-goal gl-point-y c:* 100)\r\n\t(up-set-precise-target-point gl-point-x)\r\n)"
} ];
cUpSetPreciseTargetPoint.relatedCommands = [];

//up-set-shared-goal
cUpSetSharedGoal.shortDescription = "Set the value of a shared goal.";
cUpSetSharedGoal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pSharedGoalId.getLink(),
	name: "SharedGoalId",
	type: "Op",
	dir: "in",
	range: "1 to 256",
	note: "The shared goal to set."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The new value for the shared goal."
} ];
cUpSetSharedGoal.example = [ {
	title: "Set the value of shared goal id 1 to 0.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-shared-goal c: 1 c: 0)\r\n)"
} ];
cUpSetSharedGoal.relatedCommands = [];

//up-set-signal
cUpSetSignal.shortDescription = "Set the value of a scenario trigger signal.";
cUpSetSignal.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pSignalId.getLink(),
	name: "SignalId",
	type: "Op",
	dir: "in",
	range: "0 to 255",
	note: "The signal to set."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "The new value for the signal."
} ];
cUpSetSignal.example = [ {
	title: "Set the value of signal id 1 to 0.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-signal c: 1 c: 0)\r\n)"
} ];
cUpSetSignal.relatedCommands = [];

//up-set-target-by-id
cUpSetTargetById.shortDescription = "Set the target object for other commands by id.";
cUpSetTargetById.description = "Set the target object for other commands by id. Reference it with up-get-point and position-object. If the Id is invalid, the current target object will remain unchanged. This command can be used as either a Fact or an Action.";
cUpSetTargetById.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Op",
	dir: "in",
	range: "a valid Id",
	note: "The zero-based id of the object to set."
} ];
cUpSetTargetById.example = [ {
	title: "Set the target object by a specific id obtained from up-get-object-data.",
	data: "(defconst gl-stored-id 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-object-data object-data-id gl-stored-id)\r\n\t(up-set-target-by-id g: gl-stored-id)\r\n)"
} ];
cUpSetTargetById.relatedCommands = [];

//up-set-target-object
cUpSetTargetObject.shortDescription = "Set the target object for other commands from your search.";
cUpSetTargetObject.description = "Set the target object for other commands from your search. Reference it with up-get-point and position-object. If the Index is invalid, the current target object will remain unchanged. This command can be used as either a Fact or an Action.";
cUpSetTargetObject.commandParameters = [ {
	nameLink: pSearchSource.getLink(),
	name: "SearchSource",
	type: "Const",
	dir: "in",
	range: "search-local or search-remote",
	note: "The search source to check."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pIndex.getLink(),
	name: "Index",
	type: "Op",
	dir: "in",
	range: "0 to 240",
	note: "The zero-based index of the object to set."
} ];
cUpSetTargetObject.example = [ {
	title: "Set the target object to the first result from the local search.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-find-local c: villager-class c: 3)\r\n\t(up-set-target-object search-local c: 0)\r\n)"
} ];
cUpSetTargetObject.relatedCommands = [];

//up-set-target-point
cUpSetTargetPoint.shortDescription = "Set the target point for other commands with an extended goal pair.";
cUpSetTargetPoint.description = "Set the target point for other commands with an extended goal pair. This command will also safely bound the point inside the map.";
cUpSetTargetPoint.commandParameters = [{
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510",
	note: "The first of 2 consecutive goals to store the (x,y) pair."
} ];
cUpSetTargetPoint.example = [{
	title: "Set the target point to the map center.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n\t(up-set-target-point gl-point-x)\r\n)"
} ];
cUpSetTargetPoint.relatedCommands = [];

//up-set-timer
cUpSetTimer.shortDescription = "Disable or enable a timer by interval.";
cUpSetTimer.description = "Disable or enable a timer by interval. Set Value to -1 to disable the timer. If Value is positive, this will perform like the enable-timer action.";
cUpSetTimer.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTimerId.getLink(),
	name: "TimerId",
	type: "Op",
	dir: "in",
	range: "1 to 50",
	note: "The timer to set."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-1 to 32767",
	note: "The new value for the timer."
} ];
cUpSetTimer.example = [ {
	title: "Enable timer 20 to trigger in 10 seconds.",
	data: "(defconst gl-value 100)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-timer c: 20 c: 10)\r\n)"
} ];
cUpSetTimer.relatedCommands = [];

//up-setup-cost-data
cUpSetupCostData.shortDescription = "Set the goals to store cost data for food, wood, stone, and gold.";
cUpSetupCostData.commandParameters = [ {
	nameLink: pResetCost.getLink(),
	name: "ResetCost",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "If set to 1, the values of the provided goal set will be reset to 0."
}, {
	nameLink: pId.getLink(),
	name: "Id",
	type: "Goal",
	dir: "io",
	range: "an extended GoalId from 41 to 508",
	note: "The first of 4 consecutive goals to store cost data for food, wood, stone, and gold."
} ];
cUpSetupCostData.example = [ {
	title: "Set gl-cost-food, gl-cost-wood, gl-cost-stone, and gl-cost-gold to store cost data and initialize them to 0.",
	data: "(defconst gl-cost-food 101)\r\n(defconst gl-cost-wood 102)\r\n(defconst gl-cost-stone 103)\r\n(defconst gl-cost-gold 104)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-setup-cost-data 1 gl-cost-food)\r\n\t(disable-self)\r\n)"
} ];
cUpSetupCostData.relatedCommands = [];

//up-store-map-name
cUpStoreMapName.shortDescription = "Store the current map name in the internal buffer.";
cUpStoreMapName.description = "Store the current map name in the internal buffer. For rms, this is the filename of the map. However, if the map is a dynamic loader, such as Full Random, Random Land Map, or Blind Random, this will be the loader name instead of the actual map name. For scenarios, this will be the original save filename instead of the current filename. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.";
cUpStoreMapName.commandParameters = [ {
	nameLink: pExtension.getLink(),
	name: "Extension",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to include the map file extension."
} ];
cUpStoreMapName.example = [ {
	title: "Store the current map name in the buffer.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-map-name 0)\r\n\t(up-chat-data-to-all &quot;Map: %s&quot; c: 7031232)\r\n)"
} ];
cUpStoreMapName.relatedCommands = [];

//up-store-player-chat
cUpStorePlayerChat.shortDescription = "Store a player chat message in the internal buffer.";
cUpStorePlayerChat.description = "Store a player chat message in the internal buffer. Note that only the last word of a chat message will be stored in the buffer and the message must be present in the host's chat history log (the PageUp key can find it). The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.";
cUpStorePlayerChat.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "a single PlayerId for: self, this-any",
	note: "The player to get."
} ];
cUpStorePlayerChat.example = [ {
	title: "Store the focus-player's chat in the buffer.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-player-chat focus-player)\r\n\t(up-chat-data-to-all &quot;Message: %s&quot; c: 7031232)\r\n)"
} ];
cUpStorePlayerChat.relatedCommands = [];

//up-store-player-name
cUpStorePlayerName.shortDescription = "Store a player name in the internal buffer.";
cUpStorePlayerName.description = "Store a player name in the internal buffer. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.";
cUpStorePlayerName.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "a single PlayerId for: self, this-any",
	note: "The player to get."
} ];
cUpStorePlayerName.example = [ {
	title: "Store the focus-player's name in the buffer.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-player-name focus-player)\r\n\t(up-chat-data-to-all &quot;Player: %s&quot; c: 7031232)\r\n)"
} ];
cUpStorePlayerName.relatedCommands = [];

//up-store-object-name
cUpStoreObjectName.shortDescription = "Store the target object's type name in the internal buffer.";
cUpStoreObjectName.description = "Store the target object's type name in the internal buffer. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.";
cUpStoreObjectName.commandParameters = [];
cUpStoreObjectName.example = [ {
	title: "Store the type name for object id 0 in the buffer.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-set-target-by-id c: 0)\r\n\t(up-store-object-name)\r\n\t(up-chat-data-to-all &quot;Object: %s&quot; c: 7031232)\r\n)"
} ];
cUpStoreObjectName.relatedCommands = [];

//up-store-tech-name
cUpStoreTechName.shortDescription = "Store a research tech name in the internal buffer.";
cUpStoreTechName.description = "Store a research tech name in the internal buffer. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.";
cUpStoreTechName.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTechId.getLink(),
	name: "TechId",
	type: "Op",
	dir: "in",
	range: "a valid TechId",
	note: "The tech id."
} ];
cUpStoreTechName.example = [ {
	title: "Store the unique research name in the buffer.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-tech-name c: my-unique-research)\r\n\t(up-chat-data-to-all &quot;Tech: %s&quot; c: 7031232)\r\n)"
} ];
cUpStoreTechName.relatedCommands = [];

//up-store-text
cUpStoreText.shortDescription = "Store a language string in the internal buffer.";
cUpStoreText.description = "Store a language string in the internal buffer. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.";
cUpStoreText.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pLanguageId.getLink(),
	name: "LanguageId",
	type: "Op",
	dir: "in",
	range: "a valid LanguageId",
	note: "The text string."
} ];
cUpStoreText.example = [ {
	title: "Store 'Random' in the buffer.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-text c: 10230) ;10230 is the language id for Random\r\n\t(up-chat-data-to-all &quot;Text: %s&quot; c: 7031232)\r\n)"
} ];
cUpStoreText.relatedCommands = [];

//up-store-type-name
cUpStoreTypeName.shortDescription = "Store an object type name in the internal buffer.";
cUpStoreTypeName.description = "Store an object type name in the internal buffer. The buffer can be referenced by the chat-data commands using %s instead of %d with c: 7031232 (7031232 cannot be stored in a defconst). This buffer is shared by all AIs, so please store data before using it in a rule pass.";
cUpStoreTypeName.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pTypeId.getLink(),
	name: "TypeId",
	type: "Op",
	dir: "in",
	range: "a valid TypeId",
	note: "The type id."
} ],
cUpStoreTypeName.example = [ {
	title: "Store the proper name for barracks in the buffer.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-store-type-name c: barracks)\r\n\t(up-chat-data-to-all &quot;Type: %s&quot; c: 7031232)\r\n)"
} ];
cUpStoreTypeName.relatedCommands = [];

//up-target-objects
cUpTargetObjects.shortDescription = "Direct local search results against remote search results.";
cUpTargetObjects.description = "Direct local search results against remote search results. The action-default command is equivalent to a right-click. This command can only perform the following actions: action-default, action-move, action-patrol, action-guard, action-follow, action-stop, action-ground, action-garrison, action-delete, action-gather, and action-none.";
cUpTargetObjects.commandParameters = [ {
	nameLink: pTarget.getLink(),
	name: "Target",
	type: "Const",
	dir: "in",
	range: "0 or 1",
	note: "Set to 1 to target only the object set by up-set-target-object."
}, {
	nameLink: pTargetAction.getLink(),
	name: "TargetAction",
	type: "Const",
	dir: "in",
	range: "action-default, action-move, action-patrol, action-guard, action-follow, action-stop, action-ground, action-garrison, action-delete, action-gather, action-none",
	note: "The action to perform with the selected units."
}, {
	nameLink: pFormation.getLink(),
	name: "Formation",
	type: "Const",
	dir: "in",
	range: "-1, formation-line, formation-box, formation-stagger, or formation-flank",
	note: "The formation to set or -1 to do nothing."
}, {
	nameLink: pAttackStance.getLink(),
	name: "AttackStance",
	type: "Const",
	dir: "in",
	range: "-1, stance-aggressive, stance-defensive, stance-stand-ground, or stance-no-attack",
	note: "The stance to set or -1 to do nothing."
} ];
cUpTargetObjects.example = [ {
	title: "Patrol selected units from up-find-local against those from up-find-remote.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-target-objects 0 action-patrol -1 -1)\r\n)"
} ];
cUpTargetObjects.relatedCommands = [];

//up-target-point
cUpTargetPoint.shortDescription = "Direct local search results to a specific point on the map.";
cUpTargetPoint.description = "Direct local search results to a specific point on the map. This command can perform all actions from the TargetAction enumeration. However, action-default, action-guard, action-follow, and action-garrison will perform as action-move. If you wish to action-move back into formation nearby after attacking, please action-move to -1,-1 to reset distance.";
cUpTargetPoint.commandParameters = [ {
	nameLink: pPoint.getLink(),
	name: "Point",
	type: "Goal",
	dir: "in",
	range: "an extended GoalId from 41 to 510, or 0 to read the point set by up-set-target-point",
	note: "The first of 2 consecutive goals to read an (x,y) pair."
}, {
	nameLink: pTargetAction.getLink(),
	name: "TargetAction",
	type: "Const",
	dir: "in",
	range: "a value from the TargetAction enumeration",
	note: "The action to perform with the selected units."
}, {
	nameLink: pFormation.getLink(),
	name: "Formation",
	type: "Const",
	dir: "in",
	range: "-1, formation-line, formation-box, formation-stagger, or formation-flank",
	note: "The formation to set or -1 to do nothing."
}, {
	nameLink: pAttackStance.getLink(),
	name: "AttackStance",
	type: "Const",
	dir: "in",
	range: "-1, stance-aggressive, stance-defensive, stance-stand-ground, or stance-no-attack",
	note: "The stance to set or -1 to do nothing."
} ];
cUpTargetPoint.example = [ {
	title: "Send selected units from up-find-local to the map center.",
	data: "(defconst gl-point-x 100)\r\n(defconst gl-point-y 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-get-point position-center gl-point-x)\r\n\t(up-target-point gl-point-x action-default -1 -1)\r\n)"
}, {
	title: "Train a spearman with action-train: (up-target-point inGoalEscrowState action-train typeOp inOpTypeId). Note: A goal ID is expected for inGoalEscrowState. However, if you never want this command to use escrow, you can put 0 instead.",
	data: "(defrule\r\n\t(up-find-local c: barracks c: 1)\r\n=&gt;\r\n\t(up-target-point 0 action-train c: spearman)\r\n)"
} ];
cUpTargetPoint.relatedCommands = [];

//up-timer-status
cUpTimerStatus.shortDescription = "Check whether a timer is disabled, triggered, running, or a combination.";
cUpTimerStatus.commandParameters = [ {
	nameLink: pTimerId.getLink(),
	name: "TimerId",
	type: "Const",
	dir: "in",
	range: "a TimerId",
	note: "The timer to check."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pTimerState.getLink(),
	name: "TimerState",
	type: "Op",
	dir: "in",
	range: "timer-disabled, timer-triggered, timer-running",
	note: "The timer status to compare with."
} ];
cUpTimerStatus.example = [ {
	title: "Check if the specified timer is disabled or triggered.",
	data: "(defconst tm-gathering 1)\r\n(defrule\r\n\t(up-timer-status tm-gathering &lt;= timer-triggered)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
}, {
	title: "Check if the specified timer is running.",
	data: "(defconst tm-gathering 1)\r\n(defrule\r\n\t(up-timer-status tm-gathering == timer-running)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpTimerStatus.relatedCommands = [];

//up-train
cUpTrain.shortDescription = "Add a unit to the training queue with dynamic values.";
cUpTrain.commandParameters = [ {
	nameLink: pEscrowState.getLink(),
	name: "EscrowState",
	type: "Goal",
	dir: "in",
	range: "a goal set to with-escrow or without-escrow, or 0 for without-escrow",
	note: "Determines whether escrowed resources are considered.<br/>Note: A goal ID that stores the escrow state is expected. However, if you never want this command to use escrow, you can put 0 instead."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The unit that will be trained."
} ];
cUpTrain.example = [ {
	title: "Train spearman-line with escrowed resources, using a goal.",
	data: "(defconst gl-escrow-state 101)\r\n(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-goal gl-escrow-state with-escrow)\r\n\t(disable-self)\r\n)\r\n(defrule\r\n\t(up-can-train gl-escrow-state c: spearman-line)\r\n=&gt;\r\n\t(up-train gl-escrow-state c: spearman-line)\r\n)"
} ];
cUpTrain.relatedCommands = [];

//up-train-site-ready
cUpTrainSiteReady.shortDescription = "Check if a unit's training site is ready and available.";
cUpTrainSiteReady.description = "Check if a unit's training site is ready and available.</p><p><strong>Important Note:</strong> Unit lines, negative unit IDs, or invalid unit Ids may result in a crash.</p><p>An alternative to this command is finding a building you want to check, setting it as the target object with " + cUpSetTargetObject.getLink() + " or " + cUpSetTargetById.getLink() + " and using " + cUpGetObjectData.getLink() + " like this:</p><div class=\"example\"><pre><code>(up-get-object-data object-data-progress-type gl-data)</pre></code></div><p> If 0 is stored in gl-data, then the building is not training or researching, and it is ready to train units.";
cUpTrainSiteReady.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The type of unit that will be checked."
} ];
cUpTrainSiteReady.example = [ {
	title: "Check if a dock is ready to train a fishing ship.",
	data: "(defrule\r\n\t(up-train-site-ready c: fishing-ship)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpTrainSiteReady.relatedCommands = [];

//up-tribute-to-player
cUpTributeToPlayer.shortDescription = "Tribute a variable amount of resources to other players.";
cUpTributeToPlayer.commandParameters = [ {
	nameLink: pAnyPlayer.getLink(),
	name: "AnyPlayer",
	type: "Player",
	dir: "in",
	range: "a PlayerId for: any",
	note: "The player(s) to tribute."
}, {
	nameLink: pResourceAmount.getLink(),
	name: "ResourceAmount",
	type: "Const",
	dir: "in",
	range: "a const from the ResourceAmount enumeration",
	note: "The resource that will be modified."
}, {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "0 to 32767",
	note: "The amount of resources."
} ];
cUpTributeToPlayer.example = [ {
	title: "Send 100 food to the focus-player.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-focus-player-number 2)\r\n\t(up-tribute-to-player focus-player food c: 100)\r\n)"
} ];
cUpTributeToPlayer.relatedCommands = [];

//up-update-targets
cUpUpdateTargets.shortDescription = "Perform an immediate update for objects in town size.";
cUpUpdateTargets.commandParameters = [];
cUpUpdateTargets.example = [ {
	title: "Retreat to the home town center after reducing town size.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(set-strategic-number sn-maximum-town-size 15)\r\n\t(up-update-targets)\r\n\t(up-retreat-now)\r\n\t(disable-self)\r\n)"
} ];
cUpUpdateTargets.relatedCommands = [];

//up-ungarrison
cUpUngarrison.shortDescription = "Request all objects of the specified type to ungarrison units.";
cUpUngarrison.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pObjectId.getLink(),
	name: "ObjectId",
	type: "Op",
	dir: "in",
	range: "a UnitId or BuildingId",
	note: "The type of object that will release garrisoned units."
} ];
cUpUngarrison.example = [ {
	title: "Release all garrisoned units in docks.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-ungarrison c: dock)\r\n\t(disable-self)\r\n)"
}, {
	title: "Release all garrisoned units in battering rams.",
	data: "(defrule\r\n\t(true)\r\n=&gt;\r\n\t(up-ungarrison c: battering-ram-line)\r\n\t(disable-self)\r\n)"
} ];
cUpUngarrison.relatedCommands = [];

//up-unit-type-in-town
cUpUnitTypeInTown.shortDescription = "Check the number of a specific enemy unit type in town.";
cUpUnitTypeInTown.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The type of unit that will be checked."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpUnitTypeInTown.example = [ {
	title: "Check if there is an enemy knight inside sn-maximum-town-size.",
	data: "(defrule\r\n\t(up-unit-type-in-town c: knight-line &gt; 0)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpUnitTypeInTown.relatedCommands = [];

//up-villager-type-in-town
cUpVillagerTypeInTown.shortDescription = "Check the number of a specific enemy villager type in town.";
cUpVillagerTypeInTown.commandParameters = [ {
	nameLink: pTypeOp.getLink(),
	name: "typeOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter.<br/>Value: c: for consts, g: for goals, or s: for strategic numbers."
}, {
	nameLink: pUnitId.getLink(),
	name: "UnitId",
	type: "Op",
	dir: "in",
	range: "a UnitId",
	note: "The type of villager that will be checked."
}, {
	nameLink: pCompareOp.getLink(),
	name: "compareOp",
	type: "",
	dir: "",
	range: "",
	note: "Sets the expected type of the following parameter for comparison.<br/>Value: c:, g:, s: followed by: &gt;, &gt;=, &lt;, &lt;=, ==, !=<br/>Note: the c: prefix is optional; other prefixes are required."
}, {
	nameLink: pValue.getLink(),
	name: "Value",
	type: "Op",
	dir: "in",
	range: "-32768 to 32767",
	note: "A number for comparison."
} ];
cUpVillagerTypeInTown.example = [ {
	title: "Check if there is a targetable enemy gold miner inside sn-maximum-town-size.",
	data: "(defrule\r\n\t(or\r\n\t\t(up-villager-type-in-town c: gold-miner-m &gt; 0) ; gold-miner-m = 579\r\n\t\t(up-villager-type-in-town c: gold-miner-f &gt; 0) ; gold-miner-f = 581\r\n\t)\r\n=&gt;\r\n\t(do-nothing)\r\n)"
} ];
cUpVillagerTypeInTown.relatedCommands = [];










































//Parameters

//compareOp
pCompareOp.description = "Performs a comparison between two parameters in a command. The prefix determines the expected type of parameter for the second parameter to be compared. There are three possible versions you can use for each operator.";
pCompareOp.shortDescription = "Performs a comparison between two parameters in a command.";
pCompareOp.range = "0 to 5, 7 to 12, 14 to 19.";
pCompareOp.relatedParams = [pMathOp, pTypeOp];
pCompareOp.prefixTypes = [ {
	prefix: "c:",
	description: "Treats the second compared parameter in the command as a constant when doing the comparison. If the second parameter to be compared is a defined value, such as a goal or a unit type, this will use the numeric Id value assigned to this parameter. Note: this prefix is optional for compareOp operators. You can also use the comparison operators without the prefix."
}, {
	prefix: "g:",
	description: "Treats the second compared parameter in the command as a " + pGoalId.getLink() + " and compare to the value stored in that goal. This prefix is required when comparing to a goal's value."
}, {
	prefix: "s:",
	description: "Treats the second compared parameter in the command as a <a href=\"" + urlPrefix + "/strategic-numbers/sn-index.html\">Strategic Number</a> and compare to the value set by that strategic number. This prefix is required when comparing to the strategic number's value."
} ];
pCompareOp.operatorTypes = [ {
	operator: ["c:&#60;", "&#60;", "less-than"],
	id: 0,
	description: "Less than."
}, {
	operator: ["c:&#60;=", "&#60;=","less-or-equal"],
	id: 1,
	description: "Less than or equal."
}, {
	operator: ["c:&#62;", "&#62;", "greater-than"],
	id: 2,
	description: "Greater than."
}, {
	operator: ["c:&#62;=", "&#62;=", "greater-or-equal"],
	id: 3,
	description: "Greater than or equal."
}, {
	operator: ["c:==", "==", "equal"],
	id: 4,
	description: "Equal. Note: one equals sign (=) is an assignment operator used in the " + pMathOp.getLink() + " operator. Always use \"==\" when you want to compare."
}, {
	operator: ["c:!=", "!=", "not-equal"],
	id: 5,
	description: "Not equal."
}, {
	operator: ["g:&#60;", "", ""],
	id: 7,
	description: "Less than the goal's value."
}, {
	operator: ["g:&#60;=", "",""],
	id: 8,
	description: "Less than or equal to the goal's value."
}, {
	operator: ["g:&#62;", "", ""],
	id: 9,
	description: "Greater than the goal's value."
}, {
	operator: ["g:&#62;=", "", ""],
	id: 10,
	description: "Greater than or equal to the goal's value."
}, {
	operator: ["g:==", "", ""],
	id: 11,
	description: "Equal to the goal's value. Note: one equals sign (=) is an assignment operator used in the " + pMathOp.getLink() + " operator. Always use \"==\" when you want to compare."
}, {
	operator: ["g:!=", "", ""],
	id: 12,
	description: "Not equal to the goal's value."
}, {
	operator: ["s:&#60;", "", ""],
	id: 14,
	description: "Less than the strategic number's value."
}, {
	operator: ["s:&#60;=", "",""],
	id: 15,
	description: "Less than or equal to the strategic number's value."
}, {
	operator: ["s:&#62;", "", ""],
	id: 16,
	description: "Greater than the strategic number's value."
}, {
	operator: ["s:&#62;=", "", ""],
	id: 17,
	description: "Greater than or equal to the strategic number's value."
}, {
	operator: ["s:==", "", ""],
	id: 18,
	description: "Equal to the strategic number's value. Note: one equals sign (=) is an assignment operator used in the " + pMathOp.getLink() + " operator. Always use \"==\" when you want to compare."
}, {
	operator: ["s:!=", "", ""],
	id: 19,
	description: "Not equal to the strategic number's value."
} ];

//mathOp
pMathOp.description = "Performs a math operation between two parameters in the command. These two parameters will be called operands in the descriptions below. The prefix determines the expected type of parameter for the second operand."
pMathOp.shortDescription = "Performs a math operation between two parameters in the command.";
pMathOp.range = "0 to 35.";
pMathOp.relatedParams = [pCompareOp, pTypeOp];
pMathOp.prefixTypes = [ {
	prefix: "c:",
	description: "Treats the second operand in the command as a constant when doing the math operation. If the second operand is a defined value, such as a goal or a unit type, this will use the numeric Id value assigned to this operand."
}, {
	prefix: "g:",
	description: "Treats the second operand in the command as a " + pGoalId.getLink() + " and perform the operation with value stored in that goal."
}, {
	prefix: "s:",
	description: "Treats the second operand in the command as a <a href=\"" + urlPrefix + "/strategic-numbers/sn-index.html\">Strategic Number</a> and perform the operation with the value set by that strategic number."
} ];
pMathOp.operatorTypes = [ {
	operator: ["c:="],
	id: 0,
	description: "Set the first operand equal to the constant value of the second operand."
}, {
	operator: ["c:+"],
	id: 1,
	description: "Add the constant value of the second operand to the first operand."
}, {
	operator: ["c:-"],
	id: 2,
	description: "Subtract the constant value of the second operand from the first operand."
}, {
	operator: ["c:*"],
	id: 3,
	description: "Multiply the first operand by the constant value of the second operand."
}, {
	operator: ["c:z/"],
	id: 4,
	description: "Divide the first operand by the constant value of the second operand. The quotient is rounded down to the nearest integer."
}, {
	operator: ["c:/"],
	id: 5,
	description: "Divide the first operand by the constant value of the second operand. The quotient is rounded to the nearest integer."
}, {
	operator: ["c:mod"],
	id: 6,
	description: "Divide the first operand by the constant value of the second operand. Store the remainder instead of the quotient."
}, {
	operator: ["c:min"],
	id: 7,
	description: "Store the smallest value between the first operand and the constant value of the second operand."
}, {
	operator: ["c:max"],
	id: 8,
	description: "Store the largest value between the first operand and the constant value of the second operand."
}, {
	operator: ["c:neg"],
	id: 9,
	description: "Negate the constant value of the second operand and store the result in the first operand."
}, {
	operator: ["c:%*"],
	id: 10,
	description: "Treat the constant value of the second operand as a percentage and find that percentage of the first parameter, rounded to the nearest integer, i.e. (first operand * second operand / 100)."
}, {
	operator: ["c:%/"],
	id: 11,
	description: "Divide the first operand by the constant value of the second operand, and convert the quotient to a percent, rounded to the nearest integer, i.e. (first operand / second operand * 100)."
}, {
	operator: ["g:="],
	id: 12,
	description: "Set the first operand equal to the goal value of the second operand."
}, {
	operator: ["g:+"],
	id: 13,
	description: "Add the goal value of the second operand to the first operand."
}, {
	operator: ["g:-"],
	id: 14,
	description: "Subtract the goal value of the second operand from the first operand."
}, {
	operator: ["g:*"],
	id: 15,
	description: "Multiply the first operand by the goal value of the second operand."
}, {
	operator: ["g:z/"],
	id: 16,
	description: "Divide the first operand by the goal value of the second operand. The quotient is rounded down to the nearest integer."
}, {
	operator: ["g:/"],
	id: 17,
	description: "Divide the first operand by the goal value of the second operand. The quotient is rounded to the nearest integer."
}, {
	operator: ["g:mod"],
	id: 18,
	description: "Divide the first operand by the goal value of the second operand. Store the remainder instead of the quotient."
}, {
	operator: ["g:min"],
	id: 19,
	description: "Store the smallest value between the first operand and the goal value of the second operand."
}, {
	operator: ["g:neg"],
	id: 20,
	description: "Negate the goal value of the second operand and store the result in the first operand."
}, {
	operator: ["g:max"],
	id: 20,
	description: "Store the largest value between the first operand and the goal value of the second operand."
}, {
	operator: ["g:%*"],
	id: 21,
	description: "Treat the goal value of the second operand as a percentage and find that percentage of the first parameter, rounded to the nearest integer, i.e. (first operand * second operand / 100)."
}, {
	operator: ["g:%/"],
	id: 22,
	description: "Divide the first operand by the goal value of the second operand, and convert the quotient to a percent, rounded to the nearest integer, i.e. (first operand / second operand * 100)."
}, {
	operator: ["s:="],
	id: 24,
	description: "Set the first operand equal to the strategic number value of the second operand."
}, {
	operator: ["s:+"],
	id: 25,
	description: "Add the strategic number value of the second operand to the first operand."
}, {
	operator: ["s:-"],
	id: 26,
	description: "Subtract the strategic number value of the second operand from the first operand."
}, {
	operator: ["s:*"],
	id: 27,
	description: "Multiply the first operand by the strategic number value of the second operand."
}, {
	operator: ["s:z/"],
	id: 28,
	description: "Divide the first operand by the strategic number value of the second operand. The quotient is rounded down to the nearest integer."
}, {
	operator: ["s:/"],
	id: 29,
	description: "Divide the first operand by the strategic number value of the second operand. The quotient is rounded to the nearest integer."
}, {
	operator: ["s:mod"],
	id: 30,
	description: "Divide the first operand by the strategic number value of the second operand. Store the remainder instead of the quotient."
}, {
	operator: ["s:min"],
	id: 31,
	description: "Store the smallest value between the first operand and the strategic number value of the second operand."
}, {
	operator: ["s:max"],
	id: 32,
	description: "Store the largest value between the first operand and the strategic number value of the second operand."
}, {
	operator: ["s:neg"],
	id: 33,
	description: "Negate the strategic number value of the second operand and store the result in the first operand."
}, {
	operator: ["s:%*"],
	id: 34,
	description: "Treat the strategic number value of the second operand as a percentage and find that percentage of the first parameter, rounded to the nearest integer, i.e. (first operand * second operand / 100)."
}, {
	operator: ["s:%/"],
	id: 35,
	description: "Divide the first operand by the strategic number value of the second operand, and convert the quotient to a percent, rounded to the nearest integer, i.e. (first operand / second operand * 100)."
} ];

//typeOp
pTypeOp.description = "Sets the expected type of the parameter that follows in the command. Unlike " + pCompareOp.getLink() + " and " + pMathOp.getLink() + ", typeOp is just the prefix. No operator follows.";
pTypeOp.shortDescription = "Sets the expected type of the parameter that follows in the command.";
pTypeOp.range = "6, 13, or 20.";
pTypeOp.relatedParams = [pCompareOp, pMathOp];
pTypeOp.operatorTypes = [ {
	operator: ["c:"],
	id: 6,
	description: "Treats the following parameter as a constant. If the following parameter is a defined value, such as a goal or a unit type, this will use the numeric Id value assigned to this parameter."
}, {
	operator: ["g:"],
	id: 13,
	description: "Treats the following parameter as a goal and reference the value that the goal is set to."
}, {
	operator: ["s:"],
	id: 20,
	description: "Treats the following parameter as a strategic number and reference the value that the strategic number is set to."
} ];

//ActionId
pActionId.description = "The current action(s) of an object. Sometimes an object can have more than one current action, such as a villager having the actions actionid-hunt and actionid-gather. It's also often wise to check an object's " + pOrderId.getLink() + " since orders last longer.";
pActionId.shortDescription = "The current action(s) of an object.";
pActionId.range = "-1, 600 to 699.";
pActionId.relatedParams = [pGroupType, pIdleType, pObjectData, pOrderId, pTargetAction];
pActionId.valueList = [ {
	name: "-1",
	id: -1,
	description: "Use -1 to ignore the ActionId of the object."
}, {
	name: "actionid-attack",
	id: 600,
	description: "The object is attacking."
}, {
	name: "actionid-defend",
	id: 601,
	description: "The unit is defending. According to scripter64, this is hard to detect, because it quickly changes to other actions like actionid-move."
}, {
	name: "actionid-build",
	id: 602,
	description: "The villager or fishing ship is building."
}, {
	name: "actionid-heal",
	id: 603,
	description: "The monk or missionary is healing."
}, {
	name: "actionid-convert",
	id: 604,
	description: "The monk or missionary is converting"
}, {
	name: "actionid-explore",
	id: 605,
	description: "A unit is exploring."
}, {
	name: "actionid-stop",
	id: 606,
	description: "A unit is stopping its action."
}, {
	name: "actionid-runaway",
	id: 607,
	description: "Unknown? Could be non-combat units trying to get away from soldiers attacking them."
}, {
	name: "actionid-retreat",
	id: 608,
	description: "Unknown. Probably either retreating during a " + cUpRetreatNow.getLink() + " or " + cUpRetreatTo.getLink() + " command, or retreating because of minimum range or " + dpAbilityToMaintainDistance.getLink() + "."
}, {
	name: "actionid-gather",
	id: 609,
	description: "Unknown, but probably gathering to form an attack group or to get into formation."
}, {
	name: "actionid-move",
	id: 610,
	description: "A unit that is moving."
}, {
	name: "actionid-patrol",
	id: 611,
	description: "A unit that is patrolling."
}, {
	name: "actionid-follow",
	id: 612,
	description: "A unit that is following."
}, {
	name: "actionid-hunt",
	id: 613,
	description: "A villager that is hunting. Untested if this also includes attacking wolves."
}, {
	name: "actionid-transport",
	id: 614,
	description: "A transport ship that is transporting units. Might also include transport ships that are on their way to picking up units."
}, {
	name: "actionid-trade",
	id: 615,
	description: "A trade unit that is trading."
}, {
	name: "actionid-evade",
	id: 616,
	description: "Could be units dodging missiles because of " + dpAbilityToDodgeMissiles.getLink() + "."
}, {
	name: "actionid-enter",
	id: 617,
	description: "A unit that is garrisoning inside a building, ram, or a transport ship. It may also include objects that are currently garrisoned."
}, {
	name: "actionid-repair",
	id: 618,
	description: "A villager that is repairing a building."
}, {
	name: "actionid-train",
	id: 619,
	description: "A building that is training a unit."
}, {
	name: "actionid-research",
	id: 620,
	description: "A building that is researching a technology."
}, {
	name: "actionid-unload",
	id: 621,
	description: "A transport ship that is unloading units."
}, {
	name: "actionid-relic",
	id: 631,
	description: "A monk trying to pick up a relic."
} ];

//Age
pAge.description = "A valid age. " + cStartingAge.getLink() + " facts can also use post-imperial-age.";
pAge.shortDescription = "A valid age.";
pAge.range = "0 to 3, or 105.";
pAge.valueList = [ {
	name: "dark-age",
	id: 0,
	description: "Dark Age."
}, {
	name: "feudal-age",
	id: 1,
	description: "Feudal Age."
}, {
	name: "castle-age",
	id: 2,
	description: "Castle Age."
}, {
	name: "imperial-age",
	id: 3,
	description: "Dark Age."
}, {
	name: "post-imperial-age",
	id: 105,
	description: "Post-Imperial Age. Can only be used with " + cStartingAge.getLink() + " facts."
} ];

//AllyPlayer
pAllyPlayer.description = "A " + pPlayerId.getLink() + ". The command will fail if that player's stance toward the AI player is not ally. Can be used with self.";
pAllyPlayer.shortDescription = "An allied PlayerId.";
pAllyPlayer.range = "Valid player IDs can be the following:</p>" +
	"<ul><li>1-8: The player's " + pPlayerId.getLink() + ", if allied.</li>" +
	"<li>my-player-number: retrieves the player number for self.</li>" +
	"<li>target-player: the current value of " + snTargetPlayerNumber.getLink() + ", if allied." +
	"<li>focus-player: the current value of " + snFocusPlayerNumber.getLink() + ", if allied." +
	"<li>Any wildcard parameter below:</li>" +
	"<li>Any rule variable below, if the command supports it:</li></ul>";
pAllyPlayer.relatedParams = [pAnyPlayer, pColorId, pComputerAllyPlayer, pPlayerId];
pAllyPlayer.wildcardParam = [ {
	name: "any-ally",
	id: -101,
	description: "Any allied player. Can't be used with " + cUpSetPlacementData.getLink() + "."
}, {
	name: "any-computer-ally",
	id: -103,
	description: "Any computer ally. Can't be used with " + cUpSetPlacementData.getLink() + "."
}, {
	name: "any-human-ally",
	id: -108,
	description: "Any human ally. Can't be used with " + cUpSetPlacementData.getLink() + "."
}, {
	name: "every-ally",
	id: -201,
	description: "Every allied player. Can't be used with " + cUpSetPlacementData.getLink() + "."
} ];
pAllyPlayer.ruleVariables = [ {
	name: "this-any-ally",
	id: 101,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-ally earlier in the rule."
}, {
	name: "this-any-computer-ally",
	id: 103,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-computer-ally earlier in the rule."
}, {
	name: "this-any-human-ally",
	id: 108,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-human-ally earlier in the rule."
} ];

//AnyPlayer
pAnyPlayer.description = "Any " + pPlayerId.getLink() + ".";
pAnyPlayer.shortDescription = "Any PlayerId.";
pAnyPlayer.range = "Valid player IDs can be the following:</p>" +
	"<ul><li>0: Gaia.</li>" +
	"<li>1-8: The player's " + pPlayerId.getLink() + ".</li>" +
	"<li>my-player-number: retrieves the player number for self.</li>" +
	"<li>target-player: the current value of " + snTargetPlayerNumber.getLink() + "." +
	"<li>focus-player: the current value of " + snFocusPlayerNumber.getLink() + "." +
	"<li>Any wildcard parameter below:</li>" +
	"<li>Any rule variable below, if the command supports it:</li></ul>";
pAnyPlayer.relatedParams = [pAllyPlayer, pColorId, pComputerAllyPlayer, pPlayerId];
pAnyPlayer.wildcardParam = [ {
	name: "any-ally",
	id: -101,
	description: "Any allied player."
}, {
	name: "any-computer",
	id: -102,
	description: "Any computer player."
}, {
	name: "any-computer-ally",
	id: -103,
	description: "Any computer ally."
}, {
	name: "any-computer-enemy",
	id: -104,
	description: "Any computer enemy."
}, {
	name: "any-computer-neutral",
	id: -105,
	description: "Any neutral computer player."
}, {
	name: "any-enemy",
	id: -106,
	description: "Any enemy player."
}, {
	name: "any-human",
	id: -107,
	description: "Any human player."
}, {
	name: "any-human-ally",
	id: -108,
	description: "Any human ally."
}, {
	name: "any-human-enemy",
	id: -109,
	description: "Any human enemy."
}, {
	name: "any-human-neutral",
	id: -110,
	description: "Any neutral human player."
}, {
	name: "any-neutral",
	id: -111,
	description: "Any neutral player."
}, {
	name: "every-ally",
	id: -201,
	description: "Every allied player."
}, {
	name: "every-computer",
	id: -202,
	description: "Every computer player."
}, {
	name: "every-enemy",
	id: -203,
	description: "Every enemy player."
}, {
	name: "every-human",
	id: -204,
	description: "Every human player."
}, {
	name: "every-neutral",
	id: -205,
	description: "Every neutral player."
} ];
pAnyPlayer.ruleVariables = [ {
	name: "this-any-ally",
	id: 101,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-ally earlier in the rule."
}, {
	name: "this-any-computer",
	id: 102,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-computer earlier in the rule."
}, {
	name: "this-any-computer-ally",
	id: 103,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-computer-ally earlier in the rule."
}, {
	name: "this-any-computer-enemy",
	id: 104,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-computer-enemy earlier in the rule."
}, {
	name: "this-any-computer-neutral",
	id: 105,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-computer-neutral earlier in the rule."
}, {
	name: "this-any-enemy",
	id: 106,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-enemy earlier in the rule."
}, {
	name: "this-any-human",
	id: 107,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-human earlier in the rule."
}, {
	name: "this-any-human-ally",
	id: 108,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-human-ally earlier in the rule."
}, {
	name: "this-any-human-enemy",
	id: 109,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-human-enemy earlier in the rule."
}, {
	name: "this-any-human-neutral",
	id: 110,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-human-neutral earlier in the rule."
}, {
	name: "this-any-neutral",
	id: 111,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-any-neutral earlier in the rule."
} ];

//AttackStance
pAttackStance.description = "Controls the attack stance of military units.";
pAttackStance.shortDescription = "Controls the attack stance of military units.";
pAttackStance.range = "-1 to 3 (-1 is invalid for " + cUpSetAttackStance.getLink() + ").";
pAttackStance.relatedParams = [pFormation];
pAttackStance.valueList = [ {
	name: "-1",
	id: -1,
	description: "Do not set a new attack stance."
}, {
	name: "stance-aggressive",
	id: 0,
	description: "Aggressive Stance. Soldiers will attack all enemy objects in line of sight and chase them."
}, {
	name: "stance-defensive",
	id: 1,
	description: "Defensive Stance. Soldiers will attack most enemy objects in line of sight, but they will return to their original location if the enemy objects leave the area."
}, {
	name: "stance-stand-ground",
	id: 2,
	description: "Stand Ground Stance. Soldiers will only attack enemy objects if they can attack the unit from their current location."
}, {
	name: "stance-no-attack",
	id: 3,
	description: "No Attack Stance. Soldiers will only attack if ordered to target an object through DUC."
} ];

//Border
pBorder.description = "The border width for bounding the point.</p><p>Please ensure that Border is a valid value and will not cause an overflow for the map size. If Precise is set to 1 in the " + cUpBoundPrecisePoint.getLink() + " command, the map size will be multiplied by 100 before bounding, so the border should be adjusted accordingly.";
pBorder.shortDescription = "The border width for bounding the point.";
pBorder.range = "0 to 32767.";
pBorder.relatedParams = [pPoint, pPositionType, pPrecise, pTiles];

//BuildingId
pBuildingId.description = "A building object, either the defined building type name, the object ID assigned to it, or the building's class. Sometimes can also be a building line. See the <a href=\"" + urlPrefix + "/resources/tables/objects.html\">Objects Table</a> for reference.";
pBuildingId.shortDescription = "A building object, either the defined building type name, the object ID assigned to it, or the building's class.";
pBuildingId.range = "A valid building ID.";
pBuildingId.relatedParams = [pClassId, pObjectId, pId, pTypeId, pUnitId, pUpgradeId, pWallId];
pBuildingId.wildcardParam = [ {
	name: "watch-tower-line",
	id: -398,
	description: "Watch Tower line. Bugged. Won't include Guard Tower or Keep in counting commands. \"watch-tower\" by itself usually works in non-counting commands."
} ];

//Civ
pCiv.description = "The player's civilization. You may need to define some civilizations with a defconst.";
pCiv.shortDescription = "The player's civilization.";
pCiv.range = "0 to 18 for The Conquerors game version. 0 to 31 for AoK:HD and Wololo Kingdoms versions. 0 to 35 for AoE2:DE.";
pCiv.valueList = [ {
	name: "gaia",
	id: 0,
	description: "Gaia"
}, {
	name: "briton",
	id: 1,
	description: "Britons"
}, {
	name: "frankish",
	id: 2,
	description: "Franks"
}, {
	name: "gothic",
	id: 3,
	description: "Goths"
}, {
	name: "teutonic",
	id: 4,
	description: "Teutons"
}, {
	name: "japanese",
	id: 5,
	description: "Japanese"
}, {
	name: "chinese",
	id: 6,
	description: "Chinese"
}, {
	name: "byzantine",
	id: 7,
	description: "Byzantines"
}, {
	name: "persian",
	id: 8,
	description: "Persians"
}, {
	name: "saracen",
	id: 9,
	description: "Saracens"
}, {
	name: "turkish",
	id: 10,
	description: "Turks"
}, {
	name: "viking",
	id: 11,
	description: "Vikings"
}, {
	name: "mongol",
	id: 12,
	description: "Mongols"
}, {
	name: "celtic",
	id: 13,
	description: "Celts"
}, {
	name: "spanish",
	id: 14,
	description: "Spanish"
}, {
	name: "aztec",
	id: 15,
	description: "Aztecs"
}, {
	name: "mayan",
	id: 16,
	description: "Mayans"
}, {
	name: "hun",
	id: 17,
	description: "Huns"
}, {
	name: "korean",
	id: 18,
	description: "Koreans"
}, {
	name: "italian",
	id: 19,
	description: "Italians"
}, {
	name: "indian",
	id: 20,
	description: "Indians"
}, {
	name: "incan",
	id: 21,
	description: "Incas"
}, {
	name: "magyar",
	id: 22,
	description: "Magyars"
}, {
	name: "slavic",
	id: 23,
	description: "Slavs"
}, {
	name: "portuguese",
	id: 24,
	description: "Portuguese"
}, {
	name: "ethiopian",
	id: 25,
	description: "Ethiopians"
}, {
	name: "malian",
	id: 26,
	description: "Malians"
}, {
	name: "berbers",
	id: 27,
	description: "Berbers"
}, {
	name: "khmer",
	id: 28,
	description: "Khmer"
}, {
	name: "malay",
	id: 29,
	description: "Malay"
}, {
	name: "burmese",
	id: 30,
	description: "Burmese"
}, {
	name: "vietnamese",
	id: 31,
	description: "Vietnamese"
}, {
	name: "bulgarians",
	id: 32,
	description: "Bulgarians"
}, {
	name: "tatars",
	id: 33,
	description: "Tatars"
}, {
	name: "cumans",
	id: 34,
	description: "Cumans"
}, {
	name: "lithuanians",
	id: 35,
	description: "Lithuanians"
} ];

//ClassId
pClassId.description = "A class ID. Each object in the game is assigned a class that contains other similar objects. Class IDs can often be used in place of a unit ID. Classes with an asterisk (*) in the name must be defined with a defconst. All other classes are defined in the UserPatchConst.per file that comes with a UserPatch installation.</p><p>See the <a href=\"" + urlPrefix + "/resources/tables/objects.html\">Objects Table</a> to see which units belong to each class.";
pClassId.shortDescription = "A class ID.";
pClassId.range = "-1, 900 to 999.";
pClassId.relatedParams = [pBuildingId, pCmdId, pObjectId, pSourceClass, pTargetClass, pTypeId, pUnitId];
pClassId.valueList = [ {
	name: "all-units-class",
	id: -1,
	description: "All Units class. Counts all objects."
}, {
	name: "archery-class",
	id: 900,
	description: "Foot archer class."
}, {
	name: "artifact-class*",
	id: 901,
	description: "Artifact class. Mostly includes convertible objects like Monuments."
}, {
	name: "trade-cog-class*",
	id: 902,
	description: "Trade Cog class."
}, {
	name: "building-class",
	id: 903,
	description: "Buildings class. Doesn't include all buildings, like towers and walls."
}, {
	name: "villager-class",
	id: 904,
	description: "Villager class."
}, {
	name: "ocean-fish-class",
	id: 905,
	description: "Ocean fish class. Excludes shore fish."
}, {
	name: "infantry-class",
	id: 906,
	description: "Infantry class."
}, {
	name: "forage-class*",
	id: 907,
	description: "Forage class. Includes forage and fruit bushes."
}, {
	name: "stone-mine-class*",
	id: 908,
	description: "Stone Mine class."
}, {
	name: "prey-animal-class*",
	id: 909,
	description: "Prey Animal class. Includes deer and its variants."
}, {
	name: "predator-animal-class*",
	id: 910,
	description: "Predator Animal class. Includes boar, boar variants, and wolves."
}, {
	name: "miscellaneous-class*",
	id: 911,
	description: "Miscellaneous class. Mostly dead versions of units and eye candy."
}, {
	name: "cavalry-class",
	id: 912,
	description: "Cavalry class. Doesn't include all mounted units. Scout cavalry are excluded, but Light Cavalry and Hussar are included."
}, {
	name: "siege-weapon-class",
	id: 913,
	description: "Siege Weapons class. Doesn't include trebuchets, scorpions, or petards."
}, {
	name: "terrain-class*",
	id: 914,
	description: "Terrain class. Map objects like mountains, bridges, and flowers."
}, {
	name: "tree-class*",
	id: 915,
	description: "Tree class."
}, {
	name: "monastery-class",
	id: 918,
	description: "Monastery class. Includes monks and missionaries. Doesn't include monasteries. Doesn't include monks carrying relics."
}, {
	name: "trade-cart-class*",
	id: 919,
	description: "Trade Cart class."
}, {
	name: "transport-ship-class*",
	id: 920,
	description: "Transport Ship class."
}, {
	name: "fishing-ship-class*",
	id: 921,
	description: "Fishing Ship Class."
}, {
	name: "warship-class",
	id: 922,
	description: "Warship class."
}, {
	name: "cavalry-cannon-class",
	id: 923,
	description: "Cavalry Cannon class. Includes Conquistadors and Arambai."
}, {
	name: "wall-class",
	id: 927,
	description: "Wall class."
}, {
	name: "flare-class*",
	id: 930,
	description: "Flare class. Includes flares, flags, and map revealers."
}, {
	name: "gold-mine-class*",
	id: 932,
	description: "Gold Mine class."
}, {
	name: "shore-fish-class",
	id: 933,
	description: "Shore Fish class."
}, {
	name: "petard-class",
	id: 935,
	description: "Petard class."
}, {
	name: "cavalry-archer-class",
	id: 936,
	description: "Cavalry Archer class."
}, {
	name: "gate-class",
	id: 939,
	description: "Gate class."
}, {
	name: "relic-class*",
	id: 942,
	description: "Relic class."
}, {
	name: "monk-with-relic-class*",
	id: 943,
	description: "Monk With Relic class."
}, {
	name: "archery-cannon-class",
	id: 944,
	description: "Archery Cannon class. Includes Hand Cannoneers and Janissaries."
}, {
	name: "scout-cavalry-class*",
	id: 947,
	description: "Scout Cavalry class."
}, {
	name: "farm-class",
	id: 949,
	description: "Farm class. Includes Fish Traps."
}, {
	name: "packed-trebuchet-class",
	id: 951,
	description: "Packed Trebuchet class."
}, {
	name: "tower-class",
	id: 952,
	description: "Tower class."
}, {
	name: "unpacked-trebuchet-class",
	id: 954,
	description: "Unpacked Trebuchet class."
}, {
	name: "scorpion-class",
	id: 955,
	description: "Scorpion class."
}, {
	name: "livestock-class",
	id: 958,
	description: "Livestock class."
}, {
	name: "king-class*",
	id: 959,
	description: "King class."
} ];

//CmdId
pCmdId.description = "An object's command ID. The command ID (or interface type) determines the available actions for the object or which actions display in the bottom left corner when the object is selected. To determine an objects command ID, look up the object's Interface Type in the Advanced Genie Editor.";
pCmdId.shortDescription = "An object's command ID.";
pCmdId.range = "-1 to 10.";
pCmdId.relatedParams = [pClassId];
pCmdId.valueList = [ {
	name: "cmdid-flag",
	id: 0,
	description: "Flag command ID. This command ID really just means the object lacks available commands and is used by most Gaia objects and dead unit IDs."
}, {
	name: "cmdid-livestock-gaia",
	id: 1,
	description: "Gaia livestock command ID. Also includes wild animals and resources."
}, {
	name: "cmdid-civilian-building",
	id: 2,
	description: "Non-military buildings command ID."
}, {
	name: "cmdid-villager",
	id: 3,
	description: "Villager command ID."
}, {
	name: "cmdid-military",
	id: 4,
	description: "Military command ID. Used by military soldiers, siege weapons, and warships."
}, {
	name: "cmdid-trade",
	id: 5,
	description: "Trade units command ID. Includes both Trade Carts and Trade Cogs."
}, {
	name: "cmdid-monk",
	id: 6,
	description: "Monk and Missionary command ID."
}, {
	name: "cmdid-transport",
	id: 7,
	description: "Transport Ship command ID."
}, {
	name: "cmdid-relic",
	id: 8,
	description: "Relic units command ID. Includes monks carrying relics."
}, {
	name: "cmdid-fishing-ship",
	id: 9,
	description: "Fishing Ship command ID."
}, {
	name: "cmdid-military-building",
	id: 10,
	description: "Military Buildings command ID."
} ];

//Code
pCode.description = "A string (quoted text) containing only a valid cheat code.";
pCode.shortDescription = "A string (quoted text) containing only a valid cheat code.";
pCode.range = "A string (quoted text).";
pCode.relatedParams = [pFormattedString, pLanguageId, pNewName, pString, pText];

//ColorId
pColorId.description = "A color number ID. These colors correspond with the player number color where 1 = Blue, 2 = Red, etc. Each color will always return the same color ID, even if it doesn't match the player number. If player 4 is Blue, player 4's ColorId will still be 1.";
pColorId.shortDescription = "A color number ID.";
pColorId.range = "1 to 8.";
pColorId.relatedParams = [pAllyPlayer, pAnyPlayer, pComputerAllyPlayer, pPlayerId];

//Commodity
pCommodity.description = "A resource that can be bought or sold. Gold is not a commodity.";
pCommodity.shortDescription = "A resource that can be bought or sold. Gold is not a commodity.";
pCommodity.range = "0 to 2.";
pCommodity.relatedParams = [pResource, pResourceAmount];
pCommodity.valueList = [ {
	name: "food",
	id: 0,
	description: "Food"
}, {
	name: "wood",
	id: 1,
	description: "Wood"
}, {
	name: "stone",
	id: 2,
	description: "Stone"
} ];

//ComputerAllyPlayer
pComputerAllyPlayer.description = "A " + pPlayerId.getLink() + ". The command will fail if that player's stance toward the AI player is not ally or if the player is a human. Can be used with self.";
pComputerAllyPlayer.shortDescription = "An allied computer player PlayerId.";
pComputerAllyPlayer.range = "Valid player IDs can be the following:</p>" +
	"<ul><li>1-8: The player's " + pPlayerId.getLink() + ".</li>" +
	"<li>my-player-number: retrieves the player number for self.</li>" +
	"<li>target-player: the current value of " + snTargetPlayerNumber.getLink() + ", if a computer ally." +
	"<li>focus-player: the current value of " + snFocusPlayerNumber.getLink() + ", if a computer ally." +
	"<li>Any wildcard parameter below:</li>" +
	"<li>Any rule variable below, if the command supports it:</li></ul>";
pComputerAllyPlayer.relatedParams = [pAllyPlayer, pAnyPlayer, pColorId, pPlayerId];
pComputerAllyPlayer.wildcardParam = [ {
	name: "any-computer-ally",
	id: -103,
	description: "Any computer ally."
} ];
pComputerAllyPlayer.ruleVariables = [ {
	name: "this-any-computer-ally",
	id: 103,
	description: "The " + pPlayerId.getLink() + " successfully found during a search for any-computer-ally earlier in the rule."
} ];

//Count
pCount.description = "Can mean multiple things depending on the command, but it generally means a value that represents a counted amount.";
pCount.shortDescription = "Can mean multiple things depending on the command, but it generally means a value that represents a counted amount.";
pCount.range = "-32768 to 32767, although some commands have a much smaller usable range. Please view a command that uses the Count parameter to see the usable range for that particular command.";
pCount.relatedParams = [pSize, pValue];

//Data
pData.description = "A goal to store the data output of a command.";
pData.shortDescription = "A goal to store the data output of a command.";
pData.range = "a valid GoalId, max range of GoalId is 1 to 512.";
pData.relatedParams = [pObjectData];

//Difficulty
pDifficulty.description = "The current difficulty level. The ordering of difficulty settings is the opposite of what one would expect!: easiest > easy > moderate > hard > hardest. Make sure that this is taken in account when using facts to compare difficulties.";
pDifficulty.shortDescription = "The current difficulty level.";
pDifficulty.range = "0 to 4. Range is -1 to 4 for AoE2:DE.";
pDifficulty.relatedParams = [pDiffParameterId];
pDifficulty.valueList = [ {
	name: "extreme",
	id: -1,
	description: "Extreme difficulty. Defined only for AoE2:DE."
}, {
	name: "hardest",
	id: 0,
	description: "Hardest difficulty."
}, {
	name: "hard",
	id: 1,
	description: "Hard difficulty."
}, {
	name: "moderate",
	id: 2,
	description: "Moderate difficulty."
}, {
	name: "easy",
	id: 3,
	description: "Easy difficulty. Same as Standard difficulty."
}, {
	name: "easiest",
	id: 4,
	description: "Easiest difficulty."
} ];

//DiffParameterId
pDiffParameterId.description = "A Difficulty Parameter ID.";
pDiffParameterId.shortDescription = "A Difficulty Parameter ID.";
pDiffParameterId.range = "0 to 1.";
pDiffParameterId.relatedParams = [pDifficulty, pSnId];
pDiffParameterId.valueList = [ {
	name: "ability-to-maintain-distance",
	id: 0,
	description: "Chance that a computer player's ranged unit will maintain the distance."
}, {
	name: "ability-to-dodge-missiles",
	id: 1,
	description: "Chance of a computer player's unit dodging a missile."
} ];

//Distance
pDistance.description = "The distance between two points. Always stored in a goal.";
pDistance.shortDescription = "The distance between two points. Always stored in a goal.";
pDistance.range = "A valid GoalId. Max range for a GoalId is 1 to 512.";
pDistance.relatedParams = [pMaxDistance, pMinDistance, pPercent, pPerimeter, pPoint, pPrecise, pStrict, pTiles];

//ElapsedTime
pElapsedTime.description = "The elapsed time in milliseconds, usually the elapsed time after an event like an attack threat or a projectile firing.";
pElapsedTime.shortDescription = "The elapsed time in milliseconds.";
pElapsedTime.range = "A valid integer.";
pElapsedTime.relatedParams = [pStart, pTime, pTimerId, pTimerState];

//EscrowState
pEscrowState.description = "A goal ID that is set to the value &quot;with-escrow&quot; or the value &quot;without-escrow&quot;. Note that using the constants &quot;with-escrow&quot; or &quot;without-escrow&quot; themselves for EscrowState is not valid. If you don't want to check for escrow at all, use 0 for EscrowState instead of a goal ID.";
pEscrowState.shortDescription = "A goal ID that is set to the value &quot;with-escrow&quot; or the value &quot;without-escrow&quot;.";
pEscrowState.range = "0 or a valid GoalId, ranging from 1 to 512.";
pEscrowState.relatedParams = [];

//ESPlayerStance
pESPlayerStance.description = "A player's diplomatic stance. Note that the UP option &quot;any&quot; is not available with this parameter. This option is only available with the UP-only " + pPlayerStance.getLink() + " parameter.";
pESPlayerStance.shortDescription = "A player's diplomatic stance, not including the \"any\" option.";
pESPlayerStance.range = "0, 1, or 3.";
pESPlayerStance.relatedParams = [pPlayerStance];
pESPlayerStance.valueList = [ {
	name: "ally",
	id: 0,
	description: "Ally."
}, {
	name: "neutral",
	id: 1,
	description: "Neutral."
}, {
	name: "enemy",
	id: 3,
	description: "Enemy."
} ];

//EventId
pEventId.description = "The event ID. The only valid events are AI Script Goal effects and AI Signal conditions in scenario triggers. The ID matches the number of the chosen option from the trigger condition/effect. Note: the &quot;AI Trigger 256&quot; option in the AI Script Goal effect cannot be detected by AIs.";
pEventId.shortDescription = "The event ID.";
pEventId.range = "0 to 255.";
pEventId.relatedParams = [pEventType, pSignalId];

//EventType
pEventType.description = "The type of the event. Triggers are the only valid event types.";
pEventType.shortDescription = "The type of the event.";
pEventType.range = "0.";
pEventType.relatedParams = [pEventId, pSignalId];
pEventType.valueList = [ {
	name: "trigger",
	id: 0,
	description: "Trigger"
} ];

//ExploredState
pExploredState.description = "The exploration state of the point.";
pExploredState.shortDescription = "The exploration state of the point.";
pExploredState.range = "0, 15, 128 (see Defined Values List).";
pExploredState.relatedParams = [pPoint, pPositionType, pScoutMethod];
pExploredState.valueList = [ {
	name: "explored-no",
	id: 0,
	description: "Point has not been explored."
}, {
	name: "explored-active",
	id: 15,
	description: "Point is currently visible by an object."
}, {
	name: "explored-yes",
	id: 128,
	description: "Point has been seen in the past."
} ];

//Extension
pExtension.description = "Set to 1 to include the map file extension. If set to 0, the map file extension will not be included.";
pExtension.shortDescription = "Set to 1 to include the map file extension.";
pExtension.range = "0 or 1.";
pExtension.relatedParams = [pMapType, pFormattedString, pString, pText];

//FactId
pFactId.description = "Selects the fact type to be checked and stored in a goal. Each FactId corresponds to a normal Fact except for cc-gaia-type-count.";
pFactId.shortDescription = "Selects the fact type to be checked and stored in a goal.";
pFactId.range = "0 to 53.";
pFactId.relatedParams = [pFindPlayerMethod, pGuardState, pLimit, pObjectData, pParam, pResourceAmount, pType];
pFactId.valueList = [ {
	name: "game-time",
	id: 0,
	description: "The elapsed game time in seconds."
}, {
	name: "population-cap",
	id: 1,
	description: "The population cap setting."
}, {
	name: "population-headroom",
	id: 2,
	description: "The population headroom. Population headroom is the difference between the game's population cap and current housing capacity."
}, {
	name: "housing-headroom",
	id: 3,
	description: "The housing headroom. Housing headroom is the difference between current housing capacity and trained unit capacity."
}, {
	name: "idle-farm-count",
	id: 4,
	description: "The number of farms with no farmers. "
}, {
	name: "food-amount",
	id: 5,
	description: "The current food amount."
}, {
	name: "wood-amount",
	id: 6,
	description: "The current wood amount."
}, {
	name: "stone-amount",
	id: 7,
	description: "The current stone amount."
}, {
	name: "gold-amount",
	id: 8,
	description: "The current gold amount."
}, {
	name: "escrow-amount",
	id: 9,
	description: "The current amount of escrowed resources for the given resource type."
}, {
	name: "commodity-buying-price",
	id: 10,
	description: "The current buying price for the given commodity type."
}, {
	name: "commodity-selling-price",
	id: 11,
	description: "The current selling price for the given commodity type."
}, {
	name: "dropsite-min-distance",
	id: 12,
	description: "The minimum dropsite walking distance for the given resource type."
}, {
	name: "soldier-count",
	id: 13,
	description: "The number of the player's land-based military units."
}, {
	name: "attack-soldier-count",
	id: 14,
	description: "The number of the player's currently attacking land-based military units. This only counts attacking soldiers during attack-groups and attack-now attacks."
}, {
	name: "defend-soldier-count",
	id: 15,
	description: "The number of the player's currently defending land-based military units. This only counts soldiers that aren't part of attack-groups and attack-now attacks. It includes idle military units not actively defending the player's town."
}, {
	name: "warboat-count",
	id: 16,
	description: "The number of the player's warships, including transport ships."
}, {
	name: "attack-warboat-count",
	id: 17,
	description: "The number of the player's currently attacking warships. This only counts attacking warships during attack-groups and attack-now attacks."
}, {
	name: "defend-warboat-count",
	id: 18,
	description: "The number of the player's currently defending warships. This only counts warships that aren't part of attack-groups and attack-now attacks. It includes idle warships not actively defending the player's town."
}, {
	name: "current-age",
	id: 19,
	description: "The player's current age. Can be used with any player number."
}, {
	name: "current-score",
	id: 20,
	description: "The player's current score. Can be used with any player number."
}, {
	name: "civilization",
	id: 21,
	description: "The player's civilization. Can be used with any player number."
}, {
	name: "player-number",
	id: 22,
	description: "The player's player number. Can be used with any player number."
}, {
	name: "player-in-game",
	id: 23,
	description: "Checks whether the player is valid and still playing. Can be used with any player number."
}, {
	name: "unit-count",
	id: 24,
	description: "The number of units the player has. Can be used with any player number."
}, {
	name: "unit-type-count",
	id: 25,
	description: "The number of a given type of unit a player has, excluding units currently training. Can be used with any player number."
}, {
	name: "unit-type-count-total",
	id: 26,
	description: "The number of a given type of unit a player has, including units currently training. Used only with my-player-number."
}, {
	name: "building-count",
	id: 27,
	description: "The number of buildings a player has. Can be used with any player number."
}, {
	name: "building-type-count",
	id: 28,
	description: "The number of a given type of buildings a player has. Can be used with any player number."
}, {
	name: "building-type-count-total",
	id: 29,
	description: "The number of a given type of building a player has, including buildings currently under construction."
}, {
	name: "population",
	id: 30,
	description: "The player's current population. Can be used with any player number."
}, {
	name: "military-population",
	id: 31,
	description: "The player's military population, including monks and Transport Ships. Can be used with any player number."
}, {
	name: "civilian-population",
	id: 32,
	description: "The player's civilian population, including Fishing Ships and trade units. Can be used with any player number."
}, {
	name: "random-number",
	id: 33,
	description: "The current random number value generated the last time the " + cGenerateRandomNumber.getLink() + " command was used."
}, {
	name: "resource-amount",
	id: 34,
	description: "The current stockpile amount of the given " + pResourceAmount.getLink() + "."
}, {
	name: "player-distance",
	id: 35,
	description: "The from the AI's town center to the nearest building of the given player number. Can be used with any player number."
}, {
	name: "allied-goal",
	id: 36,
	description: "The current value of an allied AI player's goal variable. Can be used with any player number."
}, {
	name: "allied-sn",
	id: 37,
	description: "The current value of an allied AI player's strategic number. Can be used with any player number."
}, {
	name: "resource-percent",
	id: 38,
	description: "The current amount of the given " + pResourceAmount.getLink() + " * 100."
}, {
	name: "enemy-buildings-in-town",
	id: 39,
	description: "The number of enemy buildings inside the AI's town."
}, {
	name: "enemy-units-in-town",
	id: 40,
	description: "The number of enemy units inside the AI's town."
}, {
	name: "enemy-villagers-in-town",
	id: 41,
	description: "The number of enemy villagers inside the AI's town."
}, {
	name: "players-in-game",
	id: 42,
	description: "The number of players in the game that match the given " + pPlayerStance.getLink() + " . To get the total number of players, use &quot;any&quot as the PlayersStance."
}, {
	name: "defender-count",
	id: 43,
	description: "The number of soldiers actively defending its town. This only includes soldiers targeting buildings inside the AI's town."
}, {
	name: "building-type-in-town",
	id: 44,
	description: "The number of enemy buildings of the given type inside the AI's town."
}, {
	name: "unit-type-in-town",
	id: 45,
	description: "The number of enemy units of the given type inside the AI's town."
}, {
	name: "villager-type-in-town",
	id: 46,
	description: "The number of enemy villagers of the given type inside the AI's town."
}, {
	name: "gaia-type-count",
	id: 47,
	description: "The number of currently sighted Gaia resources of the given type."
}, {
	name: "gaia-type-count-total",
	id: 48,
	description: "The total number of sighted Gaia resources of the given type."
}, {
	name: "cc-gaia-type-count",
	id: 49,
	description: "The total number of the given Gaia resource that currently exists on the map, regardless of whether the AI has explored it. This is the only FactId that does not a corresponding Fact. If you need to do a comparison with the total number of a given Gaia resource on the map, use " + cCcPlayersUnitTypeCount.getLink() + " with Gaia as the player number instead."
}, {
	name: "current-age-time",
	id: 50,
	description: "The time the player has spent in the current age. Can be used with any player number."
}, {
	name: "timer-status",
	id: 51,
	description: "The status of a timer, either timer-disabled, timer-running, or timer-triggered."
}, {
	name: "players-tribute",
	id: 52,
	description: "The amount of the given resource for the given player throughout the game."
}, {
	name: "players-tribute-memory",
	id: 53,
	description: "The amount of the given resource for the given player since the tribute memory has been cleared with " + cClearTributeMemory.getLink() + "."
} ];

//FindPlayerMethod
pFindPlayerMethod.description = "The method used to find a player.";
pFindPlayerMethod.shortDescription = "The method used to find a player.";
pFindPlayerMethod.range = "0 to 3.";
pFindPlayerMethod.relatedParams = [pFactId, pPlayerId, pSourceClass]
pFindPlayerMethod.valueList = [ {
	name: "find-attacker",
	id: 0,
	description: "Find the last player that has attacked. An invalid player number will be returned if the current player has not been attacked."
}, {
	name: "find-random",
	id: 1,
	description: "Find a random player. When used with " + cUpFindNextPlayer.getLink() + " the player found will not be the previously found player, but otherwise any matching player can be found. find-random will not cycle through all matching players before allowing the players to be randomly found again."
}, {
	name: "find-closest",
	id: 2,
	description: "Find the player with the closest building. An invalid player number will be returned if players of the given stance have not been found. When used with " + cUpFindNextPlayer.getLink() + " the player found will be the next closest player number, looping back to the closest player number after the furthest matching player is found."
}, {
	name: "find-ordered",
	id: 3,
	description: "Find a player, ordered by player number. The player with the highest player number will be the found player. When used with " + cUpFindNextPlayer.getLink() + " the player found will be the next matching player number in ascending order, looping back to player number 1 if necessary."
} ];

//Flag
pFlag.description = "A flag that belongs to the given goal. A flag has two states: appended or removed. See the list of commands that use this parameter for more info.";
pFlag.shortDescription = "A flag that belongs to the given goal.";
pFlag.range = "A valid flag.";
pFlag.relatedParams = [pGoalId, pOn];

//Formation
pFormation.description = "The formation that the units will be set to.";
pFormation.shortDescription = "The formation that the units will be set to.";
pFormation.range = "-1, 2, 4, 7, or 8.";
pFormation.relatedParams = [pAttackStance];
pFormation.valueList = [ {
	name: "-1",
	id: -1,
	description: "The formation will not be changed."
}, {
	name: "formation-line",
	id: 2,
	description: "Line formation. This is the standard formation."
}, {
	name: "formation-box",
	id: 4,
	description: "Box formation. Strong units are placed on the outside of the box with weak units on the inside."
}, {
	name: "formation-stagger",
	id: 7,
	description: "Staggered formation. This is like Line formation, but the units are more spread out."
}, {
	name: "formation-flank",
	id: 8,
	description: "Flank formation. The group of units will split into two smaller groups spaced a few tiles apart."
} ];

//FormattedString
pFormattedString.description = "A string (quoted text) that includes &quot;%d&quot;. When the message is sent, &quot;%d&quot; will be replaced with the provided data value.";
pFormattedString.shortDescription = "A string (quoted text) that includes &quot;%d&quot;.";
pFormattedString.range = "A string (quoted text) that includes &quot;%d&quot;.";
pFormattedString.relatedParams = [pCode, pExtension, pPlain, pString, pText];

//GameType
pGameType.description = "The type of game being played. Each of the values in the value list must be defined with a defconst. Note that custom will be from 0 to 8 depending on what the source of the map / game was.";
pGameType.shortDescription = "The type of game being played.";
pGameType.range = "0 to 3, 5 to 8."
pGameType.relatedParams = [pMapType, pType, pVictory];
pGameType.valueList = [ {
	name: "random-map",
	id: 0,
	description: "Random Map game."
}, {
	name: "regicide",
	id: 1,
	description: "Regicide game."
}, {
	name: "death-match",
	id: 2,
	description: "Death Match game."
}, {
	name: "scenario",
	id: 3,
	description: "A custom scenario."
}, {
	name: "king-of-the-hill",
	id: 5,
	description: "King of the Hill game."
}, {
	name: "wonder-race",
	id: 6,
	description: "Wonder Race game."
}, {
	name: "defend-the-wonder",
	id: 7,
	description: "Defend the Wonder game."
}, {
	name: "turbo-random-map",
	id: 8,
	description: "Turbo Random Map game."
} ];

//GoalId
pGoalId.description = "A valid goal ID. A goal ID can either be a number within the range below or a defined constant set to a number within the range below.";
pGoalId.shortDescription = "A valid goal ID.";
pGoalId.range = "1 to 40 for 1.0c. 1 to 512 for UP and all other game versions.";
pGoalId.relatedParams = [pFlag, pId, pSharedGoalId, pSnId];

//GroupId
pGroupId.description = "An ID assigned to a group of objects, similar to Ctrl groups human players can use.";
pGroupId.shortDescription = "An ID assigned to a group of objects.";
pGroupId.range = "0 to 9.";
pGroupId.relatedParams = [pGroupType, pSize];

//GroupType
pGroupType.description = "The type of group.";
pGroupType.shortDescription = "The type of group.";
pGroupType.range = "100 to 109.";
pGroupType.relatedParams = [pActionId, pGroupId, pSize, pOrderId];
pGroupType.valueList = [ {
	name: "group-type-land-attack",
	id: 100,
	description: "Land attack groups. Untested, but likely soldiers attacking during attack-group or attack-now attacks."
}, {
	name: "group-type-land-explore",
	id: 101,
	description: "Land units currently exploring."
}, {
	name: "group-type-water-attack",
	id: 102,
	description: "Warship attack groups. Untested, but likely warships attacking during boat-attack-group or attack-now attacks."
}, {
	name: "group-type-water-explore",
	id: 103,
	description: "Ships currently exploring."
}, {
	name: "group-type-transport-ship",
	id: 104,
	description: "Transport Ships that aren't idle."
}, {
	name: "group-type-fishing-ship",
	id: 105,
	description: "Fishing ships."
}, {
	name: "group-type-water-trade",
	id: 106,
	description: "Trade cogs currently trading."
}, {
	name: "group-type-forward-builder",
	id: 107,
	description: "Villagers tasked to constructing forward buildings."
}, {
	name: "group-type-monk",
	id: 108,
	description: "Monks. Untested. Likely either monks gathering relics, monks that are attacking, or both."
}, {
	name: "group-type-land-trade",
	id: 109,
	description: "Trade carts currently trading."
} ];

//GuardState
pGuardState.description = "The first of four consecutive goals to read the guard state.";
pGuardState.shortDescription = "The first of four consecutive goals to read the guard state.";
pGuardState.range = "An extended goal ID, from 41 to 509.";
pGuardState.relatedParams = [pFactId, pLimit, pType, pVictory];

//Hitpoints
pHitpoints.description = "The amount of hit points for the objects that are being compared.";
pHitpoints.shortDescription = "The amount of hit points for the objects that are being compared.";
pHitpoints.range = "0 to 32767.";
pHitpoints.relatedParams = [pIdleType];

//Id
pId.description = "Can mean multiple things depending on the command. For the " + cUpSetTargetById.getLink() + " command, this refers to the map object ID. All objects on the map will have a different map object ID in the order that the object appeared on the map.</p><p>For all other commands, this parameter refers to a goal ID, strategic number ID, or a constant ID.";
pId.shortDescription = "A value or the object's map ID, depending on the command.";
pId.range = "Depends on the type of ID. Check each command that uses this parameter to find the available range.";
pId.relatedParams = [pBuildingId, pGoalId, pObjectId, pSnId, pUnitId];

//IdleType
pIdleType.description = "The type of idle unit.";
pIdleType.shortDescription = "The type of idle unit.";
pIdleType.range = "0 to 3."
pIdleType.relatedParams = [pActionId, pHitpoints, pOrderId];
pIdleType.valueList = [ {
	name: "idle-type-villager",
	id: 0,
	description: "Idle villagers."
}, {
	name: "idle-type-trade-cart",
	id: 1,
	description: "Idle trade carts."
}, {
	name: "idle-type-fishing-ship",
	id: 2,
	description: "Idle fishing ships."
}, {
	name: "idle-type-trade-cog",
	id: 3,
	description: "Idle trade cogs."
} ];

//Index
pIndex.description = "The zero-based index of an object in the search-local or search-remote lists.";
pIndex.shortDescription = "The zero-based index of an object in the search-local or search-remote lists.";
pIndex.range = "0 to 239 for the search-local list. 0 to 39 for the search-remote list.";
pIndex.relatedParams = [pLocalIndex, pLocalList, pRemoteIndex, pRemoteList, pSearchOrder, pSearchSource];

//LanguageId
pLanguageId.description = "The ID assigned to a string (quoted text) stored in one of the language.dll files. All words and phrases used by the game are stored in these files.";
pLanguageId.shortDescription = "The ID assigned to a string (quoted text) stored in one of the language.dll files.";
pLanguageId.range = "a valid LanguageId.";
pLanguageId.relatedParams = [pCode, pNewName, pString, pText];

//Limit
pLimit.description = "A GoalId to store the victory limit. Stores 10 * the remaining game years for time victory, the target amount for score victory, or -1 if invalid.";
pLimit.shortDescription = "A GoalId to store the victory limit.";
pLimit.range = "A valid GoalId, which can range from 1 to 512.";
pLimit.relatedParams = [pFactId, pGuardState, pType, pVictory];

//LocalIndex
pLocalIndex.description = "Set to 1 to clear the offset into the list of local objects to search. Explanation: The local list only contains units found for the current player. Whenever you find something with search-local, it'll be removed from searchable local object list and added to found local object list. Setting LocalIndex to 1 would clear searchable local object list and allow finding same objects again.";
pLocalIndex.shortDescription = "Set to 1 to clear the offset into the list of local objects to search.";
pLocalIndex.range = "0 or 1.";
pLocalIndex.relatedParams = [pIndex, pLocalList, pRemoteIndex, pRemoteList, pSearchOrder, pSearchSource];

//LocalList
pLocalList.description = "Set to 1 to clear the local object list from previous searches. Explanation: The local list only contains units found for the current player. Whenever you find something with search-local, it'll be removed from searchable local object list and added to found local object list. Setting LocalList to 1 will remove everything from the found local object list.";
pLocalList.shortDescription = "Set to 1 to clear the local object list from previous searches.";
pLocalList.range = "0 or 1.";
pLocalList.relatedParams = [pIndex, pLocalIndex, pRemoteIndex, pRemoteList, pSearchOrder, pSearchSource];

//MapSize
pMapSize.description = "The size of the map. Archipelago, Fortress, Island, Migration, and Team Islands are one size bigger than normal. For example, tiny maps will be 144x144 and giant maps will be 255x255 on those maps.";
pMapSize.shortDescription = "The size of the map.";
pMapSize.range = "0 to 5.";
pMapSize.relatedParams = [pMapType, pPositionType];
pMapSize.valueList = [ {
	name: "tiny",
	id: 0,
	description: "Tiny (2 player) map size. 120x120 tiles for most maps."
}, {
	name: "small",
	id: 1,
	description: "Small (3 player) map size. 144x144 tiles for most maps."
}, {
	name: "medium",
	id: 2,
	description: "Medium (4 player) map size. 168x168 tiles for most maps."
}, {
	name: "normal",
	id: 3,
	description: "Normal (6 player) map size. 200x200 tiles for most maps."
}, {
	name: "large",
	id: 4,
	description: "Large (8 player) map size. 220x220 tiles for most maps."
}, {
	name: "giant",
	id: 5,
	description: "Giant map size. 240x240 tiles for most maps."
} ];

//MapType
pMapType.description = "The map the game is being played on.";
pMapType.shortDescription = "The map the game is being played on.";
pMapType.range = "-1, 9 to 23, or 25 to 44.";
pMapType.relatedParams = [pExtension, pGameType, pMapSize, pOnMainland, pTerrain];
pMapType.valueList = [ {
	name: "scenario-map",
	id: -1,
	description: "Scenario map. A map created in the scenario editor."
}, {
	name: "arabia",
	id: 9,
	description: "Arabia map."
}, {
	name: "archipelago",
	id: 10,
	description: "Archipelago map."
}, {
	name: "baltic",
	id: 11,
	description: "Baltic map."
}, {
	name: "black-forest",
	id: 12,
	description: "Black Forest map."
}, {
	name: "coastal",
	id: 13,
	description: "Coastal map."
}, {
	name: "continental",
	id: 14,
	description: "Continental map."
}, {
	name: "crater-lake",
	id: 15,
	description: "Crater Lake map."
}, {
	name: "fortress",
	id: 16,
	description: "Fortress map."
}, {
	name: "gold-rush",
	id: 17,
	description: "Gold Rush map."
}, {
	name: "highland",
	id: 18,
	description: "Highland map."
}, {
	name: "islands",
	id: 19,
	description: "Islands map."
}, {
	name: "mediterranean",
	id: 20,
	description: "Mediterranean map."
}, {
	name: "migration",
	id: 21,
	description: "Migration map."
}, {
	name: "rivers",
	id: 22,
	description: "Rivers map."
}, {
	name: "team-islands",
	id: 23,
	description: "Team Islands map."
}, {
	name: "scandanavia",
	id: 25,
	description: "Scandinavia map. Notice the name is mispelled."
}, {
	name: "mongolia",
	id: 26,
	description: "Mongolia map."
}, {
	name: "yucatan",
	id: 27,
	description: "Yucatan map."
}, {
	name: "salt-marsh",
	id: 28,
	description: "Salt Marsh map."
}, {
	name: "arena",
	id: 29,
	description: "Arena map."
}, {
	name: "oasis",
	id: 31,
	description: "Oasis map."
}, {
	name: "ghost-lake",
	id: 32,
	description: "Ghost Lake map."
}, {
	name: "nomad",
	id: 33,
	description: "Nomad map."
}, {
	name: "real-world-spain",
	id: 34,
	description: "Iberia real world map."
}, {
	name: "real-world-england",
	id: 35,
	description: "Britain real world map."
}, {
	name: "real-world-midEast",
	id: 36,
	description: "Mideast real world map. Notice the uppercase 'E'."
}, {
	name: "real-world-texas",
	id: 37,
	description: "Texas real world map."
}, {
	name: "real-world-italy",
	id: 38,
	description: "Italy real world map."
}, {
	name: "real-world-caribbean",
	id: 39,
	description: "Central America real world map."
}, {
	name: "real-world-france",
	id: 40,
	description: "France real world map."
}, {
	name: "real-world-jutland",
	id: 41,
	description: "Norse Lands real world map."
}, {
	name: "real-world-nippon",
	id: 42,
	description: "Sea of Japan (East Sea) real world map."
}, {
	name: "real-world-byzantium",
	id: 43,
	description: "Byzantium real world map."
}, {
	name: "custom_map",
	id: 44,
	description: "A custom random map. Notice the underscore."
} ];

//MaxDistance
pMaxDistance.description = "The maximum acceptable distance from the point specified by " + cUpSetTargetPoint.getLink() + ". If set to -1, no maximum distance for the filter is set.";
pMaxDistance.shortDescription = "The maximum acceptable distance from the target-point.";
pMaxDistance.range = "-1 to 32767.";
pMaxDistance.relatedParams = [pDistance, pMinDistance];

//MaxGarrison
pMaxGarrison.description = "The maximum acceptable value for objects garrisoned. If set to -1, no maximum garrison amount is set.";
pMaxGarrison.shortDescription = "The maximum acceptable value for objects garrisoned.";
pMaxGarrison.range = "-1 to 32767.";
pMaxGarrison.relatedParams = [pMinGarrison, pState];

//MinDistance
pMinDistance.description = "The minimum acceptable distance from the point specified by " + cUpSetTargetPoint.getLink() + ". If set to -1, no minimum distance for the filter is set.";
pMinDistance.shortDescription = "The minimum acceptable distance from the target-point.";
pMinDistance.range = "-1 to 32767.";
pMinDistance.relatedParams = [pDistance, pMaxDistance];

//MinGarrison
pMinGarrison.description = "The minimum acceptable value for objects garrisoned. If set to -1, no minimum garrison amount is set.";
pMinGarrison.shortDescription = "The minimum acceptable value for objects garrisoned.";
pMinGarrison.range = "-1 to 32767.";
pMinGarrison.relatedParams = [pMaxGarrison, pState];

//Mode
pMode.description = "The reset method. Restore default priorities with 0. For defensive priorities, setting Mode to 1 will reset all to -1. For offensive priorities, unit types will be reset to 0, while classes will be -1.";
pMode.shortDescription = "The reset method for offensive or defensive prioirities.";
pMode.range = "0 or 1.";
pMode.relatedParams = [pPriorityType];

//NewName
pNewName.description = "A string (quoted text) containing the new name for the AI.";
pNewName.shortDescription = "A string (quoted text) containing the new name for the AI.";
pNewName.range = "A string (quoted text), no longer than 24 characters.";
pNewName.relatedParams = [pCode, pLanguageId, pString, pText];

//ObjectData
pObjectData.description = "Data information about an object.";
pObjectData.shortDescription = "Data information about an object.";
pObjectData.range = "-1 to 82.";
pObjectData.relatedParams = [pActionId, pData, pFactId, pOrderId];
pObjectData.valueList = [ {
	name: "object-data-index",
	id: -1,
	description: "Use only with " + cUpRemoveObjects.getLink() + ". This will remove objects by the search index."
}, {
	name: "object-data-id",
	id: 0,
	description: "The object's map ID. All objects on the map will have a different map object ID in the order that the object appeared on the map. Same as the " + pId.getLink() + " parameter."
}, {
	name: "object-data-type",
	id: 1,
	description: "The object's type, just like " + cUnitTypeCount.getLink() + ". <strong>Note:</strong> this always returns the object-data-base-type for a unit/building line in non-scenario games. For example, if the object is a man-at-arms, this will return 74 (militiaman). If you want to get the current upgraded unit type, use object-data-upgrade-type instead. In summary, this ObjectData functions just like object-data-base-type, except in scenarios where upgraded versions of units are placed on the map from the start of the game."
}, {
	name: "object-data-class",
	id: 2,
	description: "The object's class. See " + pClassId.getLink() + " for a description and list of object classes."
}, {
	name: "object-data-category",
	id: 3,
	description: "The object's category. Use <a href=http://aok.heavengames.com/blacksmith/showfile.php?fileid=11002>Advanced Genie Editor</a> to determine an object's category (called &quot;Type&quot;). Category 10 = Eye Candy and resources. Category 20 = Animated map objects. Category 30 = Dead units and fish. Category 60 = Projectiles. Category 70 = Units. Category 80 = Buildings."
}, {
	name: "object-data-cmdid",
	id: 4,
	description: "The object's command ID. See " + pCmdId.getLink() + " for a description and list of object command IDs."
}, {
	name: "object-data-action",
	id: 5,
	description: "The object's action. See " + pActionId.getLink() + " for a description and list of object action IDs."
}, {
	name: "object-data-order",
	id: 6,
	description: "The object's order. See " + pOrderId.getLink() + " for a description and list of object order IDs."
}, {
	name: "object-data-target",
	id: 7,
	description: "The object-data-class of the object that the target-object is targeting."
}, {
	name: "object-data-point-x",
	id: 8,
	description: "The x-coordinate of the tile the object is on."
}, {
	name: "object-data-point-y",
	id: 9,
	description: "The y-coordinate of the tile the object is on."
}, {
	name: "object-data-hitpoints",
	id: 10,
	description: "The object's current hit points. This takes into account any damage the object has suffered."
}, {
	name: "object-data-maxhp",
	id: 11,
	description: "The object's maximum possible hit points. This includes researched technologies."
}, {
	name: "object-data-range",
	id: 12,
	description: "The object's range. This includes researched technologies."
}, {
	name: "object-data-speed",
	id: 13,
	description: "The object's speed, multiplied by 100. This includes researched technologies."
}, {
	name: "object-data-dropsite",
	id: 14,
	description: "The " + pUnitId.getLink() + " of the dropsite that belongs to the resource that is being gathered by the target-object. This will always be the UnitId of a mill, lumber camp, and mining camp for food, wood, and gold/stone, even if resources are being dropped off at a town center. A villager who hasn't been assigned a role (name change) will also given the result &quot;mill&quot;. All villagers given a non-gathering task, and all other objects will return -1 as a result."
}, {
	name: "object-data-resource",
	id: 15,
	description: "The object's " + pResource.getLink() + " type. If the object isn't a resource, object-data-resource is -1."
}, {
	name: "object-data-carry",
	id: 16,
	description: "The object's remaining amount of resources left in it, such as the remaining food left in a boar. Also includes monk faith generation, flares, and unit corpses. The latter two have carry because of a decay timer that controls when they are removed from the map."
}, {
	name: "object-data-garrisoned",
	id: 17,
	description: "Returns 1 if the object is garrisoned. Otherwise, 0."
}, {
	name: "object-data-garrison-count",
	id: 18,
	description: "The number of units garrisoned inside the object."
}, {
	name: "object-data-status",
	id: 19,
	description: "The status of the object. See " + pObjectStatus.getLink() + " for a list of possible object states."
}, {
	name: "object-data-player",
	id: 20,
	description: "The player number that the object belongs to, between 0 and 8."
}, {
	name: "object-data-attack-stance",
	id: 21,
	description: "The attack stance of the object. See " + pAttackStance.getLink() + " for a list of attack stances. Objects that cannot change their attack stance appear to have an attack stance of 0, the same as stance-aggressive."
}, {
	name: "object-data-action-time",
	id: 22,
	description: "The amount of time the object has been on the map. The amount of time seems to be the amount of game time, divided by 3."
}, {
	name: "object-data-target-id",
	id: 23,
	description: "The ID of the object that the target-object is targeting."
}, {
	name: "object-data-formation-id",
	id: 24,
	description: "The formation of the object. See " + pFormation.getLink() + " for more information."
}, {
	name: "object-data-patrolling",
	id: 25,
	description: "Returns 1 if the object is patrolling, otherwise 0."
}, {
	name: "object-data-strike-armor",
	id: 26,
	description: "The object's current strike (melee) armor, including researched technologies."
}, {
	name: "object-data-pierce-armor",
	id: 27,
	description: "The object's current pierce armor, including researched technologies."
}, {
	name: "object-data-base-attack",
	id: 28,
	description: "The object's current base attack, including researched technologies. The base attack is the attack displayed on the screen, not including hidden attack bonuses. Hidden attack bonus amounts cannot be detected by AIs."
}, {
	name: "object-data-locked",
	id: 29,
	description: "Returns 1 if the object (gate or palisade gate) is locked, otherwise 0."
}, {
	name: "object-data-garrison-id",
	id: 30,
	description: "Untested. Likely is the map-based Id of the building or unit the object is garrisoned inside. If the object is not garrisoned, object-data-garrison-id is -2."
}, {
	name: "object-data-train-count",
	id: 31,
	description: "The number of units are queued at the object for training."
}, {
	name: "object-data-tasks-count",
	id: 32,
	description: "The number of units that are tasked to work on the object (sometimes 2+ per command, for example a lumberjack assigned to a tree may show 2 when the lumberjack is walking with a gather command/hunt command)."
}, {
	name: "object-data-attacker-count",
	id: 33,
	description: "The number of objects that are attacking the target-object. This is not increased for certain situations, like hunting."
}, {
	name: "object-data-attacker-id",
	id: 34,
	description: "The map-based " + pId.getLink() + " of the object attacking the target-object. If multiple objects are attacking, it's likely the most recent object to attack, but this is untested. Not set for certain situations, like hunting. Doesn't work with villagers."
}, {
	name: "object-data-under-attack",
	id: 35,
	description: "Returns 1 if the object is being attacked, otherwise 0. Not set for certain situations, like hunting. Doesn't work for villagers."
}, {
	name: "object-data-attack-timer",
	id: 36,
	description: "Likely a timer countdown for building objects. When a building is attacked, a 60-second timer starts and counts down toward 0. This timer is reset every time the building is attacked."
}, {
	name: "object-data-point-z",
	id: 37,
	description: "Likely get's the object's z-location. Only objects flying in the air like projectiles and birds have a z-coordinate > 0."
}, {
	name: "object-data-precise-x",
	id: 38,
	description: "The object's precise x-location, multiplied by 100. Precise locations are accurate to 1/100 of a tile."
}, {
	name: "object-data-precise-y",
	id: 39,
	description: "The object's precise y-location, multiplied by 100. Precise locations are accurate to 1/100 of a tile."
}, {
	name: "object-data-precise-z",
	id: 40,
	description: "The object's precise z-location, multiplied by 100. Precise locations are accurate to 1/100 of a tile. Only objects flying in the air like projectiles and birds have a z-coordinate > 0."
}, {
	name: "object-data-researching",
	id: 41,
	description: "Returns 1 when the object is researching a technology, otherwise 0."
}, {
	name: "object-data-tile-position",
	id: 42,
	description: "The object's position on the tile. See " + snTargetPointAdjustment.getLink() + " for details on the tile positions."
}, {
	name: "object-data-tile-inverse",
	id: 43,
	description: "The opposite tile position of the object's position on the tile. If the object is on the top part of the tile, object-data-tile-inverse will be 4 (bottom). See " + snTargetPointAdjustment.getLink() + " for details on the tile positions."
}, {
	name: "object-data-distance",
	id: 44,
	description: "The object's distance from the target-point. This does not take obstacles into account."
}, {
	name: "object-data-precise-distance",
	id: 45,
	description: "The object's precise distance from the target-point, x 100. This does not take obstacles into account. Precise locations are accurate to 1/100 of a tile."
}, {
	name: "object-data-full-distance",
	id: 46,
	description: "The object's precise distance from the target-point, squared. For example, if the precise distance is 41.34 tiles, object-data-full-distance will be 1709."
}, {
	name: "object-data-map-zone-id",
	id: 47,
	description: "The map zone that the object is on. Each landmass is assigned a different zone ID, so this is useful to determine if objects are on different islands."
}, {
	name: "object-data-on-mainland",
	id: 48,
	description: "Returns 1 if the object is on the same landmass as the starting landmass, otherwise 0."
}, {
	name: "object-data-idling",
	id: 49,
	description: "Returns 1 if the object is idle, otherwise 0."
}, {
	name: "object-data-move-x",
	id: 50,
	description: "The x-coordinate of the object's most recent targeted location. Applies to move, attack, and other related commands. Automatic activities such as chasing enemy units will not set a new location because a direct command was never issued."
}, {
	name: "object-data-move-y",
	id: 51,
	description: "The y-coordinate of the object's most recent targeted location. Applies to move, attack, and other related commands. Automatic activities such as chasing enemy units will not set a new location because a direct command was never issued."
}, {
	name: "object-data-precise-move-x",
	id: 52,
	description: "The precise x-coordinate of the object's most recent targeted location, multiplied by 100. Precise locations are accurate to 1/100 of a tile. Applies to move, attack, and other related commands. Automatic activities such as chasing enemy units will not set a new location because a direct command was never issued."
}, {
	name: "object-data-precise-move-y",
	id: 53,
	description: "The precise y-coordinate of the object's most recent targeted location, multiplied by 100. Precise locations are accurate to 1/100 of a tile. Applies to move, attack, and other related commands. Automatic activities such as chasing enemy units will not set a new location because a direct command was never issued."
}, {
	name: "object-data-reload-time",
	id: 54,
	description: "The object's reload time, in milliseconds. For ranged units, you also need to add on the frame delay to this reload time."
}, {
	name: "object-data-next-attack",
	id: 55,
	description: "The time until the object can attack again, in milliseconds. The countdown starts after the animation has finished."
}, {
	name: "object-data-train-site",
	id: 56,
	description: "The " + pBuildingId.getLink() + " that can train the object."
}, {
	name: "object-data-train-time",
	id: 57,
	description: "The time it takes to train the object. Does not appear to take civ bonuses or researched technologies into account."
}, {
	name: "object-data-blast-radius",
	id: 58,
	description: "The object's blast radius, multiplied by 100."
}, {
	name: "object-data-blast-level",
	id: 59,
	description: "The type of blast radius the object has. The blast damage for objects with level 3 or higher only damage the targeted object. The blast damage for objects with level 2 will damage nearby objects that are within the blast radius of the attack. The blast damage for objects with level 1 can damage trees. The blast damage for objects with level 0 can damage all resources. <strong>Note:</strong> many buildings and cavalry units have blast level 0, so it is wise to check if the blast radius is > 0 before checking the blast level."
}, {
	name: "object-data-progress-type",
	id: 60,
	description: "The type of progress the object has (training or researching). Objects that cannot train or research return -2. An object that can train or research but is doing neither will return 0. If the object is training or researching, a value from the " + dcProgressType.getLink() + " list will be returned."
}, {
	name: "object-data-progress-value",
	id: 61,
	description: "The percent completion for the unit the object is training or the technology the object is researching."
}, {
	name: "object-data-min-range",
	id: 62,
	description: "The minium range of the object."
}, {
	name: "object-data-target-time",
	id: 63,
	description: "The amount of time, in milliseconds, that the object has been attacking its current target. Also seems to return negative amounts when a villager is herding animals for some reason."
}, {
	name: "object-data-heresy",
	id: 64,
	description: "Returns 1 if the object is benefitting from Heresy, otherwise 0."
}, {
	name: "object-data-faith",
	id: 65,
	description: "Returns 1 if the object is benefitting from Faith, otherwise 0."
}, {
	name: "object-data-redemption",
	id: 66,
	description: "Returns 1 if the object is benefitting from Redemption, otherwise 0."
}, {
	name: "object-data-atonement",
	id: 67,
	description: "Returns 1 if the object is benefitting from Atonement, otherwise 0."
}, {
	name: "object-data-theocracy",
	id: 68,
	description: "Returns 1 if the object is benefitting from Theocracy, otherwise 0."
}, {
	name: "object-data-spies",
	id: 69,
	description: "Returns 1 if the object is benefitting from Spies, otherwise 0. Likely is true for all player objects once Spies is researched."
}, {
	name: "object-data-ballistics",
	id: 70,
	description: "Returns 1 if the object is benefitting from Ballistics."
}, {
	name: "object-data-gather-type",
	id: 71,
	description: "The " + pResource.getLink() + "that the villager is gathering, or -1 if the object isn't gathering a resource. Trade units return 3 when they are carrying gold back to the Market or Dock. Monasteries don't return 3 when relics are garrisoned inside."
}, {
	name: "object-data-language-id",
	id: 72,
	description: "The " + pLanguageId.getLink() + " of the object's current name. This is one way to determine the task a villager has been given."
}, {
	name: "object-data-group-flag",
	id: 73,
	description: "The group number that the object has been assigned with " + cUpModifyGroupFlag.getLink() + ". If the object hasn't been assigned to a group, object-data-group-flag returns -2."
}, {
	name: "object-data-hero-flags",
	id: 74,
	description: "The sum of hero flags set on the unit. Most of these, except for Flag 1 are set through UP effects in scenarios or random map scripts. Standard heroes return 1. Flag 1 = full hero. Flag 2 = disabled conversions. Flag 4 = enable hero heal rate. Flag 8 = set defensive attack stance as default. Flag 16 = force the unit to use a Protective Formation (maybe puts the hero in center of box formation?). Flag 32 = enables suicide attacks. Flag 64 = enable blast radius. Flag 128 = disable attack ground. Flag 256 = clear all flags."
}, {
	name: "object-data-hero",
	id: 75,
	description: "Returns 1 if the object is a hero (has hero flag 1 set, see object-data-hero-flags for details), otherwise 0."
}, {
	name: "object-data-auto-heal",
	id: 76,
	description: "Returns 1 if the object is a full hero (hero flag 1) or it has the auto-heal hero flag set (hero flag 4, see object-data-hero-flags for details). Berserks return 0 because their health regeneration is coded separately from hero health regeneration."
}, {
	name: "object-data-no-convert",
	id: 77,
	description: "Returns 1 if the object is a full hero (hero flag 1) or it has the no-convert flag set (hero flag 2, see object-data-hero-flags for details). Unconvertible buildings like town centers and castles return 0 because their no-convert feature is hard-coded separately from hero non-conversion."
}, {
	name: "object-data-frame-delay",
	id: 79,
	description: "The object's frame delay. Frame delay is the number of frames between the start of the attack animation and the launch of the projectile. Unfortunately, the duration of each frame in the animation is different for each unit, so it's very difficult to calculate the precise duration of frame delay."
}, {
	name: "object-data-attack-count",
	id: 70,
	description: "The number of times the object has tried to damage its target."
}, {
	name: "object-data-to-precise",
	id: 80,
	description: "The precise distance from the object to a precise target point. object-data-precise-distance is probably the precise distance from the object to a normal point."
}, {
	name: "object-data-base-type",
	id: 81,
	description: "The " + pObjectId.getLink() + " of the first unit/building in the object's line. For example, this returns 74 (militiaman) when the object is a Long Swordsman."
}, {
	name: "object-data-upgrade-type",
	id: 82,
	description: "The true " + pObjectId.getLink() + " of the object. If the object is a man-at-arms, this will return 75 (man-at-arms). This ObjectData was needed because object-data-type functions just like object-data-base-type under in non-scenario games."
} ];

//ObjectId
pObjectId.description = "A " + pUnitId.getLink() + " or a " + pBuildingId.getLink() + ". See the <a href=\"" + urlPrefix + "/resources/tables/objects.html\">Objects Table</a> for details.";
pObjectId.shortDescription = "A UnitId or a BuildingId.";
pObjectId.range = "A valid " + pUnitId.getLink() + " or a valid " + pBuildingId.getLink() + ".";
pObjectId.relatedParams = [pBuildingId, pClassId, pId, pTypeId, pUnitId, pUpgradeId];

//ObjectList
pObjectList.description = "Specifies whether the filter should apply to objects in the active list or the inactive list.";
pObjectList.shortDescription = "Either list-active or list-inactive.";
pObjectList.range = "0 or 1.";
pObjectList.relatedParams = [pObjectStatus];
pObjectList.valueList = [ {
	name: "list-active",
	id: 0,
	description: "Contains most objects, especially live objects."
}, {
	name: "list-inactive",
	id: 1,
	description: "Contains objects that are removed from the active list for performance optimization. Examples are fish, dead animals carrying food, and maybe house foundations. Chopped trees are usually list-active."
} ];

//ObjectStatus
pObjectStatus.description = "Specifies the status of objects that should be filtered. Default is status-ready.";
pObjectStatus.shortDescription = "Specifies the status of objects that should be filtered.";
pObjectStatus.range = "0, 2 to 5.";
pObjectStatus.relatedParams = [pObjectList];
pObjectStatus.valueList = [ {
	name: "status-pending",
	id: 0,
	description: "Incomplete buildings."
}, {
	name: "status-ready",
	id: 2,
	description: "Most active objects. Also includes live animals, live trees"
}, {
	name: "status-resource",
	id: 3,
	description: "Some resources: berries, down trees, gold, and stone"
}, {
	name: "status-down",
	id: 4,
	description: "Unknown. Is not dead sheep or dead boar."
}, {
	name: "status-gather",
	id: 5,
	description: "Dead animals carrying food, fish."
} ];

//On
pOn.description = "Controls whether the flag is set. Set to 1 to append the flag or 0 to remove the flag.";
pOn.shortDescription = "Controls whether the flag is set.";
pOn.range = "0 or 1.";
pOn.relatedParams = [pFlag];

//OnMainland
pOnMainland.description = "If set to 1, select only objects on the mainland, the land that the AI started on. If set to 0, select those not on the mainland. If set to -1, this parameter will be ignored.";
pOnMainland.shortDescription = "If set to 1, select only objects on the mainland.";
pOnMainland.range = " -1, 0, or 1.";
pOnMainland.relatedParams = [pMapType];

//OrderId
pOrderId.description = "The current order for the object. Sometimes an object can have more than one current order, such as a villager having the actions orderid-hunt and orderid-gather.";
pOrderId.shortDescription = "The current order for the object.";
pOrderId.range = "-1, 700 to 799.";
pOrderId.relatedParams = [pActionId, pGroupType, pIdleType, pObjectData, pTargetAction];
pOrderId.valueList = [ {
	name: "-1",
	id: -1,
	description: "Use -1 to ignore the OrderId of the object."
}, {
	name: "orderid-attack",
	id: 700,
	description: "The object has targeted an enemy object."
}, {
	name: "orderid-defend",
	id: 701,
	description: "The object has been ordered to defend. Occurs during guard orders, but could occur at other times. Haven't tested if this order occurs during TSA."
}, {
	name: "orderid-build",
	id: 702,
	description: "The object is currently tasked with constructing a building."
}, {
	name: "orderid-heal",
	id: 703,
	description: "The object is currently tasked with healing objects. Likely doesn't apply to buildings helping garrisoned units heal."
}, {
	name: "orderid-convert",
	id: 704,
	description: "The object is tasked to convert an object."
}, {
	name: "orderid-explore",
	id: 705,
	description: "The object is being tasked to explore, likely through " + snNumberExploreGroups.getLink() + "."
}, {
	name: "orderid-stop",
	id: 706,
	description: "The object is being ordered to stop."
}, {
	name: "orderid-runaway",
	id: 707,
	description: "Unknown? Could be non-combat units trying to get away from soldiers attacking them."
}, {
	name: "orderid-retreat",
	id: 708,
	description: "Unknown. Probably either retreating during a " + cUpRetreatNow.getLink() + " or " + cUpRetreatTo.getLink() + " command, or retreating because of minimum range or " + dpAbilityToMaintainDistance.getLink() + "."
}, {
	name: "orderid-gather",
	id: 709,
	description: "The object has been ordered to gather resources."
}, {
	name: "orderid-move",
	id: 710,
	description: "The object is being tasked to move."
}, {
	name: "orderid-patrol",
	id: 711,
	description: "The object is being ordered to patrol."
}, {
	name: "orderid-follow",
	id: 712,
	description: "The object is being orderd to follow."
}, {
	name: "orderid-hunt",
	id: 713,
	description: "The object is being ordered to hunt. Untested if this also includes attacking wolves."
}, {
	name: "orderid-transport",
	id: 714,
	description: "The object is being ordered to transport units. Might also include transport ships that are on their way to picking up units."
}, {
	name: "orderid-trade",
	id: 715,
	description: "The object is being tasked with trading between markets or docks."
}, {
	name: "orderid-evade",
	id: 716,
	description: "The object is being ordered to evade. Could be units dodging missiles because of " + dpAbilityToDodgeMissiles.getLink() + "."
}, {
	name: "orderid-enter",
	id: 717,
	description: "The object is being ordered to garrison inside a building, ram, or a transport ship. It may also include objects that are currently garrisoned."
}, {
	name: "orderid-repair",
	id: 718,
	description: "The object is tasked with repairing a building."
}, {
	name: "orderid-train",
	id: 719,
	description: "The object is tasked with training a unit."
}, {
	name: "orderid-research",
	id: 720,
	description: "The object is tasked with researching a technology."
}, {
	name: "orderid-unload",
	id: 721,
	description: "The object is being ordered to unload units."
}, {
	name: "orderid-relic",
	id: 731,
	description: "The object is ordered with picking up a relic."
} ];

//Param
pParam.description = "A parameter for the fact. This often matches the first parameter in a fact command, but if the " + pFactId.getLink() + "can be used with any player number, then this is usually a valid " + pParam.getLink() + " instead.";
pParam.shortDescription = "A parameter for the fact.";
pParam.range = "An appropriate parameter for the fact, or 0 if not required.";
pParam.relatedParams = [pFactId];

//Percent
pPercent.description = "The percent between the two points to select.";
pPercent.shortDescription = "The percent between the two points to select.";
pPercent.range = "-32768 to 32767.";
pPercent.relatedParams = [pDistance, pPoint, pTiles];

//Perimeter
pPerimeter.description = "The distance to build a wall around the town. Allowed values are 1 and 2, with 1 being closer to the Town Center than 2. Perimeter 1 is usually between 10 and 20 tiles from the starting Town Center. Perimeter 2 is usually between 18 and 30 tiles from the starting Town Center.";
pPerimeter.shortDescription = "The distance to build a wall around the town.";
pPerimeter.range = "1 or 2.";
pPerimeter.relatedParams = [pDistance, pWallId];

//PlacementType
pPlacementType.description = "The type of building placement. Execute " + cUpSetPlacementData.getLink() + " before using place-control.";
pPlacementType.shortDescription = "The type of building placement.";
pPlacementType.range = "0 to 3.";
pPlacementType.valueList = [ {
	name: "place-normal",
	id: 0,
	description: "Same placement as " + cBuild.getLink() + "."
}, {
	name: "place-forward",
	id: 1,
	description: "Same placement as " + cBuildForward.getLink() + ", except that locations are affected by " + snPlacementZoneSize.getLink() + ". Setting large values for sn-placement-zone-size can surround the enemy player with the forward building."
}, {
	name: "place-control",
	id: 2,
	description: "Allows more controlled building placement. Uses the settings from " + cUpSetPlacementData.getLink() + ", " + snPlacementZoneSize.getLink() + ", " + snPlacementFailDelta.getLink() + ", and " + snPlacementToCenter.getLink() + " to control building placement. See this image for an explanation: <a target=\"_blank\" href=\"http://i.imgur.com/FUpDF.gif\">http://i.imgur.com/FUpDF.gif</a>"
}, {
	name: "place-point",
	id: 3,
	description: "Allows placement for a building at the point specified by " + cUpSetTargetPoint.getLink() + ". Building placement with place-point is affected by " + snPlacementZoneSize.getLink() + ", but it is not affected by " + cUpSetPlacementData.getLink() + ", " + snPlacementFailDelta.getLink() + ", or " + snPlacementToCenter.getLink() + "."
} ];

//Plain
pPlain.description = "Set Plain to 1 in order to write plain text to the log. Otherwise, text will be formatted. You must close the game in order to open aoelog.txt, which is located in the game folder. Please consider game performance when writing data.";
pPlain.shortDescription = "Set Plain to 1 in order to write plain text to the log."
pPlain.range = "0 or 1."
pPlain.relatedParams = [pFormattedString, pString];

//PlayerId
pPlayerId.description = "A goal to store the returned player number.";
pPlayerId.shortDescription = "A goal to store the returned player number.";
pPlayerId.range = "0 to 8.";
pPlayerId.relatedParams = [pAllyPlayer, pAnyPlayer, pColorId, pComputerAllyPlayer, pFindPlayerMethod];

//PlayerStance
pPlayerStance.description = "A player's diplomatic stance. This parameter is different from " + pESPlayerStance.getLink() + " because it includes the option for \"Any\" stance.";
pPlayerStance.shortDescription = "A player's diplomatic stance.";
pPlayerStance.range = "0 to 3.";
pPlayerStance.relatedParams = [pESPlayerStance];
pPlayerStance.valueList = [ {
	name: "ally",
	id: 0,
	description: "Ally."
}, {
	name: "neutral",
	id: 1,
	description: "Neutral."
}, {
	name: "any",
	id: 2,
	description: "Any stance."
}, {
	name: "enemy",
	id: 3,
	description: "Enemy."
} ];

//Point
pPoint.description = "The first of 2 consecutive goals to store the x and y coordinates of the point. These goals must be extended goals (goal IDs 41-510), which have a signed 32-bit range (-2,147,483,648 to 2,147,483,647).";
pPoint.shortDescription = "The first of 2 consecutive goals to store the x and y coordinates of the point.";
pPoint.range = "41 to 510.";
pPoint.relatedParams = [pBorder, pDistance, pExploredState, pPercent, pPositionType, pPrecise, pScoutMethod, pStrict, pTiles];

//PositionType
pPositionType.description = "The position type, a predefined position that can be stored in a point.";
pPositionType.shortDescription = "The position type, a predefined position that can be stored in a point.";
pPositionType.range = "0 to 13.";
pPositionType.relatedParams = [pBorder, pExploredState, pMapSize, pPoint, pScoutMethod];
pPositionType.valueList = [ {
	name: "position-center",
	id: 0,
	description: "The center of the map."
}, {
	name: "position-opposite",
	id: 1,
	description: "The point on the opposite side of the map from position-self. It is found reflecting position-self across the center of the map."
}, {
	name: "position-corner",
	id: 2,
	description: "The location of the corner closest to position-self."
}, {
	name: "position-enemy",
	id: 3,
	description: "A random location +/- 8 tiles from the target player's nearest non-wall building. If the enemy hasn't been found, this is the same as position-opposite."
}, {
	name: "position-border",
	id: 4,
	description: "The point on a border that is closest to position-self."
}, {
	name: "position-mirror",
	id: 5,
	description: "The expected position of the mirrored opponent on the opposite team, found by mirroring from position-self across the line that separates teams."
}, {
	name: "position-flank",
	id: 6,
	description: "The expected position where the nearest enemy flank player should be."
}, {
	name: "position-zero",
	id: 7,
	description: "The leftmost point on the map, where x and y are 0."
}, {
	name: "position-map-size",
	id: 8,
	description: "The rightmost point on the map, where x and y equal the map size."
}, {
	name: "position-self",
	id: 9,
	description: "The location of the player's oldest Town Center."
}, {
	name: "position-target",
	id: 10,
	description: "The location of the nearest non-wall building of the target player. Not defined if the target player is the same as my-player-number."
}, {
	name: "position-focus",
	id: 11,
	description: "The location of the nearest non-wall building of the focus player. Not defined if the focus player is the same as my-player-number."
}, {
	name: "position-object",
	id: 12,
	description: "The location of the target object."
}, {
	name: "position-point",
	id: 13,
	description: "The location of the target point."
} ];

//Precise
pPrecise.description = "Set to 1 to bound as a precise point (x100). Precise locations are accurate to 1/100 of a tile. If Precise is used, the map size will be multiplied by 100 before bounding, so the border should be adjusted accordingly.";
pPrecise.shortDescription = "Set to 1 to bound as a precise point (x100).";
pPrecise.range = "0 or 1.";
pPrecise.relatedParams = [pBorder, pDistance, pPoint];

//PreserveResearch
pPreserveResearch.description = "If set to 1, buildings performing research will not be affected when the building is reset.";
pPreserveResearch.shortDescription = "If set to 1, buildings performing research will not be affected when the building is reset.";
pPreserveResearch.range = "0 or 1.";

//ProjectileType
pProjectileType.description = "The source of the projectile to check. Note that the actual " + pObjectId.getLink() + " of the projectile does not work.";
pProjectileType.shortDescription = "The source of the projectile to check.";
pProjectileType.range = "0 to 7.";
pProjectileType.relatedParams = [pSourceClass, pTargetClass];
pProjectileType.valueList = [ {
	name: "projectile-town-center",
	id: 0,
	description: "Town Center arrows."
}, {
	name: "projectile-castle",
	id: 1,
	description: "Castle arrows."
}, {
	name: "projectile-watch-tower",
	id: 2,
	description: "Watch Tower, Guard Tower, or Keep arrows."
}, {
	name: "projectile-bombard-tower",
	id: 3,
	description: "Bombard Tower cannonballs."
}, {
	name: "projectile-ship",
	id: 4,
	description: "Projectiles from any warship."
}, {
	name: "projectile-siege",
	id: 5,
	description: "Projectiles from any ranged siege weapon, except scorpions."
}, {
	name: "projectile-fortification",
	id: 6,
	description: "Projectiles from Castles or towers."
}, {
	name: "projectile-any",
	id: 7,
	description: "Any projectile from soldiers, siege weapons, ships, or buildings."
} ];

//PriorityType
pPriorityType.description = "The targeting priority type to modify.";
pPriorityType.shortDescription = "The targeting priority type to modify.";
pPriorityType.range = "0 or 1.";
pPriorityType.relatedParams = [pMode];
pPriorityType.valueList = [ {
	name: "priority-offense",
	id: 0,
	description: "Change the targeting priority for offensive units (units attacking with attack-now or attack-group methods)."
}, {
	name: "priority-defense",
	id: 1,
	description: "Change the targeting priority for defensive units (units defending the town or attacking with TSA."
} ];

//RemoteIndex
pRemoteIndex.description = "Set to 1 to clear the offset into the list of remote objects to search. Explanation: The remote list only contains units found for the focus player. Whenever you find something with search-remote, it'll be removed from searchable remote object list and added to found remote object list. Setting RemoteIndex to 1 would clear searchable remote object list and allow finding same objects again.";
pRemoteIndex.shortDescription = "Set to 1 to clear the offset into the list of remote objects to search.";
pRemoteIndex.range = "0 or 1.";
pRemoteIndex.relatedParams = [pIndex, pLocalIndex, pLocalList, pRemoteList, pSearchOrder, pSearchSource];

//RemoteList
pRemoteList.description = "Set to 1 to clear the remote object list from previous searches. Explanation: The remote list only contains units found for the focus player. Whenever you find something with search-remote, it'll be removed from searchable remote object list and added to found remote object list. Setting RemoteList to 1 will remove everything from the found remote object list.";
pRemoteList.shortDescription = "Set to 1 to clear the remote object list from previous searches.";
pRemoteList.range = "0 or 1.";
pRemoteList.relatedParams = [pIndex, pLocalIndex, pLocalList, pRemoteIndex, pSearchOrder, pSearchSource];

//ResearchState
pResearchState.description = "The status of the research.";
pResearchState.shortDescription = "The status of the research.";
pResearchState.range = "0 to 3.";
pResearchState.relatedParams = [pTechId];
pResearchState.valueList = [ {
	name: "research-unavailable",
	id: 0,
	description: "The research is not available, either because the age or technology prerequisites haven't been met, or the research is not available in the civ's tech tree."
}, {
	name: "research-available",
	id: 1,
	description: "The age, technology, and civilization requirements for the research have been met, but the player hasn't started researching the research yet."
}, {
	name: "research-pending",
	id: 2,
	description: "The research is currently being researched."
}, {
	name: "research-complete",
	id: 3,
	description: "The research has been completed."
} ];

//ResetCost
pResetCost.description = "If set to 1, the values of the provided set of four cost goals will be reset to 0. Otherwise, the values will be kept to be added onto later.";
pResetCost.shortDescription = "If set to 1, the values of the provided set of four cost goals will be reset to 0.";
pResetCost.range = "0 or 1.";

//Resource
pResource.description = "A gatherable resource type. Note: using the ClassId is not valid for most (all?) of the 1.0c commands that use this parameter.";
pResource.shortDescription = "A gatherable resource type.";
pResource.range = "0 to 3, or the " + pClassId.getLink() + " of the resource.";
pResource.relatedParams = [pCommodity, pResourceAmount, pStartingResources];
pResource.valueList = [ {
	name: "food",
	id: 0,
	description: "Food. For " + cDropsiteMinDistance.getLink() + " this includes forage, sheep, and deer but not boar."
}, {
	name: "wood",
	id: 1,
	description: "Wood."
}, {
	name: "stone",
	id: 2,
	description: "Stone."
}, {
	name: "gold",
	id: 3,
	description: "Gold."
}, {
	name: "hunting",
	id: 4,
	description: "Boar and Deer. Can only be used with " + cDropsiteMinDistance.getLink() + ". For these parameters only, invalid/not-found deer or boar returns 255 instead of -1."
}, {
	name: "boar-hunting",
	id: 5,
	description: "Live and dead boar only. Can only be used with " + cDropsiteMinDistance.getLink() + ". For these parameters only,  invalid/not-found boar returns 255 instead of -1."
}, {
	name: "deer-hunting",
	id: 6,
	description: "Deer only. Can only be used with " + cDropsiteMinDistance.getLink() + ". For these parameters only, invalid/not-found deer returns 255 instead of -1."
}, {
	name: "live-boar",
	id: 7,
	description: "Live boar only. Dead boars not included. Can only be used with " + cDropsiteMinDistance.getLink() + ". For these parameters only,  invalid/not-found live boar returns 255 instead of -1."
} ];


//ResourceAmount
pResourceAmount.description = "A resource type (not an amount). Some resource types check the resource amount of a specified player number instead of the current player. Note: most of these are not thoroughly tested (by Leif Ericson). Please report your findings. Resources 205 through 210 are used by the post-Conquerors expansions, so they can be used with this parameter, but they aren't defined with UserPatch.";
pResourceAmount.shortDescription = "A resource type (not an amount). Much more extensive than Resource.";
pResourceAmount.range = "0 to 224 (with some gaps for unused resources).";
pResourceAmount.relatedParams = [pCommodity, pFactId, pResource, pStartingResources];
pResourceAmount.valueList = [ {
	name: "amount-food",
	id: 0,
	description: "The food stockpile. \"food\" can also be used instead."
}, {
	name: "amount-wood",
	id: 1,
	description: "The wood stockpile. \"wood\" can also be used instead."
}, {
	name: "amount-stone",
	id: 2,
	description: "The stone stockpile. \"stone\" can also be used instead."
}, {
	name: "amount-gold",
	id: 3,
	description: "The gold stockpile. \"gold\" can also be used instead."
}, {
	name: "amount-population-cap",
	id: 4,
	description: "This actually seems to be the population headroom. Most units decrease this by 1 when trained. Set to 1000 for Huns."
}, {
	name: "amount-religion",
	id: 5,
	description: "Unknown."
}, {
	name: "amount-current-age",
	id: 6,
	description: "Sets the current age. 0 = Dark Age. 1 = Feudal Age, etc."
}, {
	name: "amount-relics",
	id: 7,
	description: "Likely the number of relics the player has. This could also equal the Relics Captured number displayed in the achievements screen."
}, {
	name: "amount-trade-bonus",
	id: 8,
	description: "Unused. Doesn't appear to be connected to the Spanish team bonus."
}, {
	name: "amount-trade-goods",
	id: 9,
	description: "Probably a leftover from a trade goods feature that was discarded before release."
}, {
	name: "amount-trade-production",
	id: 10,
	description: "Unused. Likely from a trade feature that didn't make it into the game."
}, {
	name: "amount-population",
	id: 11,
	description: "The player's population."
}, {
	name: "amount-decay",
	id: 12,
	description: "The decay time of corpses (and maybe flares too). Once this decay reaches 0, the corpse is removed from the map."
}, {
	name: "amount-discovery",
	id: 13,
	description: "This is likely a holdover resource from AoE1."
}, {
	name: "amount-ruins",
	id: 14,
	description: "This applies to monuments. Each monument captured gives 1 of this resource."
}, {
	name: "amount-meat",
	id: 15,
	description: "Unknown. This does not apply to dead animals."
}, {
	name: "amount-berries",
	id: 16,
	description: "Unknown. This does not apply to forage bushes or fruit bushes."
}, {
	name: "amount-fish",
	id: 17,
	description: "The amount of food stored in fish and fish traps."
}, {
	name: "amount-kills",
	id: 20,
	description: "The amount of units the player has killed. Likely the Units Killed displayed in the achievements screen."
}, {
	name: "amount-research-count",
	id: 21,
	description: "The amount of technologies the player has researched. Like the Research Count in the achievements screen."
}, {
	name: "amount-exploration",
	id: 22,
	description: "Likely the % Map Explored in the achievements screen."
}, {
	name: "amount-convert-priest",
	id: 27,
	description: "Set to 1 when Atonement is researched."
}, {
	name: "amount-convert-building",
	id: 28,
	description: "Set to 1 when Redemption is researched."
}, {
	name: "amount-building-limit",
	id: 30,
	description: "Unused."
}, {
	name: "amount-food-limit",
	id: 31,
	description: "Unused."
}, {
	name: "amount-unit-limit",
	id: 32,
	description: "This seems to be the actual population limit resource. Affected by Goths population bonus."
}, {
	name: "amount-maintenance",
	id: 33,
	description: "Unknown. Doesn't seem to work."
}, {
	name: "amount-faith",
	id: 34,
	description: "Set to 1 when Faith is researched."
}, {
	name: "amount-faith-recharge-rate",
	id: 35,
	description: "Set the faith recharge rate. Affected by Illumination."
}, {
	name: "amount-farm-food",
	id: 36,
	description: "Set to the amount of food that each farm will hold when constructed."
}, {
	name: "amount-civilian-population",
	id: 37,
	description: "The civilian population. Might be equal to Villager High in the achievements screen."
}, {
	name: "amount-all-techs-achieved",
	id: 39,
	description: "Likely set to 1 when an All Techs game is played."
}, {
	name: "amount-military-population",
	id: 40,
	description: "The military population. Might be equal to Largest Army in the achievements screen."
}, {
	name: "amount-conversions",
	id: 41,
	description: "Likely equal to Units Converted in the achievements screen."
}, {
	name: "amount-wonder",
	id: 42,
	description: "The amount of wonders the player currently has standing. Likely isn't Total Wonders in the achievements screen. This is likely Resource 174 instead."
}, {
	name: "amount-razings",
	id: 43,
	description: "Likely equal to Buildings Razed in the achievements screen."
}, {
	name: "amount-kill-ratio",
	id: 44,
	description: "The difference between amount-kills and amount-killed-by-others."
}, {
	name: "amount-player-killed",
	id: 45,
	description: "Likely related to Survival To Finish on the achievements screen. Untested if survival is 0 or 1."
}, {
	name: "amount-tribute-inefficiency",
	id: 46,
	description: "The tribute fee for trading at the market."
}, {
	name: "amount-gold-bonus",
	id: 47,
	description: "The Mayan bonus for gold, where gold resources last longer."
}, {
	name: "amount-town-center-unavailable",
	id: 48,
	description: "Likely set to 1 during the Dark Age and Feudal Age when the player owns a town center."
}, {
	name: "amount-gold-counter",
	id: 49,
	description: "Unknown."
}, {
	name: "amount-writing",
	id: 50,
	description: "Set to 1 1 when Cartography is researched. Writing was the name for Cartography in AoE1."
}, {
	name: "amount-monasteries",
	id: 52,
	description: "Unknown."
}, {
	name: "amount-tribute",
	id: 53,
	description: "Total amount of tributed resources. Likely is part of Tribute Sent/Rcvd in the achievements screen."
}, {
	name: "amount-hold-ruins",
	id: 54,
	description: "Likely set to 1 if the player's team holds all Monuments."
}, {
	name: "amount-hold-relics",
	id: 55,
	description: "Likely set to 1 if the player's team holds all relics."
}, {
	name: "amount-ore",
	id: 56,
	description: "A hidden 5th resource."
}, {
	name: "amount-captured-unit",
	id: 57,
	description: "Unknown. Could be related to the slaver mechanic that didn't make it into the game."
}, {
	name: "amount-trade-good-quality",
	id: 59,
	description: "Unused. Likely related to a trade mechanic that didn't make it into the game."
}, {
	name: "amount-trade-market-level",
	id: 60,
	description: "Unused. Likely related to a trade mechanic that didn't make it into the game."
}, {
	name: "amount-formations",
	id: 61,
	description: "Unused."
}, {
	name: "amount-building-housing-rate",
	id: 62,
	description: "Unknown."
}, {
	name: "amount-gather-tax-rate",
	id: 63,
	description: "Unknown."
}, {
	name: "amount-gather-accumulator",
	id: 64,
	description: "Unknown."
}, {
	name: "amount-salvage-decay-rate",
	id: 65,
	description: "Boat decay rate. Default is 5."
}, {
	name: "amount-allow-formations",
	id: 66,
	description: "Likely either always 1 to allow formations at all, or it's 0 or 1 depending on the object."
}, {
	name: "amount-can-convert",
	id: 67,
	description: "Set to 1 if conversion has been enabled for the player. Dark Age is the prerequisite, so it should always be 1 except in scenarios where Dark Age has been disabled specifically to disable conversion."
}, {
	name: "amount-player1-kills",
	id: 69,
	description: "Amount of units Player 1 has killed."
}, {
	name: "amount-player2-kills",
	id: 70,
	description: "Amount of units Player 2 has killed."
}, {
	name: "amount-player3-kills",
	id: 71,
	description: "Amount of units Player 3 has killed."
}, {
	name: "amount-player4-kills",
	id: 72,
	description: "Amount of units Player 4 has killed."
}, {
	name: "amount-player5-kills",
	id: 73,
	description: "Amount of units Player 5 has killed."
}, {
	name: "amount-player6-kills",
	id: 74,
	description: "Amount of units Player 6 has killed."
}, {
	name: "amount-player7-kills",
	id: 75,
	description: "Amount of units Player 7 has killed."
}, {
	name: "amount-player8-kills",
	id: 76,
	description: "Amount of units Player 8 has killed."
}, {
	name: "amount-convert-resistance",
	id: 77,
	description: "Amount of conversion resistance an object has. Faith increases this by 3. Teutons team bonus increases this by 2."
}, {
	name: "amount-trade-vig-rate",
	id: 78,
	description: "Sets the trading fee. Affected by Guilds."
}, {
	name: "amount-stone-bonus",
	id: 79,
	description: "The Mayan bonus for stone, where stone resources last longer."
}, {
	name: "amount-queued-count",
	id: 80,
	description: "The amount of units a building is training. Doesn't seem to count technologies."
}, {
	name: "amount-training-count",
	id: 81,
	description: "The total amount of all units the player is currently training."
}, {
	name: "amount-raider",
	id: 82,
	description: "Starts the player with Unit 444 (PWTC, a packed town center) if this is 1. This was a mechanic for Mongols, Celts, and Vikings who were originally designed as Raider civs. This changed before release of AoK, and this mechanic is not used."
}, {
	name: "amount-boarding-recharge-rate",
	id: 83,
	description: "Similar to monk faith regeneration, resource 35. This applies to boarding galleys that would convert ships from 1 range away. The boarding galleys could appear in custom scenarios, but otherwise this resource is unused."
}, {
	name: "amount-starting-villagers",
	id: 84,
	description: "The number of starting villagers, depending on the civilization."
}, {
	name: "amount-research-cost-mod",
	id: 85,
	description: "The multiplier for the current discount on technologies for the Chinese, between 0.8 and 1."
}, {
	name: "amount-research-time-mod",
	id: 86,
	description: "Appears to be unused, but probably still works for mods. Probably exists for a civ bonus that was removed before release that enabled faster researching technologies."
}, {
	name: "amount-convert-boats",
	id: 87,
	description: "Likely similar to resource 67, but enables boat conversion for boarding galleys. See resource 83. Could also simply allow the conversion of ships by monastery units. Is set to 1 from the start of the game."
}, {
	name: "amount-fish-trap-food",
	id: 88,
	description: "The amount of food that fish traps store, similar to resource 36 for farms."
}, {
	name: "amount-heal-rate-modifier",
	id: 89,
	description: "A multiplier for heal rate, used by the Byzantines team bonus."
}, {
	name: "amount-heal-range",
	id: 90,
	description: "Sets the monk/missionary heal range. Default is 4. Set to 8 for Teutons."
}, {
	name: "amount-starting-food",
	id: 91,
	description: "The starting food amount. Likely is affected by " + pStartingResources.getLink() + " and civ bonuses."
}, {
	name: "amount-starting-wood",
	id: 92,
	description: "The starting wood amount. Likely is affected by " + pStartingResources.getLink() + " and civ bonuses."
}, {
	name: "amount-starting-stone",
	id: 93,
	description: "The starting stone amount. Likely is affected by " + pStartingResources.getLink() + " and civ bonuses."
}, {
	name: "amount-starting-gold",
	id: 94,
	description: "The starting gold amount. Likely is affected by " + pStartingResources.getLink() + " and civ bonuses."
}, {
	name: "amount-raider-ability",
	id: 95,
	description: "Enables the slaver kidnap ability that didn't make it into the game."
}, {
	name: "amount-berserker-heal-timer",
	id: 96,
	description: "A timer between each berserk health regeneration. This is cut in half by Berserkergang."
}, {
	name: "amount-dominant-sheep-control",
	id: 97,
	description: "The Celtic sheep bonus. Set to 1 for Celts."
}, {
	name: "amount-object-cost-summation",
	id: 98,
	description: "Likely an object's total cost. Could be used to calculate part of the player's economic score."
}, {
	name: "amount-research-summation",
	id: 99,
	description: "Likely a technology's total cost. Could be used to calculate part of the player's economic score."
}, {
	name: "amount-relic-income-summation",
	id: 100,
	description: "The total relic gold generated for the player. Likely is equal to Relic Gold amount in the achievements screen. Untested whether this includes feitoria gold income."
}, {
	name: "amount-trade-income-summation",
	id: 101,
	description: "The total gold generated from trade units for the player. Likely is equal to Trade Profit in the achievements screen."
}, {
	name: "amount-player1-tribute",
	id: 102,
	description: "The total tribute sent by player 1."
}, {
	name: "amount-player2-tribute",
	id: 103,
	description: "The total tribute sent by player 2."
}, {
	name: "amount-player3-tribute",
	id: 104,
	description: "The total tribute sent by player 3."
}, {
	name: "amount-player4-tribute",
	id: 105,
	description: "The total tribute sent by player 4."
}, {
	name: "amount-player5-tribute",
	id: 106,
	description: "The total tribute sent by player 5."
}, {
	name: "amount-player6-tribute",
	id: 107,
	description: "The total tribute sent by player 6."
}, {
	name: "amount-player7-tribute",
	id: 108,
	description: "The total tribute sent by player 7."
}, {
	name: "amount-player8-tribute",
	id: 109,
	description: "The total tribute sent by player 8."
}, {
	name: "amount-player1-kill-value",
	id: 110,
	description: "The score value gained for player 1 from killing units, likely used to calculate the military score."
}, {
	name: "amount-player2-kill-value",
	id: 111,
	description: "The score value gained for player 2 from killing units, likely used to calculate the military score."
}, {
	name: "amount-player3-kill-value",
	id: 112,
	description: "The score value gained for player 3 from killing units, likely used to calculate the military score."
}, {
	name: "amount-player4-kill-value",
	id: 113,
	description: "The score value gained for player 4 from killing units, likely used to calculate the military score."
}, {
	name: "amount-player5-kill-value",
	id: 114,
	description: "The score value gained for player 5 from killing units, likely used to calculate the military score."
}, {
	name: "amount-player6-kill-value",
	id: 115,
	description: "The score value gained for player 6 from killing units, likely used to calculate the military score."
}, {
	name: "amount-player7-kill-value",
	id: 116,
	description: "The score value gained for player 7 from killing units, likely used to calculate the military score."
}, {
	name: "amount-player8-kill-value",
	id: 117,
	description: "The score value gained for player 8 from killing units, likely used to calculate the military score."
}, {
	name: "amount-player1-razings",
	id: 118,
	description: "The amount of buildings player 1 has destroyed."
}, {
	name: "amount-player2-razings",
	id: 119,
	description: "The amount of buildings player 2 has destroyed."
}, {
	name: "amount-player3-razings",
	id: 120,
	description: "The amount of buildings player 3 has destroyed."
}, {
	name: "amount-player4-razings",
	id: 121,
	description: "The amount of buildings player 4 has destroyed."
}, {
	name: "amount-player5-razings",
	id: 122,
	description: "The amount of buildings player 5 has destroyed."
}, {
	name: "amount-player6-razings",
	id: 123,
	description: "The amount of buildings player 6 has destroyed."
}, {
	name: "amount-player7-razings",
	id: 124,
	description: "The amount of buildings player 7 has destroyed."
}, {
	name: "amount-player8-razings",
	id: 125,
	description: "The amount of buildings player 8 has destroyed."
}, {
	name: "amount-player1-razing-value",
	id: 126,
	description: "The score gained for player 1 from destroying buildings, likely used to calculate military score."
}, {
	name: "amount-player2-razing-value",
	id: 127,
	description: "The score gained for player 2 from destroying buildings, likely used to calculate military score."
}, {
	name: "amount-player3-razing-value",
	id: 128,
	description: "The score gained for player 3 from destroying buildings, likely used to calculate military score."
}, {
	name: "amount-player4-razing-value",
	id: 129,
	description: "The score gained for player 4 from destroying buildings, likely used to calculate military score."
}, {
	name: "amount-player5-razing-value",
	id: 130,
	description: "The score gained for player 5 from destroying buildings, likely used to calculate military score."
}, {
	name: "amount-player6-razing-value",
	id: 131,
	description: "The score gained for player 6 from destroying buildings, likely used to calculate military score."
}, {
	name: "amount-player7-razing-value",
	id: 132,
	description: "The score gained for player 7 from destroying buildings, likely used to calculate military score."
}, {
	name: "amount-player8-razing-value",
	id: 133,
	description: "The score gained for player 8 from destroying buildings, likely used to calculate military score."
}, {
	name: "amount-castle",
	id: 134,
	description: "Likely the number of player's castles currently standing. Probably isn't equal to Total Castles on the achievements screen. This is likely Resource 173 instead."
}, {
	name: "amount-kills-by-player1",
	id: 136,
	description: "Likely the number of the player's own units that were killed by player 1. Likely used to calculate Units Lost in the achievements screen."
}, {
	name: "amount-kills-by-player2",
	id: 137,
	description: "Likely the number of the player's own units that were killed by player 2. Likely used to calculate Units Lost in the achievements screen."
}, {
	name: "amount-kills-by-player3",
	id: 138,
	description: "Likely the number of the player's own units that were killed by player 3. Likely used to calculate Units Lost in the achievements screen."
}, {
	name: "amount-kills-by-player4",
	id: 139,
	description: "Likely the number of the player's own units that were killed by player 4. Likely used to calculate Units Lost in the achievements screen."
}, {
	name: "amount-kills-by-player5",
	id: 140,
	description: "Likely the number of the player's own units that were killed by player 5. Likely used to calculate Units Lost in the achievements screen."
}, {
	name: "amount-kills-by-player6",
	id: 141,
	description: "Likely the number of the player's own units that were killed by player 6. Likely used to calculate Units Lost in the achievements screen."
}, {
	name: "amount-kills-by-player7",
	id: 142,
	description: "Likely the number of the player's own units that were killed by player 7. Likely used to calculate Units Lost in the achievements screen."
}, {
	name: "amount-kills-by-player8",
	id: 143,
	description: "Likely the number of the player's own units that were killed by player 8. Likely used to calculate Units Lost in the achievements screen."
}, {
	name: "amount-razings-by-player1",
	id: 144,
	description: "Likely the number of the player's own buildings that were destroyed by player 1. Likely used to calculate Buildings Lost in the achievements screen."
}, {
	name: "amount-razings-by-player2",
	id: 145,
	description: "Likely the number of the player's own buildings that were destroyed by player 2. Likely used to calculate Buildings Lost in the achievements screen."
}, {
	name: "amount-razings-by-player3",
	id: 146,
	description: "Likely the number of the player's own buildings that were destroyed by player 3. Likely used to calculate Buildings Lost in the achievements screen."
}, {
	name: "amount-razings-by-player4",
	id: 147,
	description: "Likely the number of the player's own buildings that were destroyed by player 4. Likely used to calculate Buildings Lost in the achievements screen."
}, {
	name: "amount-razings-by-player5",
	id: 148,
	description: "Likely the number of the player's own buildings that were destroyed by player 5. Likely used to calculate Buildings Lost in the achievements screen."
}, {
	name: "amount-razings-by-player6",
	id: 149,
	description: "Likely the number of the player's own buildings that were destroyed by player 6. Likely used to calculate Buildings Lost in the achievements screen."
}, {
	name: "amount-razings-by-player7",
	id: 150,
	description: "Likely the number of the player's own buildings that were destroyed by player 7. Likely used to calculate Buildings Lost in the achievements screen."
}, {
	name: "amount-razings-by-player8",
	id: 151,
	description: "Likely the number of the player's own buildings that were destroyed by player 8. Likely used to calculate Buildings Lost in the achievements screen."
}, {
	name: "amount-value-killed-by-others",
	id: 152,
	description: "Likely the total military score gained by all other players from killing the current player's units. Probably isn't included in the actual military score calculations, otherwise some players would have negative military scores."
}, {
	name: "amount-value-razed-by-others",
	id: 153,
	description: "Likely the total military score gained by all other players from razing the current player's buildings. Probably isn't included in the actual military score calculations, otherwise some players would have negative military scores."
}, {
	name: "amount-killed-by-others",
	id: 154,
	description: "The total number of the player's units killed by the player's enemies. Likely the sum of Resources 136 through 143. Likely is equal to Units Lost in the achievements screen."
}, {
	name: "amount-razed-by-others",
	id: 155,
	description: "The total number of the player's buildings by the player's enemies. Likely the sum of Resources 144 through 151. Likely is equal to Buildings Lost in the achievements screen."
}, {
	name: "amount-tribute-from-player1",
	id: 156,
	description: "Likely the total tribute received from player 1."
}, {
	name: "amount-tribute-from-player2",
	id: 157,
	description: "Likely the total tribute received from player 2."
}, {
	name: "amount-tribute-from-player3",
	id: 158,
	description: "Likely the total tribute received from player 3."
}, {
	name: "amount-tribute-from-player4",
	id: 159,
	description: "Likely the total tribute received from player 4."
}, {
	name: "amount-tribute-from-player5",
	id: 160,
	description: "Likely the total tribute received from player 5."
}, {
	name: "amount-tribute-from-player6",
	id: 161,
	description: "Likely the total tribute received from player 6."
}, {
	name: "amount-tribute-from-player7",
	id: 162,
	description: "Likely the total tribute received from player 7."
}, {
	name: "amount-tribute-from-player8",
	id: 163,
	description: "Likely the total tribute received from player 8."
}, {
	name: "amount-value-current-units",
	id: 164,
	description: "Likely the economy score gained from the player's current units."
}, {
	name: "amount-value-current-buildings",
	id: 165,
	description: "Likely the economy score gained from the player's current buildings."
}, {
	name: "amount-food-total",
	id: 166,
	description: "The total amount of food gathered. Untested if this includes income from feitorias."
}, {
	name: "amount-wood-total",
	id: 167,
	description: "The total amount of wood gathered. Untested if this includes income from feitorias."
}, {
	name: "amount-stone-total",
	id: 168,
	description: "The total amount of stone gathered. Untested if this includes income from feitorias."
}, {
	name: "amount-gold-total",
	id: 169,
	description: "The total amount of gold gathered. Likely doesn't include gold income from trade units, relics, or feitorias."
}, {
	name: "amount-total-value-of-kills",
	id: 170,
	description: "Likely the military score gained from killing enemy units."
}, {
	name: "amount-total-tribute-received",
	id: 171,
	description: "The total amount of tribute received. Likely the sum of Resources 156 through 163."
}, {
	name: "amount-total-value-of-razings",
	id: 172,
	description: "Likely the military score gained from razing enemy buildings."
}, {
	name: "amount-total-castles-built",
	id: 173,
	description: "The total number of castles the player built. Likely equal to Total Castles in the achievements screen."
}, {
	name: "amount-total-wonders-built",
	id: 174,
	description: "The total number of wonders the player built. Likely equal to Total Wonders in the achievements screen."
}, {
	name: "amount-tribute-score",
	id: 175,
	description: "The score the player gained from sending tribute."
}, {
	name: "amount-convert-min-adj",
	id: 176,
	description: "An adjustment to the minimum amount of time a monastery unit must spend converting before a unit will be converted. Inquisition sets this to -1."
}, {
	name: "amount-convert-max-adj",
	id: 177,
	description: "An adjustment to the maximum amount of time a monastery unit must spend converting units. After this time, the unit will automatically be converted. Inquisition sets this to -1."
}, {
	name: "amount-convert-resist-min-adj",
	id: 178,
	description: "An adjustment to the conversion resistance of units. Likely adjusts the minimum amount of time monastery units must spend converting these units before they will be converted. Used by Faith and the Teutons team bonus."
}, {
	name: "amount-convert-resist-max-adj",
	id: 179,
	description: "An adjustment to the conversion resistance of units. Likely adjusts the maximum amount of time monastery units must spend converting these units. After this time, the unit will automatically be converted. Used by Faith and the Teutons team bonus."
}, {
	name: "amount-convert-building-min",
	id: 180,
	description: "An adjustment to the minimum amount of time a monastery unit must spend converting before a building will be converted. Inquisition sets this to -5."
}, {
	name: "amount-convert-building-max",
	id: 181,
	description: "An adjustment to the maximum amount of time a monastery unit must spend converting buildings. After this time, the building will automatically be converted. Inquisition sets this to -5."
}, {
	name: "amount-convert-building-chance",
	id: 182,
	description: "Likely an adjustment to the percent chance a monastery unit will successfully convert a unit each second within the minimum and maximum conversion times for the object. Inquisition sets this resource to 5."
}, {
	name: "amount-spies",
	id: 183,
	description: "Likely set to 1 if Spies is researched."
}, {
	name: "amount-value-wonders-castles",
	id: 184,
	description: "Likely the amount of society score gained from constructing castles and wonders."
}, {
	name: "amount-food-score",
	id: 185,
	description: "Likely the amount of economic score gained from the player's current food stockpile."
}, {
	name: "amount-wood-score",
	id: 186,
	description: "Likely the amount of economic score gained from the player's current wood stockpile."
}, {
	name: "amount-stone-score",
	id: 187,
	description: "Likely the amount of economic score gained from the player's current stone stockpile."
}, {
	name: "amount-gold-score",
	id: 188,
	description: "Likely the amount of economic score gained from the player's current gold stockpile."
}, {
	name: "amount-wood-bonus",
	id: 189,
	description: "The Mayan bonus for wood, where wood resources last longer."
}, {
	name: "amount-food-bonus",
	id: 190,
	description: "The Mayan bonus for food, where food resources last longer."
}, {
	name: "amount-relic-rate",
	id: 191,
	description: "The rate that relics accumulate gold. Changed by Sultans and Aztec team bonus."
}, {
	name: "amount-heresy",
	id: 192,
	description: "Set to 1 when the player researches Heresy."
}, {
	name: "amount-theocracy",
	id: 193,
	description: "Set to 1 when the player researches Theocracy."
}, {
	name: "amount-crenellations",
	id: 194,
	description: "Set to 1 when the player researches Crenellations. Probably controls whether garrisoned infantry fire arrows."
}, {
	name: "amount-construction-rate-mod",
	id: 195,
	description: "Modifies the construction rate of buildings. Used by the Spanish."
}, {
	name: "amount-hun-wonder-bonus",
	id: 196,
	description: "Affects the victory time of wonders. Probably also affects relic victory times. Seems to be the number of years required for victory * 10. Used for Atheism."
}, {
	name: "amount-spies-discount",
	id: 197,
	description: "Atheism sets this to 1. Likely applies the 50% discount to Spies if this resource is set to 1."
}, {
	name: "amount-unused-0",
	id: 220,
	description: "Unused. Might be usable by mods."
}, {
	name: "amount-unused-1",
	id: 221,
	description: "Unused. Might be usable by mods."
}, {
	name: "amount-unused-2",
	id: 222,
	description: "Unused. Might be usable by mods."
}, {
	name: "amount-unused-3",
	id: 223,
	description: "Unused. Might be usable by mods."
}, {
	name: "amount-unused-4",
	id: 224,
	description: "Unused. Might be usable by mods."
} ];

//RuleDelta
pRuleDelta.description = "The number of rules to jump. Positive values will jump forward, while negative values will jump backward.";
pRuleDelta.shortDescription = "The number of rules to jump.";
pRuleDelta.range = "The number of rules to jump, theoretically will likely have a range of -32768 to 32767.";
pRuleDelta.relatedParams = [pRuleId];

//RuleId
pRuleId.description = "The rule number id to jump to. Please do not attempt to jump to a negative rule id.";
pRuleId.shortDescription = "The rule number id to jump to.";
pRuleId.range = "A valid zero-based rule id, theoretically has a range of 0 to 32767.";
pRuleId.relatedParams = [pRuleDelta];

//ScoutMethod
pScoutMethod.description = "The scouting method. These are the same as IDs 0 to 6 for " + pPositionType.getLink() + ".";
pScoutMethod.shortDescription = "The scouting method.";
pScoutMethod.range = "0 to 6.";
pScoutMethod.relatedParams = [pExploredState, pPoint, pPositionType];
pScoutMethod.valueList = [ {
	name: "scout-center",
	id: 0,
	description: "Scout around the center of the map."
}, {
	name: "scout-opposite",
	id: 1,
	description: "Scouts the point on the opposite side of the map from position-self. It is found reflecting position-self across the center of the map."
}, {
	name: "scout-corner",
	id: 2,
	description: "Scouts the location of the corner closest to position-self (the location of the player's oldest Town Center)."
}, {
	name: "scout-enemy",
	id: 3,
	description: "This parameter will send the scout back to the target enemy's nearest building +/- 8 tiles in any direction at random, in order to better explore the target's town. If your ally finds the enemy town, you can target it for attacks, but not for forward building, since placement rejects the black area. With scout-enemy, you can discover the terrain near the building found by your ally."
}, {
	name: "scout-border",
	id: 4,
	description: "Scouts the point on a border that is closest to position-self (the location of the player's oldest Town Center)."
}, {
	name: "scout-mirror",
	id: 5,
	description: "Scouts the expected position of the mirrored opponent on the opposite team, found by mirroring from position-self across the line that separates teams."
}, {
	name: "scout-flank",
	id: 6,
	description: "Scouts the expected position where the nearest enemy flank player should be."
} ];

//SearchOrder
pSearchOrder.description = "Determines how the results should be sorted.";
pSearchOrder.shortDescription = "Determines how the results should be sorted.";
pSearchOrder.range = "0 to 2.";
pSearchOrder.relatedParams = [pIndex, pLocalIndex, pLocalList, pRemoteIndex, pRemoteList, pSearchSource];
pSearchOrder.valueList = [ {
	name: "search-order-none",
	id: 0,
	description: "Preserves the existing list order. Usually only used when removing duplicates from the search list."
}, {
	name: "search-order-asc",
	id: 1,
	description: "Sort the search results in ascending order."
}, {
	name: "search-order-desc",
	id: 2,
	description: "Sort the search results in descending order."
} ];

//SearchSource
pSearchSource.description = "The desired search source."
pSearchSource.shortDescription = "The desired search source."
pSearchSource.range = "1 or 2";
pSearchSource.relatedParams = [pIndex, pLocalIndex, pLocalList, pRemoteIndex, pRemoteList, pSearchOrder];
pSearchSource.valueList = [ {
	name: "search-local",
	id: 1,
	description: "The list that stores the search results from " + cUpFindLocal.getLink() + " commands. This list only contains objects from the current (local) player. The list holds a maximum of 240 objects."
}, {
	name: "search-remote",
	id: 2,
	description: "The list that stores the search results from " + cUpFindRemote.getLink() + " commands. This list only contains objects from the focus-player. The list holds a maximum of 40 objects."
} ];

//SharedGoalId
pSharedGoalId.description = "A goal that is shared among computer players. It is to be used only when all computer players are on the same team.";
pSharedGoalId.shortDescription = "A goal that is shared among allied computer players.";
pSharedGoalId.range = "1 to 256.";
pSharedGoalId.relatedParams = [pGoalId];

//SignalId
pSignalId.description = "The Id of a scenario trigger signal. This if effectively the same as " + pEventId.getLink() + " since the only types of events are trigger signals.";
pSignalId.shortDescription = "The Id of a scenario trigger signal.";
pSignalId.range = "0 to 255.";
pSignalId.relatedParams = [pEventId, pEventType];

//Size
pSize.description = "A " + pGoalId.getLink() + " that will be used to store the size of the group.";
pSize.shortDescription = "A GoalId that will be used to store the size of the group.";
pSize.range = "1 to 512.";
pSize.relatedParams = [pCount, pGroupId, pGroupType];

//SnId
pSnId.description = "A strategic number. See <a href=\"" + urlPrefix + "/strategic-numbers/sn-index.html\">Strategic Numbers</a> for a list of usable strategic numbers and their descriptions.";
pSnId.shortDescription = "A valid strategic number.";
pSnId.range = "0 to 295.";
pSnId.relatedParams = [pDiffParameterId, pGoalId, pId];

//SourceClass
pSourceClass.description = "A " + pGoalId.getLink() + " that will be used to store the " + pClassId.getLink() + " of the attacking object.";
pSourceClass.shortDescription = "A GoalId that will store the ClassId of the attacking object.";
pSourceClass.range = "1 to 512.";
pSourceClass.relatedParams = [pClassId, pFindPlayerMethod, pProjectileType, pTargetClass];

//Start
pStart.description = "Determines whether a timestamp or elapsed time is retrieved. To get a timestamp, use 0. To get the elapsed time since a timestamp, use a " + pGoalId.getLink() + " that is currently storing a timestamp.";
pStart.shortDescription = "Determines whether a timestamp or elapsed time is retrieved.";
pStart.range = "0 or a valid goal with range between 1 and 512.";
pStart.relatedParams = [pElapsedTime, pTime];

//StartingResources
pStartingResources.description = "The starting resources level of the game.";
pStartingResources.shortDescription = "The starting resources level of the game.";
pStartingResources.range = "1 to 3.";
pStartingResources.relatedParams = [pResource, pResourceAmount];
pStartingResources.valueList = [ {
	name: "low-resources",
	id: 1,
	description: "Start with 200W, 200F, 100G, and 200S in random map games. Other game modes may have different starting resources. Same as standard resources start."
}, {
	name: "medium-resources",
	id: 2,
	description: "Start with 500W, 500F, 300G, and 400S in random map games. Other game modes may have different starting resources."
}, {
	name: "high-resources",
	id: 3,
	description: "Start with 1000W, 1000F, 700G, and 800S in random map games. Other game modes may have different starting resources."
} ];

//State
pState.description = "If set to 1, both trained and garrisoned units will be held inside the building. If set to -1, only garrisoned units will be held inside. Otherwise, all units will be released as usual.";
pState.shortDescription = "If set to 1, both trained and garrisoned units will be held inside the building.";
pState.range = "-1, 0, or 1.";
pState.relatedParams = [pMaxGarrison, pMinGarrison];

//Strict
pStrict.description = "Set to 1 to require an open destination tile or 0 to allow for a few tiles of separation.";
pStrict.shortDescription = "Set to 1 to require an open destination tile or 0 to allow for a few tiles of separation.";
pStrict.range = "0 or 1.";
pStrict.relatedParams = [pDistance, pPoint];

//String
pString.description = "Text inside double quotes. Used in chat messages.";
pString.shortDescription = "Text inside double quotes. Used in chat messages.";
pString.range = "A string (quoted text).";
pString.relatedParams = [pCode, pExtension, pFormattedString, pLanguageId, pNewName, pPlain, pText];

//Target
pTarget.description = "Set to 1 to target only the object set by up-set-target-object. If set to 0, the objects in the local list will evenly target all objects in the remote list.";
pTarget.shortDescription = "Set to 1 to target only the object set by up-set-target-object.";
pTarget.range = "0 or 1.";
pTarget.relatedParams = [pTargetAction];

//TargetAction
pTargetAction.description = "The action to perform with the selected units. Some TargetActions cannot be taken with " + cUpTargetObjects.getLink() + ".";
pTargetAction.shortDescription = "The action to perform with the selected units."
pTargetAction.range = "0 to 18.";
pTargetAction.relatedParams = [pActionId, pOrderId, pTarget];
pTargetAction.valueList = [ {
	name: "action-default",
	id: 0,
	description: "Equivalent of a right-click for all objects in the local list on the point or target object(s). For " + cUpTargetPoint.getLink() + " this is the same as action-move."
}, {
	name: "action-move",
	id: 1,
	description: "Units in the local list will move to the point or the location of the target object(s)."
}, {
	name: "action-patrol",
	id: 2,
	description: "Units in the local list will patrol to the point or the location of the target object(s)."
}, {
	name: "action-guard",
	id: 3,
	description: "Units in the local list will guard the target object(s). For " + cUpTargetPoint.getLink() + " this is the same as action-move."
}, {
	name: "action-follow",
	id: 4,
	description: "Units in the local list will follow the target object(s). For " + cUpTargetPoint.getLink() + " this is the same as action-move."
}, {
	name: "action-stop",
	id: 5,
	description: "Objects in the local list will stop their current action."
}, {
	name: "action-ground",
	id: 6,
	description: "Units in the local list will attack ground at the point or against the target object(s)."
}, {
	name: "action-garrison",
	id: 7,
	description: "Units in the local list will garrison inside the target object(s). For " + cUpTargetPoint.getLink() + " this is the same as action-move."
}, {
	name: "action-delete",
	id: 8,
	description: "Deletable objects in the local list will be deleted."
}, {
	name: "action-unload",
	id: 9,
	description: "Buildings in the local list will ungarrison to the target point. Siege (class 913) in the local list will eject in place. Transport ships in the local list will unload at the target point. For " + cUpTargetObjects.getLink() + " this is the same as action-none."
}, {
	name: "action-train",
	id: 10,
	description: "Buildings in the local list will train units. To train units, use this syntax: (" + cUpTargetPoint.getLink() + " inGoal" + pEscrowState.getLink() + " action-train " + pTypeOp.getLink() + " inOp" + pTypeId.getLink() + "). Example: (up-target-point 0 action-train c: spearman-line). For " + cUpTargetObjects.getLink() + " this is the same as action-none."
}, {
	name: "action-gather",
	id: 11,
	description: "Buildings in the local list will set their gathering point at the target point or at the location of the target object(s)."
}, {
	name: "action-lock",
	id: 12,
	description: "Gates in the local list will toggle their locked state. If they are locked, they will unlock. If they are unlocked, they will lock. For " + cUpTargetObjects.getLink() + " this is the same as action-none."
}, {
	name: "action-work",
	id: 13,
	description: "Buildings in the local list will send garrisoned villagers back to work. Same as clicking the Send Back to Work button. For " + cUpTargetObjects.getLink() + " this is the same as action-none."
}, {
	name: "action-ungarrison",
	id: 14,
	description: "Units in the local list will be ungarrisoned from the building they are garrisoned inside. For " + cUpTargetObjects.getLink() + " this is the same as action-none."
}, {
	name: "action-drop-relic",
	id: 15,
	description: "Monastery units in the local list will drop any relics they are carrying. For " + cUpTargetObjects.getLink() + " this is the same as action-none."
}, {
	name: "action-pack",
	id: 16,
	description: "Trebuchets in the local list will pack. For " + cUpTargetObjects.getLink() + " this is the same as action-none."
}, {
	name: "action-unpack",
	id: 17,
	description: "Trebuchets in the local list will unpack. For " + cUpTargetObjects.getLink() + " this is the same as action-none."
}, {
	name: "action-none",
	id: 18,
	description: "The current actions of the objects in the local list will not change."
} ];

//TargetClass
pTargetClass.description = "A goal that stores the " + pClassId.getLink() + " of the target of the attack.";
pTargetClass.shortDescription = "A goal that stores the ClassId of the target of the attack.";
pTargetClass.range = "A " + pGoalId.getLink() + ". This can range from 1 to 512.";
pTargetClass.relatedParams = [pClassId, pProjectileType, pSourceClass];

//TauntId
pTauntId.description = "A valid taunt ID. Only taunts 1-42 will send an audio version of the taunt, but all taunts within the range below can be sent and detected by AIs.";
pTauntId.shortDescription = "A valid taunt ID.";
pTauntId.range = "1 to 255.";

//TechId
pTechId.description = "The name of a technology or the ID number assigned to that technology. See the Technology table for details [to be added later]. Note that some technologies are given an AI name that is different from the in-game technology name.";
pTechId.shortDescription = "The name of a technology or the ID number assigned to that technology.";
pTechId.range = "A valid technology ID.";
pTechId.relatedParams = [pResearchState];

//Terrain
pTerrain.description = "The name of a terrain or the ID number assigned to that terrain. Notes about terrain changes apply primarily to the WololoKingdoms version of the game. Terrain changes might be different in AoE2:DE and the HD expansions on Steam.";
pTerrain.shortDescription = "The name of a terrain or the ID number assigned to that terrain.";
pTerrain.range = "0 to 41.";
pTerrain.relatedParams = [pMapType];
pTerrain.valueList = [ {
	name: "terrain-grass",
	id: 0,
	description: "Grass 1 terrain."
}, {
	name: "terrain-water",
	id: 1,
	description: "Shallow Water terrain."
}, {
	name: "terrain-water-beach",
	id: 2,
	description: "Beach terrain."
}, {
	name: "terrain-dirt3",
	id: 3,
	description: "Dirt 3 terrain."
}, {
	name: "terrain-shallows",
	id: 4,
	description: "Shallows terrain."
}, {
	name: "terrain-leaves",
	id: 5,
	description: "Leaves terrain."
}, {
	name: "terrain-dirt",
	id: 6,
	description: "Dirt 1 terrain."
}, {
	name: "terrain-farm",
	id: 7,
	description: "Farm terrain. Looks like normal farms."
}, {
	name: "terrain-farm-dead",
	id: 8,
	description: "Dead Farm terrain. Looks like exhausted or destroyed farms."
}, {
	name: "terrain-grass3",
	id: 9,
	description: "Grass 3 terrain."
}, {
	name: "terrain-forest",
	id: 10,
	description: "Forest terrain. Looks like Oak Forest."
}, {
	name: "terrain-dirt2",
	id: 11,
	description: "Dirt 2 terrain. This was replaced with Mangrove Shallows in the Rajas expansion. To use the old Dirt 2 terrain, use terrain-foundation instead."
}, {
	name: "terrain-grass2",
	id: 12,
	description: "Grass 2 terrain."
}, {
	name: "terrain-forest-palm",
	id: 13,
	description: "Palm Desert terrain."
}, {
	name: "terrain-desert",
	id: 14,
	description: "Desert terrain."
}, {
	name: "terrain-water-old",
	id: 15,
	description: "Old water terrain. Probably the Shoreless Water in the editor."
}, {
	name: "terrain-grass-old",
	id: 16,
	description: "Old grass terrain. Used as the base terrain for cliffs. Replaced with Baobab Forest in the African Kingdoms expansion."
}, {
	name: "terrain-forest-jungle",
	id: 17,
	description: "Jungle terrain."
}, {
	name: "terrain-forest-bamboo",
	id: 18,
	description: "Bamboo terrain."
}, {
	name: "terrain-forest-pine",
	id: 19,
	description: "Pine Forest terrain."
}, {
	name: "terrain-forest-oak",
	id: 20,
	description: "Oak Forest terrain. Replaced with Mangrove Forest in the Rajas expansion. To use the old Oak Forest terrain in this expansion and later, use terrain-forest instead."
}, {
	name: "terrain-forest-snow",
	id: 21,
	description: "Snow Pine Forest terrain."
}, {
	name: "terrain-water-deep",
	id: 22,
	description: "Deep Water terrain."
}, {
	name: "terrain-water-medium",
	id: 23,
	description: "Medium Water terrain."
}, {
	name: "terrain-road",
	id: 24,
	description: "Road terrain."
}, {
	name: "terrain-road-broken",
	id: 25,
	description: "Broken Road terrain."
}, {
	name: "terrain-ice",
	id: 26,
	description: "Ice terrain."
}, {
	name: "terrain-foundation",
	id: 27,
	description: "Foundation terrain. Terrain placed under buildings when constructed. Looks like terrain-dirt2."
}, {
	name: "terrain-water-bridge",
	id: 28,
	description: "Walkable water terrain placed under bridges."
}, {
	name: "terrain-farm1",
	id: 29,
	description: "Farm 1 terrain. Looks like farms at the start of construction."
}, {
	name: "terrain-farm2",
	id: 30,
	description: "Farm 2 terrain. Looks like partially planted farms."
}, {
	name: "terrain-farm3",
	id: 31,
	description: "Farm 3 terrain. Looks like mostly planted farms."
}, {
	name: "terrain-snow",
	id: 32,
	description: "Snow terrain."
}, {
	name: "terrain-dirt-snow",
	id: 33,
	description: "Snow Dirt terrain. Changed to Snow Road in African Kingdoms to make room for Cracked terrain. To use the old Snow Dirt in this expansion and later, use terrain-foundation-snow."
}, {
	name: "terrain-grass-snow",
	id: 34,
	description: "Snow Grass terrain."
}, {
	name: "terrain-ice2",
	id: 35,
	description: "Other Ice terrain. Not sure what the difference is between terrain-ice and terrain-ice2"
}, {
	name: "terrain-foundation-snow",
	id: 36,
	description: "Snow Foundation terrain. Terrain placed under buildings constructed on snowy terrains. Looks like Snow Dirt."
}, {
	name: "terrain-ice-beach",
	id: 37,
	description: "Ice Beach terrain. Ice terrain created on shorelines."
}, {
	name: "terrain-road-snow",
	id: 38,
	description: "Snow Road. Replaced with Cracked terrain in African Kingdoms. To use the old Snow Road terrain in this expansion and later, use terrain-dirt-snow."
}, {
	name: "terrain-road-fungus",
	id: 39,
	description: "Fungus Road terrain."
}, {
	name: "terrain-koh",
	id: 40,
	description: "Terrain placed under monuments in King of the Hill games."
}, {
	name: "terrain-unknown",
	id: 41,
	description: "Unknown terrain. Replaced with Acacia Forest."
} ];

//Text
pText.description = "The defconst ID where a string (quoted text) is stored. You cannot input a string directly.";
pText.shortDescription = "The defconst ID where a string (quoted text) is stored.";
pText.range = "A text defconst.";
pText.relatedParams = [pCode, pExtension, pFormattedString, pLanguageId, pNewName, pString];

//Tiles
pTiles.description = "The number of tiles to move along the vector.";
pTiles.shortDescription = "The number of tiles to move along the vector.";
pTiles.range = "-32768 to 32767.";
pTiles.relatedParams = [pBorder, pDistance, pPercent, pPoint];

//Time
pTime.description = "A " + pGoalId.getLink() + " to store the time information.";
pTime.shortDescription = "A GoalId to store the time information.";
pTime.range = "A " + pGoalId.getLink() + ".";
pTime.relatedParams = [pElapsedTime, pStart];

//TimerId
pTimerId.description = "The ID of a timer or a defconst representing a timer.";
pTimerId.shortDescription = "The ID of a timer or a defconst representing a timer.";
pTimerId.range = "1 to 50.";
pTimerId.relatedParams = [pElapsedTime, pTimerState];

//TimerState
pTimerState.description = "The current state of a timer.";
pTimerState.shortDescription = "The current state of a timer.";
pTimerState.range = "0 to 2.";
pTimerState.relatedParams = [pElapsedTime, pTimerId]
pTimerState.valueList = [ {
	name: "timer-disabled",
	id: 0,
	description: "The timer is disabled."
}, {
	name: "timer-running",
	id: 1,
	description: "The timer has been set, but it hasn't been triggered yet."
}, {
	name: "timer-triggered",
	id: 2,
	description: "The timer has triggered, and it hasn't been disabled yet."
} ];

//Type
pType.description = "A " + pGoalId.getLink() + " that stores the type of victory approaching. Stores one of the following: relic, wonder, monument, or 0 if invalid.";
pType.shortDescription = "A GoalId that stores the type of victory approaching.";
pType.range = "A " + pGoalId.getLink() + ". These range from 1 to 512.";
pType.relatedParams = [pGameType, pGuardState, pLimit, pVictory];

//TypeId
pTypeId.description = "The type of object. This can be either the object name or an object line ID. See the <a href=\"" + urlPrefix + "/resources/tables/objects.html\">Objects Table</a> for a list of object names and object line wildcard parameters.";
pTypeId.shortDescription = "The type of object.";
pTypeId.range = "A valid " + pObjectId.getLink() + " or one of the object line wildcard parameters.";
pTypeId.relatedParams = [pBuildingId, pClassId, pObjectId, pUnitId, pUpgradeId];

//UnitId
pUnitId.description = "The object ID of a unit, the unit type name, or a unit's class. See the <a href=\"" + urlPrefix + "/resources/tables/objects.html\">Objects Table</a> for reference.";
pUnitId.shortDescription = "The object ID of a unit, the unit type name, or a unit's class.";
pUnitId.range = "A valid UnitId.";
pUnitId.relatedParams = [pBuildingId, pClassId, pId, pObjectId, pTypeId, pUpgradeId];

//UpgradeId
pUpgradeId.description = "A " + pGoalId.getLink() + " to store the upgrade type id. Note: this stores the current upgraded version of that unit/building line, not the next upgrade in the upgrade sequence.";
pUpgradeId.shortDescription = "A GoalId to store the upgrade type id.";
pUpgradeId.range = "A valid " + pGoalId.getLink() + ".";
pUpgradeId.relatedParams = [pBuildingId, pObjectId, pTypeId, pUpgradeId];

//Value
pValue.description = "An integer value. Used for many different purposes.";
pValue.shortDescription = "An integer value. Used for many different purposes.";
pValue.range = "A 16-bit signed integer (-32768 to 32767). Values for extended goals (goals 41-510) have a 32-bit signed integer range (-2,147,483,648 to 2,147,483,647).";
pValue.relatedParams = [pCount];

//Victory
pVictory.description = "A victory condition.";
pVictory.shortDescription = "A victory condition.";
pVictory.range = "0 to 4.";
pVictory.relatedParams = [pGameType, pGuardState, pLimit, pType];
pVictory.valueList = [ {
	name: "standard",
	id: 0,
	description: "Standard victory. Team wins by defeating all enemies, capturing all relics, or defending a wonder."
}, {
	name: "conquest",
	id: 1,
	description: "Conquest victory. Team only wins by defeating all enemies."
}, {
	name: "time-limit",
	id: 2,
	description: "Time Limit victory. The team with the highest score at the time limit wins."
}, {
	name: "score",
	id: 3,
	description: "Score victory. The player or team to first reach the score wins."
}, {
	name: "custom",
	id: 4,
	description: "Custom victory. Either Relic victory from random map game menu (like Standard but without wonder victory) or a scenario is being played that has the Custom option selected in the scenario's Global Victory section."
} ];

//WallId
pWallId.description = "The " + pBuildingId.getLink() + " of a wall type."
pWallId.shortDescription = "The BuildingId of a wall type.";
pWallId.range = "A Wall type.";
pWallId.relatedParams = [pBuildingId, pPerimeter];
pWallId.valueList = [ {
	name: "palisade-wall",
	id: 72,
	description: "Palisade Wall."
}, {
	name: "stone-wall",
	id: 117,
	description: "Stone Wall."
}, {
	name: "fortified-wall",
	id: 155,
	description: "Fortified Wall."
} ];
pWallId.wildcardParam = [ {
	name: "stone-wall-line",
	id: -399,
	description: "Stone Wall line."
} ];


















	/*

	snPercentCivilianExplorers.id = 0;
	snPercentCivilianExplorers.name = "sn-percent-civilian-explorers";
	snPercentCivilianExplorers.category = "Economy";
	snPercentCivilianExplorers.default = 34;
	snPercentCivilianExplorers.min = -32767;
	snPercentCivilianExplorers.max = 32768;
	snPercentCivilianExplorers.rmin = 0;
	snPercentCivilianExplorers.rmax = 100;
	snPercentCivilianExplorers.network = 0;
	snPercentCivilianExplorers.defined = 1;
	snPercentCivilianExplorers.available = 0;
	snPercentCivilianExplorers.version = "1.0c";
	snPercentCivilianExplorers.linked = [ 3, 35, 18 ];
	snPercentCivilianExplorers.related = [ 1, 2 ];
	snPercentCivilianExplorers.shortDescription = "Controls the normal, formula-based percentage of civilian explorers allocated.";

	snPercentCivilianBuilders.id = 1;
	snPercentCivilianBuilders.name = "sn-percent-civilian-builders";
	snPercentCivilianBuilders.category = "Economy";
	snPercentCivilianBuilders.default = 0;
	snPercentCivilianBuilders.min = -32767;
	snPercentCivilianBuilders.max = 32768;
	snPercentCivilianBuilders.rmin = 0;
	snPercentCivilianBuilders.rmax = 100;
	snPercentCivilianBuilders.network = 0;
	snPercentCivilianBuilders.defined = 1;
	snPercentCivilianBuilders.available = 0;
	snPercentCivilianBuilders.version = "1.0c";
	snPercentCivilianBuilders.linked = [ 4, 253 ];
	snPercentCivilianBuilders.related = [ 0, 2 ];
	snPercentCivilianBuilders.shortDescription = "Controls the normal, formula-based percentage of builders allocated.";

	snPercentCivilianGatherers.id = 2;
	snPercentCivilianGatherers.name = "sn-percent-civilian-gatherers";
	snPercentCivilianGatherers.category = "Economy";
	snPercentCivilianGatherers.default = 66;
	snPercentCivilianGatherers.min = -32767;
	snPercentCivilianGatherers.max = 32768;
	snPercentCivilianGatherers.rmin = 0;
	snPercentCivilianGatherers.rmax = 100;
	snPercentCivilianGatherers.network = 0;
	snPercentCivilianGatherers.defined = 1;
	snPercentCivilianGatherers.available = 0;
	snPercentCivilianGatherers.version = "1.0c";
	snPercentCivilianGatherers.linked = [ 5 ];
	snPercentCivilianGatherers.related = [ 0, 1 ];
	snPercentCivilianGatherers.shortDescription = "Controls the normal, formula-based percentage of gatherers allocated.";

	snCapCivilianExplorers.id = 3;
	snCapCivilianExplorers.name = "sn-cap-civilian-explorers";
	snCapCivilianExplorers.category = "Economy";
	snCapCivilianExplorers.default = 2;
	snCapCivilianExplorers.min = -32767;
	snCapCivilianExplorers.max = 32768;
	snCapCivilianExplorers.rmin = -1;
	snCapCivilianExplorers.rmax = 32768;
	snCapCivilianExplorers.network = 0;
	snCapCivilianExplorers.defined = 1;
	snCapCivilianExplorers.available = 0;
	snCapCivilianExplorers.version = "1.0c";
	snCapCivilianExplorers.linked = [ 0, 35, 18 ];
	snCapCivilianExplorers.related = [ 4, 5 ];
	snCapCivilianExplorers.shortDescription = "Caps the number of civilian explorers allocated. Factored in after the percentage is calculated. Ignored when set to -1.";

	snCapCivilianBuilders.id = 4;
	snCapCivilianBuilders.name = "sn-cap-civilian-builders";
	snCapCivilianBuilders.category = "Economy";
	snCapCivilianBuilders.default = 2;
	snCapCivilianBuilders.min = -32767;
	snCapCivilianBuilders.max = 32768;
	snCapCivilianBuilders.rmin = -1;
	snCapCivilianBuilders.rmax = 32768;
	snCapCivilianBuilders.network = 0;
	snCapCivilianBuilders.defined = 1;
	snCapCivilianBuilders.available = "available, however it must be at least 6-7 at all times, 10 if you will build walls, and 40-50 for wonder construction (100+ is recommended)";
	snCapCivilianBuilders.version = "1.0c";
	snCapCivilianBuilders.linked = [ 1, 253 ];
	snCapCivilianBuilders.related = [ 3, 5 ];
	snCapCivilianBuilders.shortDescription = "Caps the number of builders allocated. Factored in after the percentage is calculated. Ignored when set to -1, causing all construction to be blocked.";

	snCapCivilianGatherers.id = 5;
	snCapCivilianGatherers.name = "sn-cap-civilian-gatherers";
	snCapCivilianGatherers.category = "Economy";
	snCapCivilianGatherers.default = -1;
	snCapCivilianGatherers.min = -32767;
	snCapCivilianGatherers.max = 32768;
	snCapCivilianGatherers.rmin = -1;
	snCapCivilianGatherers.rmax = 32768;
	snCapCivilianGatherers.network = 0;
	snCapCivilianGatherers.defined = 1;
	snCapCivilianGatherers.available = 0;
	snCapCivilianGatherers.version = "1.0c";
	snCapCivilianGatherers.linked = [ 2 ];
	snCapCivilianGatherers.related = [ 3, 4 ];
	snCapCivilianGatherers.shortDescription = "Caps the number of gatherers allocated. Factored in after the percentage is calculated. Ignored when set to -1.";

	snUnknownData006.id = 6;
	snUnknownData006.name = "unknown-data-006";
	snUnknownData006.category = "None";
	snUnknownData006.default = -1;
	snUnknownData006.min = -32767;
	snUnknownData006.max = 32768;
	snUnknownData006.rmin = -32767;
	snUnknownData006.rmax = 32768;
	snUnknownData006.network = 0;
	snUnknownData006.defined = 0;
	snUnknownData006.available = 0;
	snUnknownData006.version = "1.0c";
	snUnknownData006.linked = [];
	snUnknownData006.related = [];
	snUnknownData006.shortDescription = "Unused.";

	snUnknownData007.id = 7;
	snUnknownData007.name = "unknown-data-007";
	snUnknownData007.category = "None";
	snUnknownData007.default = -1;
	snUnknownData007.min = -32767;
	snUnknownData007.max = 32768;
	snUnknownData007.rmin = -32767;
	snUnknownData007.rmax = 32768;
	snUnknownData007.network = 0;
	snUnknownData007.defined = 0;
	snUnknownData007.available = 0;
	snUnknownData007.version = "1.0c";
	snUnknownData007.linked = [];
	snUnknownData007.related = [];
	snUnknownData007.shortDescription = "Unused.";

	snUnknownData008.id = 8;
	snUnknownData008.name = "unknown-data-008";
	snUnknownData008.category = "None";
	snUnknownData008.default = -1;
	snUnknownData008.min = -32767;
	snUnknownData008.max = 32768;
	snUnknownData008.rmin = -32767;
	snUnknownData008.rmax = 32768;
	snUnknownData008.network = 0;
	snUnknownData008.defined = 0;
	snUnknownData008.available = 0;
	snUnknownData008.version = "1.0c";
	snUnknownData008.linked = [];
	snUnknownData008.related = [];
	snUnknownData008.shortDescription = "Unused.";

	snUnknownData009.id = 9;
	snUnknownData009.name = "unknown-data-009";
	snUnknownData009.category = "None";
	snUnknownData009.default = -1;
	snUnknownData009.min = -32767;
	snUnknownData009.max = 32768;
	snUnknownData009.rmin = -32767;
	snUnknownData009.rmax = 32768;
	snUnknownData009.network = 0;
	snUnknownData009.defined = 0;
	snUnknownData009.available = 0;
	snUnknownData009.version = "1.0c";
	snUnknownData009.linked = [];
	snUnknownData009.related = [];
	snUnknownData009.shortDescription = "An unused strategic number";

	snUnknownData010.id = 10;
	snUnknownData010.name = "unknown-data-010";
	snUnknownData010.category = "None";
	snUnknownData010.default = -1;
	snUnknownData010.min = -32767;
	snUnknownData010.max = 32768;
	snUnknownData010.rmin = -32767;
	snUnknownData010.rmax = 32768;
	snUnknownData010.network = 0;
	snUnknownData010.defined = 0;
	snUnknownData010.available = 0;
	snUnknownData010.version = "1.0c";
	snUnknownData010.linked = [];
	snUnknownData010.related = [];
	snUnknownData010.shortDescription = "Unused.";

	snUnknownData011.id = 11;
	snUnknownData011.name = "unknown-data-011";
	snUnknownData011.default = -1;
	snUnknownData011.category = "None";
	snUnknownData011.min = -32767;
	snUnknownData011.max = 32768;
	snUnknownData011.rmin = -32767;
	snUnknownData011.rmax = 32768;
	snUnknownData011.network = 0;
	snUnknownData011.defined = 0;
	snUnknownData011.available = 0;
	snUnknownData011.version = "1.0c";
	snUnknownData011.linked = [];
	snUnknownData011.related = [];
	snUnknownData011.shortDescription = "Unused.";

	snUnknownData012.id = 12;
	snUnknownData012.name = "unknown-data-012";
	snUnknownData012.default = -1;
	snUnknownData012.category = "None";
	snUnknownData012.min = -32767;
	snUnknownData012.max = 32768;
	snUnknownData012.rmin = -32767;
	snUnknownData012.rmax = 32768;
	snUnknownData012.network = 0;
	snUnknownData012.defined = 0;
	snUnknownData012.available = 0;
	snUnknownData012.version = "1.0c";
	snUnknownData012.linked = [];
	snUnknownData012.related = [];
	snUnknownData012.shortDescription = "Unused.";

	snUnknownData013.id = 13;
	snUnknownData013.name = "unknown-data-013";
	snUnknownData013.default = -1;
	snUnknownData013.category = "None";
	snUnknownData013.min = -32767;
	snUnknownData013.max = 32768;
	snUnknownData013.rmin = -32767;
	snUnknownData013.rmax = 32768;
	snUnknownData013.network = 0;
	snUnknownData013.defined = 0;
	snUnknownData013.available = 0;
	snUnknownData013.version = "1.0c";
	snUnknownData013.linked = [];
	snUnknownData013.related = [];
	snUnknownData013.shortDescription = "Unused.";

	snUnknownData014.id = 14;
	snUnknownData014.name = "unknown-data-014";
	snUnknownData014.default = -1;
	snUnknownData014.category = "None";
	snUnknownData014.min = -32767;
	snUnknownData014.max = 32768;
	snUnknownData014.rmin = -32767;
	snUnknownData014.rmax = 32768;
	snUnknownData014.network = 0;
	snUnknownData014.defined = 0;
	snUnknownData014.available = 0;
	snUnknownData014.version = "1.0c";
	snUnknownData014.linked = [];
	snUnknownData014.related = [];
	snUnknownData014.shortDescription = "Unused.";

	snUnknownData015.id = 15;
	snUnknownData015.name = "unknown-data-015";
	snUnknownData015.default = -1;
	snUnknownData015.category = "None";
	snUnknownData015.min = -32767;
	snUnknownData015.max = 32768;
	snUnknownData015.rmin = -32767;
	snUnknownData015.rmax = 32768;
	snUnknownData015.network = 0;
	snUnknownData015.defined = 0;
	snUnknownData015.available = 0;
	snUnknownData015.version = "1.0c";
	snUnknownData015.linked = [];
	snUnknownData015.related = [];
	snUnknownData015.shortDescription = "Unused.";

	snMinimumAttackGroupSize.id = 16;
	snMinimumAttackGroupSize.name = "sn-minimum-attack-group-size";
	snMinimumAttackGroupSize.default = 4;
	snMinimumAttackGroupSize.category = "Attack";
	snMinimumAttackGroupSize.min = -32767;
	snMinimumAttackGroupSize.max = 32768;
	snMinimumAttackGroupSize.rmin = 0;
	snMinimumAttackGroupSize.rmax = 32768;
	snMinimumAttackGroupSize.network = 0;
	snMinimumAttackGroupSize.defined = 1;
	snMinimumAttackGroupSize.available = 0;
	snMinimumAttackGroupSize.version = "1.0c";
	snMinimumAttackGroupSize.linked = [ 26, 36 ];
	snMinimumAttackGroupSize.related = [ 58, 60, 59, 94, 93, 41, 98 ];
	snMinimumAttackGroupSize.shortDescription = "Sets the minimum size of land-based attack groups. A group must meet its minimum size as one of the tasking prerequisites. The game can change this itself during the game.";

	snUnknownData017.id = 17;
	snUnknownData017.name = "unknown-data-017";
	snUnknownData017.default = -1;
	snUnknownData017.category = "None";
	snUnknownData017.min = -32767;
	snUnknownData017.max = 32768;
	snUnknownData017.rmin = -32767;
	snUnknownData017.rmax = 32768;
	snUnknownData017.network = 0;
	snUnknownData017.defined = 0;
	snUnknownData017.available = 0;
	snUnknownData017.version = "1.0c";
	snUnknownData017.linked = [];
	snUnknownData017.related = [];
	snUnknownData017.shortDescription = "Unused.";

	snTotalNumberExplorers.id = 18;
	snTotalNumberExplorers.name = "sn-total-number-explorers";
	snTotalNumberExplorers.default = 4;
	snTotalNumberExplorers.category = "Explore";
	snTotalNumberExplorers.min = -32767;
	snTotalNumberExplorers.max = 32768;
	snTotalNumberExplorers.rmin = -1;
	snTotalNumberExplorers.rmax = 32768;
	snTotalNumberExplorers.network = 0;
	snTotalNumberExplorers.defined = 1;
	snTotalNumberExplorers.available = 0;
	snTotalNumberExplorers.version = "1.0c";
	snTotalNumberExplorers.linked = [ 42, 61 ];
	snTotalNumberExplorers.related = [ 3, 0, 35 ];
	snTotalNumberExplorers.shortDescription = "Caps the total number of land explorers allocated. Factored in after the percentage of civilian explorers is calculated and the soldier groups are set up. Ignored when set to -1.";

	snPercentEnemySightedResponse.id = 19;
	snPercentEnemySightedResponse.name = "sn-percent-enemy-sighted-response";
	snPercentEnemySightedResponse.default = 50;
	snPercentEnemySightedResponse.category = "Defense";
	snPercentEnemySightedResponse.min = -32767;
	snPercentEnemySightedResponse.max = 32768;
	snPercentEnemySightedResponse.rmin = 0;
	snPercentEnemySightedResponse.rmax = 100;
	snPercentEnemySightedResponse.network = 0;
	snPercentEnemySightedResponse.defined = 1;
	snPercentEnemySightedResponse.available = 0;
	snPercentEnemySightedResponse.version = "1.0c";
	snPercentEnemySightedResponse.linked = [ 20, 284 ];
	snPercentEnemySightedResponse.related = [ 34 ];
	snPercentEnemySightedResponse.shortDescription = "Sets the percentage of idle troops that will respond to another unit being attacked.";

	snEnemySightedResponseDistance.id = 20;
	snEnemySightedResponseDistance.name = "sn-enemy-sighted-response-distance";
	snEnemySightedResponseDistance.default = 25;
	snEnemySightedResponseDistance.category = "Attack";
	snEnemySightedResponseDistance.min = -32767;
	snEnemySightedResponseDistance.max = 50;
	snEnemySightedResponseDistance.rmin = 0;
	snEnemySightedResponseDistance.rmax = 50;
	snEnemySightedResponseDistance.network = 0;
	snEnemySightedResponseDistance.defined = 1;
	snEnemySightedResponseDistance.available = 0;
	snEnemySightedResponseDistance.version = "1.0c";
	snEnemySightedResponseDistance.linked = [ 19, 284 ];
	snEnemySightedResponseDistance.related = [ 34 ];
	snEnemySightedResponseDistance.shortDescription = "Sets the distance inside of which units will be candidates for response to an enemy attack.";

	snUnknownData021.id = 21;
	snUnknownData021.name = "unknown-data-021";
	snUnknownData021.default = -1;
	snUnknownData021.category = "None";
	snUnknownData021.min = -32767;
	snUnknownData021.max = 32768;
	snUnknownData021.rmin = -32767;
	snUnknownData021.rmax = 32768;
	snUnknownData021.network = 0;
	snUnknownData021.defined = 0;
	snUnknownData021.available = 0;
	snUnknownData021.version = "1.0c";
	snUnknownData021.linked = [];
	snUnknownData021.related = [];
	snUnknownData021.shortDescription = "Unused.";

	snSentryDistance.id = 22;
	snSentryDistance.name = "sn-sentry-distance";
	snSentryDistance.default = 12;
	snSentryDistance.category = "Defense";
	snSentryDistance.min = -32767;
	snSentryDistance.max = 32768;
	snSentryDistance.rmin = 0;
	snSentryDistance.rmax = 255;
	snSentryDistance.network = 0;
	snSentryDistance.defined = 1;
	snSentryDistance.available = 0;
	snSentryDistance.version = "1.0c";
	snSentryDistance.linked = [ 72 ];
	snSentryDistance.related = [ 57, 92 ];
	snSentryDistance.shortDescription = "Sets the distance at which the town is defended.";

	snRelicReturnDistance.id = 23;
	snRelicReturnDistance.name = "sn-relic-return-distance";
	snRelicReturnDistance.default = 10;
	snRelicReturnDistance.category = "Economy";
	snRelicReturnDistance.min = -32767;
	snRelicReturnDistance.max = 32768;
	snRelicReturnDistance.rmin = 0;
	snRelicReturnDistance.rmax = 255;
	snRelicReturnDistance.network = 0;
	snRelicReturnDistance.defined = 1;
	snRelicReturnDistance.available = 0;
	snRelicReturnDistance.version = "1.0c";
	snRelicReturnDistance.linked = [];
	snRelicReturnDistance.related = [];
	snRelicReturnDistance.shortDescription = "Sets the distance that relics must be within to be considered returned to the Town Center.";

	snPercentVictoryClamp.id = 24;
	snPercentVictoryClamp.name = "sn-percent-victory-clamp";
	snPercentVictoryClamp.default = 75;
	snPercentVictoryClamp.category = "Other";
	snPercentVictoryClamp.min = -32767;
	snPercentVictoryClamp.max = 32768;
	snPercentVictoryClamp.rmin = 0;
	snPercentVictoryClamp.rmax = 100;
	snPercentVictoryClamp.network = 0;
	snPercentVictoryClamp.defined = 0;
	snPercentVictoryClamp.available = "seems available, except for when teams-locked is disabled";
	snPercentVictoryClamp.version = "1.0c";
	snPercentVictoryClamp.linked = [];
	snPercentVictoryClamp.related = [];
	snPercentVictoryClamp.shortDescription = "Undocumented.";

	snMinimumDefendGroupSize.id = 25;
	snMinimumDefendGroupSize.name = "sn-minimum-defend-group-size";
	snMinimumDefendGroupSize.default = 1;
	snMinimumDefendGroupSize.category = "Defense";
	snMinimumDefendGroupSize.min = -32767;
	snMinimumDefendGroupSize.max = 32768;
	snMinimumDefendGroupSize.rmin = 0;
	snMinimumDefendGroupSize.rmax = 32768;
	snMinimumDefendGroupSize.network = 0;
	snMinimumDefendGroupSize.defined = 1;
	snMinimumDefendGroupSize.available = 0;
	snMinimumDefendGroupSize.version = "1.0c";
	snMinimumDefendGroupSize.linked = [ 28, 38 ];
	snMinimumDefendGroupSize.related = [ 67, 69, 68 ];
	snMinimumDefendGroupSize.shortDescription = "Sets the minimum size of land-based defend groups. A group must meet its minimum size as one of the tasking prerequisites.";

	snMaximumAttackGroupSize.id = 26;
	snMaximumAttackGroupSize.name = "sn-maximum-attack-group-size";
	snMaximumAttackGroupSize.default = 10;
	snMaximumAttackGroupSize.category = "Attack";
	snMaximumAttackGroupSize.min = -32767;
	snMaximumAttackGroupSize.max = 32768;
	snMaximumAttackGroupSize.rmin = 0;
	snMaximumAttackGroupSize.rmax = 32768;
	snMaximumAttackGroupSize.network = 0;
	snMaximumAttackGroupSize.defined = 1;
	snMaximumAttackGroupSize.available = 0;
	snMaximumAttackGroupSize.version = "1.0c";
	snMaximumAttackGroupSize.linked = [ 16, 36 ];
	snMaximumAttackGroupSize.related = [ 58, 60, 59, 94, 93, 41, 98 ];
	snMaximumAttackGroupSize.shortDescription = "Sets the maximum size of land-based attack groups.";

	snUnknownData027.id = 27;
	snUnknownData027.name = "unknown-data-027";
	snUnknownData027.default = -1;
	snUnknownData027.category = "None";
	snUnknownData027.min = -32767;
	snUnknownData027.max = 32768;
	snUnknownData027.rmin = -32767;
	snUnknownData027.rmax = 32768;
	snUnknownData027.network = 0;
	snUnknownData027.defined = 0;
	snUnknownData027.available = 0;
	snUnknownData027.version = "1.0c";
	snUnknownData027.linked = [];
	snUnknownData027.related = [];
	snUnknownData027.shortDescription = "Unused.";

	snMaximumDefendGroupSize.id = 28;
	snMaximumDefendGroupSize.name = "sn-maximum-defend-group-size";
	snMaximumDefendGroupSize.default = 4;
	snMaximumDefendGroupSize.category = "Defense";
	snMaximumDefendGroupSize.min = -32767;
	snMaximumDefendGroupSize.max = 32768;
	snMaximumDefendGroupSize.rmin = 0;
	snMaximumDefendGroupSize.rmax = 32768;
	snMaximumDefendGroupSize.network = 0;
	snMaximumDefendGroupSize.defined = 1;
	snMaximumDefendGroupSize.available = 0;
	snMaximumDefendGroupSize.version = "1.0c";
	snMaximumDefendGroupSize.linked = [ 25, 38 ];
	snMaximumDefendGroupSize.related = [ 67, 69, 68 ];
	snMaximumDefendGroupSize.shortDescription = "Sets the maximum size of land-based defend groups.";

	snMinimumPeaceLikeLevel.id = 29;
	snMinimumPeaceLikeLevel.name = "sn-minimum-peace-like-level";
	snMinimumPeaceLikeLevel.default = 85;
	snMinimumPeaceLikeLevel.category = "Defense";
	snMinimumPeaceLikeLevel.min = -32767;
	snMinimumPeaceLikeLevel.max = 32768;
	snMinimumPeaceLikeLevel.rmin = 0;
	snMinimumPeaceLikeLevel.rmax = 100;
	snMinimumPeaceLikeLevel.network = 0;
	snMinimumPeaceLikeLevel.defined = 1;
	snMinimumPeaceLikeLevel.available = 0;
	snMinimumPeaceLikeLevel.version = "1.0c";
	snMinimumPeaceLikeLevel.linked = [];
	snMinimumPeaceLikeLevel.related = [];
	snMinimumPeaceLikeLevel.shortDescription = "Sets the level at which computer players must like another player before allying with that player.";

	snPercentHealthRetreat.id = 30;
	snPercentHealthRetreat.name = "sn-percent-health-retreat";
	snPercentHealthRetreat.default = -1;
	snPercentHealthRetreat.category = "AoE 1";
	snPercentHealthRetreat.min = -32767;
	snPercentHealthRetreat.max = 32768;
	snPercentHealthRetreat.rmin = 0;
	snPercentHealthRetreat.rmax = 100;
	snPercentHealthRetreat.network = 0;
	snPercentHealthRetreat.defined = 0;
	snPercentHealthRetreat.available = "available, but avoid using it in conjunction with sn-scale-percent-health-retreat (95)";
	snPercentHealthRetreat.version = "1.0c";
	snPercentHealthRetreat.linked = [ 95 ];
	snPercentHealthRetreat.related = [];
	snPercentHealthRetreat.shortDescription = "AoE 1 only. Sets the percentage of hit points that a group can lose (relative to what it started the attack with) before retreating. Must be &gt;= 1 and &lt;= 100.";

	snPercentDeathRetreat.id = 31;
	snPercentDeathRetreat.name = "sn-percent-death-retreat";
	snPercentDeathRetreat.default = -1;
	snPercentDeathRetreat.category = "AoE 1";
	snPercentDeathRetreat.min = -32767;
	snPercentDeathRetreat.max = 32768;
	snPercentDeathRetreat.rmin = 0;
	snPercentDeathRetreat.rmax = 100;
	snPercentDeathRetreat.network = 0;
	snPercentDeathRetreat.defined = 0;
	snPercentDeathRetreat.available = "available, but avoid using it in conjunction with sn-scale-percent-death-retreat (96)";
	snPercentDeathRetreat.version = "1.0c";
	snPercentDeathRetreat.linked = [ 96 ];
	snPercentDeathRetreat.related = [];
	snPercentDeathRetreat.shortDescription = "AoE 1 only. Sets the percentage of units that a group can let die (relative to what it started the attack with) before retreating. Must be &gt;= 1 and &lt;= 100.";

	snPercentExplorationRequired.id = 32;
	snPercentExplorationRequired.name = "sn-percent-exploration-required";
	snPercentExplorationRequired.default = 100;
	snPercentExplorationRequired.category = "Explore";
	snPercentExplorationRequired.min = -32767;
	snPercentExplorationRequired.max = 32768;
	snPercentExplorationRequired.rmin = 0;
	snPercentExplorationRequired.rmax = 100;
	snPercentExplorationRequired.network = 0;
	snPercentExplorationRequired.defined = 1;
	snPercentExplorationRequired.available = 0;
	snPercentExplorationRequired.version = "1.0c";
	snPercentExplorationRequired.linked = [ 167, 179, 256 ];
	snPercentExplorationRequired.related = [ 135, 136 ];
	snPercentExplorationRequired.shortDescription = "Sets the minimum amount of exploration that a computer player must have accomplished before being allowed to retask civilian explorers.";

	snUnknownData033.id = 33;
	snUnknownData033.name = "unknown-data-033";
	snUnknownData033.default = -1;
	snUnknownData033.category = "None";
	snUnknownData033.min = -32767;
	snUnknownData033.max = 32768;
	snUnknownData033.rmin = -32767;
	snUnknownData033.rmax = 32768;
	snUnknownData033.network = 0;
	snUnknownData033.defined = 0;
	snUnknownData033.available = 0;
	snUnknownData033.version = "1.0c";
	snUnknownData033.linked = [];
	snUnknownData033.related = [];
	snUnknownData033.shortDescription = "Unused.";

	snZeroPriorityDistance.id = 34;
	snZeroPriorityDistance.name = "sn-zero-priority-distance";
	snZeroPriorityDistance.default = 50;
	snZeroPriorityDistance.category = "Other";
	snZeroPriorityDistance.min = -32767;
	snZeroPriorityDistance.max = 32768;
	snZeroPriorityDistance.rmin = 0;
	snZeroPriorityDistance.rmax = 255;
	snZeroPriorityDistance.network = 0;
	snZeroPriorityDistance.defined = 1;
	snZeroPriorityDistance.available = 0;
	snZeroPriorityDistance.version = "1.0c";
	snZeroPriorityDistance.linked = [];
	snZeroPriorityDistance.related = [ 19, 20 ];
	snZeroPriorityDistance.shortDescription = "Sets the distance at which a computer player's order for a unit is set to a priority of 0.";

	snMinimumCivilianExplorers.id = 35;
	snMinimumCivilianExplorers.name = "sn-minimum-civilian-explorers";
	snMinimumCivilianExplorers.default = 0;
	snMinimumCivilianExplorers.category = "Explore";
	snMinimumCivilianExplorers.min = -32767;
	snMinimumCivilianExplorers.max = 32768;
	snMinimumCivilianExplorers.rmin = 0;
	snMinimumCivilianExplorers.rmax = 32768;
	snMinimumCivilianExplorers.network = 0;
	snMinimumCivilianExplorers.defined = 1;
	snMinimumCivilianExplorers.available = 0;
	snMinimumCivilianExplorers.version = "1.0c";
	snMinimumCivilianExplorers.linked = [ 3, 0 ];
	snMinimumCivilianExplorers.related = [ 18 ];
	snMinimumCivilianExplorers.shortDescription = "Sets a minimum number of civilian explorers.";

	snNumberAttackGroups.id = 36;
	snNumberAttackGroups.name = "sn-number-attack-groups";
	snNumberAttackGroups.default = 0;
	snNumberAttackGroups.category = "Attack";
	snNumberAttackGroups.min = -32767;
	snNumberAttackGroups.max = 32768;
	snNumberAttackGroups.rmin = 0;
	snNumberAttackGroups.rmax = 32768;
	snNumberAttackGroups.network = 0;
	snNumberAttackGroups.defined = 1;
	snNumberAttackGroups.available = 0;
	snNumberAttackGroups.version = "1.0c";
	snNumberAttackGroups.linked = [ 26, 16 ];
	snNumberAttackGroups.related = [ 58, 60, 59, 41, 98, 227, 247, 271 ];
	snNumberAttackGroups.shortDescription = "Sets the desired number of land-based attack groups. Sn-percent-attack-soldiers generally works better.";

	snAttackGroupMakeup.id = 37;
	snAttackGroupMakeup.name = "sn-attack-group-makeup";
	snAttackGroupMakeup.default = 0;
	snAttackGroupMakeup.category = "Attack";
	snAttackGroupMakeup.min = -32767;
	snAttackGroupMakeup.max = 32768;
	snAttackGroupMakeup.rmin = -32767;
	snAttackGroupMakeup.rmax = 32768;
	snAttackGroupMakeup.network = 0;
	snAttackGroupMakeup.defined = 0;
	snAttackGroupMakeup.available = "seems available";
	snAttackGroupMakeup.version = "1.0c";
	snAttackGroupMakeup.linked = [];
	snAttackGroupMakeup.related = [ 39, 45 ];
	snAttackGroupMakeup.shortDescription = "Undocumented.";

	snNumberDefendGroups.id = 38;
	snNumberDefendGroups.name = "sn-number-defend-groups";
	snNumberDefendGroups.default = 0;
	snNumberDefendGroups.category = "Defense";
	snNumberDefendGroups.min = -32767;
	snNumberDefendGroups.max = 32768;
	snNumberDefendGroups.rmin = 0;
	snNumberDefendGroups.rmax = 32768;
	snNumberDefendGroups.network = 0;
	snNumberDefendGroups.defined = 1;
	snNumberDefendGroups.available = 0;
	snNumberDefendGroups.version = "1.0c";
	snNumberDefendGroups.linked = [ 28, 25 ];
	snNumberDefendGroups.related = [ 67, 69, 68 ];
	snNumberDefendGroups.shortDescription = "Sets the desired number of land-based defend groups.";

	snDefendGroupMakeup.id = 39;
	snDefendGroupMakeup.name = "sn-defend-group-makeup";
	snDefendGroupMakeup.default = 0;
	snDefendGroupMakeup.category = "Defense";
	snDefendGroupMakeup.min = -32767;
	snDefendGroupMakeup.max = 32768;
	snDefendGroupMakeup.rmin = -32767;
	snDefendGroupMakeup.rmax = 32768;
	snDefendGroupMakeup.network = 0;
	snDefendGroupMakeup.defined = 0;
	snDefendGroupMakeup.available = 1;
	snDefendGroupMakeup.version = "1.0c";
	snDefendGroupMakeup.linked = [];
	snDefendGroupMakeup.related = [ 37, 45 ];
	snDefendGroupMakeup.shortDescription = "Undocumented.";

	snGroupFillMethod.id = 40;
	snGroupFillMethod.name = "sn-group-fill-method";
	snGroupFillMethod.default = -1;
	snGroupFillMethod.category = "AoE 1";
	snGroupFillMethod.min = -32767;
	snGroupFillMethod.max = 32768;
	snGroupFillMethod.rmin = 0;
	snGroupFillMethod.rmax = 1;
	snGroupFillMethod.network = 0;
	snGroupFillMethod.defined = 0;
	snGroupFillMethod.available = "seems available";
	snGroupFillMethod.version = "1.0c";
	snGroupFillMethod.linked = [];
	snGroupFillMethod.related = [];
	snGroupFillMethod.shortDescription = "AoE 1 only. Sets the method by which a computer player fills a group of units. There are two concepts here: single group fill and level group fill. In single group fill, all available units are put into the first non-minimally full group. Once that group is full, the next group is entirely filled before the third group is considered. In level group fill, all groups are filled at the same time (one unit is placed in the first group, the next in the second, etc.). The single group fill fills up to the minimum in each group, then goes to the level group fill. Both methods respect the maximum group sizes. 0 keys the single group fill, and 1 keys the level group fill. Must be 0 or 1.";

	snAttackGroupGatherSpacing.id = 41;
	snAttackGroupGatherSpacing.name = "sn-attack-group-gather-spacing";
	snAttackGroupGatherSpacing.default = 4;
	snAttackGroupGatherSpacing.category = "Attack";
	snAttackGroupGatherSpacing.min = -32767;
	snAttackGroupGatherSpacing.max = 32768;
	snAttackGroupGatherSpacing.rmin = 1;
	snAttackGroupGatherSpacing.rmax = 255;
	snAttackGroupGatherSpacing.network = 0;
	snAttackGroupGatherSpacing.defined = 1;
	snAttackGroupGatherSpacing.available = 0;
	snAttackGroupGatherSpacing.version = "1.0c";
	snAttackGroupGatherSpacing.linked = [];
	snAttackGroupGatherSpacing.related = [ 98, 36, 26, 16, 58, 60, 59 ];
	snAttackGroupGatherSpacing.shortDescription = "Controls the relative proximity (to the group gather point) that grouped units must be in before the group is considered gathered.";

	snNumberExploreGroups.id = 42;
	snNumberExploreGroups.name = "sn-number-explore-groups";
	snNumberExploreGroups.default = 0;
	snNumberExploreGroups.category = "Explore";
	snNumberExploreGroups.min = -32767;
	snNumberExploreGroups.max = 32768;
	snNumberExploreGroups.rmin = 0;
	snNumberExploreGroups.rmax = 32768;
	snNumberExploreGroups.network = 0;
	snNumberExploreGroups.defined = 1;
	snNumberExploreGroups.available = 0;
	snNumberExploreGroups.version = "1.0c";
	snNumberExploreGroups.linked = [ 44, 43 ];
	snNumberExploreGroups.related = [ 61, 63, 62, 18 ];
	snNumberExploreGroups.shortDescription = "Sets the desired number of land-based soldier exploration groups.";

	snMinimumExploreGroupSize.id = 43;
	snMinimumExploreGroupSize.name = "sn-minimum-explore-group-size";
	snMinimumExploreGroupSize.default = 1;
	snMinimumExploreGroupSize.category = "Explore";
	snMinimumExploreGroupSize.min = -32767;
	snMinimumExploreGroupSize.max = 1;
	snMinimumExploreGroupSize.rmin = 0;
	snMinimumExploreGroupSize.rmax = 1;
	snMinimumExploreGroupSize.network = 0;
	snMinimumExploreGroupSize.defined = 1;
	snMinimumExploreGroupSize.available = 0;
	snMinimumExploreGroupSize.version = "1.0c";
	snMinimumExploreGroupSize.linked = [ 44, 42 ];
	snMinimumExploreGroupSize.related = [ 61, 63, 62, 18 ];
	snMinimumExploreGroupSize.shortDescription = "Sets the minimum size of land-based soldier exploration groups. A group must meet its minimum size as one of the tasking prerequisites.";

	snMaximumExploreGroupSize.id = 44;
	snMaximumExploreGroupSize.name = "sn-maximum-explore-group-size";
	snMaximumExploreGroupSize.default = 1;
	snMaximumExploreGroupSize.category = "Explore";
	snMaximumExploreGroupSize.min = -32767;
	snMaximumExploreGroupSize.max = 1;
	snMaximumExploreGroupSize.rmin = 0;
	snMaximumExploreGroupSize.rmax = 1;
	snMaximumExploreGroupSize.network = 0;
	snMaximumExploreGroupSize.defined = 1;
	snMaximumExploreGroupSize.available = 0;
	snMaximumExploreGroupSize.version = "1.0c";
	snMaximumExploreGroupSize.linked = [ 43, 42 ];
	snMaximumExploreGroupSize.related = [ 61, 63, 62, 18 ];
	snMaximumExploreGroupSize.shortDescription = "Sets the maximum size of land-based soldier exploration groups.";

	snExploreGroupMakeup.id = 45;
	snExploreGroupMakeup.name = "sn-explore-group-makeup";
	snExploreGroupMakeup.default = 0;
	snExploreGroupMakeup.category = "Explore";
	snExploreGroupMakeup.min = -32767;
	snExploreGroupMakeup.max = 32768;
	snExploreGroupMakeup.rmin = -32767;
	snExploreGroupMakeup.rmax = 32768;
	snExploreGroupMakeup.network = 0;
	snExploreGroupMakeup.defined = 0;
	snExploreGroupMakeup.available = 1;
	snExploreGroupMakeup.version = "1.0c";
	snExploreGroupMakeup.linked = [];
	snExploreGroupMakeup.related = [ 37, 39 ];
	snExploreGroupMakeup.shortDescription = "Undocumented.";

	snAttackSeparationTime.id = 46;
	snAttackSeparationTime.name = "sn-attack-separation-time";
	snAttackSeparationTime.default = -1;
	snAttackSeparationTime.category = "AoE 1";
	snAttackSeparationTime.min = -32767;
	snAttackSeparationTime.max = 32768;
	snAttackSeparationTime.rmin = 0;
	snAttackSeparationTime.rmax = 32768;
	snAttackSeparationTime.network = 0;
	snAttackSeparationTime.defined = 0;
	snAttackSeparationTime.available = "seems available, but leave it for later";
	snAttackSeparationTime.version = "1.0c";
	snAttackSeparationTime.linked = [ 102 ];
	snAttackSeparationTime.related = [ 48, 71 ];
	snAttackSeparationTime.shortDescription = "AoE 1 only. Sets the amount of time that must pass between computer player attacks. Must be &gt;= 0.";

	snAttackCoordination.id = 47;
	snAttackCoordination.name = "sn-attack-coordination";
	snAttackCoordination.default = -1;
	snAttackCoordination.category = "AoE 1";
	snAttackCoordination.min = -32767;
	snAttackCoordination.max = 32768;
	snAttackCoordination.rmin = 0;
	snAttackCoordination.rmax = 2;
	snAttackCoordination.network = 0;
	snAttackCoordination.defined = 0;
	snAttackCoordination.available = "seems available, but leave it for later";
	snAttackCoordination.version = "1.0c";
	snAttackCoordination.linked = [];
	snAttackCoordination.related = [ 103 ];
	snAttackCoordination.shortDescription = "AoE 1 only. Selects the type of coordination between computer player attacks. 0 means no coordination. 1 means that one group may attack at a time. 2 means that multiple groups may attack at the same time. Must be &gt;= 0 and &lt;= 2.";

	snAttackResponseSeparationTime.id = 48;
	snAttackResponseSeparationTime.name = "sn-attack-response-separation-time";
	snAttackResponseSeparationTime.default = -1;
	snAttackResponseSeparationTime.category = "AoE 1";
	snAttackResponseSeparationTime.min = -32767;
	snAttackResponseSeparationTime.max = 32768;
	snAttackResponseSeparationTime.rmin = 0;
	snAttackResponseSeparationTime.rmax = 32768;
	snAttackResponseSeparationTime.network = 0;
	snAttackResponseSeparationTime.defined = 0;
	snAttackResponseSeparationTime.available = "seems available, but leave it for later";
	snAttackResponseSeparationTime.version = "1.0c";
	snAttackResponseSeparationTime.linked = [];
	snAttackResponseSeparationTime.related = [ 46, 71 ];
	snAttackResponseSeparationTime.shortDescription = "AoE 1 only. Sets the amount of time that must pass before units respond to a subsequent enemy attack distress call. Must be &gt;= 0.";

	snRetreatAfterTargetDestroyed.id = 49;
	snRetreatAfterTargetDestroyed.name = "sn-retreat-after-target-destroyed";
	snRetreatAfterTargetDestroyed.default = -1;
	snRetreatAfterTargetDestroyed.category = "AoE 1";
	snRetreatAfterTargetDestroyed.min = -32767;
	snRetreatAfterTargetDestroyed.max = 32768;
	snRetreatAfterTargetDestroyed.rmin = 0;
	snRetreatAfterTargetDestroyed.rmax = 3;
	snRetreatAfterTargetDestroyed.network = 0;
	snRetreatAfterTargetDestroyed.defined = 0;
	snRetreatAfterTargetDestroyed.available = "seems available, but leave it for later";
	snRetreatAfterTargetDestroyed.version = "1.0c";
	snRetreatAfterTargetDestroyed.linked = [];
	snRetreatAfterTargetDestroyed.related = [];
	snRetreatAfterTargetDestroyed.shortDescription = "AoE 1 only. Selects what happens when a target is destroyed during an attack. 0 means that the attack group will never retreat and will recenter upon their current position. 1 means that the group will retreat if no other target is reachable. 2 means that the group will always retreat when the target is destroyed. 3 means that the group will go into extermination mode; they will explore unexplored territory and attack any enemies units they uncover. Must be &gt;= 0 and &lt;= 3.";

	snGoldDefendPriority.id = 50;
	snGoldDefendPriority.name = "sn-gold-defend-priority";
	snGoldDefendPriority.default = 0;
	snGoldDefendPriority.category = "Defense";
	snGoldDefendPriority.min = -32767;
	snGoldDefendPriority.max = 32768;
	snGoldDefendPriority.rmin = 0;
	snGoldDefendPriority.rmax = 1;
	snGoldDefendPriority.network = 0;
	snGoldDefendPriority.defined = 1;
	snGoldDefendPriority.available = 0;
	snGoldDefendPriority.version = "1.0c";
	snGoldDefendPriority.linked = [];
	snGoldDefendPriority.related = [ 56, 70, 52, 51, 55, 54, 53, 287 ];
	snGoldDefendPriority.shortDescription = "Sets the priority of defending gold. A priority of 0 means that gold will not be defended. A priority of 1 means that gold has the highest defend priority.";

	snStoneDefendPriority.id = 51;
	snStoneDefendPriority.name = "sn-stone-defend-priority";
	snStoneDefendPriority.default = 0;
	snStoneDefendPriority.category = "Defense";
	snStoneDefendPriority.min = -32767;
	snStoneDefendPriority.max = 32768;
	snStoneDefendPriority.rmin = 0;
	snStoneDefendPriority.rmax = 1;
	snStoneDefendPriority.network = 0;
	snStoneDefendPriority.defined = 1;
	snStoneDefendPriority.available = 0;
	snStoneDefendPriority.version = "1.0c";
	snStoneDefendPriority.linked = [];
	snStoneDefendPriority.related = [ 56, 70, 52, 50, 55, 54, 53, 287 ];
	snStoneDefendPriority.shortDescription = "Sets the priority of defending stone.";

	snForageDefendPriority.id = 52;
	snForageDefendPriority.name = "sn-forage-defend-priority";
	snForageDefendPriority.default = 0;
	snForageDefendPriority.category = "Defense";
	snForageDefendPriority.min = -32767;
	snForageDefendPriority.max = 32768;
	snForageDefendPriority.rmin = 0;
	snForageDefendPriority.rmax = 1;
	snForageDefendPriority.network = 0;
	snForageDefendPriority.defined = 1;
	snForageDefendPriority.available = 0;
	snForageDefendPriority.version = "1.0c";
	snForageDefendPriority.linked = [];
	snForageDefendPriority.related = [ 56, 70, 51, 50, 55, 54, 53, 287 ];
	snForageDefendPriority.shortDescription = "Sets the priority of defending forage sites.";

	snChokePointDefendPriority.id = 53;
	snChokePointDefendPriority.name = "sn-choke-point-defend-priority";
	snChokePointDefendPriority.default = 0;
	snChokePointDefendPriority.category = "Defense";
	snChokePointDefendPriority.min = -32767;
	snChokePointDefendPriority.max = 32768;
	snChokePointDefendPriority.rmin = 0;
	snChokePointDefendPriority.rmax = 1;
	snChokePointDefendPriority.network = 0;
	snChokePointDefendPriority.defined = 0;
	snChokePointDefendPriority.available = 1;
	snChokePointDefendPriority.version = "1.0c";
	snChokePointDefendPriority.linked = [];
	snChokePointDefendPriority.related = [ 56, 70, 52, 51, 50, 55, 54, 287 ];
	snChokePointDefendPriority.shortDescription = "Sets the priority of defending choke points. Undocumented.";

	snRuinsDefendPriority.id = 54;
	snRuinsDefendPriority.name = "sn-ruins-defend-priority";
	snRuinsDefendPriority.default = 0;
	snRuinsDefendPriority.category = "AoE 1";
	snRuinsDefendPriority.min = -32767;
	snRuinsDefendPriority.max = 32768;
	snRuinsDefendPriority.rmin = 0;
	snRuinsDefendPriority.rmax = 7;
	snRuinsDefendPriority.network = 0;
	snRuinsDefendPriority.defined = 0;
	snRuinsDefendPriority.available = 0;
	snRuinsDefendPriority.version = "1.0c";
	snRuinsDefendPriority.linked = [];
	snRuinsDefendPriority.related = [ 56, 70, 52, 51, 50, 55, 53, 287 ];
	snRuinsDefendPriority.shortDescription = "AoE 1 only. Sets the priority of defending ruins.";

	snRelicDefendPriority.id = 55;
	snRelicDefendPriority.name = "sn-relic-defend-priority";
	snRelicDefendPriority.default = 0;
	snRelicDefendPriority.category = "Defense";
	snRelicDefendPriority.min = -32767;
	snRelicDefendPriority.max = 32768;
	snRelicDefendPriority.rmin = 0;
	snRelicDefendPriority.rmax = 7;
	snRelicDefendPriority.network = 0;
	snRelicDefendPriority.defined = 1;
	snRelicDefendPriority.available = 1;
	snRelicDefendPriority.version = "1.0c";
	snRelicDefendPriority.linked = [];
	snRelicDefendPriority.related = [ 56, 70, 52, 51, 50, 54, 53, 287 ];
	snRelicDefendPriority.shortDescription = "Sets the priority of defending relic carts.";

	snTownDefendPriority.id = 56;
	snTownDefendPriority.name = "sn-town-defend-priority";
	snTownDefendPriority.default = 7;
	snTownDefendPriority.category = "Defense";
	snTownDefendPriority.min = -32767;
	snTownDefendPriority.max = 32768;
	snTownDefendPriority.rmin = 0;
	snTownDefendPriority.rmax = 7;
	snTownDefendPriority.network = 0;
	snTownDefendPriority.defined = 1;
	snTownDefendPriority.available = 0;
	snTownDefendPriority.version = "1.0c";
	snTownDefendPriority.linked = [];
	snTownDefendPriority.related = [ 70, 52, 51, 50, 55, 54, 53, 287 ];
	snTownDefendPriority.shortDescription = "Sets the priority of defending the computer player's town.";

	snDefenseDistance.id = 57;
	snDefenseDistance.name = "sn-defense-distance";
	snDefenseDistance.default = 3;
	snDefenseDistance.category = "Defense";
	snDefenseDistance.min = -32767;
	snDefenseDistance.max = 32768;
	snDefenseDistance.rmin = 0;
	snDefenseDistance.rmax = 255;
	snDefenseDistance.network = 0;
	snDefenseDistance.defined = 1;
	snDefenseDistance.available = 0;
	snDefenseDistance.version = "1.0c";
	snDefenseDistance.linked = [];
	snDefenseDistance.related = [ 92, 22, 72 ];
	snDefenseDistance.shortDescription = "Sets the distance at which items (town excluded) are defended.";

	snNumberBoatAttackGroups.id = 58;
	snNumberBoatAttackGroups.name = "sn-number-boat-attack-groups";
	snNumberBoatAttackGroups.default = 0;
	snNumberBoatAttackGroups.category = "Water";
	snNumberBoatAttackGroups.min = -32767;
	snNumberBoatAttackGroups.max = 32768;
	snNumberBoatAttackGroups.rmin = 0;
	snNumberBoatAttackGroups.rmax = 32768;
	snNumberBoatAttackGroups.network = 0;
	snNumberBoatAttackGroups.defined = 1;
	snNumberBoatAttackGroups.available = "available, except for water maps";
	snNumberBoatAttackGroups.version = "1.0c";
	snNumberBoatAttackGroups.linked = [ 60, 59 ];
	snNumberBoatAttackGroups.related = [ 36, 26, 16, 41, 98, 228, 247 ];
	snNumberBoatAttackGroups.shortDescription = "Sets the desired number of boat attack groups. Setting sn-percent-attack-boat usually works better.";

	snMinimumBoatAttackGroupSize.id = 59;
	snMinimumBoatAttackGroupSize.name = "sn-minimum-boat-attack-group-size";
	snMinimumBoatAttackGroupSize.default = 1;
	snMinimumBoatAttackGroupSize.category = "Water";
	snMinimumBoatAttackGroupSize.min = -32767;
	snMinimumBoatAttackGroupSize.max = 32768;
	snMinimumBoatAttackGroupSize.rmin = 0;
	snMinimumBoatAttackGroupSize.rmax = 32768;
	snMinimumBoatAttackGroupSize.network = 0;
	snMinimumBoatAttackGroupSize.defined = 1;
	snMinimumBoatAttackGroupSize.available = "available, except for water maps";
	snMinimumBoatAttackGroupSize.version = "1.0c";
	snMinimumBoatAttackGroupSize.linked = [ 60, 58 ];
	snMinimumBoatAttackGroupSize.related = [ 36, 26, 16, 94, 93, 41, 98 ];
	snMinimumBoatAttackGroupSize.shortDescription = "Sets the minimum size of boat attack groups. A group must meet its minimum size as one of the tasking prerequisites.";

	snMaximumBoatAttackGroupSize.id = 60;
	snMaximumBoatAttackGroupSize.name = "sn-maximum-boat-attack-group-size";
	snMaximumBoatAttackGroupSize.default = 5;
	snMaximumBoatAttackGroupSize.category = "Water";
	snMaximumBoatAttackGroupSize.min = -32767;
	snMaximumBoatAttackGroupSize.max = 32768;
	snMaximumBoatAttackGroupSize.rmin = 0;
	snMaximumBoatAttackGroupSize.rmax = 32768;
	snMaximumBoatAttackGroupSize.network = 0;
	snMaximumBoatAttackGroupSize.defined = 1;
	snMaximumBoatAttackGroupSize.available = "available, except for water maps";
	snMaximumBoatAttackGroupSize.version = "1.0c";
	snMaximumBoatAttackGroupSize.linked = [ 59, 58 ];
	snMaximumBoatAttackGroupSize.related = [ 36, 26, 16, 94, 93, 41, 98 ];
	snMaximumBoatAttackGroupSize.shortDescription = "Sets the maximum size of boat attack groups.";

	snNumberBoatExploreGroups.id = 61;
	snNumberBoatExploreGroups.name = "sn-number-boat-explore-groups";
	snNumberBoatExploreGroups.default = 0;
	snNumberBoatExploreGroups.category = "Water";
	snNumberBoatExploreGroups.min = -32767;
	snNumberBoatExploreGroups.max = 32768;
	snNumberBoatExploreGroups.rmin = 0;
	snNumberBoatExploreGroups.rmax = 32768;
	snNumberBoatExploreGroups.network = 0;
	snNumberBoatExploreGroups.defined = 1;
	snNumberBoatExploreGroups.available = "available, except for water maps";
	snNumberBoatExploreGroups.version = "1.0c";
	snNumberBoatExploreGroups.linked = [ 63, 62 ];
	snNumberBoatExploreGroups.related = [ 42, 44, 43, 18 ];
	snNumberBoatExploreGroups.shortDescription = "Sets the desired number of military boat exploration groups. This is not affected by sn-total-number-explorers.";

	snMinimumBoatExploreGroupSize.id = 62;
	snMinimumBoatExploreGroupSize.name = "sn-minimum-boat-explore-group-size";
	snMinimumBoatExploreGroupSize.default = 1;
	snMinimumBoatExploreGroupSize.category = "Water";
	snMinimumBoatExploreGroupSize.min = -32767;
	snMinimumBoatExploreGroupSize.max = 32768;
	snMinimumBoatExploreGroupSize.rmin = 0;
	snMinimumBoatExploreGroupSize.rmax = 32768;
	snMinimumBoatExploreGroupSize.network = 0;
	snMinimumBoatExploreGroupSize.defined = 1;
	snMinimumBoatExploreGroupSize.available = "available, except for water maps";
	snMinimumBoatExploreGroupSize.version = "1.0c";
	snMinimumBoatExploreGroupSize.linked = [ 63, 61 ];
	snMinimumBoatExploreGroupSize.related = [ 42, 44, 43, 18 ];
	snMinimumBoatExploreGroupSize.shortDescription = "Sets the minimum size of boat exploration groups.";

	snMaximumBoatExploreGroupSize.id = 63;
	snMaximumBoatExploreGroupSize.name = "sn-maximum-boat-explore-group-size";
	snMaximumBoatExploreGroupSize.default = 2;
	snMaximumBoatExploreGroupSize.category = "Water";
	snMaximumBoatExploreGroupSize.min = -32767;
	snMaximumBoatExploreGroupSize.max = 32768;
	snMaximumBoatExploreGroupSize.rmin = 0;
	snMaximumBoatExploreGroupSize.rmax = 32768;
	snMaximumBoatExploreGroupSize.network = 0;
	snMaximumBoatExploreGroupSize.defined = 1;
	snMaximumBoatExploreGroupSize.available = "available, except for water maps";
	snMaximumBoatExploreGroupSize.version = "1.0c";
	snMaximumBoatExploreGroupSize.linked = [ 62, 61 ];
	snMaximumBoatExploreGroupSize.related = [ 42, 44, 43, 18 ];
	snMaximumBoatExploreGroupSize.shortDescription = "Sets the maximum size of boat exploration groups.";

	snDesiredNumberTradeEscorts.id = 64;
	snDesiredNumberTradeEscorts.name = "sn-desired-number-trade-escorts";
	snDesiredNumberTradeEscorts.default = -1;
	snDesiredNumberTradeEscorts.category = "AoE 1";
	snDesiredNumberTradeEscorts.min = -32767;
	snDesiredNumberTradeEscorts.max = 32768;
	snDesiredNumberTradeEscorts.rmin = 0;
	snDesiredNumberTradeEscorts.rmax = 32768;
	snDesiredNumberTradeEscorts.network = 0;
	snDesiredNumberTradeEscorts.defined = 0;
	snDesiredNumberTradeEscorts.available = 1;
	snDesiredNumberTradeEscorts.version = "1.0c";
	snDesiredNumberTradeEscorts.linked = [];
	snDesiredNumberTradeEscorts.related = [];
	snDesiredNumberTradeEscorts.shortDescription = "AoE 1 only. Sets the desired number of warboat escorts for tradeboats. Must be &gt;= 0.";

	snDesiredNumberFishExports.id = 65;
	snDesiredNumberFishExports.name = "sn-desired-number-fish-escorts";
	snDesiredNumberFishExports.default = -1;
	snDesiredNumberFishExports.category = "AoE 1";
	snDesiredNumberFishExports.min = -32767;
	snDesiredNumberFishExports.max = 32768;
	snDesiredNumberFishExports.rmin = 0;
	snDesiredNumberFishExports.rmax = 32768;
	snDesiredNumberFishExports.network = 0;
	snDesiredNumberFishExports.defined = 0;
	snDesiredNumberFishExports.available = 1;
	snDesiredNumberFishExports.version = "1.0c";
	snDesiredNumberFishExports.linked = [];
	snDesiredNumberFishExports.related = [];
	snDesiredNumberFishExports.shortDescription = "AoE 1 only. Sets the desired number of warboat escorts for fishing boats. Must be &gt;= 0.";

	snDesiredNumberTransportEscorts.id = 66;
	snDesiredNumberTransportEscorts.name = "sn-desired-number-transport-escorts";
	snDesiredNumberTransportEscorts.default = 0;
	snDesiredNumberTransportEscorts.category = "AoE 1";
	snDesiredNumberTransportEscorts.min = -32767;
	snDesiredNumberTransportEscorts.max = 32768;
	snDesiredNumberTransportEscorts.rmin = 0;
	snDesiredNumberTransportEscorts.rmax = 32768;
	snDesiredNumberTransportEscorts.network = 0;
	snDesiredNumberTransportEscorts.defined = 0;
	snDesiredNumberTransportEscorts.available = 1;
	snDesiredNumberTransportEscorts.version = "1.0c";
	snDesiredNumberTransportEscorts.linked = [];
	snDesiredNumberTransportEscorts.related = [];
	snDesiredNumberTransportEscorts.shortDescription = "AoE 1 only. Sets the desired number of warboat escorts for transports. Must be &gt;= 0.";

	snNumberBoatDefendGroups.id = 67;
	snNumberBoatDefendGroups.name = "sn-number-boat-defend-groups";
	snNumberBoatDefendGroups.default = 0;
	snNumberBoatDefendGroups.category = "Water";
	snNumberBoatDefendGroups.min = -32767;
	snNumberBoatDefendGroups.max = 32768;
	snNumberBoatDefendGroups.rmin = 0;
	snNumberBoatDefendGroups.rmax = 32768;
	snNumberBoatDefendGroups.network = 0;
	snNumberBoatDefendGroups.defined = 1;
	snNumberBoatDefendGroups.available = "available, except for water maps";
	snNumberBoatDefendGroups.version = "1.0c";
	snNumberBoatDefendGroups.linked = [ 69, 68 ];
	snNumberBoatDefendGroups.related = [ 38, 28, 25 ];
	snNumberBoatDefendGroups.shortDescription = "Sets the desired number of boat defend groups.";

	snMinimumBoatDefendGroupSize.id = 68;
	snMinimumBoatDefendGroupSize.name = "sn-minimum-boat-defend-group-size";
	snMinimumBoatDefendGroupSize.default = 0;
	snMinimumBoatDefendGroupSize.category = "Water";
	snMinimumBoatDefendGroupSize.min = -32767;
	snMinimumBoatDefendGroupSize.max = 32768;
	snMinimumBoatDefendGroupSize.rmin = 0;
	snMinimumBoatDefendGroupSize.rmax = 32768;
	snMinimumBoatDefendGroupSize.network = 0;
	snMinimumBoatDefendGroupSize.defined = 1;
	snMinimumBoatDefendGroupSize.available = "available, except for water maps";
	snMinimumBoatDefendGroupSize.version = "1.0c";
	snMinimumBoatDefendGroupSize.linked = [ 69, 67 ];
	snMinimumBoatDefendGroupSize.related = [ 38, 28, 25 ];
	snMinimumBoatDefendGroupSize.shortDescription = "Sets the minimum size of boat defend groups.";

	snMaximumBoatDefendGroupSize.id = 69;
	snMaximumBoatDefendGroupSize.name = "sn-maximum-boat-defend-group-size";
	snMaximumBoatDefendGroupSize.default = 0;
	snMaximumBoatDefendGroupSize.category = "Water";
	snMaximumBoatDefendGroupSize.min = -32767;
	snMaximumBoatDefendGroupSize.max = 32768;
	snMaximumBoatDefendGroupSize.rmin = 0;
	snMaximumBoatDefendGroupSize.rmax = 32768;
	snMaximumBoatDefendGroupSize.network = 0;
	snMaximumBoatDefendGroupSize.defined = 1;
	snMaximumBoatDefendGroupSize.available = "available, except for water maps";
	snMaximumBoatDefendGroupSize.version = "1.0c";
	snMaximumBoatDefendGroupSize.linked = [ 68, 67 ];
	snMaximumBoatDefendGroupSize.related = [ 38, 28, 25 ];
	snMaximumBoatDefendGroupSize.shortDescription = "Sets the maximum size of boat defend groups.";

	snDockDefendPriority.id = 70;
	snDockDefendPriority.name = "sn-dock-defend-priority";
	snDockDefendPriority.default = 0;
	snDockDefendPriority.category = "Defense";
	snDockDefendPriority.min = -32767;
	snDockDefendPriority.max = 32768;
	snDockDefendPriority.rmin = 0;
	snDockDefendPriority.rmax = 1;
	snDockDefendPriority.network = 0;
	snDockDefendPriority.defined = 1;
	snDockDefendPriority.available = "available, except for water maps";
	snDockDefendPriority.version = "1.0c";
	snDockDefendPriority.linked = [];
	snDockDefendPriority.related = [ 56, 52, 51, 50, 55, 54, 53, 287 ];
	snDockDefendPriority.shortDescription = "Sets the priority of defending the dock.";

	snLockAndAttackResponse.id = 71;
	snLockAndAttackResponse.name = "sn-lock-attack-and-attack-response";
	snLockAndAttackResponse.default = -1;
	snLockAndAttackResponse.category = "AoE 1";
	snLockAndAttackResponse.min = -32767;
	snLockAndAttackResponse.max = 32768;
	snLockAndAttackResponse.rmin = 0;
	snLockAndAttackResponse.rmax = 1;
	snLockAndAttackResponse.network = 0;
	snLockAndAttackResponse.defined = 0;
	snLockAndAttackResponse.available = "seems available";
	snLockAndAttackResponse.version = "1.0c";
	snLockAndAttackResponse.linked = [];
	snLockAndAttackResponse.related = [ 46, 48 ];
	snLockAndAttackResponse.shortDescription = "AoE 1 only. This treats the sn-attack-separation-time and sn-attack-response-separation-time as the same numbers. Must be either 0 or 1.";

	snSentryDistanceVariation.id = 72;
	snSentryDistanceVariation.name = "sn-sentry-distance-variation";
	snSentryDistanceVariation.default = 2;
	snSentryDistanceVariation.category = "Defense";
	snSentryDistanceVariation.min = -32767;
	snSentryDistanceVariation.max = 32768;
	snSentryDistanceVariation.rmin = 0;
	snSentryDistanceVariation.rmax = 32768;
	snSentryDistanceVariation.network = 0;
	snSentryDistanceVariation.defined = 1;
	snSentryDistanceVariation.available = 0;
	snSentryDistanceVariation.version = "1.0c";
	snSentryDistanceVariation.linked = [ 22 ];
	snSentryDistanceVariation.related = [ 57, 92 ];
	snSentryDistanceVariation.shortDescription = "Sets the amount of allowable variation in the defense distances.";

	snMinimumTownSize.id = 73;
	snMinimumTownSize.name = "sn-minimum-town-size";
	snMinimumTownSize.default = 12;
	snMinimumTownSize.category = "Economy";
	snMinimumTownSize.min = -32767;
	snMinimumTownSize.max = 32768;
	snMinimumTownSize.rmin = 0;
	snMinimumTownSize.rmax = 255;
	snMinimumTownSize.network = 0;
	snMinimumTownSize.defined = 1;
	snMinimumTownSize.available = 0;
	snMinimumTownSize.version = "1.0c";
	snMinimumTownSize.linked = [ 74, 250 ];
	snMinimumTownSize.related = [ 86, 87 ];
	snMinimumTownSize.shortDescription = "Sets the minimum size of a computer player town.";

	snMaximumTownSize.id = 74;
	snMaximumTownSize.name = "sn-maximum-town-size";
	snMaximumTownSize.default = 20;
	snMaximumTownSize.category = "Economy";
	snMaximumTownSize.min = -32767;
	snMaximumTownSize.max = 32768;
	snMaximumTownSize.rmin = 0;
	snMaximumTownSize.rmax = 255;
	snMaximumTownSize.network = 0;
	snMaximumTownSize.defined = 1;
	snMaximumTownSize.available = 0;
	snMaximumTownSize.version = "1.0c";
	snMaximumTownSize.linked = [ 73, 250 ];
	snMaximumTownSize.related = [ 86, 87 ];
	snMaximumTownSize.shortDescription = "Sets the maximum size of a computer player town.";

	snGroupCommanderSelectionMethod.id = 75;
	snGroupCommanderSelectionMethod.name = "sn-group-commander-selection-method";
	snGroupCommanderSelectionMethod.default = 3;
	snGroupCommanderSelectionMethod.category = "Attack";
	snGroupCommanderSelectionMethod.min = -32767;
	snGroupCommanderSelectionMethod.max = 32768;
	snGroupCommanderSelectionMethod.rmin = 0;
	snGroupCommanderSelectionMethod.rmax = 3;
	snGroupCommanderSelectionMethod.network = 0;
	snGroupCommanderSelectionMethod.defined = 1;
	snGroupCommanderSelectionMethod.available = 0;
	snGroupCommanderSelectionMethod.version = "1.0c";
	snGroupCommanderSelectionMethod.linked = [];
	snGroupCommanderSelectionMethod.related = [];
	snGroupCommanderSelectionMethod.shortDescription = "Sets the method by which group commanders are selected. 0 selects the unit with the most hit points. 1 selects the unit with the fewest hit points. 2 selects the unit with the most range. The commander is set once during a group's creation and is only reset when the commander dies.";

	snConsecutiveIdleUnitLimit.id = 76;
	snConsecutiveIdleUnitLimit.name = "sn-consecutive-idle-unit-limit";
	snConsecutiveIdleUnitLimit.default = 15;
	snConsecutiveIdleUnitLimit.category = "Attack";
	snConsecutiveIdleUnitLimit.min = -32767;
	snConsecutiveIdleUnitLimit.max = 32768;
	snConsecutiveIdleUnitLimit.rmin = 0;
	snConsecutiveIdleUnitLimit.rmax = 32768;
	snConsecutiveIdleUnitLimit.network = 0;
	snConsecutiveIdleUnitLimit.defined = 1;
	snConsecutiveIdleUnitLimit.available = "available, but only before militarization";
	snConsecutiveIdleUnitLimit.version = "1.0c";
	snConsecutiveIdleUnitLimit.linked = [];
	snConsecutiveIdleUnitLimit.related = [];
	snConsecutiveIdleUnitLimit.shortDescription = "Sets the number of consecutive seconds that pass before a group is set to idle if all of its units are idle. This is only used during attack and retreat phases.";

	snTargetEvaluationDistance.id = 77;
	snTargetEvaluationDistance.name = "sn-target-evaluation-distance";
	snTargetEvaluationDistance.default = 50;
	snTargetEvaluationDistance.category = "Attack";
	snTargetEvaluationDistance.min = -32767;
	snTargetEvaluationDistance.max = 32768;
	snTargetEvaluationDistance.rmin = -32767;
	snTargetEvaluationDistance.rmax = 32768;
	snTargetEvaluationDistance.network = 0;
	snTargetEvaluationDistance.defined = 1;
	snTargetEvaluationDistance.available = 0;
	snTargetEvaluationDistance.version = "1.0c";
	snTargetEvaluationDistance.linked = [ 81, 89, 144, 122, 79, 78, 185, 80, 83, 90, 82, 123, 184 ];
	snTargetEvaluationDistance.related = [];
	snTargetEvaluationDistance.shortDescription = "Sets the multiplier used for the distance rating in computer player target evaluation.";

	snTargetEvaluationHitpoints.id = 78;
	snTargetEvaluationHitpoints.name = "sn-target-evaluation-hitpoints";
	snTargetEvaluationHitpoints.default = 0;
	snTargetEvaluationHitpoints.category = "Attack";
	snTargetEvaluationHitpoints.min = -32767;
	snTargetEvaluationHitpoints.max = 32768;
	snTargetEvaluationHitpoints.rmin = -32767;
	snTargetEvaluationHitpoints.rmax = 32768;
	snTargetEvaluationHitpoints.network = 0;
	snTargetEvaluationHitpoints.defined = 1;
	snTargetEvaluationHitpoints.available = 0;
	snTargetEvaluationHitpoints.version = "1.0c";
	snTargetEvaluationHitpoints.linked = [ 81, 89, 144, 122, 79, 77, 185, 80, 83, 90, 82, 123, 184 ];
	snTargetEvaluationHitpoints.related = [];
	snTargetEvaluationHitpoints.shortDescription = "Sets the multiplier used for the hit point rating in computer player target evaluation.";

	snTargetEvaluationDamageCapability.id = 79;
	snTargetEvaluationDamageCapability.name = "sn-target-evaluation-damage-capability";
	snTargetEvaluationDamageCapability.default = 0;
	snTargetEvaluationDamageCapability.category = "Attack";
	snTargetEvaluationDamageCapability.min = -32767;
	snTargetEvaluationDamageCapability.max = 32768;
	snTargetEvaluationDamageCapability.rmin = -32767;
	snTargetEvaluationDamageCapability.rmax = 32768;
	snTargetEvaluationDamageCapability.network = 0;
	snTargetEvaluationDamageCapability.defined = 1;
	snTargetEvaluationDamageCapability.available = 0;
	snTargetEvaluationDamageCapability.version = "1.0c";
	snTargetEvaluationDamageCapability.linked = [ 81, 89, 144, 122, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
	snTargetEvaluationDamageCapability.related = [];
	snTargetEvaluationDamageCapability.shortDescription = "Sets the multiplier used for the damage capability rating in computer player target evaluation.";

	snTargetEvaluationKills.id = 80;
	snTargetEvaluationKills.name = "sn-target-evaluation-kills";
	snTargetEvaluationKills.default = 0;
	snTargetEvaluationKills.category = "Attack";
	snTargetEvaluationKills.min = -32767;
	snTargetEvaluationKills.max = 32768;
	snTargetEvaluationKills.rmin = -32767;
	snTargetEvaluationKills.rmax = 32768;
	snTargetEvaluationKills.network = 0;
	snTargetEvaluationKills.defined = 1;
	snTargetEvaluationKills.available = 0;
	snTargetEvaluationKills.version = "1.0c";
	snTargetEvaluationKills.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 83, 90, 82, 123, 184 ];
	snTargetEvaluationKills.related = [];
	snTargetEvaluationKills.shortDescription = "Sets the multiplier used for the kill rating in computer player target evaluation.";

	snTargetEvaluationAllyProximity.id = 81;
	snTargetEvaluationAllyProximity.name = "sn-target-evaluation-ally-proximity";
	snTargetEvaluationAllyProximity.default = 0;
	snTargetEvaluationAllyProximity.category = "Attack";
	snTargetEvaluationAllyProximity.min = -32767;
	snTargetEvaluationAllyProximity.max = 32768;
	snTargetEvaluationAllyProximity.rmin = -32767;
	snTargetEvaluationAllyProximity.rmax = 32768;
	snTargetEvaluationAllyProximity.network = 0;
	snTargetEvaluationAllyProximity.defined = 1;
	snTargetEvaluationAllyProximity.available = 0;
	snTargetEvaluationAllyProximity.version = "1.0c";
	snTargetEvaluationAllyProximity.linked = [ 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
	snTargetEvaluationAllyProximity.related = [];
	snTargetEvaluationAllyProximity.shortDescription = "Sets the multiplier used for the ally proximity (number of allies in range) rating in computer player target evaluation.";

	snTargetEvaluationRof.id = 82;
	snTargetEvaluationRof.name = "sn-target-evaluation-rof";
	snTargetEvaluationRof.default = 0;
	snTargetEvaluationRof.category = "Attack";
	snTargetEvaluationRof.min = -32767;
	snTargetEvaluationRof.max = 32768;
	snTargetEvaluationRof.rmin = -32767;
	snTargetEvaluationRof.rmax = 32768;
	snTargetEvaluationRof.network = 0;
	snTargetEvaluationRof.defined = 1;
	snTargetEvaluationRof.available = 0;
	snTargetEvaluationRof.version = "1.0c";
	snTargetEvaluationRof.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 123, 184 ];
	snTargetEvaluationRof.related = [];
	snTargetEvaluationRof.shortDescription = "Sets the multiplier used for the rate of fire rating in computer player target evaluation.";

	snTargetEvaluationRandomness.id = 83;
	snTargetEvaluationRandomness.name = "sn-target-evaluation-randomness";
	snTargetEvaluationRandomness.default = 0;
	snTargetEvaluationRandomness.category = "Attack";
	snTargetEvaluationRandomness.min = -32767;
	snTargetEvaluationRandomness.max = 32768;
	snTargetEvaluationRandomness.rmin = -32767;
	snTargetEvaluationRandomness.rmax = 32768;
	snTargetEvaluationRandomness.network = 0;
	snTargetEvaluationRandomness.defined = 1;
	snTargetEvaluationRandomness.available = 0;
	snTargetEvaluationRandomness.version = "1.0c";
	snTargetEvaluationRandomness.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 90, 82, 123, 184 ];
	snTargetEvaluationRandomness.related = [];
	snTargetEvaluationRandomness.shortDescription = "Sets the multiplier used for the randomness factor in computer player target evaluation.";

	snNumberWallGates.id = 84;
	snNumberWallGates.name = "sn-number-wall-gates";
	snNumberWallGates.default = -1;
	snNumberWallGates.category = "AoE 1";
	snNumberWallGates.min = -32767;
	snNumberWallGates.max = 32768;
	snNumberWallGates.rmin = 0;
	snNumberWallGates.rmax = 32768;
	snNumberWallGates.network = 0;
	snNumberWallGates.defined = 0;
	snNumberWallGates.available = "seems available, if you will not build walls";
	snNumberWallGates.version = "1.0c";
	snNumberWallGates.linked = [];
	snNumberWallGates.related = [];
	snNumberWallGates.shortDescription = "AoE 1 only. Sets the number of gates that must be left in the wall around a computer player's town. Must be &gt;= 0.";

	snSizeWallGates.id = 85;
	snSizeWallGates.name = "sn-size-wall-gates";
	snSizeWallGates.default = -1;
	snSizeWallGates.category = "AoE 1";
	snSizeWallGates.min = -32767;
	snSizeWallGates.max = 32768;
	snSizeWallGates.rmin = 0;
	snSizeWallGates.rmax = 32768;
	snSizeWallGates.network = 0;
	snSizeWallGates.defined = 0;
	snSizeWallGates.available = 1;
	snSizeWallGates.version = "1.0c";
	snSizeWallGates.linked = [];
	snSizeWallGates.related = [];
	snSizeWallGates.shortDescription = "AoE 1 only. Sets the size (in tiles) of the gates in the wall around a computer player's town. Must be &gt;= 0.";

	snCampMaxDistance.id = 86;
	snCampMaxDistance.name = "sn-camp-max-distance";
	snCampMaxDistance.default = 25;
	snCampMaxDistance.category = "Economy";
	snCampMaxDistance.min = -32767;
	snCampMaxDistance.max = 32768;
	snCampMaxDistance.rmin = 7;
	snCampMaxDistance.rmax = 255;
	snCampMaxDistance.network = 0;
	snCampMaxDistance.defined = 1;
	snCampMaxDistance.available = 0;
	snCampMaxDistance.version = "1.0c";
	snCampMaxDistance.linked = [ 260, 261, 248, 202 ];
	snCampMaxDistance.related = [ 87, 74, 73, 266 ];
	snCampMaxDistance.shortDescription = "Sets the maximum distance that lumber camps and mining camps may be placed from a Town Center.";

	snMillMaxDistance.id = 87;
	snMillMaxDistance.name = "sn-mill-max-distance";
	snMillMaxDistance.default = 100;
	snMillMaxDistance.category = "Economy";
	snMillMaxDistance.min = -32767;
	snMillMaxDistance.max = 32768;
	snMillMaxDistance.rmin = 4;
	snMillMaxDistance.rmax = 255;
	snMillMaxDistance.network = 0;
	snMillMaxDistance.defined = 1;
	snMillMaxDistance.available = 0;
	snMillMaxDistance.version = "1.0c";
	snMillMaxDistance.linked = [ 248, 202 ];
	snMillMaxDistance.related = [ 86, 260, 261, 74, 73, 266 ];
	snMillMaxDistance.shortDescription = "Sets the maximum distance that mills may be placed from a Town Center.";

	snTacticalUpdateFrequency.id = 88;
	snTacticalUpdateFrequency.name = "sn-tactical-update-frequency";
	snTacticalUpdateFrequency.default = -1;
	snTacticalUpdateFrequency.category = "AoE 1";
	snTacticalUpdateFrequency.min = -32767;
	snTacticalUpdateFrequency.max = 32768;
	snTacticalUpdateFrequency.rmin = 0;
	snTacticalUpdateFrequency.rmax = 32768;
	snTacticalUpdateFrequency.network = 0;
	snTacticalUpdateFrequency.defined = 0;
	snTacticalUpdateFrequency.available = 0;
	snTacticalUpdateFrequency.version = "1.0c";
	snTacticalUpdateFrequency.linked = [];
	snTacticalUpdateFrequency.related = [];
	snTacticalUpdateFrequency.shortDescription = "AoE 1 only. Sets the number of seconds that pass between each tactical AI update. Must be &gt;= 0.";

	snTargetEvaluationAttackAttempts.id = 89;
	snTargetEvaluationAttackAttempts.name = "sn-target-evaluation-attack-attempts";
	snTargetEvaluationAttackAttempts.default = -25;
	snTargetEvaluationAttackAttempts.category = "Attack";
	snTargetEvaluationAttackAttempts.min = -32767;
	snTargetEvaluationAttackAttempts.max = 32768;
	snTargetEvaluationAttackAttempts.rmin = -32767;
	snTargetEvaluationAttackAttempts.rmax = 32768;
	snTargetEvaluationAttackAttempts.network = 0;
	snTargetEvaluationAttackAttempts.defined = 1;
	snTargetEvaluationAttackAttempts.available = 0;
	snTargetEvaluationAttackAttempts.version = "1.0c";
	snTargetEvaluationAttackAttempts.linked = [ 81, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
	snTargetEvaluationAttackAttempts.related = [];
	snTargetEvaluationAttackAttempts.shortDescription = "Sets the multiplier used for the attack attempts rating in computer player target evaluation.";

	snTargetEvaluationRange.id = 90;
	snTargetEvaluationRange.name = "sn-target-evaluation-range";
	snTargetEvaluationRange.default = 0;
	snTargetEvaluationRange.category = "Attack";
	snTargetEvaluationRange.min = -32767;
	snTargetEvaluationRange.max = 32768;
	snTargetEvaluationRange.rmin = -32767;
	snTargetEvaluationRange.rmax = 32768;
	snTargetEvaluationRange.network = 0;
	snTargetEvaluationRange.defined = 1;
	snTargetEvaluationRange.available = 0;
	snTargetEvaluationRange.version = "1.0c";
	snTargetEvaluationRange.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 82, 123, 184 ];
	snTargetEvaluationRange.related = [];
	snTargetEvaluationRange.shortDescription = "Sets the multiplier used for the range rating in computer player target evaluation.";

	snPercentUnitHealthRetreat.id = 91;
	snPercentUnitHealthRetreat.name = "sn-percent-unit-health-retreat";
	snPercentUnitHealthRetreat.default = -1;
	snPercentUnitHealthRetreat.category = "Attack";
	snPercentUnitHealthRetreat.min = -32767;
	snPercentUnitHealthRetreat.max = 32768;
	snPercentUnitHealthRetreat.rmin = 0;
	snPercentUnitHealthRetreat.rmax = 100;
	snPercentUnitHealthRetreat.network = 0;
	snPercentUnitHealthRetreat.defined = 0;
	snPercentUnitHealthRetreat.available = "available, but avoid using it in conjunction with sn-scale-percent-unit-health-retreat (97)";
	snPercentUnitHealthRetreat.version = "1.0c";
	snPercentUnitHealthRetreat.linked = [ 97 ];
	snPercentUnitHealthRetreat.related = [];
	snPercentUnitHealthRetreat.shortDescription = "Sets the percentage of hit points that a unit can lose (relative to what it started the attack with) before retreating. Must be &gt;= 1 and &lt;= 100.";

	snDefendOverlapDistance.id = 92;
	snDefendOverlapDistance.name = "sn-defend-overlap-distance";
	snDefendOverlapDistance.default = 5;
	snDefendOverlapDistance.category = "Defense";
	snDefendOverlapDistance.min = -32767;
	snDefendOverlapDistance.max = 32768;
	snDefendOverlapDistance.rmin = 0;
	snDefendOverlapDistance.rmax = 255;
	snDefendOverlapDistance.network = 0;
	snDefendOverlapDistance.defined = 1;
	snDefendOverlapDistance.available = 0;
	snDefendOverlapDistance.version = "1.0c";
	snDefendOverlapDistance.linked = [];
	snDefendOverlapDistance.related = [ 57, 22, 72 ];
	snDefendOverlapDistance.shortDescription = "Sets the amount of influence that a defend group has. Defend groups will be assigned so that their circles of influence do not overlap.";

	snScaleMinimumAttackGroupSize.id = 93;
	snScaleMinimumAttackGroupSize.name = "sn-scale-minimum-attack-group-size";
	snScaleMinimumAttackGroupSize.default = 1;
	snScaleMinimumAttackGroupSize.category = "Attack";
	snScaleMinimumAttackGroupSize.min = -32767;
	snScaleMinimumAttackGroupSize.max = 32768;
	snScaleMinimumAttackGroupSize.rmin = 0;
	snScaleMinimumAttackGroupSize.rmax = 32768;
	snScaleMinimumAttackGroupSize.network = 0;
	snScaleMinimumAttackGroupSize.defined = 1;
	snScaleMinimumAttackGroupSize.available = 0;
	snScaleMinimumAttackGroupSize.version = "1.0c";
	snScaleMinimumAttackGroupSize.linked = [ 94, 16, 59 ];
	snScaleMinimumAttackGroupSize.related = [ 36, 26, 58, 60 ];
	snScaleMinimumAttackGroupSize.shortDescription = "The scaling factor for the minimum attack group size. Added to sn-minimum-attack-group-size when the tactical AI does its scaling.";

	snScaleMaximumAttackGroupSize.id = 94;
	snScaleMaximumAttackGroupSize.name = "sn-scale-maximum-attack-group-size";
	snScaleMaximumAttackGroupSize.default = 0;
	snScaleMaximumAttackGroupSize.category = "Attack";
	snScaleMaximumAttackGroupSize.min = -32767;
	snScaleMaximumAttackGroupSize.max = 32768;
	snScaleMaximumAttackGroupSize.rmin = 0;
	snScaleMaximumAttackGroupSize.rmax = 32768;
	snScaleMaximumAttackGroupSize.network = 0;
	snScaleMaximumAttackGroupSize.defined = 1;
	snScaleMaximumAttackGroupSize.available = 0;
	snScaleMaximumAttackGroupSize.version = "1.0c";
	snScaleMaximumAttackGroupSize.linked = [ 93, 26, 60 ];
	snScaleMaximumAttackGroupSize.related = [ 36, 16, 58, 59 ];
	snScaleMaximumAttackGroupSize.shortDescription = "The scaling factor for the maximum attack group size. Added to sn-minimum-attack-group-size when the tactical AI does its scaling.";

	snScalePercentHealthRetreat.id = 95;
	snScalePercentHealthRetreat.name = "sn-scale-percent-health-retreat";
	snScalePercentHealthRetreat.default = -1;
	snScalePercentHealthRetreat.category = "AoE 1";
	snScalePercentHealthRetreat.min = -32767;
	snScalePercentHealthRetreat.max = 32768;
	snScalePercentHealthRetreat.rmin = 0;
	snScalePercentHealthRetreat.rmax = 32768;
	snScalePercentHealthRetreat.network = 0;
	snScalePercentHealthRetreat.defined = 0;
	snScalePercentHealthRetreat.available = "available, but avoid using it in conjunction with sn-percent-health-retreat (30)";
	snScalePercentHealthRetreat.version = "1.0c";
	snScalePercentHealthRetreat.linked = [ 30 ];
	snScalePercentHealthRetreat.related = [];
	snScalePercentHealthRetreat.shortDescription = "AoE 1 only. The scaling factor for the percent health retreat. Added to sn-percent-health-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100.";

	snScalePercentDeathRetreat.id = 96;
	snScalePercentDeathRetreat.name = "sn-scale-percent-death-retreat";
	snScalePercentDeathRetreat.default = -1;
	snScalePercentDeathRetreat.category = "AoE 1";
	snScalePercentDeathRetreat.min = -32767;
	snScalePercentDeathRetreat.max = 32768;
	snScalePercentDeathRetreat.rmin = 0;
	snScalePercentDeathRetreat.rmax = 32768;
	snScalePercentDeathRetreat.network = 0;
	snScalePercentDeathRetreat.defined = 0;
	snScalePercentDeathRetreat.available = "available, but avoid using it in conjunction with sn-percent-death-retreat (31)";
	snScalePercentDeathRetreat.version = "1.0c";
	snScalePercentDeathRetreat.linked = [ 31 ];
	snScalePercentDeathRetreat.related = [];
	snScalePercentDeathRetreat.shortDescription = "AoE 1 only. The scaling factor for the percent health retreat. Added to sn-percent-death-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100.";

	snScalePercentUnitHealthRetreat.id = 97;
	snScalePercentUnitHealthRetreat.name = "sn-scale-percent-unit-health-retreat";
	snScalePercentUnitHealthRetreat.default = -1;
	snScalePercentUnitHealthRetreat.category = "AoE 1";
	snScalePercentUnitHealthRetreat.min = -32767;
	snScalePercentUnitHealthRetreat.max = 32768;
	snScalePercentUnitHealthRetreat.rmin = 0;
	snScalePercentUnitHealthRetreat.rmax = 32768;
	snScalePercentUnitHealthRetreat.network = 0;
	snScalePercentUnitHealthRetreat.defined = 0;
	snScalePercentUnitHealthRetreat.available = "available, but avoid using it in conjunction with sn-percent-unit-health-retreat (91)";
	snScalePercentUnitHealthRetreat.version = "1.0c";
	snScalePercentUnitHealthRetreat.linked = [ 91 ];
	snScalePercentUnitHealthRetreat.related = [];
	snScalePercentUnitHealthRetreat.shortDescription = "AoE 1 only. The scaling factor for the percent health retreat. Added to sn-percent-unit-health-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100.";

	snAttackGroupSizeRandomness.id = 98;
	snAttackGroupSizeRandomness.name = "sn-attack-group-size-randomness";
	snAttackGroupSizeRandomness.default = 1;
	snAttackGroupSizeRandomness.category = "Attack";
	snAttackGroupSizeRandomness.min = -32767;
	snAttackGroupSizeRandomness.max = 32768;
	snAttackGroupSizeRandomness.rmin = 0;
	snAttackGroupSizeRandomness.rmax = 32768;
	snAttackGroupSizeRandomness.network = 0;
	snAttackGroupSizeRandomness.defined = 1;
	snAttackGroupSizeRandomness.available = 0;
	snAttackGroupSizeRandomness.version = "1.0c";
	snAttackGroupSizeRandomness.linked = [];
	snAttackGroupSizeRandomness.related = [ 41, 36, 26, 16, 58, 60, 59 ];
	snAttackGroupSizeRandomness.shortDescription = "The randomness factor in the attack group size. This sets a cap on the amount of randomness in the minimum attack group size. The randomness factor is set once (when the group is created) and will be between 0 and this number.";

	snScalingFrequency.id = 99;
	snScalingFrequency.name = "sn-scaling-frequency";
	snScalingFrequency.default = 10;
	snScalingFrequency.category = "Attack";
	snScalingFrequency.min = -32767;
	snScalingFrequency.max = 32768;
	snScalingFrequency.rmin = 0;
	snScalingFrequency.rmax = 32768;
	snScalingFrequency.network = 0;
	snScalingFrequency.defined = 1;
	snScalingFrequency.available = 0;
	snScalingFrequency.version = "1.0c";
	snScalingFrequency.linked = [];
	snScalingFrequency.related = [];
	snScalingFrequency.shortDescription = "Sets the number of minutes that pass between each scaling inside the tactical AI.";

	snMaximumGaiaAttackResponse.id = 100;
	snMaximumGaiaAttackResponse.name = "sn-maximum-gaia-attack-response";
	snMaximumGaiaAttackResponse.default = 3;
	snMaximumGaiaAttackResponse.category = "Defense";
	snMaximumGaiaAttackResponse.min = -32767;
	snMaximumGaiaAttackResponse.max = 32768;
	snMaximumGaiaAttackResponse.rmin = 0;
	snMaximumGaiaAttackResponse.rmax = 32768;
	snMaximumGaiaAttackResponse.network = 0;
	snMaximumGaiaAttackResponse.defined = 1;
	snMaximumGaiaAttackResponse.available = 0;
	snMaximumGaiaAttackResponse.version = "1.0c";
	snMaximumGaiaAttackResponse.linked = [];
	snMaximumGaiaAttackResponse.related = [ 225 ];
	snMaximumGaiaAttackResponse.shortDescription = "The maximum number of villagers that respond to another civilian getting attacked by a Gaia animal.";

	snBuildFrequency.id = 101;
	snBuildFrequency.name = "sn-build-frequency";
	snBuildFrequency.default = 1;
	snBuildFrequency.category = "Other";
	snBuildFrequency.min = -32767;
	snBuildFrequency.max = 32768;
	snBuildFrequency.rmin = 0;
	snBuildFrequency.rmax = 32768;
	snBuildFrequency.network = 0;
	snBuildFrequency.defined = 1;
	snBuildFrequency.available = 0;
	snBuildFrequency.version = "1.0c";
	snBuildFrequency.linked = [];
	snBuildFrequency.related = [];
	snBuildFrequency.shortDescription = "Sets the number of tactical AI updates that pass between each training or research attempt.";

	snAttackSeparationTimeRandomness.id = 102;
	snAttackSeparationTimeRandomness.name = "sn-attack-separation-time-randomness";
	snAttackSeparationTimeRandomness.default = 15;
	snAttackSeparationTimeRandomness.category = "Attack";
	snAttackSeparationTimeRandomness.min = -32767;
	snAttackSeparationTimeRandomness.max = 32768;
	snAttackSeparationTimeRandomness.rmin = 0;
	snAttackSeparationTimeRandomness.rmax = 32768;
	snAttackSeparationTimeRandomness.network = 0;
	snAttackSeparationTimeRandomness.defined = 1;
	snAttackSeparationTimeRandomness.available = "seems available, but it would be best to avoid it";
	snAttackSeparationTimeRandomness.version = "1.0c";
	snAttackSeparationTimeRandomness.linked = [ 46 ];
	snAttackSeparationTimeRandomness.related = [ 48 ];
	snAttackSeparationTimeRandomness.shortDescription = "The amount of randomness incorporated into the attack separation time. Must be &gt;= 0 and &lt; sn-attack-separation-time.";

	snAttackIntelligence.id = 103;
	snAttackIntelligence.name = "sn-attack-intelligence";
	snAttackIntelligence.default = 0;
	snAttackIntelligence.category = "Attack";
	snAttackIntelligence.min = -32767;
	snAttackIntelligence.max = 32768;
	snAttackIntelligence.rmin = 0;
	snAttackIntelligence.rmax = 1;
	snAttackIntelligence.network = 0;
	snAttackIntelligence.defined = 1;
	snAttackIntelligence.available = 0;
	snAttackIntelligence.version = "1.0c";
	snAttackIntelligence.linked = [];
	snAttackIntelligence.related = [ 47 ];
	snAttackIntelligence.shortDescription = "Specifies whether the intelligent attack system is used. The intelligent attack system tries to avoid enemy units when attacking and tries to attack from different sides. When used with the sn-attack-coordination set to 2, this can create multifront attacks. Must be 0 (to turn off) and 1 (to turn on).";

	.id = 104;
	.name = "sn-initial-attack-delay";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 134 ];
	.related = [];
	.shortDescription = "The forced, initial delay before any computer player attacks (in seconds).";

	.id = 105;
	.name = "sn-save-scenario-information";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 201 ];
	.shortDescription = "Controls whether the learning information is saved at the end of the scenario for a given computer player. Must be 0 (to turn off) or 1 (to turn on).";

	.id = 106;
	.name = "sn-special-attack-type1";
	.default = -1;
	.category = -1;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 109 ];
	.related = [ 107, 108 ];
	.shortDescription = "Set to 1 to target monasteries and monks carrying relics.";

	.id = 107;
	.name = "sn-special-attack-type2";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 110 ];
	.related = [ 106, 108 ];
	.shortDescription = "Set to any unit, building, or group id to direct attacks.";

	.id = 108;
	.name = "sn-special-attack-type3";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 111 ];
	.related = [ 106, 107 ];
	.shortDescription = "Set to 1 to target wonders.";

	.id = 109;
	.name = "sn-special-attack-influence1";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 106 ];
	.related = [ 110, 111 ];
	.shortDescription = "Sets the multiplier used for the special attack type 1 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 1, &lt; 0 to influence the computer player away from attacking the special type 1.";

	.id = 110;
	.name = "sn-special-attack-influence2";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [ 107 ];
	.related = [ 109, 111 ];
	.shortDescription = "Sets the multiplier used for the special attack type 2 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 2, &lt; 0 to influence the computer player away from attacking the special type 2.";

	.id = 111;
	.name = "sn-special-attack-influence3";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = "seems available, except under standard victory conditions";
	.version = "1.0c";
	.linked = [ 108 ];
	.related = [ 109, 110 ];
	.shortDescription = "Sets the multiplier used for the special attack type 3 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 3, &lt; 0 to influence the computer player away from attacking the special type 3.";

	.id = 112;
	.name = "sn-minimum-water-body-size-for-dock";
	.default = 300;
	.category = 300;
	.min = -32767;
	.max = 32768;
	.rmin = 10;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = "available, as long as the value will always be &gt;= 300";
	.version = "1.0c";
	.linked = [];
	.related = [ 169 ];
	.shortDescription = "The minimum number of tiles (in surface area) that a body of water must be for a Dock to be placed on it.";

	.id = 113;
	.name = "unknown-data-113";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 114;
	.name = "sn-number-build-attempts-before-skip";
	.default = 25;
	.category = 25;
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 115 ];
	.shortDescription = "The maximum number of build attempts a build plan can go through before being put into skip mode.";

	.id = 115;
	.name = "sn-max-skips-per-attempt";
	.default = 10;
	.category = 10;
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 114 ];
	.shortDescription = "The maximum number of unbuilt items that can be skipped during any build plan processing before giving up (for being too far ahead of the current position in the plan).";

	.id = 116;
	.name = "unknown-data-116";
	.default = 10;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 117;
	.name = "sn-food-gatherer-percentage";
	.default = 0;
	.category = 0;
	.min = 0;
	.max = 100;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 156 ];
	.related = [ 118, 119, 120 ];
	.shortDescription = "Set to configure food gatherers: foodGatherers = ( this + sn-food-modifier-percentage ) * gathererTotal * 0.01 + 0.5.";

	.id = 118;
	.name = "sn-gold-gatherer-percentage";
	.default = 0;
	.category = 0;
	.min = 0;
	.max = 100;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 159 ];
	.related = [ 117, 119, 120 ];
	.shortDescription = "Set to configure gold gatherers: goldGatherers = ( this + sn-gold-modifier-percentage ) * gathererTotal * 0.01 + 0.5.";

	.id = 119;
	.name = "sn-stone-gatherer-percentage";
	.default = 0;
	.category = 0;
	.min = 0;
	.max = 100;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 158 ];
	.related = [ 117, 118, 120 ];
	.shortDescription = "Set to configure stone gatherers: stoneGatherers = ( this + sn-stone-modifier-percentage ) * gathererTotal * 0.01 + 0.5.";

	.id = 120;
	.name = "sn-wood-gatherer-percentage";
	.default = 0;
	.category = 0;
	.min = 0;
	.max = 100;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 157 ];
	.related = [ 117, 118, 119 ];
	.shortDescription = "Set to configure wood gatherers: woodGatherers = ( this + sn-wood-modifier-percentage ) * gathererTotal * 0.01 + 0.5.";

	.id = 121;
	.name = "sn-defend-important-group-leaders";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not important attack group leaders are defended by the other group units. A value of 1 has the members defend the leader. A value of 0 does not.";

	.id = 122;
	.name = "sn-target-evaluation-continent";
	.default = 100;
	.category = 100;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 81, 89, 144, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
	.related = [];
	.shortDescription = "Sets the additive value used for the targets on the same continent as the attack group commander. Must be &gt; 0 to influence the computer player toward attacking the units on the same continent or 0 for no special influence.";

	.id = 123;
	.name = "sn-target-evaluation-siege-weapon";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 184 ];
	.related = [];
	.shortDescription = "Sets the additive value used for influencing siege weapons to attack stationary targets (and influencing non-siege weapons not to attack those stationary targets). Must be &gt; 0 to influence the computer player to use siege weapons to attack stationary targets or 0 for no special influence.";

	.id = 124;
	.name = "sn-tribute-amount";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Sets the required amount of gold that must be tributed to the computer player. If this is 0, no computer player tributing is monitored for the special system (thus, the normal tribute system is in effect). When this value is &gt; 0, the computer player will expect some gold in tribute.";

	.id = 125;
	.name = "sn-tribute-chat-frequency";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Sets the frequency (in seconds) of the computer player's chat messages asking for tribute. Must be &gt;= 0.";

	.id = 126;
	.name = "sn-tribute-chat-randomness";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Sets the randomness (in seconds) of the computer player's chat messages asking for tribute. Must be &gt;= 0 and &lt; sn-tribute-chat-frequency.";

	.id = 127;
	.name = "sn-tribute-timeout";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Sets the amount of time (in seconds) within which the tribute must take place. Must be &gt;= 0.";

	.id = 128;
	.name = "sn-tribute-player";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 8;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Sets the player ID# of the player the computer player will target for the tribute request. Must be a valid player number for the game.";

	.id = 129;
	.name = "sn-tribute-success-outcome";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls what happens when the tribute request is fulfilled within the allotted time. If set to 0, nothing happens. If set to 1, the computer player will ally when the tribute amount is paid.";

	.id = 130;
	.name = "sn-tribute-failure-outcome";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls what happens when the tribute request is not fulfilled within the allotted time. If set to 0, nothing happens. If set to 1, the computer player will go to war when the tribute amount is not paid.";

	.id = 131;
	.name = "sn-group-leader-defense-distance";
	.default = 3;
	.category = 3;
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Sets the defense distance for defenders of an important attack group leader.";

	.id = 132;
	.name = "sn-tribute-persistence";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not the interactive tribute system operates once or forever. A value of 1 makes it last the entire game (i.e. the computer player will continue to demand sn-tribute-amount of gold for the entire game, at intervals roughly equivalent to sn-tribute-chat-frequency from the outcome evaluation). A value of 0 makes the interactive tribute occur one time.";

	.id = 133;
	.name = "sn-tribute-revoke-on-attack";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player rescinds the favorable tribute outcome when the sn-tribute-player attacks the computer player. A value of 1 has the computer player rescind, a value of 0 does not.";

	.id = 134;
	.name = "sn-initial-attack-delay-type";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 3;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 104 ];
	.related = [];
	.shortDescription = "The type of initial attack delay. A value of 1 denotes a delay ended by the build list. A value of 2 uses the sn-initial-attack-delay timeout. A value of 3 allows the computer player to attack after he has been attacked by a non-Gaia player. A value of 0 allows any of the three occurrences to enable attacks.";

	.id = 135;
	.name = "sn-blot-exploration-map";
	.default = 1;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = "available, but only later, as it greatly influences exploration";
	.version = "1.0c";
	.linked = [ 136 ];
	.related = [ 167, 32, 179 ];
	.shortDescription = "This controls whether or not the computer player re-explores previously explored regions. A value of 1 has the computer player re-explore, a value of 0 does not.";

	.id = 136;
	.name = "sn-blot-size";
	.default = 15;
	.category = 15;
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = "available, but only later, as it greatly influences exploration";
	.version = "1.0c";
	.linked = [ 135 ];
	.related = [ 167, 32, 179 ];
	.shortDescription = "This controls the size of the area that a computer player marks for re-exploration.";

	.id = 137;
	.name = "unknown-data-137";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 138;
	.name = "sn-add-starting-resource-food";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 139, 140, 141 ];
	.shortDescription = "Cheat - adds extra food to starting resources.";

	.id = 139;
	.name = "sn-add-starting-resource-gold";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 138, 140, 141 ];
	.shortDescription = "Cheat - adds extra gold to starting resources.";

	.id = 140;
	.name = "sn-add-starting-resource-stone";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 138, 139, 141 ];
	.shortDescription = "Cheat - adds extra stone to starting resources.";

	.id = 141;
	.name = "sn-add-starting-resource-wood";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 138, 139, 140 ];
	.shortDescription = "Cheat - adds extra wood to starting resources.";

	.id = 142;
	.name = "sn-intelligent-gathering";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 148, 149, 203 ];
	.shortDescription = "Controls whether or not the intelligent gathering system is enabled.";

	.id = 143;
	.name = "sn-task-ungrouped-soldiers";
	.default = 1;
	.category = 0;
	.min = 1;
	.max = 1;
	.rmin = 0;
	.rmax = 1;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 232 ];
	.shortDescription = "Controls whether or not ungrouped computer player soldiers get tasked to spread out and guard the computer player's general town area.";

	.id = 144;
	.name = "sn-target-evaluation-boat";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 81, 89, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
	.related = [];
	.shortDescription = "Sets the additive value used for influencing land units to attack or not attack boats. Must be &gt; 0 to influence land units to attack boats, 0 for no special influence, and less than 0 for aversion.";

	.id = 145;
	.name = "sn-number-enemy-objects-required";
	.default = 10;
	.category = 10;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "The count of the number of enemy objects the computer player must see before dropping the number of civilian explorers down to the minimum level.";

	.id = 146;
	.name = "sn-number-max-skip-cycles";
	.default = 50;
	.category = 50;
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "";

	.id = 147;
	.name = "sn-most-needed-resource-look-ahead";
	.default = 10;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. The number of build list objects the computer player will use to look ahead to tabulate the resources required. Only used for the dynamic gathering percentages. Must be &gt;= 0.";

	.id = 148;
	.name = "sn-retask-gather-amount";
	.default = 20;
	.category = 20;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 149 ];
	.related = [ 142, 203 ];
	.shortDescription = "The minimum amount that a gatherer must gather before the computer player allows him to be retasked to another resource type. Some code may override this.";

	.id = 149;
	.name = "sn-max-retask-gather-amount";
	.default = 40;
	.category = 40;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 148 ];
	.related = [ 142, 203 ];
	.shortDescription = "The maximum amount that a gatherer can be told to gather before being allowed to be retasked. Some code may override this.";

	.id = 150;
	.name = "sn-max-storage-pits";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. The maximum number of storage pits a computer player can build in one game. Must be &gt;= 0.";

	.id = 151;
	.name = "sn-max-granaries";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. The maximum number of granaries a computer player can build in one game. Must be &gt;= 0.";

	.id = 152;
	.name = "sn-house-overage";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. The number of Houses that a computer player will autobuild over the amount needed to support 50 units. Must be &gt;= 0.";

	.id = 153;
	.name = "unknown-data-153";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 154;
	.name = "unknown-data-154";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 155;
	.name = "sn-build-plan-divisions";
	.default = 10;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = "seems available";
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. The number of divisions a computer player will place in its build list (used to calculate gathering percentages). Must be &gt;= 1.";

	.id = 156;
	.name = "sn-food-modifier-percentage";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -100;
	.rmax = 100;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [ 117 ];
	.related = [ 157, 158, 159 ];
	.shortDescription = "Set to configure food gatherers: foodGatherers = ( sn-food-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5.";

	.id = 157;
	.name = "sn-wood-modifier-percentage";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -100;
	.rmax = 100;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [ 120 ];
	.related = [ 156, 158, 159 ];
	.shortDescription = "Set to configure wood gatherers: woodGatherers = ( sn-wood-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5.";

	.id = 158;
	.name = "sn-stone-modifier-percentage";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -100;
	.rmax = 100;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [ 119 ];
	.related = [ 156, 157, 159 ];
	.shortDescription = "Set to configure stone gatherers: stoneGatherers = ( sn-stone-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5.";

	.id = 159;
	.name = "sn-gold-modifier-percentage";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -100;
	.rmax = 100;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [ 118 ];
	.related = [ 156, 157, 158 ];
	.shortDescription = "Set to configure gold gatherers: goldGatherers = ( sn-gold-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5.";

	.id = 160;
	.name = "sn-max-build-plan-gatherer-percentage";
	.default = 50;
	.category = 50;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "The maximum percentage of gatherers that a computer player will task based on the pregame requirements of the build plan.";

	.id = 161;
	.name = "sn-required-first-building";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 4;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls what building a computer player must place first. 0: No restriction. 1: Either a Storage Pit or a granary. 2: A Storage Pit. 3: A Granary. 4: Both a Storage Pit and a Granary. Exceptions consist of a Town Center and sn-maximum-houses-before-dropsites.";

	.id = 162;
	.name = "unknown-data-162";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 163;
	.name = "sn-food-dropsite-distance";
	.default = 3;
	.category = 7;
	.min = -32767;
	.max = 32768;
	.rmin = 3;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 234, 235 ];
	.related = [ 164, 165, 166 ];
	.shortDescription = "The maximum number of tiles a computer player likes to walk to drop off its food.";

	.id = 164;
	.name = "sn-wood-dropsite-distance";
	.default = 3;
	.category = 10;
	.min = -32767;
	.max = 32768;
	.rmin = 3;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 233 ];
	.related = [ 163, 165, 166 ];
	.shortDescription = "The maximum number of tiles a computer player likes to walk to drop off its wood.";

	.id = 165;
	.name = "sn-stone-dropsite-distance";
	.default = 3;
	.category = 25;
	.min = -32767;
	.max = 32768;
	.rmin = 3;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 238 ];
	.related = [ 163, 164, 166 ];
	.shortDescription = "The maximum number of tiles a computer player likes to walk to drop off its stone.";

	.id = 166;
	.name = "sn-gold-dropsite-distance";
	.default = 3;
	.category = 7;
	.min = -32767;
	.max = 32768;
	.rmin = 3;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 237 ];
	.related = [ 163, 164, 165 ];
	.shortDescription = "The maximum number of tiles a computer player likes to walk to drop off its gold.";

	.id = 167;
	.name = "sn-initial-exploration-required";
	.default = 2;
	.category = 2;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 32, 179, 256 ];
	.related = [ 135, 136 ];
	.shortDescription = "The percentage of the map that must be explored by a computer player before any building is allowed.";

	.id = 168;
	.name = "sn-random-placement-factor";
	.default = 50;
	.category = 50;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "A number that gets added into the placement of the computer player to randomize building placement (off of the calculated ideal).";

	.id = 169;
	.name = "sn-required-forest-tiles";
	.default = 10;
	.category = 10;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 112 ];
	.shortDescription = "The minimum number of forest tiles that a computer player must uncover before placing its first lumber camp.";

	.id = 170;
	.name = "sn-minimum-food";
	.default = 200;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 171, 172, 173 ];
	.shortDescription = "AoE 1 only. The minimum amount of food a computer player likes to keep on hand. Must be &gt;= 0.";

	.id = 171;
	.name = "sn-minimum-wood";
	.default = 250;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 170, 172, 173 ];
	.shortDescription = "AoE 1 only. The minimum amount of wood a computer player likes to keep on hand. Must be &gt;= 0.";

	.id = 172;
	.name = "sn-minimum-stone";
	.default = 150;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 170, 171, 173 ];
	.shortDescription = "AoE 1 only. The minimum amount of stone a computer player likes to keep on hand. Must be &gt;= 0.";

	.id = 173;
	.name = "sn-minimum-gold";
	.default = 200;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 170, 171, 172 ];
	.shortDescription = "AoE 1 only. The minimum amount of gold a computer player likes to keep on hand. Must be &gt;= 0.";

	.id = 174;
	.name = "sn-maximum-houses-before-dropsites";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. The maximum number of Houses that can be built before a dropsite is built. Must be &gt;= 0.";

	.id = 175;
	.name = "sn-specific-build-item-to-build";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = "seems available";
	.version = "1.0c";
	.linked = [ 176 ];
	.related = [];
	.shortDescription = "AoE 1 only. A specific build item that should be inserted into the computer player's list. Must be a valid building ID.";

	.id = 176;
	.name = "sn-specific-build-item-time";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = "seems available";
	.version = "1.0c";
	.linked = [ 175 ];
	.related = [];
	.shortDescription = "AoE 1 only. The time (in minutes) that the sn-specific-build-item-to-build should be inserted into. Must be &gt;= 0.";

	.id = 177;
	.name = "sn-unskippable-item-type";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = "seems available";
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Allows the computer player to not skip a particular item type during building. Must be a valid building ID.";

	.id = 178;
	.name = "sn-attack-diplomacy-impact";
	.default = 10;
	.category = 10;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = "available, except for when teams-locked is disabled";
	.version = "1.0c";
	.linked = [];
	.related = [ 215 ];
	.shortDescription = "The impact (positive or negative) that a computer player injects into his diplomacy system when attacked.";

	.id = 179;
	.name = "sn-percent-half-exploration";
	.default = 30;
	.category = 30;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 167, 32, 256 ];
	.related = [ 135, 136 ];
	.shortDescription = "The percentage of map exploration that allows the computer player to task down to half the number of explorers.";

	.id = 180;
	.name = "sn-auto-build-houses";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether the computer player can decide to build its houses by itself. Must be 0 or 1.";

	.id = 181;
	.name = "sn-upgrade-to-tool-age-asap";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 182, 183 ];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player will abandon all to upgrade to the Tool Age as soon as it becomes available for research. Must be 0 or 1.";

	.id = 182;
	.name = "sn-upgrade-to-bronze-age-asap";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 181, 183 ];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player will abandon all to upgrade to the Bronze Age as soon as it becomes available for research. Must be 0 or 1.";

	.id = 183;
	.name = "sn-upgrade-to-iron-age-asap";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 181, 182 ];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player will abandon all to upgrade to the Iron Age as soon as it becomes available for research. Must be 0 or 1.";

	.id = 184;
	.name = "sn-target-evaluation-time-kill-ratio";
	.default = 20;
	.category = 20;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123 ];
	.related = [];
	.shortDescription = "The amount of influence the time to kill a target has in deciding what to attack.";

	.id = 185;
	.name = "sn-target-evaluation-in-progress";
	.default = 50;
	.category = 50;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 81, 89, 144, 122, 79, 77, 78, 80, 83, 90, 82, 123, 184 ];
	.related = [];
	.shortDescription = "The amount of influence of continuing to attack a target already under attack.";

	.id = 186;
	.name = "sn-coop-demand-tribute-interval";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [ 187 ];
	.related = [];
	.shortDescription = "AoE 1 only. Controls how often the computer player may demand tribute from his computer player allies (in seconds). Must be &gt;= 0.";

	.id = 187;
	.name = "sn-coop-demand-tribute-maximum";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [ 186 ];
	.related = [];
	.shortDescription = "AoE 1 only. Controls the maximum amount a computer player may demand from his computer player allies at any one time. Must be &gt;= 1.";

	.id = 188;
	.name = "sn-attack-winning-player";
	.default = 1;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = "available, but only for 1v1 and Wonder Race games";
	.version = "1.0c";
	.linked = [ 195 ];
	.related = [ 249 ];
	.shortDescription = "Controls whether or not the computer player will attack the winning player (if there is more than one to choose from).";

	.id = 189;
	.name = "unknown-data-189";
	.default = 50;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 190;
	.name = "sn-maximum-food";
	.default = 3000;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 191, 192, 193 ];
	.shortDescription = "AoE 1 only. Controls the maximum amount of food the computer player likes to have on hand. Must be &gt;= 0.";

	.id = 191;
	.name = "sn-maximum-wood";
	.default = 2000;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 190, 192, 193 ];
	.shortDescription = "AoE 1 only. Controls the maximum amount of wood the computer player likes to have on hand. Must be &gt;= 0.";

	.id = 192;
	.name = "sn-maximum-stone";
	.default = 1500;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 190, 191, 193 ];
	.shortDescription = "AoE 1 only. Controls the maximum amount of stone the computer player likes to have on hand. Must be &gt;= 0.";

	.id = 193;
	.name = "sn-maximum-gold";
	.default = 3000;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [ 190, 191, 192 ];
	.shortDescription = "AoE 1 only. Controls the maximum amount of gold the computer player likes to have on hand. Must be &gt;= 0.";

	.id = 194;
	.name = "sn-coop-share-information";
	.default = 1;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 196, 197 ];
	.shortDescription = "Controls whether or not allied computer players share information about what they uncover (this is not like Cartography; instead, it's analogous to two humans chatting).";

	.id = 195;
	.name = "sn-attack-winning-player-factor";
	.default = 25;
	.category = 25;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = "available, but only for 1v1 and Wonder Race games";
	.version = "1.0c";
	.linked = [ 188 ];
	.related = [ 249 ];
	.shortDescription = "The influence the sn-attack-winning-player will have on deciding who to attack if it's set to 1.";

	.id = 196;
	.name = "sn-coop-share-attacking";
	.default = 1;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = "seems available, but only for 1v1 and Wonder Race games";
	.version = "1.0c";
	.linked = [ 197 ];
	.related = [ 194 ];
	.shortDescription = "Controls whether allied computer players can attack to defend each other.";

	.id = 197;
	.name = "sn-coop-share-attacking-interval";
	.default = 120;
	.category = 120;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = "seems available, but only for 1v1 and Wonder Race games";
	.version = "1.0c";
	.linked = [ 196 ];
	.related = [ 194 ];
	.shortDescription = "Controls how often this computer player can ask another for help (in seconds).";

	.id = 198;
	.name = "sn-percentage-explore-exterminators";
	.default = 50;
	.category = 50;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Determines how many of the computer player's soldier explore groups are set as extermination groups. Must be &gt;= 0 and &lt;= 100.";

	.id = 199;
	.name = "unknown-data-199";
	.default = 25;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 200;
	.name = "unknown-data-200";
	.default = 50;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 201;
	.name = "sn-track-player-history";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 105 ];
	.shortDescription = "Decides whether or not a human player's tendencies are tracked or not.";

	.id = 202;
	.name = "sn-minimum-dropsite-buffer";
	.default = 25;
	.category = 25;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 86, 87, 260, 261 ];
	.related = [ 248 ];
	.shortDescription = "Controls how far away a computer player will keep dropsites in relation to enemy town centers.";

	.id = 203;
	.name = "sn-use-by-type-max-gathering";
	.default = 0;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 142, 148, 149 ];
	.shortDescription = "Controls whether or not logical, type-specific gatherer requirements are placed on the quantity of resources gatherers must collect before being allowed to be retasked.";

	.id = 204;
	.name = "sn-minimum-boar-hunt-group-size";
	.default = 5;
	.category = 5;
	.min = -32767;
	.max = 8;
	.rmin = 0;
	.rmax = 8;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 252, 244 ];
	.related = [ 235, 245 ];
	.shortDescription = "The number of villagers a computer player must collect before allowing boars to be hunted for food.";

	.id = 205;
	.name = "sn-auto-build-dropsites";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player decides how and when to build storage pits and granaries. Must be 0 or 1.";

	.id = 206;
	.name = "sn-auto-build-farms";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player can use extra wood to build Farms once all of the build list buildings are constructed. Must be 0 or 1.";

	.id = 207;
	.name = "sn-auto-build-towers";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player can use extra stone to build towers. Must be 0 or 1.";

	.id = 208;
	.name = "sn-auto-build-docks";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player decides how and when to build Docks. Must be 0 or 1.";

	.id = 209;
	.name = "sn-auto-build-fishing-boats";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player decides how and when to build fishing boats. Must be 0 or 1.";

	.id = 210;
	.name = "sn-auto-build-transports";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player decides how and when to build transports. Must be 0 or 1.";

	.id = 211;
	.name = "unknown-data-211";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -32767;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Unused.";

	.id = 212;
	.name = "sn-desired-number-docks";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. How many Docks the computer player wants in a given game. Must be &gt;= 0.";

	.id = 213;
	.name = "sn-desired-number-fishing-boats";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. How many fishing boats the computer player wants in a given game. Must be &gt;= 0.";

	.id = 214;
	.name = "sn-desired-number-transports";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. How many transports the computer player wants in a given game. Must be &gt;= 0.";

	.id = 215;
	.name = "sn-allow-diplomacy-change-on-ally-attack";
	.default = 1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = "seems available, except for when teams-locked is disabled";
	.version = "1.0c";
	.linked = [];
	.related = [ 217, 178 ];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player can change his alliance when attacked by an ally. Must be 0 or 1.";

	.id = 216;
	.name = "sn-minimum-amount-for-trading";
	.default = 50;
	.category = 50;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Controls how much of a resource a computer player must have before using it for trading.";

	.id = 217;
	.name = "sn-allow-diplomacy-change-on-tribute";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = "seems available, except for when teams-locked is disabled";
	.version = "1.0c";
	.linked = [];
	.related = [ 215 ];
	.shortDescription = "AoE 1 only. Controls whether or not the computer player will allow his diplomacy to change when he receives tribute from a player. Must be 0 or 1.";

	.id = 218;
	.name = "sn-easiest-reaction-percentage";
	.default = 100;
	.category = 100;
	.min = 100;
	.max = 100;
	.rmin = 0;
	.rmax = 100;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 219 ];
	.related = [ 229 ];
	.shortDescription = "Sets the effective reaction percentage (of normal LOS) a computer player unit will use in single-player Easiest level scenario or campaign games.";

	.id = 219;
	.name = "sn-easier-reaction-percentage";
	.default = 100;
	.category = 100;
	.min = 100;
	.max = 100;
	.rmin = 0;
	.rmax = 100;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 218 ];
	.related = [ 229 ];
	.shortDescription = "Sets the effective reaction percentage (of normal LOS) a computer player unit will use in single-player easier scenario or campaign games.";

	.id = 220;
	.name = "sn-max-farms";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Caps the number of Farms a computer player will build. Must be &gt;= 0.";

	.id = 221;
	.name = "sn-hits-before-alliance-change";
	.default = 3;
	.category = 3;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = "available, except for when teams-locked is disabled";
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Sets the number of times a computer player will allow his units to be hit by an ally before allowing his diplomacy to be changed.";

	.id = 222;
	.name = "sn-max-towers";
	.default = 10;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = "seems available";
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Caps the number of towers a computer player will build. Must be &gt;= 0. Starts at 0, changed to 10 after some time has elapsed.";

	.id = 223;
	.name = "sn-auto-build-warships";
	.default = -1;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. Determines if the computer player is allowed to decide how and when to build warships. Must be 0 or 1.";

	.id = 224;
	.name = "sn-desired-number-warships";
	.default = 0;
	.category = "AoE 1";
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 0;
	.available = 1;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "AoE 1 only. How many warships the computer player wants in a given game. Must be &gt;= 0.";

	.id = 225;
	.name = "sn-allow-civilian-defense";
	.default = 1;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 3;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ ];
	.related = [ 100, 258 ];
	.shortDescription = "Set to 0 to disable civilian defense, 1 to defend against weak, non-ranged units, 2 for all weak units except warships and units faster than villagers, and 3 for all weak units except warships.";

	.id = 226;
	.name = "sn-number-forward-builders";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "The number of villagers a computer player uses to build outside of an enemy town. Forward builders refer specifically to those villagers that must board a Transport to cross over water that cannot otherwise be pathed, either because players are on islands, or because other forms of access have been walled-off. It is not necessary to specify forward builders, unless the villagers need to board a Transport.";

	.id = 227;
	.name = "sn-percent-attack-soldiers";
	.default = 75;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 228, 36, 247 ];
	.shortDescription = "Sets the percentage of defense soldiers that will be sent into battle (modified for difficulty level) the next time attack-now is issued. All newly created soldiers are defense soldiers by default, and will remain defense soldiers until attack-now is issued. For example, if 10 soldiers were defending a town, and sn-percent-attack-soldiers was set to 50, then 5 soldiers will form an attack group and attack. This SN only needs to be set once, but it can be changed as needed. sn-percent-attack-soldiers works best when not using sn-number-defend-groups.";

	.id = 228;
	.name = "sn-percent-attack-boats";
	.default = 75;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 227, 58, 247 ];
	.shortDescription = "Sets the percentage of defense boats that will be sent into battle (modified for difficulty level) the next time attack-now is issued. All newly created boats are defense boats by default, and will remain defense boats until attack-now is issued. Both attack soldiers and attack boats will attack when attack-now is issued. This SN only needs to be set once, but it can be changed as needed.";

	.id = 229;
	.name = "sn-do-not-scale-for-difficulty-level";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 218, 219 ];
	.shortDescription = "Disables the automatic difficulty-scaling. See Level of Difficulty - Random Map Game. Default = 0.";

	.id = 230;
	.name = "sn-group-form-distance";
	.default = 20;
	.category = 20;
	.min = -32767;
	.max = 30;
	.rmin = 0;
	.rmax = 30;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Sets the distance over which attack soldiers will group. Set this value high if buildings that train military units are far apart.";

	.id = 231;
	.name = "sn-ignore-attack-group-under-attack";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to specify that defensive units should ignore attack groups under attack.";

	.id = 232;
	.name = "sn-gather-defense-units";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 239, 143 ];
	.shortDescription = "Set to 1 to send units to defend buildings under construction.";

	.id = 233;
	.name = "sn-maximum-wood-drop-distance";
	.default = -1;
	.category = -1;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 164 ];
	.related = [ 234, 235, 236, 237, 238 ];
	.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be).";

	.id = 234;
	.name = "sn-maximum-food-drop-distance";
	.default = -1;
	.category = -1;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 163, 235, 236 ];
	.related = [ 233, 237, 238 ];
	.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be).";

	.id = 235;
	.name = "sn-maximum-hunt-drop-distance";
	.default = -1;
	.category = -1;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 234, 236 ];
	.related = [ 204, 252, 244, 245, 233, 237, 238 ];
	.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be).";

	.id = 236;
	.name = "sn-maximum-fish-boat-drop-distance";
	.default = -1;
	.category = -1;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = "available, except for water maps, however if the value will always be large enough, it should be fine";
	.version = "1.0c";
	.linked = [ 234, 235 ];
	.related = [ 233, 237, 238 ];
	.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). If set to 0, all fishing ships will explore the water.";

	.id = 237;
	.name = "sn-maximum-gold-drop-distance";
	.default = -1;
	.category = -1;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 166 ];
	.related = [ 233, 234, 235, 236, 238 ];
	.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be).";

	.id = 238;
	.name = "sn-maximum-stone-drop-distance";
	.default = -1;
	.category = -1;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [ 165 ];
	.related = [ 233, 234, 235, 236, 237 ];
	.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). By setting the parameters to the appropriate value it is possible to avoid having villagers walk all over the map to gather resources.";

	.id = 239;
	.name = "sn-gather-idle-soldiers-at-center";
	.default = -1;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.0c";
	.linked = [];
	.related = [ 232 ];
	.shortDescription = "When set to 1, it will &quot;move&quot; the town defense gather point to the &quot;center&quot; (randomized +-6 tiles) of the map. No provision is made if the center is in an unreachable spot. When it's set, all idle and retreating units will try to go to the center. Useful for King of the Hill and similar variants to get the CP to group near the middle.";

	.id = 240;
	.name = "sn-garrison-rams";
	.default = 1;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = "available, if you will not create rams";
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 0 to turn off. When on, the CP AI tries (but doesn't always succeed) to put infantry units into rams before the attack group departs.";

	.id = 241;
	.name = "sn-do-not-transport-from-same-zone";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = "available, except for water maps requiring transport ships";
	.version = "1.0c";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to influence transport ship behavior.";

	.id = 242;
	.name = "sn-enable-new-building-system";
	.default = 0;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 243 ];
	.shortDescription = "Set to 1 only once to request the new building system, featuring simultaneous construction and cancellation control.";

	.id = 243;
	.name = "sn-percent-building-cancellation";
	.default = 100;
	.category = 25;
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 100;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 242 ];
	.shortDescription = "Set to the maximum allowable completion percentage for building cancellation.";

	.id = 244;
	.name = "sn-enable-boar-hunting";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 2;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 204, 252 ];
	.related = [ 235, 245 ];
	.shortDescription = "Set to 1 to target deer and boar; if it's set to 2, deer will be ignored.";

	.id = 245;
	.name = "sn-minimum-number-hunters";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 204, 252, 235, 244 ];
	.shortDescription = "Set to force hunting. For best results when hunting boar, set this in conjunction with sn-minimum-boar-hunt-group-size.";

	.id = 246;
	.name = "sn-object-repair-level";
	.default = 16387;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32767;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Add bit flags together to generate a value: 0 = wonder; 1 = castle, monastery; 2 = town-center; 4 = barracks; 8 = archery-range; 16 = stable; 32 = siege-workshop; 64 = dock; 128 = market; 256 = university; 512 = blacksmith; 1024 = lumber-camp, mining-camp, mill; 2048 = house; 4096 = towers; 8192 = walls and gates; 16384 = siege weapons. For scenarios and campaigns, the default is 1 for compatibility.";

	.id = 247;
	.name = "sn-enable-patrol-attack";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 227, 228, 36, 58 ];
	.shortDescription = "Set to 1 to enable the patrol-style local targeting system. When attacking a distant target, this causes units to retarget against nearby sighted units immediately instead of waiting until they are in proximity to the original target.";

	.id = 248;
	.name = "sn-dropsite-separation-distance";
	.default = 10;
	.category = 3;
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 86, 87, 260, 261 ];
	.related = [ 202, 272 ];
	.shortDescription = "Set to suggest the minimum distance between dropsites. Higher values can be useful for an escape camp when gatherers are under attack.";

	.id = 249;
	.name = "sn-target-player-number";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 8;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 188, 195, 250, 251 ];
	.shortDescription = "Set to the number of the player that should be targeted for attack. If this sn is set to -1, initiating an attack will instead provide assistance to allies. When set to 0, sn-attack-winning-player will determine the target. Setting this to a player that cannot be attacked (an ally or the AI itself) will result in undefined behavior. You can also use this value with the &quot;target-player&quot; identifier in facts and actions.";

	.id = 250;
	.name = "sn-safe-town-size";
	.default = 255;
	.category = 40;
	.min = -32767;
	.max = 32768;
	.rmin = 1;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 74, 73 ];
	.related = [ 249, 255 ];
	.shortDescription = "If an enemy building is inside both sn-maximum-town-size and the region specified by this sn, it will be targeted by defensive units. If the building is inside sn-maximum-town-size, but outside this region, it will be targeted only if it belongs to the player specified by sn-target-player-number.";

	.id = 251;
	.name = "sn-focus-player-number";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 8;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 249 ];
	.shortDescription = "Set to any player number in order to use the &quot;focus-player&quot; identifier in facts and actions.";

	.id = 252;
	.name = "sn-minimum-boar-lure-group-size";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 8;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 204, 244 ];
	.related = [ 235, 245 ];
	.shortDescription = "Set to the number of villagers that will be sent in the initial boar luring group.";

	.id = 253;
	.name = "sn-preferred-mill-placement";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 2;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 0 for forage, 1 for deer, or 2 for shore fish.";

	.id = 254;
	.name = "sn-enable-offensive-priority";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 267 ];
	.shortDescription = "Set to 1 to enable attack-now and attack groups to target using the priorities set by up-set-offense-priority.";

	.id = 255;
	.name = "sn-building-targeting-mode";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 2;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 74, 73 ];
	.related = [ 249, 250, 262 ];
	.shortDescription = "Set to 0 to target all buildings, 1 to ignore walls and gates, or 2 to ignore walls, gates, and dropsites. Please avoid this strategic number, as you may experience targeting failures under certain circumstances.";

	.id = 256;
	.name = "sn-home-exploration-time";
	.default = 300;
	.category = 300;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 32768;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ ];
	.related = [ 167, 32, 179 ];
	.shortDescription = "Set to the maximum amount of time, in seconds, that should be dedicated to exploring the home town center region.";

	.id = 257;
	.name = "sn-number-civilian-militia";
	.default = 10;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 200;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 258 ];
	.related = [ ];
	.shortDescription = "Set to the maximum number of villagers who may be used to attack the enemy.";

	.id = 258;
	.name = "sn-allow-civilian-offense";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 2;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 257 ];
	.related = [ 225 ];
	.shortDescription = "Set to 1 to allow villagers to participate as soldiers in town-size attacks. If set to 2, villagers will target enemy villagers and buildings even if defensive military units are available. If set to 0, villagers will only be sent to attack enemy forward towers, without murder holes.";

	.id = 259;
	.name = "sn-preferred-trade-distance";
	.default = 100;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 255;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to the preferred distance between local and remote trade buildings.";

	.id = 260;
	.name = "sn-lumber-camp-max-distance";
	.default = 0;
	.category = 25;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 86, 261, 248, 202 ];
	.related = [ 87, 74, 73 ];
	.shortDescription = "Sets the maximum-town-size for lumber-camp placement, when non-zero. If set to 0, sn-camp-max-distance will be used instead.";

	.id = 261;
	.name = "sn-mining-camp-max-distance";
	.default = 0;
	.category = 25;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 86, 260, 248, 202 ];
	.related = [ 87, 74, 73 ];
	.shortDescription = "Sets the maximum-town-size for mining-camp placement, when non-zero. If set to 0, sn-camp-max-distance will be used instead.";

	.id = 262;
	.name = "sn-wall-targeting-mode";
	.default = 0;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 255 ];
	.shortDescription = "Set to 1 to allow military units to automatically target nearby walls and gates. If set to 0, they will likely be ignored.";

	.id = 263;
	.name = "sn-livestock-to-town-center";
	.default = 0;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to require livestock, such as sheep, to gather at the town center. If set to 0, they will gather at mills, as well.";

	.id = 264;
	.name = "sn-enable-training-queue";
	.default = 0;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to allow an additional unit to be queued at each building. If set to 0, buildings will train one unit at a time.";

	.id = 265;
	.name = "sn-ignore-tower-elevation";
	.default = 0;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to ignore elevation when placing towers. If set to 0, the AI will try to seek elevation advantage.";

	.id = 266;
	.name = "sn-town-center-placement";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 899;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 86, 87 ];
	.shortDescription = "Set to the building type to emulate for town center placement. If set to 0, the town center will be placed as usual.";

	.id = 267;
	.name = "sn-disable-tower-priority";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 254 ];
	.shortDescription = "Set to 1 to prevent the local targeting system from giving special priority to towers and other fortifications, including town centers and castles. If set to 0, these buildings will receive the usual special priority.";

	.id = 268;
	.name = "sn-placement-zone-size";
	.default = 20;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 255;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 269, 270 ];
	.related = [ 73, 74 ];
	.shortDescription = "Set to the size of the tile zone used for forward and controlled building placement. All build commands store this value and the up-set-placement-data information with each successful call. For every pass that a building cannot be placed, its zone size will be increased from this starting point.";

	.id = 269;
	.name = "sn-placement-fail-delta";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -10;
	.rmax = 10;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 268, 270 ];
	.related = [ 73, 74 ];
	.shortDescription = "Set to the value that will be added to the placement distance set by up-set-placement-data for every pass that a building cannot be placed.";

	.id = 270;
	.name = "sn-placement-to-center";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 268, 269 ];
	.related = [ 73, 74, 249, 188 ];
	.shortDescription = "Set to 1 to force place-control to use the map center as the second point of reference for placement. The first point of reference is set with up-set-placement-data. If set to 0, the active target enemy's nearest building will become the second point of reference instead, once discovered. If sn-target-player-number is 0, the target enemy will be determined by sn-attack-winning-player.";

	.id = 271;
	.name = "sn-disable-attack-groups";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 277 ];
	.related = [ 36, 26, 16 ];
	.shortDescription = "Set to 1 to disable automatic attack group targeting. Once groups are created, they can be used for defensive attack purposes using TSA. If set to 0, attack groups will perform offensive targeting as usual.";

	.id = 272;
	.name = "sn-allow-adjacent-dropsites";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 248 ];
	.shortDescription = "Set to 1 to eliminate the standard requirement for a 1 tile buffer around mills, lumber camps, and mining camps. If set to 0, the 1 tile buffer is enforced as usual.";

	.id = 273;
	.name = "sn-defer-dropsite-update";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to defer the dropsite-min-distance update until construction is complete. If set to 0, the dropsite update occurs when the building is placed on the map.";

	.id = 274;
	.name = "sn-maximum-garrison-fill";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 20;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 275 ];
	.related = [];
	.shortDescription = "Set to the number of units to fill into each garrison target per command. If set to 0, this limit is removed.";

	.id = 275;
	.name = "sn-number-garrison-units";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 40;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 274 ];
	.related = [];
	.shortDescription = "Set to the number of units that will garrison per command. If set to 0, it will default to the maximum of 40.";

	.id = 276;
	.name = "sn-filter-under-attack";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 2;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 or 2 to filter retreat commands to only those units that are under attack. When this is 2, units near threatened units will also be retreated, which may be computationally expensive. If set to 0, the filter is disabled.";

	.id = 277;
	.name = "sn-disable-defend-groups";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 15;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 271 ];
	.related = [];
	.shortDescription = "Append flags to disable various defense systems: 1 to disable the defensive (TSA) targeting system, 2 to disable assistance inside sn-safe-town-size, 4 to disable assistance between sn-safe-town-size and sn-maximum-town-size, 8 to disable assistance outside sn-maximum-town-size. When assistance is disabled, please be aware that your units will only respond to attackers within their individual line of sight. If set to 0, units will respond to threats in town as usual.";

	.id = 278;
	.name = "sn-dock-placement-mode";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -1;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 279, 280, 281 ];
	.shortDescription = "Set to 1 to prefer placement toward the front, -1 to prefer placement toward the back, or 0 for standard placement.";

	.id = 279;
	.name = "sn-dock-proximity-factor";
	.default = 10000;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -10000;
	.rmax = 10000;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 280 ];
	.related = [ 278 ];
	.shortDescription = "Set to the proximity factor for docks to be placed relative to one another. Positive values prefer more distance, while negative values prefer less distance.";

	.id = 280;
	.name = "sn-dock-avoidance-factor";
	.default = 1000;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = -10000;
	.rmax = 10000;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 279 ];
	.related = [ 278 ];
	.shortDescription = "Set to the avoidance factor for docks in the same zone (body of water). Positive values avoid placement in the same zone, while negative values prefer it.";

	.id = 281;
	.name = "sn-dock-training-filter";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 2;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [ 278 ];
	.shortDescription = "Set to 1 or 2 to enable the intelligent dock training filter. This will prevent docks from training ships that would likely be useless in their body of water. If set to 1, docks will continue to train in seas that no longer contain recently sighted targets, while 2 will block training. If set to 0, docks will train units without additional consideration.";

	.id = 282;
	.name = "sn-free-siege-targeting";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 3;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Add bit flags together to generate a value: 1 = trebuchet; 2 = cannon-galleon. Set a flag for a unit to enable free offensive targeting with attack-now or attack groups. This may result in the targeting of units other than buildings. If set to 0, non-buildings will be ignored unless units must respond due to sn-enemy-sighted-response-distance.";

	.id = 283;
	.name = "sn-warship-targeting-mode";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 2;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to cause warships to target based on the unit with the shortest range in the group against fortifications. Set to 2 to eliminate the range check. If set to 0, warship groups will target based on the unit with the longest range.";

	.id = 284;
	.name = "sn-disable-sighted-response-cap";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [ 19, 20 ];
	.related = [];
	.shortDescription = "Set to 1 to eliminate the cap of 50 on sn-enemy-sighted-response-distance. If set to 0, the cap will remain in effect for changes to sn-enemy-sighted-response-distance.";

	.id = 285;
	.name = "sn-disable-builder-assistance";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to prevent builders from assisting on nearby foundations after their work is complete. If set to 0, they will assist as usual.";

	.id = 286;
	.name = "sn-local-targeting-mode";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 2;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to prioritize attack bonuses and overall damage per hit. If set to 2, units will prioritize targets with high base pierce armor, such as rams; otherwise, they will target as usual. The offensive priority value of a target (-1 to 11) is added to the weight for modes 1 and 2, as well. If set to 0, units will target as usual.";

	.id = 287;
	.name = "sn-livestock-defend-priority";
	.default = 0;
	.category = 1;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.1";
	.linked = [];
	.related = [50, 56, 70, 52, 51, 55, 54, 53];
	.shortDescription = "Set to 1 to allow sheep into the targetable sighted objects list.";

	.id = 288;
	.name = "sn-number-tasked-units";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 40;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.5";
	.linked = [];
	.related = [];
	.shortDescription = "Set to the number of units to require per group tasked by up-target-objects or up-target-point. The last group sent by a command may not reach the minimum required number. It's possible that no units will be sent to some of the last remote targets. If set to 0, units will be spread in order to ensure balanced group sizes to all remote targets.";

	.id = 291;
	.name = "sn-disable-villager-garrison";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 3;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.5";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 3 to prevent villagers from auto-garrisoning for any reason. If set to 2, gaia is ignored and villagers will only garrison for enemy attacks if they can enter a town center. If set to 1, gaia is ignored and villagers will garrison for any enemy attacks. If set to 0, villagers will garrison as usual.";

	.id = 292;
	.name = "sn-target-point-adjustment";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 6;
	.network = 0;
	.defined = 1;
	.available = 0;
	.version = "1.5";
	.linked = [];
	.related = [];
	.shortDescription = "Set to adjust the tile positioning of up-target-point toward 1:left, 2:top, 3:right, 4:bottom, 5:middle, 6:precise. If set to 0, actions will be directed to the absolute left-most point of a tile. If set to precise, you must directly pass a valid precise point goal pair (point x100 for precision) to up-target-point.";

	.id = 293;
	.name = "sn-unexplored-construction";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.5";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to allow the AI to construct buildings on unexplored tiles. If set to 0, the AI will have to directly explore tiles in order to build there as usual. Please do not enable this without #load-if-not-defined REVEAL-NORMAL.";

	.id = 294;
	.name = "sn-disable-trade-evasion";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 1;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.5";
	.linked = [];
	.related = [];
	.shortDescription = "Set to 1 to prevent trade carts from abandoning their gold and trade route in order to evade attackers. If set to 0, trade carts will attempt to evade attackers as usual.";

	.id = 295;
	.name = "sn-boar-lure-destination";
	.default = 0;
	.category = 0;
	.min = -32767;
	.max = 32768;
	.rmin = 0;
	.rmax = 23;
	.network = 1;
	.defined = 1;
	.available = 0;
	.version = "1.5";
	.linked = [];
	.related = [];
	.shortDescription = "Set to a <a href='http://i.imgur.com/GHXNTXU.png' target='_blank'>value from this image</a> to adjust the boar lure destination at the town center. Add 12 to the normal value (0 to 11) to shift the point down to the grid corner. If set to 0, lurers will attempt to reach the center tile of the town center.";

	*/







function commandsFilter() {
	// Declare variables
	var input, filter, table, tr, tdName, tdType, tdVersion, i, txtValue;
	input = document.getElementById("commandsInput");
	category = document.getElementById("commandCategory");
	type = document.getElementById("command-type");
	version = document.getElementById("command-version");
	filter = input.value.toUpperCase();
	table = document.getElementById("index-table");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		tdName = tr[i].getElementsByTagName("td")[0];
		tdType = tr[i].getElementsByTagName("td")[2];
		tdVersion = tr[i].getElementsByTagName("td")[3];

		if (tdName) {
			txtValue = tdName.textContent || tdName.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1 && tdType) {
				txtValue = tdType.textContent || tdType.innerText;
				if(tdVersion && (type.value == "All" || txtValue == type.value || txtValue == "Both")) {
					txtValue = tdVersion.textContent || tdVersion.innerText;
					if(version.value == "All" || txtValue == version.value) {
						tr[i].style.display = "";
					}
					else {
						tr[i].style.display = "none";
					}
				}
				else {
					tr[i].style.display = "none";
				}
			}
			else {
				tr[i].style.display = "none";
			}
		}
	}
}

function parametersFilter() {
	// Declare variables
	var input, filter, table, tr, tdName, tdVersion, i, txtValue;
	input = document.getElementById("parametersInput");
	version = document.getElementById("parameter-version");
	filter = input.value.toUpperCase();
	table = document.getElementById("index-table");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		tdName = tr[i].getElementsByTagName("td")[0];
		tdVersion = tr[i].getElementsByTagName("td")[2];
		if (tdName) {
			txtValue = tdName.textContent || tdName.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				txtValue = tdVersion.textContent || tdVersion.innerText;
				if(version.value == "All" || txtValue == version.value) {
					tr[i].style.display = "";
				}
				else {
					tr[i].style.display = "none";
				}
			}
			else {
				tr[i].style.display = "none";
			}
		}
	}
}