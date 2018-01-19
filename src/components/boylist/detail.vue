<template>
	<div class="app-detail" v-model="goods">
		<div class="detail-img" :style="{'background':'url('+goods.cover_image+') no-repeat center center'}"></div>
		<div class="detail-title">
			<p>{{goods.goods_title}}</p>
			<div class="detail-price">
				<span>￥</span>{{goods.price}}.00
				<em>{{goods.price_tag}}</em>
				<i>{{goods.country}}现时售价<span>￥{{goods.market_price}}.00</span></i>
				<strong>?</strong>
			</div>
			<div class="detail-shui">
				<i>税费:￥16.54 </i>
				<strong>?</strong>
			</div>
			<div class="detail-abso">
				<i class="fa fa-heart-o"></i>
				<div>{{goods.view_wishes}}</div>
			</div>
			<div class="detail-over">海购政策</div>
		</div>
		<div class="detail-fan">
			<span>返</span>
			<p>购买可获<i>69</i>达令币</p>
			<strong>?</strong>
		</div>
		<div class="detail-icon">
			<p><i></i>48小时发货</p>
			<p><i></i>55元包邮</p>
			<p><i></i>不支持7天退换</p>
			<p><i></i>不支持7天退换</p>
			<em class="fa fa-angle-right"></em>
		</div>
		<div class="detail-ta">
			<div class="ta-a">
				<div class="a-title">Ta 在晒（2）</div>
				<ul>
					<li>
						<div class="a-pic">
							<span></span>
							<div class="nickname">大涂涂哈哈</div>
							<div class="time">2017-03-01</div>
						</div>
						<div class="a-txt">
							<i></i>
							<div class="content-txt">JAYJUN COSMETICS rose mask红玫瑰水光面膜 水光玫瑰面膜
拆开的时候还惊奇了一下，它的面膜纸不是白色的，贴在脸上和肤色比较相近，我室友说刚刚拿出的时候比较像枯萎的玫瑰的颜色~
淡淡的玫瑰香味，很好闻噢，可以说是水光这几款中最好闻的面膜了
让人感觉就是清香
~
面膜纸超级软的~感觉比它的樱花那一款还是软，应该是面膜纸最软的一款了，就像snp的燕窝面膜那样软
所以相对的，我敷上脸用了好几分钟啊~太软了
不过真的还是挺舒服的
…
主要功效：优越的渗透力 ，将美白成分直达肌肤深层。淡化黑色素的同时，兼顾了优越的保湿力。美白效果的同时抗氧化、抗衰老舒缓、调理脆弱肌肤。帮助提升深层美白面膜中精华成分的活性，奢华美白保养、肌肤净白。改善色素沉着、色斑和肤色不均等现象，美白的同时密集补水
~
暂时只敷了一片，面膜纸很软很舒服
它的精华液不是很稀，而且像果冻的浆状，比较像日本面膜的精华液，但又比日本面膜的精华液多一点
多出来的精华液可以擦到脖子上~</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="ta-a">
				<div class="a-title">Ta 在说（1513）
            		<div class="rate">好评度 
            			<span class="precent">98%</span>
            		</div>
            		<i class="fa fa-angle-right pick"></i>
            	</div>
            	<ul>
            		<li>
            			<div class="a-pic">
            				<span class="avatar"></span>
            				<div class="nickname">安于心x</div>
            				<div class="stars">
            					<i></i>
            					<i></i>
            					<i></i>
            					<i></i>
            					<i></i>
            				</div>
            				<div class="time">2018-01-01</div>
            			</div>
            			<div class="content-txt">香味太大了，用着还不错</div>
            		</li>
            	</ul>
			</div>
		</div>
		<div class="detail-list">
			<ul>
				<li class="active">图文详情</li>
				<li>服务承诺</li>
				<li>保税特色</li>
			</ul>
			<div class="detail-ct">
				<div class="detail-content detail-special">
					<dl>
						<dt>产品展示</dt>
						<dd>美美固然重要，但安心仍是头一位！继水光面膜之后，韩国JAYJUN医院又一力作！水光植物干细胞面膜面世啦！想要拥有“水光肌”，不打针不麻醉，只需敷上这款面膜就让你的肌肤重返18岁！面膜中富含植物干细胞成分和水光针精华原液，强强联合，有效增加肌肤再生能力，并且将美白修护一定进行到底！浓浓的透明质酸精华更是给肌肤喝饱水，填平你所有的岁月痕迹！</dd>
						<div class="layout-3">
							<span class="img"></span>
							<span class="img"></span>
							<span class="img"></span>
						</div>
						<dt>特别之处</dt>
						<dd>韩国JAYJUN水光植物干细胞面膜由首尔JAYJUN整形外科出品，将千元玻尿酸+水光针+植物干细胞用于一片面膜！头一步高浓度玻尿酸精华补水，第二步水光精华+植物干细胞精华焕白，安安心全的让你轻松拥有婴儿肌！
精华：具有天然的保湿因子，有很好的保湿作用，可以结合大量水分提高皮肤弹力，改善皱纹的同时为肌肤进行深层滋养和修护。
面膜：含有真正的植物细胞，采用新技术生产，保留植物细胞的原型，给肌肤带来新生童颜，天然植物纤维材质，令面膜更贴服修护全脸，更好吸收再生精华。</dd>
						<div class="layout-2">
							<span class="img"></span>
							<span class="img"></span>
							<span class="img"></span>
							<span class="img"></span>
						</div>
						<dt>使用方法</dt>
						<dd>1.打开营养精华，将精华均匀涂抹于面部；
