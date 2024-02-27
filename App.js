import React, { useState } from 'react'
import './App.css';
import Sonuc from './Sonuc';

function App() {

  const [cins, setCins] = useState('Erkek')
  const [sonuc, setSonuc] = useState('')
  const [items, setItems] = useState(['Kırmızı Aura', 'Mor Aura', 'Beyaz Aura', 'Mavi Aura']);
  const [aura, setAura] = useState(["Kırmızı aura; yüksek enerji anlamına gelir. Güçlü iradeli, basit, enerjik, güçlü, iyi topraklanmış, çalışkan, takım oyuncusu, aktif, rekabetçi, gerçekçi, dürtüsel ve değişim isteğiyle dolup taşan bir karakteriniz var. Bir sağlık sorunu ortaya çıkarsa, kaygıdan kaynaklanacaktır. Kırmızı auralar, “düşünceleri eylemlere koymakta hızlı olan” ve “kullanım kılavuzlarını okumayan” birini gösterir. Yedi çakranın her biri de bir renkle ilişkilidir, bu nedenle çakra renklerini anlamak auraları deşifre ederken yardımcı olur. Örneğin, kırmızı kök çakra ile ilgilidir ve iyi miktarda kırmızı görüyorsanız auranızda, kök çakranızın kararlı ve engelsiz olduğu anlamına gelir.", "Mor auralar çok dikkat çeker çünkü bu, güçlü sezgi ve duyarlılık, büyük zihinsel derinliklerle ilişkili renktir. Mor, sezgilerle ilgilenen üçüncü göz çakrasının rengidir. Auranızda mor varsa, bazı psişik, empatik veya sezgisel yetenekleriniz olabilir.", "Kişinin aurasında beyaz konsantrasyonlarını görmek biraz daha nadirdir. Ama eğer auranızda beyaz renk görüyorsanız bu durum çok hızlı bir zihnin ve mükemmeliyetçilik ile sinir enerjisi eğiliminin işareti olabilir. Beyaz, bizi evrensel enerjiye ve birliğe bağlayan taç çakra ile bağlantılıdır. Bunu auranızda görmek, kendinizden daha büyük bir şeyle güçlü bir bağlantı duygunuz olduğu anlamına gelir.", "Birinin aurasındaki mavi, güçlü bir zihnin işaretidir. Uzmanlar, auralarında çok fazla mavi olan insanların “zihinsel alemlerde daha fazla faaliyet gösterdiğini” ve kendilerini topraklamayı hatırlamaları gerektiğini söylüyor. Ama aynı zamanda çok anlayışlı olabilirler. Mavi, ifadeyi ve gerçeği yöneten boğaz çakrasının rengidir. Boğaz çakranız açık ve akan haldeyse, auranızdaki mavi; içinde tuttuğunuz içgörülerin dışa doğru ifade edileceğini gösterir."]);
  const [baslik, setBaslik] = useState(null);
  const [icerik, setIcerik] = useState(null);

  const auraOlc = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * items.length);
    setBaslik(items[randomIndex]);
    setIcerik(aura[randomIndex]);
    setSonuc(true)
  }



  return (
    <section className="container-fluid my-5">
      {
        sonuc ?
          <Sonuc cins={cins} baslik={baslik} aura={icerik} />
          :
          <div className='container main-container mx-auto'>
            <div className='flex justify-content-center align-items-center'>
              <form>
                <div className="form-group mt-3">
                  <label htmlFor='ad-soyad'>Adınız - Soyadınız</label>
                  <input type="text" id='ad-soyad' className="form-control" />
                </div>
                <label>Cinsiyetiniz</label>
                <select className="form-control" onChange={(e) => setCins(e.target.value)}>
                  <option selected>Erkek</option>
                  <option>Kadın</option>
                  <option disabled>Cinsiyetsizim</option>
                </select>
                <label className='mt-3'>Yaşınız</label>
                <select className="form-control">
                  <option selected>18-24</option>
                  <option>25-30</option>
                  <option>31-39</option>
                  <option>40-49</option>
                  <option>50-64</option>
                  <option>65+</option>
                </select>
                <label className='mt-3'>Favori lezzetiniz nedir?</label>
                <select className="form-control">
                  <option selected>Tatlı</option>
                  <option>Ekşi/Tuzlu</option>
                  <option>Acı</option>
                  <option>Diğer</option>
                </select>
                <label className='mt-3'>Hangi hayvan kişiliğinizi yansıtıyor?</label>
                <select className="form-control">
                  <option selected>Yavaş ve kendinden emin bir kaplumbağa</option>
                  <option>Sadık bir köpek yavrusu</option>
                  <option>Öfkeli bir aslan</option>
                  <option>Zarif ve kırılgan bir kuğu</option>
                </select>
                <label className='mt-3'>Hangi his en mutlu olduğunuz zamanı tanımlıyor?</label>
                <select className="form-control">
                  <option selected>Başarı ya da bir şeyi kazanma anı</option>
                  <option>Doğada olmak</option>
                  <option>Gülmek</option>
                  <option>Romantizm</option>
                </select>
                <label className='mt-3'>Bir element seçin</label>
                <select className="form-control">
                  <option selected>Ateş</option>
                  <option>Toprak</option>
                  <option>Su</option>
                  <option>Hava</option>
                </select>
                <div className="form-group mt-3">
                  <label htmlFor="hayat">Hayatınızı puanlayın.</label>
                  <input type="range" className="form-control-range" id="hayat" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="his">Son zamanlarda neler hissettiğinizi kısaca yazınız.</label>
                  <textarea className="form-control" id="his" rows="5" placeholder='Son zamanlar geceleri iyi hissediyorum.'></textarea>
                </div>
                <div className='text-center'>
                  <button className='btn w-50 btn-danger' onClick={auraOlc}>AURA ÖLÇ</button>
                </div>
              </form>
            </div>
          </div>
      }
      <a href='https://linkedin.com/in/taskinygt' className='text-center mt-3' target='_blank' rel='noreferrer'>Geliştirici</a>
    </section>
  );
}

export default App;
