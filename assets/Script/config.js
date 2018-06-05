
var config = {}

config.MyNode = null; //常驻节点

config.temppassword = "";

config.playGameId = 0; //断线
config.playGameMsg = "";

config.curRoomModelId = 0;//房间模式

//房间模式
config.ModelId = {normal : 0, contest : 3, lazarillo : 2}

config.pokerCardType = {
    spade : 4,//黑桃
    hearts : 3,//红桃
    redslice : 1,//红方
    blackberry : 2,//梅花
}

config.ghostCardType = {
    bigG : "bigG",//大王
    smallG : "smallG",//小王
}

//数组降序排列
config.arrayDown = function(val1,val2){
    return val2-val1;
}
//数组升序排列
config.arrayUp = function(val1,val2){
    return val1-val2;
}
//截取数组的一部分
config.arraySub = function(index,count,arr){
    var newarr = [];
    for(var i = index;i<count;i++){
        newarr.push(arr[i]);
    }
    return newarr;
}

config.arraySub2 = function(index,count,arr){
    var newarr = [];
    for(var i = index;i<count;i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
    return newarr;
}

config.arraySub3 = function(index,count,arr){
    var newarr = [];
    for(var i = index;i<count;i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
    return newarr;
}

config.seatPos = {
    center : {
        pokerScale : 1,//0.5
        disBetween : 77, //45
        positionY : 250
    },
    left : {
        pokerScale : 0.38,
        disBetween : 27,
        positionY : 860
    },
    right : {
        pokerScale : 0.38,
        disBetween : 27,
        positionY : 860
    },
    
}

config.opratType = {
    callLoad:1, //叫地主
    grabLoad:2, //抢地主
    mustOutCard:3,//自己必须出牌
}

//牌型编号
config.CardType = {
	Single : 1,                         //单张
	Pair : 2,                           //对子
	ThreeOfKind : 3,                    //三不带
	ThreeOfKindPlusOne : 4,             //三带一
	ThreeOfKindPlusPair : 5,            //三带二
	Straight : 6,                       //顺子
	StraightDouble : 7,					//双顺  33 44 55
	StraightThree : 8,					//三顺  333 444    飞机  [333 444 555 a b c/ aa bb cc]
	StraightThreePlusSingle : 9,		//三顺+散牌 飞机带翅膀  333 444 5 6 / +一对
	StraightThreePlusPair : 10,			//三顺+对   飞机带翅膀  333 444 66 77
	SoftBomb : 87,						//软炸弹
	Bomb : 88,							//炸弹
	LazarilloBomb : 89,					//纯癞子炸弹
	DoubleKing : 99,					//双王
	FourPlusOne : 11,					//四带1, 四只带两只单牌
	FourPlusTwo : 12,					//四带2, 四只带两对
}


config.GlobalRouter = {
    director : "http://ddzprotocal.51864.com/clientConfig/host.php", // host_inner
    statistics : "http://applog.51864.com/index.php",
    host : null,
    port : null,
    versionUrl : null,
    downloadUrl : null,
    filepath : null,
    resversion : null,//热更新版本号
    silenceVerUrl : null,//静默下载资源版本文件地址
    silenceFileUrl : null,//静默下载资源文件地址
    configtable : null,
}

config.GlobalRouterUpdate = function(json){
    config.GlobalRouter.host = json.data.host;
    config.GlobalRouter.port = json.data.port;
    config.GlobalRouter.versionUrl = json.data.update.versionUrl;
    config.GlobalRouter.downloadUrl = json.data.update.downloadUrl;
    config.GlobalRouter.resversion = json.data.update.resversion;
}

//房间配置
config.RoomConfig = {
    1:{name : "新手场", umengEvent : "novice_room" ,pot : 5, min : 1000, max : 80000, texture : "room_1.png", roomId : 1000, roomNameTexture : "p_novice_bar.png"},
    2:{name : "初级场", umengEvent : "primary_room" ,pot : 10, min : 2000, max : 200000, texture : "room_2.png", roomId : 1001, roomNameTexture : "p_primary_bar.png"},
    3:{name : "中级场", umengEvent : "intermediate_room" ,pot : 10, min : 2000, max : 200000, texture : "room_3.png", roomId : 1002, roomNameTexture : "p_intermediate_bar.png"},
    4:{name : "高级场", umengEvent : "senior_room" ,pot : 10, min : 2000, max : 200000, texture : "room_4.png", roomId : 1003, roomNameTexture : "p_senior_bar.png"},
    5:{name : "竞技场", umengEvent : "contest_room" ,pot : 10, min : 5000, max : 50000, texture : "room_JJC.png", roomId : 1004, roomNameTexture : "p_primary_arena_bar.png"},
    6:{name : "无限场", umengEvent : "advanced_room" ,pot : 50, min : 10000, max : 1000000, texture : "room_5.png", roomId : 1006, roomNameTexture : "p_advanced_bar.png"},

    7:{name : "新手场", umengEvent : "l_novice_room" ,pot : 50, min : 10000, max : 1000000, texture : "room_1.png", roomId : 1007, roomNameTexture : "p_novice_bar.png"},
    8:{name : "初级场", umengEvent : "l_primary_room" ,pot : 50, min : 10000, max : 1000000, texture : "room_2.png", roomId : 1008, roomNameTexture : "p_primary_bar.png"},
    9:{name : "中级场", umengEvent : "l_intermediate_room" ,pot : 50, min : 10000, max : 1000000, texture : "room_3.png", roomId : 1009, roomNameTexture : "p_intermediate_bar.png"},
    10:{name : "高级场", umengEvent : "l_senior_room" ,pot : 50, min : 10000, max : 1000000, texture : "room_4.png", roomId : 1010, roomNameTexture : "p_senior_bar.png"},
    11:{name : "无限场", umengEvent : "l_noRate_room" ,pot : 50, min : 10000, max : 1000000, texture : "room_5.png", roomId : 1011, roomNameTexture : "p_senior_bar.png"},
}

config.CardMapping = {
    ["00"] : "joker_black.png",
    ["01"] : "joker_red.png",        // A 2 3 4 5 6 7 8 9 10 J Q K 
  
    //黑桃
    ["41"] : "a_b_1.png",   
    ["42"] : "2_b_1.png",
    ["43"] : "3_b_1.png",
    ["44"] : "4_b_1.png",
    ["45"] : "5_b_1.png",
    ["46"] : "6_b_1.png",
    ["47"] : "7_b_1.png",
    ["48"] : "8_b_1.png",
    ["49"] : "9_b_1.png",
    ["4a"] : "10_b_1.png",
    ["4b"] : "j_b_1.png",
    ["4c"] : "q_b_1.png",
    ["4d"] : "k_b_1.png",  
  
    //红桃
    ["31"] : "a_r_1.png",   
    ["32"] : "2_r_1.png",
    ["33"] : "3_r_1.png",
    ["34"] : "4_r_1.png",
    ["35"] : "5_r_1.png",
    ["36"] : "6_r_1.png",
    ["37"] : "7_r_1.png",
    ["38"] : "8_r_1.png",
    ["39"] : "9_r_1.png",
    ["3a"] : "10_r_1.png",
    ["3b"] : "j_r_1.png",
    ["3c"] : "q_r_1.png",
    ["3d"] : "k_r_1.png",
  
    //梅花
    ["21"] : "a_b_1.png",   
    ["22"] : "2_b_1.png",
    ["23"] : "3_b_1.png",
    ["24"] : "4_b_1.png",
    ["25"] : "5_b_1.png",
    ["26"] : "6_b_1.png",
    ["27"] : "7_b_1.png",
    ["28"] : "8_b_1.png",
    ["29"] : "9_b_1.png",
    ["2a"] : "10_b_1.png",
    ["2b"] : "j_b_1.png",
    ["2c"] : "q_b_1.png",
    ["2d"] : "k_b_1.png",    
  
    //方块
    ["11"] : "a_r_1.png",   
    ["12"] : "2_r_1.png",
    ["13"] : "3_r_1.png",
    ["14"] : "4_r_1.png",
    ["15"] : "5_r_1.png",
    ["16"] : "6_r_1.png",
    ["17"] : "7_r_1.png",
    ["18"] : "8_r_1.png",
    ["19"] : "9_r_1.png",
    ["1a"] : "10_r_1.png",
    ["1b"] : "j_r_1.png",
    ["1c"] : "q_r_1.png",
    ["1d"] : "k_r_1.png",
  }


module.exports = config;
