
// 1回のダイスロールの方法と結果を示す型
export default class diceLogDB {
    public readonly id: number;
    public readonly count: number; // ダイスの振り回数
    public readonly dicesize: number; // 何面ダイスであるか（例: 6であれば6面ダイスを降る）
    public readonly results: number[]; // 結果を出た順に格納する results[0]は1個目のダイスの結果
    public readonly rollAt: Date;
    /**
     * public constructor 
     */
    public constructor (id: number, count: number, dicesize: number, results: number[], rollAt: Date) {
        this.id = id;
        this.count = count;
        this.dicesize = dicesize;
        this.results = results;
        this.rollAt = rollAt;
    }

    public resultSum(): number {
        return this.results.reduce((s, x) => s + x, 0);
    }
}