schemes['python'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['python', 'SI100B', 'CS100'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['pip与git'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['leeee', '语言的意义和作用是什么？'],
        ['扣扣群里', 'SI100B一年比一年糟糕'],
        ['codingVegetableChicken', 'Why the issue feature was disabled?'],
        ['leeee', '语言的作用被异化了，东亚人就要讲东亚话！'],
        ['[数据删除]', 'Sometimes Naive'],
        ['表情包上', '我明白了，我这就去办退学手续'],
        ['迎新小品', '不会吧不会吧不会真的有人军事理论不是两倍速静音的吧'],
        ['上科大', '立志 成才 爆肝 裕民'],
		['spinach','如何评价,上海科技大学 si100b 2020 fall,python programming part,programming assessment2的std出现和题目描述不一致的情况']
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['数学分析', '线性代数', 'Python Programming'],
    //至少3个有关第一个学科的性质
    prop: ['学术诚信', '内卷', 'GPA'],
    //至少6个有关第一个学科的概念
    conc: ['shanghaitech', '入门指北', 'piazza', 'gradescpoe', '爆零', 'gitlab', 'ddl'],
    init: function () {
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}
