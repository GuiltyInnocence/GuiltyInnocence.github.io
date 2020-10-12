schemes['physics'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['物理', '玄学', '数学'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['快中子反应堆', '热中子反应堆', '对撞机', '引力波探测器', '帕克太阳探测器'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['马克斯·普朗克', '物理学世界的图像离感知世界的距离正在日益增加，这无非是意味着我们逐渐接近真实世界。'],
        ['爱因斯坦', '真正使我感兴趣的是，上帝创造世界时是否有任何选择的余地。'],
        ['海森堡', '表象的永恒变化是直接呈现的，问题是怎样解释它。'],
        ['伊利亚·普里戈金', '人类是一种高度发达的耗散结构。'],
        ['克劳修斯', '所有可逆循环的克劳修斯积分值都等于零，所有不可逆循环的克劳修斯积分值都小于零。'],
        ['维敦', '弦就好比是应该出现在二十一世纪物理学的一鸿半爪，偶然掉落在二十世纪一般。'],
        ['麦克斯韦', '电和磁的实验中最明显的现象是，处于彼此距离相当远的物体之间的相互作用。因此，把这些现象化为科学的第一步就是确定物体之间作用力的大小和方向。'],
        ['泡利', '在费米子组成的系统中，不能有两个或两个以上的粒子处于完全相同的状态。'],
        ['W.能斯特', '凝聚系的熵在可逆等温过程中的改变随绝对温度趋于零而趋于零。'],
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['构造', '直觉', '逻辑', '分析', '计算'],
    //至少3个有关第一个学科的性质
    prop: ['量子', '非连续', '离散'],
    //至少6个有关第一个学科的概念
    conc: ['角动量守恒定律', '理想气体状态方程', '态叠加原理', '相对性原理', '质心运动定律', '测不准原理', '最小作用量原理', '安培环路定理', '茹科夫斯基定理'/*就是飞机那个*/],
    init: function (){
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}