<style lang="less" scoped>
    @import "./page2.less";
</style>

<template>
    <div id="page2">
        <h1>角色管理</h1>
        <div class="title">
            <Input v-model="value1" type="text">
                <span slot="prepend">角色名</span>
            </Input>
            <div class="button_group" style='margin-bottom:30px'>
                <Button type="primary" icon="search" @click="search()">查询</Button>
                <Button type="success" icon="refresh" @click="refresh()">重置</Button>
                <Button type="primary" icon="plus-round" @click="add()">添加</Button>
            </div>
        </div>
        <div class="line"></div>
        <Table border :columns="columns" :data="data1"></Table>
    </div>
</template>

<script>
export default {
    name: 'page2',
    data(){
        return{
            value1:"",
            columns: [
                    {
                        title: '角色名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '角色描述',
                        key: 'dis'
                    },
                    {
                        title: '添加时间',
                        key: 'add_time'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 400,
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
                                }, '删除'),
                                 h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                           console.log(this)
                                        }
                                    }
                                }, '查看权限'),
                                 h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                           
                                        }
                                    }
                                }, '关联人员')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        dis: 18,
                        add_time: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        dis: 24,
                        add_time: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        dis: 30,
                        add_time: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        dis: 26,
                        add_time: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        }
    };
</script>
 