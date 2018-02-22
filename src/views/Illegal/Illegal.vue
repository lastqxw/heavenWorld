<style lang="less" scoped>
    @import "../search/search.less";
</style>
<template>
    <div id="app">
        <h1>违规管理</h1> 
        <div class="add_hot">
            <h3>关键词搜索</h3>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="请输入关键词">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')">搜索</Button>
                </FormItem>
            </Form>
        </div>
        <div class="hot">
            <h3>违规/举报列表</h3>
            <Table border :columns="columns7" :data="data6"></Table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search_index',
    data (){
        return{
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
                    title: '类型',
                     key: 'name'
                },
                {
                    title: '举报内容',
                     key: 'content'
                },
                {
                    title: '举报描述',
                     key: 'describe'
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
                            }, '详情'),
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
                            }, '忽略'),
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
                            }, '驳回'),
                             h('Button', {
                                props: {
                                    type: 'success',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '同意')
                        ]);
                    }
                }
            ],
            data6: [
                {
                    id: '1',
                    name: "资讯",
                    content:"12313123213213213213213213213213123",
                    describe:"不明所以，看不懂"
                },
                 {
                    id: '2',
                    name: "视频",
                     content:"12313123213213213213213213213213123",
                    describe:"不明所以，看不懂"
                },
                {
                    id: '3',
                    name: "话题帖子",
                    content:"12313123213213213213213213213213123",
                    describe:"不明所以，看不懂"
                },
                {
                    id: '4',
                    name: "讲堂",
                     content:"12313123213213213213213213213213123",
                    describe:"不明所以，看不懂"
                }, {
                    id: '5',
                    name: "讲堂",
                    content:"12313123213213213213213213213213123",
                    describe:"不明所以，看不懂"
                }
            ]
        }
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: '详细信息',
                content: `序号：${this.data6[index].id}<br>类型：${this.data6[index].name}<br>举报内容：${this.data6[index].content}<br>举报描述：${this.data6[index].describe}<br>`
            })
        },
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
