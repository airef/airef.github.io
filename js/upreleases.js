var releaseVersions = [1.5, 1.4, 1.3, 1.2, 1.1];
var releaseYears = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];
var releaseMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
		this.relatedSNs = [];
		this.commandCategory = [];
		this.complexity = [];
		this.example = "";
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
	constructor() {
		this.snName = "";
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
var cUpAddCostData = new Command("up-add-cost-data","Action","UP");
var cUpAddObjectById = new Command("up-add-object-by-id","Both","UP");
var cUpAddObjectCost = new Command("up-add-object-cost","Action","UP");
var cUpAddPoint = new Command("up-add-point","Action","UP");
var cUpAddResearchCost = new Command("up-add-research-cost","Action","UP");
var cUpAlliedGoal = new Command("up-allied-goal","Fact","UP");
var cUpAlliedResourceAmount = new Command("up-allied-resource-amount","Fact","UP");
var cUpAlliedResourcePercent = new Command("up-allied-resource-percent","Fact","UP");
var cUpAlliedSn = new Command("up-allied-sn","Fact","UP");
var cUpAssignBuilders = new Command("up-assign-builders","Action","UP");
var cUpAttackerClass = new Command("up-attacker-class","Fact","UP");
var cUpBoundPoint = new Command("up-bound-point","Action","UP");
var cUpBoundPrecisePoint = new Command("up-bound-precise-point","Action","UP");
var cUpBuild = new Command("up-build","Action","UP");
var cUpBuildLine = new Command("up-build-line","Action","UP");
var cUpBuildingTypeInTown = new Command("up-building-type-in-town","Fact","UP");
var cUpBuyCommodity = new Command("up-buy-commodity","Action","UP");
var cUpCanBuild = new Command("up-can-build","Fact","UP");
var cUpCanBuildLine = new Command("up-can-build-line","Fact","UP");
var cUpCanResearch = new Command("up-can-research","Fact","UP");
var cUpCanSearch = new Command("up-can-search","Fact","UP");
var cUpCanTrain = new Command("up-can-train","Fact","UP");
var cUpCcAddResource = new Command("up-cc-add-resource","Action","UP");
var cUpCcSendCheat = new Command("up-cc-send-cheat","Action","UP");
var cUpChangeName = new Command("up-change-name","Action","UP");
var cUpChatDataToAll = new Command("up-chat-data-to-all","Action","UP");
var cUpChatDataToPlayer = new Command("up-chat-data-to-player","Action","UP");
var cUpChatDataToSelf = new Command("up-chat-data-to-self","Action","UP");
var cUpCleanSearch = new Command("up-clean-search","Action","UP");
var cUpCompareConst = new Command("up-compare-const","Fact","UP");
var cUpCompareFlag = new Command("up-compare-flag","Fact","UP");
var cUpCompareGoal = new Command("up-compare-goal","Fact","UP");
var cUpCompareSn = new Command("up-compare-sn","Fact","UP");
var cUpCompareText = new Command("up-compare-text","Fact","UP");
var cUpCopyPoint = new Command("up-copy-point","Action","UP");
var cUpCreateGroup = new Command("up-create-group","Action","UP");
var cUpCrossTiles = new Command("up-cross-tiles","Action","UP");
var cUpDefenderCount = new Command("up-defender-count","Fact","UP");
var cUpDeleteDistantFarms = new Command("up-delete-distant-farms","Action","UP");
var cUpDeleteIdleUnits = new Command("up-delete-idle-units","Action","UP");
var cUpDeleteObjects = new Command("up-delete-objects","Action","UP");
var cUpDisbandGroupType = new Command("up-disband-group-type","Action","UP");
var cUpDropResources = new Command("up-drop-resources","Action","UP");
var cUpEnemyBuildingsInTown = new Command("up-enemy-buildings-in-town","Fact","UP");
var cUpEnemyUnitsInTown = new Command("up-enemy-units-in-town","Fact","UP");
var cUpEnemyVillagersInTown = new Command("up-enemy-villagers-in-town","Fact","UP");
var cUpFilterDistance = new Command("up-filter-distance","Action","UP");
var cUpFilterExclude = new Command("up-filter-exclude","Action","UP");
var cUpFilterGarrison = new Command("up-filter-garrison","Action","UP");
var cUpFilterInclude = new Command("up-filter-include","Action","UP");
var cUpFilterRange = new Command("up-filter-range","Action","UP");
var cUpFilterStatus = new Command("up-filter-status","Action","UP");
var cUpFindFlare = new Command("up-find-flare","Action","UP");
var cUpFindLocal = new Command("up-find-local","Both","UP");
var cUpFindNextPlayer = new Command("up-find-next-player","Action","UP");
var cUpFindPlayer = new Command("up-find-player","Action","UP");
var cUpFindPlayerFlare = new Command("up-find-player-flare","Action","UP");
var cUpFindRemote = new Command("up-find-remote","Both","UP");
var cUpFindResource = new Command("up-find-resource","Both","UP");
var cUpFindStatusLocal = new Command("up-find-status-local","Both","UP");
var cUpFindStatusRemote = new Command("up-find-status-remote","Both","UP");
var cUpFullResetSearch = new Command("up-full-reset-search","Action","UP");
var cUpGaiaTypeCount = new Command("up-gaia-type-count","Fact","UP");
var cUpGaiaTypeCountTotal = new Command("up-gaia-type-count-total","Fact","UP");
var cUpGarrison = new Command("up-garrison","Action","UP");
var cUpGatherInside = new Command("up-gather-inside","Action","UP");
var cUpGetAttackerClass = new Command("up-get-attacker-class","Action","UP");
var cUpGetCostDelta = new Command("up-get-cost-delta","Action","UP");
var cUpGetEvent = new Command("up-get-event","Action","UP");
var cUpGetFact = new Command("up-get-fact","Both","UP");
var cUpGetFactMax = new Command("up-get-fact-max","Both","UP");
var cUpGetFactMin = new Command("up-get-fact-min","Both","UP");
var cUpGetFactSum = new Command("up-get-fact-sum","Both","UP");
var cUpGetFocusFact = new Command("up-get-focus-fact","Both","UP");
var cUpGetGroupSize = new Command("up-get-group-size","Action","UP");
var cUpGetGuardState = new Command("up-get-guard-state","Action","UP");
var cUpGetIndirectGoal = new Command("up-get-indirect-goal","Action","UP");
var cUpGetObjectData = new Command("up-get-object-data","Both","UP");
var cUpGetObjectTargetData = new Command("up-get-object-target-data","Both","UP");
var cUpGetObjectTypeData = new Command("up-get-object-type-data","Action","UP");
var cUpGetPathDistance = new Command("up-get-path-distance","Action","UP");
var cUpGetPlayerColor = new Command("up-get-player-color","Action","UP");
var cUpGetPlayerFact = new Command("up-get-player-fact","Both","UP");
var cUpGetPoint = new Command("up-get-point","Action","UP");
var cUpGetPointContains = new Command("up-get-point-contains","Both","UP");
var cUpGetPointDistance = new Command("up-get-point-distance","Action","UP");
var cUpGetPointElevation = new Command("up-get-point-elevation","Action","UP");
var cUpGetPointTerrain = new Command("up-get-point-terrain","Action","UP");
var cUpGetPointZone = new Command("up-get-point-zone","Action","UP");
var cUpGetPreciseTime = new Command("up-get-precise-time","Action","UP");
var cUpGetProjectilePlayer = new Command("up-get-projectile-player","Action","UP");
var cUpGetRuleId = new Command("up-get-rule-id","Action","UP");
var cUpGetSearchState = new Command("up-get-search-state","Action","UP");
var cUpGetSharedGoal = new Command("up-get-shared-goal","Action","UP");
var cUpGetSignal = new Command("up-get-signal","Action","UP");
var cUpGetTargetFact = new Command("up-get-target-fact","Both","UP");
var cUpGetThreatData = new Command("up-get-threat-data","Action","UP");
var cUpGetTimer = new Command("up-get-timer","Action","UP");
var cUpGetUpgradeId = new Command("up-get-upgrade-id","Action","UP");
var cUpGetVictoryData = new Command("up-get-victory-data","Action","UP");
var cUpGetVictoryLimit = new Command("up-get-victory-limit","Action","UP");
var cUpGroupSize = new Command("up-group-size","Fact","UP");
var cUpGuardUnit = new Command("up-guard-unit","Action","UP");
var cUpIdleUnitCount = new Command("up-idle-unit-count","Fact","UP");
var cUpJumpDirect = new Command("up-jump-direct","Action","UP");
var cUpJumpDynamic = new Command("up-jump-dynamic","Action","UP");
var cUpJumpRule = new Command("up-jump-rule","Action","UP");
var cUpLerpPercent = new Command("up-lerp-percent","Action","UP");
var cUpLerpTiles = new Command("up-lerp-tiles","Action","UP");
var cUpLogData = new Command("up-log-data","Action","UP");
var cUpModifyEscrow = new Command("up-modify-escrow","Action","UP");
var cUpModifyFlag = new Command("up-modify-flag","Action","UP");
var cUpModifyGoal = new Command("up-modify-goal","Both","UP");
var cUpModifyGroupFlag = new Command("up-modify-group-flag","Action","UP");
var cUpModifySn = new Command("up-modify-sn","Action","UP");
var cUpObjectData = new Command("up-object-data","Fact","UP");
var cUpObjectTargetData = new Command("up-object-target-data","Fact","UP");
var cUpObjectTypeCount = new Command("up-object-type-count","Fact","UP");
var cUpObjectTypeCountTotal = new Command("up-object-type-count-total","Fact","UP");
var cUpPathDistance = new Command("up-path-distance","Fact","UP");
var cUpPendingObjects = new Command("up-pending-objects","Fact","UP");
var cUpPendingPlacement = new Command("up-pending-placement","Fact","UP");
var cUpPlayerDistance = new Command("up-player-distance","Fact","UP");
var cUpPlayersInGame = new Command("up-players-in-game","Fact","UP");
var cUpPointContains = new Command("up-point-contains","Fact","UP");
var cUpPointDistance = new Command("up-point-distance","Fact","UP");
var cUpPointElevation = new Command("up-point-elevation","Fact","UP");
var cUpPointExplored = new Command("up-point-explored","Fact","UP");
var cUpPointTerrain = new Command("up-point-terrain","Fact","UP");
var cUpPointZone = new Command("up-point-zone","Fact","UP");
var cUpProjectileDetected = new Command("up-projectile-detected","Fact","UP");
var cUpProjectileTarget = new Command("up-projectile-target","Fact","UP");
var cUpReleaseEscrow = new Command("up-release-escrow","Action","UP");
var cUpRemainingBoarAmount = new Command("up-remaining-boar-amount","Fact","UP");
var cUpRemoveObjects = new Command("up-remove-objects","Action","UP");
var cUpRequestHunters = new Command("up-request-hunters","Action","UP");
var cUpResearch = new Command("up-research","Action","UP");
var cUpResearchStatus = new Command("up-research-status","Fact","UP");
var cUpResetAttackNow = new Command("up-reset-attack-now","Action","UP");
var cUpResetBuilding = new Command("up-reset-building","Action","UP");
var cUpResetCostData = new Command("up-reset-cost-data","Action","UP");
var cUpResetFilters = new Command("up-reset-filters","Action","UP");
var cUpResetGroup = new Command("up-reset-group","Action","UP");
var cUpResetPlacement = new Command("up-reset-placement","Action","UP");
var cUpResetScouts = new Command("up-reset-scouts","Action","UP");
var cUpResetSearch = new Command("up-reset-search","Action","UP");
var cUpResetTargetPriorities = new Command("up-reset-target-priorities","Action","UP");
var cUpResetUnit = new Command("up-reset-unit","Action","UP");
var cUpResourceAmount = new Command("up-resource-amount","Fact","UP");
var cUpResourcePercent = new Command("up-resource-percent","Fact","UP");
var cUpRetaskGatherers = new Command("up-retask-gatherers","Action","UP");
var cUpRetreatNow = new Command("up-retreat-now","Action","UP");
var cUpRetreatTo = new Command("up-retreat-to","Action","UP");
var cUpSellCommodity = new Command("up-sell-commodity","Action","UP");
var cUpSendFlare = new Command("up-send-flare","Action","UP");
var cUpSendScout = new Command("up-send-scout","Action","UP");
var cUpSetAttackStance = new Command("up-set-attack-stance","Action","UP");
var cUpSetDefensePriority = new Command("up-set-defense-priority","Action","UP");
var cUpSetEvent = new Command("up-set-event","Action","UP");
var cUpSetGroup = new Command("up-set-group","Action","UP");
var cUpSetIndirectGoal = new Command("up-set-indirect-goal","Action","UP");
var cUpSetOffensePriority = new Command("up-set-offense-priority","Action","UP");
var cUpSetPlacementData = new Command("up-set-placement-data","Action","UP");
var cUpSetPreciseTargetPoint = new Command("up-set-precise-target-point","Action","UP");
var cUpSetSharedGoal = new Command("up-set-shared-goal","Action","UP");
var cUpSetSignal = new Command("up-set-signal","Action","UP");
var cUpSetTargetById = new Command("up-set-target-by-id","Both","UP");
var cUpSetTargetObject = new Command("up-set-target-object","Both","UP");
var cUpSetTargetPoint = new Command("up-set-target-point","Action","UP");
var cUpSetTimer = new Command("up-set-timer","Action","UP");
var cUpSetupCostData = new Command("up-setup-cost-data","Action","UP");
var cUpStoreMapName = new Command("up-store-map-name","Action","UP");
var cUpStoreObjectName = new Command("up-store-object-name","Action","UP");
var cUpStorePlayerChat = new Command("up-store-player-chat","Action","UP");
var cUpStorePlayerName = new Command("up-store-player-name","Action","UP");
var cUpStoreTechName = new Command("up-store-tech-name","Action","UP");
var cUpStoreText = new Command("up-store-text","Action","UP");
var cUpStoreTypeName = new Command("up-store-type-name","Action","UP");
var cUpTargetObjects = new Command("up-target-objects","Action","UP");
var cUpTargetPoint = new Command("up-target-point","Action","UP");
var cUpTimerStatus = new Command("up-timer-status","Fact","UP");
var cUpTrain = new Command("up-train","Action","UP");
var cUpTrainSiteReady = new Command("up-train-site-ready","Fact","UP");
var cUpTributeToPlayer = new Command("up-tribute-to-player","Action","UP");
var cUpUngarrison = new Command("up-ungarrison","Action","UP");
var cUpUnitTypeInTown = new Command("up-unit-type-in-town","Fact","UP");
var cUpUpdateTargets = new Command("up-update-targets","Action","UP");
var cUpVillagerTypeInTown = new Command("up-villager-type-in-town","Fact","UP");
var cFeCcEffectAmount = new Command("fe-cc-effect-amount","Action","DE");
var cFeCcEffectPercent = new Command("fe-cc-effect-percent","Action","DE");

var commandsArray = [cAcknowledgeEvent, cAcknowledgeTaunt, cAttackNow, cAttackSoldierCount, cAttackWarboatCount, cBuild, cBuildForward, cBuildGate, cBuildWall, cBuildingAvailable, cBuildingCount, cBuildingCountTotal, cBuildingTypeCount, cBuildingTypeCountTotal, cBuyCommodity, cCanAffordBuilding, cCanAffordCompleteWall, cCanAffordResearch, cCanAffordUnit, cCanBuild, cCanBuildWithEscrow, cCanBuildGate, cCanBuildGateWithEscrow, cCanBuildWall, cCanBuildWallWithEscrow, cCanBuyCommodity, cCanResearch, cCanResearchWithEscrow, cCanSellCommodity, cCanSpy, cCanSpyWithEscrow, cCanTrain, cCanTrainWithEscrow, cCcAddResource, cCcPlayersBuildingCount, cCcPlayersBuildingTypeCount, cCcPlayersUnitCount, cCcPlayersUnitTypeCount, cChatLocal, cChatLocalToSelf, cChatLocalUsingId, cChatLocalUsingRange, cChatToAll, cChatToAllUsingId, cChatToAllUsingRange, cChatToAllies, cChatToAlliesUsingId, cChatToAlliesUsingRange, cChatToEnemies, cChatToEnemiesUsingId, cChatToEnemiesUsingRange, cChatToPlayer, cChatToPlayerUsingId, cChatToPlayerUsingRange, cChatTrace, cCheatsEnabled, cCivilianPopulation, cCivSelected, cClearTributeMemory, cCommodityBuyingPrice, cCommoditySellingPrice, cCurrentAge, cCurrentAgeTime, cCurrentScore, cDeathMatchGame, cDefendSoldierCount, cDefendWarboatCount, cDeleteBuilding, cDeleteUnit, cDifficulty, cDisableRule, cDisableSelf, cDisableTimer, cDoctrine, cDoNothing, cDropsiteMinDistance, cEnableRule, cEnableTimer, cEnableWallPlacement, cEnemyBuildingsInTown, cEnemyCapturedRelics, cEscrowAmount, cEventDetected, cFalse, cFoodAmount, cGameTime, cGameType, cGateCount, cGenerateRandomNumber, cGoal, cGoldAmount, cHoldKohRuin, cHoldRelics, cHousingHeadroom, cIdleFarmCount, cLog, cLogTrace, cMapSize, cMapType, cMilitaryPopulation, cPlayerComputer, cPlayerHuman, cPlayerInGame, cPlayerNumber, cPlayerResigned, cPlayerValid, cPlayersBuildingCount, cPlayersBuildingTypeCount, cPlayersCiv, cPlayersCivilianPopulation, cPlayersCurrentAge, cPlayersCurrentAgeTime, cPlayersMilitaryPopulation, cPlayersPopulation, cPlayersScore, cPlayersStance, cPlayersTribute, cPlayersTributeMemory, cPlayersUnitCount, cPlayersUnitTypeCount, cPopulation, cPopulationCap, cPopulationHeadroom, cRandomNumber, cRegicideGame, cReleaseEscrow, cResearch, cResearchAvailable, cResearchCompleted, cResign, cResourceFound, cSellCommodity, cSetAuthorEmail, cSetAuthorName, cSetAuthorVersion, cSetDifficultyParameter, cSetDoctrine, cSetEscrowPercentage, cSetGoal, cSetSharedGoal, cSetSignal, cSetStance, cSetStrategicNumber, cSharedGoal, cSheepAndForageTooFar, cSoldierCount, cSpy, cStanceToward, cStartingAge, cStartingResources, cStoneAmount, cStrategicNumber, cTaunt, cTauntDetected, cTauntUsingRange, cTimerTriggered, cTownUnderAttack, cTraceFact, cTrain, cTributeToPlayer, cTrue, cUnitAvailable, cUnitCount, cUnitCountTotal, cUnitTypeCount, cUnitTypeCountTotal, cVictoryCondition, cWallCompletedPercentage, cWallInvisiblePercentage, cWarboatCount, cWoodAmount, cUpAddCostData, cUpAddObjectById, cUpAddObjectCost, cUpAddPoint, cUpAddResearchCost, cUpAlliedGoal, cUpAlliedResourceAmount, cUpAlliedResourcePercent, cUpAlliedSn, cUpAssignBuilders, cUpAttackerClass, cUpBoundPoint, cUpBoundPrecisePoint, cUpBuild, cUpBuildLine, cUpBuildingTypeInTown, cUpBuyCommodity, cUpCanBuild, cUpCanBuildLine, cUpCanResearch, cUpCanSearch, cUpCanTrain, cUpCcAddResource, cUpCcSendCheat, cUpChangeName, cUpChatDataToAll, cUpChatDataToPlayer, cUpChatDataToSelf, cUpCleanSearch, cUpCompareConst, cUpCompareFlag, cUpCompareGoal, cUpCompareSn, cUpCompareText, cUpCopyPoint, cUpCreateGroup, cUpCrossTiles, cUpDefenderCount, cUpDeleteDistantFarms, cUpDeleteIdleUnits, cUpDeleteObjects, cUpDisbandGroupType, cUpDropResources, cUpEnemyBuildingsInTown, cUpEnemyUnitsInTown, cUpEnemyVillagersInTown, cUpFilterDistance, cUpFilterExclude, cUpFilterGarrison, cUpFilterInclude, cUpFilterRange, cUpFilterStatus, cUpFindFlare, cUpFindLocal, cUpFindNextPlayer, cUpFindPlayer, cUpFindPlayerFlare, cUpFindRemote, cUpFindResource, cUpFindStatusLocal, cUpFindStatusRemote, cUpFullResetSearch, cUpGaiaTypeCount, cUpGaiaTypeCountTotal, cUpGarrison, cUpGatherInside, cUpGetAttackerClass, cUpGetCostDelta, cUpGetEvent, cUpGetFact, cUpGetFactMax, cUpGetFactMin, cUpGetFactSum, cUpGetFocusFact, cUpGetGroupSize, cUpGetGuardState, cUpGetIndirectGoal, cUpGetObjectData, cUpGetObjectTargetData, cUpGetObjectTypeData, cUpGetPathDistance, cUpGetPlayerColor, cUpGetPlayerFact, cUpGetPoint, cUpGetPointContains, cUpGetPointDistance, cUpGetPointElevation, cUpGetPointTerrain, cUpGetPointZone, cUpGetPreciseTime, cUpGetProjectilePlayer, cUpGetRuleId, cUpGetSearchState, cUpGetSharedGoal, cUpGetSignal, cUpGetTargetFact, cUpGetThreatData, cUpGetTimer, cUpGetUpgradeId, cUpGetVictoryData, cUpGetVictoryLimit, cUpGroupSize, cUpGuardUnit, cUpIdleUnitCount, cUpJumpDirect, cUpJumpDynamic, cUpJumpRule, cUpLerpPercent, cUpLerpTiles, cUpLogData, cUpModifyEscrow, cUpModifyFlag, cUpModifyGoal, cUpModifyGroupFlag, cUpModifySn, cUpObjectData, cUpObjectTargetData, cUpObjectTypeCount, cUpObjectTypeCountTotal, cUpPathDistance, cUpPendingObjects, cUpPendingPlacement, cUpPlayerDistance, cUpPlayersInGame, cUpPointContains, cUpPointDistance, cUpPointElevation, cUpPointExplored, cUpPointTerrain, cUpPointZone, cUpProjectileDetected, cUpProjectileTarget, cUpReleaseEscrow, cUpRemainingBoarAmount, cUpRemoveObjects, cUpRequestHunters, cUpResearch, cUpResearchStatus, cUpResetAttackNow, cUpResetBuilding, cUpResetCostData, cUpResetFilters, cUpResetGroup, cUpResetPlacement, cUpResetScouts, cUpResetSearch, cUpResetTargetPriorities, cUpResetUnit, cUpResourceAmount, cUpResourcePercent, cUpRetaskGatherers, cUpRetreatNow, cUpRetreatTo, cUpSellCommodity, cUpSendFlare, cUpSendScout, cUpSetAttackStance, cUpSetDefensePriority, cUpSetEvent, cUpSetGroup, cUpSetIndirectGoal, cUpSetOffensePriority, cUpSetPlacementData, cUpSetPreciseTargetPoint, cUpSetSharedGoal, cUpSetSignal, cUpSetTargetById, cUpSetTargetObject, cUpSetTargetPoint, cUpSetTimer, cUpSetupCostData, cUpStoreMapName, cUpStoreObjectName, cUpStorePlayerChat, cUpStorePlayerName, cUpStoreTechName, cUpStoreText, cUpStoreTypeName, cUpTargetObjects, cUpTargetPoint, cUpTimerStatus, cUpTrain, cUpTrainSiteReady, cUpTributeToPlayer, cUpUngarrison, cUpUnitTypeInTown, cUpUpdateTargets, cUpVillagerTypeInTown, cFeCcEffectAmount, cFeCcEffectPercent];

//Parameters
var pCompareOp = new Parameter("compareOp","1.0c","&#60;rel-op&#62;");
var pMathOp = new Parameter("mathOp","UP");
var pTypeOp = new Parameter("typeOp","UP");
var pActionId = new Parameter("ActionId","UP");
var pAge = new Parameter("Age","1.0c","&#60;age&#62;");
var pAllyPlayer = new Parameter("AllyPlayer","UP");
var pAnyPlayer = new Parameter("AnyPlayer","1.0c","&#60;player-number&#62;");
var pAttackStance = new Parameter("AttackStance","UP");
var pAttrId = new Parameter("AttrId","DE");
var pBorder = new Parameter("Border","UP");
var pBuildingId = new Parameter("BuildingId","1.0c","&#60;building&#62;");
var pCiv = new Parameter("Civ","1.0c","&#60;civ&#62;");
var pClassId = new Parameter("ClassId","UP");
var pCmdId = new Parameter("CmdId","UP");
var pCode = new Parameter("Code","UP");
var pColorId = new Parameter("ColorId","UP");
var pCommodity = new Parameter("Commodity","1.0c","&#60;commodity&#62;");
var pComputerAllyPlayer = new Parameter("ComputerAllyPlayer","UP");
var pCount = new Parameter("Count","UP");
var pData = new Parameter("Data","UP");
var pDifficulty = new Parameter("Difficulty","1.0c","&#60;difficulty&#62;");
var pDiffParameterId = new Parameter("DiffParameterId","1.0c","&#60;difficulty-parameter&#62;");
var pDistance = new Parameter("Distance","UP");
var pElapsedTime = new Parameter("ElapsedTime","UP");
var pEffectId = new Parameter("EffectId","DE");
var pEscrowState = new Parameter("EscrowState","UP");
var pESPlayerStance = new Parameter("ESPlayerStance","1.0c","&#60;diplomacy-stance&#62;");
var pEventId = new Parameter("EventId","1.0c","&#60;event-id&#62;");
var pEventType = new Parameter("EventType","1.0c","&#60;event-type&#62;");
var pExploredState = new Parameter("ExploredState","UP");
var pExtension = new Parameter("Extension","UP");
var pFactId = new Parameter("FactId","UP");
var pFindPlayerMethod = new Parameter("FindPlayerMethod","UP");
var pFlag = new Parameter("Flag","UP");
var pFormation = new Parameter("Formation","UP");
var pFormattedString = new Parameter("FormattedString","UP");
var pGameType = new Parameter("GameType","1.0c");
var pGoalId = new Parameter("GoalId","1.0c","&#60;goal-id&#62;");
var pGroupId = new Parameter("GroupId","UP");
var pGroupType = new Parameter("GroupType","UP");
var pGuardFlag = new Parameter("GuardFlag","UP");
var pGuardState = new Parameter("GuardState","UP");
var pHitpoints = new Parameter("HitPoints","UP");
var pId = new Parameter("Id","UP");
var pIdleType = new Parameter("IdleType","UP");
var pIndex = new Parameter("Index","UP");
var pItemId = new Parameter("ItemId","DE");
var pLanguageId = new Parameter("LanguageId","1.0c","&#60;string-id&#62;","&#60;string-id-start&#62;");
var pLimit = new Parameter("Limit","UP");
var pLocalIndex = new Parameter("LocalIndex","UP");
var pLocalList = new Parameter("LocalList","UP");
var pMapSize = new Parameter("MapSize","1.0c","&#60;map-size&#62;");
var pMapType = new Parameter("MapType","1.0c","&#60;map-type&#62;");
var pMaxDistance = new Parameter("MaxDistance","UP");
var pMaxGarrison = new Parameter("MaxGarrison","UP");
var pMinDistance = new Parameter("MinDistance","UP");
var pMinGarrison = new Parameter("MinGarrison","UP");
var pMode = new Parameter("Mode","UP");
var pNewName = new Parameter("NewName","UP");
var pObjectData = new Parameter("ObjectData","UP");
var pObjectId = new Parameter("ObjectId","UP");
var pObjectList = new Parameter("ObjectList","UP");
var pObjectStatus = new Parameter("ObjectStatus","UP");
var pOn = new Parameter("On","UP");
var pOnMainland = new Parameter("OnMainland","UP");
var pOrderId = new Parameter("OrderId","UP");
var pParam = new Parameter("Param","UP");
var pPercent = new Parameter("Percent","UP");
var pPerimeter = new Parameter("Perimeter","1.0c","&#60;perimeter&#62;");
var pPlacementType = new Parameter("PlacementType","UP");
var pPlain = new Parameter("Plain","UP");
var pPlayerId = new Parameter("PlayerId","UP");
var pPlayerStance = new Parameter("PlayerStance","UP");
var pPoint = new Parameter("Point","UP");
var pPositionType = new Parameter("PositionType","UP");
var pPrecise = new Parameter("Precise","UP");
var pPreserveResearch = new Parameter("PreserveResearch","UP");
var pProgressType = new Parameter("ProgressType", "UP");
var pProjectileType = new Parameter("ProjectileType","UP");
var pPriorityType = new Parameter("PriorityType","UP");
var pRemoteIndex = new Parameter("RemoteIndex","UP");
var pRemoteList = new Parameter("RemoteList","UP");
var pResearchState = new Parameter("ResearchState","UP");
var pResetCost = new Parameter("ResetCost","UP");
var pResource = new Parameter("Resource","1.0c","&#60;resource-type&#62;");
var pResourceType = new Parameter("ResourceType","UP");
var pRuleDelta = new Parameter("RuleDelta","UP");
var pRuleId = new Parameter("RuleId","UP");
var pScoutMethod = new Parameter("ScoutMethod","UP");
var pSearchOrder = new Parameter("SearchOrder","UP");
var pSearchSource = new Parameter("SearchSource","UP");
var pSharedGoalId = new Parameter("SharedGoalId","1.0c","&#60;shared-goal-id&#62;");
var pSignalId = new Parameter("SignalId","1.0c","&#60;signal-id&#62;");
var pSize = new Parameter("Size","UP");
var pSnId = new Parameter("SnId","1.0c","&#60;strategic-number&#62;");
var pSourceClass = new Parameter("SourceClass","UP");
var pStart = new Parameter("Start","UP");
var pStartingResources = new Parameter("StartingResources","1.0c","&#60;starting-resources&#62;");
var pState = new Parameter("State","UP");
var pStrict = new Parameter("Strict","UP");
var pString = new Parameter("String","1.0c","&#60;string&#62;");
var pTarget = new Parameter("Target","UP");
var pTargetAction = new Parameter("TargetAction","UP");
var pTargetClass = new Parameter("TargetClass","UP");
var pTauntId = new Parameter("TauntId","1.0c","&#60;taunt-id&#62;");
var pTechId = new Parameter("TechId","1.0c","&#60;research-item&#62;");
var pTerrain = new Parameter("Terrain","UP");
var pText = new Parameter("Text","UP");
var pTiles = new Parameter("Tiles","UP");
var pTime = new Parameter("Time","UP");
var pTimerId = new Parameter("TimerId","1.0c","&#60;timer-id&#62;");
var pTimerState = new Parameter("TimerState","UP");
var pType = new Parameter("Type","UP");
var pTypeId = new Parameter("TypeId","UP");
var pUnitId = new Parameter("UnitId","1.0c","&#60;unit&#62;");
var pUpgradeId = new Parameter("UpgradeId","UP");
var pValue = new Parameter("Value","1.0c","&#60;value&#62;");
var pVictory = new Parameter("Victory","1.0c","&#60;victory-condition&#62;");
var pWallId = new Parameter("WallId","1.0c","&#60;wall-id&#62;");

var parametersArray = [pCompareOp, pMathOp, pTypeOp, pActionId, pAge, pAllyPlayer, pAnyPlayer, pAttackStance, pAttrId, pBorder, pBuildingId, pCiv, pClassId, pCmdId, pCode, pColorId, pCommodity, pComputerAllyPlayer, pCount, pData, pDifficulty, pDiffParameterId, pDistance, pEffectId, pElapsedTime, pEscrowState, pESPlayerStance, pEventId, pEventType, pExploredState, pExtension, pFactId, pFindPlayerMethod, pFlag, pFormation, pFormattedString, pGameType, pGoalId, pGroupId, pGroupType, pGuardFlag, pGuardState, pHitpoints, pId, pIdleType, pIndex, pItemId, pLanguageId, pLimit, pLocalIndex, pLocalList, pMapSize, pMapType, pMaxDistance, pMaxGarrison, pMinDistance, pMinGarrison, pMode, pNewName, pObjectData, pObjectId, pObjectList, pObjectStatus, pOn, pOnMainland, pOrderId, pParam, pPercent, pPerimeter, pPlacementType, pPlain, pPlayerId, pPlayerStance, pPoint, pPositionType, pPrecise, pPreserveResearch, pProgressType, pProjectileType, pPriorityType, pRemoteIndex, pRemoteList, pResearchState, pResetCost, pResource, pResourceType, pRuleDelta, pRuleId, pScoutMethod, pSearchOrder, pSearchSource, pSharedGoalId, pSignalId, pSize, pSnId, pSourceClass, pStart, pStartingResources, pState, pStrict, pString, pTarget, pTargetAction, pTargetClass, pTauntId, pTechId, pTerrain, pText, pTiles, pTime, pTimerId, pTimerState, pType, pTypeId, pUnitId, pUpgradeId, pValue, pVictory, pWallId];

//Strategic Numbers
var snAddStartingResourceFood = new StrategicNumber();
var snAddStartingResourceGold = new StrategicNumber();
var snAddStartingResourceStone = new StrategicNumber();
var snAddStartingResourceWood = new StrategicNumber();
var snAllowAdjacentDropsites = new StrategicNumber();
var snAllowCivilianDefense = new StrategicNumber();
var snAllowCivilianOffense = new StrategicNumber();
var snAllowDiplomacyChangeOnAllyAttack = new StrategicNumber();
var snAllowDiplomacyChangeOnTribute = new StrategicNumber();
var snAttackCoordination = new StrategicNumber();
var snAttackDiplomacyImpact = new StrategicNumber();
var snAttackGroupGatherSpacing = new StrategicNumber();
var snAttackGroupMakeup = new StrategicNumber();
var snAttackGroupSizeRandomness = new StrategicNumber();
var snAttackIntelligence = new StrategicNumber();
var snAttackResponseSeparationTime = new StrategicNumber();
var snAttackSeparationTime = new StrategicNumber();
var snAttackSeparationTimeRandomness = new StrategicNumber();
var snAttackWinningPlayer = new StrategicNumber();
var snAttackWinningPlayerFactor = new StrategicNumber();
var snAutoBuildDocks = new StrategicNumber();
var snAutoBuildDropsites = new StrategicNumber();
var snAutoBuildFarms = new StrategicNumber();
var snAutoBuildFishingBoats = new StrategicNumber();
var snAutoBuildHouses = new StrategicNumber();
var snAutoBuildTowers = new StrategicNumber();
var snAutoBuildTransports = new StrategicNumber();
var snAutoBuildWarships = new StrategicNumber();
var snBlotExplorationMap = new StrategicNumber();
var snBlotSize = new StrategicNumber();
var snBoarLureDestination = new StrategicNumber();
var snBuildFrequency = new StrategicNumber();
var snBuildPlanDivisions = new StrategicNumber();
var snBuildingTargetingMode = new StrategicNumber();
var snCampMaxDistance = new StrategicNumber();
var snCapCivilianBuilders = new StrategicNumber();
var snCapCivilianExplorers = new StrategicNumber();
var snCapCivilianGatherers = new StrategicNumber();
var snChokePointDefendPriority = new StrategicNumber();
var snConsecutiveIdleUnitLimit = new StrategicNumber();
var snCoopDemandTributeInterval = new StrategicNumber();
var snCoopDemandTributeMaximum = new StrategicNumber();
var snCoopShareAttacking = new StrategicNumber();
var snCoopShareAttackingInterval = new StrategicNumber();
var snCoopShareInformation = new StrategicNumber();
var snDefendGroupMakeup = new StrategicNumber();
var snDefendImportantGroupLeaders = new StrategicNumber();
var snDefendOverlapDistance = new StrategicNumber();
var snDefenseDistance = new StrategicNumber();
var snDeferDropsiteUpdate = new StrategicNumber();
var snDesiredNumberDocks = new StrategicNumber();
var snDesiredNumberFishEscorts = new StrategicNumber();
var snDesiredNumberFishingBoats = new StrategicNumber();
var snDesiredNumberTradeEscorts = new StrategicNumber();
var snDesiredNumberTransportEscorts = new StrategicNumber();
var snDesiredNumberTransports = new StrategicNumber();
var snDesiredNumberWarships = new StrategicNumber();
var snDisableAttackGroups = new StrategicNumber();
var snDisableBuilderAssistance = new StrategicNumber();
var snDisableDefendGroups = new StrategicNumber();
var snDisableSightedResponseCap = new StrategicNumber();
var snDisableTowerPriority = new StrategicNumber();
var snDisableTradeEvasion = new StrategicNumber();
var snDisableVillagerGarrison = new StrategicNumber();
var snDoNotScaleForDifficultyLevel = new StrategicNumber();
var snDoNotTransportFromSameZone = new StrategicNumber();
var snDockAvoidanceFactor = new StrategicNumber();
var snDockDefendPriority = new StrategicNumber();
var snDockPlacementMode = new StrategicNumber();
var snDockProximityFactor = new StrategicNumber();
var snDockTrainingFilter = new StrategicNumber();
var snDropsiteSeparationDistance = new StrategicNumber();
var snEasierReactionPercentage = new StrategicNumber();
var snEasiestReactionPercentage = new StrategicNumber();
var snEnableBoarHunting = new StrategicNumber();
var snEnableNewBuildingSystem = new StrategicNumber();
var snEnableOffensivePriority = new StrategicNumber();
var snEnablePatrolAttack = new StrategicNumber();
var snEnableResearchQueue = new StrategicNumber();
var snEnableTrainingQueue = new StrategicNumber();
var snEnemySightedResponseDistance = new StrategicNumber();
var snExploreGroupMakeup = new StrategicNumber();
var snFilterUnderAttack = new StrategicNumber();
var snFocusPlayerNumber = new StrategicNumber();
var snFoodDropsiteDistance = new StrategicNumber();
var snFoodGathererPercentage = new StrategicNumber();
var snFoodModifierPercentage = new StrategicNumber();
var snForageDefendPriority = new StrategicNumber();
var snFreeSiegeTargeting = new StrategicNumber();
var snGarrisonRams = new StrategicNumber();
var snGateTypeForWall = new StrategicNumber();
var snGatherDefenseUnits = new StrategicNumber();
var snGatherIdleSoldiersAtCenter = new StrategicNumber();
var snGoldDefendPriority = new StrategicNumber();
var snGoldDropsiteDistance = new StrategicNumber();
var snGoldGathererPercentage = new StrategicNumber();
var snGoldModifierPercentage = new StrategicNumber();
var snGroupCommanderSelectionMethod = new StrategicNumber();
var snGroupFillMethod = new StrategicNumber();
var snGroupFormDistance = new StrategicNumber();
var snGroupLeaderDefenseDistance = new StrategicNumber();
var snHitsBeforeAllianceChange = new StrategicNumber();
var snHomeExplorationTime = new StrategicNumber();
var snHouseOverage = new StrategicNumber();
var snIgnoreAttackGroupUnderAttack = new StrategicNumber();
var snIgnoreTowerElevation = new StrategicNumber();
var snInitialAttackDelay = new StrategicNumber();
var snInitialAttackDelayType = new StrategicNumber();
var snInitialExplorationRequired = new StrategicNumber();
var snIntelligentGathering = new StrategicNumber();
var snLivestockDefendPriority = new StrategicNumber();
var snLivestockToTownCenter = new StrategicNumber();
var snLocalTargetingMode = new StrategicNumber();
var snLockAndAttackResponse = new StrategicNumber();
var snLumberCampMaxDistance = new StrategicNumber();
var snMaxBuildPlanGathererPercentage = new StrategicNumber();
var snMaxFarms = new StrategicNumber();
var snMaxGranaries = new StrategicNumber();
var snMaxRetaskGatherAmount = new StrategicNumber();
var snMaxSkipsPerAttempt = new StrategicNumber();
var snMaxStoragePits = new StrategicNumber();
var snMaxTowers = new StrategicNumber();
var snMaximumAttackGroupSize = new StrategicNumber();
var snMaximumBoatAttackGroupSize = new StrategicNumber();
var snMaximumBoatDefendGroupSize = new StrategicNumber();
var snMaximumBoatExploreGroupSize = new StrategicNumber();
var snMaximumDefendGroupSize = new StrategicNumber();
var snMaximumExploreGroupSize = new StrategicNumber();
var snMaximumFishBoatDropDistance = new StrategicNumber();
var snMaximumFood = new StrategicNumber();
var snMaximumFoodDropDistance = new StrategicNumber();
var snMaximumGaiaAttackResponse = new StrategicNumber();
var snMaximumGarrisonFill = new StrategicNumber();
var snMaximumGold = new StrategicNumber();
var snMaximumGoldDropDistance = new StrategicNumber();
var snMaximumHousesBeforeDropsites = new StrategicNumber();
var snMaximumHuntDropDistance = new StrategicNumber();
var snMaximumPatrolDistance = new StrategicNumber();
var snMaximumStone = new StrategicNumber();
var snMaximumStoneDropDistance = new StrategicNumber();
var snMaximumTownSize = new StrategicNumber();
var snMaximumWood = new StrategicNumber();
var snMaximumWoodDropDistance = new StrategicNumber();
var snMillMaxDistance = new StrategicNumber();
var snMinimumAmountForTrading = new StrategicNumber();
var snMinimumAttackGroupSize = new StrategicNumber();
var snMinimumBoarHuntGroupSize = new StrategicNumber();
var snMinimumBoarLureGroupSize = new StrategicNumber();
var snMinimumBoatAttackGroupSize = new StrategicNumber();
var snMinimumBoatDefendGroupSize = new StrategicNumber();
var snMinimumBoatExploreGroupSize = new StrategicNumber();
var snMinimumCivilianExplorers = new StrategicNumber();
var snMinimumDefendGroupSize = new StrategicNumber();
var snMinimumDropsiteBuffer = new StrategicNumber();
var snMinimumExploreGroupSize = new StrategicNumber();
var snMinimumFood = new StrategicNumber();
var snMinimumGold = new StrategicNumber();
var snMinimumNumberHunters = new StrategicNumber();
var snMinimumPeaceLikeLevel = new StrategicNumber();
var snMinimumStone = new StrategicNumber();
var snMinimumTownSize = new StrategicNumber();
var snMinimumWaterBodySizeForDock = new StrategicNumber();
var snMinimumWood = new StrategicNumber();
var snMiningCampMaxDistance = new StrategicNumber();
var snMostNeededResourceLookAhead = new StrategicNumber();
var snNumberAttackGroups = new StrategicNumber();
var snNumberBoatAttackGroups = new StrategicNumber();
var snNumberBoatDefendGroups = new StrategicNumber();
var snNumberBoatExploreGroups = new StrategicNumber();
var snNumberBuildAttemptsBeforeSkip = new StrategicNumber();
var snNumberCivilianMilitia = new StrategicNumber();
var snNumberDefendGroups = new StrategicNumber();
var snNumberEnemyObjectsRequired = new StrategicNumber();
var snNumberExploreGroups = new StrategicNumber();
var snNumberForwardBuilders = new StrategicNumber();
var snNumberGarrisonUnits = new StrategicNumber();
var snNumberMaxSkipCycles = new StrategicNumber();
var snNumberTaskedUnits = new StrategicNumber();
var snNumberWallGates = new StrategicNumber();
var snObjectRepairLevel = new StrategicNumber();
var snPercentAttackBoats = new StrategicNumber();
var snPercentAttackSoldiers = new StrategicNumber();
var snPercentBuildingCancellation = new StrategicNumber();
var snPercentCivilianBuilders = new StrategicNumber();
var snPercentCivilianExplorers = new StrategicNumber();
var snPercentCivilianGatherers = new StrategicNumber();
var snPercentDeathRetreat = new StrategicNumber();
var snPercentEnemySightedResponse = new StrategicNumber();
var snPercentExplorationRequired = new StrategicNumber();
var snPercentHalfExploration = new StrategicNumber();
var snPercentHealthRetreat = new StrategicNumber();
var snPercentUnitHealthRetreat = new StrategicNumber();
var snPercentVictoryClamp = new StrategicNumber();
var snPercentageExploreExterminators = new StrategicNumber();
var snPlacementFailDelta = new StrategicNumber();
var snPlacementToCenter = new StrategicNumber();
var snPlacementZoneSize = new StrategicNumber();
var snPreferredMillPlacement = new StrategicNumber();
var snPreferredTradeDistance = new StrategicNumber();
var snProfilingThreshold = new StrategicNumber();
var snRandomPlacementFactor = new StrategicNumber();
var snRelicDefendPriority = new StrategicNumber();
var snRelicReturnDistance = new StrategicNumber();
var snRequiredFirstBuilding = new StrategicNumber();
var snRequiredForestTiles = new StrategicNumber();
var snRetaskGatherAmount = new StrategicNumber();
var snRetreatAfterTargetDestroyed = new StrategicNumber();
var snRuinsDefendPriority = new StrategicNumber();
var snSafeTownSize = new StrategicNumber();
var snSaveScenarioInformation = new StrategicNumber();
var snScaleMaximumAttackGroupSize = new StrategicNumber();
var snScaleMinimumAttackGroupSize = new StrategicNumber();
var snScalePercentDeathRetreat = new StrategicNumber();
var snScalePercentHealthRetreat = new StrategicNumber();
var snScalePercentUnitHealthRetreat = new StrategicNumber();
var snScalingFrequency = new StrategicNumber();
var snSentryDistance = new StrategicNumber();
var snSentryDistanceVariation = new StrategicNumber();
var snSizeWallGates = new StrategicNumber();
var snSpecialAttackInfluence1 = new StrategicNumber();
var snSpecialAttackInfluence2 = new StrategicNumber();
var snSpecialAttackInfluence3 = new StrategicNumber();
var snSpecialAttackType1 = new StrategicNumber();
var snSpecialAttackType2 = new StrategicNumber();
var snSpecialAttackType3 = new StrategicNumber();
var snSpecificBuildItemTime = new StrategicNumber();
var snSpecificBuildItemToBuild = new StrategicNumber();
var snStoneDefendPriority = new StrategicNumber();
var snStoneDropsiteDistance = new StrategicNumber();
var snStoneGathererPercentage = new StrategicNumber();
var snStoneModifierPercentage = new StrategicNumber();
var snTacticalUpdateFrequency = new StrategicNumber();
var snTargetEvaluationAllyProximity = new StrategicNumber();
var snTargetEvaluationAttackAttempts = new StrategicNumber();
var snTargetEvaluationBoat = new StrategicNumber();
var snTargetEvaluationContinent = new StrategicNumber();
var snTargetEvaluationDamageCapability = new StrategicNumber();
var snTargetEvaluationDistance = new StrategicNumber();
var snTargetEvaluationHitpoints = new StrategicNumber();
var snTargetEvaluationInProgress = new StrategicNumber();
var snTargetEvaluationKills = new StrategicNumber();
var snTargetEvaluationRandomness = new StrategicNumber();
var snTargetEvaluationRange = new StrategicNumber();
var snTargetEvaluationRof = new StrategicNumber();
var snTargetEvaluationSiegeWeapon = new StrategicNumber();
var snTargetEvaluationTimeKillRatio = new StrategicNumber();
var snTargetPlayerNumber = new StrategicNumber();
var snTargetPointAdjustment = new StrategicNumber();
var snTaskUngroupedSoldiers = new StrategicNumber();
var snTotalNumberExplorers = new StrategicNumber();
var snTownCenterPlacement = new StrategicNumber();
var snTownDefendPriority = new StrategicNumber();
var snTrackPlayerHistory = new StrategicNumber();
var snTributeAmount = new StrategicNumber();
var snTributeChatFrequency = new StrategicNumber();
var snTributeChatRandomness = new StrategicNumber();
var snTributeFailureOutcome = new StrategicNumber();
var snTributePersistence = new StrategicNumber();
var snTributePlayer = new StrategicNumber();
var snTributeRevokeOnAttack = new StrategicNumber();
var snTributeSuccessOutcome = new StrategicNumber();
var snTributeTimeout = new StrategicNumber();
var snTtkfactorScalar = new StrategicNumber();
var snUnexploredConstruction = new StrategicNumber();
var snUnskippableItemType = new StrategicNumber();
var snUpgradeToBronzeAgeAsap = new StrategicNumber();
var snUpgradeToIronAgeAsap = new StrategicNumber();
var snUpgradeToToolAgeAsap = new StrategicNumber();
var snUseByTypeMaxGathering = new StrategicNumber();
var snVillagerAttackReset = new StrategicNumber();
var snWallTargetingMode = new StrategicNumber();
var snWarshipTargetingMode = new StrategicNumber();
var snWildAnimalExploration = new StrategicNumber();
var snWoodDropsiteDistance = new StrategicNumber();
var snWoodGathererPercentage = new StrategicNumber();
var snWoodModifierPercentage = new StrategicNumber();
var snZeroPriorityDistance = new StrategicNumber();
var snUnknownData006 = new StrategicNumber();
var snUnknownData007 = new StrategicNumber();
var snUnknownData008 = new StrategicNumber();
var snUnknownData009 = new StrategicNumber();
var snUnknownData010 = new StrategicNumber();
var snUnknownData011 = new StrategicNumber();
var snUnknownData012 = new StrategicNumber();
var snUnknownData013 = new StrategicNumber();
var snUnknownData014 = new StrategicNumber();
var snUnknownData015 = new StrategicNumber();
var snUnknownData017 = new StrategicNumber();
var snUnknownData021 = new StrategicNumber();
var snUnknownData027 = new StrategicNumber();
var snUnknownData033 = new StrategicNumber();
var snUnknownData113 = new StrategicNumber();
var snUnknownData116 = new StrategicNumber();
var snUnknownData137 = new StrategicNumber();
var snUnknownData153 = new StrategicNumber();
var snUnknownData154 = new StrategicNumber();
var snUnknownData162 = new StrategicNumber();
var snUnknownData189 = new StrategicNumber();
var snUnknownData199 = new StrategicNumber();
var snUnknownData200 = new StrategicNumber();
var snUnknownData211 = new StrategicNumber();

var snArray = [snAddStartingResourceFood, snAddStartingResourceGold, snAddStartingResourceStone, snAddStartingResourceWood, snAllowAdjacentDropsites, snAllowCivilianDefense, snAllowCivilianOffense, snAllowDiplomacyChangeOnAllyAttack, snAllowDiplomacyChangeOnTribute, snAttackCoordination, snAttackDiplomacyImpact, snAttackGroupGatherSpacing, snAttackGroupMakeup, snAttackGroupSizeRandomness, snAttackIntelligence, snAttackResponseSeparationTime, snAttackSeparationTime, snAttackSeparationTimeRandomness, snAttackWinningPlayer, snAttackWinningPlayerFactor, snAutoBuildDocks, snAutoBuildDropsites, snAutoBuildFarms, snAutoBuildFishingBoats, snAutoBuildHouses, snAutoBuildTowers, snAutoBuildTransports, snAutoBuildWarships, snBlotExplorationMap, snBlotSize, snBoarLureDestination, snBuildFrequency, snBuildPlanDivisions, snBuildingTargetingMode, snCampMaxDistance, snCapCivilianBuilders, snCapCivilianExplorers, snCapCivilianGatherers, snChokePointDefendPriority, snConsecutiveIdleUnitLimit, snCoopDemandTributeInterval, snCoopDemandTributeMaximum, snCoopShareAttacking, snCoopShareAttackingInterval, snCoopShareInformation, snDefendGroupMakeup, snDefendImportantGroupLeaders, snDefendOverlapDistance, snDefenseDistance, snDeferDropsiteUpdate, snDesiredNumberDocks, snDesiredNumberFishEscorts, snDesiredNumberFishingBoats, snDesiredNumberTradeEscorts, snDesiredNumberTransportEscorts, snDesiredNumberTransports, snDesiredNumberWarships, snDisableAttackGroups, snDisableBuilderAssistance, snDisableDefendGroups, snDisableSightedResponseCap, snDisableTowerPriority, snDisableTradeEvasion, snDisableVillagerGarrison, snDoNotScaleForDifficultyLevel, snDoNotTransportFromSameZone, snDockAvoidanceFactor, snDockDefendPriority, snDockPlacementMode, snDockProximityFactor, snDockTrainingFilter, snDropsiteSeparationDistance, snEasierReactionPercentage, snEasiestReactionPercentage, snEnableBoarHunting, snEnableNewBuildingSystem, snEnableOffensivePriority, snEnablePatrolAttack, snEnableResearchQueue, snEnableTrainingQueue, snEnemySightedResponseDistance, snExploreGroupMakeup, snFilterUnderAttack, snFocusPlayerNumber, snFoodDropsiteDistance, snFoodGathererPercentage, snFoodModifierPercentage, snForageDefendPriority, snFreeSiegeTargeting, snGarrisonRams, snGateTypeForWall, snGatherDefenseUnits, snGatherIdleSoldiersAtCenter, snGoldDefendPriority, snGoldDropsiteDistance, snGoldGathererPercentage, snGoldModifierPercentage, snGroupCommanderSelectionMethod, snGroupFillMethod, snGroupFormDistance, snGroupLeaderDefenseDistance, snHitsBeforeAllianceChange, snHomeExplorationTime, snHouseOverage, snIgnoreAttackGroupUnderAttack, snIgnoreTowerElevation, snInitialAttackDelay, snInitialAttackDelayType, snInitialExplorationRequired, snIntelligentGathering, snLivestockDefendPriority, snLivestockToTownCenter, snLocalTargetingMode, snLockAndAttackResponse, snLumberCampMaxDistance, snMaxBuildPlanGathererPercentage, snMaxFarms, snMaxGranaries, snMaxRetaskGatherAmount, snMaxSkipsPerAttempt, snMaxStoragePits, snMaxTowers, snMaximumAttackGroupSize, snMaximumBoatAttackGroupSize, snMaximumBoatDefendGroupSize, snMaximumBoatExploreGroupSize, snMaximumDefendGroupSize, snMaximumExploreGroupSize, snMaximumFishBoatDropDistance, snMaximumFood, snMaximumFoodDropDistance, snMaximumGaiaAttackResponse, snMaximumGarrisonFill, snMaximumGold, snMaximumGoldDropDistance, snMaximumHousesBeforeDropsites, snMaximumHuntDropDistance, snMaximumPatrolDistance, snMaximumStone, snMaximumStoneDropDistance, snMaximumTownSize, snMaximumWood, snMaximumWoodDropDistance, snMillMaxDistance, snMinimumAmountForTrading, snMinimumAttackGroupSize, snMinimumBoarHuntGroupSize, snMinimumBoarLureGroupSize, snMinimumBoatAttackGroupSize, snMinimumBoatDefendGroupSize, snMinimumBoatExploreGroupSize, snMinimumCivilianExplorers, snMinimumDefendGroupSize, snMinimumDropsiteBuffer, snMinimumExploreGroupSize, snMinimumFood, snMinimumGold, snMinimumNumberHunters, snMinimumPeaceLikeLevel, snMinimumStone, snMinimumTownSize, snMinimumWaterBodySizeForDock, snMinimumWood, snMiningCampMaxDistance, snMostNeededResourceLookAhead, snNumberAttackGroups, snNumberBoatAttackGroups, snNumberBoatDefendGroups, snNumberBoatExploreGroups, snNumberBuildAttemptsBeforeSkip, snNumberCivilianMilitia, snNumberDefendGroups, snNumberEnemyObjectsRequired, snNumberExploreGroups, snNumberForwardBuilders, snNumberGarrisonUnits, snNumberMaxSkipCycles, snNumberTaskedUnits, snNumberWallGates, snObjectRepairLevel, snPercentAttackBoats, snPercentAttackSoldiers, snPercentBuildingCancellation, snPercentCivilianBuilders, snPercentCivilianExplorers, snPercentCivilianGatherers, snPercentDeathRetreat, snPercentEnemySightedResponse, snPercentExplorationRequired, snPercentHalfExploration, snPercentHealthRetreat, snPercentUnitHealthRetreat, snPercentVictoryClamp, snPercentageExploreExterminators, snPlacementFailDelta, snPlacementToCenter, snPlacementZoneSize, snPreferredMillPlacement, snPreferredTradeDistance, snProfilingThreshold, snRandomPlacementFactor, snRelicDefendPriority, snRelicReturnDistance, snRequiredFirstBuilding, snRequiredForestTiles, snRetaskGatherAmount, snRetreatAfterTargetDestroyed, snRuinsDefendPriority, snSafeTownSize, snSaveScenarioInformation, snScaleMaximumAttackGroupSize, snScaleMinimumAttackGroupSize, snScalePercentDeathRetreat, snScalePercentHealthRetreat, snScalePercentUnitHealthRetreat, snScalingFrequency, snSentryDistance, snSentryDistanceVariation, snSizeWallGates, snSpecialAttackInfluence1, snSpecialAttackInfluence2, snSpecialAttackInfluence3, snSpecialAttackType1, snSpecialAttackType2, snSpecialAttackType3, snSpecificBuildItemTime, snSpecificBuildItemToBuild, snStoneDefendPriority, snStoneDropsiteDistance, snStoneGathererPercentage, snStoneModifierPercentage, snTacticalUpdateFrequency, snTargetEvaluationAllyProximity, snTargetEvaluationAttackAttempts, snTargetEvaluationBoat, snTargetEvaluationContinent, snTargetEvaluationDamageCapability, snTargetEvaluationDistance, snTargetEvaluationHitpoints, snTargetEvaluationInProgress, snTargetEvaluationKills, snTargetEvaluationRandomness, snTargetEvaluationRange, snTargetEvaluationRof, snTargetEvaluationSiegeWeapon, snTargetEvaluationTimeKillRatio, snTargetPlayerNumber, snTargetPointAdjustment, snTaskUngroupedSoldiers, snTotalNumberExplorers, snTownCenterPlacement, snTownDefendPriority, snTrackPlayerHistory, snTributeAmount, snTributeChatFrequency, snTributeChatRandomness, snTributeFailureOutcome, snTributePersistence, snTributePlayer, snTributeRevokeOnAttack, snTributeSuccessOutcome, snTributeTimeout, snTtkfactorScalar, snUnexploredConstruction, snUnskippableItemType, snUpgradeToBronzeAgeAsap, snUpgradeToIronAgeAsap, snUpgradeToToolAgeAsap, snUseByTypeMaxGathering, snVillagerAttackReset, snWallTargetingMode, snWarshipTargetingMode, snWildAnimalExploration, snWoodDropsiteDistance, snWoodGathererPercentage, snWoodModifierPercentage, snZeroPriorityDistance, snUnknownData006, snUnknownData007, snUnknownData008, snUnknownData009, snUnknownData010, snUnknownData011, snUnknownData012, snUnknownData013, snUnknownData014, snUnknownData015, snUnknownData017, snUnknownData021, snUnknownData027, snUnknownData033, snUnknownData113, snUnknownData116, snUnknownData137, snUnknownData153, snUnknownData154, snUnknownData162, snUnknownData189, snUnknownData199, snUnknownData200, snUnknownData211];

//Difficulty Parameters
var dpAbilityToMaintainDistance = new DifficultyParameter("ability-to-maintain-distance");
var dpAbilityToDodgeMissiles = new DifficultyParameter("ability-to-dodge-missiles");

//Defined Constants
var dcProgressType = new DefinedConstant("ProgressType");




snPercentCivilianExplorers.id = 0;
snPercentCivilianExplorers.snName = "sn-percent-civilian-explorers";
snPercentCivilianExplorers.category = "Economy";
snPercentCivilianExplorers.default = 34;
snPercentCivilianExplorers.min = -32768;
snPercentCivilianExplorers.max = 32767;
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
snPercentCivilianBuilders.snName = "sn-percent-civilian-builders";
snPercentCivilianBuilders.category = "Economy";
snPercentCivilianBuilders.default = 0;
snPercentCivilianBuilders.min = -32768;
snPercentCivilianBuilders.max = 32767;
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
snPercentCivilianGatherers.snName = "sn-percent-civilian-gatherers";
snPercentCivilianGatherers.category = "Economy";
snPercentCivilianGatherers.default = 66;
snPercentCivilianGatherers.min = -32768;
snPercentCivilianGatherers.max = 32767;
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
snCapCivilianExplorers.snName = "sn-cap-civilian-explorers";
snCapCivilianExplorers.category = "Economy";
snCapCivilianExplorers.default = 2;
snCapCivilianExplorers.min = -32768;
snCapCivilianExplorers.max = 32767;
snCapCivilianExplorers.rmin = -1;
snCapCivilianExplorers.rmax = 32767;
snCapCivilianExplorers.network = 0;
snCapCivilianExplorers.defined = 1;
snCapCivilianExplorers.available = 0;
snCapCivilianExplorers.version = "1.0c";
snCapCivilianExplorers.linked = [ 0, 35, 18 ];
snCapCivilianExplorers.related = [ 4, 5 ];
snCapCivilianExplorers.shortDescription = "Caps the number of civilian explorers allocated. Factored in after the percentage is calculated. Ignored when set to -1.";

snCapCivilianBuilders.id = 4;
snCapCivilianBuilders.snName = "sn-cap-civilian-builders";
snCapCivilianBuilders.category = "Economy";
snCapCivilianBuilders.default = 2;
snCapCivilianBuilders.min = -32768;
snCapCivilianBuilders.max = 32767;
snCapCivilianBuilders.rmin = -1;
snCapCivilianBuilders.rmax = 32767;
snCapCivilianBuilders.network = 0;
snCapCivilianBuilders.defined = 1;
snCapCivilianBuilders.available = "available, however it must be at least 6-7 at all times, 10 if you will build walls, and 40-50 for wonder construction (100+ is recommended)";
snCapCivilianBuilders.version = "1.0c";
snCapCivilianBuilders.linked = [ 1, 253 ];
snCapCivilianBuilders.related = [ 3, 5 ];
snCapCivilianBuilders.shortDescription = "Caps the number of builders allocated. Factored in after the percentage is calculated. Ignored when set to -1, causing all construction to be blocked.";

snCapCivilianGatherers.id = 5;
snCapCivilianGatherers.snName = "sn-cap-civilian-gatherers";
snCapCivilianGatherers.category = "Economy";
snCapCivilianGatherers.default = -1;
snCapCivilianGatherers.min = -32768;
snCapCivilianGatherers.max = 32767;
snCapCivilianGatherers.rmin = -1;
snCapCivilianGatherers.rmax = 32767;
snCapCivilianGatherers.network = 0;
snCapCivilianGatherers.defined = 1;
snCapCivilianGatherers.available = 0;
snCapCivilianGatherers.version = "1.0c";
snCapCivilianGatherers.linked = [ 2 ];
snCapCivilianGatherers.related = [ 3, 4 ];
snCapCivilianGatherers.shortDescription = "Caps the number of gatherers allocated. Factored in after the percentage is calculated. Ignored when set to -1.";

snUnknownData006.id = 6;
snUnknownData006.snName = "unknown-data-006";
snUnknownData006.category = "None";
snUnknownData006.default = -1;
snUnknownData006.min = -32768;
snUnknownData006.max = 32767;
snUnknownData006.rmin = -32768;
snUnknownData006.rmax = 32767;
snUnknownData006.network = 0;
snUnknownData006.defined = 0;
snUnknownData006.available = 0;
snUnknownData006.version = "1.0c";
snUnknownData006.linked = [];
snUnknownData006.related = [];
snUnknownData006.shortDescription = "Unused.";

snUnknownData007.id = 7;
snUnknownData007.snName = "unknown-data-007";
snUnknownData007.category = "None";
snUnknownData007.default = -1;
snUnknownData007.min = -32768;
snUnknownData007.max = 32767;
snUnknownData007.rmin = -32768;
snUnknownData007.rmax = 32767;
snUnknownData007.network = 0;
snUnknownData007.defined = 0;
snUnknownData007.available = 0;
snUnknownData007.version = "1.0c";
snUnknownData007.linked = [];
snUnknownData007.related = [];
snUnknownData007.shortDescription = "Unused.";

snUnknownData008.id = 8;
snUnknownData008.snName = "unknown-data-008";
snUnknownData008.category = "None";
snUnknownData008.default = -1;
snUnknownData008.min = -32768;
snUnknownData008.max = 32767;
snUnknownData008.rmin = -32768;
snUnknownData008.rmax = 32767;
snUnknownData008.network = 0;
snUnknownData008.defined = 0;
snUnknownData008.available = 0;
snUnknownData008.version = "1.0c";
snUnknownData008.linked = [];
snUnknownData008.related = [];
snUnknownData008.shortDescription = "Unused.";

snUnknownData009.id = 9;
snUnknownData009.snName = "unknown-data-009";
snUnknownData009.category = "None";
snUnknownData009.default = -1;
snUnknownData009.min = -32768;
snUnknownData009.max = 32767;
snUnknownData009.rmin = -32768;
snUnknownData009.rmax = 32767;
snUnknownData009.network = 0;
snUnknownData009.defined = 0;
snUnknownData009.available = 0;
snUnknownData009.version = "1.0c";
snUnknownData009.linked = [];
snUnknownData009.related = [];
snUnknownData009.shortDescription = "An unused strategic number";

snUnknownData010.id = 10;
snUnknownData010.snName = "unknown-data-010";
snUnknownData010.category = "None";
snUnknownData010.default = -1;
snUnknownData010.min = -32768;
snUnknownData010.max = 32767;
snUnknownData010.rmin = -32768;
snUnknownData010.rmax = 32767;
snUnknownData010.network = 0;
snUnknownData010.defined = 0;
snUnknownData010.available = 0;
snUnknownData010.version = "1.0c";
snUnknownData010.linked = [];
snUnknownData010.related = [];
snUnknownData010.shortDescription = "Unused.";

snUnknownData011.id = 11;
snUnknownData011.snName = "unknown-data-011";
snUnknownData011.default = -1;
snUnknownData011.category = "None";
snUnknownData011.min = -32768;
snUnknownData011.max = 32767;
snUnknownData011.rmin = -32768;
snUnknownData011.rmax = 32767;
snUnknownData011.network = 0;
snUnknownData011.defined = 0;
snUnknownData011.available = 0;
snUnknownData011.version = "1.0c";
snUnknownData011.linked = [];
snUnknownData011.related = [];
snUnknownData011.shortDescription = "Unused.";

snUnknownData012.id = 12;
snUnknownData012.snName = "unknown-data-012";
snUnknownData012.default = -1;
snUnknownData012.category = "None";
snUnknownData012.min = -32768;
snUnknownData012.max = 32767;
snUnknownData012.rmin = -32768;
snUnknownData012.rmax = 32767;
snUnknownData012.network = 0;
snUnknownData012.defined = 0;
snUnknownData012.available = 0;
snUnknownData012.version = "1.0c";
snUnknownData012.linked = [];
snUnknownData012.related = [];
snUnknownData012.shortDescription = "Unused.";

snUnknownData013.id = 13;
snUnknownData013.snName = "unknown-data-013";
snUnknownData013.default = -1;
snUnknownData013.category = "None";
snUnknownData013.min = -32768;
snUnknownData013.max = 32767;
snUnknownData013.rmin = -32768;
snUnknownData013.rmax = 32767;
snUnknownData013.network = 0;
snUnknownData013.defined = 0;
snUnknownData013.available = 0;
snUnknownData013.version = "1.0c";
snUnknownData013.linked = [];
snUnknownData013.related = [];
snUnknownData013.shortDescription = "Unused.";

snUnknownData014.id = 14;
snUnknownData014.snName = "unknown-data-014";
snUnknownData014.default = -1;
snUnknownData014.category = "None";
snUnknownData014.min = -32768;
snUnknownData014.max = 32767;
snUnknownData014.rmin = -32768;
snUnknownData014.rmax = 32767;
snUnknownData014.network = 0;
snUnknownData014.defined = 0;
snUnknownData014.available = 0;
snUnknownData014.version = "1.0c";
snUnknownData014.linked = [];
snUnknownData014.related = [];
snUnknownData014.shortDescription = "Unused.";

snUnknownData015.id = 15;
snUnknownData015.snName = "unknown-data-015";
snUnknownData015.default = -1;
snUnknownData015.category = "None";
snUnknownData015.min = -32768;
snUnknownData015.max = 32767;
snUnknownData015.rmin = -32768;
snUnknownData015.rmax = 32767;
snUnknownData015.network = 0;
snUnknownData015.defined = 0;
snUnknownData015.available = 0;
snUnknownData015.version = "1.0c";
snUnknownData015.linked = [];
snUnknownData015.related = [];
snUnknownData015.shortDescription = "Unused.";

snMinimumAttackGroupSize.id = 16;
snMinimumAttackGroupSize.snName = "sn-minimum-attack-group-size";
snMinimumAttackGroupSize.default = 4;
snMinimumAttackGroupSize.category = "Attack";
snMinimumAttackGroupSize.min = -32768;
snMinimumAttackGroupSize.max = 32767;
snMinimumAttackGroupSize.rmin = 0;
snMinimumAttackGroupSize.rmax = 32767;
snMinimumAttackGroupSize.network = 0;
snMinimumAttackGroupSize.defined = 1;
snMinimumAttackGroupSize.available = 0;
snMinimumAttackGroupSize.version = "1.0c";
snMinimumAttackGroupSize.linked = [ 26, 36 ];
snMinimumAttackGroupSize.related = [ 58, 60, 59, 94, 93, 41, 98 ];
snMinimumAttackGroupSize.shortDescription = "Sets the minimum size of land-based attack groups. A group must meet its minimum size as one of the tasking prerequisites. The game can change this itself during the game.";

snUnknownData017.id = 17;
snUnknownData017.snName = "unknown-data-017";
snUnknownData017.default = -1;
snUnknownData017.category = "None";
snUnknownData017.min = -32768;
snUnknownData017.max = 32767;
snUnknownData017.rmin = -32768;
snUnknownData017.rmax = 32767;
snUnknownData017.network = 0;
snUnknownData017.defined = 0;
snUnknownData017.available = 0;
snUnknownData017.version = "1.0c";
snUnknownData017.linked = [];
snUnknownData017.related = [];
snUnknownData017.shortDescription = "Unused.";

snTotalNumberExplorers.id = 18;
snTotalNumberExplorers.snName = "sn-total-number-explorers";
snTotalNumberExplorers.default = 4;
snTotalNumberExplorers.category = "Explore";
snTotalNumberExplorers.min = -32768;
snTotalNumberExplorers.max = 32767;
snTotalNumberExplorers.rmin = -1;
snTotalNumberExplorers.rmax = 32767;
snTotalNumberExplorers.network = 0;
snTotalNumberExplorers.defined = 1;
snTotalNumberExplorers.available = 0;
snTotalNumberExplorers.version = "1.0c";
snTotalNumberExplorers.linked = [ 42, 61 ];
snTotalNumberExplorers.related = [ 3, 0, 35 ];
snTotalNumberExplorers.shortDescription = "Caps the total number of land explorers allocated. Factored in after the percentage of civilian explorers is calculated and the soldier groups are set up. Ignored when set to -1.";

snPercentEnemySightedResponse.id = 19;
snPercentEnemySightedResponse.snName = "sn-percent-enemy-sighted-response";
snPercentEnemySightedResponse.default = 50;
snPercentEnemySightedResponse.category = "Defense";
snPercentEnemySightedResponse.min = -32768;
snPercentEnemySightedResponse.max = 32767;
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
snEnemySightedResponseDistance.snName = "sn-enemy-sighted-response-distance";
snEnemySightedResponseDistance.default = 25;
snEnemySightedResponseDistance.category = "Attack";
snEnemySightedResponseDistance.min = -32768;
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
snUnknownData021.snName = "unknown-data-021";
snUnknownData021.default = -1;
snUnknownData021.category = "None";
snUnknownData021.min = -32768;
snUnknownData021.max = 32767;
snUnknownData021.rmin = -32768;
snUnknownData021.rmax = 32767;
snUnknownData021.network = 0;
snUnknownData021.defined = 0;
snUnknownData021.available = 0;
snUnknownData021.version = "1.0c";
snUnknownData021.linked = [];
snUnknownData021.related = [];
snUnknownData021.shortDescription = "Unused.";

snSentryDistance.id = 22;
snSentryDistance.snName = "sn-sentry-distance";
snSentryDistance.default = 12;
snSentryDistance.category = "Defense";
snSentryDistance.min = -32768;
snSentryDistance.max = 32767;
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
snRelicReturnDistance.snName = "sn-relic-return-distance";
snRelicReturnDistance.default = 10;
snRelicReturnDistance.category = "Economy";
snRelicReturnDistance.min = -32768;
snRelicReturnDistance.max = 32767;
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
snPercentVictoryClamp.snName = "sn-percent-victory-clamp";
snPercentVictoryClamp.default = 75;
snPercentVictoryClamp.category = "Other";
snPercentVictoryClamp.min = -32768;
snPercentVictoryClamp.max = 32767;
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
snMinimumDefendGroupSize.snName = "sn-minimum-defend-group-size";
snMinimumDefendGroupSize.default = 1;
snMinimumDefendGroupSize.category = "Defense";
snMinimumDefendGroupSize.min = -32768;
snMinimumDefendGroupSize.max = 32767;
snMinimumDefendGroupSize.rmin = 0;
snMinimumDefendGroupSize.rmax = 32767;
snMinimumDefendGroupSize.network = 0;
snMinimumDefendGroupSize.defined = 1;
snMinimumDefendGroupSize.available = 0;
snMinimumDefendGroupSize.version = "1.0c";
snMinimumDefendGroupSize.linked = [ 28, 38 ];
snMinimumDefendGroupSize.related = [ 67, 69, 68 ];
snMinimumDefendGroupSize.shortDescription = "Sets the minimum size of land-based defend groups. A group must meet its minimum size as one of the tasking prerequisites.";

snMaximumAttackGroupSize.id = 26;
snMaximumAttackGroupSize.snName = "sn-maximum-attack-group-size";
snMaximumAttackGroupSize.default = 10;
snMaximumAttackGroupSize.category = "Attack";
snMaximumAttackGroupSize.min = -32768;
snMaximumAttackGroupSize.max = 32767;
snMaximumAttackGroupSize.rmin = 0;
snMaximumAttackGroupSize.rmax = 32767;
snMaximumAttackGroupSize.network = 0;
snMaximumAttackGroupSize.defined = 1;
snMaximumAttackGroupSize.available = 0;
snMaximumAttackGroupSize.version = "1.0c";
snMaximumAttackGroupSize.linked = [ 16, 36 ];
snMaximumAttackGroupSize.related = [ 58, 60, 59, 94, 93, 41, 98 ];
snMaximumAttackGroupSize.shortDescription = "Sets the maximum size of land-based attack groups.";

snUnknownData027.id = 27;
snUnknownData027.snName = "unknown-data-027";
snUnknownData027.default = -1;
snUnknownData027.category = "None";
snUnknownData027.min = -32768;
snUnknownData027.max = 32767;
snUnknownData027.rmin = -32768;
snUnknownData027.rmax = 32767;
snUnknownData027.network = 0;
snUnknownData027.defined = 0;
snUnknownData027.available = 0;
snUnknownData027.version = "1.0c";
snUnknownData027.linked = [];
snUnknownData027.related = [];
snUnknownData027.shortDescription = "Unused.";

snMaximumDefendGroupSize.id = 28;
snMaximumDefendGroupSize.snName = "sn-maximum-defend-group-size";
snMaximumDefendGroupSize.default = 4;
snMaximumDefendGroupSize.category = "Defense";
snMaximumDefendGroupSize.min = -32768;
snMaximumDefendGroupSize.max = 32767;
snMaximumDefendGroupSize.rmin = 0;
snMaximumDefendGroupSize.rmax = 32767;
snMaximumDefendGroupSize.network = 0;
snMaximumDefendGroupSize.defined = 1;
snMaximumDefendGroupSize.available = 0;
snMaximumDefendGroupSize.version = "1.0c";
snMaximumDefendGroupSize.linked = [ 25, 38 ];
snMaximumDefendGroupSize.related = [ 67, 69, 68 ];
snMaximumDefendGroupSize.shortDescription = "Sets the maximum size of land-based defend groups.";

snMinimumPeaceLikeLevel.id = 29;
snMinimumPeaceLikeLevel.snName = "sn-minimum-peace-like-level";
snMinimumPeaceLikeLevel.default = 85;
snMinimumPeaceLikeLevel.category = "Defense";
snMinimumPeaceLikeLevel.min = -32768;
snMinimumPeaceLikeLevel.max = 32767;
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
snPercentHealthRetreat.snName = "sn-percent-health-retreat";
snPercentHealthRetreat.default = -1;
snPercentHealthRetreat.category = "AoE 1";
snPercentHealthRetreat.min = -32768;
snPercentHealthRetreat.max = 32767;
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
snPercentDeathRetreat.snName = "sn-percent-death-retreat";
snPercentDeathRetreat.default = -1;
snPercentDeathRetreat.category = "AoE 1";
snPercentDeathRetreat.min = -32768;
snPercentDeathRetreat.max = 32767;
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
snPercentExplorationRequired.snName = "sn-percent-exploration-required";
snPercentExplorationRequired.default = 100;
snPercentExplorationRequired.category = "Explore";
snPercentExplorationRequired.min = -32768;
snPercentExplorationRequired.max = 32767;
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
snUnknownData033.snName = "unknown-data-033";
snUnknownData033.default = -1;
snUnknownData033.category = "None";
snUnknownData033.min = -32768;
snUnknownData033.max = 32767;
snUnknownData033.rmin = -32768;
snUnknownData033.rmax = 32767;
snUnknownData033.network = 0;
snUnknownData033.defined = 0;
snUnknownData033.available = 0;
snUnknownData033.version = "1.0c";
snUnknownData033.linked = [];
snUnknownData033.related = [];
snUnknownData033.shortDescription = "Unused.";

snZeroPriorityDistance.id = 34;
snZeroPriorityDistance.snName = "sn-zero-priority-distance";
snZeroPriorityDistance.default = 50;
snZeroPriorityDistance.category = "Other";
snZeroPriorityDistance.min = -32768;
snZeroPriorityDistance.max = 32767;
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
snMinimumCivilianExplorers.snName = "sn-minimum-civilian-explorers";
snMinimumCivilianExplorers.default = 0;
snMinimumCivilianExplorers.category = "Explore";
snMinimumCivilianExplorers.min = -32768;
snMinimumCivilianExplorers.max = 32767;
snMinimumCivilianExplorers.rmin = 0;
snMinimumCivilianExplorers.rmax = 32767;
snMinimumCivilianExplorers.network = 0;
snMinimumCivilianExplorers.defined = 1;
snMinimumCivilianExplorers.available = 0;
snMinimumCivilianExplorers.version = "1.0c";
snMinimumCivilianExplorers.linked = [ 3, 0 ];
snMinimumCivilianExplorers.related = [ 18 ];
snMinimumCivilianExplorers.shortDescription = "Sets a minimum number of civilian explorers.";

snNumberAttackGroups.id = 36;
snNumberAttackGroups.snName = "sn-number-attack-groups";
snNumberAttackGroups.default = 0;
snNumberAttackGroups.category = "Attack";
snNumberAttackGroups.min = -32768;
snNumberAttackGroups.max = 32767;
snNumberAttackGroups.rmin = 0;
snNumberAttackGroups.rmax = 32767;
snNumberAttackGroups.network = 0;
snNumberAttackGroups.defined = 1;
snNumberAttackGroups.available = 0;
snNumberAttackGroups.version = "1.0c";
snNumberAttackGroups.linked = [ 26, 16 ];
snNumberAttackGroups.related = [ 58, 60, 59, 41, 98, 227, 247, 271 ];
snNumberAttackGroups.shortDescription = "Sets the desired number of land-based attack groups. Sn-percent-attack-soldiers generally works better.";

snAttackGroupMakeup.id = 37;
snAttackGroupMakeup.snName = "sn-attack-group-makeup";
snAttackGroupMakeup.default = 0;
snAttackGroupMakeup.category = "Attack";
snAttackGroupMakeup.min = -32768;
snAttackGroupMakeup.max = 32767;
snAttackGroupMakeup.rmin = -32768;
snAttackGroupMakeup.rmax = 32767;
snAttackGroupMakeup.network = 0;
snAttackGroupMakeup.defined = 0;
snAttackGroupMakeup.available = "seems available";
snAttackGroupMakeup.version = "1.0c";
snAttackGroupMakeup.linked = [];
snAttackGroupMakeup.related = [ 39, 45 ];
snAttackGroupMakeup.shortDescription = "Undocumented.";

snNumberDefendGroups.id = 38;
snNumberDefendGroups.snName = "sn-number-defend-groups";
snNumberDefendGroups.default = 0;
snNumberDefendGroups.category = "Defense";
snNumberDefendGroups.min = -32768;
snNumberDefendGroups.max = 32767;
snNumberDefendGroups.rmin = 0;
snNumberDefendGroups.rmax = 32767;
snNumberDefendGroups.network = 0;
snNumberDefendGroups.defined = 1;
snNumberDefendGroups.available = 0;
snNumberDefendGroups.version = "1.0c";
snNumberDefendGroups.linked = [ 28, 25 ];
snNumberDefendGroups.related = [ 67, 69, 68 ];
snNumberDefendGroups.shortDescription = "Sets the desired number of land-based defend groups.";

snDefendGroupMakeup.id = 39;
snDefendGroupMakeup.snName = "sn-defend-group-makeup";
snDefendGroupMakeup.default = 0;
snDefendGroupMakeup.category = "Defense";
snDefendGroupMakeup.min = -32768;
snDefendGroupMakeup.max = 32767;
snDefendGroupMakeup.rmin = -32768;
snDefendGroupMakeup.rmax = 32767;
snDefendGroupMakeup.network = 0;
snDefendGroupMakeup.defined = 0;
snDefendGroupMakeup.available = 1;
snDefendGroupMakeup.version = "1.0c";
snDefendGroupMakeup.linked = [];
snDefendGroupMakeup.related = [ 37, 45 ];
snDefendGroupMakeup.shortDescription = "Undocumented.";

snGroupFillMethod.id = 40;
snGroupFillMethod.snName = "sn-group-fill-method";
snGroupFillMethod.default = -1;
snGroupFillMethod.category = "AoE 1";
snGroupFillMethod.min = -32768;
snGroupFillMethod.max = 32767;
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
snAttackGroupGatherSpacing.snName = "sn-attack-group-gather-spacing";
snAttackGroupGatherSpacing.default = 4;
snAttackGroupGatherSpacing.category = "Attack";
snAttackGroupGatherSpacing.min = -32768;
snAttackGroupGatherSpacing.max = 32767;
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
snNumberExploreGroups.snName = "sn-number-explore-groups";
snNumberExploreGroups.default = 0;
snNumberExploreGroups.category = "Explore";
snNumberExploreGroups.min = -32768;
snNumberExploreGroups.max = 32767;
snNumberExploreGroups.rmin = 0;
snNumberExploreGroups.rmax = 32767;
snNumberExploreGroups.network = 0;
snNumberExploreGroups.defined = 1;
snNumberExploreGroups.available = 0;
snNumberExploreGroups.version = "1.0c";
snNumberExploreGroups.linked = [ 44, 43 ];
snNumberExploreGroups.related = [ 61, 63, 62, 18 ];
snNumberExploreGroups.shortDescription = "Sets the desired number of land-based soldier exploration groups.";

snMinimumExploreGroupSize.id = 43;
snMinimumExploreGroupSize.snName = "sn-minimum-explore-group-size";
snMinimumExploreGroupSize.default = 1;
snMinimumExploreGroupSize.category = "Explore";
snMinimumExploreGroupSize.min = -32768;
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
snMaximumExploreGroupSize.snName = "sn-maximum-explore-group-size";
snMaximumExploreGroupSize.default = 1;
snMaximumExploreGroupSize.category = "Explore";
snMaximumExploreGroupSize.min = -32768;
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
snExploreGroupMakeup.snName = "sn-explore-group-makeup";
snExploreGroupMakeup.default = 0;
snExploreGroupMakeup.category = "Explore";
snExploreGroupMakeup.min = -32768;
snExploreGroupMakeup.max = 32767;
snExploreGroupMakeup.rmin = -32768;
snExploreGroupMakeup.rmax = 32767;
snExploreGroupMakeup.network = 0;
snExploreGroupMakeup.defined = 0;
snExploreGroupMakeup.available = 1;
snExploreGroupMakeup.version = "1.0c";
snExploreGroupMakeup.linked = [];
snExploreGroupMakeup.related = [ 37, 39 ];
snExploreGroupMakeup.shortDescription = "Undocumented.";

snAttackSeparationTime.id = 46;
snAttackSeparationTime.snName = "sn-attack-separation-time";
snAttackSeparationTime.default = -1;
snAttackSeparationTime.category = "AoE 1";
snAttackSeparationTime.min = -32768;
snAttackSeparationTime.max = 32767;
snAttackSeparationTime.rmin = 0;
snAttackSeparationTime.rmax = 32767;
snAttackSeparationTime.network = 0;
snAttackSeparationTime.defined = 0;
snAttackSeparationTime.available = "seems available, but leave it for later";
snAttackSeparationTime.version = "1.0c";
snAttackSeparationTime.linked = [ 102 ];
snAttackSeparationTime.related = [ 48, 71 ];
snAttackSeparationTime.shortDescription = "AoE 1 only. Sets the amount of time that must pass between computer player attacks. Must be &gt;= 0.";

snAttackCoordination.id = 47;
snAttackCoordination.snName = "sn-attack-coordination";
snAttackCoordination.default = -1;
snAttackCoordination.category = "AoE 1";
snAttackCoordination.min = -32768;
snAttackCoordination.max = 32767;
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
snAttackResponseSeparationTime.snName = "sn-attack-response-separation-time";
snAttackResponseSeparationTime.default = -1;
snAttackResponseSeparationTime.category = "AoE 1";
snAttackResponseSeparationTime.min = -32768;
snAttackResponseSeparationTime.max = 32767;
snAttackResponseSeparationTime.rmin = 0;
snAttackResponseSeparationTime.rmax = 32767;
snAttackResponseSeparationTime.network = 0;
snAttackResponseSeparationTime.defined = 0;
snAttackResponseSeparationTime.available = "seems available, but leave it for later";
snAttackResponseSeparationTime.version = "1.0c";
snAttackResponseSeparationTime.linked = [];
snAttackResponseSeparationTime.related = [ 46, 71 ];
snAttackResponseSeparationTime.shortDescription = "AoE 1 only. Sets the amount of time that must pass before units respond to a subsequent enemy attack distress call. Must be &gt;= 0.";

snRetreatAfterTargetDestroyed.id = 49;
snRetreatAfterTargetDestroyed.snName = "sn-retreat-after-target-destroyed";
snRetreatAfterTargetDestroyed.default = -1;
snRetreatAfterTargetDestroyed.category = "AoE 1";
snRetreatAfterTargetDestroyed.min = -32768;
snRetreatAfterTargetDestroyed.max = 32767;
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
snGoldDefendPriority.snName = "sn-gold-defend-priority";
snGoldDefendPriority.default = 0;
snGoldDefendPriority.category = "Defense";
snGoldDefendPriority.min = -32768;
snGoldDefendPriority.max = 32767;
snGoldDefendPriority.rmin = 0;
snGoldDefendPriority.rmax = 1;
snGoldDefendPriority.network = 0;
snGoldDefendPriority.defined = 1;
snGoldDefendPriority.available = 0;
snGoldDefendPriority.version = "1.0c";
snGoldDefendPriority.linked = [];
snGoldDefendPriority.related = [ 56, 70, 52, 51, 55, 54, 53, 287 ];
snGoldDefendPriority.shortDescription = "Allows gold mines to be added to the targetable sighted objects list.";
snGoldDefendPriority.description = "Allows gold mines to be added to the targetable sighted objects list. However, since Userpatch 1.4, gold mines are targetable by default, so this SN is no longer necessary.</p><p>Note: the original CPSB description was incorrect. It stated this: Sets the priority of defending gold. A priority of 0 means that gold will not be defended. A priority of 1 means that gold has the highest defend priority.";

snStoneDefendPriority.id = 51;
snStoneDefendPriority.snName = "sn-stone-defend-priority";
snStoneDefendPriority.default = 0;
snStoneDefendPriority.category = "Defense";
snStoneDefendPriority.min = -32768;
snStoneDefendPriority.max = 32767;
snStoneDefendPriority.rmin = 0;
snStoneDefendPriority.rmax = 1;
snStoneDefendPriority.network = 0;
snStoneDefendPriority.defined = 1;
snStoneDefendPriority.available = 0;
snStoneDefendPriority.version = "1.0c";
snStoneDefendPriority.linked = [];
snStoneDefendPriority.related = [ 56, 70, 52, 50, 55, 54, 53, 287 ];
snStoneDefendPriority.shortDescription = "Allows stone mines to be added to the targetable sighted objects list.";
snStoneDefendPriority.description = "Allows stone mines to be added to the targetable sighted objects list. However, since Userpatch 1.4, stone mines are targetable by default, so this SN is no longer necessary.</p><p>Note: the original CPSB description was incorrect. It stated this: Sets the priority of defending stone. A priority of 0 means that stone will not be defended. A priority of 1 means that stone has the highest defend priority.";

snForageDefendPriority.id = 52;
snForageDefendPriority.snName = "sn-forage-defend-priority";
snForageDefendPriority.default = 0;
snForageDefendPriority.category = "Defense";
snForageDefendPriority.min = -32768;
snForageDefendPriority.max = 32767;
snForageDefendPriority.rmin = 0;
snForageDefendPriority.rmax = 1;
snForageDefendPriority.network = 0;
snForageDefendPriority.defined = 1;
snForageDefendPriority.available = 0;
snForageDefendPriority.version = "1.0c";
snForageDefendPriority.linked = [];
snForageDefendPriority.related = [ 56, 70, 51, 50, 55, 54, 53, 287 ];
snForageDefendPriority.shortDescription = "Allows forage bush class objects to be added to the targetable sighted objects list.";
snForageDefendPriority.description = "Allows forage bush class objects to be added to the targetable sighted objects list. However, since Userpatch 1.4, forage bushes are targetable by default, so this SN is no longer necessary.</p><p>Note: the original CPSB description was incorrect. It stated this: Sets the priority of defending forage sites.";

snChokePointDefendPriority.id = 53;
snChokePointDefendPriority.snName = "sn-choke-point-defend-priority";
snChokePointDefendPriority.default = 0;
snChokePointDefendPriority.category = "Defense";
snChokePointDefendPriority.min = -32768;
snChokePointDefendPriority.max = 32767;
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
snRuinsDefendPriority.snName = "sn-ruins-defend-priority";
snRuinsDefendPriority.default = 0;
snRuinsDefendPriority.category = "AoE 1";
snRuinsDefendPriority.min = -32768;
snRuinsDefendPriority.max = 32767;
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
snRelicDefendPriority.snName = "sn-relic-defend-priority";
snRelicDefendPriority.default = 0;
snRelicDefendPriority.category = "Defense";
snRelicDefendPriority.min = -32768;
snRelicDefendPriority.max = 32767;
snRelicDefendPriority.rmin = 0;
snRelicDefendPriority.rmax = 7;
snRelicDefendPriority.network = 0;
snRelicDefendPriority.defined = 1;
snRelicDefendPriority.available = 1;
snRelicDefendPriority.version = "1.0c";
snRelicDefendPriority.linked = [];
snRelicDefendPriority.related = [ 56, 70, 52, 51, 50, 54, 53, 287 ];
snRelicDefendPriority.shortDescription = "Allows relics to be added to the targetable sighted objects list.";
snRelicDefendPriority.description = "Allows relics to be added to the targetable sighted objects list. However, relics have always been targetable by default, so this SN is not necessary.</p><p>Note: the original CPSB description was incorrect. It stated this: Sets the priority of defending relic carts.";

snTownDefendPriority.id = 56;
snTownDefendPriority.snName = "sn-town-defend-priority";
snTownDefendPriority.default = 7;
snTownDefendPriority.category = "Defense";
snTownDefendPriority.min = -32768;
snTownDefendPriority.max = 32767;
snTownDefendPriority.rmin = 0;
snTownDefendPriority.rmax = 7;
snTownDefendPriority.network = 0;
snTownDefendPriority.defined = 1;
snTownDefendPriority.available = 0;
snTownDefendPriority.version = "1.0c";
snTownDefendPriority.linked = [];
snTownDefendPriority.related = [ 70, 52, 51, 50, 55, 54, 53, 287 ];
snTownDefendPriority.shortDescription = "Allows town centers to be added to the targetable sighted objects list.";
snTownDefendPriority.description = "Allows town centers to be added to the targetable sighted objects list. However, town centers have always been targetable by default, so this SN is not necessary.</p><p>Note: the original CPSB description was incorrect. It stated this: Sets the priority of defending the computer player's town.";

snDefenseDistance.id = 57;
snDefenseDistance.snName = "sn-defense-distance";
snDefenseDistance.default = 3;
snDefenseDistance.category = "Defense";
snDefenseDistance.min = -32768;
snDefenseDistance.max = 32767;
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
snNumberBoatAttackGroups.snName = "sn-number-boat-attack-groups";
snNumberBoatAttackGroups.default = 0;
snNumberBoatAttackGroups.category = "Water";
snNumberBoatAttackGroups.min = -32768;
snNumberBoatAttackGroups.max = 32767;
snNumberBoatAttackGroups.rmin = 0;
snNumberBoatAttackGroups.rmax = 32767;
snNumberBoatAttackGroups.network = 0;
snNumberBoatAttackGroups.defined = 1;
snNumberBoatAttackGroups.available = "available, except for water maps";
snNumberBoatAttackGroups.version = "1.0c";
snNumberBoatAttackGroups.linked = [ 60, 59 ];
snNumberBoatAttackGroups.related = [ 36, 26, 16, 41, 98, 228, 247 ];
snNumberBoatAttackGroups.shortDescription = "Sets the desired number of boat attack groups. Setting sn-percent-attack-boat usually works better.";

snMinimumBoatAttackGroupSize.id = 59;
snMinimumBoatAttackGroupSize.snName = "sn-minimum-boat-attack-group-size";
snMinimumBoatAttackGroupSize.default = 1;
snMinimumBoatAttackGroupSize.category = "Water";
snMinimumBoatAttackGroupSize.min = -32768;
snMinimumBoatAttackGroupSize.max = 32767;
snMinimumBoatAttackGroupSize.rmin = 0;
snMinimumBoatAttackGroupSize.rmax = 32767;
snMinimumBoatAttackGroupSize.network = 0;
snMinimumBoatAttackGroupSize.defined = 1;
snMinimumBoatAttackGroupSize.available = "available, except for water maps";
snMinimumBoatAttackGroupSize.version = "1.0c";
snMinimumBoatAttackGroupSize.linked = [ 60, 58 ];
snMinimumBoatAttackGroupSize.related = [ 36, 26, 16, 94, 93, 41, 98 ];
snMinimumBoatAttackGroupSize.shortDescription = "Sets the minimum size of boat attack groups. A group must meet its minimum size as one of the tasking prerequisites.";

snMaximumBoatAttackGroupSize.id = 60;
snMaximumBoatAttackGroupSize.snName = "sn-maximum-boat-attack-group-size";
snMaximumBoatAttackGroupSize.default = 5;
snMaximumBoatAttackGroupSize.category = "Water";
snMaximumBoatAttackGroupSize.min = -32768;
snMaximumBoatAttackGroupSize.max = 32767;
snMaximumBoatAttackGroupSize.rmin = 0;
snMaximumBoatAttackGroupSize.rmax = 32767;
snMaximumBoatAttackGroupSize.network = 0;
snMaximumBoatAttackGroupSize.defined = 1;
snMaximumBoatAttackGroupSize.available = "available, except for water maps";
snMaximumBoatAttackGroupSize.version = "1.0c";
snMaximumBoatAttackGroupSize.linked = [ 59, 58 ];
snMaximumBoatAttackGroupSize.related = [ 36, 26, 16, 94, 93, 41, 98 ];
snMaximumBoatAttackGroupSize.shortDescription = "Sets the maximum size of boat attack groups.";

snNumberBoatExploreGroups.id = 61;
snNumberBoatExploreGroups.snName = "sn-number-boat-explore-groups";
snNumberBoatExploreGroups.default = 0;
snNumberBoatExploreGroups.category = "Water";
snNumberBoatExploreGroups.min = -32768;
snNumberBoatExploreGroups.max = 32767;
snNumberBoatExploreGroups.rmin = 0;
snNumberBoatExploreGroups.rmax = 32767;
snNumberBoatExploreGroups.network = 0;
snNumberBoatExploreGroups.defined = 1;
snNumberBoatExploreGroups.available = "available, except for water maps";
snNumberBoatExploreGroups.version = "1.0c";
snNumberBoatExploreGroups.linked = [ 63, 62 ];
snNumberBoatExploreGroups.related = [ 42, 44, 43, 18 ];
snNumberBoatExploreGroups.shortDescription = "Sets the desired number of military boat exploration groups. This is not affected by sn-total-number-explorers.";

snMinimumBoatExploreGroupSize.id = 62;
snMinimumBoatExploreGroupSize.snName = "sn-minimum-boat-explore-group-size";
snMinimumBoatExploreGroupSize.default = 1;
snMinimumBoatExploreGroupSize.category = "Water";
snMinimumBoatExploreGroupSize.min = -32768;
snMinimumBoatExploreGroupSize.max = 32767;
snMinimumBoatExploreGroupSize.rmin = 0;
snMinimumBoatExploreGroupSize.rmax = 32767;
snMinimumBoatExploreGroupSize.network = 0;
snMinimumBoatExploreGroupSize.defined = 1;
snMinimumBoatExploreGroupSize.available = "available, except for water maps";
snMinimumBoatExploreGroupSize.version = "1.0c";
snMinimumBoatExploreGroupSize.linked = [ 63, 61 ];
snMinimumBoatExploreGroupSize.related = [ 42, 44, 43, 18 ];
snMinimumBoatExploreGroupSize.shortDescription = "Sets the minimum size of boat exploration groups.";

snMaximumBoatExploreGroupSize.id = 63;
snMaximumBoatExploreGroupSize.snName = "sn-maximum-boat-explore-group-size";
snMaximumBoatExploreGroupSize.default = 2;
snMaximumBoatExploreGroupSize.category = "Water";
snMaximumBoatExploreGroupSize.min = -32768;
snMaximumBoatExploreGroupSize.max = 32767;
snMaximumBoatExploreGroupSize.rmin = 0;
snMaximumBoatExploreGroupSize.rmax = 32767;
snMaximumBoatExploreGroupSize.network = 0;
snMaximumBoatExploreGroupSize.defined = 1;
snMaximumBoatExploreGroupSize.available = "available, except for water maps";
snMaximumBoatExploreGroupSize.version = "1.0c";
snMaximumBoatExploreGroupSize.linked = [ 62, 61 ];
snMaximumBoatExploreGroupSize.related = [ 42, 44, 43, 18 ];
snMaximumBoatExploreGroupSize.shortDescription = "Sets the maximum size of boat exploration groups.";

snDesiredNumberTradeEscorts.id = 64;
snDesiredNumberTradeEscorts.snName = "sn-desired-number-trade-escorts";
snDesiredNumberTradeEscorts.default = -1;
snDesiredNumberTradeEscorts.category = "AoE 1";
snDesiredNumberTradeEscorts.min = -32768;
snDesiredNumberTradeEscorts.max = 32767;
snDesiredNumberTradeEscorts.rmin = 0;
snDesiredNumberTradeEscorts.rmax = 32767;
snDesiredNumberTradeEscorts.network = 0;
snDesiredNumberTradeEscorts.defined = 0;
snDesiredNumberTradeEscorts.available = 1;
snDesiredNumberTradeEscorts.version = "1.0c";
snDesiredNumberTradeEscorts.linked = [];
snDesiredNumberTradeEscorts.related = [];
snDesiredNumberTradeEscorts.shortDescription = "AoE 1 only. Sets the desired number of warboat escorts for tradeboats. Must be &gt;= 0.";

snDesiredNumberFishEscorts.id = 65;
snDesiredNumberFishEscorts.snName = "sn-desired-number-fish-escorts";
snDesiredNumberFishEscorts.default = -1;
snDesiredNumberFishEscorts.category = "AoE 1";
snDesiredNumberFishEscorts.min = -32768;
snDesiredNumberFishEscorts.max = 32767;
snDesiredNumberFishEscorts.rmin = 0;
snDesiredNumberFishEscorts.rmax = 32767;
snDesiredNumberFishEscorts.network = 0;
snDesiredNumberFishEscorts.defined = 0;
snDesiredNumberFishEscorts.available = 1;
snDesiredNumberFishEscorts.version = "1.0c";
snDesiredNumberFishEscorts.linked = [];
snDesiredNumberFishEscorts.related = [];
snDesiredNumberFishEscorts.shortDescription = "AoE 1 only. Sets the desired number of warboat escorts for fishing boats. Must be &gt;= 0.";

snDesiredNumberTransportEscorts.id = 66;
snDesiredNumberTransportEscorts.snName = "sn-desired-number-transport-escorts";
snDesiredNumberTransportEscorts.default = 0;
snDesiredNumberTransportEscorts.category = "AoE 1";
snDesiredNumberTransportEscorts.min = -32768;
snDesiredNumberTransportEscorts.max = 32767;
snDesiredNumberTransportEscorts.rmin = 0;
snDesiredNumberTransportEscorts.rmax = 32767;
snDesiredNumberTransportEscorts.network = 0;
snDesiredNumberTransportEscorts.defined = 0;
snDesiredNumberTransportEscorts.available = 1;
snDesiredNumberTransportEscorts.version = "1.0c";
snDesiredNumberTransportEscorts.linked = [];
snDesiredNumberTransportEscorts.related = [];
snDesiredNumberTransportEscorts.shortDescription = "AoE 1 only. Sets the desired number of warboat escorts for transports. Must be &gt;= 0.";

snNumberBoatDefendGroups.id = 67;
snNumberBoatDefendGroups.snName = "sn-number-boat-defend-groups";
snNumberBoatDefendGroups.default = 0;
snNumberBoatDefendGroups.category = "Water";
snNumberBoatDefendGroups.min = -32768;
snNumberBoatDefendGroups.max = 32767;
snNumberBoatDefendGroups.rmin = 0;
snNumberBoatDefendGroups.rmax = 32767;
snNumberBoatDefendGroups.network = 0;
snNumberBoatDefendGroups.defined = 1;
snNumberBoatDefendGroups.available = "available, except for water maps";
snNumberBoatDefendGroups.version = "1.0c";
snNumberBoatDefendGroups.linked = [ 69, 68 ];
snNumberBoatDefendGroups.related = [ 38, 28, 25 ];
snNumberBoatDefendGroups.shortDescription = "Sets the desired number of boat defend groups.";

snMinimumBoatDefendGroupSize.id = 68;
snMinimumBoatDefendGroupSize.snName = "sn-minimum-boat-defend-group-size";
snMinimumBoatDefendGroupSize.default = 0;
snMinimumBoatDefendGroupSize.category = "Water";
snMinimumBoatDefendGroupSize.min = -32768;
snMinimumBoatDefendGroupSize.max = 32767;
snMinimumBoatDefendGroupSize.rmin = 0;
snMinimumBoatDefendGroupSize.rmax = 32767;
snMinimumBoatDefendGroupSize.network = 0;
snMinimumBoatDefendGroupSize.defined = 1;
snMinimumBoatDefendGroupSize.available = "available, except for water maps";
snMinimumBoatDefendGroupSize.version = "1.0c";
snMinimumBoatDefendGroupSize.linked = [ 69, 67 ];
snMinimumBoatDefendGroupSize.related = [ 38, 28, 25 ];
snMinimumBoatDefendGroupSize.shortDescription = "Sets the minimum size of boat defend groups.";

snMaximumBoatDefendGroupSize.id = 69;
snMaximumBoatDefendGroupSize.snName = "sn-maximum-boat-defend-group-size";
snMaximumBoatDefendGroupSize.default = 0;
snMaximumBoatDefendGroupSize.category = "Water";
snMaximumBoatDefendGroupSize.min = -32768;
snMaximumBoatDefendGroupSize.max = 32767;
snMaximumBoatDefendGroupSize.rmin = 0;
snMaximumBoatDefendGroupSize.rmax = 32767;
snMaximumBoatDefendGroupSize.network = 0;
snMaximumBoatDefendGroupSize.defined = 1;
snMaximumBoatDefendGroupSize.available = "available, except for water maps";
snMaximumBoatDefendGroupSize.version = "1.0c";
snMaximumBoatDefendGroupSize.linked = [ 68, 67 ];
snMaximumBoatDefendGroupSize.related = [ 38, 28, 25 ];
snMaximumBoatDefendGroupSize.shortDescription = "Sets the maximum size of boat defend groups.";

snDockDefendPriority.id = 70;
snDockDefendPriority.snName = "sn-dock-defend-priority";
snDockDefendPriority.default = 0;
snDockDefendPriority.category = "Defense";
snDockDefendPriority.min = -32768;
snDockDefendPriority.max = 32767;
snDockDefendPriority.rmin = 0;
snDockDefendPriority.rmax = 1;
snDockDefendPriority.network = 0;
snDockDefendPriority.defined = 1;
snDockDefendPriority.available = "available, except for water maps";
snDockDefendPriority.version = "1.0c";
snDockDefendPriority.linked = [];
snDockDefendPriority.related = [ 56, 52, 51, 50, 55, 54, 53, 287 ];
snDockDefendPriority.shortDescription = "Allows docks to be added to the targetable sighted objects list.";
snDockDefendPriority.description = "Allows docks to be added to the targetable sighted objects list. However, docks have always been targetable by default, so this SN is not necessary.</p><p>Note: the original CPSB description was incorrect. It stated this: Sets the priority of defending the dock.";

snLockAndAttackResponse.id = 71;
snLockAndAttackResponse.snName = "sn-lock-attack-and-attack-response";
snLockAndAttackResponse.default = -1;
snLockAndAttackResponse.category = "AoE 1";
snLockAndAttackResponse.min = -32768;
snLockAndAttackResponse.max = 32767;
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
snSentryDistanceVariation.snName = "sn-sentry-distance-variation";
snSentryDistanceVariation.default = 2;
snSentryDistanceVariation.category = "Defense";
snSentryDistanceVariation.min = -32768;
snSentryDistanceVariation.max = 32767;
snSentryDistanceVariation.rmin = 0;
snSentryDistanceVariation.rmax = 32767;
snSentryDistanceVariation.network = 0;
snSentryDistanceVariation.defined = 1;
snSentryDistanceVariation.available = 0;
snSentryDistanceVariation.version = "1.0c";
snSentryDistanceVariation.linked = [ 22 ];
snSentryDistanceVariation.related = [ 57, 92 ];
snSentryDistanceVariation.shortDescription = "Sets the amount of allowable variation in the defense distances.";

snMinimumTownSize.id = 73;
snMinimumTownSize.snName = "sn-minimum-town-size";
snMinimumTownSize.default = 12;
snMinimumTownSize.category = "Economy";
snMinimumTownSize.min = -32768;
snMinimumTownSize.max = 32767;
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
snMaximumTownSize.snName = "sn-maximum-town-size";
snMaximumTownSize.default = 20;
snMaximumTownSize.category = "Economy";
snMaximumTownSize.min = -32768;
snMaximumTownSize.max = 32767;
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
snGroupCommanderSelectionMethod.snName = "sn-group-commander-selection-method";
snGroupCommanderSelectionMethod.default = 3;
snGroupCommanderSelectionMethod.category = "Attack";
snGroupCommanderSelectionMethod.min = -32768;
snGroupCommanderSelectionMethod.max = 32767;
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
snConsecutiveIdleUnitLimit.snName = "sn-consecutive-idle-unit-limit";
snConsecutiveIdleUnitLimit.default = 15;
snConsecutiveIdleUnitLimit.category = "Attack";
snConsecutiveIdleUnitLimit.min = -32768;
snConsecutiveIdleUnitLimit.max = 32767;
snConsecutiveIdleUnitLimit.rmin = 0;
snConsecutiveIdleUnitLimit.rmax = 32767;
snConsecutiveIdleUnitLimit.network = 0;
snConsecutiveIdleUnitLimit.defined = 1;
snConsecutiveIdleUnitLimit.available = "available, but only before militarization";
snConsecutiveIdleUnitLimit.version = "1.0c";
snConsecutiveIdleUnitLimit.linked = [];
snConsecutiveIdleUnitLimit.related = [];
snConsecutiveIdleUnitLimit.shortDescription = "Sets the number of consecutive seconds that pass before a group is set to idle if all of its units are idle. This is only used during attack and retreat phases.";

snTargetEvaluationDistance.id = 77;
snTargetEvaluationDistance.snName = "sn-target-evaluation-distance";
snTargetEvaluationDistance.default = 50;
snTargetEvaluationDistance.category = "Attack";
snTargetEvaluationDistance.min = -32768;
snTargetEvaluationDistance.max = 32767;
snTargetEvaluationDistance.rmin = -32768;
snTargetEvaluationDistance.rmax = 32767;
snTargetEvaluationDistance.network = 0;
snTargetEvaluationDistance.defined = 1;
snTargetEvaluationDistance.available = 0;
snTargetEvaluationDistance.version = "1.0c";
snTargetEvaluationDistance.linked = [ 81, 89, 144, 122, 79, 78, 185, 80, 83, 90, 82, 123, 184 ];
snTargetEvaluationDistance.related = [];
snTargetEvaluationDistance.shortDescription = "Sets the multiplier used for the distance rating in computer player target evaluation.";

snTargetEvaluationHitpoints.id = 78;
snTargetEvaluationHitpoints.snName = "sn-target-evaluation-hitpoints";
snTargetEvaluationHitpoints.default = 0;
snTargetEvaluationHitpoints.category = "Attack";
snTargetEvaluationHitpoints.min = -32768;
snTargetEvaluationHitpoints.max = 32767;
snTargetEvaluationHitpoints.rmin = -32768;
snTargetEvaluationHitpoints.rmax = 32767;
snTargetEvaluationHitpoints.network = 0;
snTargetEvaluationHitpoints.defined = 1;
snTargetEvaluationHitpoints.available = 0;
snTargetEvaluationHitpoints.version = "1.0c";
snTargetEvaluationHitpoints.linked = [ 81, 89, 144, 122, 79, 77, 185, 80, 83, 90, 82, 123, 184 ];
snTargetEvaluationHitpoints.related = [];
snTargetEvaluationHitpoints.shortDescription = "Sets the multiplier used for the hit point rating in computer player target evaluation.";

snTargetEvaluationDamageCapability.id = 79;
snTargetEvaluationDamageCapability.snName = "sn-target-evaluation-damage-capability";
snTargetEvaluationDamageCapability.default = 0;
snTargetEvaluationDamageCapability.category = "Attack";
snTargetEvaluationDamageCapability.min = -32768;
snTargetEvaluationDamageCapability.max = 32767;
snTargetEvaluationDamageCapability.rmin = -32768;
snTargetEvaluationDamageCapability.rmax = 32767;
snTargetEvaluationDamageCapability.network = 0;
snTargetEvaluationDamageCapability.defined = 1;
snTargetEvaluationDamageCapability.available = 0;
snTargetEvaluationDamageCapability.version = "1.0c";
snTargetEvaluationDamageCapability.linked = [ 81, 89, 144, 122, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
snTargetEvaluationDamageCapability.related = [];
snTargetEvaluationDamageCapability.shortDescription = "Sets the multiplier used for the damage capability rating in computer player target evaluation.";

snTargetEvaluationKills.id = 80;
snTargetEvaluationKills.snName = "sn-target-evaluation-kills";
snTargetEvaluationKills.default = 0;
snTargetEvaluationKills.category = "Attack";
snTargetEvaluationKills.min = -32768;
snTargetEvaluationKills.max = 32767;
snTargetEvaluationKills.rmin = -32768;
snTargetEvaluationKills.rmax = 32767;
snTargetEvaluationKills.network = 0;
snTargetEvaluationKills.defined = 1;
snTargetEvaluationKills.available = 0;
snTargetEvaluationKills.version = "1.0c";
snTargetEvaluationKills.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 83, 90, 82, 123, 184 ];
snTargetEvaluationKills.related = [];
snTargetEvaluationKills.shortDescription = "Sets the multiplier used for the kill rating in computer player target evaluation.";

snTargetEvaluationAllyProximity.id = 81;
snTargetEvaluationAllyProximity.snName = "sn-target-evaluation-ally-proximity";
snTargetEvaluationAllyProximity.default = 0;
snTargetEvaluationAllyProximity.category = "Attack";
snTargetEvaluationAllyProximity.min = -32768;
snTargetEvaluationAllyProximity.max = 32767;
snTargetEvaluationAllyProximity.rmin = -32768;
snTargetEvaluationAllyProximity.rmax = 32767;
snTargetEvaluationAllyProximity.network = 0;
snTargetEvaluationAllyProximity.defined = 1;
snTargetEvaluationAllyProximity.available = 0;
snTargetEvaluationAllyProximity.version = "1.0c";
snTargetEvaluationAllyProximity.linked = [ 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
snTargetEvaluationAllyProximity.related = [];
snTargetEvaluationAllyProximity.shortDescription = "Sets the multiplier used for the ally proximity (number of allies in range) rating in computer player target evaluation.";

snTargetEvaluationRof.id = 82;
snTargetEvaluationRof.snName = "sn-target-evaluation-rof";
snTargetEvaluationRof.default = 0;
snTargetEvaluationRof.category = "Attack";
snTargetEvaluationRof.min = -32768;
snTargetEvaluationRof.max = 32767;
snTargetEvaluationRof.rmin = -32768;
snTargetEvaluationRof.rmax = 32767;
snTargetEvaluationRof.network = 0;
snTargetEvaluationRof.defined = 1;
snTargetEvaluationRof.available = 0;
snTargetEvaluationRof.version = "1.0c";
snTargetEvaluationRof.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 123, 184 ];
snTargetEvaluationRof.related = [];
snTargetEvaluationRof.shortDescription = "Sets the multiplier used for the rate of fire rating in computer player target evaluation.";

snTargetEvaluationRandomness.id = 83;
snTargetEvaluationRandomness.snName = "sn-target-evaluation-randomness";
snTargetEvaluationRandomness.default = 0;
snTargetEvaluationRandomness.category = "Attack";
snTargetEvaluationRandomness.min = -32768;
snTargetEvaluationRandomness.max = 32767;
snTargetEvaluationRandomness.rmin = -32768;
snTargetEvaluationRandomness.rmax = 32767;
snTargetEvaluationRandomness.network = 0;
snTargetEvaluationRandomness.defined = 1;
snTargetEvaluationRandomness.available = 0;
snTargetEvaluationRandomness.version = "1.0c";
snTargetEvaluationRandomness.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 90, 82, 123, 184 ];
snTargetEvaluationRandomness.related = [];
snTargetEvaluationRandomness.shortDescription = "Sets the multiplier used for the randomness factor in computer player target evaluation.";

snNumberWallGates.id = 84;
snNumberWallGates.snName = "sn-number-wall-gates";
snNumberWallGates.default = -1;
snNumberWallGates.category = "AoE 1";
snNumberWallGates.min = -32768;
snNumberWallGates.max = 32767;
snNumberWallGates.rmin = 0;
snNumberWallGates.rmax = 32767;
snNumberWallGates.network = 0;
snNumberWallGates.defined = 0;
snNumberWallGates.available = "seems available, if you will not build walls";
snNumberWallGates.version = "1.0c";
snNumberWallGates.linked = [];
snNumberWallGates.related = [];
snNumberWallGates.shortDescription = "AoE 1 only. Sets the number of gates that must be left in the wall around a computer player's town. Must be &gt;= 0.";

snSizeWallGates.id = 85;
snSizeWallGates.snName = "sn-size-wall-gates";
snSizeWallGates.default = -1;
snSizeWallGates.category = "AoE 1";
snSizeWallGates.min = -32768;
snSizeWallGates.max = 32767;
snSizeWallGates.rmin = 0;
snSizeWallGates.rmax = 32767;
snSizeWallGates.network = 0;
snSizeWallGates.defined = 0;
snSizeWallGates.available = 1;
snSizeWallGates.version = "1.0c";
snSizeWallGates.linked = [];
snSizeWallGates.related = [];
snSizeWallGates.shortDescription = "AoE 1 only. Sets the size (in tiles) of the gates in the wall around a computer player's town. Must be &gt;= 0.";

snCampMaxDistance.id = 86;
snCampMaxDistance.snName = "sn-camp-max-distance";
snCampMaxDistance.default = 25;
snCampMaxDistance.category = "Economy";
snCampMaxDistance.min = -32768;
snCampMaxDistance.max = 32767;
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
snMillMaxDistance.snName = "sn-mill-max-distance";
snMillMaxDistance.default = 100;
snMillMaxDistance.category = "Economy";
snMillMaxDistance.min = -32768;
snMillMaxDistance.max = 32767;
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
snTacticalUpdateFrequency.snName = "sn-tactical-update-frequency";
snTacticalUpdateFrequency.default = -1;
snTacticalUpdateFrequency.category = "AoE 1";
snTacticalUpdateFrequency.min = -32768;
snTacticalUpdateFrequency.max = 32767;
snTacticalUpdateFrequency.rmin = 0;
snTacticalUpdateFrequency.rmax = 32767;
snTacticalUpdateFrequency.network = 0;
snTacticalUpdateFrequency.defined = 0;
snTacticalUpdateFrequency.available = 0;
snTacticalUpdateFrequency.version = "1.0c";
snTacticalUpdateFrequency.linked = [];
snTacticalUpdateFrequency.related = [];
snTacticalUpdateFrequency.shortDescription = "AoE 1 only. Sets the number of seconds that pass between each tactical AI update. Must be &gt;= 0.";

snTargetEvaluationAttackAttempts.id = 89;
snTargetEvaluationAttackAttempts.snName = "sn-target-evaluation-attack-attempts";
snTargetEvaluationAttackAttempts.default = -25;
snTargetEvaluationAttackAttempts.category = "Attack";
snTargetEvaluationAttackAttempts.min = -32768;
snTargetEvaluationAttackAttempts.max = 32767;
snTargetEvaluationAttackAttempts.rmin = -32768;
snTargetEvaluationAttackAttempts.rmax = 32767;
snTargetEvaluationAttackAttempts.network = 0;
snTargetEvaluationAttackAttempts.defined = 1;
snTargetEvaluationAttackAttempts.available = 0;
snTargetEvaluationAttackAttempts.version = "1.0c";
snTargetEvaluationAttackAttempts.linked = [ 81, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
snTargetEvaluationAttackAttempts.related = [];
snTargetEvaluationAttackAttempts.shortDescription = "Sets the multiplier used for the attack attempts rating in computer player target evaluation.";

snTargetEvaluationRange.id = 90;
snTargetEvaluationRange.snName = "sn-target-evaluation-range";
snTargetEvaluationRange.default = 0;
snTargetEvaluationRange.category = "Attack";
snTargetEvaluationRange.min = -32768;
snTargetEvaluationRange.max = 32767;
snTargetEvaluationRange.rmin = -32768;
snTargetEvaluationRange.rmax = 32767;
snTargetEvaluationRange.network = 0;
snTargetEvaluationRange.defined = 1;
snTargetEvaluationRange.available = 0;
snTargetEvaluationRange.version = "1.0c";
snTargetEvaluationRange.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 82, 123, 184 ];
snTargetEvaluationRange.related = [];
snTargetEvaluationRange.shortDescription = "Sets the multiplier used for the range rating in computer player target evaluation.";

snPercentUnitHealthRetreat.id = 91;
snPercentUnitHealthRetreat.snName = "sn-percent-unit-health-retreat";
snPercentUnitHealthRetreat.default = -1;
snPercentUnitHealthRetreat.category = "Attack";
snPercentUnitHealthRetreat.min = -32768;
snPercentUnitHealthRetreat.max = 32767;
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
snDefendOverlapDistance.snName = "sn-defend-overlap-distance";
snDefendOverlapDistance.default = 5;
snDefendOverlapDistance.category = "Defense";
snDefendOverlapDistance.min = -32768;
snDefendOverlapDistance.max = 32767;
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
snScaleMinimumAttackGroupSize.snName = "sn-scale-minimum-attack-group-size";
snScaleMinimumAttackGroupSize.default = 1;
snScaleMinimumAttackGroupSize.category = "Attack";
snScaleMinimumAttackGroupSize.min = -32768;
snScaleMinimumAttackGroupSize.max = 32767;
snScaleMinimumAttackGroupSize.rmin = 0;
snScaleMinimumAttackGroupSize.rmax = 32767;
snScaleMinimumAttackGroupSize.network = 0;
snScaleMinimumAttackGroupSize.defined = 1;
snScaleMinimumAttackGroupSize.available = 0;
snScaleMinimumAttackGroupSize.version = "1.0c";
snScaleMinimumAttackGroupSize.linked = [ 94, 16, 59 ];
snScaleMinimumAttackGroupSize.related = [ 36, 26, 58, 60 ];
snScaleMinimumAttackGroupSize.shortDescription = "The scaling factor for the minimum attack group size. Added to sn-minimum-attack-group-size when the tactical AI does its scaling.";

snScaleMaximumAttackGroupSize.id = 94;
snScaleMaximumAttackGroupSize.snName = "sn-scale-maximum-attack-group-size";
snScaleMaximumAttackGroupSize.default = 0;
snScaleMaximumAttackGroupSize.category = "Attack";
snScaleMaximumAttackGroupSize.min = -32768;
snScaleMaximumAttackGroupSize.max = 32767;
snScaleMaximumAttackGroupSize.rmin = 0;
snScaleMaximumAttackGroupSize.rmax = 32767;
snScaleMaximumAttackGroupSize.network = 0;
snScaleMaximumAttackGroupSize.defined = 1;
snScaleMaximumAttackGroupSize.available = 0;
snScaleMaximumAttackGroupSize.version = "1.0c";
snScaleMaximumAttackGroupSize.linked = [ 93, 26, 60 ];
snScaleMaximumAttackGroupSize.related = [ 36, 16, 58, 59 ];
snScaleMaximumAttackGroupSize.shortDescription = "The scaling factor for the maximum attack group size. Added to sn-minimum-attack-group-size when the tactical AI does its scaling.";

snScalePercentHealthRetreat.id = 95;
snScalePercentHealthRetreat.snName = "sn-scale-percent-health-retreat";
snScalePercentHealthRetreat.default = -1;
snScalePercentHealthRetreat.category = "AoE 1";
snScalePercentHealthRetreat.min = -32768;
snScalePercentHealthRetreat.max = 32767;
snScalePercentHealthRetreat.rmin = 0;
snScalePercentHealthRetreat.rmax = 32767;
snScalePercentHealthRetreat.network = 0;
snScalePercentHealthRetreat.defined = 0;
snScalePercentHealthRetreat.available = "available, but avoid using it in conjunction with sn-percent-health-retreat (30)";
snScalePercentHealthRetreat.version = "1.0c";
snScalePercentHealthRetreat.linked = [ 30 ];
snScalePercentHealthRetreat.related = [];
snScalePercentHealthRetreat.shortDescription = "AoE 1 only. The scaling factor for the percent health retreat. Added to sn-percent-health-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100.";

snScalePercentDeathRetreat.id = 96;
snScalePercentDeathRetreat.snName = "sn-scale-percent-death-retreat";
snScalePercentDeathRetreat.default = -1;
snScalePercentDeathRetreat.category = "AoE 1";
snScalePercentDeathRetreat.min = -32768;
snScalePercentDeathRetreat.max = 32767;
snScalePercentDeathRetreat.rmin = 0;
snScalePercentDeathRetreat.rmax = 32767;
snScalePercentDeathRetreat.network = 0;
snScalePercentDeathRetreat.defined = 0;
snScalePercentDeathRetreat.available = "available, but avoid using it in conjunction with sn-percent-death-retreat (31)";
snScalePercentDeathRetreat.version = "1.0c";
snScalePercentDeathRetreat.linked = [ 31 ];
snScalePercentDeathRetreat.related = [];
snScalePercentDeathRetreat.shortDescription = "AoE 1 only. The scaling factor for the percent health retreat. Added to sn-percent-death-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100.";

snScalePercentUnitHealthRetreat.id = 97;
snScalePercentUnitHealthRetreat.snName = "sn-scale-percent-unit-health-retreat";
snScalePercentUnitHealthRetreat.default = -1;
snScalePercentUnitHealthRetreat.category = "AoE 1";
snScalePercentUnitHealthRetreat.min = -32768;
snScalePercentUnitHealthRetreat.max = 32767;
snScalePercentUnitHealthRetreat.rmin = 0;
snScalePercentUnitHealthRetreat.rmax = 32767;
snScalePercentUnitHealthRetreat.network = 0;
snScalePercentUnitHealthRetreat.defined = 0;
snScalePercentUnitHealthRetreat.available = "available, but avoid using it in conjunction with sn-percent-unit-health-retreat (91)";
snScalePercentUnitHealthRetreat.version = "1.0c";
snScalePercentUnitHealthRetreat.linked = [ 91 ];
snScalePercentUnitHealthRetreat.related = [];
snScalePercentUnitHealthRetreat.shortDescription = "AoE 1 only. The scaling factor for the percent health retreat. Added to sn-percent-unit-health-retreat when the tactical AI does its scaling. Must be &gt;= -100 and &lt;= 100.";

snAttackGroupSizeRandomness.id = 98;
snAttackGroupSizeRandomness.snName = "sn-attack-group-size-randomness";
snAttackGroupSizeRandomness.default = 1;
snAttackGroupSizeRandomness.category = "Attack";
snAttackGroupSizeRandomness.min = -32768;
snAttackGroupSizeRandomness.max = 32767;
snAttackGroupSizeRandomness.rmin = 0;
snAttackGroupSizeRandomness.rmax = 32767;
snAttackGroupSizeRandomness.network = 0;
snAttackGroupSizeRandomness.defined = 1;
snAttackGroupSizeRandomness.available = 0;
snAttackGroupSizeRandomness.version = "1.0c";
snAttackGroupSizeRandomness.linked = [];
snAttackGroupSizeRandomness.related = [ 41, 36, 26, 16, 58, 60, 59 ];
snAttackGroupSizeRandomness.shortDescription = "The randomness factor in the attack group size. This sets a cap on the amount of randomness in the minimum attack group size. The randomness factor is set once (when the group is created) and will be between 0 and this number.";

snScalingFrequency.id = 99;
snScalingFrequency.snName = "sn-scaling-frequency";
snScalingFrequency.default = 10;
snScalingFrequency.category = "Attack";
snScalingFrequency.min = -32768;
snScalingFrequency.max = 32767;
snScalingFrequency.rmin = 0;
snScalingFrequency.rmax = 32767;
snScalingFrequency.network = 0;
snScalingFrequency.defined = 1;
snScalingFrequency.available = 0;
snScalingFrequency.version = "1.0c";
snScalingFrequency.linked = [];
snScalingFrequency.related = [];
snScalingFrequency.shortDescription = "Sets the number of minutes that pass between each scaling inside the tactical AI.";

snMaximumGaiaAttackResponse.id = 100;
snMaximumGaiaAttackResponse.snName = "sn-maximum-gaia-attack-response";
snMaximumGaiaAttackResponse.default = 3;
snMaximumGaiaAttackResponse.category = "Defense";
snMaximumGaiaAttackResponse.min = -32768;
snMaximumGaiaAttackResponse.max = 32767;
snMaximumGaiaAttackResponse.rmin = 0;
snMaximumGaiaAttackResponse.rmax = 32767;
snMaximumGaiaAttackResponse.network = 0;
snMaximumGaiaAttackResponse.defined = 1;
snMaximumGaiaAttackResponse.available = 0;
snMaximumGaiaAttackResponse.version = "1.0c";
snMaximumGaiaAttackResponse.linked = [];
snMaximumGaiaAttackResponse.related = [ 225 ];
snMaximumGaiaAttackResponse.shortDescription = "The maximum number of villagers that respond to another civilian getting attacked by a Gaia animal.";

snBuildFrequency.id = 101;
snBuildFrequency.snName = "sn-build-frequency";
snBuildFrequency.default = 1;
snBuildFrequency.category = "Other";
snBuildFrequency.min = -32768;
snBuildFrequency.max = 32767;
snBuildFrequency.rmin = 0;
snBuildFrequency.rmax = 32767;
snBuildFrequency.network = 0;
snBuildFrequency.defined = 1;
snBuildFrequency.available = 0;
snBuildFrequency.version = "1.0c";
snBuildFrequency.linked = [];
snBuildFrequency.related = [];
snBuildFrequency.shortDescription = "Sets the number of tactical AI updates that pass between each training or research attempt.";

snAttackSeparationTimeRandomness.id = 102;
snAttackSeparationTimeRandomness.snName = "sn-attack-separation-time-randomness";
snAttackSeparationTimeRandomness.default = 15;
snAttackSeparationTimeRandomness.category = "Attack";
snAttackSeparationTimeRandomness.min = -32768;
snAttackSeparationTimeRandomness.max = 32767;
snAttackSeparationTimeRandomness.rmin = 0;
snAttackSeparationTimeRandomness.rmax = 32767;
snAttackSeparationTimeRandomness.network = 0;
snAttackSeparationTimeRandomness.defined = 1;
snAttackSeparationTimeRandomness.available = "seems available, but it would be best to avoid it";
snAttackSeparationTimeRandomness.version = "1.0c";
snAttackSeparationTimeRandomness.linked = [ 46 ];
snAttackSeparationTimeRandomness.related = [ 48 ];
snAttackSeparationTimeRandomness.shortDescription = "The amount of randomness incorporated into the attack separation time. Must be &gt;= 0 and &lt; sn-attack-separation-time.";

snAttackIntelligence.id = 103;
snAttackIntelligence.snName = "sn-attack-intelligence";
snAttackIntelligence.default = 0;
snAttackIntelligence.category = "Attack";
snAttackIntelligence.min = -32768;
snAttackIntelligence.max = 32767;
snAttackIntelligence.rmin = 0;
snAttackIntelligence.rmax = 1;
snAttackIntelligence.network = 0;
snAttackIntelligence.defined = 1;
snAttackIntelligence.available = 0;
snAttackIntelligence.version = "1.0c";
snAttackIntelligence.linked = [];
snAttackIntelligence.related = [ 47 ];
snAttackIntelligence.shortDescription = "Specifies whether the intelligent attack system is used. The intelligent attack system tries to avoid enemy units when attacking and tries to attack from different sides. When used with the sn-attack-coordination set to 2, this can create multifront attacks. Must be 0 (to turn off) and 1 (to turn on).";

snInitialAttackDelay.id = 104;
snInitialAttackDelay.snName = "sn-initial-attack-delay";
snInitialAttackDelay.default = 0;
snInitialAttackDelay.category = "Attack";
snInitialAttackDelay.min = -32768;
snInitialAttackDelay.max = 32767;
snInitialAttackDelay.rmin = 0;
snInitialAttackDelay.rmax = 32767;
snInitialAttackDelay.network = 0;
snInitialAttackDelay.defined = 1;
snInitialAttackDelay.available = 0;
snInitialAttackDelay.version = "1.0c";
snInitialAttackDelay.linked = [ 134 ];
snInitialAttackDelay.related = [];
snInitialAttackDelay.shortDescription = "The forced, initial delay before any computer player attacks (in seconds).";

snSaveScenarioInformation.id = 105;
snSaveScenarioInformation.snName = "sn-save-scenario-information";
snSaveScenarioInformation.default = 0;
snSaveScenarioInformation.category = "Other";
snSaveScenarioInformation.min = -32768;
snSaveScenarioInformation.max = 32767;
snSaveScenarioInformation.rmin = 0;
snSaveScenarioInformation.rmax = 1;
snSaveScenarioInformation.network = 0;
snSaveScenarioInformation.defined = 1;
snSaveScenarioInformation.available = 0;
snSaveScenarioInformation.version = "1.0c";
snSaveScenarioInformation.linked = [];
snSaveScenarioInformation.related = [ 201 ];
snSaveScenarioInformation.shortDescription = "Controls whether the learning information is saved at the end of the scenario for a given computer player. Must be 0 (to turn off) or 1 (to turn on).";

snSpecialAttackType1.id = 106;
snSpecialAttackType1.snName = "sn-special-attack-type1";
snSpecialAttackType1.default = -1;
snSpecialAttackType1.category = "Attack";
snSpecialAttackType1.min = -32768;
snSpecialAttackType1.max = 32767;
snSpecialAttackType1.rmin = -1;
snSpecialAttackType1.rmax = 1;
snSpecialAttackType1.network = 0;
snSpecialAttackType1.defined = 1;
snSpecialAttackType1.available = 0;
snSpecialAttackType1.version = "1.0c";
snSpecialAttackType1.linked = [ 109 ];
snSpecialAttackType1.related = [ 107, 108 ];
snSpecialAttackType1.shortDescription = "Set to 1 to target monasteries and monks carrying relics.";

snSpecialAttackType2.id = 107;
snSpecialAttackType2.snName = "sn-special-attack-type2";
snSpecialAttackType2.default = -1;
snSpecialAttackType2.category = "Attack";
snSpecialAttackType2.min = -32768;
snSpecialAttackType2.max = 32767;
snSpecialAttackType2.rmin = -1;
snSpecialAttackType2.rmax = 32767;
snSpecialAttackType2.network = 0;
snSpecialAttackType2.defined = 1;
snSpecialAttackType2.available = 0;
snSpecialAttackType2.version = "1.0c";
snSpecialAttackType2.linked = [ 110 ];
snSpecialAttackType2.related = [ 106, 108 ];
snSpecialAttackType2.shortDescription = "Set to any unit, building, or group id to direct attacks.";
snSpecialAttackType2.description = "Set to any unit, building, or group id to direct attacks. Unit lines do not work. This SN only affects soldiers attacking with attack groups or " + cAttackNow.getLink() + ".</p><p>scripter64 created a test scenario and was able to switch between targeting a mill and a lumber camp on demand using the following steps:</p><p><ol><li>Set special-attack-type2 to mill</li><li>Disband groups (I set group-form-distance:0, minimum/maximum-attack-group-size:0, number-attack-groups:0)</li><li>Wait a turn or two (more turns gives more time for groups to disband)</li><li>Assign multi-unit attack groups as usual (single-unit groups do not use attack-intelligence)</li><li>Units depart for the enemy mill as expected</li><li>Set special-attack-type2 to lumber-camp</li><li>Disband groups again</li><li>Wait a turn or two</li><li>Assign multi-unit attack groups as usual</li><li>Units retarget toward the enemy lumber camp</li><li>Loop to 01</li></ol>";

snSpecialAttackType3.id = 108;
snSpecialAttackType3.snName = "sn-special-attack-type3";
snSpecialAttackType3.default = -1;
snSpecialAttackType3.category = "Attack";
snSpecialAttackType3.min = -32768;
snSpecialAttackType3.max = 32767;
snSpecialAttackType3.rmin = -1;
snSpecialAttackType3.rmax = 1;
snSpecialAttackType3.network = 0;
snSpecialAttackType3.defined = 1;
snSpecialAttackType3.available = 0;
snSpecialAttackType3.version = "1.0c";
snSpecialAttackType3.linked = [ 111 ];
snSpecialAttackType3.related = [ 106, 107 ];
snSpecialAttackType3.shortDescription = "Set to 1 to target wonders.";

snSpecialAttackInfluence1.id = 109;
snSpecialAttackInfluence1.snName = "sn-special-attack-influence1";
snSpecialAttackInfluence1.default = 0;
snSpecialAttackInfluence1.category = "Attack";
snSpecialAttackInfluence1.min = -32768;
snSpecialAttackInfluence1.max = 32767;
snSpecialAttackInfluence1.rmin = -32768;
snSpecialAttackInfluence1.rmax = 32767;
snSpecialAttackInfluence1.network = 0;
snSpecialAttackInfluence1.defined = 1;
snSpecialAttackInfluence1.available = 0;
snSpecialAttackInfluence1.version = "1.0c";
snSpecialAttackInfluence1.linked = [ 106 ];
snSpecialAttackInfluence1.related = [ 110, 111 ];
snSpecialAttackInfluence1.shortDescription = "Sets the multiplier used for the special attack type 1 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 1, &lt; 0 to influence the computer player away from attacking the special type 1.";

snSpecialAttackInfluence2.id = 110;
snSpecialAttackInfluence2.snName = "sn-special-attack-influence2";
snSpecialAttackInfluence2.default = 0;
snSpecialAttackInfluence2.category = "Attack";
snSpecialAttackInfluence2.min = -32768;
snSpecialAttackInfluence2.max = 32767;
snSpecialAttackInfluence2.rmin = -32768;
snSpecialAttackInfluence2.rmax = 32767;
snSpecialAttackInfluence2.network = 0;
snSpecialAttackInfluence2.defined = 0;
snSpecialAttackInfluence2.available = 0;
snSpecialAttackInfluence2.version = "1.0c";
snSpecialAttackInfluence2.linked = [ 107 ];
snSpecialAttackInfluence2.related = [ 109, 111 ];
snSpecialAttackInfluence2.shortDescription = "Sets the multiplier used for the special attack type 2 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 2, &lt; 0 to influence the computer player away from attacking the special type 2.";

snSpecialAttackInfluence3.id = 111;
snSpecialAttackInfluence3.snName = "sn-special-attack-influence3";
snSpecialAttackInfluence3.default = 0;
snSpecialAttackInfluence3.category = "Attack";
snSpecialAttackInfluence3.min = -32768;
snSpecialAttackInfluence3.max = 32767;
snSpecialAttackInfluence3.rmin = -32768;
snSpecialAttackInfluence3.rmax = 32767;
snSpecialAttackInfluence3.network = 0;
snSpecialAttackInfluence3.defined = 0;
snSpecialAttackInfluence3.available = "seems available, except under standard victory conditions";
snSpecialAttackInfluence3.version = "1.0c";
snSpecialAttackInfluence3.linked = [ 108 ];
snSpecialAttackInfluence3.related = [ 109, 110 ];
snSpecialAttackInfluence3.shortDescription = "Sets the multiplier used for the special attack type 3 rating in computer player target evaluation. Must be &gt; 0 to influence the computer player toward attacking the special type 3, &lt; 0 to influence the computer player away from attacking the special type 3.";

snMinimumWaterBodySizeForDock.id = 112;
snMinimumWaterBodySizeForDock.snName = "sn-minimum-water-body-size-for-dock";
snMinimumWaterBodySizeForDock.default = 300;
snMinimumWaterBodySizeForDock.category = "Water";
snMinimumWaterBodySizeForDock.min = -32768;
snMinimumWaterBodySizeForDock.max = 32767;
snMinimumWaterBodySizeForDock.rmin = 10;
snMinimumWaterBodySizeForDock.rmax = 32767;
snMinimumWaterBodySizeForDock.network = 0;
snMinimumWaterBodySizeForDock.defined = 1;
snMinimumWaterBodySizeForDock.available = "available, as long as the value will always be &gt;= 300";
snMinimumWaterBodySizeForDock.version = "1.0c";
snMinimumWaterBodySizeForDock.linked = [];
snMinimumWaterBodySizeForDock.related = [ 169 ];
snMinimumWaterBodySizeForDock.shortDescription = "The minimum number of tiles (in surface area) that a body of water must be for a Dock to be placed on it.";

snUnknownData113.id = 113;
snUnknownData113.snName = "unknown-data-113";
snUnknownData113.default = -1;
snUnknownData113.category = "None";
snUnknownData113.min = -32768;
snUnknownData113.max = 32767;
snUnknownData113.rmin = -32768;
snUnknownData113.rmax = 32767;
snUnknownData113.network = 0;
snUnknownData113.defined = 0;
snUnknownData113.available = 0;
snUnknownData113.version = "1.0c";
snUnknownData113.linked = [];
snUnknownData113.related = [];
snUnknownData113.shortDescription = "Unused.";

snNumberBuildAttemptsBeforeSkip.id = 114;
snNumberBuildAttemptsBeforeSkip.snName = "sn-number-build-attempts-before-skip";
snNumberBuildAttemptsBeforeSkip.default = 25;
snNumberBuildAttemptsBeforeSkip.category = "Economy";
snNumberBuildAttemptsBeforeSkip.min = -32768;
snNumberBuildAttemptsBeforeSkip.max = 32767;
snNumberBuildAttemptsBeforeSkip.rmin = 1;
snNumberBuildAttemptsBeforeSkip.rmax = 32767;
snNumberBuildAttemptsBeforeSkip.network = 0;
snNumberBuildAttemptsBeforeSkip.defined = 1;
snNumberBuildAttemptsBeforeSkip.available = 0;
snNumberBuildAttemptsBeforeSkip.version = "1.0c";
snNumberBuildAttemptsBeforeSkip.linked = [];
snNumberBuildAttemptsBeforeSkip.related = [ 115 ];
snNumberBuildAttemptsBeforeSkip.shortDescription = "The maximum number of build attempts a build plan can go through before being put into skip mode.";

snMaxSkipsPerAttempt.id = 115;
snMaxSkipsPerAttempt.snName = "sn-max-skips-per-attempt";
snMaxSkipsPerAttempt.default = 10;
snMaxSkipsPerAttempt.category = "Economy";
snMaxSkipsPerAttempt.min = -32768;
snMaxSkipsPerAttempt.max = 32767;
snMaxSkipsPerAttempt.rmin = 1;
snMaxSkipsPerAttempt.rmax = 32767;
snMaxSkipsPerAttempt.network = 0;
snMaxSkipsPerAttempt.defined = 1;
snMaxSkipsPerAttempt.available = 0;
snMaxSkipsPerAttempt.version = "1.0c";
snMaxSkipsPerAttempt.linked = [];
snMaxSkipsPerAttempt.related = [ 114 ];
snMaxSkipsPerAttempt.shortDescription = "The maximum number of unbuilt items that can be skipped during any build plan processing before giving up (for being too far ahead of the current position in the plan).";

snUnknownData116.id = 116;
snUnknownData116.snName = "unknown-data-116";
snUnknownData116.default = 10;
snUnknownData116.category = "None";
snUnknownData116.min = -32768;
snUnknownData116.max = 32767;
snUnknownData116.rmin = -32768;
snUnknownData116.rmax = 32767;
snUnknownData116.network = 0;
snUnknownData116.defined = 0;
snUnknownData116.available = 0;
snUnknownData116.version = "1.0c";
snUnknownData116.linked = [];
snUnknownData116.related = [];
snUnknownData116.shortDescription = "Unused.";

snFoodGathererPercentage.id = 117;
snFoodGathererPercentage.snName = "sn-food-gatherer-percentage";
snFoodGathererPercentage.default = 0;
snFoodGathererPercentage.category = "Economy";
snFoodGathererPercentage.min = 0;
snFoodGathererPercentage.max = 100;
snFoodGathererPercentage.rmin = 0;
snFoodGathererPercentage.rmax = 100;
snFoodGathererPercentage.network = 0;
snFoodGathererPercentage.defined = 1;
snFoodGathererPercentage.available = 0;
snFoodGathererPercentage.version = "1.0c";
snFoodGathererPercentage.linked = [ 156 ];
snFoodGathererPercentage.related = [ 118, 119, 120 ];
snFoodGathererPercentage.shortDescription = "Set to configure food gatherers: foodGatherers = ( this + sn-food-modifier-percentage ) * gathererTotal * 0.01 + 0.5.";

snGoldGathererPercentage.id = 118;
snGoldGathererPercentage.snName = "sn-gold-gatherer-percentage";
snGoldGathererPercentage.default = 0;
snGoldGathererPercentage.category = "Economy";
snGoldGathererPercentage.min = 0;
snGoldGathererPercentage.max = 100;
snGoldGathererPercentage.rmin = 0;
snGoldGathererPercentage.rmax = 100;
snGoldGathererPercentage.network = 0;
snGoldGathererPercentage.defined = 1;
snGoldGathererPercentage.available = 0;
snGoldGathererPercentage.version = "1.0c";
snGoldGathererPercentage.linked = [ 159 ];
snGoldGathererPercentage.related = [ 117, 119, 120 ];
snGoldGathererPercentage.shortDescription = "Set to configure gold gatherers: goldGatherers = ( this + sn-gold-modifier-percentage ) * gathererTotal * 0.01 + 0.5.";

snStoneGathererPercentage.id = 119;
snStoneGathererPercentage.snName = "sn-stone-gatherer-percentage";
snStoneGathererPercentage.default = 0;
snStoneGathererPercentage.category = "Economy";
snStoneGathererPercentage.min = 0;
snStoneGathererPercentage.max = 100;
snStoneGathererPercentage.rmin = 0;
snStoneGathererPercentage.rmax = 100;
snStoneGathererPercentage.network = 0;
snStoneGathererPercentage.defined = 1;
snStoneGathererPercentage.available = 0;
snStoneGathererPercentage.version = "1.0c";
snStoneGathererPercentage.linked = [ 158 ];
snStoneGathererPercentage.related = [ 117, 118, 120 ];
snStoneGathererPercentage.shortDescription = "Set to configure stone gatherers: stoneGatherers = ( this + sn-stone-modifier-percentage ) * gathererTotal * 0.01 + 0.5.";

snWoodGathererPercentage.id = 120;
snWoodGathererPercentage.snName = "sn-wood-gatherer-percentage";
snWoodGathererPercentage.default = 0;
snWoodGathererPercentage.category = "Economy";
snWoodGathererPercentage.min = 0;
snWoodGathererPercentage.max = 100;
snWoodGathererPercentage.rmin = 0;
snWoodGathererPercentage.rmax = 100;
snWoodGathererPercentage.network = 0;
snWoodGathererPercentage.defined = 1;
snWoodGathererPercentage.available = 0;
snWoodGathererPercentage.version = "1.0c";
snWoodGathererPercentage.linked = [ 157 ];
snWoodGathererPercentage.related = [ 117, 118, 119 ];
snWoodGathererPercentage.shortDescription = "Set to configure wood gatherers: woodGatherers = ( this + sn-wood-modifier-percentage ) * gathererTotal * 0.01 + 0.5.";

snDefendImportantGroupLeaders.id = 121;
snDefendImportantGroupLeaders.snName = "sn-defend-important-group-leaders";
snDefendImportantGroupLeaders.default = -1;
snDefendImportantGroupLeaders.category = "AoE 1";
snDefendImportantGroupLeaders.min = -32768;
snDefendImportantGroupLeaders.max = 32767;
snDefendImportantGroupLeaders.rmin = 0;
snDefendImportantGroupLeaders.rmax = 1;
snDefendImportantGroupLeaders.network = 0;
snDefendImportantGroupLeaders.defined = 0;
snDefendImportantGroupLeaders.available = 1;
snDefendImportantGroupLeaders.version = "1.0c";
snDefendImportantGroupLeaders.linked = [];
snDefendImportantGroupLeaders.related = [];
snDefendImportantGroupLeaders.shortDescription = "AoE 1 only. Controls whether or not important attack group leaders are defended by the other group units. A value of 1 has the members defend the leader. A value of 0 does not.";

snTargetEvaluationContinent.id = 122;
snTargetEvaluationContinent.snName = "sn-target-evaluation-continent";
snTargetEvaluationContinent.default = 100;
snTargetEvaluationContinent.category = "Attack";
snTargetEvaluationContinent.min = -32768;
snTargetEvaluationContinent.max = 32767;
snTargetEvaluationContinent.rmin = -32768;
snTargetEvaluationContinent.rmax = 32767;
snTargetEvaluationContinent.network = 0;
snTargetEvaluationContinent.defined = 1;
snTargetEvaluationContinent.available = 0;
snTargetEvaluationContinent.version = "1.0c";
snTargetEvaluationContinent.linked = [ 81, 89, 144, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
snTargetEvaluationContinent.related = [];
snTargetEvaluationContinent.shortDescription = "Sets the additive value used for the targets on the same continent as the attack group commander. Must be &gt; 0 to influence the computer player toward attacking the units on the same continent or 0 for no special influence.";

snTargetEvaluationSiegeWeapon.id = 123;
snTargetEvaluationSiegeWeapon.snName = "sn-target-evaluation-siege-weapon";
snTargetEvaluationSiegeWeapon.default = 0;
snTargetEvaluationSiegeWeapon.category = "Attack";
snTargetEvaluationSiegeWeapon.min = -32768;
snTargetEvaluationSiegeWeapon.max = 32767;
snTargetEvaluationSiegeWeapon.rmin = -32768;
snTargetEvaluationSiegeWeapon.rmax = 32767;
snTargetEvaluationSiegeWeapon.network = 0;
snTargetEvaluationSiegeWeapon.defined = 1;
snTargetEvaluationSiegeWeapon.available = 0;
snTargetEvaluationSiegeWeapon.version = "1.0c";
snTargetEvaluationSiegeWeapon.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 184 ];
snTargetEvaluationSiegeWeapon.related = [];
snTargetEvaluationSiegeWeapon.shortDescription = "Sets the additive value used for influencing siege weapons to attack stationary targets (and influencing non-siege weapons not to attack those stationary targets). Must be &gt; 0 to influence the computer player to use siege weapons to attack stationary targets or 0 for no special influence.";

snTributeAmount.id = 124;
snTributeAmount.snName = "sn-tribute-amount";
snTributeAmount.default = 0;
snTributeAmount.category = "AoE 1";
snTributeAmount.min = -32768;
snTributeAmount.max = 32767;
snTributeAmount.rmin = 0;
snTributeAmount.rmax = 32767;
snTributeAmount.network = 0;
snTributeAmount.defined = 0;
snTributeAmount.available = 1;
snTributeAmount.version = "1.0c";
snTributeAmount.linked = [];
snTributeAmount.related = [];
snTributeAmount.shortDescription = "AoE 1 only. Sets the required amount of gold that must be tributed to the computer player. If this is 0, no computer player tributing is monitored for the special system (thus, the normal tribute system is in effect). When this value is &gt; 0, the computer player will expect some gold in tribute.";

snTributeChatFrequency.id = 125;
snTributeChatFrequency.snName = "sn-tribute-chat-frequency";
snTributeChatFrequency.default = 0;
snTributeChatFrequency.category = "AoE 1";
snTributeChatFrequency.min = -32768;
snTributeChatFrequency.max = 32767;
snTributeChatFrequency.rmin = 0;
snTributeChatFrequency.rmax = 32767;
snTributeChatFrequency.network = 0;
snTributeChatFrequency.defined = 0;
snTributeChatFrequency.available = 1;
snTributeChatFrequency.version = "1.0c";
snTributeChatFrequency.linked = [];
snTributeChatFrequency.related = [];
snTributeChatFrequency.shortDescription = "AoE 1 only. Sets the frequency (in seconds) of the computer player's chat messages asking for tribute. Must be &gt;= 0.";

snTributeChatRandomness.id = 126;
snTributeChatRandomness.snName = "sn-tribute-chat-randomness";
snTributeChatRandomness.default = 0;
snTributeChatRandomness.category = "AoE 1";
snTributeChatRandomness.min = -32768;
snTributeChatRandomness.max = 32767;
snTributeChatRandomness.rmin = 0;
snTributeChatRandomness.rmax = 32767;
snTributeChatRandomness.network = 0;
snTributeChatRandomness.defined = 0;
snTributeChatRandomness.available = 1;
snTributeChatRandomness.version = "1.0c";
snTributeChatRandomness.linked = [];
snTributeChatRandomness.related = [];
snTributeChatRandomness.shortDescription = "AoE 1 only. Sets the randomness (in seconds) of the computer player's chat messages asking for tribute. Must be &gt;= 0 and &lt; sn-tribute-chat-frequency.";

snTributeTimeout.id = 127;
snTributeTimeout.snName = "sn-tribute-timeout";
snTributeTimeout.default = 0;
snTributeTimeout.category = "AoE 1";
snTributeTimeout.min = -32768;
snTributeTimeout.max = 32767;
snTributeTimeout.rmin = 0;
snTributeTimeout.rmax = 32767;
snTributeTimeout.network = 0;
snTributeTimeout.defined = 0;
snTributeTimeout.available = 1;
snTributeTimeout.version = "1.0c";
snTributeTimeout.linked = [];
snTributeTimeout.related = [];
snTributeTimeout.shortDescription = "AoE 1 only. Sets the amount of time (in seconds) within which the tribute must take place. Must be &gt;= 0.";

snTributePlayer.id = 128;
snTributePlayer.snName = "sn-tribute-player";
snTributePlayer.default = -1;
snTributePlayer.category = "AoE 1";
snTributePlayer.min = -32768;
snTributePlayer.max = 32767;
snTributePlayer.rmin = 0;
snTributePlayer.rmax = 8;
snTributePlayer.network = 0;
snTributePlayer.defined = 0;
snTributePlayer.available = 1;
snTributePlayer.version = "1.0c";
snTributePlayer.linked = [];
snTributePlayer.related = [];
snTributePlayer.shortDescription = "AoE 1 only. Sets the player ID# of the player the computer player will target for the tribute request. Must be a valid player number for the game.";

snTributeSuccessOutcome.id = 129;
snTributeSuccessOutcome.snName = "sn-tribute-success-outcome";
snTributeSuccessOutcome.default = 0;
snTributeSuccessOutcome.category = "AoE 1";
snTributeSuccessOutcome.min = -32768;
snTributeSuccessOutcome.max = 32767;
snTributeSuccessOutcome.rmin = 0;
snTributeSuccessOutcome.rmax = 1;
snTributeSuccessOutcome.network = 0;
snTributeSuccessOutcome.defined = 0;
snTributeSuccessOutcome.available = 1;
snTributeSuccessOutcome.version = "1.0c";
snTributeSuccessOutcome.linked = [];
snTributeSuccessOutcome.related = [];
snTributeSuccessOutcome.shortDescription = "AoE 1 only. Controls what happens when the tribute request is fulfilled within the allotted time. If set to 0, nothing happens. If set to 1, the computer player will ally when the tribute amount is paid.";

snTributeFailureOutcome.id = 130;
snTributeFailureOutcome.snName = "sn-tribute-failure-outcome";
snTributeFailureOutcome.default = 0;
snTributeFailureOutcome.category = "AoE 1";
snTributeFailureOutcome.min = -32768;
snTributeFailureOutcome.max = 32767;
snTributeFailureOutcome.rmin = 0;
snTributeFailureOutcome.rmax = 1;
snTributeFailureOutcome.network = 0;
snTributeFailureOutcome.defined = 0;
snTributeFailureOutcome.available = 1;
snTributeFailureOutcome.version = "1.0c";
snTributeFailureOutcome.linked = [];
snTributeFailureOutcome.related = [];
snTributeFailureOutcome.shortDescription = "AoE 1 only. Controls what happens when the tribute request is not fulfilled within the allotted time. If set to 0, nothing happens. If set to 1, the computer player will go to war when the tribute amount is not paid.";

snGroupLeaderDefenseDistance.id = 131;
snGroupLeaderDefenseDistance.snName = "sn-group-leader-defense-distance";
snGroupLeaderDefenseDistance.default = 3;
snGroupLeaderDefenseDistance.category = "Defense";
snGroupLeaderDefenseDistance.min = -32768;
snGroupLeaderDefenseDistance.max = 32767;
snGroupLeaderDefenseDistance.rmin = 1;
snGroupLeaderDefenseDistance.rmax = 255;
snGroupLeaderDefenseDistance.network = 0;
snGroupLeaderDefenseDistance.defined = 1;
snGroupLeaderDefenseDistance.available = 0;
snGroupLeaderDefenseDistance.version = "1.0c";
snGroupLeaderDefenseDistance.linked = [];
snGroupLeaderDefenseDistance.related = [];
snGroupLeaderDefenseDistance.shortDescription = "Sets the defense distance for defenders of an important attack group leader.";

snTributePersistence.id = 132;
snTributePersistence.snName = "sn-tribute-persistence";
snTributePersistence.default = 0;
snTributePersistence.category = "AoE 1";
snTributePersistence.min = -32768;
snTributePersistence.max = 32767;
snTributePersistence.rmin = 0;
snTributePersistence.rmax = 1;
snTributePersistence.network = 0;
snTributePersistence.defined = 0;
snTributePersistence.available = 1;
snTributePersistence.version = "1.0c";
snTributePersistence.linked = [];
snTributePersistence.related = [];
snTributePersistence.shortDescription = "AoE 1 only. Controls whether or not the interactive tribute system operates once or forever. A value of 1 makes it last the entire game (i.e. the computer player will continue to demand sn-tribute-amount of gold for the entire game, at intervals roughly equivalent to sn-tribute-chat-frequency from the outcome evaluation). A value of 0 makes the interactive tribute occur one time.";

snTributeRevokeOnAttack.id = 133;
snTributeRevokeOnAttack.snName = "sn-tribute-revoke-on-attack";
snTributeRevokeOnAttack.default = 0;
snTributeRevokeOnAttack.category = "AoE 1";
snTributeRevokeOnAttack.min = -32768;
snTributeRevokeOnAttack.max = 32767;
snTributeRevokeOnAttack.rmin = 0;
snTributeRevokeOnAttack.rmax = 1;
snTributeRevokeOnAttack.network = 0;
snTributeRevokeOnAttack.defined = 0;
snTributeRevokeOnAttack.available = 1;
snTributeRevokeOnAttack.version = "1.0c";
snTributeRevokeOnAttack.linked = [];
snTributeRevokeOnAttack.related = [];
snTributeRevokeOnAttack.shortDescription = "AoE 1 only. Controls whether or not the computer player rescinds the favorable tribute outcome when the sn-tribute-player attacks the computer player. A value of 1 has the computer player rescind, a value of 0 does not.";

snInitialAttackDelayType.id = 134;
snInitialAttackDelayType.snName = "sn-initial-attack-delay-type";
snInitialAttackDelayType.default = 0;
snInitialAttackDelayType.category = "Attack";
snInitialAttackDelayType.min = -32768;
snInitialAttackDelayType.max = 32767;
snInitialAttackDelayType.rmin = 0;
snInitialAttackDelayType.rmax = 3;
snInitialAttackDelayType.network = 0;
snInitialAttackDelayType.defined = 1;
snInitialAttackDelayType.available = 0;
snInitialAttackDelayType.version = "1.0c";
snInitialAttackDelayType.linked = [ 104 ];
snInitialAttackDelayType.related = [];
snInitialAttackDelayType.shortDescription = "The type of initial attack delay. A value of 1 denotes a delay ended by the build list. A value of 2 uses the sn-initial-attack-delay timeout. A value of 3 allows the computer player to attack after he has been attacked by a non-Gaia player. A value of 0 allows any of the three occurrences to enable attacks.";

snBlotExplorationMap.id = 135;
snBlotExplorationMap.snName = "sn-blot-exploration-map";
snBlotExplorationMap.default = 1;
snBlotExplorationMap.category = "Explore";
snBlotExplorationMap.min = -32768;
snBlotExplorationMap.max = 32767;
snBlotExplorationMap.rmin = 0;
snBlotExplorationMap.rmax = 1;
snBlotExplorationMap.network = 0;
snBlotExplorationMap.defined = 1;
snBlotExplorationMap.available = "available, but only later, as it greatly influences exploration";
snBlotExplorationMap.version = "1.0c";
snBlotExplorationMap.linked = [ 136 ];
snBlotExplorationMap.related = [ 167, 32, 179 ];
snBlotExplorationMap.shortDescription = "This controls whether or not the computer player re-explores previously explored regions. A value of 1 has the computer player re-explore, a value of 0 does not.";

snBlotSize.id = 136;
snBlotSize.snName = "sn-blot-size";
snBlotSize.default = 15;
snBlotSize.category = "Explore";
snBlotSize.min = -32768;
snBlotSize.max = 32767;
snBlotSize.rmin = 1;
snBlotSize.rmax = 255;
snBlotSize.network = 0;
snBlotSize.defined = 1;
snBlotSize.available = "available, but only later, as it greatly influences exploration";
snBlotSize.version = "1.0c";
snBlotSize.linked = [ 135 ];
snBlotSize.related = [ 167, 32, 179 ];
snBlotSize.shortDescription = "This controls the size of the area that a computer player marks for re-exploration.";

snUnknownData137.id = 137;
snUnknownData137.snName = "unknown-data-137";
snUnknownData137.default = -1;
snUnknownData137.category = "None";
snUnknownData137.min = -32768;
snUnknownData137.max = 32767;
snUnknownData137.rmin = -32768;
snUnknownData137.rmax = 32767;
snUnknownData137.network = 0;
snUnknownData137.defined = 0;
snUnknownData137.available = 0;
snUnknownData137.version = "1.0c";
snUnknownData137.linked = [];
snUnknownData137.related = [];
snUnknownData137.shortDescription = "Unused.";

snAddStartingResourceFood.id = 138;
snAddStartingResourceFood.snName = "sn-add-starting-resource-food";
snAddStartingResourceFood.default = 0;
snAddStartingResourceFood.category = "Economy";
snAddStartingResourceFood.min = -32768;
snAddStartingResourceFood.max = 32767;
snAddStartingResourceFood.rmin = -32768;
snAddStartingResourceFood.rmax = 32767;
snAddStartingResourceFood.network = 0;
snAddStartingResourceFood.defined = 0;
snAddStartingResourceFood.available = 0;
snAddStartingResourceFood.version = "1.0c";
snAddStartingResourceFood.linked = [];
snAddStartingResourceFood.related = [ 139, 140, 141 ];
snAddStartingResourceFood.shortDescription = "Cheat - adds extra food to starting resources.";

snAddStartingResourceGold.id = 139;
snAddStartingResourceGold.snName = "sn-add-starting-resource-gold";
snAddStartingResourceGold.default = 0;
snAddStartingResourceGold.category = "Economy";
snAddStartingResourceGold.min = -32768;
snAddStartingResourceGold.max = 32767;
snAddStartingResourceGold.rmin = -32768;
snAddStartingResourceGold.rmax = 32767;
snAddStartingResourceGold.network = 0;
snAddStartingResourceGold.defined = 0;
snAddStartingResourceGold.available = 0;
snAddStartingResourceGold.version = "1.0c";
snAddStartingResourceGold.linked = [];
snAddStartingResourceGold.related = [ 138, 140, 141 ];
snAddStartingResourceGold.shortDescription = "Cheat - adds extra gold to starting resources.";

snAddStartingResourceStone.id = 140;
snAddStartingResourceStone.snName = "sn-add-starting-resource-stone";
snAddStartingResourceStone.default = 0;
snAddStartingResourceStone.category = "Economy";
snAddStartingResourceStone.min = -32768;
snAddStartingResourceStone.max = 32767;
snAddStartingResourceStone.rmin = -32768;
snAddStartingResourceStone.rmax = 32767;
snAddStartingResourceStone.network = 0;
snAddStartingResourceStone.defined = 0;
snAddStartingResourceStone.available = 0;
snAddStartingResourceStone.version = "1.0c";
snAddStartingResourceStone.linked = [];
snAddStartingResourceStone.related = [ 138, 139, 141 ];
snAddStartingResourceStone.shortDescription = "Cheat - adds extra stone to starting resources.";

snAddStartingResourceWood.id = 141;
snAddStartingResourceWood.snName = "sn-add-starting-resource-wood";
snAddStartingResourceWood.default = 0;
snAddStartingResourceWood.category = "Economy";
snAddStartingResourceWood.min = -32768;
snAddStartingResourceWood.max = 32767;
snAddStartingResourceWood.rmin = -32768;
snAddStartingResourceWood.rmax = 32767;
snAddStartingResourceWood.network = 0;
snAddStartingResourceWood.defined = 0;
snAddStartingResourceWood.available = 0;
snAddStartingResourceWood.version = "1.0c";
snAddStartingResourceWood.linked = [];
snAddStartingResourceWood.related = [ 138, 139, 140 ];
snAddStartingResourceWood.shortDescription = "Cheat - adds extra wood to starting resources.";

snIntelligentGathering.id = 142;
snIntelligentGathering.snName = "sn-intelligent-gathering";
snIntelligentGathering.default = 0;
snIntelligentGathering.category = "Economy";
snIntelligentGathering.min = -32768;
snIntelligentGathering.max = 32767;
snIntelligentGathering.rmin = 0;
snIntelligentGathering.rmax = 1;
snIntelligentGathering.network = 0;
snIntelligentGathering.defined = 1;
snIntelligentGathering.available = 0;
snIntelligentGathering.version = "1.0c";
snIntelligentGathering.linked = [];
snIntelligentGathering.related = [ 148, 149, 203 ];
snIntelligentGathering.shortDescription = "Controls whether or not the intelligent gathering system is enabled.";

snTaskUngroupedSoldiers.id = 143;
snTaskUngroupedSoldiers.snName = "sn-task-ungrouped-soldiers";
snTaskUngroupedSoldiers.default = 1;
snTaskUngroupedSoldiers.category = "Defense";
snTaskUngroupedSoldiers.min = 1;
snTaskUngroupedSoldiers.max = 1;
snTaskUngroupedSoldiers.rmin = 0;
snTaskUngroupedSoldiers.rmax = 1;
snTaskUngroupedSoldiers.network = 1;
snTaskUngroupedSoldiers.defined = 1;
snTaskUngroupedSoldiers.available = 0;
snTaskUngroupedSoldiers.version = "1.0c";
snTaskUngroupedSoldiers.linked = [];
snTaskUngroupedSoldiers.related = [ 232 ];
snTaskUngroupedSoldiers.shortDescription = "Controls whether or not ungrouped computer player soldiers get tasked to spread out and guard the computer player's general town area.";

snTargetEvaluationBoat.id = 144;
snTargetEvaluationBoat.snName = "sn-target-evaluation-boat";
snTargetEvaluationBoat.default = 0;
snTargetEvaluationBoat.category = "Attack";
snTargetEvaluationBoat.min = -32768;
snTargetEvaluationBoat.max = 32767;
snTargetEvaluationBoat.rmin = -32768;
snTargetEvaluationBoat.rmax = 32767;
snTargetEvaluationBoat.network = 0;
snTargetEvaluationBoat.defined = 1;
snTargetEvaluationBoat.available = 0;
snTargetEvaluationBoat.version = "1.0c";
snTargetEvaluationBoat.linked = [ 81, 89, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123, 184 ];
snTargetEvaluationBoat.related = [];
snTargetEvaluationBoat.shortDescription = "Sets the additive value used for influencing land units to attack or not attack boats. Must be &gt; 0 to influence land units to attack boats, 0 for no special influence, and less than 0 for aversion.";

snNumberEnemyObjectsRequired.id = 145;
snNumberEnemyObjectsRequired.snName = "sn-number-enemy-objects-required";
snNumberEnemyObjectsRequired.default = 10;
snNumberEnemyObjectsRequired.category = "Explore";
snNumberEnemyObjectsRequired.min = -32768;
snNumberEnemyObjectsRequired.max = 32767;
snNumberEnemyObjectsRequired.rmin = 0;
snNumberEnemyObjectsRequired.rmax = 32767;
snNumberEnemyObjectsRequired.network = 0;
snNumberEnemyObjectsRequired.defined = 1;
snNumberEnemyObjectsRequired.available = 0;
snNumberEnemyObjectsRequired.version = "1.0c";
snNumberEnemyObjectsRequired.linked = [];
snNumberEnemyObjectsRequired.related = [];
snNumberEnemyObjectsRequired.shortDescription = "The count of the number of enemy objects the computer player must see before dropping the number of civilian explorers down to the minimum level.";

snNumberMaxSkipCycles.id = 146;
snNumberMaxSkipCycles.snName = "sn-number-max-skip-cycles";
snNumberMaxSkipCycles.default = 50;
snNumberMaxSkipCycles.category = "Other";
snNumberMaxSkipCycles.min = -32768;
snNumberMaxSkipCycles.max = 32767;
snNumberMaxSkipCycles.rmin = 1;
snNumberMaxSkipCycles.rmax = 32767;
snNumberMaxSkipCycles.network = 0;
snNumberMaxSkipCycles.defined = 1;
snNumberMaxSkipCycles.available = 0;
snNumberMaxSkipCycles.version = "1.0c";
snNumberMaxSkipCycles.linked = [];
snNumberMaxSkipCycles.related = [];
snNumberMaxSkipCycles.shortDescription = "Undocumented.";

snMostNeededResourceLookAhead.id = 147;
snMostNeededResourceLookAhead.snName = "sn-most-needed-resource-look-ahead";
snMostNeededResourceLookAhead.default = 10;
snMostNeededResourceLookAhead.category = "AoE 1";
snMostNeededResourceLookAhead.min = -32768;
snMostNeededResourceLookAhead.max = 32767;
snMostNeededResourceLookAhead.rmin = 0;
snMostNeededResourceLookAhead.rmax = 32767;
snMostNeededResourceLookAhead.network = 0;
snMostNeededResourceLookAhead.defined = 0;
snMostNeededResourceLookAhead.available = 1;
snMostNeededResourceLookAhead.version = "1.0c";
snMostNeededResourceLookAhead.linked = [];
snMostNeededResourceLookAhead.related = [];
snMostNeededResourceLookAhead.shortDescription = "AoE 1 only. The number of build list objects the computer player will use to look ahead to tabulate the resources required. Only used for the dynamic gathering percentages. Must be &gt;= 0.";

snRetaskGatherAmount.id = 148;
snRetaskGatherAmount.snName = "sn-retask-gather-amount";
snRetaskGatherAmount.default = 20;
snRetaskGatherAmount.category = "Economy";
snRetaskGatherAmount.min = -32768;
snRetaskGatherAmount.max = 32767;
snRetaskGatherAmount.rmin = 0;
snRetaskGatherAmount.rmax = 32767;
snRetaskGatherAmount.network = 0;
snRetaskGatherAmount.defined = 1;
snRetaskGatherAmount.available = 0;
snRetaskGatherAmount.version = "1.0c";
snRetaskGatherAmount.linked = [ 149 ];
snRetaskGatherAmount.related = [ 142, 203 ];
snRetaskGatherAmount.shortDescription = "The minimum amount that a gatherer must gather before the computer player allows him to be retasked to another resource type. Some code may override this.";

snMaxRetaskGatherAmount.id = 149;
snMaxRetaskGatherAmount.snName = "sn-max-retask-gather-amount";
snMaxRetaskGatherAmount.default = 40;
snMaxRetaskGatherAmount.category = "Economy";
snMaxRetaskGatherAmount.min = -32768;
snMaxRetaskGatherAmount.max = 32767;
snMaxRetaskGatherAmount.rmin = 0;
snMaxRetaskGatherAmount.rmax = 32767;
snMaxRetaskGatherAmount.network = 0;
snMaxRetaskGatherAmount.defined = 1;
snMaxRetaskGatherAmount.available = 0;
snMaxRetaskGatherAmount.version = "1.0c";
snMaxRetaskGatherAmount.linked = [ 148 ];
snMaxRetaskGatherAmount.related = [ 142, 203 ];
snMaxRetaskGatherAmount.shortDescription = "The maximum amount that a gatherer can be told to gather before being allowed to be retasked. Some code may override this.";

snMaxStoragePits.id = 150;
snMaxStoragePits.snName = "sn-max-storage-pits";
snMaxStoragePits.default = -1;
snMaxStoragePits.category = "AoE 1";
snMaxStoragePits.min = -32768;
snMaxStoragePits.max = 32767;
snMaxStoragePits.rmin = 0;
snMaxStoragePits.rmax = 32767;
snMaxStoragePits.network = 0;
snMaxStoragePits.defined = 0;
snMaxStoragePits.available = 1;
snMaxStoragePits.version = "1.0c";
snMaxStoragePits.linked = [];
snMaxStoragePits.related = [];
snMaxStoragePits.shortDescription = "AoE 1 only. The maximum number of storage pits a computer player can build in one game. Must be &gt;= 0.";

snMaxGranaries.id = 151;
snMaxGranaries.snName = "sn-max-granaries";
snMaxGranaries.default = -1;
snMaxGranaries.category = "AoE 1";
snMaxGranaries.min = -32768;
snMaxGranaries.max = 32767;
snMaxGranaries.rmin = 0;
snMaxGranaries.rmax = 32767;
snMaxGranaries.network = 0;
snMaxGranaries.defined = 0;
snMaxGranaries.available = 1;
snMaxGranaries.version = "1.0c";
snMaxGranaries.linked = [];
snMaxGranaries.related = [];
snMaxGranaries.shortDescription = "AoE 1 only. The maximum number of granaries a computer player can build in one game. Must be &gt;= 0.";

snHouseOverage.id = 152;
snHouseOverage.snName = "sn-house-overage";
snHouseOverage.default = -1;
snHouseOverage.category = "AoE 1";
snHouseOverage.min = -32768;
snHouseOverage.max = 32767;
snHouseOverage.rmin = 0;
snHouseOverage.rmax = 32767;
snHouseOverage.network = 0;
snHouseOverage.defined = 0;
snHouseOverage.available = 1;
snHouseOverage.version = "1.0c";
snHouseOverage.linked = [];
snHouseOverage.related = [];
snHouseOverage.shortDescription = "AoE 1 only. The number of Houses that a computer player will autobuild over the amount needed to support 50 units. Must be &gt;= 0.";

snUnknownData153.id = 153;
snUnknownData153.snName = "unknown-data-153";
snUnknownData153.default = -1;
snUnknownData153.category = "None";
snUnknownData153.min = -32768;
snUnknownData153.max = 32767;
snUnknownData153.rmin = -32768;
snUnknownData153.rmax = 32767;
snUnknownData153.network = 0;
snUnknownData153.defined = 0;
snUnknownData153.available = 0;
snUnknownData153.version = "1.0c";
snUnknownData153.linked = [];
snUnknownData153.related = [];
snUnknownData153.shortDescription = "Unused.";

snUnknownData154.id = 154;
snUnknownData154.snName = "unknown-data-154";
snUnknownData154.default = -1;
snUnknownData154.category = "None";
snUnknownData154.min = -32768;
snUnknownData154.max = 32767;
snUnknownData154.rmin = -32768;
snUnknownData154.rmax = 32767;
snUnknownData154.network = 0;
snUnknownData154.defined = 0;
snUnknownData154.available = 0;
snUnknownData154.version = "1.0c";
snUnknownData154.linked = [];
snUnknownData154.related = [];
snUnknownData154.shortDescription = "Unused.";

snBuildPlanDivisions.id = 155;
snBuildPlanDivisions.snName = "sn-build-plan-divisions";
snBuildPlanDivisions.default = 10;
snBuildPlanDivisions.category = "AoE 1";
snBuildPlanDivisions.min = -32768;
snBuildPlanDivisions.max = 32767;
snBuildPlanDivisions.rmin = 1;
snBuildPlanDivisions.rmax = 32767;
snBuildPlanDivisions.network = 0;
snBuildPlanDivisions.defined = 0;
snBuildPlanDivisions.available = "seems available";
snBuildPlanDivisions.version = "1.0c";
snBuildPlanDivisions.linked = [];
snBuildPlanDivisions.related = [];
snBuildPlanDivisions.shortDescription = "AoE 1 only. The number of divisions a computer player will place in its build list (used to calculate gathering percentages). Must be &gt;= 1.";

snFoodModifierPercentage.id = 156;
snFoodModifierPercentage.snName = "sn-food-modifier-percentage";
snFoodModifierPercentage.default = 0;
snFoodModifierPercentage.category = "Economy";
snFoodModifierPercentage.min = -32768;
snFoodModifierPercentage.max = 32767;
snFoodModifierPercentage.rmin = -100;
snFoodModifierPercentage.rmax = 100;
snFoodModifierPercentage.network = 0;
snFoodModifierPercentage.defined = 0;
snFoodModifierPercentage.available = 0;
snFoodModifierPercentage.version = "1.0c";
snFoodModifierPercentage.linked = [ 117 ];
snFoodModifierPercentage.related = [ 157, 158, 159 ];
snFoodModifierPercentage.shortDescription = "Set to configure food gatherers: foodGatherers = ( sn-food-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5.";

snWoodModifierPercentage.id = 157;
snWoodModifierPercentage.snName = "sn-wood-modifier-percentage";
snWoodModifierPercentage.default = 0;
snWoodModifierPercentage.category = "Economy";
snWoodModifierPercentage.min = -32768;
snWoodModifierPercentage.max = 32767;
snWoodModifierPercentage.rmin = -100;
snWoodModifierPercentage.rmax = 100;
snWoodModifierPercentage.network = 0;
snWoodModifierPercentage.defined = 0;
snWoodModifierPercentage.available = 0;
snWoodModifierPercentage.version = "1.0c";
snWoodModifierPercentage.linked = [ 120 ];
snWoodModifierPercentage.related = [ 156, 158, 159 ];
snWoodModifierPercentage.shortDescription = "Set to configure wood gatherers: woodGatherers = ( sn-wood-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5.";

snStoneModifierPercentage.id = 158;
snStoneModifierPercentage.snName = "sn-stone-modifier-percentage";
snStoneModifierPercentage.default = 0;
snStoneModifierPercentage.category = "Economy";
snStoneModifierPercentage.min = -32768;
snStoneModifierPercentage.max = 32767;
snStoneModifierPercentage.rmin = -100;
snStoneModifierPercentage.rmax = 100;
snStoneModifierPercentage.network = 0;
snStoneModifierPercentage.defined = 0;
snStoneModifierPercentage.available = 0;
snStoneModifierPercentage.version = "1.0c";
snStoneModifierPercentage.linked = [ 119 ];
snStoneModifierPercentage.related = [ 156, 157, 159 ];
snStoneModifierPercentage.shortDescription = "Set to configure stone gatherers: stoneGatherers = ( sn-stone-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5.";

snGoldModifierPercentage.id = 159;
snGoldModifierPercentage.snName = "sn-gold-modifier-percentage";
snGoldModifierPercentage.default = 0;
snGoldModifierPercentage.category = "Economy";
snGoldModifierPercentage.min = -32768;
snGoldModifierPercentage.max = 32767;
snGoldModifierPercentage.rmin = -100;
snGoldModifierPercentage.rmax = 100;
snGoldModifierPercentage.network = 0;
snGoldModifierPercentage.defined = 0;
snGoldModifierPercentage.available = 0;
snGoldModifierPercentage.version = "1.0c";
snGoldModifierPercentage.linked = [ 118 ];
snGoldModifierPercentage.related = [ 156, 157, 158 ];
snGoldModifierPercentage.shortDescription = "Set to configure gold gatherers: goldGatherers = ( sn-gold-gatherer-percentage + this ) * gathererTotal * 0.01 + 0.5.";

snMaxBuildPlanGathererPercentage.id = 160;
snMaxBuildPlanGathererPercentage.snName = "sn-max-build-plan-gatherer-percentage";
snMaxBuildPlanGathererPercentage.default = 50;
snMaxBuildPlanGathererPercentage.category = "Economy";
snMaxBuildPlanGathererPercentage.min = -32768;
snMaxBuildPlanGathererPercentage.max = 32767;
snMaxBuildPlanGathererPercentage.rmin = 0;
snMaxBuildPlanGathererPercentage.rmax = 100;
snMaxBuildPlanGathererPercentage.network = 0;
snMaxBuildPlanGathererPercentage.defined = 1;
snMaxBuildPlanGathererPercentage.available = 0;
snMaxBuildPlanGathererPercentage.version = "1.0c";
snMaxBuildPlanGathererPercentage.linked = [];
snMaxBuildPlanGathererPercentage.related = [];
snMaxBuildPlanGathererPercentage.shortDescription = "The maximum percentage of gatherers that a computer player will task based on the pregame requirements of the build plan.";

snRequiredFirstBuilding.id = 161;
snRequiredFirstBuilding.snName = "sn-required-first-building";
snRequiredFirstBuilding.default = -1;
snRequiredFirstBuilding.category = "AoE 1";
snRequiredFirstBuilding.min = -32768;
snRequiredFirstBuilding.max = 32767;
snRequiredFirstBuilding.rmin = 0;
snRequiredFirstBuilding.rmax = 4;
snRequiredFirstBuilding.network = 0;
snRequiredFirstBuilding.defined = 0;
snRequiredFirstBuilding.available = 1;
snRequiredFirstBuilding.version = "1.0c";
snRequiredFirstBuilding.linked = [];
snRequiredFirstBuilding.related = [];
snRequiredFirstBuilding.shortDescription = "AoE 1 only. Controls what building a computer player must place first. 0: No restriction. 1: Either a Storage Pit or a granary. 2: A Storage Pit. 3: A Granary. 4: Both a Storage Pit and a Granary. Exceptions consist of a Town Center and sn-maximum-houses-before-dropsites.";

snUnknownData162.id = 162;
snUnknownData162.snName = "unknown-data-162";
snUnknownData162.default = -1;
snUnknownData162.category = "None";
snUnknownData162.min = -32768;
snUnknownData162.max = 32767;
snUnknownData162.rmin = -32768;
snUnknownData162.rmax = 32767;
snUnknownData162.network = 0;
snUnknownData162.defined = 0;
snUnknownData162.available = 0;
snUnknownData162.version = "1.0c";
snUnknownData162.linked = [];
snUnknownData162.related = [];
snUnknownData162.shortDescription = "Unused.";

snFoodDropsiteDistance.id = 163;
snFoodDropsiteDistance.snName = "sn-food-dropsite-distance";
snFoodDropsiteDistance.default = 3;
snFoodDropsiteDistance.category = "Economy";
snFoodDropsiteDistance.min = -32768;
snFoodDropsiteDistance.max = 32767;
snFoodDropsiteDistance.rmin = 3;
snFoodDropsiteDistance.rmax = 255;
snFoodDropsiteDistance.network = 0;
snFoodDropsiteDistance.defined = 1;
snFoodDropsiteDistance.available = 0;
snFoodDropsiteDistance.version = "1.0c";
snFoodDropsiteDistance.linked = [ 234, 235 ];
snFoodDropsiteDistance.related = [ 164, 165, 166 ];
snFoodDropsiteDistance.shortDescription = "The maximum number of tiles a computer player likes to walk to drop off its food.";

snWoodDropsiteDistance.id = 164;
snWoodDropsiteDistance.snName = "sn-wood-dropsite-distance";
snWoodDropsiteDistance.default = 3;
snWoodDropsiteDistance.category = "Economy";
snWoodDropsiteDistance.min = -32768;
snWoodDropsiteDistance.max = 32767;
snWoodDropsiteDistance.rmin = 3;
snWoodDropsiteDistance.rmax = 255;
snWoodDropsiteDistance.network = 0;
snWoodDropsiteDistance.defined = 1;
snWoodDropsiteDistance.available = 0;
snWoodDropsiteDistance.version = "1.0c";
snWoodDropsiteDistance.linked = [ 233 ];
snWoodDropsiteDistance.related = [ 163, 165, 166 ];
snWoodDropsiteDistance.shortDescription = "The maximum number of tiles a computer player likes to walk to drop off its wood.";

snStoneDropsiteDistance.id = 165;
snStoneDropsiteDistance.snName = "sn-stone-dropsite-distance";
snStoneDropsiteDistance.default = 3;
snStoneDropsiteDistance.category = "Economy";
snStoneDropsiteDistance.min = -32768;
snStoneDropsiteDistance.max = 32767;
snStoneDropsiteDistance.rmin = 3;
snStoneDropsiteDistance.rmax = 255;
snStoneDropsiteDistance.network = 0;
snStoneDropsiteDistance.defined = 1;
snStoneDropsiteDistance.available = 0;
snStoneDropsiteDistance.version = "1.0c";
snStoneDropsiteDistance.linked = [ 238 ];
snStoneDropsiteDistance.related = [ 163, 164, 166 ];
snStoneDropsiteDistance.shortDescription = "The maximum number of tiles a computer player likes to walk to drop off its stone.";

snGoldDropsiteDistance.id = 166;
snGoldDropsiteDistance.snName = "sn-gold-dropsite-distance";
snGoldDropsiteDistance.default = 3;
snGoldDropsiteDistance.category = "Economy";
snGoldDropsiteDistance.min = -32768;
snGoldDropsiteDistance.max = 32767;
snGoldDropsiteDistance.rmin = 3;
snGoldDropsiteDistance.rmax = 255;
snGoldDropsiteDistance.network = 0;
snGoldDropsiteDistance.defined = 1;
snGoldDropsiteDistance.available = 0;
snGoldDropsiteDistance.version = "1.0c";
snGoldDropsiteDistance.linked = [ 237 ];
snGoldDropsiteDistance.related = [ 163, 164, 165 ];
snGoldDropsiteDistance.shortDescription = "The maximum number of tiles a computer player likes to walk to drop off its gold.";

snInitialExplorationRequired.id = 167;
snInitialExplorationRequired.snName = "sn-initial-exploration-required";
snInitialExplorationRequired.default = 2;
snInitialExplorationRequired.category = "Economy";
snInitialExplorationRequired.min = -32768;
snInitialExplorationRequired.max = 32767;
snInitialExplorationRequired.rmin = 0;
snInitialExplorationRequired.rmax = 100;
snInitialExplorationRequired.network = 0;
snInitialExplorationRequired.defined = 1;
snInitialExplorationRequired.available = 0;
snInitialExplorationRequired.version = "1.0c";
snInitialExplorationRequired.linked = [ 32, 179, 256 ];
snInitialExplorationRequired.related = [ 135, 136 ];
snInitialExplorationRequired.shortDescription = "The percentage of the map that must be explored by a computer player before any building is allowed.";

snRandomPlacementFactor.id = 168;
snRandomPlacementFactor.snName = "sn-random-placement-factor";
snRandomPlacementFactor.default = 50;
snRandomPlacementFactor.category = "Economy";
snRandomPlacementFactor.min = -32768;
snRandomPlacementFactor.max = 32767;
snRandomPlacementFactor.rmin = 0;
snRandomPlacementFactor.rmax = 32767;
snRandomPlacementFactor.network = 0;
snRandomPlacementFactor.defined = 1;
snRandomPlacementFactor.available = 0;
snRandomPlacementFactor.version = "1.0c";
snRandomPlacementFactor.linked = [];
snRandomPlacementFactor.related = [];
snRandomPlacementFactor.shortDescription = "A number that gets added into the placement of the computer player to randomize building placement (off of the calculated ideal).";

snRequiredForestTiles.id = 169;
snRequiredForestTiles.snName = "sn-required-forest-tiles";
snRequiredForestTiles.default = 10;
snRequiredForestTiles.category = "Economy";
snRequiredForestTiles.min = -32768;
snRequiredForestTiles.max = 32767;
snRequiredForestTiles.rmin = 0;
snRequiredForestTiles.rmax = 32767;
snRequiredForestTiles.network = 0;
snRequiredForestTiles.defined = 1;
snRequiredForestTiles.available = 0;
snRequiredForestTiles.version = "1.0c";
snRequiredForestTiles.linked = [];
snRequiredForestTiles.related = [ 112 ];
snRequiredForestTiles.shortDescription = "The minimum number of forest tiles that a computer player must uncover before placing its first lumber camp.";

snMinimumFood.id = 170;
snMinimumFood.snName = "sn-minimum-food";
snMinimumFood.default = 200;
snMinimumFood.category = "AoE 1";
snMinimumFood.min = -32768;
snMinimumFood.max = 32767;
snMinimumFood.rmin = 0;
snMinimumFood.rmax = 32767;
snMinimumFood.network = 0;
snMinimumFood.defined = 0;
snMinimumFood.available = 1;
snMinimumFood.version = "1.0c";
snMinimumFood.linked = [];
snMinimumFood.related = [ 171, 172, 173 ];
snMinimumFood.shortDescription = "AoE 1 only. The minimum amount of food a computer player likes to keep on hand. Must be &gt;= 0.";

snMinimumWood.id = 171;
snMinimumWood.snName = "sn-minimum-wood";
snMinimumWood.default = 250;
snMinimumWood.category = "AoE 1";
snMinimumWood.min = -32768;
snMinimumWood.max = 32767;
snMinimumWood.rmin = 0;
snMinimumWood.rmax = 32767;
snMinimumWood.network = 0;
snMinimumWood.defined = 0;
snMinimumWood.available = 1;
snMinimumWood.version = "1.0c";
snMinimumWood.linked = [];
snMinimumWood.related = [ 170, 172, 173 ];
snMinimumWood.shortDescription = "AoE 1 only. The minimum amount of wood a computer player likes to keep on hand. Must be &gt;= 0.";

snMinimumStone.id = 172;
snMinimumStone.snName = "sn-minimum-stone";
snMinimumStone.default = 150;
snMinimumStone.category = "AoE 1";
snMinimumStone.min = -32768;
snMinimumStone.max = 32767;
snMinimumStone.rmin = 0;
snMinimumStone.rmax = 32767;
snMinimumStone.network = 0;
snMinimumStone.defined = 0;
snMinimumStone.available = 1;
snMinimumStone.version = "1.0c";
snMinimumStone.linked = [];
snMinimumStone.related = [ 170, 171, 173 ];
snMinimumStone.shortDescription = "AoE 1 only. The minimum amount of stone a computer player likes to keep on hand. Must be &gt;= 0.";

snMinimumGold.id = 173;
snMinimumGold.snName = "sn-minimum-gold";
snMinimumGold.default = 200;
snMinimumGold.category = "AoE 1";
snMinimumGold.min = -32768;
snMinimumGold.max = 32767;
snMinimumGold.rmin = 0;
snMinimumGold.rmax = 32767;
snMinimumGold.network = 0;
snMinimumGold.defined = 0;
snMinimumGold.available = 1;
snMinimumGold.version = "1.0c";
snMinimumGold.linked = [];
snMinimumGold.related = [ 170, 171, 172 ];
snMinimumGold.shortDescription = "AoE 1 only. The minimum amount of gold a computer player likes to keep on hand. Must be &gt;= 0.";

snMaximumHousesBeforeDropsites.id = 174;
snMaximumHousesBeforeDropsites.snName = "sn-maximum-houses-before-dropsites";
snMaximumHousesBeforeDropsites.default = -1;
snMaximumHousesBeforeDropsites.category = "AoE 1";
snMaximumHousesBeforeDropsites.min = -32768;
snMaximumHousesBeforeDropsites.max = 32767;
snMaximumHousesBeforeDropsites.rmin = 0;
snMaximumHousesBeforeDropsites.rmax = 32767;
snMaximumHousesBeforeDropsites.network = 0;
snMaximumHousesBeforeDropsites.defined = 0;
snMaximumHousesBeforeDropsites.available = 1;
snMaximumHousesBeforeDropsites.version = "1.0c";
snMaximumHousesBeforeDropsites.linked = [];
snMaximumHousesBeforeDropsites.related = [];
snMaximumHousesBeforeDropsites.shortDescription = "AoE 1 only. The maximum number of Houses that can be built before a dropsite is built. Must be &gt;= 0.";

snSpecificBuildItemToBuild.id = 175;
snSpecificBuildItemToBuild.snName = "sn-specific-build-item-to-build";
snSpecificBuildItemToBuild.default = -1;
snSpecificBuildItemToBuild.category = "AoE 1";
snSpecificBuildItemToBuild.min = -32768;
snSpecificBuildItemToBuild.max = 32767;
snSpecificBuildItemToBuild.rmin = 0;
snSpecificBuildItemToBuild.rmax = 32767;
snSpecificBuildItemToBuild.network = 0;
snSpecificBuildItemToBuild.defined = 0;
snSpecificBuildItemToBuild.available = "seems available";
snSpecificBuildItemToBuild.version = "1.0c";
snSpecificBuildItemToBuild.linked = [ 176 ];
snSpecificBuildItemToBuild.related = [];
snSpecificBuildItemToBuild.shortDescription = "AoE 1 only. A specific build item that should be inserted into the computer player's list. Must be a valid building ID.";

snSpecificBuildItemTime.id = 176;
snSpecificBuildItemTime.snName = "sn-specific-build-item-time";
snSpecificBuildItemTime.default = -1;
snSpecificBuildItemTime.category = "AoE 1";
snSpecificBuildItemTime.min = -32768;
snSpecificBuildItemTime.max = 32767;
snSpecificBuildItemTime.rmin = 0;
snSpecificBuildItemTime.rmax = 32767;
snSpecificBuildItemTime.network = 0;
snSpecificBuildItemTime.defined = 0;
snSpecificBuildItemTime.available = "seems available";
snSpecificBuildItemTime.version = "1.0c";
snSpecificBuildItemTime.linked = [ 175 ];
snSpecificBuildItemTime.related = [];
snSpecificBuildItemTime.shortDescription = "AoE 1 only. The time (in minutes) that the sn-specific-build-item-to-build should be inserted into. Must be &gt;= 0.";

snUnskippableItemType.id = 177;
snUnskippableItemType.snName = "sn-unskippable-item-type";
snUnskippableItemType.default = -1;
snUnskippableItemType.category = "AoE 1";
snUnskippableItemType.min = -32768;
snUnskippableItemType.max = 32767;
snUnskippableItemType.rmin = 0;
snUnskippableItemType.rmax = 32767;
snUnskippableItemType.network = 0;
snUnskippableItemType.defined = 0;
snUnskippableItemType.available = "seems available";
snUnskippableItemType.version = "1.0c";
snUnskippableItemType.linked = [];
snUnskippableItemType.related = [];
snUnskippableItemType.shortDescription = "AoE 1 only. Allows the computer player to not skip a particular item type during building. Must be a valid building ID.";

snAttackDiplomacyImpact.id = 178;
snAttackDiplomacyImpact.snName = "sn-attack-diplomacy-impact";
snAttackDiplomacyImpact.default = 10;
snAttackDiplomacyImpact.category = "Defense";
snAttackDiplomacyImpact.min = -32768;
snAttackDiplomacyImpact.max = 32767;
snAttackDiplomacyImpact.rmin = 0;
snAttackDiplomacyImpact.rmax = 100;
snAttackDiplomacyImpact.network = 0;
snAttackDiplomacyImpact.defined = 1;
snAttackDiplomacyImpact.available = "available, except for when teams-locked is disabled";
snAttackDiplomacyImpact.version = "1.0c";
snAttackDiplomacyImpact.linked = [];
snAttackDiplomacyImpact.related = [ 215 ];
snAttackDiplomacyImpact.shortDescription = "The impact (positive or negative) that a computer player injects into his diplomacy system when attacked.";

snPercentHalfExploration.id = 179;
snPercentHalfExploration.snName = "sn-percent-half-exploration";
snPercentHalfExploration.default = 30;
snPercentHalfExploration.category = "Explore";
snPercentHalfExploration.min = -32768;
snPercentHalfExploration.max = 32767;
snPercentHalfExploration.rmin = 0;
snPercentHalfExploration.rmax = 100;
snPercentHalfExploration.network = 0;
snPercentHalfExploration.defined = 1;
snPercentHalfExploration.available = 0;
snPercentHalfExploration.version = "1.0c";
snPercentHalfExploration.linked = [ 167, 32, 256 ];
snPercentHalfExploration.related = [ 135, 136 ];
snPercentHalfExploration.shortDescription = "The percentage of map exploration that allows the computer player to task down to half the number of explorers.";

snAutoBuildHouses.id = 180;
snAutoBuildHouses.snName = "sn-auto-build-houses";
snAutoBuildHouses.default = -1;
snAutoBuildHouses.category = "AoE 1";
snAutoBuildHouses.min = -32768;
snAutoBuildHouses.max = 32767;
snAutoBuildHouses.rmin = 0;
snAutoBuildHouses.rmax = 1;
snAutoBuildHouses.network = 0;
snAutoBuildHouses.defined = 0;
snAutoBuildHouses.available = 1;
snAutoBuildHouses.version = "1.0c";
snAutoBuildHouses.linked = [];
snAutoBuildHouses.related = [];
snAutoBuildHouses.shortDescription = "AoE 1 only. Controls whether the computer player can decide to build its houses by itself. Must be 0 or 1.";

snUpgradeToToolAgeAsap.id = 181;
snUpgradeToToolAgeAsap.snName = "sn-upgrade-to-tool-age-asap";
snUpgradeToToolAgeAsap.default = -1;
snUpgradeToToolAgeAsap.category = "AoE 1";
snUpgradeToToolAgeAsap.min = -32768;
snUpgradeToToolAgeAsap.max = 32767;
snUpgradeToToolAgeAsap.rmin = 0;
snUpgradeToToolAgeAsap.rmax = 1;
snUpgradeToToolAgeAsap.network = 0;
snUpgradeToToolAgeAsap.defined = 0;
snUpgradeToToolAgeAsap.available = 1;
snUpgradeToToolAgeAsap.version = "1.0c";
snUpgradeToToolAgeAsap.linked = [];
snUpgradeToToolAgeAsap.related = [ 182, 183 ];
snUpgradeToToolAgeAsap.shortDescription = "AoE 1 only. Controls whether or not the computer player will abandon all to upgrade to the Tool Age as soon as it becomes available for research. Must be 0 or 1.";

snUpgradeToBronzeAgeAsap.id = 182;
snUpgradeToBronzeAgeAsap.snName = "sn-upgrade-to-bronze-age-asap";
snUpgradeToBronzeAgeAsap.default = -1;
snUpgradeToBronzeAgeAsap.category = "AoE 1";
snUpgradeToBronzeAgeAsap.min = -32768;
snUpgradeToBronzeAgeAsap.max = 32767;
snUpgradeToBronzeAgeAsap.rmin = 0;
snUpgradeToBronzeAgeAsap.rmax = 1;
snUpgradeToBronzeAgeAsap.network = 0;
snUpgradeToBronzeAgeAsap.defined = 0;
snUpgradeToBronzeAgeAsap.available = 1;
snUpgradeToBronzeAgeAsap.version = "1.0c";
snUpgradeToBronzeAgeAsap.linked = [];
snUpgradeToBronzeAgeAsap.related = [ 181, 183 ];
snUpgradeToBronzeAgeAsap.shortDescription = "AoE 1 only. Controls whether or not the computer player will abandon all to upgrade to the Bronze Age as soon as it becomes available for research. Must be 0 or 1.";

snUpgradeToIronAgeAsap.id = 183;
snUpgradeToIronAgeAsap.snName = "sn-upgrade-to-iron-age-asap";
snUpgradeToIronAgeAsap.default = -1;
snUpgradeToIronAgeAsap.category = "AoE 1";
snUpgradeToIronAgeAsap.min = -32768;
snUpgradeToIronAgeAsap.max = 32767;
snUpgradeToIronAgeAsap.rmin = 0;
snUpgradeToIronAgeAsap.rmax = 1;
snUpgradeToIronAgeAsap.network = 0;
snUpgradeToIronAgeAsap.defined = 0;
snUpgradeToIronAgeAsap.available = 1;
snUpgradeToIronAgeAsap.version = "1.0c";
snUpgradeToIronAgeAsap.linked = [];
snUpgradeToIronAgeAsap.related = [ 181, 182 ];
snUpgradeToIronAgeAsap.shortDescription = "AoE 1 only. Controls whether or not the computer player will abandon all to upgrade to the Iron Age as soon as it becomes available for research. Must be 0 or 1.";

snTargetEvaluationTimeKillRatio.id = 184;
snTargetEvaluationTimeKillRatio.snName = "sn-target-evaluation-time-kill-ratio";
snTargetEvaluationTimeKillRatio.default = 20;
snTargetEvaluationTimeKillRatio.category = "Attack";
snTargetEvaluationTimeKillRatio.min = -32768;
snTargetEvaluationTimeKillRatio.max = 32767;
snTargetEvaluationTimeKillRatio.rmin = -32768;
snTargetEvaluationTimeKillRatio.rmax = 32767;
snTargetEvaluationTimeKillRatio.network = 0;
snTargetEvaluationTimeKillRatio.defined = 1;
snTargetEvaluationTimeKillRatio.available = 0;
snTargetEvaluationTimeKillRatio.version = "1.0c";
snTargetEvaluationTimeKillRatio.linked = [ 81, 89, 144, 122, 79, 77, 78, 185, 80, 83, 90, 82, 123 ];
snTargetEvaluationTimeKillRatio.related = [];
snTargetEvaluationTimeKillRatio.shortDescription = "The amount of influence the time to kill a target has in deciding what to attack.";

snTargetEvaluationInProgress.id = 185;
snTargetEvaluationInProgress.snName = "sn-target-evaluation-in-progress";
snTargetEvaluationInProgress.default = 50;
snTargetEvaluationInProgress.category = "Attack";
snTargetEvaluationInProgress.min = -32768;
snTargetEvaluationInProgress.max = 32767;
snTargetEvaluationInProgress.rmin = -32768;
snTargetEvaluationInProgress.rmax = 32767;
snTargetEvaluationInProgress.network = 0;
snTargetEvaluationInProgress.defined = 1;
snTargetEvaluationInProgress.available = 0;
snTargetEvaluationInProgress.version = "1.0c";
snTargetEvaluationInProgress.linked = [ 81, 89, 144, 122, 79, 77, 78, 80, 83, 90, 82, 123, 184 ];
snTargetEvaluationInProgress.related = [];
snTargetEvaluationInProgress.shortDescription = "The amount of influence of continuing to attack a target already under attack.";

snCoopDemandTributeInterval.id = 186;
snCoopDemandTributeInterval.snName = "sn-coop-demand-tribute-interval";
snCoopDemandTributeInterval.default = 0;
snCoopDemandTributeInterval.category = "AoE 1";
snCoopDemandTributeInterval.min = -32768;
snCoopDemandTributeInterval.max = 32767;
snCoopDemandTributeInterval.rmin = 0;
snCoopDemandTributeInterval.rmax = 32767;
snCoopDemandTributeInterval.network = 0;
snCoopDemandTributeInterval.defined = 0;
snCoopDemandTributeInterval.available = 1;
snCoopDemandTributeInterval.version = "1.0c";
snCoopDemandTributeInterval.linked = [ 187 ];
snCoopDemandTributeInterval.related = [];
snCoopDemandTributeInterval.shortDescription = "AoE 1 only. Controls how often the computer player may demand tribute from his computer player allies (in seconds). Must be &gt;= 0.";

snCoopDemandTributeMaximum.id = 187;
snCoopDemandTributeMaximum.snName = "sn-coop-demand-tribute-maximum";
snCoopDemandTributeMaximum.default = 0;
snCoopDemandTributeMaximum.category = "AoE 1";
snCoopDemandTributeMaximum.min = -32768;
snCoopDemandTributeMaximum.max = 32767;
snCoopDemandTributeMaximum.rmin = 1;
snCoopDemandTributeMaximum.rmax = 32767;
snCoopDemandTributeMaximum.network = 0;
snCoopDemandTributeMaximum.defined = 0;
snCoopDemandTributeMaximum.available = 1;
snCoopDemandTributeMaximum.version = "1.0c";
snCoopDemandTributeMaximum.linked = [ 186 ];
snCoopDemandTributeMaximum.related = [];
snCoopDemandTributeMaximum.shortDescription = "AoE 1 only. Controls the maximum amount a computer player may demand from his computer player allies at any one time. Must be &gt;= 1.";

snAttackWinningPlayer.id = 188;
snAttackWinningPlayer.snName = "sn-attack-winning-player";
snAttackWinningPlayer.default = 1;
snAttackWinningPlayer.category = "Attack";
snAttackWinningPlayer.min = -32768;
snAttackWinningPlayer.max = 32767;
snAttackWinningPlayer.rmin = 0;
snAttackWinningPlayer.rmax = 1;
snAttackWinningPlayer.network = 0;
snAttackWinningPlayer.defined = 1;
snAttackWinningPlayer.available = "available, but only for 1v1 and Wonder Race games";
snAttackWinningPlayer.version = "1.0c";
snAttackWinningPlayer.linked = [ 195 ];
snAttackWinningPlayer.related = [ 249 ];
snAttackWinningPlayer.shortDescription = "Controls whether or not the computer player will attack the winning player (if there is more than one to choose from).";

snUnknownData189.id = 189;
snUnknownData189.snName = "unknown-data-189";
snUnknownData189.default = 50;
snUnknownData189.category = "None";
snUnknownData189.min = -32768;
snUnknownData189.max = 32767;
snUnknownData189.rmin = -32768;
snUnknownData189.rmax = 32767;
snUnknownData189.network = 0;
snUnknownData189.defined = 0;
snUnknownData189.available = 0;
snUnknownData189.version = "1.0c";
snUnknownData189.linked = [];
snUnknownData189.related = [];
snUnknownData189.shortDescription = "Unused.";

snMaximumFood.id = 190;
snMaximumFood.snName = "sn-maximum-food";
snMaximumFood.default = 3000;
snMaximumFood.category = "AoE 1";
snMaximumFood.min = -32768;
snMaximumFood.max = 32767;
snMaximumFood.rmin = 0;
snMaximumFood.rmax = 32767;
snMaximumFood.network = 0;
snMaximumFood.defined = 0;
snMaximumFood.available = 1;
snMaximumFood.version = "1.0c";
snMaximumFood.linked = [];
snMaximumFood.related = [ 191, 192, 193 ];
snMaximumFood.shortDescription = "AoE 1 only. Controls the maximum amount of food the computer player likes to have on hand. Must be &gt;= 0.";

snMaximumWood.id = 191;
snMaximumWood.snName = "sn-maximum-wood";
snMaximumWood.default = 2000;
snMaximumWood.category = "AoE 1";
snMaximumWood.min = -32768;
snMaximumWood.max = 32767;
snMaximumWood.rmin = 0;
snMaximumWood.rmax = 32767;
snMaximumWood.network = 0;
snMaximumWood.defined = 0;
snMaximumWood.available = 1;
snMaximumWood.version = "1.0c";
snMaximumWood.linked = [];
snMaximumWood.related = [ 190, 192, 193 ];
snMaximumWood.shortDescription = "AoE 1 only. Controls the maximum amount of wood the computer player likes to have on hand. Must be &gt;= 0.";

snMaximumStone.id = 192;
snMaximumStone.snName = "sn-maximum-stone";
snMaximumStone.default = 1500;
snMaximumStone.category = "AoE 1";
snMaximumStone.min = -32768;
snMaximumStone.max = 32767;
snMaximumStone.rmin = 0;
snMaximumStone.rmax = 32767;
snMaximumStone.network = 0;
snMaximumStone.defined = 0;
snMaximumStone.available = 1;
snMaximumStone.version = "1.0c";
snMaximumStone.linked = [];
snMaximumStone.related = [ 190, 191, 193 ];
snMaximumStone.shortDescription = "AoE 1 only. Controls the maximum amount of stone the computer player likes to have on hand. Must be &gt;= 0.";

snMaximumGold.id = 193;
snMaximumGold.snName = "sn-maximum-gold";
snMaximumGold.default = 3000;
snMaximumGold.category = "AoE 1";
snMaximumGold.min = -32768;
snMaximumGold.max = 32767;
snMaximumGold.rmin = 0;
snMaximumGold.rmax = 32767;
snMaximumGold.network = 0;
snMaximumGold.defined = 0;
snMaximumGold.available = 1;
snMaximumGold.version = "1.0c";
snMaximumGold.linked = [];
snMaximumGold.related = [ 190, 191, 192 ];
snMaximumGold.shortDescription = "AoE 1 only. Controls the maximum amount of gold the computer player likes to have on hand. Must be &gt;= 0.";

snCoopShareInformation.id = 194;
snCoopShareInformation.snName = "sn-coop-share-information";
snCoopShareInformation.default = 1;
snCoopShareInformation.category = "Other";
snCoopShareInformation.min = -32768;
snCoopShareInformation.max = 32767;
snCoopShareInformation.rmin = 0;
snCoopShareInformation.rmax = 1;
snCoopShareInformation.network = 0;
snCoopShareInformation.defined = 1;
snCoopShareInformation.available = 0;
snCoopShareInformation.version = "1.0c";
snCoopShareInformation.linked = [];
snCoopShareInformation.related = [ 196, 197 ];
snCoopShareInformation.shortDescription = "Controls whether or not allied computer players share information about what they uncover (this is not like Cartography; instead, it's analogous to two humans chatting).";

snAttackWinningPlayerFactor.id = 195;
snAttackWinningPlayerFactor.snName = "sn-attack-winning-player-factor";
snAttackWinningPlayerFactor.default = 25;
snAttackWinningPlayerFactor.category = "Attack";
snAttackWinningPlayerFactor.min = -32768;
snAttackWinningPlayerFactor.max = 32767;
snAttackWinningPlayerFactor.rmin = -32768;
snAttackWinningPlayerFactor.rmax = 32767;
snAttackWinningPlayerFactor.network = 0;
snAttackWinningPlayerFactor.defined = 1;
snAttackWinningPlayerFactor.available = "available, but only for 1v1 and Wonder Race games";
snAttackWinningPlayerFactor.version = "1.0c";
snAttackWinningPlayerFactor.linked = [ 188 ];
snAttackWinningPlayerFactor.related = [ 249 ];
snAttackWinningPlayerFactor.shortDescription = "The influence the sn-attack-winning-player will have on deciding who to attack if it's set to 1.";

snCoopShareAttacking.id = 196;
snCoopShareAttacking.snName = "sn-coop-share-attacking";
snCoopShareAttacking.default = 1;
snCoopShareAttacking.category = "Attack";
snCoopShareAttacking.min = -32768;
snCoopShareAttacking.max = 32767;
snCoopShareAttacking.rmin = 0;
snCoopShareAttacking.rmax = 1;
snCoopShareAttacking.network = 0;
snCoopShareAttacking.defined = 1;
snCoopShareAttacking.available = "seems available, but only for 1v1 and Wonder Race games";
snCoopShareAttacking.version = "1.0c";
snCoopShareAttacking.linked = [ 197 ];
snCoopShareAttacking.related = [ 194 ];
snCoopShareAttacking.shortDescription = "Controls whether allied computer players can attack to defend each other.";

snCoopShareAttackingInterval.id = 197;
snCoopShareAttackingInterval.snName = "sn-coop-share-attacking-interval";
snCoopShareAttackingInterval.default = 120;
snCoopShareAttackingInterval.category = "Attack";
snCoopShareAttackingInterval.min = -32768;
snCoopShareAttackingInterval.max = 32767;
snCoopShareAttackingInterval.rmin = 0;
snCoopShareAttackingInterval.rmax = 32767;
snCoopShareAttackingInterval.network = 0;
snCoopShareAttackingInterval.defined = 1;
snCoopShareAttackingInterval.available = "seems available, but only for 1v1 and Wonder Race games";
snCoopShareAttackingInterval.version = "1.0c";
snCoopShareAttackingInterval.linked = [ 196 ];
snCoopShareAttackingInterval.related = [ 194 ];
snCoopShareAttackingInterval.shortDescription = "Controls how often this computer player can ask another for help (in seconds).";

snPercentageExploreExterminators.id = 198;
snPercentageExploreExterminators.snName = "sn-percentage-explore-exterminators";
snPercentageExploreExterminators.default = 50;
snPercentageExploreExterminators.category = "Explore";
snPercentageExploreExterminators.min = -32768;
snPercentageExploreExterminators.max = 32767;
snPercentageExploreExterminators.rmin = 0;
snPercentageExploreExterminators.rmax = 100;
snPercentageExploreExterminators.network = 0;
snPercentageExploreExterminators.defined = 1;
snPercentageExploreExterminators.available = 0;
snPercentageExploreExterminators.version = "1.0c";
snPercentageExploreExterminators.linked = [];
snPercentageExploreExterminators.related = [];
snPercentageExploreExterminators.shortDescription = "Determines how many of the computer player's soldier explore groups are set as extermination groups. Must be &gt;= 0 and &lt;= 100.";

snUnknownData199.id = 199;
snUnknownData199.snName = "unknown-data-199";
snUnknownData199.default = 25;
snUnknownData199.category = "None";
snUnknownData199.min = -32768;
snUnknownData199.max = 32767;
snUnknownData199.rmin = -32768;
snUnknownData199.rmax = 32767;
snUnknownData199.network = 0;
snUnknownData199.defined = 0;
snUnknownData199.available = 0;
snUnknownData199.version = "1.0c";
snUnknownData199.linked = [];
snUnknownData199.related = [];
snUnknownData199.shortDescription = "Unused.";

snUnknownData200.id = 200;
snUnknownData200.snName = "unknown-data-200";
snUnknownData200.default = 50;
snUnknownData200.category = "None";
snUnknownData200.min = -32768;
snUnknownData200.max = 32767;
snUnknownData200.rmin = -32768;
snUnknownData200.rmax = 32767;
snUnknownData200.network = 0;
snUnknownData200.defined = 0;
snUnknownData200.available = 0;
snUnknownData200.version = "1.0c";
snUnknownData200.linked = [];
snUnknownData200.related = [];
snUnknownData200.shortDescription = "Unused.";

snTrackPlayerHistory.id = 201;
snTrackPlayerHistory.snName = "sn-track-player-history";
snTrackPlayerHistory.default = 0;
snTrackPlayerHistory.category = "Other";
snTrackPlayerHistory.min = -32768;
snTrackPlayerHistory.max = 32767;
snTrackPlayerHistory.rmin = 0;
snTrackPlayerHistory.rmax = 1;
snTrackPlayerHistory.network = 0;
snTrackPlayerHistory.defined = 1;
snTrackPlayerHistory.available = 0;
snTrackPlayerHistory.version = "1.0c";
snTrackPlayerHistory.linked = [];
snTrackPlayerHistory.related = [ 105 ];
snTrackPlayerHistory.shortDescription = "Decides whether or not a human player's tendencies are tracked or not.";

snMinimumDropsiteBuffer.id = 202;
snMinimumDropsiteBuffer.snName = "sn-minimum-dropsite-buffer";
snMinimumDropsiteBuffer.default = 25;
snMinimumDropsiteBuffer.category = "Economy";
snMinimumDropsiteBuffer.min = -32768;
snMinimumDropsiteBuffer.max = 32767;
snMinimumDropsiteBuffer.rmin = 0;
snMinimumDropsiteBuffer.rmax = 255;
snMinimumDropsiteBuffer.network = 0;
snMinimumDropsiteBuffer.defined = 1;
snMinimumDropsiteBuffer.available = 0;
snMinimumDropsiteBuffer.version = "1.0c";
snMinimumDropsiteBuffer.linked = [ 86, 87, 260, 261 ];
snMinimumDropsiteBuffer.related = [ 248 ];
snMinimumDropsiteBuffer.shortDescription = "Controls how far away a computer player will keep dropsites in relation to enemy town centers.";

snUseByTypeMaxGathering.id = 203;
snUseByTypeMaxGathering.snName = "sn-use-by-type-max-gathering";
snUseByTypeMaxGathering.default = 0;
snUseByTypeMaxGathering.category = "Economy";
snUseByTypeMaxGathering.min = -32768;
snUseByTypeMaxGathering.max = 32767;
snUseByTypeMaxGathering.rmin = 0;
snUseByTypeMaxGathering.rmax = 1;
snUseByTypeMaxGathering.network = 0;
snUseByTypeMaxGathering.defined = 1;
snUseByTypeMaxGathering.available = 0;
snUseByTypeMaxGathering.version = "1.0c";
snUseByTypeMaxGathering.linked = [];
snUseByTypeMaxGathering.related = [ 142, 148, 149 ];
snUseByTypeMaxGathering.shortDescription = "Controls whether or not logical, type-specific gatherer requirements are placed on the quantity of resources gatherers must collect before being allowed to be retasked.";

snMinimumBoarHuntGroupSize.id = 204;
snMinimumBoarHuntGroupSize.snName = "sn-minimum-boar-hunt-group-size";
snMinimumBoarHuntGroupSize.default = 5;
snMinimumBoarHuntGroupSize.category = "Economy";
snMinimumBoarHuntGroupSize.min = -32768;
snMinimumBoarHuntGroupSize.max = 8;
snMinimumBoarHuntGroupSize.rmin = 0;
snMinimumBoarHuntGroupSize.rmax = 8;
snMinimumBoarHuntGroupSize.network = 0;
snMinimumBoarHuntGroupSize.defined = 1;
snMinimumBoarHuntGroupSize.available = 0;
snMinimumBoarHuntGroupSize.version = "1.0c";
snMinimumBoarHuntGroupSize.linked = [ 252, 244 ];
snMinimumBoarHuntGroupSize.related = [ 235, 245 ];
snMinimumBoarHuntGroupSize.shortDescription = "The number of villagers a computer player must collect before allowing boars to be hunted for food.";

snAutoBuildDropsites.id = 205;
snAutoBuildDropsites.snName = "sn-auto-build-dropsites";
snAutoBuildDropsites.default = -1;
snAutoBuildDropsites.category = "AoE 1";
snAutoBuildDropsites.min = -32768;
snAutoBuildDropsites.max = 32767;
snAutoBuildDropsites.rmin = 0;
snAutoBuildDropsites.rmax = 1;
snAutoBuildDropsites.network = 0;
snAutoBuildDropsites.defined = 0;
snAutoBuildDropsites.available = 1;
snAutoBuildDropsites.version = "1.0c";
snAutoBuildDropsites.linked = [];
snAutoBuildDropsites.related = [];
snAutoBuildDropsites.shortDescription = "AoE 1 only. Controls whether or not the computer player decides how and when to build storage pits and granaries. Must be 0 or 1.";

snAutoBuildFarms.id = 206;
snAutoBuildFarms.snName = "sn-auto-build-farms";
snAutoBuildFarms.default = -1;
snAutoBuildFarms.category = "AoE 1";
snAutoBuildFarms.min = -32768;
snAutoBuildFarms.max = 32767;
snAutoBuildFarms.rmin = 0;
snAutoBuildFarms.rmax = 1;
snAutoBuildFarms.network = 0;
snAutoBuildFarms.defined = 0;
snAutoBuildFarms.available = 1;
snAutoBuildFarms.version = "1.0c";
snAutoBuildFarms.linked = [];
snAutoBuildFarms.related = [];
snAutoBuildFarms.shortDescription = "AoE 1 only. Controls whether or not the computer player can use extra wood to build Farms once all of the build list buildings are constructed. Must be 0 or 1.";

snAutoBuildTowers.id = 207;
snAutoBuildTowers.snName = "sn-auto-build-towers";
snAutoBuildTowers.default = -1;
snAutoBuildTowers.category = "AoE 1";
snAutoBuildTowers.min = -32768;
snAutoBuildTowers.max = 32767;
snAutoBuildTowers.rmin = 0;
snAutoBuildTowers.rmax = 1;
snAutoBuildTowers.network = 0;
snAutoBuildTowers.defined = 0;
snAutoBuildTowers.available = 1;
snAutoBuildTowers.version = "1.0c";
snAutoBuildTowers.linked = [];
snAutoBuildTowers.related = [];
snAutoBuildTowers.shortDescription = "AoE 1 only. Controls whether or not the computer player can use extra stone to build towers. Must be 0 or 1.";

snAutoBuildDocks.id = 208;
snAutoBuildDocks.snName = "sn-auto-build-docks";
snAutoBuildDocks.default = -1;
snAutoBuildDocks.category = "AoE 1";
snAutoBuildDocks.min = -32768;
snAutoBuildDocks.max = 32767;
snAutoBuildDocks.rmin = 0;
snAutoBuildDocks.rmax = 1;
snAutoBuildDocks.network = 0;
snAutoBuildDocks.defined = 0;
snAutoBuildDocks.available = 1;
snAutoBuildDocks.version = "1.0c";
snAutoBuildDocks.linked = [];
snAutoBuildDocks.related = [];
snAutoBuildDocks.shortDescription = "AoE 1 only. Controls whether or not the computer player decides how and when to build Docks. Must be 0 or 1.";

snAutoBuildFishingBoats.id = 209;
snAutoBuildFishingBoats.snName = "sn-auto-build-fishing-boats";
snAutoBuildFishingBoats.default = -1;
snAutoBuildFishingBoats.category = "AoE 1";
snAutoBuildFishingBoats.min = -32768;
snAutoBuildFishingBoats.max = 32767;
snAutoBuildFishingBoats.rmin = 0;
snAutoBuildFishingBoats.rmax = 1;
snAutoBuildFishingBoats.network = 0;
snAutoBuildFishingBoats.defined = 0;
snAutoBuildFishingBoats.available = 1;
snAutoBuildFishingBoats.version = "1.0c";
snAutoBuildFishingBoats.linked = [];
snAutoBuildFishingBoats.related = [];
snAutoBuildFishingBoats.shortDescription = "AoE 1 only. Controls whether or not the computer player decides how and when to build fishing boats. Must be 0 or 1.";

snAutoBuildTransports.id = 210;
snAutoBuildTransports.snName = "sn-auto-build-transports";
snAutoBuildTransports.default = -1;
snAutoBuildTransports.category = "AoE 1";
snAutoBuildTransports.min = -32768;
snAutoBuildTransports.max = 32767;
snAutoBuildTransports.rmin = 0;
snAutoBuildTransports.rmax = 1;
snAutoBuildTransports.network = 0;
snAutoBuildTransports.defined = 0;
snAutoBuildTransports.available = 1;
snAutoBuildTransports.version = "1.0c";
snAutoBuildTransports.linked = [];
snAutoBuildTransports.related = [];
snAutoBuildTransports.shortDescription = "AoE 1 only. Controls whether or not the computer player decides how and when to build transports. Must be 0 or 1.";

snUnknownData211.id = 211;
snUnknownData211.snName = "unknown-data-211";
snUnknownData211.default = -1;
snUnknownData211.category = "None";
snUnknownData211.min = -32768;
snUnknownData211.max = 32767;
snUnknownData211.rmin = -32768;
snUnknownData211.rmax = 32767;
snUnknownData211.network = 0;
snUnknownData211.defined = 0;
snUnknownData211.available = 0;
snUnknownData211.version = "1.0c";
snUnknownData211.linked = [];
snUnknownData211.related = [];
snUnknownData211.shortDescription = "Unused.";

snDesiredNumberDocks.id = 212;
snDesiredNumberDocks.snName = "sn-desired-number-docks";
snDesiredNumberDocks.default = 0;
snDesiredNumberDocks.category = "AoE 1";
snDesiredNumberDocks.min = -32768;
snDesiredNumberDocks.max = 32767;
snDesiredNumberDocks.rmin = 0;
snDesiredNumberDocks.rmax = 32767;
snDesiredNumberDocks.network = 0;
snDesiredNumberDocks.defined = 0;
snDesiredNumberDocks.available = 1;
snDesiredNumberDocks.version = "1.0c";
snDesiredNumberDocks.linked = [];
snDesiredNumberDocks.related = [];
snDesiredNumberDocks.shortDescription = "AoE 1 only. How many Docks the computer player wants in a given game. Must be &gt;= 0.";

snDesiredNumberFishingBoats.id = 213;
snDesiredNumberFishingBoats.snName = "sn-desired-number-fishing-boats";
snDesiredNumberFishingBoats.default = 0;
snDesiredNumberFishingBoats.category = "AoE 1";
snDesiredNumberFishingBoats.min = -32768;
snDesiredNumberFishingBoats.max = 32767;
snDesiredNumberFishingBoats.rmin = 0;
snDesiredNumberFishingBoats.rmax = 32767;
snDesiredNumberFishingBoats.network = 0;
snDesiredNumberFishingBoats.defined = 0;
snDesiredNumberFishingBoats.available = 1;
snDesiredNumberFishingBoats.version = "1.0c";
snDesiredNumberFishingBoats.linked = [];
snDesiredNumberFishingBoats.related = [];
snDesiredNumberFishingBoats.shortDescription = "AoE 1 only. How many fishing boats the computer player wants in a given game. Must be &gt;= 0.";

snDesiredNumberTransports.id = 214;
snDesiredNumberTransports.snName = "sn-desired-number-transports";
snDesiredNumberTransports.default = 0;
snDesiredNumberTransports.category = "AoE 1";
snDesiredNumberTransports.min = -32768;
snDesiredNumberTransports.max = 32767;
snDesiredNumberTransports.rmin = 0;
snDesiredNumberTransports.rmax = 32767;
snDesiredNumberTransports.network = 0;
snDesiredNumberTransports.defined = 0;
snDesiredNumberTransports.available = 1;
snDesiredNumberTransports.version = "1.0c";
snDesiredNumberTransports.linked = [];
snDesiredNumberTransports.related = [];
snDesiredNumberTransports.shortDescription = "AoE 1 only. How many transports the computer player wants in a given game. Must be &gt;= 0.";

snAllowDiplomacyChangeOnAllyAttack.id = 215;
snAllowDiplomacyChangeOnAllyAttack.snName = "sn-allow-diplomacy-change-on-ally-attack";
snAllowDiplomacyChangeOnAllyAttack.default = 1;
snAllowDiplomacyChangeOnAllyAttack.category = "AoE 1";
snAllowDiplomacyChangeOnAllyAttack.min = -32768;
snAllowDiplomacyChangeOnAllyAttack.max = 32767;
snAllowDiplomacyChangeOnAllyAttack.rmin = 0;
snAllowDiplomacyChangeOnAllyAttack.rmax = 1;
snAllowDiplomacyChangeOnAllyAttack.network = 0;
snAllowDiplomacyChangeOnAllyAttack.defined = 0;
snAllowDiplomacyChangeOnAllyAttack.available = "seems available, except for when teams-locked is disabled";
snAllowDiplomacyChangeOnAllyAttack.version = "1.0c";
snAllowDiplomacyChangeOnAllyAttack.linked = [];
snAllowDiplomacyChangeOnAllyAttack.related = [ 217, 178 ];
snAllowDiplomacyChangeOnAllyAttack.shortDescription = "AoE 1 only. Controls whether or not the computer player can change his alliance when attacked by an ally. Must be 0 or 1.";

snMinimumAmountForTrading.id = 216;
snMinimumAmountForTrading.snName = "sn-minimum-amount-for-trading";
snMinimumAmountForTrading.default = 50;
snMinimumAmountForTrading.category = "Economy";
snMinimumAmountForTrading.min = -32768;
snMinimumAmountForTrading.max = 32767;
snMinimumAmountForTrading.rmin = 0;
snMinimumAmountForTrading.rmax = 32767;
snMinimumAmountForTrading.network = 0;
snMinimumAmountForTrading.defined = 1;
snMinimumAmountForTrading.available = 0;
snMinimumAmountForTrading.version = "1.0c";
snMinimumAmountForTrading.linked = [];
snMinimumAmountForTrading.related = [];
snMinimumAmountForTrading.shortDescription = "Controls how much of a resource a computer player must have before using it for trading.";

snAllowDiplomacyChangeOnTribute.id = 217;
snAllowDiplomacyChangeOnTribute.snName = "sn-allow-diplomacy-change-on-tribute";
snAllowDiplomacyChangeOnTribute.default = 0;
snAllowDiplomacyChangeOnTribute.category = "AoE 1";
snAllowDiplomacyChangeOnTribute.min = -32768;
snAllowDiplomacyChangeOnTribute.max = 32767;
snAllowDiplomacyChangeOnTribute.rmin = 0;
snAllowDiplomacyChangeOnTribute.rmax = 1;
snAllowDiplomacyChangeOnTribute.network = 0;
snAllowDiplomacyChangeOnTribute.defined = 0;
snAllowDiplomacyChangeOnTribute.available = "seems available, except for when teams-locked is disabled";
snAllowDiplomacyChangeOnTribute.version = "1.0c";
snAllowDiplomacyChangeOnTribute.linked = [];
snAllowDiplomacyChangeOnTribute.related = [ 215 ];
snAllowDiplomacyChangeOnTribute.shortDescription = "AoE 1 only. Controls whether or not the computer player will allow his diplomacy to change when he receives tribute from a player. Must be 0 or 1.";

snEasiestReactionPercentage.id = 218;
snEasiestReactionPercentage.snName = "sn-easiest-reaction-percentage";
snEasiestReactionPercentage.default = 100;
snEasiestReactionPercentage.category = "Attack";
snEasiestReactionPercentage.min = 100;
snEasiestReactionPercentage.max = 100;
snEasiestReactionPercentage.rmin = 0;
snEasiestReactionPercentage.rmax = 100;
snEasiestReactionPercentage.network = 1;
snEasiestReactionPercentage.defined = 1;
snEasiestReactionPercentage.available = 0;
snEasiestReactionPercentage.version = "1.0c";
snEasiestReactionPercentage.linked = [ 219 ];
snEasiestReactionPercentage.related = [ 229 ];
snEasiestReactionPercentage.shortDescription = "Sets the effective reaction percentage (of normal LOS) a computer player unit will use in single-player Easiest level scenario or campaign games.";

snEasierReactionPercentage.id = 219;
snEasierReactionPercentage.snName = "sn-easier-reaction-percentage";
snEasierReactionPercentage.default = 100;
snEasierReactionPercentage.category = "Attack";
snEasierReactionPercentage.min = 100;
snEasierReactionPercentage.max = 100;
snEasierReactionPercentage.rmin = 0;
snEasierReactionPercentage.rmax = 100;
snEasierReactionPercentage.network = 1;
snEasierReactionPercentage.defined = 1;
snEasierReactionPercentage.available = 0;
snEasierReactionPercentage.version = "1.0c";
snEasierReactionPercentage.linked = [ 218 ];
snEasierReactionPercentage.related = [ 229 ];
snEasierReactionPercentage.shortDescription = "Sets the effective reaction percentage (of normal LOS) a computer player unit will use in single-player easier scenario or campaign games.";

snMaxFarms.id = 220;
snMaxFarms.snName = "sn-max-farms";
snMaxFarms.default = -1;
snMaxFarms.category = "AoE 1";
snMaxFarms.min = -32768;
snMaxFarms.max = 32767;
snMaxFarms.rmin = 0;
snMaxFarms.rmax = 32767;
snMaxFarms.network = 0;
snMaxFarms.defined = 0;
snMaxFarms.available = 1;
snMaxFarms.version = "1.0c";
snMaxFarms.linked = [];
snMaxFarms.related = [];
snMaxFarms.shortDescription = "AoE 1 only. Caps the number of Farms a computer player will build. Must be &gt;= 0.";

snHitsBeforeAllianceChange.id = 221;
snHitsBeforeAllianceChange.snName = "sn-hits-before-alliance-change";
snHitsBeforeAllianceChange.default = 3;
snHitsBeforeAllianceChange.category = "Other";
snHitsBeforeAllianceChange.min = -32768;
snHitsBeforeAllianceChange.max = 32767;
snHitsBeforeAllianceChange.rmin = 0;
snHitsBeforeAllianceChange.rmax = 32767;
snHitsBeforeAllianceChange.network = 0;
snHitsBeforeAllianceChange.defined = 1;
snHitsBeforeAllianceChange.available = "available, except for when teams-locked is disabled";
snHitsBeforeAllianceChange.version = "1.0c";
snHitsBeforeAllianceChange.linked = [];
snHitsBeforeAllianceChange.related = [];
snHitsBeforeAllianceChange.shortDescription = "Sets the number of times a computer player will allow his units to be hit by an ally before allowing his diplomacy to be changed.";

snMaxTowers.id = 222;
snMaxTowers.snName = "sn-max-towers";
snMaxTowers.default = 10;
snMaxTowers.category = "AoE 1";
snMaxTowers.min = -32768;
snMaxTowers.max = 32767;
snMaxTowers.rmin = 0;
snMaxTowers.rmax = 32767;
snMaxTowers.network = 0;
snMaxTowers.defined = 0;
snMaxTowers.available = "seems available";
snMaxTowers.version = "1.0c";
snMaxTowers.linked = [];
snMaxTowers.related = [];
snMaxTowers.shortDescription = "AoE 1 only. Caps the number of towers a computer player will build. Must be &gt;= 0. Starts at 0, changed to 10 after some time has elapsed.";

snAutoBuildWarships.id = 223;
snAutoBuildWarships.snName = "sn-auto-build-warships";
snAutoBuildWarships.default = -1;
snAutoBuildWarships.category = "AoE 1";
snAutoBuildWarships.min = -32768;
snAutoBuildWarships.max = 32767;
snAutoBuildWarships.rmin = 0;
snAutoBuildWarships.rmax = 1;
snAutoBuildWarships.network = 0;
snAutoBuildWarships.defined = 0;
snAutoBuildWarships.available = 1;
snAutoBuildWarships.version = "1.0c";
snAutoBuildWarships.linked = [];
snAutoBuildWarships.related = [];
snAutoBuildWarships.shortDescription = "AoE 1 only. Determines if the computer player is allowed to decide how and when to build warships. Must be 0 or 1.";

snDesiredNumberWarships.id = 224;
snDesiredNumberWarships.snName = "sn-desired-number-warships";
snDesiredNumberWarships.default = 0;
snDesiredNumberWarships.category = "AoE 1";
snDesiredNumberWarships.min = -32768;
snDesiredNumberWarships.max = 32767;
snDesiredNumberWarships.rmin = 0;
snDesiredNumberWarships.rmax = 32767;
snDesiredNumberWarships.network = 0;
snDesiredNumberWarships.defined = 0;
snDesiredNumberWarships.available = 1;
snDesiredNumberWarships.version = "1.0c";
snDesiredNumberWarships.linked = [];
snDesiredNumberWarships.related = [];
snDesiredNumberWarships.shortDescription = "AoE 1 only. How many warships the computer player wants in a given game. Must be &gt;= 0.";

snAllowCivilianDefense.id = 225;
snAllowCivilianDefense.snName = "sn-allow-civilian-defense";
snAllowCivilianDefense.default = 1;
snAllowCivilianDefense.category = "Defense";
snAllowCivilianDefense.min = -32768;
snAllowCivilianDefense.max = 32767;
snAllowCivilianDefense.rmin = 0;
snAllowCivilianDefense.rmax = 3;
snAllowCivilianDefense.network = 0;
snAllowCivilianDefense.defined = 1;
snAllowCivilianDefense.available = 0;
snAllowCivilianDefense.version = "1.0c";
snAllowCivilianDefense.linked = [ ];
snAllowCivilianDefense.related = [ 100, 258 ];
snAllowCivilianDefense.shortDescription = "Set to 0 to disable civilian defense, 1 to defend against weak, non-ranged units, 2 for all weak units except warships and units faster than villagers, and 3 for all weak units except warships.";
snAllowCivilianDefense.description = "Set to 0 to disable civilian defense except against gaia (wolves, etc.), 1 to defend against weak, non-ranged units (like 1.0c), 2 for all weak units except warships and units faster than villagers, and 3 for all weak units except warships.</p><p>For reference, villager speed: default: 0.8, wheelbarrow: 0.88, hand-cart: 0.97.<br>For archer-line and skirmisher-line, speed: 0.96.</p><p>With " + snAllowCivilianOffense.getLink() + " set to 1, the \"weak units\" check is eliminated, allowing for a more aggressive response. Despite the speed advantage, even with only wheelbarrow, early ranged units are swiftly eliminated by villagers with minimal losses and luring.";

snNumberForwardBuilders.id = 226;
snNumberForwardBuilders.snName = "sn-number-forward-builders";
snNumberForwardBuilders.default = 0;
snNumberForwardBuilders.category = "Attack";
snNumberForwardBuilders.min = -32768;
snNumberForwardBuilders.max = 32767;
snNumberForwardBuilders.rmin = 0;
snNumberForwardBuilders.rmax = 32767;
snNumberForwardBuilders.network = 0;
snNumberForwardBuilders.defined = 1;
snNumberForwardBuilders.available = 0;
snNumberForwardBuilders.version = "1.0c";
snNumberForwardBuilders.linked = [];
snNumberForwardBuilders.related = [];
snNumberForwardBuilders.shortDescription = "The number of villagers a computer player uses to build outside of an enemy town. Forward builders refer specifically to those villagers that must board a Transport to cross over water that cannot otherwise be pathed, either because players are on islands, or because other forms of access have been walled-off. It is not necessary to specify forward builders, unless the villagers need to board a Transport.";

snPercentAttackSoldiers.id = 227;
snPercentAttackSoldiers.snName = "sn-percent-attack-soldiers";
snPercentAttackSoldiers.default = 75;
snPercentAttackSoldiers.category = "Attack";
snPercentAttackSoldiers.min = -32768;
snPercentAttackSoldiers.max = 32767;
snPercentAttackSoldiers.rmin = 0;
snPercentAttackSoldiers.rmax = 100;
snPercentAttackSoldiers.network = 0;
snPercentAttackSoldiers.defined = 1;
snPercentAttackSoldiers.available = 0;
snPercentAttackSoldiers.version = "1.0c";
snPercentAttackSoldiers.linked = [];
snPercentAttackSoldiers.related = [ 228, 36, 247 ];
snPercentAttackSoldiers.shortDescription = "Sets the percentage of defense soldiers that will be sent into battle (modified for difficulty level) the next time attack-now is issued. All newly created soldiers are defense soldiers by default, and will remain defense soldiers until attack-now is issued. For example, if 10 soldiers were defending a town, and sn-percent-attack-soldiers was set to 50, then 5 soldiers will form an attack group and attack. This SN only needs to be set once, but it can be changed as needed. sn-percent-attack-soldiers works best when not using sn-number-defend-groups.";

snPercentAttackBoats.id = 228;
snPercentAttackBoats.snName = "sn-percent-attack-boats";
snPercentAttackBoats.default = 75;
snPercentAttackBoats.category = "Water";
snPercentAttackBoats.min = -32768;
snPercentAttackBoats.max = 32767;
snPercentAttackBoats.rmin = 0;
snPercentAttackBoats.rmax = 100;
snPercentAttackBoats.network = 0;
snPercentAttackBoats.defined = 1;
snPercentAttackBoats.available = 0;
snPercentAttackBoats.version = "1.0c";
snPercentAttackBoats.linked = [];
snPercentAttackBoats.related = [ 227, 58, 247 ];
snPercentAttackBoats.shortDescription = "Sets the percentage of defense boats that will be sent into battle (modified for difficulty level) the next time attack-now is issued. All newly created boats are defense boats by default, and will remain defense boats until attack-now is issued. Both attack soldiers and attack boats will attack when attack-now is issued. This SN only needs to be set once, but it can be changed as needed.";

snDoNotScaleForDifficultyLevel.id = 229;
snDoNotScaleForDifficultyLevel.snName = "sn-do-not-scale-for-difficulty-level";
snDoNotScaleForDifficultyLevel.default = 0;
snDoNotScaleForDifficultyLevel.category = "Other";
snDoNotScaleForDifficultyLevel.min = -32768;
snDoNotScaleForDifficultyLevel.max = 32767;
snDoNotScaleForDifficultyLevel.rmin = 0;
snDoNotScaleForDifficultyLevel.rmax = 1;
snDoNotScaleForDifficultyLevel.network = 0;
snDoNotScaleForDifficultyLevel.defined = 1;
snDoNotScaleForDifficultyLevel.available = 0;
snDoNotScaleForDifficultyLevel.version = "1.0c";
snDoNotScaleForDifficultyLevel.linked = [];
snDoNotScaleForDifficultyLevel.related = [ 218, 219 ];
snDoNotScaleForDifficultyLevel.shortDescription = "Disables the automatic difficulty-scaling.";
snDoNotScaleForDifficultyLevel.description = "Disables the automatic difficulty-scaling.</p><p>It is recommended to set this to 1 and do any difficulty adjustments manually. This needs to be issued BEFORE such SN's are altered or you'll see the values change by a set percentage.</p><p>The default of 0 allows these SNs to be automatically changed when set using (set-strategic-number). There are differences between Scenarios and Non-Scenarios (thanks to scripter64 for testing this).</p><h4>Non-Scenario Game</h4><p>Hard and Hardest:</p><ul><li>No change</li></ul><p>Moderate: multiplied by 0.75:</p><ul><li>" + snMinimumAttackGroupSize.getLink() + "</li><li>" + snMaximumAttackGroupSize.getLink() + "</li><li>" + snMinimumBoatAttackGroupSize.getLink() + "</li><li>" + snMaximumBoatAttackGroupSize.getLink() + "</li><li>" + snPercentAttackSoldiers.getLink() + "</li><li>" + snPercentAttackBoats.getLink() + "</li></ul><p>Easy: multiplied by 0.5:</p><ul><li>same list as moderate</li></ul><p>Easiest: multiplied by 0.25:</p><ul><li>same list as moderate</li></ul><h4>Scenario Game</h4><p>Hardest:</p><ul><li>No change</li></ul><p>Hard: multiplied by 0.8:</p><ul><li>" + snNumberAttackGroups.getLink() + "</li><li>" + snNumberBoatAttackGroups.getLink() + "</li><li>" + snMinimumAttackGroupSize.getLink() + "</li><li>" + snMaximumAttackGroupSize.getLink() + "</li><li>" + snMinimumBoatAttackGroupSize.getLink() + "</li><li>" + snMaximumBoatAttackGroupSize.getLink() + "</li><li>" + snPercentEnemySightedResponse.getLink() + "</li><li>" + snEnemySightedResponseDistance.getLink() + "</li></ul><p>Moderate: multiplied by 0.6:</p><ul><li>" + snNumberAttackGroups.getLink() + "</li><li>" + snNumberBoatAttackGroups.getLink() + "</li><li>" + snPercentEnemySightedResponse.getLink() + "</li><li>" + snEnemySightedResponseDistance.getLink() + "</li></ul><p>Easy: multiplied by 0.4:</p><ul><li>same list as moderate</li></ul><p>Easiest: multiplied by 0.2:</p><ul><li>same list as moderate</li></ul>";

snGroupFormDistance.id = 230;
snGroupFormDistance.snName = "sn-group-form-distance";
snGroupFormDistance.default = 20;
snGroupFormDistance.category = "Attack";
snGroupFormDistance.min = -32768;
snGroupFormDistance.max = 30;
snGroupFormDistance.rmin = 0;
snGroupFormDistance.rmax = 30;
snGroupFormDistance.network = 0;
snGroupFormDistance.defined = 1;
snGroupFormDistance.available = 0;
snGroupFormDistance.version = "1.0c";
snGroupFormDistance.linked = [];
snGroupFormDistance.related = [];
snGroupFormDistance.shortDescription = "Sets the distance over which attack soldiers will group. Set this value high if buildings that train military units are far apart.";

snIgnoreAttackGroupUnderAttack.id = 231;
snIgnoreAttackGroupUnderAttack.snName = "sn-ignore-attack-group-under-attack";
snIgnoreAttackGroupUnderAttack.default = 0;
snIgnoreAttackGroupUnderAttack.category = "Attack";
snIgnoreAttackGroupUnderAttack.min = -32768;
snIgnoreAttackGroupUnderAttack.max = 32767;
snIgnoreAttackGroupUnderAttack.rmin = 0;
snIgnoreAttackGroupUnderAttack.rmax = 1;
snIgnoreAttackGroupUnderAttack.network = 0;
snIgnoreAttackGroupUnderAttack.defined = 1;
snIgnoreAttackGroupUnderAttack.available = 0;
snIgnoreAttackGroupUnderAttack.version = "1.0c";
snIgnoreAttackGroupUnderAttack.linked = [];
snIgnoreAttackGroupUnderAttack.related = [];
snIgnoreAttackGroupUnderAttack.shortDescription = "Set to 1 to specify that defensive units should ignore attack groups under attack.";

snGatherDefenseUnits.id = 232;
snGatherDefenseUnits.snName = "sn-gather-defense-units";
snGatherDefenseUnits.default = 0;
snGatherDefenseUnits.category = "Defense";
snGatherDefenseUnits.min = -32768;
snGatherDefenseUnits.max = 32767;
snGatherDefenseUnits.rmin = 0;
snGatherDefenseUnits.rmax = 1;
snGatherDefenseUnits.network = 0;
snGatherDefenseUnits.defined = 1;
snGatherDefenseUnits.available = 0;
snGatherDefenseUnits.version = "1.0c";
snGatherDefenseUnits.linked = [];
snGatherDefenseUnits.related = [ 239, 143 ];
snGatherDefenseUnits.shortDescription = "Set to 1 to send units to defend buildings under construction.";

snMaximumWoodDropDistance.id = 233;
snMaximumWoodDropDistance.snName = "sn-maximum-wood-drop-distance";
snMaximumWoodDropDistance.default = -1;
snMaximumWoodDropDistance.category = "Economy";
snMaximumWoodDropDistance.min = -32768;
snMaximumWoodDropDistance.max = 32767;
snMaximumWoodDropDistance.rmin = -2;
snMaximumWoodDropDistance.rmax = 255;
snMaximumWoodDropDistance.network = 0;
snMaximumWoodDropDistance.defined = 1;
snMaximumWoodDropDistance.available = 0;
snMaximumWoodDropDistance.version = "1.0c";
snMaximumWoodDropDistance.linked = [ 164 ];
snMaximumWoodDropDistance.related = [ 234, 235, 236, 237, 238 ];
snMaximumWoodDropDistance.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it.";
snMaximumWoodDropDistance.description = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). -2 disables wood gathering.";

snMaximumFoodDropDistance.id = 234;
snMaximumFoodDropDistance.snName = "sn-maximum-food-drop-distance";
snMaximumFoodDropDistance.default = -1;
snMaximumFoodDropDistance.category = "Economy";
snMaximumFoodDropDistance.min = -32768;
snMaximumFoodDropDistance.max = 32767;
snMaximumFoodDropDistance.rmin = -2;
snMaximumFoodDropDistance.rmax = 255;
snMaximumFoodDropDistance.network = 0;
snMaximumFoodDropDistance.defined = 1;
snMaximumFoodDropDistance.available = 0;
snMaximumFoodDropDistance.version = "1.0c";
snMaximumFoodDropDistance.linked = [ 163, 235, 236 ];
snMaximumFoodDropDistance.related = [ 233, 237, 238 ];
snMaximumFoodDropDistance.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it.";
snMaximumFoodDropDistance.description = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). -2 disables all food gathering, except for hunting.";

snMaximumHuntDropDistance.id = 235;
snMaximumHuntDropDistance.snName = "sn-maximum-hunt-drop-distance";
snMaximumHuntDropDistance.default = -1;
snMaximumHuntDropDistance.category = "Economy";
snMaximumHuntDropDistance.min = -32768;
snMaximumHuntDropDistance.max = 32767;
snMaximumHuntDropDistance.rmin = -2;
snMaximumHuntDropDistance.rmax = 255;
snMaximumHuntDropDistance.network = 0;
snMaximumHuntDropDistance.defined = 1;
snMaximumHuntDropDistance.available = 0;
snMaximumHuntDropDistance.version = "1.0c";
snMaximumHuntDropDistance.linked = [ 234, 236 ];
snMaximumHuntDropDistance.related = [ 204, 252, 244, 245, 233, 237, 238 ];
snMaximumHuntDropDistance.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it.";
snMaximumHuntDropDistance.description = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). -2 disables hunting gathering.";

snMaximumFishBoatDropDistance.id = 236;
snMaximumFishBoatDropDistance.snName = "sn-maximum-fish-boat-drop-distance";
snMaximumFishBoatDropDistance.default = -1;
snMaximumFishBoatDropDistance.category = "Water";
snMaximumFishBoatDropDistance.min = -32768;
snMaximumFishBoatDropDistance.max = 32767;
snMaximumFishBoatDropDistance.rmin = -2;
snMaximumFishBoatDropDistance.rmax = 255;
snMaximumFishBoatDropDistance.network = 0;
snMaximumFishBoatDropDistance.defined = 1;
snMaximumFishBoatDropDistance.available = "available, except for water maps, however if the value will always be large enough, it should be fine";
snMaximumFishBoatDropDistance.version = "1.0c";
snMaximumFishBoatDropDistance.linked = [ 234, 235 ];
snMaximumFishBoatDropDistance.related = [ 233, 237, 238 ];
snMaximumFishBoatDropDistance.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it.";
snMaximumFishBoatDropDistance.description = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). If set to 0, all fishing ships will explore the water. -2 disables fish gathering for fishing ships.";

snMaximumGoldDropDistance.id = 237;
snMaximumGoldDropDistance.snName = "sn-maximum-gold-drop-distance";
snMaximumGoldDropDistance.default = -1;
snMaximumGoldDropDistance.category = "Economy";
snMaximumGoldDropDistance.min = -32768;
snMaximumGoldDropDistance.max = 32767;
snMaximumGoldDropDistance.rmin = -2;
snMaximumGoldDropDistance.rmax = 255;
snMaximumGoldDropDistance.network = 0;
snMaximumGoldDropDistance.defined = 1;
snMaximumGoldDropDistance.available = 0;
snMaximumGoldDropDistance.version = "1.0c";
snMaximumGoldDropDistance.linked = [ 166 ];
snMaximumGoldDropDistance.related = [ 233, 234, 235, 236, 238 ];
snMaximumGoldDropDistance.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it.";
snMaximumGoldDropDistance.description = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be). -2 disables gold gathering.";

snMaximumStoneDropDistance.id = 238;
snMaximumStoneDropDistance.snName = "sn-maximum-stone-drop-distance";
snMaximumStoneDropDistance.default = -1;
snMaximumStoneDropDistance.category = "Economy";
snMaximumStoneDropDistance.min = -32768;
snMaximumStoneDropDistance.max = 32767;
snMaximumStoneDropDistance.rmin = -2;
snMaximumStoneDropDistance.rmax = 255;
snMaximumStoneDropDistance.network = 0;
snMaximumStoneDropDistance.defined = 1;
snMaximumStoneDropDistance.available = 0;
snMaximumStoneDropDistance.version = "1.0c";
snMaximumStoneDropDistance.linked = [ 165 ];
snMaximumStoneDropDistance.related = [ 233, 234, 235, 236, 237 ];
snMaximumStoneDropDistance.shortDescription = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it.";
snMaximumStoneDropDistance.description = "The parameters control how far from a dropsite a given resource type can be before the CP ignores it. -1 indicates a &quot;don't care&quot; -- i.e. it can be any distance (as it used to be).  -2 disables stone gathering.";

snGatherIdleSoldiersAtCenter.id = 239;
snGatherIdleSoldiersAtCenter.snName = "sn-gather-idle-soldiers-at-center";
snGatherIdleSoldiersAtCenter.default = -1;
snGatherIdleSoldiersAtCenter.category = "Defense";
snGatherIdleSoldiersAtCenter.min = -32768;
snGatherIdleSoldiersAtCenter.max = 32767;
snGatherIdleSoldiersAtCenter.rmin = 0;
snGatherIdleSoldiersAtCenter.rmax = 1;
snGatherIdleSoldiersAtCenter.network = 0;
snGatherIdleSoldiersAtCenter.defined = 1;
snGatherIdleSoldiersAtCenter.available = 0;
snGatherIdleSoldiersAtCenter.version = "1.0c";
snGatherIdleSoldiersAtCenter.linked = [];
snGatherIdleSoldiersAtCenter.related = [ 232 ];
snGatherIdleSoldiersAtCenter.shortDescription = "When set to 1, it will &quot;move&quot; the town defense gather point to the &quot;center&quot; (randomized +-6 tiles) of the map. No provision is made if the center is in an unreachable spot. When it's set, all idle and retreating units will try to go to the center. Useful for King of the Hill and similar variants to get the CP to group near the middle.";

snGarrisonRams.id = 240;
snGarrisonRams.snName = "sn-garrison-rams";
snGarrisonRams.default = 1;
snGarrisonRams.category = "Attack";
snGarrisonRams.min = -32768;
snGarrisonRams.max = 32767;
snGarrisonRams.rmin = 0;
snGarrisonRams.rmax = 1;
snGarrisonRams.network = 0;
snGarrisonRams.defined = 1;
snGarrisonRams.available = "available, if you will not create rams";
snGarrisonRams.version = "1.0c";
snGarrisonRams.linked = [];
snGarrisonRams.related = [];
snGarrisonRams.shortDescription = "Set to 0 to turn off. When on, the CP AI tries (but doesn't always succeed) to put infantry units into rams before the attack group departs.";

snDoNotTransportFromSameZone.id = 241;
snDoNotTransportFromSameZone.snName = "sn-do-not-transport-from-same-zone";
snDoNotTransportFromSameZone.default = 0;
snDoNotTransportFromSameZone.category = "Water";
snDoNotTransportFromSameZone.min = -32768;
snDoNotTransportFromSameZone.max = 32767;
snDoNotTransportFromSameZone.rmin = 0;
snDoNotTransportFromSameZone.rmax = 1;
snDoNotTransportFromSameZone.network = 0;
snDoNotTransportFromSameZone.defined = 1;
snDoNotTransportFromSameZone.available = "available, except for water maps requiring transport ships";
snDoNotTransportFromSameZone.version = "1.0c";
snDoNotTransportFromSameZone.linked = [];
snDoNotTransportFromSameZone.related = [];
snDoNotTransportFromSameZone.shortDescription = "Set to 1 to influence transport ship behavior.";

snEnableNewBuildingSystem.id = 242;
snEnableNewBuildingSystem.snName = "sn-enable-new-building-system";
snEnableNewBuildingSystem.default = 0;
snEnableNewBuildingSystem.category = "Economy";
snEnableNewBuildingSystem.min = -32768;
snEnableNewBuildingSystem.max = 32767;
snEnableNewBuildingSystem.rmin = 0;
snEnableNewBuildingSystem.rmax = 1;
snEnableNewBuildingSystem.network = 0;
snEnableNewBuildingSystem.defined = 1;
snEnableNewBuildingSystem.available = 0;
snEnableNewBuildingSystem.version = "1.1";
snEnableNewBuildingSystem.linked = [];
snEnableNewBuildingSystem.related = [ 243 ];
snEnableNewBuildingSystem.shortDescription = "Set to 1 only once to request the new building system, featuring simultaneous construction and cancellation control.";
snEnableNewBuildingSystem.description = "Set to 1 only once to request the new building system, featuring simultaneous construction and cancellation control. If you want to enable new building system, you should do it either first thing in the script, or at any time that you have zero builders and zero pending buildings.";

snPercentBuildingCancellation.id = 243;
snPercentBuildingCancellation.snName = "sn-percent-building-cancellation";
snPercentBuildingCancellation.default = 100;
snPercentBuildingCancellation.category = "Economy";
snPercentBuildingCancellation.min = -32768;
snPercentBuildingCancellation.max = 32767;
snPercentBuildingCancellation.rmin = 1;
snPercentBuildingCancellation.rmax = 100;
snPercentBuildingCancellation.network = 0;
snPercentBuildingCancellation.defined = 1;
snPercentBuildingCancellation.available = 0;
snPercentBuildingCancellation.version = "1.1";
snPercentBuildingCancellation.linked = [];
snPercentBuildingCancellation.related = [ 242 ];
snPercentBuildingCancellation.shortDescription = "Set to the maximum allowable completion percentage for building cancellation.";

snEnableBoarHunting.id = 244;
snEnableBoarHunting.snName = "sn-enable-boar-hunting";
snEnableBoarHunting.default = 0;
snEnableBoarHunting.category = "Economy";
snEnableBoarHunting.min = -32768;
snEnableBoarHunting.max = 32767;
snEnableBoarHunting.rmin = 0;
snEnableBoarHunting.rmax = 2;
snEnableBoarHunting.network = 0;
snEnableBoarHunting.defined = 1;
snEnableBoarHunting.available = 0;
snEnableBoarHunting.version = "1.1";
snEnableBoarHunting.linked = [ 204, 252 ];
snEnableBoarHunting.related = [ 235, 245 ];
snEnableBoarHunting.shortDescription = "Set to 1 to target deer and boar; if it's set to 2, deer will be ignored.";

snMinimumNumberHunters.id = 245;
snMinimumNumberHunters.snName = "sn-minimum-number-hunters";
snMinimumNumberHunters.default = 0;
snMinimumNumberHunters.category = "Economy";
snMinimumNumberHunters.min = -32768;
snMinimumNumberHunters.max = 32767;
snMinimumNumberHunters.rmin = 0;
snMinimumNumberHunters.rmax = 32767;
snMinimumNumberHunters.network = 0;
snMinimumNumberHunters.defined = 1;
snMinimumNumberHunters.available = 0;
snMinimumNumberHunters.version = "1.1";
snMinimumNumberHunters.linked = [];
snMinimumNumberHunters.related = [ 204, 252, 235, 244 ];
snMinimumNumberHunters.shortDescription = "Set to force hunting. For best results when hunting boar, set this in conjunction with sn-minimum-boar-hunt-group-size.";

snObjectRepairLevel.id = 246;
snObjectRepairLevel.snName = "sn-object-repair-level";
snObjectRepairLevel.default = 16387;
snObjectRepairLevel.category = "Defense";
snObjectRepairLevel.min = -32768;
snObjectRepairLevel.max = 32767;
snObjectRepairLevel.rmin = 0;
snObjectRepairLevel.rmax = 32767;
snObjectRepairLevel.network = 0;
snObjectRepairLevel.defined = 1;
snObjectRepairLevel.available = 0;
snObjectRepairLevel.version = "1.1";
snObjectRepairLevel.linked = [];
snObjectRepairLevel.related = [];
snObjectRepairLevel.shortDescription = "Add bit flags together to generate a value: 0 = wonder; 1 = castle, monastery; 2 = town-center; 4 = barracks; 8 = archery-range; 16 = stable; 32 = siege-workshop; 64 = dock; 128 = market; 256 = university; 512 = blacksmith; 1024 = lumber-camp, mining-camp, mill; 2048 = house; 4096 = towers; 8192 = walls and gates; 16384 = siege weapons. For scenarios and campaigns, the default is 1 for compatibility.";
snObjectRepairLevel.description = "Add bit flags together to generate a value: 0 = wonder; 1 = castle, monastery; 2 = town-center; 4 = barracks; 8 = archery-range; 16 = stable; 32 = siege-workshop; 64 = dock; 128 = market; 256 = university; 512 = blacksmith; 1024 = lumber-camp, mining-camp, mill; 2048 = house; 4096 = towers; 8192 = walls and gates; 16384 = siege weapons.</p><p>For scenarios and campaigns, the default is 1 for compatibility. The default is 16387 (wonder, castle, monastery, town-center, siege) for all other game modes.</p><p>Examples:<br>0 = wonder only (essentially disabled)<br>1 = wonder, castle, monastery (the 1.0c repair level)<br>3 = wonder, castle, monastery, town-center<br>20547 = wonder, castle, monastery, town-center, dock, towers, siege weapons (scripter64 uses this in Chameleon)<br>20547 = 0 + 1 + 2 + 64 + 4096 + 16384";

snEnablePatrolAttack.id = 247;
snEnablePatrolAttack.snName = "sn-enable-patrol-attack";
snEnablePatrolAttack.default = 0;
snEnablePatrolAttack.category = "Attack";
snEnablePatrolAttack.min = -32768;
snEnablePatrolAttack.max = 32767;
snEnablePatrolAttack.rmin = 0;
snEnablePatrolAttack.rmax = 1;
snEnablePatrolAttack.network = 1;
snEnablePatrolAttack.defined = 1;
snEnablePatrolAttack.available = 0;
snEnablePatrolAttack.version = "1.1";
snEnablePatrolAttack.linked = [];
snEnablePatrolAttack.related = [ 227, 228, 36, 58 ];
snEnablePatrolAttack.shortDescription = "Set to 1 to enable the patrol-style local targeting system. When attacking a distant target, this causes units to retarget against nearby sighted units immediately instead of waiting until they are in proximity to the original target.";

snDropsiteSeparationDistance.id = 248;
snDropsiteSeparationDistance.snName = "sn-dropsite-separation-distance";
snDropsiteSeparationDistance.default = 10;
snDropsiteSeparationDistance.category = "Economy";
snDropsiteSeparationDistance.min = -32768;
snDropsiteSeparationDistance.max = 32767;
snDropsiteSeparationDistance.rmin = 1;
snDropsiteSeparationDistance.rmax = 255;
snDropsiteSeparationDistance.network = 0;
snDropsiteSeparationDistance.defined = 1;
snDropsiteSeparationDistance.available = 0;
snDropsiteSeparationDistance.version = "1.1";
snDropsiteSeparationDistance.linked = [ 86, 87, 260, 261 ];
snDropsiteSeparationDistance.related = [ 202, 272 ];
snDropsiteSeparationDistance.shortDescription = "Set to suggest the minimum distance between dropsites. Higher values can be useful for an escape camp when gatherers are under attack.";
snDropsiteSeparationDistance.description = "Set to suggest the minimum distance between dropsites.</p><p>From scripter64: \"I've found the best value, in general, to be around 3 or 4, which allows mills, mining camps, and lumber camps to be built near each other, but not too near. Setting it to higher values can be useful if you'd like to build an escape camp for when your gatherers are under attack.\"";

snTargetPlayerNumber.id = 249;
snTargetPlayerNumber.snName = "sn-target-player-number";
snTargetPlayerNumber.default = 0;
snTargetPlayerNumber.category = "Attack";
snTargetPlayerNumber.min = -32768;
snTargetPlayerNumber.max = 32767;
snTargetPlayerNumber.rmin = -1;
snTargetPlayerNumber.rmax = 8;
snTargetPlayerNumber.network = 0;
snTargetPlayerNumber.defined = 1;
snTargetPlayerNumber.available = 0;
snTargetPlayerNumber.version = "1.1";
snTargetPlayerNumber.linked = [];
snTargetPlayerNumber.related = [ 188, 195, 250, 251 ];
snTargetPlayerNumber.shortDescription = "Set to the number of the player that should be targeted for attack. If this sn is set to -1, initiating an attack will instead provide assistance to allies. When set to 0, sn-attack-winning-player will determine the target. Setting this to a player that cannot be attacked (an ally or the AI itself) will result in undefined behavior. You can also use this value with the &quot;target-player&quot; identifier in facts and actions.";

snSafeTownSize.id = 250;
snSafeTownSize.snName = "sn-safe-town-size";
snSafeTownSize.default = 255;
snSafeTownSize.category = "Defense";
snSafeTownSize.min = -32768;
snSafeTownSize.max = 32767;
snSafeTownSize.rmin = 1;
snSafeTownSize.rmax = 255;
snSafeTownSize.network = 0;
snSafeTownSize.defined = 1;
snSafeTownSize.available = 0;
snSafeTownSize.version = "1.1";
snSafeTownSize.linked = [ 74, 73 ];
snSafeTownSize.related = [ 249, 255 ];
snSafeTownSize.shortDescription = "If an enemy building is inside both sn-maximum-town-size and the region specified by this sn, it will be targeted by defensive units. If the building is inside sn-maximum-town-size, but outside this region, it will be targeted only if it belongs to the player specified by sn-target-player-number.";

snFocusPlayerNumber.id = 251;
snFocusPlayerNumber.snName = "sn-focus-player-number";
snFocusPlayerNumber.default = 0;
snFocusPlayerNumber.category = "Attack";
snFocusPlayerNumber.min = -32768;
snFocusPlayerNumber.max = 32767;
snFocusPlayerNumber.rmin = 0;
snFocusPlayerNumber.rmax = 8;
snFocusPlayerNumber.network = 0;
snFocusPlayerNumber.defined = 1;
snFocusPlayerNumber.available = 0;
snFocusPlayerNumber.version = "1.1";
snFocusPlayerNumber.linked = [];
snFocusPlayerNumber.related = [ 249 ];
snFocusPlayerNumber.shortDescription = "Set to any player number in order to use the &quot;focus-player&quot; identifier in facts and actions.";

snMinimumBoarLureGroupSize.id = 252;
snMinimumBoarLureGroupSize.snName = "sn-minimum-boar-lure-group-size";
snMinimumBoarLureGroupSize.default = 0;
snMinimumBoarLureGroupSize.category = "Economy";
snMinimumBoarLureGroupSize.min = -32768;
snMinimumBoarLureGroupSize.max = 32767;
snMinimumBoarLureGroupSize.rmin = 0;
snMinimumBoarLureGroupSize.rmax = 8;
snMinimumBoarLureGroupSize.network = 0;
snMinimumBoarLureGroupSize.defined = 1;
snMinimumBoarLureGroupSize.available = 0;
snMinimumBoarLureGroupSize.version = "1.1";
snMinimumBoarLureGroupSize.linked = [ 204, 244 ];
snMinimumBoarLureGroupSize.related = [ 235, 245 ];
snMinimumBoarLureGroupSize.shortDescription = "Set to the number of villagers that will be sent in the initial boar luring group.";
snMinimumBoarLureGroupSize.description = "Set to the number of villagers that will be sent in the initial boar luring group.</p><p>The initial luring group size is determined exclusively by sn-minimum-boar-lure-group-size. If this is set excessively high, luring a new boar will be blocked, which is useful to ensure that all new hunters will help with an existing lure only. If sn-minimum-boar-lure-group-size is set to 0, a new boar lure is guaranteed to start if sn-minimum-number-hunters requests at least 1 hunter and sn-enable-boar-hunting is set appropriately.</p><p>The sn-minimum-boar-hunt-group-size value is used only to determine how many hunters should be active during a lure. Each time a lurer is hit, it will try to request up to sn-minimum-boar-hunt-group-size hunters in total to help with the hunt. If it's set to 7, for example, it will request support hunters until there are 7 total hunters. After it is down, each boar will accept a maximum of 8 gatherers. The 9th will have to seek a new boar, if sn-minimum-boar-lure-group-size permits it.";

snPreferredMillPlacement.id = 253;
snPreferredMillPlacement.snName = "sn-preferred-mill-placement";
snPreferredMillPlacement.default = 0;
snPreferredMillPlacement.category = "Economy";
snPreferredMillPlacement.min = -32768;
snPreferredMillPlacement.max = 32767;
snPreferredMillPlacement.rmin = 0;
snPreferredMillPlacement.rmax = 2;
snPreferredMillPlacement.network = 0;
snPreferredMillPlacement.defined = 1;
snPreferredMillPlacement.available = 0;
snPreferredMillPlacement.version = "1.1";
snPreferredMillPlacement.linked = [];
snPreferredMillPlacement.related = [];
snPreferredMillPlacement.shortDescription = "Set to 0 for forage, 1 for deer, or 2 for shore fish.";

snEnableOffensivePriority.id = 254;
snEnableOffensivePriority.snName = "sn-enable-offensive-priority";
snEnableOffensivePriority.default = 0;
snEnableOffensivePriority.category = "Attack";
snEnableOffensivePriority.min = -32768;
snEnableOffensivePriority.max = 32767;
snEnableOffensivePriority.rmin = 0;
snEnableOffensivePriority.rmax = 1;
snEnableOffensivePriority.network = 0;
snEnableOffensivePriority.defined = 1;
snEnableOffensivePriority.available = 0;
snEnableOffensivePriority.version = "1.1";
snEnableOffensivePriority.linked = [];
snEnableOffensivePriority.related = [ 267 ];
snEnableOffensivePriority.shortDescription = "Set to 1 to enable attack-now and attack groups to target using the priorities set by up-set-offense-priority.";

snBuildingTargetingMode.id = 255;
snBuildingTargetingMode.snName = "sn-building-targeting-mode";
snBuildingTargetingMode.default = 0;
snBuildingTargetingMode.category = "Attack";
snBuildingTargetingMode.min = -32768;
snBuildingTargetingMode.max = 32767;
snBuildingTargetingMode.rmin = 0;
snBuildingTargetingMode.rmax = 2;
snBuildingTargetingMode.network = 0;
snBuildingTargetingMode.defined = 1;
snBuildingTargetingMode.available = 0;
snBuildingTargetingMode.version = "1.1";
snBuildingTargetingMode.linked = [ 74, 73 ];
snBuildingTargetingMode.related = [ 249, 250, 262 ];
snBuildingTargetingMode.shortDescription = "Set to 0 to target all buildings, 1 to ignore walls and gates, or 2 to ignore walls, gates, and dropsites. Please avoid this strategic number, as you may experience targeting failures under certain circumstances.";

snHomeExplorationTime.id = 256;
snHomeExplorationTime.snName = "sn-home-exploration-time";
snHomeExplorationTime.default = 300;
snHomeExplorationTime.category = "Explore";
snHomeExplorationTime.min = -32768;
snHomeExplorationTime.max = 32767;
snHomeExplorationTime.rmin = 0;
snHomeExplorationTime.rmax = 32767;
snHomeExplorationTime.network = 0;
snHomeExplorationTime.defined = 1;
snHomeExplorationTime.available = 0;
snHomeExplorationTime.version = "1.1";
snHomeExplorationTime.linked = [ ];
snHomeExplorationTime.related = [ 167, 32, 179 ];
snHomeExplorationTime.shortDescription = "Set to the maximum amount of time, in seconds, that should be dedicated to exploring the home town center region.";

snNumberCivilianMilitia.id = 257;
snNumberCivilianMilitia.snName = "sn-number-civilian-militia";
snNumberCivilianMilitia.default = 10;
snNumberCivilianMilitia.category = "Attack";
snNumberCivilianMilitia.min = -32768;
snNumberCivilianMilitia.max = 32767;
snNumberCivilianMilitia.rmin = 0;
snNumberCivilianMilitia.rmax = 200;
snNumberCivilianMilitia.network = 0;
snNumberCivilianMilitia.defined = 1;
snNumberCivilianMilitia.available = 0;
snNumberCivilianMilitia.version = "1.1";
snNumberCivilianMilitia.linked = [ 258 ];
snNumberCivilianMilitia.related = [ ];
snNumberCivilianMilitia.shortDescription = "Set to the maximum number of villagers who may be used to attack the enemy.";

snAllowCivilianOffense.id = 258;
snAllowCivilianOffense.snName = "sn-allow-civilian-offense";
snAllowCivilianOffense.default = 0;
snAllowCivilianOffense.category = "Attack";
snAllowCivilianOffense.min = -32768;
snAllowCivilianOffense.max = 32767;
snAllowCivilianOffense.rmin = 0;
snAllowCivilianOffense.rmax = 2;
snAllowCivilianOffense.network = 0;
snAllowCivilianOffense.defined = 1;
snAllowCivilianOffense.available = 0;
snAllowCivilianOffense.version = "1.1";
snAllowCivilianOffense.linked = [ 257 ];
snAllowCivilianOffense.related = [ 225 ];
snAllowCivilianOffense.shortDescription = "Set to 1 to allow villagers to participate as soldiers in town-size attacks. If set to 2, villagers will target enemy villagers and buildings even if defensive military units are available. If set to 0, villagers will only be sent to attack enemy forward towers, without murder holes.";
snAllowCivilianOffense.description = "Set to 1 to allow villagers to participate as soldiers in town-size attacks. If set to 2, villagers will target enemy villagers and buildings even if defensive military units are available. If set to 0, villagers will only be sent to attack enemy forward towers, without murder holes.</p><p>When set to 1 or 2, this strategic number also disables the \"weak units\" check of " + snAllowCivilianDefense.getLink() + ".";

snPreferredTradeDistance.id = 259;
snPreferredTradeDistance.snName = "sn-preferred-trade-distance";
snPreferredTradeDistance.default = 100;
snPreferredTradeDistance.category = "Economy";
snPreferredTradeDistance.min = -32768;
snPreferredTradeDistance.max = 32767;
snPreferredTradeDistance.rmin = 0;
snPreferredTradeDistance.rmax = 255;
snPreferredTradeDistance.network = 1;
snPreferredTradeDistance.defined = 1;
snPreferredTradeDistance.available = 0;
snPreferredTradeDistance.version = "1.1";
snPreferredTradeDistance.linked = [];
snPreferredTradeDistance.related = [];
snPreferredTradeDistance.shortDescription = "Set to the preferred distance between local and remote trade buildings.";

snLumberCampMaxDistance.id = 260;
snLumberCampMaxDistance.snName = "sn-lumber-camp-max-distance";
snLumberCampMaxDistance.default = 0;
snLumberCampMaxDistance.category = "Economy";
snLumberCampMaxDistance.min = -32768;
snLumberCampMaxDistance.max = 32767;
snLumberCampMaxDistance.rmin = 0;
snLumberCampMaxDistance.rmax = 255;
snLumberCampMaxDistance.network = 0;
snLumberCampMaxDistance.defined = 1;
snLumberCampMaxDistance.available = 0;
snLumberCampMaxDistance.version = "1.1";
snLumberCampMaxDistance.linked = [ 86, 261, 248, 202 ];
snLumberCampMaxDistance.related = [ 87, 74, 73 ];
snLumberCampMaxDistance.shortDescription = "Sets the maximum-town-size for lumber-camp placement, when non-zero. If set to 0, sn-camp-max-distance will be used instead.";

snMiningCampMaxDistance.id = 261;
snMiningCampMaxDistance.snName = "sn-mining-camp-max-distance";
snMiningCampMaxDistance.default = 0;
snMiningCampMaxDistance.category = "Economy";
snMiningCampMaxDistance.min = -32768;
snMiningCampMaxDistance.max = 32767;
snMiningCampMaxDistance.rmin = 0;
snMiningCampMaxDistance.rmax = 255;
snMiningCampMaxDistance.network = 0;
snMiningCampMaxDistance.defined = 1;
snMiningCampMaxDistance.available = 0;
snMiningCampMaxDistance.version = "1.1";
snMiningCampMaxDistance.linked = [ 86, 260, 248, 202 ];
snMiningCampMaxDistance.related = [ 87, 74, 73 ];
snMiningCampMaxDistance.shortDescription = "Sets the maximum-town-size for mining-camp placement, when non-zero. If set to 0, sn-camp-max-distance will be used instead.";

snWallTargetingMode.id = 262;
snWallTargetingMode.snName = "sn-wall-targeting-mode";
snWallTargetingMode.default = 0;
snWallTargetingMode.category = "Attack";
snWallTargetingMode.min = -32768;
snWallTargetingMode.max = 32767;
snWallTargetingMode.rmin = 0;
snWallTargetingMode.rmax = 1;
snWallTargetingMode.network = 1;
snWallTargetingMode.defined = 1;
snWallTargetingMode.available = 0;
snWallTargetingMode.version = "1.1";
snWallTargetingMode.linked = [];
snWallTargetingMode.related = [ 255 ];
snWallTargetingMode.shortDescription = "Set to 1 to allow military units to automatically target nearby walls and gates. If set to 0, they will likely be ignored.";
snWallTargetingMode.description = "Set to 1 to allow military units to automatically target nearby walls and gates. If set to 0, they will likely be ignored. It's good to use sn-wall-targeting-mode set to 1 if you are attacking with retargetable attack groups or, sometimes, TSA. It may be bad for attack-now, since they cannot be retargeted by the AI script,";

snLivestockToTownCenter.id = 263;
snLivestockToTownCenter.snName = "sn-livestock-to-town-center";
snLivestockToTownCenter.default = 0;
snLivestockToTownCenter.category = "Economy";
snLivestockToTownCenter.min = -32768;
snLivestockToTownCenter.max = 32767;
snLivestockToTownCenter.rmin = 0;
snLivestockToTownCenter.rmax = 1;
snLivestockToTownCenter.network = 1;
snLivestockToTownCenter.defined = 1;
snLivestockToTownCenter.available = 0;
snLivestockToTownCenter.version = "1.1";
snLivestockToTownCenter.linked = [];
snLivestockToTownCenter.related = [];
snLivestockToTownCenter.shortDescription = "Set to 1 to require livestock, such as sheep, to gather at the town center. If set to 0, they will gather at mills, as well.";

snEnableResearchQueue.id = 306;
snEnableResearchQueue.snName = "sn-enable-research-queue";
snEnableResearchQueue.default = 0;
snEnableResearchQueue.category = "Economy";
snEnableResearchQueue.min = -32768;
snEnableResearchQueue.max = 32767;
snEnableResearchQueue.rmin = 0;
snEnableResearchQueue.rmax = 1;
snEnableResearchQueue.network = 0;
snEnableResearchQueue.defined = 1;
snEnableResearchQueue.available = 0;
snEnableResearchQueue.version = "DE";
snEnableResearchQueue.linked = [];
snEnableResearchQueue.related = [264];
snEnableResearchQueue.shortDescription = "Controls whether AI players can (or cannot) queue technologies along with units when sn-enable-training-queue is enabled. Set to 1 to enable queued technologies.";

snEnableTrainingQueue.id = 264;
snEnableTrainingQueue.snName = "sn-enable-training-queue";
snEnableTrainingQueue.default = 0;
snEnableTrainingQueue.category = "Economy";
snEnableTrainingQueue.min = -32768;
snEnableTrainingQueue.max = 32767;
snEnableTrainingQueue.rmin = 0;
snEnableTrainingQueue.rmax = 15;
snEnableTrainingQueue.network = 0;
snEnableTrainingQueue.defined = 1;
snEnableTrainingQueue.available = 0;
snEnableTrainingQueue.version = "1.1";
snEnableTrainingQueue.linked = [];
snEnableTrainingQueue.related = [306];
snEnableTrainingQueue.shortDescription = "Set to values > 0 to allow an additional unit(s) to be queued at each building. If set to 0, buildings will train one unit at a time.";
snEnableTrainingQueue.description = "Set to values > 0 to allow an additional unit(s) to be queued at each building. For example, if set to 3, then 3 units can be queued to be trained after the currently training unit. If set to 0, buildings will train one unit at a time.</p><p>By default, technologies can't be queued. To enable queued technologies in DE, set " + snEnableResearchQueue.getLink() + " to 1, and technologies will use sn-enable-training-queue as well.";

snIgnoreTowerElevation.id = 265;
snIgnoreTowerElevation.snName = "sn-ignore-tower-elevation";
snIgnoreTowerElevation.default = 0;
snIgnoreTowerElevation.category = "Defense";
snIgnoreTowerElevation.min = -32768;
snIgnoreTowerElevation.max = 32767;
snIgnoreTowerElevation.rmin = 0;
snIgnoreTowerElevation.rmax = 1;
snIgnoreTowerElevation.network = 0;
snIgnoreTowerElevation.defined = 1;
snIgnoreTowerElevation.available = 0;
snIgnoreTowerElevation.version = "1.1";
snIgnoreTowerElevation.linked = [];
snIgnoreTowerElevation.related = [];
snIgnoreTowerElevation.shortDescription = "Set to 1 to ignore elevation when placing towers. If set to 0, the AI will try to seek elevation advantage.";

snTownCenterPlacement.id = 266;
snTownCenterPlacement.snName = "sn-town-center-placement";
snTownCenterPlacement.default = 0;
snTownCenterPlacement.category = "Economy";
snTownCenterPlacement.min = -32768;
snTownCenterPlacement.max = 32767;
snTownCenterPlacement.rmin = 0;
snTownCenterPlacement.rmax = 899;
snTownCenterPlacement.network = 0;
snTownCenterPlacement.defined = 1;
snTownCenterPlacement.available = 0;
snTownCenterPlacement.version = "1.1";
snTownCenterPlacement.linked = [];
snTownCenterPlacement.related = [ 86, 87 ];
snTownCenterPlacement.shortDescription = "Set to the building type to emulate for town center placement. If set to 0, the town center will be placed as usual.";
snTownCenterPlacement.description = "Set to the building type to emulate for town center placement, like lumber-camp. If set to 0, the town center will be placed as usual. Note that it is complete emulation, so if you set it to mill, it will use " + snMillMaxDistance.getLink() + " for its maximum-town-size.</p><p>Example: (set-strategic-number sn-town-center-placement mill) ;attempt to emulate mill placement";

snDisableTowerPriority.id = 267;
snDisableTowerPriority.snName = "sn-disable-tower-priority";
snDisableTowerPriority.default = 0;
snDisableTowerPriority.category = "Attack";
snDisableTowerPriority.min = -32768;
snDisableTowerPriority.max = 32767;
snDisableTowerPriority.rmin = 0;
snDisableTowerPriority.rmax = 1;
snDisableTowerPriority.network = 1;
snDisableTowerPriority.defined = 1;
snDisableTowerPriority.available = 0;
snDisableTowerPriority.version = "1.1";
snDisableTowerPriority.linked = [];
snDisableTowerPriority.related = [ 254 ];
snDisableTowerPriority.shortDescription = "Set to 1 to prevent the local targeting system from giving special priority to towers and other fortifications, including town centers and castles. If set to 0, these buildings will receive the usual special priority.";
snDisableTowerPriority.description = "Set to 1 to prevent the local targeting system from giving special priority to towers and other fortifications, including town centers and castles. If set to 0, these buildings will receive the usual special priority. In combination with sn-ignore-attack-group-under-attack:1, you can better avoid being lured by town centers during early attacks, though using retreat or DUC commands to avoid town centers will be more effective overall. Note: this sn requires a packet to be sent for each change in a multiplayer game, so please consider this when using it.";

snPlacementZoneSize.id = 268;
snPlacementZoneSize.snName = "sn-placement-zone-size";
snPlacementZoneSize.default = 20;
snPlacementZoneSize.category = "Economy";
snPlacementZoneSize.min = -32768;
snPlacementZoneSize.max = 32767;
snPlacementZoneSize.rmin = 0;
snPlacementZoneSize.rmax = 255;
snPlacementZoneSize.network = 0;
snPlacementZoneSize.defined = 1;
snPlacementZoneSize.available = 0;
snPlacementZoneSize.version = "1.1";
snPlacementZoneSize.linked = [ 269, 270 ];
snPlacementZoneSize.related = [ 73, 74 ];
snPlacementZoneSize.shortDescription = "Set to the size of the tile zone used for forward and controlled building placement. All build commands store this value and the up-set-placement-data information with each successful call. For every pass that a building cannot be placed, its zone size will be increased from this starting point.";
snPlacementZoneSize.description = "Set to the size of the tile zone used for forward and controlled building placement. All build commands store this value and the up-set-placement-data information with each successful call. For every pass that a building cannot be placed, its zone size will be increased from this starting point. The default for this sn is 20. A small zone size (0) will provide more precise positioning. A large value allows you to surround the enemy when forward building. sn-placement-zone-size is stored with the placement data, so this SN can be changed once the building has been added to the building placement queue.";

snPlacementFailDelta.id = 269;
snPlacementFailDelta.snName = "sn-placement-fail-delta";
snPlacementFailDelta.default = 0;
snPlacementFailDelta.category = "Economy";
snPlacementFailDelta.min = -32768;
snPlacementFailDelta.max = 32767;
snPlacementFailDelta.rmin = -10;
snPlacementFailDelta.rmax = 10;
snPlacementFailDelta.network = 0;
snPlacementFailDelta.defined = 1;
snPlacementFailDelta.available = 0;
snPlacementFailDelta.version = "1.1";
snPlacementFailDelta.linked = [ 268, 270 ];
snPlacementFailDelta.related = [ 73, 74 ];
snPlacementFailDelta.shortDescription = "Set to the value that will be added to the placement distance set by up-set-placement-data for every pass that a building cannot be placed.";
snPlacementFailDelta.description = "Set to the value that will be added to the placement distance set by up-set-placement-data for every pass that a building cannot be placed. This sn does not affect forward building. It should be a low value (-2 to 2). The default is 0, which means that only the per-building zone-size is increased for each placement failure. Unlike sn-placement-zone-size, sn-placement-fail-delta is not stored with the placement data.";

snPlacementToCenter.id = 270;
snPlacementToCenter.snName = "sn-placement-to-center";
snPlacementToCenter.default = 0;
snPlacementToCenter.category = "Economy";
snPlacementToCenter.min = -32768;
snPlacementToCenter.max = 32767;
snPlacementToCenter.rmin = 0;
snPlacementToCenter.rmax = 1;
snPlacementToCenter.network = 0;
snPlacementToCenter.defined = 1;
snPlacementToCenter.available = 0;
snPlacementToCenter.version = "1.1";
snPlacementToCenter.linked = [ 268, 269 ];
snPlacementToCenter.related = [ 73, 74, 249, 188 ];
snPlacementToCenter.shortDescription = "Set to 1 to force place-control to use the map center as the second point of reference for placement. The first point of reference is set with up-set-placement-data. If set to 0, the active target player's nearest building will become the second point of reference instead, once discovered. If sn-target-player-number is 0, the target enemy will be determined by sn-attack-winning-player.";

snDisableAttackGroups.id = 271;
snDisableAttackGroups.snName = "sn-disable-attack-groups";
snDisableAttackGroups.default = 0;
snDisableAttackGroups.category = "Attack";
snDisableAttackGroups.min = -32768;
snDisableAttackGroups.max = 32767;
snDisableAttackGroups.rmin = 0;
snDisableAttackGroups.rmax = 1;
snDisableAttackGroups.network = 0;
snDisableAttackGroups.defined = 1;
snDisableAttackGroups.available = 0;
snDisableAttackGroups.version = "1.1";
snDisableAttackGroups.linked = [ 277 ];
snDisableAttackGroups.related = [ 36, 26, 16 ];
snDisableAttackGroups.shortDescription = "Set to 1 to disable automatic attack group targeting. Once groups are created, they can be used for defensive attack purposes using TSA. If set to 0, attack groups will perform offensive targeting as usual.";

snAllowAdjacentDropsites.id = 272;
snAllowAdjacentDropsites.snName = "sn-allow-adjacent-dropsites";
snAllowAdjacentDropsites.default = 0;
snAllowAdjacentDropsites.category = "Economy";
snAllowAdjacentDropsites.min = -32768;
snAllowAdjacentDropsites.max = 32767;
snAllowAdjacentDropsites.rmin = 0;
snAllowAdjacentDropsites.rmax = 1;
snAllowAdjacentDropsites.network = 0;
snAllowAdjacentDropsites.defined = 1;
snAllowAdjacentDropsites.available = 0;
snAllowAdjacentDropsites.version = "1.1";
snAllowAdjacentDropsites.linked = [];
snAllowAdjacentDropsites.related = [ 248 ];
snAllowAdjacentDropsites.shortDescription = "Set to 1 to eliminate the standard requirement for a 1 tile buffer around mills, lumber camps, and mining camps. If set to 0, the 1 tile buffer is enforced as usual.";

snDeferDropsiteUpdate.id = 273;
snDeferDropsiteUpdate.snName = "sn-defer-dropsite-update";
snDeferDropsiteUpdate.default = 0;
snDeferDropsiteUpdate.category = "Economy";
snDeferDropsiteUpdate.min = -32768;
snDeferDropsiteUpdate.max = 32767;
snDeferDropsiteUpdate.rmin = 0;
snDeferDropsiteUpdate.rmax = 1;
snDeferDropsiteUpdate.network = 0;
snDeferDropsiteUpdate.defined = 1;
snDeferDropsiteUpdate.available = 0;
snDeferDropsiteUpdate.version = "1.1";
snDeferDropsiteUpdate.linked = [];
snDeferDropsiteUpdate.related = [];
snDeferDropsiteUpdate.shortDescription = "Set to 1 to defer the dropsite-min-distance update until construction is complete. If set to 0, the dropsite update occurs when the building is placed on the map.";

snMaximumGarrisonFill.id = 274;
snMaximumGarrisonFill.snName = "sn-maximum-garrison-fill";
snMaximumGarrisonFill.default = 0;
snMaximumGarrisonFill.category = "Defense";
snMaximumGarrisonFill.min = -32768;
snMaximumGarrisonFill.max = 32767;
snMaximumGarrisonFill.rmin = 0;
snMaximumGarrisonFill.rmax = 20;
snMaximumGarrisonFill.network = 0;
snMaximumGarrisonFill.defined = 1;
snMaximumGarrisonFill.available = 0;
snMaximumGarrisonFill.version = "1.1";
snMaximumGarrisonFill.linked = [ 275 ];
snMaximumGarrisonFill.related = [];
snMaximumGarrisonFill.shortDescription = "Set to the number of units to fill into each garrison target per command. If set to 0, this limit is removed.";

snNumberGarrisonUnits.id = 275;
snNumberGarrisonUnits.snName = "sn-number-garrison-units";
snNumberGarrisonUnits.default = 0;
snNumberGarrisonUnits.category = "Defense";
snNumberGarrisonUnits.min = -32768;
snNumberGarrisonUnits.max = 32767;
snNumberGarrisonUnits.rmin = 0;
snNumberGarrisonUnits.rmax = 40;
snNumberGarrisonUnits.network = 0;
snNumberGarrisonUnits.defined = 1;
snNumberGarrisonUnits.available = 0;
snNumberGarrisonUnits.version = "1.1";
snNumberGarrisonUnits.linked = [ 274 ];
snNumberGarrisonUnits.related = [];
snNumberGarrisonUnits.shortDescription = "Set to the number of units that will garrison per command. If set to 0, it will default to the maximum of 40.";

snFilterUnderAttack.id = 276;
snFilterUnderAttack.snName = "sn-filter-under-attack";
snFilterUnderAttack.default = 0;
snFilterUnderAttack.category = "Attack";
snFilterUnderAttack.min = -32768;
snFilterUnderAttack.max = 32767;
snFilterUnderAttack.rmin = 0;
snFilterUnderAttack.rmax = 2;
snFilterUnderAttack.network = 0;
snFilterUnderAttack.defined = 1;
snFilterUnderAttack.available = 0;
snFilterUnderAttack.version = "1.1";
snFilterUnderAttack.linked = [];
snFilterUnderAttack.related = [];
snFilterUnderAttack.shortDescription = "Set to 1 or 2 to filter retreat commands to only those units that are under attack. When this is 2, units near threatened units will also be retreated, which may be computationally expensive. If set to 0, the filter is disabled.";
snFilterUnderAttack.description = "Set to 1 or 2 to filter retreat commands to only those units that are under attack. When this is 2, units near threatened units (within 6 tiles) will also be retreated, not just units that are under attack, which may be computationally expensive. The nearby units that will be retreated do not consider the filter type provided to up-retreat-to, and will be all military units except monks. The 1 and 2 states will also reject high base pierce armor units >= 20, so rams are left despite being attacked. If set to 0, the filter is disabled.";

snDisableDefendGroups.id = 277;
snDisableDefendGroups.snName = "sn-disable-defend-groups";
snDisableDefendGroups.default = 0;
snDisableDefendGroups.category = "Defense";
snDisableDefendGroups.min = -32768;
snDisableDefendGroups.max = 32767;
snDisableDefendGroups.rmin = 0;
snDisableDefendGroups.rmax = 15;
snDisableDefendGroups.network = 0;
snDisableDefendGroups.defined = 1;
snDisableDefendGroups.available = 0;
snDisableDefendGroups.version = "1.1";
snDisableDefendGroups.linked = [ 271 ];
snDisableDefendGroups.related = [];
snDisableDefendGroups.shortDescription = "Append flags to disable various defense systems: 1 to disable the defensive (TSA) targeting system, 2 to disable assistance inside sn-safe-town-size, 4 to disable assistance between sn-safe-town-size and sn-maximum-town-size, 8 to disable assistance outside sn-maximum-town-size. When assistance is disabled, please be aware that your units will only respond to attackers within their individual line of sight. If set to 0, units will respond to threats in town as usual.";

snDockPlacementMode.id = 278;
snDockPlacementMode.snName = "sn-dock-placement-mode";
snDockPlacementMode.default = 0;
snDockPlacementMode.category = "Water";
snDockPlacementMode.min = -32768;
snDockPlacementMode.max = 32767;
snDockPlacementMode.rmin = -1;
snDockPlacementMode.rmax = 1;
snDockPlacementMode.network = 0;
snDockPlacementMode.defined = 1;
snDockPlacementMode.available = 0;
snDockPlacementMode.version = "1.1";
snDockPlacementMode.linked = [];
snDockPlacementMode.related = [ 279, 280, 281 ];
snDockPlacementMode.shortDescription = "Set to 1 to prefer placement toward the front, -1 to prefer placement toward the back, or 0 for standard placement.";
snDockPlacementMode.description = "Set to 1 to prefer placement toward the front, -1 to prefer placement toward the back, or 0 for standard placement.</p><p>Placement toward the front or back means closer to the map center or further away from the map center, relative to the home town center. Higher positive values like 2 or 3 can theoretically set an even higher priority toward placing the dock near the map center.</p><p>Note: it is important to explore the area you want the AI to build the dock. Otherwise, it will only build the dock on shoreline you have explored.";

snDockProximityFactor.id = 279;
snDockProximityFactor.snName = "sn-dock-proximity-factor";
snDockProximityFactor.default = 10000;
snDockProximityFactor.category = "Water";
snDockProximityFactor.min = -32768;
snDockProximityFactor.max = 32767;
snDockProximityFactor.rmin = -10000;
snDockProximityFactor.rmax = 10000;
snDockProximityFactor.network = 0;
snDockProximityFactor.defined = 1;
snDockProximityFactor.available = 0;
snDockProximityFactor.version = "1.1";
snDockProximityFactor.linked = [ 280 ];
snDockProximityFactor.related = [ 278 ];
snDockProximityFactor.shortDescription = "Set to the proximity factor for docks to be placed relative to one another. Positive values prefer more distance, while negative values prefer less distance.";

snDockAvoidanceFactor.id = 280;
snDockAvoidanceFactor.snName = "sn-dock-avoidance-factor";
snDockAvoidanceFactor.default = 1000;
snDockAvoidanceFactor.category = "Water";
snDockAvoidanceFactor.min = -32768;
snDockAvoidanceFactor.max = 32767;
snDockAvoidanceFactor.rmin = -10000;
snDockAvoidanceFactor.rmax = 10000;
snDockAvoidanceFactor.network = 0;
snDockAvoidanceFactor.defined = 1;
snDockAvoidanceFactor.available = 0;
snDockAvoidanceFactor.version = "1.1";
snDockAvoidanceFactor.linked = [ 279 ];
snDockAvoidanceFactor.related = [ 278 ];
snDockAvoidanceFactor.shortDescription = "Set to the avoidance factor for docks in the same zone (body of water). Positive values avoid placement in the same zone, while negative values prefer it.";

snDockTrainingFilter.id = 281;
snDockTrainingFilter.snName = "sn-dock-training-filter";
snDockTrainingFilter.default = 0;
snDockTrainingFilter.category = "Water";
snDockTrainingFilter.min = -32768;
snDockTrainingFilter.max = 32767;
snDockTrainingFilter.rmin = 0;
snDockTrainingFilter.rmax = 2;
snDockTrainingFilter.network = 0;
snDockTrainingFilter.defined = 1;
snDockTrainingFilter.available = 0;
snDockTrainingFilter.version = "1.1";
snDockTrainingFilter.linked = [];
snDockTrainingFilter.related = [ 278 ];
snDockTrainingFilter.shortDescription = "Set to 1 or 2 to enable the intelligent dock training filter. This will prevent docks from training ships that would likely be useless in their body of water. If set to 1, docks will continue to train in seas that no longer contain recently sighted targets, while 2 will block training. If set to 0, docks will train units without additional consideration.";
snDockTrainingFilter.description = "Set to 1 or 2 to enable the intelligent dock training filter. This will prevent docks from training ships that would likely be useless in their body of water. If set to 1, docks will continue to train in seas that no longer contain recently sighted targets, while 2 will block training. If set to 0, docks will train units without additional consideration.</p><p>Here is some sample code from scripter64 to set sn-dock-training-filter to the best possible state:</p><p>(defrule\r\n\t(true)\r\n=>\r\n\t(set-strategic-number sn-dock-training-filter 0)\r\n\t(set-goal gl-dock-attack-training 0)\r\n)\r\n\r\n(defrule\r\n\t(up-train-site-ready c: galley)\r\n=>\r\n\t(chat-to-all \"A dock is available to train warships.\")\r\n\t(set-strategic-number sn-dock-training-filter 2)\r\n\t(set-goal gl-dock-attack-training 1)\r\n)\r\n\r\n(defrule\r\n\t(goal gl-dock-attack-training 1)\r\n\t(not(up-train-site-ready c: galley))\r\n=>\r\n\t(chat-to-all \"A dock is not available to train warships with recent sighting data.\")\r\n\t(set-strategic-number sn-dock-training-filter 1)\r\n)\r\n\r\n(defrule\r\n\t(goal gl-dock-attack-training 1)\r\n\t(not(up-train-site-ready c: galley))\r\n=>\r\n\t(chat-to-all \"A dock is not available to train warships with any sighting data.\")\r\n\t(set-strategic-number sn-dock-training-filter 0)\r\n)\r\n\r\n;sn-dock-training-filter is now set to the best possible state";

snFreeSiegeTargeting.id = 282;
snFreeSiegeTargeting.snName = "sn-free-siege-targeting";
snFreeSiegeTargeting.default = 0;
snFreeSiegeTargeting.category = "Attack";
snFreeSiegeTargeting.min = -32768;
snFreeSiegeTargeting.max = 32767;
snFreeSiegeTargeting.rmin = 0;
snFreeSiegeTargeting.rmax = 3;
snFreeSiegeTargeting.network = 0;
snFreeSiegeTargeting.defined = 1;
snFreeSiegeTargeting.available = 0;
snFreeSiegeTargeting.version = "1.1";
snFreeSiegeTargeting.linked = [];
snFreeSiegeTargeting.related = [];
snFreeSiegeTargeting.shortDescription = "Add bit flags together to generate a value: 1 = trebuchet; 2 = cannon-galleon. Set a flag for a unit to enable free offensive targeting with attack-now or attack groups. This may result in the targeting of units other than buildings. If set to 0, non-buildings will be ignored unless units must respond due to sn-enemy-sighted-response-distance.";

snWarshipTargetingMode.id = 283;
snWarshipTargetingMode.snName = "sn-warship-targeting-mode";
snWarshipTargetingMode.default = 0;
snWarshipTargetingMode.category = "Water";
snWarshipTargetingMode.min = -32768;
snWarshipTargetingMode.max = 32767;
snWarshipTargetingMode.rmin = 0;
snWarshipTargetingMode.rmax = 2;
snWarshipTargetingMode.network = 0;
snWarshipTargetingMode.defined = 1;
snWarshipTargetingMode.available = 0;
snWarshipTargetingMode.version = "1.1";
snWarshipTargetingMode.linked = [];
snWarshipTargetingMode.related = [];
snWarshipTargetingMode.shortDescription = "Set to 1 to cause warships to target based on the unit with the shortest range in the group against fortifications. Set to 2 to eliminate the range check. If set to 0, warship groups will target based on the unit with the longest range.";

snDisableSightedResponseCap.id = 284;
snDisableSightedResponseCap.snName = "sn-disable-sighted-response-cap";
snDisableSightedResponseCap.default = 0;
snDisableSightedResponseCap.category = "Attack";
snDisableSightedResponseCap.min = -32768;
snDisableSightedResponseCap.max = 32767;
snDisableSightedResponseCap.rmin = 0;
snDisableSightedResponseCap.rmax = 1;
snDisableSightedResponseCap.network = 0;
snDisableSightedResponseCap.defined = 1;
snDisableSightedResponseCap.available = 0;
snDisableSightedResponseCap.version = "1.1";
snDisableSightedResponseCap.linked = [ 19, 20 ];
snDisableSightedResponseCap.related = [];
snDisableSightedResponseCap.shortDescription = "Set to 1 to eliminate the cap of 50 on sn-enemy-sighted-response-distance. If set to 0, the cap will remain in effect for changes to sn-enemy-sighted-response-distance.";

snDisableBuilderAssistance.id = 285;
snDisableBuilderAssistance.snName = "sn-disable-builder-assistance";
snDisableBuilderAssistance.default = 0;
snDisableBuilderAssistance.category = "Economy";
snDisableBuilderAssistance.min = -32768;
snDisableBuilderAssistance.max = 32767;
snDisableBuilderAssistance.rmin = 0;
snDisableBuilderAssistance.rmax = 1;
snDisableBuilderAssistance.network = 1;
snDisableBuilderAssistance.defined = 1;
snDisableBuilderAssistance.available = 0;
snDisableBuilderAssistance.version = "1.1";
snDisableBuilderAssistance.linked = [];
snDisableBuilderAssistance.related = [];
snDisableBuilderAssistance.shortDescription = "Set to 1 to prevent builders from assisting on nearby foundations after their work is complete. If set to 0, they will assist as usual.";

snLocalTargetingMode.id = 286;
snLocalTargetingMode.snName = "sn-local-targeting-mode";
snLocalTargetingMode.default = 0;
snLocalTargetingMode.category = "Attack";
snLocalTargetingMode.min = -32768;
snLocalTargetingMode.max = 32767;
snLocalTargetingMode.rmin = 0;
snLocalTargetingMode.rmax = 2;
snLocalTargetingMode.network = 1;
snLocalTargetingMode.defined = 1;
snLocalTargetingMode.available = 0;
snLocalTargetingMode.version = "1.1";
snLocalTargetingMode.linked = [];
snLocalTargetingMode.related = [];
snLocalTargetingMode.shortDescription = "Set to 1 to prioritize attack bonuses and overall damage per hit. If set to 2, units will prioritize targets with high base pierce armor, such as rams; otherwise, they will target as usual. The offensive priority value of a target (-1 to 11) is added to the weight for modes 1 and 2, as well. If set to 0, units will target as usual.";

snLivestockDefendPriority.id = 287;
snLivestockDefendPriority.snName = "sn-livestock-defend-priority";
snLivestockDefendPriority.default = 0;
snLivestockDefendPriority.category = "Defense";
snLivestockDefendPriority.min = -32768;
snLivestockDefendPriority.max = 32767;
snLivestockDefendPriority.rmin = 0;
snLivestockDefendPriority.rmax = 1;
snLivestockDefendPriority.network = 0;
snLivestockDefendPriority.defined = 1;
snLivestockDefendPriority.available = 0;
snLivestockDefendPriority.version = "1.1";
snLivestockDefendPriority.linked = [];
snLivestockDefendPriority.related = [50, 56, 70, 52, 51, 55, 54, 53];
snLivestockDefendPriority.shortDescription = "Set to 1 to allow sheep into the targetable sighted objects list.";
snLivestockDefendPriority.description = "Set to 1 to allow sheep into the targetable sighted objects list. However, since Userpatch 1.4, livestock are targetable by default, so this SN is no longer necessary.";

snNumberTaskedUnits.id = 288;
snNumberTaskedUnits.snName = "sn-number-tasked-units";
snNumberTaskedUnits.default = 0;
snNumberTaskedUnits.category = "Other";
snNumberTaskedUnits.min = -32768;
snNumberTaskedUnits.max = 32767;
snNumberTaskedUnits.rmin = 0;
snNumberTaskedUnits.rmax = 40;
snNumberTaskedUnits.network = 0;
snNumberTaskedUnits.defined = 1;
snNumberTaskedUnits.available = 0;
snNumberTaskedUnits.version = "1.5";
snNumberTaskedUnits.linked = [];
snNumberTaskedUnits.related = [];
snNumberTaskedUnits.shortDescription = "Set to the number of units to require per group tasked by up-target-objects or up-target-point. The last group sent by a command may not reach the minimum required number. It's possible that no units will be sent to some of the last remote targets. If set to 0, units will be spread in order to ensure balanced group sizes to all remote targets.";

snDisableVillagerGarrison.id = 291;
snDisableVillagerGarrison.snName = "sn-disable-villager-garrison";
snDisableVillagerGarrison.default = 0;
snDisableVillagerGarrison.category = "Defense";
snDisableVillagerGarrison.min = -32768;
snDisableVillagerGarrison.max = 32767;
snDisableVillagerGarrison.rmin = 0;
snDisableVillagerGarrison.rmax = 3;
snDisableVillagerGarrison.network = 0;
snDisableVillagerGarrison.defined = 1;
snDisableVillagerGarrison.available = 0;
snDisableVillagerGarrison.version = "1.5";
snDisableVillagerGarrison.linked = [];
snDisableVillagerGarrison.related = [];
snDisableVillagerGarrison.shortDescription = "Set to 3 to prevent villagers from auto-garrisoning for any reason. If set to 2, gaia is ignored and villagers will only garrison for enemy attacks if they can enter a town center. If set to 1, gaia is ignored and villagers will garrison for any enemy attacks. If set to 0, villagers will garrison as usual.";

snTargetPointAdjustment.id = 292;
snTargetPointAdjustment.snName = "sn-target-point-adjustment";
snTargetPointAdjustment.default = 0;
snTargetPointAdjustment.category = "Other";
snTargetPointAdjustment.min = -32768;
snTargetPointAdjustment.max = 32767;
snTargetPointAdjustment.rmin = 0;
snTargetPointAdjustment.rmax = 6;
snTargetPointAdjustment.network = 0;
snTargetPointAdjustment.defined = 1;
snTargetPointAdjustment.available = 0;
snTargetPointAdjustment.version = "1.5";
snTargetPointAdjustment.linked = [];
snTargetPointAdjustment.related = [];
snTargetPointAdjustment.shortDescription = "Set to adjust the tile positioning of up-target-point toward 1:left, 2:top, 3:right, 4:bottom, 5:middle, 6:precise. If set to 0, actions will be directed to the absolute left-most point of a tile. If set to precise, you must directly pass a valid precise point goal pair (point x100 for precision) to up-target-point.";
snTargetPointAdjustment.description = "Set to adjust the tile positioning of up-target-point toward 1:left, 2:top, 3:right, 4:bottom, 5:middle, 6:precise. If set to 0, actions will be directed to the absolute left-most point of a tile. If set to precise, you must directly pass a valid precise point goal pair (point x100 for precision) to up-target-point.</p><p><strong>Note:</strong> when set to 6 (precise), all " + cUpTargetPoint.getLink() + " actions will assume the point has precise coordinates when sending the units to that point, i.e. it will assume the coordinates are multiplied by 100. So, ensure that you set this strategic number back to a value from 0 to 5 before using a point with normal coordinates in a up-target-point command. Otherwise, using up-target-point with this strategic number will send units to the left corner of the map. For example, if the point has the normal coordinates (48, 187), up-target-point would send the units to point (0.48, 1.87) when this strategic number is set to 6.";

snUnexploredConstruction.id = 293;
snUnexploredConstruction.snName = "sn-unexplored-construction";
snUnexploredConstruction.default = 0;
snUnexploredConstruction.category = "Economy";
snUnexploredConstruction.min = -32768;
snUnexploredConstruction.max = 32767;
snUnexploredConstruction.rmin = 0;
snUnexploredConstruction.rmax = 1;
snUnexploredConstruction.network = 1;
snUnexploredConstruction.defined = 1;
snUnexploredConstruction.available = 0;
snUnexploredConstruction.version = "1.5";
snUnexploredConstruction.linked = [];
snUnexploredConstruction.related = [];
snUnexploredConstruction.shortDescription = "Set to 1 to allow the AI to construct buildings on unexplored tiles. If set to 0, the AI will have to directly explore tiles in order to build there as usual. Please do not enable this without #load-if-not-defined REVEAL-NORMAL.";

snDisableTradeEvasion.id = 294;
snDisableTradeEvasion.snName = "sn-disable-trade-evasion";
snDisableTradeEvasion.default = 0;
snDisableTradeEvasion.category = "Defense";
snDisableTradeEvasion.min = -32768;
snDisableTradeEvasion.max = 32767;
snDisableTradeEvasion.rmin = 0;
snDisableTradeEvasion.rmax = 1;
snDisableTradeEvasion.network = 1;
snDisableTradeEvasion.defined = 1;
snDisableTradeEvasion.available = 0;
snDisableTradeEvasion.version = "1.5";
snDisableTradeEvasion.linked = [];
snDisableTradeEvasion.related = [];
snDisableTradeEvasion.shortDescription = "Set to 1 to prevent trade carts from abandoning their gold and trade route in order to evade attackers. If set to 0, trade carts will attempt to evade attackers as usual.";

snBoarLureDestination.id = 295;
snBoarLureDestination.snName = "sn-boar-lure-destination";
snBoarLureDestination.default = 0;
snBoarLureDestination.category = "Economy";
snBoarLureDestination.min = -32768;
snBoarLureDestination.max = 32767;
snBoarLureDestination.rmin = 0;
snBoarLureDestination.rmax = 23;
snBoarLureDestination.network = 1;
snBoarLureDestination.defined = 1;
snBoarLureDestination.available = 0;
snBoarLureDestination.version = "1.5";
snBoarLureDestination.linked = [];
snBoarLureDestination.related = [];
snBoarLureDestination.shortDescription = "Set to a <a href='http://i.imgur.com/GHXNTXU.png' target='_blank'>value from this image</a> to adjust the boar lure destination at the town center. Add 12 to the normal value (0 to 11) to shift the point down to the grid corner. If set to 0, lurers will attempt to reach the center tile of the town center.";

snWildAnimalExploration.id = 300;
snWildAnimalExploration.snName = "sn-wild-animal-exploration";
snWildAnimalExploration.default = 0;
snWildAnimalExploration.category = "Explore";
snWildAnimalExploration.min = -32768;
snWildAnimalExploration.max = 32767;
snWildAnimalExploration.rmin = 0;
snWildAnimalExploration.rmax = 1;
snWildAnimalExploration.network = 0;
snWildAnimalExploration.defined = 1;
snWildAnimalExploration.available = 0;
snWildAnimalExploration.version = "DE";
snWildAnimalExploration.linked = [];
snWildAnimalExploration.related = [];
snWildAnimalExploration.shortDescription = "Allows wild horses, wild camel and bactrian camels to explore.";

snTtkfactorScalar.id = 301;
snTtkfactorScalar.snName = "sn-ttkfactor-scalar";
snTtkfactorScalar.default = 100;
snTtkfactorScalar.category = "Attack";
snTtkfactorScalar.min = -32768;
snTtkfactorScalar.max = 32767;
snTtkfactorScalar.rmin = -32768;
snTtkfactorScalar.rmax = 32767;
snTtkfactorScalar.network = 0;
snTtkfactorScalar.defined = 1;
snTtkfactorScalar.available = 0;
snTtkfactorScalar.version = "HD";
snTtkfactorScalar.linked = [];
snTtkfactorScalar.related = [];
snTtkfactorScalar.shortDescription = "Time to kill an object scalar (in seconds). The scalar is a percentage. Likely affects retargeting against nearby units.";

snMaximumPatrolDistance.id = 302;
snMaximumPatrolDistance.snName = "sn-maximum-patrol-distance";
snMaximumPatrolDistance.default = 0;
snMaximumPatrolDistance.category = "Attack";
snMaximumPatrolDistance.min = -32768;
snMaximumPatrolDistance.max = 32767;
snMaximumPatrolDistance.rmin = -1;
snMaximumPatrolDistance.rmax = 32767;
snMaximumPatrolDistance.network = 0;
snMaximumPatrolDistance.defined = 1;
snMaximumPatrolDistance.available = 0;
snMaximumPatrolDistance.version = "DE";
snMaximumPatrolDistance.linked = [];
snMaximumPatrolDistance.related = [];
snMaximumPatrolDistance.shortDescription = "How far a unit likes to travel from the patrol path, if the unit goes outside this distance on the patrol path, it'll return to patrolling. -1 means no maximum distance.";

snVillagerAttackReset.id = 303;
snVillagerAttackReset.snName = "sn-villager-attack-reset";
snVillagerAttackReset.default = 1;
snVillagerAttackReset.category = "Economy";
snVillagerAttackReset.min = -32768;
snVillagerAttackReset.max = 32767;
snVillagerAttackReset.rmin = 0;
snVillagerAttackReset.rmax = 1;
snVillagerAttackReset.network = 0;
snVillagerAttackReset.defined = 1;
snVillagerAttackReset.available = 0;
snVillagerAttackReset.version = "DE";
snVillagerAttackReset.linked = [];
snVillagerAttackReset.related = [];
snVillagerAttackReset.shortDescription = "If set to 0, disables the auto-villager attack reset so you can attack distant units/targets with villagers.";

snGateTypeForWall.id = 304;
snGateTypeForWall.snName = "sn-gate-type-for-wall";
snGateTypeForWall.default = 0;
snGateTypeForWall.category = "Defense";
snGateTypeForWall.min = -32768;
snGateTypeForWall.max = 32767;
snGateTypeForWall.rmin = 0;
snGateTypeForWall.rmax = 1;
snGateTypeForWall.network = 0;
snGateTypeForWall.defined = 1;
snGateTypeForWall.available = 0;
snGateTypeForWall.version = "DE";
snGateTypeForWall.linked = [];
snGateTypeForWall.related = [];
snGateTypeForWall.shortDescription = "0 for stone gates, 1 for palisade gates when using the build-gate/can-build-gate command.";

snProfilingThreshold.id = 305;
snProfilingThreshold.snName = "sn-profiling-threshold";
snProfilingThreshold.default = 0;
snProfilingThreshold.category = "None";
snProfilingThreshold.min = -32768;
snProfilingThreshold.max = 32767;
snProfilingThreshold.rmin = -32768;
snProfilingThreshold.rmax = 32767;
snProfilingThreshold.network = 0;
snProfilingThreshold.defined = 1;
snProfilingThreshold.available = 0;
snProfilingThreshold.version = "DE";
snProfilingThreshold.linked = [];
snProfilingThreshold.related = [];
snProfilingThreshold.shortDescription = "Not currently used in public release.";











var releaseNotes = [ {		
	number: "20190228-000000",
	year: 2019,
	month: 2,
	day: 28,
	version: 1.5,
	notes: "UserPatch v1.5 RC has been released (20190228-000000)! This update fixes a critical bug in the tech system, where changes to ATTR_STORAGE_MODE (21) could break the population headroom counter. It's most noticeable with the Slav military building bonus in scenarios and maps like Fortress, but it can happen in other cases, as well. The fix makes a limited adjustment for SET_ATTRIBUTE with ATTR_STORAGE_MODE (21), storage mode 4, so updates are reflected as expected. In addition, 3 new restricted features have been added: Disable rec/spec score stats, Hidden civilization selection, Allow spectators by default. The first is for people using a separate overlay, while the other 2 are just to make it easier to change those without registry work. Thanks to John_the_Late for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6268) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "rms"
},	{
	number: "20190101-000000",
	year: 2019,
	month: 1,
	day: 1,
	version: 1.5,
	notes: "UserPatch v1.5 RC has been released (20190101-000000)! This update adds a new restricted feature to show rec/spec market events. This will display player buy/sell messages in the chat event log. Please note that there may be a performance cost to this and event message flooding may occur. Thanks to CheeseOnToast for the idea! The multiplayer sync id has been updated, so all players in a game must have this build (6260) to play in multiplayer. Happy New Year!",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20181231-000000",
	year: 2018,
	month: 12,
	day: 31,
	version: 1.5,
	notes: "UserPatch v1.5 RC has been released (20181231-000000)! This update fixes an issue where livestock (class 58) would not be visible in the fog in scenario games due to the differing Fog Visibility states for gaia civ and non-gaia civ owned livestock. The issue was caused by the fix that ensured that gaia's scenario civ styling would not be reverted during gameplay. Thanks to Jineapple for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6258) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20181201-000000",
	year: 2018,
	month: 12,
	day: 1,
	version: 1.5,
	notes: "UserPatch v1.5 RC has been released (20181201-000000)! This update adjusts the new restricted feature to show rec/spec research stats. It will now display global research status information at the top-right corner of the screen instead of mixing that information in the chat event log. I think we're almost done lol. Will update on voobly later in the month. Thanks to LightTree, wattle, and Aleph for research feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6256) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20181031-000000",
	year: 2018,
	month: 10,
	day: 31,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20181031-000000)! This update fixes a few issues with up-get-object-data and up-get-object-target-data when used as Facts in a defrule. In some cases, they were handling parameters improperly or returning false as a Fact. In addition, a restricted feature has been added to show simple rec/spec research events in the chat event log. This feature will probably be reworked and enhanced in the future. Thanks to CheeseOnToast for the AI report and LightTree for research feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6228) to play in multiplayer.",
	itemsAffected: [cUpGetObjectData, cUpGetObjectTargetData],
	scriptingType: "ai"
},	{
	number: "20181030-000000",
	year: 2018,
	month: 10,
	day: 30,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20181030-000000)! This update adds a new option for the spectator host to control the join delay for spectators in multiplayer games, which can help to avoid possible lag spikes during the critical first few seconds of a game. The delay can be controlled by the spec client app and defaults to 5 game seconds. Thanks to LightTree for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6224) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20181028-000000",
	year: 2018,
	month: 10,
	day: 28,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20181028-000000)! This update fixes an issue where non-host recs may improperly inherit ZR terrain graphics due to incomplete state handling by the multiplayer game setup screen. In addition, a fix was made to ensure that the AI #load symbols UP-[NAME]-CIV-ALLY and UP-[NAME]-CIV-ENEMY are properly provided if a game expansion contains more than 31 civs. Finally, 4 new symbols have been added: UP-HUMAN-ALLY, UP-HUMAN-ENEMY, UP-COMPUTER-ALLY, and UP-COMPUTER-ENEMY. These can be used to optimize the loading of specific strategy scripts. Thanks to CheeseOnToast for the ZR terrain report and Esty for #load symbol feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6216) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "ai"
},	{
	number: "20180808-000000",
	year: 2018,
	month: 8,
	day: 8,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180808-000000)! This update adjusts the action-unload direct unit command, so that it will work for transport ships. For buildings, action-unload will ungarrison the units inside to the gather point or just eject them if unset. For class 13 siege units like rams, it will eject the units in-place. Finally, for transports, it will travel to the shore nearest to the target-point (like it would for a human) and unload units there. Please ensure the target-point is reachable or the ship may flood \"can't unload\" messages. If your transport ship is on beach terrain along a shoreline, you can probably safely use the ship's own point to unload. Thanks to CheeseOnToast for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6208) to play in multiplayer. Thanks Promi!",
	itemsAffected: [cUpTargetObjects, cUpTargetPoint],
	scriptingType: "ai"
},	{
	number: "20180805-000000",
	year: 2018,
	month: 8,
	day: 5,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180805-000000)! This update adjusts the previous starting resource fix, so that a negative resource start is allowed if defined for players in scenarios and campaigns. In addition, the issue with unexpected stack object duplication for gates and other similar objects has been fixed when testing scenarios. Map copy can still get special stack objects, but they should no longer multiply randomly. Finally, the UserPatchConst.per file has been updated to change cmdid-unknown to cmdid-fishing-ship (id 9) and reference.html has been updated to better describe the status filter requirements for up-find-resource. Thanks to rewaider and Julius999 for the stack object report, Promi for asking about the cmdid-unknown value, and CheeseOnToast for up-find-resource feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6206) to play in multiplayer.",
	itemsAffected: [cUpFilterInclude, cUpFilterExclude],
	scriptingType: "ai"
},	{
	number: "20180804-000000",
	year: 2018,
	month: 8,
	day: 4,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180804-000000)! This update adjusts the rms parser to ensure that the DEFAULT_RESOURCES, LOW_RESOURCES, MEDIUM_RESOURCES, and HIGH_RESOURCES consts for rms are defined for regicide and DM games, as ES had previously disabled them. In addition, the game will now set food, wood, stone, and gold to 0 if a starting resource amount (91 to 94) would result in a resource value that is less than zero. This should avoid unexpected issues when an rms adjusts starting resources to compensate for various game modes, while a player has a civ that starts with less than standard resources like the Chinese, Aztecs, and Huns. Thanks to Henk for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6202) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "rms"
},	{
	number: "20180730-000000",
	year: 2018,
	month: 7,
	day: 30,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180730-000000)! This update fixes a core bug carried from v1.0c with AI memory overflows caused by extended scenario tributes. Previously, if a tribute was sent by a scenario trigger to an AI with a resource id other than food, wood, gold, and stone, general memory corruption would occur. For compatibility until this release spreads (may take a few weeks), please use up-effect to add or set extended resources instead of tributing to AI players. Thanks to BFTanks for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6198) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "ai"
},	{
	number: "20180726-000000",
	year: 2018,
	month: 7,
	day: 26,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180726-000000)! This update fixes a crash bug in the scenario editor that can occur when shift+selecting objects to add them to scenario trigger effects. Thanks to rewaider on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6196) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180724-000000",
	year: 2018,
	month: 7,
	day: 24,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180724-000000)! This update adds a new flag for use with ATTR_BLAST_LEVEL, so the following flags are now available: 4: logistica-style 5HP damage, 8: elephant-style half damage. In other words, if a unit uses Blast Attack Level 2, but you want it to work like logistica, it should be set to 6 (2+4). If you want elephant-style half damage, it should be set to 10 (2+8). In addition to this, a new sync restricted feature has been added, \"Handle small farm selections\", that should ensure proper selection and targeting for 2x2 farms, such as those available to civs like Milan in Age of Chivalry (for Kor: you can add another 1 to the SetupAoC.exe -f: installer flags parameter to enable it by default). Thanks to TriRem for the blast level report and Wergorne and Pepp for the farm report! The multiplayer sync id has been updated, so all players in a game must have this build (6194) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "rms"
},	{
	number: "20180720-000000",
	year: 2018,
	month: 7,
	day: 20,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180720-000000)! This update adjusts the \"up-get-object-data\" and \"up-get-object-target-data\" AI script rule actions, so they can be used as facts in a defrule, as well. In addition, the \"up-get-point-contains\" command should no longer crash when used with all-units-class. Please note, however, that when used with all-units-class (-1), the \"up-point-contains\" fact and \"up-get-point-contains\" action may capture unexpected objects like birds flying over a tile, terrain plants, etc. Thanks to CheeseOnToast for the report and feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6190) to play in multiplayer.",
	itemsAffected: [cUpGetObjectData, cUpGetObjectTargetData, cUpGetPointContains, cUpPointContains],
	scriptingType: "ai"
},	{
	number: "20180701-000000",
	year: 2018,
	month: 7,
	day: 1,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180701-000000)! This update includes some reliability improvements for handling the new Ctrl+ market transaction keys. The multiplayer sync id has been updated, so all players in a game must have this build (6188) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180629-000000",
	year: 2018,
	month: 6,
	day: 29,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180629-000000)! This update fixes an issue with rms terrain desyncs from certain object creation orders. Previously, if an object without collision size was placed onto terrain that a building was also placed on, its placement could differ between players due to the building selectively changing its underlying terrain to \"foundation\" based on each player's line of sight, which would cause a desync. In addition, you can now hold \"Ctrl\" when buying or selling at the market for 1000 resources per click or hold \"Ctrl+Shift\" for 10000 resources per click. Although these aren't useful for most games, it might help to avoid awkward gameplay on certain \"nothing\" style maps. Thanks to Chrazini for the rms desync report and smzimran and teutonic_tanks for market transaction feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6186) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "rms"
},	{
	number: "20180626-000000",
	year: 2018,
	month: 6,
	day: 26,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180626-000000)! This update adds a new sync restricted feature to the installer: Disable civilian attack switch. This will disable unit attack type switching for class 4 units outside task group ids 1 and 2. If the unit has 1 or more entries in the A.G.E. attacks list, it will try to attack. Otherwise, attack requests will be ignored. This is intended for use only by mod developers and should not be installed unless necessary. You can find it by pressing F5 on the installer window to show the restricted features list.</p><p>In addition, the SetupAoC.exe installer has a new -n switch to perform a silent install of UP to a new age2_x1.5.exe, which can be used instead of the -i switch that performs a silent update of age2_x1.exe. Finally, the -f: installer feature flags switch has a new inherit (2) flag that keeps the current user's setting instead of forcing a feature checkbox to on (1) or off (0). The inherit (2) flag will likely be useful to not override user-specific settings like their preferred minimap colors. Thanks to Kor for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6180) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180616-000000",
	year: 2018,
	month: 6,
	day: 16,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180616-000000)! This update adjusts the keydown object hotkey fix to improve reliability and includes 2 fixes for rms. The first rms fix is for an issue that could occur when a comment is inside an \"if\" branch, where it would allow the text inside the comment to remain as partially active script. If the word \"if\" was present inside one of these bugged comments, the branch system would enter an unreliable state from that point forward. The second rms fix is intended to correct an issue caused by the recent terrain changes in WK, where trees would be placed on swapped terrain (16) by the cliff placement system. Now, rms cliffs will no longer place terrain objects on replaced map tiles. Thanks to Henk and TWest for the \"if\" comment report and Chrazini for the cliff object report! The multiplayer sync id has been updated, so all players in a game must have this build (6168) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "rms"
},	{
	number: "20180611-000000",
	year: 2018,
	month: 6,
	day: 11,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180611-000000)! This update extends the hotkey system to handle separate entries for the Palisade Gate, Feitoria, Genitour, and Siege Tower. The game will check the language file's default keys to determine whether or not to append these new hotkey entries to the system. For the Villager Build category, the Palisade Gate is checked by 16186 and named by 19212, while the Feitoria is checked by 16159 and named by 19075. For the Archery Range category, the Genitour is checked by 16417 and named by 19032. Finally, for the Siege Workshop category, the Siege Tower is checked by 16445 and named by 19048. Objects must have their hotkey properties set in A.G.E. to match the default key check ids. Thanks to TheViper for the report and TriRem and Jineapple for testing and feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6160) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180606-000000",
	year: 2018,
	month: 6,
	day: 6,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180606-000000)! This update fixes several issues regarding the handling of treason minimap event flares. Now, if you execute the Treason command, you will see a colored minimap flare for each player target. These new treason flares are displayed for 10 game seconds with a slightly smaller appearance than player flares and they flash in a different style. They're also stored separately from normal \"zooming box\" minimap events now, so they'll no longer be lost due to the standard minimap limit or events such as train, build, and research completion. Thanks to II2N for the report and wattle for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6146) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180531-020000",
	year: 2018,
	month: 5,
	day: 31,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180531-020000)! This update fixes several compatibility issues for WK and AI terrain handling for dock construction and gathering across terrain zones. In addition, a previous fix for longboat idling has been adjusted in order to ensure that scenario trigger tasking works as expected. Thanks to TriRem for the terrain report and Mash and Cataphract887 on AoKH for the longboat report! The multiplayer sync id has been updated, so all players in a game must have this build (6136) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180525-000000",
	year: 2018,
	month: 5,
	day: 25,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180525-000000)! This update includes several sync breaking fixes, so the rec id has been changed from VER 9.E to VER 9.F. If you work with rec analyzers, please update your code if necessary to include this new rec id for v1.5. New builds of v1.5 are backward compatible with recent v1.5 recs on VER 9.E (v1.5 Beta R6, etc.) and v1.4, v1.3, v1.0c, and v1.0b recs.</p><p>The first fix is for an issue where holding \"Alt\" when right-clicking to garrison may target nearby resources or other objects instead. It should now prioritize garrison in these cases, even if the mouse cursor does not always reflect this. Next, there's a fix for an issue with excessive pathing lag for min range unit retreating. This could cause noticeable slowdown during gameplay in some cases if units like skirmishers are backed against a treeline. There's also a core bug fix for an issue with garrison arrow count updates for building foundations, where if a tech (yasama) completes research while a building exists as an untouched foundation, the completed building would not benefit from the additional arrow bonus. Finally, there is a fix for an issue where AI villagers may idle after construction in some cases. This was most common near AI lumber camps, where villagers would stand idle as builders indefinitely.</p><p>As for new features, you can now hold \"Shift\" when clicking the Flare button to enable wall scanning during rec/spec. This will allow players to search for holes in walls, etc. while streaming or viewing recs. The scan, which uses a fortified wall block for best visibility and placement flexibility, is limited by the selected player's viewpoint, so enabling the fog of war can help to show which tiles you can scan, which is anywhere except the black area or the dark fog when All Visible mode is active.</p><p>Thanks to TWest for the garrison report, Aleph for the Illuminati min range demonstration, TriRem for the building arrow report, Promi for the AI construction report, and Deathcounter and wattle for rec/spec wall scanner feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6122) to play in multiplayer.</p><p>Still waiting on Voobly to make several client fixes requested in March, so v1.5 Beta R7 can be uploaded there.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180429-000000",
	year: 2018,
	month: 4,
	day: 29,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180429-000000)! This update fixes an issue with scenario loading, where the game might crash if a mod reduces the civ count below the aok total. In addition, the ATTR_TRAITS flag to disable the object delete button will only apply to completed objects, so foundations can now be cancelled. Finally, for non-scenario games at 250 population or lower, a new pathing fix has been made to reduce movement freezing, which is often seen in late imperial black forest games, etc. Thanks to moddingnoob on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6104) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180401-000000",
	year: 2018,
	month: 4,
	day: 1,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180401-000000)! This update fixes an issue with the scenario editor where gaia objects weren't listed for placement due to the other recent gaia fix. Thanks to Mash on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6096) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180331-000000",
	year: 2018,
	month: 3,
	day: 31,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180331-000000)! This update adds the DATA_MODE_FLAGS (1) attribute for use with the GAIA_SET_PLAYER_DATA effect. You can set it to a combination of the following flags: 01: enable treason (flares guard unit type if no king exists) and 02: disable spies (button only, disable tech 408 to block research). This can be used from rms or scx to control spies/treason command availability. In addition, the multiplayer setup screen now preserves the last hosted game type except scenarios, which should hopefully help for people who usually play on DM instead of RM. Thanks to TriRem for spies/treason feedback and JRed for game setup feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6094) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180328-000000",
	year: 2018,
	month: 3,
	day: 28,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180328-000000)! This update adds a new feature for rec/spec player switching. If you hold \"Shift\" and select another player's unit or building (except gaia), the focus will seamlessly switch to that player without changing the map view. This can be useful to easily observe a battle from multiple sides without being distracted by using the player name dropdown or having the view move across the map with each player change, etc. It's a full focus switch, so the UI, resource numbers, and fog of war will change with each shift+select. In addition, the gaia scenario civ issue has been fixed, in order to ensure that gaia units and buildings do not swap to default after conversion to a player. Thanks to AsteriskRAY for switch feedback and danielpr for the gaia scenario civ report! The multiplayer sync id has been updated, so all players in a game must have this build (6088) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180309-000000",
	year: 2018,
	month: 3,
	day: 9,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180309-000000)! This update adds a restricted feature for Background audio playback (press F5 on the installer to see the restricted features list). This feature will allow the game's music and sound to continue playing in the background while multitasking, which might be helpful when streaming or recording. Thanks to Memb for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6068) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180302-000000",
	year: 2018,
	month: 3,
	day: 2,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180302-000000)! This update fixes an issue with AI builder assignment, where the wonder default builder count was 255, which is equivalent to -1 as a byte and that would disable builders in v1.5. The default has now been changed to 250 to ensure wonders are built as expected. The max number of taskable AI villagers is 250, so this change makes sense in general. Thanks to danielpr for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6060) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "ai"
},	{
	number: "20180301-000000",
	year: 2018,
	month: 3,
	day: 1,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180301-000000)! This update fixes an issue where diagonal walls would not be placed as expected at the map edge. The walls should now be placed as they appear in the placement preview. Thanks to Wergorne for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6058) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180229-000000",
	year: 2018,
	month: 2,
	day: 29,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180229-000000)! This update adjusts the \"Custom normal mouse\" feature, so that it will work with alternate mouse cursor slps. It's been tested with the default ES cursors and the Precision Cursor, Bigger Cursor, and TIC Clan Cursor mods on Voobly. The multiplayer sync id has been updated, so all players in a game must have this build (6054) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180228-000000",
	year: 2018,
	month: 2,
	day: 28,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180228-000000)! This update enables the mouse wheel to activate manual gate rotation mode without affecting hotkeys, allowing you to spin the gate into the necessary position. If you don't enable manual rotation mode for a particular instance of gate placement, the default rotation mode is available as always, where you can move a gate relative to nearby walls to rotate it. This fix ensures that the positions of nearby objects cannot obstruct gate placement. Thanks to metric on voobly for the report and aoezone for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6052) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180224-000000",
	year: 2018,
	month: 2,
	day: 24,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180224-000000)! This update includes adjustments for the installer (SetupAoC.exe) and removes debug code. The multiplayer sync id has been updated, so all players in a game must have this build (6050) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180223-010000",
	year: 2018,
	month: 2,
	day: 23,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180223-010000)! This update includes additional refinements for mouse behavior in single player mode. The multiplayer sync id has been updated, so all players in a game must have this build (6038) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180223-000000",
	year: 2018,
	month: 2,
	day: 23,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180223-000000)! This update fixes a bug in the AI script handling code. Thanks to II2N for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6034) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180221-000000",
	year: 2018,
	month: 2,
	day: 21,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180221-000000)! This update refines some of the mouse adjustments from recent builds. The multiplayer sync id has been updated, so all players in a game must have this build (6028) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180220-000000",
	year: 2018,
	month: 2,
	day: 20,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180220-000000)! This update fixes some issues with the SetupAoC installer, so that the wide/center/left interface styles install properly and their current install state appears properly when reopening the installer. The multiplayer sync id has been updated, so all players in a game must have this build (6026) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180219-000000",
	year: 2018,
	month: 2,
	day: 19,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180219-000000)! This update enables the \"Ctrl+X\" (cut), \"Ctrl+C\" (copy), \"Ctrl+V\" (paste), and \"Ctrl+A\" (select all) hotkeys to work for all text input. Previously, only the classic hotkeys were available, including \"Shift+Delete\" for cut, \"Ctrl+Insert\" for copy, and \"Shift+Insert\" for paste. Thanks to Cataphract887 on AoKH for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6024) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180218-000000",
	year: 2018,
	month: 2,
	day: 18,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180218-000000)! This update fixes an issue that can cause dramatic performance loss on typically walled maps like Arena, Black Forest, etc. Rec replay performance for these maps should hopefully improve, as well. In addition, a new Advanced installer option has been added: Custom normal mouse. With this feature, the game will use a custom mouse cursor instead of directly drawing the cursor itself, essentially delinking it from the game's framerate, which can make mouse movement more smooth on some systems. It's similar to the original \"normal mouse\" option, but uses the actual slp game cursors instead of the system pointer.</p><p>Thanks to LightTree for finding the performance issue with walled maps and FillemUp on aoczone for the mouse report! The multiplayer sync id has been updated, so all players in a game must have this build (6020) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20180210-000000",
	year: 2018,
	month: 2,
	day: 10,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20180210-000000)! This update includes many core, animation, and pathing performance fixes for various cpu levels. In addition, it fixes an issue where the game may crash due to an internal AI attack response, an issue with multiple selection where the stat framerate would collapse, and an issue with Alt+ goto building hotkeys. It also fixes a critical bug where certain kinds of excessive AI attack behavior could cause a command overflow desync. Finally, the About button is now hidden from the F10 gameplay system menu when it would cause the buttons to overflow the popup border.</p><p>Thanks to LightTree, offwo, and CoT for performance and sync testing, Krock for the internal AI crash report, Toutttt for the hotkey report, withmorten for the stat framerate report, and everyone from aoczone for providing cpu details! The multiplayer sync id has been updated, so all players in a game must have this build (5962) to play in multiplayer.</p><p>If you'd like to try a before/after with the previous public beta, try opening the knight lag save in both builds and compare performance.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20171218-000000",
	year: 2017,
	month: 12,
	day: 18,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171218-000000)! This update adjusts the processing of 1-unit AI group attacks, so a command flood will be less likely to cause an overflow. In addition, you can now shift+click any checkbox or multi-value number box like the player number or team number boxes to randomize the result (there is no intelligence here, so it's just the first random result). For single player mode, AI player colors will now be remembered and changing game settings will not reset them. Finally, you can now reset a hotkey (???) in the editor with a right-click while changing it. Thanks to LightTree, offwo, and CoT for the AI report, TWest for the player color feedback, and iPhone for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5758) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
},	{
	number: "20171216-000000",
	year: 2017,
	month: 12,
	day: 16,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171216-000000)! This update fixes a crash in the AI managed building system that can occur when using <a href=\"https://airef.github.io/commands/commands-details.html#up-build\">up-build</a> place-control after <a href=\"https://airef.github.io/commands/commands-details.html#up-set-placement-data\">up-set-placement-data</a> was used to target placement at a player that has absolutely no objects remaining on the map, including dead objects. Thanks to LightTree and offwo for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5748) to play in multiplayer. TWest, will look into those, thanks! Please visit the chat if you'd like to preview it.",
	itemsAffected: [cUpBuild, cUpSetPlacementData],
	scriptingType: "ai"
}, {	
	number: "20171215-000000",
	year: 2017,
	month: 12,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171215-000000)! This update adds a lot of new fixes and features:</p><p><strong>General Updates</strong></p><ul><li>New extended statistics score display for rec/spec and AI-only single player games.</li><li>Hotkeys under \"More\" (Build, Dock) now have priority over go-to-building hotkeys.</li><li>Hold \"Shift\" when clicking the Idle Villager button to find idle military units.</li><li>\"Friend Foe Ids\" to override colors: REG_DWORD, Set enemy, self, neutral, ally as 0xEESSNNAA (default: 0x01000603).</li><li>Set language id 9870 to override the statistics headers with 4 tab-delimited lines:</li></ul><pre><code>For the following 4 views:\\r\\nScore Pop/ Cap Mil Civ Idl Trd Kill/Loss A\\r\\nTeam Pop/ Cap Nav Fsh Idl Cog Raze/Loss A\\r\\nV:W V:F V:G V:S  Exp Rlc Wnd Cst Dck TCs A\\r\\nWood   Food   Gold  Stone   Sent   Recv A\\r\\n\\r\\nSet language id 9870:\\r\\nScore Pop/ Cap Mil Civ Idl Trd Kill/Loss A\\tTeam Pop/ Cap Nav Fsh Idl Cog Raze/Loss A\\tV:W V:F V:G V:S  Exp Rlc Wnd Cst Dck TCs A\\tWood   Food   Gold  Stone   Sent   Recv A</code></pre><p><strong>Spectator and Rec Updates</strong></p><ul><li>Adjust speed: \"Ctrl+Left\" for slower, \"Ctrl+Right\" for faster, \"Ctrl+Shift+Down\" for normal.</li><li>Change stats: \"Ctrl+Down\" or \"F4\" or click the minimap Statistics button.</li><li>Reverse stats: \"Ctrl+Up\" or hold \"Shift\" when clicking the minimap Statistics button.</li><li>Locate King/Guard: \"Ctrl+Shift+Up\" or hold \"Ctrl\" when clicking the Idle Villager button.</li><li>Hold \"Shift\" when using the player name dropdown list to switch without changing view.</li></ul><p><strong>Core Updates and Fixes</strong></p><ul><li>Fixed issue with the accuracy of the client spectator counter display.</li><li>Fixed issue with the minimum position of the music volume option slider</li><li>Fixed crash when using the full map print feature after a multiplayer game.</li><li>Fixed issue where Enhanced v1.0c mode could not start on HD compat.</li></ul><p><strong>AI Scripting Updates</strong></p><ul><li>Fixed crash that could occur when using <a href=\"https://airef.github.io/strategic-numbers/sn-details.html#sn-number-tasked-units\">sn-number-tasked-units</a> with DUC.</li><li>The <a href=\"https://airef.github.io/commands/commands-details.html#up-create-group\">up-create-group</a> action will now function as <a href=\"https://airef.github.io/commands/commands-details.html#up-reset-group\">up-reset-group</a> if there are no available units.</li></ul><p>Thanks to LightTree, offwo, CheeseOnToast, fenris, Wergorne, and TheViper for statistics feedback, wattle and TWest for view switch feedback, UnfairestEel and CoT for the AI reports, jeowaypoint for the Enhanced v1.0c report, CoT for the map print crash report, S3Kingcat on aoczone for Friend/Foe colors feedback, TheSerpent on aoczone for the music volume slider report, and TheViper, Memb, and Jineapple for hotkey paging feedback. The multiplayer sync id has been updated, so all players in a game must have this build (5746) to play in multiplayer.",
	itemsAffected: [snNumberTaskedUnits, cUpCreateGroup, cUpResetGroup],
	scriptingType: "ai"
}, {	
	number: "20171103-000000",
	year: 2017,
	month: 11,
	day: 3,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171103-000000)! This update adds a restricted feature for \"Multiplayer single player speed\". With this option, you can run single player games at the slightly faster multiplayer game speed. This can be useful if you'd like to practice for multiplayer games while still using the single player game setup screen. Thanks to Felipe_EL_Guapo for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5656) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20171102-000000",
	year: 2017,
	month: 11,
	day: 2,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171102-000000)! This update fixes an issue with Friend/Foe Colors, where they would be updated to the current player perspective in response to cartography, spies, and diplomacy changes. This could cause unexpected color swaps when watching a rec or spectating. This fix will skip the color update for carto and spies, while updating the colors for diplomacy changes from the perspective of the original FFC player (blue). Thanks to t90 and Dave for the report on stream! The multiplayer sync id has been updated, so all players in a game must have this build (5652) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20171101-000000",
	year: 2017,
	month: 11,
	day: 1,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171101-000000)! This update fixes a crash issue with the touch screen control feature. I didn't notice until I checked a tablet lol. The multiplayer sync id has been updated, so all players in a game must have this build (5650) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20171031-000000",
	year: 2017,
	month: 10,
	day: 31,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171031-000000)! This update fixes the issue with framerate/speed inconsistencies after unpausing in a multiplayer game. This issue would often lead to units skipping as they move for a few moments. There may still be increased command delay as it resyncs everyone, but it should now be a smooth transition. In addition, the installer (SetupAoC) has been adjusted, so that if it detects a voobly-modified age2_x1.exe, it will present its checkbox options like a first install. This should hopefully avoid issues where certain options like the 20fps restricted option were preselected. Thanks to II2N for the unpause report and KiiNgZoNe for the installer report! The multiplayer sync id has been updated, so all players in a game must have this build (5648) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20171025-000000",
	year: 2017,
	month: 10,
	day: 25,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171025-000000)! This update fixes the reveal enemy bonus system, so that it will reveal all starting town centers for multi-tc start maps like Metropolis. In addition, allied villagers are no longer visible on any nomad start maps, which should avoid the unfair advantage of the reveal for only allied players with villager-m units on Custom nomad start rms maps (Standard nomad already blocked allied villager reveal). For multiplayer games, notifications are now sent for task switching events (Alt+Tab), so players can see when people are absent and when they're back. Finally, to avoid certain object positioning exploits, you can now hold \"Ctrl\" when right-clicking to target objects hidden behind others (affects unit right-click actions like attack, repair, etc.) and hold \"Ctrl+Alt\" when right-clicking to move without targeting (for example, to send units onto an enemy farm position without attacking the farm itself).</p><p>Thanks to Jineapple and AocZone for reveal feedback, BugA and CoT for mp notification feedback, and randomdude, wattle, and TWest for mouse control feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5640) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20171006-000000",
	year: 2017,
	month: 10,
	day: 6,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20171006-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170926-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a critical bug in pathing carried from v1.0c, where units pass through buildings and foundations under certain conditions. In addition, some adjustments have been made to improve the situation where units fail to automatically attack nearby targets in range. This applies to both warships like the demolition ship and melee units. If they can't path to the target to get in range, though, this fix will not help. Finally, the AMOUNT_REVEAL_ENEMY (209) resource has been adjusted, so that it works using flags: 1: reveal starting town-center, 2: reveal first town-center on nomad. For WololoKingdoms to match HD behavior, AMOUNT_REVEAL_ENEMY can be set to 3 to combine both effects.</p><p>Thanks to Marauder for the pathing report (video!), TheViper for the attack report on stream, and Jineapple for reveal enemy feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5634) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170926-000000",
	year: 2017,
	month: 9,
	day: 26,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170926-000000)! This update adjusts the Ctrl+Arrow hotkeys, so that they will not interfere while actually playing. They will only be activated for rec/spec. Thanks to CSA_R_Griffith for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5626) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170925-000000",
	year: 2017,
	month: 9,
	day: 25,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170925-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170920-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue with building resource trickle handling, which affects the Feitoria for WK. There should be no rec compat issue for aoc. In addition, you can now change rec/spec speed with \"Ctrl+Left\" for slower, \"Ctrl+Right\" for faster, and \"Ctrl+Up/Down\" for normal. Adding Shift will allow for smaller speed adjustments, like clicking the buttons. Thanks to Melkor on aoczone for the Feitoria report and aerovistae on reddit for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5624) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170920-000000",
	year: 2017,
	month: 9,
	day: 20,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170920-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170915-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue with the internal AI handling of certain building objects that have a secondary projectile unit defined, but no range to attack, such as the Dock in WololoKingdoms. There should be no rec compat issue for aoc. Thanks to TriRem and CoT for the report and testing! The multiplayer sync id has been updated, so all players in a game must have this build (5620) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170915-000000",
	year: 2017,
	month: 9,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170915-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170913-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update attempts to fix the situation where units that are patrolled onto themselves may freeze and/or fail to respond for an extended period of time. This fix can also benefit other cases where patrol fails to resolve a path. Thanks to asdfasdfasdf1 on aoczone for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5618) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170913-000000",
	year: 2017,
	month: 9,
	day: 13,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170913-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170908-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, where boars may abandon their attack despite being targeted. This can cause the 2 hit luring requirement to be reset, which can lead to unexpected luring failures. In addition, various, subtle performance improvements have been made to the core to reduce cpu load. More performance improvements are coming soon. The multiplayer sync id has been updated, so all players in a game must have this build (5614) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170908-000000",
	year: 2017,
	month: 9,
	day: 8,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170908-000000)! This update changes the tech effect system to not truncate hitpoints to max 32767 when adjusting ATTR_HITPOINTS. This should help up-effect work more like Change Object HP. Please note, however, that an object's max HP (ATTR_HITPOINTS) should not exceed 32767 or, like Change Object HP:0, the object will be destroyed. In addition, a new (sync) restricted feature, Rms and Scx debug logging, has been added. This enables logging to \"Age of Empires II\\debug.X.txt\" for map parsing and scenario triggers. Prefix ids: RD (rms #define/#const), RC (rms create_object), ST (scx trigger), SE (scx effect). Please do not use this feature unless absolutely required for testing. Thanks to BF_Tanks for the HP feedback and Rico_jolla for logging feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5576) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170903-000000",
	year: 2017,
	month: 9,
	day: 3,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170903-000000)! This update changes the hotkey editor, so that it will allow, but still alert, for conflicting hotkeys. This should avoid issues where people had to edit their hotkeys in external editors. There are also some minor performance optimizations. Thanks to Memb and Jineapple for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5572) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170831-000000",
	year: 2017,
	month: 8,
	day: 31,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170831-000000)! This update adjusts the previous fix that enabled the ability to SET_ATTRIBUTE an object's ATTR_STORAGE_VALUE to -32 to commit the (FWGS) amount. This can now also be used to safely commit the Corpse Decay Time #12 amount, so scenarios can adjust the time that existing objects (placed by the editor) remain on the map. In addition, for up-effect, along with setting Number to 9, the Display Instructions effect Timer value only has to be >= 99999 now, instead of 99999999. This should hopefully be easier to type in. Thanks to Mr Wednesday on AoKH for attribute feedback and randomdude for Timer feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5566) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20170830-000000",
	year: 2017,
	month: 8,
	day: 30,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170830-000000)! This update adds a new Number property for the Play Sound trigger effect. If you select the same sound from the dropdown and set Number from 1-8, you can adjust the volume of a currently playing sound effect, where 1 is max volume and 8 is min. If you set Number to 9, the sound effect will be stopped. In addition, animated water in multiplayer mode will now be paused for a player if cpu load gets excessive to avoid lagging the game for everyone else. Water animation will resume once cpu load drops back to an acceptable level. Thanks to Andanu Trisatya and Little Berry on AoKH for stop sound and volume/fade feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5565) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170829-000000",
	year: 2017,
	month: 8,
	day: 29,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170829-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170828-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue with gates, where they would lose HP for each open/close event after change ownership occurs in a scenario. The fix aligns the gate's HP with the new owner's gate hitpoints, preserving the ratio of damage, and restores the gate to standard ownership without the converted object property data. Although the gate's style will still change if there's a style mismatch, this fix should at least avoid the issue of self-destructing gates. If a rec doesn't involve this particular issue, then rec compatibility should remain fine. Thanks to Rico_jolla on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5558) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170828-000000",
	year: 2017,
	month: 8,
	day: 28,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170828-000000)! This update adjusts the previous fix to ensure that unavailable team units are darkened appropriately. Thanks to Jineapple for testing! The multiplayer sync id has been updated, so all players in a game must have this build (5553) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170827-000000",
	year: 2017,
	month: 8,
	day: 27,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170827-000000)! This update fixes the tech tree display for team bonus enabled units. Change the tech tree unit \"Status\" value in A.G.E. from 2 to (10 + civId) to assign that unit as a team unit for that civ. The unit will be displayed with a red X if the player's civ can't access the unit directly or isn't allied with a player who can. Thanks to Memb for the report and Jineapple for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5552) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170824-000000",
	year: 2017,
	month: 8,
	day: 24,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170824-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170823-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, which caused improper variability in monk conversion timing and contributed to the sense that v1.5 monks were converting faster due to the 60fps multiplayer. In addition, the string table id label is now fixed for triggers, so it displays as expected. Finally, a new \"Windowed fullscreen mode\" restricted feature has been added. If you prefer classic fullscreen mode, where the screen resolution resizes for gameplay, but your GPU has performance or text rendering issues with 256-color mode, this feature works with \"Windowed mode support\" to provide a 32-bit color fullscreen mode. Press F5 on the installer window to show the Restricted features list.</p><p>Thanks to Daut for the monk report on stream, randomdude for the string table report, and Lord Basse at AoKH for fullscreen feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5548) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170823-000000",
	year: 2017,
	month: 8,
	day: 23,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170823-000000)! This update enables the string table id textbox for the scenario editor. It will appear by default for the Send Chat and Display Instructions effects. Incidentally, there are a few side effects to locking the value to 1 in 0x005EB270, so the reference code was changed to simply nop specific checks instead. In addition, any trigger effects that have a non-zero Number value will now be displayed with that value in the effects list, so it's easier to find a specific effect. For example, \"E#10: Change Object HP: 2\" might be shown for a heal effect. Thanks to randomdude and danielpr for the string table code! The multiplayer sync id has been updated, so all players in a game must have this build (5525) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170821-000000",
	year: 2017,
	month: 8,
	day: 21,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170821-000000)! This update enables you to SET_ATTRIBUTE an object's ATTR_STORAGE_VALUE to -32 to commit the (FWGS) amount. This can be used in the scenario editor with up-effect after changing something like a mine's resource amount to commit the change to existing mines. For example, you can do up-effect 0,0,102,21,800,1 to set stone mines to have 800 stone and then up-effect 0,0,102,21,-32,1 to commit that new value to existing stone mines. This is necessary because ATTR_STORAGE_VALUE is normally only applied when an object is first created, so existing resource objects would not be affected by a trigger change to it. Thanks to BFTanks for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5521) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170819-000000",
	year: 2017,
	month: 8,
	day: 19,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170819-000000)! This update adjusts the Accumulate Attribute and Tribute dropdowns in the scenario editor to provide the same list for both. The lists have also been resorted and the unusual spaces in front of the first few values have been eliminated by using different language ids. In addition, the installer (SetupAoC.exe) now presents all 3 command bar styles as a set, so you can select Widescreen, Centered, or Left-aligned without the confusing mix of checkboxes. Thanks to BFTanks for scenario editor feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5518) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170813-000000",
	year: 2017,
	month: 8,
	day: 13,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170813-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170810-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, which can cause boars to fail to respond after being attacked by an untargetable object type, such as the town center. This can lead boars to wander away or idle in response to hunter attacks. If boars were only attacked by hunters, scouts, etc. then rec compatibility should be fine with earlier v1.5 betas. Thanks to TWest for the boar report and rec! The multiplayer sync id has been updated, so all players in a game must have this build (5479) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170810-000000",
	year: 2017,
	month: 8,
	day: 10,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170810-000000)! This update enables the ability to change object cost types with rms effect_amount, scx up-effect, techs, etc. MUL_ATTRIBUTE an object cost (FWGS) by -1 to create a cost type or -2 to remove a cost type. Thanks to ZeroEmpires for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5477) to play in multiplayer. <a href=\"http://forums.aiscripters.com/viewtopic.php?p=66985#p66985\">MUL_ATTRIBUTE Examples</a>",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170808-000000",
	year: 2017,
	month: 8,
	day: 8,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170808-000000)! This update applies a performance optimization for scenario loading and enables formatting (bold, etc.) for tech tree civilization description text. Thanks to randomdude for the scenario optimization and Memb for tech tree feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5475) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170807-000000",
	year: 2017,
	month: 8,
	day: 7,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170807-000000)! This update adds a new flag for ATTR_TRAITS (Unit Attribute). Set ATTR_TRAITS flag 64 (0x40) to disable the delete button command for an object. This will not hide the delete button for non-building units, since it would be an unnecessary calculation each time a selection occurs to check for that among all selected objects. The primary purpose of this flag is to help scenario designers to control deletion in their scenarios with either the up-effect or up-attribute commands, but rms and mods can use this, as well. In addition, this fixes issues with friend-or-foe color swapping after a rec/spec game ends and friend-or-foe color swapping for the victory timer text in King of the Hill, etc. Thanks to randomdude for scenario delete feedback and T90Official for the monument report! The multiplayer sync id has been updated, so all players in a game must have this build (5472) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20170806-000000",
	year: 2017,
	month: 8,
	day: 6,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170806-000000)! This update fixes an issue with restoring games, where commands may be blocked if the exact command from before the save is attempted before a different command. This issue could even occur in single player v1.0c saved games. Thanks to TriRem for the report and Roechelrochen from t90's stream for the rec and details! The multiplayer sync id has been updated, so all players in a game must have this build (5467) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170805-100000",
	year: 2017,
	month: 8,
	day: 5,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170805-100000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170805-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a terrain issue that can occur in scenarios that include bridges, due to the adjusted terrain system. The bridge placement terrains 14 (desert) and 28 (water bridge) now have an exception to update terrain reachability data. Rec compatibility will probably be fine for games that do not include bridges. Thanks to John_the_Late for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5465) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170805-000000",
	year: 2017,
	month: 8,
	day: 5,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170805-000000)! This update adds a new warning for coop player changes. If a player's civ or team id is changed by coop colors, they will be notified by a message in orange text (\"!!! Change Player.\") and their Ready state will be unchecked to block launch until they verify and Ready again. This should hopefully avoid any confusion and intentional/unintentional changes like this in the future. The multiplayer sync id has been updated, so all players in a game must have this build (5463) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170804-000000",
	year: 2017,
	month: 8,
	day: 4,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170804-000000)! This update adjusts the multiplayer game setup lobby chat shade of white to be a bit less bright. In addition, performance improvements have been adjusted for multiplayer and a new optimization has been implemented for the general game core to reduce cpu cycles. The more units on the map, the more this optimization can improve performance. The multiplayer sync id has been updated, so all players in a game must have this build (5459) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170802-000000",
	year: 2017,
	month: 8,
	day: 2,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170802-000000)! This update allows the full chat window (Alt+T) to appear after resign or defeat and can be used to see chat and adjust the horn buttons in order to allow or block messages from players, but it can't be used to send messages. In addition, the color of chat messages in the multiplayer game setup lobby will now alternate shades of white/grey in order to make it easier to see if someone has sent a multi-line message to impersonate another player. Thanks to randomdude for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5454) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170801-000000",
	year: 2017,
	month: 8,
	day: 1,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170801-000000)! This update adjusts the default water animation highlights to be more subtle and less bright to avoid distracting from objects like shore fish. In addition, you can now press Ctrl+B in the scenario editor to toggle terrain blending to draw water without beach, etc. The terrain blending mode will reset to default each time the editor loads (from startup or when returning from testing) to ensure that the blend mode change doesn't affect actual gameplay. The blend mode will also affect rms maps generated in the scenario editor, which could have interesting effects on the appearance of some maps. Thanks to Julius999 on AoKH for editor feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5445) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170731-000000",
	year: 2017,
	month: 7,
	day: 31,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170731-000000)! This update includes performance improvements for multiplayer games. The multiplayer sync id has been updated, so all players in a game must have this build (5440) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170728-000000",
	year: 2017,
	month: 7,
	day: 28,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170728-000000)! This update adds a new flag to ATTR_HERO_STATUS: -128 (0x80): disable attack ground button interface. This flag can be used for mods and expansions to disable a unit's attack ground button, which restores the standard patrol buttons, etc. The wild animal attack alert will now be suppressed for class 10 units that meet the luring requirements: it carries resources and has <= 100HP. This will ensure that elephant attacks, etc. do not alert like wolves. Finally, multiplayer game speeds have been adjusted once again to bring them closer to expected v1.0c speeds. Thanks to Wergorne for the attack ground report and buddy for the wild animal report! Thanks to II2N and Jupe for testing multiplayer speeds!</p><p>The multiplayer sync id has been updated, so all players in a game must have this build (5429) to play in multiplayer.</p>",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170726-000000",
	year: 2017,
	month: 7,
	day: 26,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170726-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170724-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue with the previous group floating, collapse, and pike patrol fix, in order to ensure that rapid-clicking will not cause unexpected formation stagger. Thanks to Clemensor for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170724-000000",
	year: 2017,
	month: 7,
	day: 24,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170724-000000)! This update makes a few minor adjustments for the water. In addition, the multiplayer game speeds for slow, normal, and fast have been more closely aligned with v1.0c. Thanks to CheeseOnToast for feedback and testing! Due to the speed adjustment, the multiplayer sync id has been updated, so all players in a game must have this build (5422) to play in multiplayer.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170720-000000",
	year: 2017,
	month: 7,
	day: 20,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170720-000000)! This update adjusts the underwater terrain for medium water and deep water to provide more parallax. Still experimenting with this, so it's all still subject to change.</p><p>Rec/save/sync id remains unchanged for this update.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170718-100000",
	year: 2017,
	month: 7,
	day: 18,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170718-100000)! This update adjusts the underwater terrain to be a bit more subtle. For animated water terrains, the 4th byte of the configuration set is now enabled: Set byte 0x1F between 0x01 and 0x0F to enable terrain underwater or 0x00 to disable. 0x03 is used for shallow and medium water by default. This feature can be disabled from the installer with the new \"Disable terrain underwater\" checkbox. Still experimenting with this, so it's all still subject to change.</p><p>Rec/save/sync id remains unchanged for this update.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170718-000000",
	year: 2017,
	month: 7,
	day: 18,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170718-000000)! This update fixes a bug with scenarios, where AIs would send livestock that they own on startup to the town center, which differs from v1.0c behavior, where they would idle on startup. This caused issues in scenarios where the AI was expected to be immobile, so for all scenarios and campaigns, this livestock behavior has been disabled, so that it matches v1.0c behavior. Non-scenario/campaign games are unaffected by this change.</p><p>In addition, a wavy sand-like pattern is now drawn underwater (for shallow water and medium water only, by default) to make the parallax water effect more obvious, to improve the appearance of the default shallow water terrain, and to provide a point of reference that doesn't move when looking at the water. For animated water terrains, the 4th byte of the configuration set is now enabled: Set byte 0x1F to 0x01 to enable terrain underwater or 0x00 to disable. This feature can be disabled from the installer with the new \"Disable terrain underwater\" checkbox. Still experimenting with this, so it's all still subject to change.</p><p>Thanks to Mr. Wednesday on AoKH for the livestock report! Rec/save/sync id remains unchanged for this update.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170715-000000",
	year: 2017,
	month: 7,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170715-000000)! This update fixes a crash bug with the \"Lower quality environment\" restricted feature. Thanks to LightTree for the report! Rec/save/sync id remains unchanged for this update.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170710-000000",
	year: 2017,
	month: 7,
	day: 10,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170710-000000)! This update updates the guide/readme, by moving earlier update details from the \"Notes\" section to a new \"Previous\" section. Thanks to Aleph for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170707-000000",
	year: 2017,
	month: 7,
	day: 7,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170707-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170704-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a rare, but critical bug in the pathing system that can cause auto-retasking to fail under certain conditions, when events occur within a walled and/or sealed map region. In addition, a new \"Default to background mode\" restricted feature was added, so the game starts with Back: On instead of Back: Off for F8 mode. Thanks to Nilpferd and II2N for the pathing report and Tapsa for background feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170704-000000",
	year: 2017,
	month: 7,
	day: 4,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170704-000000)! This update enables mods and expansions to override the height of the extended help hover textbox by setting language id 10815 to the new height. The default is 115, so 150-155 might provide enough space for 2 more lines. This can help with certain languages that have longer descriptions, etc. If the game resolution is less than 768 height, the default of 115 will be used instead. For performance reasons, it's strongly recommended to leave it at the default size unless absolutely necessary in order to reduce redraw. Thanks to Jineapple for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170702-000000",
	year: 2017,
	month: 7,
	day: 2,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170702-000000)! This update changes the handling of left-click object action commands to operate despite mouse movement. I didn't see any problems in testing, so hopefully, there are no unintended side effects from this change lol. Thanks to TWest for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170701-000000",
	year: 2017,
	month: 7,
	day: 1,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170701-000000)! This update changes the way ZR (zip-rms) maps are validated for multiplayer, etc. They will now compare the internal rms (and scx if present) instead of the entire file. This will allow for ZR rms files to contain different terrain slp graphics overrides (grid/non-grid, etc.) while still matching. In addition, mods and expansions can now override weather sound effects by setting language ids 10812 (rain) and 10813 (snow) to drs sound effect resource id numbers. Sound effects should be relatively low volume to avoid disruption. Each sound effect should be between 5 to 10 seconds and loop naturally. Thanks to Jineapple for the rms feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170628-000000",
	year: 2017,
	month: 6,
	day: 28,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170628-100000)! This update adjusts the fix to limit issues if someone attempts to install UP with SetupAoC.exe inside the \"age2_x1\" folder instead of the root \"Age of Empires II\" folder.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170628-000000",
	year: 2017,
	month: 6,
	day: 28,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170628-000000)! This update enables you to draw terrain up to Elevation 11 instead of 7 directly in the scenario editor. Please try to avoid using high elevations near the map edges to ensure proper map visibility, as scrolling is limited at the edges. This change does not affect rms elevation. In addition, some adjustments were made to remove debug code in the multiplayer system, prevent dpa corruption of compat version launch, and limit issues if someone attempts to install UP with SetupAoC.exe inside the \"age2_x1\" folder instead of the root \"Age of Empires II\" folder. Thanks to Tetsuo3 for elevation feedback, offwo for the dpa report, and StepS for the installer report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170616-000000",
	year: 2017,
	month: 6,
	day: 16,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170616-000000)! This update adjusts the scroll smoothness fix a bit to avoid unnecessary cpu/resource usage for touch screens. I think it should be good now. No, really :lol: Hi LightTree!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170615-000000",
	year: 2017,
	month: 6,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170615-200000)! This update will hopefully improve scrolling smoothness for all single player modes, including the rec/spec viewer. On my system, it feels very nice now, so hopefully it's better for most other people, as well.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170615-100000",
	year: 2017,
	month: 6,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170615-100000)! This update adds 3 new AI direct unit control actions in order to ensure completeness: action-drop-relic (15), action-pack (16), action-unpack (17). The action-none id has moved from 15 to 18, as well, so please update your defconsts from UserPatchConst.per if needed. Please take care to only use action-pack and action-unpack with appropriate unit types or there may be unexpected results. Thanks to CheeseOnToast and II2N for feedback!",
	itemsAffected: [pTargetAction, cUpTargetPoint],
	scriptingType: "ai"
}, {	
	number: "20170615-000000",
	year: 2017,
	month: 6,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170615-000000)! This update provides some additional terrain blending control using the rms command: terrain_state inConstModeId inConstParam1 inConstParam2 inConstValue. You can enable shallow terrain construction by adding flag 1 to Value with ModeId 0. When enabled, resources like trees, gold, stone, and forage can exist on shallow terrain, as well. Internally, this changes the accessibility of terrain id 4 (shallows) from 0.0 to 1.0 for terrain restrictions 4, 8, 10, and 11. New with this version: Add flag 2 to Value for thinner shallow/beach blending, which changes the blend priority for shallows (4) to 111 over beach (2) at 110. Add flag 4 to Value for alternate ice blending, which changes the blend type for ice (26) to 4.",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20170614-200000",
	year: 2017,
	month: 6,
	day: 14,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170614-200000)! This update fixes another rare case for scroll distortion, so hopefully we're at 100% now lol. In addition, the dynamically generated terrain names in the scenario editor can now be defined directly in the language file. If a language id is missing, the name will be dynamically generated as before. Thanks to Tetsuo3 and Jineapple for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170614-100000",
	year: 2017,
	month: 6,
	day: 14,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170614-100000)! This update adds some additional resilience for scrolling to avoid terrain shadow distortion. Hopefully, this mouse and scroll fix is proper for at least 99% of cases ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170614-000000",
	year: 2017,
	month: 6,
	day: 14,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170614-000000)! This update fixes touch screen scrolling, by hopefully making it smoother and less likely to cause shadow distortion from things like trees. Changes were also made to ensure that coordinates are adjusted to predictable values when scrolling to ensure that things like the scenario Change View effect can't distort terrain shadows. As before, still refining the mouse and scroll stuff and testing for weirdness. Thanks to Mash on aokh for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170613-010000",
	year: 2017,
	month: 6,
	day: 13,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170613-010000)! This update attempts to improve the mouse cursor accuracy, so that when you click, the focus will almost certainly be on the exact mouse point. When the view has scrolled against the edge of the map, it can still become slightly inaccurate, but not a full tile shift downward, at least.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170613-000000",
	year: 2017,
	month: 6,
	day: 13,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170613-000000)! This update removes the auto-pause that can randomly occur during scrolling outside multiplayer games, such as single player or rec/spec. When this would happen, you wouldn't see a \"game paused\" message, but the game clock would stop and the framerate would drop until your continuous scroll movement ends and everything goes back to normal.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170612-200000",
	year: 2017,
	month: 6,
	day: 12,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170612-200000)! This update adjusts the shallow terrain animation, in order to give the highlights a bit more of a flowing look.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170612-100000",
	year: 2017,
	month: 6,
	day: 12,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170612-100000)! This update fixes a crash issue with AI scripts when attempting to train units with an invalid train location. In addition, the excessive bounce/jitter when scrolling has been fixed, so hopefully it should feel more smooth when moving across the map. Finally, the issue where the focus of a mouse click is improperly offset and appears shifted below the actual pointer position has been fixed. Thanks to offwo for the AI report and nhoobish on aokh for the mouse cursor report! There may need to be some refinement for the mouse fix, but we'll see ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170612-000000",
	year: 2017,
	month: 6,
	day: 12,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170612-000000)! This update enables terrain id 4 (shallows) to animate, as well. To avoid ruining the plants, this animation is more subtle and only highlights the water. If a terrain uses an animated terrain id as its base terrain, then it will also animate. In addition, app launch has been accelerated significantly under certain conditions.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170611-000000",
	year: 2017,
	month: 6,
	day: 11,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170611-000000)! This update adjusts the Relics victory condition, so that all players will have sight of relics and monk-with-relic units. In addition, when a relic is picked up, everyone will hear the relic sound effect, see the mini-map highlight, and get the \"relic picked up\" event message. Thanks to Jineapple for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170609-000000",
	year: 2017,
	month: 6,
	day: 9,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170609-000000)! This update adjusts the terrain system, so that blending between water terrain types is consistent without unexpected beach. In addition, new forest terrain types will be handled properly, with proper detection for AI lumber-camp placement, and checks to block palisading of non-straggler trees. Terrain restriction data is used to determine water terrains and the terrain object creation class id is used for forest detection. Thanks to Jineapple for testing and feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170608-000000",
	year: 2017,
	month: 6,
	day: 8,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170608-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170605-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update enables shallow terrain construction and accessibility using the new terrain_state rms command. When enabled, resources like trees, gold, stone, and forage can exist on shallow terrain, as well as buildings. Internally, this changes the accessibility of terrain id 4 (shallows) from 0.0 to 1.0 for terrain restrictions 4, 8, 10, and 11. To enable all of this, rec/save files now store the original terrain id with each map tile in order to ensure consistent pathing and farm terrain resets. Due to this additional data, rec management apps and things like recanalyst will need to be updated to handle this additional data for the v1.5 rec VER 9.E. When reading each map tile, instead of 2 bytes (terrain id, elevation id), it will be 4 bytes (0xFF, current terrain id, elevation id, original terrain id). I've included an example for the buildable shallows in the Reference/Scripting/Examples folder: DarkShallows.rms. AIs should be able to handle these maps without any changes.",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20170605-000000",
	year: 2017,
	month: 6,
	day: 5,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170605-000000)! This update fixes several issues with the new tech effects 7 (ENABLE_TECH), 8 (MODIFY_TECH), and 9 (SET_PLAYER_DATA). They should no longer crash and apply appropriately when used in multi-targeting effects for allies, enemies, etc. The ENABLE_TECH effect has been adjusted to apply to all techs when a negative tech id is provided that isn't -1 and -1 has been made invalid always. The tech research timer is also reset by ENABLE_TECH with ATTR_FORCE (2), so it will not instantly self-disable when re-enabled if the tech required research time. Thanks to randomdude for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170531-000000",
	year: 2017,
	month: 5,
	day: 31,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170531-000000)! This update fixes a core bug that can crash the game if it's saved (or recorded) after an AI has owned objects with certain extended object ids. Thanks to Vardamir for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170529-000000",
	year: 2017,
	month: 5,
	day: 29,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170529-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170526-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a critical bug in the tribute system carried from v1.0c, where the tax may be improperly applied under certain conditions. In practice, the impact is relatively low for small tribute amounts, but it grows to be quite significant for higher amounts. This fix should hopefully ensure that the tribute amount received is always consistent. Thanks to pedro and jay on aoczone for the report and research!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170526-000000",
	year: 2017,
	month: 5,
	day: 26,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170526-000000)! This update fixes several issues and prepares the core for the next update. The scenario editor should no longer crash when generating a map if an object is currently selected under certain conditions. The Defend the Wonder game mode will no longer generate an unexpected extra wall line, due to the new rms capability for multiple wall lines, on maps like Arena that already have a wall line. The game should no longer crash if an object is ungarrisoned under certain conditions without a unit AI. If a terrain like Old Water is repurposed by a mod to function as a land terrain with appropriate terrain restrictions set, it should no longer break the entire pathing system, which would allow units to move anywhere. Please take care to avoid adding or removing the core water, beach, and shallow terrains, though: 1, 2, 4, 22, 23, 37. Thanks to danielpr and Jineapple for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170518-000000",
	year: 2017,
	month: 5,
	day: 18,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170518-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170516-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue where extremely high levels of cpu usage can occur when attempting to move a grouped unit that can never move. In addition, there are various performance optimizations to reduce maybe 10000-100000 ops per game turn. It's probably not high enough to be noticeable except in certain conditions, but every little bit helps lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170516-100000",
	year: 2017,
	month: 5,
	day: 16,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170516-100000)! This update adjusts the resource storage mode flag 16 to work for objects that aren't category 80. Hopefully it works with normal units now and not just buildings. Thanks to danielpr for testing! In addition, a new up-set-precise-target-point command has been added, along with 3 new object data sources: object-data-to-precise (gets precise distance to a precise target-point from up-set-precise-target-point), object-data-base-type (usually the same as object-data-type, except in certain scenario situations), and object-data-upgrade-type (the currently active upgrade type id). The up-set-precise-target-point is basically up-set-target-point with no bounds check, so please ensure the point is valid with up-bound-precise-point as needed. Thanks to Cake for feedback!",
	itemsAffected: [cUpSetPreciseTargetPoint, pObjectData],
	scriptingType: "ai"
}, {	
	number: "20170516-000000",
	year: 2017,
	month: 5,
	day: 16,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170516-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170515-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue where new relics added to the map can break the relic countdown. Now, if additional relics are added to the map by triggers, the original total remains as the minimum required for a relic victory countdown. This is the only reliable way that doesn't involve performing an expensive search around the map for newly created monk-with-relic units from players and other complications lol. For the rec break, as before, it should only be a problem if you actually played a scenario where this bug could occur. Thanks to Vardamir for the report! In addition, resource storage mode flag 16 has been added, which only removes the resource value when the unit is lost. If you negate the value, it will add the resource when the unit is lost. Thanks to John for feedback! I hope we can freeze the feature list soon ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170515-100000",
	year: 2017,
	month: 5,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170515-100000)! This update ensures that the sighted object abstraction table does not overflow on very unit heavy mods/expansions. Thanks to danielpr and John_the_Late for testing!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20170515-000000",
	year: 2017,
	month: 5,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170515-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170514-000000 build. Recs for v1.4 and earlier are fine on latest.</p>This update fixes the issue where changing ownership of a monastery breaks the game's relic counters. About the rec break, as before, it should only be a problem if you actually played a scenario where this bug could occur. Thanks to Kor, Rico_jolla, and Julius999 for the report!</p><p>In addition, this update makes object ids 1000 to 1959 available for AIs to see, count, etc. This means that object ids 0-899 and 1000-1959 can be more useful as object ids, while 900-999 must remain reserved for unit classes only. There is a slight cost to reading from the extended object id list (3 ops maybe per instance), so it's still best to put important objects in the 0-899 range. Note, however, that the AI sighted unit abstraction table is limited to 240 useful slots. In the latest wololo, 188 slots are used. The sighted unit abstraction table is provided to the following types of units: category 70 or 80, size > 0, has a train/build location, and isn't hidden (except for category 70). Thanks to WAIFor for reminding!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20170514-000000",
	year: 2017,
	month: 5,
	day: 14,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170514-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170513-200000 build. Recs for v1.4 and earlier are fine on latest. This update fixes the issue where changing ownership of a unit while it's garrisoned can break line of sight. About the rec break, it should only be a problem if you actually played a scenario where this bug could occur. Other than that, it's probably fine lol. Thanks to danielpr for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170513-000000",
	year: 2017,
	month: 5,
	day: 13,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170513-200000)! This update fixes a crash from the previous release when opening the main chat window. Thanks to Cake for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170513-000000",
	year: 2017,
	month: 5,
	day: 13,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170513-000000)! This update fixes a bug that would corrupt single player game setup after attempting to open an invalid rec file. In addition, it fixes about 30 memory leaks in the core (looks like very old code from the aoe1 era, but was still used often lol). Thanks to Promi for the report! Still researching a couple more fixes ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170511-000000",
	year: 2017,
	month: 5,
	day: 11,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170511-000000)! This update adjusts sn-boar-lure-destination, so you can add 12 to the normal value (0 to 11) to shift the point down to the grid corner. This means the full range of values for the sn are 0 to 23. Invalid values will now behave like 0. Please see the beta reference for more detail. Thanks to Promi for feedback!",
	itemsAffected: [snBoarLureDestination],
	scriptingType: "ai"
}, {	
	number: "20170510-000000",
	year: 2017,
	month: 5,
	day: 10,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170510-000000)! This update adds several new AI commands and capabilities. The (up-full-reset-search) command combines (up-reset-search 1 1 1 1) and (up-reset-filters) into a single command to save rule lines. For bounding points more safely, the (up-bound-precise-point ioGoalPoint1 inConstPrecise typeOp inOpBorder) command has been added, so you can bound both normal and precise points inside the map, along with a border width. Finally, sn-boar-lure-destination is now available for AIs to control where at the town center a lurer retreats to, using values from 0 to 11. Please see the beta reference for more detail. Thanks to Cake for the ideas! Thanks to CheeseOnToast and fenris for additional feedback!",
	itemsAffected: [cUpFullResetSearch, cUpBoundPrecisePoint, snBoarLureDestination],
	scriptingType: "ai"
}, {	
	number: "20170509-000000",
	year: 2017,
	month: 5,
	day: 9,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170509-100000)! This update fixes the issue with the -e rec file extension installer option when using game expansion exe generation. Thanks, daniel!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170509-000000",
	year: 2017,
	month: 5,
	day: 9,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170509-000000)! This update adjusts the internal behavior for class 9 (deer, etc.) and class 10 (boar, wolves, etc.) in order to generalize them and un-hard-code the specific unit ids. Now, class 9 units like deer will be huntable by AIs and humans as long as they have resource storage > 0. For matching units, scouts will not be able to directly attack/lame them just like deer. For class 10, if a unit has resource storage > 0 and no more than 100 HP, it will be considered for luring by AIs (dropsite-min-distance boar-hunting, live-boar, etc.) and follow the boar behavior pattern instead of the wolf behavior pattern. This allows units like the boar, javelina, and elephant (all 75HP) to be lured, while units like the Iron Boar are blocked, just as before, due to excessive HP. Thanks to Bala Arizalu for feedback!",
	itemsAffected: [cDropsiteMinDistance],
	scriptingType: "ai"
}, {	
	number: "20170508-000000",
	year: 2017,
	month: 5,
	day: 8,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170508-000000)! This update adjusts the internal behavior of siege towers again by changing the drop point for straight vertical/horizontal walls. In addition, the code that adapts units for \"villager mode\" swaps has been adjusted for siege class 13 to ensure that garrison effects are retained for speed, etc. Thanks to TriRem and danielpr for testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170507-000000",
	year: 2017,
	month: 5,
	day: 7,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170507-000000)! This update adjusts the internal behavior of siege towers by fixing an issue with random conversion and disabling their automatic attack response, so they always try to stand still unless tasked, making it easier for units to garrison inside. Thanks to TriRem for testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170506-000000",
	year: 2017,
	month: 5,
	day: 6,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170506-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve from previous v1.5 betas, please backup the previous 20170504-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes another core simulation bug carried from v1.0c, which can cause military units to idle next to targets after ungarrisoning, despite being aggressive, etc. In addition, if the ability is enabled in A.G.E., livestock (class 58) will be able to garrison into adjacent targets. They aren't \"complex\" units, so they can't directly walk to and garrison into distant targets or summon transports toward them in a single command. If you attempt to garrison into a distant target, the sheep will just walk toward the target instead. To support livestock garrison, the previously reserved flag 16 for building category attribute ATTR_GARRISON_TYPE has been activated, so if a building has this flag set, sheep can garrison with alt+right-click when directly adjacent, etc.</p><p>Finally, if a class 13 siege unit has \"Interface Kind\" (cmdid) 12, it will be able to function as a siege tower using Unload ability #12, with the ability's class set to 27 for walls. In this way, you'll be able to simply right-click a non-corner wall and it will move to the wall and ungarrison units on the other side \"most\" of the time lol. This unit is more for lols than serious strategy, so don't expect much",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170504-100000",
	year: 2017,
	month: 5,
	day: 4,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170504-100000)! This update changes the way ADD_ATTRIBUTE adjusts flags for ATTR_HERO_STATUS and ATTR_TRAITS. If ATTR_HERO_STATUS or ATTR_TRAITS are modified by the ADD_ATTRIBUTE effect, the new value flags will be appended. If flag 256 is set, the value flags will be removed instead. This change allows 0x80 to work as a flag instead of being taken for the previous negative number check. Basically, you can just add 256 to remove the flags in the first byte ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170504-000000",
	year: 2017,
	month: 5,
	day: 4,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170504-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve from previous v1.5 betas, please backup the previous 20170502-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core simulation bug (sync breaker lol) carried from v1.0c in the garrison system, which would cause groups of units to be unable to garrison into a target building in a single action, requiring multiple re-garrison attempts. In addition to this fix, ATTR_SHOWN_ATTACK, ATTR_SHOWN_RANGE, ATTR_SHOWN_MELEE_ARMOR, ATTR_SHOWN_PIERCE_ARMOR, ATTR_TRAITS, ATTR_CIV_ID, ATTR_PIECE, and ATTR_DEAD_ID have been added to the tech system. ATTR_HERO_STATUS, ATTR_ATTACK_DELAY, ATTR_HERO_HEAL_TIME, ATTR_SHOWN_ATTACK, ATTR_SHOWN_RANGE, ATTR_SHOWN_MELEE_ARMOR, ATTR_SHOWN_PIERCE_ARMOR, and ATTR_TRAITS can now be modified by the ADD_ATTRIBUTE effect. If ATTR_HERO_STATUS or ATTR_TRAITS are modified by the ADD_ATTRIBUTE effect, positive values append flags, while negative values remove flags. Thanks to II2N for the garrison report! Thanks to John_the_Late and danielpr for tech feedback!</p><p>Unrelated, but here's an <a href=\"" + urlPrefix + "/images/scripter-target-point-adjustment.png\">image explaining where the sn-target-point-adjustment values are positioned on a tile. Thanks, Cake!",
	itemsAffected: [snTargetPointAdjustment],
	scriptingType: "ai"
}, {	
	number: "20170502-000000",
	year: 2017,
	month: 5,
	day: 2,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170502-000000)! This update enables expansions to override taunt mp3s with a \"Games\\[YourStuff]\\Taunt\" folder. If a taunt can't be found in the expansion folder, the base game taunt will play instead if available. In addition, the hotkey files have been made per-expansion, as well, and will be stored in the \"Games\\[YourStuff]\" folder. If the hki doesn't yet exist for an expansion, the base game hki settings will be inherited until the player adjusts them. Thanks to Jineapple for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170430-000000",
	year: 2017,
	month: 4,
	day: 30,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170430-000000)! This update adds the \"assign_to\" LAND_GENERATION command to make player assignment easier, especially when using direct_placement in rms scripts. There's a fair amount of functionality in this command, so please see the reference for all of the detail. Thanks to Cake for the idea!</p><p>It seems that someone here or another person who was linked by someone here unfortunately leaked the direct link on reddit yesterday lol. Let's try to ensure that this stays somewhat more private until it's ready or those people will have unnecessary issues with their recs/saves later on. I remember how v1.1 was secret here almost forever until the GNAOKH Incident ",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20170425-100000",
	year: 2017,
	month: 4,
	day: 25,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170425-100000)! This update adjusts the weather effects slightly to reduce flicker and ensure the rain \"drops\" aren't as large and distracting on the screen. Thanks to Aleph for feedback! Thanks for testing, Kor! For normal games, phoenixv1s, the rms script can use the new weather_type command to adjust rain, etc. Kunyi, it might be best to visit the chat and ask there, as I haven't had much time to create real, practical example scripts with those new commands yet ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170425-000000",
	year: 2017,
	month: 4,
	day: 25,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170425-000000)! This update adds additional multiplayer debug data for beta testing. In addition, it disables the !C warning prompt for maps that use effect_amount or effect_percent with Gaia effects only. This allows rms designers to use those commands more freely to adjust resources or animals like they can with resource_delta, leaving the !C warning prompt for cases where non-Gaia players are modified. Thanks to LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170423-100000",
	year: 2017,
	month: 4,
	day: 23,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170423-100000)! This update reduces the water flow movement speed and adjusts the highlights on shallow water to be more subtle. Still refining water/weather. Sorry, ER ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170423-000000",
	year: 2017,
	month: 4,
	day: 23,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170423-000000)! This update adds some additional data sources for AIs: object-data-hero-flags, object-data-hero, object-data-auto-heal, object-data-no-convert, object-data-frame-delay, and object-data-attack-count. When a unit is tasked to attack a new target, after object-data-target-id is updated to the new id (may happen after group arrival), object-data-attack-count is set to 0. With each successful attack (melee unit strikes or ranged unit actually fires a projectile), object-data-attack-count increases. Please see upc.per for more detail. Thanks to II2N for feedback!",
	itemsAffected: [pObjectData],
	scriptingType: "ai"
}, {	
	number: "20170422-100000",
	year: 2017,
	month: 4,
	day: 22,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170422-100000)! This update fixes a crash in the original AI internal code, where it would mishandle negative unit type ids. Thanks to CoT for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170422-000000",
	year: 2017,
	month: 4,
	day: 22,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170422-000000)! This update fixes an issue where the ability to press initial keys in single player mode during loading (like pause on startup) was lost. Thanks to II2N for the report! I also forgot to mention a few updates ago that sn-target-point-adjustment now has a new value for using precise points for \"decimal precision\" with up-target-point. Please see the reference for the sn to see all the details and upc.per for the defconst list.",
	itemsAffected: [snTargetPointAdjustment, cUpTargetPoint],
	scriptingType: "ai"
}, {	
	number: "20170421-100000",
	year: 2017,
	month: 4,
	day: 21,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170421-100000)! This update fixes a crash with the Ctrl+Shift+F# hotkeys in multiplayer mode. Thanks to CheeseOnToast for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170421-000000",
	year: 2017,
	month: 4,
	day: 21,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170421-000000)! This update adds the up-modify-group-flag AI command, which will set or remove the group flag from units in a search group and can be checked with object-data-group-flag. Please see the reference for more detail on how to use this safely. In addition, sn-disable-defend-groups now has new functionality. Append flags to disable various defense systems: 1 to disable the defensive (TSA) targeting system, 2 to disable assistance inside sn-safe-town-size, 4 to disable assistance between sn-safe-town-size and sn-maximum-town-size, 8 to disable assistance outside sn-maximum-town-size. When assistance is disabled, please be aware that your units will only respond to attackers within their individual line of sight. If set to 0, units will respond to threats in town as usual. Thanks to II2N for feedback!",
	itemsAffected: [cUpModifyGroupFlag, pObjectData, snDisableDefendGroups],
	scriptingType: "ai"
}, {	
	number: "20170420-000000",
	year: 2017,
	month: 4,
	day: 20,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170420-000000)! This update adds several new direct unit control group commands for AIs: up-reset-group, up-create-group, up-set-group, up-group-size, up-get-group-size. There are 10 search groups available for use from 0 to 9 with 40 units each. In addition, sn-number-tasked-units has finally been enabled (reserved sn 288). Set it to the number of units to require per group tasked by up-target-objects or up-target-point. The last group sent by a command may not reach the minimum required number. It's possible that no units will be sent to some of the last remote targets. If set to 0, units will be spread in order to ensure balanced group sizes to all remote targets. With this sn and the group commands, you can set aside a group of units and consistently task them together as a set. Thanks, II2N!",
	itemsAffected: [cUpResetGroup, cUpCreateGroup, cUpSetGroup, cUpGroupSize, cUpGetGroupSize, snNumberTaskedUnits],
	scriptingType: "ai"
}, {	
	number: "20170419-000000",
	year: 2017,
	month: 4,
	day: 19,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170419-000000)! This update enables ATTR_HERO_STATUS flag: 64: distance-based area damage with blast radius. This new flag can be appended to fix the demolition ship or to give other modded units the same effect if they have a blast radius. In addition, selecting multiple buildings will now preserve the ability to train units, etc. when possible even if one of the buildings in the set is incomplete or researching. Thanks to Jineapple for area damage feedback and Felipe for the selection issue!",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20170418-100000",
	year: 2017,
	month: 4,
	day: 18,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170418-100000)! This update enables the single player game setup screen to preserve selected AIs between games. Thanks to gag2000 for the idea! Thank you for testing, Jineapple!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170418-000000",
	year: 2017,
	month: 4,
	day: 18,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170418-000000)! This update enables the Ctrl+Shift+F# player switching keys to work even for defeated players. Thanks to CheeseOnToast and Aleph for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170416-000000",
	year: 2017,
	month: 4,
	day: 16,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170416-000000)! This update adds 2 new AI script commands: up-get-upgrade-id and up-store-map-name. Please see the beta reference for more information. Thanks to offwo for the map idea! Thanks, cake!",
	itemsAffected: [cUpGetUpgradeId, cUpStoreMapName],
	scriptingType: "ai"
}, {	
	number: "20170415-100000",
	year: 2017,
	month: 4,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170415-100000)! This update allows you to switch players in single player mode or rec/spec with \"Ctrl+Shift+[F1-F9]\" (F9 is Gaia). With this, AI scripters can switch to other AIs mid-game to observe behavior or check resources, players can attempt a game from multiple sides (lol), and rec/spec viewers can directly switch between players without using the player dropdown list or cycling with the + and - hotkeys.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170415-000000",
	year: 2017,
	month: 4,
	day: 15,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170415-000000)! This update fixes the issue with the scenario editor and the listing of hero units without Flag #1. Thanks to daniel for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170414-000000",
	year: 2017,
	month: 4,
	day: 14,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170414-000000)! This update enables the higher water/weather update rate by default and a Lower quality environment restricted feature is now available to revert it back. In addition, the reveal class bonus system has been adjusted to work with all gaia objects (not only living) and there are now 2 reveal classes available. ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170413-000000",
	year: 2017,
	month: 4,
	day: 13,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170413-000000)! This update enables attributes to define objects that self-destruct like petards and demo ships (see Notes section of readme.html). In addition, Background mode will not be reset except in multiplayer mode and a new \"High quality environment\" restricted feature was added to test increased weather and water framerate. Thanks to TriRem for the self-destruct suggestion and Archon, cot, and offwo for Background mode feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170412-000000",
	year: 2017,
	month: 4,
	day: 12,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170412-000000)! This update adjusts the object counting code for upgraded types to minimize issues with overruns. Thanks to TriRem for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170411-000000",
	year: 2017,
	month: 4,
	day: 11,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170411-000000)! This update fixes an another issue with shift+queuing farms from the mill with the Keydown object hotkeys optional feature. Thanks to CheeseOnToast for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170410-000000",
	year: 2017,
	month: 4,
	day: 10,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170410-000000)! This update fixes an issue with shift+queuing with the Keydown object hotkeys optional feature. Thanks to CheeseOnToast for the report! HI CAKE!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20170409-000000",
	year: 2017,
	month: 4,
	day: 9,
	version: 1.5,
	notes: "UserPatch v1.5 Beta has been released (20170409-000000)! This update adds a few things for AIs and some other stuff (Features and Notes lol). Please see the beta Reference for more AI and RM scripting detail, along with the included UserPatchConst.per and UserPatchConst.rms. There are some other things in the Reference/Scripting folder of the archive, as well. ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20150723-000000",
	year: 2015,
	month: 7,
	day: 23,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20150723-000000)! This update fixes a critical, game breaking bug with trade carts and trade cogs that occurs in v1.0c, v1.3, v1.4, and HD. I won't go into detail about how this bug works, but lol. Thanks to iPhone for the report months ago (saw reading upward in chat lol), SiFly for the aoczone post, and Wergorne for all of his help in testing, providing demo recs, and fix confirmation! Voobly will be updated after this seems stable for a while. ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20150128-000000",
	year: 2015,
	month: 1,
	day: 28,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20150128-000000)! This update fixes a bug in the scenario editor, where the gaia player color is left unupdated, causing the dropdown box to revert the color to the last selected player's color (if p1 was last selected on the player tab, it would change gaia from gray to blue once you select gaia from the dropdown, etc.). This issue was caused by the delinking of gaia from p7 gray in UP. Please let this be the last fix. Please lol. I miss scripting. Thanks to danielpr for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20141225-000000",
	year: 2014,
	month: 12,
	day: 25,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20141225-000000)! This update fixes a bug with the screenshot and full map capture system, where depending on the amount of free space available, the game may overflow the 32-bit integer maximum and fail with an \"insufficient free space\" message. Thanks to xuki on aoczone for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20141119-000000",
	year: 2014,
	month: 11,
	day: 19,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20141119-000000)! This update removes the check for the vote panel wait flag when deciding whether or not to play the win/lose sound effect at the end of a game. Before, if a vote panel appears (even briefly for the long pause) and certain conditions are met, a flag would be set that would block the game from playing the win sound effect for certain players. There seems to be some new link caching issue on the server, so you may need to clear temp files from your browser for the 20141119 version to download. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20141115-000000",
	year: 2014,
	month: 11,
	day: 15,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20141115-000000)! This update adjusts the connectivity vote panel, so that it is able to autoclose when appropriate, like when appearing after a long pause. In addition, the rec/spec statistics views have been adjusted, so that the current age number appears in parentheses after ALL stats views (Score, Population, etc.). The A (Age) value in the Society view has been replaced by T for techs completed. This value includes internal techs like Dark Age, etc. so it shouldn't be used as a precise value, but it does give a general idea of the level of advancement for a player. Thanks to LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20141113-000000",
	year: 2014,
	month: 11,
	day: 13,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20141113-000000)! This update restores the connectivity vote panel autosave, which means the game will always save an oos.x.msz any time a connectivity vote panel appears. The autosave that occurs for resign-and-quit remains, as well. Hopefully, this will improve the reliability of restoring dropped games. Thanks to LightTree, Wergorne, and JohnTheLate for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140918-000000",
	year: 2014,
	month: 9,
	day: 18,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140918-000000)! This update fixes an issue with sheep gathering at the town center that may cause sheep to move to the 0,0 tile on the map when converted back and forth under the TC. This is especially problematic with Celts, due to their sheep priority conversion bonus. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140915-000000",
	year: 2014,
	month: 9,
	day: 15,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140915-000000)! This update fixes an issue that has existed since v1.0c: if you play a scenario/campaign game and save/load it or record it, gaia objects and units will be reverted to the Dark Age. This fix ensures that objects remain upgraded to the selected age for gaia, however blacksmith upgrades and scenario upgrades for gaia units are discarded as before (too ES to adjust this lol). It should now be possible to play scenarios like Joan of Arc #2 properly while recorded. Thanks to aleksey22r on twitter for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140906-000000",
	year: 2014,
	month: 9,
	day: 6,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140906-000000)! This update fixes an issue with the display of -1 pierce armor, where it would show this as 1000 pierce armor (yES lol). In addition, it enables the cc-add-resource scripting command to work with any of the resources between 0 and 197. Thanks to ZeroEmpires for the pierce armor report!",
	itemsAffected: [cCcAddResource],
	scriptingType: "ai"
}, {	
	number: "20140901-000000",
	year: 2014,
	month: 9,
	day: 1,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140901-000000)! This update prevents the pack command from packing town centers, which could sometimes improperly happen especially with multiplayer lag. If a mod developer wishes to undo this fix, please change 0x00127125 (file space) to 8B0DA0127900. In addition, it fixes an issue with up-find-flare and up-find-player-flare, so that the AI can find flares with the any- wildcards, as expected. Please note that it has never been designed to work with this-any-* or every-* wildcards, as flares belong to all recipient players, even when they aren't owned by them, so the stored player from this-* would not necessarily be the actual sender of the flare. If you search for players-unit-type-count any-* flare, do not expect this-* to be the sender player for any action commands (not limited to just the flare stuff). If you need to know the specific player number of the sender, you'll need to loop with focus-player checks. Thanks to II2N for the flare report!",
	itemsAffected: [cUpFindFlare, cUpFindPlayerFlare],
	scriptingType: "ai"
}, {	
	number: "20140822-000000",
	year: 2014,
	month: 8,
	day: 22,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140822-000000)! This update fixes an issue with the Display Instructions effect, where the game may crash if the Sound resource string is somehow null. This seems to occur more often with externally edited scenarios (maybe from trigger studio), but it's unfortunately common.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140820-000000",
	year: 2014,
	month: 8,
	day: 20,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140820-000000)! This update adjusts the Ctrl+group selection effect with Stop Unit+Number:1-9, so that it will no longer allow invalid objects below \"living object\" category 70 into the selection list. However, scenario designers must still ensure that invalid combinations of units are not selected (units + buildings, etc.), as the trigger can't account for all possible weird combinations of selected objects. You can take advantage of the \"Object Type\" dropdown when making non-specific area selections to restrict the selection to Building, Civilian, or Military category units.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140818-000000",
	year: 2014,
	month: 8,
	day: 18,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140818-080000)! This update changes absolutely nothing with the actual game. Instead, the installer has been updated to fix the Voobly issue, where the empires2_x1_p1.dat file is being replaced by empires2_x1_v1.dat. If the installer detects that the p1 file is missing, but the v1 file exists, it will clone the v1 to the p1 to repair it automatically for people affected by this issue. Months have passed since this issue was reported and nothing has been done to resolve it, so hopefully this will fix it for most people",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140818-000000",
	year: 2014,
	month: 8,
	day: 18,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140818-000000)! This update adjusts the basic anti-cheat system to prevent message flooding in scenarios with change diplomacy effects. In addition, the Stop Unit effect now accepts a Number between 1 and 9 for assigning player Ctrl hotkey groups. Thanks to danielpr for the diplomacy report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140816-000000",
	year: 2014,
	month: 8,
	day: 16,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140816-000000)! This update fixes an issue with the Goths in imperial or post-imperial in the scenario editor, where their defined population cap may increase by 10 after each test. In addition, the player object lists where you can choose the units to place on the map are no longer limited by the currently selected starting age. In other words, if a player is set to Imperial Age start, you'll still be able to place Archer-base units. Although they'll still appear upgraded to the current age, internally they will still be Archer units at the core, so if you change the starting age to Dark Age later, they'll return to looking like basic archers instead of arbalests, etc.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140815-080000",
	year: 2014,
	month: 8,
	day: 15,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140815-080000)! This update fixes an issue with the previous scenario editor fix, so it will now properly handle starting age and civ changes where the civs aren't changed from default. That's it lol. It was 3 long days between updates this time, at least ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140815-000000",
	year: 2014,
	month: 8,
	day: 15,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140815-000000)! This update fixes a critical crash bug that can occur in games played on certain maps with mods and AIs. Separately, the game will now insert the map seed value 12 bytes from the end of all multiplayer rec files, within the post-game achievements lobby data block, so rec analyst apps can display it. If you replicate the settings in the scenario editor, you can now recreate the game.</p><p>In addition, the scenario editor will now properly handle starting age and civ changes, so objects won't appear from the wrong age when opening a scenario, etc. As before in v1.0c, if you switch civs or starting age several times in a row, your buildings may appear damaged or on fire in the scenario editor, but that's just the way HP is calculated by the editor. It has no effect on the actual scenario, but if you'd like to put out the flames, just save/reload lol. Finally, the issue with mayan and chinese villager placement when generating a map in the scenario editor has been fixed, as well. Thanks to ryshep for the crash report, 9mil on aoczone for the seed idea, and LightTree for the villager placement report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140812-000000",
	year: 2014,
	month: 8,
	day: 12,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140812-000000)! This update ensures that setting attack with Change Object Attack + Number:1 will work as expected for those rare units with both base melee (4) and base pierce (3) attack classes. If you look on the A.G.E. attack list, the bottom most attack class between 3 and 4 will be \"set\" to the requested value and the upper most will be \"set\" to 0 (this is usually 0 already). In this way, both values aren't being set, so the attack isn't doubled for these units. The original behavior for Change Object Attack + Number:0 is left as-is. Thanks to John the Late for the idea! ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140811-000000",
	year: 2014,
	month: 8,
	day: 11,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140811-000000)! This update provides a way for scenario designers to get proper behavior from the \"Object Has Target\" condition by setting the \"Object Type\" dropdown value to \"Other\". In this way, the condition will only pass if the unit chosen by \"Set Object\" is targeting the unit chosen by \"Set Next Object\", or the target unit type matches the \"Object List\" value, or the target unit class matches the \"Object Group\" value. As before, the \"Object Type\" dropdown is unused except to enable proper validation with the \"Other\" value. Previously, if ANY object was targeted by the chosen unit, the condition would pass. In addition, several performance optimizations were included that could remove 1000s of unnecessary ops per game turn from the trigger effect validation code. Thanks to Lildbehr for the report and HockeySam, John the Late, and CarolKarine for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140810-000000",
	year: 2014,
	month: 8,
	day: 10,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140810-080000)! This update enables the Declare Victory effect to resign a player by setting Number to 1. In addition, you can flash objects on the map with the Change Ownership effect in the same way by setting Number to 1. After this, no additional effects will be added for the core, as we need a stable set of features, so it will be up to mod developers. I'm sorry for the trouble! Thanks to randomdude for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140810-000000",
	year: 2014,
	month: 8,
	day: 10,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140810-000000)! This update fixes an issue with enabling research that was already completed manually (enabling it would improperly instant auto-research the tech again). In addition, it enables the Freeze Unit effect to be used to set any unit attack stance instead of only the \"no-attack\" stance with the \"Number\" field: 1:aggressive, 2:defensive, 3:stand-ground, 4:no-attack (without halting the current action). In addition, there is now an additional 4th Ctrl+S mode for the scenario editor to place objects \"freely\" but restricted to the grid. There are also several performance improvements for the various effects. Thanks to hockeysam and randomdude for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140809-000000",
	year: 2014,
	month: 8,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140809-180000)! This update makes a minor adjustment for the restricted ore display fix (for mod use only), so that it will display language id 3000 instead of 3083 for a \"Not enough ore\" kind of message, which would be provided by the mod. Additional adjustments for ore would be best made by the mod developer to avoid ongoing changes for v1.4 lol. This update maintains full sync compatibility. Thanks to danielpr for the suggestion! ER",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140809-100000",
	year: 2014,
	month: 8,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140809-100000)! This update enables Number 3 for the Research Technology effect. This setting will enable a tech without executing the post-setup tech validation, which makes new techs available to click, but would otherwise re-disable a tech that is unavailable to a civ. In this way, by using Number 3 and then the usual Number 0, you can research techs from other civs, etc. Please take care when using this. Thanks to danielpr for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140809-080000",
	year: 2014,
	month: 8,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140809-080000)! This update adjusts the healing effect to not create a custom property, so these units can continue to benefit from upgrades. Thanks to randomdude for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140809-040000",
	year: 2014,
	month: 8,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140809-040000)! This update fixes the tribute send/receive achievements, so that it will no longer truncate a long result. It will now word-wrap the details onto 2 lines if necessary, so players can see all of the information. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140809-000000",
	year: 2014,
	month: 8,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140809-000000)! This update enables the Change Object HP and Attack effects to \"set\" by setting the \"Number\" option to 1 and Change Object HP can heal by setting \"Number\" to 2. Now, scenario designers don't have to do strange math with really large numbers like 2147418112 to setup the effects and can use normal numbers there lol. It should be more intuitive to use in this way, I hope. This update maintains full sync compatibility for recs and saves.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140803-000000",
	year: 2014,
	month: 8,
	day: 3,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140803-000000)! This update allows up-change-name to accept -1 instead of a quoted name as its parameter. When you use (up-change-name -1), the AI's name will be set to one of that civilization's first 8 built-in historical names in an semi-random manner. The name is guaranteed to be unique among other AIs that use this command, but not necessarily with Petersen's selection. As with standard up-change-name commands, the actual name of the AI is preserved in the rec/spec player dropdown list for reference. Unfortunately, the HD edition broke compatibility again by adding a separate command for this functionality instead of extending the existing command. With this adjustment, the capability is available to any scripters that need it. This update maintains full sync compatibility for multiplayer, recs, and saves.",
	itemsAffected: [cUpChangeName],
	scriptingType: "ai"
}, {	
	number: "20140802-000000",
	year: 2014,
	month: 8,
	day: 2,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140802-000000)! This update adjusts the resolution listing code, so that it will now scan for 32-bit color resolutions first. If no resolutions are found, it will then scan for 8-bit (256) color resolutions, as before. Hopefully, this makes it more reliable in the future, as newer graphics drivers often fail to report 8-bit color support. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to StepS and SH for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140801-080000",
	year: 2014,
	month: 8,
	day: 1,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140801-080000)! This update resolves a critical, game breaking bug, which allows for the rapid construction of buildings on demand. This issue was newly discovered and reported on aoczone and could occur on all versions, v1.0c and later. In addition, a line of sight corruption bug was fixed for siege engineers. On a separate note, the Activate Trigger and Deactivate Trigger effects will no longer crash the game if the target trigger is invalid. They will now present a notice in the game chat identifying the invalid target trigger number. The Change Object HP and Change Object Attack effects can now \"set\" a value if you add 2147418112 (0x7FFF0000) to the amount. The Change Object HP effect can also heal units to maximum HP if you add 2147352576 (0x7FFE0000) to the amount. Trigger Studio apps can simply allow people to set the values in the low word and then set the high word to 7FFF or 7FFE, as requested.</p><p>This release necessarily breaks sync with previous versions, but can still seamlessly open all v1.4 recs and saves, and has compatibility support for v1.3 and v1.0c, as before. The new rec version id is 9.D. Previous versions of v1.4 were 9.C, 9.B, and 9.A. Thanks to Eques4 for the report on aoczone, II2N for the siege sight report, and randomdude for the scenario editor ideas.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140725-000000",
	year: 2014,
	month: 7,
	day: 25,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140725-000000)! This update once again changes the behavior of self-tribute notifications in the rec/spec viewer. Now, all notifications will appear if the viewer is set to Economy statistics mode, but by default you'll now also see self-tribute notifications that aren't being sent to gaia. In other words, only notifications for tributes to gaia are hidden by default now in rec/spec. This change makes it easier for people to observe a sling in normal random map games, etc. From what I can tell, this should still avoid the tribute flooding in rec/spec for most custom scenarios like Roll the Dice. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to LightTree and Grok for the rec/report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140712-000000",
	year: 2014,
	month: 7,
	day: 12,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140712-000000)! This update changes the behavior of self-tribute notifications in the rec/spec viewer. Now, the notifications will only appear if the viewer is set to Economy statistics mode, from the F4 list of Score, Population, Economy, Military, and Society. This should avoid the flood of self-tribute notifications for custom scenarios, while giving players a way to see them if necessary. In addition, a minor adjustment was made to allow up to 11 characters in the scenario editor quantity text box. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to randomdude for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140613-000000",
	year: 2014,
	month: 6,
	day: 13,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140613-000000)! This update fixes a sighted object counter bug for AIs. The bug may cause an AI to see an improperly high number of units from enemy players under certain conditions. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140515-000000",
	year: 2014,
	month: 5,
	day: 15,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140515-000000)! This update fixes a critical bug in up-delete-distant-farms, where the command fails to use unsigned comparisons. The result may cause an AI to unintentionally delete every farm they have on the map lol. In addition, the bug prevented the deletion of ANY farms farther than ~128 tiles. These issues should now be fixed. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to Promi and II2N for the report!",
	itemsAffected: [cUpDeleteDistantFarms],
	scriptingType: "ai"
}, {	
	number: "20140403-000000",
	year: 2014,
	month: 4,
	day: 3,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140403-000000)! This update fixes a critical memory handling bug in up-target-objects, where the command may read into discarded object ids even after a up-reset-search. The behavior and group spread should also be more even and consistent now. Sync for multiplayer, recs, and saves is maintained with previous releases. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140218-000000",
	year: 2014,
	month: 2,
	day: 18,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140218-000000)! This update adjusts the spectator client, so that it will prevent the system from turning off the display or going to sleep while it is actively waiting or connected. Thanks to BugA for the suggestion!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140208-000000",
	year: 2014,
	month: 2,
	day: 8,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140208-000000)! This update includes 2 fixes for AIs: boar lurers will no longer be tasked as civilian explorers, and an important gatherer retasking bug has been corrected. The retasking bug affected land nomad-style starts most significantly, but it also affected general play and DC villager retasking. The bug would cause the AI to not realize which resources are actually being gathered, which would result in an incorrect number of villagers on each resource, despite properly set sns.</p><p>The vote panel was also fixed and adjusted in various ways. It will no longer auto-resume and will always require either a continue vote from at least 1 player or a unanimous save-and-exit vote to save. There was a bug in 8-player human games, where if p8 drops, the panel would auto-resume even if everyone had voted to save-and-exit, and this is now fixed. If for any reason the vote cannot reach a conclusion, the resign-and-quit button will now create a save, as well. If you have a save-and-exit file (vps.date-time.msz) or a resign-and-quit file (oos.date-time.msz), you should always be able to restore the game now, and no one should be improperly shown as resigned. The pings displayed on the vote panel will also refresh appropriately, and be shown next to the correct player names.</p><p>A new registry setting was also added, so that people can configure the default value for the spectator button on each startup: Spec Default: REG_DWORD, Set between 0 to 5 to configure the default number of spectators, where Sx is 5. For expansions and mods, resource storage mode 8 was enabled for use in A.G.E. (previous modes were 1, 2, and 4, I think), so you can add to a resource upon object completion, but not remove the added resources upon destruction.</p><p>Finally, several new statistics views (score, population, economy, military, and society) have been added for the record viewer and spectator mode by pressing the statistics hotkey (default is F4) or the statistics button at the top-right of the mini-map. For ease of readability, each category is kept as short as possible and the most important details are toward the right, as they are most likely to be visually aligned for player comparison. The statistics view for normal games remains unchanged. The readme describes all of the abbreviations. Expansions and mods can use the -t:WFGS format with SetupAoC.exe to adjust the abbreviations for the 4 resource types in economy view.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20140115-230000",
	year: 2014,
	month: 1,
	day: 15,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140115-230000)! This update adjusts the Hidden Civs feature, so that only actual chosen civs are shown as \"Unknown\". If a player selects Random, Team Random, or Full Random, those will now appear as-is. This should help in tournament settings, in particular, where players are required to pick a civ. The other player will now know if they have picked an actual civ (will show as Unknown) instead of just attempting to mirror them with Team Random, etc.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140114-090000",
	year: 2014,
	month: 1,
	day: 14,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140114-090000)! This update fixes a minor display issue with the Hidden Civs feature. The display would not always render the text Unknown and would show Random instead for some players, though once they clicked in or selected a civ, it would update to Unknown. Now, it should always be Unknown.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140109-160000",
	year: 2014,
	month: 1,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140109-160000)! This update adjusts the installer to better ensure that the registry flags are set when necessary for Windows 8.1. It will try to modify the existing flags instead of just replacing them now.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140109-000000",
	year: 2014,
	month: 1,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140109-000000)! This update adjusts the installer to disable the new forced DPI Scaling Virtualization in Windows 8.1 by appending the HighDpiAware flag to DWM8And16BitMitigation in the registry. In addition, it will now check if dplayx.dll is smaller than 32KB, and if it is, it will invoke fondue.exe to install the DirectPlay component. No changes have been made for the actual game in this update. Thanks to StepS for the DPI report and LordGravewish for the DirectPlay report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140103-180000",
	year: 2014,
	month: 1,
	day: 3,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140103-180000)! This update fixes the train-cancel-crash bug that was carried over from v1.0c and occurred during Viper-Jordan BO21 G1. It's unfortunate that it wasn't discovered until now. Sorry, Viper, Jordan, Comet, and Blitz!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140103-000000",
	year: 2014,
	month: 1,
	day: 3,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140103-000000)! This update adds a registry key to enable direct IP and LAN players to host games with the hidden civs feature. The host player will need to manually add this value to the registry, since the installer does not provide a checkbox for it. The settings provided by a lobby launch client (Voobly, GR, etc.) will override this setting. Registry entries are stored under \"\\Software\\Microsoft\\Microsoft Games\\Age of Empires II: The Conquerors Expansion\\1.0\". The game will check under \"HKEY_CURRENT_USER\" first and then \"HKEY_LOCAL_MACHINE\". If both are missing for a given setting, the default will be used.</p><p>Registry Settings:</p><p><ul><li>Multiple Queue: REG_DWORD, Set to 1 to enable the \"multiple building queue\" feature.</li><li>Patrol Delay: REG_DWORD, Set to 1 to enable the 10 second patrol delay default.</li><li>Disable Help Text: REG_DWORD, Set to 1 to disable the event text chat notifications.</li><li>Hidden Civs: REG_DWORD, Set to 1 to enable the hidden civ feature for multiplayer games.</li><li>Adjust Terrains: REG_DWORD, Set to 1 to replace snow and ice with grass and moss.</li><li>Extend Population: REG_DWORD, Set to 1 to extend the population dropdown list to 1000.</li><li>Mini-map Colors: REG_DWORD, Set to combined flags for red, purple, and grey.</li></ul>",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140102-000000",
	year: 2014,
	month: 1,
	day: 2,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140102-000000)! This update fixes the text and button positions at the top-right of the game setup screen. The Random and Reset buttons are now slightly wider, and the \"Game Settings\" text is now right-aligned against them, so the text should no longer get overlapped by the buttons on various localizations, including German and Spanish. English is almost identical.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20140101-000000",
	year: 2014,
	month: 1,
	day: 1,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20140101-000000)! This update enables players to set the Patrol Default state to On (10s delay) or Off (2s delay) with \"Ctrl+F1\" at any time. An onscreen notification message will appear, as well. It should help players who don't have access to the installer (Voobly) to toggle their standard/alternate patrol delay. Happy New Year!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131231-100000",
	year: 2013,
	month: 12,
	day: 31,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131231-100000)! This update makes a bug fix for the IP box on the game setup screen to cap it at one address only to avoid overflows from having many network cards. In addition, some game setup screen controls were adjusted:</p><p><ul><li>non-host players see the \"Cancel\" button positioned exactly like the host (no longer awkwardly floating)</li><li>the \"Start Game\" and \"Cancel\" buttons were moved up 2 pixels away from the bottom border design</li><li>the title headers, \"Standard Game\" and \"Multiplayer Game\", were centered between the \"Name\" and \"Team\" titles</li></ul>",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131231-000000",
	year: 2013,
	month: 12,
	day: 31,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131231-000000)! This update separates the in-game hover help popup text setting from the extended help event notifications in the chat (the train, research, etc. notices). Cycling with F1 or the help button onscreen will control both options for a total of 4 states (hover:off,notice:off, hover:on,notice:off, hover:off,notice:on, hover:on,notice:on). When the extended help notice state changes, you'll get a chat notification showing if it changed to on or off. Thanks to LightTree for the idea!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131230-010000",
	year: 2013,
	month: 12,
	day: 30,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131230-010000)! This update finally enables the 4th parameter of the ai_info_map_type rms scripting command. When it is set to 1, the MapType specified will be shown in the <a href=\"https://imgur.com/JA8azYp\">Objectives</a> window, so players can see what type the map is closest to. If you would prefer that players scout to discover the specific style of the map, you can leave it as 0. Please see the reference for more information. Thanks to nC_eru_ on aoczone for the idea!</p><p>ai_info_map_type inConstMapName inConstIsNomad inConstIsMichi inConstIsStandard<br>1. #load-if-defined COASTAL-MAP will be true for AIs. Players will see Coastal in the Objectives window.<br>- ai_info_map_type COASTAL 0 0 1",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20131228-190000",
	year: 2013,
	month: 12,
	day: 28,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131228-190000)! This update changes the max age naming style to avoid confusion as suggested by randomdude. It now looks like <a href=\"https://i.imgur.com/AzgGOQP.png\">this</a>. The Imperial Age and Post-Imperial Age states are left as-is, since they can never span toward any other age (also reduces code size lol). Thanks to randomdude for the idea!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131228-180000",
	year: 2013,
	month: 12,
	day: 28,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131228-180000)! This update optimizes the double-click selection code a bit, to avoid unnecessary unit comparisons and checks, etc. That's it",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131228-020000",
	year: 2013,
	month: 12,
	day: 28,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131228-020000)! This update enables \"Unknown\" civ display on the multiplayer game setup screen, which can allow players to select civs without other players able to select counter civs. For this functionality, the game must be lobby launched for all players. In the lobby response preset data structure, the lobby launch provider must set the first \"bit\" of the ReservedFlags value (set it to 1, essentially lol) to enable it when launching all players.</p><p>Lobby launch preset structure changes since 1.4:</p><p><ul><li>the GameFilename was reduced by 20 bytes, making it 240 bytes in size instead of 260</li><li>this creates space for 5 new DWORD values after it:</li><li>the first 4 DWORD values are for allowed spectator IP addresses, 1 address per 4 bytes in DWORD form (default: 0)</li><li>the 5th DWORD value is for the ReservedFlags (default: 0)</li></ul>",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131228-000000",
	year: 2013,
	month: 12,
	day: 28,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131228-000000)! This update fixes an issue with double-click selection, so now monks and monk-with-relic units will be selected separately. Thanks to Edie on aoczone for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131223-000000",
	year: 2013,
	month: 12,
	day: 23,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131223-000000)! This update is just an installer adjustment. No changes have been made to the core game. Sorry about that, dukfinx!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131222-000000",
	year: 2013,
	month: 12,
	day: 22,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131222-000000)! This update adjusts the placement system for AIs, so that place-control and place-point use building avoidance system type 1 instead of type 2 like before. The place-forward system will still use type 2 for placement outside line of sight. This allows for more precise positioning with those 2 placement methods. Thanks to II2N for the report!</p><p>Building avoidance system, Type 1: place-normal, place-control, place-point<br> - ally: rejects all tiles of the building itself only<br> - non-ally: rejects all tiles of the building itself + (for towers, tcs, and castles only, the attack range + 0.5 tiles)</p><p>Building avoidance system, Type 2: place-forward<br> - ally: rejects all tiles of the building itself only<br>- non-ally: rejects all tiles of the building itself + the building line of sight (not range) + 2 tiles",
	itemsAffected: [cUpBuild, pPlacementType],
	scriptingType: "ai"
}, {	
	number: "20131220-000000",
	year: 2013,
	month: 12,
	day: 20,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131220-000000)! This update adjusts the post-game notification for spectators to show \"Game over\" (localized) instead of \"Finished replaying game\". Thanks to LightTree for the suggestion!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131219-000000",
	year: 2013,
	month: 12,
	day: 19,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131219-000000)! This update provides players with the ability to use both the 2 second patrol delay and the v1.0c 10 second patrol delay at any time. In addition, there are several other core bug fixes and other optimizations. The rec version has been updated from 9.B to 9.C. This version of v1.4 can open all v1.4 recs (9.C, 9.B, 9.A), v1.3 recs (9.9), and v1.0c recs (9.4). For AIs, the up-set-target-point action will now automatically shift the point inside the map boundaries if necessary. If you need the converted point, you can use (up-get-point position-point gl-point) afterward.</p><p>The patrol procedure is exactly the same, except for one added option:</p><ol><li>select military units (same)</li><li>click the Patrol button or press your Patrol hotkey, like Z (same)</li><li>optionally Shift+click to set waypoints for your patrol (same)</li><li>click to set the patrol destination point on the map (now 2 choices):<ul><li>click the point for your standard delay (default 2s, same)</li><li>Ctrl+click the point for your alternate delay (default 10s, new)</li></ul></li></ol><p>With the \"Original patrol default\" checkbox option on the installer, you can swap the 2s/10s to 10s/2s if you're more comfortable with the 10s delay as the default. In this way, you never really need to concern yourself with the other delay, unless you find a situation where you think it might be useful (an ambush attack on passing enemy units might be better with the 2s delay, while attacking with galleons in a thin river is often better with the 10s delay). You can play with the delay that is most comfortable for you and have the alternate delay available with Ctrl+click at any time (or ignore it entirely). As mentioned previously, other than the delay, there are no other differences with patrol.",
	itemsAffected: [cUpSetTargetPoint],
	scriptingType: "ai"
}, {	
	number: "20131023-100000",
	year: 2013,
	month: 10,
	day: 23,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131023-100000)! This update makes the adjustment to the tooltip hover text for custom named units, as requested, so they appear like \"Click to select only this Object Type.\" Thanks to Kor for the suggestion!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131021-030000",
	year: 2013,
	month: 10,
	day: 21,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131021-030000)! This update prevents the post-game achievements data from being appended to the spectator data stream. This is primarily to ensure stream stability when the game ends.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131018-230000",
	year: 2013,
	month: 10,
	day: 18,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131018-230000)! This update just includes some minor performance and pairing optimizations for some stuff. Other than that, nothing has changed ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131016-180000",
	year: 2013,
	month: 10,
	day: 16,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131016-180000)! This update fixes another issue in the keyboard override code, in order to ensure that double-press centering works with docks. Thanks to Oceanic on Voobly for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131016-160000",
	year: 2013,
	month: 10,
	day: 16,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131016-160000)! This update fixes an issue in the keyboard override code, in order to ensure that numpad ctrl group creation works with docks. Thanks to Oceanic on Voobly for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131013-120000",
	year: 2013,
	month: 10,
	day: 13,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131013-120000)! This update adjusts the targeting code in order to hopefully make units a bit more responsive around buildings during patrol. With this, the rec/save version changes from 9.A (RC1) to 9.B (RC2), however 1.4 will open both of these, so no extra work is needed for players.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131010-180000",
	year: 2013,
	month: 10,
	day: 10,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131010-180000)! This update improves the installer, so that it can (probably) update v1.0b, as well as uninstall both age2_x1.exe and age2_x1.4.exe installations. The included Readme.html has been updated, too ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131009-060000",
	year: 2013,
	month: 10,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131009-060000)! This update will now include multiplayer achievements data at the end of the rec file, for analyzers to read. The data is written as-is from the 0x82C length lobby achievements data block. Thanks to PkZ for the idea!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131007-100000",
	year: 2013,
	month: 10,
	day: 7,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131007-100000)! This update fixes an epic bug from v1.0c in the attack group code, where if no targets are available to attack, units will \"freeze\" in place. Disbanding attack groups would reactivate them. This issue affected both land and boat attack groups. Thanks to II2N for the report, rec, and test scenario/AI!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131006-060000",
	year: 2013,
	month: 10,
	day: 6,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131006-060000)! This update fixes a crash bug from v1.0c that occurs when restarting a paused recorded game after using certain cheat codes during the pause before the restart. yES. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20131005-000000",
	year: 2013,
	month: 10,
	day: 5,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20131005-000000)! This update fixes an issue with the game data loader code from v1.0c, where if you click the \"Previous Chapter\" button and then restart a rec, certain game state data could be corrupted.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130927-200000",
	year: 2013,
	month: 9,
	day: 27,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130927-200000)! This update adjusts the installer to make the compatibility shortcuts for v1.0c, v1.3, and v1.4 inside the \"Support\" subfolder even when the Ctrl+Alt \"age2_x1.4.exe\" install method is used.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130926-100000",
	year: 2013,
	month: 9,
	day: 26,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130926-100000)! This update adds some additional \"if REGICIDE\"-like symbols for map scripts, so that they have a better idea about what game mode is being played and the number of players, etc. Thanks to Cake for the idea!</p><p>Rms Map Symbol Extensions</p><p><ul><li>RANDOM_MAP: defined for Random Map games</li><li>TURBO_RANDOM_MAP: defined for Turbo Random Map games</li><li>REGICIDE: defined for Regicide games</li><li>DEATH_MATCH: defined for Death Match games</li><li>KING_OT_HILL: defined for King of the Hill games</li><li>WONDER_RACE: defined for Wonder Race games</li><li>DEFEND_WONDER: defined for Defend the Wonder games</li><li>CAPTURE_RELICS: defined for the Relics victory condition</li><li>[1-8]_PLAYER_GAME: defined as the total number of players</li><li>UP_AVAILABLE: defined for v1.4 and later; use to detect the patch</li>",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20130923-040000",
	year: 2013,
	month: 9,
	day: 23,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130923-040000)! This update fixes an issue where certain hotkeys (objectives window, diplomacy, chat, etc.) wouldn't be available when the game loaded a rec/save file directly via double-click. Thanks to Meow on aoczone for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130922-140000",
	year: 2013,
	month: 9,
	day: 22,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130922-140000)! This update brings the rec viewer control enhancements to v1.0c and v1.3 recs when opened via double-click compatibility mode. Thanks to noleafclover on aoczone for feedback! yES ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130922-060000",
	year: 2013,
	month: 9,
	day: 22,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130922-060000)! This update eliminates the need to set the \"defend-priority\" sns (livestock, forage, gold, stone) to get those resources into the DC targetable units list. Now all food resources (except fish), stone, and gold are targetable by default. Thanks to II2N and Cake for feedback!",
	itemsAffected: [snDockDefendPriority, snForageDefendPriority, snGoldDefendPriority, snLivestockDefendPriority, snRelicDefendPriority, snStoneDefendPriority, snTownDefendPriority],
	scriptingType: "ai"
}, {	
	number: "20130920-120000",
	year: 2013,
	month: 9,
	day: 20,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130920-120000)! This update makes a few fixes for the scenario editor, in order to display the names of conditions and effects for triggers in the list. The prefixes are C (condition), R (reversed condition), and E (effect). The framerate for the editor was also restored to the v1.0c standard to minimize overhead. In addition, the performance improvements from v1.4 will now also benefit v1.3 and v1.0c recs opened via double-click, and a restricted feature has been added for precision pixel scrolling.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130918-100000",
	year: 2013,
	month: 9,
	day: 18,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130918-100000)! This update makes some changes for the installer, so that if you hold Ctrl+Alt when clicking the Install button, it will create an \"age2_x1.4.exe\" file and set it all up for rec file associations, color fixes, and everything. This should help people who play on Voobly, since Voobly overwrites the base \"age2_x1.exe\" at every start.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130916-230000",
	year: 2013,
	month: 9,
	day: 16,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130916-230000)! This update changes the way the spectator+rec viewer speed buttons work. Now, the Slow and Fast buttons default to 25% per click, and fine adjustments require the Shift key. The Normal button resets to 50% for recs, and 75% in spectator mode. Thanks to aoczone for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130916-180000",
	year: 2013,
	month: 9,
	day: 16,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130916-180000)! This update adds a restricted feature (press F5 to show the list) for a Left-aligned interface style. Thanks to i_Phone for the suggestion! Sorry for not including it earlier.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130914-000000",
	year: 2013,
	month: 9,
	day: 14,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130914-000000)! This update fixes an issue where sounds may not play due to being skipped by the framerate increase in some situations. Thanks to Andorin, mohammad_aryan, and Spaden on aoczone for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130913-000000",
	year: 2013,
	month: 9,
	day: 13,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130913-000000)! This update fixes an issue where attack notification chat messages are put into the spectator and rec data stream. Thanks to Nicov on aoczone for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130912-210000",
	year: 2013,
	month: 9,
	day: 12,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130912-210000)! This update fixes an issue where the player.nfz data is not loaded before saved game data during the direct file loading process. For AIs, up-can-build and up-build should now allow for the construction of palisade and stone walls, preferably with place-point and sn-placement-zone-size set to 1. You cannot build gates with up-build due to rotation issues lol. Finally, uninstalling will now delete spectate.exe and miniupnpc.dll if they exist. The wndmode.dll file will be left just in case something else relies on it like VegMod. Thanks to II2N for the wall suggestion, LightTree for the uninstall report, and LightTree+Promi for their spectated game today, which made the player.nfz error visible.",
	itemsAffected: [cUpCanBuild, cUpBuild],
	scriptingType: "ai"
}, {	
	number: "20130912-020000",
	year: 2013,
	month: 9,
	day: 12,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130912-020000)! This update fixes an issue where spectator chat boxes are disabled if the player being observed has resigned or been defeated. Thanks to people on Voobly for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130911-140000",
	year: 2013,
	month: 9,
	day: 11,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130911-140000)! This update just includes some adjustments for spectator mode. That's it ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130910-030000",
	year: 2013,
	month: 9,
	day: 10,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130910-030000)! This update makes some more bug fixes and adjustments for multiplayer lobby starts, like on Voobly. Thanks to Promi and i_Phone for testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130909-230000",
	year: 2013,
	month: 9,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130909-230000)! This update removes the \"Open v1.3\" right-click option for .mgz and just checks in the game. If the rec/save file is v1.3, it dynamically transitions to v1.3 and loads it. If not, it loads as v1.4. Thanks to fen for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130909-220000",
	year: 2013,
	month: 9,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130909-220000)! This update modifies the UP installer, so that it will create rec file associations for the game. The .mgx format will get an \"Open\" option, while .mgz format will get \"Open\" and \"Open v1.3\" in the right-click menu. Custom expansion rec formats will also be associated automatically. In addition, game shortcuts are created in the Support folder for people to easily launch v1.4, v1.3 compatibility mode, Enhanced v1.0c mode, or custom expansions.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130909-140000",
	year: 2013,
	month: 9,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130909-140000)! This update fixes a bug where the spectator host may see a post-game spectator disconnect notification message from 0.0.0.X instead of the proper ip address. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130909-120000",
	year: 2013,
	month: 9,
	day: 9,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130909-120000)! This update makes a few adjustments for the spectator button, so Voobly can disable it. It seems they're not going to use the spectator host server within age2_x1.exe, and will attempt to handle it within the Voobly client + NAT code. This means that external clients probably won't be able to spectate Voobly games.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130908-183000",
	year: 2013,
	month: 9,
	day: 8,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130908-183000)! This update adds a -e parameter for SetupAoC.exe, so expansion/mod developers can change the 3 character file extension for recs. This also influences the id inside the rec, so where Conquerors v1.0c is \"VER 9.4\", v1.3 is \"VER 9.9\", and v1.4 is \"VER 9.A\", if you set the extension to \"mgc\" with -e:mgc, your recs will be rec.date-time.mgc and the internal id will be \\MGC 9.A\". Thanks to danielpr for the idea! Finally, spectator files are now named spc.date-time.playername.mgz (or mod extension).",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130907-150000",
	year: 2013,
	month: 9,
	day: 7,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130907-150000)! This update fixes a minor bug in the game, where it tries to determine the path that the game is running from. It's a very rare problem lol. Mausland, for the big maps, it would likely destabilize the game to try it, however the HD edition will have a bigger map size soon. For AoFE, UP works with it, but for widespread use and multiplayer games, the AoFE team would need to update and then distribute it. Hmm, the built-in AI is the only one that consistently walls, I think ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130907-140000",
	year: 2013,
	month: 9,
	day: 7,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130907-140000)! This update renames the \"E10CM\" command line parameter for dynamic Enhanced v1.0c mode to \"V1C=1\". In addition, the \"V13=1\" parameter has been added for dynamic v1.3 mode. Unfortunately, v1.2 will have to remain separate, so if you need to watch a game from then, please use the v1.2 installer, update your age2_x1.exe, copy it as age2_x1.2.exe, and then you can use that to watch v1.2 recs going forward. Finally, a boar lurer retask bug that II2N reported should hopefully be fixed with this update for v1.4. Thanks to II2N for the report and rec!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130906-230000",
	year: 2013,
	month: 9,
	day: 6,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130906-230000)! This update ensures that, like multiplayer mode, opening various interface elements like the Objectives window will not pause spectator mode. In addition, it adds an \"E10CM\" command line parameter for age2_x1.exe to allow v1.4 will dynamically transition into Enhanced v1.0c mode without a separate executable. You can also set Windows Explorer to associate .mgz, .mgx, .gaz, and .gax files with the v1.4 age2_x1.exe. After this, if you double-click on a v1.4 file, it will directly load the file. If you double-click a v1.0c file, it will seamlessly auto-transition into Enhanced v1.0c mode and load the file in the same way.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130906-130000",
	year: 2013,
	month: 9,
	day: 6,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130906-130000)! This update makes chat messages always appear onscreen during rec and spectator modes, even if you change player perspective, so you don't have to worry about missing messages anymore. In addition, it attempts to fix the memory corruption crash that occurs in v1.0c and v1.3 when the zone map overflows 255 zones. Now, it should hopefully handle it without crashing, although the zone map for that particular terrain restriction may be somewhat improper. Without the fix, all of the recs sent by Viper crash, just like the 5 people in the original game. After the fix, the recs no longer crash and playing the rec as a real game no longer crashes either. Thanks to Promi for the chat idea and Viper for the report and recs! Sorry for the trouble!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130906-060000",
	year: 2013,
	month: 9,
	day: 6,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130906-060000)! This update fixes the choppiness that spectators may have seen while the actual game was paused or otherwise waiting. In addition, after 5 seconds of waiting/pause, a message will appear at the bottom of the screen for spectators, \"Waiting for other players...\", so they are aware that it's waiting and not crashed. Thanks to Viper and PkZ for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130904-160000",
	year: 2013,
	month: 9,
	day: 4,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130904-160000)! This update fixes a bug in the tribute anti-cheat detection code, fixes a crash when bringing the system menu up with the F10 key, and defaults playback speed to 50% for normal recorded games. The spectator default is still 75%, which will auto-adjust as necessary. Thanks to BugA, ryshep, and fen for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130904-120000",
	year: 2013,
	month: 9,
	day: 4,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130904-120000)! This update includes a minor change for the repairer fix. Other than that, it's identical.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130904-060000",
	year: 2013,
	month: 9,
	day: 4,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130904-060000)! This update includes a minor change for the spectator client, reducing the time between connection attempts from 5s to 2s while waiting for the host to launch the game.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130904-050000",
	year: 2013,
	month: 9,
	day: 4,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130904-050000)! This update improves the spectator client response time and makes it auto-disconnect once your game closes. The top-right menu for spectator mode has been made consistent, as well, so there's no difference between live and not-live. The Quit Game option will exit the game entirely, and the Achievements button is now shown at all times, including after the game ends. Thanks to BugA for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130904-030000",
	year: 2013,
	month: 9,
	day: 4,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130904-030000)! This update allows the Flare button/hotkey (alt+F) to toggle fog of war during recorded games and spectator mode. Probably can't get any other ones lol. Thanks to BugA and LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130903-160000",
	year: 2013,
	month: 9,
	day: 3,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130903-160000)! This update fixes an issue where the rate change hotkeys were allowing activation even when speed was locked. Thanks to Genette for the report and rec! BugA, hmm, we'll see if anything can be done!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130903-080000",
	year: 2013,
	month: 9,
	day: 3,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130903-080000)! This update fixes a few text-related issues with the F7 and F8 notification messages, and the IP address button text. Just some little things ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130902-140000",
	year: 2013,
	month: 9,
	day: 2,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130902-140000)! This update eliminates excessive memory allocations in the spectator system, and fixes a crash bug on shutdown. Thanks to LightTree for the report, and offwo, promi, sh, and fen for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130902-060000",
	year: 2013,
	month: 9,
	day: 2,
	version: 1.4,
	notes: "UserPatch v1.4 RC has been released (20130902-060000)! This update fixes an issue in the scenario editor, where the \"Others\" trigger dropdown category resets each time you reselect a condition/effect. There's also some minor adjustments for the spectator code.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130901-080000",
	year: 2013,
	month: 9,
	day: 1,
	version: 1.4,
	notes: "UserPatch v1.4 RC8 has been released (20130901-080000)! This update fixes an issue where different hero unit types that look similar are selected together when double-clicking. The issue was caused by the fix that allowed barracks and castle huskarls to be selected together. Hero units will now always be separated. In addition, a crash bug was fixed in the Relics victory condition. Thanks to danielpr for the Relics report, and to nhoobish on Voobly for the hero report! Finaldeath, yES!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130901-000000",
	year: 2013,
	month: 9,
	day: 1,
	version: 1.4,
	notes: "UserPatch v1.4 RC6 has been released (20130901-000000)! This update disables a few non-applicable controls like \"Demo Loop\" when spectating a live game, which should provide an indicator that it's live. Thanks to LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130831-030000",
	year: 2013,
	month: 8,
	day: 31,
	version: 1.4,
	notes: "UserPatch v1.4 RC5 has been released (20130831-030000)! This update adds the Spectator Stream, allows Team Random to mirror preselected civs, Random, and Full Random instead of only other Team Random players, fixes several bugs in gathering and the scenario editor (prevents overflow from selecting >25 units for patrol and weirdness with Set Objects), improves performance for all game modes (especially windowed mode single player, rec replay, and human multiplayer games), makes background mode (F8) tri-state, and adds the up-update-targets command for AIs to request an immediate targets-in-town-size update. The readme describes the spectator system, which is currently supported for Direct IP, LAN, and GameRanger. Details have been provided to Voobly for implementation.</p><p>This last command was necessary because while if you expand town size, new targets are quickly added into the target list, if you reduce town size, you have to wait until the target refresh, which happens every 15 seconds. This can cause issues with retreating, for example. The reference file has an example for how to use it after changing town size. Thanks to II2N for the report and rec! Thanks to LightTree, fen, Archon, offwo, SH, Promi, marathon, Grok, i_Phone, Viper, PkZ, kkab, Jordan, Whack, and ZeroEmpires for spectator feedback!</p><p>For background mode (F8), the 3 states are now:<br>1. Back: Off - mouse locked inside window border, pause on alt+tab (default)<br>2. Back: On - mouse free to move beyond border, no pause (spectator default)<br>3. Back: View Lock - mouse locked inside window border, no pause (new)</p><p>For always-on-top (F7), the 2 states are still:<br>1. Set View: Off - window will move behind other windows (default)<br>2. Set View: On - window will stay on top of other windows</p><p>Changing these will now show notifications onscreen.",
	itemsAffected: [cUpUpdateTargets],
	scriptingType: "ai"
}, {	
	number: "20130606-180000",
	year: 2013,
	month: 6,
	day: 6,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130606-180000)! This update resolves 694: #UserPatch [Core Bug] Double-click selector code fails to properly account for object property differences. Thanks to LightTree for the report! The internal version id has been updated due to the new code, so please redownload here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130606-000000",
	year: 2013,
	month: 6,
	day: 6,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130606-000000)! This update resolves 693: #UserPatch [Core Bug] The patrol trigger effect may crash when some selected units no longer exist. In v1.0c and v1.2, the patrol trigger effect would use the originally requested number of units to patrol, instead of the number of units actually found/available at the time of the effect, leading to the patrol function reading uninitialized memory lol. This would usually crash the game, but if you're lucky, it might read an old result from another trigger instead. Thanks to Jetkill Fastmurder at AoKH for finding this bug! The internal version id has been updated due to the new code, so please redownload here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130604-200000",
	year: 2013,
	month: 6,
	day: 4,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130604-200000)! This update resolves 692: #UserPatch [Core Bug] Multiplayer game setup code improperly compares time with signed integers. This issue could cause people to be dropped from multiplayer games for no reason other than not changing their civ, color, or team for 2 minutes, among other things. Thanks to LightTree, marathon, offwo, and promi for the report, and marathon for the fix! The internal version id has been updated due to the new code, so please redownload here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130604-120000",
	year: 2013,
	month: 6,
	day: 4,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130604-120000)! This update resolves 691: #UserPatch [Core Bug] Repeatedly ungarrisoning a unit from a non-building object may break the fog of war. Here's a picture of it lol. Thanks to II2N for the rec and report! The internal version id has been updated due to the new code, so please redownload here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130603-180000",
	year: 2013,
	month: 6,
	day: 3,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130603-180000)! This update resolves 690: #UserPatch [Request] The multiplayer multiple building queue setting should be controlled by the host. If a player has ready'ed with another setting and the host changes it, the player will be un-ready'ed and need to click in to confirm. Thanks to StepS, fen, and BugA for feedback! I think this makes it much more intuitive lol. The internal version id has been updated due to the new code, so please redownload here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130602-180000",
	year: 2013,
	month: 6,
	day: 2,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130602-180000)! This update resolves 689: #UserPatch [Core Bug] Unit type transition code for objects like trebuchets fails to consider custom LOS. This fixes the underlying cause for the original converted Korean villager LOS bug reported by II2N, and also enables villagers, trebuchets, and monks to receive LOS adjustment by the Change Range trigger effect without breaking the fog of war. The internal version id has been updated due to the new code, so please redownload here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130602-120000",
	year: 2013,
	month: 6,
	day: 2,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130602-120000)! This update makes some changes to the trigger effects based on feedback from randomdude. The internal version id has been updated due to the new code, so please redownload here.</p><p>Here are the new ranges that the effects will allow for the final result:<br>- Speed: 0.5 to 4.5 (to prevent walking through walls and other bugs), units must have at least 0.5 speed to be affected<br>- Range: 1.0 to 21.0 (LOS is auto-adjusted to range+3, which is the safest maximum possible), units must have at least 1 range<br>- Armor: -32768 to 32767 (armor #1 = strike, armor #2 = pierce), range is bounded to prevent overflow</p><p>Note that LOS will not be adjusted for villagers, trebuchets, or monks due to unit swapping breaking the \"explore map\".Thanks, Kor! Thanks, randomdude!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130601-200000",
	year: 2013,
	month: 6,
	day: 1,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130601-200000)! This update resolves 688: #UserPatch [Scenario Design] New trigger effects are required to change object speed, range, and armor. For the speed effect, the value scale is multiplied by 100 in order to allow more control (1 = 0.01 speed increase, 100 = 1.0). The internal version id has been updated due to the new code, so please redownload here.</p><p>Here are the ranges that the effects will allow for the final result:<br>- Speed: 0.5 to 4.0 (to prevent walking through walls and other bugs), units must have at least 0.5 speed to be affected<br>- Range: 1.0 to 16.0 (LOS is auto-adjusted to range+3, which is the safest maximum possible), units must have at least 1 range<br>- Armor: 0 to 32767 (armor #1 = strike, armor #2 = pierce)</p><p>We're done this time. For real lol. Only crash bugs are acceptable now, until release on June 8. If anyone has seen any crashes on v1.3, please report it on the other thread!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130601-100000",
	year: 2013,
	month: 6,
	day: 1,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130601-100000)! This update resolves 687: #UserPatch [Scenario Design] The change ownership effect fails to switch all pieces of multi-part buildings. Although it's probably a relatively rare case, having a multi-part building owned by different players simultaneously sounds like it could cause some instability, so lol. Thanks to randomdude for the report! The internal version id has been updated due to the new code, so please redownload here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130531-060000",
	year: 2013,
	month: 5,
	day: 31,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130531-060000)! This update resolves 686: #UserPatch [Core Bug] AI villager explorers may idle indefinitely in multiplayer games that are recorded. Hopefully, villager exploration will now be more consistent, with less idling. The internal version id has been updated due to the new code, so please redownload here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130529-000000",
	year: 2013,
	month: 5,
	day: 29,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130529-000000)! This update includes some readme changes, and the installer will now link to the AoKH Blacksmith if it detects that the person needs v1.0c. Hopefully, the other v1.0c localizations can be uploaded there, too, as I think only the EN-US localization is there at the moment. If the other v1.0c localizations were on the Blacksmith, and that main EN link described and linked to the other v1.0c localizations, it would be great. Thanks to Leif for the idea! Download here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130528-000000",
	year: 2013,
	month: 5,
	day: 28,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130528-000000)! This update replaces the previous v1.3 release candidate due to some minor installer adjustments for anti-gregging support (lol).",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130526-000000",
	year: 2013,
	month: 5,
	day: 26,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130526-000000)! This update is now available for \"slightly\" more public testing as the v1.3 release candidate. Please test it! If it's stable after 2 weeks, this will be the final v1.3.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130526-000000",
	year: 2013,
	month: 5,
	day: 26,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130526-000000)! This update resolves 685: #UserPatch [Request] Allow Alt+Install to easily create a separate age2_x1.0c.exe for Enhanced v1.0c mode. The installer can now create a separate Enhanced v1.0c mode executable file. Now, if you hold \"Alt\" when clicking the \"Install\" button, it will install Enhanced v1.0c and then clone the result as \"age2_x1.0c.exe\". Holding \"Ctrl\" will still install in-place Enhanced v1.0c for \"age2_x1.exe\". I hope this makes it a lot easier for people who want to have the ability to watch old v1.0c .mgx recs, etc. The link is only available in the afk chat, in order to keep it from spreading until it is tested.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130524-200000",
	year: 2013,
	month: 5,
	day: 24,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130524-200000)! This update makes a slight adjustment, so that language dll id #30195 will show as the hover information message for the Relics victory condition. For the Conquerors, this id doesn't exist, but expansion developers can set this in their language data and localizations. The link is only available in the afk chat, in order to keep it from spreading until it is tested.</p><p>The message should probably look something like this:<br>\"Relics - Win by being the first player or team to destroy all enemies in military conquest or control all Relics. Once the relics are captured, the game will end immediately with no countdown.\"",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130523-180000",
	year: 2013,
	month: 5,
	day: 23,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130523-180000)! This update fixes a bug with the -v version flag for the installer. No gameplay changes were made in this release. Thanks to danielpr for the report! The link is only available in the afk chat, in order to keep it from spreading until it is tested. Important note: Please read the important note in the previous post ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130523-160000",
	year: 2013,
	month: 5,
	day: 23,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130523-160000)! This update resolves 683: #UserPatch [Scenario Design] The Own Fewer Objects trigger condition must be able to process areas, and 684: #UserPatch [Scenario Design] Provide a checkbox to invert the result of any trigger condition. If you click \"Set Area\" now, and then do something other than set the area on the map, like click \"Go to Area\", the previous area will now be cleared/reset, so if you want to use \"Own Fewer Objects\" with the original all-objects-on-the-map style, you can do this. As for the \"not\"/inversion checkbox, if it's checked, the condition is normal; if it's unchecked, the condition is inverted. Thanks to randomdude and kor for the suggestion! The link is only available in the afk chat, in order to keep it from spreading until it is tested.</p><p>Important note: We need to stabilize this for final release, as v1.3 is now frozen. Please consider this a one-time exception, since these fixes were already written. I'd rather not have to deny further requests, as it's not a nice feeling to say \"no\" lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130522-140000",
	year: 2013,
	month: 5,
	day: 22,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130522-140000)! This update makes a few minor changes for the installer. Expansion developers can now use the -v parameter with the -g parameter to set the version (like SetupAoC.exe -g:aoc -v:2.1 -i). This isn't necessarily recommended due to ES versioning lols in mp, but it's there if people want to use it. The old -v for bypassing the v1.0c version check is now -b. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. Thanks to danielpr for the suggestion!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130521-200000",
	year: 2013,
	month: 5,
	day: 21,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130521-200000)! This update makes a minor adjustment for the Relics victory condition in order to ensure that all enemy players resigning still ends the game lol. Sorry about that ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130521-180000",
	year: 2013,
	month: 5,
	day: 21,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130521-180000)! This update resolves 682: #UserPatch [Request] Add a Relics victory condition for instant victory upon capturing all relics. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. If this victory condition is selected, the VICTORY-RELICS #load symbol will be defined for AIs. In this mode, once all relics on the map are captured, that player/team gets instant victory without a timer. This might be best with a custom rms, probably, where the map has a single relic somewhere in a difficult to reach place. This one is for ryshep ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130520-200000",
	year: 2013,
	month: 5,
	day: 20,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130520-200000)! This update resolves 681: #UserPatch [Core Bug] Attack-ground commands may fail to restrict to valid map coordinates. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. Although the attack-ground command will no longer crash, AIs should take care to keep their activities within map bounds. Thanks to LightTree for the rec and report! Thanks again for those ideas, John!",
	itemsAffected: [cUpTargetPoint, pTargetAction],
	scriptingType: "ai"
}, {	
	number: "20130520-180000",
	year: 2013,
	month: 5,
	day: 20,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130520-180000)! This update resolves a UI issue in the scenario editor (object type list buttons). The link is only available in the afk chat, in order to keep it from spreading until it is tested. Thanks to randomdude for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130520-130000",
	year: 2013,
	month: 5,
	day: 20,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130520-130000)! This update resolves 679: #UserPatch [Scenario Design] The trigger effect to patrol units must be able to process areas, and 680: #UserPatch [Request] Display a notification when a player disconnects after a multiplayer game ends. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. Thanks to John the Late for the suggestions! Note that we're not going to 2197 with feature requests here; these are simply a few items to differentiate from v1.2.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130519-130000",
	year: 2013,
	month: 5,
	day: 19,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130519-130000)! This update resolves 677: #UserPatch [AI Scripting] AIs must be able to find wall segments and houses in the local objects list, and 678: #UserPatch [AI Scripting] A new fact is required to check whether an object exists at a specific point. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. With the new up-point-contains fact, you can check if an object exists on a map tile. Thanks to II2N and ER for feedback!",
	itemsAffected: [cUpPointContains],
	scriptingType: "none"
}, {	
	number: "20130519-110000",
	year: 2013,
	month: 5,
	day: 19,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130519-110000)! This update resolves 676: #UserPatch [Core Bug] Hero units are improperly double-click selected together with similar looking units. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. Thanks to randomdude for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130518-140000",
	year: 2013,
	month: 5,
	day: 18,
	version: 1.3,
	notes: "UserPatch v1.3 is pending release (20130518-140000)! This update resolves 671: #UserPatch [Core Bug] Resources may not be released after failing to load an incompatible saved game, 672: #UserPatch [Core Bug] Building foundation clearing reads uninitialized memory resulting in an out-of-sync, 673: #UserPatch [AI Behavior] Deer and livestock must always be targetable by the AI from the first pass, 674: #UserPatch [AI Scripting] AIs must be able to directly execute garrison, delete, and attack-ground, and 675: #UserPatch [Core Bug] The multiple building queue toggle button fails to lock when set via CLI parameter.</p><p>The new oos fix (the game reads uninitialized memory when a builder moves units off a building foundation in order to clear the land for construction = may oos at random in v1.0c and v1.2) will necessarily break compatibility with v1.2. It's unfortunate that we didn't find this earlier lol. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested.</p><p>Thanks to LightTree, Grok, marathon, fen, ER, II2N, and offwo for reports and feedback!",
	itemsAffected: [cUpTargetObjects, cUpTargetPoint],
	scriptingType: "ai"
}, {	
	number: "20130513-140000",
	year: 2013,
	month: 5,
	day: 13,
	version: 1.2,
	notes: "UserPatch Final v1.2 has been updated to 20130513-140000! This update resolves 670: #UserPatch [Core Bug] The game may crash if an AI uses direct targeting under certain conditions. If a target-objects call sent 128 or more units against a single target, it would crash. Thanks to II2N for the report! This release maintains full compatibility with the final v1.2.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130501-140000",
	year: 2013,
	month: 5,
	day: 1,
	version: 1.2,
	notes: "UserPatch Final v1.2 has been updated to 20130501-140000! This update resolves 669: #UserPatch [Core Bug] The garrison validation handler may redirect to an invalid memory address. Another stability fix lol. Thanks to Grok and LightTree for the report! This release maintains full compatibility with the final v1.2.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130426-000000",
	year: 2013,
	month: 4,
	day: 26,
	version: 1.2,
	notes: "UserPatch Final v1.2 has been updated to 20130426-000000! This update resolves 668: #UserPatch [Core Bug] The find-remote command for AIs may corrupt the fpu stack during processing. Just a stability fix lol. This release maintains full compatibility with the final v1.2.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130422-163000",
	year: 2013,
	month: 4,
	day: 22,
	version: 1.2,
	notes: "UserPatch Final v1.2 has been updated to 20130422-163000! This update resolves 666: #UserPatch [Request] Enable DPI awareness for the update installer window and controls, and 667: #UserPatch [Core Bug] The filter-distance action may perform improperly under certain conditions. Thanks to StepS for the DPI report on twitter, and II2N for finding the issue with distances >= 128. This release maintains full compatibility with the final v1.2.",
	itemsAffected: [cUpFilterDistance],
	scriptingType: "none"
}, {	
	number: "20130415-090000",
	year: 2013,
	month: 4,
	day: 15,
	version: 1.2,
	notes: "UserPatch Final v1.2 has been updated to 20130415-090000! This update resolves 665: #UserPatch [Request] Make a few code changes in order to improve multiplayer synchronization. Just a few stability improvements. This release maintains full compatibility with the final v1.2.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130412-022000",
	year: 2013,
	month: 4,
	day: 12,
	version: 1.2,
	notes: "UserPatch Final v1.2 has been updated to 20130412-022000! This update resolves 664: #UserPatch [Core Bug] Recorded games may fail to start at the setup screen under certain circumstances. This is a critically important update to spread. It retains full compatibility with the final v1.2. Please redownload if you got an earlier version! Thanks to Rabadai for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130409-210000",
	year: 2013,
	month: 4,
	day: 9,
	version: 1.2,
	notes: "UserPatch Final v1.2 has been updated to 20130409-210000! This update resolves 662: #UserPatch [Core Bug] Extended text strings entered into the in-game chat log may crash the game, and 663: #UserPatch [Request] Allow browsing through folders on the Saved and Recorded Games screen. The first causes crashes for german localizations on the 6th scenario of the William Wallace campaign (and other places). Thanks to SCNElite_Paladin at aoczone for the folder idea! This update retains full compatibility with the final v1.2.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130405-200000",
	year: 2013,
	month: 4,
	day: 5,
	version: 1.2,
	notes: "UserPatch Final v1.2 has been updated to 20130405-200000! This update resolves 660: #UserPatch [AI Scripting] Provide defconsts for extended strategic number math operators, and 661: #UserPatch [Scenario Design] Moving an object during free object placement creates a duplicate object. Thanks to LightTree for finding 660, when testing Lightning from Alevo (I broke it lol)! Thanks for using those extended mathOps, Alevo! This update will not break recs, saves, or multiplayer, and is 100% compatible with the previous release of v1.2.",
	itemsAffected: [pMathOp],
	scriptingType: "ai"
}, {	
	number: "20130330-020000",
	year: 2013,
	month: 3,
	day: 30,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update makes a slight update to the readme to show a picture of SetupAoC.exe in the game folder for people using the alternate installation method. I think this is it lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130328-200000",
	year: 2013,
	month: 3,
	day: 28,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 659: #UserPatch [AI Scripting] New actions are required to better manage the direct unit filtering system. With this release, 3 new commands are available: up-reset-filters (reset all filters to -1 and clear search indices in one command; up-reset-search is still needed to clear search results); up-filter-distance and up-filter-garrison, which do the same thing as up-filter-range, but allow for \"typeOp\" to provide goals, etc. Please see the reference for details. In addition, mines and forage should now be searchable for gaia using up-find-remote, however this may be computationally expensive, so I don't recommend it, especially later on. Thanks to Rubberman, II2N, Archon, and ER for feedback! To get this non-public release, please click here.",
	itemsAffected: [cUpResetFilters, cUpFilterDistance, cUpFilterGarrison, cUpFindRemote],
	scriptingType: "ai"
}, {	
	number: "20130327-200000",
	year: 2013,
	month: 3,
	day: 27,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update fixes the documentation for up-get-search-state to show \"out\" instead of \"in\" for the parameter. Thanks to Archon for reminding me! To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130327-010000",
	year: 2013,
	month: 3,
	day: 27,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update renames the \"Alternate interface style\" as the \"Widescreen interface style\" and sets the checkbox on by default. Thanks to LightTree for feedback! To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130327-230000",
	year: 2013,
	month: 3,
	day: 27,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 658: #UserPatch [Core Bug] AI shepherds may idle indefinitely when attempting to target allied livestock. Thanks to marathon and LightTree for the report! To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130326-205600",
	year: 2013,
	month: 3,
	day: 26,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update removes the Bombard tower siege bonus and Debugging modifications features from the restricted features section of the installer. To avoid gameplay changes and avoid balance flame wars (lol), this change was required. I'm sorry for any trouble. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130326-201600",
	year: 2013,
	month: 3,
	day: 26,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update makes a few adjustments to the migration/retask fix. It might help to reduce a few operations. Thanks for finding that, RULER! To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130325-160000",
	year: 2013,
	month: 3,
	day: 25,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 657: #UserPatch [Request] Allow players to select Migration and Crater Lake for single player games. New AIs can try these, so we can leave it up to each player now. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130325-010000",
	year: 2013,
	month: 3,
	day: 25,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves absolutely nothing, once again lol. It only reorders some restricted features on the installer window and adjusts some Readme stuff. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130324-150000",
	year: 2013,
	month: 3,
	day: 24,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 656: #UserPatch [Scenario Design] The game may crash when map-copying large objects like mountains in the editor. Some additional stability for the editor lol. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130324-000000",
	year: 2013,
	month: 3,
	day: 24,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 655: #UserPatch [Request] Allow for passing a command line parameter to the installer to preselect features. You can now pass a parameter to SetupAoC.exe to preset the checkboxes on the installer. This can allow for customized silent installations, as well. For example, \"SetupAoC.exe -i -f:11101\" will install v1.2 with all checkboxes disabled except for checkboxes 1, 2, 3, and 5 (core update, save filename, windowed mode, and alternate interface). There are 20 checkboxes in total, when including the restricted features list, and anything unspecified is set to disabled. This might be useful for automated, silent installations for mod and expansion distributors, I think. Thanks to danielpr for the idea! To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130323-160000",
	year: 2013,
	month: 3,
	day: 23,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 654: #UserPatch [Core Bug] AI villagers fail to change dropsites after selecting one that is unreachable. Thanks to II2N for the report! To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130323-130000",
	year: 2013,
	month: 3,
	day: 23,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update includes a few adjustments to existing fixes and stuff. Nothing specific, just general optimizations lol. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130323-020000",
	year: 2013,
	month: 3,
	day: 23,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves absolutely nothing lol. It includes an updated Readme with an additional FAQ and other documentation fixes, though. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130321-200000",
	year: 2013,
	month: 3,
	day: 21,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 653: #UserPatch [Core Bug] The game may crash if object placement occurs over the map boundary. Might as well fix that one, too lol. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130321-190000",
	year: 2013,
	month: 3,
	day: 21,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 652: #UserPatch [Scenario Design] Enable free object placement in the scenario editor if Ctrl+S is pressed twice. Just a minor change to an existing fix. Thanks to HockeySam18 at AoKH for feedback! To get this non-public release, please click here. Finaldeath, yes, you should be able to adjust the stance of any unit, I think lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130321-140000",
	year: 2013,
	month: 3,
	day: 21,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 650: #UserPatch [Core Bug] The Team Random option fails to randomize civ distribution within teams, and 651: #UserPatch [Request] The Random civ id should be shifted from 30 to 45 to allow more room for new civs. Thanks to LightTree, marathon, ryshep, II2N, and ER for feedback! To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130320-140000",
	year: 2013,
	month: 3,
	day: 20,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 649: #UserPatch [Core Bug] AI monks are unable to attack by default with the defensive targeting system. Unlike all non-hero units, monks are internally created on defensive attack stance, which prevented them from attacking after a recent patrol fix. Now, TSA works for all aggressive military and monks that are at least defensive stance. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130319-080000",
	year: 2013,
	month: 3,
	day: 19,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 648: #UserPatch [Request] The installer should setup the firewall if the port forwarding feature is enabled. I hope this eliminates a lot of the issues people have with setting up multiplayer games. It will enable both dplaysvr.exe and age2_x1.exe (or an expansion exe), in the Windows Firewall. To get this non-public release, please click here.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130319-040000",
	year: 2013,
	month: 3,
	day: 19,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 646: #UserPatch [Core Bug] The alternate interface fails to refresh the advanced button set when toggled, and 647: #UserPatch [AI Scripting] New facts and actions are required for AIs to check the terrain on the map. With this release, the rec version has again increased from 9.6 to 9.8. The following commands have been added for scripting: up-set-target-by-id, up-point-terrain, and up-get-point-terrain. Please see the reference for details. Thanks to tilmur for the report!",
	itemsAffected: [cUpSetTargetById, cUpPointTerrain, cUpGetPointTerrain],
	scriptingType: "ai"
}, {	
	number: "20130318-160000",
	year: 2013,
	month: 3,
	day: 18,
	version: 1.2,
	notes: "UserPatch Final v1.2 is pending release! This update resolves 644: #UserPatch [Request] Add a button to the playlist manager for when drag-drop is blocked by UIPI, and 645: #UserPatch [Request] Allow for the selection of a maximum advancement age on the game setup screen. Here's what the max-age feature looks like. The \"Dark - Imperial\" is the whole game, \"Dark - Castle\" blocks the Imperial Age tech, \"Dark - Feudal\" blocks the Castle Age tech, and \"Dark Age\" is only the Dark Age, blocking the Feudal Age tech, etc. Just like there are #load symbols for DARK-AGE-START, etc., these indicate the end age: DARK-AGE-END, FEUDAL-AGE-END, CASTLE-AGE-END, and IMPERIAL-AGE-END. Note that the #load symbols UP-AVAILABLE, UP-VERSION-1.1, and UP-VERSION-1.2 are all defined.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20130316-025738",
	year: 2013,
	month: 3,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20130316-025738 has been released! This update resolves 643: #UserPatch [Request] Save the persistent multiple building queue setting when changed from single player mode. Now, if you go to the single player game setup screen and change the MQ/SQ state, it will update the persistent registry setting, so if you close the game and reopen, it will remember it. Changing it from mp mode will not update the persistent value in the registry, so you don't lose your original state when adjusting for a host with a different MBQ setting.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130316-015209",
	year: 2013,
	month: 3,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20130316-015209 has been released! This update resolves 642: #UserPatch [Core Bug] The Zone section of the main menu screen has misaligned interface controls. Just a tiny continuation from the earlier UI element repositioning stuff lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130315-192644",
	year: 2013,
	month: 3,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20130315-192644 has been released! This update resolves 641: #UserPatch [Core Bug] The clip buffer for the alternate interface may not be released during shutdown. Just a minor memory management issue lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130313-195436",
	year: 2013,
	month: 3,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20130313-195436 has been released! This update resolves 640: #UserPatch [Core Bug] Market display text may fail to redraw with the alternate interface style. I think it should be proper now. Thanks to tilmur for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130312-154558",
	year: 2013,
	month: 3,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20130312-154558 has been released! This update resolves 639: #UserPatch [AI Scripting] A new command is required for AIs to find visible flares from any player. The up-find-player-flare command can now be used to get the position of any visible flare from any player. The up-find-flare command essentially remaps to (up-find-player-flare any-ally GOAL). The any-ally value will not get your own flares, so you'll need to check my-player-number for that case. Thanks to Archon for feedback!",
	itemsAffected: [cUpFindPlayerFlare],
	scriptingType: "ai"
}, {	
	number: "20130307-095725",
	year: 2013,
	month: 3,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20130307-095725 has been released! This update resolves 635: #UserPatch [Request] Enable single-player mode to operate at 60fps instead of 20fps by default. With this change, AIs get 3x as many updates per second, as in 1.0c, it is 20fps. This has no effect on multiplayer games, where the framerate is autosmoothed based on lag, etc. To detect if 60fps mode is active, check #load-if-defined UP-PROCESS-60FPS. You can either jump-rule the entire script except every 3rd pass, or ensure that the rules that perform turn count math adjust for 3x as many script passes. A restricted feature (press F5 on the installer) exists to restore the 1.0c 20fps.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130307-054738",
	year: 2013,
	month: 3,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20130307-054738 has been released! This update resolves 634: #UserPatch [AI Scripting] The direct unit targeting commands should allow guard, follow, and stop actions. In addition, the first parameter of up-target-objects has been activated: set it to 1 to make the command only target the object set by up-set-target-object. I think we're done now, for real this time lol.",
	itemsAffected: [cUpTargetObjects],
	scriptingType: "ai"
}, {	
	number: "20130306-124453",
	year: 2013,
	month: 3,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20130306-124453 has been released! This update resolves 633: #UserPatch [AI Scripting] The find-remote command should not restrict gaia checks by sighted time. There is also now a sn-livestock-defend-priority that you can set to 1, just like sn-gold-defend-priority, sn-stone-defend-priority, sn-forage-defend-priority, etc., in order to get them into your targetable sighted units list. This means that find-remote will be able to see them. Thanks again to II2N for the report!",
	itemsAffected: [cUpFindRemote, snLivestockDefendPriority],
	scriptingType: "ai"
}, {	
	number: "20130306-105146",
	year: 2013,
	month: 3,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20130306-105146 has been released! This update resolves 632: #UserPatch [Core Bug] The find-remote command for AIs may crash the game under certain conditions. Epic fail crash lol. Thanks to II2N for the test scenario, test AI, and report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130306-040002",
	year: 2013,
	month: 3,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20130306-040002 has been released! This update resolves 631: #UserPatch [Request] Provide a way to install for game expansions specified by an xml manifest. Now, SetupAoC.exe accepts 2 new command line parameters: -l to create a shortcut link, and -g to specify the expansion to operate on and save the resulting exe for use by the expansion, without changing the original. For example, if the Age of Chivalry installer runs SetupAoC.exe -g:aoc, the result will be a separate aoc.exe inside the age2_x1 folder. This aoc.exe executable will always start Age of Chivalry by default, unless the associated Games/aoc.xml is unavailable.</p><p>The advantage here is that people will not have to change their Conquerors executable, different mods can still co-exist without conflicting with each other, and GR, etc. work more easily. For expansion developers, if you use the -g:NAME to have it create a separate exe, you must always ensure that it's called with that parameter for future operations, including uninstall (SetupAoC.exe -g:aoc -u -l for a silent uninstall, which simply removes aoc.exe and the shortcut created by the -l parameter, if it exists). If you have a separate uninstaller, then there's no issue: you can just directly delete the new executable, like aoc.exe.</p><p>Oh, forgot to mention that the installer's music playlist creator will also operate on the specified expansion's music.m3u.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130305-140519",
	year: 2013,
	month: 3,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20130305-140519 has been released! This update resolves 630: #UserPatch [AI Scripting] Changing direct unit search filters should reset the search index offsets. Now, filter-include, filter-exclude, and filter-range will automatically reset the local and remote search index offsets, which is equivalent to (up-reset-search 1 0 1 0), to ensure that the lists are checked from the beginning with the new filter state, for subsequent find commands. A similar index offset reset occurs if you find-local or find-remote with a different type/class from last time, or the focus-player has changed for find-remote. Thanks to II2N for the report!",
	itemsAffected: [cUpFilterInclude, cUpFilterExclude, cUpFilterRange, cUpFindLocal, cUpFindRemote],
	scriptingType: "ai"
}, {	
	number: "20130305-130846",
	year: 2013,
	month: 3,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20130305-130846 has been released! This update resolves 629: #UserPatch [Core Bug] The installer should prompt before removing an existing music playlist. Just another little tweak for future usability lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130305-082000",
	year: 2013,
	month: 3,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20130305-082000 has been released! This update resolves 628: #UserPatch [Request] Provide a way to create a background music playlist through the installer. Hopefully, this makes it more reliable for people to use.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130305-071532",
	year: 2013,
	month: 3,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20130305-071532 has been released! This update resolves 627: #UserPatch [Core Bug] The defensive targeting system for AIs may conflict with formations and groups. The gliding was a result lol. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130304-231141",
	year: 2013,
	month: 3,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20130304-231141 has been released! This update resolves 626: #UserPatch [AI Behavior] Deep sea fish should initially have near absolute priority over shore fish. We can't really control all future retasking as the game passes it on to the human fish retask controller, but we can try to ensure that all AI controlled retasking events prioritize deep sea fish over shore fish where possible. Thanks again to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130304-222133",
	year: 2013,
	month: 3,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20130304-222133 has been released! This update resolves 625: #UserPatch [Core Bug] Selected trade buildings must show an estimated gold return despite pathing. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130304-011922",
	year: 2013,
	month: 3,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20130304-011922 has been released! This update resolves 624: #UserPatch [Core Bug] AI fishing ships fail to path to deep sea fish through shallows except great marlin. In 1.0c, due to lol'ed terrain restrictions, deep sea fish cannot be reached by fishing ships if they are on the other side of shallows. The great marlin fish is the only exception. Thanks to LightTree for the rec and report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130303-170800",
	year: 2013,
	month: 3,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20130303-170800 has been released! This update resolves 623: #UserPatch [AI Scripting] A new fact is required for AIs to check the number of idle units. With the new up-idle-unit-count, you can check the number of idle villagers, ships, etc. II2N reported that idle villager explorers could lead to epic lag if left unchecked, so this command will allow AIs to watch for this problem. Please note that, since idle state data is not cached, this command loops and evaluates the activity of all units of the specified type and should not be flooded each turn without other conditions above it in the defrule to limit it.</p><p>It's important to note that it's normal for villagers to be temporarily idle after finishing a task (especially in mp), so it might be best to check for long-term idling over several turns before taking any action. Thanks to II2N for the report!",
	itemsAffected: [cUpIdleUnitCount],
	scriptingType: "ai"
}, {	
	number: "20130303-164035",
	year: 2013,
	month: 3,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20130303-164035 has been released! This update resolves 622: #UserPatch [AI Scripting] The object-data speed should be shifted into a more useful range of values. Since speed gets rounded, it would probably be 0-4 for all units, making it hard to compare. This multiplies it by 100, so the range after rounding is more useful.",
	itemsAffected: [pObjectData],
	scriptingType: "ai"
}, {	
	number: "20130302-152420",
	year: 2013,
	month: 3,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20130302-152420 has been released! This update resolves 621: #UserPatch [AI Scripting] The up-object-data fact for AIs may fail to perform a valid comparison. A little oversight there lol. Sorry about that!",
	itemsAffected: [cUpObjectData],
	scriptingType: "ai"
}, {	
	number: "20130302-150016",
	year: 2013,
	month: 3,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20130302-150016 has been released! This update resolves 620: #UserPatch [AI Scripting] New facts and actions are required to manipulate selected objects. Added with this release are 2 commands for working with the object set by up-set-target-object: up-get-object-data (action) and up-object-data (fact). In addition, up-set-target-object, up-find-local, and up-find-remote now work as either a fact or an action in a rule. If set-target-object cannot set the specified index, it returns false as a fact. If find-local or find-remote get 0 results from the search, they return false. I think that should be it for the direct unit task tweaks.</p><p>About the filter commands, they do nothing by themselves and only set state information for use by future find-* commands. Oh, and the formation and stance parameters for up-target-objects and up-target-point now work ",
	itemsAffected: [cUpGetObjectData, cUpObjectData, cUpSetTargetObject, cUpFindLocal, cUpFindRemote, cUpTargetObjects, cUpTargetPoint],
	scriptingType: "ai"
}, {	
	number: "20130301-144254",
	year: 2013,
	month: 3,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20130301-144254 has been released! This update resolves 619: #UserPatch [Core Bug] The find-local and find-remote commands may crash if the list reaches the end. I forgot to mention that there's also a up-set-target-object for use with the find commands, up-get-point and position-object lol. Thanks to II2N for the report!",
	itemsAffected: [cUpFindLocal, cUpFindRemote, cUpSetTargetObject, cUpGetPoint, pPositionType],
	scriptingType: "ai"
}, {	
	number: "20130301-134643",
	year: 2013,
	month: 3,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20130301-134643 has been released! This update resolves 618: #UserPatch [AI Scripting] The target-objects command should separate the selection into smaller groups. Now, both target-objects and target-point will work properly with action-default, action-move, and action-patrol. They will aim to separate the units selected with up-find-local into groups of 20 units or less before sending them against the remote target(s). Do not use the action-default or action-move commands if the defensive targeting system is locked on a target, or units will become \"confused\" and not respond for a few moments. Either bring the town size under enemy-buildings-in-town or set sn-disable-defend-groups on. The action-patrol command seems to work regardless.</p><p>This update also adds a new action, up-get-search-state, so you can see how many units are in both local and remote result sets and how many were added by the last search action for each. In addition, the up-filter-include final parameter now handles all mainland/island checks, accepting -1 to ignore, 0 to find non-mainland, or 1 to find mainland objects. The final parameter of filter-exclude now accepts a class id (building class 903, etc.) to reject a certain class during a search. I think that's it lol.</p><p>Just to clarify up-find-remote, for self/ally objects, it can find them directly at all times. For non-ally objects, if the object has been sighted and is either a building or has been seen/reseen within the past 5 seconds, it can be found. This should allow the AI to target units that are clearly visible without cheating, and target sighted enemy buildings in the fog.</p><p>One other note: although the new targeting and find commands aren't as heavy as attack-now, like any command that directly manipulates units like retreat-now, guard-unit, etc., please try not to flood them ",
	itemsAffected: [cUpTargetObjects, cUpTargetPoint, cUpGetSearchState, cUpFilterInclude, cUpFilterExclude, cUpFindRemote],
	scriptingType: "ai"
}, {	
	number: "20130228-192142",
	year: 2013,
	month: 2,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20130228-192142 has been released! This update resolves 48: #UserPatch [AI Scripting] New actions are required for directing units. Some adjustments and tweaks will still be necessary in the coming days, but the general setup is complete. In particular, the handling of local search results greater than 40 may need to be changed, along with some quirks with up-target-objects (not finished yet). This release adds the following commands: up-delete-objects, up-find-local, up-find-remote, up-can-search, up-reset-search, up-filter-include, up-filter-exclude, up-filter-range, up-target-point, and up-target-objects.</p><p>Please see the reference for more detail! With this release, the UP moves from Beta to RC.",
	itemsAffected: [cUpDeleteObjects, cUpFindLocal, cUpFindRemote, cUpCanSearch, cUpResetSearch, cUpFilterInclude, cUpFilterExclude, cUpFilterRange, cUpTargetPoint, cUpTargetObjects],
	scriptingType: "ai"
}, {	
	number: "20130227-133733",
	year: 2013,
	month: 2,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20130227-133733 has been released! This update resolves 617: #UserPatch [AI Scripting] Set UP-SCENARIO-GAME instead of SCENARIO-MAP to maintain compatibility. Change of plans lol. Now, the new code will define UP-SCENARIO-GAME to avoid breaking compatibility with AIs that expect only 1 type of map constant per game. Sorry!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20130227-131951",
	year: 2013,
	month: 2,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20130227-131951 has been released! This update resolves 616: #UserPatch [AI Scripting] The SCENARIO-MAP symbol should always be defined for scenario games. Now, the SCENARIO-MAP #load symbol will always be defined, even if the scenario designer sets a map to Arabia, etc. If there was a map type set for the scenario, it will be defined in addition to SCENARIO-MAP. Hopefully, this allows AIs to avoid guessing when #loading rules. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20130221-141931",
	year: 2013,
	month: 2,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20130221-141931 has been released! This update resolves 615: #UserPatch [Core Bug] The compatibility build for Win2K and earlier may crash under certain conditions. It was a strange little crash that happened if certain checkboxes were highlighted when pressing F5 to get the restricted features list lol. This set of installers may also now work with the weird 6.6MB age2_x1.exe from certain DVD distributions, but I would need access to that exe to test it directly to be sure.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130220-123414",
	year: 2013,
	month: 2,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20130220-123414 has been released! This update resolves 614: #UserPatch [Request] The installer should not fail to display during rapid window transitions. Thanks to StepS on Twitter for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130220-042155",
	year: 2013,
	month: 2,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20130220-042155 has been released! This update resolves 613: #UserPatch [Core Bug] The up-send-flare command for AIs sends to all players instead of only allies. Thanks to II2N for the report!",
	itemsAffected: [cUpSendFlare],
	scriptingType: "ai"
}, {	
	number: "20130220-023101",
	year: 2013,
	month: 2,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20130220-023101 has been released! This update resolves 611: #UserPatch [Core Bug] Computer player names may be blank after playing several games without closing, and 612: #UserPatch [Request] Add a restricted feature to allow team bonuses to be processed before map generation. The second thing moves the team bonus processing before map generation. ES ordered it like this: civ bonuses and tech tree, map generation, team bonus techs. I think it makes little sense this way (and bugged the Slavs in AoFE), and it would have been nice to include the fix in the core update.</p><p>However, the reason it exists as a restricted feature is because changing this would impact gameplay for a relatively rare case: if a game starts with free RMS farms, like on Fortress, a player with Chinese or an ally of this player would get the +45F team bonus on these free farms. I'm not sure if many people even realized that this bonus didn't affect the free farms lol. In any case, we can't change this kind of thing without some kind of consensus that it's truly a game bug.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130219-144918",
	year: 2013,
	month: 2,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20130219-144918 has been released! This update resolves 610: #UserPatch [Request] The website link for all expansions should always be read from language id 9542. Just a little update for expansions, so they can avoid competing for the \"Zone\" registry entry. With this, an expansion with support for multiple languages can even set a different url for each.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130218-101537",
	year: 2013,
	month: 2,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20130218-101537 has been released! This update resolves 609: #UserPatch [Core Bug] The place-control and place-point AI systems may expand their zones too rapidly. It will now expand the placement-zone-size per building every 7 \"internal\" passes. These internal passes usually happen ~10 times for each AI script pass. Thanks to II2N and ryshep for the report!",
	itemsAffected: [cUpBuild, pPlacementType],
	scriptingType: "ai"
}, {	
	number: "20130218-015735",
	year: 2013,
	month: 2,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20130218-015735 has been released! This update resolves 608: #UserPatch [Request] Enable the dual network resend system to further mitigate lag and hangs. Thanks to LightTree, ryshep, and jw for their help in testing this! However, if anyone plays on GR, please test this version to see if it is still able to avoid the vote panel break.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130217-201706",
	year: 2013,
	month: 2,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20130217-201706 has been released! This update resolves 607: #UserPatch [Core Bug] Bombard tower availability may be incorrectly displayed on the tech tree. Thanks to Elendil_1500 at aoczone for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130214-163556",
	year: 2013,
	month: 2,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20130214-163556 has been released! This update resolves 606: #UserPatch [AI Scripting] New facts and actions are required for AIs to perform point manipulation. Here are all of the commands that now exist for AIs to work with points: up-get-point, up-copy-point, up-add-point, up-lerp-percent, up-lerp-tiles, up-cross-tiles, up-get-point-distance, up-set-target-point, up-find-flare, up-send-flare, and a fact, up-point-distance. Please see the reference for all of the details!",
	itemsAffected: [cUpGetPoint, cUpCopyPoint, cUpAddPoint, cUpLerpPercent, cUpLerpTiles, cUpCrossTiles, cUpGetPointDistance, cUpSetTargetPoint, cUpFindFlare, cUpSendFlare, cUpPointDistance],
	scriptingType: "ai"
}, {	
	number: "20130213-140605",
	year: 2013,
	month: 2,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20130213-140605 has been released! This update resolves 605: #UserPatch [Core Bug] Selecting the Custom maps list on the game setup screen may crash the game. Thanks to mm/avian from the AoFE debug chat for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130212-202238",
	year: 2013,
	month: 2,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20130212-202238 has been released! This update resolves 604: #UserPatch [Core Bug] The IMediaEventEx interface is never released during application shutdown. The interface would be improperly bypassed during shutdown.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130212-104828",
	year: 2013,
	month: 2,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20130212-104828 has been released! This update resolves 603: #UserPatch [Core Bug] The network resend system offset may prevent rapid request handling. Thanks to LightTree for all of the testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130211-190939",
	year: 2013,
	month: 2,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20130211-190939 has been released! This update resolves 602: #UserPatch [Core Bug] The new network resend system should process packets in larger batches. Thanks to LightTree, Grok, SH, and offwo for testing and feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130211-122836",
	year: 2013,
	month: 2,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20130211-122836 has been released! This update resolves 601: #UserPatch [Request] A restricted feature should be added to set the default MBQ state. With this, the MBQ state will be forced on and the toggle button will be removed. Thanks to Cysion, BugA, Prophet, LightTree, II2N, and ryshep for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130211-112107",
	year: 2013,
	month: 2,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20130211-112107 has been released! This update resolves 600: #UserPatch [Request] Add an SQ/MQ button to allow players to change their multiple building queue state. Now, to avoid players having to \"GB\" in a multiplayer game because someone came with a different MBQ setting, the problem player can simply click the button next to the IP button to toggle their MBQ state. Thanks to LightTree and ryshep for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130211-093437",
	year: 2013,
	month: 2,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20130211-093437 has been released! This update resolves 599: #UserPatch [Core Bug] Extended terrain id 42 is out of bounds and should be disabled. Now, terrain id 41 is include in the core update, and the Extended terrain lists feature has been removed from the restricted features list. Thanks again to Keisari Tapsa for the report!",
	itemsAffected: [pTerrain],
	scriptingType: ""
}, {	
	number: "20130211-085833",
	year: 2013,
	month: 2,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20130211-085833 has been released! This update resolves 598: #UserPatch [Request] Read language ids 10679 and 10680 for extended terrain ids 41 and 42. These ids were hard coded to Unknown before, so now people can rename them as needed when they install the restricted \"Extended terrain lists\" feature. Thanks to Keisari Tapsa for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130210-113202",
	year: 2013,
	month: 2,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20130210-113202 has been released! This update resolves 596: #UserPatch [Core Bug] The multiplayer AI status may be shown improperly under some conditions, and 597: #UserPatch [Core Bug] Changing certain settings in single player mode may unset the player 1 AI. The first bug was just a little issue with the CD/AI note next to each player on the multiplayer game setup screen. That second bug was definitely a problem for usability lol. Thanks to II2N and fen for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130209-170539",
	year: 2013,
	month: 2,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20130209-170539 has been released! This update resolves 595: #UserPatch [Core Bug] The new network system may delay too long before handling a resend request. It should now be able to hold together a game with increased packet loss.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130209-130158",
	year: 2013,
	month: 2,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20130209-130158 has been released! This update resolves 594: #UserPatch [Core Bug] Pre-game packets are improperly excluded from the packet resend system. Thanks to LightTree, SH, and offwo for finding this!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130208-013400",
	year: 2013,
	month: 2,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20130208-013400 has been released! This update resolves 593: #UserPatch [Request] Update the save and rec version from 9.4 to 9.5 to block broken file loading. When 1.1 is finalized, it will probably change again to 9.6. For now, this should particularly help to maintain reliability for people using Age of Chivalry and Forgotten Empires with 1.1.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130207-201750",
	year: 2013,
	month: 2,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20130207-201750 has been released! This update resolves 592: #UserPatch [Core Bug] Garrison action event timers for AIs may not always be synchronized. Just a little thing for rare cases lol. Ruler, I'll be adding a few more point-related commands to help with distance and positioning soon.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130207-052410",
	year: 2013,
	month: 2,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20130207-052410 has been released! This update fixes an issue with the previous fix, relating to the lack of an ungarrison timer after the boar lurer garrisons into the town center. It's good for real this time. No, really ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130207-045536",
	year: 2013,
	month: 2,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20130207-045536 has been released! This update resolves 591: #UserPatch [AI Behavior] AI boar lurers should still attempt to garrison when weak and not firing. I think it should be all proper now lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130207-032525",
	year: 2013,
	month: 2,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20130207-032525 has been released! This update resolves 590: #UserPatch [Core Bug] AI boar lurers may be retasked as support hunters under certain conditions. I hope boar hunting is now reliable and lurers will no longer turn to shoot at their boar before returning to the TC. Thanks to II2N for the great report, scenario, and test AI!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130207-014127",
	year: 2013,
	month: 2,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20130207-014127 has been released! This update resolves 589: #UserPatch [AI Scripting] AIs must be able to target building placement using specific map coordinates. The up-build command now accepts a new place-point parameter. The building will be placed with the focus on the point specified by up-set-target-point, which accepts a point goal pair. The up-get-point and up-send-scout commands can reference the up-set-target-point position with \"position-point\". With up-find-flare, you can get a specific point on the map from a human, send a scout there, and then use place-point to build there.</p><p>The value of sn-placement-zone-size, stored with each build command, determines the initial zone size, and like place-control, the zone will expand with each turn that fails. The target point can be changed in later script passes to shift the focus position. The place-point system does not rely on up-set-placement-data, sn-placement-fail-delta, or sn-placement-to-center.",
	itemsAffected: [cUpBuild, cUpGetPoint, cUpSendScout, cUpSetTargetPoint, cUpFindFlare, pPlacementType, pPositionType, snPlacementZoneSize],
	scriptingType: "ai"
}, {	
	number: "20130206-231921",
	year: 2013,
	month: 2,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20130206-231921 has been released! This update resolves 588: #UserPatch [Core Bug] AI boar lurers may not retreat to the town center under certain conditions. Thanks to II2N for the report! This is a rerelease from a previous bugged update.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130205-190452",
	year: 2013,
	month: 2,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20130205-190452 has been released! This update resolves 587: #UserPatch [Core Bug] A synchronization failure may cause a crash during an AI garrison event. Thanks to LightTree, SH, Grok, and marathon for triggering the crash. Sorry!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130204-193751",
	year: 2013,
	month: 2,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20130204-193751 has been released! This update resolves 31: #UserPatch [Military] AIs cannot properly defend wonders, monasteries, and monuments, and 586: #UserPatch [Core Bug] The AI group garrison control system may read into uninitialized memory. The direct unit control fix is almost done, but needs documentation and some other things. The up-send-scout command now accepts all 13 values from up-get-point's PositionType enumeration instead of the ScoutMethod enumeration. No script changes are necessary, though. Thanks to Archon for the report and rec for the group garrison bug!",
	itemsAffected: [cUpSendScout],
	scriptingType: "ai"
}, {	
	number: "20130203-204133",
	year: 2013,
	month: 2,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20130203-204133 has been released! This update resolves 585: #UserPatch [AI Scripting] New actions are required for AIs to read allied flare positions and send flares. As part of the direct unit targeting system, the following commands have been added in this release: up-find-flare, up-send-flare, up-get-point, up-copy-point, up-add-point, up-setup-search, and up-reset-search. Other than the last 2, all of these commands use point goal pairs, which like the cost commands require extended goal ids from 41 to 510 to store the (x,y). Please see the reference for details.</p><p>The up-setup-search and up-reset-search commands have little use until the rest of the targeting commands are done.",
	itemsAffected: [cUpFindFlare, cUpSendFlare, cUpGetPoint, cUpCopyPoint, cUpAddPoint, cUpResetSearch],
	scriptingType: "ai"
}, {	
	number: "20130202-114621",
	year: 2013,
	month: 2,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20130202-114621 has been released! This update just cleans up the multiplayer direct-ip buttons and stuff, and aligns a few buttons as BugA mentioned above. The buttons were not reordered, though, as that would require further discussion on maybe 1.1a. Just some little touches for future usability as we get closer to the finish lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130202-005329",
	year: 2013,
	month: 2,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20130202-005329 has been released! This update resolves 584: #UserPatch [Request] Adjust various interface inconsistencies, font sizes, and localization issues. The font sizes for the fencrazyrandom button and reset button have been reduced to provide more space for non-english localizations, and a few interface controls have been moved a few pixels here and there. I hope the interface generally seems more proper now, but some localizations may need to abbreviate their \"Reset\" translations to fit more comfortably inside the button region. This release also ensures that the resolution dropdown list \"auto-scrolls\" to show the currently selected resolution in the list upon first display.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130201-215423",
	year: 2013,
	month: 2,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20130201-215423 has been released! This update resolves 583: #UserPatch [Core Bug] The screen size and scroll speed option headers are inconsistently positioned. Just some very minor text adjustments lol. I saw that the Screen Size header text was positioned 4px to the left of Sound Volume, then noticed that Scroll Speed was also 3px to the right, Graphics Detail was a few pixels too low, and Player at the top was off, as well.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130130-103215",
	year: 2013,
	month: 1,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20130130-103215 has been released! This update resolves 582: #UserPatch [Core Bug] AI units on patrol should not ignore unpacked trebuchets as buildings. I think it should be all proper now lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130129-205625",
	year: 2013,
	month: 1,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20130129-205625 has been released! This update resolves 581: #UserPatch [Core Bug] AI units may freeze due to excessive retargeting against buildings during patrol. Thanks to kunyi for the report and LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130129-141011",
	year: 2013,
	month: 1,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20130129-141011 has been released! This update resolves 580: #UserPatch [Scenario Design] The random map generator seed width should be changed from 5 to 11 instead of 6. It was \"temporarily\" extended from 5 width to 6 width (just to add the negative sign) after the random map generator range went from \"0 to 32767\" to \"-2147483648 to 2147483647\". I forgot to update it to allow for typing the full Int32 width of 11 characters. Thanks to ryshep for the report!",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20130129-044032",
	year: 2013,
	month: 1,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20130129-044032 has been released! This update resolves 579: #UserPatch [Core Bug] Strategic commander detection should be opt-in with USESC to avoid alienware crashes. The NOSC command line parameter to opt-out of the \"microsoft strategic commander controller\" detection (I wonder if anyone even uses this today lol) has been replaced with USESC to opt-in. This should be a better default, I think, for the vast majority of players, and avoid crashing with alienware systems, I hope.</p><p>Incidentally, I think this means that, by default, DirectInput and dinput.dll will no longer be loaded by the game.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130127-112419",
	year: 2013,
	month: 1,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20130127-112419 has been released! This update resolves 578: #UserPatch [Core Bug] The AI forward builder transport system relies upon broken order list behavior. In 1.0c, the idle unit handler for AIs would send looping stop orders to all units in a forward builder group upon arrival. Fortunately for 1.0c, only 1 of these commands had a chance to execute due to the order list cache bug, so only 1 of the forward builders that arrived on a transport would be halted.</p><p>Since the order list cache fix allowed for these commands to execute as originally intended, all of them were being halted upon arrival. This fix eliminates the bug at its root, by removing the infinite stop loop for forward builders that arrive by transport. Forward building with transports should now be a lot more reliable. Thanks to Alevo for the report in the chat!",
	itemsAffected: [cUpBuild],
	scriptingType: "ai"
}, {	
	number: "20130127-005238",
	year: 2013,
	month: 1,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20130127-005238 has been released! This update resolves 576: #UserPatch [Core Bug] Palisade gates should be validated based on the stack unit id like standard gates, and 577: #UserPatch [Core Bug] Scenario editor fog is broken when moving units after generating a new or blank map. The palisade gate fix will require object ids 789, 793, 797, and 801 to be made visible in the scenario editor, and not 792, 796, 800, and 804. This brings it in line with how the standard gates are handled by the game. The AoFE dat files will likely need to be updated for this fix. The bug with the scenario editor fog has existed since 1.0c and was fixed for the future usability of the game: no one wants to spend 2 hours making a scenario, only to move a unit and have the entire area covered in a broken fog lol. I remember experiencing this bug in the past, as well. Not good times lol. Thanks to AoKH and TomYo689 for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130126-112914",
	year: 2013,
	month: 1,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20130126-112914 has been released! This update just includes a few optimizations for some functions. kunyi, it probably depends on the situation, but you can turn it on or off at any time. I haven't had much time to test it lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130123-205530",
	year: 2013,
	month: 1,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20130123-205530 has been released! This update resolves 575: #UserPatch [AI Scripting] The original sn-enable-patrol-attack capabilities should be restored for AIs. I just realized that this had been left out for the longest time. Set sn-enable-patrol-attack to 1 to enable the patrol-style local targeting system. When attacking a distant target, this causes units to retarget against nearby sighted units immediately instead of waiting until they are in proximity to the original target.</p><p>It isn't \"real\" patrol (that's maybe for 1.1a), but it's still quite scary, especially when used with TSA. In fact, it may be overpowered, so it probably shouldn't be enabled for any difficulty less than Hard (and maybe only against human enemies lol). It shouldn't add any special lag, as the \"real\" instant-transition patrol part that did lag is still gone.</p><p>I think it works best with ranged armies. Note, however, that it will not work with multi-unit groups until they are disbanded or arrive at their target. It will only work with 1-unit attack groups, attack-now, TSA, and local targeting.",
	itemsAffected: [snEnablePatrolAttack],
	scriptingType: "ai"
}, {	
	number: "20130122-181036",
	year: 2013,
	month: 1,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20130122-181036 has been released! This update resolves 574: #UserPatch [Core Bug] The game may crash if player colors are changed after a scenario is selected. The bug was caused by the AI player color extension fix, as the player looped over the auto-order "-" color. Thanks to ryshep for the report! (saw it reading upward lol)",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130122-164833",
	year: 2013,
	month: 1,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20130122-164833 has been released! This update resolves 573: #UserPatch [Core Bug] Players without 1000 pop cannot see extended caps if the host has set one. Now, if a player joins a game where the host has 1000 pop enabled and has selected like 650 pop, the client will show 650, so they aren't left unaware of the actual cap.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130121-125622",
	year: 2013,
	month: 1,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20130121-125622 has been released! This update resolves 572: #UserPatch [Core Bug] The ungarrison command for AIs improperly ejects relics from monasteries. It also fixes a related bug where a monk that is trained inside a monastery will not go for a relic after ungarrisoning. The worst part of that is that the monk inside locks onto the relic, preventing any other monk from going for it either until that monk is eliminated. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130118-215400",
	year: 2013,
	month: 1,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20130118-215400 has been released! This update resolves 571: #UserPatch [Core Bug] The multiple building queue feature operates inconsistently in multiplayer games. It would cause inconsistent queuing due to the execution delay in multiplayer games, so with 2 stables selected and shift+clicking to train knights 2 times, you may get 6:4 instead of 5:5 distribution between the 2 stables. Thanks to an AoFE Facebook comment for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130117-144524",
	year: 2013,
	month: 1,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20130117-144524 has been released! This update resolves 570: #UserPatch [Core Bug] AI trade carts may idle indefinitely if they are forced to avoid a foundation. Thanks to Alevo, II2N, and LightTree for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130117-114003",
	year: 2013,
	month: 1,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20130117-114003 has been released! This update resolves 569: #UserPatch [Core Bug] Unused network logging data is unnecessarily prepared and formatted. LightTree knows what I'm referring to here lol. Sorry for the excessive posts!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130116-154134",
	year: 2013,
	month: 1,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20130116-154134 has been released! This update resolves 568: #UserPatch [Core Bug] Converted units that have special line-of-sight may break the fog of war. In particular, converting a korean villager with 7 los to another civ with 4 los, then retasking them would cause this fog of war bug. Thanks to II2N for the great report, details, recs, and saves!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130116-124549",
	year: 2013,
	month: 1,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20130116-124549 has been released! This update moves the debug-print command to the \"Debugging modifications\" restricted feature to avoid the performance cost of scanning text strings in the chat for the trigger text.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130116-085231",
	year: 2013,
	month: 1,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20130116-085231 has been released! This update resolves 566: #UserPatch [Request] Add a restricted feature to disable the F7 and F8 windowed mode commands, and 567: #UserPatch [Request] Rewrite the network system to increase resilience to packet loss and reordering. Marathon mentioned a person who was having issues playing the game due to the F7 and F8 commands, so for usability, this restricted feature has been added to the installer (press F5 on the installer to show it). The network fix has been committed to allow for more feedback. Thanks to marathon for reporting the issue with the keys, and Prophet, offwo, and LightTree for testing the network system!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130115-180522",
	year: 2013,
	month: 1,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20130115-180522 has been released! This update adjusts the previous fix, correcting a crash that occurs when joining more than 1 mp game in a row on a single game instance, and adding instruction pairing optimizations.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130115-102948",
	year: 2013,
	month: 1,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20130115-102948 has been released! This update includes a rewritten network system, combining both guaranteed transfer from 1.1 and a fallback list like 1.0c. Please test this release on direct ip and GR and everywhere. If it turns out to be stable, this will be committed with a public release.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130113-155525",
	year: 2013,
	month: 1,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20130113-155525 has been released! This update resolves 565: #UserPatch [Core Bug] Palisade gates may be created with an invalid id by the rms generator. No idea if this fixes the issue in AoFE, but I hope it does lol. Thanks to prophet for the report, and sh, offwo, and cysion for testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130112-083706",
	year: 2013,
	month: 1,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20130112-083706 has been released! This update resolves 564: #UserPatch [Core Bug] Selected unit icons may leave a black line behind due to an improper clip region. I saw this bug while watching ZeroEmpires' <a href=\"http://www.youtube.com/watch?feature=player_detailpage&v=I64fBixrGQs#t=213s\">recent video</a> (watch the selected unit icon boxes at the bottom of the screen after he selects all of the villagers and sheep and then deselects them). It affected all resolutions that use the 1024 or 1280 interface sets in the rec player. Thanks, ZeroEmpires!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130111-120803",
	year: 2013,
	month: 1,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20130111-120803 has been released! This update resolves 563: #UserPatch [Core Bug] Interface rendering may be corrupted for certain lower resolutions. There was an error with certain 1024x resolutions. Sorry about the trouble ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130111-114920",
	year: 2013,
	month: 1,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20130111-114920 has been released! This update resolves 562: #UserPatch [Core Bug] The in-game tech tree may fail to redraw properly on higher resolutions. Now, instead of rendering a corrupt baseline, the tech tree will render the extra space in black. The long-time redraw issues during scrolling the tech tree should also be resolved, I hope.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130111-090953",
	year: 2013,
	month: 1,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20130111-090953 has been released! This update resolves 561: #UserPatch [Request] Arbitrary, unbounded video resolutions over 1920 width should be supported. It will now attempt to tile any resolution (here's 2560x1440). The only limitations now are minimums (min 800 width, 600 height). There might be some issues with the tech tree scaling on higher resolutions. I'm looking into that right now. Thanks to everyone for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130110-114650",
	year: 2013,
	month: 1,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20130110-114650 has been released! This update resolves 560: #UserPatch [Core Bug] Volume levels may be improperly muted upon returning from a task switch. Thanks to devilhearts for the report and testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130110-084347",
	year: 2013,
	month: 1,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20130110-084347 has been released! This update adjusts the \"debug-print\" chat command again for lobby starts.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130109-222811",
	year: 2013,
	month: 1,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20130109-222811 has been released! This update just adjusts the \"debug-print\" chat command for mp games to provide more information and enable it to work on the game setup screen and vote panel window, as well. Please try to get everyone to use it whenever something goes wrong like a permanent vote block, etc. on GameRanger or anywhere else. Afterward, please collect the \"Age of Empires II\\directplay-debug.txt\" from everyone and upload an archive.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130109-065249",
	year: 2013,
	month: 1,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20130109-065249 has been released! This update resolves 559: #UserPatch [Core Bug] The game will fail on startup if the local registry resolution data is missing. Thanks to jd for finding this bug! Separately, for network testing, this build includes a new, temporary \"command\" for mp games, where you can type \"debug-print\" without quotes and it will write some data to the local chat and to a log file, \"Age of Empires II\\directplay-debug.txt\". If anyone plays mp and experiences a vote break or anything, please get everyone in the game to use this command so we can collect information. Feel free to execute that command at any time during gameplay, or at the vote.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130109-000210",
	year: 2013,
	month: 1,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20130109-000210 has been released! This update resolves 558: #UserPatch [Core Bug] The multiple building queue command may crash the game with an invalid selection. Thanks to Cysion for the report! Hi Holtzclaw! If the driver reports a resolution as available for 8-bit color with width <= 1920 and >= 800, it is added to the list without any other consideration. If it's not being added to the list, then the driver is not reporting that it supports that particular configuration to DirectDraw.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130108-050644",
	year: 2013,
	month: 1,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20130108-050644 has been released! This update resolves 557: #UserPatch [Core Bug] AI monks with redemption fail indefinitely attempting to convert foundations. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130107-010206",
	year: 2013,
	month: 1,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20130107-010206 has been released! This update resolves 556: #UserPatch [Core Bug] Retasked AI gatherers may fail to transition their unit type before repairing. Thanks to offwo for finding this bug, and LightTree for the rec!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130106-171135",
	year: 2013,
	month: 1,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20130106-171135 has been released! This update resolves 554: #UserPatch [AI Scripting] A new sn is required for AIs to configure the local unit targeting system, and 555: #UserPatch [Request] The player settings file should be saved separately for each expansion. Set sn-local-targeting-mode to 1 to prioritize attack bonuses and overall damage per hit. If set to 2, units will prioritize targets with high base pierce armor (>= 40), such as rams; otherwise, they will target as usual. The offensive priority value of a target (-1 to 11) is added to the weight for modes 1 and 2, as well. If set to 0, units will target as usual. Note that units that do 1hp or less damage per hit (like archers) will intentionally try to avoid wasting shots on high-pierce targets like rams on modes 1 and 2, if a better target is available. Thanks to LightTree for feedback!</p><p>Fix #555 will cause player.nfz to be created separately for each expansion, so selecting a new civ in AoFE and then playing AoC will not cause any issues or invalid selections/crashes. The hotkey file (playerX.hki) is still shared by the core game and all expansions to avoid excessive inconvenience for the player. Thanks to Promi for the report!",
	itemsAffected: [snLocalTargetingMode],
	scriptingType: "ai"
}, {	
	number: "20130105-143628",
	year: 2013,
	month: 1,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20130105-143628 has been released! This update resolves 553: #UserPatch [Scenario Design] The game may crash if a multi-part building is partially deleted by a trigger. If someone were to build a town center, gate, or another building composed of multiple pieces in just the wrong place on a custom scenario map with the wrong triggers (remove or kill object), the game would probably crash (100% of the time for gates). Thanks to randomdude for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130105-012922",
	year: 2013,
	month: 1,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20130105-012922 has been released! This update resolves 552: #UserPatch [Core Bug] The relic victory state is not reset by the recorded game loading code. Now, the [R] next to player score statistics will be properly displayed after watching an attempted relic victory rec. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130103-172054",
	year: 2013,
	month: 1,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20130103-172054 has been released! This update resolves 551: #UserPatch [Core Bug] Names are swapped if the host is changed during multiplayer restore. Please note that if the host is changed in a game with AIs, the AIs will likely revert to petersen, since only the host's save file contains the AIs and their state information. Thanks to _DK_ at aoczone for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130103-132433",
	year: 2013,
	month: 1,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20130103-132433 has been released! This update resolves 549: #UserPatch [Core Bug] Changing screen resolution in v1.1 improperly alters the original v1.0c resolution, and 550: #UserPatch [Request] Add new cli parameters for age2_x1.exe to force recording in mp games and more. The new parameters are in the \"Details\" section of the Readme. Thanks, MuRRay!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130102-190016",
	year: 2013,
	month: 1,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20130102-190016 has been released! This update resolves 548: #UserPatch [Request] Display a notification during multiplayer startup for All Techs mode. For future usability, I think this will be helpful for inexperienced players who mistakenly set it (or have it set by the fencrazyrandom button), and just think, \"oh, the game is broken, why is everything all weird now! I lost my unique bonuses!\" The notification message is localized from the language dlls. For English, it will show \"!!! Full Tech Tree: Yes.\" in orange text during multiplayer startup, just like the cheats notification.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130102-163646",
	year: 2013,
	month: 1,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20130102-163646 has been released! This update resolves 547: #UserPatch [Core Bug] Centering the view with idle hotkeys fails to consider the terrain elevation offset. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130102-105103",
	year: 2013,
	month: 1,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20130102-105103 has been released! This update resolves 546: #UserPatch [Core Bug] The game may auto-exit to achievements instead of waiting after a multiplayer game. Thanks to fen and LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20130101-192926",
	year: 2013,
	month: 1,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20130101-192926 has been released! This update resolves 545: #UserPatch [Request] Volume controls should be linked with the system unless optionally delinked. The feature to delink from the master system volume has been made a restricted feature, as it seems it was causing more confusion than anything else. For Vista and later, the per-application volume control eliminates the problem this fix was intended to solve, and linux+wine is unaffected, as well. Those on XP or earlier who wish to keep it delinked can simply install the restricted feature. Thanks to LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121230-153608",
	year: 2012,
	month: 12,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20121230-153608 has been released! This update resolves 543: #UserPatch [Core Bug] Centering the view on an object fails to consider the terrain elevation offset, and 544: #UserPatch [Core Bug] Resource overflows may be handled improperly between target and gatherer. Thanks to those at aoczone for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121230-085528",
	year: 2012,
	month: 12,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20121230-085528 has been released! This update resolves 542: #UserPatch [Core Bug] House, wall, and stable states are improperly hard-coded in the tech tree. Stables were hard-coded disabled only for aztecs and mayans, walls for goths, and houses for huns lol. It will now rely on the actual civ-specific tech data. Thanks, marmot!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121229-062932",
	year: 2012,
	month: 12,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20121229-062932 has been released! This update resolves 541: #UserPatch [Core Bug] The game may fail due to unnecessary local machine registry checks. Now, the game should be able to run even if HKLM is inaccessible, so setupreg, etc. should no longer be needed. I hope this fixes those random crashes and other weirdness.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121229-020039",
	year: 2012,
	month: 12,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20121229-020039 has been released! This update resolves 540: #UserPatch [Core Bug] The palisade gate is not shown on the tech tree when enabled by an expansion. Now, if an expansion enables palisade gates, they are used in both rms generated palisade walls (previous fix) and shown in the tech tree instead of being improperly skipped (missed this last time).",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121228-234136",
	year: 2012,
	month: 12,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20121228-234136 has been released! This update resolves 539: #UserPatch [Core Bug] The game may crash on startup due to an unreliable file check system. The game will no longer check for empires2.exe in order to verify it has found the root folder, as this is unreliable with some \"unique\" installs. It will now check for Data\\graphics.drs to verify it is in the right folder. The process will check the current directory, then the parent if it's in the \"age2_x1\" folder, then fail gracefully and exit.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121227-041147",
	year: 2012,
	month: 12,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20121227-041147 has been released! This update resolves 538: #UserPatch [Core Bug] AI villagers fail to retreat when attacked by unreachable enemy units. It was caused by ES mistakenly using the attacker's land zone id to see which villagers to retreat, instead of the land zone id of the villager who was attacked. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121224-162808",
	year: 2012,
	month: 12,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20121224-162808 has been released! This update resolves 537: #UserPatch [Core Bug] Garrisoned AI town centers are unable to attack enemy ships in range. Hopefully, AIs will no longer see this epic fail on Rivers and similar maps, where their villagers remain garrisoned indefinitely while the TC idles. Thanks to Finaldeath and II2N for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121223-160827",
	year: 2012,
	month: 12,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20121223-160827 has been released! This update resolves 536: #UserPatch [Core Bug] Connection settings may be different for lobby launched mp games. I'm not sure if this will fix the GR issue (The Bug #4 lol), but it's probably best to be consistent here. Thanks to Cysion and offwo for their help!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121222-190233",
	year: 2012,
	month: 12,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20121222-190233 has been released! This update resolves 535: #UserPatch [Request] The multiple building queue setting should not be embedded in the executable. Now, there is a \"Multiple Queue\" setting in the registry that controls whether or not the MBS feature is available for the player. Recs should not go out-of-sync with any configuration, regardless of whether it was enabled or not in the recorded game. In addition, all of the registry options on the installer are back to 2-state checkboxes (the indeterminate state is gone, as it was too unintuitive). These checkboxes now display the currently active state for each setting on startup, so you can more naturally make changes. Thanks to LightTree for feedback!</p><p>Only the \"save filename format\" feature changes the exe from the default features. Everything else is now a registry setting. Despite this, the MBS queue is still a sync feature, so all players must have it in the same state to start a mp game.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121221-202425",
	year: 2012,
	month: 12,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20121221-202425 has been released! This update resolves 534: #UserPatch [Core Bug] Recs with MBS queuing go out-of-sync for viewers without the feature installed. Now, if a game was played with MBS queuing, people who prefer the game without that feature can still watch the rec without fear of it going out-of-sync. This fix involves installer adjustments for general future game usability. Normal players would be displeased if their final 1.1 goes out-of-sync with other final 1.1 game recs lol. This should help to avoid people having to add notes to their recs about installed features and things.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121220-200719",
	year: 2012,
	month: 12,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20121220-200719 has been released! This update resolves 532: #UserPatch [AI Scripting] New mirror and flank scouting actions are required for up-send-scout, and 533: #UserPatch [AI Scripting] The up-get-fact command must be able to read the global gaia unit type counters. There are now scout-mirror and scout-flank actions for up-send-scout, and a cc-gaia-type-count fact id for up-get-fact. The scout-mirror action creates a dividing line for the team along the center and mirrors the home town center along that line to get the scouting point. The scout-flank command, which I think works better, uses Duck's idea by evaluating where each member of the team would \"scout-opposite\" and selecting the nearest point from that set. As for up-get-fact + cc-gaia-type-count, use it like the \"cc-players-unit-type-count gaia\" command: (up-get-fact cc-gaia-type-count tree-class gl-count). Thanks to Archon, Duck, FD, LightTree, ER, MuRRay, and more for feedback lol.",
	itemsAffected: [cUpSendScout, pFactId, pPositionType, pScoutMethod],
	scriptingType: "ai"
}, {	
	number: "20121218-195224",
	year: 2012,
	month: 12,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20121218-195224 has been released! This update resolves 531: #UserPatch [Core Bug] Players who stay connected after resigning may cause severe multiplayer lag. Actually, this affects the game's performance during ANY post-game activity, including after losing in single player games, looking around on the map after a recorded game ends in the rec player, etc. Thanks to BugA for the report! About retreating, please still remember not to flood these commands ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121218-103034",
	year: 2012,
	month: 12,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20121218-103034 has been released! This update resolves 530: #UserPatch [AI Behavior] Retreat commands should not affect units that are already near the target. Now units within 6 range of the retreat target object will be left alone by retreat commands, so they should be more alert to nearby enemy threats like a ram approaching a trebuchet. Hopefully, this enhances the defense of offensive siege weapons, etc. Thanks to LightTree, Archon, offwo, and II2N for feedback!",
	itemsAffected: [cUpRetreatNow, cUpRetreatTo],
	scriptingType: "ai"
}, {	
	number: "20121217-071443",
	year: 2012,
	month: 12,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20121217-071443 has been released! This update resolves 529: #UserPatch [AI Behavior] Gatherers who aren't hunting should be eligible to be tasked as explorers. Before, all gatherers except miners were blocked, including shepherds, foragers, hunters, lumberjacks, fishermen, etc., in addition to builders and repairers. The explorer task check code has also been optimized to reduce the number of executed instructions by more than half. Thanks to Finaldeath for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121216-141758",
	year: 2012,
	month: 12,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20121216-141758 has been released! This update resolves 528: #UserPatch [Maps & RMS] Map generated palisade walls should have palisade gates if they are enabled. There's no effect in The Conquerors, since the palisade gates are sea gates and \"hidden in the editor\". If they are enabled and made visible to the scenario editor like in AoFE, then rms palisade walls will get palisade gates. Thanks to Prophet, Cysion, and stream requests for the idea!",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20121215-114645",
	year: 2012,
	month: 12,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20121215-114645 has been released! This update resolves 527: #UserPatch [Core Bug] The colored advancement notification fails to consider coop player slot shifts. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121215-082505",
	year: 2012,
	month: 12,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20121215-082505 has been released! This update resolves 526: #UserPatch [Core Bug] Logistica-style area of effect damage is hard-coded for only cataphract-line. Now, if a unit's \"blast level\" (see advanced genie editor 2) is set to a standard value (range: 0-3) + 4, it will give logistica-style 5 damage to surrounding units. The unit must have a blast radius greater than 0 for this to have an effect. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121215-031659",
	year: 2012,
	month: 12,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20121215-031659 has been released! This update resolves 525: #UserPatch [AI Scripting] A new sn is required for AIs to block builder assistance for faster placement. With sn-disable-builder-assistance set to 1, you can prevent builders from assisting on nearby foundations after their work is complete. Hopefully, this helps with the PIDM starts.",
	itemsAffected: [snDisableBuilderAssistance],
	scriptingType: "ai"
}, {	
	number: "20121214-053030",
	year: 2012,
	month: 12,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20121214-053030 has been released! This update resolves 524: #UserPatch [Request] The installer should not change settings when left in the indeterminate state. It's just a little change for the installer. Now, it will now show the registry settings as indeterminate on startup. This means you don't have to restore them each update, as they won't be modified unless you explicity set one to off or on. Non-registry settings that change the exe like MBQ will need to be adjusted.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121214-044001",
	year: 2012,
	month: 12,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20121214-044001 has been released! This update resolves 523: #UserPatch [Maps & RMS] Additional padding is required between players for the team positioning system. Now, the distance between team members is base_size + 5 instead of just base_size. Randomization on maximum distance will ensure that they aren't exactly base_size + 5 distance from each other each game, but they should rarely be closer than this. Thanks to Prophet, Cysion, and LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20121214-000455",
	year: 2012,
	month: 12,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20121214-000455 has been released! This update resolves 522: #UserPatch [AI Scripting] A new sn is required for AIs to unbound sn-enemy-sighted-response-distance. With sn-disable-sighted-response-cap set to 1, subsequent changes to sn-enemy-sighted-response-distance will not be bound to 50. Thanks to ER for the idea and LightTree for feedback!",
	itemsAffected: [snDisableSightedResponseCap],
	scriptingType: "ai"
}, {	
	number: "20121212-204336",
	year: 2012,
	month: 12,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20121212-204336 has been released! This update resolves 521: #UserPatch [Core Bug] Action timers are reset for garrisoned units during the object sighting update. If you've ever seen villagers stay in a town center or castle forever after garrisoning, this was the cause lol. Thanks to II2N for the rec and report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121212-191643",
	year: 2012,
	month: 12,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20121212-191643 has been released! This update resolves 520: #UserPatch [Core Bug] The Defend the Wonder mode fails to set the starting age to Post Imperial. Now, the Defend the Wonder mode will get the POST-IMPERIAL-AGE-START #load symbol and the Objectives window will show the proper starting age. The \"current-age\" script fact was always fine and would report \"imperial-age\" even when the symbol was wrong. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121211-194443",
	year: 2012,
	month: 12,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20121211-194443 has been released! This update resolves 518: #UserPatch [Request] The extended population cap setting should not be embedded in the executable, and 519: #UserPatch [AI Scripting] The min and max math operators for AI scripts are improperly inverted. The 1000 population setting is now toggled by setting \"Extend Population\" to 1 in the registry, and that's all the installer option does now. The executable remains the same, just like the snow and mini-map color options. This should help anti-cheat systems with their exe file comparisons.</p><p>Thanks, Finaldeath, for finding the errors in the min and max operators!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121211-011638",
	year: 2012,
	month: 12,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20121211-011638 has been released! This update resolves 517: #UserPatch [Core Bug] Colored advancement messages are duplicated by the recorded game player. From the previous fix lol. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121210-132218",
	year: 2012,
	month: 12,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20121210-132218 has been released! This update resolves 516: #UserPatch [Request] Player advancement messages should be sent with the appropriate color. Here's an example of it. Thanks to everyone in the chat for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121209-132956",
	year: 2012,
	month: 12,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20121209-132956 has been released! This update resolves 515: #UserPatch [Core Bug] Switching from Wonder Race to Defend the Wonder fails to restore team checkboxes. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121205-081312",
	year: 2012,
	month: 12,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20121205-081312 has been released! This update resolves 514: #UserPatch [AI Behavior] Villagers must not hesitate when attacking forward walls and gates. Sorry, missed a spot ",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121205-073318",
	year: 2012,
	month: 12,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20121205-073318 has been released! This update resolves 513: #UserPatch [Core Bug] Villagers should not target forward builders after they are garrisoned. Thanks again to II2N for the report and save file!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121205-062430",
	year: 2012,
	month: 12,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20121205-062430 has been released! This update resolves 512: #UserPatch [AI Behavior] Villagers should not hesitate when attacking forward buildings and towers. It should be a fair bit harder to \"lame\" an AI now, even with a forward tower on top of their town center. Thanks to II2N for the report and save file!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121204-110414",
	year: 2012,
	month: 12,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20121204-110414 has been released! This update resolves 511: #UserPatch [Request] A single continue vote will resume the game after the state is synchronized. This change makes connectivity votes work the same as save-and-exit votes. Thanks to BugA and Voobly for the idea, and Cysion, LightTree, and ER for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121204-082959",
	year: 2012,
	month: 12,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20121204-082959 has been released! This update resolves 510: #UserPatch [Scenario Design] Tribute notifications from trigger effects should not appear for undefined resources. Thanks to randomdude for the scx! I had no way to test it before, since those resources can't be set in the editor. I missed the second code path ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121204-030323",
	year: 2012,
	month: 12,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20121204-030323 has been released! This update resolves 508: #UserPatch [Scenario Design] Tribute notifications should not appear for undefined resources, and 509: #UserPatch [Scenario Design] Hover information may display %s for units after the change name effect. Second fix will show the unit type name (not custom). Thanks to randomdude for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121203-233535",
	year: 2012,
	month: 12,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20121203-233535 has been released! This update resolves 507: #UserPatch [AI Behavior] Villagers should be more intelligent to avoid being lured by human attacks. ES only enabled the \"give up chasing units\" code for AI villagers against other villagers lol. This enables it against other units and such and hopefully makes it more intelligent, as well. Thanks to Okami for showing the issue in recent AoFE streams and II2N for feedback!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121127-215812",
	year: 2012,
	month: 11,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20121127-215812 has been released! This update resolves 506: #UserPatch [AI Scripting] A new symbol is required for AIs to detect the grouped_by_team map layout. Now, you can use UP-GROUPED-BY-TEAM to detect this, which might be useful for market positioning and stuff. This should complete the rms task on the final list. Thanks to LightTree for the idea!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121125-161539",
	year: 2012,
	month: 11,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20121125-161539 has been released! This update resolves 505: #UserPatch [Maps & RMS] Random map scripts must be able to request team player positioning. With the new \"grouped_by_team\" command under PLAYER_SETUP, you can position team members in close proximity on the map. This command and \"random_placement\" are mutually exclusive. The \"base_size\" specified in \"create_player_lands\" determines the distance between players on a team. If the rms requests walls, the system will try to ensure that all members share the same line, and aren't separated from each other. Note that \"Team Together\" must be enabled or it will operate using the \"random_placement\" system instead. Thanks to Prophet for the idea!",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20121121-030131",
	year: 2012,
	month: 11,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20121121-030131 has been released! This update resolves 504: #UserPatch [Request] Alternate mini-map color and snow removal settings should not be embedded. Now, the snow removal setting is stored in the registry with the rest of the per-user game settings as \"Adjust Terrains\", and the alternate mini-map settings are combined into \"Mini-map Colors\". This should help with expansions, so that people can make these adjustments even with a pre-configured, distributed executable file. Thanks to LightTree for feedback! It might help Voobly with anti-cheat exe comparing, too lol.</p><p>Process for getting a value:<ol><li>read current user registry</li><li>if fails, read local machine registry</li><li>if fails, use default value</li></ol>",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121120-020808",
	year: 2012,
	month: 11,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20121120-020808 has been released! This update resolves 503: #UserPatch [AI Scripting] The AI file loader should always check the AI folder for script overrides. Just a little change for the loader lol. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121116-150453",
	year: 2012,
	month: 11,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20121116-150453 has been released! This update resolves 502: #UserPatch [Core Bug] Building type count values for AIs are improperly counted after advancement. Epic fail bug in the sighted unit fix lol. Thanks to RULER for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121108-193229",
	year: 2012,
	month: 11,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20121108-193229 has been released! This update resolves 501: #UserPatch [Core Bug] An improper code offset in the order list cache fix may result in a crash. Thanks to infractor10 for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121107-180834",
	year: 2012,
	month: 11,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20121107-180834 has been released! This update increases the rule limit from 2000 to 10000. I don't think it's a good idea, but it doesn't really matter what I think lol. Tracker/site is down (free hosting lol), so it's now redirecting to saint's server. Thanks for the wonderful hosting and help, saint!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121107-100622",
	year: 2012,
	month: 11,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20121107-100622 has been released! This update resolves 500: #UserPatch [Core Bug] Excessive explore orders may lag the game if targets are unreachable. The unit order cache list fix allowed all explore orders to actually be processed, unlike 1.0c, where only the first was processed. When failures occur, explore orders are resent and if an AI is requesting a disturbingly high number of explorers(> 10), the effect is magnified. The fix ensures that no more than 4 explore orders are processed per batch, although multiple batches may arrive in a single turn. Hopefully, the performance is a bit better for AIs that request 3495 explorers. Please remember that exploring is computationally expensive, since the entire map has to be analyzed, tile by tile, for places to check. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121105-105257",
	year: 2012,
	month: 11,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20121105-105257 has been released! This update resolves 499: #UserPatch [Request] The installer should prompt for elevation to apply color compatibility fixes. Thanks to saint for the elevation button idea! It now checks to see if either the HKCU or HKLM appcompatflags are set before requiring elevation for the Windows 8 fix.</p><p>Just saw the posts from LordGravewish and Finaldeath. Thanks for the ideas! I hope this latest solution works well, though. It now only requires elevation to update the registry as needed and never again.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121104-015201",
	year: 2012,
	month: 11,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20121104-015201 has been released! This update resolves 498: #UserPatch [Core Bug] The game may crash on Windows 8 without appcompat flags for 8-bit color rendering. If installed on Windows 8, it will apply the appcompat fix to enable 8-bit color. Thanks to LordGravewish for discovering the issue and the solution!</p><p>Great summary, LightTree! Thank you for all of the detailed work with the colors ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121102-202547",
	year: 2012,
	month: 11,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20121102-202547 has been released! This update resolves 497: #UserPatch [Request] Additional mini-map color options are required for improved visibility on LCD monitors. 3 new optional checkboxes have been added to the installer for alternate shades of red, purple, and grey. The grey is there to revert to 1.0c grey for those who are able to see that clearly next to stone and sand. The readme (lol) describes the rest. Thanks to LightTree for research, testing, and gathering feedback from many others including offwo, ryshep, ER, sh, cysion, and prophet! He considered many factors for all player colors, including how on some LCD monitors (including properly calibrated ones), the colors at the top differ from the bottom on the same screen, depending on viewing angle lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121028-173744",
	year: 2012,
	month: 10,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20121028-173744 has been released! This update resolves 496: #UserPatch [Core Bug] The multi-queue (MBS) system may crash due to an invalid data offset. Sorry to cysion, sh, marathon, ii2n, steven, ryshep, and offwo for this long existing epic fail that contributed to the crashing of the games today lol.</p><p>The direct targeting actions are unrelated to current attack methods as LightTree said. In the end, it will be more like select some units, then right-click a target (a point on the map or an object).",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121026-122852",
	year: 2012,
	month: 10,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20121026-122852 has been released! This update resolves 495: #UserPatch [Core Bug] Excessive lag occurs when combining AI attack groups with up-gather-inside. Thanks to ER for the great save file and Archon for testing!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121025-131252",
	year: 2012,
	month: 10,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20121025-131252 has been released! This update resolves 494: #UserPatch [Request] A button should be added to randomize settings on the game setup screen. When the new \"Random\" button is clicked at the top-right of the game setup screen, all settings on the right side will be randomized except: Difficulty, Other Players, Game Speed, Record Game, and Enable Cheats. Scenarios and custom maps are excluded from location randomization, as well. The \"Score\" victory condition has a minimum of 8000 to avoid epic fail 5 second games on DeathMatch and other strange situations.</p><p>Thanks to fen for the idea and everyone on the other thread for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121017-074514",
	year: 2012,
	month: 10,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20121017-074514 has been released! This update resolves 493: #UserPatch [Core Bug] Object selection data may be lost if the host transfers to a client during restore. Thanks to ryshep, xhip, and grok for the recs and feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121016-173528",
	year: 2012,
	month: 10,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20121016-173528 has been released! This update resolves 492: #UserPatch [Core Bug] The up-change-name action fails to consider coop player slot spacing. Thanks to kunyi for the report!",
	itemsAffected: [cUpChangeName],
	scriptingType: "ai"
}, {	
	number: "20121014-183727",
	year: 2012,
	month: 10,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20121014-183727 has been released! This update resolves 491: #UserPatch [Core Bug] Mini-map color offsets were improperly shifted by recent optimizations. This affected the p2 red. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121014-165454",
	year: 2012,
	month: 10,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20121014-165454 has been released! This update resolves 490: #UserPatch [Core Bug] AI transport ships fail to move before retrying when they are too far to unload. Thanks to ER for the rec and report! For the gaia object conversion, AIs can now convert them unless the game type is scenario or campaign.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121014-144037",
	year: 2012,
	month: 10,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20121014-144037 has been released! This update resolves 489: #UserPatch [Core Bug] The text for Team Random must consider the xml manifest langId offset for Random. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121013-220058",
	year: 2012,
	month: 10,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20121013-220058 has been released! This update resolves 488: #UserPatch [Core Bug] The attack ground command handler fails to consider target tile elevation. It's incredible that this went unreported for 13 years lol. It's fervor #2! Thanks to Cysion and sh for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121012-122826",
	year: 2012,
	month: 10,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20121012-122826 has been released! This update resolves 487: #UserPatch [Request] The mini-map color for P7 must be more distinct from the black unexplored area. This changes the color of P7 to a slightly brighter shade of grey than black. In some situations, the pure black would make it difficult to distinguish between the black area that exists due to missed scouting and P7 forward buildings, etc. lol. Thanks to LightTree for testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121009-172308",
	year: 2012,
	month: 10,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20121009-172308 has been released! This update resolves 486: #UserPatch [AI Behavior] Warships should finalize their targets based on the maximum range of the group. Warship target selection is still handled by sn-warship-targeting-mode. This simply ensures that the selected target is actually attacked lol. Thanks to LightTree for the report!</p><p>How the attack group (and attack-now lol) system selects targets:</p><p><ol><li>group requests targeting</li><li>get group characteristics:<br>- is this a water group?<br>- is there a unit in the group that targets only buildings? (sn-free-siege-targeting is checked here)<br>- other stuff lol</li><li>if this is a warship group, the effective range of the group is calculated based on sn-warship-targeting-mode</li><li>loop through all available targets on the map for this group</li><li>fill a list with all acceptable targets</li><li>sort the list by offensive priorities/special-attack-type</li><li>FINAL CHECK, where it used the shortest range unit to determine if a target in the list is reachable/acceptable<br>- now changed to longest range for warship groups<br>- land groups are still checked based on shortest range</li><li>send group to attack the final target</li></ol>",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20121009-095409",
	year: 2012,
	month: 10,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20121009-095409 has been released! This update resolves 485: #UserPatch [AI Scripting] The new sn-free-trebuchet-targeting must be generalized to include cannon galleons. This renames sn-free-trebuchet-targeting to sn-free-siege-targeting. Add bit flags together to generate a value: 1 = trebuchet; 2 = cannon-galleon. Set a flag for a unit to enable free offensive targeting with attack-now or attack groups. This may result in the targeting of units other than buildings. If set to 0, non-buildings will be ignored unless units must respond due to sn-enemy-sighted-response-distance. This change was necessary because cannon galleons only targeted buildings in 1.1. This change will allow 1.0c style targeting of cannon galleons (and ship groups with cannon galleons) against units. Thanks to LightTree for the report!",
	itemsAffected: [snFreeSiegeTargeting],
	scriptingType: "ai"
}, {	
	number: "20121008-095115",
	year: 2012,
	month: 10,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20121008-095115 has been released! This update resolves 484: #UserPatch [AI Behavior] AIs must be able to control whether warships target buildings that outrange them. This fix is related to <a href=\"http://forums.aiscripters.com/viewtopic.php?p=44293#p44293\">this post</a> from a while ago. Now, AIs can avoid suiciding their ships with sn-warship-targeting-mode. Set to 1 to cause warships to target based on the unit with the shortest range in the group against fortifications. Set to 2 to eliminate the range check. If set to 0, warship groups will target based on the unit with the longest range. Thanks to LightTree for reminding me lol.",
	itemsAffected: [snWarshipTargetingMode],
	scriptingType: "ai"
}, {	
	number: "20121006-112652",
	year: 2012,
	month: 10,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20121006-112652 has been released! This update resolves 483: #UserPatch [Core Bug] The scenario trigger overflow fix improperly counts processed objects as matches. It's the reason that mp scenario was performing improperly. Thanks to offwo for the great report, and sh and LightTree for testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121004-034020",
	year: 2012,
	month: 10,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20121004-034020 has been released! This update resolves 480: #UserPatch [Core Bug] Pressing F6 to switch music tracks with no playlist will crash the game, 481: #UserPatch [Maps & RMS] The mini-map color for player 7 should be changed to black for better visibility, and 482: #UserPatch [Core Bug] The dead gaia doppleganger mini-map color is improperly linked to player 7. Thanks to LightTree for the report, along with feedback from SH, Offwo, Cysion, and others from the chat!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20121001-043426",
	year: 2012,
	month: 10,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20121001-043426 has been released! This update resolves 479: #UserPatch [Core Bug] AIs have lost the ability to offensively target non-building units with trebuchets. To resolve this, sn-free-trebuchet-targeting has been added to restore 1.0c behavior. Set to 1 to enable free offensive trebuchet targeting with attack-now or attack groups. This may result in trebuchets targeting units other than buildings. If set to 0, offensive trebuchets will ignore non-buildings unless they must respond due to sn-enemy-sighted-response-distance. Thanks to LightTree for the report!",
	itemsAffected: [snFreeSiegeTargeting],
	scriptingType: "ai"
}, {	
	number: "20120929-142345",
	year: 2012,
	month: 9,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120929-142345 has been released! This update resolves 478: #UserPatch [Core Bug] AIs are unable to place docks on shallow terrain even though humans can. Thanks to ERMS for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120927-210720",
	year: 2012,
	month: 9,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120927-210720 has been released! This update resolves 477: #UserPatch [Core Bug] AI dock placement has been restricted improperly for certain beach alignments. Just some fixes for when the beach is like a straight line.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120927-011410",
	year: 2012,
	month: 9,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120927-011410 has been released! This update resolves 476: #UserPatch [Core Bug] Dock placement improperly uses the terrain restrictions of an obsolete blacksmith. yES lol. I hope it fixes the dock placement issue, where they are placed in small lakes without regard for sn-minimum-water-body-size-for-dock. Thanks to Duck for the report!",
	itemsAffected: [snMinimumWaterBodySizeForDock],
	scriptingType: "ai"
}, {	
	number: "20120927-000620",
	year: 2012,
	month: 9,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120927-000620 has been released! This update resolves 475: #UserPatch [Core Bug] The healing search radius for monastery units was improperly hard-coded. This affected the Teutons, primarily. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120925-154129",
	year: 2012,
	month: 9,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120925-154129 has been released! This update resolves 474: #UserPatch [AI Behavior] Docks should not be placed by AIs in such a way that waterways are obstructed. The dock placement system will now require exclusively one set of 8 contiguous water tiles around a dock at minimum in order to place. 2+ sets are rejected. This should avoid the 1-tile pond placements, placements against the map border, and placements that would obstruct the free movement of ships in a narrow path. Thanks to Duck and Archon for the reports, along with Finaldeath and ER for feedback!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120921-225118",
	year: 2012,
	month: 9,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120921-225118 has been released! This update resolves 473: #UserPatch [Core Bug] Base elevation data may not be properly initialized for rms land objects.",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20120921-105758",
	year: 2012,
	month: 9,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120921-105758 has been released! This update resolves 472: #UserPatch [AI Scripting] AIs must be able to avoid training fishing ships in seas without deep sea fish. When sn-dock-training-filter is not 0, fishing ships will only be trained from docks that are able to reach, and are closest to, deep sea fish. This means that if you have 4 docks in an ocean with deep sea fish, side by side, the two outside docks are likely to be set aside to train fishing ships, while the center docks will be free to create warships without interruption. If you aren't training fishing ships, the two outside docks will also be able to train warships, of course. That's it for the dock placement task, I think lol.",
	itemsAffected: [snDockTrainingFilter],
	scriptingType: "ai"
}, {	
	number: "20120920-114714",
	year: 2012,
	month: 9,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20120920-114714 has been released! This update resolves 471: #UserPatch [Core Bug] Ship grouping code may create an infinite allocation loop under certain circumstances. Epic 1.0c bug that, if left alone, consumes all ram and virtual memory until the game crashes. Thanks to Archon for the report and details!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120915-201052",
	year: 2012,
	month: 9,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120915-201052 has been released! This update resolves absolutely nothing lol. Actually, I just updated the guide (renamed to Readme.html) and rearranged the folders and files in the rar. I hope more people see the guide now. Thanks to cake for providing ideas and feedback for the new archive layout and other stuff!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120915-125314",
	year: 2012,
	month: 9,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120915-125314 has been released! This update resolves 470: #UserPatch [AI Behavior] Docks should be separated by at least 3 tiles to better ensure accessibility by ships. The previous 2 tile separation could still lead to blocks. Thanks to LightTree for feedback and noticing the issue with diagonally placed docks.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120913-165721",
	year: 2012,
	month: 9,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20120913-165721 has been released! This update resolves 469: #UserPatch [AI Scripting] A new fact is required for AIs to determine if a unit's training site is ready. With up-train-site-ready, you can check if a unit's training site is ready and available without any checks for cost or unit availability. It can be used to determine whether or not you need a new building. Here is an example of using it to get the best possible state for sn-dock-training-filter. Do not use unit lines or unit classes with this command. Please use the root unit type instead.",
	itemsAffected: [cUpTrainSiteReady],
	scriptingType: "ai"
}, {	
	number: "20120913-042204",
	year: 2012,
	month: 9,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20120913-042204 has been released! This update resolves 468: #UserPatch [AI Behavior] AIs must be able to avoid training trade cogs and warships in seas without targets. The sn-dock-training-filter is now active for trade cogs and warships. Set to 1 or 2 to enable the intelligent dock training filter. This will prevent docks from training ships that would likely be useless in their body of water. If set to 1, docks will continue to train in seas that no longer contain recently sighted targets, while 2 will block training. If set to 0, docks will train units without additional consideration. This sn affects the result of both can-train, train, and the up- variations.",
	itemsAffected: [snDockTrainingFilter],
	scriptingType: "ai"
}, {	
	number: "20120911-103912",
	year: 2012,
	month: 9,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20120911-103912 has been released! This update resolves 466: #UserPatch [AI Behavior] Active explorers should not be retreated together with other military units. If you need to retreat your scouts, you can reset them first. Thanks to Finaldeath for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120910-172913",
	year: 2012,
	month: 9,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120910-172913 has been released! This update resolves 465: #UserPatch [Maps & RMS] A new parameter is required to specify base elevation for rms land generation. With the new base_elevation parameter, you can specify the base elevation for any land or player land in an rm script. Note that the <ELEVATION_GENERATION> section must exist if this is used. The reference has all the details. Thanks to The_Prophet for the idea!",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20120909-152914",
	year: 2012,
	month: 9,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120909-152914 has been released! This update resolves 464: #UserPatch [AI Scripting] New sns are required for AIs to better control the placement of docks. There are 4 new sns: sn-dock-placement-mode, sn-dock-proximity-factor, sn-dock-avoidance-factor, and sn-dock-training-filter. Technically, this completes the dock placement task, but I'm going to try and see if we can get more intelligent training of ships, so trade cogs aren't trained in seas without allied docks, warships aren't trained in a pond with no enemy ships, etc. That last sn, sn-dock-training-filter, will be used to enable this, however, it is not yet active. Please see the reference for more detail and the valid range for each sn.",
	itemsAffected: [snDockPlacementMode, snDockProximityFactor, snDockAvoidanceFactor, snDockTrainingFilter],
	scriptingType: "ai"
}, {	
	number: "20120908-090743",
	year: 2012,
	month: 9,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120908-090743 has been released! This update resolves 463: #UserPatch [Core Bug] The DirectShow finalization code incorrectly assumes a valid state and may crash. Thanks to offwo for the report! There is an updated guide, as well, describing the version/feature sync fix in the Help/FAQ section.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120907-131938",
	year: 2012,
	month: 9,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120907-131938 has been released! This update resolves 462: #UserPatch [Core Bug] The host is not notified if a player does not have the same build and sync features. Now, it should be unlikely that people would be able to play each other with different builds of 1.1 without knowing, leading to an oos.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120906-123706",
	year: 2012,
	month: 9,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120906-123706 has been released! This update resolves 461: #UserPatch [Core Bug] Recording playback may break when the game fails to write the header length to the file. Another long time issue ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120905-125020",
	year: 2012,
	month: 9,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120905-125020 has been released! This update resolves 460: #UserPatch [Core Bug] Numpad hotkeys for tasks including unit group setup fail to operate. Thanks to Aga for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120905-100612",
	year: 2012,
	month: 9,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120905-100612 has been released! This update resolves 459: #UserPatch [AI Scripting] AIs must be able to retreat units near threatened units on demand. Now, sn-filter-under-attack takes 3 values from 0-2. Set to 1 or 2 to filter retreat commands to only those units that are under attack. When this is 2, units near threatened units (within 6 tiles) will also be retreated, which may be computationally expensive. The nearby units that will be retreated do not consider the filter type provided to up-retreat-to, and will be all military units except monks. Finally, the 1 and 2 states will now reject high base pierce armor units >= 20, so rams are left despite being attacked. If set to 0, the filter is disabled.</p><p>Thanks to Archon for the idea! Consider this a part of the direct unit control fix and a fix to the previous fix.",
	itemsAffected: [snFilterUnderAttack],
	scriptingType: "ai"
}, {	
	number: "20120905-060910",
	year: 2012,
	month: 9,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120905-060910 has been released! This update resolves 458: #UserPatch [Core Bug] Saving a png format screenshot in fullscreen mode may cause color distortion. It also includes performance enhancements for get/set strategic numbers. Still working on finalizing the dock placement fix. Sorry about the delay.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120903-113553",
	year: 2012,
	month: 9,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20120903-113553 has been released! This update resolves 457: #UserPatch [Core Bug] Unit upgrades are incorrectly counted as the base type by the AI sighted units system. This bug affects 1.0c and was carried over into the sighted units fix in 1.1. It causes players-unit-type-count to become unable to determine the current upgrade state of sighted units. You should generally still count with the -line as before, however, you can now check for elite-huskarl, for example, to see if any enemy castle or barracks huskarls are now elite. Thanks to robink for the report!",
	itemsAffected: [cPlayersUnitTypeCount],
	scriptingType: "ai"
}, {	
	number: "20120903-031113",
	year: 2012,
	month: 9,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20120903-031113 has been released! This update resolves 456: #UserPatch [Core Bug] Moving the music volume slider to the bottom fails to actually mute the music. There are also various optimizations included, such as the elimination of unnecessary instructions in wndproc (gets called 398457345 times a second) and alignment/pairing adjustments for the sound, music, keyboard, and window management code. Thanks to Lazarus for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120902-132121",
	year: 2012,
	month: 9,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20120902-132121 has been released! This update resolves 455: #UserPatch [Core Bug] The sound volume slider spans across inaudible volume levels for half of its range. Noticed this on the AoFE streams, but forgot to fix it lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120831-145824",
	year: 2012,
	month: 8,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20120831-145824 has been released! This update resolves 454: #UserPatch [AI Behavior] AIs should consider the enemy sighted response sns for distant attack notifications. Just another performance optimization.",
	itemsAffected: [snEnemySightedResponseDistance, snPercentEnemySightedResponse],
	scriptingType: "ai"
}, {	
	number: "20120831-034416",
	year: 2012,
	month: 8,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20120831-034416 has been released! This update resolves 453: #UserPatch [AI Behavior] Safe town size must be considered by the enemy sighted response code. Now, inside sn-safe-town-size + inside sn-maximum-town-size, all military units will attempt to assist when under attack. Outside sn-safe-town-size (1.1 TSA attack or even groups), sn-enemy-sighted-response-distance controls the distance for assistance as usual.",
	itemsAffected: [snSafeTownSize, snMaximumTownSize, snEnemySightedResponseDistance],
	scriptingType: "ai"
}, {	
	number: "20120830-175016",
	year: 2012,
	month: 8,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120830-175016 has been released! This update resolves 452: #UserPatch [Core Bug] The human sighted unit code for AIs modifies object data which may cause sync failures. Hopefully, this fixes the oos issue.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120830-052432",
	year: 2012,
	month: 8,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120830-052432 has been released! This update resolves 451: #UserPatch [Core Bug] Introduction videos should play unless the NOSTARTUP parameter is specified. It should not disable aero glass (dwm) now, I hope.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120830-030533",
	year: 2012,
	month: 8,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120830-030533 has been released! This update resolves 450: #UserPatch [Core Bug] Players may be hidden on vote panels if a member of their coop has resigned. Thanks to Cysion and Alevo for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120829-205948",
	year: 2012,
	month: 8,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120829-205948 has been released! This update resolves 449: #UserPatch [AI Behavior] AIs should not overreact to villager threat notifications with excessive military assistance. More improvements to reduce lag.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120829-165325",
	year: 2012,
	month: 8,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120829-165325 has been released! This update resolves 448: #UserPatch [Core Bug] Human trade carts and trade cogs idle indefinitely after returning with their gold. Thanks to AntonSynytsia and erli4000 for the reports! It's possible that this trade issue was responsible for the out-of-sync issues, as well.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120828-195614",
	year: 2012,
	month: 8,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120828-195614 has been released! This update resolves 447: #UserPatch [Core Bug] The retreat and guard commands for AIs must not lock the cpu during execution. Just another performance adjustment.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120828-192455",
	year: 2012,
	month: 8,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120828-192455 has been released! This update resolves 446: #UserPatch [Core Bug] Several functions rely on inefficient multiply instructions and must be optimized. Same as before, but with multiply instead of divide.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120828-172805",
	year: 2012,
	month: 8,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120828-172805 has been released! This update resolves 445: #UserPatch [Core Bug] Several functions rely on inefficient divide instructions and must be optimized. Just some changes to meaningless opcodes lol. It may save hundreds of instructions in the human sighted unit code and elsewhere.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120826-201608",
	year: 2012,
	month: 8,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120826-201608 has been released! This update resolves 444: #UserPatch [Core Bug] Human boar lurers may become unable to move while retreating to the town center. Someone reported this a long time ago lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120826-175111",
	year: 2012,
	month: 8,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120826-175111 has been released! This update resolves 443: #UserPatch [Core Bug] Sighted unit notifications from human allies to AIs cause out-of-sync errors. I was able to resume erli's multiplayer game between two windows and watch it to the end. Thanks to erli for the recs and report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120826-145237",
	year: 2012,
	month: 8,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120826-145237 has been released! This update resolves 442: #UserPatch [AI Behavior] The enemy sighted response code requires optimization to avoid excessive commands. The game seems to perform a lot smoother now.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120825-213212",
	year: 2012,
	month: 8,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120825-213212 has been released! This update resolves 440: #UserPatch [Core Bug] A monk carrying a relic causes a flood of multiplayer packets until the relic is dropped, and 441: #UserPatch [Core Bug] Unit order lists are improperly parsed, which requires many commands to be resent. The second one is an epic bug.</p><p>The fact that all units are now being processed as intended may have some interesting results. It seems that the enemy-sighted-response stuff now gets ALL of the responders lol. I'll need to make some adjustments for that.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120824-154146",
	year: 2012,
	month: 8,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20120824-154146 has been released! This update resolves 439: #UserPatch [Core Bug] The retreat and garrison commands for AIs may crash the game when unsynchronized. It also includes optimizations that may eliminate hundreds of instructions for AIs per script pass. Thanks to erli4000 for the great report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120823-203421",
	year: 2012,
	month: 8,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120823-203421 has been released! This update resolves 436: #UserPatch [AI Behavior] AIs should always retarget against walls if they are the only reachable target. Just a minor adjustment to ensure that they don't try to seek higher priority, yet unreachable, targets inside a wall.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120823-150850",
	year: 2012,
	month: 8,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120823-150850 has been released! This update resolves 377: #UserPatch [Core Bug] Multiplayer games may fail due to dropped packets under certain conditions. As offwo recommended, reliable network system #2 is now the default network system. Under the restricted features list, you can still find protocol #1, #2, reliable #1, and the \"original\" (fixed ES) network system. I've updated the guide with information about each of those. In addition, for those without v1.0c, the installer will now offer to send them to archive.org, which has active links to all available patches!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120823-074436",
	year: 2012,
	month: 8,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120823-074436 has been released! This update resolves 438: #UserPatch [Core Bug] Players cannot select custom maps on King of the Hill, Wonder Race, and Defend the Wonder. Thanks to offwo for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120822-215750",
	year: 2012,
	month: 8,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120822-215750 has been released! This update resolves 437: #UserPatch [Core Bug] Defend the Wonder mode may lead to out-of-sync errors in multiplayer games. Thanks to ryshep and offwo for the tests, recs, and reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120822-140732",
	year: 2012,
	month: 8,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120822-140732 has been released! This update resolves 434: #UserPatch [AI Scripting] New sns are required for AIs to perform more precise garrison operations, and 435: #UserPatch [AI Scripting] New sns are required for AIs to more precisely control when units defend and retreat. There are 4 new sns: sn-maximum-garrison-fill, sn-number-garrison-units, sn-filter-under-attack, and sn-disable-defend-groups. The first two should make the new up-garrison command more useful, and the other two will provide more control for when the direct unit targeting commands are introduced soon.</p><p>Set sn-maximum-garrison-fill to the number of units to fill into each garrison target per command. If set to 0, this limit is removed. Set sn-number-garrison-units to the number of units that will garrison per command. If set to 0, it will default to the maximum of 40. Set sn-filter-under-attack to 1 to filter retreat commands to only those units that are under attack. If set to 0, the filter is disabled. Set sn-disable-defend-groups to 1 to disable the entire defensive targeting system. If set to 0, units will respond to threats in town as usual.</p><p>The last sn may improve performance when it's enabled, since no TSA targeting or checks will be done. This does not disable the local unit targeting stuff, so you don't have to worry about nearby attackers.",
	itemsAffected: [snMaximumGarrisonFill, snNumberGarrisonUnits, snFilterUnderAttack, snDisableDefendGroups],
	scriptingType: "ai"
}, {	
	number: "20120822-064654",
	year: 2012,
	month: 8,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120822-064654 has been released! This update resolves 433: #UserPatch [AI Scripting] A dynamic symbol is required for AIs to determine which game expansion is active. A #load symbol will be created based on the \"game\" name set in the xml manifest. The \"game\" name for the Conquerors Expansion is \"age2_x1\", which is translated to the symbol UP-GAME-AGE2-X1. Note that it is transformed into uppercase and the _ is replaced by -. If the Forgotten Empires expansion uses the name \"aofe\" or \"age2_x2\", then it will either be UP-GAME-AOFE or UP-GAME-AGE2-X2.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120821-083914",
	year: 2012,
	month: 8,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120821-083914 has been released! This update resolves 432: #UserPatch [Core Bug] The sighted object table generator fails if an expansion overflows the 900 object limit. Age of Chivalry has more than 900 objects, so the game would crash when the sighted unit table was being generated, as it overflowed into the class counters. This fix simply blocks objects out of range from being counted.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120821-055216",
	year: 2012,
	month: 8,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120821-055216 has been released! This update resolves 431: #UserPatch [Core Bug] Allied AIs are not informed when a human discovers enemy units and buildings. Now, if a human finds an enemy unit or building, it will be reported to all allied AIs. There is a cost to this operation, so human units will report their findings intermittently (about every 5 game seconds) instead of in real-time. Resources are not reported to avoid excessive overhead. The AI scout can usually find the resources it needs in the immediate area without much trouble.</p><p>In addition, several changes have been made to the previous sighted unit table fix for stability, as well. All human buildings (except walls) are now reported to allied AIs upon completion, instead of just the market and dock.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120820-114851",
	year: 2012,
	month: 8,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20120820-114851 has been released! This update resolves 430: #UserPatch [AI Scripting] New actions are required for AIs to manually execute garrison commands. With up-garrison and up-ungarrison, you can now garrison buildings and rams on demand. Please do not flood these commands, as with all commands that manipulate units, there is a bit of overhead. The reference has other important information. It's important to note that units are selected without regard for distance between the objects in order to avoid excessive calculations. This would obviously be an issue on transport maps.</p><p>In addition to these changes, up-gather-inside now accepts 3 states: 0 (do not hold any units inside), 1 (hold trained and garrisoned units inside), and the new state, -1 (hold only garrisoned units inside, but release trained units). This command is required in order to keep units garrisoned in buildings. Rams, however, do not need this.",
	itemsAffected: [cUpGarrison, cUpUngarrison, cUpGatherInside],
	scriptingType: "ai"
}, {	
	number: "20120814-220845",
	year: 2012,
	month: 8,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20120814-220845 has been released! This update resolves 429: #UserPatch [AI Scripting] AIs must be able to delete idle economic units including villagers and fishing ships, and 70: #UserPatch [AI Scripting] Idle units cannot be detected and retasked. With up-delete-idle-units, you can now easily delete all idle economic units from the following types: villager, fishing-ship, trade-cart, and trade-cog. This command should not be flooded for obvious reasons, so please take care and use it only when necessary (no allies left for trade, post-imperial, wood screwed, etc.). For item #70, the primary causes of permanent villager idling, such as builder obstruction, etc., should be fixed now.",
	itemsAffected: [cUpDeleteIdleUnits],
	scriptingType: "ai"
}, {	
	number: "20120814-175252",
	year: 2012,
	month: 8,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20120814-175252 has been released! This update resolves 428: #UserPatch [Core Bug] The expansion manifest loader fails to link unique techs under certain conditions. This is a 1.0c bug that was made visible by the xml manifest fix. Thanks to Cysion for the report! Sorry about the mistakES ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120810-082856",
	year: 2012,
	month: 8,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120810-082856 has been released! This update resolves 427: #UserPatch [Core Bug] The sighted unit type conversion code for AIs fails when provided invalid data. Thanks to II2N for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120807-155936",
	year: 2012,
	month: 8,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120807-155936 has been released! This update resolves 426: #UserPatch [Core Bug] Various units, including barracks huskarls, are uncounted by the AI sighted units system, and 69: #UserPatch [AI Scripting] Gaia units cannot be counted with players-unit-type-count. With up-gaia-type-count and up-gaia-type-count-total, you can check the number of sighted gaia resources (not wolves, etc.).</p><p>The up-gaia-type-count command may be relatively slow, since it must check the status of all discovered resources within the requested subset (food, wood, stone, or gold). On the other hand, up-gaia-type-count-total is very fast when checking food, wood, stone, or gold. However, the required data does not exist for specific food types, including deer and sheep. As a fallback, up-gaia-type-count-total will redirect to the slower up-gaia-type-count, and the result will only reflect resources that still exist. You can't do a specific \"all sheep ever seen\" count with this, but you can for the general resource categories: food, wood, stone, or gold.</p><p>This version should also enable new enemy object types in expansions like AoFE to be counted by AIs.",
	itemsAffected: [cUpGaiaTypeCount, cUpGaiaTypeCountTotal],
	scriptingType: "ai"
}, {	
	number: "20120802-193356",
	year: 2012,
	month: 8,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20120802-193356 has been released! This update resolves 425: #UserPatch [Core Bug] Random teams are improperly distributed with auto-ordered player numbers. Thanks to Cysion, ryshep, and offwo for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120801-020703",
	year: 2012,
	month: 8,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20120801-020703 has been released! This update resolves 424: #UserPatch [AI Scripting] New symbols are required for AIs to determine pocket, flank, and map positioning. You can now use the #load symbols: UP-POCKET-POSITION and TEAM-TOGETHER, which should have existed from 1.0c lol. If TEAM-TOGETHER is enabled, the UP-POCKET-POSITION symbol will be set for all players in the pocket. If this symbol is not defined, the player is either flank or is just not in a team that can support a pocket. I think this should work for all map layouts, but please test it.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120731-214023",
	year: 2012,
	month: 7,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20120731-214023 has been released! This update resolves 423: #UserPatch [AI Scripting] AIs must be able to send a scout to explore the nearest border of the map on demand. The scout-border parameter has been added for up-send-scout. This parameter will send the scout to the nearest border relative to the home town center. In addition, the multiplayer anti-cheat system has been reversed to on by default, with a restricted feature to disable it.",
	itemsAffected: [cUpSendScout, pPositionType],
	scriptingType: "ai"
}, {	
	number: "20120730-184929",
	year: 2012,
	month: 7,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120730-184929 has been released! This update restores the anti-cheat system once again, and it should be stable. However, this time, it is optional and listed under the restricted features list (press F5 on the installer).",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120730-174000",
	year: 2012,
	month: 7,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120730-174000 has been released! This update removes the anti-cheat again for additional review. If only there was like a test lab with 50 computers running tests, all of these issues could have been resolved in a day lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120730-165634",
	year: 2012,
	month: 7,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120730-165634 has been released! This update resolves 422: #UserPatch [AI Scripting] AIs must be able to send a scout to explore the target player's town on demand. The scout-enemy parameter is now active for up-send-scout. This parameter will send the scout back to the target enemy's nearest building +/- 8 tiles in any direction at random, in order to better explore the target's town. If your ally finds the enemy town, you can target it for attacks, but not for forward building, since placement rejects the black area. With scout-enemy, you can discover the terrain near the building found by your ally.</p><p>This is not a cheat parameter, so you can only use it after you or an ally has actually located the target enemy.",
	itemsAffected: [cUpSendScout, pPositionType],
	scriptingType: "ai"
}, {	
	number: "20120730-015030",
	year: 2012,
	month: 7,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120730-015030 has been released! This update resolves 384: #UserPatch [AI Scripting] AIs must be able to direct scouts to find the enemy and other locations on demand. With up-send-scout, you can send either a land or water scout to a specific location on the map: scout-center, scout-opposite, scout-corner, scout-enemy. The scout-enemy parameter has no effect for now. The scout-opposite parameter is useful to move the scout away from the town, sending it to the mirror position of the home town center, relative to the center. This command will definitely be updated lol.",
	itemsAffected: [cUpSendScout, pPositionType],
	scriptingType: "ai"
}, {	
	number: "20120729-155445",
	year: 2012,
	month: 7,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120729-155445 has been released! This update restores the anti-cheat measures that were removed in the previous release. Might need to do more fixes later. I'm having trouble getting detailed reports. Running multiplayer game tests with 4 windows, running out of video memory, and watching all of them crash... good times lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120729-131129",
	year: 2012,
	month: 7,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120729-131129 has been released! This update removes some of the anti-cheat measures pending review. Apparently, there are some issues depending on how people resign.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120728-124800",
	year: 2012,
	month: 7,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120728-124800 has been released! This update resolves 421: #UserPatch [Core Bug] The boar luring support code for AIs fails to synchronize activity in multiplayer games. This would result in a crash on all clients if a lurer had to garrison into the town center. Thanks to ryshep and steven for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120728-083824",
	year: 2012,
	month: 7,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120728-083824 has been released! This update resolves 420: #UserPatch [Core Bug] Boar lurers for AIs may abandon the hunt after a garrison event under certain conditions. Now the lure should be more reliable, I hope.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120726-184641",
	year: 2012,
	month: 7,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120726-184641 has been released! This update resolves 419: #UserPatch [Core Bug] The command processor fails to translate player information under certain conditions. This was causing issues during coop games, where players were improperly handled by the anti-cheat code. Thanks again to Cysion and the AoFE team!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120726-171341",
	year: 2012,
	month: 7,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120726-171341 has been released! This update resolves 418: #UserPatch [Core Bug] Multiplayer games fail to start if all players are on the auto-order - player color. Thanks to Cysion and the AoFE testers for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120726-162436",
	year: 2012,
	month: 7,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120726-162436 has been released! This update resolves 417: #UserPatch [Core Bug] Executing certain commands during multiplayer lag may crash the game. Apparently, this one is being used to break games recently. Thanks to MuRRay (you know what this is lol), and Cysion for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120726-130308",
	year: 2012,
	month: 7,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120726-130308 has been released! This update resolves 416: #UserPatch [Core Bug] Dropsite distance for AIs becomes unreliable for concurrent hunting after a boar is down. To avoid breaking existing AIs, a new defconst named \"live-boar\" is available for dropsite-min-distance, so that AIs can actually determine how far the next boar is before the first boar is complete. The \"boar-hunting\" value remains unchanged and will reflect the nearest boar distance, regardless of whether it is active or down. Dropsite distance code has also been optimized and aligned.</p><p>Sorry about the additional boar stuff lol. Thanks to Archon, Finaldeath, ER, and II2N for feedback! LightTree, without your work, this would be well on the way to 2197 lol. Thank you!",
	itemsAffected: [cDropsiteMinDistance],
	scriptingType: "ai"
}, {	
	number: "20120725-182039",
	year: 2012,
	month: 7,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120725-182039 has been released! This update resolves 413: #UserPatch [AI Scripting] A new action is required for AIs to request hunters to support an active boar lure, 414: #UserPatch [AI Behavior] Boar lurers should request support before garrisoning into the town center, and 415: #UserPatch [Core Bug] Boar lurers for AIs fail to retreat to the town center under certain conditions. With up-request-hunters, you can attempt to request support hunters for the active boar lure at any time. This action is equivalent to what happens when a boar strikes a lurer and sn-minimum-boar-hunt-group-size is set to a total. Note that, depending on the state of your villagers, this command is not always guaranteed to reach the total specified. Thanks to Archon for the reports!",
	itemsAffected: [cUpRequestHunters],
	scriptingType: "ai"
}, {	
	number: "20120722-060800",
	year: 2012,
	month: 7,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120722-060800 has been released! This update resolves 412: #UserPatch [Core Bug] The idle farm bug fix contains code that may result in unintended behavior. Let's just say that farms were lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120720-011531",
	year: 2012,
	month: 7,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20120720-011531 has been released! This update resolves 411: #UserPatch [AI Behavior] Gatherers should retask if their target resource is unreachable due to other units. Villagers shouldn't try to retry 93843 times to get to a resource blocked by other villagers anymore. In addition, the issue where deer hunters wouldn't transition when they would arrive to gather from one that was already gone has also been fixed, I think lol.</p><p>Thanks to Archon and Finaldeath for the reports!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120718-040218",
	year: 2012,
	month: 7,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120718-040218 has been released! This update resolves 410: #UserPatch [Core Bug] Farmers may idle indefinitely if their farms are targeted by an enemy player. Epic fail bug for humans and AIs in 1.0c and 1.1. If you've ever seen your farmer just stop working on a farm, this probably fixes it. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120716-032105",
	year: 2012,
	month: 7,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20120716-032105 has been released! This update resolves 409: #UserPatch [AI Scripting] A new sn is required for AIs to control the dropsite-min-distance update event. Set sn-defer-dropsite-update to 1 to defer the dropsite-min-distance update until construction is complete. If set to 0, the dropsite update occurs when the building is placed on the map. Thanks to II2N and Duck for feedback!",
	itemsAffected: [snDeferDropsiteUpdate],
	scriptingType: "ai"
}, {	
	number: "20120715-184727",
	year: 2012,
	month: 7,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120715-184727 has been released! This update resolves 408: #UserPatch [AI Behavior] Dropsite distances should update after construction is complete to avoid dangerous areas. As long as AIs using simultaneous building construction check pending-objects to ensure only 1 camp/mill at a time, everything should work fine. The idea is to avoid 439857 lumberjacks, for example, from walking to a newly placed lumber camp foundation near a forest next to the enemy's town before the builder even gets there to notice that the area is unsafe. If the builder is able to safely finish constructing the dropsite, the odds of it being relatively safe are far higher. It also means that a castle probably won't be firing arrows on all of the lumberjacks as they walk to the new camp, since the builder got there without interruption.</p><p>Please test and let me know what you think ",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120711-140422",
	year: 2012,
	month: 7,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20120711-140422 has been released! This update resolves 407: #UserPatch [Core Bug] The unit-count and building-count functions improperly handle certain objects. This was a core bug in both 1.0c and 1.1, that caused unit-count and building-count to omit female villagers and town centers (!). A performance optimization is included that should help both humans and AIs. Thanks to Finaldeath for the reminder; it was on MuRRay's list for so long lol.",
	itemsAffected: [cUnitCount, cBuildingCount],
	scriptingType: "ai"
}, {	
	number: "20120710-175002",
	year: 2012,
	month: 7,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120710-175002 has been released! This update resolves 405: #UserPatch [Core Bug] Memory is misallocated within the game expansion xml manifest parser, and 406: #UserPatch [Core Bug] Without custom AIs, the player name replaces Computer on the game setup screen. Thanks so much to fen and ryshep for trying 934857 patch updates until we could figure out the cause (#405). The other issue was an indirect bug that was caused by the player color fix.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120710-093209",
	year: 2012,
	month: 7,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120710-093209 has been released! This update makes an change to the installer for displaying restricted features. The hold Ctrl + start SetupAoC method has been replaced by simply pressing \"F5\" after the installer appears.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120710-053550",
	year: 2012,
	month: 7,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120710-053550 has been released! This update resolves 404: #UserPatch [Core Bug] The interface loader fails to respect the manifest settings in Enhanced 1.0c mode. Just a little fix for Enhanced 1.0c ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120709-121942",
	year: 2012,
	month: 7,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120709-121942 has been released! This update resolves 403: #UserPatch [Request] Game expansions must be able to define the offsets for loading civilization interfaces. This adds 3 additional parameters to the \"civilizations\" element in the expansion xml manifest. Most expansions that add civs should set the stride to 30 and the offset to 0, moving the interface sets to 51100, 51130, and 51160. Do not overwrite interface ids 51155, 51156. Thanks, Cysion!</p><p>1. uiBaseId, default: 51100<br>- the root id storing interfaces designed for 800x600<br>2. uiStride, default: 20<br>- the number of ids allocated for each interface set (800x600, 1024x768, 1280x1024)<br>- uiBaseId:51100 and uiStride:20 means the 800 set starts at 51100, 1024 at 51120, 1280 at 51140<br>3. uiOffset, default: 2<br>- the offset to skip interface ids 51155 and 51156 if necessary (avoid this offset if you add civs)",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120706-074650",
	year: 2012,
	month: 7,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120706-074650 has been released! This update resolves 402: #UserPatch [Core Bug] Players on the auto-order color setting should not be synchronized like a coop. Thanks to ryshep for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120705-005340",
	year: 2012,
	month: 7,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120705-005340 has been released! This update resolves 401: #UserPatch [AI Scripting] New facts are required for AIs to count the number of enemy objects in town. With up-building-type-in-town, up-unit-type-in-town, and up-villager-type-in-town, you can count the number of once sighted enemy objects inside sn-maximum-town-size, even if they are temporarily out of view. These operate using the same data as up-enemy-buildings-in-town, etc. Associated FactIds have been added for use with up-get-fact (please see UserPatchConst.per).</p><p>Please note that, unlike most counting commands that read from cached values, these commands loop through the targetable object lists and perform the counting operation each time you execute them. For this reason, if you plan to query the same data many times in a rule pass, it's better to read the data once with up-get-fact and then check the goal.",
	itemsAffected: [cUpBuildingTypeInTown, cUpUnitTypeInTown, cUpVillagerTypeInTown, pFactId],
	scriptingType: "ai"
}, {	
	number: "20120704-221934",
	year: 2012,
	month: 7,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120704-221934 has been released! This update resolves 400: #UserPatch [AI Scripting] A new action is required for AIs to dynamically change their name during gameplay. With up-change-name, you can modify the name of the AI at any time. Due to the multiplayer synchronization requirement, please note that, even in single-player mode, there is a delay of at least 1 game turn before the change takes effect. Thanks to Finaldeath for the idea!",
	itemsAffected: [cUpChangeName],
	scriptingType: "ai"
}, {	
	number: "20120704-093325",
	year: 2012,
	month: 7,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120704-093325 has been released! This update resolves 399: #UserPatch [AI Scripting] A new fact is required for AIs to determine the target of a projectile attack. With up-projectile-target, you can perform comparisons on the class id of the latest target of a type of enemy projectile. Thanks to Archon for the idea!",
	itemsAffected: [cUpProjectileTarget],
	scriptingType: "ai"
}, {	
	number: "20120704-013102",
	year: 2012,
	month: 7,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120704-013102 has been released! This update resolves 398: #UserPatch [AI Behavior] AIs should gather non-converted sheep and turkeys at the town center. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120703-235351",
	year: 2012,
	month: 7,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20120703-235351 has been released! This update resolves 397: #UserPatch [AI Scripting] A new sn is required for AIs to place dropsites without a 1 tile buffer region. Set sn-allow-adjacent-dropsites to 1 to eliminate the standard requirement for a 1 tile buffer around mills, lumber camps, and mining camps. If set to 0, the 1 tile buffer is enforced as usual. I hope it works well, for the most part lol. Thanks to Archon and cake for the idea! #8 and 9 on the list?",
	itemsAffected: [snAllowAdjacentDropsites],
	scriptingType: "ai"
}, {	
	number: "20120703-204522",
	year: 2012,
	month: 7,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20120703-204522 has been released! This update resolves 78: #UserPatch [Request] Allow custom color selection for AIs. The game will now auto-correct any strange coop setups with AIs before the game begins. I decided against making the player numbers auto-switch on the game setup screen to avoid situations where there are many humans and AIs in the game and everyone is actively changing player numbers around. It was difficult to get to the player number you wanted without it getting stolen lol. Now, everyone should be able to freely set their player numbers without having to concern themselves with whether or not it's a broken setup. Thanks to LightTree and fen for the ideas!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120702-061433",
	year: 2012,
	month: 7,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20120702-061433 has been released! This update resolves 395: #UserPatch [AI Scripting] The strategic number for civilian offense should allow AI villagers to be more aggressive, and 396: #UserPatch [AI Scripting] A new sn is required to allow AIs to disable automatic attack group targeting. This update also resolves a minor idling bug.</p><p>sn-allow-civilian-offense: Set to 1 to allow villagers to participate as soldiers in town-size attacks. If set to 2, villagers will target all enemy villagers, instead of only builders, and buildings even if defensive military units are available. If set to 0, villagers will only be sent to attack enemy forward towers, without murder holes.</p><p>sn-disable-attack-groups: Set to 1 to disable automatic attack group targeting. Once groups are created, they can be used for defensive attack purposes using TSA. If set to 0, attack groups will perform offensive targeting as usual.",
	itemsAffected: [snAllowCivilianOffense, snDisableAttackGroups],
	scriptingType: "ai"
}, {	
	number: "20120630-015704",
	year: 2012,
	month: 6,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120630-015704 has been released! This update resolves 394: #UserPatch [AI Scripting] A new sn is required for AIs to target placement relative to the center of the map. Set sn-placement-to-center to 1 to force place-control to use the map center as the second point of reference for placement. The first point of reference is set with up-set-placement-data. If set to 0, the active target enemy's nearest building will become the second point of reference instead, once discovered. If sn-target-player-number is 0, the target enemy will be determined by sn-attack-winning-player. As with sn-placement-fail-delta, this sn is not stored with the per-building placement data. Thanks to LightTree for the idea!",
	itemsAffected: [snPlacementToCenter, cUpSetPlacementData],
	scriptingType: "ai"
}, {	
	number: "20120629-004027",
	year: 2012,
	month: 6,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120629-004027 has been released! This update resolves 393: #UserPatch [AI Scripting] The controlled building placement system for AIs requires more precision. Two sns have been added: sn-placement-zone-size and sn-placement-fail-delta. These sns are intended for use with place-forward and place-control build commands.</p><p>sn-placement-zone-size: Set to the size of the tile zone used for forward and controlled building placement. All build commands store this value and the up-set-placement-data information with each successful call. For every pass that a building cannot be placed, its zone size will be increased from this starting point. The default for this sn is 20. A small zone size (0) will provide more precise positioning. A large value allows you to surround the enemy when forward building.</p><p>sn-placement-fail-delta: Set to the value that will be added to the placement distance set by up-set-placement-data for every pass that a building cannot be placed. This sn does not affect forward building. It should be a low value (-2 to 2). The default is 0, which means that only the per-building zone-size is increased for each placement failure.</p><p>If both sn-placement-zone-size and sn-placement-fail-delta are set to 0 and you \"place-control\" on top of the home town center, you can simulate an automated building expansion system.",
	itemsAffected: [snPlacementZoneSize, snPlacementFailDelta],
	scriptingType: "ai"
}, {	
	number: "20120628-154602",
	year: 2012,
	month: 6,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120628-154602 has been released! This update resolves 392: #UserPatch [Core Bug] Obstructed builders may idle indefinitely for AIs under certain conditions. If you've ever seen a builder go idle forever after failing to reach a foundation, this should fix the problem. Thanks to fen for the report and rec!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120628-013004",
	year: 2012,
	month: 6,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120628-013004 has been released! This update is being released to collect feedback for #78: Allow custom color selection for AIs. Additional changes are pending. There are no checks yet for setting strange coop combinations, but all known slot shift issues should be resolved. It should not crash if you set strange stuff (the players will just override each other). If you have time, please test and let me know what you think.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120623-050319",
	year: 2012,
	month: 6,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120623-050319 has been released! This update resolves 389: #UserPatch [Core Bug] AIs should not retask villagers who are in the midst of a garrison action. This is what caused the freeze in Archon's jaguar game. The up-retask-gatherers and up-drop-resources commands should now be safe. Thanks to Archon for the report and rec!</p><p>Important note: the additional network systems are now under restricted features (Ctrl+Enter to run SetupAoC).",
	itemsAffected: [cUpRetaskGatherers, cUpDropResources],
	scriptingType: "ai"
}, {	
	number: "20120622-044133",
	year: 2012,
	month: 6,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120622-044133 has been released! This update resolves 385: #UserPatch [Core Bug] Player data is overwritten during file transfer when restoring an out-of-sync game. After an out-of-sync game is restored, the focus player of the recording would be broken for clients. This resolves that particular issue. The issue where ctrl+groups are lost cannot be resolved, unfortunately. ES stored the ctrl+group information with each unit (!!!), so when the host sends the updated game state, the client's out-of-sync data is replaced with the host's data, which can have a different number of objects and states. This means the out-of-sync data is never even read; it is discarded, deleted from the disk, and replaced entirely.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120622-002906",
	year: 2012,
	month: 6,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120622-002906 has been released! This update resolves 388: #UserPatch [Scenario Design] The scenario editor improperly rejects a value of -1 for certain trigger effects. Thanks to randomdude for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120621-012812",
	year: 2012,
	month: 6,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120621-012812 has been released! This update resolves 387: #UserPatch [AI Behavior] AIs should bring their sheep and turkeys under the town center before gathering. Livestock are automatically distributed to 4 sub-gather-points under the town center canopy. I think it works pretty well. Thanks to offwo for the idea (long time ago lol)!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120620-215053",
	year: 2012,
	month: 6,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20120620-215053 has been released! This update resolves 386: #UserPatch [Scenario Design] Negative attack deltas are not shown on the selected object information display. As for the building armor information, I wouldn't be surprised if someone out there would think that it would make the game easier or something, making \"expert\" players reject 1.1 lol. Maybe ask at aoczone or aokh for feedback on that? Thanks to randomdude for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120618-190004",
	year: 2012,
	month: 6,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120618-190004 has been released! This update resolves 382: #UserPatch [Scenario Design] Certain scenario editor controls must be able to accept negative numbers, and 383: #UserPatch [Scenario Design] The trigger effect to change object names must be able to process areas. The negative number fix applies to both Enhanced 1.0c and 1.1, but the change name fix only applies to 1.1 for sync reasons.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120614-231702",
	year: 2012,
	month: 6,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20120614-231702 has been released! This update resolves 381: #UserPatch [AI Scripting] A new fact is required for AIs to determine how much food remains on a boar. With up-remaining-boar-amount, you can figure out how much food remains on the boar that is currently being gathered from. This fact will return 65535 (invalid) if the target boar has not been gathered from, the boar no longer exists, or there is no other boar pending. This last part is important: if you are on your last boar, this fact will always return 65535. The example in the reference shows how it works.</p><p>In addition, you should hopefully never see 39485734985 lurers lol, and sn-minimum-boar-lure-group-size now defaults to 0. Setting sn-minimum-boar-lure-group-size to a high value (like 300 or something) will allow you to block double luring.",
	itemsAffected: [cUpRemainingBoarAmount],
	scriptingType: "ai"
}, {	
	number: "20120614-140905",
	year: 2012,
	month: 6,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20120614-140905 has been released! This update resolves 380: #UserPatch [AI Scripting] A new action is required for AIs to use cheat codes when they are enabled. The new up-cc-send-cheat action can be used with any cheat code. In addition, up-chat-data-to-all has been added for convenience. Thanks to ER for the idea!",
	itemsAffected: [cUpCcSendCheat, cUpChatDataToAll],
	scriptingType: "ai"
}, {	
	number: "20120613-000249",
	year: 2012,
	month: 6,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20120613-000249 has been released! This update resolves 379: #UserPatch [AI Scripting] A new sn is required for AIs to disable the special targeting priority for fortifications. Now, you can set the new sn-disable-tower-priority to 1 to prevent the local targeting system from giving special priority to towers and other ranged fortifications, including town centers and castles. If set to 0, these buildings will receive the usual special priority. In combination with sn-ignore-attack-group-under-attack:1, you can better avoid being lured by town centers during early attacks. Note: this sn requires a packet to be sent for each change in a multiplayer game, so please consider this when using it.",
	itemsAffected: [snDisableTowerPriority],
	scriptingType: "ai"
}, {	
	number: "20120612-120702",
	year: 2012,
	month: 6,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20120612-120702 has been released! This update resolves 378: #UserPatch [AI Behavior] Boar lurers for AIs should aim for two arrows and hold their position before retreating. Thanks to cake for the report and rec! This also includes some performance adjustments for the multiplayer fix. Please test if you have time!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120611-154514",
	year: 2012,
	month: 6,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20120611-154514 has been released (direct link to non-public version)! This update has a possible fix for 377: #UserPatch [Core Bug] Multiplayer games may fail due to dropped packets under certain conditions. Please test this version in multiplayer games and let me know if it breaks with an unresponsive vote panel. I hope this issue can be resolved as soon as possible, so if you have time, please test. I'm sorry for the trouble.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120610-151643",
	year: 2012,
	month: 6,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120610-151643 has been released! This update resolves 376: #UserPatch [Core Bug] Market counts are improperly checked under certain conditions. This has to do with the anti-cheat; sorry about that!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120610-125703",
	year: 2012,
	month: 6,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120610-125703 has been released! This update resolves 375: #UserPatch [Core Bug] The resign command may fail under certain circumstances in multiplayer games. There was an issue with the anti-cheat that would block resigns due to disconnection. In addition, with this release, a localized notification will appear onscreen if certain cheats are detected. It will say something like \"!!! Problem communicating with NAME-OF-SUSPECT ...\" The message, which the suspect will not see, is accompanied by the creepy spies sound effect, so players notice it.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120609-200504",
	year: 2012,
	month: 6,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120609-200504 has been released! This update resolves 374: #UserPatch [Core Bug] The up-reset-scouts command for AIs fails to synchronize in multiplayer games. In addition, various cheat hacks have been \"blocked\" for 373 (delete hack, resign hack, resource hack, etc.), but this is obviously a losing battle ",
	itemsAffected: [cUpResetScouts],
	scriptingType: "ai"
}, {	
	number: "20120608-045302",
	year: 2012,
	month: 6,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120608-045302 has been released! This update makes some minor changes to the installer and updates the included guide and reference information. There are no code changes in this one.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120604-220240",
	year: 2012,
	month: 6,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120604-220240 has been released! This update resolves 372: #UserPatch [AI Behavior] AIs must be able to discover markets and docks from allied human players for trade. With this fix, humans will now automatically \"tell\" allied AIs whenever they build a market or dock like sn-coop-share-information:1 for AIs. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120604-195710",
	year: 2012,
	month: 6,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120604-195710 has been released! This update resolves 371: #UserPatch [AI Scripting] A new symbol is required for AIs to determine whether or not a human is in the game. The #load symbol UP-HUMAN-IN-GAME is now available. I hope this will allow AIs to use more aggressive and even risky behavior when humans are present. Thanks for the idea, II2N!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120604-183547",
	year: 2012,
	month: 6,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120604-183547 has been released! This update resolves 369: #UserPatch [AI Scripting] A new fact is required for AIs to detect whether or not a timer is in the running state, and 370: #UserPatch [AI Scripting] A new action is required for AIs to disband specific types of internal unit groups. I'll just list the new stuff lol. Please see UserPatchConst.per for the defconsts.</p><p><strong>New Facts and Actions</strong><br>1. (up-timer-status inConstTimerId compareOp inOpTimerState)<br>- Use to check whether a timer is disabled, triggered, running, or a combination of them.<br>- Example: (up-timer-status tm-drop-food <= timer-triggered) ;returns true if the timer is disabled or triggered<br>2. (up-disband-group-type inConstGroupType)<br>- Use to disband all internal groups of the specified type. Units will not stop unless directed by up-reset-unit.<br>- Example: (up-disband-group-type group-type-land-explore) ;disbands internal land explore groups",
	itemsAffected: [cUpTimerStatus, cUpDisbandGroupType],
	scriptingType: "ai"
}, {	
	number: "20120604-021943",
	year: 2012,
	month: 6,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120604-021943 has been released! This update resolves 368: #UserPatch [Core Bug] Player activity states may become inconsistent after restoring a saved game. It would cause AIs to permanently lose the ability to perform tasks with buildings and break their ability to determine whether or not they can afford units and techs. Thanks to ryshep for the rec!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120603-043600",
	year: 2012,
	month: 6,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20120603-043600 has been released! This update resolves 367: #UserPatch [AI Scripting] A new action is required for AIs to halt and disband soldier explore groups. With the new \"up-reset-scouts\" command, soldier explore groups are immediately halted and disbanded. Thanks to Promi for finding that up-reset-unit (the hand-button stop command) only halts units, but does not remove explorers from their explore groups, which causes scouting to restart after a few seconds.</p><p><strong>New Actions</strong><br>1. (up-reset-scouts)<br>- Use to halt and disband all soldier/land explore groups, in combination with appropriate sns.<br>- Set sn-total-number-explorers, sn-number-explore-groups, and sn-minimum-civilian-explorers before execution.<br>- Example: (up-reset-scouts) ;stop all scouts",
	itemsAffected: [cUpResetScouts, cUpResetUnit],
	scriptingType: "ai"
}, {	
	number: "20120602-163715",
	year: 2012,
	month: 6,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20120602-163715 has been released! This update resolves 366: #UserPatch [Core Bug] Defensive targeting for monastery units loops indefinitely while conversion fails. If you've ever seen monks during TSA do a strange hopping dance, moving almost nowhere in place, this is the fix lol. It would waste so much cpu time trying over and over to retarget that many other units would be forced to remain idle, as well. I think the improvement is quite noticeable.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120602-035951",
	year: 2012,
	month: 6,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20120602-035951 has been released! This update resolves 365: #UserPatch [Core Bug] Monastery units block standard defensive unit targeting for AIs when conversion fails. This should hopefully reduce some more unit idling during TSA.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120601-140228",
	year: 2012,
	month: 6,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20120601-140228 has been released! This update resolves 364: #UserPatch [AI Behavior] Walls and gates should always have lower priority than other targetable buildings. Now, there should definitely be more reliable break-in-wall-then-invade behavior without needing to make excessive defensive priority changes when using targeted, player-distance-based TSA.</p><p>Some later clarification from scripter64: the defensive priorities for walls and gates are now significantly reduced during targeting comparisons. The assigned values are still used to determine if walls and gates are targetable, etc.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120524-053358",
	year: 2012,
	month: 5,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20120524-053358 has been released! This update resolves 363: #UserPatch [Core Bug] The settings conversion code fails to adapt the population cap data from 1.0c. Now, you won't get the blank field for the population cap when it converts from player.nfp to player.nfz. I'm sorry about the trouble that caused, OverUsedChewToy.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120524-021450",
	year: 2012,
	month: 5,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20120524-021450 has been released! This update resolves 23: #UserPatch [Economy] Town centers are not always placed optimally for resource gathering. With the new sn-town-center-placement, you can simply set it to a building type, like lumber-camp, and the system will emulate that placement style for subsequent town centers. Note that it is complete emulation, so if you set it to mill, it will use sn-mill-max-distance for its maximum-town-size.</p><p>1. Sn: sn-town-center-placement: snId:266, default:0, range:0-899<br>- Set to the building type to emulate for town center placement. If set to 0, the town center will be placed as usual.<br>- Example: (set-strategic-number sn-town-center-placement mill) ;attempt to emulate mill placement",
	itemsAffected: [snTownCenterPlacement],
	scriptingType: "ai"
}, {	
	number: "20120523-220000",
	year: 2012,
	month: 5,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120523-220000 has been released! This update just makes the installer check if you already have wndmode.dll and presents the same setting for the checkbox. Yes, I timed it for the 220000 ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120523-053227",
	year: 2012,
	month: 5,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120523-053227 has been released! This update resolves 32: #UserPatch [Military] AIs have very little control over tower placement, and 55: #UserPatch [AI Scripting] A new sn is required for market defense. Now, AIs can ignore elevation with sn-ignore-tower-elevation. In combination with up-build place-control, you can usually get fairly precise placement, so you can tower your market, etc. You still can't place in restricted zones, like the farm area of a TC.</p><p>1. Sn: sn-ignore-tower-elevation: snId:265, default:0, range:0-1<br>- Set to 1 to ignore elevation when placing towers. If set to 0, the AI will try to seek elevation advantage.<br>- Example: (set-strategic-number sn-ignore-tower-elevation 1) ;ignore elevation for tower placement",
	itemsAffected: [snIgnoreTowerElevation],
	scriptingType: "ai"
}, {	
	number: "20120522-063940",
	year: 2012,
	month: 5,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120522-063940 has been released! This update resolves 362: #UserPatch [Core Bug] The defensive targeting system for AIs fails to prioritize buildings over walls. Thanks to Archon for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120522-040547",
	year: 2012,
	month: 5,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120522-040547 has been released! This update resolves 361: #UserPatch [AI Scripting] The sn-total-number-explorers value should not be used to halt AI explorers. I did some minor alignment changes on the scouting code while I was at it. You can use up-reset-unit to halt the explorer (among other things lol), after changing explorer settings.",
	itemsAffected: [snTotalNumberExplorers],
	scriptingType: "ai"
}, {	
	number: "20120521-050808",
	year: 2012,
	month: 5,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120521-050808 has been released! This update resolves 360: #UserPatch [AI Scripting] A new fact is required for AIs to determine how many units are actively defending. With the new \"up-defender-count\" fact, you can check to see if your TSA attack is actually actively targeting anything or if it's just idling. If, after expecting your new town-size to initiate a defensive attack, the response from this command is far less than expected for several consecutive turns, your target may be unreachable by the defensive targeting system (target has been walled for protection by one of their allies, etc.) and you may need to switch targets. This has also been made available for up-get-fact (see UserPatchConst.per for the FactId).</p><p><strong>New Facts</strong><br>1. (up-defender-count compareOp inOpValue)<br>- Use to check the number of units actively defending within sn-maximum-town-size.<br>- Example: (up-defender-count >= 10) ;returns true if the AI is actively defending its town with at least 10 units",
	itemsAffected: [cUpDefenderCount, cUpGetFact],
	scriptingType: "ai"
}, {	
	number: "20120518-221457",
	year: 2012,
	month: 5,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120518-221457 has been released! This update resolves 359: #UserPatch [Core Bug] Timing data must be reset for AIs during guard and reset commands. Just some adjustments for code consistency.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120518-184643",
	year: 2012,
	month: 5,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120518-184643 has been released! This update resolves 358: #UserPatch [Core Bug] The defensive targeting system fails to transition when a target is unreachable. Complete epic fail regression bug lol. I'm sorry about the trouble.",
	itemsAffected: [],
	scriptingType: ""
}, {	
	number: "20120517-133220",
	year: 2012,
	month: 5,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20120517-133220 has been released! This update resolves 357: #UserPatch [Core Bug] Port forwarding for upnp-compatible routers fails to operate on Windows 2000. Unfortunately, windowed mode and port forwarding don't seem to work on Windows 98, so they probably don't work on Windows 95/ME. I'm sorry ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120515-212325",
	year: 2012,
	month: 5,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120515-212325 has been released! This update resolves absolutely nothing. Actually, it just contains some fixes for the installer to warn people before they break their non-1.0c installation. It will now prompt if they try to patch 1.0, 1.0b, etc.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120515-161905",
	year: 2012,
	month: 5,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120515-161905 has been released! This update resolves 356: #UserPatch [Core Bug] The music volume adjustment controls fail to operate for CD audio. I'm surprised that no one noticed this until now lol.</p><p>Thanks to AntonSynytsia on Twitter for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120515-125613",
	year: 2012,
	month: 5,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120515-125613 has been released! This update resolves 355: #UserPatch [Core Bug] Excessive command messages in a multiplayer game may cause a list overflow. Thanks to LightTree and LordGravewish for the reports and recs!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120512-144434",
	year: 2012,
	month: 5,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20120512-144434 has been released! This update resolves 354: #UserPatch [Core Bug] The unit garrison controller for AIs improperly handles town center attack events. The game was checking town-center 109 as a class id instead of a type id lol.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120511-124309",
	year: 2012,
	month: 5,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20120511-124309 has been released! This update resolves 353: #UserPatch [AI Scripting] New symbols are required for AIs to determine the civilizations of other players. Now, there are #load symbols to determine who your allies are and who your \"enemies\" are. For these symbols, anyone who isn't an ally is considered an enemy. Speaking of double posts lol.</p><p><strong>New Symbols</strong><br>- UP-[NAME]-CIV-ALLY: defined for players who are allies<br>- UP-[NAME]-CIV-ENEMY: defined for players who are not allies<br>- Examples: UP-BRITON-CIV-ALLY, UP-AZTEC-CIV-ENEMY",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120510-110349",
	year: 2012,
	month: 5,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120510-110349 has been released! This update resolves 67: #UserPatch [AI Scripting] AIs cannot easily determine the number of players in a game. There are many updates in this one, including a new fact, up-players-in-game. This has also been enabled for up-get-fact (see UserPatchConst.per). I'll just list everything else :lol:</p><p><strong>New Facts</strong><br>1. (up-players-in-game inConstPlayerStance compareOp inOpValue)<br>- Use to check the number of active players in the game of the specified stance.<br>- The ally count for inConstPlayerStance will include the local player in the total.<br>- Example: (up-players-in-game any >= 3) ;returns true if there are at least 3 players left in the game</p><p><strong>New Symbols</strong><bR>- UP-[1-8]-PLAYER-GAME: defined as the total number of players<br>- UP-[1-8]-PLAYER-TEAM: defined to represent the team member total<br>- UP-ALLY-IN-GAME: defined if the player has an ally<br>- UP-MULTIPLE-ENEMIES: defined if there is more than 1 enemy<br>- UP-TEAM-DISADVANTAGE: defined when an enemy team is larger",
	itemsAffected: [cUpPlayersInGame, cUpGetFact],
	scriptingType: "ai"
}, {	
	number: "20120510-002448",
	year: 2012,
	month: 5,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120510-002448 has been released! This update simply ensures that new settings files for 1.1 are properly set to the default population limit of 75 like 1.0c. Other than that, there are no changes.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120509-233737",
	year: 2012,
	month: 5,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120509-233737 has been released! This update resolves 352: #UserPatch [Core Bug] Game settings must be stored separately for 1.1 in order to preserve 1.0c. You will need to set the population limit to a valid number or you'll get the 25pop default lol. Now, settings for 1.1 should be stored in player.nfz, while 1.0c stores its settings in player.nfp, as always. In addition, the Team Random option has been removed from Enhanced 1.0c. If a player with original 1.0c joined an Enhanced 1.0c game, the game would likely crash on startup. Enhanced 1.0c cannot be allowed to break compatibility with original 1.0c. The purpose of Enhanced 1.0c is to allow people to watch saved games and recordings from 1.0c, or work with scenarios. It has all of the network and gameplay bugs from 1.0c (including that Expert FFA lockup bug), so it should not be used for normal gameplay.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120509-222822",
	year: 2012,
	month: 5,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120509-222822 has been released! This update resolves 351: #UserPatch [Core Bug] Palisade wall flags fail to animate in custom scenario games. The wall flag animation fix has been optimized and moved into the core v1.1 update.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120509-131009",
	year: 2012,
	month: 5,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120509-131009 has been released! This update makes many updates to the installer, eliminating the need to manually drop the support library dlls into the \"age2_x1\" folder, etc. Now, you can add/remove wndmode.dll and miniupnpc.dll very easily. I also cleaned up the list of features and updated that section of the guide.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120509-071948",
	year: 2012,
	month: 5,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120509-071948 has been released! This update resolves 350: #UserPatch [Core Bug] Wall lines created by the random map generator have an excessive number of gates. Now, maps like Arena should have the standard number of gates, I hope. As for the other fix, there's nothing we can do. If things like this are forced, experts will stay on 1.0c (like some people have stayed with 1.0a lol), which would be a terrible, since the normal people will stay with whatever the experts are using.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120508-220623",
	year: 2012,
	month: 5,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120508-220623 has been released! This update resolves 349: #UserPatch [Request] The multiple building selection (MBS) queue system must be an optional feature. Due to the requests of LightTree and several expert players at aoczone, this feature has been removed from the core v1.1 update. Here's the description from the guide: This will enable the multiple building selection (MBS) queue system. If you have multiple buildings selected, any units that you train will be automatically distributed between the buildings. For multiplayer games, all players must install, or not install, this feature to avoid out-of-sync errors. This out-of-sync is intentional in order to avoid players giving themselves an unfair advantage.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120508-044906",
	year: 2012,
	month: 5,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120508-044906 has been released! This update resolves 348: #UserPatch [AI Scripting] A new command is required for AIs to perform calculations with cost sets. Now, you can setup one set of cost goals, add some stuff, setup another set of cost goals, then add or subtract the sets together. The compatibility build has been updated, as well.</p><p><strong>New Actions</strong><br>1. (up-add-cost-data inExtendedGoalId typeOp inOpCount)<br>- Use to add inOpCount instances of the cost data stored at inExtendedGoalId to the current cost data.<br>- Provide the first of 4 consecutive goals for food, wood, stone, and gold with inExtendedGoalId.<br>- Only extended goals from 41 to 508 are acceptable for inExtendedGoalId.<br>- Example: (up-add-cost-data gl-military-cost-food c: 1) ;add the referenced cost data to the current cost data",
	itemsAffected: [cUpAddCostData],
	scriptingType: "ai"
}, {	
	number: "20120508-004142",
	year: 2012,
	month: 5,
	day: 8,
	version: 1.1,
	notes: "UserPatch.9X 20120508-004142 has been released! Compatibility build update for unsupported systems.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120508-004142",
	year: 2012,
	month: 5,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120508-004142 has been released! This update resolves 347: #UserPatch [AI Scripting] A new math operator is required for AIs to negate values. The \"up-add-cost-for-object\" and \"up-add-cost-for-research\" commands have been renamed as shown below. In addition, both of these commands now support negative values to subtract cost data. Finally, a new mathOp has been added that performs simple negation.</p><p><strong>New Actions</strong><br>1. (up-add-object-cost typeOp inOpObjectId typeOp inOpCount)<br>- Use to add inOpCount objects of type inOpObjectId to the current cost data.<br>- Example: (up-add-object-cost c: spearman c: 4) ;add 4 spearmen to the current cost data<br>2. (up-add-research-cost typeOp inOpTechId typeOp inOpCount)<br>- Use to add inOpCount techs of type inOpTechId to the current cost data.<br>- Example: (up-add-research-cost c: ri-loom c: -1) ;subtract loom from the current cost data</p><p><strong>New Operators</strong><br>1. mathOp type:neg<br>- Use to negate the value of the opParameter.<br>- Example: (up-modify-goal gl-value g:neg gl-value) ;gl-value will be -gl-value",
	itemsAffected: [cUpAddObjectCost, cUpAddResearchCost, pMathOp],
	scriptingType: "ai"
}, {	
	number: "20120507-230438",
	year: 2012,
	month: 5,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120507-230438 has been released! This update resolves 346: #UserPatch [AI Scripting] New commands are required for AIs to calculate cost data for objects and techs. Please read the following list of stuff to see how each command works. I'm sorry it took so long, jd!</p><p><strong>New Actions</strong><br>1. (up-setup-cost-data inConstResetCost inOutExtendedGoalId)<br>- Use to assign the first of 4 consecutive goals for food, wood, stone, and gold as the current cost data.<br>- Only extended goals from 41 to 508 are acceptable for outExtendedGoalId.<br>- Example: (up-setup-cost-data 1 gl-cost-food) ;use gl-cost-food and the 3 following goals for cost<br>2. (up-add-cost-for-object typeOp inOpObjectId typeOp inOpCount)<br>- Use to add inOpCount objects of type inOpObjectId to the current cost data.<br>- Example: (up-add-cost-for-object c: spearman c: 4) ;add 4 spearmen to the current cost data<br>3. (up-add-cost-for-research typeOp inOpTechId)<br>- Use to add inOpTechId to the current cost data.<br>- Example: (up-add-cost-for-research c: ri-loom) ;add loom to the current cost data<br>4. (up-get-cost-delta outExtendedGoalId)<br>- Use to get the difference between player resources and the current cost data.<br>- Provide the first of 4 consecutive goals for food, wood, stone, and gold with outExtendedGoalId.<br>- Only extended goals from 41 to 508 are acceptable for outExtendedGoalId.<br>- Example: (up-get-cost-delta gl-delta-food) ;get the difference into the 4 goals starting from gl-delta-food<br>5. (up-reset-cost-data outExtendedGoalId)<br>- Use to reset 4 consecutive goals starting from outExtendedGoalId to 0.<br>- Only extended goals from 41 to 508 are acceptable for outExtendedGoalId.<br>- Example: (up-reset-cost-data gl-cost-food) ;set 4 goals starting from gl-cost-food to 0",
	itemsAffected: [cUpSetupCostData, cUpAddObjectCost, cUpAddResearchCost, cUpGetCostDelta, cUpResetCostData],
	scriptingType: "ai"
}, {	
	number: "20120507-045736",
	year: 2012,
	month: 5,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120507-045736 has been released! This update resolves 345: #UserPatch [Core Bug] Merging subformations may cause an infinite loop when the maximum is reached. This bug in 1.0c affected the recent Expert FFA 8-Player game, as Viper somehow collected 50 units into a formation. Epic timing. GG lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120506-215820",
	year: 2012,
	month: 5,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120506-215820 has been released! This update resolves 344: #UserPatch [AI Scripting] A new fact is required for AIs to compare constants with other data. The new \"up-compare-const\" command just lets you compare raw numbers or defconsts with other data. Good times lol. Thanks to Finaldeath for the idea!</p><p><strong>New Facts</strong><br>1. (up-compare-const inConstValue compareOp inOpValue)<br>- Use to perform a comparison with a constant value.<br>- Example: (up-compare-const feudal-villagers > 20) ;returns true if the \"feudal-villagers\" defconst is greater than 20",
	itemsAffected: [cUpCompareConst],
	scriptingType: "ai"
}, {	
	number: "20120506-194852",
	year: 2012,
	month: 5,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120506-194852 has been released! This update resolves 343: #UserPatch [AI Behavior] Player distance should seek past walls in order to improve target selection. Now, player-distance will try to avoid locking at a wall or gate, instead preferring to find the distance to the nearest actual enemy building. If you use player-distance to set the TSA town-size, the targeting system will seek backward if a wall obstructs the path, and, once it's breached, your units will be more likely to move in.",
	itemsAffected: [cUpPlayerDistance, pFactId],
	scriptingType: "ai"
}, {	
	number: "20120506-174134",
	year: 2012,
	month: 5,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120506-174134 has been released! This update resolves 342: #UserPatch [Core Bug] The game may crash under certain conditions while using the farm queue. This was caused by the counting fix. Thanks to LordGravewish for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120505-233604",
	year: 2012,
	month: 5,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120505-233604 has been released! This update resolves 341: #UserPatch [AI Scripting] New commands are required for AIs to determine the size of the threat in town. These new commands have associated FactId parameters for use with up-get-fact (see UserPatchConst.per). You can only read the local player's information with these. Thanks for the idea, Lazarus!</p><p><strong>New Facts</strong><br>1. (up-enemy-buildings-in-town compareOp inOpValue)<br>- Use to check the number of targetable enemy buildings inside sn-maximum-town-size.<br>- Example: (up-enemy-buildings-in-town > 0) ;returns true if there is an enemy building in town<br>2. (up-enemy-units-in-town compareOp inOpValue)<br>- Use to check the number of targetable enemy units, except villagers, inside sn-maximum-town-size.<br>- Example: (up-enemy-units-in-town > 5) ;returns true if there are more than 5 enemy units in town<br>3. (up-enemy-villagers-in-town compareOp inOpValue)<br>- Use to check the number of targetable enemy villagers inside sn-maximum-town-size.<br>- Example: (up-enemy-villagers-in-town >= 2) ;returns true if there are at least 2 enemy villagers in town",
	itemsAffected: [cUpEnemyBuildingsInTown, cUpEnemyUnitsInTown, cUpEnemyVillagersInTown, pFactId],
	scriptingType: "ai"
}, {	
	number: "20120505-195407",
	year: 2012,
	month: 5,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120505-195407 has been released! This update resolves 340: #UserPatch [Scenario Design] The map copy feature of the scenario editor fails to preserve the appearance of trees. Now, when pasting the copied area, you won't see 34853849 clones of the same tree. This always bothered me while I was trying to make scenarios lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120505-164216",
	year: 2012,
	month: 5,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120505-164216 has been released! This update resolves 339: #UserPatch [AI Scripting] Unit counting commands should consider queued units in addition to those in training. Now, the X-count-total commands, including pending-objects, will operate using the true number of pending units, both training and queued.",
	itemsAffected: [cUnitTypeCountTotal, cUpObjectTypeCountTotal, cUpPendingObjects],
	scriptingType: "ai"
}, {	
	number: "20120505-140343",
	year: 2012,
	month: 5,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120505-140343 has been released! This update resolves 338: #UserPatch [AI Scripting] A new action is required for AIs to cancel unit training and research. With the following command, research and training can be cancelled at all buildings of the specified type or class id. This may be helpful when used with unit queuing.</p><p><strong>New Actions</strong><br>1. (up-reset-building inConstPreserveResearch typeOp inOpBuildingId)<br>- Use to reset all buildings of type inOpBuildingId. This will cancel research if inConstPreserveResearch is 0, and all training.<br>- Example: (up-reset-building 1 c: town-center) ;reset all activity at town centers, except those performing research",
	itemsAffected: [cUpResetBuilding],
	scriptingType: "ai"
}, {	
	number: "20120505-013416",
	year: 2012,
	month: 5,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120505-013416 has been released! This update replaces the previous version to fix a \"little\" issue with the installer, which could corrupt the modification process. Other than that, nothing has changed",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120504-230554",
	year: 2012,
	month: 5,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120504-230554 has been released! This update resolves 337: #UserPatch [AI Scripting] A mechanism is required for AIs to queue more than one unit per building. If you set the new \"sn-enable-training-queue\" to 1, buildings will be able to queue an additional unit. If it is left at the default of 0, each building will train only one unit at a time, like before. This sn takes effect immediately in rules and affects all of the training commands: can-train, can-train-with-escrow, train, up-can-train, and up-train.</p><p>1. Sn: sn-enable-training-queue: snId:264, default:0, range:0-1<br>- Set to 1 to allow an additional unit to be queued at each building. If set to 0, buildings will train one unit at a time.<br>- Example: (set-strategic-number sn-enable-training-queue 1) ;enable the training queue",
	itemsAffected: [snEnableTrainingQueue, cCanTrain, cCanTrainWithEscrow, cTrain, cUpCanTrain, cUpTrain],
	scriptingType: "ai"
}, {	
	number: "20120502-170916",
	year: 2012,
	month: 5,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20120502-170916 has been released! This update resolves 336: #UserPatch [Core Bug] Extended AI goals and timers are initialized to a different value than 1.0c. Goals and timers in 1.0c were set to -1 by default. In 1.1, the extended goals and timers were set to 0 by default. Now, all goal and timer data is uniform, with -1 as the default. Always remember to initialize data, such as goals, before using them, regardless. Thanks to II2N for the timer report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120429-201835",
	year: 2012,
	month: 4,
	day: 29,
	version: 1.1,
	notes: "UserPatch.9X 20120429-201835 has been released! This is not a new version. I've just updated the compatibility build for Windows 9X, ME, NT, and 2000 (unsupported operating systems). I wish I didn't have to keep this updated",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120429-201835",
	year: 2012,
	month: 4,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120429-201835 has been released! This update resolves 335: #UserPatch [Core Bug] The boar garrison fix for AIs requires synchronization to avoid out-of-sync issues. Sorry about the trouble! Thanks, fen!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120429-160041",
	year: 2012,
	month: 4,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120429-160041 has been released! This update just includes a few performance optimizations for the previous two boar fixes. I think boar hunting works fairly well, at this point.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120429-144015",
	year: 2012,
	month: 4,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120429-144015 has been released! This update resolves 334: #UserPatch [AI Behavior] Boar lurers should react and retreat faster after being struck by a boar. Now, they should take less hits before retreating, I hope.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120429-130401",
	year: 2012,
	month: 4,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120429-130401 has been released! This update resolves 333: #UserPatch [AI Behavior] Villagers attacked by boar fail to garrison if they are not actively hunting. Thanks to fen for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120428-074045",
	year: 2012,
	month: 4,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120428-074045 has been released! This update resolves 332: #UserPatch [Core Bug] The network address list truncates host names longer than a full ipv4 address. Thanks to LordGravewish for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120427-100054",
	year: 2012,
	month: 4,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120427-100054 has been released! This update resolves 331: #UserPatch [Core Bug] The upnp port forwarding system fails to consider manually forwarded ports. Thanks to ryshep and sh for feedback!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120427-064842",
	year: 2012,
	month: 4,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120427-064842 has been released! This update resolves 330: #UserPatch [Core Bug] Resources are lost by gatherers if a resource carry overflow occurs. They will now drop if necessary. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120427-035042",
	year: 2012,
	month: 4,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120427-035042 has been released! This update resolves 329: #UserPatch [Core Bug] AI gatherers may lose their resources under certain conditions after a retask event. Thanks to marathon for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120426-060128",
	year: 2012,
	month: 4,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120426-060128 has been released! This update makes some changes for the upnp port forwarding fix. Now, it will not forward 47624 until the player attempts to host a game. In addition, it will try to ensure that it has a unique port number on the LAN before forwarding, in order to hopefully allow multiple people on a LAN to communicate with the outside and vice-versa. Please let me know if it works!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120426-012216",
	year: 2012,
	month: 4,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120426-012216 has been released! This update resolves 328: #UserPatch [AI Behavior] Villagers should only be selected to lure boar if they are at maximum hitpoints. In addition, the boar luring sns should have more consistent behavior now. The initial luring group size is determined exclusively by sn-minimum-boar-lure-group-size. If this is set excessively high, luring a new boar will be blocked, which is useful to ensure that all new hunters will help with an existing lure only. If sn-minimum-boar-lure-group-size is set to 0, a new boar lure is guaranteed to start if sn-minimum-number-hunters requests at least 1 hunter and sn-enable-boar-hunting is set appropriately.</p><p>The sn-minimum-boar-hunt-group-size value is used only to determine how many hunters should be active during a lure. Each time a lurer is hit, it will try to request up to sn-minimum-boar-hunt-group-size hunters in total to help with the hunt. If it's set to 7, for example, it will request support hunters until there are 7 total hunters. After it is down, each boar will accept a maximum of 8 gatherers. The 9th will have to seek a new boar, if sn-minimum-boar-lure-group-size permits it.",
	itemsAffected: [snMinimumBoarLureGroupSize],
	scriptingType: "ai"
}, {	
	number: "20120424-232929",
	year: 2012,
	month: 4,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20120424-232929 has been released! This update resolves 327: #UserPatch [AI Scripting] New commands are required for AIs to calculate min/max data from players. The mathOp has 2 new functions: min and max. The min op will ensure that the value will be no lower than the parameter, while the max op will ensure that the value will be no higher. Thanks to Finaldeath for the suggestion!</p><p>In addition, 2 new combination fact/actions have been added: up-get-fact-min and up-get-fact-max. These new commands, along with up-get-fact-sum, do not accept the every-* playerIds. They will only accept the any-* playerIds, since these can store this-any-* data and there are more variations of the any-* playerIds than the every-* ones. If up-get-fact-min and up-get-fact-max succeed in setting their goal, the special this-any-* playerId will be set to the matching player number. These should be useful for military superiority checks and more, I think.</p><p><strong>New Facts and Actions</strong><br>1. (up-get-fact-sum inPlayerId inConstFactId inConstFactParam outGoalFactData)<br>- Use to store the sum of facts for any-* wildcards into outGoalFactData. inConstFactParam can be 0.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-fact-sum any-enemy military-population 0 gl-population) ;store the sum into gl-population<br>2. (up-get-fact-min inPlayerId inConstFactId inConstFactParam outGoalFactData)<br>- Use to store the min value of facts for any-* wildcards into outGoalFactData. inConstFactParam can be 0.<br>- The special this-any-* playerId will be available for use in the actions section of a rule.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-fact-min any-enemy current-score 0 gl-population) ;store the min data into gl-population<br>3. (up-get-fact-max inPlayerId inConstFactId inConstFactParam outGoalFactData)<br>- Use to store the max value of facts for any-* wildcards into outGoalFactData. inConstFactParam can be 0.<br>- The special this-any-* playerId will be available for use in the actions section of a rule.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-fact-max any-enemy current-score 0 gl-population) ;store the max data into gl-population</p><p><strong>New Operators</strong>1. mathOp type:min<br>- Use to limit the minimum value of the result to the opParameter.<br>- Example: (up-modify-goal gl-value c:min 10) ;gl-value will be no less than 10<br>2. mathOp type:max<br>- Use to limit the maximum value of the result to the opParameter.<br>- Example: (up-modify-sn sn-maximum-town-size c:max 40) ;sn-maximum-town-size will be no greater than 40</p><p>Editor's note: the min and max MathOps described above were later switched, so that min will store the lesser of the current goal value or the value specified, and max will store the greater of the two.",
	itemsAffected: [pMathOp, cUpGetFactSum, cUpGetFactMin, cUpGetFactMax],
	scriptingType: "ai"
}, {	
	number: "20120424-095559",
	year: 2012,
	month: 4,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20120424-095559 has been released! This update resolves 326: #UserPatch [Core Bug] The upnp port forwarding feature may crash the game under certain conditions. Thanks to offwo and sh for the help!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120423-135909",
	year: 2012,
	month: 4,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120423-135909 has been released! This update resolves 325: #UserPatch [Request] Add automatic port forwarding for playing direct ip with a upnp-enabled router. This won't work if upnp has been disabled on the router or the router has been misconfigured beyond recognition lol. Note, however, that the built-in windows ssdp/upnp system services do not have to be enabled for this to work. Here's how to enable it (copy/paste from readme lol):</p><p><strong>Port Forwarding Notes</strong><br>- Copy \"miniupnpc.dll\" from \"Libraries\" into the \"age2_x1\" folder<br>- Ports will be forwarded dynamically as required for listening<br>- Only use if you can't directly forward 2300-2400, 47624 TCP/UDP<br>- UPNP must be enabled on your router for this feature<br>- Remove \"miniupnpc.dll\" from the \"age2_x1\" folder to disable it",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120421-130345",
	year: 2012,
	month: 4,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120421-130345 has been released! This update includes performance optimizations for all of the up-get-* commands. In addition, I've modified the network transfer code again, which I hope resolves the connectivity issues.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120420-180340",
	year: 2012,
	month: 4,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20120420-180340 has been released! This update resolves 68: #UserPatch [AI Scripting] A mechanism is required to calculate sums with wildcard player ids. I believe this was originally requested by Suriel; it was so long ago lol. Now, with up-get-fact-sum, you can get the sum of every-enemy's military-population, etc. All of the following commands will operate as either a fact or an action in a rule. For best performance, use the command that is most direct. For example, don't use up-get-player-fact with my-player-number; just use up-get-fact.</p><p><strong>New Facts and Actions</strong><br>1. (up-get-fact inConstFactId inConstFactParam outGoalFactData)<br>- Use to store a fact for my-player-number into outGoalFactData. inConstFactParam can be 0.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-fact military-population 0 gl-population) ;store the AI's data into gl-population<br>2. (up-get-target-fact inConstFactId inConstFactParam outGoalFactData)<br>- Use to store a fact for target-player into outGoalFactData. inConstFactParam can be 0.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-target-fact population 0 gl-population) ;store the target data into gl-population<br>3. (up-get-focus-fact inConstFactId inConstFactParam outGoalFactData)<br>- Use to store a fact for focus-player into outGoalFactData. inConstFactParam can be 0.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-focus-fact civilian-population 0 gl-population) ;store the focus data into gl-population<br>4. (up-get-player-fact inPlayerId inConstFactId inConstFactParam outGoalFactData)<br>- Use to store a fact for inPlayerId into outGoalFactData. inConstFactParam can be 0.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-player-fact my-player-number food-amount 0 gl-food) ;store \"food-amount\" into gl-food<br>5. (up-get-fact-sum inPlayerId inConstFactId inConstFactParam outGoalFactData)<br>- Use to store the sum of facts for multi-player wildcards into outGoalFactData. inConstFactParam can be 0.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-fact-sum every-enemy military-population 0 gl-population) ;store the sum into gl-population",
	itemsAffected: [cUpGetFact, cUpGetTargetFact, cUpGetFocusFact, cUpGetPlayerFact, cUpGetFactSum],
	scriptingType: "ai"
}, {	
	number: "20120419-114808",
	year: 2012,
	month: 4,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20120419-114808 has been released! This update resolves 324: #UserPatch [Maps & RMS] Random map scripts must be able to request nomad-style starting resources. Now rm scripts can use a new \"nomad_resources\" command under PLAYER_SETUP to request nomad starting resource distribution. In addition, the \"ai_info_map_type\" command has been extended to 4 parameters, in order to allow random map scripts to set new #load symbols for AIs: UP-NOMAD-STYLE and UP-MICHI-STYLE. Please update your map if you currently use \"ai_info_map_type\".</p><p><strong>New RM Commands</strong><br>1. ai_info_map_type inConstMapName inConstIsNomad inConstIsMichi inConstZero<br>- Set inConstMapName to the value that best identifies your rms script for AIs.<br>- Set inConstIsNomad to 1 if this is nomad style, or 0 if it is not.<br>- Set inConstIsMichi to 1 if this is michi style, or 0 if it is not.<br>- Set inConstZero parameter to 0.<br>- Location: under the <PLAYER_SETUP> section<br>- Example: ai_info_map_type BLACK_FOREST 1 1 0 ;BLACK-FOREST-MAP, UP-NOMAD-STYLE, UP-MICHI-STYLE #load<br>- Values for inConstMapName:<br>ARABIA, ARCHIPELAGO, ARENA, BALTIC, BLACK_FOREST, COASTAL, CONTINENTAL, CRATER_LAKE, FORTRESS, GHOST_LAKE, GOLD_RUSH, HIGHLAND, ISLANDS, MEDITERRANEAN, MIGRATION, MONGOLIA, NOMAD, OASIS, RIVERS, SALT_MARSH, SCANDANAVIA, TEAM_ISLANDS, YUCATAN, CUSTOM<br>2. nomad_resources<br>- No parameters are required for this command.<br>- Location: under the <PLAYER_SETUP> section<br>- Example: nomad_resources ;set starting resources like nomad",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20120419-075249",
	year: 2012,
	month: 4,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20120419-075249 has been released! This update resolves 323: #UserPatch [Core Bug] AI units may walk on water if they are retargeted during transport. This issue has existed for a long time. Finally, Cysion provided this scenario, which made it very easy to recreate the failure. It happens on original 1.0c, as well. Thanks, Cysion!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120419-050202",
	year: 2012,
	month: 4,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20120419-050202 has been released! This update resolves 322: #UserPatch [AI Scripting] A new load symbol is required for AIs to detect a multiplayer game. You can now detect #load-if-defined UP-MULTIPLAYER-GAME. Thanks to Duck for the idea! In addition, forget everything I wrote about 20120418-193806 lol. The changes are now:</p><p>up-allied-resource-amount - was \"up-allied-resource\" and \"up-resource-value\"<br>- corresponds to \"up-resource-amount\" for self<br>- for \"up-get-player-fact\", use the \"resource-amount\" FactId for both (IMPORTANT, BREAKING CHANGE)<br>up-allied-resource-percent - was \"up-resource-percent\"<br>- corresponds to \"up-resource-percent\" for self (this command is new)<br>- for \"up-get-player-fact\", use the \"resource-percent\" FactId for both<br>up-get-allied-target - still exists<br>- deprecated in favor of up-allied-sn+sn-target-player-number, up-get-player-fact+allied-sn<br>- please remove references to this sooner rather than later<br>up-resource-value - removed<br>- removed in favor of \"up-allied-resource-amount\"<br>- please remove references to this immediately</p><p>Summary of current resource commands:<br>For my-player-number exclusively: up-resource-amount, up-resource-percent<br>For allied players: up-allied-resource-amount, up-allied-resource-percent<br>Please update FactId defconsts for \"up-get-player-fact\" from UserPatchConst.per",
	itemsAffected: [cUpResourceAmount, cUpResourcePercent, cUpAlliedResourceAmount, cUpAlliedResourcePercent],
	scriptingType: "ai"
}, {	
	number: "20120418-193806",
	year: 2012,
	month: 4,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120418-193806 has been released! This update makes some changes to some command names: up-allied-resource and up-allied-resource-percent. The names were getting a bit long and lol, so I think this is an improvement. Note that up-allied-resource still exists, however, up-allied-resource-percent has already been dropped, since no one could have implemented it so soon lol. The defconsts in UserPatchConst.per have been updated accordingly. Please update your AIs to the new names as soon as possible and remove any deprecated commands. The old stuff won't be dropped any time soon, though, so please don't worry. Beta :lol:</p><p><strong>New Command Naming/Adjustments</strong><br>- up-get-allied-target (exists): deprecated in favor of up-allied-sn+sn-target-player-number, up-get-player-fact+allied-sn<br>- up-allied-resource (exists): renamed up-resource-value<br>- up-allied-resource-percent (removed): renamed up-resource-percent",
	itemsAffected: [cUpAlliedResourceAmount, cUpAlliedResourcePercent],
	scriptingType: "ai"
}, {	
	number: "20120418-174301",
	year: 2012,
	month: 4,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120418-174301 has been released! This update resolves 321: #UserPatch [AI Scripting] A new fact is required to read floating point resource amounts from players. This fact is like up-allied-resource, except it multiplies the value by 100 before converting it to an integer, so you can finally read resource amounts like 0.30 as 30, instead of just receiving a 0. This command also works with my-player-number. In addition, allied-resource-percent (39) has been added for up-get-player-fact. Thanks to fen for the idea!</p><p><strong>New Facts</strong><br>1. (up-allied-resource-percent inPlayerId inConstResourceAmount compareOp inOpValue)<br>- Use to perform a comparison with an allied player's (human or AI) internal resource value * 100.<br>- Example: (up-allied-resource-percent any-ally amount-tribute-inefficiency < 30) ;returns true if coinage is complete",
	itemsAffected: [cUpAlliedResourcePercent, cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20120418-165510",
	year: 2012,
	month: 4,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120418-165510 has been released! This update makes yet another adjustment for multiplayer games. I've increased the required timeout significantly to see if it helps with dropped packets. Don't worry about logs anymore, as the issue is clearly packet loss. Thanks to offwo, sh, and ryshep for their help with the logs!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120418-133910",
	year: 2012,
	month: 4,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120418-133910 has been released! This update resolves 320: #UserPatch [AI Scripting] A new action is required for AIs to find specific players in sequence. Now, in addition to the old up-find-player, there is a up-find-next-player. The only difference between these commands is that the last parameter is used by up-find-next-player to determine which player number should be selected next. The old up-find-player command disregards the initial value of the goal that is passed into the command. Both set this goal to the new result.</p><p>In addition, both commands can now use a new \"find-ordered\" value for FindPlayerMethod. This will return the highest matching player number for the first result (up-find-player), then each matching player number in ascending order afterward if you use up-find-next-player. The other FindPlayerMethods work as expected, so up-find-player+find-closest will give you the nearest player number, and up-find-next-player+find-closest will then cycle toward the farthest. At the end of any sequence, up-find-next-player will go back to the start.</p><p><strong>New Actions</strong><br>1. (up-find-next-player inConstPlayerStance inConstFindPlayerMethod inOutGoalPlayerId)<br>- Use to find the next active player in the game based on the provided information.<br>- Example: (up-find-next-player enemy find-ordered gl-next-player) ;stores the player number after gl-next-player<br>- Example: (up-find-player any find-ordered gl-number-players) ;stores the highest matching player number",
	itemsAffected: [cUpFindPlayer, cUpFindNextPlayer],
	scriptingType: "ai"
}, {	
	number: "20120417-185547",
	year: 2012,
	month: 4,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20120417-185547 has been released! This update resolves 319: #UserPatch [Core Bug] Executing up-set-placement-data under certain conditions will crash the game. Thanks to LarzPorsinna for the report! In addition, the inOpDistance parameter for this command has been extended. Its new range is -254 to 254.",
	itemsAffected: [cUpSetPlacementData],
	scriptingType: "ai"
}, {	
	number: "20120417-141720",
	year: 2012,
	month: 4,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20120417-141720 has been released! This update adds even more information to the \"Debug network logging\" feature for when errors occur during multiplayer communications.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120417-115146",
	year: 2012,
	month: 4,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20120417-115146 has been released! This update resolves 318: #UserPatch [Core Bug] Multiplayer command messages are queued with an incorrect data size. I have no idea what negative effects his bug may have been causing, but, in the best case scenario where nothing was misinterpreting data, at least memory usage will be reduced a bit. This issue was confirmed by ES_MattP, existing in the 1.0c network code.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120416-210803",
	year: 2012,
	month: 4,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20120416-210803 has been released! This update resolves 317: #UserPatch [Core Bug] Gates are limited to the extent that AIs are likely to wall themselves inside. I think we've all seen this problem before lol.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120416-093415",
	year: 2012,
	month: 4,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20120416-093415 has been released! This update resolves 316: #UserPatch [Core Bug] Executing up-build more than once per AI rule pass will crash the game. Note that, even now, only 1 build/up-build command is allowed to succeed per AI rule pass. Subsequent build commands will silently fail. Thanks to Holtzclaw for the report!</p><p>One other thing: for convenience, any rule that takes the \"EscrowState\" goal parameter can now be left as 0 to ignore using any goal and just operate as not-with-escrow: (up-build place-normal 0 c: barracks) = (build barracks).",
	itemsAffected: [pEscrowState],
	scriptingType: "ai"
}, {	
	number: "20120415-111210",
	year: 2012,
	month: 4,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120415-111210 has been released! This update resolves 315: #UserPatch [AI Scripting] AIs must be able to perform more accurate placement for buildings. Now, up-build has a new PlacementType: place-control. In combination with up-set-placement-data and up-reset-placement, we might be able to get some very interesting building placements lol. Note: docks cannot be targeted using place-control... yet.</p><p>1. (up-set-placement-data inPlayerId inConstObjectId typeOp inOpDistance)<br>- Use to specify placement information for subsequent \"up-build place-control\" commands.<br>- Set inPlayerId to the AI's player number or an ally. The focus-player and this-* ids are accepted, as well.<br>- Set inConstObjectId to focus placement on the latest object of that type. -1 = the home tc.<br>- Set inOpDistance to a positive or negative value to influence relative placement; range: -128 to 127.<br>- Be careful when attempting to place with insufficient exploration.<br>- Relative placement is based on either the target-player's location or, if unavailable, the center of the map.<br>- Example: (up-set-placement-data my-player-number -1 c: -25) ;place 25 tiles behind the home tc<br>- Example: (up-set-placement-data this-any-ally lumber-camp c: 2) ;2 tiles from this ally's latest lumber-camp<br>2. (up-reset-placement typeOp inOpBuildingId)<br>- Use to clear the placement list for the specified building type, if it seems blocked.<br>- Example: (up-reset-placement c: barracks) ;clears all pending barracks without a foundation",
	itemsAffected: [cUpSetPlacementData, cUpResetPlacement],
	scriptingType: "ai"
}, {	
	number: "20120414-153037",
	year: 2012,
	month: 4,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20120414-153037 has been released! This update resolves 314: #UserPatch [Core Bug] Interface graphics may be drawn improperly leading to horizontal pixel artifacts. Thanks to ES_MattP for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120414-114609",
	year: 2012,
	month: 4,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20120414-114609 has been released! This update resolves 313: #UserPatch [Core Bug] Buildings may be constructed at an accelerated rate under certain conditions. This is a game-breaking bug for v1.0c, and I'm being entirely serious. No, for real this time lol. Marathon has seen it, but I cannot describe what it is in detail for obvious reasons. Thanks to Cysion for the report and Dreams from aoczone for providing the rec!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120414-064319",
	year: 2012,
	month: 4,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20120414-064319 has been released! This update resolves 312: #UserPatch [AI Scripting] A new sn is required to control the preferred gather points for livestock. Now, you can control whether or not sheep and turkeys only gather at the town-center. Changing this sn requires a packet for mp synchronization, so please consider this.</p><p>1. Sn: sn-livestock-to-town-center: snId:263, default:0, range:0-1<br>- Set to 1 to require livestock, such as sheep, to gather at the town center. If set to 0, they will gather at mills, as well.<br>- Example: (set-strategic-number sn-livestock-to-town-center 1) ;bring sheep and turkeys to the town-center only",
	itemsAffected: [snLivestockToTownCenter],
	scriptingType: "ai"
}, {	
	number: "20120413-094627",
	year: 2012,
	month: 4,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20120413-094627 has been released! This update resolves 311: #UserPatch [AI Behavior] Villagers should respond to predators with the attack action instead of hunting. If you've ever seen a villager try to fight a pack of wolves, randomly switching targets, unable to focus against a single wolf, this fixes it. Thanks to fen for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120413-030239",
	year: 2012,
	month: 4,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20120413-030239 has been released! This update resolves 310: #UserPatch [Core Bug] AIs may fail to attack distant objects using the defensive targeting system. I hope this finally ends the issues with TSA failures and idling on maps like Oasis.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120413-000322",
	year: 2012,
	month: 4,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20120413-000322 has been released! This update adjusts the networking fix and adds game-time and command id information to the logs created with the \"Debug network logging\" feature. I'm waiting for at least one, but hopefully more, games to be run where all players are logging, something goes wrong, someone in the game collects logs from everyone in the game, zips them all together or something, and uploads them. Offwo sent a set of logs before, but the players in that game were using different versions of the patch. Sh tried recently, as well, but only had the log from his side. Thanks to both for trying, at least! I'm sorry about the trouble.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120410-211451",
	year: 2012,
	month: 4,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120410-211451 has been released! This update includes an experimental change to eliminate congestion control for mp networking, in order to help ensure that small packets are not blocked for excessive periods of time.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120410-053549",
	year: 2012,
	month: 4,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120410-053549 has been released! This update resolves 309: #UserPatch [Core Bug] The up-pending-objects command fails to properly calculate unit lines, and attempts a fix for the vote panel breaks, etc. Whether or not it works, who knows!",
	itemsAffected: [cUpPendingObjects],
	scriptingType: "ai"
}, {	
	number: "20120409-175600",
	year: 2012,
	month: 4,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120409-175600 has been released! This update makes some adjustments for the \"Debug network logging\" feature. If anyone plays mp games and experiences issues, please get everyone in the game to install this feature before playing, so we can collect information and fix everything. Please see this <a href=\"http://forums.aiscripters.com/viewtopic.php?p=48716#p48716\">post</a> for more information.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120408-213719",
	year: 2012,
	month: 4,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120408-213719 has been released! This update resolves 307: #UserPatch [AI Scripting] The up-reset-unit command must be able to stop units in formation, and 308: #UserPatch [AI Scripting] A new action is required in order to regain control over attack-now groups. Thanks to LightTree for the ideas!</p><p>1. Action: (up-reset-attack-now)<br>- Use to unset the infinite targeting loop flag for groups sent by attack-now.<br>- Example: (up-reset-attack-now) ;unset attack-now flag",
	itemsAffected: [cUpResetUnit, cUpResetAttackNow],
	scriptingType: "ai"
}, {	
	number: "20120408-025503",
	year: 2012,
	month: 4,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120408-025503 has been released! This update resolves 306: #UserPatch [AI Scripting] The build system should not block if a build command fails to execute. You should now be able to use build commands without can-build and everything shouldn't break. However, the 1 build list item per turn limitation is still in effect. Thanks, Lazarus!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120407-173747",
	year: 2012,
	month: 4,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120407-173747 has been released! This update resolves 305: #UserPatch [AI Scripting] Allow AI scripts to define text strings with the defconst command. You can now do something like this:</p><p>(defconst script-name \"Something!\")<br>(defrule<br>(true)<br>=><br>(chat-to-all script-name)<br>(disable-self)<br>)</p><p>This can be used for #load-switched chat messages and various other purposes. Note, however, that like up- commands, the 1.0c parser cannot be allowed to \"see\" defconsts with text strings, or you will get ERR2004: Missing identifier.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120407-124121",
	year: 2012,
	month: 4,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120407-124121 has been released! This update resolves 304: #UserPatch [AI Behavior] Resource targeting priorities should be adjusted to avoid excessive distribution. It attempts to reduce instances where villagers spread themselves unnecessarily to other resources. The effect is most obvious with sheep. Please let me know how it works.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120406-201949",
	year: 2012,
	month: 4,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120406-201949 has been released! This update resolves 303: #UserPatch [AI Scripting] A new sn is required to configure local wall and gate targeting for AIs. Now, sn-wall-targeting-mode controls whether or not AIs will automatically target nearby walls and gates. In order to maintain multiplayer sync, this sn will be transferred each time it is set, so please consider this when using it. Thanks to LightTree for the suggestion!</p><p>1. Sn: sn-wall-targeting-mode: snId:262, default:0, range:0-1<br>- Set to 1 to allow military units to automatically target nearby walls and gates. If set to 0, they will likely be ignored.<br>- Example: (set-strategic-number sn-wall-targeting-mode 1) ;auto-target walls and gates",
	itemsAffected: [snWallTargetingMode],
	scriptingType: "ai"
}, {	
	number: "20120406-171724",
	year: 2012,
	month: 4,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120406-171724 has been released! This update resolves 302: #UserPatch [AI Behavior] The defensive targeting system should not idle while targeting unreachable buildings. If this fix works as intended, TSA AIs will never idle for anything ever again. Thanks again to LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120406-142936",
	year: 2012,
	month: 4,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120406-142936 has been released! This update resolves 301: #UserPatch [AI Behavior] The local unit targeting system for AIs should not ignore nearby walls and gates. Thanks to LightTree for feedback!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120405-201340",
	year: 2012,
	month: 4,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120405-201340 has been released! This update resolves 300: #UserPatch [AI Scripting] AIs require additional control over targeting for civilian defense. With this release, sn-allow-civilian-defense (not the new sn-allow-civilian-offense) has been changed to provide for additional states as suggested by Duck:<br>0 - blocks all villager defense except against gaia (wolves, etc.)<br>1 - like 1.0c, where it defends against only weak, non-ranged units<br>2 - defends against any weak units, except warships and ranged units that are quicker than villagers<br>3 - defends against any weak units, except warships</p><p>For reference, villager speed: default: 0.8, wheelbarrow: 0.88, hand-cart: 0.97.<br>For archer-line and skirmisher-line, speed: 0.96.</p><p>With sn-allow-civilian-offense set to 1, the \"weak units\" check is eliminated, allowing for a more aggressive response. Despite the speed advantage, even with only wheelbarrow, early ranged units are swiftly eliminated by villagers with minimal losses and luring. Thanks to Duck, ER, LightTree, and marathon for feedback!",
	itemsAffected: [snAllowCivilianDefense, snAllowCivilianOffense],
	scriptingType: "ai"
}, {	
	number: "20120404-234340",
	year: 2012,
	month: 4,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120404-234340 has been released! This update resolves 299: #UserPatch [AI Scripting] AIs must be able to defend against weak ranged units with villagers. Now, when set to 1, the old sn-allow-civilian-defense will permit villagers to respond to lone skirmisher attacks and hopefully other things, like a single archer standing just outside TC range, locking the villagers inside. I believe this sn was entirely useless before, as it was never checked by the code during gameplay. It did not enable/disable the villager response to weak infantry. Getting lured by ranged units is a possibility, but, from testing, wheelbarrow takes care of that, for the most part.</p><p>Note, however, that, like the default response to infantry, it evaluates the danger before responding, so you won't see a weak villager attempting to defend themselves against an army of invading champions and heavy cavalry archers, etc. In combination with sn-allow-civilian-offense, though, you can force this kind of response lol. If both sn-allow-civilian-defense and sn-allow-civilian-offense are set to 1, villagers will swarm the attackers, without regard for safety. This might be useful with Spanish Supremacy, as a last resort to avoid collapse, or just for the lol.</p><p>Thanks to ER for the suggestion. We had this conversation quite a while ago ",
	itemsAffected: [snAllowCivilianDefense],
	scriptingType: "ai"
}, {	
	number: "20120404-162745",
	year: 2012,
	month: 4,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120404-162745 has been released! This update resolves 298: #UserPatch [AI Behavior] Forward builders should not be distracted by villager assistance requests. Thanks to jd and fen for the feedback!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120404-130959",
	year: 2012,
	month: 4,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120404-130959 has been released! This update resolves 297: #UserPatch [Core Bug] Performing a multiple building queue with limited resources may crash the game. Thanks to offwo and marathon for the ...crash. I'm sorry ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120403-171643",
	year: 2012,
	month: 4,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20120403-171643 has been released! This update resolves 296: #UserPatch [Core Bug] Mouse wheel hotkey commands are improperly executed multiple times. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120403-145535",
	year: 2012,
	month: 4,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20120403-145535 has been released! This update resolves 295: #UserPatch [Request] Allow players to distribute unit training over multiple selected buildings. Thanks to ryshep, Cysion, sh, and LightTree for feedback! Basse, that Ctrl+S fix is available for Enhanced 1.0c, yes, and the scenarios are compatible with old 1.0c, as well.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120401-174514",
	year: 2012,
	month: 4,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20120401-174514 has been released! This update resolves 294: #UserPatch [Core Bug] Fog of war is improperly reset during recording playback after task switching. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120331-155407",
	year: 2012,
	month: 3,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20120331-155407 has been released! This update resolves 293: #UserPatch [Scenario Design] Toggle the scenario editor snap-to-grid positioning system with Ctrl+S. Just a little feature for scenario designers.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120330-050326",
	year: 2012,
	month: 3,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120330-050326 has been released! This update makes a few changes and adjustments to some previous fixes. It may improve performance in certain situations, with regard to the stop-and-go movement issues.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120329-093457",
	year: 2012,
	month: 3,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120329-093457 has been released! This update resolves 292: #UserPatch [Core Bug] Selecting a garrisoned ram plus a trebuchet or mangonel will crash the game. Thanks to Cysion, once again, for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120329-083837",
	year: 2012,
	month: 3,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120329-083837 has been released! This update resolves 291: #UserPatch [Core Bug] The load saved game screen fails to restore selections for certain filenames. If a file had more than one \".\" in its name, the previous selection would not be restored. Thanks to Cysion for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120329-061634",
	year: 2012,
	month: 3,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120329-061634 has been released! This update resolves 290: #UserPatch [Core Bug] Player object list handlers may perform operations with uninitialized memory. This bug in 1.0c, which was confirmed by ES_MattP, is extensive. At least 60 locations in the code had to be modified for this fix. I can't guarantee that all instances have been corrected. This may have contributed to oos issues and various AI failures.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120328-091534",
	year: 2012,
	month: 3,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120328-091534 has been released! This update resolves 288: #UserPatch [Request] The in-game economic statistics display should be reordered for consistency, and 289: #UserPatch [AI Scripting] AIs must be able to retreat to houses and other low priority objects. The first simply puts the stats in this order: idle villagers, idle fishing ships, fishing ships, farmers, fishermen, foragers, hunters, shepherds, lumberjacks, gold miners, stone miners, builders, repairers, and trade units. Thanks to Duck for reporting the retreat issue!",
	itemsAffected: [cUpRetreatTo],
	scriptingType: "ai"
}, {	
	number: "20120327-044109",
	year: 2012,
	month: 3,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120327-044109 has been released! This update resolves 287: #UserPatch [Core Bug] Map style dropdown is not hidden when restoring a multiplayer scenario game. Another from StepStw on Twitter. Thanks again!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120327-034922",
	year: 2012,
	month: 3,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120327-034922 has been released! This update resolves 286: #UserPatch [Core Bug] Pressing the print screen key may result in a crash or no response. Thanks to StepStw on Twitter, once again!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120327-001121",
	year: 2012,
	month: 3,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120327-001121 has been released! This update resolves 285: #UserPatch [Request] Separate gold and stone miners on the economic statistics display.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120326-150404",
	year: 2012,
	month: 3,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120326-150404 has been released! This update resolves 284: #UserPatch [Core Bug] Window fails to resize if the game is minimized during a resolution switch. Thanks again to StepStw on Twitter for the report! He even provided a video demonstrating the issue. The tornado cheats are blocked for multiplayer games, so it couldn't have been used for that purpose without some kind of hack.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120326-012935",
	year: 2012,
	month: 3,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120326-012935 has been released! This update resolves 283: #UserPatch [Core Bug] Executing the torpedo cheat on an invalid player number will crash the game. This bug made using torpedo scary in large games lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120325-230028",
	year: 2012,
	month: 3,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120325-230028 has been released! This update resolves 282: #UserPatch [Core Bug] Rewinding to the original state of an all-visible rec fails to restore polo. Thanks to StepStw on Twitter for the report and recs!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120325-041210",
	year: 2012,
	month: 3,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120325-041210 has been released! This update resolves 281: #UserPatch [Core Bug] Interface screens should be centered for non-standard resolutions. In addition, I've made a change for multiplayer games, so that the resolution changes earlier to avoid a monitor delay issue, which was reported by fen. Thanks, fen!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120324-172309",
	year: 2012,
	month: 3,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20120324-172309 has been released! This update resolves 280: #UserPatch [AI Scripting] Resource amounts should be rounded to the nearest integer before returning. This affects all data related to the up-resource-amount and up-allied-resource commands. Thanks to marathon for the report!",
	itemsAffected: [cUpResourceAmount, cUpResourcePercent, cUpAlliedResourceAmount, cUpAlliedResourcePercent],
	scriptingType: "ai"
}, {	
	number: "20120324-142906",
	year: 2012,
	month: 3,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20120324-142906 has been released! This update resolves 278: #UserPatch [AI Scripting] A new fact is required to access internal resource data from any allied player, and 279: #UserPatch [Core Bug] The game cannot be paused after the viewer is defeated in single player mode. Now, you can perform comparisons with any ally's internal resource data (ResourceAmount type from UserPatchConst.per) using the \"up-allied-resource\" fact. This works exactly like up-resource-amount, except that it reads allied resource data. In addition, allied-resource (38) has been added for use with up-get-player-fact. We really need a complete list of these internal resource data ids (almost 200 of them). I remember offwo had one, but I lost the log lol. Thanks to II2N for reporting the pause issue!</p><p>New Fact:<br>(up-allied-resource inPlayerId inConstResourceAmount compareOp inOpValue)<br> Use to perform a comparison with an allied player's (human or AI) internal resource value.<br>- Example: (up-allied-resource any-ally food < 50) ;returns true if any ally's food < 50",
	itemsAffected: [cUpAlliedResourceAmount, cUpAlliedResourcePercent, cUpGetFact, cUpGetPlayerFact, pFactId],
	scriptingType: "ai"
}, {	
	number: "20120323-143320",
	year: 2012,
	month: 3,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120323-143320 has been released! This update resolves 277: #UserPatch [Scenario Design] Player population limits are reset improperly by the scenario loader. Thanks to offwo for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120323-133519",
	year: 2012,
	month: 3,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120323-133519 has been released! This update resolves absolutely nothing lol. I streamlined the readme to present more useful information for people just wanting to update to v1.1 (they wouldn't care that AIs now have 2000 rules or that there are now 50 timers lol). In addition, the installer was modified a bit.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120323-121251",
	year: 2012,
	month: 3,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120323-121251 has been released! This update resolves 276: #UserPatch [AI Behavior] Boar should only have their dropsite-min-distance calculated to town centers. I saw this post from marathon earlier and remembered that I had forgotten to fix this issue a long time ago. Thanks, marathon!",
	itemsAffected: [cDropsiteMinDistance],
	scriptingType: "ai"
}, {	
	number: "20120322-132921",
	year: 2012,
	month: 3,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20120322-132921 has been released! This update contains some optimizations and changes to the previous networking fixes. I'm still researching the oos issue. It will take some time before that is finally fixed.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120321-164104",
	year: 2012,
	month: 3,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120321-164104 has been released! This update resolves 275: #UserPatch [Core Bug] Pre-game chat lines are corrupted if the 50 line maximum is exceeded. This is closely associated with the previous fix. Thanks, LightTree!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120321-114412",
	year: 2012,
	month: 3,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20120321-114412 has been released! This update resolves 274: #UserPatch [Core Bug] Chat messages are lost every 50 lines, as the buffer loops back to the start. This one is for LightTree; I'm sorry it took so long :'",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120320-153830",
	year: 2012,
	month: 3,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20120320-153830 has been released! This update resolves 273: #UserPatch [Core Bug] Trade cogs from computer players may fail to travel to distant docks. I noticed dozens of idle trade cogs while watching some recs, then made a scenario for 1.0c to test, and there was definitely a problem. I hope it works better now.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120320-103853",
	year: 2012,
	month: 3,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20120320-103853 has been released! This update resolves 272: #UserPatch [Core Bug] Extended population limits are not reflected on the mp restore setup screen. This issue was a visual thing that caused the population number in restored multiplayer games to appear incorrectly if the 1000pop optional feature is installed. It was only bugged on the setup screen, though; in-game, and for gameplay purposes, it was fine.</p><p>Thanks to StepStw on Twitter for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120319-140908",
	year: 2012,
	month: 3,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20120319-140908 has been released! This update resolves 271: #UserPatch [AI Scripting] A new fact is required to access strategic numbers from allied computer players. As with allied-goal, allied-sn (37) has been added to UserPatchConst.per, for use with up-get-player-fact. This feature essentially makes up-get-allied-target obsolete, since you can now read an ally's sn-target-player-number directly lol. AI communication can now be quite powerful.</p><p>New Fact:<br>(up-allied-sn inPlayerId inSnId compareOp inOpValue)<br>- Use to perform a comparison with an allied AI's strategic number value.<br>- Example: (up-allied-sn any-ally sn-maximum-town-size > 50) ;returns true if any ally has sn-maximum-town-size > 50",
	itemsAffected: [cUpAlliedSn, pFactId, cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20120318-121708",
	year: 2012,
	month: 3,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20120318-121708 has been released! This update resolves 268: #UserPatch [Core Bug] The game may crash if a trade building is selected as gaia (natural wonders), 269: #UserPatch [AI Scripting] A new fact is required to access goal data from allied computer players, and 270: #UserPatch [AI Scripting] A new action is required to delete distant farms outside dropsite range.</p><p>In addition, allied-goal (36) has been added to UserPatchConst.per, for use with up-get-player-fact. I think the ability to read goals from allied AIs will make communication far more efficient than exchanging taunts. Note that this is not a new category of goals; it simply means that allied AIs can read each other's standard goals from 1-512. Thanks to offwo for reporting 268, marathon for the allied-goal idea, and Promi for delete-distant-farms!</p><p>New Fact:<br>(up-allied-goal inPlayerId inGoalId compareOp inOpValue)<br>- Use to perform a comparison with an allied AI's goal variable.<br>- Example: (up-allied-goal any-ally gl-something == 5) ;returns true if any ally has a goal with the same #id == 5</p><p>New Action:<br>(up-delete-distant-farms typeOp inOpDropDistance)<br>- Use to delete all farms that exist outside the specified drop distance.<br>- Example: (up-delete-distant-farms c: 8) ;deletes farms where the dropsite-min-distance > 8",
	itemsAffected: [cUpAlliedGoal, cUpDeleteDistantFarms, cUpGetFact, cUpGetPlayerFact, pFactId],
	scriptingType: "ai"
}, {	
	number: "20120317-063946",
	year: 2012,
	month: 3,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20120317-063946 has been released! This update resolves 266: #UserPatch [Core Bug] Achievements music is broken by alt+tab and continues to play past closure, and 267: #UserPatch [Core Bug] Groups cannot be created by ctrl+numpad 1-9 like ctrl+primary 1-9. Thanks to Cysion for reporting 267! That achievements music was so lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120316-113508",
	year: 2012,
	month: 3,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20120316-113508 has been released! This update resolves 264: #UserPatch [Core Bug] AI script errors are not displayed for recorded multiplayer games, and 265: #UserPatch [Core Bug] AI gatherer manipulation commands may send units to invalid locations. The issue with the villagers walking on water should be fixed by 265. It was caused by drop-resources and retask-gatherers redirecting villagers between tasks (often running away from an attack). Also, I forgot to mention that drop-resources and retask-gatherers will now work with fishing ships",
	itemsAffected: [cUpDropResources, cUpRetaskGatherers],
	scriptingType: "ai"
}, {	
	number: "20120313-051804",
	year: 2012,
	month: 3,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20120313-051804 has been released! This update resolves 263: #UserPatch [Core Bug] Trade building transaction values may be rendered improperly over shallows. This bug was introduced with the trade-across-shallows fix. I forgot to update the code that shows the transaction value (gold) when you select a market or dock. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120307-020011",
	year: 2012,
	month: 3,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120307-020011 has been released! This update resolves 262: #UserPatch [Request] Provide an optional feature to enable population caps up to 1000. Copy/paste from Guide.html lol: The 1.1 update provides population caps up to 250 by default. This feature enables caps up to 1000, in increments of 25. Performance and game balance should be carefully considered before using this. Computer players, in particular, may slow the game significantly after a certain point.</p><p>I think games will fall apart due to epic lag with these higher limits, but for fun human games, it's there, lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120306-110653",
	year: 2012,
	month: 3,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120306-110653 has been released! This update resolves 261: #UserPatch [AI Scripting] AIs must be able to discern between POPULATION-CAP-200 and higher values. There are now symbols for POPULATION-CAP-225 and POPULATION-CAP-250, and a new symbol named POPULATION-CAP-EXTENDED, which is defined by the game when the cap is greater than 200. It can be used to check if a POPULATION-CAP-200 symbol is real or has only been set for backward compatibility.</p><p>With POPULATION-CAP-EXTENDED, AIs will be less prone to failure if even higher caps are added in the future, as opposed to using a set of #load-if-not-defined commands for each possibly higher population cap symbol. 1.0c AIs wouldn't check for 225 or 250, so they'll always just \"believe\" POPULATION-CAP-200 is for real and operate as expected, I hope.</p><p>Just to be clear, this is how the symbols are defined for a few caps:<br>Population 175: POPULATION-CAP-175 (lower are the same)<br>Population 200: POPULATION-CAP-200<br>Population 225: POPULATION-CAP-200, POPULATION-CAP-225, POPULATION-CAP-EXTENDED<br>Population 250: POPULATION-CAP-200, POPULATION-CAP-250, POPULATION-CAP-EXTENDED",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120305-015343",
	year: 2012,
	month: 3,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20120305-015343 has been released! This update resolves 260: #UserPatch [Economy] Fishing ships should prefer deep sea fish over shore fish. This should have been done a long time ago lol. Thanks, Eel!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120304-235754",
	year: 2012,
	month: 3,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120304-235754 has been released! This update resolves 258: #UserPatch [AI Scripting] New AI commands must consider object capabilities before processing, and 259: #UserPatch [Core Bug] Gaia object count data is corrupted each time a saved game is loaded. In addition, I did some alignment optimizations and other little things here and there. The log and log-trace extension feature has been removed from SetupAoC.exe. These commands will return later with more capabilities.",
	itemsAffected: [cLog, cLogTrace],
	scriptingType: "ai"
}, {	
	number: "20120216-060846",
	year: 2012,
	month: 2,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20120216-060846 has been released! This update resolves 257: #UserPatch [Core Bug] Chat lines may not flow upward if timeGetTime overflows the Int32 maximum. This was a long time problem for me",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120216-042241",
	year: 2012,
	month: 2,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20120216-042241 has been released! This update resolves 256: #UserPatch [Core Bug] Barracks and castle huskarls cannot be selected together via double-click. This is not a hard-coded fix for only huskarls; instead, it will now try to collect units together based on dead unit id, as well.</p><p>Here's the complete double-click selection process:<br>1.0c: if unitTypeId matches, select<br>1.0c: else, if unitCommandAttribute matches as 3 (villager), select<br>1.1: else, if unitCategoryId == 70 (living unit), and unitDeadTypeId != -1, and unitDeadTypeId matches, select",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120216-020555",
	year: 2012,
	month: 2,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20120216-020555 has been released! This update resolves 255: #UserPatch [Request] Mouse cursor should not be confined in the scenario editor or in the background. Now, the cursor will be confined only during gameplay. If background processing is enabled, it will be unconfined there, as well.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120212-182129",
	year: 2012,
	month: 2,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20120212-182129 has been released! This update resolves 254: #UserPatch [Request] Mini-map flares should cycle between the player color, white, and black. Thanks to BugA for the suggestion and LightTree for testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120212-161009",
	year: 2012,
	month: 2,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20120212-161009 has been released! This update resolves 253: #UserPatch [Core Bug] Numpad hotkeys may be overridden within object action submenus. Thanks to BugA for the details and report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120209-132813",
	year: 2012,
	month: 2,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20120209-132813 has been released! This update resolves 252: #UserPatch [Scenario Design] Triggers that affect more than 300 units will crash the game. Thanks again, randomdude! This fix increases the number of modified objects per trigger effect by 3x. Targets over the maximum will be silently ignored and the trigger will not affect them. Scenario triggers affecting so many objects can lead to poor performance and lag, so please do not use this extension as a reason to make inefficient triggers, affecting all units on the map. If you require changes to many, many units (that would have crashed before), performance can be improved by spreading the task using several trigger effects, making use of \"objects-in-area\" and the object category/class/type dropdowns.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120208-152829",
	year: 2012,
	month: 2,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120208-152829 has been released! This update resolves 251: #UserPatch [Core Bug] Distant relics may be improperly teleported into the possession of a monk. Thanks to the marathon for the link to the rec at aoczone!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120208-115505",
	year: 2012,
	month: 2,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20120208-115505 has been released! This update resolves 250: #UserPatch [Core Bug] Team Random may crash if a player selects it with the unteamed setting. Thanks to randomdude for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120207-162221",
	year: 2012,
	month: 2,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120207-162221 has been released! This update resolves 249: #UserPatch [Request] Flares should appear on the mini-map in the color of the sender. This fix was suggested by Cysion, as well. Thanks!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120207-132338",
	year: 2012,
	month: 2,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20120207-132338 has been released! This update resolves 247: #UserPatch [Core Bug] Civilizations may be improperly distributed by Team Random with coop play, and 248: #UserPatch [Core Bug] Attack notification text may be improperly colored with coop play. Thanks to Cysion for the bug reports! ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120204-081102",
	year: 2012,
	month: 2,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20120204-081102 has been released! This update resolves 246: #UserPatch [Core Bug] Trade targeting code may cause an out-of-sync failure due to a packet delay. With this, hopefully, all of the trade targeting code has now been restored and synchronized for multiplayer games.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120202-004011",
	year: 2012,
	month: 2,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20120202-004011 has been released! This resolves 245: #UserPatch [AI Behavior] The boar lurer ungarrison handler requires additional data validation code. Without this additional check, untasked villagers may never ungarrison from various buildings. Thanks to LightTree for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120131-005143",
	year: 2012,
	month: 1,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20120131-005143 has been released! This resolves 244: #UserPatch [Core Bug] The timer-triggered fact may return invalid data under specific conditions. This issue, which was reported by qwnob on twitter, would cause the AIs in the \"Maid of Orleans\" campaign scenario to immediately resign upon startup lol. Thanks to qwnob!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120130-142304",
	year: 2012,
	month: 1,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20120130-142304 has been released! This resolves 243: #UserPatch [AI Scripting] New combined unit counting identifiers should be renamed to avoid confusion. These were never truly unit \"lines\" and should not have been named as such. This may be a breaking change for some AIs. I'm sorry about the trouble</p><p>Renamed identifiers (if they were defconst'ed in the AI, there's no issue):<br>- 970 monk-line: now named \"monk-set\"<br>- 971 trebuchet-line: now \"trebuchet-set\"<br>- 972 combined-huskarl-line: now \"huskarl-set\"</p><p>I also moved all real documentation from the readme to <a href=\"http://forums.aiscripters.com/viewtopic.php?f=3&t=2591\">here</a> and updated UserPatchConst.per.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120129-120553",
	year: 2012,
	month: 1,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20120129-120553 has been released! This resolves 242: #UserPatch [Core Bug] The active unit list object deletion code may access uninitialized data. After finding the issue with the way the building list was handled, I checked the general unit list and found the same problem existed there, as well.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120128-170914",
	year: 2012,
	month: 1,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120128-170914 has been released! This update improves sheep behavior, as they return to the first town center on nomad-like maps. It all works pretty well now, I think ",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120128-143835",
	year: 2012,
	month: 1,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20120128-143835 has been released! This update resolves 241: #UserPatch [Core Bug] The active building list object deletion code may access uninitialized data. This bug would lead to situations where no one would attempt to continue construction on a building if a builder fails to survive long enough to finish it.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120127-130053",
	year: 2012,
	month: 1,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120127-130053 has been released! This update resolves 239: #UserPatch [Core Bug] The AI build system may write to invalid memory when setting blocking flags and 240: #UserPatch [Core Bug] The AI build system may block indefinitely due to placement failures. The first one, in 1.0c, they only provided 600 slots based on unit id for building block flags. If a building's unit id was higher than 600 (yurts come to mind), the game would end up writing those block flags to invalid memory. As for the second thing, now the game will reset a building into placement mode if, despite finding a placement, it has been unable to create a foundation after 1000 skip cycles. This should correct any save/restore issues, as well as possibly those unfortunate mill placement failures.</p><p>Due to changes to the way building blocking is handled, it should now theoretically be safe to switch sn-enable-new-building-system on and off on demand, though I haven't tested this ",
	itemsAffected: [snEnableNewBuildingSystem],
	scriptingType: "ai"
}, {	
	number: "20120127-000218",
	year: 2012,
	month: 1,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20120127-000218 has been released! This update resolves 238: #UserPatch [Request] Recording option should be checked by default for multiplayer games. In addition, the issues with simultaneous building should be fixed. Specifically, up-pending-placement should work properly with camps and mills now, I hope. ",
	itemsAffected: [cUpPendingPlacement],
	scriptingType: "ai"
}, {	
	number: "20120126-152838",
	year: 2012,
	month: 1,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20120126-152838 has been released! This update resolves 237: #UserPatch [AI Behavior] Sheep should go to the town center foundation as sighted on nomad. Now, they will be sent to the town center foundation as if it was standing, upon being sighted. They no longer wait until the foundation is completed. I may need to tweak this fix.</p><p>In particular, you may see quirks with simultaneous building (sn-enable-new-building-system) with dropsites, due to irregularities with pending object calculation timing. I'm working on a fix for this at the moment.",
	itemsAffected: [snEnableNewBuildingSystem],
	scriptingType: "ai"
}, {	
	number: "20120125-200635",
	year: 2012,
	month: 1,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120125-200635 has been released! This update has some more adjustments for the oos",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120125-141549",
	year: 2012,
	month: 1,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120125-141549 has been released! This update resolves the bugs of the previous version. There are still a few minor things that need to be looked into for multiplayer slot shifts and stuff. I'll work on those later ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120125-131316",
	year: 2012,
	month: 1,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120125-131316 has been released! This update resolves 235: #UserPatch [Core Bug] Game may crash if an AI is selected as P1 due to a slot shift fix, and 236: #UserPatch [Core Bug] Trade targeting for AIs requires synchronization for multiplayer games. This fixes the AI crash of the previous version.</p><p>This version has some severe issues, as well. Working on it.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120125-083928",
	year: 2012,
	month: 1,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20120125-083928 has been released! This update reverts part of the trade targeting fix, until it can be synchronized for multiplayer games. It was causing oos issues recently. The reverted part of the fix is that which selects the local market/dock to return to and retargeting to newly found trade buildings. I may need to make it transfer the sn value across the network to ensure sync.</p><p>Note: do not run AI tests with this version. Setting an AI as p1 will crash until other fixes are complete.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120123-164000",
	year: 2012,
	month: 1,
	day: 23,
	version: 1.1,
	notes: "UserPatch WITHDRAWN has been released! This update resolves 234: #UserPatch [Core Bug] Player number and team data may be lost when restoring games. Now, save/restoring, save/restoring, save/restoring multiplayer games should not cause the game to lose all of the player and team numbers, I hope. Thanks to LightTree and Grok!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120123-092823",
	year: 2012,
	month: 1,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120123-092823 has been released! This update resolves 233: #UserPatch [AI Behavior] Multiple monks may perform improperly when targeting a full monastery. Thanks to marathon for the report!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120123-043400",
	year: 2012,
	month: 1,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20120123-043400 has been released! This update resolves 232: #UserPatch [Core Bug] The recent game address list may improperly truncate ip addresses. Thanks to Fiktschn for the report and Veg for the research!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120120-041257",
	year: 2012,
	month: 1,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20120120-041257 has been released! This update resolves 231: #UserPatch [Core Bug] Buildings forwarded by AIs may appear finished before being built. This is the old visual bug, where towers and other forward buildings seemed complete, even though they weren't built yet. Thanks to LightTree and Grok for the report and recording!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120119-234510",
	year: 2012,
	month: 1,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20120119-234510 has been released! This update resolves 230: #UserPatch [Core Bug] Ending a multiplayer game with an out-of-sync fails to unlink properly. If a multiplayer game ends with an out-of-sync, the run level unlinking process is left incomplete. This would result in various UI inconsistencies, however, more importantly, it would sometimes result in a complete game freeze when loading a recorded game immediately afterward.</p><p>Thanks again to LightTree and Grok for their time and help!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120119-220351",
	year: 2012,
	month: 1,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20120119-220351 has been released! This update resolves 229: #UserPatch [Core Bug] Out of sync recorded multiplayer games should not end with another oos. Thanks to LightTree and Grok for the mp testing!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120119-181256",
	year: 2012,
	month: 1,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20120119-181256 has been released! This update resolves 228: #UserPatch [Request] The mouse cursor should only be confined to the window during gameplay. Now, the cursor should be able to move outside the game window during game setup and options, etc.</p><p>I'm researching additional adjustments, but this should be better than the existing fix until it's all done.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120119-045035",
	year: 2012,
	month: 1,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20120119-045035 has been released! This update resolves 227: #UserPatch [Request] The mouse cursor should be confined in windowed mode. The mouse cursor will now be confined inside the window in windowed mode. Thanks to Strepto for the report!</p><p>Edit: updated 20120119-041504 to 20120119-045035 for a minor graphical issue on the left side of the screen.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120117-194108",
	year: 2012,
	month: 1,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20120117-194108 has been released! This update simply increases the default for sn-preferred-trade-distance to 100 from 60. I think it should work out a bit better on more maps for 1.0c AIs than 60. Thanks for the feedback! I got 100 by averaging marathon's suggestion of 140 with 60 lol. I think this is a fair compromise for trade safety and profit.",
	itemsAffected: [snPreferredTradeDistance],
	scriptingType: "ai"
}, {	
	number: "20120117-171119",
	year: 2012,
	month: 1,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20120117-171119 has been released! This update resolves 53: #UserPatch [AI Scripting] New sns are required for lumber and mining camp distances. There are 2 new sns: sn-lumber-camp-max-distance and sn-mining-camp-max-distance. If set to 0 (the default), the original sn-camp-max-distance is used for that camp type instead.</p><p>1. Sn: sn-lumber-camp-max-distance: snId:260, default:0, range:0-255<br>- Sets the maximum-town-size for lumber-camp placement, when non-zero.<br>- Example: (set-strategic-number sn-lumber-camp-max-distance 20) ;build lumber-camps with max-ts:20</p><p>2. Sn: sn-mining-camp-max-distance: snId:261, default:0, range:0-255<br>- Sets the maximum-town-size for mining-camp placement, when non-zero.<br>- Example: (set-strategic-number sn-mining-camp-max-distance 30) ;build mining-camps with max-ts:30",
	itemsAffected: [snLumberCampMaxDistance, snMiningCampMaxDistance, snCampMaxDistance],
	scriptingType: "ai"
}, {	
	number: "20120117-154525",
	year: 2012,
	month: 1,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20120117-154525 has been released! This update resolves 83: #UserPatch [Request] Allow resource amounts to be modified by rms. This solution replaces the regrowing forest tree fix. Rms scripters now have a \"resource_delta\" command to modify the amount of resources any given \"create_object\" contains. It works for trees, gold, stone, forage, sheep, boar, deer, fish... any gaia resource except predators and horses, I think. If you want to have \"gatherable\" wolves on your map, use rabid wolves instead and give them a resource_delta that is greater than 0. If a villager takes one of these down, they'll be able to gather from it like sheep lol.</p><p>1. RmsCmd: resource_delta inConstDelta, under \"create_object\"<br>- Set inConstDelta to a value between -32768 and 32767 to modify the default resources of an object.<br>- Example: resource_delta -10 ;remove 10 resources from the current \"create_object\"",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20120116-150915",
	year: 2012,
	month: 1,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20120116-150915 has been released! This update resolves 226: #UserPatch [Request] A notification is required for the vote panel autosave event. It will now display \"Saving multiplayer game ...\" (localized) in the vote panel chat box, so that all players are aware that the game has been saved.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120115-225135",
	year: 2012,
	month: 1,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120115-225135 has been released! This update resolves 21: #UserPatch [Economy] Trade units idle indefinitely if their target is eliminated, and 225: #UserPatch [Request] The game should autosave whenever a connectivity vote panel appears. The first one was actually fixed a long time ago, so this is just closing the task. The second should help in situations where the vote panel fails to operate properly. Now, if a connectivity vote panel appears (bad connection, random failure, etc.), the game will silently autosave, so players will hopefully be able to restore the game even if the panel is unresponsive, forcing an abrupt exit/resign by everyone.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120115-154200",
	year: 2012,
	month: 1,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20120115-154200 has been released! This update resolves 224: #UserPatch [Core Bug] Cliffs may disappear during gameplay if indirectly attacked by ranged units. This would occur when the target of an attack is eliminated by another unit before a projectile strikes it, but after it is fired into the air. The result is that the projectile would pass through the target and land on the terrain below, damaging it.</p><p>Thanks to <a href=\"http://aoczone.net/viewtopic.php?f=13&t=71275\">this report</a> at aoczone by \"everybodys\" for the details and rec!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20120112-164513",
	year: 2012,
	month: 1,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20120112-164513 has been released! This update resolves 223: #UserPatch [AI Scripting] Preferred trade default distance should be extended. The default for sn-preferred-trade-distance is now 60, instead of 40. There are some other minor bug fixes for the trade stuff, too.",
	itemsAffected: [snPreferredTradeDistance],
	scriptingType: "ai"
}, {	
	number: "20120112-153553",
	year: 2012,
	month: 1,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20120112-153553 has been released! This update resolves 221: #UserPatch [Economy] Trade units must target markets and docks more intelligently, and 222: #UserPatch [AI Scripting] A new sn is required to configure preferred trade distance. Trade units will now try to trade at buildings as close to the preferred distance as possible. Every 4 gold drops, trade units will now check if a new trade building is better and retarget if necessary. Please test this stuff if you have time, so we can be sure that it works as intended, for the most part.</p><p>1. Sn: sn-preferred-trade-distance: snId:259, default:40, range:0-255<br>- Set to the preferred distance between local and remote trade buildings.<br>- Example: (set-strategic-number sn-preferred-trade-distance 60) ;prefer to trade at range 60",
	itemsAffected: [snPreferredTradeDistance],
	scriptingType: "ai"
}, {	
	number: "20120110-203635",
	year: 2012,
	month: 1,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20120110-203635 has been released! This update resolves 219: #UserPatch [AI Behavior] Monks should not attempt to place relics into unbuilt monasteries, and 220: #UserPatch [AI Behavior] Defensive priority defaults require consistency adjustments. In order to ensure that walls and various minor buildings, such as yurts, are targeted, defensive priority defaults were adjusted. Thanks to marathon for reporting the first issue!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20120106-014914",
	year: 2012,
	month: 1,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20120106-014914 has been released! This update resolves 54: #UserPatch [AI Scripting] A new sn is required for targeting mill placement. With sn-preferred-mill-placement, you can now select a preferred mill resource target: 0 for forage, 1 for deer, or 2 for shore fish. Boar are no longer considered as a target for mills, since they are lured away.</p><p>1. Sn: sn-preferred-mill-placement: snId:253, default:0, range:0-2<br>- Set to 0 for forage, 1 for deer, or 2 for shore fish.<br>- Example: (set-strategic-number sn-preferred-mill-placement 1) ;prefer mills to be placed near deer",
	itemsAffected: [snPreferredMillPlacement],
	scriptingType: "ai"
}, {	
	number: "20120101-154930",
	year: 2012,
	month: 1,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20120101-154930 has been released! This update resolves ...absolutely nothing lol. I just changed a few things with the installer code and readme ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111231-123805",
	year: 2011,
	month: 12,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20111231-123805 has been released! This update resolves 217: #UserPatch [Core Bug] Mouse cursor is invisible on the windowed application titlebar, and 218: #UserPatch [Core Bug] Mouse cursor refresh rate is low when the game is paused in a window. Thanks to BugA for the reports!</p><p>This is a rerelease to fix a minor issue with the mouse at the top of the screen.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111228-083117",
	year: 2011,
	month: 12,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20111228-083117 has been released! This update resolves 216: #UserPatch [Core Bug] Custom mouse cursors in windowed mode may cause display corruption. If custom mouse cursors were enabled in windowed mode, and the game window was moved partially outside the screen, and the mouse came close to the part of the game window that was on the screen edge, there would have been display corruption. Thanks to BugA and Archon for confirming the issue!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111227-111028",
	year: 2011,
	month: 12,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20111227-111028 has been released! This update resolves 215: #UserPatch [Core Bug] Offensive targeting code may reference uninitialized data. This would crash the game under certain conditions. Thanks, marathon!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111226-154148",
	year: 2011,
	month: 12,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20111226-154148 has been released! This update resolves 214: #UserPatch [AI Behavior] Offensive siege weapons should select targets more intelligently. I hope siege weapons will perform a bit better when sent under attack-now and attack groups. Trebuchets, in particular, were always a problem with those attack methods.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111226-131154",
	year: 2011,
	month: 12,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20111226-131154 has been released! This update resolves 213: #UserPatch [Core Bug] Offensive priorities may be improperly read from player databases. This is a critical bug fix for the previous version, where offensive targeting priorities may have occasionally been read incorrectly. Good times lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111226-063017",
	year: 2011,
	month: 12,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20111226-063017 has been released! This update resolves 212: #UserPatch [AI Scripting] A new sn is required to enable offensive targeting priorities for attacks. Now, AIs can have lol levels of control over their targeting. If the following sn, sn-enable-offensive-priority, is set to 1, the offensive priority values will influence targeting. The special-attack-type sns still influence targeting, as well, however the new system allows for far more control. If sn-enable-offensive-priority is set to 0, then offensive priorities will only affect local unit targeting.</p><p>1. Sn: sn-enable-offensive-priority: snId:254, default:0, range:0-1<br>- Set to 1 to enable attack-now and attack groups to target using the priorities set by up-set-offense-priority.<br>- Example: (set-strategic-number sn-enable-offensive-priority 1) ;enable offensive target priorities</p><p>Target units on -1 offensive priority will not hold the attention of attackers if a higher priority unit appears. If the target unit is not -1 priority, the attacker may retarget, but primarily to other units with the same offensive priority. Battering rams and cannon galleons prefer to attack non-moving targets, while all other units prefer moving targets. That's how v1.0c targeting works, and I haven't changed any of that stuff... yet. If you clear offensive priorities with up-reset-target-priorities, you may notice attack behavior that is a bit similar to patrol.",
	itemsAffected: [snEnableOffensivePriority],
	scriptingType: "ai"
}, {	
	number: "20111225-121526",
	year: 2011,
	month: 12,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20111225-121526 has been released! This update resolves 211: #UserPatch [AI Scripting] New actions are required to configure local targeting priorities. After only one release, up-set-target-priority is gone lol. It's now called up-set-defense-priority. I hope no one had become too used to the \"old\" name lol. Here's why the name changed:</p><p>1. Action: (up-set-defense-priority typeOp inOpObjectId typeOp inOpPriorityValue)<br>- Use to set the defensive targeting priority (TSA) toward a building. Range: -1 to 32767.<br>- Example: (up-set-defense-priority c: town-center c: 1000) ;set town-center (109:standing TCs) to 1000</p><p>2. Action: (up-set-offense-priority typeOp inOpObjectId typeOp inOpPriorityValue)<br>- Use to set the offensive targeting priority toward any object. Range: -1 to 11.<br>- Example: (up-set-offense-priority c: archery-class c: 10) ;set archery-class to priority 10<br>- Example: (up-set-offense-priority c: knight c: 4) ;set knight (+cavalier+paladin) to priority 4</p><p>3. Action: (up-reset-target-priorities inConstPriorityType inConstClearAll)<br>- Use to reset or clear targeting priorities (see UserPatchConst.per for the consts).<br>- Example: (up-reset-target-priorities priority-defense 0) ;reset defensive priorities to default values<br>- Example: (up-reset-target-priorities priority-offense 1) ;clear all offensive priorities (nothing has priority)</p><p>Note: lines do not work here, so just set the base unit type id (spearman for the entire spearman-line, etc.). Classes may be used, as well. If a unit has its type priority set, that will override its class priority. Units will always prefer moving targets over static ones, regardless of these settings, for now. Offensive priority changes in multiplayer require a packet transfer from the host. Defensive changes do not require a packet transfer.",
	itemsAffected: [cUpSetDefensePriority, cUpSetOffensePriority, cUpResetTargetPriorities],
	scriptingType: "ai"
}, {	
	number: "20111224-123605",
	year: 2011,
	month: 12,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20111224-123605 has been released! This update resolves 210: #UserPatch [AI Scripting] A new action is required to configure unit targeting priorities. Now, defensive targeting priorities can be set, so TSA can be much more precise. Each building can take a priority value from -1 to 32767. For walls, use class 927; for gates, use class 939. Otherwise, use the object type id. I might enable this function to set non-building priorities later. Buildings that attack will attract the attention of nearby units, so you may get back-and-forth movement if you set them too low.</p><p>1. Action: (up-set-target-priority typeOp inOpObjectId typeOp inOpPriorityValue)<br>- Use to set the targeting priority of a building. It works like a per-object, sn-special-attack-type.<br>- Example: (up-set-target-priority c: town-center c: 1000) ;set town-center (109:standing TCs) to 1000",
	itemsAffected: [cUpSetDefensePriority],
	scriptingType: "ai"
}, {	
	number: "20111224-053156",
	year: 2011,
	month: 12,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20111224-053156 has been released! This update resolves 19: #UserPatch [Economy] AIs cannot assign multiple builders for a structure. You can now assign a specific number of builders for any building type or class. The class is best for walls and gates. By default, like v1.0c, wonders have 250 (max) builders, and the wall class has 2.</p><p>1. Action: (up-assign-builders typeOp inOpBuildingId typeOp inOpNumBuilders)<br>- Use to assign a specific number of builders to a building type or class.<br>- Example: (up-assign-builders c: house c: 2) ;assign at least 2 builders for houses (not per house)",
	itemsAffected: [cUpAssignBuilders],
	scriptingType: "ai"
}, {	
	number: "20111219-165248",
	year: 2011,
	month: 12,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20111219-165248 has been released! This update resolves 209: #UserPatch [Request] Custom mouse cursors should be available in windowed mode. Hopefully, they work, and the original mouse cursor does not reappear after the mouse moves off and back onto the window, as it would before, causing a double-mouse effect lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111219-133528",
	year: 2011,
	month: 12,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20111219-133528 has been released! This update resolves 208: #UserPatch [Core Bug] Town size expansion attacks may lead to a game crash. Thanks to Campeador, kunyi, and everyone who reported it in the bug thread!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111219-015834",
	year: 2011,
	month: 12,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20111219-015834 has been released! This update contains a performance improvement for some code that loops constantly during object reevaluation. I moved some of the looping code out of the loop.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111218-155023",
	year: 2011,
	month: 12,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20111218-155023 has been released! This update resolves 207: #UserPatch [Core Bug] 3P+ multiplayer games may crash if a player leaves the setup screen. In a 3+ player multiplayer game, the game may crash if one of the players leaves at the game setup screen. Sorry to Grok, Glad, and LightTree for the crash ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111217-105000",
	year: 2011,
	month: 12,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20111217-105000 has been released! This update resolves 206: #UserPatch [AI Scripting] AIs must be able to perform calculations with player distance data. Now, AIs can use up-get-player-fact with a new (defconst player-distance 35) to get distance data into goals for calculations (see UserPatchConst.per). I've also extended up-get-player-fact, so that its first parameter will accept target-player and focus-player for its player number values. This means that up-get-target-fact isn't required to use those shortcuts anymore. It will remain for compatibility, though.",
	itemsAffected: [cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20111216-185914",
	year: 2011,
	month: 12,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20111216-185914 has been released! This update fixes a crash with 20111216-175730. Sorry to anyone who downloaded that version ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111216-175730",
	year: 2011,
	month: 12,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20111216-175730 has been released! This update resolves 204: #UserPatch [AI Scripting] AIs must be able to determine the distance to other players, and 205: #UserPatch [AI Scripting] Town-size expansion attack targeting must be configurable by AIs. Here's a summary of the new stuff:</p><p>1. Fact: (up-player-distance inConstPlayerId compareOp inOpValue)<br>- Use to get the distance in tiles to the nearest building of another player.<br>- Example: (up-player-distance 3 < 50) ;returns true if player 3 is less than 50 tiles away<br>- Example: (up-player-distance focus-player g:< gl-distance) ;returns true if focus-player is within gl-distance tiles<br>- Example: (up-player-distance any-enemy < 40) ;returns true if any enemy is within 40 tiles</p><p>2. Action: (up-find-player inConstStanceTowardId findPlayerOp outGoalPlayerId)<br>- This action already existed, however, findPlayerOp can now accept (defconst find-closest 2).<br>- Example: (up-find-player enemy find-closest gl-closest-player) ;stores the nearest player number in gl-closest-player</p><p>3. sn-building-targeting-mode: snId:255, default:0, range:0-2<br>- Set to 0 to target all buildings, 1 to ignore walls and gates, or 2 to ignore walls, gates, and dropsites.<br>- This sn primarily affects defensive targeting, which includes TSA.",
	itemsAffected: [cUpPlayerDistance, cUpFindPlayer, snBuildingTargetingMode],
	scriptingType: "ai"
}, {	
	number: "20111215-083907",
	year: 2011,
	month: 12,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20111215-083907 has been released! This update resolves 202: #UserPatch [Core Bug] Idle monks holding relics should be discoverable with the comma key, and 203: #UserPatch [Core Bug] Monks with relics and missionaries should appear on the mini-map. The second one refers to how both of these units disappear from the military mini-map, while normal monks are present. Thanks to LightTree for the reports!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111214-170743",
	year: 2011,
	month: 12,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20111214-170743 has been released! This update makes a tweak to the campaign system, as requested by Cysion. Now, expansions don't have to worry about the conquerors and age of kings campaign buttons. Those will link to the core campaigns, while expansions can provide new campaigns with custom campaign files like Age of Chivalry.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111214-114017",
	year: 2011,
	month: 12,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20111214-114017 has been released! This update resolves a comparison issue with the previously withdrawn version, 20111214-104953. Sorry to anyone who downloaded that one.</p>An example using up-pending-objects:<br>- (up-pending-objects c:< house < 1) ;previous style... still works, though<br>- (up-pending-objects c: house < 1) ;new style",
	itemsAffected: [pCompareOp, pTypeOp],
	scriptingType: "ai"
}, {	
	number: "20111214-104953",
	year: 2011,
	month: 12,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20111214-104953 has been released! This update resolves 201: #UserPatch [AI Scripting] Change the redirectOp in AI scripts, while maintaining backward compatibility. The redirectOp will now be called typeOp; c:<, g:<, and s:< are now c:, g:, and s:. I've updated the readme \"documentation\" accordingly. The previous op format will still work, however, so nothing should break this time lol. I think the new name makes its purpose more clear, and eliminating the < makes it more distinct from being a comparison. I'm sorry I didn't do this earlier!",
	itemsAffected: [pTypeOp],
	scriptingType: "ai"
}, {	
	number: "20111213-140014",
	year: 2011,
	month: 12,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20111213-140014 has been released! This update disables the network logging code, moving it to a hidden, optional feature. This change has been made just in case it was causing oos. Thanks, kunyi!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111213-092124",
	year: 2011,
	month: 12,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20111213-092124 has been released! This update resolves 200: #UserPatch [Core Bug] Ranged units on non-aggressive patrol may not retarget properly. This issue was reported by Cysion's testers. Ranged units, including ships, on non-aggressive patrol would not always retarget properly once their original target moved out of range.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111212-091538",
	year: 2011,
	month: 12,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20111212-091538 has been released! This update adjusts the patrol response time code a bit, due to feedback from Cysion's testing. It's a slight increase in time for multiplayer stability.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111212-081032",
	year: 2011,
	month: 12,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20111212-081032 has been released! This update will now begin logging automatically to \"Age of Empires II\\debug.log\" whenever a vote panel appears. In addition, the F5 key will toggle logging on/off at any other time. This should help to provide additional information when any issues arise in multiplayer during this testing phase.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111211-092410",
	year: 2011,
	month: 12,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20111211-092410 has been released! This update resolves 199: #UserPatch [Request] Adjust the main menu music volume while adjusting the game sound. Just for completeness and consistency. :lol: I also made the volume sliders a bit less sensitive, so more of the bar is useful, instead of silent.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111211-063618",
	year: 2011,
	month: 12,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20111211-063618 has been released! This update resolves 198: #UserPatch [Request] Expansions must have localized storage for saved files. The local user data feature and the music feature have now been merged into 1.1. Oh, and custom campaign files (.cpx) now save to Scenario instead of Campaign. The core and expansion Campaign folders are now exclusively for the \"official\" ones used in the menu.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111211-035051",
	year: 2011,
	month: 12,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20111211-035051 has been released! This update resolves 197: #UserPatch [AI Behavior] The AI home exploration system should take advantage of LOS. The scout will still run across explored territory, but this is important for proper scouting. If you want to see why, compare what happens to the scout on 1.0c on Rivers with what it does on 1.1. On 1.0c, if the scout finds its way past some shallows too early, it will be unable to get back to the home town area because it is blocked from running over explored land. It's a compromise lol.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111211-010750",
	year: 2011,
	month: 12,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20111211-010750 has been released! This update resolves 196: #UserPatch [Core Bug] The DirectDraw color fix requires an adjustment for 64-bit compatibility. I have no way to test this change, but I hope it works lol. By the way, for anyone getting no sound on the game after the volume fix, please check your volume properties and ensure that \"Wave/Mp3\" or something isn't set too low on XP. For Vista and later, ensure that the application-specific sound volume for the Conquerors isn't set too low. After that, set the in-game volume to max and adjust it from there. It is VERY sensitive to adjustments and you may hear nothing below 50% on the slider.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111210-081219",
	year: 2011,
	month: 12,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20111210-081219 has been released! This update resolves 195: #UserPatch [Request] The game sound volume should be delinked from the master system volume. I wanted to fix this for a very long time lol. Kram, I'll look into that issue with the boar switching when I get a chance.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111210-033814",
	year: 2011,
	month: 12,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20111210-033814 has been released! This update resolves 194: #UserPatch [Core Bug] Messages sent with the RED color flag appear improperly. If a scenario used the \"Send Chat\" effect to send a <RED> color message, the tag was not properly removed, leaving a ">". Thanks to wyf88, who reported this on Twitter!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111210-023137",
	year: 2011,
	month: 12,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20111210-023137 has been released! This update resolves 193: #UserPatch [Request] Expansions must be able to provide their own background music. Forgot to actually commit that fix ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111210-015700",
	year: 2011,
	month: 12,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20111210-015700 has been released! This update reverts the color of stone on the mini-map as suggested by feedback. Thanks to everyone who commented! In addition, the DirectShow support feature has been modified and moved to the recommended (pre-checked) feature state. The MP3MUSIC shortcut parameter has now been eliminated. If a \"music.m3u\" file exists in the core Sound folder, or an expansion Sound folder, it will play as background music.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111209-012233",
	year: 2011,
	month: 12,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20111209-012233 has been released! This update resolves 191: #UserPatch [Request] Mini-map colors should be adjusted for improved visibility, and 192: #UserPatch [Core Bug] Gather points appear on the mini-map when selecting non-player buildings. I tried to get the best combination from the available palette of 256 colors.</p><p><img src=\"https://i.imgur.com/8GFWU.png\">",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111208-040544",
	year: 2011,
	month: 12,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20111208-040544 has been released! This update resolves 190: #UserPatch [Core Bug] Civilizations are improperly enumerated for AIs from xml manifests. This caused all civ checks in AI rules to be inverted, which may have resulted in strange bugs for various AIs recently. The \"aztec\" identifier became like 4 instead of 15, while \"briton\" was 18 instead of 1 lol. Thanks to ER for the report! I'm sorry for the trouble.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111207-224034",
	year: 2011,
	month: 12,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20111207-224034 has been released! This update resolves 189: #UserPatch [Core Bug] Serial packet transfer inconsistencies may result in a game break. The Bug is back. The Bug is dead. Long live the... wait.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111206-021746",
	year: 2011,
	month: 12,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20111206-021746 has been released! This update resolves 188: #UserPatch [Request] Expansions must be able to override sounds and history data. The xml and expansion root folder has been switched from Data to Games. Now, sounds and history files can be overriden, as well.</p><p>Here's an example of how to install an expansion to the new path:<br>\\Microsoft Games\\Age of Empires II\\Games\\aoc.xml (defines \"Age of Chivalry\" path)<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\empires2_x1_p1.dat<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\gamedata_x1.drs<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\graphics.drs<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\interfac.drs<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\sounds.drs<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\sounds_x1.drs<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\language.dll<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\language_x1.dll<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Data\\language_x1_p1.dll<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Sound\\<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Sound\\stream\\<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Sound\\stream\\WON1.MP3<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\Sound\\stream\\WON2.MP3<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\History\\<br>\\Microsoft Games\\Age of Empires II\\Games\\Age of Chivalry\\History\\england.txt<br>...etc.</p><p>Start The Conquerors: age2_x1.exe<br>Start Age of Chivalry: age2_x1.exe game=aoc<br>- aoc = name of xml file, without .xml<br>- an example xml file is included with the rar",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111205-175817",
	year: 2011,
	month: 12,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20111205-175817 has been released! This update resolves 187: #UserPatch [Request] Expansions must be able to override core game data files. Now, if an expansion installs its files to Data\\PathSetInsideXml\\, then the game will override core data files with those it finds in the expansion's subfolder. With this fix, expansions should be able to reside side-by-side with each other, without compromising the core game installation.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111205-140035",
	year: 2011,
	month: 12,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20111205-140035 has been released! This update resolves 186: #UserPatch [Request] A shortcut parameter is required to select the active expansion. Now, you can use a parameter like game=age2_x2 to load the expansion described by Data\\age2_x2.xml. No spaces are permitted in the expansion xml filename. Next, I'm going to try to make overrides for dat, drs, and language files that are placed into the expansion subfolder, Data\\PathSetInsideXml\\, like Data\\Age of Chivalry\\gamedata_x1_p1.drs would override Data\\gamedata_x1_p1.drs.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111205-063051",
	year: 2011,
	month: 12,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20111205-063051 has been released! This update tweaks the expansion fix, moving the xml location to the game's Data folder. In other words, for the age2_x1 game, it will look for Data\\age2_x1.xml. As I mentioned before, I'll make this a shortcut parameter soon. The internal xml file is included in the rar's Reference folder, for easy editing.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111205-055918",
	year: 2011,
	month: 12,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20111205-055918 has been released! This update resolves 185: #UserPatch [Core Bug] Opening the tech tree on Team Random civ may crash the game. Thanks to Archon for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111205-050141",
	year: 2011,
	month: 12,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20111205-050141 has been released! This update resolves 184: #UserPatch [Request] Create abstraction and infrastructure code for game expansions. If \"\\Documents\\My Games\\Age of Empires II\\age2_x1.xml\" exists like this file, it will be used to configure civilizations and AIs for game expansions. Changing data in the xml file should only be done in connection with appropriate dat modifications. If no xml file exists, the game will use its internal one, which is identical to the hard coded setup. I'll eventually make it so that the xml file can be specified with a shortcut parameter.</p><p>This should help Cysion with his expansion, I hope, while not breaking anything else.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111204-143412",
	year: 2011,
	month: 12,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20111204-143412 has been released! This update resolves 183: #UserPatch [Request] Allow achievements review while watching recorded games. While a recorded game is replaying, you can now select an option in the game menu to show current achievements. This one is for LightTree",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111204-133353",
	year: 2011,
	month: 12,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20111204-133353 has been released! This update resolves 182: #UserPatch [Core Bug] Fortification min-range should be calculated from the outer bounds. Thanks to marathon for the report! I also fixed an issue with the optional music playback feature for Vista. Thanks, offwo, for finding this one!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111203-122943",
	year: 2011,
	month: 12,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20111203-122943 has been released! This update resolves 181: #UserPatch [Core Bug] Patrol has an excessive response delay compared to The Age of Kings. I think this one should help the expert multiplayer people with their \"micro\" stuff lol. I've heard that many of them never moved from The Age of Kings to The Conquerors Expansion because of this very issue. Hopefully, some of them will make the shift with this additional control restored.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111203-115420",
	year: 2011,
	month: 12,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20111203-115420 has been released! This update resolves 180: #UserPatch [Core Bug] Garrisoned rams lose the ability to patrol, guard, and follow. This always bothered me, as well. I remember having to move my rams to the back of my town, start a patrol into the enemy town, and then \"intercept\" my own rams in order to garrison units into them as they passed by lol. It was not good times and incredibly unintuitive.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111202-110210",
	year: 2011,
	month: 12,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20111202-110210 has been released! This update resolves 179: #UserPatch [Core Bug] The Team Random option on enhanced 1.0c will crash the game. Thanks to Rescudo for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111202-102936",
	year: 2011,
	month: 12,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20111202-102936 has been released! This update resolves 178: #UserPatch [Request] Mirror player civilizations with a new Team Random option. This one seemed to be requested a lot by the multiplayer people, so here it is lol. On the civilization selection list for each player, just pick \"Team Random\" (or whatever it ends up being called due to localization lol). Please let me know if anything seems strange or broken with it.</p><p>Thanks to Cysion for the implementation idea!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111201-171806",
	year: 2011,
	month: 12,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20111201-171806 has been released! This update resolves 177: #UserPatch [Core Bug] Many civilian attackers may cause a game crash. If many civilian attackers were tasked at once, the unit id buffer would overflow. This caused the game to read into uninitialized data and crash. Thanks to marathon for the report!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111130-075810",
	year: 2011,
	month: 11,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20111130-075810 has been released! This update resolves 176: #UserPatch [Request] Display a notice for AI players in multiplayer games. As the CD version identifies human players, the game will now display \"AI\" for computer players. This should avoid scenarios where not-very-nice people in multiplayer games try to deceive other players by impersonating a known human player with an AI of the same name. Here's what it looks like: <a href=\"http://i.imgur.com/vfjOc.png\">image</a>.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111129-082352",
	year: 2011,
	month: 11,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20111129-082352 has been released! This update resolves 175: #UserPatch [Request] The multiplayer cheat setting notification should be more visible. Now, the notification will appear in a shade of orange (red was a bit dark, considering the chat background) when cheats are enabled. If they are disabled, the notification will be suppressed.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111129-073631",
	year: 2011,
	month: 11,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20111129-073631 has been released! This update resolves 174: #UserPatch [Request] Flares must be more visible on the mini-map. They are now larger and more bold on the mini-map display. This one is for the people at aoczone. :lol: II2N, as marathon mentioned, sn-enable-new-building-system is intended to be a one-time thing, set on the first AI pass before anything is built. I'm sorry about the trouble.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111129-044931",
	year: 2011,
	month: 11,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20111129-044931 has been released! This update improves the m3u playlist code, allowing it to play music and properly transition between tracks using any available codecs via DirectShow. The feature has been separated from the core v1.1 update, pending stability testing. Please see the guide for details. Thanks, LightTree ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111128-093334",
	year: 2011,
	month: 11,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20111128-093334 has been released! This update resolves an issue in the unreleased, unofficial mp3/m3u music playback code. There's still much more to do here. Thanks for reporting the issue, Archon!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111128-054800",
	year: 2011,
	month: 11,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20111128-054800 has been released! This update resolves 173: #UserPatch [Request] Windows Vista and later require a compatibility fix for the color bug. If the operating system is Windows Vista or later, the patch installer will apply the color compatibility fixes for age2_x1.exe and age2_x1.icd after both install and uninstall in order to ensure that the game always renders as expected. Elevation is required to make the necessary changes to the registry, however. I was going to make an app, so people can fix any executable, but maybe later :lol:</p><p>Here's how to get the \"ID\" that is required for the registry compatibility fix, so everyone knows:</p><p>[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DirectDraw\Compatibility\UNIQUE_APP_NAME_HERE]<br>\"Name\"=\"EXECUTABLE_NAME.EXE\" (REG_SZ)<br>\"ID\"=hex:XX,XX,XX,XX (REG_BINARY: 4 bytes)<br>\"Flags\"=hex:00,08,00,00 (REG_BINARY: 4 bytes)</p><p>Generate the application ID from an executable:<br>- Read from fileStart, 0x40 bytes<br>- at 0x00 (16-bit): 0x5A4D, 23117<br>- at 0x3C (32-bit): idOffset<br>- Read from idOffset, 0x0C bytes<br>- at 0x00 (32-bit): 0x00004550, 17744<br>- at 0x08 (32-bit): ID",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111127-213420",
	year: 2011,
	month: 11,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20111127-213420 has been released! This update resolves 172: #UserPatch [Core Bug] Uninitialized data is accessed by the targeting code. The issue was caused by the use of uninitialized data in the fortification targeting code. This was a critical bug in the minimum range fix. Thanks again, mameluke, for that excellent report!</p><p>Those saved game files seem to be able to continue past the crash point now.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111126-193007",
	year: 2011,
	month: 11,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20111126-193007 has been released! This update includes an unfinished new feature for feedback: M3U playlists can be used for the game's background music.</p><p>Playlist Feature Requirements<br>- Create a music.m3u playlist file in the \"Sound\" folder<br>- This file should be in either ANSI or UTF-8 format<br>- Start the game with the MP3MUSIC shortcut parameter<br>- Press F6 to manually switch to the next track<br>- This feature is still under testing and development</p><p>Edit: Updated to 20111126-193007. Thanks, Archon, for finding the issue with the tech tree fix!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111126-094557",
	year: 2011,
	month: 11,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20111126-094557 has been released! This update resolves 171: #UserPatch [Core Bug] Opening the tech tree as gaia will crash the game. Now, it will simply open the tech tree with the player's original civ in focus.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111126-084435",
	year: 2011,
	month: 11,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20111126-084435 has been released! This update resolves 170: #UserPatch [Core Bug] Boar should not target the town center after a garrison event. Thanks for the report, fen!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111126-055339",
	year: 2011,
	month: 11,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20111126-055339 has been released! This update resolves 169: #UserPatch [Core Bug] Game may crash while performing garrison retargeting. I hope that was the only issue here lol. By the way, -1 for object-repair-level should have the same result as 0, disabled for everything but wonders. Fixed link!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111124-234350",
	year: 2011,
	month: 11,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20111124-234350 has been released! This update resolves 166: #UserPatch [Request] Allow the recording of restored single player games, 167: #UserPatch [Core Bug] Ending a multiplayer game with \"Save and Exit\" fails to unlink properly, and 168: #UserPatch [AI Behavior] AIs should not directly target garrisoned enemy units. Good times :lol:</p><p>For single player games, if you start a new game that is recorded and select \"Restart Game\" from the menu, or \"Play Again\" from the achievements screen, the restarted game will also be recorded. In addition, the \"Load Saved Game\" screen now has a checkbox at the top-right to allow people to choose whether to record the game when loading a saved file. As for the garrison fix, it was the cause of many failures in AI games, as units would freeze entirely if their targets (often villagers) garrisoned into something. This should help performance and, to some extent, lag, I think.</p><p>The multiplayer \"Save and Exit\" fix may correct the \"shadow\" player setup screen issues and such. The problem was caused by the game not unlinking its run levels completely (lol don't ask). This would cause a more critical problem, where on 1.0c, if you immediately go to watch a rec after a \"Save and Exit,\" the game would freeze.</p><p>Note: unlike with new games, restarting saved games will not automatically record the restart. You have to use the load menu to do that. Try the new stuff and you'll see how things work lol.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111124-040536",
	year: 2011,
	month: 11,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20111124-040536 has been released! This update resolves 80: #UserPatch [Request] Restored games cannot be recorded. This should help many people in multiplayer games to continue to record games after a break, or after saving and exiting. Now, you can record your grok walls at a later time ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111123-173630",
	year: 2011,
	month: 11,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20111123-173630 has been released! This update resolves 33: #UserPatch [Military] Towers, without murder-holes, sometimes fail to attack. This also fixes castles, etc. These fortifications should now be able to target units past min-range even when surrounded. Mameluke, I don't have multiple monitors, so I can't test that, but I'm going to guess that it's either a driver issue (probably not) or an issue with DirectDraw being so old lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111123-155324",
	year: 2011,
	month: 11,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20111123-155324 has been released! This update resolves 164: #UserPatch [AI Behavior] Petards should focus attacks against buildings and siege, and 165: #UserPatch [AI Behavior] Battering rams should defend towns from siege weapons. I hope we see better performance from these units now.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111123-133207",
	year: 2011,
	month: 11,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20111123-133207 has been released! This update resolves 163: #UserPatch [Request] Display a notification during multiplayer startup for cheats. With the 5 second notification, a message will appear in the chat, informing all players of the current cheats setting. I used localized text from the language files, so it should be \"proper\" in all languages, I hope. In English, this notification would appear in yellow text: \"!!! Enable Cheating: [Yes|No].\"</p><p>Due to possible packet delays, the message wouldn't be reliable with the 10 second notification. I tried ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111122-204516",
	year: 2011,
	month: 11,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20111122-204516 has been released! This update resolves 162: #UserPatch [Core Bug] Game may freeze during an AI build list update. When an extended placement like a palisade wall is updated, and its position from the edge of the map causes an improper centering, the game may freeze in an infinite loop. lol I can't understand what I just wrote either.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111122-182903",
	year: 2011,
	month: 11,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20111122-182903 has been released! This update resolves 161: #UserPatch [Core Bug] The AI database has not been properly extended for 250 gatherers. I forgot to extend the data region lol. This may have caused instability.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111121-145059",
	year: 2011,
	month: 11,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20111121-145059 has been released! This update resolves 160: #UserPatch [AI Behavior] Jaguars and wild horses should not be considered as AI resources. If you've ever seen AI hunters standing idle around a wild horse on a custom rms, this should fix it lol. ES blocked wolves from being considered as resources, but they forgot the other 2.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111121-122552",
	year: 2011,
	month: 11,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20111121-122552 has been released! This update includes more adjustments for the ships. Now, ships will not intentionally target fortifications that outrange them when an attack is initiated. They may still \"drift\" into fortifications lol. It should also be a bit better in choosing targets, depending on each ship's capabilities. The shortest-range-in-group-sets-group-range issue persists.</p><p>In making these changes, I'm beginning to see why ES chose to just make ships target the dock. It keeps ships away from land fortifications and reduces the computational complexity of the targeting code. I think I'll probably \"sn\" this new arbitrary ship targeting code later. I would appreciate any feedback/testing.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111121-101228",
	year: 2011,
	month: 11,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20111121-101228 has been released! This update resolves 159: #UserPatch [AI Behavior] Gatherer total for AIs should be extended from 200 to 250. This should help booming AIs like the one from marathon, in addition to adding 50 more possible scary villager attackers lol.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111120-210125",
	year: 2011,
	month: 11,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20111120-210125 has been released! This update adjusts the ship targeting code a bit more. I may make more adjustments. Right now, the best targeting occurs with smaller groups; 1-unit groups are the most proper.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111120-140238",
	year: 2011,
	month: 11,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20111120-140238 has been released! This update resolves 16: #UserPatch [Maps & RMS] Random map scripts cannot describe themselves to AIs. I'll just copy stuff from the readme lol:</p><p>Notes for RMS Scripters<br>- Inform AIs about your custom map with \"ai_info_map_type\"<br>- Command must be placed under the <PLAYER_SETUP> section<br>- Format: ai_info_map_type inConstMapName<br>- Values for MapName:</p><p>ARABIA, ARCHIPELAGO, ARENA, BALTIC, BLACK_FOREST, COASTAL, CONTINENTAL, CRATER_LAKE, FORTRESS, GHOST_LAKE, GOLD_RUSH, HIGHLAND, ISLANDS, MEDITERRANEAN, MIGRATION, MONGOLIA, NOMAD, OASIS, RIVERS, SALT_MARSH, SCANDANAVIA, TEAM_ISLANDS, YUCATAN, CUSTOM",
	itemsAffected: [],
	scriptingType: "rms"
}, {	
	number: "20111120-130405",
	year: 2011,
	month: 11,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20111120-130405 has been released! This update resolves 158: #UserPatch [AI Behavior] AI warships will not attack unless the enemy has a dock. This has been an issue for a very long time lol. Now, attack-now and groups will send warships to attack any enemy targets within range. ",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111120-093702",
	year: 2011,
	month: 11,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20111120-093702 has been released! This update simply moves all of the new required defconsts into UserPatchConst.per, so people don't have to spend time separating the important stuff from the demo defconsts and rules. I'm sorry, kram; I should have done this earlier. The readme now mentions it directly.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111119-170455",
	year: 2011,
	month: 11,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20111119-170455 has been released! This update resolves 157: #UserPatch [AI Scripting] AI ships will be sent to scout despite sn configuration. Even if sn-number-boat-explore-groups was set to 0, the first ship, which would usually be a fishing ship, would be sent to explore anyway. This should now be fixed. Thanks for the report, Archon!",
	itemsAffected: [snNumberBoatExploreGroups],
	scriptingType: "ai"
}, {	
	number: "20111119-001742",
	year: 2011,
	month: 11,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20111119-001742 has been released! This update resolves 156: #UserPatch [Request] Allow game screenshots to be saved as png format images. This fix will not cover full map prints due to the computational complexity of encoding such large images during a game. GDI+, which is built into Windows XP and later, is required for this feature to work. It's available as a download for older systems. If it's unavailable, bmp will be used instead.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111118-155456",
	year: 2011,
	month: 11,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20111118-155456 has been released! This update resolves 155: #UserPatch [AI Scripting] A new sn is required to enable civilian offense. With this update, AIs can now \"properly\" militarize their villagers at any time. I changed the name of snId:257 from the other day to accomodate the change, as well. Sappers Supremacy Rush, Campeador? :lol:</p><p>- sn-number-civilian-militia: snId:257, default:10, range:>=0 (formerly sn-maximum-tower-attackers) Set to the maximum number of villagers who may be used to attack the enemy.<br>- sn-allow-civilian-offense: snId:258, default:0, range:0-1. Set to 1 to allow villagers to participate as soldiers in town-size attacks. If set to 0, villagers will only be sent to attack enemy forward towers, without murder holes.</p><p>Incidentally, when sn-allow-civilian-offense is enabled, villagers will be more aggressive in general and will be far more likely to fight back when attacked by military units. Depending on the situation, this may be useful for defense.",
	itemsAffected: [snNumberCivilianMilitia, snAllowCivilianOffense],
	scriptingType: "ai"
}, {	
	number: "20111117-092502",
	year: 2011,
	month: 11,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20111117-092502 has been released! This update just makes some more changes to the installer. After downloading and researching both the 1.0b update and the 1.0c update, I discovered that they only differ in their executable data. In other words, 1.1 can probably install safely on either 1.0b or 1.0c, though 1.0c will be the \"public\" requirement lol. I've, therefore, changed the version check to look for \"Data\\empires2_x1_p1.dat\" instead of \"age2_x1\\age2_x1.icd.\" This should be much more reliable for 99% of installations, I hope.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111116-172715",
	year: 2011,
	month: 11,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20111116-172715 has been released! This update resolves 154: #UserPatch [Core Bug] Recordings have invalid extensions without the new format feature. If the \"new save filename format\" feature was not installed, the filename extension for recs would have been broken. Thanks for the report, LightTree!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111116-135244",
	year: 2011,
	month: 11,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20111116-135244 has been released! This update resolves 153: #UserPatch [AI Scripting] A new sn is required to configure the villager tower response. Now, AIs have some defensive capability against early forward towers. 1.1 AIs can disable the TLS response by setting this to 0. Here are the details for the new sn:<br>- sn-maximum-tower-attackers: snId:257, default:10, range:>=0",
	itemsAffected: [snNumberCivilianMilitia],
	scriptingType: "ai"
}, {	
	number: "20111115-211659",
	year: 2011,
	month: 11,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20111115-211659 has been released! This update changes the installer, making the core v1.1 feature required. This should ensure that people don't mistakenly think that it can or should ever be unchecked. As mentioned in the guide, Ctrl+Install is the proper method of avoiding the v1.1 gameplay modifications. The screen resolution options and widescreen stuff seem stable, so they have been merged into the core v1.1 update, as well.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111115-160011",
	year: 2011,
	month: 11,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20111115-160011 has been released! This update improves 122: #UserPatch [Economy] The boar luring system must be more intelligent. There were some slight issues with idling villagers in the earlier version lol. The bombard tower fix is hidden by default because some people think that unit stat/bonus changes should only be made by mods, which is a fair point, even though the feature was optional. The only reason this fix exists is that a certain someone, who may or may not have previously worked on a very important game (lol), told me that the fact that bombard towers cause only 1HP damage to rams per shot was likely unintended and should be considered a bug.</p><p>As for the wall fix, ES made the game semi-delete all wall segments and houses from each player's active object list. This meant that, for each update pass, the game wouldn't need to process any of those objects at all, for animation state, etc. With certain walling styles (GROK WALL), the number of wall segments can be quite high. Without proper testing, it would be irresponsible for me to ignore ES' decision and return them to the active object list by default.</p><p>Finally, the built-in AI will need to be replaced by mod writers to enable things like boar hunting. However, it will benefit from other things, like the intelligent builder selection and various other fixes. Thanks, Mameluke!",
	itemsAffected: [pObjectList],
	scriptingType: "ai"
}, {	
	number: "20111115-131701",
	year: 2011,
	month: 11,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20111115-131701 has been released! This update resolves 122: #UserPatch [Economy] The boar luring system must be more intelligent. Now, boar lurers and support hunters will not be retasked until the target is down.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111114-114149",
	year: 2011,
	month: 11,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20111114-114149 has been released! This update resolves 152: #UserPatch [AI Scripting] Script commands, such as up-reset-unit, may cancel research. Thanks to Archon for another great report + recording! If up-reset-unit was executed with the all units class, the code did not ensure that buildings were skipped. The result was that all pending research would be cancelled. I can't believe how long this bug has existed :lol:</p><p>Oh, I forgot to mention the new sn in this release: sn-home-exploration-time. Set it to the maximum amount of time, in seconds, that should be dedicated to exploring the home town center region. After this time, the old 1.0c scouting system will be used. If it's set to 0, it means the new home scouting system is disabled.<br>- sn-home-exploration-time: snId:256, default:300, range:>=0",
	itemsAffected: [cUpResetUnit, snHomeExplorationTime],
	scriptingType: "ai"
}, {	
	number: "20111114-053845",
	year: 2011,
	month: 11,
	day: 14,
	version: 1.1,
	notes: "UserPatch 20111114-053845 has been released! This update simply makes some updates to the installer, adding more command line parameters for silent operations and shortcuts. In addition, the -v parameter should help those who are aware that their system has an invalid installation of v1.0c, but would like to proceed regardless.</p><p>SetupAoC.exe Command Parameters<br>- SetupAoC.exe -i: Upgrade to v1.1<br>- SetupAoC.exe -c: Enhance v1.0c<br>- SetupAoC.exe -u: Uninstall<br>- Add -s to start the game afterward<br>- Add -v to bypass the version check</p><p>Shortcut Examples<br>- Run v1.1, with no version/icd check: \"SetupAoC.exe -i -s -v\"<br>- Run enhanced v1.0c: \"SetupAoC.exe -c -s\"<br>- Run original v1.0c: \"SetupAoC.exe -u -s\"<br>- Silently install enhanced v1.0c, with no check: \"SetupAoC.exe -c -v\"",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111113-142057",
	year: 2011,
	month: 11,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20111113-142057 has been released! This update resolves 151: #UserPatch [Core Bug] AI errors should be suppressed during multiplayer transitions. This tweaks the previous fix slightly, in order to make the user experience more seamless when an AI experiences an error in multiplayer. LightTree knows what I'm talking about ",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111113-030335",
	year: 2011,
	month: 11,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20111113-030335 has been released! This update resolves 149: #UserPatch [Core Bug] AI names are not transferred to clients in multiplayer. This one is for LightTree! Now, the host will transfer a new player packet with the names of all AIs in the game to connected clients. I hope the fix works well, but I'm sure we'll find some issues with it sooner or later lol. I'm sorry it took so long! Here's another, Eel :lol:</p><p>The compatibility build has been updated for Windows 9X/2K: http://userpatch.aiscripters.net/patch9x/",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111112-213238",
	year: 2011,
	month: 11,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20111112-213238 has been released! This is just a performance tweak for the tech tree mouse fix.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111112-080446",
	year: 2011,
	month: 11,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20111112-080446 has been released! This update makes some adjustments to the patch installer. Now, most of the more obscure optional features like the bombard tower fix and the ore resource display fix are hidden by default. To view all available features, run SetupAoC.exe by pressing Enter while holding the Ctrl key until the window appears. This change will hopefully make it easier for people to not mistakenly check and install optional features. In addition, the installer will now pre-select the windowed mode feature if wndmode.dll is present in the \"age2_x1\" folder.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111112-055902",
	year: 2011,
	month: 11,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20111112-055902 has been released! This update resolves 150: #UserPatch [Core Bug] Tech tree mouse behavior is inconsistent in windowed mode. Thanks once again to Archon for the great report! This was quite a severe bug lol. Eel, I've seen that thread, but thanks for the link! I want to stay as far away from PR work as possible, so I'm hiding from there. The more people who don't know who is working on this, the better lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111112-012713",
	year: 2011,
	month: 11,
	day: 12,
	version: 1.1,
	notes: "UserPatch 20111112-012713 has been released! This update just contains the new self-contained installation guide, and contains no changes to the patch itself.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111111-051207",
	year: 2011,
	month: 11,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20111111-051207 has been released! This update resolves 148: #UserPatch [Core Bug] All-Visible recorded games have object selection issues. Thanks to Archon for reporting this! Thanks, Eel!</p><p>Without reports and testing, though, I wouldn't be able to do anything lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111110-232921",
	year: 2011,
	month: 11,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20111110-232921 has been released! This update resolves 147: #UserPatch [Request] Allow F7 to toggle always-on-top and F8 to toggle background processing. I hope this change makes it much easier to use these features. At least, I hope it's better than creatively playing with the shift key lol. It will make a sound effect like the one you hear when you press F4 or F11 for the stats displays each time you use these new buttons.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111109-190308",
	year: 2011,
	month: 11,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20111109-190308 has been released! This update resolves 146: #UserPatch [Request] Set the game to be displayed always-on-top in windowed mode. The game can still be minimized to the taskbar, of course. This should make it easier to monitor games while working on other things in the background.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111109-171549",
	year: 2011,
	month: 11,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20111109-171549 has been released! This update resolves 145: #UserPatch [Request] Allow the game to run in the background. With this update, if the Shift key is down while the focus is switched with alt+tab or the mouse, the game will run in the background. It can be a bit tricky to ensure the Shift key is down while switching sometimes lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111108-042728",
	year: 2011,
	month: 11,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20111108-042728 has been released! This update resolves 144: #UserPatch [AI Scripting] New facts are required to abstract object counting. In addition, breaking changes have occurred with up-pending-objects and up-research-status. I've updated Chameleon for those changes, but most 1.1 AIs may need to be fixed. Another list:</p><p>1. Fact: (up-object-type-count redirectOp inObjectId compareOp inValue)<br>- Use like unit-type-count and building-type-count together.<br>- Example: (up-object-type-count c:< villager >= 10) ;returns true if existing villagers >= 10</p><p>2. Fact: (up-object-type-count-total redirectOp inObjectId compareOp inValue)<br>- Use like unit-type-count-total and building-type-count-total together.<br>- Example: (up-object-type-count-total c:< villager >= 10) ;returns true if existing + pending villagers >= 10</p><p>3. Fact: (up-research-status <strong>redirectOp</strong> inTechId compareOp inResearchState)<br>- Use to determine the research status of a tech. Breaking change in bold.<br>- Example: (up-research-status c:< ri-loom >= research-pending) ;returns true if loom is either researching or complete</p><p>4. Fact: (up-pending-objects <strong>redirectOp</strong> inObjectId compareOp inPendingObjects)<br>- Use to perform a comparison with the pending train/build count of an object. Breaking change in bold.<br>- Example: (up-pending-objects c:< house >= 1) ;returns true if 1 or more houses are under construction",
	itemsAffected: [cUpObjectTypeCount, cUpObjectTypeCountTotal, cUpResearchStatus, cUpPendingObjects],
	scriptingType: "ai"
}, {	
	number: "20111107-221442",
	year: 2011,
	month: 11,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20111107-221442 has been released! This update resolves 141: #UserPatch [AI Scripting] New facts and actions are required to abstract research and object creation, 142: #UserPatch [AI Scripting] New actions are required for additional escrow control, and 143: #UserPatch [AI Scripting] Allow negative values for the gatherer modifier sns. The last fix unbounds the 156-159 sns entirely, so please be careful. I'll just list the new stuff like before lol:</p><p>1. Fact: (up-can-research inGoalEscrowState redirectOp inTechId)<br>- Use like can-research. inGoalEscrowState is a goal passed into the command to toggle the \"with-escrow\" state.<br>- Example: (up-can-research gl-escrow-state c:< ri-fletching) ;returns true if fletching can be researched<br>2. Fact: (up-can-train inGoalEscrowState redirectOp inUnitId)<br>- Use like can-train. inGoalEscrowState is a goal passed into the command to toggle the \"with-escrow\" state.<br>- Example: (up-can-train gl-escrow-state c:< spearman-line) ;returns true if spearman-line can be trained<br>3. Fact: (up-can-build inGoalEscrowState redirectOp inBuildingId)<br>- Use like can-build. inGoalEscrowState is a goal passed into the command to toggle the \"with-escrow\" state.<br>- Example: (up-can-build gl-escrow-state c:< outpost) ;returns true if an outpost can be built</p><p>4. Action: (up-research inGoalEscrowState redirectOp inTechId)<br>- Use like research. inGoalEscrowState is a goal passed into the command to toggle the \"with-escrow\" state.<br>- Example: (up-research gl-escrow-state c:< ri-fletching) ;researches fletching<br>5. Action: (up-train inGoalEscrowState redirectOp inUnitId)<br>- Use like train. inGoalEscrowState is a goal passed into the command to toggle the \"with-escrow\" state.<br>- Example: (up-train gl-escrow-state c:< spearman-line) ;trains spearman-line<br>6. Action: (up-build inPlacementType inGoalEscrowState redirectOp inBuildingId)<br>- Use like build. inPlacementType is a const passed into the command to request normal or forward building.<br>- Example: (up-build place-forward gl-escrow-state c:< outpost) ;forward-builds an outpost</p><p>7. Action: (up-release-escrow)<br>- Sets the escrow amounts for food, wood, gold, and stone to 0 in a single command.<br>- Example: (up-release-escrow)<br>8. Action: (up-modify-escrow inResourceType mathOp inValue)<br>- Use like up-modify-goal and up-modify-sn. It modifies values directly, and will ensure the result is >= 0.<br>- Example: (up-modify-escrow food c:= 10) ;sets escrow-amount food directly to 10</p><p>Here are the new defconsts (all of them are in UserPatchSpecific.per):</p><p>;--------------------------------------<br>; Define EscrowState Constants<br>;--------------------------------------<br>(defconst escrow-included 0)<br>(defconst escrow-deducted 1)</p><p>;--------------------------------------<br>; Define PlacementType Constants<br>;--------------------------------------<br>(defconst place-normal 0)<br>(defconst place-forward 1)</p><p>If EscrowState is escrow-included, it means the command will use escrowed resources (like with-escrow). Otherwise, it will deduct escrowed resources when performing the command. Here's an explanation lol. If:<br>- food-amount = 90<br>- escrow-amount food = 50</p><p>Then with 1.0c commands:<br>- (can-train villager): internally uses escrow-deducted, and will see food as: (90 - 50) = 40 (returns false)<br>- (can-train-with-escrow villager): internally uses escrow-included, and will see food as: (90) = 90 (returns true)<br>- (train villager): internally uses escrow-deducted, and will see food as: (90 - 50) = 40 (fails)</p><p>With gl-escrow-state as escrow-deducted:</p><p>- (up-can-train gl-escrow-state c:< villager): will see food as: (90 - 50) = 40 (returns false)<br>- (up-train gl-escrow-state c:< villager): will see food as: (90 - 50) = 40 (fails)</p><p>With gl-escrow-state as escrow-included:<br>- (up-can-train gl-escrow-state c:< villager): will see food as: (90) = 90 (returns true)<br>- (up-train gl-escrow-state c:< villager): will see food as: (90) = 90 (succeeds)</p><p>Finally, using food as an example, if \"escrow-amount food\" is ever set higher than the current \"food-amount\", the next time a villager drops food, \"escrow-amount food\" will be set to the new \"food-amount\" by ES' code. If \"escrow-amount food\" is less than or equal to the current \"food-amount\", it will remain unchanged. With some creative scripting, escrow amounts could probably be set and used like resource buffers, with the escrow percentage values left at 0.</p><p>That took forever to write. :lol: ",
	itemsAffected: [cUpCanResearch, cUpCanTrain, cUpCanBuild, cUpResearch, cUpTrain, cUpBuild, cUpReleaseEscrow, cUpModifyEscrow],
	scriptingType: "ai"
}, {	
	number: "20111106-153418",
	year: 2011,
	month: 11,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20111106-153418 has been released! This update resolves 140: #UserPatch [Core Bug] Recorded games may still be saved with the old file extension. Forgot to update the optional feature that changed the filenames! Sorry ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111105-191244",
	year: 2011,
	month: 11,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20111105-191244 has been released! This update resolves 139: #UserPatch [Request] Change the file extensions for saved games and recordings. Now, as suggested by LordGravewish, the file extensions have been changed as follows for 1.1: gax->gaz, msx->msz, mgx->mgz. Yes, epic creativity lol. The result is that 1.0c should no longer offer to load 1.1 saves and vice-versa, which is good for the user experience, as people will no longer have to guess which of their saved files is safe to load and stuff.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111104-232831",
	year: 2011,
	month: 11,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20111104-232831 has been released! This update resolves 138: #UserPatch [Core Bug] The game view improperly scrolls automatically and uncontrollably. Thanks to marathon and ER for greatly accelerating this fix with their help and testing! The problem code seems to be with the hotkey parser. First, ES was referencing 4 seemingly uninitialized hotkeys in their scroll code. Second, their scrolling-exclusive hotkey translation function wasn't properly validating data, so it may have been attempting to read key state data from invalid addresses. I hope this fix works, as I didn't get a chance to verify it with anyone experiencing the bug lol.</p><p>In addition, with this release, holding Ctrl when clicking the Install button will limit updates to 1.0c-safe fixes, instead of upgrading to 1.1. This option is recommended only if you will need to watch 1.0c recordings and such, or need gameplay exactly as it was in 1.0c, as 1.1 has many critical gameplay fixes.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111103-135909",
	year: 2011,
	month: 11,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20111103-135909 has been released! This update resolves 137: #UserPatch [Request] Windowed mode must not disable the DWM. Thanks to @boogisha on Twitter for reporting the issue and confirming the solution! I've also updated the compatibility build for Windows 9X/2K to 20111103-135909.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111102-190321",
	year: 2011,
	month: 11,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20111102-190321 has been released! This update resolves 136: #UserPatch [Request] Add optional support for windowed mode with VegMod's wndmode.dll. Special thanks to both Veg and menopem for wndmode.dll and d3dhook.dll! It should work seamlessly with the new resolutions. Here's how to use this new optional feature:<br>- Download wndmode: <a>http://veg.slutsk.net/aoe/wndmode.zip</a><br>- Extract wndmode.dll into the \"age2_x1\" folder<br>- Install the \"Window library support\" feature<br>- Thanks to menopem (d3dhook): http://www.geocities.jp/menopem/<br>- Thanks to Veg (wndmode): <a>http://vrublevsky.org/</a>",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111101-141749",
	year: 2011,
	month: 11,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20111101-141749 has been released! This update resolves 135: #UserPatch [Request] Game does not support arbitrary screen resolutions. Thanks to LordGravewish for reminding me about these screen issues, and Cysion, grok, and others for feedback! My terrible computer doesn't really support any of these, so I never looked into it. Here's an example of <a href=\"http://i.imgur.com/tStUd.png\">1440x900</a> from a VM, and a screenshot of the new <a href=\"http://i.imgur.com/Xi6Uv.png\">configuration options</a> window.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111031-100650",
	year: 2011,
	month: 10,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20111031-100650 has been released! This update resolves 134: #UserPatch [Core Bug] Game does not support widescreen resolutions. Now, the options menu and in-game configuration window will provide a list of device-capable resolutions for standard widths: 800x, 1024x, and 1280x. Arbitrary width resolutions are essentially operational, however, I need to tweak some interface elements a bit more before releasing that fix. In addition to this, I fixed the issue with up-get-target-data's class id values not being shifted into the 900s. Sorry ",
	itemsAffected: [cUpGetTargetFact],
	scriptingType: "ai"
}, {	
	number: "20111027-114702",
	year: 2011,
	month: 10,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20111027-114702 has been released! This update resolves 133: #UserPatch [AI Scripting] New facts and actions are required to properly evaluate threats. I'll just list the new stuff lol:</p><p>1. Fact: (up-projectile-detected inProjectileType compareOp inElapsedTime)<br>- Use to check the time that has elapsed since the last time a type of projectile was fired at your units.<br>- Example: (up-projectile-detected projectile-town-center c:< 2000) ;returns true for town center fire within the last 2s<br>2. Action: (up-get-projectile-player inProjectileType outGoalPlayerId)<br>- Use to get the player id of the enemy that last fired a type of projectile at you.<br>- Example: (up-get-projectile-player projectile-castle gl-attacking-player)<br>3. Action: (up-get-threat-data outGoalElapsedTime outGoalPlayerId outGoalSourceClass outGoalTargetClass)<br>- Use to get the elapsed time, enemy player id, source (enemy object), and target (your object) of the last threat.<br>- Example: (up-get-threat-data gl-threat-time gl-threat-player gl-threat-source gl-threat-target)</p><p>Here are the new defconsts for ProjectileType (see AI\UserPatchSpecific.per for all of them):</p><p>;--------------------------------------<br>; Define ProjectileType Constants<br>;--------------------------------------<br>(defconst projectile-town-center 0)<br>(defconst projectile-castle 1)<br>(defconst projectile-watch-tower 2)<br>(defconst projectile-bombard-tower 3)<br>(defconst projectile-ship 4)<br>(defconst projectile-siege 5)<br>(defconst projectile-fortification 6)<br>(defconst projectile-any 7)</p><p>Hopefully, that covers 90% of the stuff AIs need to have to be able to detect enemy threats. Incidentally, up-get-attacker-class (action) and up-attacker-class (fact) are different, in that they are updated only based on (town-under-attack) events. The new up-get-threat-data and the projectile stuff provide information about the last attack, regardless of where it happened. One last note: scorpions aren't considered under the \"projectile-siege\" category for the projectile stuff; they fall under the \"projectile-any\" category, like archers, etc. This means you can use \"projectile-siege\" to detect building-threatening, ranged siege weapons, like trebuchets, onagers, and bombard cannons.",
	itemsAffected: [cUpProjectileDetected, cUpGetProjectilePlayer, cUpGetThreatData],
	scriptingType: "ai"
}, {	
	number: "20111025-234549",
	year: 2011,
	month: 10,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20111025-234549 has been released! This update resolves 131: #UserPatch [AI Scripting] A new fact is required for AIs to check internal resource data, and 132: #UserPatch [AI Scripting] A new action is required for AIs to retreat to specific targets. The first fix adds (up-resource-amount inResourceId compareOp inValue), as requested by offwo, for AIs to perform comparisons with all internal resources, which includes things like total conversions, kills, and currently held relics. I have no idea what most of the internal resources are yet lol. A \"resource-amount\" identifier is now available for use with up-get-player-fact, as well. The second fix adds (up-retreat-to inObjectId redirectOp inRetreatUnitId), so AIs can retreat all of a specific unit type to a random object of a specific building or unit type.</p><p>Here are the new defconsts:</p><p>;--------------------------------------<br>; Define FactId Constants<br>;--------------------------------------<br>(defconst game-time 0)<br>(defconst population-cap 1)<br>(defconst population-headroom 2)<br>(defconst housing-headroom 3)<br>(defconst idle-farm-count 4)<br>(defconst food-amount 5)<br>(defconst wood-amount 6)<br>(defconst stone-amount 7)<br>(defconst gold-amount 8)<br>(defconst escrow-amount 9)<br>(defconst commodity-buying-price 10)<br>(defconst commodity-selling-price 11)<br>(defconst dropsite-min-distance 12)<br>(defconst soldier-count 13)<br>(defconst attack-soldier-count 14)<br>(defconst defend-soldier-count 15)<br>(defconst warboat-count 16)<br>(defconst attack-warboat-count 17)<br>(defconst defend-warboat-count 18)<br>(defconst current-age 19)<br>(defconst current-score 20)<br>(defconst civilization 21)<br>(defconst player-number 22)<br>(defconst player-in-game 23)<br>(defconst unit-count 24)<br>(defconst unit-type-count 25)<br>(defconst unit-type-count-total 26)<br>(defconst building-count 27)<br>(defconst building-type-count 28)<br>(defconst building-type-count-total 29)<br>(defconst population 30)<br>(defconst military-population 31)<br>(defconst civilian-population 32)<br>(defconst random-number 33)<br>(defconst resource-amount 34)</p><p>;--------------------------------------<br>; Define GroupId Constants<br>;--------------------------------------<br>(defconst infantry-class 906)<br>(defconst archery-class 900)<br>(defconst cavalry-class 912)<br>(defconst cavalry-archer-class 936)<bR>(defconst archery-cannon-class 944)<br>(defconst cavalry-cannon-class 923)<br>(defconst monastery-class 918)<br>(defconst siege-weapon-class 913)<br>(defconst scorpion-class 955)<br>(defconst packed-trebuchet-class 951)<br>(defconst unpacked-trebuchet-class 954)<br>(defconst petard-class 935)<br>(defconst warship-class 922)<br>(defconst all-units-class -1)</p><p>;--------------------------------------<br>; Define ResearchState Constants<br>;--------------------------------------<br>(defconst research-unavailable 0)<br>(defconst research-available 1)<br>(defconst research-pending 2)<br>(defconst research-complete 3)</p><p>;--------------------------------------<br>; Define StanceId Constants<br>;--------------------------------------<br>(defconst aggressive 0)<br>(defconst defensive 1)<br>(defconst stand-ground 2)<br>(defconst no-attack 3)</p><p>;--------------------------------------<br>; Define ResourceId Constants<br>;--------------------------------------<br>(defconst amount-kills 20)<br>(defconst amount-kill-ratio 44)<br>(defconst amount-losses 154)<br>(defconst amount-razings 43)<br>(defconst amount-conversions 41)<br>(defconst amount-techs 21)<br>(defconst amount-relics 7)</p><p>;--------------------------------------<br>; Define FindPlayerOp Constants<br>;--------------------------------------<br>(defconst attacker 0)<br>(defconst random 1)</p><p>New stuff: (defconst resource-amount 34) under \"Define FactId Constants\" and the \"Define ResourceId Constants\" section.",
	itemsAffected: [cUpResourceAmount, pFactId, cUpGetFact, cUpGetPlayerFact, cUpRetreatTo],
	scriptingType: "ai"
}, {	
	number: "20111021-144106",
	year: 2011,
	month: 10,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20111021-144106 has been released! This update resolves 130: #UserPatch [Core Bug] MP3 audio files with id3v2 tags may crash the game. If a scenario trigger, or other code, requested the playback of an mp3 file with id3v2 metadata tags, the game would usually crash to the desktop. This bug was probably responsible for all of these.</p><p>I've also updated the version for Windows 9X/2K to 20111021-144106.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111020-132149",
	year: 2011,
	month: 10,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20111020-132149 has been released! This update resolves 129: #UserPatch [Core Bug] Explored and All Visible states are broken in recordings. It looks like ES changed the way the game stores the visibility state flags after one of their patches. They updated the save/restore code, but forgot to update the recording playback system",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111017-170830",
	year: 2011,
	month: 10,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20111017-170830 has been released! This update resolves 128: #UserPatch [Core Bug] The idle villager button locates enemy scouts under certain conditions. It's one of those rare bugs that many people have reported, where a villager would garrison into an attacking scout during its final activity pass before being able to transition to the \"dead\" state. This would keep the villager alive, and allow the idle villager button to track its location (\"in\" the enemy scout lol). According to Cysion (thanks for the information and recording link!), this was supposed to be a feature of the game where scouts would be able to kidnap villagers. Obviously, this feature was later removed.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111016-193457",
	year: 2011,
	month: 10,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20111016-193457 has been released! This update resolves 127: #UserPatch [Core Bug] Repairers sent to dropsites perform improperly. This bug caused repairers to appear as though they were \"gathering\" from dropsites like town centers, while repairing them at an unusually slow rate. Thanks to fen, offwo, xhip, and others for finding this one! In addition, the new epic repair changes were made to sn-object-repair-level. All AIs modifying the default will likely need to be updated. I've already uploaded a fixed Chameleon. The sn takes a sum of these \"flags\" as its value:</p><p>0 = wonder (always repaired)<br>1 = castle, monastery<br>2 = town-center<br>4 = barracks<br>8 = archery-range<br>16 = stable<br>32 = siege-workshop<br>64 = dock<br>128 = market<br>256 = university<br>512 = blacksmith<br>1024 = lumber-camp, mining-camp, mill<br>2048 = house<br>4096 = towers<br>8192 = walls and gates<br>16384 = siege weapons</p><p>The default for this sn is now:<br>Scenario/Campaign: 1 (wonder, castle, monastery), same as 1.0c<br>Otherwise: 16387 (wonder, castle, monastery, town-center, siege)",
	itemsAffected: [snObjectRepairLevel],
	scriptingType: "ai"
}, {	
	number: "20111016-065713",
	year: 2011,
	month: 10,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20111016-065713 has been released! This update adjusts the default value of sn-object-repair-level based on the selected game mode, as suggested by offwo. Now, for campaigns and scenarios, the default will be 1, which includes critical buildings and excludes siege from the list of repairable objects. For standard games, the default will be 2 (critical buildings + siege). AIs that set this sn directly don't have to worry about this change, as they obviously overwrite the default. I hope this compromise is acceptable for most MP players and scripters.",
	itemsAffected: [snObjectRepairLevel],
	scriptingType: "ai"
}, {	
	number: "20111015-184231",
	year: 2011,
	month: 10,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20111015-184231 has been released! This update changes the behavior of sn-object-repair-level, providing siege separation from critical buildings. From the updated (and included) strategic number reference: Set to 0 to disable repair, except for wonders. A value of 1 adds most critical buildings to the list of repairable objects, 2 adds siege weapons, 3 adds non-critical buildings, and 4 adds walls, gates, and houses. The default is now 2, meaning the behavior for 1.0c AIs is the same as it was before (critical + siege). AIs targeting 1.1 may need to be updated to exclude siege, if desired. I apologize for the inconvenience. Please keep the feedback coming in the other thread!</p><p>Thanks for your testing and help, LightTree",
	itemsAffected: [snObjectRepairLevel],
	scriptingType: "ai"
}, {	
	number: "20111010-045916",
	year: 2011,
	month: 10,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20111010-045916 has been released! This update resolves 126: #UserPatch [Request] Add an optional feature to display ore resources, as requested by alexandra for mods.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111010-005321",
	year: 2011,
	month: 10,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20111010-005321 has been released! This update attempts to provide lurers with additional garrison time in order to ensure that the targeted boar switches to a support hunter before releasing the lurer from the town center. In addition, I hope it fixes a bug that blocked lurers from EVER ungarrisoning lol.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20111009-212822",
	year: 2011,
	month: 10,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20111009-212822 has been released! This update is intended to resolve 125: #UserPatch [Core Bug] Maps are repeated under certain circumstances in multiplayer. Thanks to Grok, LightTree, fen, and SH for noting this in their tests!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20111006-204808",
	year: 2011,
	month: 10,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20111006-204808 has been released! Yes, fixes have finally resumed after over a month. I'm sorry about the delay. This update is intended to resolve 124: #UserPatch [Core Bug] Trebuchets are able to move while unpacked. First reported by marathon, this bug was confirmed by Grok and LightTree in their epic multiplayer games. It was an unfortunate side effect of the initial trebuchet targeting fix. It was lol if you've ever seen it, but now it's hopefully fixed",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110822-051952",
	year: 2011,
	month: 8,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20110822-051952 has been released! This update includes a minor adjustment to an optional terrain fix for alexandra. That's all... for now",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110811-040453",
	year: 2011,
	month: 8,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20110811-040453 has been released! This update is intended to fix a few issues in random places. First, it fixes the issue that offwo mentioned in the chat, where support hunters were requested from very, very far away. Next, boar hunters will not be retasked to build until the boar is down, as requested by fen. They may still be retasked for other reasons, though; I'll need to test some things. Finally, in making the change to block hunter retasking, I made a tweak to make the system select builders based on proximity to foundations. This is most noticeable with farmers consistently building adjacent farms. It should make things a bit more efficient, I hope.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110810-045145",
	year: 2011,
	month: 8,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20110810-045145 has been released! This update is intended to improve boar luring further. Now, the lurer will attempt to garrison into the town center when it's low on HP. It will then try to wait for the boar to retarget before ungarrisoning from the town center and rejoining the hunt. I hope this also resolves a possible recording OOS in the previous luring code. I will need to check some things in multiplayer later. Until then, I assume it may crash/OOS in multiplayer lol. Please test it in single-player if you have time.</p><p>Edit: k, 20110810-045145 now seems to work in multiplayer",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110801-223203",
	year: 2011,
	month: 8,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20110801-223203 has been released! This update changes up-drop-resources and up-retask-gatherers, extending their capabilities. I also updated the readme to make the issue with \"redirectOp\" a bit more clear, I hope.</p><p>Here are the new formats:<br>- (up-drop-resources inResourceType redirectOp inMinResources)<br>- (up-retask-gatherers inResourceType redirectOp inNumGatherers)</p><p>For up-retask-gatherers, inMinResources is now inNumGatherers, which means the action will retask \"inNumGatherers\" villagers from the specified resource if possible, without regard for carried resources. For both actions, inResourceType now accepts unit classes (group ids), so you can use 958 for livestock, 949 for farms, 907 for forage, 909 for deer, 910 for boar, and 933 for fish, in addition to the previous values like food, wood, stone, and gold. Please note that it may not always work perfectly yet; I'm still trying to improve it.</p><p>(defconst livestock-food 958)<br>(defconst farm-food 949)<br>(defconst forage-food 907)<br>(defconst deer-food 909)<br>(defconst boar-food 910)<br>(defconst fish-food 933)<br>(defconst hunting-food 15) ;909 + 910<br>(defconst forager-food 16) ;same result as 907<br>(defconst fisher-food 17) ;same result as 933",
	itemsAffected: [cUpDropResources, cUpRetaskGatherers],
	scriptingType: "ai"
}, {	
	number: "20110731-202639",
	year: 2011,
	month: 7,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20110731-202639 has been released! This update is intended to resolve 120: #UserPatch [Economy] A method is required for AIs to request a gatherer retasking event. I've added a (up-retask-gatherers inResourceType prefixId:< inMinResources) that works almost exactly like \"up-drop-resources,\" except the requested gatherers will retask to preferred resources after the drop. I hope this makes it easier for AIs to transition foragers toward better resources, and to make forced hunting easier, in combination with sn-minimum-number-hunters.</p><p>As with up-drop-resources, inResourceType can be food, wood, stone, gold, or one of the following:<br>(defconst hunter-food 15)<br>(defconst forage-food 16)<br>(defconst fisher-food 17)",
	itemsAffected: [cUpRetaskGatherers],
	scriptingType: "ai"
}, {	
	number: "20110731-015845",
	year: 2011,
	month: 7,
	day: 31,
	version: 1.1,
	notes: "UserPatch 20110731-015845 has been released! This update includes the deer-hunting identifier for dropsite-min-distance, as requested. Now, you can use dropsite-min-distance with hunting, boar-hunting, and deer-hunting, in addition to the original resource types.",
	itemsAffected: [cDropsiteMinDistance],
	scriptingType: "ai"
}, {	
	number: "20110730-224820",
	year: 2011,
	month: 7,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20110730-224820 has been released! This update adds a new \"boar-hunting\" identifier for use with dropsite-min-distance, resolving 118: #UserPatch [Economy] A method is required to determine the dropsite distance to boar. As before, \"dropsite-min-distance hunting\" gets the minimum distance for both deer and boar.</p><p>This version is incompatible with previous save files and recordings.",
	itemsAffected: [cDropsiteMinDistance],
	scriptingType: "ai"
}, {	
	number: "20110730-160512",
	year: 2011,
	month: 7,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20110730-160512 has been released! This update resolves 116: #UserPatch [Core Bug] Setting a building's gather point may damage adjacent enemy units. :lol: When an enemy unit's bounding ellipse intersects the bounding box of a building, setting the gather point onto that unit actually initiates an attack. This means that even buildings with 0 range and 0 attack can damage adjacent units due to the fact that the minimum damage permitted per attack is 1.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110730-135457",
	year: 2011,
	month: 7,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20110730-135457 has been released! This update simply reduces the optional bombard tower attack bonus against siege from +40 to +15. It works out better, I think. At least, it's not like this:",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110729-201956",
	year: 2011,
	month: 7,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20110729-201956 has been released! This update includes more boar luring optimizations, reducing the code by at least 90%. Please test it if you have time ",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110729-142121",
	year: 2011,
	month: 7,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20110729-142121 has been released! This update contains some code optimizations for the boar luring system. Please note that recordings and saved games from the past several versions will not be compatible with earlier patch builds, due to the various internal changes.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110729-050909",
	year: 2011,
	month: 7,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20110729-050909 has been released! This update includes more fixes for boar hunting. Now, all support hunters will no longer try to \"evade\" the boar, backing away from it and wasting time. Only the lurer will try to avoid the boar, leading it to the home town center, while the support hunters fire at it constantly, moving only to maintain range.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110728-191756",
	year: 2011,
	month: 7,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20110728-191756 has been released! This update tweaks boar luring by requesting 1 support hunter to assist the lurer up front, removing the 10-tile limitation on the secondary support requests, and reverting to retreat and shoot for the lurer closer to the town center.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110728-145054",
	year: 2011,
	month: 7,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20110728-145054 has been released! This update resolves 115: #UserPatch [Request] Provide additional terrain slots as an optional feature. Another one for modders. ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110728-101409",
	year: 2011,
	month: 7,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20110728-101409 has been released! This update resolves 114: #UserPatch [Request] Allow hidden terrains to be used in the scenario editor. Another little thing that might help scenario designers. It took some creative code to \"hack\" together the names for these from bits and pieces of text in the language.dll. Evil localization",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110727-194744",
	year: 2011,
	month: 7,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110727-194744 has been released! This update includes a fix for boar luring and moves the bombard tower fix to the unchecked state. Thanks for the report and recording, fen!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110727-091936",
	year: 2011,
	month: 7,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110727-091936 has been released! This update tweaks the experimental boar luring code a little bit. Let me know what you think",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110726-192247",
	year: 2011,
	month: 7,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20110726-192247 has been released! This update includes some new experimental boar luring code. Please let me know what you think so far. As for the optional features, in the end, no one will see the feature selection window by default. The final release will be a chrome-less install to avoid confusion. The feature selection window is useful for testing and for advanced customization later on.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110726-092239",
	year: 2011,
	month: 7,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20110726-092239 has been released! This update is intended to resolve 112: #UserPatch [Request] Bombard towers are no longer effective against siege weapons. Since a previous patch changed their attack from strike to pierce, bombard towers have only been able to cause 1hp damage against units with heavy pierce armor. This effectively makes them useless against battering-ram-line and trebuchets. Reverting their attack to strike shifts the balance to the other extreme, making them overpowered against most siege weapons. As a compromise, this update creates a small, but significant, +40 attack bonus against siege weapons for bombard towers. The +40 was chosen because that is the attack bonus that bombard towers have against ships.</p><p>Note: this fix is provided as an optional feature for now. It is not yet a part of the core v1.1 update. I decided to fix it after learning from \"somewhere\" that the fact that they cause almost no damage to siege weapons was not intended.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110724-023650",
	year: 2011,
	month: 7,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20110724-023650 has been released! This update finally resolves 111: #UserPatch [AI Behavior] Unpacked trebuchets should not be ignored by nearby units. Good times",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110723-041056",
	year: 2011,
	month: 7,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20110723-041056 has been released! This update is intended to resolve 71: #UserPatch [AI Scripting] New facts are required to detect standard victory conditions. However, I added various other features and capabilities, as well. I think it might be best if I just listed everything.</p><p>New Strategic Number: sn-focus-player-number: snId:251; default:0, range:0-8<br>- facilitates player manipulation, without affecting targeting</p><p>New Player Identifier: focus-player<br>In the same way that target-player is linked to sn-target-player-number, focus-player is linked to sn-focus-player-number. It can be used with any fact or action that expects a player number, except for up-get-player-fact.</p><p>New Rule Action: (up-get-victory-data outGoalPlayer outGoalType outGoalTime)<br>- outGoalPlayer will have the player number of whoever will win first via wonder, relics, or monument<br>- outGoalType will be one of the following: relic, wonder, or monument<br>- outGoalTime will be the internal victory clock: yearsRemaining = (outGoalTime / 10)<br>- if no one is going to win: outGoalPlayer = 0, outGoalType = 0, outGoalTime = -1</p>",
	itemsAffected: [snFocusPlayerNumber, pPlayerId],
	scriptingType: "ai"
}, {	
	number: "20110722-163027",
	year: 2011,
	month: 7,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20110722-163027 has been released! This update adds a couple of silent command line ops:<br>- install: SetupAoC.exe -i (will also reinstall/update with default features)<br>- uninstall: SetupAoC.exe -u</p><p>I figured these might be useful for Kor, if he decides to integrate the patch into his setup system in the future.<br>The Win9X/ME/2K all-purpose patch installer was also updated with these capabilities.<br>I don't think the patch is ready yet, but maybe someday... ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110722-020759",
	year: 2011,
	month: 7,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20110722-020759 has been released! This update resolves 110: #UserPatch [Request] Allow all standard terrains to be used with the blank map generator. It's just one of those little things",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110721-235123",
	year: 2011,
	month: 7,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20110721-235123 has been released! This update resolves 22: #UserPatch [Economy] Relics aren't distributed to other monasteries. Now, monks will intelligently choose which monastery to drop relics into. In other words, if one monastery is full, monks will deliver their relics to another monastery. You should no longer see monks struggling until the end of time, trying to put a relic into a monastery that is filled to capacity",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110719-222404",
	year: 2011,
	month: 7,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20110719-222404 has been released! This update is intended to resolve 24: #UserPatch [Economy] AI scouts often fail to find critical resources before departing. Obviously, it can never be perfect every time, but I hope it's better than it was. The new scouting system will try to circle the home town center as thoroughly as it can before reverting to the old scouting system for random exploration.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110716-105603",
	year: 2011,
	month: 7,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20110716-105603 has been released! Just a minor installer-related update.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110713-134802",
	year: 2011,
	month: 7,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20110713-134802 has been released! This update includes a fix for AI gaia unit conversion, disabling the feature for scenarios and campaigns. In addition, the new experimental scouting code is included. If sn-total-number-explorers is set to 0, scouts will be detasked at the next opportunity. I'd appreciate any feedback!",
	itemsAffected: [snTotalNumberExplorers],
	scriptingType: "ai"
}, {	
	number: "20110710-075043",
	year: 2011,
	month: 7,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20110710-075043 has been released! This update makes a few minor changes to the gate targeting code. I'm working on idle units and scouting issues, at the moment. More to come!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110706-163833",
	year: 2011,
	month: 7,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20110706-163833 has been released! This update fixes a minor bug that caused sheep to be automatically sent to the town center for human players upon placing their first town center on nomad-style maps.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110705-031521",
	year: 2011,
	month: 7,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20110705-031521 has been released! This update resolves 79: #UserPatch [Request] Onagers cannot target trees directly after saving a chapter. This one is for new member, Barbarossa89 ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110703-011030",
	year: 2011,
	month: 7,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20110703-011030 has been released! This update makes a small change to trade carts, so they will not target an incomplete replacement market, after their original target market is destroyed, causing them to become idle. It also moves monks and transport ships under military-population, and enables the in-game statistics displays to show non-idle fishing ships and barracks huskarls. I think more may need to be done in order to ensure that trade carts don't idle, so I haven't \"resolved\" that issue on the tracker yet.</p><p>Note: Military statistics are now calculated by adding units together by group id, instead of adding them together by unit id (this was incredibly inefficient code lol, involving dozens of read+addition operations for each display pass).",
	itemsAffected: [cMilitaryPopulation, cPlayersMilitaryPopulation],
	scriptingType: "ai"
}, {	
	number: "20110701-112551",
	year: 2011,
	month: 7,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20110701-112551 has been released! Just a minor bug fix.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110701-095830",
	year: 2011,
	month: 7,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20110701-095830 has been released! This update includes a new fact: (up-attacker-class compareOp inUnitClassId) to make it easier to check the attacker's identity in rules. Now, you don't have to use the (up-get-attacker-class) action to store the attacker data before testing it. I also made some performance optimizations for the extended villager id code.",
	itemsAffected: [cUpAttackerClass],
	scriptingType: "ai"
}, {	
	number: "20110630-190023",
	year: 2011,
	month: 6,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20110630-190023 has been released! This update resolves 65: #UserPatch [AI Scripting] Villagers cannot be counted by task. Here are the new identifiers that can be used with unit-type-count-like facts:<br>- villager-shepherd: 973<br>- villager-forager: 974<br>- villager-farmer: 975<br>- villager-hunter: 976<br>- villager-fisherman: 977<br>- villager-food: 978<br>- villager-wood: 979<br>- villager-stone: 980<br>- villager-gold: 981<br>- villager-builder: 982<br>- villager-repairer: 983<br>- villager-base: 984</p><p>These are predefined for UserPatch AIs, so you don't have to defconst them. The villager-base identifier counts untasked villagers (their names are simply \"Villager\" when you click on them). This identifier cannot be used to reliably determine the idle villager count, since many idle villagers are actually lumberjacks, etc. It can, however, be used to accurately determine when villagers are fighting against wolves or enemy units. Another method will be required to count actual idle villagers (and trade units). I'll work on that at a later time. Thanks, everyone!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110629-182615",
	year: 2011,
	month: 6,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20110629-182615 has been released! This update contains a new action: (up-pending-placement prefixId:< inObjectId), which can be used with building expansion systems. It will return true while the system is trying to place a building of the specified type. Do not use this fact with mills or camps; they use a different placement system. I also made a few minor tweaks to the new building system.",
	itemsAffected: [cUpPendingPlacement],
	scriptingType: "ai"
}, {	
	number: "20110629-104735",
	year: 2011,
	month: 6,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20110629-104735 has been released! This update contains some tweaks to the resource priority modifications, in order to ensure that farms are preferred over forage a bit more.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110628-080708",
	year: 2011,
	month: 6,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20110628-080708 has been released! This update makes some changes to boar assistance, fixes the player setup chat log (as requested by LightTree), and optimizes some of the new building system code. In addition, farms now have priority over forage bushes for gathering.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110627-094213",
	year: 2011,
	month: 6,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110627-094213 has been released! This update includes a new action: (up-drop-resources inResourceType prefix:< inMinResources). With this, you can request all gatherers of a specific type, who are carrying more than inMinResources, to drop their resources on demand. If you're hunting and have less than 50 food, you can execute something like (up-drop-resources food c:< 15) on a timer to avoid idle tc time. The prefix:< redirection operator is used to identify the type of inMinResources; it is not a comparison. This action could be useful for things like fast castles when you're really close to 800f/200g, wood for buildings, and other stuff I haven't even considered.",
	itemsAffected: [cUpDropResources],
	scriptingType: "ai"
}, {	
	number: "20110626-020209",
	year: 2011,
	month: 6,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20110626-020209 has been released! This is a relatively major update.<br>1. new action: (up-get-allied-target inGoalAllyPlayerId outGoalTargetNumber)<br>2. new action: (up-get-attacker-class outGoalAttackerClass)<br>3. new player identifier: target-player, which can be used where a player id is required</p><p>The first action, up-get-allied-target, allows for team coordination, by allowing allies to read each other's target player numbers. If you try to read an invalid player, such as an enemy, it will just return 0. You would typically want to figure out a team leader and check that player's target to get all other team members on the same page. An example of how to use it can be found in Chameleon\\userpatch\\targeting.per.</p><p>The next action, up-get-attacker-class, should be used after \"town-under-attack\" to determine the unit class of the attacker. If, for example, it returns 922, it's probably a naval attack. Class 910 indicates a wolf/jaguar attack. It is constantly updated and will retain the last attacker's class indefinitely. Before any attacks, it will return class 900 (archer/skirmisher), so just ignore it until the first town-under-attack.</p><p>Finally, there's the new player identifier, target-player. It's like my-player-number, but it isn't a constant, so you can't use it with the c:operators or up-get-player-fact (up-get-target-fact makes that issue irrelevant). It becomes whatever value you assign to sn-target-player-number.</p><p>Here are some example uses with facts:<br>(player-in-game target-player) ;checks if the target-player is in the game and hasn't lost<br>(stance-toward target-player enemy) ;checks if the target-player is an enemy<br>(players-building-count target-player > 0) ;checks the building-count of the target-player</p><p>Here are some example uses with actions:<br>(set-stance target-player enemy)<br>(chat-to-player target-player \"You are the target lol.\")<br>(up-chat-data-to-player target-player \"The target is player %d (you lol).\" s:< sn-target-player-number)</p><p>I released an update for Chameleon, as well, that fixes a few things and uses some of these new features.</p><p>The readme for the patch was reorganized, as well. I hope I didn't break anything",
	itemsAffected: [cUpAlliedSn, cUpGetAttackerClass, pPlayerId],
	scriptingType: "none"
}, {	
	number: "20110625-084221",
	year: 2011,
	month: 6,
	day: 25,
	version: 1.1,
	notes: "UserPatch 20110625-084221 has been released! This update breaks up-get-player-fact/up-get-target-fact by adding a new factId: player-in-game. There's also a set of findPlayerOp consts for use with the new (up-find-player [any|ally|neutral|enemy] findPlayerOp goalId) action. This action will search the players that are still in the game and return the one that matches the provided criteria. You can use 2 options with findPlayerOp for now: attacker and random. If you execute (up-find-player any attacker goalId), you can determine if the attacker was gaia by checking if the goal is 0. If you'd like to get the last actual player attacker, use \"enemy\" instead of \"any\" for the stance.</p><p>;--------------------------------------<br>; Define FactId Constants<br>;--------------------------------------<br>(defconst game-time 0)<br>(defconst population-cap 1)<br>(defconst population-headroom 2)<br>(defconst housing-headroom 3)<br>(defconst idle-farm-count 4)<br>(defconst food-amount 5)<br>(defconst wood-amount 6)<br>(defconst stone-amount 7)<br>(defconst gold-amount 8)<br>(defconst escrow-amount 9)<br>(defconst commodity-buying-price 10)<br>(defconst commodity-selling-price 11)<br>(defconst dropsite-min-distance 12)<br>(defconst soldier-count 13)<br>(defconst attack-soldier-count 14)<br>(defconst defend-soldier-count 15)<br>(defconst warboat-count 16)<br>(defconst attack-warboat-count 17)<br>(defconst defend-warboat-count 18)<br>(defconst current-age 19)<br>(defconst current-score 20)<br>(defconst civilization 21)<br>(defconst player-number 22)<br>(defconst player-in-game 23)<br>(defconst unit-count 24)<br>(defconst unit-type-count 25)<br>(defconst unit-type-count-total 26)<br>(defconst building-count 27)<br>(defconst building-type-count 28)<br>(defconst building-type-count-total 29)<br>(defconst population 30)<br>(defconst military-population 31)<br>(defconst civilian-population 32)<br>(defconst random-number 33)</p><p>;--------------------------------------<br>; Define GroupId Constants<br>;--------------------------------------<br>(defconst infantry-class 906)<br>(defconst archery-class 900)<br>(defconst cavalry-class 912)<br>(defconst cavalry-archer-class 936)<br>(defconst archery-cannon-class 944)<br>(defconst cavalry-cannon-class 923)<br>(defconst monastery-class 918)<br>(defconst siege-weapon-class 913)<br>(defconst scorpion-class 955)<br>(defconst packed-trebuchet-class 951)<br>(defconst unpacked-trebuchet-class 954)<br>(defconst petard-class 935)<br>(defconst warship-class 922)<br>(defconst all-units-class -1)</p><p>;--------------------------------------<br>; Define ResearchState Constants<br>;--------------------------------------<br>(defconst research-unavailable 0)<br>(defconst research-available 1)<br>(defconst research-pending 2)<br>(defconst research-complete 3)</p><p>;--------------------------------------<br>; Define StanceId Constants<br>;--------------------------------------<br>(defconst aggressive 0)<br>(defconst defensive 1)<br>(defconst stand-ground 2)<br>(defconst no-attack 3)</p><p>;--------------------------------------<br>; Define FindPlayerOp Constants<br>;--------------------------------------<br>(defconst attacker 0)<br>(defconst random 1)",
	itemsAffected: [pFactId, cUpFindPlayer, ],
	scriptingType: "ai"
}, {	
	number: "20110624-174802",
	year: 2011,
	month: 6,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20110624-174802 has been released! This update includes another new sn and resolves 104: #UserPatch [AI Behavior] Town size expansion attacks cannot be targeted against a specific player. The new sn is sn-safe-town-size, snId:250, default:255, range:1-255. Here's how it works: If an enemy building is inside both sn-maximum-town-size and the region specified by this sn, it will be targeted by defensive units. If the building is inside sn-maximum-town-size, but outside this region, it will be targeted only if it belongs to the player specified by sn-target-player-number. This allows for a \"safe zone\" against all enemy players building on your town, while targeting only the sn-target-player-number player outside the safe zone during TSA. I think this might be useful",
	itemsAffected: [snSafeTownSize],
	scriptingType: "ai"
}, {	
	number: "20110624-043320",
	year: 2011,
	month: 6,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20110624-043320 has been released! This update adds a new sn, a new fact/action, and resolves the following two issues, which I hope will greatly enhance team play:<br>102: #UserPatch [AI Behavior] AIs cannot target their attacks against a specific player<br>103: #UserPatch [AI Behavior] AIs cannot reliably render assistance to allies under attack</p><p>1. new sn-target-player-number, snId:249, default: 0, range: -1, 0, 1-8<br>2. new (up-get-target-fact factId parameter goalId) that can be used as either a fact or an action in rules</p><p>First, sn-target-player-number is used to specify which player to target for attacks. If this sn is set to -1, initiating an attack will instead provide assistance to allies. When set to 0, sn-attack-winning-player will determine the target. Setting this to a player that cannot be attacked (an ally or the AI itself) will result in undefined attack behavior. When this sn is set to an actual target player (1-8), up-get-target-fact allows the AI to get information about the target, like its civilization, etc. It works just like the newly renamed up-get-player-fact (previously up-read-fact-data).</p><p>Soon, I'll be creating some additional \"helper\" functions, so scripts will be able to get the closest enemy player, the last attacker, etc. These functions will allow AIs to set sn-target-player-number even more intelligently.",
	itemsAffected: [snTargetPlayerNumber, cUpGetTargetFact],
	scriptingType: "ai"
}, {	
	number: "20110624-003125",
	year: 2011,
	month: 6,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20110624-003125 has been released! Please don't kill me, jd lol. I've made some breaking changes to all kinds of stuff, in order to make some future changes more intuitive. I'm sorry!</p><p>1. \"up-read-fact-data\" has been renamed \"up-get-player-fact\" (I hope that's an easy find/replace)<br>2. up-get-player-fact has 2 new factIds: civilization and player-number (see defconsts below)<br>3. a new sn has been created: sn-dropsite-separation-distance, snId:248, default: 10, range: >= 1</p><p>The new sn, sn-dropsite-separation-distance, suggests to the system the minimum distance that you would like between dropsites. The game has been using 10 all this time, which is why camps could not be placed near one another and why dropsites spread away from the player's town rather quickly. I've found the best value, in general, to be around 3 or 4, which allows mills, mining camps, and lumber camps to be built near each other, but not too near. Setting it to higher values can be useful if you'd like to build an escape camp for when your gatherers are under attack.</p><p>Here are the updated defconsts from UserPatchSpecific.per:</p><p>;--------------------------------------<br>; Define FactId Constants<br>;--------------------------------------<br>(defconst game-time 0)<br>(defconst population-cap 1)<br>(defconst population-headroom 2)<br>(defconst housing-headroom 3)<br>(defconst idle-farm-count 4)<br>(defconst food-amount 5)<br>(defconst wood-amount 6)<br>(defconst stone-amount 7)<br>(defconst gold-amount 8)<br>(defconst escrow-amount 9)<br>(defconst commodity-buying-price 10)<br>(defconst commodity-selling-price 11)<br>(defconst dropsite-min-distance 12)<br>(defconst soldier-count 13)<br>(defconst attack-soldier-count 14)<br>(defconst defend-soldier-count 15)<br>(defconst warboat-count 16)<br>(defconst attack-warboat-count 17)<br>(defconst defend-warboat-count 18)<br>(defconst current-age 19)<br>(defconst current-score 20)<br>(defconst civilization 21)<br>(defconst player-number 22)<br>(defconst unit-count 23)<br>(defconst unit-type-count 24)<br>(defconst unit-type-count-total 25)<br>(defconst building-count 26)<br>(defconst building-type-count 27)<br>(defconst building-type-count-total 28)<br>(defconst population 29)<br>(defconst military-population 30)<br>(defconst civilian-population 31)<br>(defconst random-number 32)</p><p>;--------------------------------------<br>; Define GroupId Constants<br>;--------------------------------------<br>(defconst infantry-class 906)<br>(defconst archery-class 900)<br>(defconst cavalry-class 912)<br>(defconst cavalry-archer-class 936)<br>(defconst archery-cannon-class 944)<br>(defconst cavalry-cannon-class 923)<br>(defconst monastery-class 918)<br>(defconst siege-weapon-class 913)<br>(defconst scorpion-class 955)<br>(defconst packed-trebuchet-class 951)<br>(defconst unpacked-trebuchet-class 954)<br>(defconst petard-class 935)<br>(defconst warship-class 922)<br>(defconst all-units-class -1)</p><p>;--------------------------------------<br>; Define ResearchState Constants<br>;--------------------------------------<br>(defconst research-unavailable 0)<br>(defconst research-available 1)<br>(defconst research-pending 2)<br>(defconst research-complete 3)</p><p>;--------------------------------------<br>; Define StanceId Constants<br>;--------------------------------------<br>(defconst aggressive 0)<br>(defconst defensive 1)<br>(defconst stand-ground 2)<br>(defconst no-attack 3)",
	itemsAffected: [cUpGetFact, cUpGetPlayerFact, snDropsiteSeparationDistance],
	scriptingType: "ai"
}, {	
	number: "20110623-004010",
	year: 2011,
	month: 6,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20110623-004010 has been released! This update resolves 27: #UserPatch [Military] At times, AIs fail to attack walls and gates when obstructed. AIs will now attack gates, prioritizing them over standard wall segments under all circumstances. In addition, sn-special-attack-type2 set to 939 (gate class) will now add additional influence as expected. Set it to 927 (wall class) to influence wall segment targeting over gates and other objects. Humans can no longer make a \"wall\" of gates to hide from AIs! Finally, a preliminary wall flag fix was added as an optional feature. If enough people are concerned about lag, I'll leave it optional instead of integrating it into the core v1.1 update.",
	itemsAffected: [snSpecialAttackType2],
	scriptingType: "ai"
}, {	
	number: "20110620-165544",
	year: 2011,
	month: 6,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20110620-165544 has been released to fix a minor issue with the load-random compatibility code that was causing Chameleon (and possibly other v1.1 AIs) to load improperly on occasion, as reported by jd. Thanks!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110619-213115",
	year: 2011,
	month: 6,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20110619-213115 has been released! This update resolves 101: #UserPatch [Request] Allow the player to survey the map after a single player game ends. This should make everything a lot easier when watching AI wars.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110619-201003",
	year: 2011,
	month: 6,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20110619-201003 has been released! This update resolves 2 issues:<br>99: #UserPatch [Core Bug] Messages sent at the start of a recorded game do not appear<br>100: #UserPatch [Request] Adjust the default settings of the replay viewer</p><p>Fix 100 disables \"demo loop\" and \"view lock\" by default. It was a bit annoying to see the recording jump back to the start without being able to survey the end of the game.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110618-113234",
	year: 2011,
	month: 6,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20110618-113234 has been released! This update resolves 98: #UserPatch [Core Bug] Chat messages sent after an empty/taunt message override each other. You should no longer see blank lines in the chat log due to taunts/empty messages, and messages should not override each other, I hope. No patrol changes... yet",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110611-025247",
	year: 2011,
	month: 6,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20110611-025247 has been released! This update contains a bug-fix for the patrol system for human players (sorry lol). This system is still a work-in-progress, so there might be some issues. I didn't mention this or the last release on twitter for that reason. Please consider it an internal beta ",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110610-092802",
	year: 2011,
	month: 6,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20110610-092802 has been released! This update provides a new sn, sn-enable-patrol-attack (snId:247, default: 0, range: 0-1), to permit AIs to enable patrol-style attacking without patrol, using either attack groups or attack-now. The patrol attack system can be toggled, on or off, mid-attack. Units are still directed by the core attack system, so they will not walk back and forth over an arbitrary area like a standard patrol operation.</p><p>I think this may actually make attack-now the superior attack method. The system works best with large groups and ranged units, at the moment; there's plenty of room for improvement. I haven't tested this in multiplayer yet, so, for now, I would advise against enabling this sn for any AI that you will use online. Please try it if you have time!",
	itemsAffected: [snEnablePatrolAttack],
	scriptingType: "ai"
}, {	
	number: "20110610-002456",
	year: 2011,
	month: 6,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20110610-002456 has been released! This update resolves an issue mentioned by Archon and marathon: repairing a siege unit as it moves has no effect on its hit points. Repairing will now work as marathon suggested, where as long as the repairer is in range, the object will gain hp. If the object moves too far away, the repairer will stop repairing in order to catch up. I think it works well",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110609-183229",
	year: 2011,
	month: 6,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20110609-183229 has been released! This update, for readability purposes, renames :% to :%*, :~% to :%/, and :0/ to :z/. I hope it's an easy find/replace for anyone who was already using the old operators lol. I'm sorry about the switch.",
	itemsAffected: [pMathOp],
	scriptingType: "ai"
}, {	
	number: "20110609-032907",
	year: 2011,
	month: 6,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20110609-032907 has been released! This update makes several changes to math operators:</p><p>- [c|g|s]:/ operator: division, rounding to the nearest integer<br>- [c|g|s]:0/ operator: division, rounding toward zero by truncating the decimal, which was previously [c|g|s]:/<br>- [c|g|s]:mod operator: modulo operation that was previously [c|g|s]:%<br>- [c|g|s]:% operator: percentage shortcut that performs * value / 100, rounding to the nearest integer<br>- [c|g|s]:~% operator: inverse percentage shortcut that performs * 100 / value, rounding to the nearest integer</p><p>I hope these new operators make everything a bit easier. Thanks to jd for the ideas",
	itemsAffected: [pMathOp],
	scriptingType: "ai"
}, {	
	number: "20110607-161422",
	year: 2011,
	month: 6,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20110607-161422 has been released! This is a major update, with breaking changes for older save files and recordings again. The pseudo-random number generator has been improved with a new algorithm that has better distribution, with similar speed. For any given group of settings, there are now 4294967296 possible maps, instead of 32768. I also reduced the patch code segment size and added a patch-exclusive data segment to avoid ES' data space.",
	itemsAffected: [cGenerateRandomNumber],
	scriptingType: "ai"
}, {	
	number: "20110606-150059",
	year: 2011,
	month: 6,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20110606-150059 has been released! 200 gatherers. Good times",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110605-152258",
	year: 2011,
	month: 6,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20110605-152258 has been released! This update includes a fix for hunting distance data that may have been stored improperly in previous versions of the patch. It would have affected the results of this command: (dropsite-min-distance hunting X X). In addition, I've begun research into the 100 villager limit and expanded the player databases to provide the space necessary to expand that limit later. This is a breaking change, so saved games and recordings created prior to this version will not work with this one. Please keep your old patch if you wish to use those files.",
	itemsAffected: [cDropsiteMinDistance],
	scriptingType: "ai"
}, {	
	number: "20110604-220346",
	year: 2011,
	month: 6,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20110604-220346 has been released! Please refer to the twitter feed or the tracker for more information about the fixes (boring, internal changes only, this time lol).",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110529-020642",
	year: 2011,
	month: 5,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20110529-020642 has been released! This update includes a fix for the issue where if two AIs, usually with the same name, chat the same message at the same time, they will incorrectly appear in the same player color.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110527-104105",
	year: 2011,
	month: 5,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110527-104105 has been released! This update resolves the Nomad issue where sheep that are discovered before a TC is built idle indefinitely. Now, all AIs, including 1.0c AIs, will send their sheep to the TC when it's placed/built. This version should not go out-of-sync in multiplayer.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110526-013134",
	year: 2011,
	month: 5,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20110526-013134 has been released! This update resolves the coop slot shift bug in multiplayer. A small, but important bug fix",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110524-041204",
	year: 2011,
	month: 5,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20110524-041204 has been released! This update contains a fix for the player slot shift bug, I hope",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110521-161450",
	year: 2011,
	month: 5,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20110521-161450 has been released! This update allows AI players to \"convert\" gaia units and buildings as they are discovered. Thanks for the notice, fen!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110520-221648",
	year: 2011,
	month: 5,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20110520-221648 has been released! This update attempts to resolve the issue where lumber and mining camps cannot be built near one another. Incidentally, if anyone has twitter, I've set up an account and linked it with the issue tracker on my old site, so people can follow the progress of the patch as issues are resolved. Only the v1.1 (critical bugs + AI) issues have been added to the tracker for now. I'll add the issues for v1.1a (minor bugs + water) and v1.1b (convenience features, etc.) sooner or later lol. The tracker lists everything that has been resolved, along with what's currently being worked on. The site itself is on free hosting, so it isn't always stable, but uptime isn't really a concern here.</p><p>When this project goes public, the tracker will make it a lot easier to manage all of the issues and requests coming in from 3 (or more) different sites (it wouldn't be fun for MuRRay lol). I also hope people who no longer follow the game at sites like this one and aokh will learn about the patch on twitter and rejoin the fun. ",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110509-025406",
	year: 2011,
	month: 5,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20110509-025406 has been released! This update contains some internal changes to support up-print-list (temporary debug action) and a bug fix for the optional logging commands.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110505-000309",
	year: 2011,
	month: 5,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20110505-000309 has been released! This update enables AIs to use hero units as scouts for exploration. You can see the effect of this on maps like ES@Sherwood Forest, where the AI's hunting wolf will now run off to explore.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110502-150559",
	year: 2011,
	month: 5,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20110502-150559 has been released! This update restores the optional script logging feature with log and log-trace functionality. It was removed during The Bug hunt, but now it's back",
	itemsAffected: [cLog, cLogTrace],
	scriptingType: "ai"
}, {	
	number: "20110502-135111",
	year: 2011,
	month: 5,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20110502-135111 has been released! This update is very important, as now all AIs, including pre-patch AIs that have not opted in to the new building system with sn-enable-new-building-system set to 1, will be protected from the epic build-screw (aka. the buildings-destroyed-mid-construction-can-never-be-built-again bug). I think this fix is critical and I hope it helps a lot of existing AIs, especially for when it strikes farms and castles.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110501-223936",
	year: 2011,
	month: 5,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20110501-223936 has been released, fixing issues with up-read-fact-data and the following dataId values: soldier-count, attack-soldier-count, defend-soldier-count, warboat-count, attack-warboat-count, and defend-warboat-count. Note, however, that these defend counts are simply the number of units that are not attacking; they do not indicate whether or not the units are engaged in actual defense.</p><p>Here's how the game calculates it:<br>- soldier-count = 10<br>- attack-soldier-count = 6<br>- defend-soldier-count = 10 - 6 = 4</p><p>Thanks again!",
	itemsAffected: [cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20110501-132615",
	year: 2011,
	month: 5,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20110501-132615 has been released! This update includes an optional feature, changing automated filename formats to yyyymmdd-hhmmss - txt.ext, as requested by fen. I also completed some internal refactoring. Thanks, as always, for testing, fen! Thanks, kunyi!",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110430-130738",
	year: 2011,
	month: 4,
	day: 30,
	version: 1.1,
	notes: "UserPatch 20110430-130738 has been released! This version includes a new optional feature to replace snow/ice terrain with grass/moss. I've been doing some rms generator research recently, in order to find the functions that parse the rms script, perform terrain manipulation, etc. From the map-related requests on the list, this was the easiest, so lol",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110428-145535",
	year: 2011,
	month: 4,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20110428-145535 has been released! This version ensures that AIs that use the new building system and cancellation support do not go out of sync in multiplayer games. If a building was cancelled in earlier versions, it was extremely likely that the multiplayer game would go oos.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110427-120225",
	year: 2011,
	month: 4,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110427-120225 has been released! This version includes the vote panel/serial sync bug fix, 225 and 250 population limits, and disables the ungrouped AI player (team -) alliance. In addition, up-set-attack-stance, up-retreat-now, up-guard-unit, and up-reset-unit have been made multiplayer safe, and should not cause the game to go out of sync. As mentioned earlier, up-out-of-sync has been added for testing purposes. Please install the default features only.",
	itemsAffected: [cUpSetAttackStance, cUpRetreatNow, cUpGuardUnit, cUpResetUnit],
	scriptingType: "ai"
}, {	
	number: "20110329-144219",
	year: 2011,
	month: 3,
	day: 29,
	version: 1.1,
	notes: "UserPatch 20110329-144219 has been released, which addresses that epic bug. Thanks for letting me know about that, LarzPorsinna!</p><p>Editor's note: the reported bug is as follows: \"Just thought I'd report that using (up-retreat-now) when forward building causes the forward builders to retreat and remain inactive (ie the AI won't retask them). More interestingly, the building foundation graphics transform into the full-blown building graphic - so for example, a forward built castle could appear before a builder has even come anywhere near it! It's only a graphical thing, and the (fake) buildings don't actually function until their construction is completed by somebody else. I think it looks awesome personally, but it might be a bug that's worth fixing.\"",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110328-091039",
	year: 2011,
	month: 3,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20110328-091039 has been released! This update contains up-guard-unit, up-reset-unit, and a minor bug fix for up-retreat-now. The up-guard-unit command will assign a single unit of the requested type to guard a random unit of the other type, as long as they are on the same continent. The up-reset-unit command will disband all guards of the requested type. You can guard both units and buildings, so there are many things to think about. If you execute up-retreat-now without up-reset-unit, units will still guard their targets while retreating. Attacking will disband guards.</p><p>An example of guarding a monk with spearman-line:<br>(up-guard-unit monk c:< spearman-line)</p><p>An example of disbanding spearman-line guards:<br>(up-reset-unit c:< spearman-line)",
	itemsAffected: [cUpGuardUnit, cUpResetUnit, cUpRetreatNow],
	scriptingType: "ai"
}, {	
	number: "20110327-055709",
	year: 2011,
	month: 3,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110327-055709 has been released! This update fixes the simultaneous town center construction issue that Suriel discovered, in addition to merging up-set-unit-stance and up-set-unit-type-stance into up-set-attack-stance. This new action can set stances using any of the standard unit ids, unit-line ids, and group ids from the common unit list. If you wish to change the stance of all units, use -1 for the all-units-class. In addition, this update enables AIs to build docks on Nomad and along ice on maps such as Scandinavia and Baltic.</p><p>Finally, sn-special-attack-type2 can now be set to any specific object or group id (lines do not work, however) to target them. It seems to work relatively well with attack groups, but not with TSA. Set it to target \"mining-camp\" and watch what happens lol. The sn-special-attack-influence values don't seem to do anything, but I haven't researched them in detail yet. Incidentally, sn-special-attack-type1 set to 1 will target monasteries, while sn-special-attack-type3 set to 1 will target wonders, as before. Note that all 3 of these sns only direct units toward a target. Once they arrive, the internal targeting AI may retask them to \"higher priority targets\" nearby, which can be a problem.</p><p>If you were wondering, sn-special-attack-type2 originally targeted units against the gate group id. This doesn't seem to work, however, as I think gates have some kind of exception in the code since they are passable objects. I'll look into it further after I finish \"up-target-unit\" for direct targeting.",
	itemsAffected: [cUpSetAttackStance, snSpecialAttackType2],
	scriptingType: "ai"
}, {	
	number: "20110324-035557",
	year: 2011,
	month: 3,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20110324-035557 has been released! This is a small update to fix a minor bug when using up-read-fact-data as a fact in the conditionals section of a rule. Just noticed it in passing; sorry",
	itemsAffected: [cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20110324-031926",
	year: 2011,
	month: 3,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20110324-031926 has been released! Research for this one didn't take as long as I thought. This update contains the new up-retreat-now command to send military units back toward the home town center. With this fix, I now have an understanding of how to target any unit anywhere. This opens a lot of new scenarios. I can probably make a up-target-unit command that takes unitClassId values like the stance command to send units toward anything... sheep to the town center on demand (which should help on nomad), etc. More to come. Sorry, MuRRay!",
	itemsAffected: [cUpRetreatNow],
	scriptingType: "ai"
}, {	
	number: "20110323-174740",
	year: 2011,
	month: 3,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20110323-174740 has been released! I've moved a couple of the (hopefully) unrelated task-ungrouped fixes back into the core 1.1 update. That's all. I'm in research mode, for now, so new updates might be limited.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110322-183630",
	year: 2011,
	month: 3,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20110322-183630 has been released! With the help of LightTree, fenris, and grok, we were able to isolate the vote panel breaking issue to the task-ungrouped-soldiers fix in direct ip games. As such, this update isolates that fix, so it can be selected for LAN use until I study the issue further.",
	itemsAffected: [snTaskUngroupedSoldiers],
	scriptingType: "ai"
}, {	
	number: "20110321-142318",
	year: 2011,
	month: 3,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20110321-142318 has been released! This contains a minor tweak to ensure that the \"AI Map Type\" is limited to valid, defined values in the scenario editor.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110321-032004",
	year: 2011,
	month: 3,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20110321-032004 has been released! This update renders SetupMap obsolete, as I have enabled direct generation of random map scripts in the scenario editor. As for the recorded games (and saved games), I'm sorry, LightTree. The only thing you can do is revert to 1.0c temporarily, as the formats are incompatible with each other. As for incompatibility between v1.1s, that might be a problem until the final release lol.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110321-005901",
	year: 2011,
	month: 3,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20110321-005901 has been released! This update includes the new up-set-unit-stance and up-set-unit-type-stance actions. The set-unit-stance action modifies units by groupId, while the set-unit-type-stance action modifies them by the usual unit names, etc. Note that these commands should not be run in a loop on EVERY processing pass. Execute them with care, like you would with attack-now. They aren't nearly as computationally expensive as attack-now, but it's good to think about performance. The extended line constants, such as trebuchet-line and combined-huskarl-line, only work with counter facts, so they cannot be used here. I also fixed a critical bug in the repair code that would cause the game to crash if a human was playing.</p><p>Here are the new defconsts:</p><p>;--------------------------------------<br>; Define GroupId Constants<br>;--------------------------------------<br>(defconst infantry-class 6)<br>(defconst archery-class 0)<br>(defconst cavalry-class 12)<br>(defconst cavalry-archer-class 36)<br>(defconst archery-cannon-class 44)<br>(defconst cavalry-cannon-class 23)<br>(defconst monastery-class 18)<bR>(defconst siege-weapon-class 13)<br>(defconst scorpion-class 55)<br>(defconst packed-trebuchet-class 51)<br>(defconst unpacked-trebuchet-class 54)<br>(defconst petard-class 35)<br>(defconst warship-class 22)<br>(defconst all-units-class -1)</p><p>;--------------------------------------<br>; Define StanceId Constants<br>;--------------------------------------<br>(defconst aggressive 0)<br>(defconst defensive 1)<br>(defconst stand-ground 2)<br>(defconst no-attack 3)",
	itemsAffected: [cUpSetAttackStance],
	scriptingType: "ai"
}, {	
	number: "20110320-153614",
	year: 2011,
	month: 3,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20110320-153614 has been released! This is a relatively minor update that replaces up-research-in-progress with up-research-status. The reason for the change is that I don't like \"not\" commands lol. Oh, and it allows for checking all other research states, as well! Here are the defconsts:</p><p>(defconst research-unavailable 0)<br>(defconst research-available 1)<br>(defconst research-pending 2)<br>(defconst research-complete 3)</p><p>In this way, you can do things like (up-research-status ri-loom >= research-pending) to find out if something is either in-progress or complete in a single statement. Things like (up-research-status feudal-age < research-available) work, too. Anyway, now that the critical bugs list has been trimmed down again, I'll get back to stances, formations, and stuff.",
	itemsAffected: [cUpResearchStatus],
	scriptingType: "ai"
}, {	
	number: "20110319-184856",
	year: 2011,
	month: 3,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20110319-184856 has been released! This update contains several new features. First, you can now use unit-type-count with \"combined-huskarl-line\" (id:972) to get a combined total of huskarls, regardless of where they are trained. Next, sn-object-repair-level (snId:246) has been implemented. The default of 0 will repair wonders, castles, town-centers, monasteries, docks, towers, and siege weapons. If it's set to -1, nothing will be repaired. Setting it to 1 will extend repair to all other normal buildings. If it's set to 2, houses, gates, and walls will be added to the list. This last mode is more computationally expensive to use than the others, since repairability has to be computed for each wall segment and house and there are usually a lot of these. Finally, as I mentioned earlier, there was a bug that prevented delete-building (and the delete key pressed by the viewer) from destroying completed structures. This is now fixed.</p><p>Please test these new features if you have time!",
	itemsAffected: [snObjectRepairLevel],
	scriptingType: "ai"
}, {	
	number: "20110317-131812",
	year: 2011,
	month: 3,
	day: 17,
	version: 1.1,
	notes: "I'll extend the assistance distance to 100. I think sn-maximum-hunt-drop-distance should effectively control it :) Ok, I've uploaded UserPatch 20110317-131812 with the distance set to 100. I hope it helps!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110317-124734",
	year: 2011,
	month: 3,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20110317-124734 has been released! This update includes the above mentioned repair fix, so villagers should now repair all standard buildings, except houses, walls, and gates (those repair way too slowly for the cost), and all siege weapons. I made sure that they won't go insane, however, and send 50 villagers off to repair things at the same time.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110317-112532",
	year: 2011,
	month: 3,
	day: 17,
	version: 1.1,
	notes: "UserPatch 20110317-112532 has been released! This update fixes the critical bug where AIs do not close wall openings created by lumberjacks and siege. This fix might actually make walls useful for AIs under the right conditions.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110316-161837",
	year: 2011,
	month: 3,
	day: 16,
	version: 1.1,
	notes: "UserPatch 20110316-161837 has been released! This update extends their hard-coded maximum boar hunter assistance distance from 10 to 30, which should hopefully eliminate the problem where hunting is blocked. I don't think it's worth spending an sn to make that configurable, but if you think otherwise, let me know. I think maximum-hunt-drop-distance and the other hunting sns should allow for effective control. Please test it if you have time!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110315-162314",
	year: 2011,
	month: 3,
	day: 15,
	version: 1.1,
	notes: "UserPatch 20110315-162314 has been released! This update corrects the critical bug where AIs lose the ability to construct buildings after placing a wonder. In addition, there are now 3 states for sn-enable-boar-hunting: 0, which is the default, disables boar hunting, 1 enables boar hunting, and 2 enables boar hunting and disables deer hunting. When it's set to 2, sn-minimum-boar-hunt-group-size does not prevent boar hunting from starting if there aren't enough hunters available, so it might be good to set it to the same value as sn-minimum-number-hunters. In that way, once any villager targets a boar, the requested minimum number of villagers should instantly join them in the hunt.</p><p>I hope this helps to further improve your time, Suriel ",
	itemsAffected: [snEnableBoarHunting],
	scriptingType: "ai"
}, {	
	number: "20110313-175955",
	year: 2011,
	month: 3,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20110313-175955 has been released (third time today lol)! This update provides new, extended unit lines for trebuchets and monks. In order to count both monks and monk-with-relic units, use monk-line (constId:970). To count both packed and unpacked trebuchets, use trebuchet-line (constId:971). Special units of both types are included. These new unit lines should help to eliminate the extra rules that were needed to determine when to begin training. Both of the new lines are pre-defined for patch-exclusive AIs, but AIs that desire backward compatibility will need to defconst them.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110313-162019",
	year: 2011,
	month: 3,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20110313-162019 has been released! This update enables sn-minimum-number-hunters (snId:245). If this is set to a number greater than 0, the AI will attempt to send gatherers to hunt whenever possible, until the minimum is reached. This should allow for much more precise hunting than before. I recommend setting it to 0 at the start of the game to allow villagers to spread to normal tasks first and, when the time is right, you can modify both this and sn-enable-boar-hunting as necessary. If the current number of hunters is less than the minimum, any new villagers trained should instantly become hunters. Strangely, implementing sn-minimum-number-hunters was infinitely easier than sn-enable-boar-hunting lol. I thought this one would take a week or two to finish. Please test this when you have time!",
	itemsAffected: [snMinimumNumberHunters],
	scriptingType: "ai"
}, {	
	number: "20110313-134557",
	year: 2011,
	month: 3,
	day: 13,
	version: 1.1,
	notes: "UserPatch 20110313-134557 has been released! This update finally disables boar hunting by default, so older AIs that use forced hunting won't unintentionally lose villagers. In other words, sn-enable-boar-hunting (snId:244) is now in effect. By setting this to 1, boar hunting will be permitted. If it is set to 0, which is the default, boar hunting will be disabled. You can change this setting at any time during a game. I'll work on sn-minimum-number-hunters (snId:245) next.",
	itemsAffected: [snEnableBoarHunting],
	scriptingType: "ai"
}, {	
	number: "20110311-103810",
	year: 2011,
	month: 3,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20110311-103810 has been released! This update will hopefully fix that strange issue with the multiplayer resigned thing stuff lol. I tested it and it seems to work, but please try it as well.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110311-000503",
	year: 2011,
	month: 3,
	day: 11,
	version: 1.1,
	notes: "UserPatch 20110311-000503 has been released! I've made some progress toward enabling sn-enable-boar-hunting, but it's still not done. I also added current-age and random-number as dataIds for read-fact-data (sorry, some of the defconsts shifted again lol). Here are the new values:</p><p>(defconst game-time 0)<br>(defconst population-cap 1)<br>(defconst population-headroom 2)<br>(defconst housing-headroom 3)<br>(defconst idle-farm-count 4)<br>(defconst food-amount 5)<br>(defconst wood-amount 6)<br>(defconst stone-amount 7)<br>(defconst gold-amount 8)<br>(defconst escrow-amount 9)<br>(defconst commodity-buying-price 10)<br>(defconst commodity-selling-price 11)<br>(defconst dropsite-min-distance 12)<br>(defconst soldier-count 13)<br>(defconst attack-soldier-count 14)<br>(defconst defend-soldier-count 15)<br>(defconst warboat-count 16)<br>(defconst attack-warboat-count 17)<br>(defconst defend-warboat-count 18)<br>(defconst current-age 19)<br>(defconst current-score 20)<br>(defconst unit-count 21)<br>(defconst unit-type-count 22)<br>(defconst unit-type-count-total 23)<br>(defconst building-count 24)<br>(defconst building-type-count 25)<br>(defconst building-type-count-total 26)<br>(defconst population 27)<br>(defconst military-population 28)<br>(defconst civilian-population 29)<br>(defconst random-number 30)",
	itemsAffected: [cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20110310-101222",
	year: 2011,
	month: 3,
	day: 10,
	version: 1.1,
	notes: "UserPatch 20110310-101222 has been released! The last of the first wave of script changes has been completed, with the addition of the chat-data-to-player action and the ability to use read-fact-data in the conditional part of rules, as well. I can now focus on the hunting sns without interruption.",
	itemsAffected: [cUpChatDataToPlayer, cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20110309-191504",
	year: 2011,
	month: 3,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20110309-191504 has been released! This is a fairly major update with some breaking changes. First, sn-enable-new-building-system, sn-percent-building-cancellation, sn-enable-boar-hunting, and sn-minimum-number-hunters (the hunting sns are still not active) have been predefined for patch-exclusive AIs. AIs that wish to have backward compatibility, however, will still need to defconst them. Next, the v: prefix, for compareOps and mathOps, has been changed to c: to represent constants. In addition, UP-2000-RULES was removed entirely, in favor of UP-AVAILABLE, which allows for the detection of the patch, without regard for version.</p><p>Finally, all facts, built-in and extended, are now able to use the enhanced comparison operators. This means that you can do something like (players-unit-type-count any-enemy militiaman-line g:>= gl-some-goal). I think this last change will allow for much more streamlined and powerful rules. Please test these new features if you have time.",
	itemsAffected: [snEnableNewBuildingSystem, snPercentBuildingCancellation, snEnableBoarHunting, snMinimumNumberHunters, pCompareOp, pMathOp],
	scriptingType: "ai"
}, {	
	number: "20110309-040356",
	year: 2011,
	month: 3,
	day: 9,
	version: 1.1,
	notes: "UserPatch 20110309-040356 has been released! This update hopefully fixes the issue where, after restoring a multiplayer game, AI players have no name shown next to their chat lines. Please test this to ensure that everything works as expected. As for the issue with custom AIs shown with built-in civ names for players other than the host, that reflects their compatibility decision to abstract custom AIs as \"just AIs\" for multiplayer. If the host disconnects, custom AI players are able to transparently continue on as the built-in computer AI, which ensures that the game doesn't fail/crash. I think I'll leave that as it is for that reason.</p><p>I think I should to get back to the important gameplay fixes for a while. I might have time for the minor stuff and feature requests later.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110308-234355",
	year: 2011,
	month: 3,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20110308-234355 has been released! This update is intended to make the patch a bit more future proof and potentially increase script loading performance. First, let me explain the script loading process. All files that are requested by '(load \"file-name\")' are fully parsed, regardless of any #load-if preprocessor conditionals that tell the system to skip it. All \"load-random\" commands will try to load one of the named scripts if possible, once again, regardless of #load-if conditionals. However, if \"load-random\" cannot select a file due to the random number being out of range (low total or all zeros), the command will do nothing.</p><p>This is the only way to avoid the error checking system and, as such, it is the foundation for the backward, and now forward, compatibility mechanism that I have implemented. Previously, I had enabled (load-random + \"file-name\") to allow a script to load a file 100% of the time, exclusively on the patch. This takes advantage of a quirk in their code, which allows + to be passed as a valid load-percentage parameter, resulting in 0% being assigned to the file on the unpatched game. After the new changes, this is still the case, and (load-random + \"file-name\") will cause \"file-name\" to be ignored on 1.0c and loaded 100% of the time on this and all future versions of the patch. However, I have added the capability to append defconsts to the + to allow for #load-if-based, conditional load-random commands.</p><p>This will allow for future versions of the patch to ignore files that target older versions of the patch, and it will allow patch-specific AIs to skip entire chains of subscripts, which could greatly improve load-time performance if used correctly (to skip other game mode-related subscripts, for example).</p><p>Here is an example of how it can be used for compatibility:</p><p>#load-if-defined UP-VERSION-1.1<br>(defconst up-1.1-load 100)<br>#end-if<br>#load-if-defined UP-VERSION-1.2<br>(defconst up-1.2-load 100)<br>#end-if</p><p>; These commands will be ignored on the unpatched game,<br>; since the +text will be converted to 0<br>(load-random + \"script-to-load-on-all-userpatch-versions\")<br>(load-random<br>+up-1.1-load \"script-to-load-on-1.1-only\"<br>+up-1.2-load \"script-to-load-on-1.2-only\"<br>)",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110308-010347",
	year: 2011,
	month: 3,
	day: 8,
	version: 1.1,
	notes: "UserPatch 20110308-010347 has been released! This update finally shifts the UserPatch snIds into the new block, which should help to avoid any backward compatibility issues with AIs that have adopted unused sns. I completed some additional code refactoring and updated Chameleon with the new snIds, as well. Here are the new snIds:</p><p>snId:242: sn-enable-new-building-system. Replaces sn-legacy-building-system. Set to 1 for the new system.<br>snId:243: sn-percent-building-cancellation. Same as before; range: 1-100.<br>snId:244: sn-enable-boar-hunting. Has no effect yet; boar hunting is on by default; range: 0/1.</p><p>Boar hunting will be disabled by default as soon as I enable the setting. LightTree, thanks for the screenshot! It looks like those positions are closed; does that mean that the shadow players don't actually appear in the game? Maybe it's just a simple case of them not clearing their interface variables properly. I'll look into it, nevertheless.",
	itemsAffected: [snEnableNewBuildingSystem, snPercentBuildingCancellation, snEnableBoarHunting],
	scriptingType: "ai"
}, {	
	number: "20110307-190525",
	year: 2011,
	month: 3,
	day: 7,
	version: 1.1,
	notes: "UserPatch 20110307-190525 has been released! This update expands the player database, allowing for 512 goals, 50 timers, 255 total sns (don't use them though, as they are reserved for patch settings), and a lot of unused space for who knows what lol. I also fixed a critical issue where the player database expansion wasn't being saved with the rest of the game data. Due to the required format changes, please do not mix save files between 1.0c and 1.1. Finally, I think I fixed the task-ungrouped issue with the recorded games. Basically, there are 3 conditionals that they placed over the spreading effect: first, if it's multiplayer, expand; second, if it's recording under certain circumstances, expand; and finally, if task-ungrouped is enabled, expand. I've now restricted it to only task-ungrouped-soldiers.</p><p>I haven't moved sn-legacy-building-system and sn-percent-building-cancellation to the new block of sns yet, so they remain as snIds 152 and 128, for now. I'll move them to 243 and 244 after I create the boar sn.",
	itemsAffected: [snTaskUngroupedSoldiers],
	scriptingType: "ai"
}, {	
	number: "20110306-232607",
	year: 2011,
	month: 3,
	day: 6,
	version: 1.1,
	notes: "UserPatch 20110306-232607 has been released! This update fixes the mp save/restore issue, I hope. As for the task-ungrouped-soldiers issue, I am absolutely certain that it was done by design. They put a conditional on the spreading operation that tells it to ignore the sn and spread anyway if the multiplayer game flag has been set. In other words, the sn wasn't the true problem; it was the code that they added to deliberately ignore the sn that was the problem.",
	itemsAffected: [snTaskUngroupedSoldiers],
	scriptingType: "ai"
}, {	
	number: "20110305-161034",
	year: 2011,
	month: 3,
	day: 5,
	version: 1.1,
	notes: "UserPatch 20110305-161034 has been released! This update contains the new dataId values for up-read-fact-data shown above, the new modulo math operator %, and a replacement for up-chat-goal called up-chat-data-to-self, which allows for values, goals, and sns to be printed out. I'll add up-chat-data-to-player as soon as I can. By the way, if you want a % sign in your formatted text, make sure you double it, or there might be a problem. Oh, and for LightTree, I've now added the ability to start multiplayer games against only AI players.</p><p>Here's an example of printing sn-food-gatherer-percentage: (up-chat-data-to-self \"Food Gathering: %d%%.\" s:< sn-food-gatherer-percentage)",
	itemsAffected: [cUpGetFact, cUpGetPlayerFact, cUpChatDataToSelf],
	scriptingType: "ai"
}, {	
	number: "20110304-162240",
	year: 2011,
	month: 3,
	day: 4,
	version: 1.1,
	notes: "UserPatch 20110304-162240 has been released! This update enhances up-read-fact-data by enabling unit-type-count and building-type-count as dataIds. Due to some refactoring and other reorganization, the dataId defconsts have changed. Here are the new values:</p><p>(defconst food-amount 0)<br>(defconst wood-amount 1)<br>(defconst stone-amount 2)<br>(defconst gold-amount 3)<br>(defconst escrow-amount 4)<br>(defconst current-score 5)<br>(defconst unit-count 6)<br>(defconst unit-type-count 7)<br>(defconst building-count 8)<br>(defconst building-type-count 9)<br>(defconst population 10)<br>(defconst military-population 11)<br>(defconst civilian-population 12)",
	itemsAffected: [cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20110303-180522",
	year: 2011,
	month: 3,
	day: 3,
	version: 1.1,
	notes: "UserPatch 20110303-180522 has been released! This update contains... all of the math and compare functions and all of that other stuff lol. If you use up-chat-goal, make 100% sure that your format text has a %d inside it. If it's not there, the game will probably crash. So: (up-chat-goal \"This is my goal: %d!!!\" gl-some-goal).</p><p>Editor's note: here are the changes scripter64 referenced:</p><p>I have now added a fact transfer action: up-read-fact-data. It currently allows for the reading of food-amount, wood-amount, stone-amount, and gold-amount for the player exclusively, and current-score, population, military-population, civilian-population, unit-count, and building-count for any player, including the special this-* playerIds.</p><p>Here's the format for the command:(up-read-fact-data playerId dataId parameter goalId)</p><p>I've now expanded the executable file size in order to make more room for updates in the future. I was beginning to run out of room lol.</p><p>In order to implement your requests, I've enhanced the available operators for extensibility.</p><p>Before operator extensions:<br>(up-compare-goal with-value gl-some-data > 5)<br>(up-compare-goal with-goal gl-some-data > gl-other-stuff)</p><p>After operator extensions:<br>(up-compare-goal gl-some-data > 5)<br>(up-compare-goal gl-some-data gl:> gl-other-stuff)<br>(up-compare-goal gl-some-data sn:> sn-food-gatherer-percentage)</p><p>I think it allows for much cleaner syntax and makes it easier to read. I'm working toward a way to get your scenarios to work. More to come.",
	itemsAffected: [cUpChatDataToSelf, pMathOp, pCompareOp, cUpGetFact, cUpGetPlayerFact],
	scriptingType: "ai"
}, {	
	number: "20110302-015906",
	year: 2011,
	month: 3,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20110302-015906 has been released! I have goal math done lol. You can now assign, add, subtract, multiply, and divide goals by constant values and other goals. I hope this gets tested a lot :lol:</p>(defconst with-value 0)<br>(defconst with-goal 1)<br>(defconst gl-test-data-1 1)<br>(defconst gl-test-data-2 2)<br>(defconst equ 0)<br>(defconst add 1)<br>(defconst sub 2)<br>(defconst mul 3)<br>(defconst div 4)",
	itemsAffected: [pMathOp, cUpModifyGoal],
	scriptingType: "ai"
}, {	
	number: "20110302-001246",
	year: 2011,
	month: 3,
	day: 2,
	version: 1.1,
	notes: "UserPatch 20110302-001246 has been released! This update may finally make goals more useful than strategic numbers. With the new up-compare-goal fact, you can now compare goals with both constant values and other goals. Would anyone be interested in goal math? lol</p><p>(defconst with-value 0)<br>(defconst with-goal 1)<br>(defconst gl-test-data-1 1)<br>(defconst gl-test-data-2 50)</p><p>(defrule<br>(up-compare-goal with-value gl-test-data-1 > 0)<br>(up-compare-goal with-goal gl-test-data-1 <= gl-test-data-2)<br>=><br>(chat-to-all \"This could be interesting.\")<br>)",
	itemsAffected: [cUpCompareGoal],
	scriptingType: "ai"
}, {	
	number: "20110301-192754",
	year: 2011,
	month: 3,
	day: 1,
	version: 1.1,
	notes: "UserPatch 20110301-192754 has been released! This update contains the ability the detect deer and boar. You will need to defconst 4 as something like \"hunting\" and then use (dropsite-min-distance hunting operator value) to detect the distance of huntable animals. If it's 255, it means that none were detected (I tried to make it work like the other resources). This should allow for very precise detection of when hunting is possible, and at what range, so AIs will be able to commit a proper number of villagers to the task, eliminating the passive, guessing approach.</p><p>I'll just say right now that maneuvering around all of their code in order to calculate the distance for deer, boar, and javelina, and then store that information in the new player database storage area was exhausting. I hope I won't have to do that kind of thing again any time soon. :lol: Please test this if you have time.",
	itemsAffected: [cDropsiteMinDistance],
	scriptingType: "ai"
}, {	
	number: "20110228-135521",
	year: 2011,
	month: 2,
	day: 28,
	version: 1.1,
	notes: "UserPatch 20110228-135521 has been released! This update includes the expanded player database fix, which now allows for a total of 60 rules and 20 timers. I will add the dropsite-min-distance extension as soon as possible.",
	itemsAffected: [pTimerId],
	scriptingType: "ai"
}, {	
	number: "20110227-150555",
	year: 2011,
	month: 2,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110227-150555 has been released! This update resolves the wolf issue with the previous version. The issue was related to the fact that boars and wolves are classified under the same category: dangerous animals. The previous fix that allowed boars to be considered as resources indirectly allowed wolves to be, as well; you saw the result lol. This new fix takes that issue into consideration and should be a proper solution. Thanks for testing it, fenris! As you said, if you didn't notice the problem when you did, it may have gone unfixed forever",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110227-115223",
	year: 2011,
	month: 2,
	day: 27,
	version: 1.1,
	notes: "I just uploaded UserPatch 20110227-115223, but it has no new features relative to 20110227-092016. I simply renamed a few things and updated the Readme.txt. The op is essentially the Readme now, with the new information.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110227-092016",
	year: 2011,
	month: 2,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110227-092016 has been released! This update enables boar hunting. That is all. I know; I'm sorry. Boars, it's no longer safe for you",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110227-054241",
	year: 2011,
	month: 2,
	day: 27,
	version: 1.1,
	notes: "UserPatch 20110227-054241 has been released for epic win. Now, players can easily use AIs in multiplayer. Only the host needs to have the AIs installed. SetupMulti is now obsolete; I love technology.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110226-141252",
	year: 2011,
	month: 2,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20110226-141252 has been released! This update finally resolves the issue with sn-task-ungrouped-soldiers in multiplayer games. Now, the default for this sn is off, or 0. In multiplayer games, military units now respond as they should to changes to this sn by spreading apart when it's set to 1 and standing still when it's set to 0.</p><p>:dance :dance :dance :dance :dance :dance :dance :dance :dance :dance :dance<br>I'm done with all of the critical bugs!",
	itemsAffected: [snTaskUngroupedSoldiers],
	scriptingType: "ai"
}, {	
	number: "20110226-094144",
	year: 2011,
	month: 2,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20110226-094144 has been released! This update contains the fix for trade carts, so they should now travel across shallows to other markets (this one is for you, LightTree; welcome to the forum!). I thought I was never going to get that one done lol. The last of the critical bugs is sn-task-ungrouped-soldiers in multiplayer, so I'll try to fix that soon. Then, maybe I'll look into the boars.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110226-030359",
	year: 2011,
	month: 2,
	day: 26,
	version: 1.1,
	notes: "UserPatch 20110226-030359 has been released! This update enables the feature selection capability of SetupAoC, so that optional features can be developed and thrown in, but kept separate from the core, like the new additional full map print options (1:1 and 1:2) and AI logging to aoeai.txt with the \"log\" and \"log-trace\" commands. The log is shared, by the way, so don't use the log commands with more than one AI per game or it will become hard to read.",
	itemsAffected: [cLog, cLogTrace],
	scriptingType: "ai"
}, {	
	number: "20110224-222526",
	year: 2011,
	month: 2,
	day: 24,
	version: 1.1,
	notes: "UserPatch 20110224-222526 has been released! This update contains the shared string table fix (increased to 5000) and a proper solution for TLS. Now, villagers respond as usual to all threats, except they no longer have any desire to rush towers. Please test it if you have time! Ok, back to the trade carts for me",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110224-001350",
	year: 2011,
	month: 2,
	day: 24,
	version: 1.1,
	notes: "I decided to upload UserPatch 20110224-001350 now, with the [sn-attack-winning-player-factor] fix, as the trade bug might take a while. Waiting for a simultaneous release isn't a good reason to leave a crashing bug in the game lol. I also cleaned up the installer to avoid flooding pointless information to the user.",
	itemsAffected: [snAttackWinningPlayerFactor],
	scriptingType: "ai"
}, {	
	number: "20110223-224730",
	year: 2011,
	month: 2,
	day: 23,
	version: 1.1,
	notes: "UserPatch 20110223-224730 has been released! This update refines the rebuilding fix a little and should eliminate TLS entirely for all AIs, I hope. There's no need to opt-in to this fix. The fish trap sounds like a trap!",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110222-200938",
	year: 2011,
	month: 2,
	day: 22,
	version: 1.1,
	notes: "UserPatch 20110222-200938 has been released! This one restores the rebuilding fix, meaning AIs that opt-in to the new building system will no longer automatically rebuild cancelled buildings. I had to work around the fact that the building placement system uses cancellation as a way to search for a place to put the foundation lol. I hope it's stable this time. As for ...the list, it's not something I can post in a nice format with each item on a single line. Some of the items are simply copies of your posts, so this thread IS the list.</p><p>If it's on this thread, it's on the list. Next: TLS. This one could take a while.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110222-002905",
	year: 2011,
	month: 2,
	day: 22,
	version: 1.1,
	notes: "Here is an interim release, 20110222-002905, that I believe is bug free after watching some test games. The prior bug was related to the fact that the \"rebuilding\" code is used for building placement, at times, as well. I'll need to find a workaround for that. Cancellation configuration still works; it just auto-rebuilds in this release.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110221-230434",
	year: 2011,
	month: 2,
	day: 21,
	version: 1.1,
	notes: "There might be a small bug if the AI doesn't opt-in to the new building system (snId:152) with that release. I'll fix it and hopefully update it before you get it!</p><p>Edit: Fixed with UserPatch 20110221-230434! The bug would have occurred if an AI didn't opt-in to the new building system. They wouldn't auto-rebuild cancelled buildings, so those buildings would have been lost to them afterwards. For that reason, only AIs that opt-in will benefit from the changes; those that don't should behave as they do now.</p><p>Edit: Hmm, there might still be a bug. I'll get back to you.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110221-220144",
	year: 2011,
	month: 2,
	day: 21,
	version: 1.1,
	notes: "UserPatch 20110221-220144 has been released! This update finally resolves all critical building bugs, I hope. Building cancellation can now be controlled by snId:128 (defconst it as sn-percent-building-cancel or something). By default, it is set to 100, meaning the building will always be cancelled. 25 means it will cancel if the building is 25% done or less, etc. 0 means never cancel. It can be changed dynamically, at any time. Cancelled buildings will not be rebuilt automatically in a loop, as they are now. AIs must request construction with their rules, as usual. ",
	itemsAffected: [snPercentBuildingCancellation],
	scriptingType: "ai"
}, {	
	number: "20110220-154845",
	year: 2011,
	month: 2,
	day: 20,
	version: 1.1,
	notes: "UserPatch 20110220-154845 has been released! This update contains the modified version identifier (1.1) and MuRRay's \"up-research-in-progress\" fact. It complements up-pending-objects, and was easier than finishing the cancellation fix, so I did it quickly lol. The demo AI was updated to show how it works. Now, back to cancellation :lol:</p><p>Edit: found unit damage code and building damage code. Discovered that buildings are cancelled, not by damaging the builder, but by simply attempting to damage the builder by targeting it. Cancellation occurs at the moment of attack, however, and not the moment of targeting. Still working on it.",
	itemsAffected: [cUpResearchStatus],
	scriptingType: "ai"
}, {	
	number: "20110219-061934",
	year: 2011,
	month: 2,
	day: 19,
	version: 1.1,
	notes: "UserPatch 20110219-061934 has been released. This enhancement update renames \"up-buildings-under-construction\" to \"up-pending-objects.\" The reason for this change is that it can now count both buildings under construction and units being trained. The included demo AI demonstrates this by tracking villagers as they are trained. Another use for this feature would be to regulate military training for when you have, say, 2 barracks in feudal, but don't want to flood units from both unless attacked. The update app also provides more detail as to the features being installed and the patches they contain. Right now, there's only the core update feature, but maybe some stuff can be optional later on.</p><p>Still working on the cancellation bug. More to come",
	itemsAffected: [cUpPendingObjects],
	scriptingType: "ai"
}, {	
	number: "20110218-211338",
	year: 2011,
	month: 2,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20110218-211338 has been released. This update is intended to make the patch more acceptable, from a legal perspective. It will now update any 1.0c/e installation by simply modifying age2_x1.exe if it is already decrypted, or else transparently decrypting it for the user and then patching it. If the user did not have a no-cd patch installed before this update, they will still need their CD after the update in order to play. I hope this helps to legitimize the update on sites like aokh, where it seems that they forbid discussion of the 1.0e update due to its no-cd aspect.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110218-173930",
	year: 2011,
	month: 2,
	day: 18,
	version: 1.1,
	notes: "UserPatch 20110218-173930 has been released! With this release, I eliminated the prepatched download, as I don't want to get this site into any trouble. I also automated the release process to create a nice update package, readme, etc. for easy upload. The primary change in this release is enabling backward compatibility with unpatched games, so that an AI can work under both circumstances. The included demo AI demonstrates how to do this using (load-random + \"file-name\"). This command is ignored by the unpatched version (taking advantage of an oversight on their part, regarding the \"+\" lol) and will always be loaded by the patched version, which allows for bypassing the error-checking routines of the AI parser, so that the unpatched version never has to encounter the new facts, etc.",
	itemsAffected: [],
	scriptingType: "ai"
}, {	
	number: "20110217-230300",
	year: 2011,
	month: 2,
	day: 17,
	version: 1.1,
	notes: "New Updater App + Demo AI: http://www.sendspace.com/file/fpus86<br>Patches decrypted age2_x1.exe v1.0c or v1.0e: 2.57 MB (2,699,309 bytes). It will not patch age2_x1.icd, as that file is encrypted by SafeDisc. I may create another method of patching that works with SafeDisc later on.",
	itemsAffected: [],
	scriptingType: "none"
}, {	
	number: "20110217-163300",
	year: 2011,
	month: 2,
	day: 17,
	version: 1.1,
	notes: "Here it is! http://www.sendspace.com/file/ddeam3</p><p>Change Log:<br>- Update: interrupted building/farm screw fixed<br>- Update: limitless building is now opt-in with (set-strategic-number 152 0); defconst it as \"sn-limit-building\"<br>- Update: unintended overbuilding quirk fixed<bR>- Update: no limitation on simultaneous construction<br>- Update: new \"up-buildings-under-construction\" fact<br>- Update: rule limit increased to 2000<br>- Update: #load-if-defined UP-2000-RULES - feature flag for detecting the new limit (and the patch, for now)<br>- Update: #load-if-defined TURBO-RANDOM-MAP - no UP prefix, since this flag is for an existing feature<br>- Update: #load-if-defined ALL-TECHS-ENABLED - same as above</p><p>If you opt-in to the building fix, remember to use \"up-buildings-under-construction\" as shown on the previous page to ensure that house construction remains under control. No more pavilions needed! Oh, and don't toggle the sn-limit-building flag during the game. It should be considered a one-time setting.",
	itemsAffected: [snEnableNewBuildingSystem, cUpPendingObjects],
	scriptingType: "ai"
}, {	
	number: "20110216-184400",
	year: 2011,
	month: 2,
	day: 16,
	version: 1.1,
	notes: "Here's the new patch! http://www.sendspace.com/file/rp68rt</p><p>Change Log:<br>- Update: no limitation on simultaneous construction<br>- Update: new \"up-buildings-under-construction\" fact<br>- Update: rule limit increased to 2000<br>- Update: #load-if-defined UP-2000-RULES - feature flag for detecting the new limit (and the patch, for now)<br>- Update: #load-if-defined TURBO-RANDOM-MAP - no UP prefix, since this flag is for an existing feature<br>- Update: #load-if-defined ALL-TECHS-ENABLED - same as above</p><p>Before testing any AIs with this new version, at least modify their housing rules to add:<br>up-buildings-under-construction house == 0)</p><p>There's a minor issue when buildings can't be placed immediately, but I have a fix in mind. It doesn't cause any kind of failure, just unintentional overbuilding. I might need to create a way to allow each AI to opt-in to the new limitless building. Slowly moving toward the sn code.",
	itemsAffected: [cUpPendingObjects],
	scriptingType: "ai"
}, {	
	number: "20110215-234200",
	year: 2011,
	month: 2,
	day: 15,
	version: 1.1,
	notes: "If anyone would like to try the following fixes, you can download this patched executable.</p><p>1. Rule limit increased to 2000.<br>2. #load-if-defined UP-2000-RULES - new feature flag for detecting the rule limit increase<br>3. #load-if-defined TURBO-RANDOM-MAP - no UP prefix, since this new flag represents an existing feature<br>4. #load-if-defined ALL-TECHS-ENABLED - same as above",
	itemsAffected: [],
	scriptingType: "ai"
}];	