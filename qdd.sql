SET NAMES UTF8;
DROP DATABASE IF EXISTS qdd;
CREATE DATABASE qdd CHARSET=UTF8;
USE qdd;
/**数据表**/
/**笔记本电脑**/
CREATE TABLE qdd_huawei(
  id INT PRIMARY KEY AUTO_INCREMENT,	 #商品的id
  inch INT,              #屏幕尺寸
  ram VARCHAR(128),         #内存
  rom VARCHAR(128),      #硬盘
  cpu VARCHAR(4),        #cpu
  title VARCHAR(64),        #标题
  price decimal(4.2),           #价格

  detail VARCHAR(32),          #详情
  unm VARCHAR(32),             #储存
  logo VARCHAR(32),         #品牌
  mp VARCHAR(128),     #主图
  sales VARCHAR(100)
);
/**用户信息**/
CREATE TABLE xz_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);
/**用户信息**/
INSERT INTO xz_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
INSERT INTO qdd_huawei VALUES
(1,1,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄轻巧，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_15.jpg','1'),
(2,2,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄轻巧，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_01.jpg','2'),
(3,3,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄轻巧，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_02.jpg','3'),
(4,4,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄轻巧，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_03.jpg','4'),
(5,5,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄轻巧，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_04.jpg','5'),
(6,6,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_05.jpg','5'),
(7,7,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄轻巧，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_06.jpg','5'),
(8,8,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_07.jpg','5'),
(9,9,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄轻巧，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_08.jpg','5'),
(10,10,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_09.jpg','5'),
(11,11,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_10.jpg','5'),
(12,12,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_11.jpg','5'),
(13,13,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄轻巧，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_12.jpg','5'),
(14,14,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_13.jpg','5'),
(15,15,'Apple MacBook Air 13.3英寸笔记本 ','5月焕新季，领券买新机！纤薄，长达12小时续航','HELL',' *48小时快速退款 *72小时发货',1444.99,'huawei Air','MacOS','8G','img/huawei_14.jpg','5');
