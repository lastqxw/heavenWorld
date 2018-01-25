<style lang="less" scoped>
    @import "./page1.less";
</style>

<template>
    <div id="app">
        <h1>权限设置</h1> 
        <Tree :data="data5" :render="renderContent"></Tree>
        <div class="right">
            <div class="button_group" style='margin-bottom:30px'>
                <Button type="primary" icon="plus-round" @click="add()">添加权限</Button>
                <Button type="error" icon="trash-a" @click="remove()">删除权限</Button>
                <Button type="primary" icon="edit" @click="updata()">修改权限</Button>
            </div>
            <form action="">
                <Input v-model="value1" type="text">
                    <span slot="prepend">权限编码</span>
                </Input>
                <Input v-model="value2" type="text">
                    <span slot="prepend">权限名称</span>
                </Input>
                <Input v-model="value3" type="text">
                    <span slot="prepend">权限URL</span>
                </Input>
                <Input v-model="value4" type="text">
                    <span slot="prepend">权限父ID</span>
                </Input>
                <Input v-model="value5" type="text">
                    <span slot="prepend">&nbsp;路&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;径&nbsp;</span>
                </Input>
                <Input v-model="value6" type="text">
                    <span slot="prepend">&nbsp;说&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;明&nbsp;</span>
                </Input>
                <Input v-model="value7" type="text">
                    <span slot="prepend">&nbsp;图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标&nbsp;</span>
                </Input>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page1',
    data () {
            return {
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                data5: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'child 1-1',
                                expand: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: false
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: false
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: false,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: false
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: false
                                    }
                                ]
                            }
                        ]
                    }
                ],
            }
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-folder-outline'
                            },
                            style: {
                                 marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                ],[
                    h('span', {
                        style: {
                            display: 'inline-block',
                            width: '100%'
                        }
                    }, [
                        h('span', [
                            h('Icon', {
                                props: {
                                    type: 'ios-paper-outline'
                                },
                                style: {
                                    marginRight: '8px'
                                }
                            }),
                            h('span', data.title)
                        ]),
                    ])
                ])
            },
        }
};
</script>
 
