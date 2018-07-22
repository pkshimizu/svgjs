import React, { Component } from 'react';
import './App.css';
import SVG from 'svg.js';

const initMoveSample = () => {
  const area = SVG('move').size(300, 300);
  const rect = area.rect(100, 100).attr({fill: '#8c0'});
  rect.animate().move(150, 150).loop();
};
const initScaleSample = () => {
  const area = SVG('scale').size(300, 300);
  const rect1 = area.rect(100, 100).attr({fill: '#8c0'});
  rect1.animate().size(150, 150).loop();
  const rect2 = area.rect(100, 100).move(200, 0).attr({fill: '#8c0'});
  rect2.animate().size(50, 50).loop();
};
const initTransparencySample = () => {
  const area = SVG('transparency').size(300, 300);
  const rect1 = area.rect(100, 100).attr({fill: '#8c0', 'opacity': '0.0'});
  rect1.animate().attr({'opacity': '1.0'}).loop();
  const rect2 = area.rect(100, 100).move(200, 0).attr({fill: '#8c0'});
  rect2.animate().attr({'opacity': '0.0'}).loop();
};
const initRotationSample = () => {
  const area = SVG('rotation').size(300, 300);
  const rect1 = area.rect(100, 100).move(50, 50).attr({fill: '#8c0'});
  rect1.animate().rotate(180).loop();
};
const initTextColorSample = () => {
  const area = SVG('text-color').size(300, 300);
  const text = area.text('Sample Text / サンプルテキスト').font({size: '32px'});
  text.animate().font({fill: '#8c0'}).loop();
};
const initArrowSample = () => {
  const area = SVG('arrow').size(300, 300);
  const line = area.polyline('0,0 100,0').fill('none').stroke({ color: '#8c0', width: 4, linecap: 'round', linejoin: 'round' });
  line.animate().plot('0,0 200,0')
    .animate().plot('0,0 200,0 200,100')
    .animate().plot('0,0 200,0 200,100 150,100').loop(3, true);
};
const initBalloonSample = () => {
  const area = SVG('balloon').size(300, 300);
  const balloon = area.polygon('0,50 50,50 75,30 100,50 200,50 200,100 0,100').fill('none').stroke({ color: '#8c0', width: 4, linecap: 'round', linejoin: 'round' });
  balloon.animate().plot('0,50 100,50 125,30 150,50 200,50 200,100 0,100').loop();
};

const initShapeSample = () => {
  const area = SVG('shape').size(700, 300);
  const rect = area.rect(200, 100).attr({fill: '#8c0'});
  rect.animate().size(100, 200).loop();
  const ellipse = area.ellipse(200, 100).move(250, 50).attr({fill: '#8c0'});
  ellipse.animate().size(100, 200).loop();
  const triangle = area.polygon('500,100 600,0 700,100').attr({fill: '#8c0'});
  triangle.animate().plot('500,100 550,0 600,100').loop();
};
const initParaparaSample = () => {
  const area = SVG('parapara').size(300, 300);
  const image = area.rect(300, 300).fill('/img1.jpg');
  image.animate().fill('/img2.jpg');
  image.animate().fill('/img3.jpg');
};

class App extends Component {
  componentDidMount() {
    initMoveSample();
    initScaleSample();
    initTransparencySample();
    initRotationSample();
    initTextColorSample();
    initArrowSample();
    initBalloonSample();
    initShapeSample();
    initParaparaSample();
  }
  render() {
    return (
      <div className="App">
        <h2>位置変化</h2>
        <div id={"move"}/>
        <h2>スケール変化</h2>
        <div id={"scale"}/>
        <h2>透明度変化</h2>
        <div id={"transparency"}/>
        <h2>回転</h2>
        <div id={"rotation"}/>
        <h2>テキスト色変化</h2>
        <div id={"text-color"}/>
        <h2>ページ切り替え</h2>
        <div>画面遷移 or コンポーネント切り替えで実現</div>
        <h2>矢印の変形</h2>
        <div id={"arrow"}/>
        <h2>吹き出しの表示</h2>
        <div id={"balloon"}/>
        <h2>図形の描画・変形</h2>
        <div id={"shape"}/>
        <h2>パラパラ漫画</h2>
        <div id={"parapara"}/>
      </div>
    );
  }
}

export default App;
