<style lang="less">
    @import "../page1/page1.less";
</style>

<template>
    <div id="app">
        <h1>组织管理</h1> 
        <Row>
            <Col span='12'>
                <Tree :data="data5" :render="renderContent"></Tree>
            </Col>
            <Col span="12">
                <div class="right">
                    <div class="button_group" style='margin-bottom:30px'>
                        <Button type="primary" icon="plus-round" @click="add()">添加权限</Button>
                        <Button type="error" icon="trash-a" @click="remove()">删除权限</Button>
                        <Button type="primary" icon="edit" @click="updata()">修改权限</Button>
                    </div>
                    <form action="">
                        <Input v-model="value1" type="text">
                            <span slot="prepend">组织编码</span>
                        </Input>
                        <Input v-model="value2" type="text">
                            <span slot="prepend">组织名称</span>
                        </Input>
                        <Input v-model="value3" type="text">
                            <span slot="prepend">组织父ID</span>
                        </Input>
                    </form>
                </div>
            </Col>
        </Row>
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
 
