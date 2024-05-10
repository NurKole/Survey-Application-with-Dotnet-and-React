import React, { useState } from 'react';


const InterviewForm = () => {
  // State'leri tanımla
  const [heardOfCompany, setHeardOfCompany] = useState('');
  const [desiredField, setDesiredField] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [aboutYourself, setAboutYourself] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önle
  
    // Form verilerini bir nesneye dönüştür
    const formData = {
      heardOfCompany,
      desiredField,
      technologies,
      aboutYourself,
    };
  
    // DotNet API'sine POST isteği gönder
    const response = await fetch('api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    // Başarılı bir şekilde gönderildi mi kontrol et
    if (response.ok) {
      // Formu sıfırla
      setHeardOfCompany('');
      setDesiredField('');
      setTechnologies([]);
      setAboutYourself('');
    } else {
      // Hata durumunda bir şeyler yap
      console.error('Form gönderilemedi:', response.statusText);
    }
  };

  return (
    <div>
      <h2>Mülakat Formu</h2>
   
      <form onSubmit={handleSubmit}>
        {/* 1. Soru: Radio button */}
        <div>
          <p>Su bilgi teknolojileri şirketini daha önce duydun mu?</p>
          <label>
            <input
              type="radio"
              value="Evet"
              checked={heardOfCompany === 'Evet'}
              onChange={(e) => setHeardOfCompany(e.target.value)}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="Hayır"
              checked={heardOfCompany === 'Hayır'}
              onChange={(e) => setHeardOfCompany(e.target.value)}
            />
            Hayır
          </label>
        </div>

        {/* 2. Soru: Dropdown */}
        <div>
          <label>Hangi alanda çalışmak istiyorsunuz?</label>
          <select value={desiredField} onChange={(e) => setDesiredField(e.target.value)}>
            <option value="">Seçiniz</option>
            <option value="Front-end geliştirici">Front-end geliştirici</option>
            <option value="Backend geliştirici">Backend geliştirici</option>
            <option value="Full stack geliştirici">Full stack geliştirici</option>
            <option value="İş Analisti">İş Analisti</option>
            <option value="Elektrik eloktronik mühendisi">Elektrik eloktronik mühendisi</option>
          </select>
        </div>

        {/* 3. Soru: Checkbox */}
        <div>
          <p>Hangi teknolojileri/araçları kullanabiliyorsunuz?</p>
          <label>
            <input
              type="checkbox"
              value="ASP.Net"
              checked={technologies.includes('ASP.Net')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setTechnologies((prevTechnologies) =>
                  isChecked ? [...prevTechnologies, e.target.value] : prevTechnologies.filter((t) => t !== e.target.value)
                );
              }}
            />
            ASP.Net
          </label>
          <label>
            <input
              type="checkbox"
              value="React"
              checked={technologies.includes('React')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setTechnologies((prevTechnologies) =>
                  isChecked ? [...prevTechnologies, e.target.value] : prevTechnologies.filter((t) => t !== e.target.value)
                );
              }}
            />
            React
          </label>
          <label>
            <input
              type="checkbox"
              value="Mssql"
              checked={technologies.includes('Mssql')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setTechnologies((prevTechnologies) =>
                  isChecked ? [...prevTechnologies, e.target.value] : prevTechnologies.filter((t) => t !== e.target.value)
                );
              }}
            />
            Mssql
          </label>
          <label>
            <input
              type="checkbox"
              value="Angular"
              checked={technologies.includes('Angular')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setTechnologies((prevTechnologies) =>
                  isChecked ? [...prevTechnologies, e.target.value] : prevTechnologies.filter((t) => t !== e.target.value)
                );
              }}
            />
            Angular
          </label>
          <label>
            <input
              type="checkbox"
              value="Unity"
              checked={technologies.includes('Unity')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setTechnologies((prevTechnologies) =>
                  isChecked ? [...prevTechnologies, e.target.value] : prevTechnologies.filter((t) => t !== e.target.value)
                );
              }}
            />
            Unity
          </label>
          <label>
            <input
              type="checkbox"
              value="VS_Code"
              checked={technologies.includes('VS_Code')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setTechnologies((prevTechnologies) =>
                  isChecked ? [...prevTechnologies, e.target.value] : prevTechnologies.filter((t) => t !== e.target.value)
                );
              }}
            />
            VS Code
          </label>
          {/* Diğer checkboxlar için aynı yapısı kullanabilirsin */}
        </div>

        {/* 4. Soru: Textbox */}
        <div>
          <label htmlFor="aboutYourself">Kendinizi kısaca tanıtır mısınız?</label>
          <textarea
            id="aboutYourself"
            value={aboutYourself}
            onChange={(e) => setAboutYourself(e.target.value)}
          />
        </div>

        {/* Gönder Butonu */}
        <button onClick={handleSubmit} type="submit">Gönder</button>
      </form>
    </div>

  );
};

export default InterviewForm;
