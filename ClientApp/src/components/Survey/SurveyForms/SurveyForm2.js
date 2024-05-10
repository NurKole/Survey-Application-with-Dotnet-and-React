import React, { useState } from 'react';
import './Form.css'; // CSS dosyasını içe aktar

const PersonalityForm = () => {
  // State'leri tanımla
  const [gender, setGender] = useState('');
  const [vacationType, setVacationType] = useState('');
  const [pets, setPets] = useState([]);
  const [hobbies, setHobbies] = useState('');

  // Form gönderildiğinde bu fonksiyonu çağır
  const handleSubmit = (event) => {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önle

    // Form verilerini kullan veya başka bir yere gönder
    console.log('Cinsiyetiniz nedir?', gender);
    console.log('Hangi tatil türünü tercih edersiniz?', vacationType);
    console.log('Bugüne kadar hiç evcil hayvanınız oldu mu, hangileri?', pets);
    console.log('Hobileriniz nelerdir? Şimdiye kadar neler yaptınız?', hobbies);

    // Formu sıfırla
    setGender('');
    setVacationType('');
    setPets([]);
    setHobbies('');
  };

  return (
    <div className="form-container">
      <h2>Kişilik Formu</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* 1. Soru: Radio button */}
        <div className="form-group">
          <p>Cinsiyetiniz nedir?</p>
          <label>
            <input
              type="radio"
              value="Erkek"
              checked={gender === 'Erkek'}
              onChange={(e) => setGender(e.target.value)}
            />
            Erkek
          </label>
          <label>
            <input
              type="radio"
              value="Kadın"
              checked={gender === 'Kadın'}
              onChange={(e) => setGender(e.target.value)}
            />
            Kadın
          </label>
        </div>

        {/* 2. Soru: Dropdown */}
        <div className="form-group">
          <label>Hangi tatil türünü tercih edersiniz?</label>
          <select value={vacationType} onChange={(e) => setVacationType(e.target.value)}>
            <option value="">Seçiniz</option>
            <option value="Kış tatili">Kış tatili</option>
            <option value="Yaz tatili">Yaz tatili</option>
            <option value="Kültür/şehir tatili">Kültür/şehir tatili</option>
            <option value="Orman/kamp tatili">Orman/kamp tatili</option>
          </select>
        </div>

        {/* 3. Soru: Checkbox */}
        <div className="form-group">
          <p>Bugüne kadar hiç evcil hayvanınız oldu mu, hangileri?</p>
          <label>
            <input
              type="checkbox"
              value="Olmadı"
              checked={pets.includes('Olmadı')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setPets((prevPets) =>
                  isChecked ? [...prevPets, e.target.value] : prevPets.filter((pet) => pet !== e.target.value)
                );
              }}
            />
            Olmadı
          </label>
          <label>
            <input
              type="checkbox"
              value="Kedi"
              checked={pets.includes('Kedi')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setPets((prevPets) =>
                  isChecked ? [...prevPets, e.target.value] : prevPets.filter((pet) => pet !== e.target.value)
                );
              }}
            />
            Kedi
          </label>
          <label>
            <input
              type="checkbox"
              value="Köpek"
              checked={pets.includes('Köpek')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setPets((prevPets) =>
                  isChecked ? [...prevPets, e.target.value] : prevPets.filter((pet) => pet !== e.target.value)
                );
              }}
            />
            Köpek
          </label>
          
          <label>
            <input
              type="checkbox"
              value="Kuş"
              checked={pets.includes('Kuş')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setPets((prevPets) =>
                  isChecked ? [...prevPets, e.target.value] : prevPets.filter((pet) => pet !== e.target.value)
                );
              }}
            />
            Kuş
          </label>
          <label>
            <input
              type="checkbox"
              value="Balık"
              checked={pets.includes('Balık')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setPets((prevPets) =>
                  isChecked ? [...prevPets, e.target.value] : prevPets.filter((pet) => pet !== e.target.value)
                );
              }}
            />
            Balık
          </label>
          <label>
            <input
              type="checkbox"
              value="Hamster"
              checked={pets.includes('Hamster')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setPets((prevPets) =>
                  isChecked ? [...prevPets, e.target.value] : prevPets.filter((pet) => pet !== e.target.value)
                );
              }}
            />
            Hamster
          </label>
          <label>
            <input
              type="checkbox"
              value="At"
              checked={pets.includes('At')}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setPets((prevPets) =>
                  isChecked ? [...prevPets, e.target.value] : prevPets.filter((pet) => pet !== e.target.value)
                );
              }}
            />
            At
          </label>
        </div>

        {/* 4. Soru: Textbox */}
        <div className="form-group">
          <label htmlFor="hobbies">Hobileriniz nelerdir? Şimdiye kadar neler yaptınız?</label>
          <textarea
            id="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </div>

        {/* Gönder Butonu */}
        <button type="submit" className="submit-button">Gönder</button>
      </form>
    </div>
  );
};

export default PersonalityForm;
