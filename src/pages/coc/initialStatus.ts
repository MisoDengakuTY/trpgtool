import {CoCCharacterType} from "./../../dbtype/cocCharacter";

const initialState : CoCCharacterType = {
        "_id" : undefined,
        "name": undefined,
        "san": undefined,
        "statuses":[
            {   
                "statusId" : 0,
                "statusName": "STR",
                "statusPoint": undefined,
                "otherFluctuation": undefined,
                "temporaryFluctuation":undefined,
                "max" : 18,
                "min" : 2
            },{
                "statusId" : 1,
                "statusName": "CON",
                "statusPoint": undefined,
                "otherFluctuation": undefined,
                "temporaryFluctuation":undefined,
                "max" : 18,
                "min" : 2
            },{
                "statusId" : 2,
                "statusName": "POW",
                "statusPoint": undefined,
                "otherFluctuation": undefined,
                "temporaryFluctuation": undefined,
                "max" : 18,
                "min" : 2
            },{
                "statusId" : 3,
                "statusName": "DEX",
                "statusPoint": undefined,
                "otherFluctuation": undefined,
                "temporaryFluctuation": undefined,
                "max" : 18,
                "min" : 2
            },{
                "statusId" : 4,
                "statusName": "APP",
                "statusPoint": undefined,
                "otherFluctuation": undefined,
                "temporaryFluctuation": undefined,
                "max" : 18,
                "min" : 2
            },{
                "statusId" : 5,
                "statusName": "SIZE",
                "statusPoint": undefined,
                "otherFluctuation": undefined,
                "temporaryFluctuation": undefined,
                "max" : 18,
                "min" : 2
            },{
                "statusId" : 6,
                "statusName": "INT",
                "statusPoint": undefined,
                "otherFluctuation": undefined,
                "temporaryFluctuation": undefined,
                "max" : 18,
                "min" : 8
            },{
                "statusId" : 7,
                "statusName": "EDU",
                "statusPoint": undefined,
                "otherFluctuation": undefined,
                "temporaryFluctuation": undefined,
                "max" : 21,
                "min" : 6
            }
        ],
        "skills":[
            {
                "skillId" : 0,
                "skillName": "回避",
                "initialPoint" : 0,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 1,
                "skillName": "キック",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 2,
                "skillName": "組付き",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 3,
                "skillName": "こぶし(パンチ)",
                "initialPoint" : 50,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 4,
                "skillName": "頭突き",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 5,
                "skillName": "投擲",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 6,
                "skillName": "マーシャルアーツ",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 7,
                "skillName": "拳銃",
                "initialPoint" : 20,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 8,
                "skillName": "サブマシンガン",
                "initialPoint" : 15,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 9,
                "skillName": "ショットガン",
                "initialPoint" : 30,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 10,
                "skillName": "マシンガン",
                "initialPoint" : 15,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 11,
                "skillName": "ライフル",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 12,
                "skillName": "応急手当",
                "initialPoint" : 30,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 13,
                "skillName": "鍵開け",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 14,
                "skillName": "隠す",
                "initialPoint" : 15,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 15,
                "skillName": "隠れる",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 16,
                "skillName": "聞き耳",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 17,
                "skillName": "忍び歩き",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 18,
                "skillName": "写真術",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 19,
                "skillName": "精神分析",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 20,
                "skillName": "追跡",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 21,
                "skillName": "登攀",
                "initialPoint" : 40,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 22,
                "skillName": "図書館",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 23,
                "skillName": "目星",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 24,
                "skillName": "運転",
                "initialPoint" : 20,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 25,
                "skillName": "機械修理",
                "initialPoint" : 20,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 26,
                "skillName": "重機械操作",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 27,
                "skillName": "乗馬",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 28,
                "skillName": "水泳",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 29,
                "skillName": "製作",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 30,
                "skillName": "操縦",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 31,
                "skillName": "跳躍",
                "initialPoint" : 25,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 32,
                "skillName": "電気修理",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 33,
                "skillName": "ナビゲート",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 34,
                "skillName": "変装",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 35,
                "skillName": "言いくるめ",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 36,
                "skillName": "信用",
                "initialPoint" : 15,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 37,
                "skillName": "説得",
                "initialPoint" : 15,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 38,
                "skillName": "値切り",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 39,
                "skillName": "母国語",
                "initialPoint" : 20,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 40,
                "skillName": "医学",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 41,
                "skillName": "オカルト",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 42,
                "skillName": "化学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 43,
                "skillName": "クトゥルフ神話",
                "initialPoint" : 0,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 44,
                "skillName": "芸術",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 45,
                "skillName": "経理",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 46,
                "skillName": "考古学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 47,
                "skillName": "コンピュータ",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 48,
                "skillName": "心理学",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 49,
                "skillName": "人類学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 50,
                "skillName": "生物学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 51,
                "skillName": "地質学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 52,
                "skillName": "電子工学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 53,
                "skillName": "天文学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 54,
                "skillName": "博物学",
                "initialPoint" : 10,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 55,
                "skillName": "物理学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 56,
                "skillName": "法律",
                "initialPoint" : 5,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 57,
                "skillName": "薬学",
                "initialPoint" : 1,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },{
                "skillId" : 58,
                "skillName": "歴史",
                "initialPoint" : 20,
                "jobPoint": undefined,
                "interestPoint": undefined,
                "growthPoint": undefined,
                "other": undefined
            },
        ]
    }

export default initialState;