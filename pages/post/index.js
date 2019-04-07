import Layout from '../components/layout'
import './index.less'
import  React from 'react'
const  c=` <h2 class="heading" data-id="heading-0">前言</h2>
<p>图片是由连续的点信息组成，每个点信息包含四个长度即rgba信息，通过遍历配合处理函数实现对点个数的判断。</p>
<p></p><figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/4/1/169d9792c4c17e97?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="500" data-height="500" src="https://user-gold-cdn.xitu.io/2019/4/1/169d9792c4c17e97?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure><p></p>
<h2 class="heading" data-id="heading-1">实现思路</h2>
<p>本例子采用png格式图片，只需要判该点透明度（opacity）是否为0即可确定是否为小球上一点，如果不为0，判断上下左右方向的点是否透明度为0，不为0递归该结果，并且将该点的rgba信息置为0；结束后开始下一个主循环并计数，直至循环结束。</p>
<h2 class="heading" data-id="heading-2">具体步骤</h2>
<ol>
<li>创建canvas对象，加载目标图片，使用canvas的<em>drawImage</em>方法将该图片对象写入canvas中；参数为图片对象,贴图起点横坐标,贴图起点纵坐标，贴图宽度，贴图高度。</li>
</ol>
<pre><code class="hljs javascript copyable" lang="javascript">    <span class="hljs-keyword">var</span> canvas = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'canvas'</span>),
    <span class="hljs-keyword">var</span> ctx = canvas.getContext(<span class="hljs-string">'2d'</span>);
    ctx.drawImage(imgObj, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,imgWidth,imgHeight);
<span class="copy-code-btn">复制代码</span></code></pre><ol start="2">
<li>获取图片的相关信息canvas的<em>getImageData</em>方法，需要使用图片上各点的rgba信息；参数为采点起始横坐标,采点起始纵坐标，采点宽度，采点高度。</li>
</ol>
<pre><code class="hljs javascript copyable" lang="javascript">    <span class="hljs-keyword">var</span> imageData = ctx.getImageData(<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,width,height);
    <span class="hljs-comment">//改写imageData.data信息实现点的计数</span>
<span class="copy-code-btn">复制代码</span></code></pre><ol start="3">
<li>遍历图片的点信息<em>imageData.data</em>，四个点为一组增长条件为i+4，当透明度不为0时调用处理函数，并且终止循环（终止循环，防止短时间内循环次数过多造成内存溢出），循环条件为<em>numberStart&lt;imageData.data.length-1</em> 结束，number为最终的点数量;numberStart为上次循环结束时点的索引值，number为点的数量，judgeZero为处理函数。</li>
</ol>
<pre><code class="hljs javascript copyable" lang="javascript">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">repeateData</span>(<span class="hljs-params"></span>)</span>{
        <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=numberStart;i&lt;imageData.data.length;i+=<span class="hljs-number">4</span>){
            numberStart+=<span class="hljs-number">4</span>;
            <span class="hljs-keyword">var</span> a = imageData.data[i+<span class="hljs-number">3</span>];
            <span class="hljs-keyword">if</span>(a != <span class="hljs-number">0</span>) {
                judgeZero(i,number);
                <span class="hljs-keyword">break</span>;
            }
        }
        <span class="hljs-keyword">if</span>(numberStart&lt;imageData.data.length<span class="hljs-number">-1</span>){
            repeateData()
        }<span class="hljs-keyword">else</span>{
            <span class="hljs-built_in">console</span>.log(number);
        }
    }
<span class="copy-code-btn">复制代码</span></code></pre><ol start="4">
<li>点的处理函数，根据图片的宽和高计算出点的坐标(x,y)，并且计算出该点上下左右四个点的透明度信息。</li>
</ol>
<pre><code class="hljs javascript copyable" lang="javascript">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">judgeZero</span>(<span class="hljs-params">index</span>)</span>{
        number++;
        clearPoints(index);
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">clearPoints</span>(<span class="hljs-params">index</span>)</span>{
        <span class="hljs-keyword">var</span> x = (index/<span class="hljs-number">4</span>)%width,
            y = <span class="hljs-built_in">Math</span>.floor(index/<span class="hljs-number">4</span>/width);

        <span class="hljs-keyword">var</span> up = (x+(y<span class="hljs-number">-1</span>)*width)*<span class="hljs-number">4</span>,
            down = (x+(y+<span class="hljs-number">1</span>)*width)*<span class="hljs-number">4</span>,
            right = (x+<span class="hljs-number">1</span>+y*width)*<span class="hljs-number">4</span>,
            left = (x<span class="hljs-number">-1</span>+y*width)*<span class="hljs-number">4</span>;

        <span class="hljs-keyword">var</span> uA = imageData.data[up+<span class="hljs-number">3</span>],
            bA = imageData.data[down+<span class="hljs-number">3</span>],
            rA = imageData.data[right+<span class="hljs-number">3</span>],
            lA = imageData.data[left+<span class="hljs-number">3</span>];
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">clearRgb</span>(<span class="hljs-params">index</span>)</span>{
        imageData.data[index] = <span class="hljs-number">0</span>;
        imageData.data[index+<span class="hljs-number">1</span>] = <span class="hljs-number">0</span>;
        imageData.data[index+<span class="hljs-number">2</span>] = <span class="hljs-number">0</span>;
        imageData.data[index+<span class="hljs-number">3</span>] = <span class="hljs-number">0</span>;
    }
<span class="copy-code-btn">复制代码</span></code></pre><ol start="5">
<li>判断四个方向的透明度是否为0，如果为0继续调用，并且擦出该点信息。</li>
</ol>
<pre><code class="hljs bash copyable" lang="bash">    <span class="hljs-keyword">if</span>(uA != 0){
        clearRgb(up);
        clearPoints(up);
    }
    <span class="hljs-keyword">if</span>(bA != 0){
        clearRgb(down);
        clearPoints(down);
    }
    <span class="hljs-keyword">if</span>(rA != 0){
        clearRgb(right);
        clearPoints(right);
    }
    <span class="hljs-keyword">if</span>(lA != 0){
        clearRgb(left);
        clearPoints(left);
    }
<span class="copy-code-btn">复制代码</span></code></pre><ol start="6">
<li>将透明度不为0的所有点信息置为0，之后该点不会对主循环的判断有影响。</li>
</ol>
<pre><code class="hljs javascript copyable" lang="javascript">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">clearRgb</span>(<span class="hljs-params">index</span>)</span>{
        imageData.data[index] = <span class="hljs-number">0</span>;
        imageData.data[index+<span class="hljs-number">1</span>] = <span class="hljs-number">0</span>;
        imageData.data[index+<span class="hljs-number">2</span>] = <span class="hljs-number">0</span>;
        imageData.data[index+<span class="hljs-number">3</span>] = <span class="hljs-number">0</span>;
    }
<span class="copy-code-btn">复制代码</span></code></pre><ol start="7">
<li>执行4，5，6步骤直至所有点rgba信息都被置为0，主循环继续，最后可得到数量。</li>
</ol>
<h2 class="heading" data-id="heading-3">总结</h2>
<p>主要的原理为获取球上的一点，通过上下左右递归来判断连续点并消除点信息，至该点的信息已在imageData.data中全部抹去，此过程记为1个点，主循环继续；图片为png格式，点的类型不限于圆形；该方法仅供参考。</p>
`;
export default class extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Layout>
                <main className="container main-container">
                        <div className="main-area article-area shadow">
                            <article    className="article" >

                                <div  className="author-info-block">
                                    <a  href="/user/5c83e036f265da2da23d5fce" target="_blank" rel="" className="avatar-link">
                                        <div   class="lazy avatar avatar loaded" style={{backgroundImage: "url('https://user-gold-cdn.xitu.io/2019/3/31/169d2d4322aefd11?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1')"}}>

                                        </div>
                                    </a><div  className="author-info-box">
                                    <a  href="/user/5c83e036f265da2da23d5fce" target="_blank" rel="" className="username ellipsis">sXin</a>
                                    <div  className="meta-box"><time  datetime="2019-04-01T15:49:12.311Z" title="Mon Apr 01 2019 23:49:12 GMT+0800 (中国标准时间)" class="time">2019年04月01日</time>
                                        <span  className="views-count">阅读 681</span>
                                    </div>
                                </div>
                                    <button   className="follow-button follow">关注</button>
                                </div>

                                <h1  className="article-title">js计算图片内点个数</h1>
                                <div className="article-content" dangerouslySetInnerHTML={{__html: c}}>
                                 </div>
                            </article>
                        </div>
                        <div className="sidebar sidebar">
                        
                        </div>
                    <div className="article-suspended-panel article-suspended-panel">

                    </div>
                </main>
            </Layout>
        )
    }
}
