<style lang="less" scoped>
    @import "../information/information.less";
</style>
<template>
    <div id="app">
        <h1>资讯管理</h1> 
        <div class="add_hot">
            <h3>查询账号</h3>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                <FormItem prop="user" label="账号名称">
                    <Input type="text" v-model="formInline.user" placeholder="请输入">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem label="账号状态">
                    <Select v-model="formInline.select">
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
                    title: '昵称',
                     key: 'name'
                },
                 {
                    title: '账号',
                     key: 'user'
                },
                 {
                    title: '创建时间',
                     key: 'time'
                },
                 {
                    title: '状态',
                     key: 'lei'
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
                            }, '查看'),
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
                            }, '管理'),
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
                    user:"1234545",
                    time:"2017.7.1  10:47:32",
                    lei:"正常",
                },
                  {
                    id: '2',
                    name: "李四",
                    user:"1234545",
                    time:"2017.7.1  10:47:32",
                    lei:"正常",
                },
               {
                    id: '3',
                    name: "王五",
                    user:"1234545",
                    time:"2017.7.1  10:47:32",
                    lei:"受限",
               }
            ]
        }
    },
    methods: {
         show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `序号：${this.data6[index].id}<br>昵称：${this.data6[index].name}<br>账号：${this.data6[index].user}<br>创建时间：${this.data6[index].time}<br>状态：${this.data6[index].lei}<br>`
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
