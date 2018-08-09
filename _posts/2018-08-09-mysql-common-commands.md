---
layout:     post
title:      "MySQL 常用命令"
subtitle:   "MySQL common commands"
date:       2018-08-09
author:     "Mr.厉害"
header-img: "img/in-post/make-the-cli-with-node/make-the-cli-with-node-bg.jpg"
header-mask: 0.3
catalog:    true
tags:
  - MySQL
---

### 一、基础命令

1. 启动服务
    1. 说明：以管理员身份运行cmd
    2. 格式：net start 服务名称
    3. 示例：net start MySQL57
2. 停止服务
    1. 说明：以管理员身份运行cmd
    2. 格式：net stop 服务名称
    3. 示例：net stop MySQL57
3. 连接数据
    1. 格式：mysql -u 用户名 -p
    2. 示例：mysql -u root -p
            输入安装时设置的密码
4. 退出登录（断开连接）
    1. quit或exit
5. 查看版本（连接后可以执行）
    1. 示例：select version();
6. 显示当前时间（连接后可以执行）
    1. 示例：select now();
7. 远程连接
    1. 格式：mysql -h ip地址 -u 用户名 -p
            输入远程MySQL密码

### 二、数据库操作

1. 创建数据库
    1. 格式：create database 数据库名 charset=utf8;
    2. 示例：create database mrlihai charset=utf8;
2. 删除数据库
    1. 格式：drop database 数据库名;
    2. 示例：drop database mrlihai;
3. 切换数据库
    1. 格式：use 数据库名;
    2. 示例：use mrlihai;
4. 查看当前选择的数据库
    1. select database();

### 三、表操作

1. 查看当前数据库中所有的表
    1. show tables;
2. 创建表
    1. 格式：create table 表名(列及类型);
    2. 说明：
        1. auto_increment 表示自增长
        2. primary key 表示主键
        3. not null 表示不为空
    3. 示例：create table student(id int auto_increment primary key, name varchar(20) not null, age int not null, gender bit default 1, address varchar(20), isDelete bit default 0);
3. 删除表
    1. 格式：drop table 表名;
    2. 示例：drop table student;
4. 查看表结构
    1. 格式：desc 表名
    2. 示例：desc student;
5. 查看建表语句
    1. 格式：show create table 表名;
    2. 示例：show create table student;
6. 重命名表名
    1. 格式：rename table 原表名 to 新表明;
    2. 示例：rename table car to newcar;
7. 修改表
    1. 格式：alter table 表名 add|change|drop 列名 类型;
    2. 示例：alter table newcar add isDelete bit default 0;

### 四、数据操作

1. 增
    1. 全列插入
        1. 格式：insert into 表名 values(...);
        2. 说明：主键列是自动增长，但是在全列插入时需要占位，通常使用0，插入成功以后以实际数据为准
        3. 示例：insert into student values(0, "tom", 19, 1, "北京", 0);
    2. 缺省插入
        1. 格式：insert into 表名(列1, 列2, ...) values(值1, 值2, ...);
        2. 示例：insert into student(name, age, address) values("李雷", 19, "上海");
    3. 同时插入多条数据
        1. 格式：insert into 表名 values(...), (...), ...
        2. 示例：insert into student values(0, "韩梅梅", 18, 0, "北京", 0), (0, "pony", 22, 1, "西安", 0), (0, "lili", 20, 0, "成都", 0);
2. 删
    1. 格式：delete from 表名 where 条件;
    2. 示例：delete from student where id=4;
    3. 注意：没有条件是全部删除，慎用。
3. 改
    1. 格式：update 表名 set 列1=值1, 列2=值2, ... where 条件;
    2. 示例：update student set age=16 where id=7;
    3. 注意：没有条件是全部列都修改，慎用。
4. 查
    1. 说明：查询表中的全部数据
    2. 格式：select * from 表名;
    3. 示例：select * from student;

### 五、查

1. 基本语法
    1. 格式：select * from 表名
    2. 说明：
        1. from 关键字后面是表名，表示数据来源于这张表
        2. select 后面写表中的列名，如果是*表示在结果集中显示表中的所有列
        3. 在select后面的列名部分，可以使用as为列名起别名，这个别名显示在结果集中
        4. 如果要查询多个列，之间使用逗号分隔
    3. 示例
        1. select * from student;
        2. select name, age from student;
        3. select name as n, age from student;
2. 消除重复行
    在select后面列前面使用distinct可以消除重复的行
    1. 示例：select gender from student;
3. 条件查询
    1. 语法
        1. select * from 表名 where 条件;
    2. 比较运算符
        1. 等于     =
        2. 大于     >
        3. 小于     <
        4. 大于等于 >=
        5. 小于等于 <=
        6. 不等于   != 或 <>
            1. 需求：查询id值大于8的所有数据
            2. 示例：select * from student where id>8;
    3. 逻辑运算符
        1. and      并且
        2. or       或者
        3. not      非
            1. 需求：查询id值大于7的女同学
            2. 示例：select * from student where id>7 and gender=0;
    4. 模糊查询
        insert into student values(0, "习近平", 65, 1, "北京", 0);
        insert into student values(0, "习大", 66, 1, "北京", 0);
        1. 关键词：like
        2. 说明：%表示任意多个任意字符
        3. _表示一个任意字符
        4. 需求：查询姓习的同学
        5. 示例：
            1. select * from student where name like "习%";
            2. select * from student where name like "习__";
            3. select * from student where name like "习_";
    5. 范围查询
    6. 空判断
    7. 优先级
4. 聚合
5. 分组

### 六、关联