2.打开面膜，调整好面膜后均与敷于面部，约20-30分钟即可，将剩余精华液轻拍至面部，使其深入吸收，可以作为平时的基础保养。</dd>
						<dt>注意事项</dt>
						<dd>1.产品成分各有不同，请测试后再使用；
2.具体期限以商品标示期限为准；
3.商品均为实物拍摄，因拍摄中会受到光线、环境等无法控制的影响，包括显示设置、角度等问题，不免会有色差，请以实物为准，请您谅解！</dd>
					</dl>
				</div>
				<dl class="more-property">
					<dt>产品规格</dt>
					<dd>
						<span class="prop-name">品       名</span>
						<span class="prop-value">[韩国JAYJUN]水光植物干细胞面膜</span>
					</dd>
					<dd>
						<span class="prop-name">保质期限</span>
						<span class="prop-value">36个月</span>
					</dd>
					<dd>
						<span class="prop-name">储藏方式</span>
						<span class="prop-value">阴凉避光储存</span>
					</dd>
					<dd>
						<span class="prop-name">生产日期</span>
						<span class="prop-value">见商品外包装</span>
					</dd>
					<dd>
						<span class="prop-name">规       格</span>
						<span class="prop-value">10片/盒</span>
					</dd>
					<dd>
						<span class="prop-name">产品功效</span>
						<span class="prop-value">补水保湿</span>
					</dd>
				</dl>
				<dl class="consumer-notice">
					<dt>
						<span class="text">消费者告知书</span>
					</dt>
					<dd>尊敬的客户，您好!
						<div class="line-space"></div>
						在您选购境外商品前，麻烦您仔细阅读此文，同意本文所告知内容后再进行下单购买：
						<div class="line-space"></div>
						1.您在本（公司）网站上购买的境外商品为产地直销商品，仅限个人自用不得进行再销售，商品本身可能无中文标签，您可以查看网站的翻译或者在线联系我们的客服。
						<div class="line-space"></div>
						2.您购买的境外商品适用的品质、健康、标识等项目使用标准符合原产国使用标准，但是可能与我国标准有所不同，所以在使用过程中由此可能产生的危害或损失以及其他风险，将由您个人承担。
						<div class="line-space"></div>
						3.您在本（公司）网站上购买达令的境外商品时，自动视为由达令代您向海关进行申报和代收代缴税款。
					</dd>
				</dl>
				<div class="advertisement">
					<img src="http://img.cdn.daling.com/data/files/mobile/2018/01/15/15159887027740.png" alt="">
				</div>
				<div class="recommend">
					<p class="title">同类热销商品推荐</p>
					<ul>
						<li>
							<span class="cover"></span>
							<div class="name">日本·30枚重塑光弹肌</div>
							<div class="desc">[Kose]KOSE30回抽取式Q10紧致面膜</div>
							<div class="price">
								<span class="price-prefix">￥</span>72.00
							</div>
							<div class="cart">
								<i class="fa fa-shopping-cart"></i>
							</div>
						</li>
						<li>
							<span class="cover"></span>
							<div class="name">日本·30枚重塑光弹肌</div>
							<div class="desc">[Kose]KOSE30回抽取式Q10紧致面膜</div>
							<div class="price">
								<span class="price-prefix">￥</span>72.00
							</div>
							<div class="cart">
								<i class="fa fa-shopping-cart"></i>
							</div>
						</li>
						<li>
							<span class="cover"></span>
							<div class="name">日本·30枚重塑光弹肌</div>
							<div class="desc">[Kose]KOSE30回抽取式Q10紧致面膜</div>
							<div class="price">
								<span class="price-prefix">￥</span>72.00
							</div>
							<div class="cart">
								<i class="fa fa-shopping-cart"></i>
							</div>
						</li>
						<li>
							<span class="cover"></span>
							<div class="name">日本·30枚重塑光弹肌</div>
							<div class="desc">[Kose]KOSE30回抽取式Q10紧致面膜</div>
							<div class="price">
								<span class="price-prefix">￥</span>72.00
							</div>
							<div class="cart">
								<i class="fa fa-shopping-cart"></i>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="detail-bar">
			<i class="fa fa-shopping-cart"></i>
			<span class="buy-btn">立即购买</span>
			<span class="cart-btn">加入购物车</span>
		</div>
		<div class="menu">
			<ul>
				<li><i></i>达令首页</li>
				<li><i></i>达令首页</li>
				<li><i></i>达令首页</li>
				<li><i></i>达令首页</li>
				<li><i></i>达令首页</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'app-detail',
		props:["detailID"],
		data:function(){
			return {
				goods:{}
			}
		},
		methods:{
			getDetail(){
				let that = this
				axios.get('http://localhost:4000/dl/api/goods/detail?goods_id='+this.detailID,{
					params:{_:Date.now()}
				}).then(function(res){
					that.goods = res.data.data
					//console.log(that.goods)
				})
			}
		},
		created(){
			this.getDetail()
		}
	}
</script>

<style>
	
</style>
