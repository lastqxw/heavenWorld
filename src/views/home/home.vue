<style lang="less">
    @import "./home.less";
</style>
<template>
    
    <div class="home-main">
        <h1>系统总览</h1>
        <Row :gutter="16">
        <Col span="12">
            <Card>
                <p slot="title" class="title">{{date | formatDate}}</p>
                <p class="wec">欢迎回来<span>{{user}}</span></p>
                
            </Card>
        </Col>
        <Col span="6">
            <Card>
                <p slot="title" class="title">待审核讲堂</p>
                <p class="wec1"><span>11</span>个</p>
            </Card>
        </Col>
         <Col span="6">
            <Card>
                <p slot="title" class="title">待审核全景</p>
                <p class="wec1"><span>11</span>个</p>
            </Card>
        </Col>
    </Row>
    <h3 class="sub">运营数据报表</h3>
    <!-- echart 组件使用 -->
    <!-- 柱状图  最近一周阅读量趋势-->
    <!-- 饼状图  最近一周阅读量分类分布-->
    <!-- 折线图  最近一周搜索趋势-->
    <!-- 最新UGC  list -->
    <!-- 发布新资讯  button-->
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import {formatDate} from '../data/data.js';
export default {
    name: 'home',
    data () {
        return {
            date: new Date(),
            user: Cookies.get("user")
        };
    },
    filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh : mm');
        }
    },
};
</script>
<style>
    .title,.wec{
        font-size: 20px !important
    }
    .wec>span{
        color: #33CC99;
        font-weight: bold;        
        margin-left: 20px;
    }
    .wec1{
        text-align: center;
        font-size: 20px !important
    }
    .wec1>span{
        color: #33CC99;
        font-weight: bold;
        margin-right: 50px;
    }
    .sub{
        height: 50px;
        line-height: 50px
    }
</style>
