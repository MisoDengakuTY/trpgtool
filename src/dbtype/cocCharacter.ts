export interface StatusType{
    "statusId" : number,
    "statusName" : string,
    "statusPoint" : number | undefined,
    "otherFluctuation": number | undefined,
    "temporaryFluctuation": number | undefined
    "max" : number,
    "min" : number
}

export interface SkillType{
    "skillId" : number,
    "skillName" : string,
    "initialPoint" : number,
    "jobPoint" : number | undefined,
    "interestPoint" : number | undefined,
    "growthPoint" :number | undefined,
    "other": number | undefined
}

export interface CoCCharacterType {
    "id" : string | undefined,
    "name" : string | undefined,
    "san" : number | undefined,
    "statuses" : StatusType[],
    "skills" : SkillType[],
}

export interface CoCCharactersType {
    "cocCharacters" : CoCCharacterType[]
}