<style lang="less" scoped>
    @import "./information.less";
</style>
<template>
    <div id="app">
        <h1>资讯管理</h1> 
        <div class="add_hot">
            <h3>查询内容</h3>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                <FormItem prop="user" label="关键词">
                    <Input type="text" v-model="formInline.user" placeholder="请输入">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem label="分类">
                    <Select v-model="formInline.select">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="所属板块">
                    <Select v-model="formInline.select1">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="">
                    <Button type="primary" @click="handleSubmit('formInline')">查找</Button>
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
                select: '',
                select1: '',
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
                    title: '发布人',
                     key: 'name'
                },
                 {
                    title: '内容创建时间',
                     key: 'time'
                },
                 {
                    title: '分类',
                     key: 'lei'
                },
                 {
                    title: '所属模板',
                     key: 'muban'
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
                                    type: 'info',
                                    size: 'small'
                                },
                                style:{
                                    marginRight:"5px"
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '详情'),
                            h('Button', {
                                props: {
                                    type: 'success',
                                    size: 'small'
                                },
                                style:{
                                    marginRight:"5px"
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '修改'),
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
                    name: "张三",
                    time:"2017.7.1  10:47:32",
                    lei:"全景",
                    muban:"寺庙"
                },
                 {
                    id: '2',
                    name: "admin",
                    time:"2017.7.1  10:47:32",
                    lei:"全景",
                    muban:"景区"
                },
               {
                    id: '3',
                    name: "王五",
                    time:"2017.7.1  10:47:32",
                    lei:"资讯",
                    muban:"话题"
                },
                {
                    id: '4',
                    name: "刘六",
                    time:"2017.7.1  10:47:32",
                    lei:"资讯",
                    muban:"音乐"
                },
                 {
                    id: '5',
                    name: "赵七",
                    time:"2017.7.1  10:47:32",
                    lei:"资讯",
                    muban:"视频"
                }
            ]
        }
    },
    methods: {
         show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `序号：${this.data6[index].id}<br>发布人：${this.data6[index].name}<br>内容创建时间：${this.data6[index].time}<br>分类：${this.data6[index].lei}<br>所属模板：${this.data6[index].muban}<br>`
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
