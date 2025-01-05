import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { pizza, toppings, sizes, doughOptions } from './Data';
import './OrderPizza.css';

const OrderPizza = ({
  goToSuccess
}) => {
  const initialFormState = {
    name: '',
    size: '',
    selectedToppings: [],
    notes: '',
    selectedQuantity: 1,
    dough: '',
    totalPrice: 0,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  // Sayfa yüklendiğinde seçimleri sıfırlamak için useEffect kullanın
  useEffect(() => {
    // Sayfa yenilendiğinde tüm form verileri sıfırlanır
    setFormData(initialFormState);
  }, []);  // Burada boş array ([]) vererek sadece sayfa yüklendiğinde çalışmasını sağlıyoruz.

  // Total price hesaplama
  useEffect(() => {
    const calculatedPrice = (parseFloat(pizza.price.replace('₺', '')) * formData.selectedQuantity + formData.selectedToppings.length * 5).toFixed(2);
    setFormData((prevState) => ({ ...prevState, totalPrice: calculatedPrice }));
  }, [formData.selectedQuantity, formData.selectedToppings]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleToppingChange = (topping) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedToppings: prevState.selectedToppings.includes(topping)
        ? prevState.selectedToppings.filter((t) => t !== topping)
        : [...prevState.selectedToppings, topping],
    }));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, name: value }));

    if (value.length < 3) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "İsim en az 3 karakter olmalıdır." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, size, selectedToppings, totalPrice, selectedQuantity } = formData;
    
    // Form doğrulama
    const newErrors = {};
    if (name.length < 3) newErrors.name = "İsim en az 3 karakter olmalıdır.";
    if (!size) newErrors.size = "Boyut seçmelisiniz.";
    if (selectedToppings.length < 4 || selectedToppings.length > 10) newErrors.selectedToppings = "4 ile 10 arasında malzeme seçmelisiniz.";
    if (selectedQuantity < 1) newErrors.selectedQuantity = "Sipariş miktarı 1'den küçük olamaz.";

    // Eğer herhangi bir hata varsa, hataları göster
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Lütfen zorunlu alanları doldurun ve hataları düzeltin.');
      return;
    }

    const payload = {
      isim: name,
      boyut: size,
      malzemeler: selectedToppings,
      özel: formData.notes,
      totalPrice
    };

    try {
      const response = await axios.post('https://reqres.in/api/pizza', payload);
      toast.success('Siparişiniz başarıyla alındı!');
      setTimeout(() => {
        goToSuccess({
          pizzaName: pizza.name,
          selectedToppings,
          totalPrice: totalPrice + '₺'
        });
      }, 3000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Sipariş alırken bir hata oluştu.';
      toast.error(errorMessage);
    }
  };

  // Dinamik checkbox, radio ve select alanları için arrayler
  const sizeOptions = sizes.map((sizeOption) => ({
    label: sizeOption.label,
    value: sizeOption.id
  }));

  const doughOptionsList = doughOptions.map((option) => ({
    label: option.label,
    value: option.id
  }));

  const toppingOptions = toppings.map((topping) => ({
    label: topping,
    value: topping
  }));

  return (
    <Form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray rounded shadow-md">
      <div style={{ textAlign: 'center' }}>
        <h2 className="pizza-name">{pizza.name}</h2>
        <div className="pizza-info" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Fiyat: {pizza.price}</span>
          <span>Puan: {pizza.rate}</span>
          <span>Yorum: {pizza.comments}</span>
        </div>
        <p className="pizza-description">{pizza.description}</p>
      </div>

      <FormGroup>
        <Label for="name" className="text-[#292929]"><strong>İsim</strong></Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleNameChange}  // Validation function for name
          required
          className="border border-[#292929] rounded p-2"
        />
        {errors.name && <div className="error-message">{errors.name}</div>} {/* Display error message */}
      </FormGroup>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Boyut Seçimleri */}
        <FormGroup style={{ marginRight: '20px' }}>
          <Label className="text-[#292929]"><strong>Boyut Seç</strong></Label>
          <div>
            {sizeOptions.map((option) => (
              <label key={option.value} className="container">
                {option.label}
                <input
                  type="radio"
                  name="size"
                  value={option.value}
                  checked={formData.size === option.value}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
          {errors.size && <div className="error-message">{errors.size}</div>}
        </FormGroup>

        {/* Hamur Seçenekleri */}
        <FormGroup>
          <Label className="text-[#292929]"><strong>Hamur Kalınlığı</strong></Label>
          <select
            name="dough"
            value={formData.dough}
            onChange={handleChange}
            required
            className="border border-[#292929] rounded p-2"
          >
            <option value="">Seçin</option>
            {doughOptionsList.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </FormGroup>
      </div>

      {/* Malzemeler Seçimi */}
      <FormGroup>
        <Label><strong className="text-[#292929]">Ek Malzemeler</strong></Label>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {toppingOptions.map((option) => (
            <div key={option.value} style={{ width: '30%' }}>
              <Input
                type="checkbox"
                id={option.value}
                name="selectedToppings"
                checked={formData.selectedToppings.includes(option.value)}
                onChange={() => handleToppingChange(option.value)}
                className="mr-2"
              />
              <Label for={option.value} className="text-[#292929]">{option.label}</Label>
            </div>
          ))}
        </div>
        {errors.selectedToppings && <div className="error-message">{errors.selectedToppings}</div>}
      </FormGroup>

      {/* Notlar */}
      <FormGroup>
        <Label for="notes" className="text-[#292929]">Siparişinize eklemek istediğiniz bir not var mı?</Label>
        <Input
          type="textarea"
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="border border-[#292929] rounded p-2"
        />
      </FormGroup>

      {/* Sipariş Özeti */}
      <FormGroup>
        <Label className="text-[#292929]">Sipariş Özeti</Label>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="quantity-control">
            <button type="button" className="decrease" onClick={() => setFormData((prev) => ({ ...prev, selectedQuantity: Math.max(1, prev.selectedQuantity - 1) }))}>-</button>
            <span className="quantity border-box">{formData.selectedQuantity}</span>
            <button type="button" className="increase" onClick={() => setFormData((prev) => ({ ...prev, selectedQuantity: prev.selectedQuantity + 1 }))}>+</button>
          </div>
          {errors.selectedQuantity && <div className="error-message">{errors.selectedQuantity}</div>}
          <div className="summary-box">
            <h3>Sipariş Toplamı</h3>
            <p>Seçimler: <span className="selections">{pizza.name} + {formData.selectedToppings.join(', ')}</span></p>
            <p>Toplam: <span className="total" style={{ color: 'red' }}>
              {formData.totalPrice}₺
            </span></p>
            <button type="submit" className="order-button">SİPARİŞ VER</button>
          </div>
        </div>
      </FormGroup>
    </Form>
  );
};

export default OrderPizza;
