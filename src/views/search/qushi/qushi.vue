<template>
    <div id="app">
        <h1>搜索统计</h1>
        <Table border :columns="columns7" :data="data6"></Table>
    </div>
</template>
<script>
export default {
   name:"qushi",
   data(){
       return{
           columns7: [
                {
                    title: '序号',
                    key: 'id',
                    render: (h, params) => {
                        return h('div', [
                            h('strong', params.row.id)
                        ]);
                    }
                },
                {
                    title: '内容',
                     key: 'name'
                },
                {
                    title: '7天内搜索量',
                     key: 'number'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 300,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看趋势'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '设为屏蔽词'),
                            h('Button', {
                                props: {
                                    type: 'info',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '设为关键词')
                        ]);
                    }
                }
            ],
            data6: [
                {
                    id: '1',
                    name: "寺庙720",
                    number:100
                },
                 {
                    id: '2',
                    name: "佛法传播之路",
                    number:80
                },
                {
                    id: '3',
                    name: "邹城新闻",
                    number:70
                },
                {
                    id: '4',
                    name: "烧香",
                    number:60
                }, {
                    id: '5',
                    name: "拜佛",
                    number:50
                }
            ]
       }
   },
   methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `序号：${this.data6[index].id}<br>内容：${this.data6[index].name}<br>7天内搜索量:${this.data6[index].number}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        },
    }
}
</script>
