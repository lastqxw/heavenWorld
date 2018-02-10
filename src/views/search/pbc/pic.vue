<style lang="less" scoped>
    @import "../search.less";
</style>
<template>
    <div id="app">
        <h1>搜索管理</h1> 
        <div class="add_hot">
            <h3>添加搜索屏蔽词</h3>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="请输入需要添加的屏蔽词" :style="{ width: width+'px', marginLeft: marginLeft + 'px' }">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')">添加</Button>
                </FormItem>
            </Form>
        </div>
        <div class="hot">
            <h3>搜索关键词列表</h3>
            <Table border :columns="columns7" :data="data6"></Table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search_index',
    data (){
        return{
            width:400,
            marginLeft:30,
            formInline: {
                user: '',
            },
            ruleInline: {
                user: [
                    { required: true, message: '请输入关键词', trigger: 'blur' }
                ],
            },
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
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
            data6: [
                {
                    id: '1',
                    name: "寺庙720000"
                },
                 {
                    id: '2',
                    name: "佛法传播之路"
                },
                {
                    id: '3',
                    name: "邹城新闻"
                },
                {
                    id: '4',
                    name: "烧香"
                }, {
                    id: '5',
                    name: "拜佛"
                }
            ]
        }
    },
    methods: {
        remove (index) {
            this.data6.splice(index, 1);
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }

    }
};
</script>
